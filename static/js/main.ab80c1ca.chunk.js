(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{168:function(e,t,a){e.exports=a(288)},173:function(e,t,a){},288:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),s=a.n(c),i=a(16),o=a(17),l=a(20),u=a(18),h=a(21),m=a(41),p=a.n(m),d=(a(173),a(43)),v=a(33),f=a.n(v),g=a(34),E=a.n(g),b=a(19),y=a.n(b),w=a(35),j=a.n(w),O=a(42),k=a(9),x=a(80),N=a.n(x),C=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={searchInput:""},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.searchChanged;return r.a.createElement("div",{className:a.root},r.a.createElement(f.a,{position:"static"},r.a.createElement(E.a,{variant:"dense"},r.a.createElement(y.a,{className:a.title,variant:"h5",color:"inherit"},"Users and stuff"),r.a.createElement("div",{className:a.grow}),r.a.createElement("div",{className:a.search},r.a.createElement("div",{className:a.searchIcon},r.a.createElement(N.a,null)),r.a.createElement(j.a,{value:this.state.searchInput,onChange:function(t){e.setState({searchInput:t.target.value}),n(t.target.value)},placeholder:"Search\u2026",classes:{root:a.inputRoot,input:a.inputInput}})))))}}]),t}(n.Component),I=Object(k.withStyles)(function(e){return{root:{width:"100%"},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},title:Object(d.a)({display:"none",paddingLeft:"10px"},e.breakpoints.up("sm"),{display:"block"}),search:Object(d.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(O.fade)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(O.fade)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing.unit,width:"auto"}),searchIcon:{width:9*e.spacing.unit,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:Object(d.a)({paddingTop:e.spacing.unit,paddingRight:e.spacing.unit,paddingBottom:e.spacing.unit,paddingLeft:10*e.spacing.unit,transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:120,"&:focus":{width:200}})}})(C),S=a(36),U=a.n(S),P=a(37),B=a.n(P),R=a(39),L=a.n(R),A=a(38),D=a.n(A);var M=Object(k.withStyles)({card:{maxWidth:345},media:{height:150},root:{paddingTop:"20px",paddingBottom:"20px"}})(function(e){var t=e.classes,a=e.name,n=e.company,c=e.catchPhrase,s=e.id,i=e.selectUser;return r.a.createElement("div",{className:t.root},r.a.createElement(U.a,{className:t.card},r.a.createElement(B.a,{onClick:function(){return i(s)}},r.a.createElement(D.a,{className:t.media,image:"https://via.placeholder.com/600/a08784",title:"Contemplative Reptile"}),r.a.createElement(L.a,null,r.a.createElement(y.a,{gutterBottom:!0,variant:"h5",component:"h2"},a),r.a.createElement(y.a,{gutterBottom:!0,variant:"h6",component:"h2"},n),r.a.createElement(y.a,{component:"p"},c," ")))))}),W=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={users:null},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.users,a=e.selectUser,n=e.searchInput;return r.a.createElement("div",{className:"clients"},t?t.map(function(e){return e.name.search(n)&&n?void 0:r.a.createElement(M,{selectUser:a,id:e.id,key:e.name,name:e.name,company:e.company.name,catchPhrase:e.company.catchPhrase})}):null)}}]),t}(n.Component),J=(a(5),a(40)),T=a.n(J),F=a(22);var G=Object(k.withStyles)({row:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},avatar:{margin:10,width:128,height:128}})(function(e){var t=e.classes,a=e.name,n=e.company,c=e.catchPhrase;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:t.row},r.a.createElement(T.a,{alt:a,src:"https://via.placeholder.com/150/a08784",className:t.avatar})),r.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"left",paddingLeft:"25px"}},r.a.createElement(F.a,{variant:"title"},"NAME:"),r.a.createElement(F.a,{color:"textSecondary",variant:"h6"},a),r.a.createElement(F.a,{variant:"title"},"COMPANY: "),r.a.createElement(F.a,{color:"textSecondary",variant:"h6"},n),r.a.createElement(F.a,{variant:"title"},"CatchPhrase: "),r.a.createElement(F.a,{color:"textSecondary",variant:"h6"},c)))}),Y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={users:null,currentUser:null,searchInput:null},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){console.log(t),e.setState({users:t})}).then(fetch("https://randomuser.me/api/?page=3&results=10&seed=abc")).then(function(e){return e.json()}).then(function(e){return console.log(e)}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"root"},r.a.createElement("div",{style:{width:"100%"}},r.a.createElement(I,{searchChanged:function(t){return e.setState({searchInput:t})}})),r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"left-box"},r.a.createElement(W,{searchInput:this.state.searchInput,selectUser:function(t){return e.setState({currentUser:t})},users:this.state.users})),r.a.createElement("div",{className:"right-box"},this.state.users&&this.state.currentUser?r.a.createElement(G,{name:this.state.users[this.state.currentUser-1].name,company:this.state.users[this.state.currentUser-1].company.name,catchPhrase:this.state.users[this.state.currentUser-1].company.catchPhrase}):null)))}}]),t}(n.Component),$=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement(Y,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[168,2,1]]]);
//# sourceMappingURL=main.ab80c1ca.chunk.js.map