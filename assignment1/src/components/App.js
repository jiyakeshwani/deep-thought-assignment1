import React, { useState } from "react";

function App() {
  let jouneryBoard = useState("");
  return (
    <>
      <header>
        <div className="container flex">
          <img
            src="https://deepthought.education/assets/images/logo/logo.svg"
            alt="logo"
          />
          <div className="flex">
            <img src="/home.png" alt="home" />
            <img src="/settings.png" alt="home" />
            <img src="/home.png" alt="home" />
          </div>
        </div>
      </header>
    </>
  );
}

export default App;
