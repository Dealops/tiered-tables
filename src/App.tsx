import React from "react";
import "./App.css";

const PRODUCT_DATA = {
  products: [
    {
      name: "Auth",
      tiers: Array(12)
        .fill(undefined)
        .map((_, i) => ({ volume: 5000 + i * 250 })),
    },
    {
      name: "Identity",
      tiers: Array(12)
        .fill(undefined)
        .map((_, i) => ({ volume: 1000 + i * 100 })),
    },
  ],
};

function Table() {
  return <pre>{JSON.stringify(PRODUCT_DATA, undefined, 2)}</pre>;
}

function App() {
  return (
    <div className="App">
      <Table />
    </div>
  );
}

export default App;
