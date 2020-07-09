import React, { useEffect, useRef } from 'react';
import { loadModules } from 'esri-loader';


export const Udi_rout_map = (props) => {
const {urlMajor} = props
  const mapRef = useRef();

  useEffect(
    () => {
      // lazy load the required ArcGIS API for JavaScript modules and CSS
      loadModules(['esri/Map', 'esri/views/MapView', "esri/layers/FeatureLayer", "esri/widgets/Search", "esri/widgets/Compass",
      "esri/widgets/Home", "esri/Viewpoint", "esri/widgets/BasemapToggle","esri/widgets/Legend","esri/widgets/Expand"
    ], { css: true })
      .then(([Map, MapView, FeatureLayer, Search, Compass, Home, Viewpoint, BasemapToggle,Legend, Expand]) => {
    


        const layer = new FeatureLayer({
          // URL to the service
          url: "https://services.arcgis.com/Lob4uxfVT5t0AXMF/arcgis/rest/services/MadinatyRoads/FeatureServer/3"
     
        
          
            ,popupTemplate:{
              title :"{routeId}",
              content :`<p style="color: red;"> Length:{Shape__Length} </p>`
            }
          });

          var myMap = new Map({
            basemap: 'streets-night-vector',
            layers: [layer],
          });

          var view = new MapView({
            map: myMap,            // References a Map instance
            container: mapRef.current, // References the ID of a DOM element
            center: [31.638948867818733, 30.09363517997213],
            zoom: 12,
            showAttribution: false 
          })
          view.ui._removeComponents(["attribution"]);

            
          view.when(function () {
            layer.queryExtent().then(function (feature) {
              // console.log(feature.extent)
              view.goTo(feature.extent)
            })

    
          const legend = new Expand({
            content: new Legend({
              view: view,
              style: "card", // other styles include 'classic'
              layerInfos: [
                {
                  layer: layer,
                  
                }
              ]
            }),
            view: view,
            expanded: false
          });
          view.ui.add(legend, "bottom-left"); 

          const searchWidget = new Search({
            view: view,
            allPlaceholder: "Enter Region ID",
            includeDefaultSources: false,
            searchAllEnabled: true,
            sources: [
              {
                layer: layer,
                searchFields: ["objectid "],
                displayField: "regionId ",
                exactMatch: false,
                outFields: ["*"],
                name: "Streets of Madenaty",
                placeholder: "example Region ID: 5"
              }]
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
            view: view
          });

          view.ui.add(compass,
            "top-left")
          /////////////////////////////////////////////////\

          //Home Widget
          var homeButton = new Home({
            view: view
          });
          view.ui.add(homeButton, "top-left")

          ///basemaptoggle widget
          var basemapToggle = new BasemapToggle({
            view: view,  // The view that provides access to the map's "streets" basemap
            nextBasemap: "dark-gray-vector" // Allows for toggling to the "hybrid" basemap

          });
          view.ui.add(basemapToggle, "bottom-right")
        })
         


          return () => {

            if (view) {
              // destroy the map view
              view.container = null;
            }
          };
        });
    }
  );

  return (
    <>
      <div className="webmap" ref={mapRef} style={{ height: "400px", width: "100%"}} >
      </div>
    </>
  )




};

export default Udi_rout_map;