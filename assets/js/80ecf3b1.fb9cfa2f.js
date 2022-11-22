"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[93582],{3905:(e,n,o)=>{o.d(n,{Zo:()=>c,kt:()=>g});var a=o(67294);function i(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function t(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,a)}return o}function r(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?t(Object(o),!0).forEach((function(n){i(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function s(e,n){if(null==e)return{};var o,a,i=function(e,n){if(null==e)return{};var o,a,i={},t=Object.keys(e);for(a=0;a<t.length;a++)o=t[a],n.indexOf(o)>=0||(i[o]=e[o]);return i}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(a=0;a<t.length;a++)o=t[a],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var l=a.createContext({}),p=function(e){var n=a.useContext(l),o=n;return e&&(o="function"==typeof e?e(n):r(r({},n),e)),o},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var o=e.components,i=e.mdxType,t=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(o),g=i,f=m["".concat(l,".").concat(g)]||m[g]||u[g]||t;return o?a.createElement(f,r(r({ref:n},c),{},{components:o})):a.createElement(f,r({ref:n},c))}));function g(e,n){var o=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var t=o.length,r=new Array(t);r[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<t;p++)r[p]=o[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},23352:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>t,metadata:()=>s,toc:()=>p});var a=o(87462),i=(o(67294),o(3905));const t={id:"read-from-various-sources",title:"Read from various Sources"},r=void 0,s={unversionedId:"read-from-various-sources",id:"read-from-various-sources",title:"Read from various Sources",description:"zio-config supports various sources ranging from an in-memory Map, to environment variables, through to a HOCON file.",source:"@site/node_modules/@zio.dev/zio-config/read-from-various-sources.md",sourceDirName:".",slug:"/read-from-various-sources",permalink:"/zio-config/read-from-various-sources",draft:!1,tags:[],version:"current",frontMatter:{id:"read-from-various-sources",title:"Read from various Sources"},sidebar:"sidebar",previous:{title:"Automatic Derivation of ConfigDescriptor",permalink:"/zio-config/automatic-derivation-of-config-descriptor"},next:{title:"ConfigDescriptor Usage",permalink:"/zio-config/config-descriptor-usage"}},l={},p=[{value:"Constant Map",id:"constant-map",level:2},{value:"Multi Map Source",id:"multi-map-source",level:2},{value:"System Environment",id:"system-environment",level:2},{value:"System Properties",id:"system-properties",level:2},{value:"Java Properties",id:"java-properties",level:2},{value:"Properties File",id:"properties-file",level:2},{value:"HOCON String",id:"hocon-string",level:2},{value:"HOCON File",id:"hocon-file",level:2},{value:"Json",id:"json",level:2},{value:"Command Line Arguments",id:"command-line-arguments",level:2},{value:"Simple",id:"simple",level:3},{value:"Nested: Approach 1",id:"nested-approach-1",level:3},{value:"Nested: Approach 2",id:"nested-approach-2",level:3},{value:"Map",id:"map",level:3},{value:"List: Approach 1",id:"list-approach-1",level:3},{value:"Lists: Approach 2",id:"lists-approach-2",level:3},{value:"Behaviour of List in various sources",id:"behaviour-of-list-in-various-sources",level:3},{value:"A Production application config using command line arguments (demo)",id:"a-production-application-config-using-command-line-arguments-demo",level:3},{value:"Combining multiple sources",id:"combining-multiple-sources",level:3}],c={toc:p};function u(e){let{components:n,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"zio-config supports various sources ranging from an in-memory Map, to environment variables, through to a HOCON file.\nForming a source gets into a standard pattern, and is easy for you to add another one."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.IO\nimport zio.config._, ConfigDescriptor._, ConfigSource._\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"case class MyConfig(ldap: String, port: Int, dburl: String)\n")),(0,i.kt)("p",null,"To perform any action using zio-config, we need a configuration description.\nLet's define a simple one."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'val myConfig =\n  (string("LDAP") zip int("PORT") zip string("DB_URL")).to[MyConfig]\n\n // val automatedConfig = descriptor[MyConfig]; using zio-config-magnolia\n')),(0,i.kt)("p",null,"More details about defining config descriptor is in ",(0,i.kt)("a",{parentName:"p",href:"/zio-config/manual-creation-of-config-descriptor"},"here"),"."),(0,i.kt)("h2",{id:"constant-map"},"Constant Map"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'\nval mapSource =\n  ConfigSource.fromMap(\n    Map(\n      "LDAP" -> "xyz",\n      "PORT" -> "1222",\n      "DB_URL" -> "postgres"\n    )\n  )\n\nval io = read(myConfig from mapSource)\n// Running io (which is a zio) to completion yields  MyConfig(xyz, 1222, postgres)\n\n')),(0,i.kt)("p",null,"Alternatively you can follow below snippet, yielding Config","[MyConfig]",", which you can use as ZIO environment."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"ZConfig.fromMap(Map(), myConfig)\n// yielding Config[MyConfig], which is a service of config that you can use as ZIO environments.\n")),(0,i.kt)("h2",{id:"multi-map-source"},"Multi Map Source"),(0,i.kt)("p",null,"This support a list of values for a key."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'case class ListConfig(ldap: String, port: List[Int], dburl: String)\n\nval listConfig = (string("LDAP") zip list("PORT")(int) zip string("DB_URL")).to[ListConfig]\n\nval multiMapSource =\n  ConfigSource.fromMultiMap(\n    Map(\n      "LDAP" -> ::("xyz",  Nil),\n      "PORT" -> ::("1222" , "2221" :: Nil),\n      "DB_URL" -> ::("postgres",  Nil)\n    )\n  )\n\nread(myConfig from multiMapSource)\n// Running this to completion yields ListConfig(xyz, List(1222, 2221), postgres)\n')),(0,i.kt)("p",null,"Alternatively you can follow below snippet, yielding Config","[MyConfig]",", which you can use as ZIO environment."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'ZConfig.fromMultiMap(Map(), myConfig, "constant")\n// yielding Config[MyConfig], which is a service of config that you can use as ZIO environments.\n')),(0,i.kt)("h2",{id:"system-environment"},"System Environment"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"val sysEnvSource =\n  ConfigSource.fromSystemEnv()\n\n// If you want to support list of values, then you should be giving a valueDelimiter\nval sysEnvSourceSupportingList =\n  ConfigSource.fromSystemEnv(keyDelimiter = None, valueDelimiter = Some(','))\n\n// If you want to consider system-env as a nested config, provide keyDelimiter. Refer to API docs\n// Example, Given KAFKA_SERVERS = \"servers1, server2\"\n  ConfigSource.fromSystemEnv(keyDelimiter = Some('_'), valueDelimiter = Some(','))\n")),(0,i.kt)("p",null,"Provide keyDelimiter if you need to consider flattened config as a nested config.\nProvide valueDelimiter if you need any value to be a list"),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Given:\n\n{{{\n  property      = "KAFKA.SERVERS" = "server1, server2" ; "KAFKA.SERIALIZERS" = "confluent"\n  keyDelimiter   = Some(\'.\')\n  valueDelimiter = Some(\',\')\n}}}\n\n')),(0,i.kt)("p",null,"then, the below config will work"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'nested("KAFKA")(string("SERVER") zip string("FLAG")).to[KafkaConfig]\n')),(0,i.kt)("p",null,"Give valueDelimiter =  ",(0,i.kt)("inlineCode",{parentName:"p"},","),"\nand environment with ",(0,i.kt)("inlineCode",{parentName:"p"},"PORT=1222,2221"),"; then reading config yields\n",(0,i.kt)("inlineCode",{parentName:"p"},"ListConfig(xyz, List(1222, 2221), postgres)")),(0,i.kt)("h2",{id:"system-properties"},"System Properties"),(0,i.kt)("p",null,"zio-config can source system properties."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"val sysPropertiesSource =\n  ConfigSource.fromSystemProps()\n\n// If you want to support list of values, then you should be giving a valueDelimiter\nval sysPropertiesSourceWithList =\n  ConfigSource.fromSystemProps(None, valueDelimiter = Some(','))\n\n// If you want to consider system-properties as a nested config, provide keyDelimiter. Refer to API doc\n// Example, Given KAFKA.SERVERS = \"servers1, server2\"\n  ConfigSource.fromSystemProps(keyDelimiter = Some('.'), valueDelimiter = Some(','))\n")),(0,i.kt)("p",null,"Give valueDelimiter =  ",(0,i.kt)("inlineCode",{parentName:"p"},","),"\nand environemnt with ",(0,i.kt)("inlineCode",{parentName:"p"},"PORT=1222,2221"),"; then reading config yields\n",(0,i.kt)("inlineCode",{parentName:"p"},"ListConfig(xyz, List(1222, 2221), postgres)")),(0,i.kt)("h2",{id:"java-properties"},"Java Properties"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"val javaProperties: java.util.Properties = new java.util.Properties() // Ideally loaded with values\n\nval javaPropertiesSource =\n  ConfigSource.fromProperties(javaProperties)\n\nread(myConfig from javaPropertiesSource)\n\n// If you want to support list of values, then you should be giving a valueDelimiter\nval javaPropertiesSourceWithList =\n  ConfigSource.fromProperties(javaProperties, valueDelimiter = Some(','))\n")),(0,i.kt)("h2",{id:"properties-file"},"Properties File"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'ZConfig.fromPropertiesFile("filepath", myConfig)\n\n// yielding Config[MyConfig] which you provide to\n// functions with zio environment as Config[MyConfig]\n')),(0,i.kt)("h2",{id:"hocon-string"},"HOCON String"),(0,i.kt)("p",null,"To enable HOCON source, you have to bring in ",(0,i.kt)("inlineCode",{parentName:"p"},"zio-config-typesafe")," module.\nThere are many examples in examples module in zio-config."),(0,i.kt)("p",null,"Here is an quick example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.config.typesafe._\nimport zio.config.magnolia._\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'case class SimpleConfig(port: Int, url: String, region: Option[String])\n\nval automaticDescription = descriptor[SimpleConfig]\n\nval hoconSource =\n  ConfigSource.fromHoconString(\n      """\n      {\n        port : 123\n        url  : bla\n        region: useast\n      }\n\n      """\n    )\n\n\nval anotherHoconSource =\n  ConfigSource.fromHoconString(\n      """\n        port=123\n        url=bla\n        region=useast\n      """\n  )\n\nread(automaticDescription from hoconSource)\n\n// yielding SimpleConfig(123,bla,Some(useast))\n\nread(automaticDescription from anotherHoconSource)\n\n// yielding SimpleConfig(123,bla,Some(useast))\n\n\n// You could also do, in which case the return type is `Config` service\nZConfig.fromHoconString(\n     """\n      {\n        port : 123\n        url  : bla\n        region: useast\n      }\n      """, automaticDescription)\n')),(0,i.kt)("h2",{id:"hocon-file"},"HOCON File"),(0,i.kt)("p",null,"Similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"TypesafeConfig.fromHoconString(str, automaticDescription)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'ZConfig.fromHoconFile(new java.io.File("fileapth"), automaticDescription)\n// or use, read(automaticDescription from ConfigSource.fromHoconFile(new java.io.File("fileapth")))\n')),(0,i.kt)("h2",{id:"json"},"Json"),(0,i.kt)("p",null,"You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"zio-config-typesafe")," module to fetch json as well"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'val jsonString =\n   """\n   {\n     "port" : "123"\n     "url"  : "bla"\n     "region": "useast"\n   }\n\n   """\n\nZConfig.fromHoconString(jsonString, automaticDescription)\n// or use, read(automaticDescription from ConfigSource.fromHoconString(jsonString))\n')),(0,i.kt)("h2",{id:"command-line-arguments"},"Command Line Arguments"),(0,i.kt)("p",null,"This is currently experimental."),(0,i.kt)("h3",{id:"simple"},"Simple"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"case class SimpleCommandLineConfig(key1: String, key2: String)\n\nval simpleCmdLineArgs = \"--key1 value1 --key2 value2\"\nval simpleSource = ConfigSource.fromCommandLineArgs(simpleCmdLineArgs.split(' ').toList)\nval simpleConfig = descriptor[SimpleCommandLineConfig] from simpleSource\n")),(0,i.kt)("h3",{id:"nested-approach-1"},"Nested: Approach 1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'case class SparkConf(key1: String, key2: String)\ncase class NestedCommandLineConfig(conf: SparkConf, key3: String)\n\nval nestedCmdLineArgs = "--conf.key1 v1 --conf.key2 v2 --key3 v3"\n \nval nestedSource = \n   ConfigSource.fromCommandLineArgs(\n   nestedCmdLineArgs.split(\' \').toList, \n   keyDelimiter = Some(\'.\')\n)\n\nval nestedConfig = descriptor[NestedCommandLineConfig] from nestedSource\n\n// zio.Runtime.default.unsafe.run(read(nestedConfig)) \n// returns NestedCommandLineConfig(SparkConf("v1", "v2"), "v3"))\n')),(0,i.kt)("p",null,"This config is for those developers who really used to system properties ",(0,i.kt)("inlineCode",{parentName:"p"},"(-Dconf.key=1)")," and want to take the same\napproach towards command line arguments.\nHere we make use of delimiter ",(0,i.kt)("inlineCode",{parentName:"p"},".")," as the tool to nesting."),(0,i.kt)("p",null,"For those who hate delimited keys in command line arguments and the associated nesting, we will have different approach\nas given below"),(0,i.kt)("h3",{id:"nested-approach-2"},"Nested: Approach 2"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'val nestedCmdLineArgs2 = "--conf -key1=v1 --conf -key2=v2 --key3 v3"\nval nestedSource2 = ConfigSource.fromCommandLineArgs(nestedCmdLineArgs2.split(\' \').toList)\nval nestedConfig2 = descriptor[NestedCommandLineConfig] from nestedSource2\n\n// zio.Runtime.default.unsafe.run(read(nestedConfig2))\n// returns NestedCommandLineConfig(SparkConf("v1", "v2"), "v3"))\n')),(0,i.kt)("p",null,"Here we don't use delimiters for nesting, hence keyDelimiter is ",(0,i.kt)("inlineCode",{parentName:"p"},"None"),".\nIn this case any key-value that comes after ",(0,i.kt)("inlineCode",{parentName:"p"},"--conf")," comes under the root path conf. This is followed in various places\nsuch as ",(0,i.kt)("inlineCode",{parentName:"p"},"SparkConf"),"."),(0,i.kt)("p",null,"In fact, we can go any level nesting. For example, we can give ",(0,i.kt)("inlineCode",{parentName:"p"},'---aws --db -url="v" ---aws --kinesis -topic=x'),",\nalthough let's don't complicate our command line arguments."),(0,i.kt)("h3",{id:"map"},"Map"),(0,i.kt)("p",null,"Both the approaches that we saw with nesting is applicable to ",(0,i.kt)("inlineCode",{parentName:"p"},"map"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'val mapArgs = "--conf.key1=value1  --conf.key2=value2"\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'map("conf")(string)')," retrieving ",(0,i.kt)("inlineCode",{parentName:"p"},'Map("key1" -> "value1", "key2" -> "value2")'),"."),(0,i.kt)("p",null,"This will also work if ",(0,i.kt)("inlineCode",{parentName:"p"},"mapArgs")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"--conf -key1=value1 --conf -key2=value2"),"."),(0,i.kt)("h3",{id:"list-approach-1"},"List: Approach 1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'val listArgs = "--users Jane --users Jack"\nval listSource = ConfigSource.fromCommandLineArgs(listArgs.split(\' \').toList)\nval listConfigCmdLineArgs = list("users")(string) from listSource\n\n// zio.Runtime.default.unsafe.run(read(listConfigCmdLineArgs))\n// returns List("Jane", "Jack"))\n')),(0,i.kt)("h3",{id:"lists-approach-2"},"Lists: Approach 2"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'val listArgs2 = "--users Jane,Jack"\n\n// args.split(\' \') is only for demo purpose. We already get a list if we use zio.App\n\nval listSource2 = ConfigSource.fromCommandLineArgs(\n   listArgs2.split(\' \').toList,\n   valueDelimiter = Some(\',\')\n)\n\n// zio.Runtime.default.unsafe.run(read(list("users")(string) from listSource2)) \n// returns List("Jane", "Jack"))\n')),(0,i.kt)("h3",{id:"behaviour-of-list-in-various-sources"},"Behaviour of List in various sources"),(0,i.kt)("p",null,"No single values will be regarded as list. This is based on feedback from users."),(0,i.kt)("p",null,"For the config:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Case class Config(key: List[String]) \n")),(0,i.kt)("p",null,"If the source is below HOCON (or json)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"{\n  Key: value\n}\n")),(0,i.kt)("p",null,"then it fails, saying a ",(0,i.kt)("inlineCode",{parentName:"p"},"Sequence")," is expected. This is quite intuitive but worth mentioning for users who are new to\nHOCON."),(0,i.kt)("p",null,"However the following configs will work, as it clearly indicate it is a ",(0,i.kt)("inlineCode",{parentName:"p"},"List")," with square brackets"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"{\n  Key:\n  [value\n  ]\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"{\n  key:\n  [value1\n  , value2\n  ]\n}\n")),(0,i.kt)("p",null,"If the source is a map given below (for example, in system environment), then it succeeds given any delimiter\nas it contains only one single value."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'export key = "value"\n')),(0,i.kt)("p",null,"Given ",(0,i.kt)("inlineCode",{parentName:"p"},"valueDelimiter=Some(',')")," the following config will work and we are able to retrieve List(value1, value2)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'export key = "value1, value2"\n')),(0,i.kt)("h3",{id:"a-production-application-config-using-command-line-arguments-demo"},"A Production application config using command line arguments (demo)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"case class UserPassword(username: String, password: String)\ncase class DatabaseConfig(database: UserPassword, url: String)\ncase class VaultConfig(userPassword: UserPassword)\ncase class SparkConfig(databaseConfig: DatabaseConfig, numexecs: Int)\ncase class AppConfig(conf: SparkConfig, vault: VaultConfig, users: List[String], region: List[String])\n\nval complexArgs = \"--conf.database.username=Foo --conf.database.password=Bar --conf.database.url=jdbc://xyz --conf.numexecs=10 --vault.username=Foo2 --vault.password=Bar2 --users Jane --users Jack --region TW,US\"\n\nval complexSource = ConfigSource.fromCommandLineArgs(\n  complexArgs.split(' ').toList,\n  Some('.'),\n  Some(',')\n)\nval appConfig = read(descriptor[AppConfig] from complexSource)\n")),(0,i.kt)("h3",{id:"combining-multiple-sources"},"Combining multiple sources"),(0,i.kt)("p",null,"There are various ways you can interact with zio-config when dealing with multiple sources.\nBelow given is a naive example, that will help you get a gist of how to get config values from various\nsources, especially when some of the sources returns ZIO."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import java.io.File\n\nimport zio._\nimport zio.config._\nimport zio.config.typesafe._\n\n/**\n * One of the ways you can summon various sources especially\n * when some of the `fromSource` functions return ZIO.\n */\nobject CombineSourcesExample extends ZIOAppDefault {\n  override def run =\n    application.either.flatMap(r => Console.printLine(s"Result: ${r}"))\n\n  case class Config(username: String , password: String)\n\n  val desc: ConfigDescriptor[Config] ={\n    val hoconFile = TypesafeConfigSource.fromHoconFile(new File("/invalid/path"))\n    val constant  = TypesafeConfigSource.fromHoconString(s"")\n    val env       = ConfigSource.fromSystemEnv()\n    val sysProp   = ConfigSource.fromSystemProps()\n    val source    = hoconFile <> constant <> env <> sysProp\n    (descriptor[Config] from source)\n  }\n\n  val application =\n    for {\n      configValue <- read(desc).mapError(_.prettyPrint())\n      string      <- ZIO.fromEither(configValue.toJson(desc))\n      _ <- Console.printLine(string)\n    } yield ()\n}\n')))}u.isMDXComponent=!0}}]);