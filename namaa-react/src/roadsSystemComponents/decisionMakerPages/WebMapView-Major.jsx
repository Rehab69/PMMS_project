import React, { useEffect, useRef } from "react";
import { loadModules } from "esri-loader";

import "./MaintenanceTable.css"

export const MR_WebMapView = (props) => {
  const { urlMajor } = props;
  const mapRef = useRef();

  useEffect(() => {
    // lazy load the required ArcGIS API for JavaScript modules and CSS
    loadModules(
      [
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/FeatureLayer",
        "esri/widgets/Search",
        "esri/widgets/Compass",
        "esri/widgets/Home",
        "esri/Viewpoint",
        "esri/widgets/BasemapToggle",
        "esri/widgets/Legend",
        "esri/widgets/Expand",
      ],
      { css: true }
    ).then(
      ([
        Map,
        MapView,
        FeatureLayer,
        Search,
        Compass,
        Home,
        Viewpoint,
        BasemapToggle,
        Legend,
        Expand,
      ]) => {
        const layer = new FeatureLayer({
          // URL to the service
          url: urlMajor,
          // url:props.ulrLayer,
          // definitionExpression: "Shape__Length > 1500",

          popupTemplate: {
            title: `Road Name:{roadName}`,
            content: `<p style="color: red;">     Road ID:{roadId}  <br></br>  Length:{Shape__Length}  <br></br>    GI:{udi}   <br></br>   Pavment Codition:{pavment_codition } </p>`,
          },
        });

        var myMap = new Map({
          basemap: "streets-night-vector",
          layers: [layer],
        });

        var view = new MapView({
          map: myMap, // References a Map instance
          container: mapRef.current, // References the ID of a DOM element
          center: [31.638948867818733, 30.09363517997213],
            zoom: 12,
          showAttribution: false 
        })
        view.ui._removeComponents(["attribution"]);
        // view.on("click", function(event) {
        //           console.log(event)
        //           view.goTo( { target: event.mapPoint,  } )
        // })

        //Search Widget
        const searchWidget = new Search({
          view: view,
          allPlaceholder: "Enter Region ID",
          includeDefaultSources: false,
          searchAllEnabled: true,
          sources: [
            {
              layer: layer,
              searchFields: ["roadId"],
              displayField: "roadId",
              exactMatch: false,
              outFields: ["*"],
              name: "Streets of Madenaty",
              placeholder: "example Region ID: 5",
            },
          ],
        });
        // Adds the search widget below other elements in
        // the top left corner of the view
        // view.ui.add(searchWidget, {
        //   position: "top-right",
        //   index: 2

        // });

        var expand = new Expand({
          expandIconClass: "esri-icon-search",
          view: view,
          content: searchWidget,
        });
        view.ui.add(expand, "top-right");

        ///////////////////Compass Widget////////////////////////
        var compass = new Compass({
          view: view,
        });

        view.ui.add(compass, "top-left");
        /////////////////////////////////////////////////\

        //Home Widget
        var homeButton = new Home({
          view: view,
        });
        view.ui.add(homeButton, "top-left");

        ///basemaptoggle widget
        var basemapToggle = new BasemapToggle({
          view: view, // The view that provides access to the map's "streets" basemap
          nextBasemap: "dark-gray-vector", // Allows for toggling to the "hybrid" basemap
        });
        view.ui.add(basemapToggle, "bottom-right");

        const legend = new Expand({
          content: new Legend({
            view: view,
            style: "card", // other styles include 'classic'

            layerInfos: [
              {
                title:"Major Roads",
                layer: layer,
              },
            ],
          }),

          view: view,
          expanded: false,
        });

        view.ui.add(legend, "bottom-left");

        layer.queryExtent().then(function (results) {
          // go to the extent of the results satisfying the query
          view.goTo(results.extent);
        });

        return () => {
          if (view) {
            // destroy the map view
            view.container = null;
          }
        };
      }
    );
  });

  return (
    <>
      <div
        className="webmap"
        ref={mapRef}
        style={{
          height: "400px",
          width: "100%",
          paddingLeft: 0,
          paddingRight: 0,
        }}
      ></div>
    </>
  );
};

export default MR_WebMapView;
