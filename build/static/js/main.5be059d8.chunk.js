(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{42:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c,r=n(32),a=(n(42),n(27),n(4)),o=function(e){var t=e.onSubmit;return Object(a.jsx)("div",{className:"center",children:Object(a.jsx)("button",{onClick:t,className:"button button4 mx-4",children:Object(a.jsx)("h1",{children:"+"})})})},i=n(24),b=n(17),j=(n(2),n(61)),s=n(64);var l=Object(j.a)(c||(c=Object(b.a)(["\nmutation AddNewColor($hex: String!, $rgb: String!) {\n  insert_color(objects: {hex: $hex, rgb: $rgb}) {\n    affected_rows\n  }\n}\n"])));function d(){var e,t=Object(s.a)(l),n=Object(i.a)(t,1)[0],c="#"+Math.floor(16777215*Math.random()).toString(16),r="rgb("+(e=(e=c).replace("#","")).match(new RegExp("(.{"+e.length/3+"})","g")).map((function(t){return parseInt(e.length%2?t+t:t,16)})).join(",")+")";return Object(a.jsx)(o,{onSubmit:function(){n({variables:{hex:c,rgb:r}})}})}var h,x,u=n(60),O=n(63),p=n(62),m=n(59),g=n(66),f=(n(46),n(10)),w=Object(j.a)(h||(h=Object(b.a)(["\n  {\n  color {\n    id\n    hex\n    label\n    rgb\n  }\n  }\n"]))),v=Object(j.a)(x||(x=Object(b.a)(["\nmutation MyMutation($id: Int!) {\n  delete_color(where: {id: {_eq: $id}}) {\n    affected_rows\n  }\n}\n"])));function y(){var e=Object(g.a)(w),t=e.loading,n=e.error,c=e.data,r=Object(s.a)(v),o=Object(i.a)(r,1)[0];return t?Object(a.jsx)("p",{children:"loading..."}):n?Object(a.jsx)("p",{children:"error"}):c.color.map((function(e){var t=e.id,n=e.hex,c=e.label,r=e.rgb;return Object(a.jsx)("div",{style:{right:"20px"},children:Object(a.jsx)(f.a,{className:"my-4 mx-4",style:{width:"16rem"},children:Object(a.jsxs)(f.a.Body,{children:[Object(a.jsx)("p",{contenteditable:"true",children:Object(a.jsx)("h2",{children:c})}),Object(a.jsx)("button",{onClick:function(){o({variables:{id:"".concat(t)}})},className:"del mb-2 text-muted",style:{height:"80px",width:"100%",backgroundColor:"".concat(n)}}),Object(a.jsxs)(f.a.Text,{children:["HEX: ",n]}),Object(a.jsx)(f.a.Text,{children:r}),Object(a.jsx)(f.a.Text,{})]})},t)})}))}var k=new u.a({cache:new O.a,link:new p.a({headers:{"content-type":"application/json","x-hasura-admin-secret":"M28GcowM84zPTQ0KtxMHj9Q30OQwoO6Z3k95Ap4V9Zr2opLGfT5PRdR7rUwZRkv0"},uri:"https://demoxyz.hasura.app/v1/graphql"})}),M=function(){return Object(a.jsxs)(m.a,{client:k,children:[Object(a.jsx)(y,{}),Object(a.jsx)(d,{})]})};Object(r.render)(Object(a.jsx)(M,{}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.5be059d8.chunk.js.map