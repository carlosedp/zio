"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[93621],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),g=i,h=c["".concat(s,".").concat(g)]||c[g]||u[g]||o;return a?n.createElement(h,r(r({ref:t},d),{},{components:a})):n.createElement(h,r({ref:t},d))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},45057:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));const o={id:"zvalidation",title:"ZValidation"},r=void 0,l={unversionedId:"functionaldatatypes/zvalidation",id:"functionaldatatypes/zvalidation",title:"ZValidation",description:"Like many other data types in ZIO, the Validation data type we learned about before is actually a type alias for a more general data type called ZValidation.",source:"@site/node_modules/@zio.dev/zio-prelude/functionaldatatypes/zvalidation.md",sourceDirName:"functionaldatatypes",slug:"/functionaldatatypes/zvalidation",permalink:"/zio-prelude/functionaldatatypes/zvalidation",draft:!1,tags:[],version:"current",frontMatter:{id:"zvalidation",title:"ZValidation"},sidebar:"sidebar",previous:{title:"ZSet",permalink:"/zio-prelude/functionaldatatypes/zset"},next:{title:"New Types",permalink:"/zio-prelude/newtypes/"}},s={},p=[{value:"Writing Values To The Log",id:"writing-values-to-the-log",level:2},{value:"Transforming The Log",id:"transforming-the-log",level:2},{value:"Reading Values From The Log",id:"reading-values-from-the-log",level:2}],d={toc:p};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Like many other data types in ZIO, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Validation")," data type we learned about before is actually a type alias for a more general data type called ",(0,i.kt)("inlineCode",{parentName:"p"},"ZValidation"),"."),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"ZValidation[W, E, A]")," is either a ",(0,i.kt)("inlineCode",{parentName:"p"},"Success")," with a value of type ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," or a ",(0,i.kt)("inlineCode",{parentName:"p"},"Failure")," with one or more errors of type ",(0,i.kt)("inlineCode",{parentName:"p"},"E"),", and in either case contains a log of values of type ",(0,i.kt)("inlineCode",{parentName:"p"},"W"),". A ",(0,i.kt)("inlineCode",{parentName:"p"},"Validation[E, A]")," is just a type alias for ",(0,i.kt)("inlineCode",{parentName:"p"},"ZValidation[Nothing, E, A]")," and since the log type was ",(0,i.kt)("inlineCode",{parentName:"p"},"Nothing")," we were able to ignore it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"type Validation[+E, +A] = ZValidation[Nothing, E, A]\n")),(0,i.kt)("p",null,"This type ",(0,i.kt)("inlineCode",{parentName:"p"},"W")," can be used for two main purposes."),(0,i.kt)("p",null,'First, it can be used to maintain a "log" of the things we did in validating some data. In some cases it can be important for auditing or debugging purposes to know not just whether data is valid or why not but the steps we took in validating that data.'),(0,i.kt)("p",null,'Second, it can be used to represent a concept of "warnings".'),(0,i.kt)("p",null,"By definition a ",(0,i.kt)("inlineCode",{parentName:"p"},"Validation")," is either a success with a value or a failure with one or more errors. So if an error occurred the data is invalid and there is no value at all."),(0,i.kt)("p",null,"However, we can imagine some cases where data might be questionable or noteworthy in some way without being invalid."),(0,i.kt)("p",null,"For example, we might say that a valid ",(0,i.kt)("inlineCode",{parentName:"p"},"Person")," must have an age that is not negative, so a ",(0,i.kt)("inlineCode",{parentName:"p"},"Person")," with an age of ",(0,i.kt)("inlineCode",{parentName:"p"},"10")," would still be valid data. But depending on the application this data might still be unusual, for example if this ",(0,i.kt)("inlineCode",{parentName:"p"},"Person")," represents a credit card customer."),(0,i.kt)("p",null,"In cases like this it would be useful to have some way of capturing these warnings as data and propagating them through our validation logic so that we can see all the warnings that occurred and take some further action based on them. This could include logging them, triggering a user to confirm that their input is correct, or triggering other processes based on the content of these warnings."),(0,i.kt)("p",null,"To model this we can represent a ",(0,i.kt)("inlineCode",{parentName:"p"},"ZValidation")," as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.{Chunk, NonEmptyChunk}\n\ntrait ZValidation[+W, +E, +A]\n\nobject ZValidation {\n  case class Success[W, A](log: Chunk[W], value: A) extends ZValidation[W, Nothing, A]\n  case class Failure[W, E](log: Chunk[W], errors: NonEmptyChunk[E]) extends ZValidation[W, E, Nothing]\n}\n")),(0,i.kt)("p",null,"Now both validation successes and failures have a log of values of type ",(0,i.kt)("inlineCode",{parentName:"p"},"W")," so we can keep track of values in the log regardless of whether the validation is a success or a failure."),(0,i.kt)("p",null,"Since a ",(0,i.kt)("inlineCode",{parentName:"p"},"Validation")," is a ",(0,i.kt)("inlineCode",{parentName:"p"},"ZValidation")," all of the operators we learned about before for ",(0,i.kt)("inlineCode",{parentName:"p"},"Validation")," still work. So we will focus here on operators that are specific to working with the ",(0,i.kt)("inlineCode",{parentName:"p"},"W")," type."),(0,i.kt)("h2",{id:"writing-values-to-the-log"},"Writing Values To The Log"),(0,i.kt)("p",null,"To write values to the log we can just use the ",(0,i.kt)("inlineCode",{parentName:"p"},"log")," operator on the ",(0,i.kt)("inlineCode",{parentName:"p"},"ZValidation")," trait."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"trait ZValidation[+W, +E, +A] {\n  def log[W1 >: W](w: W1): ZValidation[W1, E, A]\n}\n")),(0,i.kt)("p",null,"This will just append the specified value to the log without changing the success or failure value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"ZValidation"),"."),(0,i.kt)("p",null,"For example, we could add a warning that the ",(0,i.kt)("inlineCode",{parentName:"p"},"Person")," is a child like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.prelude.ZValidation\n\ndef validateAge(age: Int): ZValidation[String, String, Int] =\n  if (age < 0) ZValidation.fail(s"Age $age was less than zero")\n  else if (age < 18) ZValidation.succeed(age).log(s"Age $age is less than 18")\n  else ZValidation.succeed(age)\n')),(0,i.kt)("p",null,"Notice that we used exactly the same constructors as when we were working with ",(0,i.kt)("inlineCode",{parentName:"p"},"Validation")," except we now use the ",(0,i.kt)("inlineCode",{parentName:"p"},"log")," operator to append to the log."),(0,i.kt)("h2",{id:"transforming-the-log"},"Transforming The Log"),(0,i.kt)("p",null,"We can transform the value of the log entries with the ",(0,i.kt)("inlineCode",{parentName:"p"},"mapLog")," operator."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"trait ZValidation[+W, +E, +A] {\n  def mapLog[W2](f: W => W2): ZValidation[W2, E, A]\n}\n")),(0,i.kt)("p",null,"This can be useful to transform the log values into some common data model, for example mapping ",(0,i.kt)("inlineCode",{parentName:"p"},"String")," logs into some more structured data format."),(0,i.kt)("h2",{id:"reading-values-from-the-log"},"Reading Values From The Log"),(0,i.kt)("p",null,"We can get values from the log by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"getLog")," operator, which just returns the current contents of the log."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.Chunk\n\ntrait ZValidation[+W, +E, +A] {\n  def getLog: Chunk[W]\n}\n")),(0,i.kt)("p",null,"Since a ",(0,i.kt)("inlineCode",{parentName:"p"},"ZValidation")," is just a value we can use a combination of the ",(0,i.kt)("inlineCode",{parentName:"p"},"getLog")," operator and ",(0,i.kt)("inlineCode",{parentName:"p"},"fold")," to extract the log and the errors or success value."))}u.isMDXComponent=!0}}]);