"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[25856],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(t),f=o,g=m["".concat(s,".").concat(f)]||m[f]||u[f]||i;return t?r.createElement(g,a(a({ref:n},p),{},{components:t})):r.createElement(g,a({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},52785:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=t(87462),o=(t(67294),t(3905));const i={id:"zooming-in-on-nested-values",title:"Zooming In on Nested Values"},a=void 0,c={unversionedId:"reference/error-management/operations/zooming-in-on-nested-values",id:"reference/error-management/operations/zooming-in-on-nested-values",title:"Zooming In on Nested Values",description:"Option",source:"@site/docs/reference/error-management/operations/zooming-in-on-nested-values.md",sourceDirName:"reference/error-management/operations",slug:"/reference/error-management/operations/zooming-in-on-nested-values",permalink:"/reference/error-management/operations/zooming-in-on-nested-values",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/error-management/operations/zooming-in-on-nested-values.md",tags:[],version:"current",frontMatter:{id:"zooming-in-on-nested-values",title:"Zooming In on Nested Values"},sidebar:"reference-sidebar",previous:{title:"Rejecting Some Success Values",permalink:"/reference/error-management/operations/rejecting-some-success-values"},next:{title:"Algebraic Data Types",permalink:"/reference/error-management/best-practices/algebraic-data-types"}},s={},l=[{value:"Option",id:"option",level:2},{value:"Either",id:"either",level:2}],p={toc:l};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"option"},"Option"),(0,o.kt)("p",null,"We can extract a value from a Some using ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO#some")," and then we can unsome it again using ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO#unsome"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'ZIO.attempt(Option("something")) // ZIO[Any, Throwable, Option[String]]\n  .some                          // ZIO[Any, Option[Throwable], String]\n  .unsome                        // ZIO[Any, Throwable, Option[String]]\n')),(0,o.kt)("h2",{id:"either"},"Either"),(0,o.kt)("p",null,"With ",(0,o.kt)("inlineCode",{parentName:"p"},"Either")," ZIO values, we can zoom in or out on the left or right side of an ",(0,o.kt)("inlineCode",{parentName:"p"},"Either"),", as well as we can do the inverse and zoom out:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\nval eitherEffect: ZIO[Any, Exception, Either[String, Int]] = ???\n\neitherEffect // ZIO[Any, Exception, Either[String, Int]]\n  .left      // ZIO[Any, Either[Exception, Int], String]\n  .unleft    // ZIO[Any, Exception, Either[String, Int]]    // ZIO[Any, Exception, Either[String, Int]]\n\neitherEffect // ZIO[Any, Exception, Either[String, Int]]\n  .right     // ZIO[Any, Either[String, Exception], Int]\n  .unright   // ZIO[Any, Exception, Either[String, Int]]\n")))}u.isMDXComponent=!0}}]);