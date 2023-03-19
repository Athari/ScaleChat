(()=>{"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function s(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t){return 0===Object.keys(t).length}function i(e){return e&&s(e.destroy)?e.destroy:t}new Set;let c,r=!1;function u(t,e){t.appendChild(e)}function d(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode&&t.parentNode.removeChild(t)}function p(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function g(){return m(" ")}function $(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function y(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function b(t,e){t.value=null==e?"":e}function v(t){c=t}new Map;const x=[],w=[];let k=[];const _=[],E=Promise.resolve();let S=!1;function T(t){k.push(t)}const M=new Set;let L=0;function C(){if(0!==L)return;const t=c;do{try{for(;L<x.length;){const t=x[L];L++,v(t),O(t.$$)}}catch(t){throw x.length=0,L=0,t}for(v(null),x.length=0,L=0;w.length;)w.pop()();for(let t=0;t<k.length;t+=1){const e=k[t];M.has(e)||(M.add(e),e())}k.length=0}while(x.length);for(;_.length;)_.pop()();S=!1,M.clear(),v(t)}function O(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}const H=new Set;const j="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;let A;function N(t,e){const n=t.$$;null!==n.fragment&&(function(t){const e=[],n=[];k.forEach((o=>-1===t.indexOf(o)?e.push(o):n.push(o))),n.forEach((t=>t())),k=e}(n.after_update),o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function q(a,l,i,u,d,p,h,m=[-1]){const g=c;v(a);const $=a.$$={fragment:null,ctx:[],props:p,update:t,not_equal:d,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l.context||(g?g.$$.context:[])),callbacks:n(),dirty:m,skip_bound:!1,root:l.target||g.$$.root};h&&h($.root);let y=!1;if($.ctx=i?i(a,l.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return $.ctx&&d($.ctx[t],$.ctx[t]=o)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](o),y&&function(t,e){-1===t.$$.dirty[0]&&(x.push(t),S||(S=!0,E.then(C)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(a,t)),e})):[],$.update(),y=!0,o($.before_update),$.fragment=!!u&&u($.ctx),l.target){if(l.hydrate){r=!0;const t=(k=l.target,Array.from(k.childNodes));$.fragment&&$.fragment.l(t),t.forEach(f)}else $.fragment&&$.fragment.c();l.intro&&((b=a.$$.fragment)&&b.i&&(H.delete(b),b.i(w))),function(t,n,a,l){const{fragment:i,after_update:c}=t.$$;i&&i.m(n,a),l||T((()=>{const n=t.$$.on_mount.map(e).filter(s);t.$$.on_destroy?t.$$.on_destroy.push(...n):o(n),t.$$.on_mount=[]})),c.forEach(T)}(a,l.target,l.anchor,l.customElement),r=!1,C()}var b,w,k;v(g)}new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]),"function"==typeof HTMLElement&&(A=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(e).filter(s);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){o(this.$$.on_disconnect)}$destroy(){N(this,1),this.$destroy=t}$on(e,n){if(!s(n))return t;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const t=o.indexOf(n);-1!==t&&o.splice(t,1)}}$set(t){this.$$set&&!l(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});class F{$destroy(){N(this,1),this.$destroy=t}$on(e,n){if(!s(n))return t;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const t=o.indexOf(n);-1!==t&&o.splice(t,1)}}$set(t){this.$$set&&!l(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const{document:R}=j;function P(t,e,n){const o=t.slice();return o[34]=e[n],o[35]=e,o[36]=n,o}function D(t,e,n){const o=t.slice();return o[37]=e[n],o[38]=e,o[39]=n,o}function I(t){let e,n,s,a,l,i,c,r,p,m,v,x,w,k,_;function E(){t[17].call(l,t[38],t[39])}function S(){t[18].call(c,t[38],t[39])}function T(){t[19].call(p,t[38],t[39])}function M(...e){return t[20](t[39],...e)}return w=function(t){let e;return{p(...n){e=n,e.forEach((e=>t.push(e)))},r(){e.forEach((e=>t.splice(t.indexOf(e),1)))}}}(t[16][0]),{c(){e=h("div"),n=h("input"),a=g(),l=h("input"),i=g(),c=h("input"),r=g(),p=h("input"),m=g(),v=h("button"),v.innerHTML='<i class="fa fa-trash-o s-a"></i>',x=g(),y(n,"type","radio"),y(n,"name","selectedEndpoint"),n.__value=s=t[39],n.value=n.__value,y(n,"title","Set endpoint as current"),y(l,"type","text"),y(l,"placeholder","Display name"),y(l,"class","s-a"),y(c,"type","text"),y(c,"placeholder","API Key"),y(c,"class","s-a"),y(p,"type","text"),y(p,"placeholder","Endpoint URL"),y(p,"class","s-a"),y(v,"title","Delete endpoint"),y(v,"class","s-a"),y(e,"class","endpoint s-a"),w.p(n)},m(o,s){d(o,e,s),u(e,n),n.checked=n.__value===t[2],u(e,a),u(e,l),b(l,t[37].name),u(e,i),u(e,c),b(c,t[37].key),u(e,r),u(e,p),b(p,t[37].url),u(e,m),u(e,v),u(e,x),k||(_=[$(n,"change",t[15]),$(l,"input",E),$(c,"input",S),$(p,"input",T),$(v,"click",M)],k=!0)},p(e,o){t=e,5&o[0]&&(n.checked=n.__value===t[2]),1&o[0]&&l.value!==t[37].name&&b(l,t[37].name),1&o[0]&&c.value!==t[37].key&&b(c,t[37].key),1&o[0]&&p.value!==t[37].url&&b(p,t[37].url)},d(t){t&&f(e),w.r(),k=!1,o(_)}}}function J(t){let e,n,s,a,l,c,r,p,m,v,x,w,k,_,E;function S(){t[21].call(n,t[35],t[36])}function T(...e){return t[22](t[36],...e)}function M(...e){return t[23](t[36],...e)}function L(...e){return t[24](t[36],...e)}return{c(){e=h("div"),n=h("textarea"),a=g(),l=h("button"),l.innerHTML='<i class="fa fa-arrow-up s-a"></i>',r=g(),p=h("button"),m=h("i"),x=g(),w=h("button"),w.innerHTML='<i class="fa fa-trash-o s-a"></i>',k=g(),y(n,"autocomplete","false"),y(n,"class","s-a"),l.disabled=c=t[36]<=0,y(l,"title","Move message up"),y(l,"class","s-a"),y(m,"class","fa fa-arrow-down s-a"),p.disabled=v=t[36]>=t[1].length-1,y(p,"title","Move message down"),y(p,"class","s-a"),y(w,"title","Delete message"),y(w,"class","s-a"),y(e,"class","message s-a")},m(o,c){d(o,e,c),u(e,n),b(n,t[34].text),u(e,a),u(e,l),u(e,r),u(e,p),u(p,m),u(e,x),u(e,w),u(e,k),_||(E=[$(n,"input",S),i(s=K.call(null,n)),$(l,"click",T),$(p,"click",M),$(w,"click",L)],_=!0)},p(e,o){t=e,2&o[0]&&b(n,t[34].text),2&o[0]&&v!==(v=t[36]>=t[1].length-1)&&(p.disabled=v)},d(t){t&&f(e),_=!1,o(E)}}}function W(e){let n,s,a,l,c,r,v,x,w,k,_,E,S,T,M,L,C,O,H,j,A,N,q,F,W,z,B,U,Y,G,Q,V,X,Z,tt=e[0],et=[];for(let t=0;t<tt.length;t+=1)et[t]=I(D(e,tt,t));let nt=e[1],ot=[];for(let t=0;t<nt.length;t+=1)ot[t]=J(P(e,nt,t));return{c(){n=h("link"),s=g(),a=h("div"),l=h("details"),c=h("summary"),c.textContent="Options",r=g(),v=h("div"),x=h("h3"),w=m("Scale Endpoints "),k=h("button"),k.innerHTML='<i class="fa fa-plus s-a"></i>',_=g();for(let t=0;t<et.length;t+=1)et[t].c();E=g(),S=h("div");for(let t=0;t<ot.length;t+=1)ot[t].c();T=g(),M=h("div"),L=h("textarea"),O=g(),H=h("button"),j=h("i"),A=g(),N=h("button"),q=h("i"),W=g(),z=h("button"),B=h("i"),U=g(),Y=h("button"),Y.innerHTML='<i class="fa fa-clipboard fa-lg s-a"></i>',G=g(),Q=h("p"),V=m(e[5]),y(n,"rel","stylesheet"),y(n,"href","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"),y(c,"class","s-a"),y(k,"title","Add endpoint"),y(k,"class","s-a"),y(x,"class","s-a"),y(v,"class","endpoints s-a"),l.open=!0,y(l,"class","s-a"),y(S,"class","messages s-a"),L.disabled=e[4],y(L,"autocomplete","false"),y(L,"class","s-a"),y(j,"class","fa fa-paper-plane s-a"),H.disabled=e[4],y(H,"title","Send message"),y(H,"class","s-a"),y(q,"class","fa fa-ban s-a"),N.disabled=F=!e[4],y(N,"title","Cancel sending"),y(N,"class","s-a"),y(B,"class","fa fa-plus s-a"),z.disabled=e[4],y(z,"title","Add message without sending"),y(z,"class","s-a"),y(Y,"title","Copy messages to clipboard"),y(Y,"class","s-a"),y(M,"class","message new-message s-a"),y(Q,"class","status s-a"),y(a,"class","app s-a")},m(t,o){u(R.head,n),d(t,s,o),d(t,a,o),u(a,l),u(l,c),u(l,r),u(l,v),u(v,x),u(x,w),u(x,k),u(v,_);for(let t=0;t<et.length;t+=1)et[t]&&et[t].m(v,null);u(a,E),u(a,S);for(let t=0;t<ot.length;t+=1)ot[t]&&ot[t].m(S,null);u(a,T),u(a,M),u(M,L),b(L,e[3]),u(M,O),u(M,H),u(H,j),u(M,A),u(M,N),u(N,q),u(M,W),u(M,z),u(z,B),u(M,U),u(M,Y),u(a,G),u(a,Q),u(Q,V),X||(Z=[$(k,"click",e[12]),$(L,"input",e[25]),i(C=K.call(null,L)),$(H,"click",e[26]),$(N,"click",e[7]),$(z,"click",e[27]),$(Y,"click",e[11])],X=!0)},p(t,e){if(8197&e[0]){let n;for(tt=t[0],n=0;n<tt.length;n+=1){const o=D(t,tt,n);et[n]?et[n].p(o,e):(et[n]=I(o),et[n].c(),et[n].m(v,null))}for(;n<et.length;n+=1)et[n].d(1);et.length=tt.length}if(1538&e[0]){let n;for(nt=t[1],n=0;n<nt.length;n+=1){const o=P(t,nt,n);ot[n]?ot[n].p(o,e):(ot[n]=J(o),ot[n].c(),ot[n].m(S,null))}for(;n<ot.length;n+=1)ot[n].d(1);ot.length=nt.length}var n,o;16&e[0]&&(L.disabled=t[4]),8&e[0]&&b(L,t[3]),16&e[0]&&(H.disabled=t[4]),16&e[0]&&F!==(F=!t[4])&&(N.disabled=F),16&e[0]&&(z.disabled=t[4]),32&e[0]&&(n=V,o=""+(o=t[5]),n.wholeText!==o&&(n.data=o))},i:t,o:t,d(t){f(n),t&&f(s),t&&f(a),p(et,t),p(ot,t),X=!1,o(Z)}}}let z=20;function B({target:t}){setTimeout((()=>{t.style.height="0",t.style.height=`${Math.max(t.scrollHeight,z)}px`}),100)}function K(t){return B({target:t}),t.addEventListener("input",B),{destroy:()=>t.removeEventListener("input",B)}}function U(t,e,n){let o,s=[],a=0,l=[],i="",r=!1,u="Welcome!",d=null,f=!1;var p;function h(t,...e){console.log(t,...e),n(5,u=t)}function m(t,e){try{return JSON.parse(localStorage.getItem(t))}catch(n){return h(`Warning: Failed to load ${t} from localStorage: ${n.message}`,n),e}}function g(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch(e){h(`Warning: Failed to save ${t} to localStorage: ${e.message}`,e)}}function $(){return(Math.max(...l.map((t=>t.id)))??0)+1}async function y(t){n(4,r=!0),o=performance.now();try{const e=s[a];if(null==e)throw new Error("No endpoint selected");d=new AbortController;const i=await fetch(e.url,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Basic "+e.key},body:JSON.stringify({input:{input:l.map((t=>t.text)).join("\n")}}),signal:d.signal}),c=`${(performance.now()-o).toFixed(2)} ms`;if(!i.ok)throw new Error(`${i.status} ${i.statusText}`);{const e=await i.json();if(null!=e.error)h(`Received error in ${c}: ${e.error.code}: ${e.error.message}`);else if(null!=e.output){const o=$();b({target:t.target}),n(1,l=[...l,{id:o+1,text:e.output}]),h(`Received message in ${c}`,e)}}}catch(t){h(`Error: ${t.message}`,t)}n(4,r=!1)}function b(t){""!=i&&(n(1,l=[...l,{id:$(),text:i}]),n(3,i=""),B({target:t.target.closest(".message").querySelector("textarea")}))}function v(t){n(1,l=l.filter(((e,n)=>n!==t)))}function x(t,e){void 0!==l[t]&&void 0!==l[e]&&(n(1,[l[t],l[e]]=[l[e],l[t]],l),n(1,l=[...l]))}function w(t){n(0,s=s.filter(((e,n)=>n!==t))),void 0===s[a]&&n(2,a=null)}return p=()=>{n(14,f=!0),"about:"==location.protocol&&(document.querySelector("head style").innerHTML=""),n(1,l=m("messages",[{id:1,text:"Hello"},{id:2,text:"This is a svelte app"},{id:3,text:"You can edit and delete messages"}])),n(0,s=m("endpoints",[{name:"Pretty name",key:"KEY",url:"https://dashboard.scale.com/spellbook/api/v2/deploy/URL"}]))},function(){if(!c)throw new Error("Function called outside component initialization");return c}().$$.on_mount.push(p),t.$$.update=()=>{16387&t.$$.dirty[0]&&f&&(g("messages",l),g("endpoints",s))},[s,l,a,i,r,u,y,function(){null!=d&&(n(4,r=!1),info="Receiving message cancelled",d.abort())},b,v,x,async function(){try{await navigator.clipboard.writeText(l.map((t=>t.text)).join("\n")),h("Messages copied to clipboard")}catch(t){h(`Failed to copy messages to clipboard: ${t.message}`,t)}},function(t){n(0,s=[...s,{key:"",url:""}])},w,f,function(){a=this.__value,n(2,a)},[[]],function(t,e){t[e].name=this.value,n(0,s)},function(t,e){t[e].key=this.value,n(0,s)},function(t,e){t[e].url=this.value,n(0,s)},(t,e)=>w(t),function(t,e){t[e].text=this.value,n(1,l)},(t,e)=>x(t,t-1),(t,e)=>x(t,t+1),(t,e)=>v(t),function(){i=this.value,n(3,i)},t=>y(t),t=>b(t)]}new class extends F{constructor(t){super(),q(this,t,U,W,a,{},null,[-1,-1])}}({target:document.querySelector("#root")})})();