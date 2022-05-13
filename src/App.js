import React, { useState, useEffect } from "react";
import "./App.css";
/* import CardList from "./ColorCard/ListOfCards.js"; */
import CardList2 from "./ColorCard/ListOfCards.js";
/* import Searchbar from "./Searchbar/Searchbar.js"; */
import Searchbar2 from "./Searchbar/Searchbar.js";


const App2 = () => {

    const [search, setSearch] = useState("")

    const welcome = () => {
      alert("Hello!");
    }

    useEffect(() => {
      document.addEventListener("click", welcome);
      
    /*   return() => {
        document.removeEventListener("click", welcome);
      } */

    },[]);

    
    return (
      <div>
          <Searchbar2 setSearch={setSearch} />
          <CardList2 search={search} />
      </div>
      
    )
} 

export default App2



/* class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
    this.setState = this.setState.bind(this);
  }

  componentDidMount() {
    document.addEventListener("click", this.welcome);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.welcome);
  }

  welcome = () => {
    alert("Hello!");
  };

  render() {
    return (
      <div>
        <Searchbar search={this.setState} />
        <CardList search={this.state.search} />
      </div>
    );
  }
}

export default App; */

