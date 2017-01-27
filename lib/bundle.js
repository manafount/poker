/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createjsEaseljs = __webpack_require__(1);
	
	var _createjsEaseljs2 = _interopRequireDefault(_createjsEaseljs);
	
	var _createjsTweenjs = __webpack_require__(2);
	
	var _poker = __webpack_require__(3);
	
	var _poker2 = _interopRequireDefault(_poker);
	
	var _deck = __webpack_require__(4);
	
	var _deck2 = _interopRequireDefault(_deck);
	
	var _hand = __webpack_require__(6);
	
	var _hand2 = _interopRequireDefault(_hand);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	document.addEventListener('DOMContentLoaded', function () {
	  var drawButton = document.getElementById("draw-button");
	  var dealButton = document.getElementById("deal-button");
	  var stage = new _createjsEaseljs2.default.Stage("canvas");
	  var game = new _poker2.default(stage);
	
	  drawButton.disabled = true;
	  drawButton.addEventListener("click", function () {
	    return game.handleDrawButton(drawButton);
	  });
	  dealButton.addEventListener("click", function () {
	    return game.handleDealButton(dealButton);
	  });
	
	  _createjsEaseljs2.default.Ticker.setFPS(60);
	  _createjsEaseljs2.default.Ticker.addEventListener("tick", handleTick);
	  function handleTick(event) {
	    stage.update();
	  }
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	(function() {
	
	/*!
	* @license EaselJS
	* Visit http://createjs.com/ for documentation, updates and examples.
	*
	* Copyright (c) 2011-2015 gskinner.com, inc.
	*
	* Distributed under the terms of the MIT license.
	* http://www.opensource.org/licenses/mit-license.html
	*
	* This notice shall be included in all copies or substantial portions of the Software.
	*/
	this.createjs=this.createjs||{},createjs.extend=function(a,b){"use strict";function c(){this.constructor=a}return c.prototype=b.prototype,a.prototype=new c},this.createjs=this.createjs||{},createjs.promote=function(a,b){"use strict";var c=a.prototype,d=Object.getPrototypeOf&&Object.getPrototypeOf(c)||c.__proto__;if(d){c[(b+="_")+"constructor"]=d.constructor;for(var e in d)c.hasOwnProperty(e)&&"function"==typeof d[e]&&(c[b+e]=d[e])}return a},this.createjs=this.createjs||{},createjs.indexOf=function(a,b){"use strict";for(var c=0,d=a.length;d>c;c++)if(b===a[c])return c;return-1},this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c){this.type=a,this.target=null,this.currentTarget=null,this.eventPhase=0,this.bubbles=!!b,this.cancelable=!!c,this.timeStamp=(new Date).getTime(),this.defaultPrevented=!1,this.propagationStopped=!1,this.immediatePropagationStopped=!1,this.removed=!1}var b=a.prototype;b.preventDefault=function(){this.defaultPrevented=this.cancelable&&!0},b.stopPropagation=function(){this.propagationStopped=!0},b.stopImmediatePropagation=function(){this.immediatePropagationStopped=this.propagationStopped=!0},b.remove=function(){this.removed=!0},b.clone=function(){return new a(this.type,this.bubbles,this.cancelable)},b.set=function(a){for(var b in a)this[b]=a[b];return this},b.toString=function(){return"[Event (type="+this.type+")]"},createjs.Event=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(){this._listeners=null,this._captureListeners=null}var b=a.prototype;a.initialize=function(a){a.addEventListener=b.addEventListener,a.on=b.on,a.removeEventListener=a.off=b.removeEventListener,a.removeAllEventListeners=b.removeAllEventListeners,a.hasEventListener=b.hasEventListener,a.dispatchEvent=b.dispatchEvent,a._dispatchEvent=b._dispatchEvent,a.willTrigger=b.willTrigger},b.addEventListener=function(a,b,c){var d;d=c?this._captureListeners=this._captureListeners||{}:this._listeners=this._listeners||{};var e=d[a];return e&&this.removeEventListener(a,b,c),e=d[a],e?e.push(b):d[a]=[b],b},b.on=function(a,b,c,d,e,f){return b.handleEvent&&(c=c||b,b=b.handleEvent),c=c||this,this.addEventListener(a,function(a){b.call(c,a,e),d&&a.remove()},f)},b.removeEventListener=function(a,b,c){var d=c?this._captureListeners:this._listeners;if(d){var e=d[a];if(e)for(var f=0,g=e.length;g>f;f++)if(e[f]==b){1==g?delete d[a]:e.splice(f,1);break}}},b.off=b.removeEventListener,b.removeAllEventListeners=function(a){a?(this._listeners&&delete this._listeners[a],this._captureListeners&&delete this._captureListeners[a]):this._listeners=this._captureListeners=null},b.dispatchEvent=function(a,b,c){if("string"==typeof a){var d=this._listeners;if(!(b||d&&d[a]))return!0;a=new createjs.Event(a,b,c)}else a.target&&a.clone&&(a=a.clone());try{a.target=this}catch(e){}if(a.bubbles&&this.parent){for(var f=this,g=[f];f.parent;)g.push(f=f.parent);var h,i=g.length;for(h=i-1;h>=0&&!a.propagationStopped;h--)g[h]._dispatchEvent(a,1+(0==h));for(h=1;i>h&&!a.propagationStopped;h++)g[h]._dispatchEvent(a,3)}else this._dispatchEvent(a,2);return!a.defaultPrevented},b.hasEventListener=function(a){var b=this._listeners,c=this._captureListeners;return!!(b&&b[a]||c&&c[a])},b.willTrigger=function(a){for(var b=this;b;){if(b.hasEventListener(a))return!0;b=b.parent}return!1},b.toString=function(){return"[EventDispatcher]"},b._dispatchEvent=function(a,b){var c,d=1==b?this._captureListeners:this._listeners;if(a&&d){var e=d[a.type];if(!e||!(c=e.length))return;try{a.currentTarget=this}catch(f){}try{a.eventPhase=b}catch(f){}a.removed=!1,e=e.slice();for(var g=0;c>g&&!a.immediatePropagationStopped;g++){var h=e[g];h.handleEvent?h.handleEvent(a):h(a),a.removed&&(this.off(a.type,h,1==b),a.removed=!1)}}},createjs.EventDispatcher=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(){throw"Ticker cannot be instantiated."}a.RAF_SYNCHED="synched",a.RAF="raf",a.TIMEOUT="timeout",a.useRAF=!1,a.timingMode=null,a.maxDelta=0,a.paused=!1,a.removeEventListener=null,a.removeAllEventListeners=null,a.dispatchEvent=null,a.hasEventListener=null,a._listeners=null,createjs.EventDispatcher.initialize(a),a._addEventListener=a.addEventListener,a.addEventListener=function(){return!a._inited&&a.init(),a._addEventListener.apply(a,arguments)},a._inited=!1,a._startTime=0,a._pausedTime=0,a._ticks=0,a._pausedTicks=0,a._interval=50,a._lastTime=0,a._times=null,a._tickTimes=null,a._timerId=null,a._raf=!0,a.setInterval=function(b){a._interval=b,a._inited&&a._setupTick()},a.getInterval=function(){return a._interval},a.setFPS=function(b){a.setInterval(1e3/b)},a.getFPS=function(){return 1e3/a._interval};try{Object.defineProperties(a,{interval:{get:a.getInterval,set:a.setInterval},framerate:{get:a.getFPS,set:a.setFPS}})}catch(b){console.log(b)}a.init=function(){a._inited||(a._inited=!0,a._times=[],a._tickTimes=[],a._startTime=a._getTime(),a._times.push(a._lastTime=0),a.interval=a._interval)},a.reset=function(){if(a._raf){var b=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame;b&&b(a._timerId)}else clearTimeout(a._timerId);a.removeAllEventListeners("tick"),a._timerId=a._times=a._tickTimes=null,a._startTime=a._lastTime=a._ticks=0,a._inited=!1},a.getMeasuredTickTime=function(b){var c=0,d=a._tickTimes;if(!d||d.length<1)return-1;b=Math.min(d.length,b||0|a.getFPS());for(var e=0;b>e;e++)c+=d[e];return c/b},a.getMeasuredFPS=function(b){var c=a._times;return!c||c.length<2?-1:(b=Math.min(c.length-1,b||0|a.getFPS()),1e3/((c[0]-c[b])/b))},a.setPaused=function(b){a.paused=b},a.getPaused=function(){return a.paused},a.getTime=function(b){return a._startTime?a._getTime()-(b?a._pausedTime:0):-1},a.getEventTime=function(b){return a._startTime?(a._lastTime||a._startTime)-(b?a._pausedTime:0):-1},a.getTicks=function(b){return a._ticks-(b?a._pausedTicks:0)},a._handleSynch=function(){a._timerId=null,a._setupTick(),a._getTime()-a._lastTime>=.97*(a._interval-1)&&a._tick()},a._handleRAF=function(){a._timerId=null,a._setupTick(),a._tick()},a._handleTimeout=function(){a._timerId=null,a._setupTick(),a._tick()},a._setupTick=function(){if(null==a._timerId){var b=a.timingMode||a.useRAF&&a.RAF_SYNCHED;if(b==a.RAF_SYNCHED||b==a.RAF){var c=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame;if(c)return a._timerId=c(b==a.RAF?a._handleRAF:a._handleSynch),void(a._raf=!0)}a._raf=!1,a._timerId=setTimeout(a._handleTimeout,a._interval)}},a._tick=function(){var b=a.paused,c=a._getTime(),d=c-a._lastTime;if(a._lastTime=c,a._ticks++,b&&(a._pausedTicks++,a._pausedTime+=d),a.hasEventListener("tick")){var e=new createjs.Event("tick"),f=a.maxDelta;e.delta=f&&d>f?f:d,e.paused=b,e.time=c,e.runTime=c-a._pausedTime,a.dispatchEvent(e)}for(a._tickTimes.unshift(a._getTime()-c);a._tickTimes.length>100;)a._tickTimes.pop();for(a._times.unshift(c);a._times.length>100;)a._times.pop()};var c=window.performance&&(performance.now||performance.mozNow||performance.msNow||performance.oNow||performance.webkitNow);a._getTime=function(){return(c&&c.call(performance)||(new Date).getTime())-a._startTime},createjs.Ticker=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(){throw"UID cannot be instantiated"}a._nextID=0,a.get=function(){return a._nextID++},createjs.UID=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d,e,f,g,h,i,j,k){this.Event_constructor(a,b,c),this.stageX=d,this.stageY=e,this.rawX=null==i?d:i,this.rawY=null==j?e:j,this.nativeEvent=f,this.pointerID=g,this.primary=!!h,this.relatedTarget=k}var b=createjs.extend(a,createjs.Event);b._get_localX=function(){return this.currentTarget.globalToLocal(this.rawX,this.rawY).x},b._get_localY=function(){return this.currentTarget.globalToLocal(this.rawX,this.rawY).y},b._get_isTouch=function(){return-1!==this.pointerID};try{Object.defineProperties(b,{localX:{get:b._get_localX},localY:{get:b._get_localY},isTouch:{get:b._get_isTouch}})}catch(c){}b.clone=function(){return new a(this.type,this.bubbles,this.cancelable,this.stageX,this.stageY,this.nativeEvent,this.pointerID,this.primary,this.rawX,this.rawY)},b.toString=function(){return"[MouseEvent (type="+this.type+" stageX="+this.stageX+" stageY="+this.stageY+")]"},createjs.MouseEvent=createjs.promote(a,"Event")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d,e,f){this.setValues(a,b,c,d,e,f)}var b=a.prototype;a.DEG_TO_RAD=Math.PI/180,a.identity=null,b.setValues=function(a,b,c,d,e,f){return this.a=null==a?1:a,this.b=b||0,this.c=c||0,this.d=null==d?1:d,this.tx=e||0,this.ty=f||0,this},b.append=function(a,b,c,d,e,f){var g=this.a,h=this.b,i=this.c,j=this.d;return(1!=a||0!=b||0!=c||1!=d)&&(this.a=g*a+i*b,this.b=h*a+j*b,this.c=g*c+i*d,this.d=h*c+j*d),this.tx=g*e+i*f+this.tx,this.ty=h*e+j*f+this.ty,this},b.prepend=function(a,b,c,d,e,f){var g=this.a,h=this.c,i=this.tx;return this.a=a*g+c*this.b,this.b=b*g+d*this.b,this.c=a*h+c*this.d,this.d=b*h+d*this.d,this.tx=a*i+c*this.ty+e,this.ty=b*i+d*this.ty+f,this},b.appendMatrix=function(a){return this.append(a.a,a.b,a.c,a.d,a.tx,a.ty)},b.prependMatrix=function(a){return this.prepend(a.a,a.b,a.c,a.d,a.tx,a.ty)},b.appendTransform=function(b,c,d,e,f,g,h,i,j){if(f%360)var k=f*a.DEG_TO_RAD,l=Math.cos(k),m=Math.sin(k);else l=1,m=0;return g||h?(g*=a.DEG_TO_RAD,h*=a.DEG_TO_RAD,this.append(Math.cos(h),Math.sin(h),-Math.sin(g),Math.cos(g),b,c),this.append(l*d,m*d,-m*e,l*e,0,0)):this.append(l*d,m*d,-m*e,l*e,b,c),(i||j)&&(this.tx-=i*this.a+j*this.c,this.ty-=i*this.b+j*this.d),this},b.prependTransform=function(b,c,d,e,f,g,h,i,j){if(f%360)var k=f*a.DEG_TO_RAD,l=Math.cos(k),m=Math.sin(k);else l=1,m=0;return(i||j)&&(this.tx-=i,this.ty-=j),g||h?(g*=a.DEG_TO_RAD,h*=a.DEG_TO_RAD,this.prepend(l*d,m*d,-m*e,l*e,0,0),this.prepend(Math.cos(h),Math.sin(h),-Math.sin(g),Math.cos(g),b,c)):this.prepend(l*d,m*d,-m*e,l*e,b,c),this},b.rotate=function(b){b*=a.DEG_TO_RAD;var c=Math.cos(b),d=Math.sin(b),e=this.a,f=this.b;return this.a=e*c+this.c*d,this.b=f*c+this.d*d,this.c=-e*d+this.c*c,this.d=-f*d+this.d*c,this},b.skew=function(b,c){return b*=a.DEG_TO_RAD,c*=a.DEG_TO_RAD,this.append(Math.cos(c),Math.sin(c),-Math.sin(b),Math.cos(b),0,0),this},b.scale=function(a,b){return this.a*=a,this.b*=a,this.c*=b,this.d*=b,this},b.translate=function(a,b){return this.tx+=this.a*a+this.c*b,this.ty+=this.b*a+this.d*b,this},b.identity=function(){return this.a=this.d=1,this.b=this.c=this.tx=this.ty=0,this},b.invert=function(){var a=this.a,b=this.b,c=this.c,d=this.d,e=this.tx,f=a*d-b*c;return this.a=d/f,this.b=-b/f,this.c=-c/f,this.d=a/f,this.tx=(c*this.ty-d*e)/f,this.ty=-(a*this.ty-b*e)/f,this},b.isIdentity=function(){return 0===this.tx&&0===this.ty&&1===this.a&&0===this.b&&0===this.c&&1===this.d},b.equals=function(a){return this.tx===a.tx&&this.ty===a.ty&&this.a===a.a&&this.b===a.b&&this.c===a.c&&this.d===a.d},b.transformPoint=function(a,b,c){return c=c||{},c.x=a*this.a+b*this.c+this.tx,c.y=a*this.b+b*this.d+this.ty,c},b.decompose=function(b){null==b&&(b={}),b.x=this.tx,b.y=this.ty,b.scaleX=Math.sqrt(this.a*this.a+this.b*this.b),b.scaleY=Math.sqrt(this.c*this.c+this.d*this.d);var c=Math.atan2(-this.c,this.d),d=Math.atan2(this.b,this.a),e=Math.abs(1-c/d);return 1e-5>e?(b.rotation=d/a.DEG_TO_RAD,this.a<0&&this.d>=0&&(b.rotation+=b.rotation<=0?180:-180),b.skewX=b.skewY=0):(b.skewX=c/a.DEG_TO_RAD,b.skewY=d/a.DEG_TO_RAD),b},b.copy=function(a){return this.setValues(a.a,a.b,a.c,a.d,a.tx,a.ty)},b.clone=function(){return new a(this.a,this.b,this.c,this.d,this.tx,this.ty)},b.toString=function(){return"[Matrix2D (a="+this.a+" b="+this.b+" c="+this.c+" d="+this.d+" tx="+this.tx+" ty="+this.ty+")]"},a.identity=new a,createjs.Matrix2D=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d,e){this.setValues(a,b,c,d,e)}var b=a.prototype;b.setValues=function(a,b,c,d,e){return this.visible=null==a?!0:!!a,this.alpha=null==b?1:b,this.shadow=c,this.compositeOperation=d,this.matrix=e||this.matrix&&this.matrix.identity()||new createjs.Matrix2D,this},b.append=function(a,b,c,d,e){return this.alpha*=b,this.shadow=c||this.shadow,this.compositeOperation=d||this.compositeOperation,this.visible=this.visible&&a,e&&this.matrix.appendMatrix(e),this},b.prepend=function(a,b,c,d,e){return this.alpha*=b,this.shadow=this.shadow||c,this.compositeOperation=this.compositeOperation||d,this.visible=this.visible&&a,e&&this.matrix.prependMatrix(e),this},b.identity=function(){return this.visible=!0,this.alpha=1,this.shadow=this.compositeOperation=null,this.matrix.identity(),this},b.clone=function(){return new a(this.alpha,this.shadow,this.compositeOperation,this.visible,this.matrix.clone())},createjs.DisplayProps=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b){this.setValues(a,b)}var b=a.prototype;b.setValues=function(a,b){return this.x=a||0,this.y=b||0,this},b.copy=function(a){return this.x=a.x,this.y=a.y,this},b.clone=function(){return new a(this.x,this.y)},b.toString=function(){return"[Point (x="+this.x+" y="+this.y+")]"},createjs.Point=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d){this.setValues(a,b,c,d)}var b=a.prototype;b.setValues=function(a,b,c,d){return this.x=a||0,this.y=b||0,this.width=c||0,this.height=d||0,this},b.extend=function(a,b,c,d){return c=c||0,d=d||0,a+c>this.x+this.width&&(this.width=a+c-this.x),b+d>this.y+this.height&&(this.height=b+d-this.y),a<this.x&&(this.width+=this.x-a,this.x=a),b<this.y&&(this.height+=this.y-b,this.y=b),this},b.pad=function(a,b,c,d){return this.x-=b,this.y-=a,this.width+=b+d,this.height+=a+c,this},b.copy=function(a){return this.setValues(a.x,a.y,a.width,a.height)},b.contains=function(a,b,c,d){return c=c||0,d=d||0,a>=this.x&&a+c<=this.x+this.width&&b>=this.y&&b+d<=this.y+this.height},b.union=function(a){return this.clone().extend(a.x,a.y,a.width,a.height)},b.intersection=function(b){var c=b.x,d=b.y,e=c+b.width,f=d+b.height;return this.x>c&&(c=this.x),this.y>d&&(d=this.y),this.x+this.width<e&&(e=this.x+this.width),this.y+this.height<f&&(f=this.y+this.height),c>=e||d>=f?null:new a(c,d,e-c,f-d)},b.intersects=function(a){return a.x<=this.x+this.width&&this.x<=a.x+a.width&&a.y<=this.y+this.height&&this.y<=a.y+a.height},b.isEmpty=function(){return this.width<=0||this.height<=0},b.clone=function(){return new a(this.x,this.y,this.width,this.height)},b.toString=function(){return"[Rectangle (x="+this.x+" y="+this.y+" width="+this.width+" height="+this.height+")]"},createjs.Rectangle=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d,e,f,g){a.addEventListener&&(this.target=a,this.overLabel=null==c?"over":c,this.outLabel=null==b?"out":b,this.downLabel=null==d?"down":d,this.play=e,this._isPressed=!1,this._isOver=!1,this._enabled=!1,a.mouseChildren=!1,this.enabled=!0,this.handleEvent({}),f&&(g&&(f.actionsEnabled=!1,f.gotoAndStop&&f.gotoAndStop(g)),a.hitArea=f))}var b=a.prototype;b.setEnabled=function(a){if(a!=this._enabled){var b=this.target;this._enabled=a,a?(b.cursor="pointer",b.addEventListener("rollover",this),b.addEventListener("rollout",this),b.addEventListener("mousedown",this),b.addEventListener("pressup",this),b._reset&&(b.__reset=b._reset,b._reset=this._reset)):(b.cursor=null,b.removeEventListener("rollover",this),b.removeEventListener("rollout",this),b.removeEventListener("mousedown",this),b.removeEventListener("pressup",this),b.__reset&&(b._reset=b.__reset,delete b.__reset))}},b.getEnabled=function(){return this._enabled};try{Object.defineProperties(b,{enabled:{get:b.getEnabled,set:b.setEnabled}})}catch(c){}b.toString=function(){return"[ButtonHelper]"},b.handleEvent=function(a){var b,c=this.target,d=a.type;"mousedown"==d?(this._isPressed=!0,b=this.downLabel):"pressup"==d?(this._isPressed=!1,b=this._isOver?this.overLabel:this.outLabel):"rollover"==d?(this._isOver=!0,b=this._isPressed?this.downLabel:this.overLabel):(this._isOver=!1,b=this._isPressed?this.overLabel:this.outLabel),this.play?c.gotoAndPlay&&c.gotoAndPlay(b):c.gotoAndStop&&c.gotoAndStop(b)},b._reset=function(){var a=this.paused;this.__reset(),this.paused=a},createjs.ButtonHelper=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d){this.color=a||"black",this.offsetX=b||0,this.offsetY=c||0,this.blur=d||0}var b=a.prototype;a.identity=new a("transparent",0,0,0),b.toString=function(){return"[Shadow]"},b.clone=function(){return new a(this.color,this.offsetX,this.offsetY,this.blur)},createjs.Shadow=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.EventDispatcher_constructor(),this.complete=!0,this.framerate=0,this._animations=null,this._frames=null,this._images=null,this._data=null,this._loadCount=0,this._frameHeight=0,this._frameWidth=0,this._numFrames=0,this._regX=0,this._regY=0,this._spacing=0,this._margin=0,this._parseData(a)}var b=createjs.extend(a,createjs.EventDispatcher);b.getAnimations=function(){return this._animations.slice()};try{Object.defineProperties(b,{animations:{get:b.getAnimations}})}catch(c){}b.getNumFrames=function(a){if(null==a)return this._frames?this._frames.length:this._numFrames||0;var b=this._data[a];return null==b?0:b.frames.length},b.getAnimation=function(a){return this._data[a]},b.getFrame=function(a){var b;return this._frames&&(b=this._frames[a])?b:null},b.getFrameBounds=function(a,b){var c=this.getFrame(a);return c?(b||new createjs.Rectangle).setValues(-c.regX,-c.regY,c.rect.width,c.rect.height):null},b.toString=function(){return"[SpriteSheet]"},b.clone=function(){throw"SpriteSheet cannot be cloned."},b._parseData=function(a){var b,c,d,e;if(null!=a){if(this.framerate=a.framerate||0,a.images&&(c=a.images.length)>0)for(e=this._images=[],b=0;c>b;b++){var f=a.images[b];if("string"==typeof f){var g=f;f=document.createElement("img"),f.src=g}e.push(f),f.getContext||f.naturalWidth||(this._loadCount++,this.complete=!1,function(a,b){f.onload=function(){a._handleImageLoad(b)}}(this,g),function(a,b){f.onerror=function(){a._handleImageError(b)}}(this,g))}if(null==a.frames);else if(Array.isArray(a.frames))for(this._frames=[],e=a.frames,b=0,c=e.length;c>b;b++){var h=e[b];this._frames.push({image:this._images[h[4]?h[4]:0],rect:new createjs.Rectangle(h[0],h[1],h[2],h[3]),regX:h[5]||0,regY:h[6]||0})}else d=a.frames,this._frameWidth=d.width,this._frameHeight=d.height,this._regX=d.regX||0,this._regY=d.regY||0,this._spacing=d.spacing||0,this._margin=d.margin||0,this._numFrames=d.count,0==this._loadCount&&this._calculateFrames();if(this._animations=[],null!=(d=a.animations)){this._data={};var i;for(i in d){var j={name:i},k=d[i];if("number"==typeof k)e=j.frames=[k];else if(Array.isArray(k))if(1==k.length)j.frames=[k[0]];else for(j.speed=k[3],j.next=k[2],e=j.frames=[],b=k[0];b<=k[1];b++)e.push(b);else{j.speed=k.speed,j.next=k.next;var l=k.frames;e=j.frames="number"==typeof l?[l]:l.slice(0)}(j.next===!0||void 0===j.next)&&(j.next=i),(j.next===!1||e.length<2&&j.next==i)&&(j.next=null),j.speed||(j.speed=1),this._animations.push(i),this._data[i]=j}}}},b._handleImageLoad=function(){0==--this._loadCount&&(this._calculateFrames(),this.complete=!0,this.dispatchEvent("complete"))},b._handleImageError=function(a){var b=new createjs.Event("error");b.src=a,this.dispatchEvent(b),0==--this._loadCount&&this.dispatchEvent("complete")},b._calculateFrames=function(){if(!this._frames&&0!=this._frameWidth){this._frames=[];var a=this._numFrames||1e5,b=0,c=this._frameWidth,d=this._frameHeight,e=this._spacing,f=this._margin;a:for(var g=0,h=this._images;g<h.length;g++)for(var i=h[g],j=i.width,k=i.height,l=f;k-f-d>=l;){for(var m=f;j-f-c>=m;){if(b>=a)break a;b++,this._frames.push({image:i,rect:new createjs.Rectangle(m,l,c,d),regX:this._regX,regY:this._regY}),m+=c+e}l+=d+e}this._numFrames=b}},createjs.SpriteSheet=createjs.promote(a,"EventDispatcher")}(),this.createjs=this.createjs||{},function(){"use strict";function a(){this.command=null,this._stroke=null,this._strokeStyle=null,this._oldStrokeStyle=null,this._strokeDash=null,this._oldStrokeDash=null,this._strokeIgnoreScale=!1,this._fill=null,this._instructions=[],this._commitIndex=0,this._activeInstructions=[],this._dirty=!1,this._storeIndex=0,this.clear()}var b=a.prototype,c=a;a.getRGB=function(a,b,c,d){return null!=a&&null==c&&(d=b,c=255&a,b=a>>8&255,a=a>>16&255),null==d?"rgb("+a+","+b+","+c+")":"rgba("+a+","+b+","+c+","+d+")"},a.getHSL=function(a,b,c,d){return null==d?"hsl("+a%360+","+b+"%,"+c+"%)":"hsla("+a%360+","+b+"%,"+c+"%,"+d+")"},a.BASE_64={A:0,B:1,C:2,D:3,E:4,F:5,G:6,H:7,I:8,J:9,K:10,L:11,M:12,N:13,O:14,P:15,Q:16,R:17,S:18,T:19,U:20,V:21,W:22,X:23,Y:24,Z:25,a:26,b:27,c:28,d:29,e:30,f:31,g:32,h:33,i:34,j:35,k:36,l:37,m:38,n:39,o:40,p:41,q:42,r:43,s:44,t:45,u:46,v:47,w:48,x:49,y:50,z:51,0:52,1:53,2:54,3:55,4:56,5:57,6:58,7:59,8:60,9:61,"+":62,"/":63},a.STROKE_CAPS_MAP=["butt","round","square"],a.STROKE_JOINTS_MAP=["miter","round","bevel"];var d=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");d.getContext&&(a._ctx=d.getContext("2d"),d.width=d.height=1),b.getInstructions=function(){return this._updateInstructions(),this._instructions};try{Object.defineProperties(b,{instructions:{get:b.getInstructions}})}catch(e){}b.isEmpty=function(){return!(this._instructions.length||this._activeInstructions.length)},b.draw=function(a,b){this._updateInstructions();for(var c=this._instructions,d=this._storeIndex,e=c.length;e>d;d++)c[d].exec(a,b)},b.drawAsPath=function(a){this._updateInstructions();for(var b,c=this._instructions,d=this._storeIndex,e=c.length;e>d;d++)(b=c[d]).path!==!1&&b.exec(a)},b.moveTo=function(a,b){return this.append(new c.MoveTo(a,b),!0)},b.lineTo=function(a,b){return this.append(new c.LineTo(a,b))},b.arcTo=function(a,b,d,e,f){return this.append(new c.ArcTo(a,b,d,e,f))},b.arc=function(a,b,d,e,f,g){return this.append(new c.Arc(a,b,d,e,f,g))},b.quadraticCurveTo=function(a,b,d,e){return this.append(new c.QuadraticCurveTo(a,b,d,e))},b.bezierCurveTo=function(a,b,d,e,f,g){return this.append(new c.BezierCurveTo(a,b,d,e,f,g))},b.rect=function(a,b,d,e){return this.append(new c.Rect(a,b,d,e))},b.closePath=function(){return this._activeInstructions.length?this.append(new c.ClosePath):this},b.clear=function(){return this._instructions.length=this._activeInstructions.length=this._commitIndex=0,this._strokeStyle=this._oldStrokeStyle=this._stroke=this._fill=this._strokeDash=this._oldStrokeDash=null,this._dirty=this._strokeIgnoreScale=!1,this},b.beginFill=function(a){return this._setFill(a?new c.Fill(a):null)},b.beginLinearGradientFill=function(a,b,d,e,f,g){return this._setFill((new c.Fill).linearGradient(a,b,d,e,f,g))},b.beginRadialGradientFill=function(a,b,d,e,f,g,h,i){return this._setFill((new c.Fill).radialGradient(a,b,d,e,f,g,h,i))},b.beginBitmapFill=function(a,b,d){return this._setFill(new c.Fill(null,d).bitmap(a,b))},b.endFill=function(){return this.beginFill()},b.setStrokeStyle=function(a,b,d,e,f){return this._updateInstructions(!0),this._strokeStyle=this.command=new c.StrokeStyle(a,b,d,e,f),this._stroke&&(this._stroke.ignoreScale=f),this._strokeIgnoreScale=f,this},b.setStrokeDash=function(a,b){return this._updateInstructions(!0),this._strokeDash=this.command=new c.StrokeDash(a,b),this},b.beginStroke=function(a){return this._setStroke(a?new c.Stroke(a):null)},b.beginLinearGradientStroke=function(a,b,d,e,f,g){return this._setStroke((new c.Stroke).linearGradient(a,b,d,e,f,g))},b.beginRadialGradientStroke=function(a,b,d,e,f,g,h,i){return this._setStroke((new c.Stroke).radialGradient(a,b,d,e,f,g,h,i))},b.beginBitmapStroke=function(a,b){return this._setStroke((new c.Stroke).bitmap(a,b))},b.endStroke=function(){return this.beginStroke()},b.curveTo=b.quadraticCurveTo,b.drawRect=b.rect,b.drawRoundRect=function(a,b,c,d,e){return this.drawRoundRectComplex(a,b,c,d,e,e,e,e)},b.drawRoundRectComplex=function(a,b,d,e,f,g,h,i){return this.append(new c.RoundRect(a,b,d,e,f,g,h,i))},b.drawCircle=function(a,b,d){return this.append(new c.Circle(a,b,d))},b.drawEllipse=function(a,b,d,e){return this.append(new c.Ellipse(a,b,d,e))},b.drawPolyStar=function(a,b,d,e,f,g){return this.append(new c.PolyStar(a,b,d,e,f,g))},b.append=function(a,b){return this._activeInstructions.push(a),this.command=a,b||(this._dirty=!0),this},b.decodePath=function(b){for(var c=[this.moveTo,this.lineTo,this.quadraticCurveTo,this.bezierCurveTo,this.closePath],d=[2,2,4,6,0],e=0,f=b.length,g=[],h=0,i=0,j=a.BASE_64;f>e;){var k=b.charAt(e),l=j[k],m=l>>3,n=c[m];if(!n||3&l)throw"bad path data (@"+e+"): "+k;var o=d[m];m||(h=i=0),g.length=0,e++;for(var p=(l>>2&1)+2,q=0;o>q;q++){var r=j[b.charAt(e)],s=r>>5?-1:1;r=(31&r)<<6|j[b.charAt(e+1)],3==p&&(r=r<<6|j[b.charAt(e+2)]),r=s*r/10,q%2?h=r+=h:i=r+=i,g[q]=r,e+=p}n.apply(this,g)}return this},b.store=function(){return this._updateInstructions(!0),this._storeIndex=this._instructions.length,this},b.unstore=function(){return this._storeIndex=0,this},b.clone=function(){var b=new a;return b.command=this.command,b._stroke=this._stroke,b._strokeStyle=this._strokeStyle,b._strokeDash=this._strokeDash,b._strokeIgnoreScale=this._strokeIgnoreScale,b._fill=this._fill,b._instructions=this._instructions.slice(),b._commitIndex=this._commitIndex,b._activeInstructions=this._activeInstructions.slice(),b._dirty=this._dirty,b._storeIndex=this._storeIndex,b},b.toString=function(){return"[Graphics]"},b.mt=b.moveTo,b.lt=b.lineTo,b.at=b.arcTo,b.bt=b.bezierCurveTo,b.qt=b.quadraticCurveTo,b.a=b.arc,b.r=b.rect,b.cp=b.closePath,b.c=b.clear,b.f=b.beginFill,b.lf=b.beginLinearGradientFill,b.rf=b.beginRadialGradientFill,b.bf=b.beginBitmapFill,b.ef=b.endFill,b.ss=b.setStrokeStyle,b.sd=b.setStrokeDash,b.s=b.beginStroke,b.ls=b.beginLinearGradientStroke,b.rs=b.beginRadialGradientStroke,b.bs=b.beginBitmapStroke,b.es=b.endStroke,b.dr=b.drawRect,b.rr=b.drawRoundRect,b.rc=b.drawRoundRectComplex,b.dc=b.drawCircle,b.de=b.drawEllipse,b.dp=b.drawPolyStar,b.p=b.decodePath,b._updateInstructions=function(b){var c=this._instructions,d=this._activeInstructions,e=this._commitIndex;if(this._dirty&&d.length){c.length=e,c.push(a.beginCmd);var f=d.length,g=c.length;c.length=g+f;for(var h=0;f>h;h++)c[h+g]=d[h];this._fill&&c.push(this._fill),this._stroke&&(this._strokeDash!==this._oldStrokeDash&&(this._oldStrokeDash=this._strokeDash,c.push(this._strokeDash)),this._strokeStyle!==this._oldStrokeStyle&&(this._oldStrokeStyle=this._strokeStyle,c.push(this._strokeStyle)),c.push(this._stroke)),this._dirty=!1}b&&(d.length=0,this._commitIndex=c.length)},b._setFill=function(a){return this._updateInstructions(!0),this.command=this._fill=a,this},b._setStroke=function(a){return this._updateInstructions(!0),(this.command=this._stroke=a)&&(a.ignoreScale=this._strokeIgnoreScale),this},(c.LineTo=function(a,b){this.x=a,this.y=b}).prototype.exec=function(a){a.lineTo(this.x,this.y)},(c.MoveTo=function(a,b){this.x=a,this.y=b}).prototype.exec=function(a){a.moveTo(this.x,this.y)},(c.ArcTo=function(a,b,c,d,e){this.x1=a,this.y1=b,this.x2=c,this.y2=d,this.radius=e}).prototype.exec=function(a){a.arcTo(this.x1,this.y1,this.x2,this.y2,this.radius)},(c.Arc=function(a,b,c,d,e,f){this.x=a,this.y=b,this.radius=c,this.startAngle=d,this.endAngle=e,this.anticlockwise=!!f}).prototype.exec=function(a){a.arc(this.x,this.y,this.radius,this.startAngle,this.endAngle,this.anticlockwise)},(c.QuadraticCurveTo=function(a,b,c,d){this.cpx=a,this.cpy=b,this.x=c,this.y=d}).prototype.exec=function(a){a.quadraticCurveTo(this.cpx,this.cpy,this.x,this.y)},(c.BezierCurveTo=function(a,b,c,d,e,f){this.cp1x=a,this.cp1y=b,this.cp2x=c,this.cp2y=d,this.x=e,this.y=f}).prototype.exec=function(a){a.bezierCurveTo(this.cp1x,this.cp1y,this.cp2x,this.cp2y,this.x,this.y)},(c.Rect=function(a,b,c,d){this.x=a,this.y=b,this.w=c,this.h=d}).prototype.exec=function(a){a.rect(this.x,this.y,this.w,this.h)},(c.ClosePath=function(){}).prototype.exec=function(a){a.closePath()},(c.BeginPath=function(){}).prototype.exec=function(a){a.beginPath()},b=(c.Fill=function(a,b){this.style=a,this.matrix=b}).prototype,b.exec=function(a){if(this.style){a.fillStyle=this.style;var b=this.matrix;b&&(a.save(),a.transform(b.a,b.b,b.c,b.d,b.tx,b.ty)),a.fill(),b&&a.restore()}},b.linearGradient=function(b,c,d,e,f,g){for(var h=this.style=a._ctx.createLinearGradient(d,e,f,g),i=0,j=b.length;j>i;i++)h.addColorStop(c[i],b[i]);return h.props={colors:b,ratios:c,x0:d,y0:e,x1:f,y1:g,type:"linear"},this},b.radialGradient=function(b,c,d,e,f,g,h,i){for(var j=this.style=a._ctx.createRadialGradient(d,e,f,g,h,i),k=0,l=b.length;l>k;k++)j.addColorStop(c[k],b[k]);return j.props={colors:b,ratios:c,x0:d,y0:e,r0:f,x1:g,y1:h,r1:i,type:"radial"},this},b.bitmap=function(b,c){if(b.naturalWidth||b.getContext||b.readyState>=2){var d=this.style=a._ctx.createPattern(b,c||"");d.props={image:b,repetition:c,type:"bitmap"}}return this},b.path=!1,b=(c.Stroke=function(a,b){this.style=a,this.ignoreScale=b}).prototype,b.exec=function(a){this.style&&(a.strokeStyle=this.style,this.ignoreScale&&(a.save(),a.setTransform(1,0,0,1,0,0)),a.stroke(),this.ignoreScale&&a.restore())},b.linearGradient=c.Fill.prototype.linearGradient,b.radialGradient=c.Fill.prototype.radialGradient,b.bitmap=c.Fill.prototype.bitmap,b.path=!1,b=(c.StrokeStyle=function(a,b,c,d,e){this.width=a,this.caps=b,this.joints=c,this.miterLimit=d,this.ignoreScale=e}).prototype,b.exec=function(b){b.lineWidth=null==this.width?"1":this.width,b.lineCap=null==this.caps?"butt":isNaN(this.caps)?this.caps:a.STROKE_CAPS_MAP[this.caps],b.lineJoin=null==this.joints?"miter":isNaN(this.joints)?this.joints:a.STROKE_JOINTS_MAP[this.joints],b.miterLimit=null==this.miterLimit?"10":this.miterLimit,b.ignoreScale=null==this.ignoreScale?!1:this.ignoreScale},b.path=!1,(c.StrokeDash=function(a,b){this.segments=a,this.offset=b||0}).prototype.exec=function(a){a.setLineDash&&(a.setLineDash(this.segments||c.StrokeDash.EMPTY_SEGMENTS),a.lineDashOffset=this.offset||0)},c.StrokeDash.EMPTY_SEGMENTS=[],(c.RoundRect=function(a,b,c,d,e,f,g,h){this.x=a,this.y=b,this.w=c,this.h=d,this.radiusTL=e,this.radiusTR=f,this.radiusBR=g,this.radiusBL=h}).prototype.exec=function(a){var b=(j>i?i:j)/2,c=0,d=0,e=0,f=0,g=this.x,h=this.y,i=this.w,j=this.h,k=this.radiusTL,l=this.radiusTR,m=this.radiusBR,n=this.radiusBL;0>k&&(k*=c=-1),k>b&&(k=b),0>l&&(l*=d=-1),l>b&&(l=b),0>m&&(m*=e=-1),m>b&&(m=b),0>n&&(n*=f=-1),n>b&&(n=b),a.moveTo(g+i-l,h),a.arcTo(g+i+l*d,h-l*d,g+i,h+l,l),a.lineTo(g+i,h+j-m),a.arcTo(g+i+m*e,h+j+m*e,g+i-m,h+j,m),a.lineTo(g+n,h+j),a.arcTo(g-n*f,h+j+n*f,g,h+j-n,n),a.lineTo(g,h+k),a.arcTo(g-k*c,h-k*c,g+k,h,k),a.closePath()},(c.Circle=function(a,b,c){this.x=a,this.y=b,this.radius=c}).prototype.exec=function(a){a.arc(this.x,this.y,this.radius,0,2*Math.PI)},(c.Ellipse=function(a,b,c,d){this.x=a,this.y=b,this.w=c,this.h=d}).prototype.exec=function(a){var b=this.x,c=this.y,d=this.w,e=this.h,f=.5522848,g=d/2*f,h=e/2*f,i=b+d,j=c+e,k=b+d/2,l=c+e/2;a.moveTo(b,l),a.bezierCurveTo(b,l-h,k-g,c,k,c),a.bezierCurveTo(k+g,c,i,l-h,i,l),a.bezierCurveTo(i,l+h,k+g,j,k,j),a.bezierCurveTo(k-g,j,b,l+h,b,l)},(c.PolyStar=function(a,b,c,d,e,f){this.x=a,this.y=b,this.radius=c,this.sides=d,this.pointSize=e,this.angle=f}).prototype.exec=function(a){var b=this.x,c=this.y,d=this.radius,e=(this.angle||0)/180*Math.PI,f=this.sides,g=1-(this.pointSize||0),h=Math.PI/f;a.moveTo(b+Math.cos(e)*d,c+Math.sin(e)*d);for(var i=0;f>i;i++)e+=h,1!=g&&a.lineTo(b+Math.cos(e)*d*g,c+Math.sin(e)*d*g),e+=h,a.lineTo(b+Math.cos(e)*d,c+Math.sin(e)*d);a.closePath()},a.beginCmd=new c.BeginPath,createjs.Graphics=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(){this.EventDispatcher_constructor(),this.alpha=1,this.cacheCanvas=null,this.cacheID=0,this.id=createjs.UID.get(),this.mouseEnabled=!0,this.tickEnabled=!0,this.name=null,this.parent=null,this.regX=0,this.regY=0,this.rotation=0,this.scaleX=1,this.scaleY=1,this.skewX=0,this.skewY=0,this.shadow=null,this.visible=!0,this.x=0,this.y=0,this.transformMatrix=null,this.compositeOperation=null,this.snapToPixel=!0,this.filters=null,this.mask=null,this.hitArea=null,this.cursor=null,this._cacheOffsetX=0,this._cacheOffsetY=0,this._filterOffsetX=0,this._filterOffsetY=0,this._cacheScale=1,this._cacheDataURLID=0,this._cacheDataURL=null,this._props=new createjs.DisplayProps,this._rectangle=new createjs.Rectangle,this._bounds=null
	}var b=createjs.extend(a,createjs.EventDispatcher);a._MOUSE_EVENTS=["click","dblclick","mousedown","mouseout","mouseover","pressmove","pressup","rollout","rollover"],a.suppressCrossDomainErrors=!1,a._snapToPixelEnabled=!1;var c=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");c.getContext&&(a._hitTestCanvas=c,a._hitTestContext=c.getContext("2d"),c.width=c.height=1),a._nextCacheID=1,b.getStage=function(){for(var a=this,b=createjs.Stage;a.parent;)a=a.parent;return a instanceof b?a:null};try{Object.defineProperties(b,{stage:{get:b.getStage}})}catch(d){}b.isVisible=function(){return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY)},b.draw=function(a,b){var c=this.cacheCanvas;if(b||!c)return!1;var d=this._cacheScale;return a.drawImage(c,this._cacheOffsetX+this._filterOffsetX,this._cacheOffsetY+this._filterOffsetY,c.width/d,c.height/d),!0},b.updateContext=function(b){var c=this,d=c.mask,e=c._props.matrix;d&&d.graphics&&!d.graphics.isEmpty()&&(d.getMatrix(e),b.transform(e.a,e.b,e.c,e.d,e.tx,e.ty),d.graphics.drawAsPath(b),b.clip(),e.invert(),b.transform(e.a,e.b,e.c,e.d,e.tx,e.ty)),this.getMatrix(e);var f=e.tx,g=e.ty;a._snapToPixelEnabled&&c.snapToPixel&&(f=f+(0>f?-.5:.5)|0,g=g+(0>g?-.5:.5)|0),b.transform(e.a,e.b,e.c,e.d,f,g),b.globalAlpha*=c.alpha,c.compositeOperation&&(b.globalCompositeOperation=c.compositeOperation),c.shadow&&this._applyShadow(b,c.shadow)},b.cache=function(a,b,c,d,e){e=e||1,this.cacheCanvas||(this.cacheCanvas=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas")),this._cacheWidth=c,this._cacheHeight=d,this._cacheOffsetX=a,this._cacheOffsetY=b,this._cacheScale=e,this.updateCache()},b.updateCache=function(b){var c=this.cacheCanvas;if(!c)throw"cache() must be called before updateCache()";var d=this._cacheScale,e=this._cacheOffsetX*d,f=this._cacheOffsetY*d,g=this._cacheWidth,h=this._cacheHeight,i=c.getContext("2d"),j=this._getFilterBounds();e+=this._filterOffsetX=j.x,f+=this._filterOffsetY=j.y,g=Math.ceil(g*d)+j.width,h=Math.ceil(h*d)+j.height,g!=c.width||h!=c.height?(c.width=g,c.height=h):b||i.clearRect(0,0,g+1,h+1),i.save(),i.globalCompositeOperation=b,i.setTransform(d,0,0,d,-e,-f),this.draw(i,!0),this._applyFilters(),i.restore(),this.cacheID=a._nextCacheID++},b.uncache=function(){this._cacheDataURL=this.cacheCanvas=null,this.cacheID=this._cacheOffsetX=this._cacheOffsetY=this._filterOffsetX=this._filterOffsetY=0,this._cacheScale=1},b.getCacheDataURL=function(){return this.cacheCanvas?(this.cacheID!=this._cacheDataURLID&&(this._cacheDataURL=this.cacheCanvas.toDataURL()),this._cacheDataURL):null},b.localToGlobal=function(a,b,c){return this.getConcatenatedMatrix(this._props.matrix).transformPoint(a,b,c||new createjs.Point)},b.globalToLocal=function(a,b,c){return this.getConcatenatedMatrix(this._props.matrix).invert().transformPoint(a,b,c||new createjs.Point)},b.localToLocal=function(a,b,c,d){return d=this.localToGlobal(a,b,d),c.globalToLocal(d.x,d.y,d)},b.setTransform=function(a,b,c,d,e,f,g,h,i){return this.x=a||0,this.y=b||0,this.scaleX=null==c?1:c,this.scaleY=null==d?1:d,this.rotation=e||0,this.skewX=f||0,this.skewY=g||0,this.regX=h||0,this.regY=i||0,this},b.getMatrix=function(a){var b=this,c=a&&a.identity()||new createjs.Matrix2D;return b.transformMatrix?c.copy(b.transformMatrix):c.appendTransform(b.x,b.y,b.scaleX,b.scaleY,b.rotation,b.skewX,b.skewY,b.regX,b.regY)},b.getConcatenatedMatrix=function(a){for(var b=this,c=this.getMatrix(a);b=b.parent;)c.prependMatrix(b.getMatrix(b._props.matrix));return c},b.getConcatenatedDisplayProps=function(a){a=a?a.identity():new createjs.DisplayProps;var b=this,c=b.getMatrix(a.matrix);do a.prepend(b.visible,b.alpha,b.shadow,b.compositeOperation),b!=this&&c.prependMatrix(b.getMatrix(b._props.matrix));while(b=b.parent);return a},b.hitTest=function(b,c){var d=a._hitTestContext;d.setTransform(1,0,0,1,-b,-c),this.draw(d);var e=this._testHit(d);return d.setTransform(1,0,0,1,0,0),d.clearRect(0,0,2,2),e},b.set=function(a){for(var b in a)this[b]=a[b];return this},b.getBounds=function(){if(this._bounds)return this._rectangle.copy(this._bounds);var a=this.cacheCanvas;if(a){var b=this._cacheScale;return this._rectangle.setValues(this._cacheOffsetX,this._cacheOffsetY,a.width/b,a.height/b)}return null},b.getTransformedBounds=function(){return this._getBounds()},b.setBounds=function(a,b,c,d){null==a&&(this._bounds=a),this._bounds=(this._bounds||new createjs.Rectangle).setValues(a,b,c,d)},b.clone=function(){return this._cloneProps(new a)},b.toString=function(){return"[DisplayObject (name="+this.name+")]"},b._cloneProps=function(a){return a.alpha=this.alpha,a.mouseEnabled=this.mouseEnabled,a.tickEnabled=this.tickEnabled,a.name=this.name,a.regX=this.regX,a.regY=this.regY,a.rotation=this.rotation,a.scaleX=this.scaleX,a.scaleY=this.scaleY,a.shadow=this.shadow,a.skewX=this.skewX,a.skewY=this.skewY,a.visible=this.visible,a.x=this.x,a.y=this.y,a.compositeOperation=this.compositeOperation,a.snapToPixel=this.snapToPixel,a.filters=null==this.filters?null:this.filters.slice(0),a.mask=this.mask,a.hitArea=this.hitArea,a.cursor=this.cursor,a._bounds=this._bounds,a},b._applyShadow=function(a,b){b=b||Shadow.identity,a.shadowColor=b.color,a.shadowOffsetX=b.offsetX,a.shadowOffsetY=b.offsetY,a.shadowBlur=b.blur},b._tick=function(a){var b=this._listeners;b&&b.tick&&(a.target=null,a.propagationStopped=a.immediatePropagationStopped=!1,this.dispatchEvent(a))},b._testHit=function(b){try{var c=b.getImageData(0,0,1,1).data[3]>1}catch(d){if(!a.suppressCrossDomainErrors)throw"An error has occurred. This is most likely due to security restrictions on reading canvas pixel data with local or cross-domain images."}return c},b._applyFilters=function(){if(this.filters&&0!=this.filters.length&&this.cacheCanvas)for(var a=this.filters.length,b=this.cacheCanvas.getContext("2d"),c=this.cacheCanvas.width,d=this.cacheCanvas.height,e=0;a>e;e++)this.filters[e].applyFilter(b,0,0,c,d)},b._getFilterBounds=function(){var a,b=this.filters,c=this._rectangle.setValues(0,0,0,0);if(!b||!(a=b.length))return c;for(var d=0;a>d;d++){var e=this.filters[d];e.getBounds&&e.getBounds(c)}return c},b._getBounds=function(a,b){return this._transformBounds(this.getBounds(),a,b)},b._transformBounds=function(a,b,c){if(!a)return a;var d=a.x,e=a.y,f=a.width,g=a.height,h=this._props.matrix;h=c?h.identity():this.getMatrix(h),(d||e)&&h.appendTransform(0,0,1,1,0,0,0,-d,-e),b&&h.prependMatrix(b);var i=f*h.a,j=f*h.b,k=g*h.c,l=g*h.d,m=h.tx,n=h.ty,o=m,p=m,q=n,r=n;return(d=i+m)<o?o=d:d>p&&(p=d),(d=i+k+m)<o?o=d:d>p&&(p=d),(d=k+m)<o?o=d:d>p&&(p=d),(e=j+n)<q?q=e:e>r&&(r=e),(e=j+l+n)<q?q=e:e>r&&(r=e),(e=l+n)<q?q=e:e>r&&(r=e),a.setValues(o,q,p-o,r-q)},b._hasMouseEventListener=function(){for(var b=a._MOUSE_EVENTS,c=0,d=b.length;d>c;c++)if(this.hasEventListener(b[c]))return!0;return!!this.cursor},createjs.DisplayObject=createjs.promote(a,"EventDispatcher")}(),this.createjs=this.createjs||{},function(){"use strict";function a(){this.DisplayObject_constructor(),this.children=[],this.mouseChildren=!0,this.tickChildren=!0}var b=createjs.extend(a,createjs.DisplayObject);b.getNumChildren=function(){return this.children.length};try{Object.defineProperties(b,{numChildren:{get:b.getNumChildren}})}catch(c){}b.initialize=a,b.isVisible=function(){var a=this.cacheCanvas||this.children.length;return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY&&a)},b.draw=function(a,b){if(this.DisplayObject_draw(a,b))return!0;for(var c=this.children.slice(),d=0,e=c.length;e>d;d++){var f=c[d];f.isVisible()&&(a.save(),f.updateContext(a),f.draw(a),a.restore())}return!0},b.addChild=function(a){if(null==a)return a;var b=arguments.length;if(b>1){for(var c=0;b>c;c++)this.addChild(arguments[c]);return arguments[b-1]}return a.parent&&a.parent.removeChild(a),a.parent=this,this.children.push(a),a.dispatchEvent("added"),a},b.addChildAt=function(a,b){var c=arguments.length,d=arguments[c-1];if(0>d||d>this.children.length)return arguments[c-2];if(c>2){for(var e=0;c-1>e;e++)this.addChildAt(arguments[e],d+e);return arguments[c-2]}return a.parent&&a.parent.removeChild(a),a.parent=this,this.children.splice(b,0,a),a.dispatchEvent("added"),a},b.removeChild=function(a){var b=arguments.length;if(b>1){for(var c=!0,d=0;b>d;d++)c=c&&this.removeChild(arguments[d]);return c}return this.removeChildAt(createjs.indexOf(this.children,a))},b.removeChildAt=function(a){var b=arguments.length;if(b>1){for(var c=[],d=0;b>d;d++)c[d]=arguments[d];c.sort(function(a,b){return b-a});for(var e=!0,d=0;b>d;d++)e=e&&this.removeChildAt(c[d]);return e}if(0>a||a>this.children.length-1)return!1;var f=this.children[a];return f&&(f.parent=null),this.children.splice(a,1),f.dispatchEvent("removed"),!0},b.removeAllChildren=function(){for(var a=this.children;a.length;)this.removeChildAt(0)},b.getChildAt=function(a){return this.children[a]},b.getChildByName=function(a){for(var b=this.children,c=0,d=b.length;d>c;c++)if(b[c].name==a)return b[c];return null},b.sortChildren=function(a){this.children.sort(a)},b.getChildIndex=function(a){return createjs.indexOf(this.children,a)},b.swapChildrenAt=function(a,b){var c=this.children,d=c[a],e=c[b];d&&e&&(c[a]=e,c[b]=d)},b.swapChildren=function(a,b){for(var c,d,e=this.children,f=0,g=e.length;g>f&&(e[f]==a&&(c=f),e[f]==b&&(d=f),null==c||null==d);f++);f!=g&&(e[c]=b,e[d]=a)},b.setChildIndex=function(a,b){var c=this.children,d=c.length;if(!(a.parent!=this||0>b||b>=d)){for(var e=0;d>e&&c[e]!=a;e++);e!=d&&e!=b&&(c.splice(e,1),c.splice(b,0,a))}},b.contains=function(a){for(;a;){if(a==this)return!0;a=a.parent}return!1},b.hitTest=function(a,b){return null!=this.getObjectUnderPoint(a,b)},b.getObjectsUnderPoint=function(a,b,c){var d=[],e=this.localToGlobal(a,b);return this._getObjectsUnderPoint(e.x,e.y,d,c>0,1==c),d},b.getObjectUnderPoint=function(a,b,c){var d=this.localToGlobal(a,b);return this._getObjectsUnderPoint(d.x,d.y,null,c>0,1==c)},b.getBounds=function(){return this._getBounds(null,!0)},b.getTransformedBounds=function(){return this._getBounds()},b.clone=function(b){var c=this._cloneProps(new a);return b&&this._cloneChildren(c),c},b.toString=function(){return"[Container (name="+this.name+")]"},b._tick=function(a){if(this.tickChildren)for(var b=this.children.length-1;b>=0;b--){var c=this.children[b];c.tickEnabled&&c._tick&&c._tick(a)}this.DisplayObject__tick(a)},b._cloneChildren=function(a){a.children.length&&a.removeAllChildren();for(var b=a.children,c=0,d=this.children.length;d>c;c++){var e=this.children[c].clone(!0);e.parent=a,b.push(e)}},b._getObjectsUnderPoint=function(b,c,d,e,f,g){if(g=g||0,!g&&!this._testMask(this,b,c))return null;var h,i=createjs.DisplayObject._hitTestContext;f=f||e&&this._hasMouseEventListener();for(var j=this.children,k=j.length,l=k-1;l>=0;l--){var m=j[l],n=m.hitArea;if(m.visible&&(n||m.isVisible())&&(!e||m.mouseEnabled)&&(n||this._testMask(m,b,c)))if(!n&&m instanceof a){var o=m._getObjectsUnderPoint(b,c,d,e,f,g+1);if(!d&&o)return e&&!this.mouseChildren?this:o}else{if(e&&!f&&!m._hasMouseEventListener())continue;var p=m.getConcatenatedDisplayProps(m._props);if(h=p.matrix,n&&(h.appendMatrix(n.getMatrix(n._props.matrix)),p.alpha=n.alpha),i.globalAlpha=p.alpha,i.setTransform(h.a,h.b,h.c,h.d,h.tx-b,h.ty-c),(n||m).draw(i),!this._testHit(i))continue;if(i.setTransform(1,0,0,1,0,0),i.clearRect(0,0,2,2),!d)return e&&!this.mouseChildren?this:m;d.push(m)}}return null},b._testMask=function(a,b,c){var d=a.mask;if(!d||!d.graphics||d.graphics.isEmpty())return!0;var e=this._props.matrix,f=a.parent;e=f?f.getConcatenatedMatrix(e):e.identity(),e=d.getMatrix(d._props.matrix).prependMatrix(e);var g=createjs.DisplayObject._hitTestContext;return g.setTransform(e.a,e.b,e.c,e.d,e.tx-b,e.ty-c),d.graphics.drawAsPath(g),g.fillStyle="#000",g.fill(),this._testHit(g)?(g.setTransform(1,0,0,1,0,0),g.clearRect(0,0,2,2),!0):!1},b._getBounds=function(a,b){var c=this.DisplayObject_getBounds();if(c)return this._transformBounds(c,a,b);var d=this._props.matrix;d=b?d.identity():this.getMatrix(d),a&&d.prependMatrix(a);for(var e=this.children.length,f=null,g=0;e>g;g++){var h=this.children[g];h.visible&&(c=h._getBounds(d))&&(f?f.extend(c.x,c.y,c.width,c.height):f=c.clone())}return f},createjs.Container=createjs.promote(a,"DisplayObject")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.Container_constructor(),this.autoClear=!0,this.canvas="string"==typeof a?document.getElementById(a):a,this.mouseX=0,this.mouseY=0,this.drawRect=null,this.snapToPixelEnabled=!1,this.mouseInBounds=!1,this.tickOnUpdate=!0,this.mouseMoveOutside=!1,this.preventSelection=!0,this._pointerData={},this._pointerCount=0,this._primaryPointerID=null,this._mouseOverIntervalID=null,this._nextStage=null,this._prevStage=null,this.enableDOMEvents(!0)}var b=createjs.extend(a,createjs.Container);b._get_nextStage=function(){return this._nextStage},b._set_nextStage=function(a){this._nextStage&&(this._nextStage._prevStage=null),a&&(a._prevStage=this),this._nextStage=a};try{Object.defineProperties(b,{nextStage:{get:b._get_nextStage,set:b._set_nextStage}})}catch(c){}b.update=function(a){if(this.canvas&&(this.tickOnUpdate&&this.tick(a),this.dispatchEvent("drawstart",!1,!0)!==!1)){createjs.DisplayObject._snapToPixelEnabled=this.snapToPixelEnabled;var b=this.drawRect,c=this.canvas.getContext("2d");c.setTransform(1,0,0,1,0,0),this.autoClear&&(b?c.clearRect(b.x,b.y,b.width,b.height):c.clearRect(0,0,this.canvas.width+1,this.canvas.height+1)),c.save(),this.drawRect&&(c.beginPath(),c.rect(b.x,b.y,b.width,b.height),c.clip()),this.updateContext(c),this.draw(c,!1),c.restore(),this.dispatchEvent("drawend")}},b.tick=function(a){if(this.tickEnabled&&this.dispatchEvent("tickstart",!1,!0)!==!1){var b=new createjs.Event("tick");if(a)for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);this._tick(b),this.dispatchEvent("tickend")}},b.handleEvent=function(a){"tick"==a.type&&this.update(a)},b.clear=function(){if(this.canvas){var a=this.canvas.getContext("2d");a.setTransform(1,0,0,1,0,0),a.clearRect(0,0,this.canvas.width+1,this.canvas.height+1)}},b.toDataURL=function(a,b){var c,d=this.canvas.getContext("2d"),e=this.canvas.width,f=this.canvas.height;if(a){c=d.getImageData(0,0,e,f);var g=d.globalCompositeOperation;d.globalCompositeOperation="destination-over",d.fillStyle=a,d.fillRect(0,0,e,f)}var h=this.canvas.toDataURL(b||"image/png");return a&&(d.putImageData(c,0,0),d.globalCompositeOperation=g),h},b.enableMouseOver=function(a){if(this._mouseOverIntervalID&&(clearInterval(this._mouseOverIntervalID),this._mouseOverIntervalID=null,0==a&&this._testMouseOver(!0)),null==a)a=20;else if(0>=a)return;var b=this;this._mouseOverIntervalID=setInterval(function(){b._testMouseOver()},1e3/Math.min(50,a))},b.enableDOMEvents=function(a){null==a&&(a=!0);var b,c,d=this._eventListeners;if(!a&&d){for(b in d)c=d[b],c.t.removeEventListener(b,c.f,!1);this._eventListeners=null}else if(a&&!d&&this.canvas){var e=window.addEventListener?window:document,f=this;d=this._eventListeners={},d.mouseup={t:e,f:function(a){f._handleMouseUp(a)}},d.mousemove={t:e,f:function(a){f._handleMouseMove(a)}},d.dblclick={t:this.canvas,f:function(a){f._handleDoubleClick(a)}},d.mousedown={t:this.canvas,f:function(a){f._handleMouseDown(a)}};for(b in d)c=d[b],c.t.addEventListener(b,c.f,!1)}},b.clone=function(){throw"Stage cannot be cloned."},b.toString=function(){return"[Stage (name="+this.name+")]"},b._getElementRect=function(a){var b;try{b=a.getBoundingClientRect()}catch(c){b={top:a.offsetTop,left:a.offsetLeft,width:a.offsetWidth,height:a.offsetHeight}}var d=(window.pageXOffset||document.scrollLeft||0)-(document.clientLeft||document.body.clientLeft||0),e=(window.pageYOffset||document.scrollTop||0)-(document.clientTop||document.body.clientTop||0),f=window.getComputedStyle?getComputedStyle(a,null):a.currentStyle,g=parseInt(f.paddingLeft)+parseInt(f.borderLeftWidth),h=parseInt(f.paddingTop)+parseInt(f.borderTopWidth),i=parseInt(f.paddingRight)+parseInt(f.borderRightWidth),j=parseInt(f.paddingBottom)+parseInt(f.borderBottomWidth);return{left:b.left+d+g,right:b.right+d-i,top:b.top+e+h,bottom:b.bottom+e-j}},b._getPointerData=function(a){var b=this._pointerData[a];return b||(b=this._pointerData[a]={x:0,y:0}),b},b._handleMouseMove=function(a){a||(a=window.event),this._handlePointerMove(-1,a,a.pageX,a.pageY)},b._handlePointerMove=function(a,b,c,d,e){if((!this._prevStage||void 0!==e)&&this.canvas){var f=this._nextStage,g=this._getPointerData(a),h=g.inBounds;this._updatePointerPosition(a,b,c,d),(h||g.inBounds||this.mouseMoveOutside)&&(-1===a&&g.inBounds==!h&&this._dispatchMouseEvent(this,h?"mouseleave":"mouseenter",!1,a,g,b),this._dispatchMouseEvent(this,"stagemousemove",!1,a,g,b),this._dispatchMouseEvent(g.target,"pressmove",!0,a,g,b)),f&&f._handlePointerMove(a,b,c,d,null)}},b._updatePointerPosition=function(a,b,c,d){var e=this._getElementRect(this.canvas);c-=e.left,d-=e.top;var f=this.canvas.width,g=this.canvas.height;c/=(e.right-e.left)/f,d/=(e.bottom-e.top)/g;var h=this._getPointerData(a);(h.inBounds=c>=0&&d>=0&&f-1>=c&&g-1>=d)?(h.x=c,h.y=d):this.mouseMoveOutside&&(h.x=0>c?0:c>f-1?f-1:c,h.y=0>d?0:d>g-1?g-1:d),h.posEvtObj=b,h.rawX=c,h.rawY=d,(a===this._primaryPointerID||-1===a)&&(this.mouseX=h.x,this.mouseY=h.y,this.mouseInBounds=h.inBounds)},b._handleMouseUp=function(a){this._handlePointerUp(-1,a,!1)},b._handlePointerUp=function(a,b,c,d){var e=this._nextStage,f=this._getPointerData(a);if(!this._prevStage||void 0!==d){var g=null,h=f.target;d||!h&&!e||(g=this._getObjectsUnderPoint(f.x,f.y,null,!0)),f.down&&(this._dispatchMouseEvent(this,"stagemouseup",!1,a,f,b,g),f.down=!1),g==h&&this._dispatchMouseEvent(h,"click",!0,a,f,b),this._dispatchMouseEvent(h,"pressup",!0,a,f,b),c?(a==this._primaryPointerID&&(this._primaryPointerID=null),delete this._pointerData[a]):f.target=null,e&&e._handlePointerUp(a,b,c,d||g&&this)}},b._handleMouseDown=function(a){this._handlePointerDown(-1,a,a.pageX,a.pageY)},b._handlePointerDown=function(a,b,c,d,e){this.preventSelection&&b.preventDefault(),(null==this._primaryPointerID||-1===a)&&(this._primaryPointerID=a),null!=d&&this._updatePointerPosition(a,b,c,d);var f=null,g=this._nextStage,h=this._getPointerData(a);e||(f=h.target=this._getObjectsUnderPoint(h.x,h.y,null,!0)),h.inBounds&&(this._dispatchMouseEvent(this,"stagemousedown",!1,a,h,b,f),h.down=!0),this._dispatchMouseEvent(f,"mousedown",!0,a,h,b),g&&g._handlePointerDown(a,b,c,d,e||f&&this)},b._testMouseOver=function(a,b,c){if(!this._prevStage||void 0!==b){var d=this._nextStage;if(!this._mouseOverIntervalID)return void(d&&d._testMouseOver(a,b,c));var e=this._getPointerData(-1);if(e&&(a||this.mouseX!=this._mouseOverX||this.mouseY!=this._mouseOverY||!this.mouseInBounds)){var f,g,h,i=e.posEvtObj,j=c||i&&i.target==this.canvas,k=null,l=-1,m="";!b&&(a||this.mouseInBounds&&j)&&(k=this._getObjectsUnderPoint(this.mouseX,this.mouseY,null,!0),this._mouseOverX=this.mouseX,this._mouseOverY=this.mouseY);var n=this._mouseOverTarget||[],o=n[n.length-1],p=this._mouseOverTarget=[];for(f=k;f;)p.unshift(f),m||(m=f.cursor),f=f.parent;for(this.canvas.style.cursor=m,!b&&c&&(c.canvas.style.cursor=m),g=0,h=p.length;h>g&&p[g]==n[g];g++)l=g;for(o!=k&&this._dispatchMouseEvent(o,"mouseout",!0,-1,e,i,k),g=n.length-1;g>l;g--)this._dispatchMouseEvent(n[g],"rollout",!1,-1,e,i,k);for(g=p.length-1;g>l;g--)this._dispatchMouseEvent(p[g],"rollover",!1,-1,e,i,o);o!=k&&this._dispatchMouseEvent(k,"mouseover",!0,-1,e,i,o),d&&d._testMouseOver(a,b||k&&this,c||j&&this)}}},b._handleDoubleClick=function(a,b){var c=null,d=this._nextStage,e=this._getPointerData(-1);b||(c=this._getObjectsUnderPoint(e.x,e.y,null,!0),this._dispatchMouseEvent(c,"dblclick",!0,-1,e,a)),d&&d._handleDoubleClick(a,b||c&&this)},b._dispatchMouseEvent=function(a,b,c,d,e,f,g){if(a&&(c||a.hasEventListener(b))){var h=new createjs.MouseEvent(b,c,!1,e.x,e.y,f,d,d===this._primaryPointerID||-1===d,e.rawX,e.rawY,g);a.dispatchEvent(h)}},createjs.Stage=createjs.promote(a,"Container")}(),this.createjs=this.createjs||{},function(){function a(a){this.DisplayObject_constructor(),"string"==typeof a?(this.image=document.createElement("img"),this.image.src=a):this.image=a,this.sourceRect=null}var b=createjs.extend(a,createjs.DisplayObject);b.initialize=a,b.isVisible=function(){var a=this.image,b=this.cacheCanvas||a&&(a.naturalWidth||a.getContext||a.readyState>=2);return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY&&b)},b.draw=function(a,b){if(this.DisplayObject_draw(a,b)||!this.image)return!0;var c=this.image,d=this.sourceRect;if(d){var e=d.x,f=d.y,g=e+d.width,h=f+d.height,i=0,j=0,k=c.width,l=c.height;0>e&&(i-=e,e=0),g>k&&(g=k),0>f&&(j-=f,f=0),h>l&&(h=l),a.drawImage(c,e,f,g-e,h-f,i,j,g-e,h-f)}else a.drawImage(c,0,0);return!0},b.getBounds=function(){var a=this.DisplayObject_getBounds();if(a)return a;var b=this.image,c=this.sourceRect||b,d=b&&(b.naturalWidth||b.getContext||b.readyState>=2);return d?this._rectangle.setValues(0,0,c.width,c.height):null},b.clone=function(){var b=new a(this.image);return this.sourceRect&&(b.sourceRect=this.sourceRect.clone()),this._cloneProps(b),b},b.toString=function(){return"[Bitmap (name="+this.name+")]"},createjs.Bitmap=createjs.promote(a,"DisplayObject")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b){this.DisplayObject_constructor(),this.currentFrame=0,this.currentAnimation=null,this.paused=!0,this.spriteSheet=a,this.currentAnimationFrame=0,this.framerate=0,this._animation=null,this._currentFrame=null,this._skipAdvance=!1,null!=b&&this.gotoAndPlay(b)}var b=createjs.extend(a,createjs.DisplayObject);b.initialize=a,b.isVisible=function(){var a=this.cacheCanvas||this.spriteSheet.complete;return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY&&a)},b.draw=function(a,b){if(this.DisplayObject_draw(a,b))return!0;this._normalizeFrame();var c=this.spriteSheet.getFrame(0|this._currentFrame);if(!c)return!1;var d=c.rect;return d.width&&d.height&&a.drawImage(c.image,d.x,d.y,d.width,d.height,-c.regX,-c.regY,d.width,d.height),!0},b.play=function(){this.paused=!1},b.stop=function(){this.paused=!0},b.gotoAndPlay=function(a){this.paused=!1,this._skipAdvance=!0,this._goto(a)},b.gotoAndStop=function(a){this.paused=!0,this._goto(a)},b.advance=function(a){var b=this.framerate||this.spriteSheet.framerate,c=b&&null!=a?a/(1e3/b):1;this._normalizeFrame(c)},b.getBounds=function(){return this.DisplayObject_getBounds()||this.spriteSheet.getFrameBounds(this.currentFrame,this._rectangle)},b.clone=function(){return this._cloneProps(new a(this.spriteSheet))},b.toString=function(){return"[Sprite (name="+this.name+")]"},b._cloneProps=function(a){return this.DisplayObject__cloneProps(a),a.currentFrame=this.currentFrame,a.currentAnimation=this.currentAnimation,a.paused=this.paused,a.currentAnimationFrame=this.currentAnimationFrame,a.framerate=this.framerate,a._animation=this._animation,a._currentFrame=this._currentFrame,a._skipAdvance=this._skipAdvance,a},b._tick=function(a){this.paused||(this._skipAdvance||this.advance(a&&a.delta),this._skipAdvance=!1),this.DisplayObject__tick(a)},b._normalizeFrame=function(a){a=a||0;var b,c=this._animation,d=this.paused,e=this._currentFrame;if(c){var f=c.speed||1,g=this.currentAnimationFrame;if(b=c.frames.length,g+a*f>=b){var h=c.next;if(this._dispatchAnimationEnd(c,e,d,h,b-1))return;if(h)return this._goto(h,a-(b-g)/f);this.paused=!0,g=c.frames.length-1}else g+=a*f;this.currentAnimationFrame=g,this._currentFrame=c.frames[0|g]}else if(e=this._currentFrame+=a,b=this.spriteSheet.getNumFrames(),e>=b&&b>0&&!this._dispatchAnimationEnd(c,e,d,b-1)&&(this._currentFrame-=b)>=b)return this._normalizeFrame();e=0|this._currentFrame,this.currentFrame!=e&&(this.currentFrame=e,this.dispatchEvent("change"))},b._dispatchAnimationEnd=function(a,b,c,d,e){var f=a?a.name:null;if(this.hasEventListener("animationend")){var g=new createjs.Event("animationend");g.name=f,g.next=d,this.dispatchEvent(g)}var h=this._animation!=a||this._currentFrame!=b;return h||c||!this.paused||(this.currentAnimationFrame=e,h=!0),h},b._goto=function(a,b){if(this.currentAnimationFrame=0,isNaN(a)){var c=this.spriteSheet.getAnimation(a);c&&(this._animation=c,this.currentAnimation=a,this._normalizeFrame(b))}else this.currentAnimation=this._animation=null,this._currentFrame=a,this._normalizeFrame()},createjs.Sprite=createjs.promote(a,"DisplayObject")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.DisplayObject_constructor(),this.graphics=a?a:new createjs.Graphics}var b=createjs.extend(a,createjs.DisplayObject);b.isVisible=function(){var a=this.cacheCanvas||this.graphics&&!this.graphics.isEmpty();return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY&&a)},b.draw=function(a,b){return this.DisplayObject_draw(a,b)?!0:(this.graphics.draw(a,this),!0)},b.clone=function(b){var c=b&&this.graphics?this.graphics.clone():this.graphics;return this._cloneProps(new a(c))},b.toString=function(){return"[Shape (name="+this.name+")]"},createjs.Shape=createjs.promote(a,"DisplayObject")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c){this.DisplayObject_constructor(),this.text=a,this.font=b,this.color=c,this.textAlign="left",this.textBaseline="top",this.maxWidth=null,this.outline=0,this.lineHeight=0,this.lineWidth=null}var b=createjs.extend(a,createjs.DisplayObject),c=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");c.getContext&&(a._workingContext=c.getContext("2d"),c.width=c.height=1),a.H_OFFSETS={start:0,left:0,center:-.5,end:-1,right:-1},a.V_OFFSETS={top:0,hanging:-.01,middle:-.4,alphabetic:-.8,ideographic:-.85,bottom:-1},b.isVisible=function(){var a=this.cacheCanvas||null!=this.text&&""!==this.text;return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY&&a)},b.draw=function(a,b){if(this.DisplayObject_draw(a,b))return!0;var c=this.color||"#000";return this.outline?(a.strokeStyle=c,a.lineWidth=1*this.outline):a.fillStyle=c,this._drawText(this._prepContext(a)),!0},b.getMeasuredWidth=function(){return this._getMeasuredWidth(this.text)},b.getMeasuredLineHeight=function(){return 1.2*this._getMeasuredWidth("M")},b.getMeasuredHeight=function(){return this._drawText(null,{}).height},b.getBounds=function(){var b=this.DisplayObject_getBounds();if(b)return b;if(null==this.text||""===this.text)return null;var c=this._drawText(null,{}),d=this.maxWidth&&this.maxWidth<c.width?this.maxWidth:c.width,e=d*a.H_OFFSETS[this.textAlign||"left"],f=this.lineHeight||this.getMeasuredLineHeight(),g=f*a.V_OFFSETS[this.textBaseline||"top"];return this._rectangle.setValues(e,g,d,c.height)},b.getMetrics=function(){var b={lines:[]};return b.lineHeight=this.lineHeight||this.getMeasuredLineHeight(),b.vOffset=b.lineHeight*a.V_OFFSETS[this.textBaseline||"top"],this._drawText(null,b,b.lines)},b.clone=function(){return this._cloneProps(new a(this.text,this.font,this.color))},b.toString=function(){return"[Text (text="+(this.text.length>20?this.text.substr(0,17)+"...":this.text)+")]"},b._cloneProps=function(a){return this.DisplayObject__cloneProps(a),a.textAlign=this.textAlign,a.textBaseline=this.textBaseline,a.maxWidth=this.maxWidth,a.outline=this.outline,a.lineHeight=this.lineHeight,a.lineWidth=this.lineWidth,a},b._prepContext=function(a){return a.font=this.font||"10px sans-serif",a.textAlign=this.textAlign||"left",a.textBaseline=this.textBaseline||"top",a},b._drawText=function(b,c,d){var e=!!b;e||(b=a._workingContext,b.save(),this._prepContext(b));for(var f=this.lineHeight||this.getMeasuredLineHeight(),g=0,h=0,i=String(this.text).split(/(?:\r\n|\r|\n)/),j=0,k=i.length;k>j;j++){var l=i[j],m=null;if(null!=this.lineWidth&&(m=b.measureText(l).width)>this.lineWidth){var n=l.split(/(\s)/);l=n[0],m=b.measureText(l).width;for(var o=1,p=n.length;p>o;o+=2){var q=b.measureText(n[o]+n[o+1]).width;m+q>this.lineWidth?(e&&this._drawTextLine(b,l,h*f),d&&d.push(l),m>g&&(g=m),l=n[o+1],m=b.measureText(l).width,h++):(l+=n[o]+n[o+1],m+=q)}}e&&this._drawTextLine(b,l,h*f),d&&d.push(l),c&&null==m&&(m=b.measureText(l).width),m>g&&(g=m),h++}return c&&(c.width=g,c.height=h*f),e||b.restore(),c},b._drawTextLine=function(a,b,c){this.outline?a.strokeText(b,0,c,this.maxWidth||65535):a.fillText(b,0,c,this.maxWidth||65535)},b._getMeasuredWidth=function(b){var c=a._workingContext;c.save();var d=this._prepContext(c).measureText(b).width;return c.restore(),d},createjs.Text=createjs.promote(a,"DisplayObject")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b){this.Container_constructor(),this.text=a||"",this.spriteSheet=b,this.lineHeight=0,this.letterSpacing=0,this.spaceWidth=0,this._oldProps={text:0,spriteSheet:0,lineHeight:0,letterSpacing:0,spaceWidth:0}}var b=createjs.extend(a,createjs.Container);a.maxPoolSize=100,a._spritePool=[],b.draw=function(a,b){this.DisplayObject_draw(a,b)||(this._updateText(),this.Container_draw(a,b))},b.getBounds=function(){return this._updateText(),this.Container_getBounds()},b.isVisible=function(){var a=this.cacheCanvas||this.spriteSheet&&this.spriteSheet.complete&&this.text;return!!(this.visible&&this.alpha>0&&0!==this.scaleX&&0!==this.scaleY&&a)},b.clone=function(){return this._cloneProps(new a(this.text,this.spriteSheet))},b.addChild=b.addChildAt=b.removeChild=b.removeChildAt=b.removeAllChildren=function(){},b._cloneProps=function(a){return this.Container__cloneProps(a),a.lineHeight=this.lineHeight,a.letterSpacing=this.letterSpacing,a.spaceWidth=this.spaceWidth,a},b._getFrameIndex=function(a,b){var c,d=b.getAnimation(a);return d||(a!=(c=a.toUpperCase())||a!=(c=a.toLowerCase())||(c=null),c&&(d=b.getAnimation(c))),d&&d.frames[0]},b._getFrame=function(a,b){var c=this._getFrameIndex(a,b);return null==c?c:b.getFrame(c)},b._getLineHeight=function(a){var b=this._getFrame("1",a)||this._getFrame("T",a)||this._getFrame("L",a)||a.getFrame(0);return b?b.rect.height:1},b._getSpaceWidth=function(a){var b=this._getFrame("1",a)||this._getFrame("l",a)||this._getFrame("e",a)||this._getFrame("a",a)||a.getFrame(0);return b?b.rect.width:1},b._updateText=function(){var b,c=0,d=0,e=this._oldProps,f=!1,g=this.spaceWidth,h=this.lineHeight,i=this.spriteSheet,j=a._spritePool,k=this.children,l=0,m=k.length;for(var n in e)e[n]!=this[n]&&(e[n]=this[n],f=!0);if(f){var o=!!this._getFrame(" ",i);o||g||(g=this._getSpaceWidth(i)),h||(h=this._getLineHeight(i));for(var p=0,q=this.text.length;q>p;p++){var r=this.text.charAt(p);if(" "!=r||o)if("\n"!=r&&"\r"!=r){var s=this._getFrameIndex(r,i);null!=s&&(m>l?b=k[l]:(k.push(b=j.length?j.pop():new createjs.Sprite),b.parent=this,m++),b.spriteSheet=i,b.gotoAndStop(s),b.x=c,b.y=d,l++,c+=b.getBounds().width+this.letterSpacing)}else"\r"==r&&"\n"==this.text.charAt(p+1)&&p++,c=0,d+=h;else c+=g}for(;m>l;)j.push(b=k.pop()),b.parent=null,m--;j.length>a.maxPoolSize&&(j.length=a.maxPoolSize)}},createjs.BitmapText=createjs.promote(a,"Container")}(),this.createjs=this.createjs||{},function(){"use strict";function a(b,c,d,e){this.Container_constructor(),!a.inited&&a.init(),this.mode=b||a.INDEPENDENT,this.startPosition=c||0,this.loop=d,this.currentFrame=0,this.timeline=new createjs.Timeline(null,e,{paused:!0,position:c,useTicks:!0}),this.paused=!1,this.actionsEnabled=!0,this.autoReset=!0,this.frameBounds=this.frameBounds||null,this.framerate=null,this._synchOffset=0,this._prevPos=-1,this._prevPosition=0,this._t=0,this._managed={}}function b(){throw"MovieClipPlugin cannot be instantiated."}var c=createjs.extend(a,createjs.Container);a.INDEPENDENT="independent",a.SINGLE_FRAME="single",a.SYNCHED="synched",a.inited=!1,a.init=function(){a.inited||(b.install(),a.inited=!0)},c.getLabels=function(){return this.timeline.getLabels()},c.getCurrentLabel=function(){return this._updateTimeline(),this.timeline.getCurrentLabel()},c.getDuration=function(){return this.timeline.duration};try{Object.defineProperties(c,{labels:{get:c.getLabels},currentLabel:{get:c.getCurrentLabel},totalFrames:{get:c.getDuration},duration:{get:c.getDuration}})}catch(d){}c.initialize=a,c.isVisible=function(){return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY)},c.draw=function(a,b){return this.DisplayObject_draw(a,b)?!0:(this._updateTimeline(),this.Container_draw(a,b),!0)
	},c.play=function(){this.paused=!1},c.stop=function(){this.paused=!0},c.gotoAndPlay=function(a){this.paused=!1,this._goto(a)},c.gotoAndStop=function(a){this.paused=!0,this._goto(a)},c.advance=function(b){var c=a.INDEPENDENT;if(this.mode==c){for(var d=this,e=d.framerate;(d=d.parent)&&null==e;)d.mode==c&&(e=d._framerate);this._framerate=e;var f=null!=e&&-1!=e&&null!=b?b/(1e3/e)+this._t:1,g=0|f;for(this._t=f-g;!this.paused&&g--;)this._prevPosition=this._prevPos<0?0:this._prevPosition+1,this._updateTimeline()}},c.clone=function(){throw"MovieClip cannot be cloned."},c.toString=function(){return"[MovieClip (name="+this.name+")]"},c._tick=function(a){this.advance(a&&a.delta),this.Container__tick(a)},c._goto=function(a){var b=this.timeline.resolve(a);null!=b&&(-1==this._prevPos&&(this._prevPos=0/0),this._prevPosition=b,this._t=0,this._updateTimeline())},c._reset=function(){this._prevPos=-1,this._t=this.currentFrame=0,this.paused=!1},c._updateTimeline=function(){var b=this.timeline,c=this.mode!=a.INDEPENDENT;b.loop=null==this.loop?!0:this.loop;var d=c?this.startPosition+(this.mode==a.SINGLE_FRAME?0:this._synchOffset):this._prevPos<0?0:this._prevPosition,e=c||!this.actionsEnabled?createjs.Tween.NONE:null;if(this.currentFrame=b._calcPosition(d),b.setPosition(d,e),this._prevPosition=b._prevPosition,this._prevPos!=b._prevPos){this.currentFrame=this._prevPos=b._prevPos;for(var f in this._managed)this._managed[f]=1;for(var g=b._tweens,h=0,i=g.length;i>h;h++){var j=g[h],k=j._target;if(k!=this&&!j.passive){var l=j._stepPosition;k instanceof createjs.DisplayObject?this._addManagedChild(k,l):this._setState(k.state,l)}}var m=this.children;for(h=m.length-1;h>=0;h--){var n=m[h].id;1==this._managed[n]&&(this.removeChildAt(h),delete this._managed[n])}}},c._setState=function(a,b){if(a)for(var c=a.length-1;c>=0;c--){var d=a[c],e=d.t,f=d.p;for(var g in f)e[g]=f[g];this._addManagedChild(e,b)}},c._addManagedChild=function(b,c){b._off||(this.addChildAt(b,0),b instanceof a&&(b._synchOffset=c,b.mode==a.INDEPENDENT&&b.autoReset&&!this._managed[b.id]&&b._reset()),this._managed[b.id]=2)},c._getBounds=function(a,b){var c=this.DisplayObject_getBounds();return c||(this._updateTimeline(),this.frameBounds&&(c=this._rectangle.copy(this.frameBounds[this.currentFrame]))),c?this._transformBounds(c,a,b):this.Container__getBounds(a,b)},createjs.MovieClip=createjs.promote(a,"Container"),b.priority=100,b.install=function(){createjs.Tween.installPlugin(b,["startPosition"])},b.init=function(a,b,c){return c},b.step=function(){},b.tween=function(b,c,d,e,f,g){return b.target instanceof a?1==g?f[c]:e[c]:d}}(),this.createjs=this.createjs||{},function(){"use strict";function a(){throw"SpriteSheetUtils cannot be instantiated"}var b=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");b.getContext&&(a._workingCanvas=b,a._workingContext=b.getContext("2d"),b.width=b.height=1),a.addFlippedFrames=function(b,c,d,e){if(c||d||e){var f=0;c&&a._flip(b,++f,!0,!1),d&&a._flip(b,++f,!1,!0),e&&a._flip(b,++f,!0,!0)}},a.extractFrame=function(b,c){isNaN(c)&&(c=b.getAnimation(c).frames[0]);var d=b.getFrame(c);if(!d)return null;var e=d.rect,f=a._workingCanvas;f.width=e.width,f.height=e.height,a._workingContext.drawImage(d.image,e.x,e.y,e.width,e.height,0,0,e.width,e.height);var g=document.createElement("img");return g.src=f.toDataURL("image/png"),g},a.mergeAlpha=function(a,b,c){c||(c=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas")),c.width=Math.max(b.width,a.width),c.height=Math.max(b.height,a.height);var d=c.getContext("2d");return d.save(),d.drawImage(a,0,0),d.globalCompositeOperation="destination-in",d.drawImage(b,0,0),d.restore(),c},a._flip=function(b,c,d,e){for(var f=b._images,g=a._workingCanvas,h=a._workingContext,i=f.length/c,j=0;i>j;j++){var k=f[j];k.__tmp=j,h.setTransform(1,0,0,1,0,0),h.clearRect(0,0,g.width+1,g.height+1),g.width=k.width,g.height=k.height,h.setTransform(d?-1:1,0,0,e?-1:1,d?k.width:0,e?k.height:0),h.drawImage(k,0,0);var l=document.createElement("img");l.src=g.toDataURL("image/png"),l.width=k.width,l.height=k.height,f.push(l)}var m=b._frames,n=m.length/c;for(j=0;n>j;j++){k=m[j];var o=k.rect.clone();l=f[k.image.__tmp+i*c];var p={image:l,rect:o,regX:k.regX,regY:k.regY};d&&(o.x=l.width-o.x-o.width,p.regX=o.width-k.regX),e&&(o.y=l.height-o.y-o.height,p.regY=o.height-k.regY),m.push(p)}var q="_"+(d?"h":"")+(e?"v":""),r=b._animations,s=b._data,t=r.length/c;for(j=0;t>j;j++){var u=r[j];k=s[u];var v={name:u+q,speed:k.speed,next:k.next,frames:[]};k.next&&(v.next+=q),m=k.frames;for(var w=0,x=m.length;x>w;w++)v.frames.push(m[w]+n*c);s[v.name]=v,r.push(v.name)}},createjs.SpriteSheetUtils=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.EventDispatcher_constructor(),this.maxWidth=2048,this.maxHeight=2048,this.spriteSheet=null,this.scale=1,this.padding=1,this.timeSlice=.3,this.progress=-1,this.framerate=a||0,this._frames=[],this._animations={},this._data=null,this._nextFrameIndex=0,this._index=0,this._timerID=null,this._scale=1}var b=createjs.extend(a,createjs.EventDispatcher);a.ERR_DIMENSIONS="frame dimensions exceed max spritesheet dimensions",a.ERR_RUNNING="a build is already running",b.addFrame=function(b,c,d,e,f){if(this._data)throw a.ERR_RUNNING;var g=c||b.bounds||b.nominalBounds;return!g&&b.getBounds&&(g=b.getBounds()),g?(d=d||1,this._frames.push({source:b,sourceRect:g,scale:d,funct:e,data:f,index:this._frames.length,height:g.height*d})-1):null},b.addAnimation=function(b,c,d,e){if(this._data)throw a.ERR_RUNNING;this._animations[b]={frames:c,next:d,speed:e}},b.addMovieClip=function(b,c,d,e,f,g){if(this._data)throw a.ERR_RUNNING;var h=b.frameBounds,i=c||b.bounds||b.nominalBounds;if(!i&&b.getBounds&&(i=b.getBounds()),i||h){var j,k,l=this._frames.length,m=b.timeline.duration;for(j=0;m>j;j++){var n=h&&h[j]?h[j]:i;this.addFrame(b,n,d,this._setupMovieClipFrame,{i:j,f:e,d:f})}var o=b.timeline._labels,p=[];for(var q in o)p.push({index:o[q],label:q});if(p.length)for(p.sort(function(a,b){return a.index-b.index}),j=0,k=p.length;k>j;j++){for(var r=p[j].label,s=l+p[j].index,t=l+(j==k-1?m:p[j+1].index),u=[],v=s;t>v;v++)u.push(v);(!g||(r=g(r,b,s,t)))&&this.addAnimation(r,u,!0)}}},b.build=function(){if(this._data)throw a.ERR_RUNNING;for(this._startBuild();this._drawNext(););return this._endBuild(),this.spriteSheet},b.buildAsync=function(b){if(this._data)throw a.ERR_RUNNING;this.timeSlice=b,this._startBuild();var c=this;this._timerID=setTimeout(function(){c._run()},50-50*Math.max(.01,Math.min(.99,this.timeSlice||.3)))},b.stopAsync=function(){clearTimeout(this._timerID),this._data=null},b.clone=function(){throw"SpriteSheetBuilder cannot be cloned."},b.toString=function(){return"[SpriteSheetBuilder]"},b._startBuild=function(){var b=this.padding||0;this.progress=0,this.spriteSheet=null,this._index=0,this._scale=this.scale;var c=[];this._data={images:[],frames:c,framerate:this.framerate,animations:this._animations};var d=this._frames.slice();if(d.sort(function(a,b){return a.height<=b.height?-1:1}),d[d.length-1].height+2*b>this.maxHeight)throw a.ERR_DIMENSIONS;for(var e=0,f=0,g=0;d.length;){var h=this._fillRow(d,e,g,c,b);if(h.w>f&&(f=h.w),e+=h.h,!h.h||!d.length){var i=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");i.width=this._getSize(f,this.maxWidth),i.height=this._getSize(e,this.maxHeight),this._data.images[g]=i,h.h||(f=e=0,g++)}}},b._setupMovieClipFrame=function(a,b){var c=a.actionsEnabled;a.actionsEnabled=!1,a.gotoAndStop(b.i),a.actionsEnabled=c,b.f&&b.f(a,b.d,b.i)},b._getSize=function(a,b){for(var c=4;Math.pow(2,++c)<a;);return Math.min(b,Math.pow(2,c))},b._fillRow=function(b,c,d,e,f){var g=this.maxWidth,h=this.maxHeight;c+=f;for(var i=h-c,j=f,k=0,l=b.length-1;l>=0;l--){var m=b[l],n=this._scale*m.scale,o=m.sourceRect,p=m.source,q=Math.floor(n*o.x-f),r=Math.floor(n*o.y-f),s=Math.ceil(n*o.height+2*f),t=Math.ceil(n*o.width+2*f);if(t>g)throw a.ERR_DIMENSIONS;s>i||j+t>g||(m.img=d,m.rect=new createjs.Rectangle(j,c,t,s),k=k||s,b.splice(l,1),e[m.index]=[j,c,t,s,d,Math.round(-q+n*p.regX-f),Math.round(-r+n*p.regY-f)],j+=t)}return{w:j,h:k}},b._endBuild=function(){this.spriteSheet=new createjs.SpriteSheet(this._data),this._data=null,this.progress=1,this.dispatchEvent("complete")},b._run=function(){for(var a=50*Math.max(.01,Math.min(.99,this.timeSlice||.3)),b=(new Date).getTime()+a,c=!1;b>(new Date).getTime();)if(!this._drawNext()){c=!0;break}if(c)this._endBuild();else{var d=this;this._timerID=setTimeout(function(){d._run()},50-a)}var e=this.progress=this._index/this._frames.length;if(this.hasEventListener("progress")){var f=new createjs.Event("progress");f.progress=e,this.dispatchEvent(f)}},b._drawNext=function(){var a=this._frames[this._index],b=a.scale*this._scale,c=a.rect,d=a.sourceRect,e=this._data.images[a.img],f=e.getContext("2d");return a.funct&&a.funct(a.source,a.data),f.save(),f.beginPath(),f.rect(c.x,c.y,c.width,c.height),f.clip(),f.translate(Math.ceil(c.x-d.x*b),Math.ceil(c.y-d.y*b)),f.scale(b,b),a.source.draw(f),f.restore(),++this._index<this._frames.length},createjs.SpriteSheetBuilder=createjs.promote(a,"EventDispatcher")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.DisplayObject_constructor(),"string"==typeof a&&(a=document.getElementById(a)),this.mouseEnabled=!1;var b=a.style;b.position="absolute",b.transformOrigin=b.WebkitTransformOrigin=b.msTransformOrigin=b.MozTransformOrigin=b.OTransformOrigin="0% 0%",this.htmlElement=a,this._oldProps=null}var b=createjs.extend(a,createjs.DisplayObject);b.isVisible=function(){return null!=this.htmlElement},b.draw=function(){return!0},b.cache=function(){},b.uncache=function(){},b.updateCache=function(){},b.hitTest=function(){},b.localToGlobal=function(){},b.globalToLocal=function(){},b.localToLocal=function(){},b.clone=function(){throw"DOMElement cannot be cloned."},b.toString=function(){return"[DOMElement (name="+this.name+")]"},b._tick=function(a){var b=this.getStage();b&&b.on("drawend",this._handleDrawEnd,this,!0),this.DisplayObject__tick(a)},b._handleDrawEnd=function(){var a=this.htmlElement;if(a){var b=a.style,c=this.getConcatenatedDisplayProps(this._props),d=c.matrix,e=c.visible?"visible":"hidden";if(e!=b.visibility&&(b.visibility=e),c.visible){var f=this._oldProps,g=f&&f.matrix,h=1e4;if(!g||!g.equals(d)){var i="matrix("+(d.a*h|0)/h+","+(d.b*h|0)/h+","+(d.c*h|0)/h+","+(d.d*h|0)/h+","+(d.tx+.5|0);b.transform=b.WebkitTransform=b.OTransform=b.msTransform=i+","+(d.ty+.5|0)+")",b.MozTransform=i+"px,"+(d.ty+.5|0)+"px)",f||(f=this._oldProps=new createjs.DisplayProps(!0,0/0)),f.matrix.copy(d)}f.alpha!=c.alpha&&(b.opacity=""+(c.alpha*h|0)/h,f.alpha=c.alpha)}}},createjs.DOMElement=createjs.promote(a,"DisplayObject")}(),this.createjs=this.createjs||{},function(){"use strict";function a(){}var b=a.prototype;b.getBounds=function(a){return a},b.applyFilter=function(a,b,c,d,e,f,g,h){f=f||a,null==g&&(g=b),null==h&&(h=c);try{var i=a.getImageData(b,c,d,e)}catch(j){return!1}return this._applyFilter(i)?(f.putImageData(i,g,h),!0):!1},b.toString=function(){return"[Filter]"},b.clone=function(){return new a},b._applyFilter=function(){return!0},createjs.Filter=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c){(isNaN(a)||0>a)&&(a=0),(isNaN(b)||0>b)&&(b=0),(isNaN(c)||1>c)&&(c=1),this.blurX=0|a,this.blurY=0|b,this.quality=0|c}var b=createjs.extend(a,createjs.Filter);a.MUL_TABLE=[1,171,205,293,57,373,79,137,241,27,391,357,41,19,283,265,497,469,443,421,25,191,365,349,335,161,155,149,9,278,269,261,505,245,475,231,449,437,213,415,405,395,193,377,369,361,353,345,169,331,325,319,313,307,301,37,145,285,281,69,271,267,263,259,509,501,493,243,479,118,465,459,113,446,55,435,429,423,209,413,51,403,199,393,97,3,379,375,371,367,363,359,355,351,347,43,85,337,333,165,327,323,5,317,157,311,77,305,303,75,297,294,73,289,287,71,141,279,277,275,68,135,67,133,33,262,260,129,511,507,503,499,495,491,61,121,481,477,237,235,467,232,115,457,227,451,7,445,221,439,218,433,215,427,425,211,419,417,207,411,409,203,202,401,399,396,197,49,389,387,385,383,95,189,47,187,93,185,23,183,91,181,45,179,89,177,11,175,87,173,345,343,341,339,337,21,167,83,331,329,327,163,81,323,321,319,159,79,315,313,39,155,309,307,153,305,303,151,75,299,149,37,295,147,73,291,145,289,287,143,285,71,141,281,35,279,139,69,275,137,273,17,271,135,269,267,133,265,33,263,131,261,130,259,129,257,1],a.SHG_TABLE=[0,9,10,11,9,12,10,11,12,9,13,13,10,9,13,13,14,14,14,14,10,13,14,14,14,13,13,13,9,14,14,14,15,14,15,14,15,15,14,15,15,15,14,15,15,15,15,15,14,15,15,15,15,15,15,12,14,15,15,13,15,15,15,15,16,16,16,15,16,14,16,16,14,16,13,16,16,16,15,16,13,16,15,16,14,9,16,16,16,16,16,16,16,16,16,13,14,16,16,15,16,16,10,16,15,16,14,16,16,14,16,16,14,16,16,14,15,16,16,16,14,15,14,15,13,16,16,15,17,17,17,17,17,17,14,15,17,17,16,16,17,16,15,17,16,17,11,17,16,17,16,17,16,17,17,16,17,17,16,17,17,16,16,17,17,17,16,14,17,17,17,17,15,16,14,16,15,16,13,16,15,16,14,16,15,16,12,16,15,16,17,17,17,17,17,13,16,15,17,17,17,16,15,17,17,17,16,15,17,17,14,16,17,17,16,17,17,16,15,17,16,14,17,16,15,17,16,17,17,16,17,15,16,17,14,17,16,15,17,16,17,13,17,16,17,17,16,17,14,17,16,17,16,17,16,17,9],b.getBounds=function(a){var b=0|this.blurX,c=0|this.blurY;if(0>=b&&0>=c)return a;var d=Math.pow(this.quality,.2);return(a||new createjs.Rectangle).pad(b*d+1,c*d+1,b*d+1,c*d+1)},b.clone=function(){return new a(this.blurX,this.blurY,this.quality)},b.toString=function(){return"[BlurFilter]"},b._applyFilter=function(b){var c=this.blurX>>1;if(isNaN(c)||0>c)return!1;var d=this.blurY>>1;if(isNaN(d)||0>d)return!1;if(0==c&&0==d)return!1;var e=this.quality;(isNaN(e)||1>e)&&(e=1),e|=0,e>3&&(e=3),1>e&&(e=1);var f=b.data,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=c+c+1|0,w=d+d+1|0,x=0|b.width,y=0|b.height,z=x-1|0,A=y-1|0,B=c+1|0,C=d+1|0,D={r:0,b:0,g:0,a:0},E=D;for(i=1;v>i;i++)E=E.n={r:0,b:0,g:0,a:0};E.n=D;var F={r:0,b:0,g:0,a:0},G=F;for(i=1;w>i;i++)G=G.n={r:0,b:0,g:0,a:0};G.n=F;for(var H=null,I=0|a.MUL_TABLE[c],J=0|a.SHG_TABLE[c],K=0|a.MUL_TABLE[d],L=0|a.SHG_TABLE[d];e-->0;){m=l=0;var M=I,N=J;for(h=y;--h>-1;){for(n=B*(r=f[0|l]),o=B*(s=f[l+1|0]),p=B*(t=f[l+2|0]),q=B*(u=f[l+3|0]),E=D,i=B;--i>-1;)E.r=r,E.g=s,E.b=t,E.a=u,E=E.n;for(i=1;B>i;i++)j=l+((i>z?z:i)<<2)|0,n+=E.r=f[j],o+=E.g=f[j+1],p+=E.b=f[j+2],q+=E.a=f[j+3],E=E.n;for(H=D,g=0;x>g;g++)f[l++]=n*M>>>N,f[l++]=o*M>>>N,f[l++]=p*M>>>N,f[l++]=q*M>>>N,j=m+((j=g+c+1)<z?j:z)<<2,n-=H.r-(H.r=f[j]),o-=H.g-(H.g=f[j+1]),p-=H.b-(H.b=f[j+2]),q-=H.a-(H.a=f[j+3]),H=H.n;m+=x}for(M=K,N=L,g=0;x>g;g++){for(l=g<<2|0,n=C*(r=f[l])|0,o=C*(s=f[l+1|0])|0,p=C*(t=f[l+2|0])|0,q=C*(u=f[l+3|0])|0,G=F,i=0;C>i;i++)G.r=r,G.g=s,G.b=t,G.a=u,G=G.n;for(k=x,i=1;d>=i;i++)l=k+g<<2,n+=G.r=f[l],o+=G.g=f[l+1],p+=G.b=f[l+2],q+=G.a=f[l+3],G=G.n,A>i&&(k+=x);if(l=g,H=F,e>0)for(h=0;y>h;h++)j=l<<2,f[j+3]=u=q*M>>>N,u>0?(f[j]=n*M>>>N,f[j+1]=o*M>>>N,f[j+2]=p*M>>>N):f[j]=f[j+1]=f[j+2]=0,j=g+((j=h+C)<A?j:A)*x<<2,n-=H.r-(H.r=f[j]),o-=H.g-(H.g=f[j+1]),p-=H.b-(H.b=f[j+2]),q-=H.a-(H.a=f[j+3]),H=H.n,l+=x;else for(h=0;y>h;h++)j=l<<2,f[j+3]=u=q*M>>>N,u>0?(u=255/u,f[j]=(n*M>>>N)*u,f[j+1]=(o*M>>>N)*u,f[j+2]=(p*M>>>N)*u):f[j]=f[j+1]=f[j+2]=0,j=g+((j=h+C)<A?j:A)*x<<2,n-=H.r-(H.r=f[j]),o-=H.g-(H.g=f[j+1]),p-=H.b-(H.b=f[j+2]),q-=H.a-(H.a=f[j+3]),H=H.n,l+=x}}return!0},createjs.BlurFilter=createjs.promote(a,"Filter")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.alphaMap=a,this._alphaMap=null,this._mapData=null}var b=createjs.extend(a,createjs.Filter);b.clone=function(){var b=new a(this.alphaMap);return b._alphaMap=this._alphaMap,b._mapData=this._mapData,b},b.toString=function(){return"[AlphaMapFilter]"},b._applyFilter=function(a){if(!this.alphaMap)return!0;if(!this._prepAlphaMap())return!1;for(var b=a.data,c=this._mapData,d=0,e=b.length;e>d;d+=4)b[d+3]=c[d]||0;return!0},b._prepAlphaMap=function(){if(!this.alphaMap)return!1;if(this.alphaMap==this._alphaMap&&this._mapData)return!0;this._mapData=null;var a,b=this._alphaMap=this.alphaMap,c=b;b instanceof HTMLCanvasElement?a=c.getContext("2d"):(c=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas"),c.width=b.width,c.height=b.height,a=c.getContext("2d"),a.drawImage(b,0,0));try{var d=a.getImageData(0,0,b.width,b.height)}catch(e){return!1}return this._mapData=d.data,!0},createjs.AlphaMapFilter=createjs.promote(a,"Filter")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.mask=a}var b=createjs.extend(a,createjs.Filter);b.applyFilter=function(a,b,c,d,e,f,g,h){return this.mask?(f=f||a,null==g&&(g=b),null==h&&(h=c),f.save(),a!=f?!1:(f.globalCompositeOperation="destination-in",f.drawImage(this.mask,g,h),f.restore(),!0)):!0},b.clone=function(){return new a(this.mask)},b.toString=function(){return"[AlphaMaskFilter]"},createjs.AlphaMaskFilter=createjs.promote(a,"Filter")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d,e,f,g,h){this.redMultiplier=null!=a?a:1,this.greenMultiplier=null!=b?b:1,this.blueMultiplier=null!=c?c:1,this.alphaMultiplier=null!=d?d:1,this.redOffset=e||0,this.greenOffset=f||0,this.blueOffset=g||0,this.alphaOffset=h||0}var b=createjs.extend(a,createjs.Filter);b.toString=function(){return"[ColorFilter]"},b.clone=function(){return new a(this.redMultiplier,this.greenMultiplier,this.blueMultiplier,this.alphaMultiplier,this.redOffset,this.greenOffset,this.blueOffset,this.alphaOffset)},b._applyFilter=function(a){for(var b=a.data,c=b.length,d=0;c>d;d+=4)b[d]=b[d]*this.redMultiplier+this.redOffset,b[d+1]=b[d+1]*this.greenMultiplier+this.greenOffset,b[d+2]=b[d+2]*this.blueMultiplier+this.blueOffset,b[d+3]=b[d+3]*this.alphaMultiplier+this.alphaOffset;return!0},createjs.ColorFilter=createjs.promote(a,"Filter")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d){this.setColor(a,b,c,d)}var b=a.prototype;a.DELTA_INDEX=[0,.01,.02,.04,.05,.06,.07,.08,.1,.11,.12,.14,.15,.16,.17,.18,.2,.21,.22,.24,.25,.27,.28,.3,.32,.34,.36,.38,.4,.42,.44,.46,.48,.5,.53,.56,.59,.62,.65,.68,.71,.74,.77,.8,.83,.86,.89,.92,.95,.98,1,1.06,1.12,1.18,1.24,1.3,1.36,1.42,1.48,1.54,1.6,1.66,1.72,1.78,1.84,1.9,1.96,2,2.12,2.25,2.37,2.5,2.62,2.75,2.87,3,3.2,3.4,3.6,3.8,4,4.3,4.7,4.9,5,5.5,6,6.5,6.8,7,7.3,7.5,7.8,8,8.4,8.7,9,9.4,9.6,9.8,10],a.IDENTITY_MATRIX=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1],a.LENGTH=a.IDENTITY_MATRIX.length,b.setColor=function(a,b,c,d){return this.reset().adjustColor(a,b,c,d)},b.reset=function(){return this.copy(a.IDENTITY_MATRIX)},b.adjustColor=function(a,b,c,d){return this.adjustHue(d),this.adjustContrast(b),this.adjustBrightness(a),this.adjustSaturation(c)},b.adjustBrightness=function(a){return 0==a||isNaN(a)?this:(a=this._cleanValue(a,255),this._multiplyMatrix([1,0,0,0,a,0,1,0,0,a,0,0,1,0,a,0,0,0,1,0,0,0,0,0,1]),this)},b.adjustContrast=function(b){if(0==b||isNaN(b))return this;b=this._cleanValue(b,100);var c;return 0>b?c=127+b/100*127:(c=b%1,c=0==c?a.DELTA_INDEX[b]:a.DELTA_INDEX[b<<0]*(1-c)+a.DELTA_INDEX[(b<<0)+1]*c,c=127*c+127),this._multiplyMatrix([c/127,0,0,0,.5*(127-c),0,c/127,0,0,.5*(127-c),0,0,c/127,0,.5*(127-c),0,0,0,1,0,0,0,0,0,1]),this},b.adjustSaturation=function(a){if(0==a||isNaN(a))return this;a=this._cleanValue(a,100);var b=1+(a>0?3*a/100:a/100),c=.3086,d=.6094,e=.082;return this._multiplyMatrix([c*(1-b)+b,d*(1-b),e*(1-b),0,0,c*(1-b),d*(1-b)+b,e*(1-b),0,0,c*(1-b),d*(1-b),e*(1-b)+b,0,0,0,0,0,1,0,0,0,0,0,1]),this},b.adjustHue=function(a){if(0==a||isNaN(a))return this;a=this._cleanValue(a,180)/180*Math.PI;var b=Math.cos(a),c=Math.sin(a),d=.213,e=.715,f=.072;return this._multiplyMatrix([d+b*(1-d)+c*-d,e+b*-e+c*-e,f+b*-f+c*(1-f),0,0,d+b*-d+.143*c,e+b*(1-e)+.14*c,f+b*-f+c*-.283,0,0,d+b*-d+c*-(1-d),e+b*-e+c*e,f+b*(1-f)+c*f,0,0,0,0,0,1,0,0,0,0,0,1]),this},b.concat=function(b){return b=this._fixMatrix(b),b.length!=a.LENGTH?this:(this._multiplyMatrix(b),this)},b.clone=function(){return(new a).copy(this)},b.toArray=function(){for(var b=[],c=0,d=a.LENGTH;d>c;c++)b[c]=this[c];return b},b.copy=function(b){for(var c=a.LENGTH,d=0;c>d;d++)this[d]=b[d];return this},b.toString=function(){return"[ColorMatrix]"},b._multiplyMatrix=function(a){var b,c,d,e=[];for(b=0;5>b;b++){for(c=0;5>c;c++)e[c]=this[c+5*b];for(c=0;5>c;c++){var f=0;for(d=0;5>d;d++)f+=a[c+5*d]*e[d];this[c+5*b]=f}}},b._cleanValue=function(a,b){return Math.min(b,Math.max(-b,a))},b._fixMatrix=function(b){return b instanceof a&&(b=b.toArray()),b.length<a.LENGTH?b=b.slice(0,b.length).concat(a.IDENTITY_MATRIX.slice(b.length,a.LENGTH)):b.length>a.LENGTH&&(b=b.slice(0,a.LENGTH)),b},createjs.ColorMatrix=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.matrix=a}var b=createjs.extend(a,createjs.Filter);b.toString=function(){return"[ColorMatrixFilter]"},b.clone=function(){return new a(this.matrix)},b._applyFilter=function(a){for(var b,c,d,e,f=a.data,g=f.length,h=this.matrix,i=h[0],j=h[1],k=h[2],l=h[3],m=h[4],n=h[5],o=h[6],p=h[7],q=h[8],r=h[9],s=h[10],t=h[11],u=h[12],v=h[13],w=h[14],x=h[15],y=h[16],z=h[17],A=h[18],B=h[19],C=0;g>C;C+=4)b=f[C],c=f[C+1],d=f[C+2],e=f[C+3],f[C]=b*i+c*j+d*k+e*l+m,f[C+1]=b*n+c*o+d*p+e*q+r,f[C+2]=b*s+c*t+d*u+e*v+w,f[C+3]=b*x+c*y+d*z+e*A+B;return!0},createjs.ColorMatrixFilter=createjs.promote(a,"Filter")}(),this.createjs=this.createjs||{},function(){"use strict";function a(){throw"Touch cannot be instantiated"}a.isSupported=function(){return!!("ontouchstart"in window||window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>0||window.navigator.pointerEnabled&&window.navigator.maxTouchPoints>0)},a.enable=function(b,c,d){return b&&b.canvas&&a.isSupported()?b.__touch?!0:(b.__touch={pointers:{},multitouch:!c,preventDefault:!d,count:0},"ontouchstart"in window?a._IOS_enable(b):(window.navigator.msPointerEnabled||window.navigator.pointerEnabled)&&a._IE_enable(b),!0):!1},a.disable=function(b){b&&("ontouchstart"in window?a._IOS_disable(b):(window.navigator.msPointerEnabled||window.navigator.pointerEnabled)&&a._IE_disable(b),delete b.__touch)},a._IOS_enable=function(b){var c=b.canvas,d=b.__touch.f=function(c){a._IOS_handleEvent(b,c)};c.addEventListener("touchstart",d,!1),c.addEventListener("touchmove",d,!1),c.addEventListener("touchend",d,!1),c.addEventListener("touchcancel",d,!1)},a._IOS_disable=function(a){var b=a.canvas;if(b){var c=a.__touch.f;b.removeEventListener("touchstart",c,!1),b.removeEventListener("touchmove",c,!1),b.removeEventListener("touchend",c,!1),b.removeEventListener("touchcancel",c,!1)}},a._IOS_handleEvent=function(a,b){if(a){a.__touch.preventDefault&&b.preventDefault&&b.preventDefault();for(var c=b.changedTouches,d=b.type,e=0,f=c.length;f>e;e++){var g=c[e],h=g.identifier;g.target==a.canvas&&("touchstart"==d?this._handleStart(a,h,b,g.pageX,g.pageY):"touchmove"==d?this._handleMove(a,h,b,g.pageX,g.pageY):("touchend"==d||"touchcancel"==d)&&this._handleEnd(a,h,b))}}},a._IE_enable=function(b){var c=b.canvas,d=b.__touch.f=function(c){a._IE_handleEvent(b,c)};void 0===window.navigator.pointerEnabled?(c.addEventListener("MSPointerDown",d,!1),window.addEventListener("MSPointerMove",d,!1),window.addEventListener("MSPointerUp",d,!1),window.addEventListener("MSPointerCancel",d,!1),b.__touch.preventDefault&&(c.style.msTouchAction="none")):(c.addEventListener("pointerdown",d,!1),window.addEventListener("pointermove",d,!1),window.addEventListener("pointerup",d,!1),window.addEventListener("pointercancel",d,!1),b.__touch.preventDefault&&(c.style.touchAction="none")),b.__touch.activeIDs={}},a._IE_disable=function(a){var b=a.__touch.f;void 0===window.navigator.pointerEnabled?(window.removeEventListener("MSPointerMove",b,!1),window.removeEventListener("MSPointerUp",b,!1),window.removeEventListener("MSPointerCancel",b,!1),a.canvas&&a.canvas.removeEventListener("MSPointerDown",b,!1)):(window.removeEventListener("pointermove",b,!1),window.removeEventListener("pointerup",b,!1),window.removeEventListener("pointercancel",b,!1),a.canvas&&a.canvas.removeEventListener("pointerdown",b,!1))},a._IE_handleEvent=function(a,b){if(a){a.__touch.preventDefault&&b.preventDefault&&b.preventDefault();var c=b.type,d=b.pointerId,e=a.__touch.activeIDs;if("MSPointerDown"==c||"pointerdown"==c){if(b.srcElement!=a.canvas)return;e[d]=!0,this._handleStart(a,d,b,b.pageX,b.pageY)}else e[d]&&("MSPointerMove"==c||"pointermove"==c?this._handleMove(a,d,b,b.pageX,b.pageY):("MSPointerUp"==c||"MSPointerCancel"==c||"pointerup"==c||"pointercancel"==c)&&(delete e[d],this._handleEnd(a,d,b)))}},a._handleStart=function(a,b,c,d,e){var f=a.__touch;if(f.multitouch||!f.count){var g=f.pointers;g[b]||(g[b]=!0,f.count++,a._handlePointerDown(b,c,d,e))}},a._handleMove=function(a,b,c,d,e){a.__touch.pointers[b]&&a._handlePointerMove(b,c,d,e)},a._handleEnd=function(a,b,c){var d=a.__touch,e=d.pointers;e[b]&&(d.count--,a._handlePointerUp(b,c,!0),delete e[b])},createjs.Touch=a}(),this.createjs=this.createjs||{},function(){"use strict";var a=createjs.EaselJS=createjs.EaselJS||{};a.version="0.8.2",a.buildDate="Thu, 26 Nov 2015 20:44:34 GMT"}();
	
	/*** EXPORTS FROM exports-loader ***/
	module.exports = window.createjs;
	}.call(window));

/***/ },
/* 2 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	(function() {
	
	/*!
	* TweenJS
	* Visit http://createjs.com/ for documentation, updates and examples.
	*
	* Copyright (c) 2010 gskinner.com, inc.
	*
	* Permission is hereby granted, free of charge, to any person
	* obtaining a copy of this software and associated documentation
	* files (the "Software"), to deal in the Software without
	* restriction, including without limitation the rights to use,
	* copy, modify, merge, publish, distribute, sublicense, and/or sell
	* copies of the Software, and to permit persons to whom the
	* Software is furnished to do so, subject to the following
	* conditions:
	*
	* The above copyright notice and this permission notice shall be
	* included in all copies or substantial portions of the Software.
	*
	* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
	* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
	* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
	* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
	* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
	* OTHER DEALINGS IN THE SOFTWARE.
	*/
	
	
	//##############################################################################
	// extend.js
	//##############################################################################
	
	this.createjs = this.createjs||{};
	
	/**
	 * @class Utility Methods
	 */
	
	/**
	 * Sets up the prototype chain and constructor property for a new class.
	 *
	 * This should be called right after creating the class constructor.
	 *
	 * 	function MySubClass() {}
	 * 	createjs.extend(MySubClass, MySuperClass);
	 * 	ClassB.prototype.doSomething = function() { }
	 *
	 * 	var foo = new MySubClass();
	 * 	console.log(foo instanceof MySuperClass); // true
	 * 	console.log(foo.prototype.constructor === MySubClass); // true
	 *
	 * @method extends
	 * @param {Function} subclass The subclass.
	 * @param {Function} superclass The superclass to extend.
	 * @return {Function} Returns the subclass's new prototype.
	 */
	createjs.extend = function(subclass, superclass) {
		"use strict";
	
		function o() { this.constructor = subclass; }
		o.prototype = superclass.prototype;
		return (subclass.prototype = new o());
	};
	
	//##############################################################################
	// promote.js
	//##############################################################################
	
	this.createjs = this.createjs||{};
	
	/**
	 * @class Utility Methods
	 */
	
	/**
	 * Promotes any methods on the super class that were overridden, by creating an alias in the format `prefix_methodName`.
	 * It is recommended to use the super class's name as the prefix.
	 * An alias to the super class's constructor is always added in the format `prefix_constructor`.
	 * This allows the subclass to call super class methods without using `function.call`, providing better performance.
	 *
	 * For example, if `MySubClass` extends `MySuperClass`, and both define a `draw` method, then calling `promote(MySubClass, "MySuperClass")`
	 * would add a `MySuperClass_constructor` method to MySubClass and promote the `draw` method on `MySuperClass` to the
	 * prototype of `MySubClass` as `MySuperClass_draw`.
	 *
	 * This should be called after the class's prototype is fully defined.
	 *
	 * 	function ClassA(name) {
	 * 		this.name = name;
	 * 	}
	 * 	ClassA.prototype.greet = function() {
	 * 		return "Hello "+this.name;
	 * 	}
	 *
	 * 	function ClassB(name, punctuation) {
	 * 		this.ClassA_constructor(name);
	 * 		this.punctuation = punctuation;
	 * 	}
	 * 	createjs.extend(ClassB, ClassA);
	 * 	ClassB.prototype.greet = function() {
	 * 		return this.ClassA_greet()+this.punctuation;
	 * 	}
	 * 	createjs.promote(ClassB, "ClassA");
	 *
	 * 	var foo = new ClassB("World", "!?!");
	 * 	console.log(foo.greet()); // Hello World!?!
	 *
	 * @method promote
	 * @param {Function} subclass The class to promote super class methods on.
	 * @param {String} prefix The prefix to add to the promoted method names. Usually the name of the superclass.
	 * @return {Function} Returns the subclass.
	 */
	createjs.promote = function(subclass, prefix) {
		"use strict";
	
		var subP = subclass.prototype, supP = (Object.getPrototypeOf&&Object.getPrototypeOf(subP))||subP.__proto__;
		if (supP) {
			subP[(prefix+="_") + "constructor"] = supP.constructor; // constructor is not always innumerable
			for (var n in supP) {
				if (subP.hasOwnProperty(n) && (typeof supP[n] == "function")) { subP[prefix + n] = supP[n]; }
			}
		}
		return subclass;
	};
	
	//##############################################################################
	// Event.js
	//##############################################################################
	
	this.createjs = this.createjs||{};
	
	(function() {
		"use strict";
	
	// constructor:
		/**
		 * Contains properties and methods shared by all events for use with
		 * {{#crossLink "EventDispatcher"}}{{/crossLink}}.
		 * 
		 * Note that Event objects are often reused, so you should never
		 * rely on an event object's state outside of the call stack it was received in.
		 * @class Event
		 * @param {String} type The event type.
		 * @param {Boolean} bubbles Indicates whether the event will bubble through the display list.
		 * @param {Boolean} cancelable Indicates whether the default behaviour of this event can be cancelled.
		 * @constructor
		 **/
		function Event(type, bubbles, cancelable) {
			
		
		// public properties:
			/**
			 * The type of event.
			 * @property type
			 * @type String
			 **/
			this.type = type;
		
			/**
			 * The object that generated an event.
			 * @property target
			 * @type Object
			 * @default null
			 * @readonly
			*/
			this.target = null;
		
			/**
			 * The current target that a bubbling event is being dispatched from. For non-bubbling events, this will
			 * always be the same as target. For example, if childObj.parent = parentObj, and a bubbling event
			 * is generated from childObj, then a listener on parentObj would receive the event with
			 * target=childObj (the original target) and currentTarget=parentObj (where the listener was added).
			 * @property currentTarget
			 * @type Object
			 * @default null
			 * @readonly
			*/
			this.currentTarget = null;
		
			/**
			 * For bubbling events, this indicates the current event phase:<OL>
			 * 	<LI> capture phase: starting from the top parent to the target</LI>
			 * 	<LI> at target phase: currently being dispatched from the target</LI>
			 * 	<LI> bubbling phase: from the target to the top parent</LI>
			 * </OL>
			 * @property eventPhase
			 * @type Number
			 * @default 0
			 * @readonly
			*/
			this.eventPhase = 0;
		
			/**
			 * Indicates whether the event will bubble through the display list.
			 * @property bubbles
			 * @type Boolean
			 * @default false
			 * @readonly
			*/
			this.bubbles = !!bubbles;
		
			/**
			 * Indicates whether the default behaviour of this event can be cancelled via
			 * {{#crossLink "Event/preventDefault"}}{{/crossLink}}. This is set via the Event constructor.
			 * @property cancelable
			 * @type Boolean
			 * @default false
			 * @readonly
			*/
			this.cancelable = !!cancelable;
		
			/**
			 * The epoch time at which this event was created.
			 * @property timeStamp
			 * @type Number
			 * @default 0
			 * @readonly
			*/
			this.timeStamp = (new Date()).getTime();
		
			/**
			 * Indicates if {{#crossLink "Event/preventDefault"}}{{/crossLink}} has been called
			 * on this event.
			 * @property defaultPrevented
			 * @type Boolean
			 * @default false
			 * @readonly
			*/
			this.defaultPrevented = false;
		
			/**
			 * Indicates if {{#crossLink "Event/stopPropagation"}}{{/crossLink}} or
			 * {{#crossLink "Event/stopImmediatePropagation"}}{{/crossLink}} has been called on this event.
			 * @property propagationStopped
			 * @type Boolean
			 * @default false
			 * @readonly
			*/
			this.propagationStopped = false;
		
			/**
			 * Indicates if {{#crossLink "Event/stopImmediatePropagation"}}{{/crossLink}} has been called
			 * on this event.
			 * @property immediatePropagationStopped
			 * @type Boolean
			 * @default false
			 * @readonly
			*/
			this.immediatePropagationStopped = false;
			
			/**
			 * Indicates if {{#crossLink "Event/remove"}}{{/crossLink}} has been called on this event.
			 * @property removed
			 * @type Boolean
			 * @default false
			 * @readonly
			*/
			this.removed = false;
		}
		var p = Event.prototype;
		
	
	// public methods:
		/**
		 * Sets {{#crossLink "Event/defaultPrevented"}}{{/crossLink}} to true.
		 * Mirrors the DOM event standard.
		 * @method preventDefault
		 **/
		p.preventDefault = function() {
			this.defaultPrevented = this.cancelable&&true;
		};
	
		/**
		 * Sets {{#crossLink "Event/propagationStopped"}}{{/crossLink}} to true.
		 * Mirrors the DOM event standard.
		 * @method stopPropagation
		 **/
		p.stopPropagation = function() {
			this.propagationStopped = true;
		};
	
		/**
		 * Sets {{#crossLink "Event/propagationStopped"}}{{/crossLink}} and
		 * {{#crossLink "Event/immediatePropagationStopped"}}{{/crossLink}} to true.
		 * Mirrors the DOM event standard.
		 * @method stopImmediatePropagation
		 **/
		p.stopImmediatePropagation = function() {
			this.immediatePropagationStopped = this.propagationStopped = true;
		};
		
		/**
		 * Causes the active listener to be removed via removeEventListener();
		 * 
		 * 		myBtn.addEventListener("click", function(evt) {
		 * 			// do stuff...
		 * 			evt.remove(); // removes this listener.
		 * 		});
		 * 
		 * @method remove
		 **/
		p.remove = function() {
			this.removed = true;
		};
		
		/**
		 * Returns a clone of the Event instance.
		 * @method clone
		 * @return {Event} a clone of the Event instance.
		 **/
		p.clone = function() {
			return new Event(this.type, this.bubbles, this.cancelable);
		};
		
		/**
		 * Provides a chainable shortcut method for setting a number of properties on the instance.
		 *
		 * @method set
		 * @param {Object} props A generic object containing properties to copy to the instance.
		 * @return {Event} Returns the instance the method is called on (useful for chaining calls.)
		 * @chainable
		*/
		p.set = function(props) {
			for (var n in props) { this[n] = props[n]; }
			return this;
		};
	
		/**
		 * Returns a string representation of this object.
		 * @method toString
		 * @return {String} a string representation of the instance.
		 **/
		p.toString = function() {
			return "[Event (type="+this.type+")]";
		};
	
		createjs.Event = Event;
	}());
	
	//##############################################################################
	// EventDispatcher.js
	//##############################################################################
	
	this.createjs = this.createjs||{};
	
	(function() {
		"use strict";
	
	
	// constructor:
		/**
		 * EventDispatcher provides methods for managing queues of event listeners and dispatching events.
		 *
		 * You can either extend EventDispatcher or mix its methods into an existing prototype or instance by using the
		 * EventDispatcher {{#crossLink "EventDispatcher/initialize"}}{{/crossLink}} method.
		 * 
		 * Together with the CreateJS Event class, EventDispatcher provides an extended event model that is based on the
		 * DOM Level 2 event model, including addEventListener, removeEventListener, and dispatchEvent. It supports
		 * bubbling / capture, preventDefault, stopPropagation, stopImmediatePropagation, and handleEvent.
		 * 
		 * EventDispatcher also exposes a {{#crossLink "EventDispatcher/on"}}{{/crossLink}} method, which makes it easier
		 * to create scoped listeners, listeners that only run once, and listeners with associated arbitrary data. The 
		 * {{#crossLink "EventDispatcher/off"}}{{/crossLink}} method is merely an alias to
		 * {{#crossLink "EventDispatcher/removeEventListener"}}{{/crossLink}}.
		 * 
		 * Another addition to the DOM Level 2 model is the {{#crossLink "EventDispatcher/removeAllEventListeners"}}{{/crossLink}}
		 * method, which can be used to listeners for all events, or listeners for a specific event. The Event object also 
		 * includes a {{#crossLink "Event/remove"}}{{/crossLink}} method which removes the active listener.
		 *
		 * <h4>Example</h4>
		 * Add EventDispatcher capabilities to the "MyClass" class.
		 *
		 *      EventDispatcher.initialize(MyClass.prototype);
		 *
		 * Add an event (see {{#crossLink "EventDispatcher/addEventListener"}}{{/crossLink}}).
		 *
		 *      instance.addEventListener("eventName", handlerMethod);
		 *      function handlerMethod(event) {
		 *          console.log(event.target + " Was Clicked");
		 *      }
		 *
		 * <b>Maintaining proper scope</b><br />
		 * Scope (ie. "this") can be be a challenge with events. Using the {{#crossLink "EventDispatcher/on"}}{{/crossLink}}
		 * method to subscribe to events simplifies this.
		 *
		 *      instance.addEventListener("click", function(event) {
		 *          console.log(instance == this); // false, scope is ambiguous.
		 *      });
		 *      
		 *      instance.on("click", function(event) {
		 *          console.log(instance == this); // true, "on" uses dispatcher scope by default.
		 *      });
		 * 
		 * If you want to use addEventListener instead, you may want to use function.bind() or a similar proxy to manage scope.
		 *      
		 *
		 * @class EventDispatcher
		 * @constructor
		 **/
		function EventDispatcher() {
		
		
		// private properties:
			/**
			 * @protected
			 * @property _listeners
			 * @type Object
			 **/
			this._listeners = null;
			
			/**
			 * @protected
			 * @property _captureListeners
			 * @type Object
			 **/
			this._captureListeners = null;
		}
		var p = EventDispatcher.prototype;
	
	
	// static public methods:
		/**
		 * Static initializer to mix EventDispatcher methods into a target object or prototype.
		 * 
		 * 		EventDispatcher.initialize(MyClass.prototype); // add to the prototype of the class
		 * 		EventDispatcher.initialize(myObject); // add to a specific instance
		 * 
		 * @method initialize
		 * @static
		 * @param {Object} target The target object to inject EventDispatcher methods into. This can be an instance or a
		 * prototype.
		 **/
		EventDispatcher.initialize = function(target) {
			target.addEventListener = p.addEventListener;
			target.on = p.on;
			target.removeEventListener = target.off =  p.removeEventListener;
			target.removeAllEventListeners = p.removeAllEventListeners;
			target.hasEventListener = p.hasEventListener;
			target.dispatchEvent = p.dispatchEvent;
			target._dispatchEvent = p._dispatchEvent;
			target.willTrigger = p.willTrigger;
		};
		
	
	// public methods:
		/**
		 * Adds the specified event listener. Note that adding multiple listeners to the same function will result in
		 * multiple callbacks getting fired.
		 *
		 * <h4>Example</h4>
		 *
		 *      displayObject.addEventListener("click", handleClick);
		 *      function handleClick(event) {
		 *         // Click happened.
		 *      }
		 *
		 * @method addEventListener
		 * @param {String} type The string type of the event.
		 * @param {Function | Object} listener An object with a handleEvent method, or a function that will be called when
		 * the event is dispatched.
		 * @param {Boolean} [useCapture] For events that bubble, indicates whether to listen for the event in the capture or bubbling/target phase.
		 * @return {Function | Object} Returns the listener for chaining or assignment.
		 **/
		p.addEventListener = function(type, listener, useCapture) {
			var listeners;
			if (useCapture) {
				listeners = this._captureListeners = this._captureListeners||{};
			} else {
				listeners = this._listeners = this._listeners||{};
			}
			var arr = listeners[type];
			if (arr) { this.removeEventListener(type, listener, useCapture); }
			arr = listeners[type]; // remove may have deleted the array
			if (!arr) { listeners[type] = [listener];  }
			else { arr.push(listener); }
			return listener;
		};
		
		/**
		 * A shortcut method for using addEventListener that makes it easier to specify an execution scope, have a listener
		 * only run once, associate arbitrary data with the listener, and remove the listener.
		 * 
		 * This method works by creating an anonymous wrapper function and subscribing it with addEventListener.
		 * The created anonymous function is returned for use with .removeEventListener (or .off).
		 * 
		 * <h4>Example</h4>
		 * 
		 * 		var listener = myBtn.on("click", handleClick, null, false, {count:3});
		 * 		function handleClick(evt, data) {
		 * 			data.count -= 1;
		 * 			console.log(this == myBtn); // true - scope defaults to the dispatcher
		 * 			if (data.count == 0) {
		 * 				alert("clicked 3 times!");
		 * 				myBtn.off("click", listener);
		 * 				// alternately: evt.remove();
		 * 			}
		 * 		}
		 * 
		 * @method on
		 * @param {String} type The string type of the event.
		 * @param {Function | Object} listener An object with a handleEvent method, or a function that will be called when
		 * the event is dispatched.
		 * @param {Object} [scope] The scope to execute the listener in. Defaults to the dispatcher/currentTarget for function listeners, and to the listener itself for object listeners (ie. using handleEvent).
		 * @param {Boolean} [once=false] If true, the listener will remove itself after the first time it is triggered.
		 * @param {*} [data] Arbitrary data that will be included as the second parameter when the listener is called.
		 * @param {Boolean} [useCapture=false] For events that bubble, indicates whether to listen for the event in the capture or bubbling/target phase.
		 * @return {Function} Returns the anonymous function that was created and assigned as the listener. This is needed to remove the listener later using .removeEventListener.
		 **/
		p.on = function(type, listener, scope, once, data, useCapture) {
			if (listener.handleEvent) {
				scope = scope||listener;
				listener = listener.handleEvent;
			}
			scope = scope||this;
			return this.addEventListener(type, function(evt) {
					listener.call(scope, evt, data);
					once&&evt.remove();
				}, useCapture);
		};
	
		/**
		 * Removes the specified event listener.
		 *
		 * <b>Important Note:</b> that you must pass the exact function reference used when the event was added. If a proxy
		 * function, or function closure is used as the callback, the proxy/closure reference must be used - a new proxy or
		 * closure will not work.
		 *
		 * <h4>Example</h4>
		 *
		 *      displayObject.removeEventListener("click", handleClick);
		 *
		 * @method removeEventListener
		 * @param {String} type The string type of the event.
		 * @param {Function | Object} listener The listener function or object.
		 * @param {Boolean} [useCapture] For events that bubble, indicates whether to listen for the event in the capture or bubbling/target phase.
		 **/
		p.removeEventListener = function(type, listener, useCapture) {
			var listeners = useCapture ? this._captureListeners : this._listeners;
			if (!listeners) { return; }
			var arr = listeners[type];
			if (!arr) { return; }
			for (var i=0,l=arr.length; i<l; i++) {
				if (arr[i] == listener) {
					if (l==1) { delete(listeners[type]); } // allows for faster checks.
					else { arr.splice(i,1); }
					break;
				}
			}
		};
		
		/**
		 * A shortcut to the removeEventListener method, with the same parameters and return value. This is a companion to the
		 * .on method.
		 *
		 * @method off
		 * @param {String} type The string type of the event.
		 * @param {Function | Object} listener The listener function or object.
		 * @param {Boolean} [useCapture] For events that bubble, indicates whether to listen for the event in the capture or bubbling/target phase.
		 **/
		p.off = p.removeEventListener;
	
		/**
		 * Removes all listeners for the specified type, or all listeners of all types.
		 *
		 * <h4>Example</h4>
		 *
		 *      // Remove all listeners
		 *      displayObject.removeAllEventListeners();
		 *
		 *      // Remove all click listeners
		 *      displayObject.removeAllEventListeners("click");
		 *
		 * @method removeAllEventListeners
		 * @param {String} [type] The string type of the event. If omitted, all listeners for all types will be removed.
		 **/
		p.removeAllEventListeners = function(type) {
			if (!type) { this._listeners = this._captureListeners = null; }
			else {
				if (this._listeners) { delete(this._listeners[type]); }
				if (this._captureListeners) { delete(this._captureListeners[type]); }
			}
		};
	
		/**
		 * Dispatches the specified event to all listeners.
		 *
		 * <h4>Example</h4>
		 *
		 *      // Use a string event
		 *      this.dispatchEvent("complete");
		 *
		 *      // Use an Event instance
		 *      var event = new createjs.Event("progress");
		 *      this.dispatchEvent(event);
		 *
		 * @method dispatchEvent
		 * @param {Object | String | Event} eventObj An object with a "type" property, or a string type.
		 * While a generic object will work, it is recommended to use a CreateJS Event instance. If a string is used,
		 * dispatchEvent will construct an Event instance with the specified type.
		 * @return {Boolean} Returns the value of eventObj.defaultPrevented.
		 **/
		p.dispatchEvent = function(eventObj) {
			if (typeof eventObj == "string") {
				// won't bubble, so skip everything if there's no listeners:
				var listeners = this._listeners;
				if (!listeners || !listeners[eventObj]) { return false; }
				eventObj = new createjs.Event(eventObj);
			} else if (eventObj.target && eventObj.clone) {
				// redispatching an active event object, so clone it:
				eventObj = eventObj.clone();
			}
			try { eventObj.target = this; } catch (e) {} // try/catch allows redispatching of native events
	
			if (!eventObj.bubbles || !this.parent) {
				this._dispatchEvent(eventObj, 2);
			} else {
				var top=this, list=[top];
				while (top.parent) { list.push(top = top.parent); }
				var i, l=list.length;
	
				// capture & atTarget
				for (i=l-1; i>=0 && !eventObj.propagationStopped; i--) {
					list[i]._dispatchEvent(eventObj, 1+(i==0));
				}
				// bubbling
				for (i=1; i<l && !eventObj.propagationStopped; i++) {
					list[i]._dispatchEvent(eventObj, 3);
				}
			}
			return eventObj.defaultPrevented;
		};
	
		/**
		 * Indicates whether there is at least one listener for the specified event type.
		 * @method hasEventListener
		 * @param {String} type The string type of the event.
		 * @return {Boolean} Returns true if there is at least one listener for the specified event.
		 **/
		p.hasEventListener = function(type) {
			var listeners = this._listeners, captureListeners = this._captureListeners;
			return !!((listeners && listeners[type]) || (captureListeners && captureListeners[type]));
		};
		
		/**
		 * Indicates whether there is at least one listener for the specified event type on this object or any of its
		 * ancestors (parent, parent's parent, etc). A return value of true indicates that if a bubbling event of the
		 * specified type is dispatched from this object, it will trigger at least one listener.
		 * 
		 * This is similar to {{#crossLink "EventDispatcher/hasEventListener"}}{{/crossLink}}, but it searches the entire
		 * event flow for a listener, not just this object.
		 * @method willTrigger
		 * @param {String} type The string type of the event.
		 * @return {Boolean} Returns `true` if there is at least one listener for the specified event.
		 **/
		p.willTrigger = function(type) {
			var o = this;
			while (o) {
				if (o.hasEventListener(type)) { return true; }
				o = o.parent;
			}
			return false;
		};
	
		/**
		 * @method toString
		 * @return {String} a string representation of the instance.
		 **/
		p.toString = function() {
			return "[EventDispatcher]";
		};
	
	
	// private methods:
		/**
		 * @method _dispatchEvent
		 * @param {Object | String | Event} eventObj
		 * @param {Object} eventPhase
		 * @protected
		 **/
		p._dispatchEvent = function(eventObj, eventPhase) {
			var l, listeners = (eventPhase==1) ? this._captureListeners : this._listeners;
			if (eventObj && listeners) {
				var arr = listeners[eventObj.type];
				if (!arr||!(l=arr.length)) { return; }
				try { eventObj.currentTarget = this; } catch (e) {}
				try { eventObj.eventPhase = eventPhase; } catch (e) {}
				eventObj.removed = false;
				
				arr = arr.slice(); // to avoid issues with items being removed or added during the dispatch
				for (var i=0; i<l && !eventObj.immediatePropagationStopped; i++) {
					var o = arr[i];
					if (o.handleEvent) { o.handleEvent(eventObj); }
					else { o(eventObj); }
					if (eventObj.removed) {
						this.off(eventObj.type, o, eventPhase==1);
						eventObj.removed = false;
					}
				}
			}
		};
	
	
		createjs.EventDispatcher = EventDispatcher;
	}());
	
	//##############################################################################
	// Ticker.js
	//##############################################################################
	
	this.createjs = this.createjs||{};
	
	(function() {
		"use strict";
	
	
	// constructor:
		/**
		 * The Ticker provides a centralized tick or heartbeat broadcast at a set interval. Listeners can subscribe to the tick
		 * event to be notified when a set time interval has elapsed.
		 *
		 * Note that the interval that the tick event is called is a target interval, and may be broadcast at a slower interval
		 * when under high CPU load. The Ticker class uses a static interface (ex. `Ticker.framerate = 30;`) and
		 * can not be instantiated.
		 *
		 * <h4>Example</h4>
		 *
		 *      createjs.Ticker.addEventListener("tick", handleTick);
		 *      function handleTick(event) {
		 *          // Actions carried out each tick (aka frame)
		 *          if (!event.paused) {
		 *              // Actions carried out when the Ticker is not paused.
		 *          }
		 *      }
		 *
		 * @class Ticker
		 * @uses EventDispatcher
		 * @static
		 **/
		function Ticker() {
			throw "Ticker cannot be instantiated.";
		}
	
	
	// constants:
		/**
		 * In this mode, Ticker uses the requestAnimationFrame API, but attempts to synch the ticks to target framerate. It
		 * uses a simple heuristic that compares the time of the RAF return to the target time for the current frame and
		 * dispatches the tick when the time is within a certain threshold.
		 *
		 * This mode has a higher variance for time between frames than TIMEOUT, but does not require that content be time
		 * based as with RAF while gaining the benefits of that API (screen synch, background throttling).
		 *
		 * Variance is usually lowest for framerates that are a divisor of the RAF frequency. This is usually 60, so
		 * framerates of 10, 12, 15, 20, and 30 work well.
		 *
		 * Falls back on TIMEOUT if the requestAnimationFrame API is not supported.
		 * @property RAF_SYNCHED
		 * @static
		 * @type {String}
		 * @default "synched"
		 * @readonly
		 **/
		Ticker.RAF_SYNCHED = "synched";
	
		/**
		 * In this mode, Ticker passes through the requestAnimationFrame heartbeat, ignoring the target framerate completely.
		 * Because requestAnimationFrame frequency is not deterministic, any content using this mode should be time based.
		 * You can leverage {{#crossLink "Ticker/getTime"}}{{/crossLink}} and the tick event object's "delta" properties
		 * to make this easier.
		 *
		 * Falls back on TIMEOUT if the requestAnimationFrame API is not supported.
		 * @property RAF
		 * @static
		 * @type {String}
		 * @default "raf"
		 * @readonly
		 **/
		Ticker.RAF = "raf";
	
		/**
		 * In this mode, Ticker uses the setTimeout API. This provides predictable, adaptive frame timing, but does not
		 * provide the benefits of requestAnimationFrame (screen synch, background throttling).
		 * @property TIMEOUT
		 * @static
		 * @type {String}
		 * @default "timer"
		 * @readonly
		 **/
		Ticker.TIMEOUT = "timeout";
	
	
	// static events:
		/**
		 * Dispatched each tick. The event will be dispatched to each listener even when the Ticker has been paused using
		 * {{#crossLink "Ticker/setPaused"}}{{/crossLink}}.
		 *
		 * <h4>Example</h4>
		 *
		 *      createjs.Ticker.addEventListener("tick", handleTick);
		 *      function handleTick(event) {
		 *          console.log("Paused:", event.paused, event.delta);
		 *      }
		 *
		 * @event tick
		 * @param {Object} target The object that dispatched the event.
		 * @param {String} type The event type.
		 * @param {Boolean} paused Indicates whether the ticker is currently paused.
		 * @param {Number} delta The time elapsed in ms since the last tick.
		 * @param {Number} time The total time in ms since Ticker was initialized.
		 * @param {Number} runTime The total time in ms that Ticker was not paused since it was initialized. For example,
		 * 	you could determine the amount of time that the Ticker has been paused since initialization with time-runTime.
		 * @since 0.6.0
		 */
	
	
	// public static properties:
		/**
		 * Deprecated in favour of {{#crossLink "Ticker/timingMode"}}{{/crossLink}}, and will be removed in a future version. If true, timingMode will
		 * use {{#crossLink "Ticker/RAF_SYNCHED"}}{{/crossLink}} by default.
		 * @deprecated Deprecated in favour of {{#crossLink "Ticker/timingMode"}}{{/crossLink}}.
		 * @property useRAF
		 * @static
		 * @type {Boolean}
		 * @default false
		 **/
		Ticker.useRAF = false;
	
		/**
		 * Specifies the timing api (setTimeout or requestAnimationFrame) and mode to use. See
		 * {{#crossLink "Ticker/TIMEOUT"}}{{/crossLink}}, {{#crossLink "Ticker/RAF"}}{{/crossLink}}, and
		 * {{#crossLink "Ticker/RAF_SYNCHED"}}{{/crossLink}} for mode details.
		 * @property timingMode
		 * @static
		 * @type {String}
		 * @default Ticker.TIMEOUT
		 **/
		Ticker.timingMode = null;
	
		/**
		 * Specifies a maximum value for the delta property in the tick event object. This is useful when building time
		 * based animations and systems to prevent issues caused by large time gaps caused by background tabs, system sleep,
		 * alert dialogs, or other blocking routines. Double the expected frame duration is often an effective value
		 * (ex. maxDelta=50 when running at 40fps).
		 * 
		 * This does not impact any other values (ex. time, runTime, etc), so you may experience issues if you enable maxDelta
		 * when using both delta and other values.
		 * 
		 * If 0, there is no maximum.
		 * @property maxDelta
		 * @static
		 * @type {number}
		 * @default 0
		 */
		Ticker.maxDelta = 0;
		
		/**
		 * When the ticker is paused, all listeners will still receive a tick event, but the <code>paused</code> property of the event will be false.
		 * Also, while paused the `runTime` will not increase. See {{#crossLink "Ticker/tick:event"}}{{/crossLink}},
		 * {{#crossLink "Ticker/getTime"}}{{/crossLink}}, and {{#crossLink "Ticker/getEventTime"}}{{/crossLink}} for more info.
		 *
		 * <h4>Example</h4>
		 *
		 *      createjs.Ticker.addEventListener("tick", handleTick);
		 *      createjs.Ticker.paused = true;
		 *      function handleTick(event) {
		 *          console.log(event.paused,
		 *          	createjs.Ticker.getTime(false),
		 *          	createjs.Ticker.getTime(true));
		 *      }
		 *
		 * @property paused
		 * @static
		 * @type {Boolean}
		 * @default false
		 **/
		Ticker.paused = false;
	
	
	// mix-ins:
		// EventDispatcher methods:
		Ticker.removeEventListener = null;
		Ticker.removeAllEventListeners = null;
		Ticker.dispatchEvent = null;
		Ticker.hasEventListener = null;
		Ticker._listeners = null;
		createjs.EventDispatcher.initialize(Ticker); // inject EventDispatcher methods.
		Ticker._addEventListener = Ticker.addEventListener;
		Ticker.addEventListener = function() {
			!Ticker._inited&&Ticker.init();
			return Ticker._addEventListener.apply(Ticker, arguments);
		};
	
	
	// private static properties:
		/**
		 * @property _inited
		 * @static
		 * @type {Boolean}
		 * @protected
		 **/
		Ticker._inited = false;
	
		/**
		 * @property _startTime
		 * @static
		 * @type {Number}
		 * @protected
		 **/
		Ticker._startTime = 0;
	
		/**
		 * @property _pausedTime
		 * @static
		 * @type {Number}
		 * @protected
		 **/
		Ticker._pausedTime=0;
	
		/**
		 * The number of ticks that have passed
		 * @property _ticks
		 * @static
		 * @type {Number}
		 * @protected
		 **/
		Ticker._ticks = 0;
	
		/**
		 * The number of ticks that have passed while Ticker has been paused
		 * @property _pausedTicks
		 * @static
		 * @type {Number}
		 * @protected
		 **/
		Ticker._pausedTicks = 0;
	
		/**
		 * @property _interval
		 * @static
		 * @type {Number}
		 * @protected
		 **/
		Ticker._interval = 50;
	
		/**
		 * @property _lastTime
		 * @static
		 * @type {Number}
		 * @protected
		 **/
		Ticker._lastTime = 0;
	
		/**
		 * @property _times
		 * @static
		 * @type {Array}
		 * @protected
		 **/
		Ticker._times = null;
	
		/**
		 * @property _tickTimes
		 * @static
		 * @type {Array}
		 * @protected
		 **/
		Ticker._tickTimes = null;
	
		/**
		 * Stores the timeout or requestAnimationFrame id.
		 * @property _timerId
		 * @static
		 * @type {Number}
		 * @protected
		 **/
		Ticker._timerId = null;
		
		/**
		 * True if currently using requestAnimationFrame, false if using setTimeout. This may be different than timingMode
		 * if that property changed and a tick hasn't fired.
		 * @property _raf
		 * @static
		 * @type {Boolean}
		 * @protected
		 **/
		Ticker._raf = true;
		
	
	// static getter / setters:
		/**
		 * Use the {{#crossLink "Ticker/interval:property"}}{{/crossLink}} property instead.
		 * @method setInterval
		 * @static
		 * @param {Number} interval
		 * @deprecated
		 **/
		Ticker.setInterval = function(interval) {
			Ticker._interval = interval;
			if (!Ticker._inited) { return; }
			Ticker._setupTick();
		};
	
		/**
		 * Use the {{#crossLink "Ticker/framerate:property"}}{{/crossLink}} property instead.
		 * @method getInterval
		 * @static
		 * @return {Number}
		 * @deprecated
		 **/
		Ticker.getInterval = function() {
			return Ticker._interval;
		};
	
		/**
		 * Use the {{#crossLink "Ticker/framerate:property"}}{{/crossLink}} property instead.
		 * @method setFPS
		 * @static
		 * @param {Number} value
		 * @deprecated
		 **/
		Ticker.setFPS = function(value) {
			Ticker.setInterval(1000/value);
		};
	
		/**
		 * Use the {{#crossLink "Ticker/interval:property"}}{{/crossLink}} property instead.
		 * @method getFPS
		 * @static
		 * @return {Number}
		 * @deprecated
		 **/
		Ticker.getFPS = function() {
			return 1000/Ticker._interval;
		};
	
		/**
		 * Indicates the target time (in milliseconds) between ticks. Default is 50 (20 FPS).
		 * Note that actual time between ticks may be more than specified depending on CPU load.
		 * This property is ignored if the ticker is using the `RAF` timing mode.
		 * @property interval
		 * @static
		 * @type {Number}
		 **/
		 
		/**
		 * Indicates the target frame rate in frames per second (FPS). Effectively just a shortcut to `interval`, where
		 * `framerate == 1000/interval`.
		 * @property framerate
		 * @static
		 * @type {Number}
		 **/
		try {
			Object.defineProperties(Ticker, {
				interval: { get: Ticker.getInterval, set: Ticker.setInterval },
				framerate: { get: Ticker.getFPS, set: Ticker.setFPS }
			});
		} catch (e) { console.log(e); }
	
	
	// public static methods:
		/**
		 * Starts the tick. This is called automatically when the first listener is added.
		 * @method init
		 * @static
		 **/
		Ticker.init = function() {
			if (Ticker._inited) { return; }
			Ticker._inited = true;
			Ticker._times = [];
			Ticker._tickTimes = [];
			Ticker._startTime = Ticker._getTime();
			Ticker._times.push(Ticker._lastTime = 0);
			Ticker.interval = Ticker._interval;
		};
		
		/**
		 * Stops the Ticker and removes all listeners. Use init() to restart the Ticker.
		 * @method reset
		 * @static
		 **/
		Ticker.reset = function() {
			if (Ticker._raf) {
				var f = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame;
				f&&f(Ticker._timerId);
			} else {
				clearTimeout(Ticker._timerId);
			}
			Ticker.removeAllEventListeners("tick");
			Ticker._timerId = Ticker._times = Ticker._tickTimes = null;
			Ticker._startTime = Ticker._lastTime = Ticker._ticks = 0;
			Ticker._inited = false;
		};
	
		/**
		 * Returns the average time spent within a tick. This can vary significantly from the value provided by getMeasuredFPS
		 * because it only measures the time spent within the tick execution stack. 
		 * 
		 * Example 1: With a target FPS of 20, getMeasuredFPS() returns 20fps, which indicates an average of 50ms between 
		 * the end of one tick and the end of the next. However, getMeasuredTickTime() returns 15ms. This indicates that 
		 * there may be up to 35ms of "idle" time between the end of one tick and the start of the next.
		 *
		 * Example 2: With a target FPS of 30, getFPS() returns 10fps, which indicates an average of 100ms between the end of
		 * one tick and the end of the next. However, getMeasuredTickTime() returns 20ms. This would indicate that something
		 * other than the tick is using ~80ms (another script, DOM rendering, etc).
		 * @method getMeasuredTickTime
		 * @static
		 * @param {Number} [ticks] The number of previous ticks over which to measure the average time spent in a tick.
		 * Defaults to the number of ticks per second. To get only the last tick's time, pass in 1.
		 * @return {Number} The average time spent in a tick in milliseconds.
		 **/
		Ticker.getMeasuredTickTime = function(ticks) {
			var ttl=0, times=Ticker._tickTimes;
			if (!times || times.length < 1) { return -1; }
	
			// by default, calculate average for the past ~1 second:
			ticks = Math.min(times.length, ticks||(Ticker.getFPS()|0));
			for (var i=0; i<ticks; i++) { ttl += times[i]; }
			return ttl/ticks;
		};
	
		/**
		 * Returns the actual frames / ticks per second.
		 * @method getMeasuredFPS
		 * @static
		 * @param {Number} [ticks] The number of previous ticks over which to measure the actual frames / ticks per second.
		 * Defaults to the number of ticks per second.
		 * @return {Number} The actual frames / ticks per second. Depending on performance, this may differ
		 * from the target frames per second.
		 **/
		Ticker.getMeasuredFPS = function(ticks) {
			var times = Ticker._times;
			if (!times || times.length < 2) { return -1; }
	
			// by default, calculate fps for the past ~1 second:
			ticks = Math.min(times.length-1, ticks||(Ticker.getFPS()|0));
			return 1000/((times[0]-times[ticks])/ticks);
		};
	
		/**
		 * Use the {{#crossLink "Ticker/paused:property"}}{{/crossLink}} property instead.
		 * @method setPaused
		 * @static
		 * @param {Boolean} value
		 * @deprecated
		 **/
		Ticker.setPaused = function(value) {
			// TODO: deprecated.
			Ticker.paused = value;
		};
	
		/**
		 * Use the {{#crossLink "Ticker/paused:property"}}{{/crossLink}} property instead.
		 * @method getPaused
		 * @static
		 * @return {Boolean}
		 * @deprecated
		 **/
		Ticker.getPaused = function() {
			// TODO: deprecated.
			return Ticker.paused;
		};
	
		/**
		 * Returns the number of milliseconds that have elapsed since Ticker was initialized via {{#crossLink "Ticker/init"}}.
		 * Returns -1 if Ticker has not been initialized. For example, you could use
		 * this in a time synchronized animation to determine the exact amount of time that has elapsed.
		 * @method getTime
		 * @static
		 * @param {Boolean} [runTime=false] If true only time elapsed while Ticker was not paused will be returned.
		 * If false, the value returned will be total time elapsed since the first tick event listener was added.
		 * @return {Number} Number of milliseconds that have elapsed since Ticker was initialized or -1.
		 **/
		Ticker.getTime = function(runTime) {
			return Ticker._startTime ? Ticker._getTime() - (runTime ? Ticker._pausedTime : 0) : -1;
		};
	
		/**
		 * Similar to getTime(), but returns the time on the most recent tick event object.
		 * @method getEventTime
		 * @static
		 * @param runTime {Boolean} [runTime=false] If true, the runTime property will be returned instead of time.
		 * @returns {number} The time or runTime property from the most recent tick event or -1.
		 */
		Ticker.getEventTime = function(runTime) {
			return Ticker._startTime ? (Ticker._lastTime || Ticker._startTime) - (runTime ? Ticker._pausedTime : 0) : -1;
		};
		
		/**
		 * Returns the number of ticks that have been broadcast by Ticker.
		 * @method getTicks
		 * @static
		 * @param {Boolean} pauseable Indicates whether to include ticks that would have been broadcast
		 * while Ticker was paused. If true only tick events broadcast while Ticker is not paused will be returned.
		 * If false, tick events that would have been broadcast while Ticker was paused will be included in the return
		 * value. The default value is false.
		 * @return {Number} of ticks that have been broadcast.
		 **/
		Ticker.getTicks = function(pauseable) {
			return  Ticker._ticks - (pauseable ? Ticker._pausedTicks : 0);
		};
	
	
	// private static methods:
		/**
		 * @method _handleSynch
		 * @static
		 * @protected
		 **/
		Ticker._handleSynch = function() {
			Ticker._timerId = null;
			Ticker._setupTick();
	
			// run if enough time has elapsed, with a little bit of flexibility to be early:
			if (Ticker._getTime() - Ticker._lastTime >= (Ticker._interval-1)*0.97) {
				Ticker._tick();
			}
		};
	
		/**
		 * @method _handleRAF
		 * @static
		 * @protected
		 **/
		Ticker._handleRAF = function() {
			Ticker._timerId = null;
			Ticker._setupTick();
			Ticker._tick();
		};
	
		/**
		 * @method _handleTimeout
		 * @static
		 * @protected
		 **/
		Ticker._handleTimeout = function() {
			Ticker._timerId = null;
			Ticker._setupTick();
			Ticker._tick();
		};
	
		/**
		 * @method _setupTick
		 * @static
		 * @protected
		 **/
		Ticker._setupTick = function() {
			if (Ticker._timerId != null) { return; } // avoid duplicates
	
			var mode = Ticker.timingMode||(Ticker.useRAF&&Ticker.RAF_SYNCHED);
			if (mode == Ticker.RAF_SYNCHED || mode == Ticker.RAF) {
				var f = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
				if (f) {
					Ticker._timerId = f(mode == Ticker.RAF ? Ticker._handleRAF : Ticker._handleSynch);
					Ticker._raf = true;
					return;
				}
			}
			Ticker._raf = false;
			Ticker._timerId = setTimeout(Ticker._handleTimeout, Ticker._interval);
		};
	
		/**
		 * @method _tick
		 * @static
		 * @protected
		 **/
		Ticker._tick = function() {
			var paused = Ticker.paused;
			var time = Ticker._getTime();
			var elapsedTime = time-Ticker._lastTime;
			Ticker._lastTime = time;
			Ticker._ticks++;
			
			if (paused) {
				Ticker._pausedTicks++;
				Ticker._pausedTime += elapsedTime;
			}
			
			if (Ticker.hasEventListener("tick")) {
				var event = new createjs.Event("tick");
				var maxDelta = Ticker.maxDelta;
				event.delta = (maxDelta && elapsedTime > maxDelta) ? maxDelta : elapsedTime;
				event.paused = paused;
				event.time = time;
				event.runTime = time-Ticker._pausedTime;
				Ticker.dispatchEvent(event);
			}
			
			Ticker._tickTimes.unshift(Ticker._getTime()-time);
			while (Ticker._tickTimes.length > 100) { Ticker._tickTimes.pop(); }
	
			Ticker._times.unshift(time);
			while (Ticker._times.length > 100) { Ticker._times.pop(); }
		};
	
		/**
		 * @method _getTime
		 * @static
		 * @protected
		 **/
		var now = window.performance && (performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow);
		Ticker._getTime = function() {
			return ((now&&now.call(performance))||(new Date().getTime())) - Ticker._startTime;
		};
	
	
		createjs.Ticker = Ticker;
	}());
	
	//##############################################################################
	// Tween.js
	//##############################################################################
	
	// TODO: possibly add a END actionsMode (only runs actions that == position)?
	// TODO: evaluate a way to decouple paused from tick registration.
	
	
	this.createjs = this.createjs||{};
	
	(function() {
		"use strict";
	
	
	// constructor
		/**
		 * A Tween instance tweens properties for a single target. Instance methods can be chained for easy construction and sequencing:
		 *
		 * <h4>Example</h4>
		 *
		 *      target.alpha = 1;
		 *	    Tween.get(target)
		 *	         .wait(500)
		 *	         .to({alpha:0, visible:false}, 1000)
		 *	         .call(handleComplete);
		 *	    function handleComplete() {
		 *	    	//Tween complete
		 *	    }
		 *
		 * Multiple tweens can point to the same instance, however if they affect the same properties there could be unexpected
		 * behaviour. To stop all tweens on an object, use {{#crossLink "Tween/removeTweens"}}{{/crossLink}} or pass <code>override:true</code>
		 * in the props argument.
		 *
		 *      Tween.get(target, {override:true}).to({x:100});
		 *
		 * Subscribe to the "change" event to get notified when a property of the target is changed.
		 *
		 *      Tween.get(target, {override:true}).to({x:100}).addEventListener("change", handleChange);
		 *      function handleChange(event) {
		 *          // The tween changed.
		 *      }
		 *
		 * See the Tween {{#crossLink "Tween/get"}}{{/crossLink}} method for additional param documentation.
		 * @class Tween
		 * @param {Object} target The target object that will have its properties tweened.
		 * @param {Object} [props] The configuration properties to apply to this tween instance (ex. `{loop:true, paused:true}`.
		 * All properties default to false. Supported props are:<UL>
		 *    <LI> loop: sets the loop property on this tween.</LI>
		 *    <LI> useTicks: uses ticks for all durations instead of milliseconds.</LI>
		 *    <LI> ignoreGlobalPause: sets the {{#crossLink "Tween/ignoreGlobalPause:property"}}{{/crossLink}} property on this tween.</LI>
		 *    <LI> override: if true, `Tween.removeTweens(target)` will be called to remove any other tweens with the same target.
		 *    <LI> paused: indicates whether to start the tween paused.</LI>
		 *    <LI> position: indicates the initial position for this tween.</LI>
		 *    <LI> onChange: specifies a listener for the "change" event.</LI>
		 * </UL>
		 * @param {Object} [pluginData] An object containing data for use by installed plugins. See individual
		 * plugins' documentation for details.
		 * @extends EventDispatcher
		 * @constructor
		 */
		function Tween(target, props, pluginData) {
	
		// public properties:
			/**
			 * Causes this tween to continue playing when a global pause is active. For example, if TweenJS is using {{#crossLink "Ticker"}}{{/crossLink}},
			 * then setting this to true (the default) will cause this tween to be paused when <code>Ticker.setPaused(true)</code>
			 * is called. See the Tween {{#crossLink "Tween/tick"}}{{/crossLink}} method for more info. Can be set via the props
			 * parameter.
			 * @property ignoreGlobalPause
			 * @type Boolean
			 * @default false
			 */
			this.ignoreGlobalPause = false;
		
			/**
			 * If true, the tween will loop when it reaches the end. Can be set via the props param.
			 * @property loop
			 * @type {Boolean}
			 * @default false
			 */
			this.loop = false;
		
			/**
			 * Read-only. Specifies the total duration of this tween in milliseconds (or ticks if useTicks is true).
			 * This value is automatically updated as you modify the tween. Changing it directly could result in unexpected
			 * behaviour.
			 * @property duration
			 * @type {Number}
			 * @default 0
			 */
			this.duration = 0;
		
			/**
			 * Allows you to specify data that will be used by installed plugins. Each plugin uses this differently, but in general
			 * you specify data by setting it to a property of pluginData with the same name as the plugin class.
			 * @example
			 *	myTween.pluginData.PluginClassName = data;
			 * <br/>
			 * Also, most plugins support a property to enable or disable them. This is typically the plugin class name followed by "_enabled".<br/>
			 * @example
			 *	myTween.pluginData.PluginClassName_enabled = false;<br/>
			 * <br/>
			 * Some plugins also store instance data in this object, usually in a property named _PluginClassName.
			 * See the documentation for individual plugins for more details.
			 * @property pluginData
			 * @type {Object}
			 */
			this.pluginData = pluginData || {};
		
			/**
			 * Read-only. The target of this tween. This is the object on which the tweened properties will be changed. Changing
			 * this property after the tween is created will not have any effect.
			 * @property target
			 * @type {Object}
			 */
			this.target = target;
		
			/**
			 * Read-only. The current normalized position of the tween. This will always be a value between 0 and duration.
			 * Changing this property directly will have no effect.
			 * @property position
			 * @type {Object}
			 */
			this.position = null;
		
			/**
			 * Read-only. Indicates the tween's current position is within a passive wait.
			 * @property passive
			 * @type {Boolean}
			 **/
			this.passive = false;
		
		// private properties:	
			/**
			 * @property _paused
			 * @type {Boolean}
			 * @default false
			 * @protected
			 */
			this._paused = false;
		
			/**
			 * @property _curQueueProps
			 * @type {Object}
			 * @protected
			 */
			this._curQueueProps = {};
		
			/**
			 * @property _initQueueProps
			 * @type {Object}
			 * @protected
			 */
			this._initQueueProps = {};
		
			/**
			 * @property _steps
			 * @type {Array}
			 * @protected
			 */
			this._steps = [];
		
			/**
			 * @property _actions
			 * @type {Array}
			 * @protected
			 */
			this._actions = [];
		
			/**
			 * Raw position.
			 * @property _prevPosition
			 * @type {Number}
			 * @default 0
			 * @protected
			 */
			this._prevPosition = 0;
		
			/**
			 * The position within the current stethis.
			 * @property _stepPosition
			 * @type {Number}
			 * @default 0
			 * @protected
			 */
			this._stepPosition = 0; // this is needed by MovieClithis.
		
			/**
			 * Normalized position.
			 * @property _prevPos
			 * @type {Number}
			 * @default -1
			 * @protected
			 */
			this._prevPos = -1;
		
			/**
			 * @property _target
			 * @type {Object}
			 * @protected
			 */
			this._target = target;
		
			/**
			 * @property _useTicks
			 * @type {Boolean}
			 * @default false
			 * @protected
			 */
			this._useTicks = false;
		
			/**
			 * @property _inited
			 * @type {boolean}
			 * @default false
			 * @protected
			 */
			this._inited = false;
	
	
			if (props) {
				this._useTicks = props.useTicks;
				this.ignoreGlobalPause = props.ignoreGlobalPause;
				this.loop = props.loop;
				props.onChange && this.addEventListener("change", props.onChange);
				if (props.override) { Tween.removeTweens(target); }
			}
			if (props&&props.paused) { this._paused=true; }
			else { createjs.Tween._register(this,true); }
			if (props&&props.position!=null) { this.setPosition(props.position, Tween.NONE); }
	
		};
	
		var p = createjs.extend(Tween, createjs.EventDispatcher);
		
	
	// static properties
		/**
		 * Constant defining the none actionsMode for use with setPosition.
		 * @property NONE
		 * @type Number
		 * @default 0
		 * @static
		 */
		Tween.NONE = 0;
	
		/**
		 * Constant defining the loop actionsMode for use with setPosition.
		 * @property LOOP
		 * @type Number
		 * @default 1
		 * @static
		 */
		Tween.LOOP = 1;
	
		/**
		 * Constant defining the reverse actionsMode for use with setPosition.
		 * @property REVERSE
		 * @type Number
		 * @default 2
		 * @static
		 */
		Tween.REVERSE = 2;
	
		/**
		 * Constant returned by plugins to tell the tween not to use default assignment.
		 * @property IGNORE
		 * @type Object
		 * @static
		 */
		Tween.IGNORE = {};
	
		/**
		 * @property _listeners
		 * @type Array[Tween]
		 * @static
		 * @protected
		 */
		Tween._tweens = [];
	
		/**
		 * @property _plugins
		 * @type Object
		 * @static
		 * @protected
		 */
		Tween._plugins = {};
	
	
	// static methods	
		/**
		 * Returns a new tween instance. This is functionally identical to using "new Tween(...)", but looks cleaner
		 * with the chained syntax of TweenJS.
		 * @example
		 *	var tween = createjs.Tween.get(target);
		 * @method get
		 * @param {Object} target The target object that will have its properties tweened.
		 * @param {Object} [props] The configuration properties to apply to this tween instance (ex. <code>{loop:true, paused:true}</code>).
		 * All properties default to false. Supported props are:<UL>
		 *    <LI> loop: sets the loop property on this tween.</LI>
		 *    <LI> useTicks: uses ticks for all durations instead of milliseconds.</LI>
		 *    <LI> ignoreGlobalPause: sets the {{#crossLink "Tween/ignoreGlobalPause:property"}}{{/crossLink}} property on this tween.</LI>
		 *    <LI> override: if true, Tween.removeTweens(target) will be called to remove any other tweens with the same target.
		 *    <LI> paused: indicates whether to start the tween paused.</LI>
		 *    <LI> position: indicates the initial position for this tween.</LI>
		 *    <LI> onChange: specifies a listener for the "change" event.</LI>
		 * </UL>
		 * @param {Object} [pluginData] An object containing data for use by installed plugins. See individual
		 * plugins' documentation for details.
		 * @param {Boolean} [override=false] If true, any previous tweens on the same target will be removed. This is the same as
		 * calling <code>Tween.removeTweens(target)</code>.
		 * @return {Tween} A reference to the created tween. Additional chained tweens, method calls, or callbacks can be
		 * applied to the returned tween instance.
		 * @static
		 */
		Tween.get = function(target, props, pluginData, override) {
			if (override) { Tween.removeTweens(target); }
			return new Tween(target, props, pluginData);
		};
	
		/**
		 * Advances all tweens. This typically uses the {{#crossLink "Ticker"}}{{/crossLink}} class, but you can call it
		 * manually if you prefer to use your own "heartbeat" implementation.
		 * @method tick
		 * @param {Number} delta The change in time in milliseconds since the last tick. Required unless all tweens have
		 * <code>useTicks</code> set to true.
		 * @param {Boolean} paused Indicates whether a global pause is in effect. Tweens with {{#crossLink "Tween/ignoreGlobalPause:property"}}{{/crossLink}}
		 * will ignore this, but all others will pause if this is `true`.
		 * @static
		 */
		Tween.tick = function(delta, paused) {
			var tweens = Tween._tweens.slice(); // to avoid race conditions.
			for (var i=tweens.length-1; i>=0; i--) {
				var tween = tweens[i];
				if ((paused && !tween.ignoreGlobalPause) || tween._paused) { continue; }
				tween.tick(tween._useTicks?1:delta);
			}
		};
	
		/**
		 * Handle events that result from Tween being used as an event handler. This is included to allow Tween to handle
		 * tick events from <code>createjs.Ticker</code>. No other events are handled in Tween.
		 * @method handleEvent
		 * @param {Object} event An event object passed in by the {{#crossLink "EventDispatcher"}}{{/crossLink}}. Will
		 * usually be of type "tick".
		 * @private
		 * @static
		 * @since 0.4.2
		 */
		Tween.handleEvent = function(event) {
			if (event.type == "tick") {
				this.tick(event.delta, event.paused);
			}
		};
	
		/**
		 * Removes all existing tweens for a target. This is called automatically by new tweens if the <code>override</code>
		 * property is <code>true</code>.
		 * @method removeTweens
		 * @param {Object} target The target object to remove existing tweens from.
		 * @static
		 */
		Tween.removeTweens = function(target) {
			if (!target.tweenjs_count) { return; }
			var tweens = Tween._tweens;
			for (var i=tweens.length-1; i>=0; i--) {
				var tween = tweens[i];
				if (tween._target == target) {
					tween._paused = true;
					tweens.splice(i, 1);
				}
			}
			target.tweenjs_count = 0;
		};
	
		/**
		 * Stop and remove all existing tweens.
		 * @method removeAllTweens
		 * @static
		 * @since 0.4.1
		 */
		Tween.removeAllTweens = function() {
			var tweens = Tween._tweens;
			for (var i= 0, l=tweens.length; i<l; i++) {
				var tween = tweens[i];
				tween._paused = true;
				tween.target.tweenjs_count = 0;
			}
			tweens.length = 0;
		};
	
		/**
		 * Indicates whether there are any active tweens (and how many) on the target object (if specified) or in general.
		 * @method hasActiveTweens
		 * @param {Object} [target] The target to check for active tweens. If not specified, the return value will indicate
		 * if there are any active tweens on any target.
		 * @return {Boolean} If there are active tweens.
		 * @static
		 */
		Tween.hasActiveTweens = function(target) {
			if (target) { return target.tweenjs_count; }
			return Tween._tweens && !!Tween._tweens.length;
		};
	
		/**
		 * Installs a plugin, which can modify how certain properties are handled when tweened. See the {{#crossLink "CSSPlugin"}}{{/crossLink}}
		 * for an example of how to write TweenJS plugins.
		 * @method installPlugin
		 * @static
		 * @param {Object} plugin The plugin class to install
		 * @param {Array} properties An array of properties that the plugin will handle.
		 */
		Tween.installPlugin = function(plugin, properties) {
			var priority = plugin.priority;
			if (priority == null) { plugin.priority = priority = 0; }
			for (var i=0,l=properties.length,p=Tween._plugins;i<l;i++) {
				var n = properties[i];
				if (!p[n]) { p[n] = [plugin]; }
				else {
					var arr = p[n];
					for (var j=0,jl=arr.length;j<jl;j++) {
						if (priority < arr[j].priority) { break; }
					}
					p[n].splice(j,0,plugin);
				}
			}
		};
	
		/**
		 * Registers or unregisters a tween with the ticking system.
		 * @method _register
		 * @param {Tween} tween The tween instance to register or unregister.
		 * @param {Boolean} value If true, the tween is registered. If false the tween is unregistered.
		 * @static
		 * @protected
		 */
		Tween._register = function(tween, value) {
			var target = tween._target;
			var tweens = Tween._tweens;
			if (value) {
				// TODO: this approach might fail if a dev is using sealed objects in ES5
				if (target) { target.tweenjs_count = target.tweenjs_count ? target.tweenjs_count+1 : 1; }
				tweens.push(tween);
				if (!Tween._inited && createjs.Ticker) { createjs.Ticker.addEventListener("tick", Tween); Tween._inited = true; }
			} else {
				if (target) { target.tweenjs_count--; }
				var i = tweens.length;
				while (i--) {
					if (tweens[i] == tween) {
						tweens.splice(i, 1);
						return;
					}
				}
			}
		};
	
	
	// events:
		/**
		 * Called whenever the tween's position changes.
		 * @event change
		 * @since 0.4.0
		 **/
		
	
	// public methods:
		/**
		 * Queues a wait (essentially an empty tween).
		 * @example
		 *	//This tween will wait 1s before alpha is faded to 0.
		 *	createjs.Tween.get(target).wait(1000).to({alpha:0}, 1000);
		 * @method wait
		 * @param {Number} duration The duration of the wait in milliseconds (or in ticks if <code>useTicks</code> is true).
		 * @param {Boolean} passive Tween properties will not be updated during a passive wait. This
		 * is mostly useful for use with Timeline's that contain multiple tweens affecting the same target
		 * at different times.
		 * @return {Tween} This tween instance (for chaining calls).
		 **/
		p.wait = function(duration, passive) {
			if (duration == null || duration <= 0) { return this; }
			var o = this._cloneProps(this._curQueueProps);
			return this._addStep({d:duration, p0:o, e:this._linearEase, p1:o, v:passive});
		};
	
		/**
		 * Queues a tween from the current values to the target properties. Set duration to 0 to jump to these value.
		 * Numeric properties will be tweened from their current value in the tween to the target value. Non-numeric
		 * properties will be set at the end of the specified duration.
		 * @example
		 *	createjs.Tween.get(target).to({alpha:0}, 1000);
		 * @method to
		 * @param {Object} props An object specifying property target values for this tween (Ex. <code>{x:300}</code> would tween the x
		 *      property of the target to 300).
		 * @param {Number} duration Optional. The duration of the wait in milliseconds (or in ticks if <code>useTicks</code> is true).
		 *      Defaults to 0.
		 * @param {Function} ease Optional. The easing function to use for this tween. Defaults to a linear ease.
		 * @return {Tween} This tween instance (for chaining calls).
		 */
		p.to = function(props, duration, ease) {
			if (isNaN(duration) || duration < 0) { duration = 0; }
			return this._addStep({d:duration||0, p0:this._cloneProps(this._curQueueProps), e:ease, p1:this._cloneProps(this._appendQueueProps(props))});
		};
	
		/**
		 * Queues an action to call the specified function.
		 *	@example
		 *   	//would call myFunction() after 1s.
		 *   	myTween.wait(1000).call(myFunction);
		 * @method call
		 * @param {Function} callback The function to call.
		 * @param {Array} params Optional. The parameters to call the function with. If this is omitted, then the function
		 *      will be called with a single param pointing to this tween.
		 * @param {Object} scope Optional. The scope to call the function in. If omitted, it will be called in the target's
		 *      scope.
		 * @return {Tween} This tween instance (for chaining calls).
		 */
		p.call = function(callback, params, scope) {
			return this._addAction({f:callback, p:params ? params : [this], o:scope ? scope : this._target});
		};
	
		// TODO: add clarification between this and a 0 duration .to:
		/**
		 * Queues an action to set the specified props on the specified target. If target is null, it will use this tween's
		 * target.
		 * @example
		 *	myTween.wait(1000).set({visible:false},foo);
		 * @method set
		 * @param {Object} props The properties to set (ex. <code>{visible:false}</code>).
		 * @param {Object} target Optional. The target to set the properties on. If omitted, they will be set on the tween's target.
		 * @return {Tween} This tween instance (for chaining calls).
		 */
		p.set = function(props, target) {
			return this._addAction({f:this._set, o:this, p:[props, target ? target : this._target]});
		};
	
		/**
		 * Queues an action to to play (unpause) the specified tween. This enables you to sequence multiple tweens.
		 * @example
		 *	myTween.to({x:100},500).play(otherTween);
		 * @method play
		 * @param {Tween} tween The tween to play.
		 * @return {Tween} This tween instance (for chaining calls).
		 */
		p.play = function(tween) {
			if (!tween) { tween = this; }
			return this.call(tween.setPaused, [false], tween);
		};
	
		/**
		 * Queues an action to to pause the specified tween.
		 * @method pause
		 * @param {Tween} tween The tween to play. If null, it pauses this tween.
		 * @return {Tween} This tween instance (for chaining calls)
		 */
		p.pause = function(tween) {
			if (!tween) { tween = this; }
			return this.call(tween.setPaused, [true], tween);
		};
	
		/**
		 * Advances the tween to a specified position.
		 * @method setPosition
		 * @param {Number} value The position to seek to in milliseconds (or ticks if useTicks is true).
		 * @param {Number} actionsMode Optional parameter specifying how actions are handled (ie. call, set, play, pause):
		 *      <code>Tween.NONE</code> (0) - run no actions. <code>Tween.LOOP</code> (1) - if new position is less than old, then run all actions
		 *      between old and duration, then all actions between 0 and new. Defaults to <code>LOOP</code>. <code>Tween.REVERSE</code> (2) - if new
		 *      position is less than old, run all actions between them in reverse.
		 * @return {Boolean} Returns true if the tween is complete (ie. the full tween has run & loop is false).
		 */
		p.setPosition = function(value, actionsMode) {
			if (value < 0) { value = 0; }
			if (actionsMode == null) { actionsMode = 1; }
	
			// normalize position:
			var t = value;
			var end = false;
			if (t >= this.duration) {
				if (this.loop) { t = t%this.duration; }
				else {
					t = this.duration;
					end = true;
				}
			}
			if (t == this._prevPos) { return end; }
	
	
			var prevPos = this._prevPos;
			this.position = this._prevPos = t; // set this in advance in case an action modifies position.
			this._prevPosition = value;
	
			// handle tweens:
			if (this._target) {
				if (end) {
					// addresses problems with an ending zero length step.
					this._updateTargetProps(null,1);
				} else if (this._steps.length > 0) {
					// find our new tween index:
					for (var i=0, l=this._steps.length; i<l; i++) {
						if (this._steps[i].t > t) { break; }
					}
					var step = this._steps[i-1];
					this._updateTargetProps(step,(this._stepPosition = t-step.t)/step.d);
				}
			}
	
			// run actions:
			if (actionsMode != 0 && this._actions.length > 0) {
				if (this._useTicks) {
					// only run the actions we landed on.
					this._runActions(t,t);
				} else if (actionsMode == 1 && t<prevPos) {
					if (prevPos != this.duration) { this._runActions(prevPos, this.duration); }
					this._runActions(0, t, true);
				} else {
					this._runActions(prevPos, t);
				}
			}
	
			if (end) { this.setPaused(true); }
	
	        this.dispatchEvent("change");
			return end;
		};
	
		/**
		 * Advances this tween by the specified amount of time in milliseconds (or ticks if <code>useTicks</code> is true).
		 * This is normally called automatically by the Tween engine (via <code>Tween.tick</code>), but is exposed for
		 * advanced uses.
		 * @method tick
		 * @param {Number} delta The time to advance in milliseconds (or ticks if <code>useTicks</code> is true).
		 */
		p.tick = function(delta) {
			if (this._paused) { return; }
			this.setPosition(this._prevPosition+delta);
		};
	
		/**
		 * Pauses or plays this tween.
		 * @method setPaused
		 * @param {Boolean} value Indicates whether the tween should be paused (true) or played (false).
		 * @return {Tween} This tween instance (for chaining calls)
		 */
		p.setPaused = function(value) {
			if (this._paused === !!value) { return this; }
			this._paused = !!value;
			Tween._register(this, !value);
			return this;
		};
	
		// tiny api (primarily for tool output):
		p.w = p.wait;
		p.t = p.to;
		p.c = p.call;
		p.s = p.set;
	
		/**
		 * Returns a string representation of this object.
		 * @method toString
		 * @return {String} a string representation of the instance.
		 */
		p.toString = function() {
			return "[Tween]";
		};
	
		/**
		 * @method clone
		 * @protected
		 */
		p.clone = function() {
			throw("Tween can not be cloned.")
		};
	
	// private methods:
		/**
		 * @method _updateTargetProps
		 * @param {Object} step
		 * @param {Number} ratio
		 * @protected
		 */
		p._updateTargetProps = function(step, ratio) {
			var p0,p1,v,v0,v1,arr;
			if (!step && ratio == 1) {
				// GDS: when does this run? Just at the very end? Shouldn't.
				this.passive = false;
				p0 = p1 = this._curQueueProps;
			} else {
				this.passive = !!step.v;
				if (this.passive) { return; } // don't update props.
				// apply ease to ratio.
				if (step.e) { ratio = step.e(ratio,0,1,1); }
				p0 = step.p0;
				p1 = step.p1;
			}
	
			for (var n in this._initQueueProps) {
				if ((v0 = p0[n]) == null) { p0[n] = v0 = this._initQueueProps[n]; }
				if ((v1 = p1[n]) == null) { p1[n] = v1 = v0; }
				if (v0 == v1 || ratio == 0 || ratio == 1 || (typeof(v0) != "number")) {
					// no interpolation - either at start, end, values don't change, or the value is non-numeric.
					v = ratio == 1 ? v1 : v0;
				} else {
					v = v0+(v1-v0)*ratio;
				}
	
				var ignore = false;
				if (arr = Tween._plugins[n]) {
					for (var i=0,l=arr.length;i<l;i++) {
						var v2 = arr[i].tween(this, n, v, p0, p1, ratio, !!step&&p0==p1, !step);
						if (v2 == Tween.IGNORE) { ignore = true; }
						else { v = v2; }
					}
				}
				if (!ignore) { this._target[n] = v; }
			}
	
		};
	
		/**
		 * @method _runActions
		 * @param {Number} startPos
		 * @param {Number} endPos
		 * @param {Boolean} includeStart
		 * @protected
		 */
		p._runActions = function(startPos, endPos, includeStart) {
			var sPos = startPos;
			var ePos = endPos;
			var i = -1;
			var j = this._actions.length;
			var k = 1;
			if (startPos > endPos) {
				// running backwards, flip everything:
				sPos = endPos;
				ePos = startPos;
				i = j;
				j = k = -1;
			}
			while ((i+=k) != j) {
				var action = this._actions[i];
				var pos = action.t;
				if (pos == ePos || (pos > sPos && pos < ePos) || (includeStart && pos == startPos) ) {
					action.f.apply(action.o, action.p);
				}
			}
		};
	
		/**
		 * @method _appendQueueProps
		 * @param {Object} o
		 * @protected
		 */
		p._appendQueueProps = function(o) {
			var arr,oldValue,i, l, injectProps;
			for (var n in o) {
				if (this._initQueueProps[n] === undefined) {
					oldValue = this._target[n];
	
					// init plugins:
					if (arr = Tween._plugins[n]) {
						for (i=0,l=arr.length;i<l;i++) {
							oldValue = arr[i].init(this, n, oldValue);
						}
					}
					this._initQueueProps[n] = this._curQueueProps[n] = (oldValue===undefined) ? null : oldValue;
				} else {
					oldValue = this._curQueueProps[n];
				}
			}
	
			for (var n in o) {
				oldValue = this._curQueueProps[n];
				if (arr = Tween._plugins[n]) {
					injectProps = injectProps||{};
					for (i=0, l=arr.length;i<l;i++) {
						// TODO: remove the check for .step in the next version. It's here for backwards compatibility.
						if (arr[i].step) { arr[i].step(this, n, oldValue, o[n], injectProps); }
					}
				}
				this._curQueueProps[n] = o[n];
			}
			if (injectProps) { this._appendQueueProps(injectProps); }
			return this._curQueueProps;
		};
	
		/**
		 * @method _cloneProps
		 * @param {Object} props
		 * @protected
		 */
		p._cloneProps = function(props) {
			var o = {};
			for (var n in props) {
				o[n] = props[n];
			}
			return o;
		};
	
		/**
		 * @method _addStep
		 * @param {Object} o
		 * @protected
		 */
		p._addStep = function(o) {
			if (o.d > 0) {
				this._steps.push(o);
				o.t = this.duration;
				this.duration += o.d;
			}
			return this;
		};
	
		/**
		 * @method _addAction
		 * @param {Object} o
		 * @protected
		 */
		p._addAction = function(o) {
			o.t = this.duration;
			this._actions.push(o);
			return this;
		};
	
		/**
		 * @method _set
		 * @param {Object} props
		 * @param {Object} o
		 * @protected
		 */
		p._set = function(props, o) {
			for (var n in props) {
				o[n] = props[n];
			}
		};
	
	
		createjs.Tween = createjs.promote(Tween, "EventDispatcher");
	
	}());
	
	//##############################################################################
	// Timeline.js
	//##############################################################################
	
	this.createjs = this.createjs||{};
	
	
	(function() {
		"use strict";
		
	
	// constructor	
		/**
		 * The Timeline class synchronizes multiple tweens and allows them to be controlled as a group. Please note that if a
		 * timeline is looping, the tweens on it may appear to loop even if the "loop" property of the tween is false.
		 * @class Timeline
		 * @param {Array} tweens An array of Tweens to add to this timeline. See addTween for more info.
		 * @param {Object} labels An object defining labels for using {{#crossLink "Timeline/gotoAndPlay"}}{{/crossLink}}/{{#crossLink "Timeline/gotoAndStop"}}{{/crossLink}}.
		 * See {{#crossLink "Timeline/setLabels"}}{{/crossLink}}
		 * for details.
		 * @param {Object} props The configuration properties to apply to this tween instance (ex. `{loop:true}`). All properties
		 * default to false. Supported props are:<UL>
		 *    <LI> loop: sets the loop property on this tween.</LI>
		 *    <LI> useTicks: uses ticks for all durations instead of milliseconds.</LI>
		 *    <LI> ignoreGlobalPause: sets the ignoreGlobalPause property on this tween.</LI>
		 *    <LI> paused: indicates whether to start the tween paused.</LI>
		 *    <LI> position: indicates the initial position for this timeline.</LI>
		 *    <LI> onChange: specifies a listener to add for the {{#crossLink "Timeline/change:event"}}{{/crossLink}} event.</LI>
		 * </UL>
		 * @extends EventDispatcher
		 * @constructor
		 **/
		function Timeline(tweens, labels, props) {
			this.EventDispatcher_constructor();
	
		// public properties:
			/**
			 * Causes this timeline to continue playing when a global pause is active.
			 * @property ignoreGlobalPause
			 * @type Boolean
			 **/
			this.ignoreGlobalPause = false;
	
			/**
			 * Read-only property specifying the total duration of this timeline in milliseconds (or ticks if useTicks is true).
			 * This value is usually automatically updated as you modify the timeline. See updateDuration for more information.
			 * @property duration
			 * @type Number
			 **/
			this.duration = 0;
	
			/**
			 * If true, the timeline will loop when it reaches the end. Can be set via the props param.
			 * @property loop
			 * @type Boolean
			 **/
			this.loop = false;
	
			/**
			 * Read-only. The current normalized position of the timeline. This will always be a value between 0 and duration.
			 * Changing this property directly will have no effect.
			 * @property position
			 * @type Object
			 **/
			this.position = null;
	
			// private properties:
			/**
			 * @property _paused
			 * @type Boolean
			 * @protected
			 **/
			this._paused = false;
	
			/**
			 * @property _tweens
			 * @type Array[Tween]
			 * @protected
			 **/
			this._tweens = [];
	
			/**
			 * @property _labels
			 * @type Object
			 * @protected
			 **/
			this._labels = null;
	
			/**
			 * @property _labelList
			 * @type Array[Object]
			 * @protected
			 **/
			this._labelList = null;
	
			/**
			 * @property _prevPosition
			 * @type Number
			 * @default 0
			 * @protected
			 **/
			this._prevPosition = 0;
	
			/**
			 * @property _prevPos
			 * @type Number
			 * @default -1
			 * @protected
			 **/
			this._prevPos = -1;
	
			/**
			 * @property _useTicks
			 * @type Boolean
			 * @default false
			 * @protected
			 **/
			this._useTicks = false;
	
	
			if (props) {
				this._useTicks = props.useTicks;
				this.loop = props.loop;
				this.ignoreGlobalPause = props.ignoreGlobalPause;
				props.onChange&&this.addEventListener("change", props.onChange);
			}
			if (tweens) { this.addTween.apply(this, tweens); }
			this.setLabels(labels);
			if (props&&props.paused) { this._paused=true; }
			else { createjs.Tween._register(this,true); }
			if (props&&props.position!=null) { this.setPosition(props.position, createjs.Tween.NONE); }
			
		};
		
		var p = createjs.extend(Timeline, createjs.EventDispatcher);
	
		
	// events:
		/**
		 * Called whenever the timeline's position changes.
		 * @event change
		 * @since 0.5.0
		 **/
	
	
	// public methods:
		/**
		 * Adds one or more tweens (or timelines) to this timeline. The tweens will be paused (to remove them from the normal ticking system)
		 * and managed by this timeline. Adding a tween to multiple timelines will result in unexpected behaviour.
		 * @method addTween
		 * @param tween The tween(s) to add. Accepts multiple arguments.
		 * @return Tween The first tween that was passed in.
		 **/
		p.addTween = function(tween) {
			var l = arguments.length;
			if (l > 1) {
				for (var i=0; i<l; i++) { this.addTween(arguments[i]); }
				return arguments[0];
			} else if (l == 0) { return null; }
			this.removeTween(tween);
			this._tweens.push(tween);
			tween.setPaused(true);
			tween._paused = false;
			tween._useTicks = this._useTicks;
			if (tween.duration > this.duration) { this.duration = tween.duration; }
			if (this._prevPos >= 0) { tween.setPosition(this._prevPos, createjs.Tween.NONE); }
			return tween;
		};
	
		/**
		 * Removes one or more tweens from this timeline.
		 * @method removeTween
		 * @param tween The tween(s) to remove. Accepts multiple arguments.
		 * @return Boolean Returns true if all of the tweens were successfully removed.
		 **/
		p.removeTween = function(tween) {
			var l = arguments.length;
			if (l > 1) {
				var good = true;
				for (var i=0; i<l; i++) { good = good && this.removeTween(arguments[i]); }
				return good;
			} else if (l == 0) { return false; }
	
			var tweens = this._tweens;
			var i = tweens.length;
			while (i--) {
				if (tweens[i] == tween) {
					tweens.splice(i, 1);
					if (tween.duration >= this.duration) { this.updateDuration(); }
					return true;
				}
			}
			return false;
		};
	
		/**
		 * Adds a label that can be used with {{#crossLink "Timeline/gotoAndPlay"}}{{/crossLink}}/{{#crossLink "Timeline/gotoAndStop"}}{{/crossLink}}.
		 * @method addLabel
		 * @param {String} label The label name.
		 * @param {Number} position The position this label represents.
		 **/
		p.addLabel = function(label, position) {
			this._labels[label] = position;
			var list = this._labelList;
			if (list) {
				for (var i= 0,l=list.length; i<l; i++) { if (position < list[i].position) { break; } }
				list.splice(i, 0, {label:label, position:position});
			}
		};
	
		/**
		 * Defines labels for use with gotoAndPlay/Stop. Overwrites any previously set labels.
		 * @method setLabels
		 * @param {Object} o An object defining labels for using gotoAndPlay/Stop in the form `{labelName:time}` where time is in
		 * milliseconds (or ticks if `useTicks` is true).
		 **/
		p.setLabels = function(o) {
			this._labels = o ?  o : {};
		};
	
		/**
		 * Returns a sorted list of the labels defined on this timeline.
		 * @method getLabels
		 * @return {Array[Object]} A sorted array of objects with label and position properties.
		 **/
		p.getLabels = function() {
			var list = this._labelList;
			if (!list) {
				list = this._labelList = [];
				var labels = this._labels;
				for (var n in labels) {
					list.push({label:n, position:labels[n]});
				}
				list.sort(function (a,b) { return a.position- b.position; });
			}
			return list;
		};
	
		/**
		 * Returns the name of the label on or immediately before the current position. For example, given a timeline with
		 * two labels, "first" on frame index 4, and "second" on frame 8, getCurrentLabel would return:<UL>
		 * <LI>null if the current position is 2.</LI>
		 * <LI>"first" if the current position is 4.</LI>
		 * <LI>"first" if the current position is 7.</LI>
		 * <LI>"second" if the current position is 15.</LI></UL>
		 * @method getCurrentLabel
		 * @return {String} The name of the current label or null if there is no label
		 **/
		p.getCurrentLabel = function() {
			var labels = this.getLabels();
			var pos = this.position;
			var l = labels.length;
			if (l) {
				for (var i = 0; i<l; i++) { if (pos < labels[i].position) { break; } }
				return (i==0) ? null : labels[i-1].label;
			}
			return null;
		};
	
		/**
		 * Unpauses this timeline and jumps to the specified position or label.
		 * @method gotoAndPlay
		 * @param {String|Number} positionOrLabel The position in milliseconds (or ticks if `useTicks` is true) or label to jump to.
		 **/
		p.gotoAndPlay = function(positionOrLabel) {
			this.setPaused(false);
			this._goto(positionOrLabel);
		};
	
		/**
		 * Pauses this timeline and jumps to the specified position or label.
		 * @method gotoAndStop
		 * @param {String|Number} positionOrLabel The position in milliseconds (or ticks if `useTicks` is true) or label to jump to.
		 **/
		p.gotoAndStop = function(positionOrLabel) {
			this.setPaused(true);
			this._goto(positionOrLabel);
		};
	
		/**
		 * Advances the timeline to the specified position.
		 * @method setPosition
		 * @param {Number} value The position to seek to in milliseconds (or ticks if `useTicks` is true).
		 * @param {Number} [actionsMode] parameter specifying how actions are handled. See the Tween {{#crossLink "Tween/setPosition"}}{{/crossLink}}
		 * method for more details.
		 * @return {Boolean} Returns true if the timeline is complete (ie. the full timeline has run & loop is false).
		 **/
		p.setPosition = function(value, actionsMode) {
			if (value < 0) { value = 0; }
			var t = this.loop ? value%this.duration : value;
			var end = !this.loop && value >= this.duration;
			if (t == this._prevPos) { return end; }
			this._prevPosition = value;
			this.position = this._prevPos = t; // in case an action changes the current frame.
			for (var i=0, l=this._tweens.length; i<l; i++) {
				this._tweens[i].setPosition(t, actionsMode);
				if (t != this._prevPos) { return false; } // an action changed this timeline's position.
			}
			if (end) { this.setPaused(true); }
			this.dispatchEvent("change");
			return end;
		};
	
		/**
		 * Pauses or plays this timeline.
		 * @method setPaused
		 * @param {Boolean} value Indicates whether the tween should be paused (true) or played (false).
		 **/
		p.setPaused = function(value) {
			this._paused = !!value;
			createjs.Tween._register(this, !value);
		};
	
		/**
		 * Recalculates the duration of the timeline.
		 * The duration is automatically updated when tweens are added or removed, but this method is useful
		 * if you modify a tween after it was added to the timeline.
		 * @method updateDuration
		 **/
		p.updateDuration = function() {
			this.duration = 0;
			for (var i=0,l=this._tweens.length; i<l; i++) {
				var tween = this._tweens[i];
				if (tween.duration > this.duration) { this.duration = tween.duration; }
			}
		};
	
		/**
		 * Advances this timeline by the specified amount of time in milliseconds (or ticks if useTicks is true).
		 * This is normally called automatically by the Tween engine (via Tween.tick), but is exposed for advanced uses.
		 * @method tick
		 * @param {Number} delta The time to advance in milliseconds (or ticks if useTicks is true).
		 **/
		p.tick = function(delta) {
			this.setPosition(this._prevPosition+delta);
		};
	
		/**
		 * If a numeric position is passed, it is returned unchanged. If a string is passed, the position of the
		 * corresponding frame label will be returned, or null if a matching label is not defined.
		 * @method resolve
		 * @param {String|Number} positionOrLabel A numeric position value or label string.
		 **/
		p.resolve = function(positionOrLabel) {
			var pos = Number(positionOrLabel);
			if (isNaN(pos)) { pos = this._labels[positionOrLabel]; }
			return pos;
		};
	
		/**
		* Returns a string representation of this object.
		* @method toString
		* @return {String} a string representation of the instance.
		**/
		p.toString = function() {
			return "[Timeline]";
		};
	
		/**
		 * @method clone
		 * @protected
		 **/
		p.clone = function() {
			throw("Timeline can not be cloned.")
		};
	
	// private methods:
		/**
		 * @method _goto
		 * @protected
		 **/
		p._goto = function(positionOrLabel) {
			var pos = this.resolve(positionOrLabel);
			if (pos != null) { this.setPosition(pos); }
		};
	
	
		createjs.Timeline = createjs.promote(Timeline, "EventDispatcher");
	
	}());
	
	//##############################################################################
	// Ease.js
	//##############################################################################
	
	this.createjs = this.createjs||{};
	
	(function() {
		"use strict";
	
		/**
		 * The Ease class provides a collection of easing functions for use with TweenJS. It does not use the standard 4 param
		 * easing signature. Instead it uses a single param which indicates the current linear ratio (0 to 1) of the tween.
		 *
		 * Most methods on Ease can be passed directly as easing functions:
		 *
		 *      Tween.get(target).to({x:100}, 500, Ease.linear);
		 *
		 * However, methods beginning with "get" will return an easing function based on parameter values:
		 *
		 *      Tween.get(target).to({y:200}, 500, Ease.getPowIn(2.2));
		 *
		 * Please see the <a href="http://www.createjs.com/#!/TweenJS/demos/sparkTable">spark table demo</a> for an overview
		 * of the different ease types on <a href="http://tweenjs.com">TweenJS.com</a>.
		 *
		 * <i>Equations derived from work by Robert Penner.</i>
		 * @class Ease
		 * @static
		 **/
		function Ease() {
			throw "Ease cannot be instantiated.";
		};
	
	
	// static methods and properties
		/**
		 * @method linear
		 * @static
		 **/
		Ease.linear = function(t) { return t; }
	
		/**
		 * Identical to linear.
		 * @method none
		 * @static
		 **/
		Ease.none = Ease.linear;
	
		/**
		 * Mimics the simple -100 to 100 easing in Flash Pro.
		 * @method get
		 * @param amount A value from -1 (ease in) to 1 (ease out) indicating the strength and direction of the ease.
		 * @static
		 **/
		Ease.get = function(amount) {
			if (amount < -1) { amount = -1; }
			if (amount > 1) { amount = 1; }
			return function(t) {
				if (amount==0) { return t; }
				if (amount<0) { return t*(t*-amount+1+amount); }
				return t*((2-t)*amount+(1-amount));
			}
		}
	
		/**
		 * Configurable exponential ease.
		 * @method getPowIn
		 * @param pow The exponent to use (ex. 3 would return a cubic ease).
		 * @static
		 **/
		Ease.getPowIn = function(pow) {
			return function(t) {
				return Math.pow(t,pow);
			}
		}
	
		/**
		 * Configurable exponential ease.
		 * @method getPowOut
		 * @param pow The exponent to use (ex. 3 would return a cubic ease).
		 * @static
		 **/
		Ease.getPowOut = function(pow) {
			return function(t) {
				return 1-Math.pow(1-t,pow);
			}
		}
	
		/**
		 * Configurable exponential ease.
		 * @method getPowInOut
		 * @param pow The exponent to use (ex. 3 would return a cubic ease).
		 * @static
		 **/
		Ease.getPowInOut = function(pow) {
			return function(t) {
				if ((t*=2)<1) return 0.5*Math.pow(t,pow);
				return 1-0.5*Math.abs(Math.pow(2-t,pow));
			}
		}
	
		/**
		 * @method quadIn
		 * @static
		 **/
		Ease.quadIn = Ease.getPowIn(2);
		/**
		 * @method quadOut
		 * @static
		 **/
		Ease.quadOut = Ease.getPowOut(2);
		/**
		 * @method quadInOut
		 * @static
		 **/
		Ease.quadInOut = Ease.getPowInOut(2);
	
		/**
		 * @method cubicIn
		 * @static
		 **/
		Ease.cubicIn = Ease.getPowIn(3);
		/**
		 * @method cubicOut
		 * @static
		 **/
		Ease.cubicOut = Ease.getPowOut(3);
		/**
		 * @method cubicInOut
		 * @static
		 **/
		Ease.cubicInOut = Ease.getPowInOut(3);
	
		/**
		 * @method quartIn
		 * @static
		 **/
		Ease.quartIn = Ease.getPowIn(4);
		/**
		 * @method quartOut
		 * @static
		 **/
		Ease.quartOut = Ease.getPowOut(4);
		/**
		 * @method quartInOut
		 * @static
		 **/
		Ease.quartInOut = Ease.getPowInOut(4);
	
		/**
		 * @method quintIn
		 * @static
		 **/
		Ease.quintIn = Ease.getPowIn(5);
		/**
		 * @method quintOut
		 * @static
		 **/
		Ease.quintOut = Ease.getPowOut(5);
		/**
		 * @method quintInOut
		 * @static
		 **/
		Ease.quintInOut = Ease.getPowInOut(5);
	
		/**
		 * @method sineIn
		 * @static
		 **/
		Ease.sineIn = function(t) {
			return 1-Math.cos(t*Math.PI/2);
		}
	
		/**
		 * @method sineOut
		 * @static
		 **/
		Ease.sineOut = function(t) {
			return Math.sin(t*Math.PI/2);
		}
	
		/**
		 * @method sineInOut
		 * @static
		 **/
		Ease.sineInOut = function(t) {
			return -0.5*(Math.cos(Math.PI*t) - 1)
		}
	
		/**
		 * Configurable "back in" ease.
		 * @method getBackIn
		 * @param amount The strength of the ease.
		 * @static
		 **/
		Ease.getBackIn = function(amount) {
			return function(t) {
				return t*t*((amount+1)*t-amount);
			}
		}
		/**
		 * @method backIn
		 * @static
		 **/
		Ease.backIn = Ease.getBackIn(1.7);
	
		/**
		 * Configurable "back out" ease.
		 * @method getBackOut
		 * @param amount The strength of the ease.
		 * @static
		 **/
		Ease.getBackOut = function(amount) {
			return function(t) {
				return (--t*t*((amount+1)*t + amount) + 1);
			}
		}
		/**
		 * @method backOut
		 * @static
		 **/
		Ease.backOut = Ease.getBackOut(1.7);
	
		/**
		 * Configurable "back in out" ease.
		 * @method getBackInOut
		 * @param amount The strength of the ease.
		 * @static
		 **/
		Ease.getBackInOut = function(amount) {
			amount*=1.525;
			return function(t) {
				if ((t*=2)<1) return 0.5*(t*t*((amount+1)*t-amount));
				return 0.5*((t-=2)*t*((amount+1)*t+amount)+2);
			}
		}
		/**
		 * @method backInOut
		 * @static
		 **/
		Ease.backInOut = Ease.getBackInOut(1.7);
	
		/**
		 * @method circIn
		 * @static
		 **/
		Ease.circIn = function(t) {
			return -(Math.sqrt(1-t*t)- 1);
		}
	
		/**
		 * @method circOut
		 * @static
		 **/
		Ease.circOut = function(t) {
			return Math.sqrt(1-(--t)*t);
		}
	
		/**
		 * @method circInOut
		 * @static
		 **/
		Ease.circInOut = function(t) {
			if ((t*=2) < 1) return -0.5*(Math.sqrt(1-t*t)-1);
			return 0.5*(Math.sqrt(1-(t-=2)*t)+1);
		}
	
		/**
		 * @method bounceIn
		 * @static
		 **/
		Ease.bounceIn = function(t) {
			return 1-Ease.bounceOut(1-t);
		}
	
		/**
		 * @method bounceOut
		 * @static
		 **/
		Ease.bounceOut = function(t) {
			if (t < 1/2.75) {
				return (7.5625*t*t);
			} else if (t < 2/2.75) {
				return (7.5625*(t-=1.5/2.75)*t+0.75);
			} else if (t < 2.5/2.75) {
				return (7.5625*(t-=2.25/2.75)*t+0.9375);
			} else {
				return (7.5625*(t-=2.625/2.75)*t +0.984375);
			}
		}
	
		/**
		 * @method bounceInOut
		 * @static
		 **/
		Ease.bounceInOut = function(t) {
			if (t<0.5) return Ease.bounceIn (t*2) * .5;
			return Ease.bounceOut(t*2-1)*0.5+0.5;
		}
	
		/**
		 * Configurable elastic ease.
		 * @method getElasticIn
		 * @param amplitude
		 * @param period
		 * @static
		 **/
		Ease.getElasticIn = function(amplitude,period) {
			var pi2 = Math.PI*2;
			return function(t) {
				if (t==0 || t==1) return t;
				var s = period/pi2*Math.asin(1/amplitude);
				return -(amplitude*Math.pow(2,10*(t-=1))*Math.sin((t-s)*pi2/period));
			}
		}
		/**
		 * @method elasticIn
		 * @static
		 **/
		Ease.elasticIn = Ease.getElasticIn(1,0.3);
	
		/**
		 * Configurable elastic ease.
		 * @method getElasticOut
		 * @param amplitude
		 * @param period
		 * @static
		 **/
		Ease.getElasticOut = function(amplitude,period) {
			var pi2 = Math.PI*2;
			return function(t) {
				if (t==0 || t==1) return t;
				var s = period/pi2 * Math.asin(1/amplitude);
				return (amplitude*Math.pow(2,-10*t)*Math.sin((t-s)*pi2/period )+1);
			}
		}
		/**
		 * @method elasticOut
		 * @static
		 **/
		Ease.elasticOut = Ease.getElasticOut(1,0.3);
	
		/**
		 * Configurable elastic ease.
		 * @method getElasticInOut
		 * @param amplitude
		 * @param period
		 * @static
		 **/
		Ease.getElasticInOut = function(amplitude,period) {
			var pi2 = Math.PI*2;
			return function(t) {
				var s = period/pi2 * Math.asin(1/amplitude);
				if ((t*=2)<1) return -0.5*(amplitude*Math.pow(2,10*(t-=1))*Math.sin( (t-s)*pi2/period ));
				return amplitude*Math.pow(2,-10*(t-=1))*Math.sin((t-s)*pi2/period)*0.5+1;
			}
		}
		/**
		 * @method elasticInOut
		 * @static
		 **/
		Ease.elasticInOut = Ease.getElasticInOut(1,0.3*1.5);
	
		createjs.Ease = Ease;
	
	}());
	
	//##############################################################################
	// MotionGuidePlugin.js
	//##############################################################################
	
	this.createjs = this.createjs||{};
	
	(function() {
		"use strict";
	
		/**
		 * A TweenJS plugin for working with motion guides.
		 *
		 * To use, install the plugin after TweenJS has loaded. Next tween the 'guide' property with an object as detailed below.
		 *
		 *       createjs.MotionGuidePlugin.install();
		 *
		 * <h4>Example</h4>
		 *
		 *      // Using a Motion Guide
		 *	    createjs.Tween.get(target).to({guide:{ path:[0,0, 0,200,200,200, 200,0,0,0] }},7000);
		 *	    // Visualizing the line
		 *	    graphics.moveTo(0,0).curveTo(0,200,200,200).curveTo(200,0,0,0);
		 *
		 * Each path needs pre-computation to ensure there's fast performance. Because of the pre-computation there's no
		 * built in support for path changes mid tween. These are the Guide Object's properties:<UL>
		 *      <LI> path: Required, Array : The x/y points used to draw the path with a moveTo and 1 to n curveTo calls.</LI>
		 *      <LI> start: Optional, 0-1 : Initial position, default 0 except for when continuing along the same path.</LI>
		 *      <LI> end: Optional, 0-1 : Final position, default 1 if not specified.</LI>
		 *      <LI> orient: Optional, string : "fixed"/"auto"/"cw"/"ccw"<UL>
		 *				<LI>"fixed" forces the object to face down the path all movement (relative to start rotation),</LI>
		 *      		<LI>"auto" rotates the object along the path relative to the line.</LI>
		 *      		<LI>"cw"/"ccw" force clockwise or counter clockwise rotations including flash like behaviour</LI>
		 * 		</UL></LI>
		 * </UL>
		 * Guide objects should not be shared between tweens even if all properties are identical, the library stores
		 * information on these objects in the background and sharing them can cause unexpected behaviour. Values
		 * outside 0-1 range of tweens will be a "best guess" from the appropriate part of the defined curve.
		 *
		 * @class MotionGuidePlugin
		 * @constructor
		 **/
		function MotionGuidePlugin() {
			throw("MotionGuidePlugin cannot be instantiated.")
		};
	
	
	// static properties:
		/**
		 * @property priority
		 * @protected
		 * @static
		 **/
		MotionGuidePlugin.priority = 0; // high priority, should run sooner
	
		/**
		 * @property temporary variable storage
		 * @private
		 * @static
		 */
		MotionGuidePlugin._rotOffS;
		/**
		 * @property temporary variable storage
		 * @private
		 * @static
		 */
		MotionGuidePlugin._rotOffE;
		/**
		 * @property temporary variable storage
		 * @private
		 * @static
		 */
		MotionGuidePlugin._rotNormS;
		/**
		 * @property temporary variable storage
		 * @private
		 * @static
		 */
		MotionGuidePlugin._rotNormE;
	
	
	// static methods
		/**
		 * Installs this plugin for use with TweenJS. Call this once after TweenJS is loaded to enable this plugin.
		 * @method install
		 * @static
		 **/
		MotionGuidePlugin.install = function() {
			createjs.Tween.installPlugin(MotionGuidePlugin, ["guide", "x", "y", "rotation"]);
			return createjs.Tween.IGNORE;
		};
	
		/**
		 * @method init
		 * @protected
		 * @static
		 **/
		MotionGuidePlugin.init = function(tween, prop, value) {
			var target = tween.target;
			if(!target.hasOwnProperty("x")){ target.x = 0; }
			if(!target.hasOwnProperty("y")){ target.y = 0; }
			if(!target.hasOwnProperty("rotation")){ target.rotation = 0; }
	
			if(prop=="rotation"){ tween.__needsRot = true; }
			return prop=="guide"?null:value;
		};
	
		/**
		 * @method step
		 * @protected
		 * @static
		 **/
		MotionGuidePlugin.step = function(tween, prop, startValue, endValue, injectProps) {
			// other props
			if(prop == "rotation"){
				tween.__rotGlobalS = startValue;
				tween.__rotGlobalE = endValue;
				MotionGuidePlugin.testRotData(tween, injectProps);
			}
			if(prop != "guide"){ return endValue; }
	
			// guide only information - Start -
			var temp, data = endValue;
			if(!data.hasOwnProperty("path")){ data.path = []; }
			var path = data.path;
			if(!data.hasOwnProperty("end")){ data.end = 1; }
			if(!data.hasOwnProperty("start")){
				data.start = (startValue&&startValue.hasOwnProperty("end")&&startValue.path===path)?startValue.end:0;
			}
	
			// Figure out subline information
			if(data.hasOwnProperty("_segments") && data._length){ return endValue; }
			var l = path.length;
			var accuracy = 10;		// Adjust to improve line following precision but sacrifice performance (# of seg)
			if(l >= 6 && (l-2) % 4 == 0){	// Enough points && contains correct number per entry ignoring start
				data._segments = [];
				data._length = 0;
				for(var i=2; i<l; i+=4){
					var sx = path[i-2], sy = path[i-1];
					var cx = path[i+0], cy = path[i+1];
					var ex = path[i+2], ey = path[i+3];
					var oldX = sx, oldY = sy;
					var tempX, tempY, total = 0;
					var sublines = [];
					for(var j=1; j<=accuracy; j++){
						var t = j/accuracy;
						var inv = 1 - t;
						tempX = inv*inv * sx + 2 * inv * t * cx + t*t * ex;
						tempY = inv*inv * sy + 2 * inv * t * cy + t*t * ey;
						total += sublines[sublines.push(Math.sqrt((temp=tempX-oldX)*temp + (temp=tempY-oldY)*temp))-1];
						oldX = tempX;
						oldY = tempY;
					}
					data._segments.push(total);
					data._segments.push(sublines);
					data._length += total;
				}
			} else {
				throw("invalid 'path' data, please see documentation for valid paths");
			}
	
			// Setup x/y tweens
			temp = data.orient;
			data.orient = true;
			var o = {};
			MotionGuidePlugin.calc(data, data.start, o);
			tween.__rotPathS = Number(o.rotation.toFixed(5));
			MotionGuidePlugin.calc(data, data.end, o);
			tween.__rotPathE = Number(o.rotation.toFixed(5));
			data.orient = false;	//here and now we don't know if we need to
			MotionGuidePlugin.calc(data, data.end, injectProps);
			data.orient = temp;
	
			// Setup rotation properties
			if(!data.orient){ return endValue; }
			tween.__guideData = data;
			MotionGuidePlugin.testRotData(tween, injectProps);
			return endValue;
		};
	
		/**
		 * @method testRotData
		 * @protected
		 * @static
		 **/
		MotionGuidePlugin.testRotData = function(tween, injectProps){
	
			// no rotation informat? if we need it come back, if we don't use 0 & ensure we have guide data
			if(tween.__rotGlobalS === undefined || tween.__rotGlobalE === undefined){
				if(tween.__needsRot){ return; }
				if(tween._curQueueProps.rotation !== undefined){
					tween.__rotGlobalS = tween.__rotGlobalE = tween._curQueueProps.rotation;
				} else {
					tween.__rotGlobalS = tween.__rotGlobalE = injectProps.rotation = tween.target.rotation || 0;
				}
			}
			if(tween.__guideData === undefined){ return; }
	
			// Process rotation properties
			var data = tween.__guideData;
			var rotGlobalD = tween.__rotGlobalE - tween.__rotGlobalS;
			var rotPathD = tween.__rotPathE - tween.__rotPathS;
			var rot = rotGlobalD - rotPathD;
	
			if(data.orient == "auto"){
				if(rot > 180){			rot -= 360; }
				else if(rot < -180){	rot += 360; }
	
			} else if(data.orient == "cw"){
				while(rot < 0){ rot += 360; }
				if(rot == 0 && rotGlobalD > 0 && rotGlobalD != 180){ rot += 360; }
	
			} else if(data.orient == "ccw"){
				rot = rotGlobalD - ((rotPathD > 180)?(360-rotPathD):(rotPathD));	// sign flipping on path
				while(rot > 0){ rot -= 360; }
				if(rot == 0 && rotGlobalD < 0 && rotGlobalD != -180){ rot -= 360; }
			}
	
			data.rotDelta = rot;
			data.rotOffS = tween.__rotGlobalS - tween.__rotPathS;
	
			// reset
			tween.__rotGlobalS = tween.__rotGlobalE = tween.__guideData = tween.__needsRot = undefined;
		};
	
		/**
		 * @method tween
		 * @protected
		 * @static
		 **/
		MotionGuidePlugin.tween = function(tween, prop, value, startValues, endValues, ratio, wait, end) {
			var data = endValues.guide;
			if(data == undefined || data === startValues.guide){ return value; }
			if(data.lastRatio != ratio){
				// first time through so calculate what I need to
				var t = ((data.end-data.start)*(wait?data.end:ratio)+data.start);
				MotionGuidePlugin.calc(data, t, tween.target);
				switch(data.orient){
					case "cw":		// mix in the original rotation
					case "ccw":
					case "auto": tween.target.rotation += data.rotOffS + data.rotDelta*ratio; break;
					case "fixed":	// follow fixed behaviour to solve potential issues
					default: tween.target.rotation += data.rotOffS; break;
				}
				data.lastRatio = ratio;
			}
			if(prop == "rotation" && ((!data.orient) || data.orient == "false")){ return value; }
			return tween.target[prop];
		};
	
		/**
		 * Determine the appropriate x/y/rotation information about a path for a given ratio along the path.
		 * Assumes a path object with all optional parameters specified.
		 * @param data Data object you would pass to the "guide:" property in a Tween
		 * @param ratio 0-1 Distance along path, values outside 0-1 are "best guess"
		 * @param target Object to copy the results onto, will use a new object if not supplied.
		 * @return {Object} The target object or a new object w/ the tweened properties
		 * @static
		 */
		MotionGuidePlugin.calc = function(data, ratio, target) {
			if(data._segments == undefined){ MotionGuidePlugin.validate(data); }
			if(target == undefined){ target = {x:0, y:0, rotation:0}; }
			var seg = data._segments;
			var path = data.path;
	
			// find segment
			var pos = data._length * ratio;
			var cap = seg.length - 2;
			var n = 0;
			while(pos > seg[n] && n < cap){
				pos -= seg[n];
				n+=2;
			}
	
			// find subline
			var sublines = seg[n+1];
			var i = 0;
			cap = sublines.length-1;
			while(pos > sublines[i] && i < cap){
				pos -= sublines[i];
				i++;
			}
			var t = (i/++cap)+(pos/(cap*sublines[i]));
	
			// find x/y
			n = (n*2)+2;
			var inv = 1 - t;
			target.x = inv*inv * path[n-2] + 2 * inv * t * path[n+0] + t*t * path[n+2];
			target.y = inv*inv * path[n-1] + 2 * inv * t * path[n+1] + t*t * path[n+3];
	
			// orientation
			if(data.orient){
				target.rotation = 57.2957795 * Math.atan2(
					(path[n+1]-path[n-1])*inv + (path[n+3]-path[n+1])*t,
					(path[n+0]-path[n-2])*inv + (path[n+2]-path[n+0])*t);
			}
	
			return target;
		};
	
		createjs.MotionGuidePlugin = MotionGuidePlugin;
	
	}());
	
	//##############################################################################
	// version.js
	//##############################################################################
	
	this.createjs = this.createjs || {};
	
	(function() {
		"use strict";
	
		/**
		 * Static class holding library specific information such as the version and buildDate of
		 * the library.
		 * @class TweenJS
		 **/
		var s = createjs.TweenJS = createjs.TweenJS || {};
	
		/**
		 * The version string for this release.
		 * @property version
		 * @type String
		 * @static
		 **/
		s.version = /*=version*/"0.6.0"; // injected by build process
	
		/**
		 * The build date for this release in UTC format.
		 * @property buildDate
		 * @type String
		 * @static
		 **/
		s.buildDate = /*=date*/"Thu, 11 Dec 2014 23:32:09 GMT"; // injected by build process
	
	})();
	
	/*** EXPORTS FROM exports-loader ***/
	module.exports = window.createjs;
	}.call(window));

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _createjsEaseljs = __webpack_require__(1);
	
	var _createjsEaseljs2 = _interopRequireDefault(_createjsEaseljs);
	
	var _createjsTweenjs = __webpack_require__(2);
	
	var _deck = __webpack_require__(4);
	
	var _deck2 = _interopRequireDefault(_deck);
	
	var _hand = __webpack_require__(6);
	
	var _hand2 = _interopRequireDefault(_hand);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var scoreMultipliers = {
	  "sf": 500,
	  "4": 200,
	  "fh": 50,
	  "flush": 20,
	  "straight": 10,
	  "3": 5,
	  "2p": 3,
	  "1p": 0,
	  "0p": 0
	};
	
	var resultMessage = {
	  "sf": "Straight Flush!",
	  "4": "Four of a Kind!",
	  "fh": "Full House!",
	  "flush": "Flush!",
	  "straight": "Straight!",
	  "3": "Three of a Kind!",
	  "2p": "Two Pair!",
	  "1p": "One Pair!",
	  "0p": "No Pairs"
	};
	
	var Poker = function () {
	  function Poker(stage) {
	    var _stage;
	
	    _classCallCheck(this, Poker);
	
	    this.maxX = 800;
	    this.maxY = 500;
	    this.stage = stage;
	    this.deck = new _deck2.default(this.stage);
	    this.hand = new _hand2.default(this.deck, this.stage);
	    this.active = 0;
	    this.gameState = "Game Over";
	    this.score = 100;
	    this.currentBet = 10;
	
	    this.cardImages = this.deck.getImages();
	    (_stage = this.stage).addChild.apply(_stage, _toConsumableArray(this.cardImages));
	    this.handleDrawButton = this.handleDrawButton.bind(this);
	    this.shuffleComplete = this.shuffleComplete.bind(this);
	
	    this.helpText = new _createjsEaseljs2.default.Text("Click the 'Deal' button to begin!", "30px Comfortaa", "white");
	    this.helpText.x = 400;
	    this.helpText.y = 400;
	    this.helpText.name = "helpText";
	    this.helpText.textAlign = "center";
	    this.stage.addChild(this.helpText);
	  }
	
	  _createClass(Poker, [{
	    key: 'drawScoreHelper',
	    value: function drawScoreHelper() {
	      var container = new _createjsEaseljs2.default.Container();
	      container.addChild();
	      container.x = 100;
	    }
	  }, {
	    key: 'drawResult',
	    value: function drawResult(result) {
	      var _this = this;
	
	      var resultText = new _createjsEaseljs2.default.Text(resultMessage[result], "40px Comfortaa", "white");
	      resultText.x = 400;
	      resultText.y = 30;
	      resultText.textAlign = "center";
	      setTimeout(function () {
	        _this.stage.addChild(resultText);
	        _createjsEaseljs2.default.Tween.get(resultText).wait(200).to({ alpha: 0 }, 2000).call(function () {
	          return _this.stage.removeChild(resultText);
	        });
	      }, 500);
	    }
	  }, {
	    key: 'handleDealButton',
	    value: function handleDealButton(dealButton) {
	      if (this.gameState === "Game Over") {
	        this.gameState = "Drawing";
	        dealButton.disabled = true;
	        this.deck.reset();
	        this.shuffleDeck();
	        this.score -= this.currentBet;
	        this.updateScore();
	      }
	
	      this.helpText.visible = false;
	    }
	  }, {
	    key: 'updateScore',
	    value: function updateScore() {
	      document.getElementById("score").innerHTML = 'Current Bank: ' + this.score;
	    }
	  }, {
	    key: 'handleDrawButton',
	    value: function handleDrawButton(drawButton) {
	      if (this.gameState === "Drawing") {
	        this.hand.getNewCards();
	        this.gameState = "Game Over";
	        var result = this.hand.getHandRank();
	        this.drawResult(result);
	        this.score += this.currentBet * scoreMultipliers[result];
	        this.updateScore();
	      }
	    }
	  }, {
	    key: 'shuffleDeck',
	    value: function shuffleDeck() {
	      var _this2 = this;
	
	      this.active = this.cardImages.length;
	      this.cardImages.forEach(function (card) {
	        _createjsEaseljs2.default.Tween.get(card).to({ x: Math.random() * (_this2.maxX - 100),
	          y: Math.random() * (_this2.maxY - 200) }, 700).to({ x: Math.random() * (_this2.maxX - 100),
	          y: Math.random() * (_this2.maxY - 200) }, 700).to({ x: 350, y: 100 }, 700).call(_this2.shuffleComplete);
	      });
	    }
	  }, {
	    key: 'shuffleComplete',
	    value: function shuffleComplete() {
	      this.active--;
	      if (this.active === 0) {
	        setTimeout(this.hand.getNewHand, 300);
	      }
	    }
	  }]);
	
	  return Poker;
	}();
	
	exports.default = Poker;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _card = __webpack_require__(5);
	
	var _card2 = _interopRequireDefault(_card);
	
	var _createjsEaseljs = __webpack_require__(1);
	
	var _createjsEaseljs2 = _interopRequireDefault(_createjsEaseljs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Deck = function () {
	  function Deck(stage) {
	    _classCallCheck(this, Deck);
	
	    var suits = ["diamonds", "hearts", "spades", "clubs"];
	    this.stage = stage;
	    this.cards = [];
	    for (var suit = 0; suit < 4; suit++) {
	      for (var i = 1; i <= 13; i++) {
	        var card = new _card2.default(i, suits[suit]);
	        this.cards.push(card);
	      }
	    }
	    this.shuffle();
	  }
	
	  _createClass(Deck, [{
	    key: 'getImages',
	    value: function getImages() {
	      var cardImages = [];
	      this.cards.forEach(function (card) {
	        cardImages.push(card.getImage());
	      });
	      return cardImages;
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	      this.cards.forEach(function (card) {
	        if (card.faceUp) {
	          card.flip();
	        }
	      });
	      this.cards = this.shuffle();
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {
	      var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	
	      var result = [];
	      for (var i = 0; i < num; i++) {
	        result.push(this.cards.pop());
	      }
	      return result;
	    }
	  }, {
	    key: 'shuffle',
	    value: function shuffle() {
	      //Fisher-Yates shuffle
	      var currentIndex = this.cards.length;
	      var temporaryValue = void 0,
	          randomIndex = void 0;
	      while (0 !== currentIndex) {
	        randomIndex = Math.floor(Math.random() * currentIndex);
	        currentIndex -= 1;
	        temporaryValue = this.cards[currentIndex];
	        this.cards[currentIndex] = this.cards[randomIndex];
	        this.cards[randomIndex] = temporaryValue;
	      }
	      return this.cards;
	    }
	  }]);
	
	  return Deck;
	}();
	
	exports.default = Deck;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _createjsEaseljs = __webpack_require__(1);
	
	var _createjsEaseljs2 = _interopRequireDefault(_createjsEaseljs);
	
	var _createjsTweenjs = __webpack_require__(2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Card = function () {
	  function Card(number, suit) {
	    _classCallCheck(this, Card);
	
	    this.number = number;
	    this.suit = suit;
	    this.faceUp = false;
	    this.selected = false;
	    this.name = '' + number + suit[0];
	    this.cardImage = new _createjsEaseljs2.default.Bitmap('assets/back.jpg');
	
	    this.updateFace = this.updateFace.bind(this);
	    this.flip = this.flip.bind(this);
	  }
	
	  _createClass(Card, [{
	    key: 'getImage',
	    value: function getImage() {
	      this.updateFace();
	      this.cardImage.x = 350;
	      this.cardImage.y = 100;
	      this.cardImage.name = this.name;
	      return this.cardImage;
	    }
	  }, {
	    key: 'toggleSelected',
	    value: function toggleSelected() {
	      this.selected = !this.selected;
	      if (this.selected) {
	        _createjsEaseljs2.default.Tween.get(this.cardImage).to({ regY: 50 }, 100);
	      } else {
	        _createjsEaseljs2.default.Tween.get(this.cardImage).to({ regY: 0 }, 100);
	      }
	      return this.selected;
	    }
	  }, {
	    key: 'updateFace',
	    value: function updateFace() {
	      if (this.faceUp) {
	        this.cardImage.image = document.createElement("img");
	        this.cardImage.image.src = 'assets/' + this.number + this.suit[0] + '.jpg';
	      } else {
	        this.cardImage.image = document.createElement("img");
	        this.cardImage.image.src = 'assets/back.jpg';
	      }
	    }
	  }, {
	    key: 'flip',
	    value: function flip() {
	      this.faceUp = !this.faceUp;
	      this.updateFace();
	    }
	  }]);
	
	  return Card;
	}();
	
	exports.default = Card;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _card = __webpack_require__(5);
	
	var _card2 = _interopRequireDefault(_card);
	
	var _deck = __webpack_require__(4);
	
	var _deck2 = _interopRequireDefault(_deck);
	
	var _createjsEaseljs = __webpack_require__(1);
	
	var _createjsEaseljs2 = _interopRequireDefault(_createjsEaseljs);
	
	var _createjsTweenjs = __webpack_require__(2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Hand = function () {
	  function Hand(deck, stage) {
	    _classCallCheck(this, Hand);
	
	    this.trayPositions = [[50, 300], [200, 300], [350, 300], [500, 300], [650, 300]];
	    this.hand = [null, null, null, null, null];
	    this.selectedCards = [];
	    this.deck = deck;
	    this.stage = stage;
	    this.handRank = null;
	    this.getNewHand = this.getNewHand.bind(this);
	    this.handleClick = this.handleClick.bind(this);
	    this.animateDraw = this.animateDraw.bind(this);
	    this.resetHandState = this.resetHandState.bind(this);
	    this.getHandRank = this.getHandRank.bind(this);
	  }
	
	  _createClass(Hand, [{
	    key: 'getNewHand',
	    value: function getNewHand() {
	      this.hand = this.deck.draw(5);
	      this.animateDraw(this.hand);
	    }
	  }, {
	    key: 'getNewCards',
	    value: function getNewCards() {
	      var _this = this;
	
	      var emptyPositions = [];
	      var cardImages = [];
	      this.selectedCards.forEach(function (card) {
	        var cardImage = _this.stage.getChildByName(card.name);
	        cardImages.push(cardImage);
	        emptyPositions.push([cardImage.x, cardImage.y]);
	        _this.deck.cards.unshift(card);
	      });
	
	      // return the discarded cards to the bottom of the deck
	      cardImages.forEach(function (cardImage, index) {
	        _createjsEaseljs2.default.Tween.get(cardImage).wait(index * 200).to({
	          x: 350, y: 100,
	          scaleX: 0,
	          regY: 0
	        }, 700).call(_this.selectedCards[index].flip).to({ scaleX: 1 }, 200);
	        cardImage.removeEventListener("click", _this.handleClick);
	      });
	      this.hand = this.hand.filter(function (card) {
	        return !_this.selectedCards.includes(card);
	      });
	
	      // draw new cards from the deck and add them to the hand
	      var newCards = this.deck.draw(emptyPositions.length);
	      this.hand = this.hand.concat(newCards);
	      this.handRank = this.getHandRank();
	      setTimeout(function () {
	        return _this.animateDraw(newCards, emptyPositions);
	      }, 1200);
	      setTimeout(this.resetHandState, 1200);
	    }
	  }, {
	    key: 'getHandRank',
	    value: function getHandRank() {
	      var straight = this.getStraight();
	      var flush = this.getFlush();
	      var multiples = this.getMultiples();
	
	      if (straight && flush) {
	        return "sf";
	      } else if (multiples === 4) {
	        return "4";
	      } else if (multiples === "fh") {
	        return "fh";
	      } else if (flush) {
	        return "flush";
	      } else if (straight) {
	        return "straight";
	      } else if (multiples === 3) {
	        return "3";
	      } else if (multiples === "2p") {
	        return "2p";
	      } else if (multiples === 2) {
	        return "1p";
	      } else {
	        return "0p";
	      }
	    }
	  }, {
	    key: 'getStraight',
	    value: function getStraight() {
	      var lastnum = this.hand.number;
	      var straight = true;
	      this.hand.sort(function (a, b) {
	        return a.number - b.number;
	      });
	      for (var i = 1; i < this.hand.length; i++) {
	        if (this.hand[i] !== lastnum++) straight = false;
	        lastnum = this.hand[i];
	      }
	      return straight;
	    }
	  }, {
	    key: 'getFlush',
	    value: function getFlush() {
	      var _this2 = this;
	
	      return this.hand.every(function (card) {
	        return card.suit === _this2.hand[0];
	      });
	    }
	  }, {
	    key: 'getMultiples',
	    value: function getMultiples() {
	      var _this3 = this;
	
	      var firstpair = null;
	      var secondpair = null;
	      var max = 1;
	      this.hand.forEach(function (card) {
	        var num = 0;
	        _this3.hand.forEach(function (card2) {
	          if (card.number === card2.number) num++;
	        });
	        if (num > 1) {
	          if (firstpair && card.number !== firstpair) {
	            secondpair = card.number;
	            if (num > max) max = num;
	          } else {
	            firstpair = card.number;
	            if (num > max) max = num;
	          }
	        }
	      });
	
	      if (firstpair && secondpair) {
	        if (max > 2) {
	          return "fh";
	        } else {
	          return "2p";
	        }
	      }
	
	      switch (max) {
	        case 4:
	          return 4;
	        case 3:
	          return 3;
	        case 2:
	          return 2;
	        default:
	          return 0;
	      }
	    }
	  }, {
	    key: 'resetHandState',
	    value: function resetHandState() {
	      var _this4 = this;
	
	      this.selectedCards = [];
	      var dealButton = document.getElementById("deal-button");
	      var drawButton = document.getElementById("draw-button");
	      drawButton.innerHTML = "Draw";
	      drawButton.disabled = true;
	      dealButton.disabled = false;
	
	      this.hand.forEach(function (card) {
	        _this4.deck.cards.push(card);
	        _this4.stage.getChildByName(card.name).removeEventListener("click", _this4.handleClick);
	      });
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick(event) {
	      var drawButton = document.getElementById("draw-button");
	      var cardImage = event.currentTarget;
	      var clickedCard = this.hand.find(function (card) {
	        return card.name === cardImage.name;
	      });
	      clickedCard.toggleSelected();
	      if (clickedCard.selected) {
	        this.selectedCards.push(clickedCard);
	      } else {
	        var index = this.selectedCards.indexOf(clickedCard);
	        this.selectedCards.splice(index, 1);
	      }
	      if (this.selectedCards.length > 0) {
	        drawButton.innerHTML = 'Draw ' + this.selectedCards.length;
	        drawButton.disabled = false;
	      } else {
	        drawButton.innerHTML = "Draw";
	        drawButton.disabled = true;
	      }
	    }
	  }, {
	    key: 'animateDraw',
	    value: function animateDraw(cards) {
	      var _this5 = this;
	
	      var positions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.trayPositions;
	
	      var cardImages = [];
	      cards.forEach(function (card) {
	        var cardImage = _this5.stage.getChildByName(card.name);
	        cardImages.push(cardImage);
	      });
	      cardImages.forEach(function (cardImage, index) {
	        _createjsEaseljs2.default.Tween.get(cardImage).wait(index * 200).to({
	          x: positions[index][0],
	          y: positions[index][1],
	          scaleX: 0
	        }, 700).call(cards[index].flip).to({ scaleX: 1 }, 200);
	        cardImage.addEventListener("click", _this5.handleClick);
	      });
	    }
	  }]);
	
	  return Hand;
	}();
	
	exports.default = Hand;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map