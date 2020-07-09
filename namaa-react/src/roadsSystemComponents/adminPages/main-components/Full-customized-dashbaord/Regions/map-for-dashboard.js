import React, { useEffect, useRef, useState } from 'react';
import { loadModules } from 'esri-loader';


const WebMapViewForMajorDash = (props) => {
  const { urlLayer,defExpressRegion,urlStreets } = props;
  const [view, setView] = useState(null);
  const [layer, setLayer] = useState(null);
  const mapRef = useRef();
  useEffect(
    () => {
      loadModules(['esri/Map', 'esri/views/MapView', "esri/layers/FeatureLayer", "esri/widgets/Search", "esri/widgets/Compass",
        "esri/widgets/Home", "esri/Viewpoint", "esri/widgets/BasemapToggle", "esri/widgets/Legend", "esri/widgets/Expand"
      ], { css: true })
        .then(([ArcGISMap, MapView, FeatureLayer, Search, Compass, Home, Viewpoint, BasemapToggle, Legend, Expand]) => {

          const layer = new FeatureLayer({
            url: urlLayer,
            visible: true,
            popupTemplate:{
              title :`Region Name:{RegionName}`,
              content :`<p style="color: red;"> Region ID:{regionId} <br></br>  GI:{udi}    
              <br></br>  Pavment Condition:{pavment_condition }   </p>`
            }
          });

          const streets = new FeatureLayer({
            url:urlStreets,
            visible:true,

          })
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


        

            const legend = new Expand({
              content: new Legend({
                view: view,
                layerInfos: [
                  {
                    layer: layer,
                    title: "Regions of Madinaty"
                  }
                ]
              }),
              expanded: false
            });
        

            view.ui.add(legend, "bottom-left");
            //Search Widget
            const searchWidget = new Search({
              view: view,
              allPlaceholder: "Enter Road ID",
              includeDefaultSources: false,
              searchAllEnabled: true,
              sources: [
                {
                  layer: layer,
                  searchFields: ["regionId"],
                  displayField: "regionId",
                  exactMatch: false,
                  outFields: ["*"],
                  name: "Regions of Madenaty",
                  placeholder: "example Region ID: 5"
                }]
            });
          
            var expand = new Expand({
              expandIconClass: "esri-icon-search",
              view: view,
              content: searchWidget,
            });
            view.ui.add(expand, "top-right");


            //Home Widget
            var homeButton = new Home({
              view: view
            });
            view.ui.add(homeButton, "top-left")

            ///basemaptoggle widget
            var basemapToggle = new BasemapToggle({
              view: view,  // The view that provides access to the map's "streets" basemap
              nextBasemap: "dark-gray-vector", // Allows for toggling to the "hybrid" basemap
              expanded: false
            });
            view.ui.add(basemapToggle, "bottom-right")
            setLayer({ layer: layer })
            setView({ view: view })
          })
    }, []);


    
  useEffect(
    () => {
      if (view) {

        view.view.when(function () {
          layer.layer.queryExtent().then(function (feature) {
            // console.log(feature.extent)
            view.view.goTo(feature.extent)
          })


        })
        /// # This is the function
        //////Filteration features //////////////////

        view.view.whenLayerView(layer.layer).then(function (featureLayerView) {
          //*** UPDATE ***//
          // featureLayerView.filter = {
          //   where: definitionExp
          // };
          featureLayerView.effect = {
            filter: {
              where: defExpressRegion
            },
            excludedEffect: "opacity(30%)"
          }
        });

      }

    });


  return (
    <>

      <div className="col" style={{ justifyContent: 'center', padding: '0', border: 'solid', borderWidth: '0.7rem' }}>
        <div className="webmap" ref={mapRef} style={{ height: '100%', width: '100%' }} >

        </div>
      </div>
    </>
  )
};
export default WebMapViewForMajorDash;