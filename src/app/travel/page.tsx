"use client";

import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import { ItemType } from "./ds/types"; // 导入 Item 类型
import "./index.css";

export default function App() {
    const [items, setItems] = useState<ItemType[]>([]); // 使用 Item 类型数组

    const handleAddItems = (item: ItemType) => {
        setItems((items) => [...items, item]);
    };

    const handleDeleteItem = (id: number) => {
        setItems((items) => items.filter((item) => item.id !== id));
    };

    const handleToggleItem = (id: number) => {
        setItems((items) =>
            items.map((item) =>
                item.id === id ? { ...item, packed: !item.packed } : item
            )
        );
    };

    const handleClearList = () => {
        const confirmed = window.confirm(
            "Are you sure you want to delete all items?"
        );

        if (confirmed) setItems([]);
    };

    return (
        <div className="app">
            <Logo />
            <Form onAddItems={handleAddItems} />
            <PackingList
                items={items}
                onDeleteItem={handleDeleteItem}
                onToggleItem={handleToggleItem}
                onClearList={handleClearList}
            />
            <Stats items={items} />
        </div>
    );
}