import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer grettings="Ecommerce Lucas Moya" />
    </>
  );
}

export default App;
