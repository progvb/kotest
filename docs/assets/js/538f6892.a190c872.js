"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[83774],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,k=c["".concat(i,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(87462),r=n(67294),o=n(86010),l=n(76775),s=n(91980),i=n(67392),u=n(50012);function p(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function c(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[i,p]=m({queryString:n,groupId:a}),[k,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),g=(()=>{const e=i??k;return c({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!c({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),p(e),h(e)}),[p,h,o]),tabValues:o}}var h=n(12466),g=n(72389);const f="tabList__CuJ",v="tabItem_LNqP";function y(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,h.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=i[n].value;a!==l&&(p(t),s(a))},c=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},i.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:c,onClick:d},s,{className:(0,o.Z)("tabs__item",v,null==s?void 0:s.className,{"tabs__item--active":l===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=k(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(b,(0,a.Z)({},e,t)))}function N(e){const t=(0,g.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},72254:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),o=n(74866),l=n(85162);const s={id:"quickstart",title:"Quick Start",sidebar_label:"Quick Start"},i=void 0,u={unversionedId:"quickstart",id:"version-5.6/quickstart",title:"Quick Start",description:"Kotest is divided into several, stand alone, subprojects, each of which can be used independently:",source:"@site/versioned_docs/version-5.6/quick_start.mdx",sourceDirName:".",slug:"/quickstart",permalink:"/docs/quickstart",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.6/quick_start.mdx",tags:[],version:"5.6",frontMatter:{id:"quickstart",title:"Quick Start",sidebar_label:"Quick Start"},sidebar:"docs",next:{title:"Changelog",permalink:"/docs/changelog.html"}},p={},d=[{value:"Test Framework",id:"test-framework",level:2},{value:"Assertions Library",id:"assertions-library",level:2},{value:"Property Testing",id:"property-testing",level:2},{value:"Snapshots",id:"snapshots",level:2}],c={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Kotest is divided into several, stand alone, subprojects, each of which can be used independently:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/framework/framework.html"},"Test framework")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/assertions/assertions.html"},"Assertions library")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/proptest/property-based-testing.html"},"Property testing"))),(0,r.kt)("p",null,"You can decide to go ",(0,r.kt)("em",{parentName:"p"},"all in")," on Kotest, and use all three together, or you can choose to one or more modules in conjunction with other projects.\nFor example, you could use the assertions library with JUnit, or you could use the test framework with another assertions library like assertj."),(0,r.kt)("p",null,"This page gives setup instructions for various combinations of projects and targets."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Kotest is a ",(0,r.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/reference/multiplatform.html"},"multi-platform project"),".\nIf you are unfamiliar with this, then Kotlin compiles to different targets - JVM, JS, Native, iOS and so on. If you are doing server side or android development then you want the modules that end with JVM, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"kotest-property-jvm"),".")),(0,r.kt)("h2",{id:"test-framework"},"Test Framework"),(0,r.kt)("p",null,"The Kotest test framework is supported on JVM, Javascript and Native.\nTo enable Kotest for multiple platforms, combine the steps for the individual platforms as detailed in the following tabs."),(0,r.kt)(o.Z,{defaultValue:"JVM/Gradle",values:[{label:"JVM/Gradle",value:"JVM/Gradle"},{label:"JVM/Maven",value:"JVM/Maven"},{label:"Kotlin/JS",value:"JS"},{label:"Kotlin/Native",value:"Native"},{label:"Android",value:"Android"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"JVM/Gradle",mdxType:"TabItem"},(0,r.kt)("p",null,"Kotest on the JVM uses the ",(0,r.kt)("a",{parentName:"p",href:"https://junit.org/junit5/docs/current/user-guide/#running-tests-build-gradle"},"JUnit Platform")," gradle plugin.\nFor Gradle 4.6 and higher this is as simple as adding ",(0,r.kt)("inlineCode",{parentName:"p"},"useJUnitPlatform()")," inside the tasks with type ",(0,r.kt)("inlineCode",{parentName:"p"},"Test"),"\nand then adding the Kotest junit5 runner dependency."),(0,r.kt)("p",null,"If you are using Gradle + Groovy then:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"test {\n   useJUnitPlatform()\n}\n")),(0,r.kt)("p",null,"Or if you are using Gradle + Kotlin then:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"tasks.withType<Test>().configureEach {\n   useJUnitPlatform()\n}\n")),(0,r.kt)("p",null,"And then the dependency:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"testImplementation 'io.kotest:kotest-runner-junit5:$version'\n"))),(0,r.kt)(l.Z,{value:"JS",mdxType:"TabItem"},(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"A working multi-platform project with JVM, native and Javascript all configured, with unit and data driven test examples, can be found here:\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kotest/kotest-examples-multiplatform"},"https://github.com/kotest/kotest-examples-multiplatform"))),(0,r.kt)("p",null,"Add the ",(0,r.kt)("a",{parentName:"p",href:"https://plugins.gradle.org/plugin/io.kotest.multiplatform"},"Kotest multiplatform gradle plugin")," to your build."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'plugins {\n  id("io.kotest.multiplatform") version "5.0.2"\n}\n')),(0,r.kt)("p",null,"Add the engine dependency to your ",(0,r.kt)("inlineCode",{parentName:"p"},"commonTest")," dependencies block:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'kotlin {\n  targets {\n    js(IR) { // LEGACY or BOTH are unsupported\n      browser() // to compile for the web\n      nodejs() // to compile against node\n    }\n  }\n\n  sourceSets {\n    val commonTest by getting {\n      dependencies {\n        implementation("io.kotest:kotest-framework-engine:$version")\n      }\n    }\n  }\n}\n')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Only the new IR compiler backend for Kotlin/JS is supported. If you are compiling JS with the legacy compiler backend then you will not be\nable to use Kotest for testing.")),(0,r.kt)("p",null,"Write your tests using ",(0,r.kt)("a",{parentName:"p",href:"/docs/framework/testing-styles.html#fun-spec"},"FunSpec"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/framework/testing-styles.html#should-spec"},"ShouldSpec")," or ",(0,r.kt)("a",{parentName:"p",href:"/docs/framework/testing-styles.html#string-spec"},"StringSpec"),".\nTests can be placed in either ",(0,r.kt)("inlineCode",{parentName:"p"},"commonTest")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"jsTest"),"\nsource sets. Run your tests using the ",(0,r.kt)("inlineCode",{parentName:"p"},"gradle check")," command."),(0,r.kt)("p",null,"The Javascript test engine is feature limited when compared to the JVM test engine. The major restriction is that annotation\nbased configuration will not work as Kotlin does not expose annotations at runtime to javascript code."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Tests for Javascript cannot nest tests. This is due to the underlying Javascript test runners (such as Mocha or Karma)\nnot supporting promises in parent tests, which is incompatible with coroutines and in Kotest every test scope is a coroutine.\nThis is why the supported specs are limited to ",(0,r.kt)("inlineCode",{parentName:"p"},"FunSpec"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ShouldSpec")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"StringSpec"),".")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The IntelliJ Kotest plugin does not support running common, native or JS tests directly from the IDE using the green run icons.\nOnly execution via gradle is supported."))),(0,r.kt)(l.Z,{value:"Native",mdxType:"TabItem"},(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"A working multi-platform project with JVM, native and Javascript all configured, with unit and data driven test examples, can be found here:\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kotest/kotest-examples-multiplatform"},"https://github.com/kotest/kotest-examples-multiplatform"))),(0,r.kt)("p",null,"Add the ",(0,r.kt)("a",{parentName:"p",href:"https://plugins.gradle.org/plugin/io.kotest.multiplatform"},"Kotest multiplatform gradle plugin")," to your build."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'plugins {\n  id("io.kotest.multiplatform") version "5.0.2"\n}\n')),(0,r.kt)("p",null,"Add the engine dependency to your ",(0,r.kt)("inlineCode",{parentName:"p"},"commonTest")," dependencies block:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'kotlin {\n  targets {\n    linuxX64() // can add any supported native targets such as linux, mac, windows etc\n  }\n}\nsourceSets {\n  val commonTest by getting {\n    dependencies {\n      implementation("io.kotest:kotest-framework-engine:$version")\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Tests can be placed in either ",(0,r.kt)("inlineCode",{parentName:"p"},"commonTest")," or a specific native sourceset.\nRun your tests using the ",(0,r.kt)("inlineCode",{parentName:"p"},"gradle check")," command."),(0,r.kt)("p",null,"The native test engine is feature limited when compared to the JVM test engine. The major restriction is that annotation\nbased configuration will not work as Kotlin does not expose annotations at runtime to native code."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The IntelliJ Kotest plugin does not support running common, native or JS tests from the IDE. You will need to use\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"gradle check")," task."))),(0,r.kt)(l.Z,{value:"JVM/Maven",mdxType:"TabItem"},(0,r.kt)("p",null,"For maven you must configure the surefire plugin for junit tests."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n   <groupId>org.apache.maven.plugins</groupId>\n   <artifactId>maven-surefire-plugin</artifactId>\n   <version>2.22.2</version>\n</plugin>\n")),(0,r.kt)("p",null,"And then add the Kotest JUnit5 runner to your dependencies section."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n   <groupId>io.kotest</groupId>\n   <artifactId>kotest-runner-junit5-jvm</artifactId>\n   <version>{version}</version>\n   <scope>test</scope>\n</dependency>\n"))),(0,r.kt)(l.Z,{value:"Android",mdxType:"TabItem"},(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Currently, only JVM tests are officially supported in Kotest. We are open to suggestions on how to support UI tests."),(0,r.kt)("p",{parentName:"admonition"},"The following steps enable Kotest to be used for unit and integration tests, where the Android framework is not needed or is mocked that usually reside in the\n",(0,r.kt)("inlineCode",{parentName:"p"},"src/test")," folder of your module.")),(0,r.kt)("p",null,"Kotest on Android uses the ",(0,r.kt)("a",{parentName:"p",href:"https://junit.org/junit5/docs/current/user-guide/#running-tests-build-gradle"},"JUnit Platform")," gradle plugin.\nThis requires configuring the android test options block in your build file and then adding the Kotest junit5 runner dependency."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"android.testOptions {\n   unitTests.all {\n      it.useJUnitPlatform()\n   }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n   testImplementation 'io.kotest:kotest-runner-junit5:version'\n}\n"))),(0,r.kt)(l.Z,{value:"Multiplatform",mdxType:"TabItem"},(0,r.kt)("p",null,"To configure the test framework for both JS and JVM, you just combine copy the steps for JVM and JS."))),(0,r.kt)("h2",{id:"assertions-library"},"Assertions Library"),(0,r.kt)("p",null,"The core assertions library framework is supported on all targets. Submodules are supported on the platforms that applicable.\nFor example, the JDBC matchers only work for JVM since JDBC is a Java library."),(0,r.kt)(o.Z,{defaultValue:"JVM/Gradle",values:[{label:"JVM/Gradle",value:"JVM/Gradle"},{label:"JVM/Maven",value:"JVM/Maven"},{label:"Multiplatform",value:"Multiplatform"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"JVM/Gradle",mdxType:"TabItem"},(0,r.kt)("p",null,"Add the following dependency to your build:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"testImplementation 'io.kotest:kotest-assertions-core:$version'\n"))),(0,r.kt)(l.Z,{value:"JVM/Maven",mdxType:"TabItem"},(0,r.kt)("p",null,"Add the following dependency to your build."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n   <groupId>io.kotest</groupId>\n   <artifactId>kotest-assertions-core-jvm</artifactId>\n   <version>{version}</version>\n   <scope>test</scope>\n</dependency>\n"))),(0,r.kt)(l.Z,{value:"Multiplatform",mdxType:"TabItem"},(0,r.kt)("p",null,"Add the following dependency to your commonTest dependencies block:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"implementation 'io.kotest:kotest-assertions-core:$version'\n")),(0,r.kt)("p",null,"Alternatively, add the dependency to a specific target. For example, we could add to the Javascript target only."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'kotlin {\n   targets {\n      js {\n         browser()\n         nodejs()\n      }\n   }\n   sourceSets {\n      val jsTest by getting {\n         dependencies {\n            implementation("io.kotest:kotest-assertions-core:$version")\n         }\n      }\n   }\n}\n')))),(0,r.kt)("h2",{id:"property-testing"},"Property Testing"),(0,r.kt)("p",null,"The property test framework is supported on all targets."),(0,r.kt)(o.Z,{defaultValue:"JVM/Gradle",values:[{label:"JVM/Gradle",value:"JVM/Gradle"},{label:"JVM/Maven",value:"JVM/Maven"},{label:"Multiplatform",value:"Multiplatform"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"JVM/Gradle",mdxType:"TabItem"},(0,r.kt)("p",null,"Add the following dependency to your build:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"testImplementation 'io.kotest:kotest-property:$version'\n"))),(0,r.kt)(l.Z,{value:"JVM/Maven",mdxType:"TabItem"},(0,r.kt)("p",null,"Add the following dependency to your build."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n   <groupId>io.kotest</groupId>\n   <artifactId>kotest-property-jvm</artifactId>\n   <version>${version}</version>\n   <scope>test</scope>\n</dependency>\n"))),(0,r.kt)(l.Z,{value:"Multiplatform",mdxType:"TabItem"},(0,r.kt)("p",null,"Add the following dependency to your commonTest dependencies block:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"implementation 'io.kotest:kotest-property:$version'\n")),(0,r.kt)("p",null,"Alternatively, add the dependency to a specific target. For example, we could add to the Javascript target only."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'kotlin {\n   targets {\n      js {\n         browser()\n         nodejs()\n      }\n   }\n   sourceSets {\n      val jsTest by getting {\n         dependencies {\n            implementation("io.kotest:kotest-property:$version")\n         }\n      }\n   }\n}\n')))),(0,r.kt)("h2",{id:"snapshots"},"Snapshots"),(0,r.kt)("p",null,"Snapshot are automatically published on each commit to master.\nIf you want to test the latest snapshot build, setup the same way described above, change the version to the current snapshot version and add the following repository to your ",(0,r.kt)("inlineCode",{parentName:"p"},"repositories")," block:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://oss.sonatype.org/content/repositories/snapshots\n")))}m.isMDXComponent=!0}}]);