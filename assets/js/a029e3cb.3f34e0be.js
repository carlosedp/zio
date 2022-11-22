"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[42531],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,g=u["".concat(s,".").concat(d)]||u[d]||p[d]||o;return n?i.createElement(g,l(l({ref:t},m),{},{components:n})):i.createElement(g,l({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var c=2;c<o;c++)l[c]=n[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},26539:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const o={id:"runtime",title:"Runtime"},l=void 0,r={unversionedId:"reference/core/runtime",id:"reference/core/runtime",title:"Runtime",description:"A Runtime[R] is capable of executing tasks within an environment R.",source:"@site/docs/reference/core/runtime.md",sourceDirName:"reference/core",slug:"/reference/core/runtime",permalink:"/reference/core/runtime",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/core/runtime.md",tags:[],version:"current",frontMatter:{id:"runtime",title:"Runtime"},sidebar:"reference-sidebar",previous:{title:"ZIOApp",permalink:"/reference/core/zioapp"},next:{title:"Exit",permalink:"/reference/core/exit"}},s={},c=[{value:"What is a Runtime System?",id:"what-is-a-runtime-system",level:2},{value:"Responsibilities of the Runtime System",id:"responsibilities-of-the-runtime-system",level:2},{value:"Running a ZIO Effect",id:"running-a-zio-effect",level:2},{value:"Default Runtime",id:"default-runtime",level:2},{value:"Top-level And Locally Scoped Runtimes",id:"top-level-and-locally-scoped-runtimes",level:2},{value:"Locally Scoped Runtime Configuration",id:"locally-scoped-runtime-configuration",level:2},{value:"Configuring Runtime by Providing Configuration Layers",id:"configuring-runtime-by-providing-configuration-layers",level:3},{value:"Configuring Runtime Using <code>bootstrap</code> Layer",id:"configuring-runtime-using-bootstrap-layer",level:3},{value:"Top-level Runtime Configuration",id:"top-level-runtime-configuration",level:2},{value:"Providing Environment to Runtime System",id:"providing-environment-to-runtime-system",level:2}],m={toc:c};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"Runtime[R]")," is capable of executing tasks within an environment ",(0,a.kt)("inlineCode",{parentName:"p"},"R"),"."),(0,a.kt)("p",null,"To run an effect, we need a ",(0,a.kt)("inlineCode",{parentName:"p"},"Runtime"),", which is capable of executing effects. Runtimes bundle a thread pool together with the environment that effects need."),(0,a.kt)("h2",{id:"what-is-a-runtime-system"},"What is a Runtime System?"),(0,a.kt)("p",null,"Whenever we write a ZIO program, we create a ZIO effect from ZIO constructors plus using its combinators. We are building a blueprint. ZIO effect is just a data structure that describes the execution of a concurrent program. So we end up with a tree data structure that contains lots of different data structures combined together to describe what the ZIO effect should do. This data structure doesn't do anything, it is just a description of a concurrent program."),(0,a.kt)("p",null,"So the most important thing we should keep in mind when we are working with a functional effect system like ZIO is that when we are writing code, printing a string onto the console, reading a file, querying a database, and so forth; We are just writing a workflow or blueprint of an application. We are just building a data structure."),(0,a.kt)("p",null,"So how can ZIO run these workflows? This is where ZIO Runtime System comes into play. Whenever we run an ",(0,a.kt)("inlineCode",{parentName:"p"},"unsaferun")," function, the Runtime System is responsible to step through all the instructions described by the ZIO effect and execute them."),(0,a.kt)("p",null,"To simplify everything, we can think of a Runtime System like a black box that takes both the ZIO effect (",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO[R, E, A]"),") and its environment (",(0,a.kt)("inlineCode",{parentName:"p"},"R"),"), it will run this effect and then will return its result as an ",(0,a.kt)("inlineCode",{parentName:"p"},"Either[E, A]")," value."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ZIO Runtime System",src:n(61107).Z,width:"427",height:"157"})),(0,a.kt)("h2",{id:"responsibilities-of-the-runtime-system"},"Responsibilities of the Runtime System"),(0,a.kt)("p",null,"Runtime Systems have a lot of responsibilities:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Execute every step of the blueprint")," \u2014 They have to execute every step of the blueprint in a while loop until it's done.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Handle unexpected errors")," \u2014 They have to handle unexpected errors, not just the expected ones but also the unexpected ones. ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Spawn concurrent fiber")," \u2014 They are actually responsible for the concurrency that effect systems have. They have to spawn a fiber every time we call ",(0,a.kt)("inlineCode",{parentName:"p"},"fork")," on an effect to spawn off a new fiber.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Cooperatively yield to other fibers")," \u2014 They have to cooperatively yield to other fibers so that fibers that are sort of hogging the spotlight, don't get to monopolize all the CPU resources. They have to make sure that the fibers split the CPU cores among all the fibers that are working.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Capture execution and stack traces")," \u2014 They have to keep track of where we are in the progress of our own user-land code so the nice detailed execution traces can be captured. ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Ensure finalizers are run appropriately")," \u2014 They have to ensure finalizers are run appropriately at the right point in all circumstances to make sure that resources are closed that clean-up logic is executed. This is the feature that powers Scope and all the other resource-safe constructs in ZIO.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Handle asynchronous callback")," \u2014 They have to handle this messy job of dealing with asynchronous callbacks. So we don't have to deal with async code. When we are doing ZIO, everything is just async out of the box. "))),(0,a.kt)("h2",{id:"running-a-zio-effect"},"Running a ZIO Effect"),(0,a.kt)("p",null,"There are two common ways to run a ZIO effect. Most of the time, we use the ",(0,a.kt)("a",{parentName:"p",href:"/reference/core/zioapp"},(0,a.kt)("inlineCode",{parentName:"a"},"ZIOAppDefault"))," trait. There are, however, some advanced use cases for which we need to directly feed a ZIO effect into the runtime system's ",(0,a.kt)("inlineCode",{parentName:"p"},"unsafeRun")," method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nobject RunZIOEffectUsingUnsafeRun extends scala.App {\n  val myAppLogic = for {\n    _ <- Console.printLine("Hello! What is your name?")\n    n <- Console.readLine\n    _ <- Console.printLine("Hello, " + n + ", good to meet you!")\n  } yield ()\n\n  Unsafe.unsafe { implicit unsafe =>\n      zio.Runtime.default.unsafe.run(\n        myAppLogic\n      ).getOrThrowFiberFailure()\n  }\n}\n')),(0,a.kt)("p",null,"We don't usually use this method to run our effects. One of the use cases of this method is when we are integrating the legacy (non-effectful code) with the ZIO effect. It also helps us to refactor a large legacy code base into a ZIO effect gradually; Assume we have decided to refactor a component in the middle of a legacy code and rewrite that with ZIO. We can start rewriting that component with the ZIO effect and then integrate that component with the existing code base, using the ",(0,a.kt)("inlineCode",{parentName:"p"},"unsafeRun")," function."),(0,a.kt)("h2",{id:"default-runtime"},"Default Runtime"),(0,a.kt)("p",null,"ZIO contains a default runtime called ",(0,a.kt)("inlineCode",{parentName:"p"},"Runtime.default")," designed to work well for mainstream usage. It is already implemented as below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"object Runtime {\n  val default: Runtime[Any] =\n    Runtime(ZEnvironment.empty, FiberRefs.empty, RuntimeFlags.default)\n}\n")),(0,a.kt)("p",null,"The default runtime contains minimum capabilities to bootstrap execution of ZIO tasks."),(0,a.kt)("p",null,"We can easily access the default ",(0,a.kt)("inlineCode",{parentName:"p"},"Runtime")," to run an effect:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"object MainApp extends scala.App {\n  val myAppLogic = ZIO.succeed(???)\n\n  val runtime = Runtime.default\n\n  Unsafe.unsafe { implicit unsafe =>\n    runtime.unsafe.run(myAppLogic).getOrThrowFiberFailure()\n  }\n}\n")),(0,a.kt)("h2",{id:"top-level-and-locally-scoped-runtimes"},"Top-level And Locally Scoped Runtimes"),(0,a.kt)("p",null,"In ZIO, we have two types of runtimes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Top-level runtime")," is the one that is used to run the entire ZIO application from the very beginning. There is only one top-level runtime when running a ZIO application. Here are some use-cases:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Creating a top level runtime in a mixed application. For example, if we are using an HTTP library that does not have direct support for ZIO we may need to use ",(0,a.kt)("inlineCode",{parentName:"li"},"Runtime.unsafe.run")," in the implementations of each of our routes."),(0,a.kt)("li",{parentName:"ul"},"Another use-case is when we want to install a custom monitoring or supervisor from the very beginning of the application."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Locally scoped runtimes")," are used during the execution of the ZIO application. They are local to a specific region of the code. Suppose we want to change the runtime configurations in the middle of a ZIO application. In such cases, we use locally scoped runtimes, for example:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"When we want to import an effectful or side-effecting application with a specific runtime."),(0,a.kt)("li",{parentName:"ul"},"In some performance-critical regions, we want to disable logging temporarily."),(0,a.kt)("li",{parentName:"ul"},"When we want to have a customized executor for running a portion of our code.")))),(0,a.kt)("p",null,"ZLayer provides a consistent way to customize and configure runtimes. Using layers to customize the runtime, enables us to use ZIO workflows. So a configuration workflow can be pure, effectful, or resourceful. Let's say we want to customize the runtime based on configuration information from a file or database."),(0,a.kt)("p",null,"In most cases, it is sufficient to customize application runtime using the ",(0,a.kt)("a",{parentName:"p",href:"#configuring-runtime-using-bootstrap-layer"},(0,a.kt)("inlineCode",{parentName:"a"},"bootstrap")," layer")," or ",(0,a.kt)("a",{parentName:"p",href:"#configuring-runtime-by-providing-configuration-layers"},"providing a custom configuration")," directly to our application. If none of these solutions fit to our problem, we can use ",(0,a.kt)("a",{parentName:"p",href:"#top-level-runtime-configuration"},"top-level runtime configurations"),"."),(0,a.kt)("p",null,"Let's talk about each solution in detail."),(0,a.kt)("h2",{id:"locally-scoped-runtime-configuration"},"Locally Scoped Runtime Configuration"),(0,a.kt)("p",null,"In ZIO all runtime configurations are inherited from their parent workflows. So whenever we access a runtime configuration, or obtain a runtime inside a workflow, we are accessing the runtime of the parent workflow. We can override the runtime configuration of the parent workflow by providing a new configuration to a region of the code. This is called locally scoped runtime configuration. When the execution of that region is finished, the runtime configuration will be restored to its original value."),(0,a.kt)("p",null,"We mainly use ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO#provideXYZ")," operators to provide a new runtime configuration to a specific region of the code:"),(0,a.kt)("h3",{id:"configuring-runtime-by-providing-configuration-layers"},"Configuring Runtime by Providing Configuration Layers"),(0,a.kt)("p",null,"By providing (",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO#provideXYZ"),") runtime configuration layers to a ZIO workflow, we can change the runtime configs easily:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nobject MainApp extends ZIOAppDefault {\n  val addSimpleLogger: ZLayer[Any, Nothing, Unit] =\n    Runtime.addLogger((_, _, _, message: () => Any, _, _, _, _) => println(message()))\n\n  def run = {\n    for {\n      _ <- ZIO.log("Application started!")\n      _ <- ZIO.log("Application is about to exit!")\n    } yield ()\n  }.provide(Runtime.removeDefaultLoggers ++ addSimpleLogger)\n}\n')),(0,a.kt)("p",null,"The output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"Application started!\nApplication is about to exit!\n")),(0,a.kt)("p",null,"To provide runtime configuration to a specific region of a ZIO application, we should provide the configuration layer only to that specific region:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nobject MainApp extends ZIOAppDefault {\n  val addSimpleLogger: ZLayer[Any, Nothing, Unit] =\n    Runtime.addLogger((_, _, _, message: () => Any, _, _, _, _) => println(message()))\n\n  def run =\n    for {\n      _ <- ZIO.log("Application started!")\n      _ <- {\n        for {\n          _ <- ZIO.log("I\'m not going to be logged!")\n          _ <- ZIO.log("I will be logged by the simple logger.").provide(addSimpleLogger)\n          _ <- ZIO.log("Reset back to the previous configuration, so I won\'t be logged.")\n        } yield ()\n      }.provide(Runtime.removeDefaultLoggers)\n      _ <- ZIO.log("Application is about to exit!")\n    } yield ()\n}\n')),(0,a.kt)("p",null,"The output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'timestamp=2022-08-31T14:28:34.711461Z level=INFO thread=#zio-fiber-6 message="Application started!" location=<empty>.MainApp.run file=ZIOApp.scala line=9\nI will be logged by the simple logger.\ntimestamp=2022-08-31T14:28:34.832035Z level=INFO thread=#zio-fiber-6 message="Application is about to exit!" location=<empty>.MainApp.run file=ZIOApp.scala line=17\n')),(0,a.kt)("h3",{id:"configuring-runtime-using-bootstrap-layer"},"Configuring Runtime Using ",(0,a.kt)("inlineCode",{parentName:"h3"},"bootstrap")," Layer"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"bootstrap")," layer is a special layer that is mainly used to acquiring and releasing services that are necessary for the application to run. However, it can also be applied to runtime customization as well. This solution requires us to override the ",(0,a.kt)("inlineCode",{parentName:"p"},"bootstrap")," layer from the ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIOApp")," trait."),(0,a.kt)("p",null,"By using this technique, after initialization of the top-level runtime, it will provide the ",(0,a.kt)("inlineCode",{parentName:"p"},"bootstrap")," layer to the ZIO application given through the ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nobject MainApp extends ZIOAppDefault {\n  val addSimpleLogger: ZLayer[Any, Nothing, Unit] =\n    Runtime.addLogger((_, _, _, message: () => Any, _, _, _, _) => println(message()))\n\n  override val bootstrap: ZLayer[Any, Nothing, Unit] =\n    Runtime.removeDefaultLoggers ++ addSimpleLogger\n\n  def run =\n    for {\n      _ <- ZIO.log("Application started!")\n      _ <- ZIO.log("Application is about to exit!")\n    } yield ()\n}\n')),(0,a.kt)("p",null,"The output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"Application started!\nApplication is about to exit!\n")),(0,a.kt)("p",null,"Although using this method will apply the configuration layer to the whole ZIO application, it is categorized as local runtime configuration, because the ",(0,a.kt)("inlineCode",{parentName:"p"},"bootstrap")," layer is evaluated and applied after the top-level runtime is initialized. So it will only be applied to the ZIO application given through the ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," method."),(0,a.kt)("p",null,"To elaborate more on this, let's look at the following example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nobject MainApp extends ZIOAppDefault {\n  val addSimpleLogger: ZLayer[Any, Nothing, Unit] =\n    Runtime.addLogger((_, _, _, message: () => Any, _, _, _, _) => println(message()))\n  \n  val effectfulConfiguration: ZLayer[Any, Nothing, Unit] =\n    ZLayer.fromZIO(ZIO.log("Started effectful workflow to customize runtime configuration"))\n\n  override val bootstrap: ZLayer[Any, Nothing, Unit] =\n    Runtime.removeDefaultLoggers ++ addSimpleLogger ++ effectfulConfiguration\n\n  def run =\n    for {\n      _ <- ZIO.log("Application started!")\n      _ <- ZIO.log("Application is about to exit!")\n    } yield ()\n}\n')),(0,a.kt)("p",null,"What do we expect to see as the output? We have a ",(0,a.kt)("inlineCode",{parentName:"p"},"Runtime.removeDefaultLoggers")," which removes the default logger from the runtime. So we expect to see log messages only from the simple logger. But that is not the case. We have an effectful configuration layer that is evaluated after the top-level runtime is initialized. So we can see the log message related to the initialization of ",(0,a.kt)("inlineCode",{parentName:"p"},"effectfulConfiguration")," layer from the default logger:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'timestamp=2022-09-01T08:07:47.870219Z level=INFO thread=#zio-fiber-6 message="Started effectful workflow to customize runtime configuration" location=<empty>.MainApp.effectfulConfiguration file=ZIOApp.scala line=8\nApplication started!\nApplication is about to exit!\n')),(0,a.kt)("h2",{id:"top-level-runtime-configuration"},"Top-level Runtime Configuration"),(0,a.kt)("p",null,"When we write a ZIO application using the ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIOAppDefault")," trait, a default top-level runtime is created and used to run the application automatically under the hood. Further, we can customize the rest of the ZIO application by providing locally scoped configuration layers using ",(0,a.kt)("a",{parentName:"p",href:"#configuring-runtime-by-providing-configuration-layers"},(0,a.kt)("inlineCode",{parentName:"a"},"provideXYZ")," operations")," or ",(0,a.kt)("a",{parentName:"p",href:"#configuring-runtime-using-bootstrap-layer"},(0,a.kt)("inlineCode",{parentName:"a"},"bootstrap")," layer"),"."),(0,a.kt)("p",null,"This is usually sufficient for lots of ZIO applications, but it is not always the case. There are cases where we want to customize the runtime of the entire ZIO application from the top level."),(0,a.kt)("p",null,"In such cases, we need to create a top-level runtime by unsafely running the configuration layer to convert that configuration to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Runtime")," by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"Runtime.unsafe.fromLayer")," operator:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"val runtime: Runtime[Any] =\n  Unsafe.unsafe { implicit unsafe =>\n    Runtime.unsafe.fromLayer(layer)\n  }\n")),(0,a.kt)("p",null,"Let's try a fully working example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nobject MainApp extends ZIOAppDefault {\n\n  // In a real-world application we might need to implement a `sl4jlogger` layer\n  val addSimpleLogger: ZLayer[Any, Nothing, Unit] =\n    Runtime.addLogger((_, _, _, message: () => Any, _, _, _, _) => println(message()))\n\n  val layer: ZLayer[Any, Nothing, Unit] =\n    Runtime.removeDefaultLoggers ++ addSimpleLogger\n\n  override val runtime: Runtime[Any] =\n    Unsafe.unsafe { implicit unsafe =>\n      Runtime.unsafe.fromLayer(layer)\n    }\n\n  def run = ZIO.log("Application started!")\n}\n')),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},'Keep in mind that only the "bootstrap" layer of applications will be combined when we compose two ZIO applications. Therefore, when we compose two ZIO programs, top-level runtime configurations won\'t be integrated.')),(0,a.kt)("p",null,"Another use-case of top-level runtimes is when we want to integrate our ZIO application inside a legacy application:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\nobject MainApp {\n  val sl4jlogger: ZLogger[String, Any] = ???\n\n  def legacyApplication(input: Int): Unit = ???\n\n  val zioWorkflow: ZIO[Any, Nothing, Int] = ???\n\n  val runtime: Runtime[Unit] =\n    Unsafe.unsafe { implicit unsafe =>\n      Runtime.unsafe\n        .fromLayer(\n          Runtime.removeDefaultLoggers ++ Runtime.addLogger(sl4jlogger)\n        )\n    }\n\n  def zioApplication(): Int =\n    Unsafe.unsafe { implicit unsafe =>\n      runtime.unsafe\n        .run(zioWorkflow)\n        .getOrThrowFiberFailure()\n    }\n\n  def main(args: Array[String]): Unit = {\n    val result = zioApplication()\n    legacyApplication(result)\n  }\n\n}\n")),(0,a.kt)("h2",{id:"providing-environment-to-runtime-system"},"Providing Environment to Runtime System"),(0,a.kt)("p",null,"The custom runtime can be used to run many different effects that all require the same environment, so we don't have to call ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO#provide")," on all of them before we run them."),(0,a.kt)("p",null,"For example, assume we want to create a ",(0,a.kt)("inlineCode",{parentName:"p"},"Runtime")," for services that are for testing purposes, and they don't interact with real external APIs. So we can create a runtime, especially for testing."),(0,a.kt)("p",null,"Let's say we have defined two ",(0,a.kt)("inlineCode",{parentName:"p"},"LoggingService")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"EmailService")," services:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"trait LoggingService {\n  def log(line: String): UIO[Unit]\n}\n\nobject LoggingService {\n  def log(line: String): URIO[LoggingService, Unit] =\n    ZIO.serviceWith[LoggingService](_.log(line))\n}\n\ntrait EmailService {\n  def send(user: String, content: String): Task[Unit]\n}\n\nobject EmailService {\n  def send(user: String, content: String): ZIO[EmailService, Throwable, Unit] =\n    ZIO.serviceWith[EmailService](_.send(user, content))\n}\n")),(0,a.kt)("p",null,"We are going to implement a live version of ",(0,a.kt)("inlineCode",{parentName:"p"},"LoggingService")," and also a fake version of ",(0,a.kt)("inlineCode",{parentName:"p"},"EmailService")," for testing:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'case class LoggingServiceLive() extends LoggingService {\n  override def log(line: String): UIO[Unit] =\n    ZIO.succeed(print(line))\n}\n\ncase class EmailServiceFake() extends EmailService {\n  override def send(user: String, content: String): Task[Unit] =\n    ZIO.attempt(println(s"sending email to $user"))\n}\n')),(0,a.kt)("p",null,"Let's create a custom runtime that contains these two service implementations in its environment:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"val testableRuntime = Runtime(\n  ZEnvironment[LoggingService, EmailService](LoggingServiceLive(), EmailServiceFake()),\n  FiberRefs.empty,\n  RuntimeFlags.default\n)\n")),(0,a.kt)("p",null,"Also, we can replace the environment of the default runtime with our own custom environment, which allows us to add new services to the ZIO environment:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"val testableRuntime: Runtime[LoggingService with EmailService] =\n  Runtime.default.withEnvironment {\n    ZEnvironment[LoggingService, EmailService](LoggingServiceLive(), EmailServiceFake())\n  }\n")),(0,a.kt)("p",null,"Now we can run our effects using this custom ",(0,a.kt)("inlineCode",{parentName:"p"},"Runtime"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'Unsafe.unsafe { implicit unsafe =>\n    testableRuntime.unsafe.run(\n      for {\n        _ <- LoggingService.log("sending newsletter")\n        _ <- EmailService.send("David", "Hi! Here is today\'s newsletter.")\n      } yield ()\n    ).getOrThrowFiberFailure()\n}\n')))}p.isMDXComponent=!0},61107:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSI0MjciIGhlaWdodD0iMTU3IiB2aWV3Qm94PSItMC41IC0wLjUgNDI3IDE1NyIgY29udGVudD0iJmx0O214ZmlsZSBob3N0PSZxdW90O2FwcC5kaWFncmFtcy5uZXQmcXVvdDsgbW9kaWZpZWQ9JnF1b3Q7MjAyMS0wNS0wM1QxNDoxMzowNi45MDVaJnF1b3Q7IGFnZW50PSZxdW90OzUuMCAoWDExOyBMaW51eCB4ODZfNjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS84Ny4wLjQyODAuNjYgU2FmYXJpLzUzNy4zNiZxdW90OyBldGFnPSZxdW90O3ZsZEdNX2syRDh5LU9jMFNXaFJaJnF1b3Q7IHZlcnNpb249JnF1b3Q7MTQuNi45JnF1b3Q7IHR5cGU9JnF1b3Q7ZGV2aWNlJnF1b3Q7Jmd0OyZsdDtkaWFncmFtIGlkPSZxdW90OzBsamJtNVJSenR3YlJuZzVERlNyJnF1b3Q7IG5hbWU9JnF1b3Q7UGFnZS0xJnF1b3Q7Jmd0OzdWZE5qOW93RVAwMWtkckRTb2tEQVk3QTBnKzFWYXVscTBxOXVjbVFHSnlZT2hNZy9mV2R4QTVKZ04xdTFkMVdXcFVEMkc4bVkvdTltWEZ3L0hsNmVLMzVOdm1nSXBBT2M2T0Q0MTg3akkzR2pMNHJvRFRBd1BNTkVHc1JHY2hyZ2FYNEFSWjBMVnFJQ1BLZUl5b2xVV3o3WUtpeURFTHNZVnhydGUrN3JaVHNyN3JsTVp3Qnk1RExjL1NMaURBeDZKaU5XdndOaURocFZ2YUNpYkY4NCtFbTFxckk3SG9PODFmMXg1aFQzc1N5QjgwVEhxbDlCL0lYamovWFNxRVpwWWM1eUlyYWhqYnozS3M3ck1kOWE4andJUThFNVhSeXUzUEg2eUxjdlF2WmFwMHRQMSt4d0lUWmNWbEFjNDU2dDFnMkROVm5oQ3FLNi9pemZTSVFsbHNlVnRZOXBRUmhDYWFTWmg0Tkk1NG50Vzh6K2NRUlFXYzF3dHdCb1VjaXFuRDVCakJNN0NTV1BNL3RzNHFXRUZoYWk5MGxhSVREbmVmM2pxeFNzb0pLQVhWSkxzMERnUlhDSnFvM3R2TjlLL3VnRVN2cFNqNjBJTGVwRmg5anQzVFR3REwrTyt5elg3TVBFYVdyblNxTmlZcFZ4dVdpUldkOWZWcWY5MHB0TFpsclFDeHQ3ZkVDVlY4enMyYTEwUDNVMHI1VW9VTzQ1MFJOQlhNZEE5N25ON3FzbFFiSlVlejZHM2w4M2dmL2FmNExOSHNYc2p1UXROL1pTdEdKdS93SDN3dlZHSzd5bXNFcE9YaUQ3YUUxMGlpdWZyKysvVWkybXlKRGtRS05sbVdPa0RheGFhc212SEgrczNiVzYxV1AwSVI4dDkrRWp0ZGdwd2tkRzFXM0NVMmVxZ2Q1azJmWGc0S0hWc2MvTFk3em0vZkZqY01vbUZ2bDkzQm1Kd3Z6TTNXRzF5L1BoS0ZFeEpPRVJhMDJNRmRTYVVJeWxWWHFySVNVSnhDWElxNHU1WkRvQmNKblZWb0xlaTJhV2tNcW9xaVc5bEtGOU9WK2dzdVpEWWJuZGVGZXFBdjJaSFV4T3RObklUQWhyb2F6amliUFY1TGhhYXU2SU1uNGNSU2hhZnNlWE5zNi96WDh4VTg9Jmx0Oy9kaWFncmFtJmd0OyZsdDsvbXhmaWxlJmd0OyIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTsiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCB4MT0iMCUiIHkxPSIwJSIgeDI9IjAlIiB5Mj0iMTAwJSIgaWQ9Im14LWdyYWRpZW50LWZmZmZmZi0wLjktZmZmZmZmLTAuMS1zLTAiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNmZmZmZmY7c3RvcC1vcGFjaXR5OjAuOSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2ZmZmZmZjtzdG9wLW9wYWNpdHk6MC4xIi8+PC9saW5lYXJHcmFkaWVudD48ZmlsdGVyIGlkPSJkcm9wU2hhZG93Ij48ZmVHYXVzc2lhbkJsdXIgaW49IlNvdXJjZUFscGhhIiBzdGREZXZpYXRpb249IjEuNyIgcmVzdWx0PSJibHVyIi8+PGZlT2Zmc2V0IGluPSJibHVyIiBkeD0iMyIgZHk9IjMiIHJlc3VsdD0ib2Zmc2V0Qmx1ciIvPjxmZUZsb29kIGZsb29kLWNvbG9yPSIjM0Q0NTc0IiBmbG9vZC1vcGFjaXR5PSIwLjQiIHJlc3VsdD0ib2Zmc2V0Q29sb3IiLz48ZmVDb21wb3NpdGUgaW49Im9mZnNldENvbG9yIiBpbjI9Im9mZnNldEJsdXIiIG9wZXJhdG9yPSJpbiIgcmVzdWx0PSJvZmZzZXRCbHVyIi8+PGZlQmxlbmQgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0ib2Zmc2V0Qmx1ciIvPjwvZmlsdGVyPjwvZGVmcz48ZyBmaWx0ZXI9InVybCgjZHJvcFNoYWRvdykiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI0MjAiIGhlaWdodD0iMTUwIiBmaWxsLW9wYWNpdHk9IjAiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAiIHN0cm9rZS1kYXNoYXJyYXk9IjEgNCIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxwYXRoIGQ9Ik0gLTEgLTEgTCAtMSA2MCBRIDIxMCAxMDUgNDIxIDYwIEwgNDIxIC0xIFoiIGZpbGwtb3BhY2l0eT0iMCIgZmlsbD0idXJsKCNteC1ncmFkaWVudC1mZmZmZmYtMC45LWZmZmZmZi0wLjEtcy0wKSIgc3Ryb2tlPSJub25lIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PHBhdGggZD0iTSAzMDAgNzUgTCAzMzMuNjMgNzUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0ic3Ryb2tlIi8+PHBhdGggZD0iTSAzMzguODggNzUgTCAzMzEuODggNzguNSBMIDMzMy42MyA3NSBMIDMzMS44OCA3MS41IFoiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PHBhdGggZD0iTSAzMDAgNzUgTCAzMzMuNjMgNzUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0ic3Ryb2tlIi8+PHBhdGggZD0iTSAzMzguODggNzUgTCAzMzEuODggNzguNSBMIDMzMy42MyA3NSBMIDMzMS44OCA3MS41IFoiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PHJlY3QgeD0iMTQwIiB5PSIzMCIgd2lkdGg9IjE2MCIgaGVpZ2h0PSI5MCIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMDAwMDAwIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuNSAtMC41KSI+PHN3aXRjaD48Zm9yZWlnbk9iamVjdCBzdHlsZT0ib3ZlcmZsb3c6IHZpc2libGU7IHRleHQtYWxpZ246IGxlZnQ7IiBwb2ludGVyLWV2ZW50cz0ibm9uZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgcmVxdWlyZWRGZWF0dXJlcz0iaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IHVuc2FmZSBjZW50ZXI7IGp1c3RpZnktY29udGVudDogdW5zYWZlIGNlbnRlcjsgd2lkdGg6IDE1OHB4OyBoZWlnaHQ6IDFweDsgcGFkZGluZy10b3A6IDc1cHg7IG1hcmdpbi1sZWZ0OiAxNDFweDsiPjxkaXYgc3R5bGU9ImJveC1zaXppbmc6IGJvcmRlci1ib3g7IGZvbnQtc2l6ZTogMDsgdGV4dC1hbGlnbjogY2VudGVyOyAiPjxkaXYgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxMnB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogIzAwMDAwMDsgbGluZS1oZWlnaHQ6IDEuMjsgcG9pbnRlci1ldmVudHM6IGFsbDsgd2hpdGUtc3BhY2U6IG5vcm1hbDsgd29yZC13cmFwOiBub3JtYWw7ICI+PGZvbnQgc3R5bGU9ImZvbnQtc2l6ZTogMTRweCI+WklPIFJ1bnRpbWUgU3lzdGVtPC9mb250PjwvZGl2PjwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48dGV4dCB4PSIyMjAiIHk9Ijc5IiBmaWxsPSIjMDAwMDAwIiBmb250LWZhbWlseT0iSGVsdmV0aWNhIiBmb250LXNpemU9IjEycHgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlpJTyBSdW50aW1lIFN5c3RlbTwvdGV4dD48L3N3aXRjaD48L2c+PHBhdGggZD0iTSAxMDAgNzUgTCAxMzMuNjMgNzUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0ic3Ryb2tlIi8+PHBhdGggZD0iTSAxMzguODggNzUgTCAxMzEuODggNzguNSBMIDEzMy42MyA3NSBMIDEzMS44OCA3MS41IFoiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PHJlY3QgeD0iMCIgeT0iNjUiIHdpZHRoPSIxMDAiIGhlaWdodD0iMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0ibm9uZSIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjUgLTAuNSkiPjxzd2l0Y2g+PGZvcmVpZ25PYmplY3Qgc3R5bGU9Im92ZXJmbG93OiB2aXNpYmxlOyB0ZXh0LWFsaWduOiBsZWZ0OyIgcG9pbnRlci1ldmVudHM9Im5vbmUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiB1bnNhZmUgY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHVuc2FmZSBjZW50ZXI7IHdpZHRoOiA5OHB4OyBoZWlnaHQ6IDFweDsgcGFkZGluZy10b3A6IDc1cHg7IG1hcmdpbi1sZWZ0OiAxcHg7Ij48ZGl2IHN0eWxlPSJib3gtc2l6aW5nOiBib3JkZXItYm94OyBmb250LXNpemU6IDA7IHRleHQtYWxpZ246IGNlbnRlcjsgIj48ZGl2IHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTJweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6ICMwMDAwMDA7IGxpbmUtaGVpZ2h0OiAxLjI7IHBvaW50ZXItZXZlbnRzOiBhbGw7IHdoaXRlLXNwYWNlOiBub3JtYWw7IHdvcmQtd3JhcDogbm9ybWFsOyAiPihSLCBaSU9bUiwgRSwgQV0pPC9kaXY+PC9kaXY+PC9kaXY+PC9mb3JlaWduT2JqZWN0Pjx0ZXh0IHg9IjUwIiB5PSI3OSIgZmlsbD0iIzAwMDAwMCIgZm9udC1mYW1pbHk9IkhlbHZldGljYSIgZm9udC1zaXplPSIxMnB4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4oUiwgWklPW1IsIEUsIEFdKTwvdGV4dD48L3N3aXRjaD48L2c+PHJlY3QgeD0iMzQwIiB5PSI2NSIgd2lkdGg9IjgwIiBoZWlnaHQ9IjIwIiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC41IC0wLjUpIj48c3dpdGNoPjxmb3JlaWduT2JqZWN0IHN0eWxlPSJvdmVyZmxvdzogdmlzaWJsZTsgdGV4dC1hbGlnbjogbGVmdDsiIHBvaW50ZXItZXZlbnRzPSJub25lIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiByZXF1aXJlZEZlYXR1cmVzPSJodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9mZWF0dXJlI0V4dGVuc2liaWxpdHkiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogdW5zYWZlIGNlbnRlcjsganVzdGlmeS1jb250ZW50OiB1bnNhZmUgY2VudGVyOyB3aWR0aDogNzhweDsgaGVpZ2h0OiAxcHg7IHBhZGRpbmctdG9wOiA3NXB4OyBtYXJnaW4tbGVmdDogMzQxcHg7Ij48ZGl2IHN0eWxlPSJib3gtc2l6aW5nOiBib3JkZXItYm94OyBmb250LXNpemU6IDA7IHRleHQtYWxpZ246IGNlbnRlcjsgIj48ZGl2IHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTJweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6ICMwMDAwMDA7IGxpbmUtaGVpZ2h0OiAxLjI7IHBvaW50ZXItZXZlbnRzOiBhbGw7IHdoaXRlLXNwYWNlOiBub3JtYWw7IHdvcmQtd3JhcDogbm9ybWFsOyAiPkVpdGhlcltFLCBBXTwvZGl2PjwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48dGV4dCB4PSIzODAiIHk9Ijc5IiBmaWxsPSIjMDAwMDAwIiBmb250LWZhbWlseT0iSGVsdmV0aWNhIiBmb250LXNpemU9IjEycHgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkVpdGhlcltFLCBBXTwvdGV4dD48L3N3aXRjaD48L2c+PC9nPjxzd2l0Y2g+PGcgcmVxdWlyZWRGZWF0dXJlcz0iaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5Ii8+PGEgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwtNSkiIHhsaW5rOmhyZWY9Imh0dHBzOi8vd3d3LmRpYWdyYW1zLm5ldC9kb2MvZmFxL3N2Zy1leHBvcnQtdGV4dC1wcm9ibGVtcyIgdGFyZ2V0PSJfYmxhbmsiPjx0ZXh0IHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMTBweCIgeD0iNTAlIiB5PSIxMDAlIj5WaWV3ZXIgZG9lcyBub3Qgc3VwcG9ydCBmdWxsIFNWRyAxLjE8L3RleHQ+PC9hPjwvc3dpdGNoPjwvc3ZnPg=="}}]);