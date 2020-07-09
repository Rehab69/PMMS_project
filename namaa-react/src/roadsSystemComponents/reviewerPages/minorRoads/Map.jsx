import React, { Component } from "react";
import "./sectionsMapStyles.css";
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
          title="Streets&&regoins"
          src="//esrisatraining.maps.arcgis.com/apps/Embed/index.html?webmap=74eefdf405fd45ddbad04b2006b252f4&extent=31.5863,30.0709,31.6874,30.1163&zoom=true&previewImage=false&scale=true&legendlayers=true&disable_scroll=false&theme=dark"
        ></iframe>
      </div>
    );
  }
}

export default Map;
