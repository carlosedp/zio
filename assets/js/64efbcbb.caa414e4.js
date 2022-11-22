"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[28835],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return t?a.createElement(f,r(r({ref:n},c),{},{components:t})):a.createElement(f,r({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},63832:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=t(87462),o=(t(67294),t(3905));const i={id:"index",title:"Introduction to ZIO's Control Flow Operators",sidebar_label:"Control Flow"},r=void 0,l={unversionedId:"reference/control-flow/index",id:"reference/control-flow/index",title:"Introduction to ZIO's Control Flow Operators",description:"Although we have access to built-in scala control flow structures, ZIO has several control flow combinators. In this section, we are going to introduce different ways of controlling flows in ZIO applications.",source:"@site/docs/reference/control-flow/index.md",sourceDirName:"reference/control-flow",slug:"/reference/control-flow/",permalink:"/reference/control-flow/",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/control-flow/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Introduction to ZIO's Control Flow Operators",sidebar_label:"Control Flow"},sidebar:"reference-sidebar",previous:{title:"Cause",permalink:"/reference/core/cause"},next:{title:"Introduction to Error Management in ZIO",permalink:"/reference/error-management/"}},s={},p=[{value:"<code>if</code> Expression",id:"if-expression",level:2},{value:"Conditional Operators",id:"conditional-operators",level:2},{value:"<code>when</code>",id:"when",level:3},{value:"<code>unless</code>",id:"unless",level:3},{value:"<code>ifZIO</code>",id:"ifzio",level:3},{value:"Loop Operators",id:"loop-operators",level:2},{value:"<code>loop</code>",id:"loop",level:3},{value:"<code>iterate</code>",id:"iterate",level:3},{value:"<code>foreach</code>",id:"foreach",level:3},{value:"try/catch/finally",id:"trycatchfinally",level:2}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Although we have access to built-in scala control flow structures, ZIO has several control flow combinators. In this section, we are going to introduce different ways of controlling flows in ZIO applications."),(0,o.kt)("h2",{id:"if-expression"},(0,o.kt)("inlineCode",{parentName:"h2"},"if")," Expression"),(0,o.kt)("p",null,"When working with ZIO values, we can also work with built-in scala if-then-else expressions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\ndef validateWeightOption(weight: Double): ZIO[Any, Nothing, Option[Double]] =\n  if (weight >= 0)\n    ZIO.some(weight)\n  else\n    ZIO.none\n")),(0,o.kt)("p",null,"Also, we can encode invalid inputs using the error channel:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\ndef validateWeightOrFail(weight: Double): ZIO[Any, String, Double] =\n  if (weight >= 0)\n    ZIO.succeed(weight)\n  else\n    ZIO.fail(s"negative input: $weight")\n')),(0,o.kt)("p",null,"Even if the input has side effects, we can use ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO#flatMap")," to access the raw value and write the if-then-else expression:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\ndef validateWeightOrFailZIO[R](weight: ZIO[R, Nothing, Double]): ZIO[R, String, Double] =\n  weight.flatMap { w =>\n    if (w >= 0)\n      ZIO.succeed(w)\n    else\n      ZIO.fail(s"negative input: $w")\n  }\n')),(0,o.kt)("h2",{id:"conditional-operators"},"Conditional Operators"),(0,o.kt)("h3",{id:"when"},(0,o.kt)("inlineCode",{parentName:"h3"},"when")),(0,o.kt)("p",null,"We can also use ZIO's combinators that are the moral equivalent to these expressions:"),(0,o.kt)("p",null,"Instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"if (p) expression")," we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO.when")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO#when")," operator:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\ndef validateWeightOption(weight: Double): ZIO[Any, Nothing, Option[Double]] =\n  ZIO.when(weight > 0)(ZIO.succeed(weight))\n")),(0,o.kt)("p",null,"If the predicate is effectful, we can use ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO.whenZIO")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO#whenZIO")," operators."),(0,o.kt)("p",null,"For example, the following function creates a random option of int value:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\ndef randomIntOption: ZIO[Any, Nothing, Option[Int]] =\n  Random.nextInt.whenZIO(Random.nextBoolean)\n")),(0,o.kt)("p",null,"Another nice variant of the ",(0,o.kt)("inlineCode",{parentName:"p"},"when")," operator is ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO.whenCase")," and also the ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO.whenCaseZIO"),". Using these operators, we can run an effect when our provided effectful ",(0,o.kt)("inlineCode",{parentName:"p"},"PartialFunction")," matches the given raw or effectful input. The important note regarding this operator is that it is safe, so it will do nothing if the value does not match."),(0,o.kt)("p",null,"Let's try to write a game, which asks users to choose which game to play:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\ndef minesweeper(level: String)     = ZIO.attempt(???)\ndef ticTacToe                      = ZIO.attempt(???)\ndef snake(rows: Int, columns: Int) = ZIO.attempt(???)\n\ndef myApp =\n  ZIO.whenCaseZIO {\n    (Console.print(\n      "Please choose one game (minesweeper, snake, tictactoe)? "\n    ) *> Console.readLine).orDie\n  } {\n    case "minesweeper" =>\n      Console.print(\n        "Please enter the level of the game (easy/hard/medium)?"\n      ) *> Console.readLine.flatMap(minesweeper)\n    case "snake" =>\n      Console.printLine(\n        "Please enter the size of the game: "\n      ) *> Console.readLine.mapAttempt(_.toInt).flatMap(n => snake(n, n))\n    case "tictactoe" => ticTacToe\n  }\n')),(0,o.kt)("h3",{id:"unless"},(0,o.kt)("inlineCode",{parentName:"h3"},"unless")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO.unless")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO#unless")," operators are like ",(0,o.kt)("inlineCode",{parentName:"p"},"when")," operators, but they are moral equivalent for the ",(0,o.kt)("inlineCode",{parentName:"p"},"if (!p) expression")," construct."),(0,o.kt)("h3",{id:"ifzio"},(0,o.kt)("inlineCode",{parentName:"h3"},"ifZIO")),(0,o.kt)("p",null,"This operator takes an ",(0,o.kt)("em",{parentName:"p"},"effectful predicate"),", if that predicate is evaluated to true, it will run the ",(0,o.kt)("inlineCode",{parentName:"p"},"onTrue")," effect, otherwise it will run the ",(0,o.kt)("inlineCode",{parentName:"p"},"onFalse")," effect."),(0,o.kt)("p",null,"Let's try to write a simple virtual flip function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import java.io.IOException\nimport zio._\n\ndef flipTheCoin: ZIO[Any, IOException, Unit] =\n  ZIO.ifZIO(Random.nextBoolean)(\n    onTrue = Console.printLine("Head"),\n    onFalse = Console.printLine("Tail")\n  )\n')),(0,o.kt)("h2",{id:"loop-operators"},"Loop Operators"),(0,o.kt)("p",null,"In imperative scala code base, sometime we may use ",(0,o.kt)("inlineCode",{parentName:"p"},"while(condition) { statement }")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"do { statement } while (condition)")," structs to perform loops:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'object MainApp extends scala.App {\n  def printNumbers(from: Int, to: Int): Unit = {\n    var i = from\n    while (i <= to) {\n      println(s"$i")\n      i = i + 1\n    }\n  }\n\n  printNumbers(1, 3)\n}\n')),(0,o.kt)("p",null,"But in functional scala, we tend to not use mutable variable. So to have a loop, we would like to use recursions. Let's rewrite the previous example, using recursion:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import scala.annotation.tailrec\n\nobject MainApp extends scala.App {\n  @tailrec\n  def printNumbers(from: Int, to: Int): Unit = {\n    if (from <= to) {\n      println(s"$from")\n      printNumbers(from + 1, to)\n    } else ()\n  }\n\n  printNumbers(1, 3)\n}\n')),(0,o.kt)("p",null,"In this example, we wrote a recursive function that prints numbers from 1 to 3. While the last effort doesn't use a mutable variable, it's not a pure solution. We have a ",(0,o.kt)("inlineCode",{parentName:"p"},"println")," statement inside our solution, calling this function is not pure so the whole solution is not pure. We know that we can model effectful functions using the ZIO effect system. So let's try rewrite that using ZIO:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport java.io.IOException\n\nobject MainApp extends ZIOAppDefault {\n  def printNumbers(from: Int, to: Int): ZIO[Any, IOException, Unit] = {\n    if (from <= to)\n      Console.printLine(s"$from") *>\n        printNumbers(from + 1, to)\n    else ZIO.unit\n  }\n\n  def run = printNumbers(1, 5)\n}\n')),(0,o.kt)("p",null,"ZIO provides some loop combinators that help us avoid the need to write explicit recursions. This means that we can do almost anything we want to do without using explicit recursions. Let's rewrite the last solution using ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO.loopDiscard"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\nimport java.io.IOException\n\nobject MainApp extends ZIOAppDefault {\n  def printNumbers(from: Int, to: Int): ZIO[Any, IOException, Unit] = {\n    ZIO.loopDiscard(from)(_ <= to, _ + 1)(i => Console.printLine(i))\n  }\n\n  def run = printNumbers(1, 3)\n}\n")),(0,o.kt)("p",null,"After this very short introduction to writing loops in functional scala, now let us go deep into ZIO specific combinators for writing loops:"),(0,o.kt)("h3",{id:"loop"},(0,o.kt)("inlineCode",{parentName:"h3"},"loop")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO.loop")," operator takes an initial state, then repeatedly change the state based on the given ",(0,o.kt)("inlineCode",{parentName:"p"},"inc")," function, until the given ",(0,o.kt)("inlineCode",{parentName:"p"},"cont")," function is evaluated to true:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"object ZIO {\n  def loop[R, E, A, S](\n    initial: => S\n  )(cont: S => Boolean, inc: S => S)(body: S => ZIO[R, E, A]): ZIO[R, E, List[A]]\n\n  def loopDiscard[R, E, S](\n    initial: => S\n  )(cont: S => Boolean, inc: S => S)(body: S => ZIO[R, E, Any]): ZIO[R, E, Unit]\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO#loop")," collects all intermediate states in a list and returns it finally, while the ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO.loopDiscard")," discards all results."),(0,o.kt)("p",null,"We can think of ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO#loop")," as a moral equivalent of the following while loop:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"var s  = initial\nvar as = List.empty[A]\n\nwhile (cont(s)) {\n  as = body(s) :: as\n  s  = inc(s)\n}\n\nas.reverse\n")),(0,o.kt)("p",null,"Let's try some examples:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import java.io.IOException\nimport zio._\n\nval r1: ZIO[Any, Nothing, List[Int]] =\n  ZIO.loop(1)(_ <= 5, _ + 1)(n => ZIO.succeed(n)).debug\n// List(1, 2, 3, 4, 5)\n\nval r2: ZIO[Any, Nothing, List[Int]] =\n  ZIO.loop(1)(_ <= 5, _ + 1)(n => ZIO.succeed(n * 2)).debug\n// List(2, 4, 6, 8, 10)\n\nval r3: ZIO[Any, IOException, List[Unit]] =\n  ZIO.loop(1)(_ <= 5, _ + 1) { index =>\n    Console.printLine(s"Currently at index $index")\n  }.debug\n// Currently at index 1\n// Currently at index 2\n// Currently at index 3\n// Currently at index 4\n// Currently at index 5\n// List((), (), (), (), ())\n\nval r4: ZIO[Any, IOException, Unit] =\n  ZIO.loopDiscard(1)(_ <= 5, _ + 1) { index =>\n    Console.printLine(s"Currently at index $index")\n  }.debug\n// Currently at index 1\n// Currently at index 2\n// Currently at index 3\n// Currently at index 4\n// Currently at index 5\n// ()\n\nval r5: ZIO[Any, IOException, List[String]] =\n  Console.printLine("Please enter three names: ") *>\n    ZIO.loop(1)(_ <= 3, _ + 1) { n =>\n      Console.print(s"$n. ") *> Console.readLine\n    }.debug\n')),(0,o.kt)("h3",{id:"iterate"},(0,o.kt)("inlineCode",{parentName:"h3"},"iterate")),(0,o.kt)("p",null,"To iterate with the given effectful operation we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO.interate")," combinator. During each iteration, it uses an effectful ",(0,o.kt)("inlineCode",{parentName:"p"},"body")," operation to change the state, and it will continue the iteration while the ",(0,o.kt)("inlineCode",{parentName:"p"},"cont")," function evaluates to true:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"object ZIO {\n  def iterate[R, E, S](\n    initial: => S\n  )(cont: S => Boolean)(body: S => ZIO[R, E, S]): ZIO[R, E, S]\n}\n")),(0,o.kt)("p",null,"This operator is a moral equivalent of the following while loop:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"var s = initial\nwhile (cont(s)) {\n  s = body(s)\n}\ns\n")),(0,o.kt)("p",null,"Let's try some examples:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nval r1 = ZIO.iterate(1)(_ <= 5)(s => ZIO.succeed(s + 1)).debug\n// 6\n\nval r2 = ZIO.iterate(1)(_ <= 5)(s => ZIO.succeed(s * 2).debug).debug("result")\n')),(0,o.kt)("p",null,"Here's another example. Assume we want to take many names from the user using the terminal. We don't know how many names the user is going to enter. We can ask the user to write \"exit\" when all inputs are finished. To write such an application, we can use recursion like below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import java.io.IOException\nimport zio._\n\ndef getNames: ZIO[Any, IOException, List[String]] =\n  Console.print("Please enter all names") *>\n    Console.printLine(" (enter \\"exit\\" to indicate end of the list):") *> {\n      def loop(\n          names: List[String]\n      ): ZIO[Any, IOException, List[String]] = {\n        Console.print(s"${names.length + 1}. ") *> Console.readLine\n          .flatMap {\n            case "exit" => ZIO.succeed(names)\n            case name   => loop(names.appended(name))\n          }\n      }\n      loop(List.empty[String])\n    }\n')),(0,o.kt)("p",null,"Instead of manually writing recursions, we can rely on well-tested ZIO combinators. So let's rewrite this application using the ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO.iterate")," operator:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import java.io.IOException\nimport zio._\n\ndef getNames: ZIO[Any, IOException, List[String]] =\n  Console.print("Please enter all names") *>\n    Console.printLine(" (enter \\"exit\\" to indicate end of the list):") *>\n    ZIO.iterate((List.empty[String], true))(_._2) { case (names, _) =>\n      Console.print(s"${names.length + 1}. ") *>\n        Console.readLine.map {\n          case "exit" => (names, false)\n          case name   => (names.appended(name), true)\n        }\n    }\n    .map(_._1)\n    .debug\n')),(0,o.kt)("h3",{id:"foreach"},(0,o.kt)("inlineCode",{parentName:"h3"},"foreach")),(0,o.kt)("p",null,"Note that, in several cases, we can avoid these low-level operators and instead use the high-level ones. For example, let's try to rewrite the ",(0,o.kt)("inlineCode",{parentName:"p"},"r5")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO.foreach"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nConsole.printLine("Please enter three names:") *>\n  ZIO.foreach(1 to 3) { index =>\n    Console.print(s"$index. ") *> Console.readLine\n  }.debug\n')),(0,o.kt)("h2",{id:"trycatchfinally"},"try/catch/finally"),(0,o.kt)("p",null,"When working with resources, just like the scala's ",(0,o.kt)("inlineCode",{parentName:"p"},"try"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"catch"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"finally")," construct, in ZIO we have a similar operator called ",(0,o.kt)("inlineCode",{parentName:"p"},"acquireRelease")," and also ",(0,o.kt)("inlineCode",{parentName:"p"},"ensuring"),". We discussed them in more detail in the ",(0,o.kt)("a",{parentName:"p",href:"/reference/resource/"},"resource management section"),". But, for now, we want to focus on their control flow behaviors."),(0,o.kt)("p",null,"Let's learn about the ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO.acquireReleaseWith")," operator. This operator takes three effects:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"acquire"))," an effect that describes the resource acquisition"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"release"))," an effect that describes the release of the resource"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"use"))," an effect that describes resource usage")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\nZIO.acquireReleaseWith(acquire = ???)(release = ???)(use = ???)\n")),(0,o.kt)("p",null,"This operator guarantees us that if the ",(0,o.kt)("em",{parentName:"p"},"resource acquisition (acquire)")," the ",(0,o.kt)("em",{parentName:"p"},"release")," effect will be executed whether the ",(0,o.kt)("em",{parentName:"p"},"use")," effect succeeded or not:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"import java.io.IOException\nimport scala.io.Source\nimport zio._\n\ndef wordCount(fileName: String): ZIO[Any, Throwable, Int] = {\n  def openFile(name: => String): ZIO[Any, IOException, Source] =\n    ZIO.attemptBlockingIO(Source.fromFile(name))\n\n  def closeFile(source: => Source): ZIO[Any, Nothing, Unit] =\n    ZIO.succeedBlocking(source.close())\n\n  def wordCount(source: => Source): ZIO[Any, Throwable, Int] =\n    ZIO.attemptBlocking(source.getLines().length)\n\n  ZIO.acquireReleaseWith(openFile(fileName))(closeFile(_))(wordCount(_))\n}\n")),(0,o.kt)("p",null,"Let's try a simple ",(0,o.kt)("inlineCode",{parentName:"p"},"acquireRelease")," workflow to see how its control flow works:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nobject MainApp extends ZIOAppDefault {\n  def run =\n    ZIO.acquireReleaseWith {\n      ZIO.succeed("resource").tap(r => ZIO.debug(s"$r acquired"))\n    } { i =>\n      ZIO.debug(s"$i released")\n    } { i =>\n      ZIO.debug(s"start using $i")\n    }\n}\n')))}u.isMDXComponent=!0}}]);