(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{599:function(e,t,n){e.exports={handler:"handler--33lmYD_l",head:"head--_i6MLAIb",reset:"reset--3ipKCEtw",autoComplete:"autoComplete--2QkmBYRp",btnCover:"btnCover--3nkeFAiQ",content:"content--bs0srol_",textContent:"textContent--1s4lUJzJ",container:"container--1zGFaRPo",socketUrlInput:"socketUrlInput---Nx70rT2",connect:"connect--1nXEK20A",btn:"btn--1Q32aFEv",checkbox:"checkbox--qyRh0Ue- btn--1Q32aFEv",tips:"tips--MwTJx_oS"}},660:function(e,t,n){e.exports={browse:"browse--1Z8yXncC",message:"message--2vMGgree",messageHeader:"messageHeader--QDKhDvI9",content:"content--pK3X7czS"}},751:function(e,t,n){e.exports={container:"container--1_yRc3V0"}},782:function(e,t){},861:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(751),c=n.n(r),s=n(599),l=n.n(s),i=(n(172),n(573),n(528)),d=n.n(i),u=n(170),m=n(517),k=n(14),v=n(103);var p=Object(u.b)((function(){var e=Object(m.a)().socketStore;return a.a.createElement(d.a.Group,{onChange:function(t){var n=t.target.value;e.setSocketType(n),localStorage.setItem(k.c.SOCKET_TYPE,n)},value:e.socketType,disabled:e.socketIsConnected},v.b.map(e=>a.a.createElement(d.a.Button,{value:e,key:e},e)))})),f=(n(264),n(122)),h=n.n(f);var g=Object(u.b)((function(){var e=Object(m.a)().socketStore;return a.a.createElement(h.a,{value:e.dataFormat,style:{width:120},onChange:function(t){e.setDataFormat(t),localStorage.setItem(k.c.DATA_FORMAT,t)}},v.a.map(e=>a.a.createElement(h.a.Option,{key:e,value:e},e)))})),S=(n(123),n(265),n(48),n(47),n(174),n(55),n(515),n(514)),b=n.n(S),y=(n(574),n(519)),E=n.n(y),w=(n(521),n(533)),O=n.n(w),C=(n(177),n(42)),I=n.n(C),N=n(81),j=n(756),x=n.n(j),T=n(785),M=n.n(T),_=n(2),A=M()(x.a.Manager);var P=new class{constructor(){this.socket=void 0}send(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.socket&&this.socket.connected?this.socket.emit(e,t):n<3&&setTimeout(()=>{this.send(t,n++)},300)}open(e){var t=["websocket"];N.socketStore.notSupportPolling||t.unshift("polling"),this.socket=x.a.connect(e,{reconnectionDelay:1e3,reconnection:!0,reconnectionAttempts:5,transports:t}),A(this.socket),Object(_.reaction)(()=>N.socketStore.socketType,(e,t)=>{this.socket.close(),t.dispose()}),this.socket.on("reconnect",e=>{var t=`socket reconnect after attempt ${e} times !!!`;N.socketStore.addMessage({event:"reconnect",from:"console",data:t})}),this.socket.on("disconnect",e=>{N.socketStore.setSocketIsConnected(!1);var t=`socket disconnect because: ${e} !!!`;N.socketStore.addMessage({event:"disconnect",from:"console",data:t})}),this.socket.on("connect_timeout",e=>{var t=`socket connect_timeout: ${e} !!!`;N.socketStore.addMessage({event:"connect_timeout",from:"console",data:t})}),this.socket.on("connect_error",e=>{N.socketStore.addMessage({event:"connect_error",from:"console",data:"socket connect_error !!!"}),console.warn(e)}),this.socket.on("error",e=>{N.socketStore.setSocketIsConnected(!1);N.socketStore.addMessage({event:"error",from:"console",data:"socket error !!!"}),console.warn(e)}),this.socket.on("connect",()=>{N.socketStore.setSocketIsConnected(!0);N.socketStore.addMessage({event:"connect",from:"console",data:"socket connected !!!"})}),this.socket.on("ping",()=>{N.socketStore.addMessage({event:"ping",from:"browser",data:null})}),this.socket.on("pong",()=>{N.socketStore.addMessage({event:"pong",from:"server",data:null})}),this.socket.on("*",e=>{if(console.log("on all socket callback: ",e),e&&e.data instanceof Array&&e.data.length>1){var t=e.data[0],n=e.data[1];N.socketStore.addMessage({event:t,from:"server",data:n})}})}};function R(e){if(P.socket&&P.socket.connected)return I.a.error("Please disconnect the existing instance!!!");P.open(e)}var J=n(787),F=null,K=!1;class U extends J.EventEmitter{constructor(){super(),this.onopen=void 0,this.onmessage=void 0,this.conn=null,this.run()}run(){this.onopen=()=>{N.socketStore.setSocketIsConnected(!0),N.socketStore.addMessage({event:"connect",from:"console",data:"socket connected !!!"})},this.onmessage=e=>{e&&e.data&&N.socketStore.addMessage({event:"message",from:"server",data:"object"==typeof e.data?JSON.stringify(e.data):e.data})}}send(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.conn&&this.conn.readyState===this.conn.OPEN?this.conn.send("object"==typeof e?JSON.stringify(e):e):t<3&&setTimeout(()=>{this.send(e,t++)},300)}open(e){return this.conn=new WebSocket(e),this.conn.onclose=t=>{N.socketStore.setSocketIsConnected(!1);var n=`socket close: ${"object"==typeof t?t.code:""}`;N.socketStore.addMessage({event:"close",from:"console",data:n}),clearTimeout(F),K||(F=window.setTimeout(()=>{this.open(e)},3e3)),K=!1},this.conn.onerror=e=>{N.socketStore.setSocketIsConnected(!1);var t=`socket error: ${"object"==typeof e?JSON.stringify(e.code):""}`;N.socketStore.addMessage({event:"error",from:"console",data:t})},Object(_.reaction)(()=>N.socketStore.socketType,(e,t)=>{clearTimeout(F),t.dispose()}),this.onopen&&(this.conn.onopen=this.onopen),this.onmessage&&(this.conn.onmessage=this.onmessage),this}}var H=new U;function D(e){if(H.conn&&H.conn.readyState===H.conn.OPEN)return I.a.error("Please disconnect the existing instance!!!");H.open(e)}var z=e=>N.socketStore.isSocketIO?R(e):D(e),Q=()=>N.socketStore.isSocketIO?void(P.socket&&P.socket.connected&&P.socket.close()):(H.conn&&H.conn.readyState===H.conn.OPEN&&H.conn.close(),void(K=!0)),$=(e,t)=>N.socketStore.isSocketIO?function(e,t){if(!P.socket||!P.socket.connected)return I.a.error("Please connect to server!!!");P.send(e,t),N.socketStore.addMessage({event:e,from:"browser",data:t})}(e,t):function(e,t){if(!H.conn&&H.conn.readyState!==H.conn.OPEN)return I.a.error("Please connect to server!!!");H.send(t),N.socketStore.addMessage({event:null,from:"browser",data:t})}(0,t);function B(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],o=!0,a=!1,r=void 0;try{for(var c,s=e[Symbol.iterator]();!(o=(c=s.next()).done)&&(n.push(c.value),!t||n.length!==t);o=!0);}catch(e){a=!0,r=e}finally{try{o||null==s.return||s.return()}finally{if(a)throw r}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var L=Object(u.b)((function(){var e=Object(m.a)().socketStore,t=B(a.a.useState(localStorage.getItem(k.c.SOCKET_URL)),2),n=t[0],o=t[1];return a.a.createElement("div",{className:l.a.container},a.a.createElement("div",{className:l.a.connect},a.a.createElement(O.a,{className:l.a.socketUrlInput,value:n,onChange:function(e){var t=e.target.value;o(t),localStorage.setItem(k.c.SOCKET_URL,t)}}),e.isSocketIO&&a.a.createElement(E.a,{disabled:e.socketIsConnected,className:l.a.checkbox,checked:e.notSupportPolling,onChange:t=>e.setNotSupportPolling(t.target.checked)},"no polling"),a.a.createElement(b.a,{className:l.a.btn,type:"primary",onClick:function(){if(!n)return I.a.destroy(),I.a.error("Please input socket url!");z(n),e.clearMessages()},disabled:e.socketIsConnected},"connect"),a.a.createElement(b.a,{className:l.a.btn,type:"danger",onClick:Q,disabled:!e.socketIsConnected},"disconnect")),a.a.createElement("blockquote",{className:l.a.tips},"protocol//ip or domain:host (example:"," ",e.isSocketIO?"wss://showcase.jackple.com":"ws://127.0.0.1:3001",")"))})),Y=(n(273),n(73),n(274),n(605),n(611)),G=n.n(Y),V=(n(607),n(610)),W=n.n(V),X=(n(789),n(792)),q=n.n(X),Z=n(791),ee=n.n(Z);function te(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],o=!0,a=!1,r=void 0;try{for(var c,s=e[Symbol.iterator]();!(o=(c=s.next()).done)&&(n.push(c.value),!t||n.length!==t);o=!0);}catch(e){a=!0,r=e}finally{try{o||null==s.return||s.return()}finally{if(a)throw r}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var ne=localStorage.getItem(k.c.SOCKET_IO_EVENTS),oe=ne?JSON.parse(ne):[];oe.length>30&&(oe=oe.slice(0,30));var ae=Object(u.b)((function(){var e=Object(m.a)().socketStore,t=te(a.a.useState(""),2),n=t[0],o=t[1],r=te(a.a.useState(""),2),c=r[0],s=r[1],i=te(a.a.useState({}),2),d=i[0],u=i[1],p=te(a.a.useState(""),2),f=p[0],h=p[1],g=te(a.a.useState(oe),2),S=g[0],y=g[1],E=te(a.a.useState(!1),2),w=E[0],C=E[1],N=a.a.useMemo(()=>!(e.isSocketIO&&!f)&&e.socketIsConnected,[e.isSocketIO,f,e.socketIsConnected]),j=a.a.useMemo(()=>e.dataFormat===v.a[0]?d:c,[e.dataFormat,d,c]);function x(){C(e=>!e)}return a.a.createElement("div",null,e.isSocketIO&&a.a.createElement(q.a,{className:l.a.autoComplete,dataSource:S,placeholder:"Input event name",value:f,onChange:e=>h(e),filterOption:(e,t)=>t.props.children.toUpperCase().includes(e.toUpperCase())}),e.dataFormat===v.a[0]?a.a.createElement("div",{className:l.a.content},a.a.createElement("div",{className:l.a.reset},a.a.createElement(W.a,{placement:"topLeft",title:"Confirm to reset?",onConfirm:()=>u({})},a.a.createElement(b.a,null,"Reset")),a.a.createElement(b.a,{className:l.a.btnCover,type:"primary",onClick:x},"Custom"),a.a.createElement(G.a,{title:"Custom data",style:{top:20},visible:w,onOk:function(){try{u(JSON.parse(n)),x()}catch(e){console.error(e),I.a.destroy(),I.a.error("Please input json string!")}},onCancel:x},a.a.createElement(O.a.TextArea,{placeholder:"Please input json string",autoSize:{minRows:4,maxRows:10},value:n,onChange:e=>{var t=e.target;return o(t.value)}}))),a.a.createElement(ee.a,{name:!1,theme:"monokai",style:{padding:10,minHeight:150,maxHeight:500,overflow:"auto",borderRadius:3,wordWrap:"break-word",wordBreak:"break-all"},onAdd:e=>{var t=e.updated_src;return u(t)},onEdit:e=>{var t=e.updated_src;return u(t)},onDelete:e=>{var t=e.updated_src;return u(t)},src:d})):a.a.createElement(O.a.TextArea,{className:l.a.textContent,placeholder:"Input your sending content",autoSize:{minRows:4,maxRows:10},value:c,onChange:e=>{var t=e.target;return s(t.value)}}),a.a.createElement(b.a,{block:!0,size:"large",disabled:!N,type:"primary",onClick:function(){if(!e.isSocketIO)return $(null,j);if(!f)return I.a.destroy(),I.a.error("Please input event name!");if(!S.includes(f)){var t=[f,...S];y(t),localStorage.setItem(k.c.SOCKET_IO_EVENTS,JSON.stringify(t))}$(f,j)}},"Send"))}));var re=function(){return a.a.createElement("div",{className:l.a.handler},a.a.createElement("div",{className:l.a.head},a.a.createElement(p,null),a.a.createElement(g,null)),a.a.createElement(L,null),a.a.createElement(ae,null))},ce=n(854),se=n(852),le=n(851),ie=n(660),de=n.n(ie),ue=n(192),me=(n(617),n(619)),ke=n.n(me),ve=n(119),pe=n.n(ve);var fe=Object(u.b)((function(e){var t=e.message,n=e.style,o=Object(u.c)(()=>({get time(){return pe()(t.time).format("h:mm:ss a")},get color(){return"browser"===t.from?"#87d068":"server"===t.from?"#2db7f5":"#108ee9"},get fromText(){return"browser"===t.from?"You":"server"===t.from?"Server":"Console"},get content(){return t.data?"object"==typeof t.data?JSON.stringify(t.data):t.data:null}}));return a.a.createElement("div",{className:de.a.message,style:n},a.a.createElement("div",{className:de.a.messageHeader,style:{marginBottom:o.content?5:0}},t.event&&a.a.createElement(ke.a,{color:"#f50"},t.event),a.a.createElement(ke.a,{color:o.color},o.fromText),a.a.createElement("span",null,o.time)),a.a.createElement("div",{className:de.a.content},o.content))}));var he=Object(u.b)((function(){var e=Object(m.a)().socketStore,t=a.a.useRef(null),n=new se.b({fixedWidth:!0,minHeight:43});function o(e){if(0===e)return n.clearAll();t.current&&t.current.scrollToRow(e-1)}function r(t){var o=t.index,r=t.key,c=t.parent,s=t.style,l=e.messages[o];return a.a.createElement(se.a,{cache:n,columnIndex:0,key:r,parent:c,rowIndex:o},a.a.createElement(fe,{style:s,message:l}))}Object(ue.a)((function(){return Object(_.reaction)(()=>e.messages.length,o)}));var c=e.messages.length;return a.a.createElement("div",{className:de.a.browse},a.a.createElement(ce.a,null,e=>{var o=e.width,s=e.height;return a.a.createElement(le.a,{width:o,height:s,ref:t,overscanRowCount:0,rowCount:c,deferredMeasurementCache:n,rowHeight:n.rowHeight,rowRenderer:r})}))}));t.default=function(){return a.a.createElement("div",{className:c.a.container},a.a.createElement(re,null),a.a.createElement(he,null))}}}]);
//# sourceMappingURL=socket-debugger.16.339cb3a97a080f3c27b9.js.map