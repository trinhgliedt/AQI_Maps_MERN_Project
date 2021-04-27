(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{28:function(e,t,a){e.exports=a(59)},33:function(e,t,a){},34:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return m}));var n=a(0),o=a.n(n),l=a(21),r=a.n(l),c=(a(33),a(1)),i=(a(34),a(8)),s=a.n(i),u=a(3),m=function(e){var t=e.options,a=e.onMount,l={ref:Object(n.useRef)()},r=function(){var e=new window.google.maps.Map(l.ref.current,t);a&&a(e)};return Object(n.useEffect)((function(){if(!window.google){var e=document.createElement("script");e.type="text/javascript",e.src="https://maps.googleapis.com/maps/api/js?key=".concat("AIzaSyCr_x838HuhDN69fx_9ISbkLcor_jTtOkM");var t=document.getElementsByTagName("script")[0];return t.parentNode.insertBefore(e,t),e.addEventListener("load",r),function(){return e.removeEventListener("load",r)}}r()})),o.a.createElement("div",Object.assign({},l,{style:{height:"80vh",margin:"1em 0",borderRadius:"0.5em"}}))},d=a(23),p=a(27),f=function(e){var t=e.locLat,a=e.locLng,l=Object(n.useState)(null),r=Object(c.a)(l,2),i=r[0],u=r[1],m=Object(n.useState)(!0),f=Object(c.a)(m,2),E=f[0],b=f[1],v=Object(n.useState)(!1),g=Object(c.a)(v,2),y=g[0],h=g[1],O=Object(n.useState)(""),q=Object(c.a)(O,2),w=q[0],S=q[1],x=["co","no2","o3","pm10","pm25","so2"];Object(n.useEffect)((function(){s.a.get("https://api.waqi.info/feed/geo:".concat(t,";").concat(a,"/?token=d2583b4394214a830ffdade2d10b103620d66ee7")).then((function(e){if("ok"===e.data.status){var t,a=Object(p.a)({},e.data.data),n=Object(d.a)(x);try{for(n.s();!(t=n.n()).done;){var o=t.value;a.iaqi.hasOwnProperty(o)||(a.iaqi[o]={v:"N/A"})}}catch(l){n.e(l)}finally{n.f()}u(a)}else b(!1);h(!0)})).catch((function(e){return console.error(e)}))}),[t,a]);var j={position:"absolute",top:"-20px",right:"120px"},M={position:"relative",padding:"5px",border:"1px black solid"};return y&&null!==i?E?o.a.createElement("div",null,o.a.createElement("table",{style:{margin:"0 auto",marginBottom:"50px"}},o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",{style:{padding:"2px",border:"1px black solid",width:"100px"}},"Station"),o.a.createElement("td",{style:M},o.a.createElement("b",null,i.city.name))),o.a.createElement("tr",null,o.a.createElement("td",{style:M},"AQI",o.a.createElement("span",{onMouseOver:function(e){return S("aqi")},onMouseLeave:function(e){return S("")}},o.a.createElement("span",{style:{fontSize:"10px"}},"\u2754"),"aqi"===w&&o.a.createElement("div",{style:j},"Real-time air quality information"))),o.a.createElement("td",{style:M},i.aqi)),o.a.createElement("tr",null,o.a.createElement("td",{style:M},"CO",o.a.createElement("span",{onMouseOver:function(e){return S("co")},onMouseLeave:function(e){return S("")}},o.a.createElement("span",{style:{fontSize:"10px"}},"\u2754"),"co"===w&&o.a.createElement("div",{style:j},"Carbon Monoxide level"))),o.a.createElement("td",{style:M},i.iaqi.co.v)),o.a.createElement("tr",null,o.a.createElement("td",{style:M},"NO",o.a.createElement("sub",null,"2"),o.a.createElement("span",{onMouseOver:function(e){return S("no2")},onMouseOut:function(e){return S("")}},o.a.createElement("span",{style:{fontSize:"10px"}},"\u2754"),"no2"===w&&o.a.createElement("div",{style:j},"Nitrogen Dioxide level"))),o.a.createElement("td",{style:M},i.iaqi.no2.v)),o.a.createElement("tr",null,o.a.createElement("td",{style:M},"O",o.a.createElement("sub",null,"3"),o.a.createElement("span",{onMouseOver:function(e){return S("o3")},onMouseOut:function(e){return S("")}},o.a.createElement("span",{style:{fontSize:"10px"}},"\u2754"),"o3"===w&&o.a.createElement("div",{style:j},"Ground-level ozone"))),o.a.createElement("td",{style:M},i.iaqi.o3.v)),o.a.createElement("tr",null,o.a.createElement("td",{style:M},"PM",o.a.createElement("sub",null,"10"),o.a.createElement("span",{onMouseOver:function(e){return S("pm10")},onMouseOut:function(e){return S("")}},o.a.createElement("span",{style:{fontSize:"10px"}},"\u2754"),"pm10"===w&&o.a.createElement("div",{style:j},"Particulate matter smaller than 10 micrometer"))),o.a.createElement("td",{style:M},i.iaqi.pm10.v)),o.a.createElement("tr",null,o.a.createElement("td",{style:M},"PM",o.a.createElement("sub",null,"2.5"),o.a.createElement("span",{onMouseOver:function(e){return S("pm25")},onMouseOut:function(e){return S("")}},o.a.createElement("span",{style:{fontSize:"10px"}},"\u2754"),"pm25"===w&&o.a.createElement("div",{style:j},"Particulate matter smaller than 2.5 micrometer"))),o.a.createElement("td",{style:M},i.iaqi.pm25.v)),o.a.createElement("tr",null,o.a.createElement("td",{style:M},"SO",o.a.createElement("sub",null,"2"),o.a.createElement("span",{onMouseOver:function(e){return S("so2")},onMouseOut:function(e){return S("")}},o.a.createElement("span",{style:{fontSize:"10px"}},"\u2754"),"so2"===w&&o.a.createElement("div",{style:j},"Sulfur Dioxide level"))),o.a.createElement("td",{style:M},i.iaqi.so2.v)),o.a.createElement("tr",null,o.a.createElement("td",{style:M},"Last Updated On"),o.a.createElement("td",{style:M},i.time.s))))):o.a.createElement("div",null,"No information in this area..."):o.a.createElement("div",null,"Fetching station information...")},E=a(24),b=a(26),v=a(7),g=a.n(v),y=function(e){var t=e.setLoc,a=e.aqiStations,l=e.setFilteredStations,r=Object(n.useState)(""),i=Object(c.a)(r,2),s=i[0],m=i[1],d=Object(n.useState)("0"),p=Object(c.a)(d,2),f=p[0],E=p[1];return g.a.setApiKey("AIzaSyCr_x838HuhDN69fx_9ISbkLcor_jTtOkM"),o.a.createElement("div",null,o.a.createElement("form",{onSubmit:function(e){!function(e){e.preventDefault(),g.a.fromAddress(s).then((function(e){t(e.results[0].geometry.location),l(a),Object(u.c)("/stations/".concat(e.results[0].geometry.location.lat,"/").concat(e.results[0].geometry.location.lng))}),(function(e){console.error(e)})),m("")}(e)}},o.a.createElement("label",{className:"my-2"},"Address:"),o.a.createElement("input",{type:"text",className:"mx-2 my-2",value:s,onChange:function(e){m(e.target.value)}}),o.a.createElement("button",{className:"btn btn-sm btn-info shadow mb-2"},"Show")),o.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=Object(b.a)(a).filter((function(e){return"Mexico"!==e.station.name.slice(e.station.name.length-6)&&"Canada"!==e.station.name.slice(e.station.name.length-6)&&"Saguenay"!==e.station.name.slice(e.station.name.length-8)&&"-"!=e.aqi})).filter((function(e){return"0"==f||("1"==f?e.aqi>0&&e.aqi<=50:"2"==f?e.aqi>50&&e.aqi<=100:"3"==f?e.aqi>100&&e.aqi<=150:"4"==f?e.aqi>150&&e.aqi<=200:"5"==f?e.aqi>200&&e.aqi<=300:"6"==f?e.aqi>300:void 0)}));l(t),Object(u.c)("/stations/filter")}},o.a.createElement("label",null,"Filter by AQI:"),o.a.createElement("select",{className:"mx-2",onChange:function(e){return E(e.target.value)}},o.a.createElement("option",{value:"0"},"Show All"),o.a.createElement("option",{value:"1"},"0~50"),o.a.createElement("option",{value:"2"},"51~100"),o.a.createElement("option",{value:"3"},"101~150"),o.a.createElement("option",{value:"4"},"151~200"),o.a.createElement("option",{value:"5"},"201~300"),o.a.createElement("option",{value:"6"},"301+")),o.a.createElement("input",{className:"btn btn-sm btn-info shadow mb-2",type:"submit",value:"Filter"})))},h=function(e){var t=e.setLoc,a=e.filteredStations,n={border:"1px solid black",padding:"5px"};return o.a.createElement("div",{style:{height:"500px",overflow:"auto"}},o.a.createElement("table",{className:"table table-fixed col-9 border table-scroll table-wrap",style:{margin:"0 auto"}},o.a.createElement("thead",{style:{position:"sticky"}},o.a.createElement("tr",null,o.a.createElement("th",{scope:"col",style:n},"Station ID"),o.a.createElement("th",{scope:"col",style:n},"Station"),o.a.createElement("th",{scope:"col",style:n},"AQI"),o.a.createElement("th",{scope:"col",style:n},"Action"))),o.a.createElement("tbody",{style:{height:"500px",overflow:"auto"}},a.filter((function(e){return"Mexico"!==e.station.name.slice(e.station.name.length-6)&&"Canada"!==e.station.name.slice(e.station.name.length-6)&&"Saguenay"!==e.station.name.slice(e.station.name.length-8)&&"-"!==e.aqi})).sort((function(e,t){return parseInt(e.aqi)>parseInt(t.aqi)?1:-1})).map((function(e,a){var l="";return l=e.aqi>150?"bg-danger":e.aqi>50?"bg-warning":"bg-success",o.a.createElement("tr",{key:a},o.a.createElement("td",{style:n},e.uid),o.a.createElement("td",{className:"text-left",style:n},e.station.name),o.a.createElement("td",{style:n,className:l},e.aqi),o.a.createElement("td",{style:n},o.a.createElement("button",{className:"btn btn-sm btn-info shadow mb-2",onClick:function(a){return n=e.lat,o=e.lon,t({lat:n,lng:o}),void Object(u.c)("/stations/".concat(n,"/").concat(o));var n,o}},"Go to station")))})))))};a(9),a(25);var O=function(e){var t,a=e.mapProps,l=function(e){var t=e.coords,a=t.latitude,n=t.longitude;return p({lat:a,lng:n}),{lat:a,lng:n}},r=Object(n.useState)({lat:40.73061,lng:-73.935242}),i=Object(c.a)(r,2),d=i[0],p=i[1],b=Object(n.useState)([]),v=Object(c.a)(b,2),g=v[0],O=v[1],q=Object(n.useState)([]),w=Object(c.a)(q,2),S=w[0],x=w[1];return Object(n.useEffect)((function(){window.navigator.geolocation.getCurrentPosition(l,console.log),s.a.get("https://api.waqi.info/map/bounds/?token=d2583b4394214a830ffdade2d10b103620d66ee7&latlng=24.846565,-65.960261,48.987427,-124.732715").then((function(e){O(e.data.data),x(e.data.data)})).catch((function(e){return console.log(e)}))}),[]),a={options:{center:d,zoom:12},onMount:(t=S,function(e){var a,n=[],o="";t.forEach((function(t,l){if("Mexico"!==t.station.name.slice(t.station.name.length-6)&&"Canada"!==t.station.name.slice(t.station.name.length-6)&&"Saguenay"!==t.station.name.slice(t.station.name.length-8)&&"-"!==t.aqi){t.aqi>200?o="purple":t.aqi>150?o="red":t.aqi>100?o="orange":t.aqi>50?o="yellow":t.aqi<=50&&(o="green");var r=new window.google.maps.LatLng(t.lat,t.lon),c=new window.google.maps.Marker({map:e,position:r,title:t.station.name,id:l+1,icon:{url:"http://maps.google.com/mapfiles/ms/icons/"+o+"-dot.png"}});n.push(c);var i="background-color:".concat(function(e){var t=120-Math.floor(.8*e);return"hsl(".concat(t,",").concat("100%",",").concat("50%",")")}(t.aqi));parseInt(t.aqi)>200&&(i="background-color:purple"),parseInt(t.aqi)>100&&(i+=";color:white"),a=new window.google.maps.InfoWindow({}),c.addListener("click",(function(){a.setContent('<div style="'.concat(i,'">\n              <h4 style="').concat(i,'">').concat(t.station.name,"</h4>\n              <p>Air Quality Index: <b>").concat(t.aqi,"</b></p>\n              <p>Last Updated: ").concat(t.station.time,"</p>\n            </div>")),a.open(e,c),Object(u.c)("/stations/".concat(t.lat,"/").concat(t.lon))})),e.addListener("click",(function(){a&&a.close()}))}})),new E.a(e,n,{imagePath:"https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"})})},o.a.createElement("div",{className:"App"},o.a.createElement(y,{setLoc:function(e){return p(e)},aqiStations:g,setFilteredStations:x}),o.a.createElement(m,a),o.a.createElement(u.b,{primary:!1},o.a.createElement(h,{path:"/stations/filter",setLoc:function(e){return p(e)},filteredStations:S}),o.a.createElement(f,{style:{visibility:"visible"},path:"/stations/:locLat/:locLng"})),o.a.createElement(u.a,{from:"/",to:"/stations/filter",noThrow:"true"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(58);r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.300aaef3.chunk.js.map