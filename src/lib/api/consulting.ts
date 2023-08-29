import api from '.'

export const getItem = () =>
    api
        .get('/api/inbound')
        .then((response) => response?.data)
        .catch((error) => {
            throw error
        })

export const searchItem = (placeName: string) =>
    api
        .get(`/api/inbound/search?placeName=${placeName}`)
        .then((response) => response?.data)
        .catch((error) => {
            throw error
        })

export const getDetailItem = (id: string) =>
    api
        .get(`/api/inbound/${id}`)
        .then((response) => response?.data)
        .catch((error) => {
            throw error
        })

export const postItem = (data: {
    inboundSource: string
    name: string
    phone: string
    placeName: string
    note: string
    agreement: true
}) =>
    api
        .post(`/api/inbound`, {
            data,
        })
        .then((response) => response?.data)
        .catch((error) => {
            throw error
        })

export const deleteItem = (id: number) =>
    api
        .delete(`/api/inbound/${id}`)
        .then((response) => response?.data)
        .catch((error) => {
            throw error
        })