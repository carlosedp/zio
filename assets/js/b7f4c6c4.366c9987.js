"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[98980],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=n.createContext({}),c=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=i,y=m["".concat(u,".").concat(d)]||m[d]||s[d]||a;return t?n.createElement(y,o(o({ref:r},p),{},{components:t})):n.createElement(y,o({ref:r},p))}));function d(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},45504:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=t(87462),i=(t(67294),t(3905));const a={id:"creating-queries",title:"Creating Queries"},o=void 0,l={unversionedId:"creating-queries",id:"creating-queries",title:"Creating Queries",description:"There are several ways to create a ZQuery. We've seen ZQuery.fromRequest, but you can also:",source:"@site/node_modules/@zio.dev/zio-query/creating-queries.md",sourceDirName:".",slug:"/creating-queries",permalink:"/zio-query/creating-queries",draft:!1,tags:[],version:"current",frontMatter:{id:"creating-queries",title:"Creating Queries"},sidebar:"sidebar",previous:{title:"Creating Data Sources",permalink:"/zio-query/creating-data-sources"},next:{title:"Running Queries",permalink:"/zio-query/running-queries"}},u={},c=[],p={toc:c};function s(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"There are several ways to create a ",(0,i.kt)("inlineCode",{parentName:"p"},"ZQuery"),". We've seen ",(0,i.kt)("inlineCode",{parentName:"p"},"ZQuery.fromRequest"),", but you can also:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"create a query from a pure value with ",(0,i.kt)("inlineCode",{parentName:"li"},"ZQuery.succeed")),(0,i.kt)("li",{parentName:"ul"},"create a query from an effect with ",(0,i.kt)("inlineCode",{parentName:"li"},"ZQuery.fromZIO")),(0,i.kt)("li",{parentName:"ul"},"combine multiple queries with ",(0,i.kt)("inlineCode",{parentName:"li"},"ZQuery.collectAllPar")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"ZQuery.foreachPar")," and their sequential equivalents ",(0,i.kt)("inlineCode",{parentName:"li"},"ZQuery.collectAll")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"ZQuery.foreach"))),(0,i.kt)("p",null,"If you have a ",(0,i.kt)("inlineCode",{parentName:"p"},"ZQuery"),", you can use:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"map")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"mapError")," to modify the result or error type"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"flatMap"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"zipWith"),", or ",(0,i.kt)("inlineCode",{parentName:"li"},"zipWithPar")," to combine it with other queries"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"provide")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"provideSome")," to eliminate some or all of its environmental requirements")))}s.isMDXComponent=!0}}]);