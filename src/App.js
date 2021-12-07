import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div classname="App">
      <div className="main-w3layouts wrapper">
        <h1>Creative SignUp Form</h1>
        <div className="main-agileinfo">
          <div className="agileits-top">
            <form action="#" method="post">
              <input
                className="text"
                type="text"
                name="Username"
                placeholder="Username"
                required
              />
              <input
                className="text email"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
              <input
                className="text"
                type="password"
                name="password"
                placeholder="Password"
                required
              />
              <input
                className="text w3lpass"
                type="password"
                name="password"
                placeholder="Confirm Password"
                required
              />
              <div className="wthree-text">
                <label className="anim">
                  <input type="checkbox" className="checkbox" required />
                  <span>I Agree To The Terms &amp; Conditions</span>
                </label>
                <div className="clear"> </div>
              </div>
              <input type="submit" defaultValue="SIGNUP" />
            </form>
            <p>
              Don't have an Account? <a href="#"> Login Now!</a>
            </p>
          </div>
        </div>
        <div className="colorlibcopy-agile">
          <p>
            © 2018 Colorlib Signup Form. All rights reserved | Design by{" "}
            <a href="https://colorlib.com/" target="_blank">
              Colorlib
            </a>
          </p>
        </div>
        <ul className="colorlib-bubbles">
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
      </div>
    </div>
  );
}

export default App;
