import React, { Component } from "react";
import "./homeMapStyles.css";
class HomeMap extends Component {
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
          title="main_roads"
          src="//esrisatraining.maps.arcgis.com/apps/Embed/index.html?webmap=c4bcca854b7147e8904d26dec74a4f00&extent=31.5881,30.0711,31.6892,30.1165&zoom=true&previewImage=false&scale=true&legendlayers=true&disable_scroll=true&theme=dark"
        ></iframe>
      </div>
    );
  }
}

export default HomeMap;
