(this["webpackJsonp1-hello"]=this["webpackJsonp1-hello"]||[]).push([[0],{33:function(e,t,a){e.exports=a.p+"static/media/PageNotFound.04adb68c.jpg"},34:function(e,t,a){e.exports=a(63)},39:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(29),l=a.n(c),o=(a(39),a(12)),s=a(13);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(2),m=a(3),u=a(5),p=a(4),d=a(11),h=a(6);function b(e){var t=e.cursos;return r.a.createElement("div",{className:"card"},r.a.createElement("ul",{className:"list-group list-group-flush"},t.map((function(e){return r.a.createElement("li",{className:"list-group-item",key:e},e)}))))}var v=function(){return r.a.createElement("div",{className:"row justify-content-md-center"},r.a.createElement("div",{className:"col-xl-7 col-lg-8 col-md-9 col-sm-12 col-xs-12"},r.a.createElement(b,{cursos:["Java","React","Angular"]})))};var E=function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h1",null,"Sobre")))},g=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={contador:0},a.increment=a.increment.bind(Object(d.a)(a)),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"increment",value:function(e){var t=this.state;t.contador+=e,this.setState(t)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"row justify-content-md-center"},r.a.createElement("div",{className:"col-xl-7 col-lg-8 col-md-9 col-sm-12 col-xs-12"},r.a.createElement("div",{className:"card "},r.a.createElement("div",{className:"card-body "},r.a.createElement("h3",{className:"card-title",style:{textAlign:"center"}}," ",this.state.contador)),r.a.createElement("div",{className:"card-footer"},r.a.createElement("button",{className:"btn btn-primary",style:{marginRight:"10px"},onClick:function(){return e.increment(-1)}},"-"),r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.increment(1)}},"+")))))}}]),t}(n.Component),f=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={timer:(new Date).toLocaleTimeString()},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){e.setState({timer:(new Date).toLocaleTimeString()})}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return r.a.createElement("div",{className:"row justify-content-md-center"},r.a.createElement("div",{className:"col-xl-7 col-lg-8 col-md-9 col-sm-12 col-xs-12"},r.a.createElement("h3",null,"Timer: ",this.state.timer)))}}]),t}(n.Component),N=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={email:"",password:"",remember:!1,json:""},a.onChange=a.onChange.bind(Object(d.a)(a)),a.onSubmit=a.onSubmit.bind(Object(d.a)(a)),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"onChange",value:function(e){this.setState(e)}},{key:"onSubmit",value:function(){var e=this.state,t=e.email,a=e.password,n=e.remember;e.json=JSON.stringify({email:t,password:a,remember:n}),this.setState(this.state)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"row justify-content-md-center"},r.a.createElement("div",{className:"col-xl-3 col-lg-4 col-md-5 col-sm-6 col-xs-12"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email address:"),r.a.createElement("input",{type:"email",className:"form-control",placeholder:"Enter email",value:this.state.email,onChange:function(t){return e.onChange({email:t.target.value})}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"pwd"},"Password:"),r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Enter password",value:this.state.password,onChange:function(t){return e.onChange({password:t.target.value})}})),r.a.createElement("div",{className:"form-group form-check"},r.a.createElement("label",{className:"form-check-label"},r.a.createElement("input",{className:"form-check-input",type:"checkbox",value:this.state.remember,onChange:function(t){return e.onChange({remember:t.target.checked})}})," Remember me")),r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.onSubmit()}},"Submit"),r.a.createElement("h5",{style:{marginTop:"20px"}},this.state.json)))}}]),t}(n.Component),j=[{id:1,nome:"Paulo",cursos:["Java","Angular"]},{id:2,nome:"Victor",cursos:["React",".Net"]}],y=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.match,t=j.find((function(t){return t.id===parseInt(e.params.id)}));return r.a.createElement("div",{style:{marginTop:"20px"}},r.a.createElement("h3",null,t.nome),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},"Cursos"),r.a.createElement("ul",{className:"list-group list-group-flush"},t.cursos.map((function(e){return r.a.createElement("li",{className:"list-group-item",key:e},e)})))))}}]),t}(n.Component),O=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.match;return r.a.createElement("div",{className:"row justify-content-md-center"},r.a.createElement("div",{className:"col-xl-7 col-lg-8 col-md-9 col-sm-12 col-xs-12"},r.a.createElement("table",{className:"table table-striped table-sm"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Nome"))),r.a.createElement("tbody",null,j.map((function(t){var a=t.id,n=t.nome;return r.a.createElement("tr",{key:a},r.a.createElement("td",null,r.a.createElement(o.b,{to:"".concat(e.url,"/").concat(a)},a)),r.a.createElement("td",null,n))}))))),r.a.createElement("div",{className:"col-xl-7 col-lg-8 col-md-9 col-sm-12 col-xs-12"},r.a.createElement(s.a,{path:"".concat(e.path,"/:id"),component:y})))}}]),t}(n.Component),k=a(32),w=a.n(k),x=[{description:"Home",path:"/",component:v,exact:!0},{description:"Contador",path:"/Contador",component:g},{description:"Timer",path:"/Timer",component:f},{description:"Form",path:"/Form",component:N},{description:"Users",path:"/Users",component:O},{description:"Http",path:"/Http",component:function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={persons:[]},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;w.a.get("https://jsonplaceholder.typicode.com/users").then((function(t){var a=t.data;return e.setState({persons:a})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"row justify-content-md-center"},r.a.createElement("div",{className:"col-xl-7 col-lg-8 col-md-9 col-sm-12 col-xs-12"},r.a.createElement("div",{className:"card"},r.a.createElement("ul",{className:"list-group list-group-flush"},this.state.persons.map((function(e){var t=e.id,a=e.name;return r.a.createElement("li",{className:"list-group-item",key:t},a)}))))))}}]),t}(n.Component)},{description:"Sobre",path:"/Sobre",component:E}],C=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={collapsed:!0},a.toggleNavbar=a.toggleNavbar.bind(Object(d.a)(a)),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"toggleNavbar",value:function(){this.setState({collapsed:!this.state.collapsed})}},{key:"render",value:function(){var e=this.state.collapsed,t=e?"collapse navbar-collapse":"collapse navbar-collapse show",a=e?"navbar-toggler navbar-toggler-right collapsed":"navbar-toggler navbar-toggler-right";return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement(o.c,{className:"navbar-brand",to:"/"},"Home"),r.a.createElement("button",{onClick:this.toggleNavbar,className:"".concat(a),type:"button"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"".concat(t)},r.a.createElement("ul",{className:"navbar-nav mr-auto"},x.map((function(e){return r.a.createElement("li",{className:"nav-item",key:e.path},r.a.createElement(o.c,{className:"nav-link",to:e.path},e.description))})))))}}]),t}(n.Component),S=a(33),T=a.n(S),F=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("img",{src:T.a,style:{width:400,height:400,display:"block",margin:"auto",position:"relative"},alt:"page not found"}),r.a.createElement("center",null,r.a.createElement(o.b,{to:"/"},"Return to Home Page")))}}]),t}(n.Component);var H=function(){return r.a.createElement("footer",null,r.a.createElement("p",null,"Copyright \xa9 2020 All rights reserved."))};a(62);l.a.render(r.a.createElement(o.a,{basename:"/curso-reactjs"},r.a.createElement("header",null,r.a.createElement(C,null)),r.a.createElement("div",{className:"container-fluid"},r.a.createElement(s.c,null,x.map((function(e){return r.a.createElement(s.a,{key:e.path,path:e.path,exact:e.exact,component:e.component})})),r.a.createElement(s.a,{path:"*",component:F}))),r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.b7bbdaa4.chunk.js.map