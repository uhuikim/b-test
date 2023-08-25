import { getDate } from './utils'

export interface StoreItem {
    id: number

    inboundSource: string
    name: string
    phone: string
    placeName: string
    note: string

    createdAt: string
    agreement: true
}

export class Store {
    private store: StoreItem[] = [
        {
            id: 1,
            inboundSource: '카카오톡',
            name: '홍길동',
            phone: '010-1234-4321',
            placeName: '길동떡볶이',
            note: '테이블 수가 많습니다.',
            createdAt: '2023-01-02',
            agreement: true,
        },
        {
            id: 2,
            inboundSource: '홈페이지',
            name: '김로봇',
            phone: '010-4321-4321',
            placeName: '맛있는짜장면',
            note: '테이블 사이 길목이 좁습니다.',
            createdAt: '2023-01-03',
            agreement: true,
        },
    ]

    public getItemList() {
        return this.store
    }

    public getItem(id: number) {
        return this.store.find((item) => item.id === id)
    }

    public deleteItem(id: number) {
        const index = this.store.findIndex((item) => item.id === id)
        if (index > -1) this.store.splice(index, 1)
    }

    public getListItemId() {
        return this.store[this.store.length - 1].id
    }

    public createItem(item: Omit<StoreItem, 'id' | 'createdAt'>) {
        this.store.push({
            id: this.getListItemId() + 1,
            createdAt: getDate(),
            ...item,
        })
    }

    public searchItem(placeName: string) {
        if (placeName === '') return []
        return this.store.filter((item) => item.placeName.includes(placeName))
    }
}
