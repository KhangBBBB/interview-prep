var _e=Object.defineProperty;var ve=(t,e,n)=>e in t?_e(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var z=(t,e,n)=>(ve(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function O(){}function ge(t){return t()}function oe(){return Object.create(null)}function j(t){t.forEach(ge)}function Z(t){return typeof t=="function"}function R(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ye(t){return Object.keys(t).length===0}function w(t,e){t.appendChild(e)}function W(t,e,n){t.insertBefore(e,n||null)}function q(t){t.parentNode&&t.parentNode.removeChild(t)}function ee(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function v(t){return document.createElement(t)}function $(t){return document.createTextNode(t)}function A(){return $(" ")}function qe(){return $("")}function B(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function T(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Te(t){return Array.from(t.childNodes)}function S(t,e){e=""+e,t.data!==e&&(t.data=e)}function K(t,e,n,s){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,"")}let te;function x(t){te=t}const D=[],re=[];let I=[];const ae=[],We=Promise.resolve();let X=!1;function $e(){X||(X=!0,We.then(we))}function Y(t){I.push(t)}const V=new Set;let C=0;function we(){if(C!==0)return;const t=te;do{try{for(;C<D.length;){const e=D[C];C++,x(e),ke(e.$$)}}catch(e){throw D.length=0,C=0,e}for(x(null),D.length=0,C=0;re.length;)re.pop()();for(let e=0;e<I.length;e+=1){const n=I[e];V.has(n)||(V.add(n),n())}I.length=0}while(D.length);for(;ae.length;)ae.pop()();X=!1,V.clear(),x(t)}function ke(t){if(t.fragment!==null){t.update(),j(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Y)}}function Pe(t){const e=[],n=[];I.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),I=e}const G=new Set;let H;function ne(){H={r:0,c:[],p:H}}function se(){H.r||j(H.c),H=H.p}function y(t,e){t&&t.i&&(G.delete(t),t.i(e))}function P(t,e,n,s){if(t&&t.o){if(G.has(t))return;G.add(t),H.c.push(()=>{G.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function N(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function Q(t){t&&t.c()}function F(t,e,n){const{fragment:s,after_update:i}=t.$$;s&&s.m(e,n),Y(()=>{const o=t.$$.on_mount.map(ge).filter(Z);t.$$.on_destroy?t.$$.on_destroy.push(...o):j(o),t.$$.on_mount=[]}),i.forEach(Y)}function J(t,e){const n=t.$$;n.fragment!==null&&(Pe(n.after_update),j(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ae(t,e){t.$$.dirty[0]===-1&&(D.push(t),$e(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function M(t,e,n,s,i,o,u=null,p=[-1]){const c=te;x(t);const a=t.$$={fragment:null,ctx:[],props:o,update:O,not_equal:i,bound:oe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:oe(),dirty:p,skip_bound:!1,root:e.target||c.$$.root};u&&u(a.root);let l=!1;if(a.ctx=n?n(t,e.props||{},(f,r,...d)=>{const m=d.length?d[0]:r;return a.ctx&&i(a.ctx[f],a.ctx[f]=m)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](m),l&&Ae(t,f)),r}):[],a.update(),l=!0,j(a.before_update),a.fragment=s?s(a.ctx):!1,e.target){if(e.hydrate){const f=Te(e.target);a.fragment&&a.fragment.l(f),f.forEach(q)}else a.fragment&&a.fragment.c();e.intro&&y(t.$$.fragment),F(t,e.target,e.anchor),we()}x(c)}class U{constructor(){z(this,"$$");z(this,"$$set")}$destroy(){J(this,1),this.$destroy=O}$on(e,n){if(!Z(n))return O;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!ye(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Oe="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Oe);const L=[{title:"Java/OOP",subtitle:"Object-Oriented Programming in Java",flashcards:[{question:"What is Encapsulation in Java?",answer:"Encapsulation restricts access to the inner workings of that class using access modifiers."},{question:"What is Inheritance in Java?",answer:"Inheritance is a concept where one class (the subclass or derived class) inherits the fields and methods of another class (the superclass or base class)."},{question:"What is Polymorphism in Java?",answer:"Polymorphism allows methods to perform differently based on the object they are called on."},{question:"What is Abstraction in Java?",answer:"Abstraction hides implementation details and shows only essential features of an object to the outside world."},{question:"How do we achieve abstraction in Java?",answer:"Abstract classes and interfaces"},{question:"What is the difference between public, private, and protected?",answer:`- Public: Accessible from anywhere.
- Private: Accessible only within the same class.
- Protected: Accessible within the same package and by subclasses.`},{question:"What is Overriding in Java?",answer:"Overriding is when a subclass provides a specific implementation for a method already defined in its superclass."},{question:"What is Overloading in Java?",answer:"Overloading is when multiple methods in the same class have the same name but different parameter lists."},{question:"What is the difference between Abstract Class and Interface?",answer:"Abstract classes allow for a mix of abstract and concrete methods, while interfaces only have abstract methods that classes must implement."},{question:"What is garbage collection?",answer:"An automated process to clean up unused memory."}]},{title:"Data Structure",subtitle:"",flashcards:[{question:"What is Array?",answer:"Collection of elements stored in contiguous memory locations."},{question:"What is Linked List?",answer:"Collection of elements where each element points to the next one."},{question:"What is Stack?",answer:"A data structure that follows the Last In, First Out (LIFO) principle."},{question:"What are Stack operations?",answer:`- Push (adds an element to the top of the stack)
- Pop (removes the top element from the stack)`},{question:"What is Queue?",answer:"Data structure that follows the First In, First Out (FIFO) principle"},{question:"What are Queue operations?",answer:`- Enqueue (adding an element to the rear)
- Dequeue (removes the element from the front)`},{question:"What is Tree?",answer:"Data structure consisting of nodes connected by edges. It has a root node, parent nodes, and child node."},{question:"What is a leaf node in Tree?",answer:"A node that does not have any children."},{question:"What are variants of Tree?",answer:"Binary Tree, Binary Search Tree, AVL Tree, Red-Black Tree."},{question:"What is Binary Tree?",answer:"A tree data structure in which each node has at most two children."},{question:"What is Graph?",answer:"A non-linear data structure consisting of nodes connected by edges."},{question:"What is the relationship between Tree and Graph?",answer:"A tree is a specific type of graph characterized by its hierarchical structure without cycles, where each node has a unique parent except for the root node."},{question:"What is Hash Table?",answer:"Data structure that stores key-value pairs, allowing for efficient insertion, deletion, and lookup operations based on a unique hash function."},{question:"What is Collision in Hash Table?",answer:"Where two or more keys generate the same hash value."},{question:"What is Collision Resolution in Hash Table?",answer:"Strategies to manage collisions."},{question:"What are strategies to resolve collision in Hash Table?",answer:"Chaining or open addressing."},{question:"What is Map?",answer:"Data structure that stores unique key-value pairs."},{question:"What is the relationship between Map and Hash Table?",answer:"Hash Table is commonly used to implement Map."}]},{title:"Web Foundation",subtitle:"",flashcards:[{question:"What does HTTP stand for?",answer:"Hypertext Transfer Protocol"},{question:"What is HTTP",answer:"A request-response protocol used for transmitting hypermedia documents."},{question:"What are common HTTP methods?",answer:"GET, POST, PUT, DELETE, PATCH"},{question:"What is HTTP GET method?",answer:"Requests data from a specified resource."},{question:"What is HTTP POST method?",answer:"ubmits data to be processed to a specified resource."},{question:"What is HTTP PUT method?",answer:"pdates a specified resource with new data"},{question:"What is HTTP DELETE method?",answer:"Deletes a specified resource."},{question:"What is HTTP method PATCH?",answer:"Applies partial modifications to a resource."},{question:"What is HTTP status code?",answer:"Numeric code to indicate the outcome of a client's request."},{question:"What does HTTP status code 2xx indicate?",answer:"Success"},{question:"What does HTTP status code 3xx indicate?",answer:"Redirection"},{question:"What does HTTP status code 4xx indicate?",answer:"Client error."},{question:"What does HTTP status code 5xx indicate?",answer:"Server error."},{question:"What does URL stand for?",answer:"Uniform Resource Locator."},{question:"What is URL?",answer:"A address used to access resources on the internet, specifying the location and protocol."},{question:"What does DNS stand for?",answer:"Domain Name System."},{question:"What is DNS?",answer:"It translates domain names (like google.com) into IP addresses (like 172.217.7.238)."}]}];function Se(t){let e;return{c(){e=$(t[0])},m(n,s){W(n,e,s)},p(n,s){s&1&&S(e,n[0])},d(n){n&&q(e)}}}function Ee(t){let e;return{c(){e=$(t[1])},m(n,s){W(n,e,s)},p(n,s){s&2&&S(e,n[1])},d(n){n&&q(e)}}}function He(t){let e,n,s=t[3]?"Answer":`Question ${t[2]+1}`,i,o,u,p,c;function a(r,d){return r[3]?Ee:Se}let l=a(t),f=l(t);return{c(){e=v("div"),n=v("div"),i=$(s),o=A(),u=v("div"),f.c(),T(n,"class","question-answer svelte-1c9grjx"),T(u,"class","question-answer-content svelte-1c9grjx"),T(e,"class","flashcard svelte-1c9grjx"),T(e,"role","button"),T(e,"tabindex","0")},m(r,d){W(r,e,d),w(e,n),w(n,i),w(e,o),w(e,u),f.m(u,null),p||(c=[B(e,"click",t[4]),B(e,"keypress",t[4])],p=!0)},p(r,[d]){d&12&&s!==(s=r[3]?"Answer":`Question ${r[2]+1}`)&&S(i,s),l===(l=a(r))&&f?f.p(r,d):(f.d(1),f=l(r),f&&(f.c(),f.m(u,null)))},i:O,o:O,d(r){r&&q(e),f.d(),p=!1,j(c)}}}function Ce(t,e,n){let{question:s}=e,{answer:i}=e,{index:o}=e,u=!1;function p(){u&&n(3,u=!1)}function c(){n(3,u=!u)}return t.$$set=a=>{"question"in a&&n(0,s=a.question),"answer"in a&&n(1,i=a.answer),"index"in a&&n(2,o=a.index)},[s,i,o,u,c,p]}class Le extends U{constructor(e){super(),M(this,e,Ce,He,R,{question:0,answer:1,index:2,resetState:5})}get resetState(){return this.$$.ctx[5]}}function le(t,e,n){const s=t.slice();return s[1]=e[n].question,s[2]=e[n].answer,s[4]=n,s}function ce(t){let e,n=t[0].subtitle+"",s;return{c(){e=v("p"),s=$(n),T(e,"class","subtitle svelte-ms8g2g")},m(i,o){W(i,e,o),w(e,s)},p(i,o){o&1&&n!==(n=i[0].subtitle+"")&&S(s,n)},d(i){i&&q(e)}}}function ue(t){let e,n;return e=new Le({props:{question:t[1],answer:t[2],index:t[4]}}),{c(){Q(e.$$.fragment)},m(s,i){F(e,s,i),n=!0},p(s,i){const o={};i&1&&(o.question=s[1]),i&1&&(o.answer=s[2]),e.$set(o)},i(s){n||(y(e.$$.fragment,s),n=!0)},o(s){P(e.$$.fragment,s),n=!1},d(s){J(e,s)}}}function De(t){let e,n,s=t[0].title+"",i,o,u,p,c=t[0].subtitle.length>0&&ce(t),a=N(t[0].flashcards),l=[];for(let r=0;r<a.length;r+=1)l[r]=ue(le(t,a,r));const f=r=>P(l[r],1,1,()=>{l[r]=null});return{c(){e=v("div"),n=v("h1"),i=$(s),o=A(),c&&c.c(),u=A();for(let r=0;r<l.length;r+=1)l[r].c();T(n,"class","svelte-ms8g2g")},m(r,d){W(r,e,d),w(e,n),w(n,i),w(e,o),c&&c.m(e,null),w(e,u);for(let m=0;m<l.length;m+=1)l[m]&&l[m].m(e,null);p=!0},p(r,[d]){if((!p||d&1)&&s!==(s=r[0].title+"")&&S(i,s),r[0].subtitle.length>0?c?c.p(r,d):(c=ce(r),c.c(),c.m(e,u)):c&&(c.d(1),c=null),d&1){a=N(r[0].flashcards);let m;for(m=0;m<a.length;m+=1){const k=le(r,a,m);l[m]?(l[m].p(k,d),y(l[m],1)):(l[m]=ue(k),l[m].c(),y(l[m],1),l[m].m(e,null))}for(ne(),m=a.length;m<l.length;m+=1)f(m);se()}},i(r){if(!p){for(let d=0;d<a.length;d+=1)y(l[d]);p=!0}},o(r){l=l.filter(Boolean);for(let d=0;d<l.length;d+=1)P(l[d]);p=!1},d(r){r&&q(e),c&&c.d(),ee(l,r)}}}function Ie(t,e,n){let{topic:s}=e;return t.$$set=i=>{"topic"in i&&n(0,s=i.topic)},[s]}class Ne extends U{constructor(e){super(),M(this,e,Ie,De,R,{topic:0})}}function fe(t,e,n){const s=t.slice();return s[5]=e[n],s}function de(t){let e,n=t[5].label+"",s,i,o,u;function p(){return t[4](t[5])}return{c(){e=v("button"),s=$(n),i=A(),T(e,"class","dropdown-item svelte-1mmmvwn")},m(c,a){W(c,e,a),w(e,s),w(e,i),o||(u=B(e,"click",p),o=!0)},p(c,a){t=c,a&2&&n!==(n=t[5].label+"")&&S(s,n)},d(c){c&&q(e),o=!1,u()}}}function je(t){let e,n,s,i,o,u,p,c=N(t[1]),a=[];for(let l=0;l<c.length;l+=1)a[l]=de(fe(t,c,l));return{c(){e=v("div"),n=v("button"),s=$(t[0]),i=A(),o=v("div");for(let l=0;l<a.length;l+=1)a[l].c();T(n,"class","dropdown-button svelte-1mmmvwn"),T(o,"class","dropdown-content svelte-1mmmvwn"),K(o,"display",t[2]?"block":"none"),T(e,"class","dropdown svelte-1mmmvwn")},m(l,f){W(l,e,f),w(e,n),w(n,s),w(e,i),w(e,o);for(let r=0;r<a.length;r+=1)a[r]&&a[r].m(o,null);u||(p=B(n,"click",t[3]),u=!0)},p(l,[f]){if(f&1&&S(s,l[0]),f&6){c=N(l[1]);let r;for(r=0;r<c.length;r+=1){const d=fe(l,c,r);a[r]?a[r].p(d,f):(a[r]=de(d),a[r].c(),a[r].m(o,null))}for(;r<a.length;r+=1)a[r].d(1);a.length=c.length}f&4&&K(o,"display",l[2]?"block":"none")},i:O,o:O,d(l){l&&q(e),ee(a,l),u=!1,p()}}}function xe(t,e,n){let{label:s}=e,{items:i}=e,o=!1;function u(){n(2,o=!o)}const p=c=>{c.onClick(),n(2,o=!1)};return t.$$set=c=>{"label"in c&&n(0,s=c.label),"items"in c&&n(1,i=c.items)},[s,i,o,u,p]}class Be extends U{constructor(e){super(),M(this,e,xe,je,R,{label:0,items:1})}}function Fe(t){let e,n,s,i;return{c(){e=v("button"),n=$(t[0]),T(e,"class","svelte-1bual08")},m(o,u){W(o,e,u),w(e,n),s||(i=B(e,"click",function(){Z(t[1])&&t[1].apply(this,arguments)}),s=!0)},p(o,[u]){t=o,u&1&&S(n,t[0])},i:O,o:O,d(o){o&&q(e),s=!1,i()}}}function Je(t,e,n){let{label:s}=e,{onClick:i}=e;return t.$$set=o=>{"label"in o&&n(0,s=o.label),"onClick"in o&&n(1,i=o.onClick)},[s,i]}class Re extends U{constructor(e){super(),M(this,e,Je,Fe,R,{label:0,onClick:1})}}function he(t,e,n){const s=t.slice();return s[2]=e[n],s[4]=n,s}function me(t){let e,n;return e=new Ne({props:{topic:t[2]}}),{c(){Q(e.$$.fragment)},m(s,i){F(e,s,i),n=!0},i(s){n||(y(e.$$.fragment,s),n=!0)},o(s){P(e.$$.fragment,s),n=!1},d(s){J(e,s)}}}function pe(t){let e,n,s=t[0]===t[4]&&me(t);return{c(){s&&s.c(),e=qe()},m(i,o){s&&s.m(i,o),W(i,e,o),n=!0},p(i,o){i[0]===i[4]?s?o&1&&y(s,1):(s=me(i),s.c(),y(s,1),s.m(e.parentNode,e)):s&&(ne(),P(s,1,1,()=>{s=null}),se())},i(i){n||(y(s),n=!0)},o(i){P(s),n=!1},d(i){i&&q(e),s&&s.d(i)}}}function Me(t){let e,n,s,i,o,u,p,c=L[t[0]].flashcards.length+"",a,l,f,r,d,m;n=new Be({props:{label:"Select Topic",items:L.map(t[1])}});let k=N(L),g=[];for(let h=0;h<k.length;h+=1)g[h]=pe(he(t,k,h));const be=h=>P(g[h],1,1,()=>{g[h]=null});return d=new Re({props:{label:"Scroll to Top",onClick:Ue}}),{c(){e=v("div"),Q(n.$$.fragment),s=A(),i=v("div"),o=A(),u=v("div"),p=$("Number of Flashcards: "),a=$(c),l=A();for(let h=0;h<g.length;h+=1)g[h].c();f=A(),r=v("div"),Q(d.$$.fragment),K(i,"margin-right","20px"),T(e,"class","control-box svelte-1lj0z4k")},m(h,b){W(h,e,b),F(n,e,null),w(e,s),w(e,i),w(e,o),w(e,u),w(u,p),w(u,a),W(h,l,b);for(let E=0;E<g.length;E+=1)g[E]&&g[E].m(h,b);W(h,f,b),W(h,r,b),F(d,r,null),m=!0},p(h,[b]){const E={};if(b&1&&(E.items=L.map(h[1])),n.$set(E),(!m||b&1)&&c!==(c=L[h[0]].flashcards.length+"")&&S(a,c),b&1){k=N(L);let _;for(_=0;_<k.length;_+=1){const ie=he(h,k,_);g[_]?(g[_].p(ie,b),y(g[_],1)):(g[_]=pe(ie),g[_].c(),y(g[_],1),g[_].m(f.parentNode,f))}for(ne(),_=k.length;_<g.length;_+=1)be(_);se()}},i(h){if(!m){y(n.$$.fragment,h);for(let b=0;b<k.length;b+=1)y(g[b]);y(d.$$.fragment,h),m=!0}},o(h){P(n.$$.fragment,h),g=g.filter(Boolean);for(let b=0;b<g.length;b+=1)P(g[b]);P(d.$$.fragment,h),m=!1},d(h){h&&(q(e),q(l),q(f),q(r)),J(n),ee(g,h),J(d)}}}function Ue(){window.scrollTo({top:0,behavior:"smooth"})}function Ge(t,e,n){let s=0;return[s,(o,u)=>({label:o.title,onClick:()=>{n(0,s=u)}})]}class Qe extends U{constructor(e){super(),M(this,e,Ge,Me,R,{})}}new Qe({target:document.getElementById("app")});
