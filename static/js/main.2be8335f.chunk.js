(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{131:function(e,n,t){"use strict";t.r(n);var c,r,a=t(0),i=t.n(a),o=t(53),s=t.n(o),l=t(37),j=t.n(l),d=t(54),b=t(5),u=t(99),x=t.n(u),h=t(168),O=t(152),p=t(165),m=function(){var e=Object(d.a)(j.a.mark((function e(n){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(n);case 3:return t=e.sent,e.next=6,t.json();case 6:return c=e.sent,e.abrupt("return",c);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",{text:"not found"});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n){return e.apply(this,arguments)}}(),f=function(e,n){localStorage.setItem(e,JSON.stringify(n))},g=t(164),v=t(134),k=t(149),S=t(150),C=t(147),P=t(100),w=t(151),y=t(148),z=t(3),F=function(e){var n=Object(v.b)(),t=n.colorMode,c=n.toggleColorMode;return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(C.a,{children:Object(z.jsx)(P.b,{children:Object(z.jsx)(y.a,{children:Object(z.jsx)(g.a,{backgroundColor:"transparent",float:"right",margin:"3",onClick:c,children:"light"===t?Object(z.jsx)(k.a,{fontSize:"20"}):Object(z.jsx)(S.a,{fontSize:"20"})})})})}),Object(z.jsxs)(w.a,{marginTop:"40px",children:[Object(z.jsx)(O.a,{textAlign:"center",fontWeight:700,margin:"20px",fontSize:"30px",stroke:"black",color:"black.500",outline:"blue",children:"Pokemon Card"}),Object(z.jsxs)(y.a,{children:[" ",e.renderSearch()]}),Object(z.jsx)(y.a,{marginTop:"50px",children:e.renderCard()})]})]})},I=t(166),M=t(171),_=t(153),T=t(154),D=t(155),N=function(e){var n=e.debouncedSearch,t=Object(a.useState)(""),c=Object(b.a)(t,2),r=c[0],i=c[1];return Object(z.jsx)(M.a,{children:Object(z.jsxs)(_.a,{children:[Object(z.jsx)(T.a,{children:Object(z.jsx)(D.a,{verticalAlign:"middle",marginTop:"10px"})}),Object(z.jsx)(I.a,{placeholder:"Search by name or number",size:"lg",value:r,onChange:function(e){var t=e.target.value;i(t),n(t)}})]})})},A=t(14),J=t(70),L=t(71),B=t(160),E=t(157),R=t(158),W=t(159),q=Object(a.memo)((function(e){var n=e.savedPokemons,t=e.handlePokemonSave,c=e.handlePokemonDelete,r=e.pokemon,a=e.view,i=r.id,o=r.abilities,s=r.name,l=r.sprites,j=r.types;return Object(z.jsx)(z.Fragment,{children:"default"===a?Object(z.jsx)(z.Fragment,{children:n.filter((function(e){return e.id===i})).length>0?Object(z.jsx)(E.a,{color:"yellow.300",w:8,h:8}):Object(z.jsx)(g.a,{size:"md",onClick:function(){return t({id:i,name:s,abilities:o,sprites:{front_default:l.front_default},types:j})},leftIcon:Object(z.jsx)(R.a,{color:"blackAlpha.300"}),colorScheme:"green",variant:"solid",children:"Save"})}):Object(z.jsx)(g.a,{size:"md",onClick:function(){return c(n,i)},leftIcon:Object(z.jsx)(W.a,{color:"white"}),colorScheme:"red",variant:"solid",children:"Delete"})})})),G=L.a.div(c||(c=Object(J.a)(["\n  div:first-child {\n    background-color: #f2f9ff;\n  }\n\n  h6 {\n    padding: 4px; 6px;\n    color: grey\n  }\n\n  div.actions__section {\n   display: flex;\n\n    p {\n    font-weight: 500;\n    padding: 4px; 6px;\n    font-size: 20px;\n    }\n    button {\n      margin-left: auto;\n      margin-right: 10px\n    }\n\n    svg {\n      margin-left: auto;\n      margin-right: 10px;\n      font-size: 20px;\n    }\n  }\n\n  img {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 230px;\n  }\n"]))),H=function(e){var n=e.pokemon,t=e.savedPokemons,c=e.setSavedPokemons,r=e.view,a=n.abilities,i=n.name,o=n.sprites,s=n.types;return Object(z.jsx)(y.a,{borderWidth:"1px",borderRadius:"lg",overflow:"hidden",children:Object(z.jsxs)(G,{children:[Object(z.jsx)("div",{children:Object(z.jsx)("img",{src:o.front_default,alt:i})}),Object(z.jsxs)("div",{children:[Object(z.jsx)("h6",{children:"Name"}),Object(z.jsxs)("div",{className:"actions__section",children:[Object(z.jsx)("p",{children:i}),Object(z.jsx)(q,{savedPokemons:t,handlePokemonSave:function(e){c([].concat(Object(A.a)(t),[e])),f("savedPokemons",[].concat(Object(A.a)(t),[e]))},handlePokemonDelete:function(e,n){var t=e.filter((function(e){return e.id!==n}));c(Object(A.a)(t)),f("savedPokemons",Object(A.a)(t))},pokemon:n,view:r})]})]}),Object(z.jsxs)("div",{children:[Object(z.jsx)("h6",{children:"Abilities"}),Object(z.jsx)("div",{children:a.map((function(e){var n=e.ability.name,t=e.slot;return Object(z.jsx)(B.a,{size:"md",variant:"outline",colorScheme:"blue",margin:"5px 3px",children:Object(z.jsx)(B.b,{children:n})},t)}))})]}),Object(z.jsxs)("div",{children:[Object(z.jsx)("h6",{children:"Types"}),Object(z.jsx)("div",{children:s.map((function(e){var n=e.type.name,t=e.slot;return Object(z.jsx)(B.a,{size:"md",variant:"outline",colorScheme:"blue",margin:"5px 3px",children:Object(z.jsx)(B.b,{children:n})},t)}))})]})]})})},K=t(172),Q=t(27),U=Object(a.memo)((function(e){var n=e.isOpen,t=e.onClose,c=e.savedPokemons,r=e.setSavedPokemons;return Object(z.jsx)(z.Fragment,{children:Object(z.jsxs)(K.a,{isOpen:n,placement:"left",onClose:t,children:[Object(z.jsx)(Q.f,{}),Object(z.jsxs)(K.b,{children:[Object(z.jsx)(Q.c,{}),Object(z.jsx)(Q.e,{children:"Saved Cards"}),Object(z.jsx)(Q.b,{children:c.map((function(e){return Object(z.jsx)("div",{style:{margin:"10px 0px"},children:Object(z.jsx)(H,{savedPokemons:c,pokemon:e,setSavedPokemons:r,view:"drawer"},e.id)})}))})]})]})})})),V=L.a.div(r||(r=Object(J.a)(["\n  display: block;\n  margin: auto;\n  text-align: center;\n\n  p {\n    font-size: 20px;\n    font-weight: 700;\n  }\n  span {\n    font-size: 20px;\n  }\n"]))),X=function(){return Object(z.jsx)(V,{children:Object(z.jsxs)("p",{children:["Details Not Found ",Object(z.jsx)("span",{children:"\ud83d\ude14"})]})})};var Y=function(){var e=Object(a.useState)(""),n=Object(b.a)(e,2),t=n[0],c=n[1],r=Object(a.useState)({}),i=Object(b.a)(r,2),o=i[0],s=i[1],l=Object(a.useState)(!1),u=Object(b.a)(l,2),f=u[0],g=u[1],v=Object(h.a)(),k=v.isOpen,S=v.onOpen,C=v.onClose,P=Object(a.useState)(function(e){if(localStorage.getItem(e))return JSON.parse(localStorage.getItem(e))}("savedPokemons")||[]),w=Object(b.a)(P,2),y=w[0],I=w[1];Object(a.useEffect)((function(){var e=function(){var e=Object(d.a)(j.a.mark((function e(n){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="string"===typeof n?n.toLowerCase():n,g(!0),e.next=4,m("https://pokeapi.co/api/v2/pokemon/".concat(n,"?limit=10"));case 4:t=e.sent,s(t),g(!1);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();t&&e(t)}),[t]);var M=Object(a.useCallback)(x()((function(e){e?c(e):(c(""),s([]))}),1e3),[]),_=function(){S()};return Object(z.jsx)(z.Fragment,{children:Object(z.jsx)(F,{renderSearch:function(){return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(N,{debouncedSearch:M}),y.length>0&&Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(O.a,{as:"u",paddingRight:"8px",cursor:"pointer",color:"blue",float:"right",onClick:_,children:"Saved"}),k&&Object(z.jsx)(U,{isOpen:k,onClose:C,savedPokemons:y,setSavedPokemons:I})]})]})},renderCard:function(){return f?Object(z.jsx)(p.a,{h:300}):!f&&Object.keys(o).length>0&&!o.hasOwnProperty("text")?Object(z.jsx)(H,{pokemon:o,savedPokemons:y,setSavedPokemons:I,view:"default"}):t&&"not found"===o.text?Object(z.jsx)(X,{}):null}})})},Z=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,173)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,a=n.getLCP,i=n.getTTFB;t(e),c(e),r(e),a(e),i(e)}))},$=t(162),ee=t(161),ne=Object(ee.a)({config:{initialColorMode:"light",useSystemColorMode:!1}}),te=t(167);s.a.render(Object(z.jsxs)(i.a.StrictMode,{children:[Object(z.jsx)($.a,{initialColorMode:ne.config.initialColorMode}),Object(z.jsx)(te.a,{children:Object(z.jsx)(Y,{})})]}),document.getElementById("root")),Z()}},[[131,1,2]]]);
//# sourceMappingURL=main.2be8335f.chunk.js.map