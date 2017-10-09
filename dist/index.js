!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("prop-types"),require("react")):"function"==typeof define&&define.amd?define(["prop-types","react"],t):"object"==typeof exports?exports["react-mapycz"]=t(require("prop-types"),require("react")):e["react-mapycz"]=t(e["prop-types"],e.react)}(this,function(e,t){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4)}([function(t,r){t.exports=e},function(e,r){e.exports=t},,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){var r=[],n=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{!n&&u.return&&u.return()}finally{if(o)throw a}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=function(e,t){return new Error("Missing required prop `"+e+"` in `"+t+"`. Validation failed.")},a=function(e,t){return new Error("Invalid prop `"+e+"` supplied to `"+t+"`. Validation failed.")},i=function(e){return!isNaN(e)},u=function(e){return i(e)&&e|0===e},c=function(e,t){return function(r){return i(r)&&r>=e&&r<=t}},l=function(e){return function(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ANONYMOUS";return void 0===t[r]?o(r,n):e(t,r,n)}},s=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ANONYMOUS",n=e[t];if(!(void 0===n||u(n)&&c(1,18)(n)))return a(t,r)};s.isRequired=l(s);var f=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ANONYMOUS",o=e[t];if(void 0!==o){if(!Array.isArray(o)||2!==o.length)return a(t,r);var i=n(o,2),u=i[0],l=i[1];if(!c(-90,90)(u)||!c(-180,180)(l))return a(t,r)}};f.isRequired=l(f);var p={zoom:s,coords:f};t.default=p},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(5);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n(o).default}});var a=r(6);Object.defineProperty(t,"MapyCzProvider",{enumerable:!0,get:function(){return n(a).default}});var i=r(8);Object.defineProperty(t,"ControlPane",{enumerable:!0,get:function(){return n(i).default}});var u=r(9);Object.defineProperty(t,"MarkerLayer",{enumerable:!0,get:function(){return n(u).default}});var c=r(10);Object.defineProperty(t,"Marker",{enumerable:!0,get:function(){return n(c).default}});var l=r(3);Object.defineProperty(t,"MapPropTypes",{enumerable:!0,get:function(){return n(l).default}})},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){var r=[],n=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{!n&&u.return&&u.return()}finally{if(o)throw a}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(1),s=n(l),f=r(0),p=n(f),d=r(3),y=n(d),b="_map-component-",h=function(e){function t(e,r){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r));n.onComponentMount=n.onComponentMount.bind(n),n.mapId=b+t.COUNTER++,n.mapLayers={};var i=e.zoom,u=e.centerCoords,c=e.layer;return n.state={zoom:i,centerCoords:u,layer:c,sMap:null},n}return i(t,e),c(t,[{key:"onComponentMount",value:function(e){!this.state.sMap&&e&&this.initiateMap(e)}},{key:"getChildContext",value:function(){return{sMap:this.state.sMap}}},{key:"initiateMap",value:function(e){var r=this.props,n=r.zoom,o=r.centerCoords,a=r.layer,i=u(o,2),c=i[0],l=i[1],s=window.SMap.Coords.fromWGS84(l,c),f=new window.SMap(e,s,n);this.mapLayers[a]=f.addDefaultLayer(SMap[t.LayerIds[a]]),this.mapLayers[a].enable(),this.setState({sMap:f})}},{key:"componentWillReceiveProps",value:function(e){var t=e.zoom,r=e.centerCoords,n=e.layer;this.setState({zoom:t,centerCoords:r,layer:n})}},{key:"componentDidUpdate",value:function(e,r){var n=this.state,o=n.zoom,a=n.layer,i=n.sMap;i&&(i.setZoom(o),a!=r.layer&&(this.mapLayers[a]||(this.mapLayers[a]=i.addDefaultLayer(SMap[t.LayerIds[a]])),this.mapLayers[r.layer].disable(),this.mapLayers[a].enable()))}},{key:"render",value:function(){var e=this.props,t=e.width,r=e.height,n=e.children;return s.default.createElement("div",{style:{width:t,height:r},ref:this.onComponentMount},this.state.sMap&&n)}}]),t}(s.default.Component);h.childContextTypes={sMap:p.default.object},h.LayerIds={TOURIST:"DEF_TURIST",PHOTO:"DEF_OPHOTO",BASE:"DEF_BASE",HYBRID:"DEF_HYBRID"},h.Layers=Object.keys(h.LayerIds).reduce(function(e,t){return e[t]=t,e},{}),h.propTypes={children:p.default.node,width:p.default.string,height:p.default.PropTypes.string,zoom:y.default.zoom,minZoom:y.default.zoom,maxZoom:y.default.zoom,centerCoords:y.default.coords,layer:p.default.oneOf(Object.keys(h.Layers)),onZoomStart:p.default.func},h.defaultProps={width:"100%",height:"300px",zoom:13,minZoom:2,maxZoom:18,centerCoords:[49.4404919,12.9297611],layer:h.Layers.BASE},t.default=h},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=r(1),l=n(c),s=r(0),f=n(s),p=r(7),d=n(p),y="NONE",b=function(e){var t=function(t){function r(){var e,t,n,i;o(this,r);for(var u=arguments.length,c=Array(u),l=0;l<u;l++)c[l]=arguments[l];return t=n=a(this,(e=r.__proto__||Object.getPrototypeOf(r)).call.apply(e,[this].concat(c))),n.state={scriptLoadingState:y},n.onScriptLoaded=n.onScriptLoaded.bind(n),i=t,a(n,i)}return i(r,t),u(r,[{key:"onScriptLoaded",value:function(){var e=this;window.Loader.async=!0,window.Loader.load(null,null,function(){e.setState({scriptLoadingState:"DONE"})})}},{key:"loadScript",value:function(){var e=this.props.scriptUrl,t=document.createElement("script");t.setAttribute("src",e),t.addEventListener("load",this.onScriptLoaded),document.head.appendChild(t),this.setState({scriptLoadingState:"RUNNING"})}},{key:"componentDidMount",value:function(){this.state.scriptLoadingState===y&&d.default&&(void 0===window.SMap?this.loadScript():this.setState({scriptLoadingState:"DONE"}))}},{key:"render",value:function(){return"DONE"===this.state.scriptLoadingState?l.default.createElement(e,this.props):null}}]),r}(l.default.Component);return t.displayName="MapyCzProvider",t.propTypes={scriptUrl:f.default.string.isRequired},t};t.default=b},function(e,t,r){"use strict";var n=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=n},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=r(1),l=n(c),s=r(0),f=n(s),p=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),u(t,[{key:"render",value:function(){return l.default.createElement("div",null,this.props.children)}}]),t}(l.default.Component);p.contextTypes={sMap:f.default.object},p.propTypes={children:f.default.node},t.default=p},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(1),s=n(l),f=r(0),p=n(f),d=function(e){function t(e,r){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r));n.state={sLayer:null};var i=new window.SMap.Layer.Marker;return n.context.sMap.addLayer(i),n.props.isEnabled&&i.enable(),n.state={sLayer:i},n}return i(t,e),c(t,[{key:"getChildContext",value:function(){return u({},this.context,{sLayer:this.state.sLayer})}},{key:"componentWillUnmount",value:function(){this.state.sLayer&&(this.context.sMap.removeLayer(this.state.sLayer),this.setState({sLayer:null}))}},{key:"render",value:function(){return s.default.createElement("div",null,this.props.children)}}]),t}(s.default.Component);d.contextTypes={sMap:p.default.object},d.childContextTypes={sMap:p.default.object,sLayer:p.default.object},d.propTypes={children:p.default.node,isEnabled:p.default.bool},d.defaultProps={isEnabled:!0},t.default=d},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){var r=[],n=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{!n&&u.return&&u.return()}finally{if(o)throw a}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(1),s=n(l),f=r(0),p=n(f),d=r(3),y=n(d),b=function(e){function t(e,r){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r));n.state={sMarker:null};var i=e.title,c=u(e.coords,2),l=c[0],s=c[1],f=window.SMap.Coords.fromWGS84(s,l),p=new window.SMap.Marker(f,!1,{title:i});return n.context.sLayer.addMarker(p),n.state={sMarker:p},n}return i(t,e),c(t,[{key:"componentWillUnmount",value:function(){this.context.sLayer.removeMarker(this.state.sMarker),this.setState({sMarker:null})}},{key:"render",value:function(){return null}}]),t}(s.default.Component);b.contextTypes={sMap:p.default.object,sLayer:p.default.object},b.propTypes={coords:y.default.coords.isRequired,content:p.default.element,title:p.default.string},t.default=b}])});