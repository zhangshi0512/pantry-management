"use client";

import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  Grid,
} from "@mui/material";

interface PantryItemProps {
  item: { id: string; name: string; quantity: number };
  updateItem: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
}

const PantryItem: React.FC<PantryItemProps> = ({
  item,
  updateItem,
  removeItem,
}) => {
  const [quantity, setQuantity] = React.useState(item.quantity);

  const handleUpdate = () => {
    updateItem(item.id, quantity);
  };

  return (
    <Card style={{ margin: "20px", backgroundColor: "#f7f7f7" }}>
      <CardContent>
        <Typography variant="h5">{item.name}</Typography>
        <Grid container spacing={2} alignItems="center" sx={{ mt: 2 }}>
          <Grid item xs={4}>
            <TextField
              fullWidth
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              label="Quantity"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={4}>
            <Button
              fullWidth
              onClick={handleUpdate}
              variant="contained"
              color="primary"
            >
              Update
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              fullWidth
              onClick={() => removeItem(item.id)}
              variant="contained"
              color="secondary"
            >
              Remove
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PantryItem;
