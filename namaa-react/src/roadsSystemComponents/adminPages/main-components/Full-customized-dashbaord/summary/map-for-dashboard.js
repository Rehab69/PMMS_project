import React, { useEffect, useRef, useState } from 'react';
import { loadModules } from 'esri-loader';


const WebMapViewForFullDash = (props) => {
  const { urlRoads,urlRegion,urlStreets ,defExpress} = props;
  const [view,setView] = useState(null);
  const [majorRoads,setRoadsLayer] = useState(null);
  const [Regions,setRegionsLayer] = useState(null);
  const [streets,setStreetLayer] = useState(null);
  const [groupLayer,setGroupLayer] =useState(null);
  const mapRef = useRef();


  useEffect(()=>{
    loadModules(['esri/Map', 'esri/views/MapView', "esri/layers/FeatureLayer", "esri/widgets/Search", 
    "esri/widgets/Home","esri/widgets/BasemapToggle", "esri/widgets/Legend", "esri/widgets/Expand",
    "esri/layers/GroupLayer","esri/widgets/LayerList"
      ], { css: true })
    .then(([Map, MapView, FeatureLayer,Search,Home,BasemapToggle,Legend,Expand,GroupLayer,LayerList]) => {


      const majorRoads = new FeatureLayer({
        // URL to the service
        url: urlRoads,
        title: "Major Roads",
        visible: true,
        popupTemplate:{
          title :`Road Name:{roadName}`,
          content :`<p style="color: red;"> Road ID:{roadId} <br></br>  GI:{udi}    <br></br>  Pavment Condition:{pavment_codition}
          </p>`
        }
      });
      
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



    const groupLayer = new GroupLayer({
      title: "Assets",
      visible: true,
      visibilityMode: "exclusive",
      layers: [Regions, streets,majorRoads],
      opacity: 0.75,
    });

      ///map
      const map = new Map({
        basemap: "streets-night-vector",
        layers: [groupLayer],
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


      const searchWidget = new Search({
        view: view,
        allPlaceholder: "Enter ID of Asset",
        includeDefaultSources: false,
        searchAllEnabled: true,
        sources: [
          {
            layer: streets,
            searchFields: ["minorId"],
            displayField: "minorId",
            exactMatch: false,
            outFields: ["*"],
            name: "Streets of Madenaty",
            placeholder: "example Street ID: 5",
          },

          {
            layer: Regions,
            searchFields: ["regionId"],
            displayField: "regionId",
            exactMatch: false,
            outFields: ["*"],
            name: "Regions of Madenaty",
            placeholder: "example Region ID: 5",
          },      {
            layer: majorRoads,
            searchFields: ["roadId"],
            displayField: "roadId ",
            exactMatch: false,
            outFields: ["*"],
            name: "Major Roads of Madenaty",
            placeholder: "example Road ID: 5",
          }
        ],
      });


      var expand = new Expand({
        expandIconClass: "esri-icon-search",
        view: view,
        content: searchWidget,
      });
      view.ui.add(expand, "top-right");
     
          const legend = new Expand({
            content: new Legend({
              view: view,
              style: "card", // other styles include 'classic'

              layerInfos: [
                {
                  layer:majorRoads,
                },
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
     
          //Home Widget
          var homeButton = new Home({
            view: view
          });
          view.ui.add(homeButton, "top-left")

          ///basemaptoggle widget
          var basemapToggle = new BasemapToggle({
            view: view,  // The view that provides access to the map's "streets" basemap
            nextBasemap: "osm", // Allows for toggling to the "hybrid" basemap
            expanded: false
          });
          view.ui.add(basemapToggle, "bottom-right")

          function defineActions(event) {
            // The event object contains an item property.
            // is is a ListItem referencing the associated layer
            // and other properties. You can control the visibility of the
            // item, its title, and actions using this object.
  
            var item = event.item;
            console.log(item)

            if (item.title === "Assets") {
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
              view.view.goTo(visibleLayer.fullExtent).catch(function (error) {
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
              // increase the opacity of the groupLayer by 0.25
  
              if (groupLayer.opacity < 1) {
                groupLayer.opacity += 0.25;
              }
            } else if (id === "decrease-opacity") {
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the groupLayer by 0.25
  
              if (groupLayer.opacity > 0) {
                groupLayer.opacity -= 0.25;
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




      setRoadsLayer({majorRoads:majorRoads})
      setRegionsLayer({Regions:Regions})
      setStreetLayer({streets:streets})
      setGroupLayer({groupLayer:groupLayer})
      setView({view:view})
    return () => {

      if (view) {
        // destroy the map view
        view.container = null;
      }
    };
  })
},[]);




  useEffect(
    () => {
      if(view){
  
  
    

               
        view.view.when(function () {
          majorRoads.majorRoads.queryExtent().then(function (feature) {
            view.view.goTo(feature.extent)
          })
          })
          /// # This is the function
          //////Filteration features //////////////////

          view.view.whenLayerView(groupLayer.groupLayer).then(function (featureLayerView) {
            //*** UPDATE ***//
            // featureLayerView.filter = {
            //   where: definitionExp
            // };
            featureLayerView.effect = {
              filter: {
                where: defExpress
              },
              excludedEffect: "opacity(30%)"
            }
          });



          return () => {

            if (view) {
              // destroy the map view
              view.container = null;
            }
          };
  
      }

    },[defExpress]);

  return (
    <>

      <div className="col" style={{ justifyContent: 'center', padding: '0', border: 'solid', borderWidth: '0.7rem' }}>
        <div className="webmap" ref={mapRef} style={{ height: '100%', width: '100%' }} >

        </div>
      </div>
    </>
  )
};
export default WebMapViewForFullDash;