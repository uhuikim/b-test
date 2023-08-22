import { APIError } from './errors'

export function checkFields<U extends string[]>(
    obj: unknown,
    requiredFieldNames: U,
): asserts obj is Record<U[number], unknown> {
    if (obj == null || typeof obj !== 'object') {
        throw new APIError(400, '요청 형식이 잘못되었습니다.')
    }

    return requiredFieldNames.forEach((name) => {
        if (!(name in obj)) {
            throw new APIError(400, `필요한 값이 존재하지 않습니다. required field : ${name}`)
        }
    })
}

export function randomBooleanWithProbability(probability: number) {
    if (probability < 0 || probability > 1) {
        throw new Error('확률은 0과 1 사이의 값이어야 합니다.')
    }

    return Math.random() < probability ? 0 : 1
}

export const toManyRequestChecker = (() => {
    let lastRequestTime: number | null = null
    const rateLimitMillisecond = 500

    return {
        get isToManyRequest() {
            const now = Date.now()
            return lastRequestTime !== null && now - lastRequestTime < rateLimitMillisecond
        },

        resetLastRequestTime() {
            lastRequestTime = Date.now()
        },
    }
})()

export const getDate = () => {
    const dateString = new Intl.DateTimeFormat('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    })
        .format(Date.now())
        .replace(/\s/g, '')
        .replace(/\./g, '-')
        .slice(0, 10)

    return dateString
}
