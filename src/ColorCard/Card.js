import React, { useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";

const Div = styled.div`
      width: 100%;
      height: 150px;
      border: 1px solid black;
      box-shadow: 2px 2px 5px #000000;
      background-color: ${(props) => props.theme.backgroundColor};
      color: ${(props) =>
        props.theme.backgroundColor === "#000000" ? "white" : "black"};
    `;

Div.defaultProps = {
      theme: { color: 0xffffff, backgroundColor: "#fff" }
}

const Card2 = (props) => {

  const theme = {
      backgroundColor: props.color.hex
    };


  return (
    
    <ThemeProvider theme={theme}>
        <Div>
          <h1>{props.color.name}</h1>
        </Div>
    </ThemeProvider>

  )
}

export default Card2




/* class Card extends Component {
  Div = styled.div`
    width: 100%;
    height: 150px;
    border: 1px solid black;
    box-shadow: 2px 2px 5px #000000;
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) =>
      props.theme.backgroundColor === "#000000" ? "white" : "black"};
  `;

  componentWillMount() {
    this.Div.defaultProps = {
      theme: { color: 0xffffff, backgroundColor: "#fff" },
    };
  }

  render() {
    const theme = {
      backgroundColor: this.props.color.hex,
    };
    return (
      <ThemeProvider theme={theme}>
        <this.Div>
          <h1>{this.props.color.name}</h1>
        </this.Div>
      </ThemeProvider>
    );
  }
}

export default Card; */