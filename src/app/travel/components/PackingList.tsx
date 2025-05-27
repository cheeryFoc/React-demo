import { useState } from "react";
import Item from "./Item";
import { ItemType, PackingListProp } from "../ds/types";

export default function PackingList({
    items,
    onDeleteItem,
    onToggleItem,
    onClearList,
}: PackingListProp) {
    const [sortBy, setSortBy] = useState("input");

    let sortedItems: ItemType[] = [];
    if (sortBy === "input") sortedItems = items;

    if (sortBy === "description")
        sortedItems = items
            .slice()
            .sort((a: ItemType, b: ItemType) => a.description.localeCompare(b.description));

    if (sortBy === "packed")
        sortedItems = items
            .slice()
            .sort((a: ItemType, b: ItemType) => Number(a.packed) - Number(b.packed));

    return (
        <div className="list">
            <ul>
                {sortedItems.map((item: ItemType) => (
                    <Item
                        item={item}
                        onDeleteItem={onDeleteItem}
                        onToggleItem={onToggleItem}
                        key={item.id}
                    />
                ))}
            </ul>

            <div className="actions">
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="input">Sort by input order</option>
                    <option value="description">Sort by description</option>
                    <option value="packed">Sort by packed status</option>
                </select>
                <button onClick={onClearList}>Clear list</button>
            </div>
        </div>
    );
}
