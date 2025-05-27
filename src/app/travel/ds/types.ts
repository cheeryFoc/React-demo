// types.ts

export interface ItemType {
    id: number
    description: string
    quantity: number
    packed: boolean
}

export interface FormProps {
    onAddItems: (item: ItemType) => void
}

export interface StatsProps {
    items: ItemType[]
}

export interface PackingListProp {
    items: ItemType[]
    onDeleteItem: (id: number) => void
    onToggleItem: (id: number) => void
    onClearList: () => void
}

export interface ItemProp {
    item: ItemType
    onDeleteItem: (id: number) => void
    onToggleItem: (id: number) => void
}
