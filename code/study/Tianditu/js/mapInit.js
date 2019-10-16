require(["esri/map",
	"esri/SpatialReference",
	"esri/geometry/Point",
	"esri/geometry/Polygon",
	"esri/geometry/Polyline",
	"esri/geometry/Extent",
	"esri/geometry/ScreenPoint",
	"esri/layers/GraphicsLayer",
	"esri/symbols/SimpleLineSymbol",
	"esri/symbols/SimpleFillSymbol",
	"esri/symbols/TextSymbol",
	"esri/renderers/ClassBreaksRenderer",
	"esri/graphic",
	"esri/Color",
	"esri/toolbars/draw",
	"dojo/_base/connect",
	"dojo/domReady!"
], function(Map, SpatialReference, Point, Polygon, Polyline,
	Extent, ScreenPoint, GraphicsLayer, SimpleLineSymbol, SimpleFillSymbol,
	TextSymbol, ClassBreaksRenderer, Graphic, Color, DrawTool, connect) {



	var gifLayer = new esri.layers.GraphicsLayer({
		id: "gifLayer"
	});
	detailLayer = new esri.layers.GraphicsLayer({
		id: "detailLayer"
	});

	var region = {
		longitude: 120.371704000000, 
		latitude: 29.325195000000,
		regionlevel: '1'
	};


	new dojo.addOnLoad(init);

	// 地图初始化
	function init() {
		try {
			/*dojo.byId("#map").css("height", (document.documentElement.clientHeight) + "px");*/
			/* esri.config.defaults.io.corsDetection = false;
			 esri.config.defaults.io.proxyUrl = "<@baseUrl.home />/proxy.jsp";
			 esriConfig.defaults.io.alwaysUseProxy = true;*/
			var labels = [];
			//lod????
			for (var i = 0, il = lods.length; i < il; i++) {
				labels.push(lods[i].regionname);
			}

			esri.config.defaults.map.slider = {
				right: "30px",
				top: "200px",
				width: null,
				height: "120px"
			};
			esri.config.defaults.map.sliderLabel = {
				tick: 4, //横刻度线大小
				labels: labels, //显示信息
				//slider条信息文字样式设置，字体、字大小、字颜色、字离左边的距离
				style: "width:2em; font-family:Verdana; font-size:12px; color:#fff; padding-left:2px;"
			};
			map = new esri.Map("map", {
				logo: false,
				slider: false,
				sliderPosition: "top-left",
				sliderStyle: "large",
				sliderLabels: labels
			});
			//
			dojo.connect(map, "onLoad", initParams);
			initTianditu(map, region); //加载天地图
		} catch (e) {
			console.log("init map:" + e);
		}
	}

	//加载图层,画点、河道轨迹、巡查轨迹
	function initParams() {
		map.addLayer(gifLayer);
		map.addLayer(detailLayer);
		detailLayer.hide();
		gridLayer = new esri.layers.GraphicsLayer({
			id: "gridLayer"
		});

		//画点,样式为图片
		for (var i = 0; i < data.length; i++) {
			gridLayer.add(createGraphic(data[i], map.spatialReference));
		}
		map.addLayer(gridLayer);

		//河道轨迹
		createReachLine(reach);
		//巡查轨迹
		playCoords();
		//循环播放轨迹
		displayTrackPlayback();

	}

	//画点,样式为图片
	function createGraphic(member, sp) {
		var point = new esri.geometry.Point(member.longitude, member.latitude, sp);
		var symbol = new esri.symbol.PictureMarkerSymbol("F:/study/dojo/123.png", 35, 35);
		var attr = {
			"id": member.id,
			"name": member.name,
			"mainclassname": member.mainclassname,
			"constructioncont": member.constructioncont,
			"projecttarget": member.projecttarget,
			"totalinvestment": member.totalinvestment,
			"constructionunitname": member.constructionunitname,
			"constructionunitcontacter": member.constructionunitcontacter,
			"constructionunitcontactertel": member.constructionunitcontactertel
		};
		//创建模版
		var infoTemplate = new esri.InfoTemplate("详情", createMemberInfoWindow(member));
		//创建图像
		var graphic = new esri.Graphic(point, symbol, attr, infoTemplate);
		return graphic;
	}

	function createMemberInfoWindow(member) {
		var m_id = "'" + member.id + "'";
		var html = '<div class="pop_box_con" >' + '<p hidden> <label>项目id：</label> <span>' + (member.id == null ? "" : member.id) + '</span> </p>' + '<p> <label>项目名称：</label> <span>' + (member.name == null ? "" : member.name) + '</span> </p>' + '<p> <label>工程类型：</label> <span>' + (member.mainclassname == null ? "" : member.mainclassname + " &gt; " + member.subclassname) + '</span> </p>' + '<p> <label>项目内容：</label> <span>' + (member.constructioncont == null ? "" : member.constructioncont) + '</span></p>' + '<p> <label>项目目标：</label> <span>' + (member.projecttarget == null ? "" : member.projecttarget) + '</span></p>' + '<p> <label>总投资(万元)：</label> <span>' + (member.totalinvestment == null ? "" : member.totalinvestment) + '</span></p>' + '<p> <label>建设单位：</label> <span>' + (member.constructionunitname == null ? "" : member.constructionunitname) + '</span></p>' + '<p> <label>联系人：</label> <span>' + (member.constructionunitcontacter == null ? "" : member.constructionunitcontacter) + '</span></p>' + '<p> <label>联系电话：</label> <span>' + (member.constructionunitcontactertel == null ? "" : member.constructionunitcontactertel) + '</span></p>' + '<p> <input type="button" class="search_btn_c" id="prj_detail" onclick="detailProjectById(' + m_id + ')" value="数据详情"/> </p>' + '</div>';
		return html;
	}

	//河道轨迹
	function createReachLine(reach) {
		var rings = [];
		var array = reach.split(";");
		for (var i = 0; i < array.length; i++) {
			var pointArray = array[i].split(",");
			if (pointArray != "") {
				var p = [pointArray[0] * 1, pointArray[1] * 1];
				rings.push(p);
			}
		}
		var reachGeometry = new esri.geometry.Polyline(map.spatialReference);
		reachGeometry.addPath(rings);
		var lineSymbol = reachSymbol();
		var reachLine = new esri.Graphic(reachGeometry, lineSymbol);
		map.graphics.add(reachLine);

	}

	//河道样式
	function reachSymbol() {
		var color = new dojo.Color([255, 0, 0]); //[0,205,207]
		var lineSymbol = new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,
			color, 3);

		return lineSymbol;
	}


	var locusLayer;
	var recordLayer;
	var coordsArr;
	var patrolSymbolGraphic;
	//巡查轨迹
	function playCoords() {

		locusLayer = formatLayer(locusLayer, "locusLayer");
		recordLayer = formatLayer(recordLayer, "recordLayer");
		var polyline = new esri.geometry.Polyline(map.spatialReference);
		var lineSymbol = new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,
			new dojo.Color([30, 144, 255]), 2);

		var lineLightSymbol = reachLightSymbol();
		var reachLightLine;

		var markerSymbol;
		coordsArr = [];
		// 轨迹起始点
		var point = new esri.geometry.Point(120.041424982, 29.274933383, map.spatialReference);

		for (var i = 0; i < coords.length; i++) {
			coordsArr.push([parseFloat(coords[i].x), parseFloat(coords[i].y)]);
			var point = esri.geometry.Point(parseFloat(coords[i].x), parseFloat(coords[i].y), map.spatialReference);

			if (i == 0) {
				markerSymbol = new esri.symbol.PictureMarkerSymbol("./img/start.png", 24, 24);
			} else if (i == (coords.length - 1)) {
				markerSymbol = new esri.symbol.PictureMarkerSymbol("./img/end.png", 24, 24);
			} else {
				markerSymbol = new esri.symbol.SimpleMarkerSymbol({
					"color": [255, 255, 255, 64],
					"size": 3,
					"angle": -30,
					"xoffset": 0,
					"yoffset": 0,
					"type": "esriSMS",
					"style": "esriSMSCircle",
					"outline": {
						"color": [0, 0, 0, 255],
						"width": 1,
						"type": "esriSLS",
						"style": "esriSLSSolid"
					}
				});
			}
			var graphic = new esri.Graphic(point, markerSymbol);
			locusLayer.add(graphic);
		}

		polyline.addPath(coordsArr);
		reachLightLine = new esri.Graphic(polyline, lineLightSymbol);
		locusLayer.add(reachLightLine);
		map.setExtent(polyline.getExtent());
		var x = (polyline.getExtent().xmax + polyline.getExtent().xmin) / 2;
		var y = (polyline.getExtent().ymax + polyline.getExtent().ymin) / 2;
		var lastPoint = new esri.geometry.Point(x, y, map.spatialReference);
		map.centerAndZoom(lastPoint, 10);
		// loadRecords(patrolids[n],userid);
	}

	//轨迹回放
	function displayTrackPlayback() {
		//移除上一次轨迹回放时的巡查图标
		locusLayer.remove(patrolSymbolGraphic);
		//轨迹数组下标
		var trackPbIndex = 0;
		//轨迹回放定时器
		function displayTrackPlaybackTimer() {
			//存放轨迹数据
			var trackPbArrTemp = [];
			trackPbArrTemp.push(coordsArr[trackPbIndex]);
			trackPbArrTemp.push(coordsArr[++trackPbIndex]);
			//移除上一个终点图标
			locusLayer.remove(patrolSymbolGraphic);
			//巡查图标
			var patrolPoint = new esri.geometry.Point(parseFloat(trackPbArrTemp[1][0]), parseFloat(trackPbArrTemp[1][1]), map.spatialReference);
			var patrolMarkerSymbol = new esri.symbol.PictureMarkerSymbol("./img/walk.png", 24, 24);
			patrolSymbolGraphic = new esri.Graphic(patrolPoint, patrolMarkerSymbol);
			locusLayer.add(patrolSymbolGraphic);
			//检查当前坐标是否超出地图，若超出则设为地图中心
			var extent = map.extent;
			if (!extent.contains(patrolSymbolGraphic.geometry)) {
				map.centerAndZoom(patrolPoint);
			}

			//循环播放
			if (trackPbIndex == (coordsArr.length - 1)) {
				trackPbIndex = 0;
			}
			setTimeout(displayTrackPlaybackTimer, 80);
		}
		//开始画轨迹
		displayTrackPlaybackTimer();
	}

	//定义河道线高亮样式
	function reachLightSymbol() {
		var color = new dojo.Color([20, 240, 120]); //[0,205,207]
		var lineSymbol = new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,
			color, 2);
		return lineSymbol;
	}

	function formatLayer(layer, id) {
		if (layer != undefined) {
			layer.clear();
		} else {
			layer = new esri.layers.GraphicsLayer({
				id: id
			});
			map.addLayer(layer);
			if (id == "recordLayer") {
				// dojo.connect(layer, "onClick", showDetails);
			}
		}
		return layer;
	}

	// 绘图 TODO
	/*function onDraw() {
		var toolbar = new esri.toolbars.Draw(map, {showTooltips: true});

		toolbar.activate(esri.toolbars.Draw.POLYLINE);

		dojo.connect(toolbar, 'onDrawEnd', function(geometry) {
			var graphic = new esri.Graphic(geometry, PolyLineSymbol);
			map.graphics.add(graphic);
			toolbar.deactivate();
		})

	}*/

});

//test
function detailProjectById() {
	gridLayer.hide();
}