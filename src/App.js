import React from "react";
const border = {
  margin: "50px",
  boxShadow: "0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%)",
};
const container = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
};
const info = {
  marginLeft: "15px",
  marginTop: "10px",
};
const image = {
  marginLeft: "15px",
  marginTop: "10px",
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullname: "aymane elgad",
        bio: "i like to code",
        img: "https://pbs.twimg.com/media/E9sN5jzVUAUgYHn.png",
        profession: "Designer",
      },
      status: true,
      count: 1,
    };
  }

  togelvisipility = () => {
    this.setState({
      status: !this.state.status,
    });
  };

  componentDidMount() {
    this.myInterval = setInterval(() => {
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
    }, 1000);
  }

  render() {
    return (
      <div style={border}>
        {this.state.count} secondes
        {this.state.status ? (
          <div style={container}>
            <div style={image}>
              <img
                src={this.state.Person.img}
                alt="img"
                width="250"
                height="250"
              />
            </div>
            <div style={info}>
              <br />
              <h4>
                {this.state.Person.fullname}
                <br />
              </h4>
              <h4>
                {this.state.Person.bio}
                <br />
              </h4>
              <h4>
                {this.state.Person.profession}
                <br />
              </h4>
            </div>
          </div>
        ) : (
          ""
        )}
        <button onClick={this.togelvisipility}>
          {" "}
          {this.state.status ? "show" : "hide"}
        </button>
      </div>
    );
  }
}

export default App;
