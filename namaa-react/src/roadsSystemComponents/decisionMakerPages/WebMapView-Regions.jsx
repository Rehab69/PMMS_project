import React, { useEffect, useRef, useState } from "react";
import { loadModules } from "esri-loader";

const WebMapViewRegion = (props) => {
  const { urlRegion } = props;
  const { urlStreets } = props;

  const mapRef = useRef();
  useEffect(() => {
    // lazy load the required ArcGIS API for JavaScript modules and CSS
    loadModules(
      [
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/GroupLayer",
        "esri/layers/FeatureLayer",
        "esri/widgets/Search",
        "esri/widgets/Compass",
        "esri/widgets/Home",
        "esri/Viewpoint",
        "esri/widgets/BasemapToggle",
        "esri/widgets/Legend",
        "esri/widgets/Expand",
        "esri/widgets/LayerList",
        "esri/tasks/QueryTask",
        "esri/tasks/support/Query"
      ],
      { css: true }
    ).then(
      ([
        ArcGISMap,
        MapView,
        GroupLayer,
        FeatureLayer,
        Search,
        Compass,
        Home,
        Viewpoint,
        BasemapToggle,
        Legend,
        Expand,
        LayerList,
        QueryTask,
        Query


      ]) => {
        // Typical usage
        // Create featurelayer from feature service

        // const layer = new FeatureLayer({
        //   // URL to the service
        //   url: urlRegion
        //   ,definitionExpression:"pop2000>100000",
        //   popupTemplate: {
        //     title: "{regionId}",
        //     content: "City Name: {cityId }"
        //   },
        //   outFields: ["*"]   //fields that will display
        // });

        const Regions = new FeatureLayer({
          // URL to the service
          url: urlRegion,
          title: "Regions",

          popupTemplate:{
            title :`Region Name:{RegionName}`,
            content :`<p style="color: red;"> Region ID:{regionId} <br></br>  GI:{udi}    <br></br>  Pavment Condition:{pavment_condition }   </p>`
          }
        });

        const streets = new FeatureLayer({
          // URL to the service
          url: urlStreets,
          title: "Streets",
          visible: false,
        });

        var GroupLayer = new GroupLayer({
          title: "Regions",
          visible: true,
          visibilityMode: "exclusive",
          layers: [Regions, streets],
          opacity: 0.75,
        });

        ///map
        const map = new ArcGISMap({
          basemap: "streets-night-vector",
          layers: [GroupLayer],
        });

        // load the map view at the ref's DOM node
        const view = new MapView({
          container: mapRef.current, //mapRef.current -- > to hold html element
          map: map,
          center: [31.638948867818733, 30.09363517997213],
          zoom: 12,
          showAttribution: false 
        })
        view.ui._removeComponents(["attribution"]);

        view.when(function () {
          streets.queryExtent().then(function (feature) {
            // console.log(feature.extent)
            view.goTo(feature.extent);
          });

          const legend = new Expand({
            content: new Legend({
              view: view,
              style: "card", // other styles include 'classic'

              layerInfos: [
                {
                  layer: streets,
                },
                {
                  layer: Regions,
                },
              ],
            }),

            view: view,
            expanded: false,
          });

          view.ui.add(legend, "bottom-left");

          //Search Widget
          const searchWidget = new Search({
            view: view,
            allPlaceholder: "Enter Region ID",
            includeDefaultSources: false,
            searchAllEnabled: true,
            sources: [
              {
                layer: streets,
                searchFields: ["regionId "],
                displayField: "regionId ",
                exactMatch: false,
                outFields: ["*"],
                name: "Streets of Madenaty",
                placeholder: "example Region ID: 5",
              },

              {
                layer: Regions,
                searchFields: ["regionId"],
                displayField: "regionId",
                exactMatch: false,
                outFields: ["*"],
                name: "Regions of Madenaty",
                placeholder: "example Region ID: 5",
              },
            ],
          });
          // Adds the search widget below other elements in
          // the top left corner of the view
          // view.ui.add(searchWidget, {
          //   // position: "top-right",
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

          // console.log(layer)
        });
        /// # This is the function
        //////Filteration features //////////////////

        // view.whenLayerView(layer).then(function(featureLayerView) {
        //   //*** UPDATE ***//
        //   featureLayerView.filter = {
        //     where: definitionExp
        //   };
        // //   featureLayerView.effect = {
        // //     filter: {
        // //       where: definitionExp
        // //     },
        // //     excludedEffect: "opacity(50%)"
        // //   } ظ
        // });

        function defineActions(event) {
          // The event object contains an item property.
          // is is a ListItem referencing the associated layer
          // and other properties. You can control the visibility of the
          // item, its title, and actions using this object.

          var item = event.item;

          if (item.title === "US Demographics") {
            // An array of objects defining actions to place in the LayerList.
            // By making this array two-dimensional, you can separate similar
            // actions into separate groups with a breaking line.

            item.actionsSections = [
              [
                {
                  title: "Go to full extent",
                  className: "esri-icon-zoom-out-fixed",
                  id: "full-extent",
                },
                {
                  title: "Layer information",
                  className: "esri-icon-description",
                  id: "information",
                },
              ],
              [
                {
                  title: "Increase opacity",
                  className: "esri-icon-up",
                  id: "increase-opacity",
                },
                {
                  title: "Decrease opacity",
                  className: "esri-icon-down",
                  id: "decrease-opacity",
                },
              ],
            ];
          }
        }

        // Create the LayerList widget with the associated actions
        // and add it to the top-right corner of the view.

        var layerList = new LayerList({
          view: view,
          // executes for each ListItem in the LayerList
          listItemCreatedFunction: defineActions,
        });

        // Event listener that fires each time an action is triggered

        layerList.on("trigger-action", function (event) {
          // The layer visible in the view at the time of the trigger.
          var visibleLayer = Regions.visible ? Regions : streets;

          // Capture the action id.
          var id = event.action.id;

          if (id === "full-extent") {
            // if the full-extent action is triggered then navigate
            // to the full extent of the visible layer
            view.goTo(visibleLayer.fullExtent).catch(function (error) {
              if (error.name != "AbortError") {
                console.error(error);
              }
            });
          } else if (id === "information") {
            // if the information action is triggered, then
            // open the item details page of the service layer
            window.open(visibleLayer.url);
          } else if (id === "increase-opacity") {
            // if the increase-opacity action is triggered, then
            // increase the opacity of the GroupLayer by 0.25

            if (GroupLayer.opacity < 1) {
              GroupLayer.opacity += 0.25;
            }
          } else if (id === "decrease-opacity") {
            // if the decrease-opacity action is triggered, then
            // decrease the opacity of the GroupLayer by 0.25

            if (GroupLayer.opacity > 0) {
              GroupLayer.opacity -= 0.25;
            }
          }
        });

        // Add widget to the top right corner of the view

        var expand = new Expand({
          style: "card",
          view: view,
          content: layerList,
        });
        view.ui.add(expand, "top-right");



        Regions.queryExtent().then(function (results) {
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
export default WebMapViewRegion;






























































































// import React, { useEffect, useRef } from 'react';
// import { loadModules } from 'esri-loader';

// export const MR_WebMapView = (props) =>{

//     const mapRef = useRef();

//     useEffect(
//       () => {
//         // lazy load the required ArcGIS API for JavaScript modules and CSS
//         loadModules(['esri/Map', 'esri/views/MapView',  "esri/widgets/BasemapGallery" , "esri/widgets/AreaMeasurement2D" , "esri/layers/FeatureLayer" ,  "esri/Graphic",
//         "esri/layers/GraphicsLayer",
//         "esri/tasks/RouteTask",
//         "esri/tasks/support/RouteParameters",
//         "esri/tasks/support/FeatureSet"], { css: true })
//         .then(([Map, MapView, BasemapGallery , AreaMeasurement2D , FeatureLayer  , Graphic,
//           GraphicsLayer,
//           RouteTask,
//           RouteParameters,
//           FeatureSet]) => {

//           const layer = new FeatureLayer({
//             // URL to the service
//             url: ,
//             // url:props.ulrLayer,
//             // definitionExpression: "Shape__Length > 1500",

//             popupTemplate:{
//               title :"{minorId}",
//               content :`<p style="color: red;"> Length:{Shape__Length} </p>`

//             }
//           });

//           var myMap = new Map({
//             basemap: 'streets-night-vector',
//             layers:[layer],
//           });

//         var view = new MapView ({
//             map: myMap,            // References a Map instance
//             container: mapRef.current , // References the ID of a DOM element
//             center :[ 31.63268416712185 , 30.100637401648267],
//             zoom :13
//           })

//           // view.on("click", function(event) {
//           //           console.log(event)
//           //           view.goTo( { target: event.mapPoint,  } )
//           // })

//         //   var basemapGallery = new BasemapGallery({
//         //     view: view
//         // });
//         // view.ui.add(basemapGallery, "top-right")

//         var measurementWidget = new AreaMeasurement2D({
//             view: view
//         });
//           view.ui.add(measurementWidget, "top-right");

//           layer.queryExtent().then(function(results){
//             // go to the extent of the results satisfying the query
//             view.goTo(results.extent);
//           });

//               // // Point the URL to a valid route service that uses an
//               // var routeTask = new RouteTask({
//               //   url:
//               //       "https://eslam.esrinea.com/waportal/sharing/servers/6b8229be7f15409bb498edb9480d752a/rest/services/World/Route/NAServer/Route_World"
//               // });

//               // // The stops and route result will be stored in this layer
//               // var routeLayer = new GraphicsLayer();

//               // // Setup the route parameters
//               // var routeParams = new RouteParameters({
//               //   stops: new FeatureSet(),
//               //   outSpatialReference: {
//               //       // autocasts as new SpatialReference()
//               //       wkid: 3857
//               //   }
//               // });

//               // // Define the symbology used to display the stops
//               // var stopSymbol = {
//               //   type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
//               //   style: "cross",
//               //   size: 15,
//               //   outline: {
//               //       // autocasts as new SimpleLineSymbol()
//               //       width: 4
//               //   }
//               // };

//               // // Define the symbology used to display the route
//               // var routeSymbol = {
//               //   type: "simple-line", // autocasts as SimpleLineSymbol()
//               //   color: [0, 0, 255, 0.5],
//               //   width: 5
//               // };

//               // var map = new Map({
//               //   basemap: "topo",
//               //   layers: [routeLayer] // Add the route layer to the map
//               // });
//               // var view = new MapView({
//               //   container: "map", // Reference to the scene div created in step 5
//               //   map: map, // Reference to the map object created before the scene
//               //   center: [31.2077408004547, 30.02293374101055],
//               //   zoom: 14
//               // });

//               // Adds a graphic when the user clicks the map. If 2 or more points exist, route is solved.
//               // view.on("click", addStop);

//               // function addStop(event) {
//               //   // Add a point at the location of the map click
//               //   var stop = new Graphic({
//               //       geometry: event.mapPoint,
//               //       symbol: stopSymbol
//               //   });
//               //   routeLayer.add(stop);

//               //   // Execute the route task if 2 or more stops are input
//               //   routeParams.stops.features.push(stop);
//               //   if (routeParams.stops.features.length >= 2) {
//               //       routeTask.solve(routeParams).then(showRoute);
//               //   }
//               // }
//               // // Adds the solved route to the map as a graphic
//               // function showRoute(result) {
//               //   console.log(result)
//               //   var routeResult = result.routeResults[0].route;
//               //   routeResult.symbol = routeSymbol;
//               //   routeLayer.add(routeResult);
//               // }

//           return () => {

//             if (view) {
//               // destroy the map view
//               view.container = null;
//             }
//           };
//         });
//       }
//     );

//     return (
//       <>

//           <div className="webmap" ref={mapRef} style={{ height: "400px", width: "100%", paddingLeft:0, paddingRight:0}} >
//           </div>
//       </>
//     )

// };

// export default MR_WebMapView ;
