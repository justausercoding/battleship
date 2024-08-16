(()=>{"use strict";var e={208:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(601),o=n.n(r),a=n(314),i=n.n(a)()(o());i.push([e.id,'/* ---------- RESET ---------- */\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\n* {\n    margin: 0;\n}\n\nbody {\n    min-height: 100vh;\n    line-height: 1.5;\n}\n\nh1,\nh2,\nh3,\nh4,\nbutton,\ninput,\nlabel {\n    line-height: 1.1;\n}\n\n\n\n/* ---------- ELEMENTS ---------- */\nbody {\n    font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,\n        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n}\n\nbutton {\n    font-family: inherit;\n    background-color: transparent;\n}\n\nbutton:hover {\n    cursor: pointer;\n}\n\n\n\n/* ---------- PROJECT ---------- */\n/* ---- Body ---- */\nbody {\n    background: linear-gradient(\n        to bottom right,\n        rgba(174, 202, 255, 0.939),\n        rgba(255, 132, 0, 0.431)\n    );\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 100px 1fr;\n    grid-template-areas:\n        "title title"\n        "board-1 board-2";\n    justify-items: center;\n}\n/* ---- Dialog ---- */\ndialog {\n    justify-self: center;\n    top: 100px;\n    border-style: none;\n    background: transparent;\n    padding: 0;\n}\n\ndialog::backdrop {\n    opacity: 0%;\n}\n\ndialog .square {\n    pointer-events: none;\n}\n\n.dialog__board .message {\n    background-color: rgba(255, 0, 117, 0.3);\n}\n\n.dialog__button-container {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n\n.dialog__button-random,\n.dialog__button-accept {\n    justify-self: center;\n\n    font-weight: 600;\n    background-color: "#fff";\n\n    width: 120px;\n    margin: 20px 10px 0 10px;\n    padding: 10px;\n    border: 0.5px solid grey;\n    border-radius: 7px;\n    outline: none;\n}\n.dialog__button-random:hover,\n.dialog__button-accept:hover {\n    color: white;\n    background-color: grey;\n}\n\n\n/* ---- Title ---- */\n.title {\n    grid-area: title;\n    font-size: 3rem;\n    align-self: center;\n    font-weight: 700;\n    user-select: none;\n}\n\n\n/* ---- Boards ---- */\n.board-player {\n    grid-area: board-1;\n    justify-self: end;\n\n    margin-right: 40px;\n    pointer-events: none;\n}\n\n.board-computer {\n    grid-area: board-2;\n    justify-self: start;\n\n    margin-left: 40px;\n}\n\n.board-player,\n.board-computer,\n.dialog__board {\n    display: grid;\n    grid-template-rows: 40px repeat(10, 38px);\n}\n\n.not-current-turn {\n    opacity: 0.35;\n    pointer-events: none;\n}\n\n.message-container {\n    display: flex;\n    justify-content: center;\n    align-content: center;\n}\n\n.message {\n    font-family: "Courier New", Courier, monospace;\n    color: black;\n    font-weight: 700;\n    user-select: none;\n    align-self: center;\n    border-radius: 7px;\n    padding: 0 15px;\n}\n\n.board-player .message {\n    background-color: rgba(32, 255, 0, 0.41);\n}\n\n.board-computer .message {\n    background-color: rgba(204, 255, 0, 0.41);\n}\n\n.row {\n    display: flex;\n    flex-direction: row;\n}\n\n.square:hover {\n    border-radius: 7px;\n    background-color: rgba(28, 119, 222, 0.569);\n    cursor: pointer;\n}\n\n.square {\n    background-color: rgba(255, 255, 255, 0.763);\n    margin: 1px;\n    height: 36px;\n    width: 36px;\n\n    &.ship {\n        background-color: rgba(128, 128, 128, 0.675);\n        border-radius: 7px;\n        pointer-events: none;\n    }\n\n    &.ship-hit {\n        border: rgba(255, 0, 111, 0.753) 5px solid;\n        background-color: rgba(128, 128, 128, 0.675);\n        border-radius: 7px;\n        pointer-events: none;\n    }\n\n    &.water-hit {\n        background-color: transparent;\n        pointer-events: none;\n    }\n}\n\n.square:active {\n    background-color: rgba(28, 119, 222, 0.916);\n}\n',""]);const s=i},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=n(u),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(h);else{var m=o(h,r);r.byIndex=s,t.splice(s,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var c=r(e,o),l=0;l<a.length;l++){var d=n(a[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=c}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0;var r=n(72),o=n.n(r),a=n(825),i=n.n(a),s=n(659),c=n.n(s),l=n(56),d=n.n(l),u=n(540),p=n.n(u),h=n(113),m=n.n(h),f=n(208),g={};g.styleTagTransform=m(),g.setAttributes=d(),g.insert=c().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=p(),o()(f.A,g),f.A&&f.A.locals&&f.A.locals;class b{constructor(e,t){this.length=e,this.type=t,this.hits=0}hit(){this.hits++}isSunk(){return this.length===this.hits}}class v{constructor(){this.ship=null,this.attack=!1,this.neighbor=!1}}class y{constructor(){this.board=this.createBoard(),this.allShips=[]}createBoard(){let e=[];for(let t=0;t<10;t++){let t=[];for(let e=0;e<10;e++){let e=new v;t.push(e)}e.push(t)}return e}placeShip(e,t,n,r){let o=this.#e(n),a=[];if("horizontal"==r)for(let n=t,r=n+o;n<r;n++)a.push([e,n]);else for(let n=e,r=n+o;n<r;n++)a.push([n,t]);for(let[e,t]of a){if(e>9||t>9)return!1;let n=this.board[e][t];if(n.ship||n.neighbor)return!1}let i=new b(o,n);for(let[e,t]of a)this.board[e][t].ship=i,this.#t(e,t);return this.allShips.push(i),!0}placeShipsRandom(){this.board=this.createBoard(),this.allShips=[],["carrier","battleship","destroyer","submarine","patrol boat"].forEach((e=>{for(;;){let t=Math.floor(10*Math.random()),n=Math.floor(10*Math.random()),r=0===Math.floor(2*Math.random())?"horizontal":"vertical";if(this.placeShip(t,n,e,r))break}}))}receiveAttack(e,t){let n=this.board[e][t];return n.ship?n.ship?n.attack?["ship",!1]:(n.ship.hit(),n.attack=!0,["ship",!0]):void 0:n.attack?["water",!1]:(n.attack=!0,["water",!0])}allShipsSunk(){return 0===this.allShips.filter((e=>{if(!1===e.isSunk())return e})).length}#e(e){return"carrier"===e?5:"battleship"===e?4:"destroyer"===e||"submarine"===e?3:"patrol boat"===e?2:void 0}#t(e,t){let n=[[e-1,t-1],[e-1,t],[e-1,t+1],[e,t-1],[e,t+1],[e+1,t-1],[e+1,t],[e+1,t+1]];for(let[e,t]of n)e<0||e>9||t<0||t>9||(this.board[e][t].neighbor=!0)}}function x(e=!1){const t=document.createElement("div"),n=document.createElement("div");n.classList.add("message-container");const r=document.createElement("div");r.classList.add("message"),n.appendChild(r),t.appendChild(n);for(let n=0;n<10;n++){const r=document.createElement("div");r.classList.add("row");for(let t=0;t<10;t++){const o=document.createElement("div");o.setAttribute("data-row",n),o.setAttribute("data-column",t),o.classList.add("square"),e&&e[n][t].ship&&o.classList.add("ship"),r.appendChild(o)}t.appendChild(r)}return t}function S(e){e.placeShipsRandom();let t=document.querySelector(".dialog__board-container");t.replaceChildren(),t.appendChild(x(e.board)),t.lastChild.classList.add("dialog__board"),document.querySelector("dialog .message").textContent="Select a position for your ships"}function C(e){if(e.target.classList.contains("square")){let t=e.target.getAttribute("data-row"),n=e.target.getAttribute("data-column"),[r,o]=L.receiveAttack(t,n);if(!o)return;let a=document.querySelector(".board-computer .message"),i=document.querySelector(".board-player .message"),s=document.querySelector(".board-player"),c=document.querySelector(".board-computer");if("ship"===r?(e.target.classList.add("ship-hit"),a.textContent="You hit a ship"):"water"===r&&(e.target.classList.add("water-hit"),a.textContent="You hit water"),L.allShipsSunk())return void(a.textContent="You have won the game");setTimeout((()=>{s.classList.remove("not-current-turn"),c.classList.add("not-current-turn"),a.textContent="",i.textContent="Computer moves  ..."}),1e3),setTimeout(w,2500)}}function w(){let e,t,n,r;for(;n=Math.floor(10*Math.random()),r=Math.floor(10*Math.random()),[e,t]=k.receiveAttack(n,r),!0!==t;);let o=document.querySelector(".board-computer .message"),a=document.querySelector(".board-player .message"),i=document.querySelector(".board-player"),s=document.querySelector(".board-computer"),c=`.board-player .square[data-row="${n}"][data-column="${r}"]`,l=document.querySelector(c);"ship"===e?(l.classList.add("ship-hit"),a.textContent="Computer hits a ship"):"water"===e&&(l.classList.add("water-hit"),a.textContent="Computer hits water"),k.allShipsSunk()?a.textContent="Computer has won the game":setTimeout((()=>{i.classList.add("not-current-turn"),s.classList.remove("not-current-turn"),a.textContent="",o.textContent="Your move ..."}),1500)}let k=new y,L=new y,q=document.querySelector("dialog");S(k),q.showModal(),document.querySelector(".dialog__button-random").addEventListener("click",(()=>{S(k)})),document.querySelector(".dialog__button-accept").addEventListener("click",(()=>{!function(e){const t=document.querySelector("body");t.appendChild(x(k.board));let n=t.lastChild;n.classList.add("board-player"),e.placeShipsRandom(),t.appendChild(x());let r=t.lastChild;r.classList.add("board-computer"),r.addEventListener("click",(e=>{C(e)})),n.classList.add("not-current-turn"),document.querySelector(".board-computer .message").textContent="Your move ...";let o=document.querySelector("dialog");o.close(),o.remove()}(L)}))})();