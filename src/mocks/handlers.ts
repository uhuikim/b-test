// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw'
import { Store } from './data'
import { checkFields, randomBooleanWithProbability, toManyRequestChecker } from './utils'

const mockStore = new Store()

const getItemList: Parameters<typeof rest.get>[1] = async (_, res, ctx) => {
    const randomNumber = randomBooleanWithProbability(0.7)

    const responseList = [
        res(ctx.delay(500), ctx.status(200), ctx.json(mockStore.getItemList())),
        res(
            ctx.delay(500),
            ctx.status(500),
            ctx.json({
                message: 'server error',
            }),
        ),
    ]

    return responseList[randomNumber]
}

export const createItem: Parameters<typeof rest.get>[1] = async (req, res, ctx) => {
    const { body } = req

    checkFields(body, ['inboundSource', 'name', 'phone', 'placeName', 'note', 'agreement'])

    const randomNumber = randomBooleanWithProbability(0.7)

    if (!randomNumber) {
        mockStore.createItem(body)
        return res(ctx.delay(3000), ctx.status(201), ctx.json({ createdId: mockStore.getListItemId() }))
    }

    return res(
        ctx.delay(3000),
        ctx.status(500),
        ctx.json({
            message: 'server error',
        }),
    )
}

export const getItem: Parameters<typeof rest.get>[1] = async (req, res, ctx) => {
    const invalidError = res(ctx.delay(300), ctx.status(400), ctx.json({ message: 'invalid value' }))
    if (req.params == null) return invalidError

    const findTargetId = Number(req.params.id)
    if (Number.isNaN(findTargetId)) return invalidError

    const result = mockStore.getItem(findTargetId)

    if (!result) return invalidError

    return res(ctx.delay(2000), ctx.status(200), ctx.json(result))
}

export const deleteItem: Parameters<typeof rest.get>[1] = async (req, res, ctx) => {
    const invalidError = res(ctx.delay(300), ctx.status(400), ctx.json({ message: 'invalid value' }))
    if (req.params == null) return invalidError

    const findTargetId = Number(req.params.id)
    if (Number.isNaN(findTargetId)) return invalidError

    mockStore.deleteItem(findTargetId)

    return res(ctx.delay(800), ctx.status(200), ctx.json({ deletedId: findTargetId }))
}

export const searchItem: Parameters<typeof rest.get>[1] = async (req, res, ctx) => {
    if (toManyRequestChecker.isToManyRequest) {
        return res(
            ctx.status(429),
            ctx.json({
                message: 'Too Many Request',
            }),
        )
    }

    toManyRequestChecker.resetLastRequestTime()

    const searchString = req.url.searchParams.get('placeName')?.toString() ?? ''

    const result = mockStore.searchItem(searchString)

    return res(ctx.status(200), ctx.json(result))
}

export const handlers = [
    rest.get('/api/inbound/search', searchItem),
    rest.get('/api/inbound/:id', getItem),
    rest.delete('/api/inbound/:id', deleteItem),
    rest.get('/api/inbound', getItemList),
    rest.post('/api/inbound', createItem),
]
