(self.webpackChunkjellyfin_org=self.webpackChunkjellyfin_org||[]).push([[8356],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),h=a,d=m["".concat(s,".").concat(h)]||m[h]||p[h]||r;return n?o.createElement(d,i(i({ref:t},u),{},{components:n})):o.createElement(d,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3589:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var o=n(2122),a=n(9756),r=(n(7294),n(3905)),i={title:"Client Spotlight: MPV Shim",author:"Ian Walton",author_url:"https://github.com/iwalton3",author_image_url:"https://avatars.githubusercontent.com/u/8078788?v=4",tags:["client spotlight","clients","mpv"],description:"Watch all your favorite content without transcoding!"},l={permalink:"/blog/2020/02/07/client-spotlight-mpv-shim",source:"@site/blog/2020-02-07-client-spotlight-mpv-shim.mdx",title:"Client Spotlight: MPV Shim",description:"Watch all your favorite content without transcoding!",date:"2020-02-07T00:00:00.000Z",formattedDate:"February 7, 2020",tags:[{label:"client spotlight",permalink:"/blog/tags/client-spotlight"},{label:"clients",permalink:"/blog/tags/clients"},{label:"mpv",permalink:"/blog/tags/mpv"}],readingTime:1.74,truncated:!0,prevItem:{title:"Jellyfin for Kodi Release - v0.5.0",permalink:"/blog/2020/03/04/kodi-0-5-0"},nextItem:{title:"New Android TV Release - v0.11.0",permalink:"/blog/2020/02/04/android-tv-11"}},s=[],c={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Jellyfin MPV Shim is a lightweight cast-only client that allows you to cast videos from Jellyfin to the ",(0,r.kt)("a",{href:"https://mpv.io/"},"MPV Media Player"),"."),(0,r.kt)("p",null,"It runs in the system tray and stays out of your way until you want to play something. It also has excellent codec support and many configurable options for advanced users."),(0,r.kt)("p",null,"If you watch a lot of anime, this client is definitely for you. The player has full support for 10-bit HEVC video with subtitles. Additionally, there is a menu option that allows setting subtitles and audio preferences over an entire season of TV at once."),(0,r.kt)("img",{src:"/static/img/posts/mpv-shim/blender.png",name:"Interface"}),(0,r.kt)("p",null,"To get started on Windows, simply ",(0,r.kt)("a",{href:"https://github.com/iwalton3/jellyfin-mpv-shim/releases"},"download the binary")," and run it. If you are on Linux, ",(0,r.kt)("a",{href:"https://github.com/iwalton3/jellyfin-mpv-shim/blob/master/README.md#linux-installation"},"follow the instructions here"),". After you have started the client, enter the URL of your server and the username and password to connect. The client will run in a tray icon, which allows you to access the configuration and view the error logs."),(0,r.kt)("p",null,"Casting media is easy. Open the Play On menu in the Jellyfin web or mobile clients and select Jellyfin MPV Shim. Then play media normally. You\u2019ll be able to control most aspects of playback from the web application or by ",(0,r.kt)("a",{href:"https://github.com/iwalton3/jellyfin-mpv-shim#keyboard-shortcuts"},"using keyboard shortcuts"),". Most of the options can be accessed using the menu during playback. Press ",(0,r.kt)("inlineCode",{parentName:"p"},"C")," on your computer or use the arrow-based navigation controls in the mobile client when supported."),(0,r.kt)("img",{src:"/static/img/posts/mpv-shim/menu.png",name:"Configuration Menu"}),(0,r.kt)("p",null,"You can adjust playback settings and preferences in the menu with ease. Use the arrow keys and enter to navigate and escape to go back. The ",(0,r.kt)("strong",{parentName:"p"},"Auto Set Audio/Subtitles")," option allows you to set the subtitles for an entire season at once, instead of having to change the settings each time the episode changes. Use the ",(0,r.kt)("strong",{parentName:"p"},"Preferences")," menu to adjust the default playback settings and remote video quality."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Client Spotlight")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This series aims to highlight some of the amazing projects created by our community."),(0,r.kt)("p",{parentName:"div"},"Feel free to send us a message if you can think of a project that could use more love!"))))}u.isMDXComponent=!0}}]);