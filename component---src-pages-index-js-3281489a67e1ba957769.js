(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{208:function(e,t,a){"use strict";a.r(t),a(118),a(62),a(119);var l=a(32),n=a.n(l),r=a(63),i=a.n(r),s=(a(237),a(1)),c=a.n(s),o=a(331),m=a(220),u=a(265);"undefined"!=typeof window&&Object(u.initSimpleImg)({threshold:.5});var d=function(e){return c.a.createElement("div",{className:"card mt-4"},c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/"+e.login},c.a.createElement(u.SimpleImg,{imgClassName:"card-img-top",placeholder:"linear-gradient(rgb(30, 87, 153) 0%, rgb(125, 185, 232) 100%)",src:"https://avatars3.githubusercontent.com/u/"+e.databaseId,alt:"Avatar de "+(e.name||e.login)})),c.a.createElement("div",{className:"card-body"},c.a.createElement("h3",{className:"card-title"},e.name||e.login),c.a.createElement("a",{role:"button",className:"w-100 btn btn-warning btn-sm",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/"+e.login},e.login," @ GitHub"),e.bio&&c.a.createElement("p",{className:"card-text"},e.bio),c.a.createElement("dl",{className:"row"},c.a.createElement("dt",{className:"col-6 col-xl-4"},"Location"),c.a.createElement("dd",{className:"col-6 col-xl-8"},e.location),e.websiteUrl&&c.a.createElement(s.Fragment,null,c.a.createElement("dt",{className:"col-6 col-xl-4"},"Site web"),c.a.createElement("dd",{className:"col-6 col-xl-8"},e.websiteUrl)),e.email&&c.a.createElement(s.Fragment,null,c.a.createElement("dt",{className:"col-6 col-xl-4"},"Email"),c.a.createElement("dd",{className:"col-6 col-xl-8"},e.email)),c.a.createElement("dt",{className:"col-6 col-xl-4"},"Créé"),c.a.createElement("dd",{className:"col-6 col-xl-8"},e.createdAt),e.company&&c.a.createElement(s.Fragment,null,c.a.createElement("dt",{className:"col-6 col-xl-4"},"Compagnie"),c.a.createElement("dd",{className:"col-6 col-xl-8"},e.company)),e.starredRepositories&&e.starredRepositories.length>0&&c.a.createElement(s.Fragment,null,c.a.createElement("dt",{className:"col-6 col-xl-4"},"Étoiles"),c.a.createElement("dd",{className:"col-6 col-xl-8"},e.starredRepositories.length," dépots")),e.repositoriesContributedToCount&&c.a.createElement(s.Fragment,null,c.a.createElement("dt",{className:"col-6 col-xl-4"},"Contribs"),c.a.createElement("dd",{className:"col-6 col-xl-8"},e.repositoriesContributedToCount," dépots"),e.languages&&c.a.createElement(s.Fragment,null,c.a.createElement("dt",{className:"col-6 col-xl-4"},"Langages"),c.a.createElement("dd",{className:"col-6 col-xl-8"},e.languages)))),e.isHireable&&c.a.createElement("p",{className:"card-text"},"Disponible pour travailler")))},g=a(221),b=a(216);a.d(t,"query",function(){return k});var h="repoLanguages",f=12,p={whiteSpace:"nowrap",paddingBottom:"1rem",overflowX:"scroll"},E=function(e){return Object(o.a)((e||"").trim()).toLowerCase()},v={joined:function(e,t){var a=e.createdAt,l=t.createdAt;return a>l?1:a<l?-1:0},name:function(e,t){return(e.name||e.login).localeCompare(t.name||t.login)},nRepos:function(e,t){var a=e.repositoriesContributedToCount,l=t.repositoriesContributedToCount;return a>l?1:a<l?-1:0}},N=function(e){function t(t){var a;return(a=e.call(this,t)||this).allLanguageColors={},t.data.allLanguageColorsJson.edges.map(function(e){return e.node}).forEach(function(e){var t=e.name,l=e.fg,n=e.bg;a.allLanguageColors[t]={bg:n,fg:l}}),a.allUsers=t.data.allDataJson.edges[0].node.users.map(function(e){return Object.assign({},e,{languages:e[h]&&e[h].map(function(e){return e.name+" ("+e.count+")"}).join(", ")})}).map(function(e){return Object.assign({},e,{deburredName:E(e.name)+" "+E(e.login),deburredLocation:E(e.location)})}),a.state={filter:!1,onlyAvailable:!1,last:f,location:"",deburredLocation:"",name:"",deburredName:"",sort:"joined",reverse:!0},a.click=a.click.bind(i()(i()(a))),a.clickMore=a.clickMore.bind(i()(i()(a))),a.clickAvailable=a.clickAvailable.bind(i()(i()(a))),a.locationFilter=a.locationFilter.bind(i()(i()(a))),a.nameFilter=a.nameFilter.bind(i()(i()(a))),a.filtering=a.filtering.bind(i()(i()(a))),a.filtering2=a.filtering2.bind(i()(i()(a))),a.filtering3=a.filtering3.bind(i()(i()(a))),a.filtering4=a.filtering4.bind(i()(i()(a))),a.changeOrder=a.changeOrder.bind(i()(i()(a))),a.changeOrderReverse=a.changeOrderReverse.bind(i()(i()(a))),a}n()(t,e);var a=t.prototype;return a.changeOrder=function(e){var t=e.target.value;t!==this.state.sort&&this.setState({sort:t,reverse:"nRepos"===t||"joined"===t})},a.changeOrderReverse=function(e){var t=e.target.checked;this.setState({reverse:t})},a.nameFilter=function(e){var t=e.target.value;this.setState({name:t,deburredName:E(t)})},a.locationFilter=function(e){var t=e.target.value;this.setState({location:t,deburredLocation:E(t)})},a.clickMore=function(){this.setState({last:this.state.last+f})},a.clickAvailable=function(){this.setState({onlyAvailable:!this.state.onlyAvailable})},a.click=function(e){var t=e.target.dataset;(this.state.filter||t.key)&&this.setState({last:f,filter:t&&t.key!==this.state.filter&&t.key})},a.filtering=function(e){var t=this;if(!this.state.filter)return!0;var a=!1;return!!e[h]&&(e[h].forEach(function(e){e.name===t.state.filter&&(a=!0)}),a)},a.filtering2=function(e){return!this.state.onlyAvailable||e.isHireable},a.filtering3=function(e){return!this.state.deburredLocation||-1!==e.deburredLocation.indexOf(this.state.deburredLocation)},a.filtering4=function(e){return!this.state.deburredName||-1!==e.deburredName.indexOf(this.state.deburredName)},a.render=function(){var e=this,t=this.props.data.allDataJson.edges[0].node[h],a=this.allUsers.filter(this.filtering).filter(this.filtering2).filter(this.filtering3).filter(this.filtering4).sort(v[this.state.sort]),l=this.state.reverse?a.reverse().slice(0,this.state.last):a.slice(0,this.state.last);return c.a.createElement(m.a,{header:!0,messages:this.props.messages},c.a.createElement("div",{className:"container"},c.a.createElement("div",null,c.a.createElement("p",null,c.a.createElement("button",{className:"btn btn-secondary",type:"button",onClick:this.clickAvailable},"Dispo? ",this.state.onlyAvailable?"OUI":"Peu importe")),c.a.createElement("label",null,"Tri:"," ",c.a.createElement("select",{onChange:this.changeOrder},c.a.createElement("option",{value:"joined"},"Date d’inscription"),c.a.createElement("option",{value:"name"},"Nom (ou login)"),c.a.createElement("option",{value:"nRepos"},"Nombre de dépots")))," ",c.a.createElement("label",null,"Inverser l’ordre"," ",c.a.createElement("input",{type:"checkbox",checked:this.state.reverse,onChange:this.changeOrderReverse})),c.a.createElement("ul",{className:"list-inline",style:p},c.a.createElement("li",{className:"list-inline-item"},c.a.createElement("button",{className:"btn badge badge-primary"+(this.state.filter?" badge-pill":" active"),type:"button",onClick:this.click},"Tous")),t.map(function(t){return c.a.createElement("li",{key:t.name,className:"list-inline-item"},c.a.createElement("button",{style:e.allLanguageColors[t.name]?{background:e.allLanguageColors[t.name].bg,color:e.allLanguageColors[t.name].fg}:{background:"#fff",color:"#000"},className:"btn badge"+(e.state.filter===t.name?" active":" badge-pill"),type:"button","data-key":t.name,onClick:e.click},t.name))})),c.a.createElement("label",null,"Nom:"," ",c.a.createElement("input",{type:"text",value:this.state.name,onChange:this.nameFilter})),c.a.createElement("br",null),c.a.createElement("label",null,"Lieu:"," ",c.a.createElement("input",{type:"text",value:this.state.location,onChange:this.locationFilter})),this.state.deburredLocation,c.a.createElement("h3",null,l.length," utilisateurs affichés"," ",c.a.createElement("small",null,"sur ",a.length," sélectionnés",this.allUsers.length!==a.length&&c.a.createElement("span",null,", ",this.allUsers.length," en tout"))),l.length?c.a.createElement(s.Fragment,null,c.a.createElement("div",{className:"row"},l.map(function(e){return c.a.createElement("div",{key:e.databaseId,className:"col-sm-6 col-md-6 col-lg-4"},c.a.createElement(d,e))})),a.length>this.state.last&&c.a.createElement("button",{onClick:this.clickMore,className:"mt-4 w-100 btn btn-info",type:"button"},"Afficher plus de résultats")):c.a.createElement("div",{className:"col"},c.a.createElement("p",null,"Aucun résultat.")))),c.a.createElement(g.a,null,c.a.createElement("p",{className:"card-text"},"Marvoulous")))},t}(s.Component),k=(t.default=Object(b.c)(N),"2684605094")}}]);
//# sourceMappingURL=component---src-pages-index-js-3281489a67e1ba957769.js.map