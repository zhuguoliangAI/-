require(["esri/Map",
	"esri/layers/GraphicsLayer",
	"esri/PopupTemplate",
	"esri/views/MapView",
	"esri/views/SceneView",
	"esri/Graphic",
	"esri/geometry/Point",
	"esri/symbols/PictureMarkerSymbol",
	"dojo/dom",
	"dojo/domReady!largeScreenDisplayMap"
], function(Map, GraphicsLayer, PopupTemplate, MapView, SceneView, Graphic, Point, PictureMarkerSymbol, dom) {
	var region = {
		longitude: 120.371704000000, 
		latitude: 29.325195000000
	};
	var map = new Map({
		basemap: "hybrid", //hybrid、dark-gray、topo
		ground: "world-elevation"
	});
	var view = new SceneView({
		container: "viewDiv",
		map: map,
		scale: 70000000,
		center: [region.longitude, region.latitude]
	});
});