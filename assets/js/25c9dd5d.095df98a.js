"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[50028],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),f=a,h=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(h,l(l({ref:t},p),{},{components:r})):n.createElement(h,l({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},59953:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={id:"overview_handling_errors",title:"Handling Errors"},l=void 0,i={unversionedId:"overview/overview_handling_errors",id:"version-1.x/overview/overview_handling_errors",title:"Handling Errors",description:"This section looks at some of the common ways to detect and respond to failure.",source:"@site/versioned_docs/version-1.x/overview/handling_errors.md",sourceDirName:"overview",slug:"/overview/overview_handling_errors",permalink:"/version-1.x/overview/overview_handling_errors",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.x/overview/handling_errors.md",tags:[],version:"1.x",frontMatter:{id:"overview_handling_errors",title:"Handling Errors"},sidebar:"overview-sidebar",previous:{title:"Basic Operations",permalink:"/version-1.x/overview/overview_basic_operations"},next:{title:"Handling Resources",permalink:"/version-1.x/overview/overview_handling_resources"}},s={},c=[{value:"Either",id:"either",level:2},{value:"Catching All Errors",id:"catching-all-errors",level:2},{value:"Catching Some Errors",id:"catching-some-errors",level:2},{value:"Fallback",id:"fallback",level:2},{value:"Folding",id:"folding",level:2},{value:"Retrying",id:"retrying",level:2},{value:"Next Steps",id:"next-steps",level:2}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This section looks at some of the common ways to detect and respond to failure."),(0,a.kt)("h2",{id:"either"},"Either"),(0,a.kt)("p",null,"You can surface failures with ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO#either"),", which takes an ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO[R, E, A]")," and produces an ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO[R, Nothing, Either[E, A]]"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'val zeither: UIO[Either[String, Int]] = \n  IO.fail("Uh oh!").either\n')),(0,a.kt)("p",null,"You can submerge failures with ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO.absolve"),", which is the opposite of ",(0,a.kt)("inlineCode",{parentName:"p"},"either")," and turns an ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO[R, Nothing, Either[E, A]]")," into a ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO[R, E, A]"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'def sqrt(io: UIO[Double]): IO[String, Double] =\n  ZIO.absolve(\n    io.map(value =>\n      if (value < 0.0) Left("Value must be >= 0.0")\n      else Right(Math.sqrt(value))\n    )\n  )\n')),(0,a.kt)("h2",{id:"catching-all-errors"},"Catching All Errors"),(0,a.kt)("p",null,"If you want to catch and recover from all types of errors and effectfully attempt recovery, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"catchAll")," method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'val z: IO[IOException, Array[Byte]] = \n  openFile("primary.json").catchAll(_ => \n    openFile("backup.json"))\n')),(0,a.kt)("p",null,"In the callback passed to ",(0,a.kt)("inlineCode",{parentName:"p"},"catchAll"),", you may return an effect with a different error type (or perhaps ",(0,a.kt)("inlineCode",{parentName:"p"},"Nothing"),"), which will be reflected in the type of effect returned by ",(0,a.kt)("inlineCode",{parentName:"p"},"catchAll"),"."),(0,a.kt)("h2",{id:"catching-some-errors"},"Catching Some Errors"),(0,a.kt)("p",null,"If you want to catch and recover from only some types of exceptions and effectfully attempt recovery, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"catchSome")," method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'val data: IO[IOException, Array[Byte]] = \n  openFile("primary.data").catchSome {\n    case _ : FileNotFoundException => \n      openFile("backup.data")\n  }\n')),(0,a.kt)("p",null,"Unlike ",(0,a.kt)("inlineCode",{parentName:"p"},"catchAll"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"catchSome")," cannot reduce or eliminate the error type, although it can widen the error type to a broader class of errors."),(0,a.kt)("h2",{id:"fallback"},"Fallback"),(0,a.kt)("p",null,"You can try one effect, or, if it fails, try another effect, with the ",(0,a.kt)("inlineCode",{parentName:"p"},"orElse")," combinator:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'val primaryOrBackupData: IO[IOException, Array[Byte]] = \n  openFile("primary.data").orElse(openFile("backup.data"))\n')),(0,a.kt)("h2",{id:"folding"},"Folding"),(0,a.kt)("p",null,"Scala's ",(0,a.kt)("inlineCode",{parentName:"p"},"Option")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Either")," data types have ",(0,a.kt)("inlineCode",{parentName:"p"},"fold"),", which let you handle both failure and success at the same time. In a similar fashion, ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO")," effects also have several methods that allow you to handle both failure and success."),(0,a.kt)("p",null,"The first fold method, ",(0,a.kt)("inlineCode",{parentName:"p"},"fold"),", lets you non-effectfully handle both failure and success, by supplying a non-effectful handler for each case:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'lazy val DefaultData: Array[Byte] = Array(0, 0)\n\nval primaryOrDefaultData: UIO[Array[Byte]] = \n  openFile("primary.data").fold(\n    _    => DefaultData,\n    data => data)\n')),(0,a.kt)("p",null,"The second fold method, ",(0,a.kt)("inlineCode",{parentName:"p"},"foldM"),", lets you effectfully handle both failure and success, by supplying an effectful (but still pure) handler for each case:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'val primaryOrSecondaryData: IO[IOException, Array[Byte]] = \n  openFile("primary.data").foldM(\n    _    => openFile("secondary.data"),\n    data => ZIO.succeed(data))\n')),(0,a.kt)("p",null,"Nearly all error handling methods are defined in terms of ",(0,a.kt)("inlineCode",{parentName:"p"},"foldM"),", because it is both powerful and fast."),(0,a.kt)("p",null,"In the following example, ",(0,a.kt)("inlineCode",{parentName:"p"},"foldM")," is used to handle both failure and success of the ",(0,a.kt)("inlineCode",{parentName:"p"},"readUrls")," method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'val urls: UIO[Content] =\n  readUrls("urls.json").foldM(\n    error   => IO.succeed(NoContent(error)), \n    success => fetchContent(success)\n  )\n')),(0,a.kt)("h2",{id:"retrying"},"Retrying"),(0,a.kt)("p",null,"There are a number of useful methods on the ZIO data type for retrying failed effects. "),(0,a.kt)("p",null,"The most basic of these is ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO#retry"),", which takes a ",(0,a.kt)("inlineCode",{parentName:"p"},"Schedule")," and returns a new effect that will retry the first effect if it fails, according to the specified policy:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.clock._\n\nval retriedOpenFile: ZIO[Clock, IOException, Array[Byte]] = \n  openFile("primary.data").retry(Schedule.recurs(5))\n')),(0,a.kt)("p",null,"The next most powerful function is ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO#retryOrElse"),", which allows specification of a fallback to use, if the effect does not succeed with the specified policy:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'  openFile("primary.data").retryOrElse(\n    Schedule.recurs(5), \n    (_, _) => ZIO.succeed(DefaultData))\n')),(0,a.kt)("p",null,"The final method, ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO#retryOrElseEither"),", allows returning a different type for the fallback."),(0,a.kt)("p",null,"For more information on how to build schedules, see the documentation on ",(0,a.kt)("a",{parentName:"p",href:"/version-1.x/datatypes/misc/schedule"},"Schedule"),"."),(0,a.kt)("h2",{id:"next-steps"},"Next Steps"),(0,a.kt)("p",null,"If you are comfortable with basic error handling, then the next step is to learn about safe ",(0,a.kt)("a",{parentName:"p",href:"/version-1.x/overview/overview_handling_resources"},"resource handling"),"."))}d.isMDXComponent=!0}}]);