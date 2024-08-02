import React from "react";
import { TextField, Container } from "@mui/material";

interface SearchBarProps {
  setSearchQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ setSearchQuery }) => {
  return (
    <Container style={{ marginBottom: "20px", marginTop: "20px" }}>
      <TextField
        onChange={(e) => setSearchQuery(e.target.value)}
        label="Search Items"
        variant="outlined"
        fullWidth
      />
    </Container>
  );
};

export default SearchBar;
