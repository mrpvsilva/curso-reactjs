(this["webpackJsonp1-hello"]=this["webpackJsonp1-hello"]||[]).push([[0],{36:function(e,t,a){e.exports=a(66)},42:function(e,t,a){},60:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(30),o=a.n(c);a(41),a(42),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=a(13),s=a(12),i=a(2),m=a(3),u=a(6),p=a(4),h=a(10),d=a(5),v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={contador:0},a.increment=a.increment.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"increment",value:function(e){var t=this.state;t.contador+=e,this.setState(t)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"card "},r.a.createElement("div",{className:"card-body "},r.a.createElement("h3",{className:"card-title",style:{textAlign:"center"}}," ",this.state.contador)),r.a.createElement("div",{className:"card-footer"},r.a.createElement("button",{className:"btn btn-primary",style:{marginRight:"10px"},onClick:function(){return e.increment(-1)}},"-"),r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.increment(1)}},"+")))))}}]),t}(n.Component),b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={timer:(new Date).toLocaleTimeString()},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){e.setState({timer:(new Date).toLocaleTimeString()})}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h3",null,"Timer: ",this.state.timer)))}}]),t}(n.Component),f=a(35),E=a(17),g=a.n(E),N=g.a.CancelToken.source(),j=function(e,t){return g.a.get(e,Object(f.a)({cancelToken:N.token},t))},O=function(e){return N.cancel(e)},y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={persons:[]},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;j("https://jsonplaceholder.typicode.com/users").then((function(t){var a=t.data;return e.setState({persons:a})}))}},{key:"componentWillUnmount",value:function(){O("Operation canceled by the user.")}},{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"card"},r.a.createElement("ul",{className:"list-group list-group-flush"},this.state.persons.map((function(e,t){var a=e.id,n=e.name;return r.a.createElement("li",{className:"list-group-item ".concat(t%2===0?"list-group-item-secondary":""),key:a},n)}))))))}}]),t}(n.Component),k=(a(60),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={filmes:[]},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;j("https://sujeitoprogramador.com/r-api/?api=filmes").then((function(t){var a=t.data;return e.setState({filmes:a})}))}},{key:"componentWillUnmount",value:function(){O("Operation canceled by the user.")}},{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},"Filmes"),r.a.createElement("ul",{className:"list-group list-group-flush"},this.state.filmes.map((function(e){var t=e.id,a=e.nome,n=e.foto;return r.a.createElement("li",{className:"list-group-item",key:t},r.a.createElement("p",null,a),r.a.createElement("img",{src:n,className:"img-thumbnail",alt:a}))}))))))}}]),t}(n.Component));var w=function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h5",null,"Est\xe1 \xe9 uma aplica\xe7\xe3o feita com React, afim de estudos dos principais conceitos da biblioteca.")))};var C=function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h1",null,"Home")))},S=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleClick=function(){var e=a.props.pessoas.length-1,t=Math.floor(Math.random()*(e-0+1)+0);console.log(t),a.setState({pessoa:a.props.pessoas[t]})},a.state={pessoa:a.props.init},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"row",style:{marginBottom:"10px"}},r.a.createElement("div",{className:"col"},r.a.createElement("p",null,"Nome: ",this.state.pessoa),r.a.createElement("button",{className:"btn btn-primary",onClick:this.handleClick},"Alterar")))}}]),t}(n.Component),x=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).pessoas=["Maria","jo\xe3o","Lucas","Pedro"],a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h3",null,"Exerc\xedcio"),r.a.createElement("hr",null),this.pessoas.map((function(t,a){return r.a.createElement(S,{key:t,pessoas:e.pessoas,init:e.pessoas[a]})}))))}}]),t}(n.Component),M=a(33),T=[{description:"Home",path:"/home",component:C},{description:"Contador",path:"/contador",component:v},{description:"Timer",path:"/timer",component:b},{description:"Http",path:"/http",component:y},{description:"Filmes",path:"/filmes",component:k},{description:"Exerc\xedcio",path:"/exercicio",component:x},{description:"Hooks",path:"/hooks",component:function(){var e=Object(n.useState)("Maria"),t=Object(M.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("p",null,"Nome: ",a),r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return c("Jo\xe3o")}},"Alterar")))}},{description:"Sobre",path:"/sobre",component:w}],A=function(){return null!==localStorage.getItem("data")},D=function(e){return localStorage.data=e},H=function(){return localStorage.removeItem("data")},I=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={collapsed:!0},a.toggleNavbar=a.toggleNavbar.bind(Object(h.a)(a)),a.logout=a.logout.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"toggleNavbar",value:function(){this.setState({collapsed:!this.state.collapsed})}},{key:"logout",value:function(){H(),this.props.history.push("/login")}},{key:"render",value:function(){var e=this.state.collapsed,t=e?"collapse navbar-collapse":"collapse navbar-collapse show",a=e?"navbar-toggler navbar-toggler-right collapsed":"navbar-toggler navbar-toggler-right";return r.a.createElement("header",null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement(l.b,{className:"navbar-brand",to:"/"},"Home"),r.a.createElement("button",{onClick:this.toggleNavbar,className:"".concat(a),type:"button"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"".concat(t)},r.a.createElement("ul",{className:"navbar-nav mr-auto"},T.map((function(e){return r.a.createElement("li",{className:"nav-item",key:e.path},r.a.createElement(l.b,{className:"nav-link",to:"".concat(e.path)},e.description))}))),r.a.createElement("div",{className:"navbar-nav"},r.a.createElement("a",{style:{cursor:"pointer"},className:"nav-item nav-link",onClick:this.logout},"Logout")))))}}]),t}(n.Component);var W=function(){return r.a.createElement("footer",null,r.a.createElement("p",null,"Copyright \xa9 2020 All rights reserved."))};var F=function(e){var t=Object.assign({},e);return r.a.createElement("div",null,r.a.createElement(I,t),r.a.createElement("div",{className:"container"},r.a.createElement(s.d,null,T.map((function(e){return r.a.createElement(s.b,{path:e.path,component:e.component,key:e.description})})),r.a.createElement(s.a,{from:"*",to:"/home"}))),r.a.createElement(W,null))},J=function(e){function t(e){var a;return Object(i.a)(this,t),a=Object(u.a)(this,Object(p.a)(t).call(this,e)),A()&&a.props.history.push("/"),a.state={email:"",password:"",remember:!1},a.onChange=a.onChange.bind(Object(h.a)(a)),a.onSubmit=a.onSubmit.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"onChange",value:function(e){this.setState(e)}},{key:"onSubmit",value:function(){D(JSON.stringify(this.state)),this.props.history.push("/")}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container login"},r.a.createElement("div",{className:"row justify-content-md-center"},r.a.createElement("div",{className:"col-xl-3 col-lg-4 col-md-5 col-sm-6 col-xs-12"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email address:"),r.a.createElement("input",{type:"email",className:"form-control",placeholder:"Enter email",value:this.state.email,onChange:function(t){return e.onChange({email:t.target.value})}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"pwd"},"Password:"),r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Enter password",value:this.state.password,onChange:function(t){return e.onChange({password:t.target.value})}})),r.a.createElement("div",{className:"form-group form-check"},r.a.createElement("label",{className:"form-check-label"},r.a.createElement("input",{className:"form-check-input",type:"checkbox",value:this.state.remember,onChange:function(t){return e.onChange({remember:t.target.checked})}})," Remember me")),r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.onSubmit()}},"Submit"))))}}]),t}(n.Component),L=a(34),B=function(e){var t=e.component,a=Object(L.a)(e,["component"]);return r.a.createElement(s.b,Object.assign({},a,{render:function(e){return A()?r.a.createElement(t,e):r.a.createElement(s.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},R=function(){return r.a.createElement(l.a,{basename:"curso-reactjs"},r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/login",component:J}),r.a.createElement(B,{path:"/",component:F})))};o.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.d2e32794.chunk.js.map