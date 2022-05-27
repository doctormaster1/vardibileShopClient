import React, { useState } from "react";
import { Form, FormControl } from "react-bootstrap";
import * as routes from "../../constants/routes";
import { useNavigate } from "react-router-dom";
import "../../styles/header.scss";

const SearchBox = () => {
  const [searchKey, setSearchKey] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchKey !== "") {
      navigate.push(`/?search=${searchKey}`);
    } else {
      navigate.push({
        pathname: routes.HOME,
      });
    }
  };

  return (
    <Form inline onSubmit={handleSubmit}>
      <FormControl
        type="text"
        name="seacrh"
        onChange={(e) => setSearchKey(e.target.value)}
        placeholder="Ürün Ara..."
        className="mr-sm-2"
      />
      <i className="fas fa-search"></i>
    </Form>
  );
};

export default SearchBox;
