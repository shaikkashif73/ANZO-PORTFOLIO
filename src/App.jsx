import React from "react";
import Pages1 from "./pages/Pages1";
import Header from "./components/Header";
import Page2 from "./pages/Page2";
const App = () => {
  return (
    <>
      <div id="main">
        <Header />
        <Pages1 />
        <Page2/>
      </div>
    </>
  );
};

export default App;
