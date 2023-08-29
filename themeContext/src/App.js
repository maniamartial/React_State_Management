import React from "react";
import functionContextComponent from "functionContextcomponent";
import {ThemeProvider} from ".ThemeContextProvider";

export default function App() {
  return (
    <ThemeProvider>
      <functionContextComponent />
    </ThemeProvider>
  );
}
