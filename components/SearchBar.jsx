import React, { useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { SearchForm, Input, Button } from "./styles/SearchBarStyles";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [barOpened, setBarOpened] = useState(false);

  const formRef = useRef();
  const inputFocus = useRef();

  const onFormSubmit = (e) => {
    // When form submited, clear input, close the searchbar and do something with input
    e.preventDefault();
    setInput("");
    setBarOpened(false);
    // After form submit, do what you want with the input value
    console.log(`Form was submited with input: ${input}`);
  };

  return (
    <SearchForm
      barOpened={barOpened}
      onClick={() => {
        setBarOpened(true);
        inputFocus.current.focus();
      }}
      onFocus={() => {
        setBarOpened(true);
        inputFocus.current.focus();
      }}
      onBlur={() => setBarOpened(false)}
      onSubmit={onFormSubmit}
      ref={formRef}
    >
      <Button type="submit">
        <SearchIcon style={{ width: "1.2rem", height: "1.2rem" }} />
      </Button>
      <Input
        onChange={(e) => setInput(e.target.value)}
        ref={inputFocus}
        value={input}
        barOpened={barOpened}
        placeholder="Search for a movie..."
      />
    </SearchForm>
  );
};

export default SearchBar;
