"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[60074],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>d});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(t),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return t?n.createElement(f,i(i({ref:r},u),{},{components:t})):n.createElement(f,i({ref:r},u))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},26887:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=t(87462),a=(t(67294),t(3905));const o={id:"scheduling",title:"Scheduling"},i=void 0,c={unversionedId:"reference/stream/zstream/scheduling",id:"reference/stream/zstream/scheduling",title:"Scheduling",description:"To schedule the output of a stream we use ZStream#schedule combinator.",source:"@site/docs/reference/stream/zstream/scheduling.md",sourceDirName:"reference/stream/zstream",slug:"/reference/stream/zstream/scheduling",permalink:"/reference/stream/zstream/scheduling",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/stream/zstream/scheduling.md",tags:[],version:"current",frontMatter:{id:"scheduling",title:"Scheduling"},sidebar:"reference-sidebar",previous:{title:"Error Handling",permalink:"/reference/stream/zstream/error-handling"},next:{title:"ZPipeline",permalink:"/reference/stream/zpipeline"}},s={},l=[],u={toc:l};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To schedule the output of a stream we use ",(0,a.kt)("inlineCode",{parentName:"p"},"ZStream#schedule")," combinator."),(0,a.kt)("p",null,"Let's space between each emission of the given stream:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stream._\n\nval stream = ZStream(1, 2, 3, 4, 5).schedule(Schedule.spaced(1.second))\n")))}p.isMDXComponent=!0}}]);