import "./App.css";
import "./Style.css";
import imageInSrc from "./../src/imageInSrc.jpg";
function App() {
  return (
    <div className="App">
      <div>
        <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
          <h1 className="title red">Your name here</h1>
          <br />
          <img src={imageInSrc} alt="not working" />
          <br />
          <img src="/imageInPublic.jpg" />
        </div>
        <video width={320} height={240} controls>
          <source src="myVideo.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default App;
