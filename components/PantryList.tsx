import React from "react";
import PantryItem from "./PantryItem";
import { Container } from "@mui/material";

interface PantryListProps {
  items: { id: string; name: string; quantity: number }[];
  updateItem: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
}

const PantryList: React.FC<PantryListProps> = ({
  items,
  updateItem,
  removeItem,
}) => {
  return (
    <Container>
      {items.map((item) => (
        <PantryItem
          key={item.id}
          item={item}
          updateItem={updateItem}
          removeItem={removeItem}
        />
      ))}
    </Container>
  );
};

export default PantryList;
