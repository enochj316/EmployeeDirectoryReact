(this["webpackJsonpemployee-dir"]=this["webpackJsonpemployee-dir"]||[]).push([[0],{20:function(e,t,a){},21:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(13),c=a.n(s),i=(a(20),a(3)),d=a(15),o=(a(21),r.a.createContext({})),l=a(0),j=function(){var e=Object(n.useContext)(o);function t(e){var t=e.split("-"),a=t[0];return[t[1],t[2].split("T")[0],a].join("-")}return Object(l.jsx)("tbody",{children:void 0!==e.developerState.filteredUsers[0]&&void 0!==e.developerState.filteredUsers[0].name?e.developerState.filteredUsers.map((function(e){var a=e.login,n=e.name,r=e.picture,s=e.phone,c=e.email,i=e.dob;return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{"data-th":"Image",className:"align-middle",children:Object(l.jsx)("img",{src:r.medium,alt:"profile image for "+n.first+" "+n.last,className:"img-responsive"})}),Object(l.jsxs)("td",{"data-th":"Name",className:"name-cell align-middle",children:[n.first," ",n.last]}),Object(l.jsx)("td",{"data-th":"Phone",className:"align-middle",children:s}),Object(l.jsx)("td",{"data-th":"Email",className:"align-middle",children:Object(l.jsx)("a",{href:"mailto:"+c,target:"__blank",children:c})}),Object(l.jsx)("td",{"data-th":"DOB",className:"align-middle",children:t(i.date)})]},a.uuid)})):Object(l.jsx)(l.Fragment,{})})},u=(a(23),function(){var e=Object(n.useContext)(o);return Object(l.jsx)("div",{className:"datatable mt-5",children:Object(l.jsxs)("table",{id:"table",className:"table table-striped table-hover table-condensed",children:[Object(l.jsx)("thead",{children:Object(l.jsx)("tr",{children:e.developerState.headings.map((function(t){var a=t.name,n=t.width;return Object(l.jsxs)("th",{className:"col",style:{width:n},onClick:function(){e.handleSort(a)},children:[a,Object(l.jsx)("span",{className:"pointer"})]},a)}))})}),Object(l.jsx)(j,{})]})})}),h=(a(24),function(){var e=Object(n.useContext)(o);return Object(l.jsx)("div",{className:"searchbox",children:Object(l.jsxs)("div",{className:"input-group",children:[Object(l.jsx)("div",{className:"input-group-prepend",children:Object(l.jsx)("span",{className:"input-group-text",id:"",children:"Search"})}),Object(l.jsx)("input",{className:"form-control mr-sm-2",type:"search",placeholder:"name","aria-label":"Search",onChange:function(t){return e.handleSearchChange(t)}})]})})});a(25);var b=function(){return Object(l.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsx)("div",{className:"collapse navbar-collapse row",id:"navbarNav",children:Object(l.jsx)("div",{className:"search-area col-4",children:Object(l.jsx)(h,{})})})]})},m=a(14),f=a.n(m),v=function(){return f.a.get("https://randomuser.me/api/?results=200&nat=us")},O=(a(44),function(){var e=Object(n.useState)({users:[],order:"descend",filteredUsers:[],headings:[{name:"Image",width:"10%",order:"descend"},{name:"name",width:"10%",order:"descend"},{name:"phone",width:"20%",order:"descend"},{name:"email",width:"20%",order:"descend"},{name:"dob",width:"10%",order:"descend"}]}),t=Object(d.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){v().then((function(e){console.log(e.data.results),r(Object(i.a)(Object(i.a)({},a),{},{users:e.data.results,filteredUsers:e.data.results}))}))}),[]),Object(l.jsxs)(o.Provider,{value:{developerState:a,handleSearchChange:function(e){var t=e.target.value,n=a.users.filter((function(e){var a=e.name.first.toLowerCase()+" "+e.name.last.toLowerCase();if(console.log(t,a),-1!==a.indexOf(t.toLowerCase()))return e}));r(Object(i.a)(Object(i.a)({},a),{},{filteredUsers:n}))},handleSort:function(e){var t=a.headings.filter((function(t){return t.name===e})).map((function(e){return e.order})).toString();t="descend"===t?"ascend":"descend";var n=a.filteredUsers.sort((function(a,n){return"ascend"===t?void 0===a[e]?1:void 0===n[e]?-1:"name"===e?a[e].first.localeCompare(n[e].first):"dob"===e?a[e].age-n[e].age:a[e].localeCompare(n[e]):void 0===a[e]?1:void 0===n[e]?-1:"name"===e?n[e].first.localeCompare(a[e].first):"dob"===e?n[e].age-a[e].age:n[e].localeCompare(a[e])})),s=a.headings.map((function(a){return a.order=a.name===e?t:a.order,a}));r(Object(i.a)(Object(i.a)({},a),{},{filteredUsers:n,headings:s}))}},children:[Object(l.jsx)(b,{}),Object(l.jsx)("div",{className:"data-area",children:a.filteredUsers.length>0?Object(l.jsx)(u,{}):Object(l.jsx)("div",{})})]})});a(45);var p=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(O,{})})};a(46);var g=function(e){var t=e.children;return Object(l.jsx)("div",{className:"wrapper",children:t})};a(47);var x=function(){return Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)("h1",{children:"Employee Directory"}),Object(l.jsx)("p",{children:"Click on carrots to filter by heading or use the search box to narrow your results."})]})};a(48);var N=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(g,{children:[Object(l.jsx)(x,{}),Object(l.jsx)(p,{})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(l.jsx)(N,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[49,1,2]]]);
//# sourceMappingURL=main.5c928878.chunk.js.map