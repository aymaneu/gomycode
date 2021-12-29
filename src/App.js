import "./App.css";
import Adress from "./profile/Adress";
import FullName from "./profile/FullName";
import ProfilePhoto from "./profile/ProfilePhoto";
import "./Style.css";
function App() {
  return (
    <div className="App">
      <ProfilePhoto />
      <FullName />
      <Adress />
    </div>
  );
}

export default App;
