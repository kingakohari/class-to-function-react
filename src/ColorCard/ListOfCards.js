import React, { useState, useEffect} from "react";
/* import Card from "./Card.js"; */
import Card2 from "./Card.js";
import colors from "../data/colors.json";


const CardList2 = (props) => {

    const [results, setResults] = useState([])

    useEffect(() => {
        setResults(colors.filter(
          (color) =>
            color.name.toLowerCase().includes(props.search.toLowerCase()) ||
            color.hex.toLowerCase().includes(props.search.toLowerCase())
          ) 
        );
    },[props.search]);

    return (
      <div className="container">
          {results.map((color, index) => (
            <Card2 key={index} color={color} />
          ))}
      </div>
    )
  }

  export default CardList2

 

/* class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.search !== this.props.search) {
      const results = colors.filter(
        (color) =>
          color.name.includes(this.props.search) ||
          color.hex.includes(this.props.search)
      );
      this.setState({ results });
    }
  }

  render() {
    return (
      <div className="container">
        {this.state.results.map((color, index) => (
          <Card key={index} color={color} />
        ))}
      </div>
    );
  }
}

export default CardList; */
