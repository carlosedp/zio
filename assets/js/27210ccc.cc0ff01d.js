"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[80606],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(t),d=r,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return t?a.createElement(g,l(l({ref:n},p),{},{components:t})):a.createElement(g,l({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2700:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));const o={id:"configuration",title:"Configuration"},l=void 0,i={unversionedId:"configuration",id:"configuration",title:"Configuration",description:"Field naming",source:"@site/node_modules/@zio.dev/zio-json/configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/zio-json/configuration",draft:!1,tags:[],version:"current",frontMatter:{id:"configuration",title:"Configuration"}},s={},c=[{value:"Field naming",id:"field-naming",level:2},{value:"Extra fields",id:"extra-fields",level:2},{value:"@jsonDerive",id:"jsonderive",level:2}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"field-naming"},"Field naming"),(0,r.kt)("p",null,"By default the field names of a case class are used as the JSON fields, but it is easy to override this with an annotation ",(0,r.kt)("inlineCode",{parentName:"p"},"@jsonField"),"."),(0,r.kt)("p",null,"It is also possible to change the type hint that is used to discriminate case classes with ",(0,r.kt)("inlineCode",{parentName:"p"},"@jsonHint"),"."),(0,r.kt)("p",null,"For example, these annotations change the expected JSON of our ",(0,r.kt)("inlineCode",{parentName:"p"},"Fruit")," family"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.json._\n\nsealed trait Fruit\n\n@jsonHint("banaani") case class Banana(\n  @jsonField("bendiness") curvature: Double\n) extends Fruit\n\n@jsonHint("omena") case class Apple(\n  @jsonField("bad") poison: Boolean\n) extends Fruit\n\nobject Fruit {\n  implicit val encoder: JsonEncoder[Fruit] =\n    DeriveJsonEncoder.gen[Fruit]\n}\n\nval banana: Fruit = Banana(0.5)\n// banana: Fruit = Banana(curvature = 0.5)\nval apple: Fruit = Apple(false)\n// apple: Fruit = Apple(poison = false)\n')),(0,r.kt)("p",null,"from"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"Banana":{"curvature":0.5}}\n{"Apple":{"poison":false}}\n')),(0,r.kt)("p",null,"to"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'banana.toJson\n// res0: String = {"banaani":{"bendiness":0.5}}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'apple.toJson\n// res1: String = {"omena":{"bad":false}}\n')),(0,r.kt)("h2",{id:"extra-fields"},"Extra fields"),(0,r.kt)("p",null,"We can raise an error if we encounter unexpected fields by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"@jsonNoExtraFields")," annotation on a case class."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"@jsonNoExtraFields case class Watermelon(pips: Int)\n\nobject Watermelon {\n  implicit val decoder: JsonDecoder[Watermelon] =\n    DeriveJsonDecoder.gen[Watermelon]\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'"""{ "pips": 32 }""".fromJson[Watermelon]\n// res2: Either[String, Watermelon] = Right(value = Watermelon(pips = 32))\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'"""{ "pips": 32, "color": "yellow" }""".fromJson[Watermelon]\n// res3: Either[String, Watermelon] = Left(value = "(invalid extra field)")\n')),(0,r.kt)("h2",{id:"jsonderive"},"@jsonDerive"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Requires zio-json-macros")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@jsonDerive")," allows to reduce that needs to be written using an annotation macro to generate JsonDecoder/JsonEncoder at build-time."),(0,r.kt)("p",null,"For generating both Encoder and Decoder, simply use jsonDerive"),(0,r.kt)("p",null,"For example: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.json._\n\n@jsonDerive case class Watermelon(pips: Int)\n")),(0,r.kt)("p",null,"It is equivalent to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.json._\n\ncase class Watermelon(pips: Int)\n\nobject Watermelon {\n  implicit val codec: JsonCodec[Watermelon] =\n    DeriveJsonCodec.gen[Watermelon]\n}\n")),(0,r.kt)("p",null,"To generate only an encoder, we can set it as config parameter:"),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.json._\n\n@jsonDerive(JsonDeriveConfig.Encoder) case class Watermelon(pips: Int)\n")),(0,r.kt)("p",null,"It is equivalent to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.json._\n\ncase class Watermelon(pips: Int)\n\nobject Watermelon {\n  implicit val encorder: JsonEncoder[Watermelon] =\n    DeriveJsonEncoder.gen[Watermelon]\n}\n")),(0,r.kt)("p",null,"To generate only a decoder, we can set it as config parameter:"),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.json._\n\n@jsonDerive(JsonDeriveConfig.Decoder) case class Watermelon(pips: Int)\n")),(0,r.kt)("p",null,"It is equivalent to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.json._\n\ncase class Watermelon(pips: Int)\n\nobject Watermelon {\n  implicit val decoder: JsonDecoder[Watermelon] =\n    DeriveJsonDecoder.gen[Watermelon]\n}\n")))}u.isMDXComponent=!0}}]);