"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[764],{764:function(e,t,r){r.r(t);var n=r(433),o=r(439),a=r(791),c=r(87),i=r(689),u=r(933),s=r(184);t.default=function(){var e=(0,a.useState)(""),t=(0,o.Z)(e,2),r=t[0],h=t[1],l=(0,a.useState)([]),f=(0,o.Z)(l,2),p=f[0],d=f[1],m=(0,c.lr)(),x=(0,o.Z)(m,2),g=x[0],w=x[1],b=(0,i.TH)();return(0,a.useEffect)((function(){var e=g.get("query");e&&(h(e),(0,u.Z)("".concat("search/movie?query=").concat(e,"&")).then((function(e){d((0,n.Z)(e.results))})).catch((function(e){return new Error("Something goes wrong: ".concat(e))})))}),[g]),(0,s.jsxs)("div",{style:{margin:"0 40px"},children:[(0,s.jsx)("h2",{children:"Search your favorite film"}),(0,s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==r.trim()?w({query:r}):window.alert("Request is empty!")},children:[(0,s.jsx)("input",{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search any film",value:r,onChange:function(e){var t=e.currentTarget.value.toLowerCase();h(t)},style:{width:"300px",height:"40px",border:"1px solid gray",padding:"0",borderRadius:"5px"}}),(0,s.jsx)("button",{type:"submit",style:{width:"100px",height:"40px",marginLeft:"20px"},children:"Search"})]}),(0,s.jsx)("ul",{children:p.map((function(e){var t=e.id,r=e.title;return(0,s.jsx)("li",{id:t,children:(0,s.jsx)(c.rU,{id:t,to:"".concat(t),state:{from:{pathname:b.pathname,search:b.search}},children:r},t)},t)}))})]})}},933:function(e,t){t.Z=function(e){return fetch("".concat("https://api.themoviedb.org/3/").concat(e).concat("api_key=b75cb860cbfad4e3e72cf9144d03b3b9")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Something went wrong"))}))}}}]);
//# sourceMappingURL=764.d47df1f4.chunk.js.map