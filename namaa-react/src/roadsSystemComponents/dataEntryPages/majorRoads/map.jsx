import React, { Component } from "react";
import "./mapStyles.css";
class Map extends Component {
  state = {};
  render() {
    return (
      <div class="embed-container">
        <iframe
          width="500"
          height="200"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          title="majorrrrrrrr"
          src="//esrisatraining.maps.arcgis.com/apps/Embed/index.html?webmap=9957330ca3a2488dab5965a3f29dfef5&extent=31.5909,30.0658,31.692,30.1113&zoom=true&previewImage=false&scale=true&legendlayers=true&disable_scroll=false&theme=dark"
        ></iframe>
      </div>
    );
  }
}

export default Map;
