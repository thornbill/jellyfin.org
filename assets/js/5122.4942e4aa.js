(self.webpackChunkjellyfin_org=self.webpackChunkjellyfin_org||[]).push([[5122],{5122:function(t,e,i){"use strict";i.r(e),i.d(e,{img_comparison_slider:function(){return r}});var o=i(6926),n=function(t){return{x:t.touches[0].pageX,y:t.touches[0].pageY}},s={ArrowLeft:-1,ArrowRight:1},r=function(){function t(t){var e=this;(0,o.r)(this,t),this.exposure=50,this.isMouseDown=!1,this.isFocused=!1,this.onWindowMouseMove=function(t){e.isMouseDown&&e.slideToPageX(t.pageX)},this.bodyUserSelectStyle="",this.isTouchComparing=!1,this.hasTouchMoved=!1}return t.prototype.componentWillLoad=function(){var t=this;this.el.querySelectorAll("img").forEach((function(e){e.addEventListener("dragstart",(function(t){t.preventDefault()})),e.addEventListener("load",(function(){t.updateAfterWidth()}))}))},t.prototype.componentDidRender=function(){this.slide(0),this.updateAfterWidth(),this.el.setAttribute("tabindex","0")},t.prototype.disconnectedCallback=function(){this.transitionTimer&&window.clearTimeout(this.transitionTimer)},t.prototype.slide=function(t,e){var i=this;if(void 0===t&&(t=0),void 0===e&&(e=!1),this.exposure=function(t,e,i){return t<e?e:t>i?i:t}(this.exposure+t,0,100),e){this.after.style.transition="width 100ms",this.transitionTimer=window.setTimeout((function(){i.after.style.transition=null,i.transitionTimer=null}),100)}this.after.style.width=this.exposure+"%"},t.prototype.onKeyDown=function(t){if(!this.keyboardSlideAnimationTimeoutId){var e=t.key;Object.keys(s).includes(e)&&this.startSlideAnimation(s[e])}},t.prototype.onKeyUp=function(t){this.keyboardSlideAnimationTimeoutId&&Object.keys(s).includes(t.key)&&this.stopSlideAnimation()},t.prototype.onMouseDown=function(t){window.addEventListener("mousemove",this.onWindowMouseMove),this.isMouseDown=!0,this.slideToPageX(t.pageX,!0),this.el.focus(),this.bodyUserSelectStyle=window.document.body.style.userSelect,window.document.body.style.userSelect="none"},t.prototype.onMouseUp=function(t){this.isMouseDown=!1,window.document.body.style.userSelect=this.bodyUserSelectStyle,window.removeEventListener("mousemove",this.onWindowMouseMove)},t.prototype.onTouchStart=function(t){this.touchStartPoint=n(t),this.isFocused&&this.slideToPageX(t.touches[0].pageX,!0)},t.prototype.onTouchMove=function(t){if(this.isTouchComparing)return this.slideToPageX(t.touches[0].pageX),t.preventDefault(),!1;if(!this.hasTouchMoved){var e=n(t);if(Math.abs(e.y-this.touchStartPoint.y)<Math.abs(e.x-this.touchStartPoint.x))return this.isTouchComparing=!0,this.el.focus(),this.slideToPageX(t.touches[0].pageX,!0),t.preventDefault(),!1;this.hasTouchMoved=!0}},t.prototype.touchEnd=function(){this.isTouchComparing=!1,this.hasTouchMoved=!1},t.prototype.onBlur=function(){this.stopSlideAnimation(),this.isFocused=!1},t.prototype.onFocus=function(){this.isFocused=!0},t.prototype.updateAfterWidth=function(){this.imageWidth=this.el.offsetWidth,this.afterImageContainer.style.width=this.el.offsetWidth+"px"},t.prototype.slideToPageX=function(t,e){void 0===e&&(e=!1);var i=t-this.el.getBoundingClientRect().left-window.scrollX;this.exposure=i/this.imageWidth*100,this.slide(0,e)},t.prototype.startSlideAnimation=function(t){var e=this,i=1*t,o=function(){e.keyboardSlideAnimationTimeoutId=window.setTimeout((function(){e.animationRequestId=window.requestAnimationFrame(o)}),1e3/120),e.slide(i)};o()},t.prototype.stopSlideAnimation=function(){this.keyboardSlideAnimationTimeoutId&&(window.clearTimeout(this.keyboardSlideAnimationTimeoutId),window.cancelAnimationFrame(this.animationRequestId),this.keyboardSlideAnimationTimeoutId=null,this.animationRequestId=null)},t.prototype.render=function(){var t=this;return(0,o.h)("div",null,(0,o.h)("div",{class:"before",ref:function(e){return t.before=e}},(0,o.h)("slot",{name:"before"})),(0,o.h)("div",{class:"after",ref:function(e){return t.after=e}},(0,o.h)("div",{class:"handle-wrapper"},(0,o.h)("slot",{name:"handle"},(0,o.h)("div",{class:"handle"}))),(0,o.h)("div",{class:"after-overlay"},(0,o.h)("div",{ref:function(e){return t.afterImageContainer=e}},(0,o.h)("slot",{name:"after"})))))},Object.defineProperty(t.prototype,"el",{get:function(){return(0,o.g)(this)},enumerable:!1,configurable:!0}),t}();r.style=':host{--divider-width:1px;--divider-color:#d7d7d7;--handle-size:40px;--handle-color:#d7d7d7;--handle-opacity:0.5;--handle-opacity-active:0;position:relative;display:inline-block;font-size:0;overflow:hidden;isolation:isolate;line-height:0}:host(:focus) .handle-wrapper{opacity:var(--handle-opacity-active)}::slotted(img){-webkit-user-drag:none;-khtml-user-drag:none;-moz-user-drag:none;-o-user-drag:none;user-drag:none;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.before{position:relative;z-index:-2}.after{position:absolute;left:0;top:0;bottom:0;z-index:-1}.after .after-overlay{overflow:hidden}.after:before{content:" ";position:absolute;display:block;right:calc(var(--divider-width) * -0.5);top:0;bottom:0;border-right-width:var(--divider-width);border-right-style:solid;border-right-color:var(--divider-color)}.handle-wrapper{position:absolute;width:var(--handle-size);height:var(--handle-size);margin-top:calc(var(--handle-size) / (-2));margin-right:calc(var(--handle-size) / (-2));top:50%;right:0;pointer-events:none;-webkit-box-sizing:border-box;box-sizing:border-box;opacity:var(--handle-opacity);-webkit-transition:opacity 1s;transition:opacity 1s}.handle{background-color:var(--handle-color);width:var(--handle-size);height:var(--handle-size);-webkit-transition:-webkit-transform 1s;transition:-webkit-transform 1s;transition:transform 1s;transition:transform 1s, -webkit-transform 1s;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-box-shadow:0px 0px 15px 0px rgba(0, 0, 0, 0.75);box-shadow:0px 0px 15px 0px rgba(0, 0, 0, 0.75)}.focused .handle{-webkit-transform:rotate(45deg) scale(1.5);transform:rotate(45deg) scale(1.5)}'}}]);