import React, { Component } from "react";
import Gif from "./components/Gif";
import GifList from "./components/GifList";
import SearchBar from "./components/SearchBar";

class App extends Component {
  // const [gifsList, setGifsList] = useState(0);
  constructor(props) {
    super(props);
    this.state = {
      gifsList: [
        { id: "ioopmOHLqIDfGxLLKG" },
        { id: "lSCmyMbeS0HEL63s1X" },
        { id: "xT9IgIu7eEA4x0mMta" },
      ],
      currentGifId: "1pCd8SpXL9knKpXNBB",
    };
    this.searchGif();
  }

  searchGif = (value) => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=ZZm1kmQIyEGdRs7m8nZjdO9tLGydFUzY&q=${value}&limit=10&lang=en`
    )
      .then(res => res.json())
      .then((data) => {
        const list = data.data;
        this.setState({
          gifsList: list
        });
      });
  };

  changeCurrentGif = (value) => {
    this.setState({
      currentGifId: value
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.searchGif} />
          <div className="selected-gif">
            <Gif Gifid={this.state.currentGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList
            gifs={this.state.gifsList}
            changeCurrent={this.changeCurrentGif}
          />
        </div>
      </div>
    );
  }
}

export default App;
