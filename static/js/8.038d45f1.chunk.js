(this["webpackJsonppet-react-films"]=this["webpackJsonppet-react-films"]||[]).push([[8],{72:function(e,t,n){e.exports={MovieCard:"MovieDetailsPage_MovieCard__296gM",MoviePoster:"MovieDetailsPage_MoviePoster__2mPAt",MovieDescription:"MovieDetailsPage_MovieDescription__37ui0",MovieInfo:"MovieDetailsPage_MovieInfo__gvcNZ",MovieInfoLink:"MovieDetailsPage_MovieInfoLink__2GEfV",ActiveMovieInfoLink:"MovieDetailsPage_ActiveMovieInfoLink__3VcDe"}},85:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n(16),s=n(0),o={getIsLoggedIn:function(e){return e.auth.isLoggedIn},getUsername:function(e){return e.auth.user.name}},j=n(72),r=n.n(j),a=n(10),b=function(){var e=Object(c.c)((function(e){return e.movies.items})),t=Object(i.g)();return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("button",{type:"button",className:"btn",onClick:function(){return t(-1)},children:"Go back"}),e&&Object(a.jsxs)("div",{className:r.a.MovieCard,children:[Object(a.jsxs)("p",{children:["ID: ",e.id]}),Object(a.jsx)("h1",{children:e.title}),Object(a.jsxs)("p",{children:["Year of issue: ",e.year]}),Object(a.jsxs)("p",{children:["Format: ",e.format]}),e.actors&&Object(a.jsxs)("p",{children:["Cast: ",e.actors.map((function(e){return e.name})).join(", ")]})]})]})},l=Object(s.lazy)((function(){return n.e(3).then(n.bind(null,78))})),u=Object(s.lazy)((function(){return n.e(4).then(n.bind(null,79))})),O=Object(s.lazy)((function(){return n.e(7).then(n.bind(null,80))})),v=Object(s.lazy)((function(){return n.e(10).then(n.bind(null,81))})),x=Object(s.lazy)((function(){return n.e(5).then(n.bind(null,82))})),d=Object(s.lazy)((function(){return n.e(6).then(n.bind(null,83))})),f=Object(s.lazy)((function(){return n.e(9).then(n.bind(null,84))}));t.default=function(){var e=Object(c.c)(o.getIsLoggedIn);return Object(a.jsxs)(a.Fragment,{children:[e?Object(a.jsx)(d,{}):Object(a.jsx)(l,{}),Object(a.jsxs)(i.d,{children:[Object(a.jsx)(i.b,{path:"login",element:e?Object(a.jsx)(i.a,{to:"/movies"}):Object(a.jsx)(u,{})}),Object(a.jsx)(i.b,{path:"register",element:e?Object(a.jsx)(i.a,{to:"/movies"}):Object(a.jsx)(O,{})}),Object(a.jsx)(i.b,{path:"/movies",element:e?Object(a.jsx)(x,{}):Object(a.jsx)(i.a,{to:"/login"})}),Object(a.jsx)(i.b,{path:"/library",element:e?Object(a.jsx)(f,{}):Object(a.jsx)(i.a,{to:"/login"})}),Object(a.jsx)(i.b,{path:"/movies/:moviesId",element:e?Object(a.jsx)(b,{}):Object(a.jsx)(i.a,{to:"/login"})}),Object(a.jsx)(i.b,{element:Object(a.jsx)(v,{})})]})]})}}}]);
//# sourceMappingURL=8.038d45f1.chunk.js.map