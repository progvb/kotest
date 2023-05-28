"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[36674],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),d=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=d(t.components);return a.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),u=d(n),h=r,k=u["".concat(s,".").concat(h)]||u[h]||m[h]||l;return n?a.createElement(k,i(i({ref:e},p),{},{components:n})):a.createElement(k,i({ref:e},p))}));function h(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},14646:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const l={title:"Arrow",slug:"arrow.html",sidebar_label:"Arrow"},i=void 0,o={unversionedId:"assertions/arrow",id:"version-5.6/assertions/arrow",title:"Arrow",description:"Latest Release",source:"@site/versioned_docs/version-5.6/assertions/arrow.md",sourceDirName:"assertions",slug:"/assertions/arrow.html",permalink:"/docs/assertions/arrow.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.6/assertions/arrow.md",tags:[],version:"5.6",frontMatter:{title:"Arrow",slug:"arrow.html",sidebar_label:"Arrow"},sidebar:"assertions",previous:{title:"Kotlinx Datetime",permalink:"/docs/assertions/kotlinx-datetime-matchers.html"},next:{title:"SQL",permalink:"/docs/assertions/sql-matchers.html"}},s={},d=[],p={toc:d};function m(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://search.maven.org/artifact/io.kotest.extensions/kotest-assertions-arrow"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/maven-central/v/io.kotest.extensions/kotest-assertions-arrow",alt:"Latest Release"}))),(0,r.kt)("p",null,"This page lists all current matchers in the Kotest arrow matchers extension library."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The following module is needed: ",(0,r.kt)("inlineCode",{parentName:"p"},"io.kotest.extensions:kotest-assertions-arrow")," which is versioned independently from the main Kotest project.\nSearch maven central for latest version ",(0,r.kt)("a",{parentName:"p",href:"https://search.maven.org/search?q=kotest-assertions-arrow"},"here"),".")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"In the case ",(0,r.kt)("inlineCode",{parentName:"p"},"io.arrow-kt:arrow-core:arrow-version")," is not in your classpath, please add it. To prevent Unresolved Reference errors.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"option.shouldBeSome()")),(0,r.kt)("td",{parentName:"tr",align:null},"Asserts that the option is of type Some and returns value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"option.shouldBeSome(v)")),(0,r.kt)("td",{parentName:"tr",align:null},"Asserts that the option is of type Some with value v")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"option.shouldBeNone()")),(0,r.kt)("td",{parentName:"tr",align:null},"Asserts that the option is of type None")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Either"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"either.shouldBeRight()")),(0,r.kt)("td",{parentName:"tr",align:null},"Asserts that the either is of type Right and returns the Right value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"either.shouldBeRight(v)")),(0,r.kt)("td",{parentName:"tr",align:null},"Asserts that the either is of type Right with specified value v")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"either.shouldBeLeft()")),(0,r.kt)("td",{parentName:"tr",align:null},"Asserts that the either is of type Left and returns the Left value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"either.shouldBeLeft(v)")),(0,r.kt)("td",{parentName:"tr",align:null},"Asserts that the either is of type Left with specific value v")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"NonEmptyList"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nel.shouldContain(e)")),(0,r.kt)("td",{parentName:"tr",align:null},"Asserts that the NonEmptyList contains the given element e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nel.shouldContainAll(e1,e2,...,en)")),(0,r.kt)("td",{parentName:"tr",align:null},"Asserts that the NonEmptyList contains all the given elements e1,e2,...,en")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nel.shouldContainNull()")),(0,r.kt)("td",{parentName:"tr",align:null},"Asserts that the NonEmptyList contains at least one null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nel.shouldContainNoNulls()")),(0,r.kt)("td",{parentName:"tr",align:null},"Asserts that the NonEmptyList contains no nulls")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nel.shouldContainOnlyNulls()")),(0,r.kt)("td",{parentName:"tr",align:null},"Asserts that the NonEmptyList contains only nulls or is empty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nel.shouldHaveDuplicates()")),(0,r.kt)("td",{parentName:"tr",align:null},"Asserts that the NonEmptyList has at least one duplicate")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nel.shouldBeSingleElement(e)")),(0,r.kt)("td",{parentName:"tr",align:null},"Asserts that the NonEmptyList has a single element which is e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nel.shouldBeSorted()")),(0,r.kt)("td",{parentName:"tr",align:null},"Asserts that the NonEmptyList is sorted")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Validated"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"validated.shouldBeValid()")),(0,r.kt)("td",{parentName:"tr",align:null},"Asserts that the validated is of type Valid and returns the Valid value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"validated.shouldBeValid(v)")),(0,r.kt)("td",{parentName:"tr",align:null},"Asserts that the validated is of type Valid with specific value v")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"validated.shouldBeInvalid()")),(0,r.kt)("td",{parentName:"tr",align:null},"Asserts that the validated is of type Invalid and returns the Invalid value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"validated.shouldBeInvalid(v)")),(0,r.kt)("td",{parentName:"tr",align:null},"Asserts that the validated is of type Invalid with specific value v")))))}m.isMDXComponent=!0}}]);