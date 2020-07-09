import React, { useEffect, useRef } from 'react';
import { loadModules } from 'esri-loader';




export const WebMapView = () =>{




    const mapRef = useRef();
     

    useEffect(
      () => {
        // lazy load the required ArcGIS API for JavaScript modules and CSS
        loadModules(['esri/Map', 'esri/views/MapView',  "esri/widgets/BasemapGallery" , "esri/widgets/AreaMeasurement2D" , "esri/layers/FeatureLayer"], { css: true })
        .then(([Map, MapView, BasemapGallery , AreaMeasurement2D , FeatureLayer]) => {



          const layer = new FeatureLayer({
            // URL to the service
            url: "https://services.arcgis.com/Lob4uxfVT5t0AXMF/arcgis/rest/services/MadinatyRoads/FeatureServer/0"
          });
          


          var myMap = new Map({
            basemap: 'streets-night-vector',
            layers:[layer],
          });


      
        var view = new MapView ({
            map: myMap,            // References a Map instance
            container: mapRef.current , // References the ID of a DOM element
            center :[ 31.63268416712185 , 30.100637401648267],
            zoom :13
          })
              
          view.on("click", function(event) {
                    console.log(event)
                    view.goTo( { target: event.mapPoint, zoom :15 } )
          })

        

        //   var basemapGallery = new BasemapGallery({
        //     view: view
        // });
        // view.ui.add(basemapGallery, "top-right")



        var measurementWidget = new AreaMeasurement2D({
            view: view
        });
          view.ui.add(measurementWidget, "top-right");


         




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

    

          <div className="webmap" ref={mapRef} style={{ height: "400px", width: "100%", paddingLeft:150, paddingRight:150}} >
          </div>
      </>
    )




};

export default WebMapView ;
