(this.webpackJsonptarea3=this.webpackJsonptarea3||[]).push([[0],{97:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),s=n(26),r=n.n(s),a=n(6),o=n(22),l=n(99),j=n(109),d=n(100),h=n(101),u=n(102),b=(n(60),n(7)),O=n.n(b),x=n(51),f=n(52),p=n(53),m=n.n(p)()("wss://tarea-3-websocket.2021-1.tallerdeintegracion.cl",{path:"/flights"}),g=n(1),v=O.a.icon({iconUrl:x.a,shadowUrl:f.a,iconSize:[12,18],iconAnchor:[6,18],shadowSize:[0,0]});O.a.Marker.prototype.options.icon=v;var S=function(e){var t=e.flights,n=Object(c.useState)(t),s=Object(a.a)(n,2),r=s[0],b=s[1];return Object(c.useEffect)((function(){return m.on("POSITION",(function(e){b((function(t){for(var n=null,c=0;c<t.length;c++){var i=t[c];i.code===e.code&&(n=i,i.destination===e.position?n.positions=[i.origin]:(n.positions=Object(o.a)(new Set(i.positions)),n.positions.push(e.position)))}var s=t.filter((function(t){return t.code!==e.code}));return[].concat(Object(o.a)(s),[n])}))})),function(){m.off()}}),[]),Object(g.jsxs)(l.a,{center:[-35,-60],zoom:4.5,scrollWheelZoom:!1,style:{height:"60vh",width:"60wh"},children:[Object(g.jsx)(j.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),r?r.map((function(e){return Object(g.jsx)(i.a.Fragment,{children:e.positions.length>0?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(d.a,{position:e.positions[e.positions.length-1],children:Object(g.jsx)(h.a,{children:e.code})},e.code),Object(g.jsx)(u.a,{positions:e.positions,pathOptions:{color:"black"}})]}):null})})):null,r?r.map((function(e){var t=e.color;return Object(g.jsx)(i.a.Fragment,{children:Object(g.jsx)(u.a,{positions:[e.origin,e.destination],pathOptions:{color:t}})})})):null]})},y=n(103),N=function(e){var t=e.user,n=Object(c.useState)([]),i=Object(a.a)(n,2),s=i[0],r=i[1],l=Object(c.useRef)(null);return Object(c.useEffect)((function(){return m.on("CHAT",(function(e){r((function(t){return[].concat(Object(o.a)(t),[e])}))})),function(){m.off()}}),[]),Object(c.useEffect)((function(){l&&l.current.addEventListener("DOMNodeInserted",(function(e){var t=e.currentTarget;t.scroll({top:t.scrollHeight,behavior:"smooth"})}))}),[]),Object(g.jsx)(y.a,{className:"d-flex",children:Object(g.jsx)("div",{className:"overflow-auto",style:{height:380,width:600},ref:l,children:Object(g.jsx)("div",{className:"d-flex flex-column align-items-start justify-content-end px-3",children:s.map((function(e){return Object(g.jsxs)("div",{className:"my-1 d-flex flex-column ".concat(e.name===t?"align-self-end align-items-end":"align-items-start"),children:[Object(g.jsx)("div",{className:"rounded px-2 py-1 ".concat(e.name===t?"bg-primary text-white":"border"),children:e.message}),Object(g.jsxs)("div",{className:"text-muted small ".concat(e.name===t?"text-right":""),children:[e.name===t?"You":e.name," ",Object(g.jsx)("br",{}),"Fecha: ",Date(e.date)]})]})}))})})})},w=n(104),E=n(54),L=n(107),A=n(105),C=n(108),I=n(106),z=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)(""),r=Object(a.a)(s,2),o=r[0],l=r[1],j=Object(c.useState)(""),d=Object(a.a)(j,2),h=d[0],u=d[1],b=Object(c.useState)(""),O=Object(a.a)(b,2),x=O[0],f=O[1];Object(c.useEffect)((function(){return m.emit("FLIGHTS"),function(){m.off()}}),[]),Object(c.useEffect)((function(){return m.on("FLIGHTS",(function(e){i((function(t){for(var n=[],c=0;c<e.length;c++){var i=e[c];i.positions=[],i.color="#"+Math.floor(16777215*Math.random()).toString(16),n.push(i)}return n}))})),function(){m.off()}}),[]);return Object(g.jsxs)(y.a,{fluid:!0,children:[Object(g.jsxs)(w.a,{children:[Object(g.jsx)(E.a,{children:Object(g.jsx)("h3",{children:" Mapa en vivo"})}),Object(g.jsx)(E.a,{children:Object(g.jsxs)("h3",{children:["Chat en vivo. Usuario en l\xednea: ",o||"No hay usuario"," "]})})]}),Object(g.jsxs)(w.a,{children:[Object(g.jsx)(E.a,{children:0!==n.length?Object(g.jsx)(S,{flights:n}):null}),Object(g.jsxs)(E.a,{className:"d-flex flex-column",children:[Object(g.jsx)(N,{user:o}),o?Object(g.jsx)(L.a,{onSubmit:function(e){!function(e){m.emit("CHAT",{name:o,message:x}),f(""),e.preventDefault()}(e)},children:Object(g.jsx)(L.a.Group,{className:"m-2",children:Object(g.jsxs)(A.a,{children:[Object(g.jsx)(L.a.Control,{as:"textarea",required:!0,value:x,onChange:function(e){return f(e.target.value)},style:{height:"75px",resize:"none"}}),Object(g.jsx)(A.a.Append,{children:Object(g.jsx)(C.a,{type:"submit",children:"Enviar"})})]})})}):Object(g.jsx)(L.a,{onSubmit:function(e){l(h),e.preventDefault()},title:"Login",children:Object(g.jsx)(L.a.Group,{className:"m-2",children:Object(g.jsxs)(A.a,{children:[Object(g.jsx)(L.a.Control,{as:"textarea",required:!0,value:h,onChange:function(e){return u(e.target.value)},placeholder:"Escriba su nombre para poder participar en el chat",style:{height:"75px",resize:"none"}}),Object(g.jsx)(A.a.Append,{children:Object(g.jsx)(C.a,{type:"submit",children:"Login"})})]})})})]})]}),Object(g.jsxs)(w.a,{children:[Object(g.jsx)(C.a,{variant:"primary",onClick:function(e){m.emit("FLIGHTS")},children:"Actualizar Informaci\xf3n de los vuelos"}),n?Object(g.jsxs)(I.a,{striped:!0,bordered:!0,hover:!0,responsive:!0,children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{children:"Vuelo"}),Object(g.jsx)("th",{children:"Aerolinea"}),Object(g.jsx)("th",{children:"Origen"}),Object(g.jsx)("th",{children:"Destino"}),Object(g.jsx)("th",{children:"Avi\xf3n"}),Object(g.jsx)("th",{children:"Cantidad de Asientos"}),Object(g.jsx)("th",{children:"Pasajeros"})]})}),Object(g.jsx)("tbody",{children:n.map((function(e){return Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:e.code}),Object(g.jsx)("td",{children:e.airline}),Object(g.jsxs)("td",{children:["Latitud:",e.origin[0],", Longitud:",e.origin[1]]}),Object(g.jsxs)("td",{children:["Latitud:",e.destination[0],", Longitud:",e.destination[1]]}),Object(g.jsx)("td",{children:e.plane}),Object(g.jsx)("td",{children:e.seats}),Object(g.jsx)("td",{colspan:e.passengers.length,children:e.passengers.map((function(e){return Object(g.jsxs)("td",{children:[Object(g.jsxs)("tr",{children:["Nombre: ",e.name]}),Object(g.jsxs)("tr",{children:["Edad: ",e.age]})]})}))})]})}))})]}):null]})]})};n(96);r.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(z,{})}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.086863af.chunk.js.map