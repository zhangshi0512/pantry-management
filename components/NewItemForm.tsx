"use client";

import React, { useState } from "react";
import { TextField, Button, Container, Box, Grid } from "@mui/material";

interface NewItemFormProps {
  addItem: (name: string, quantity: number) => void;
}

const NewItemForm: React.FC<NewItemFormProps> = ({ addItem }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addItem(name, Number(quantity));
    setName("");
    setQuantity("");
  };

  return (
    <Container>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={5}>
            <TextField
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              label="Item Name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              label="Quantity"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              color="primary"
              sx={{ height: "100%" }}
            >
              Add Item
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default NewItemForm;
