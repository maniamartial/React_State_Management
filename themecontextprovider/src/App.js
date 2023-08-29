import React from "react";
import FunctionContext from "./FunctionContext";
import ThemeProvider from "./ThemeContextprovider";

export default function App() {
  return (
    <ThemeProvider>
      <FunctionContext/>
    </ThemeProvider>
  );
}
