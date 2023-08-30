import { IFormInput } from 'components/Form/UploadForm'
import api from '.'

export const getItem = async () =>
    await api
        .get('/api/inbound')
        .then((response) => response?.data)
        .catch((error) => {
            throw error
        })

export const searchItem = async (query: string) =>
    await api
        .get(`/api/inbound/search?placeName=${query}`)
        .then((response) => response?.data)
        .catch((error) => {
            throw error
        })

export const getDetailItem = async (id: string) =>
    await api
        .get(`/api/inbound/${id}`)
        .then((response) => response?.data)
        .catch((error) => {
            throw error
        })

export const postItem = async (data: IFormInput) => {
    console.log(data)
    return await api
        .post(`/api/inbound`, { ...data })
        .then((response) => response?.data)
        .catch((error) => {
            throw error
        })
}

export const deleteItem = async (id: number) =>
    await api
        .delete(`/api/inbound/${id}`)
        .then((response) => response?.data)
        .catch((error) => {
            throw error
        })
