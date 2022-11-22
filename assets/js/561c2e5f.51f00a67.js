"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[79672],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(r),b=i,d=f["".concat(l,".").concat(b)]||f[b]||u[b]||a;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function b(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},24969:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const a={id:"fiberstatus",title:"Fiber.Status"},o=void 0,s={unversionedId:"datatypes/fiber/fiberstatus",id:"version-1.x/datatypes/fiber/fiberstatus",title:"Fiber.Status",description:"Fiber.Status describe the current status of a Fiber.",source:"@site/versioned_docs/version-1.x/datatypes/fiber/fiberstatus.md",sourceDirName:"datatypes/fiber",slug:"/datatypes/fiber/fiberstatus",permalink:"/version-1.x/datatypes/fiber/fiberstatus",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.x/datatypes/fiber/fiberstatus.md",tags:[],version:"1.x",frontMatter:{id:"fiberstatus",title:"Fiber.Status"},sidebar:"datatypes-sidebar",previous:{title:"Fiber.Id",permalink:"/version-1.x/datatypes/fiber/fiberid"},next:{title:"Introduction",permalink:"/version-1.x/datatypes/concurrency/"}},l={},c=[],p={toc:c};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Fiber.Status")," describe the current status of a ",(0,i.kt)("a",{parentName:"p",href:"/version-1.x/datatypes/fiber/"},"Fiber"),"."),(0,i.kt)("p",null,"Each fiber can be in one of the following statues:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Done"),(0,i.kt)("li",{parentName:"ul"},"Finishing"),(0,i.kt)("li",{parentName:"ul"},"Running"),(0,i.kt)("li",{parentName:"ul"},"Suspended")),(0,i.kt)("p",null,"In the following example, we are going to ",(0,i.kt)("inlineCode",{parentName:"p"},"await")," on a never-ending fiber and determine the id of that fiber, which we are blocking on:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.console._\nfor {\n  f1 <- ZIO.never.fork\n  f2 <- f1.await.fork\n  blockingOn <- f2.status\n    .collect(()) { case Fiber.Status.Suspended(_, _, _, blockingOn, _) =>\n      blockingOn\n    }\n    .eventually\n} yield (assert(blockingOn == List(f1.id)))\n")))}u.isMDXComponent=!0}}]);