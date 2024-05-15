var _e=Object.defineProperty;var ve=(t,e,n)=>e in t?_e(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var z=(t,e,n)=>(ve(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function E(){}function ge(t){return t()}function ie(){return Object.create(null)}function j(t){t.forEach(ge)}function Z(t){return typeof t=="function"}function B(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ye(t){return Object.keys(t).length===0}function b(t,e){t.appendChild(e)}function k(t,e,n){t.insertBefore(e,n||null)}function q(t){t.parentNode&&t.parentNode.removeChild(t)}function ee(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function v(t){return document.createElement(t)}function T(t){return document.createTextNode(t)}function O(){return T(" ")}function qe(){return T("")}function F(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function $(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $e(t){return Array.from(t.childNodes)}function A(t,e){e=""+e,t.data!==e&&(t.data=e)}function V(t,e,n,s){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,"")}let te;function x(t){te=t}const L=[],oe=[];let D=[];const le=[],ke=Promise.resolve();let X=!1;function Te(){X||(X=!0,ke.then(be))}function Y(t){D.push(t)}const K=new Set;let H=0;function be(){if(H!==0)return;const t=te;do{try{for(;H<L.length;){const e=L[H];H++,x(e),Pe(e.$$)}}catch(e){throw L.length=0,H=0,e}for(x(null),L.length=0,H=0;oe.length;)oe.pop()();for(let e=0;e<D.length;e+=1){const n=D[e];K.has(n)||(K.add(n),n())}D.length=0}while(L.length);for(;le.length;)le.pop()();X=!1,K.clear(),x(t)}function Pe(t){if(t.fragment!==null){t.update(),j(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Y)}}function We(t){const e=[],n=[];D.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),D=e}const G=new Set;let C;function ne(){C={r:0,c:[],p:C}}function se(){C.r||j(C.c),C=C.p}function y(t,e){t&&t.i&&(G.delete(t),t.i(e))}function W(t,e,n,s){if(t&&t.o){if(G.has(t))return;G.add(t),C.c.push(()=>{G.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function N(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function Q(t){t&&t.c()}function J(t,e,n){const{fragment:s,after_update:r}=t.$$;s&&s.m(e,n),Y(()=>{const i=t.$$.on_mount.map(ge).filter(Z);t.$$.on_destroy?t.$$.on_destroy.push(...i):j(i),t.$$.on_mount=[]}),r.forEach(Y)}function M(t,e){const n=t.$$;n.fragment!==null&&(We(n.after_update),j(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Oe(t,e){t.$$.dirty[0]===-1&&(L.push(t),Te(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function U(t,e,n,s,r,i,u=null,p=[-1]){const c=te;x(t);const l=t.$$={fragment:null,ctx:[],props:i,update:E,not_equal:r,bound:ie(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:ie(),dirty:p,skip_bound:!1,root:e.target||c.$$.root};u&&u(l.root);let a=!1;if(l.ctx=n?n(t,e.props||{},(f,o,...d)=>{const m=d.length?d[0]:o;return l.ctx&&r(l.ctx[f],l.ctx[f]=m)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](m),a&&Oe(t,f)),o}):[],l.update(),a=!0,j(l.before_update),l.fragment=s?s(l.ctx):!1,e.target){if(e.hydrate){const f=$e(e.target);l.fragment&&l.fragment.l(f),f.forEach(q)}else l.fragment&&l.fragment.c();e.intro&&y(t.$$.fragment),J(t,e.target,e.anchor),be()}x(c)}class R{constructor(){z(this,"$$");z(this,"$$set")}$destroy(){M(this,1),this.$destroy=E}$on(e,n){if(!Z(n))return E;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(e){this.$$set&&!ye(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ee="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ee);const I=[{title:"Java/OOP",subtitle:"Object-Oriented Programming in Java",flashcards:[{question:"What is Encapsulation in Java?",answer:"Encapsulation restricts access to the inner workings of that class using access modifiers."},{question:"What is Inheritance in Java?",answer:"Inheritance is a concept where one class (the subclass or derived class) inherits the fields and methods of another class (the superclass or base class)."},{question:"What is Polymorphism in Java?",answer:"Polymorphism allows methods to perform differently based on the object they are called on."},{question:"What is Abstraction in Java?",answer:"Abstraction hides implementation details and shows only essential features of an object to the outside world."},{question:"How do we achieve abstraction in Java?",answer:"Abstract classes and interfaces"},{question:"What is the difference between public, private, and protected?",answer:`- Public: Accessible from anywhere.
- Private: Accessible only within the same class.
- Protected: Accessible within the same package and by subclasses.`},{question:"What is Overriding in Java?",answer:"Overriding is when a subclass provides a specific implementation for a method already defined in its superclass."},{question:"What is Overloading in Java?",answer:"Overloading is when multiple methods in the same class have the same name but different parameter lists."},{question:"What is the difference between Abstract Class and Interface?",answer:"Abstract classes allow for a mix of abstract and concrete methods, while interfaces only have abstract methods that classes must implement."},{question:"What is garbage collection?",answer:"An automated process to clean up unused memory."}]},{title:"Data Structure",subtitle:"",flashcards:[{question:"What is Array?",answer:"Collection of elements stored in contiguous memory locations."},{question:"What is Linked List?",answer:"Collection of elements where each element points to the next one."},{question:"What is Stack?",answer:"A data structure that follows the Last In, First Out (LIFO) principle."},{question:"What are Stack operations?",answer:`- Push (adds an element to the top of the stack)
- Pop (removes the top element from the stack)`},{question:"What is Queue?",answer:"Data structure that follows the First In, First Out (FIFO) principle"},{question:"What are Queue operations?",answer:`- Enqueue (adding an element to the rear)
- Dequeue (removes the element from the front)`},{question:"What is Tree?",answer:"Data structure consisting of nodes connected by edges. It has a root node, parent nodes, and child node."},{question:"What is Graph?",answer:"A non-linear data structure consisting of nodes connected by edges."},{question:"What is the relationship between Tree and Graph?",answer:"A tree is a specific type of graph characterized by its hierarchical structure without cycles, where each node has a unique parent except for the root node."},{question:"What is Hash Table?",answer:"Data structure that stores key-value pairs, allowing for efficient insertion, deletion, and lookup operations based on a unique hash function."},{question:"What is Collision in Hash Table?",answer:"Where two or more keys generate the same hash value."},{question:"What is Collision Resolution in Hash Table?",answer:"Strategies to manage collisions."},{question:"What are strategies to resolve collision in Hash Table?",answer:"Chaining or open addressing."},{question:"What is Map?",answer:"Data structure that stores unique key-value pairs."},{question:"What is the relationship between Map and Hash Table?",answer:"Hash Table is commonly used to implement Map."}]},{title:"CSS/HTML",subtitle:"",flashcards:[{question:"List common HTTP methods.",answer:"GET, POST, PUT, DELETE, PATCH"},{question:"Describe GET",answer:"Retrieves data from the server. Use for read-only operations."},{question:"Describe POST",answer:"Sends data to the server to create a new resource."},{question:"Describe PUT",answer:"Updates an existing resource with the provided data. It should be idempotent."},{question:"DELETE",answer:"Deletes a resource from the server."},{question:"PATCH",answer:"Updates a resource partially. It should be idempotent."},{question:"What do HTTP status codes provide?",answer:"Provide information about the result of a request."},{question:"What does HTTP status code 2xx represent?",answer:"Success (e.g., 200 OK, 201 Created)"},{question:"What does HTTP status code 3xx represent?",answer:"Redirection (e.g., 301 Moved Permanently, 304 Not Modified)"},{question:"What does HTTP status code 4xx represent?",answer:"Client Error (e.g., 400 Bad Request, 404 Not Found)"},{question:"What does HTTP status code 5xx represent?",answer:"Server Error (e.g., 500 Internal Server Error, 503 Service Unavailable)"}]}];function Ae(t){let e;return{c(){e=T(t[0])},m(n,s){k(n,e,s)},p(n,s){s&1&&A(e,n[0])},d(n){n&&q(e)}}}function Se(t){let e;return{c(){e=T(t[1])},m(n,s){k(n,e,s)},p(n,s){s&2&&A(e,n[1])},d(n){n&&q(e)}}}function Ce(t){let e,n,s=t[3]?"Answer":`Question ${t[2]+1}`,r,i,u,p,c;function l(o,d){return o[3]?Se:Ae}let a=l(t),f=a(t);return{c(){e=v("div"),n=v("div"),r=T(s),i=O(),u=v("div"),f.c(),$(n,"class","question-answer svelte-1c9grjx"),$(u,"class","question-answer-content svelte-1c9grjx"),$(e,"class","flashcard svelte-1c9grjx"),$(e,"role","button"),$(e,"tabindex","0")},m(o,d){k(o,e,d),b(e,n),b(n,r),b(e,i),b(e,u),f.m(u,null),p||(c=[F(e,"click",t[4]),F(e,"keypress",t[4])],p=!0)},p(o,[d]){d&12&&s!==(s=o[3]?"Answer":`Question ${o[2]+1}`)&&A(r,s),a===(a=l(o))&&f?f.p(o,d):(f.d(1),f=a(o),f&&(f.c(),f.m(u,null)))},i:E,o:E,d(o){o&&q(e),f.d(),p=!1,j(c)}}}function He(t,e,n){let{question:s}=e,{answer:r}=e,{index:i}=e,u=!1;function p(){u&&n(3,u=!1)}function c(){n(3,u=!u)}return t.$$set=l=>{"question"in l&&n(0,s=l.question),"answer"in l&&n(1,r=l.answer),"index"in l&&n(2,i=l.index)},[s,r,i,u,c,p]}class Ie extends R{constructor(e){super(),U(this,e,He,Ce,B,{question:0,answer:1,index:2,resetState:5})}get resetState(){return this.$$.ctx[5]}}function ae(t,e,n){const s=t.slice();return s[1]=e[n].question,s[2]=e[n].answer,s[4]=n,s}function ce(t){let e,n=t[0].subtitle+"",s;return{c(){e=v("p"),s=T(n),$(e,"class","subtitle svelte-ms8g2g")},m(r,i){k(r,e,i),b(e,s)},p(r,i){i&1&&n!==(n=r[0].subtitle+"")&&A(s,n)},d(r){r&&q(e)}}}function ue(t){let e,n;return e=new Ie({props:{question:t[1],answer:t[2],index:t[4]}}),{c(){Q(e.$$.fragment)},m(s,r){J(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.question=s[1]),r&1&&(i.answer=s[2]),e.$set(i)},i(s){n||(y(e.$$.fragment,s),n=!0)},o(s){W(e.$$.fragment,s),n=!1},d(s){M(e,s)}}}function Le(t){let e,n,s=t[0].title+"",r,i,u,p,c=t[0].subtitle.length>0&&ce(t),l=N(t[0].flashcards),a=[];for(let o=0;o<l.length;o+=1)a[o]=ue(ae(t,l,o));const f=o=>W(a[o],1,1,()=>{a[o]=null});return{c(){e=v("div"),n=v("h1"),r=T(s),i=O(),c&&c.c(),u=O();for(let o=0;o<a.length;o+=1)a[o].c();$(n,"class","svelte-ms8g2g")},m(o,d){k(o,e,d),b(e,n),b(n,r),b(e,i),c&&c.m(e,null),b(e,u);for(let m=0;m<a.length;m+=1)a[m]&&a[m].m(e,null);p=!0},p(o,[d]){if((!p||d&1)&&s!==(s=o[0].title+"")&&A(r,s),o[0].subtitle.length>0?c?c.p(o,d):(c=ce(o),c.c(),c.m(e,u)):c&&(c.d(1),c=null),d&1){l=N(o[0].flashcards);let m;for(m=0;m<l.length;m+=1){const P=ae(o,l,m);a[m]?(a[m].p(P,d),y(a[m],1)):(a[m]=ue(P),a[m].c(),y(a[m],1),a[m].m(e,null))}for(ne(),m=l.length;m<a.length;m+=1)f(m);se()}},i(o){if(!p){for(let d=0;d<l.length;d+=1)y(a[d]);p=!0}},o(o){a=a.filter(Boolean);for(let d=0;d<a.length;d+=1)W(a[d]);p=!1},d(o){o&&q(e),c&&c.d(),ee(a,o)}}}function De(t,e,n){let{topic:s}=e;return t.$$set=r=>{"topic"in r&&n(0,s=r.topic)},[s]}class Ne extends R{constructor(e){super(),U(this,e,De,Le,B,{topic:0})}}function fe(t,e,n){const s=t.slice();return s[5]=e[n],s}function de(t){let e,n=t[5].label+"",s,r,i,u;function p(){return t[4](t[5])}return{c(){e=v("button"),s=T(n),r=O(),$(e,"class","dropdown-item svelte-1mmmvwn")},m(c,l){k(c,e,l),b(e,s),b(e,r),i||(u=F(e,"click",p),i=!0)},p(c,l){t=c,l&2&&n!==(n=t[5].label+"")&&A(s,n)},d(c){c&&q(e),i=!1,u()}}}function je(t){let e,n,s,r,i,u,p,c=N(t[1]),l=[];for(let a=0;a<c.length;a+=1)l[a]=de(fe(t,c,a));return{c(){e=v("div"),n=v("button"),s=T(t[0]),r=O(),i=v("div");for(let a=0;a<l.length;a+=1)l[a].c();$(n,"class","dropdown-button svelte-1mmmvwn"),$(i,"class","dropdown-content svelte-1mmmvwn"),V(i,"display",t[2]?"block":"none"),$(e,"class","dropdown svelte-1mmmvwn")},m(a,f){k(a,e,f),b(e,n),b(n,s),b(e,r),b(e,i);for(let o=0;o<l.length;o+=1)l[o]&&l[o].m(i,null);u||(p=F(n,"click",t[3]),u=!0)},p(a,[f]){if(f&1&&A(s,a[0]),f&6){c=N(a[1]);let o;for(o=0;o<c.length;o+=1){const d=fe(a,c,o);l[o]?l[o].p(d,f):(l[o]=de(d),l[o].c(),l[o].m(i,null))}for(;o<l.length;o+=1)l[o].d(1);l.length=c.length}f&4&&V(i,"display",a[2]?"block":"none")},i:E,o:E,d(a){a&&q(e),ee(l,a),u=!1,p()}}}function xe(t,e,n){let{label:s}=e,{items:r}=e,i=!1;function u(){n(2,i=!i)}const p=c=>{c.onClick(),n(2,i=!1)};return t.$$set=c=>{"label"in c&&n(0,s=c.label),"items"in c&&n(1,r=c.items)},[s,r,i,u,p]}class Fe extends R{constructor(e){super(),U(this,e,xe,je,B,{label:0,items:1})}}function Je(t){let e,n,s,r;return{c(){e=v("button"),n=T(t[0]),$(e,"class","svelte-1bual08")},m(i,u){k(i,e,u),b(e,n),s||(r=F(e,"click",function(){Z(t[1])&&t[1].apply(this,arguments)}),s=!0)},p(i,[u]){t=i,u&1&&A(n,t[0])},i:E,o:E,d(i){i&&q(e),s=!1,r()}}}function Me(t,e,n){let{label:s}=e,{onClick:r}=e;return t.$$set=i=>{"label"in i&&n(0,s=i.label),"onClick"in i&&n(1,r=i.onClick)},[s,r]}class Be extends R{constructor(e){super(),U(this,e,Me,Je,B,{label:0,onClick:1})}}function he(t,e,n){const s=t.slice();return s[2]=e[n],s[4]=n,s}function me(t){let e,n;return e=new Ne({props:{topic:t[2]}}),{c(){Q(e.$$.fragment)},m(s,r){J(e,s,r),n=!0},i(s){n||(y(e.$$.fragment,s),n=!0)},o(s){W(e.$$.fragment,s),n=!1},d(s){M(e,s)}}}function pe(t){let e,n,s=t[0]===t[4]&&me(t);return{c(){s&&s.c(),e=qe()},m(r,i){s&&s.m(r,i),k(r,e,i),n=!0},p(r,i){r[0]===r[4]?s?i&1&&y(s,1):(s=me(r),s.c(),y(s,1),s.m(e.parentNode,e)):s&&(ne(),W(s,1,1,()=>{s=null}),se())},i(r){n||(y(s),n=!0)},o(r){W(s),n=!1},d(r){r&&q(e),s&&s.d(r)}}}function Ue(t){let e,n,s,r,i,u,p,c=I[t[0]].flashcards.length+"",l,a,f,o,d,m;n=new Fe({props:{label:"Select Topic",items:I.map(t[1])}});let P=N(I),g=[];for(let h=0;h<P.length;h+=1)g[h]=pe(he(t,P,h));const we=h=>W(g[h],1,1,()=>{g[h]=null});return d=new Be({props:{label:"Scroll to Top",onClick:Re}}),{c(){e=v("div"),Q(n.$$.fragment),s=O(),r=v("div"),i=O(),u=v("div"),p=T("Number of Flashcards: "),l=T(c),a=O();for(let h=0;h<g.length;h+=1)g[h].c();f=O(),o=v("div"),Q(d.$$.fragment),V(r,"margin-right","20px"),$(e,"class","control-box svelte-1lj0z4k")},m(h,w){k(h,e,w),J(n,e,null),b(e,s),b(e,r),b(e,i),b(e,u),b(u,p),b(u,l),k(h,a,w);for(let S=0;S<g.length;S+=1)g[S]&&g[S].m(h,w);k(h,f,w),k(h,o,w),J(d,o,null),m=!0},p(h,[w]){const S={};if(w&1&&(S.items=I.map(h[1])),n.$set(S),(!m||w&1)&&c!==(c=I[h[0]].flashcards.length+"")&&A(l,c),w&1){P=N(I);let _;for(_=0;_<P.length;_+=1){const re=he(h,P,_);g[_]?(g[_].p(re,w),y(g[_],1)):(g[_]=pe(re),g[_].c(),y(g[_],1),g[_].m(f.parentNode,f))}for(ne(),_=P.length;_<g.length;_+=1)we(_);se()}},i(h){if(!m){y(n.$$.fragment,h);for(let w=0;w<P.length;w+=1)y(g[w]);y(d.$$.fragment,h),m=!0}},o(h){W(n.$$.fragment,h),g=g.filter(Boolean);for(let w=0;w<g.length;w+=1)W(g[w]);W(d.$$.fragment,h),m=!1},d(h){h&&(q(e),q(a),q(f),q(o)),M(n),ee(g,h),M(d)}}}function Re(){window.scrollTo({top:0,behavior:"smooth"})}function Ge(t,e,n){let s=0;return[s,(i,u)=>({label:i.title,onClick:()=>{n(0,s=u)}})]}class Qe extends R{constructor(e){super(),U(this,e,Ge,Ue,B,{})}}new Qe({target:document.getElementById("app")});
