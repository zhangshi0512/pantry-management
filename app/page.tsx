"use client";

import { useState, useEffect } from "react";
import { db } from "./firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import PantryList from "../components/PantryList";
import NewItemForm from "../components/NewItemForm";
import SearchBar from "../components/SearchBar";
import { Container, Typography } from "@mui/material";

interface PantryItem {
  id: string;
  name: string;
  quantity: number;
}

export default function Home() {
  const [items, setItems] = useState<PantryItem[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const itemsCollection = collection(db, "pantry");
      const itemsSnapshot = await getDocs(itemsCollection);
      const itemsList = itemsSnapshot.docs.map(
        (doc) => ({ id: doc.id, ...doc.data() } as PantryItem)
      );
      setItems(itemsList);
    };
    fetchData();
  }, []);

  const addItem = async (name: string, quantity: number) => {
    const docRef = await addDoc(collection(db, "pantry"), { name, quantity });
    setItems([...items, { id: docRef.id, name, quantity }]);
  };

  const updateItem = async (id: string, quantity: number) => {
    const itemDoc = doc(db, "pantry", id);
    await updateDoc(itemDoc, { quantity });
    setItems(
      items.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const removeItem = async (id: string) => {
    const itemDoc = doc(db, "pantry", id);
    await deleteDoc(itemDoc);
    setItems(items.filter((item) => item.id !== id));
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Pantry Management
      </Typography>
      <NewItemForm addItem={addItem} />
      <SearchBar setSearchQuery={setSearchQuery} />
      <PantryList
        items={filteredItems}
        updateItem={updateItem}
        removeItem={removeItem}
      />
    </Container>
  );
}
