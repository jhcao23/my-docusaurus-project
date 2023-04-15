"use strict";(self.webpackChunkmy_docusaurus_project=self.webpackChunkmy_docusaurus_project||[]).push([[914],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>i,MDXProvider:()=>m,mdx:()=>f,useMDXComponents:()=>p,withMDXComponents:()=>c});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){return function(t){var r=p(t.components);return n.createElement(e,a({},t,{components:r}))}},p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),c=p(r),m=o,d=c["".concat(l,".").concat(m)]||c[m]||g[m]||a;return r?n.createElement(d,u(u({ref:t},i),{},{components:r})):n.createElement(d,u({ref:t},i))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=b;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[d]="string"==typeof e?e:o,l[1]=u;for(var i=2;i<a;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},2900:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>u,toc:()=>i});var n=r(7462),o=(r(7294),r(3905));const a={slug:"welcome",title:"Welcome",authors:["slorber","yangshun"],tags:["facebook","hello","docusaurus"]},l=void 0,u={permalink:"/blog/welcome",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2021-08-26-welcome/index.md",source:"@site/blog/2021-08-26-welcome/index.md",title:"Welcome",description:"Docusaurus blogging features are powered by the blog plugin.",date:"2021-08-26T00:00:00.000Z",formattedDate:"August 26, 2021",tags:[{label:"facebook",permalink:"/blog/tags/facebook"},{label:"hello",permalink:"/blog/tags/hello"},{label:"docusaurus",permalink:"/blog/tags/docusaurus"}],readingTime:.405,hasTruncateMarker:!1,authors:[{name:"S\xe9bastien Lorber",title:"Docusaurus maintainer",url:"https://sebastienlorber.com",imageURL:"https://github.com/slorber.png",key:"slorber"},{name:"Yangshun Tay",title:"Front End Engineer @ Facebook",url:"https://github.com/yangshun",imageURL:"https://github.com/yangshun.png",key:"yangshun"}],frontMatter:{slug:"welcome",title:"Welcome",authors:["slorber","yangshun"],tags:["facebook","hello","docusaurus"]},nextItem:{title:"MDX Blog Post",permalink:"/blog/mdx-blog-post"}},s={authorsImageUrls:[void 0,void 0]},i=[],c={toc:i},p="wrapper";function m(e){let{components:t,...a}=e;return(0,o.mdx)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"https://docusaurus.io/docs/blog"},"Docusaurus blogging features")," are powered by the ",(0,o.mdx)("a",{parentName:"p",href:"https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog"},"blog plugin"),"."),(0,o.mdx)("p",null,"Simply add Markdown files (or folders) to the ",(0,o.mdx)("inlineCode",{parentName:"p"},"blog")," directory."),(0,o.mdx)("p",null,"Regular blog authors can be added to ",(0,o.mdx)("inlineCode",{parentName:"p"},"authors.yml"),"."),(0,o.mdx)("p",null,"The blog post date can be extracted from filenames, such as:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"2019-05-30-welcome.md")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"2019-05-30-welcome/index.md"))),(0,o.mdx)("p",null,"A blog post folder can be convenient to co-locate blog post images:"),(0,o.mdx)("p",null,(0,o.mdx)("img",{alt:"Docusaurus Plushie",src:r(7979).Z,width:"1500",height:"500"})),(0,o.mdx)("p",null,"The blog supports tags as well!"),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"And if you don't want a blog"),": just delete this directory, and use ",(0,o.mdx)("inlineCode",{parentName:"p"},"blog: false")," in your Docusaurus config."))}m.isMDXComponent=!0},7979:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/docusaurus-plushie-banner-a60f7593abca1e3eef26a9afa244e4fb.jpeg"}}]);