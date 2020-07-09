import React, { useEffect, useRef,useState } from 'react';
import { loadModules } from 'esri-loader';


const WebMapView = (props) => {
  const {urlLayer} = props;
  console.log(urlLayer)
  const [definitionExp,SetdefinitionExp]=useState("");
  const mapRef = useRef();
  useEffect(
    () => {
     
      // lazy load the required ArcGIS API for JavaScript modules and CSS
      loadModules(['esri/Map', 'esri/views/MapView', "esri/layers/FeatureLayer", "esri/widgets/Search", "esri/widgets/Compass",
        "esri/widgets/Home", "esri/Viewpoint", "esri/widgets/BasemapToggle","esri/widgets/Legend","esri/widgets/Expand"
      ], { css: true })
        .then(([ArcGISMap, MapView, FeatureLayer, Search, Compass, Home, Viewpoint, BasemapToggle,Legend, Expand]) => {
          // Typical usage
          // Create featurelayer from feature service
          const layer = new FeatureLayer({
            // URL to the service
            url: urlLayer,
            // ,definitionExpression:"pop2000>100000",
            // popupTemplate: {
            //   title: "{regionId}",
            //   content: "City Name: {cityId }"
            // },
            // outFields: ["*"]   //fields that will display
          });
          ///map
          const map = new ArcGISMap({
            basemap: 'streets-night-vector',
            layers: [layer]
          });

          // load the map view at the ref's DOM node
          const view = new MapView({
            container: mapRef.current,      //mapRef.current -- > to hold html element
            map: map,
            center: [31.638948867818733, 30.09363517997213],
            zoom: 12,
            showAttribution: false 
          })
          view.ui._removeComponents(["attribution"]);

          view.when(function () {
            layer.queryExtent().then(function (feature) {
              console.log(feature.extent)
              view.goTo(feature.extent)
            })

            const legend = new Expand({
              content: new Legend({
                view: view,
                layerInfos: [
                  {
                    layer: layer,
                    title: urlLayer==="https://services.arcgis.com/Lob4uxfVT5t0AXMF/arcgis/rest/services/MadinatyRoads/FeatureServer/3"
                    ?"Major Roads":"Regions"
                  }
                ]
              }),
              expanded: false
            });
            view.ui.add(legend, "bottom-left"); 

            //Search Widget
            const searchWidget = new Search({
              view: view,
              allPlaceholder: urlLayer==="https://services.arcgis.com/Lob4uxfVT5t0AXMF/arcgis/rest/services/MadinatyRoads/FeatureServer/3"
              ?"Enter Road ID":"Enter Region ID"
              ,
              includeDefaultSources: false,
              searchAllEnabled: true,
              sources: [
                {
                  layer: layer,
                  searchFields: [urlLayer==="https://services.arcgis.com/Lob4uxfVT5t0AXMF/arcgis/rest/services/MadinatyRoads/FeatureServer/3"
                  ?"roadId":"regionId"],
                  displayField: urlLayer==="https://services.arcgis.com/Lob4uxfVT5t0AXMF/arcgis/rest/services/MadinatyRoads/FeatureServer/3"
                  ?"roadId":"regionId",
                  exactMatch: false,
                  outFields: ["*"],
                  name:  urlLayer==="https://services.arcgis.com/Lob4uxfVT5t0AXMF/arcgis/rest/services/MadinatyRoads/FeatureServer/3"
                  ?"Major Roads in Madinaty":"Regions in Madinaty",
                  placeholder: urlLayer==="https://services.arcgis.com/Lob4uxfVT5t0AXMF/arcgis/rest/services/MadinatyRoads/FeatureServer/3"
                  ?"Enter Road ID":"Enter Region ID"
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


            // console.log(layer)


          })
          /// # This is the function
//////Filteration features //////////////////

view.whenLayerView(layer).then(function(featureLayerView) {
  //*** UPDATE ***//
  featureLayerView.filter = {
    where: definitionExp
  };
//   featureLayerView.effect = {
//     filter: {
//       where: definitionExp
//     },
//     excludedEffect: "opacity(50%)"
//   }
});

          return () => {

            if (view) {
              // destroy the map view
              view.container = null;
            }
          };
        })

    },[urlLayer]);
 
  return (
    <>
   
        <div className="webmap" ref={mapRef} style={{ height: props.height, width: props.width ,padding:'0px'}} >

        </div>
    </>
  )
};
export default WebMapView