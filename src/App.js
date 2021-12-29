import React from "react";

import Profil from "./profil/Profil";

class App extends React.Component {
  render() {
    const myVar = {
      fullName: "ayman elgad",
      profession: " student",
      bio: "i like to work in project",
    };
    return (
      <div>
        <Profil data={myVar} style={{ display: "flex" }}>
          <img
            src="https://image.flaticon.com/icons/png/512/1499/1499575.png"
            width="200px"
            height="200px"
          ></img>
        </Profil>
      </div>
    );
  }
}

export default App;
