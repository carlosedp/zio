"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[99665],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),f=a,m=u["".concat(s,".").concat(f)]||u[f]||p[f]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},72198:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const o={id:"index",title:"Introduction to ZIO Prelude",sidebar_label:"ZIO Prelude"},i=void 0,l={unversionedId:"index",id:"index",title:"Introduction to ZIO Prelude",description:"ZIO Prelude is a library focused on providing a core set of functional data types and abstractions that can help you solve a variety of day to day problems. The tools provided by ZIO Prelude fall into the following main categories:",source:"@site/node_modules/@zio.dev/zio-prelude/index.md",sourceDirName:".",slug:"/",permalink:"/zio-prelude/",draft:!1,tags:[],version:"current",frontMatter:{id:"index",title:"Introduction to ZIO Prelude",sidebar_label:"ZIO Prelude"},sidebar:"sidebar",next:{title:"Abstraction Diagrams",permalink:"/zio-prelude/abstraction-diagrams"}},s={},d=[{value:"Installation",id:"installation",level:2}],c={toc:d};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"ZIO Prelude is a library focused on providing a core set of functional data types and abstractions that can help you solve a variety of day to day problems. The tools provided by ZIO Prelude fall into the following main categories:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/zio-prelude/functionalabstractions/"},"Functional Abstractions"))," - Functional abstractions to describe different ways of combining data, making it easy for you to combine complex data types in a principled way."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/zio-prelude/functionaldatatypes/"},"Functional Data Types"))," - Additional data types to supplement the ones in the Scala standard library such as ",(0,a.kt)("inlineCode",{parentName:"li"},"Validation")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"NonEmptyList")," to enable more accurate domain modeling and handle common problems like data validation."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/zio-prelude/newtypes/"},"New Types"))," - Zero overhead newtypes and refined newtypes to allow you to increase the type safety of your code base with zero overhead and minimal boilerplate."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/zio-prelude/zpure/"},"ZPure"))," - A description of a computation that supports logging, context, state, and errors, providing all the functionality traditionally offered by monad transformers with dramatically better performance and ergonomics.")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Include ZIO Prelude in your project by adding the following to your build.sbt file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-prelude" % "1.0.0-RC16"\n')))}p.isMDXComponent=!0}}]);