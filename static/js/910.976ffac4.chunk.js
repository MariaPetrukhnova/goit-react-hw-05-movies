"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[910],{910:function(e,n,t){t.r(n);var c=t(433),r=t(439),a=t(791),o=t(689),i=t(933),s=t(184);n.default=function(){var e=(0,o.UO)().movieId,n=(0,a.useState)([]),t=(0,r.Z)(n,2),h=t[0],u=t[1];return(0,a.useEffect)((function(){(0,i.Z)("movie/".concat(e,"/credits?")).then((function(e){var n=e.cast.map((function(e){return{id:e.id,name:e.name,character:e.character}}));u((0,c.Z)(n))})).catch((function(e){return new Error("Something goes wrong: ".concat(e))}))}),[e]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{style:{fontWeight:"500"},children:"Cast:"}),(0,s.jsx)("ul",{children:h.map((function(e){var n=e.id,t=e.name,c=e.character;return(0,s.jsx)("li",{children:(0,s.jsxs)("p",{children:[(0,s.jsx)("span",{children:t}),"...../",(0,s.jsx)("span",{children:c})]})},n)}))})]})}},933:function(e,n){n.Z=function(e){return fetch("".concat("https://api.themoviedb.org/3/").concat(e).concat("api_key=b75cb860cbfad4e3e72cf9144d03b3b9")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Something went wrong"))}))}}}]);
//# sourceMappingURL=910.976ffac4.chunk.js.map