"use strict";(self.webpackChunkjjbook=self.webpackChunkjjbook||[]).push([[6695],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),k=r,d=m["".concat(p,".").concat(k)]||m[k]||c[k]||l;return n?o.createElement(d,a(a({ref:t},u),{},{components:n})):o.createElement(d,a({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var s=2;s<l;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8070:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var o=n(7462),r=n(3366),l=(n(7294),n(3905)),a=["components"],i={sidebar_label:"\u6d4f\u89c8\u5668\uff1a\u6d4f\u89c8\u5668\u4e8b\u4ef6\u5faa\u73af",sidebar_position:1},p="\u6d4f\u89c8\u5668\u4e8b\u4ef6\u5faa\u73af",s={unversionedId:"book3/browser-event-loop",id:"book3/browser-event-loop",isDocsHomePage:!1,title:"\u6d4f\u89c8\u5668\u4e8b\u4ef6\u5faa\u73af",description:"\u76f8\u5173\u95ee\u9898",source:"@site/docs/book3/browser-event-loop.md",sourceDirName:"book3",slug:"/book3/browser-event-loop",permalink:"/awesome-interview/book3/browser-event-loop",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"\u6d4f\u89c8\u5668\uff1a\u6d4f\u89c8\u5668\u4e8b\u4ef6\u5faa\u73af",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u7efc\u5408\uff1a\u591a\u56fe\u7ad9\u70b9\u6027\u80fd\u4f18\u5316",permalink:"/awesome-interview/book2/topic-multi-pics-site-optimize"},next:{title:"\u6d4f\u89c8\u5668\uff1a\u5982\u4f55\u5b9a\u4f4d\u5185\u5b58\u6cc4\u9732",permalink:"/awesome-interview/book3/browser-memory-leaks"}},u=[{value:"\u76f8\u5173\u95ee\u9898",id:"\u76f8\u5173\u95ee\u9898",children:[]},{value:"\u56de\u7b54\u5173\u952e\u70b9",id:"\u56de\u7b54\u5173\u952e\u70b9",children:[]},{value:"\u77e5\u8bc6\u70b9\u6df1\u5165",id:"\u77e5\u8bc6\u70b9\u6df1\u5165",children:[{value:"1. \u4ec0\u4e48\u662f\u6d4f\u89c8\u5668\u4e8b\u4ef6\u5faa\u73af",id:"1-\u4ec0\u4e48\u662f\u6d4f\u89c8\u5668\u4e8b\u4ef6\u5faa\u73af",children:[]},{value:"2. \u6d4f\u89c8\u5668\u4e3a\u4ec0\u4e48\u9700\u8981\u4e8b\u4ef6\u5faa\u73af",id:"2-\u6d4f\u89c8\u5668\u4e3a\u4ec0\u4e48\u9700\u8981\u4e8b\u4ef6\u5faa\u73af",children:[]},{value:"3. \u5b8f\u4efb\u52a1\u4e0e\u5fae\u4efb\u52a1",id:"3-\u5b8f\u4efb\u52a1\u4e0e\u5fae\u4efb\u52a1",children:[]},{value:"4. Node.js \u4e2d\u7684\u4e8b\u4ef6\u5faa\u73af",id:"4-nodejs-\u4e2d\u7684\u4e8b\u4ef6\u5faa\u73af",children:[]}]},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",children:[]}],c={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,l.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u6d4f\u89c8\u5668\u4e8b\u4ef6\u5faa\u73af"},"\u6d4f\u89c8\u5668\u4e8b\u4ef6\u5faa\u73af"),(0,l.kt)("h2",{id:"\u76f8\u5173\u95ee\u9898"},"\u76f8\u5173\u95ee\u9898"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4ec0\u4e48\u662f\u6d4f\u89c8\u5668\u4e8b\u4ef6\u5faa\u73af"),(0,l.kt)("li",{parentName:"ul"},"\u6d4f\u89c8\u5668\u4e3a\u4ec0\u4e48\u9700\u8981\u4e8b\u4ef6\u5faa\u73af"),(0,l.kt)("li",{parentName:"ul"},"Node.js \u4e2d\u7684\u4e8b\u4ef6\u5faa\u73af")),(0,l.kt)("h2",{id:"\u56de\u7b54\u5173\u952e\u70b9"},"\u56de\u7b54\u5173\u952e\u70b9"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"\u4efb\u52a1\u961f\u5217")," ",(0,l.kt)("inlineCode",{parentName:"p"},"\u5f02\u6b65")," ",(0,l.kt)("inlineCode",{parentName:"p"},"\u975e\u963b\u585e")),(0,l.kt)("p",null,"\u6d4f\u89c8\u5668\u9700\u8981\u4e8b\u4ef6\u5faa\u73af\u6765\u534f\u8c03\u4e8b\u4ef6\u3001\u7528\u6237\u64cd\u4f5c\u3001\u811a\u672c\u6267\u884c\u3001\u6e32\u67d3\u3001\u7f51\u7edc\u8bf7\u6c42\u7b49\u3002\u901a\u8fc7\u4e8b\u4ef6\u5faa\u73af\uff0c\u6d4f\u89c8\u5668\u53ef\u4ee5\u5229\u7528",(0,l.kt)("strong",{parentName:"p"},"\u4efb\u52a1\u961f\u5217"),"\u6765\u7ba1\u7406\u4efb\u52a1\uff0c\u8ba9\u5f02\u6b65\u4e8b\u4ef6",(0,l.kt)("strong",{parentName:"p"},"\u975e\u963b\u585e"),"\u5730\u6267\u884c\u3002\u6bcf\u4e2a\u5ba2\u6237\u7aef\u5bf9\u5e94\u7684\u4e8b\u4ef6\u5faa\u73af\u662f\u76f8\u5bf9\u72ec\u7acb\u7684\u3002"),(0,l.kt)("h2",{id:"\u77e5\u8bc6\u70b9\u6df1\u5165"},"\u77e5\u8bc6\u70b9\u6df1\u5165"),(0,l.kt)("h3",{id:"1-\u4ec0\u4e48\u662f\u6d4f\u89c8\u5668\u4e8b\u4ef6\u5faa\u73af"},"1. \u4ec0\u4e48\u662f\u6d4f\u89c8\u5668\u4e8b\u4ef6\u5faa\u73af"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5728\u8ba1\u7b97\u673a\u4e2d\uff0cEvent Loop \u662f\u4e00\u4e2a\u7a0b\u5e8f\u7ed3\u6784\uff0c\u7528\u4e8e\u7b49\u5f85\u548c\u53d1\u9001\u6d88\u606f\u548c\u4e8b\u4ef6\u3002 \u2014\u2014 \u7ef4\u57fa\u767e\u79d1")),(0,l.kt)("p",null,"Event Loop \u53ef\u4ee5\u7406\u89e3\u4e3a\u4e00\u4e2a\u6d88\u606f\u5206\u53d1\u5668\uff0c\u901a\u8fc7\u63a5\u6536\u548c\u5206\u53d1\u4e0d\u540c\u7c7b\u578b\u7684\u6d88\u606f\uff0c\u8ba9\u6267\u884c\u7a0b\u5e8f\u7684\u4e8b\u4ef6\u8c03\u5ea6\u66f4\u52a0\u5408\u7406\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6d4f\u89c8\u5668\u4e8b\u4ef6\u5faa\u73af\u662f\u4ee5\u6d4f\u89c8\u5668\u4e3a\u5bbf\u4e3b\u73af\u5883\u5b9e\u73b0\u7684\u4e8b\u4ef6\u8c03\u5ea6"),"\uff0c\u64cd\u4f5c\u987a\u5e8f\u5982\u4e0b\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6267\u884c\u540c\u6b65\u4ee3\u7801\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u6267\u884c\u4e00\u4e2a\u5b8f\u4efb\u52a1\uff08\u6267\u884c\u6808\u4e2d\u6ca1\u6709\u5c31\u4ece\u4efb\u52a1\u961f\u5217\u4e2d\u83b7\u53d6\uff09\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u6267\u884c\u8fc7\u7a0b\u4e2d\u5982\u679c\u9047\u5230\u5fae\u4efb\u52a1\uff0c\u5c31\u5c06\u5b83\u6dfb\u52a0\u5230\u5fae\u4efb\u52a1\u7684\u4efb\u52a1\u961f\u5217\u4e2d\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5b8f\u4efb\u52a1\u6267\u884c\u5b8c\u6bd5\u540e\uff0c\u7acb\u5373\u6267\u884c\u5f53\u524d\u5fae\u4efb\u52a1\u961f\u5217\u4e2d\u7684\u6240\u6709\u5fae\u4efb\u52a1\uff08\u4f9d\u6b21\u6267\u884c\uff09\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5f53\u524d\u5b8f\u4efb\u52a1\u6267\u884c\u5b8c\u6bd5\uff0c\u5f00\u59cb\u68c0\u67e5\u6e32\u67d3\uff0c\u7136\u540e\u6e32\u67d3\u7ebf\u7a0b\u63a5\u7ba1\u8fdb\u884c\u6e32\u67d3\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u6e32\u67d3\u5b8c\u6bd5\u540e\uff0cJavaScript \u7ebf\u7a0b\u7ee7\u7eed\u63a5\u7ba1\uff0c\u5f00\u59cb\u4e0b\u4e00\u4e2a\u5faa\u73af\u3002")),(0,l.kt)("p",null,"\u4e0b\u56fe\u5c55\u793a\u4e86\u8fd9\u4e2a\u8fc7\u7a0b\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/12165373/129468098-f75d76f6-ad01-4390-a155-7fcd179f6a07.gif",alt:"browser event loop"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u56fe\u7247\u6765\u6e90 ",(0,l.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=8aGhZQkoFbQ&t=31s"},"JS CONF EU 2014"))),(0,l.kt)("h3",{id:"2-\u6d4f\u89c8\u5668\u4e3a\u4ec0\u4e48\u9700\u8981\u4e8b\u4ef6\u5faa\u73af"},"2. \u6d4f\u89c8\u5668\u4e3a\u4ec0\u4e48\u9700\u8981\u4e8b\u4ef6\u5faa\u73af"),(0,l.kt)("p",null,"\u7531\u4e8e JavaScript \u662f\u5355\u7ebf\u7a0b\u7684\uff0c\u4e14 JavaScript \u4e3b\u7ebf\u7a0b\u548c\u6e32\u67d3\u7ebf\u7a0b\u4e92\u65a5\uff0c\u5982\u679c\u5f02\u6b65\u64cd\u4f5c\uff08\u5982\u4e0a\u56fe\u63d0\u5230\u7684 WebAPIs\uff09\u963b\u585e JavaScript \u7684\u6267\u884c\uff0c\u4f1a\u9020\u6210\u6d4f\u89c8\u5668\u5047\u6b7b\u3002\u800c\u4e8b\u4ef6\u5faa\u73af\u4e3a\u6d4f\u89c8\u5668\u5f15\u5165\u4e86\u4efb\u52a1\u961f\u5217\uff08task queue\uff09\uff0c\u4f7f\u5f97\u5f02\u6b65\u4efb\u52a1\u53ef\u4ee5\u975e\u963b\u585e\u5730\u8fdb\u884c\u3002"),(0,l.kt)("p",null,"\u6d4f\u89c8\u5668\u4e8b\u4ef6\u5faa\u73af\u5728\u5904\u7406\u5f02\u6b65\u4efb\u52a1\u65f6\u4e0d\u4f1a\u4e00\u76f4\u7b49\u5f85\u5176\u8fd4\u56de\u7ed3\u679c\uff0c\u800c\u662f\u5c06\u8fd9\u4e2a\u4e8b\u4ef6\u6302\u8d77\uff0c\u7ee7\u7eed\u6267\u884c\u6808\u4e2d\u7684\u5176\u4ed6\u4efb\u52a1\u3002\u5f53\u5f02\u6b65\u4e8b\u4ef6\u8fd4\u56de\u7ed3\u679c\uff0c\u5c06\u5b83\u653e\u5230\u4efb\u52a1\u961f\u5217\u4e2d\uff0c\u88ab\u653e\u5165\u4efb\u52a1\u961f\u5217\u4e0d\u4f1a\u7acb\u523b\u6267\u884c\u56de\u8c03\uff0c\u800c\u662f\u7b49\u5f85\u5f53\u524d\u6267\u884c\u6808\u4e2d\u6240\u6709\u4efb\u52a1\u90fd\u6267\u884c\u5b8c\u6bd5\uff0c\u4e3b\u7ebf\u7a0b\u5904\u4e8e\u7a7a\u95f2\u72b6\u6001\uff0c\u4e3b\u7ebf\u7a0b\u4f1a\u53bb\u67e5\u627e\u4efb\u52a1\u961f\u5217\u4e2d\u662f\u5426\u6709\u4efb\u52a1\uff0c\u5982\u679c\u6709\uff0c\u53d6\u51fa\u6392\u5728\u7b2c\u4e00\u4f4d\u7684\u4e8b\u4ef6\uff0c\u5e76\u628a\u8fd9\u4e2a\u4e8b\u4ef6\u5bf9\u5e94\u7684\u56de\u8c03\u653e\u5230\u6267\u884c\u6808\u4e2d\uff0c\u6267\u884c\u5176\u4e2d\u7684\u540c\u6b65\u4ee3\u7801\u3002"),(0,l.kt)("h3",{id:"3-\u5b8f\u4efb\u52a1\u4e0e\u5fae\u4efb\u52a1"},"3. \u5b8f\u4efb\u52a1\u4e0e\u5fae\u4efb\u52a1"),(0,l.kt)("p",null,"\u5f02\u6b65\u4efb\u52a1\u88ab\u5206\u4e3a\u4e24\u7c7b\uff1a\u5b8f\u4efb\u52a1\uff08macrotask\uff09\u4e0e\u5fae\u4efb\u52a1\uff08microtask\uff09\uff0c\u4e24\u8005\u7684\u6267\u884c\u4f18\u5148\u7ea7\u4e5f\u6709\u6240\u533a\u522b\u3002"),(0,l.kt)("p",null,"\u5b8f\u4efb\u52a1\u4e3b\u8981\u5305\u542b\uff1ascript\uff08\u6574\u4f53\u4ee3\u7801\uff09\u3001setTimeout\u3001setInterval\u3001setImmediate\u3001I/O\u3001UI \u4ea4\u4e92\u4e8b\u4ef6\u3002"),(0,l.kt)("p",null,"\u5fae\u4efb\u52a1\u4e3b\u8981\u5305\u542b\uff1aPromise\u3001MutationObserver \u7b49\u3002"),(0,l.kt)("p",null,"\u5728\u5f53\u524d\u6267\u884c\u6808\u4e3a\u7a7a\u7684\u65f6\u5019\uff0c\u4e3b\u7ebf\u7a0b\u4f1a\u67e5\u770b\u5fae\u4efb\u52a1\u961f\u5217\u662f\u5426\u6709\u4e8b\u4ef6\u5b58\u5728\u3002\u5982\u679c\u4e0d\u5b58\u5728\uff0c\u90a3\u4e48\u518d\u53bb\u5b8f\u4efb\u52a1\u961f\u5217\u4e2d\u53d6\u51fa\u4e00\u4e2a\u4e8b\u4ef6\u5e76\u628a\u5bf9\u5e94\u7684\u56de\u8c03\u52a0\u5165\u5f53\u524d\u6267\u884c\u6808\uff1b\u5982\u679c\u5b58\u5728\uff0c\u5219\u4f1a\u4f9d\u6b21\u6267\u884c\u961f\u5217\u4e2d\u4e8b\u4ef6\u5bf9\u5e94\u7684\u56de\u8c03\uff0c\u76f4\u5230\u5fae\u4efb\u52a1\u961f\u5217\u4e3a\u7a7a\uff0c\u7136\u540e\u53bb\u5b8f\u4efb\u52a1\u961f\u5217\u4e2d\u53d6\u51fa\u6700\u524d\u9762\u7684\u4e00\u4e2a\u4e8b\u4ef6\uff0c\u628a\u5bf9\u5e94\u7684\u56de\u8c03\u52a0\u5165\u5f53\u524d\u6267\u884c\u6808\u3002\u5982\u6b64\u53cd\u590d\uff0c\u8fdb\u5165\u5faa\u73af\u3002\u4e0b\u9762\u901a\u8fc7\u4e00\u4e2a\u5177\u4f53\u7684\u4f8b\u5b50\u6765\u8fdb\u884c\u5206\u6790\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'Promise.resolve().then(() => {\n  // \u5fae\u4efb\u52a11\n  console.log("Promise1");\n  setTimeout(() => {\n    // \u5b8f\u4efb\u52a12\n    console.log("setTimeout2");\n  }, 0);\n});\nsetTimeout(() => {\n  // \u5b8f\u4efb\u52a11\n  console.log("setTimeout1");\n  Promise.resolve().then(() => {\n    // \u5fae\u4efb\u52a12\n    console.log("Promise2");\n  });\n}, 0);\n')),(0,l.kt)("p",null,"\u6700\u540e\u8f93\u51fa\u987a\u5e8f\u4e3a\uff1aPromise1\uff0csetTimeout1\uff0cPromise2\uff0csetTimeout2\u3002\u5177\u4f53\u6d41\u7a0b\u5982\u4e0b\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u540c\u6b65\u4efb\u52a1\u6267\u884c\u5b8c\u6bd5\u3002\u5fae\u4efb\u52a1 1 \u8fdb\u5165\u5fae\u4efb\u52a1\u961f\u5217\uff0c\u5b8f\u4efb\u52a1 1 \u8fdb\u5165\u5b8f\u4efb\u52a1\u961f\u5217\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u67e5\u770b\u5fae\u4efb\u52a1\u961f\u5217\uff0c\u5fae\u4efb\u52a1 1 \u6267\u884c\uff0c\u6253\u5370 Promise1\uff0c\u751f\u6210\u5b8f\u4efb\u52a1 2\uff0c\u8fdb\u5165\u5b8f\u4efb\u52a1\u961f\u5217\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u67e5\u770b\u5b8f\u4efb\u52a1\u961f\u5217\uff0c\u5b8f\u4efb\u52a1 1 \u6267\u884c\uff0c\u6253\u5370 setTimeout1\uff0c\u751f\u6210\u5fae\u4efb\u52a1 2\uff0c\u8fdb\u5165\u5fae\u4efb\u52a1\u961f\u5217\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u67e5\u770b\u5fae\u4efb\u52a1\u961f\u5217\uff0c\u5fae\u4efb\u52a1 2 \u6267\u884c\uff0c\u6253\u5370 Promise2\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u67e5\u770b\u5b8f\u4efb\u52a1\u961f\u5217\uff0c\u5b8f\u4efb\u52a1 2 \u6267\u884c\uff0c\u6253\u5370 setTimeout2\u3002")),(0,l.kt)("h3",{id:"4-nodejs-\u4e2d\u7684\u4e8b\u4ef6\u5faa\u73af"},"4. Node.js \u4e2d\u7684\u4e8b\u4ef6\u5faa\u73af"),(0,l.kt)("p",null,"\u5728 Node.js \u4e2d\uff0c\u4e8b\u4ef6\u5faa\u73af\u8868\u73b0\u51fa\u7684\u72b6\u6001\u4e0e\u6d4f\u89c8\u5668\u4e2d\u5927\u81f4\u76f8\u540c\u3002\u4e0d\u540c\u7684\u662f Node.js \u4e2d\u6709\u4e00\u5957\u81ea\u5df1\u7684\u6a21\u578b\u3002 Node.js \u4e2d\u4e8b\u4ef6\u5faa\u73af\u7684\u5b9e\u73b0\u662f\u4f9d\u9760\u7684 libuv \u5f15\u64ce\u3002\u4e0b\u56fe\u7b80\u8981\u4ecb\u7ecd\u4e86\u4e8b\u4ef6\u5faa\u73af\u64cd\u4f5c\u987a\u5e8f\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/12165373/129439935-105a2439-23c8-4b2c-aea1-2493c3bf50e9.png",alt:"node event loop"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u56fe\u7247\u6765\u6e90 ",(0,l.kt)("a",{parentName:"p",href:"https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/#what-is-the-event-loop"},"Node.js \u5b98\u7f51"))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"timers\uff1a\u672c\u9636\u6bb5\u6267\u884c\u5df2\u7ecf\u88ab setTimeout() \u548c setInterval() \u7684\u8c03\u5ea6\u56de\u8c03\u51fd\u6570\u3002"),(0,l.kt)("li",{parentName:"ol"},"pending callbacks\uff1a\u6267\u884c\u5ef6\u8fdf\u5230\u4e0b\u4e00\u4e2a\u5faa\u73af\u8fed\u4ee3\u7684 I/O \u56de\u8c03\u3002"),(0,l.kt)("li",{parentName:"ol"},"idle\u3001prepare\uff1a\u4ec5\u7cfb\u7edf\u5185\u90e8\u4f7f\u7528\u3002"),(0,l.kt)("li",{parentName:"ol"},"poll\uff1a\u68c0\u7d22\u65b0\u7684 I/O \u4e8b\u4ef6;\u6267\u884c\u4e0e I/O \u76f8\u5173\u7684\u56de\u8c03\uff08\u51e0\u4e4e\u6240\u6709\u60c5\u51b5\u4e0b\uff0c\u9664\u4e86\u5173\u95ed\u7684\u56de\u8c03\u51fd\u6570\uff0c\u90a3\u4e9b\u7531\u8ba1\u65f6\u5668\u548c setImmediate() \u8c03\u5ea6\u7684\u4e4b\u5916\uff09\uff0c\u5176\u4f59\u60c5\u51b5 node \u5c06\u5728\u9002\u5f53\u7684\u65f6\u5019\u5728\u6b64\u963b\u585e\u3002"),(0,l.kt)("li",{parentName:"ol"},"check\uff1asetImmediate() \u56de\u8c03\u51fd\u6570\u5728\u8fd9\u91cc\u6267\u884c\u3002"),(0,l.kt)("li",{parentName:"ol"},"close callbacks\uff1a\u4e00\u4e9b\u5173\u95ed\u7684\u56de\u8c03\u51fd\u6570\uff0c\u5982\uff1asocket.on('close', ...)\u3002")),(0,l.kt)("p",null,"\u5728\u6bcf\u6b21\u8fd0\u884c\u7684\u4e8b\u4ef6\u5faa\u73af\u4e4b\u95f4\uff0cNode.js \u68c0\u67e5\u5b83\u662f\u5426\u5728\u7b49\u5f85\u4efb\u4f55\u5f02\u6b65 I/O \u6216\u8ba1\u65f6\u5668\uff0c\u5982\u679c\u6ca1\u6709\u7684\u8bdd\uff0c\u5219\u5b8c\u5168\u5173\u95ed\u3002"),(0,l.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://html.spec.whatwg.org/multipage/webappapis.html#event-loops"},"whatwg event loops")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Event_loop"},"wikipedia event loops")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/#what-is-the-event-loop"},"Node.js event loops"))))}m.isMDXComponent=!0}}]);