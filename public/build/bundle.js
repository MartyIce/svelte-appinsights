var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function a(t){t.forEach(n)}function r(t){return"function"==typeof t}function o(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function s(n,e,a){n.$$.on_destroy.push(function(n,...e){if(null==n)return t;const a=n.subscribe(...e);return a.unsubscribe?()=>a.unsubscribe():a}(e,a))}function c(t,n,e=n){return t.set(e),n}function l(t,n){t.appendChild(n)}function i(t,n,e){t.insertBefore(n,e||null)}function u(t){t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function p(){return d(" ")}function g(t,n,e,a){return t.addEventListener(n,e,a),()=>t.removeEventListener(n,e,a)}function m(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function h(t,n){t.value=null==n?"":n}let $;function b(t){$=t}const v=[],x=[],y=[],w=[],k=Promise.resolve();let _=!1;function C(t){y.push(t)}let E=!1;const A=new Set;function j(){if(!E){E=!0;do{for(let t=0;t<v.length;t+=1){const n=v[t];b(n),S(n.$$)}for(b(null),v.length=0;x.length;)x.pop()();for(let t=0;t<y.length;t+=1){const n=y[t];A.has(n)||(A.add(n),n())}y.length=0}while(v.length);for(;w.length;)w.pop()();_=!1,E=!1,A.clear()}}function S(t){if(null!==t.fragment){t.update(),a(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(C)}}const T=new Set;let I;function L(t,n){t&&t.i&&(T.delete(t),t.i(n))}function N(t,n,e,a){if(t&&t.o){if(T.has(t))return;T.add(t),I.c.push((()=>{T.delete(t),a&&(e&&t.d(1),a())})),t.o(n)}}function O(t){t&&t.c()}function q(t,e,o){const{fragment:s,on_mount:c,on_destroy:l,after_update:i}=t.$$;s&&s.m(e,o),C((()=>{const e=c.map(n).filter(r);l?l.push(...e):a(e),t.$$.on_mount=[]})),i.forEach(C)}function R(t,n){const e=t.$$;null!==e.fragment&&(a(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function B(t,n){-1===t.$$.dirty[0]&&(v.push(t),_||(_=!0,k.then(j)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function H(n,r,o,s,c,l,i=[-1]){const f=$;b(n);const d=r.props||{},p=n.$$={fragment:null,ctx:null,props:l,update:t,not_equal:c,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:e(),dirty:i,skip_bound:!1};let g=!1;if(p.ctx=o?o(n,d,((t,e,...a)=>{const r=a.length?a[0]:e;return p.ctx&&c(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),g&&B(n,t)),e})):[],p.update(),g=!0,a(p.before_update),p.fragment=!!s&&s(p.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);p.fragment&&p.fragment.l(t),t.forEach(u)}else p.fragment&&p.fragment.c();r.intro&&L(n.$$.fragment),q(n,r.target,r.anchor),j()}b(f)}class M{$destroy(){R(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const D=[];function J(n,e=t){let a;const r=[];function s(t){if(o(n,t)&&(n=t,a)){const t=!D.length;for(let t=0;t<r.length;t+=1){const e=r[t];e[1](),D.push(e,n)}if(t){for(let t=0;t<D.length;t+=2)D[t][0](D[t+1]);D.length=0}}}return{set:s,update:function(t){s(t(n))},subscribe:function(o,c=t){const l=[o,c];return r.push(l),1===r.length&&(a=e(s)||t),o(n),()=>{const t=r.indexOf(l);-1!==t&&r.splice(t,1),0===r.length&&(a(),a=null)}}}}let K=J("requests | limit 25"),P=J(""),Q=J(""),U=J("");function z(n){let e,r,o,s,c,$,b,v,x;return{c(){e=f("div"),r=d("ApplicationId: "),o=f("input"),s=p(),c=f("div"),$=d("ApplicationSecretKey: "),b=f("input"),m(e,"class","row"),m(c,"class","row")},m(t,a){i(t,e,a),l(e,r),l(e,o),h(o,n[0]),i(t,s,a),i(t,c,a),l(c,$),l(c,b),h(b,n[1]),v||(x=[g(o,"input",n[2]),g(b,"input",n[3])],v=!0)},p(t,[n]){1&n&&o.value!==t[0]&&h(o,t[0]),2&n&&b.value!==t[1]&&h(b,t[1])},i:t,o:t,d(t){t&&u(e),t&&u(s),t&&u(c),v=!1,a(x)}}}function F(t,n,e){let a,r;return s(t,Q,(t=>e(0,a=t))),s(t,P,(t=>e(1,r=t))),[a,r,function(){a=this.value,Q.set(a)},function(){r=this.value,P.set(r)}]}class G extends M{constructor(t){super(),H(this,t,F,z,o,{})}}function V(n){let e,a,r,o,s;return{c(){e=f("div"),a=d("Query:\r\n"),r=f("textarea"),m(e,"class","row")},m(t,c){i(t,e,c),l(e,a),l(e,r),h(r,n[0]),o||(s=g(r,"input",n[1]),o=!0)},p(t,[n]){1&n&&h(r,t[0])},i:t,o:t,d(t){t&&u(e),o=!1,s()}}}function W(t,n,e){let a;return s(t,K,(t=>e(0,a=t))),[a,function(){a=this.value,K.set(a)}]}class X extends M{constructor(t){super(),H(this,t,W,V,o,{})}}var Y=class{Execute(t,n,e){const a=`https://api.applicationinsights.io/v1/apps/${t}/query?query=${encodeURI(e)}`;return console.log(t),console.log(n),console.log(e),fetch(a,{headers:{"x-api-key":n}})}};function Z(n){let e,a,r,o,s,c;return{c(){e=f("div"),a=f("button"),a.textContent="Execute",r=p(),o=f("div"),o.innerHTML='Results:\n    <canvas id="aiResults" width="200" height="200"></canvas>',m(e,"class","row"),m(o,"class","row")},m(t,u){i(t,e,u),l(e,a),i(t,r,u),i(t,o,u),s||(c=g(a,"click",n[0]),s=!0)},p:t,i:t,o:t,d(t){t&&u(e),t&&u(r),t&&u(o),s=!1,c()}}}function tt(t,n,e){let a,r,o,l;s(t,U,(t=>e(1,a=t))),s(t,Q,(t=>e(2,r=t))),s(t,P,(t=>e(3,o=t))),s(t,K,(t=>e(4,l=t)));let i=new Y;return[async function(){c(U,a="",a);let t=await i.Execute(r,o,l);var n=await t.text();!async function(t){try{var n=document.getElementById("aiResults").getContext("2d");const e=t.tables[0].rows.map((t=>({x:new Date(t[0]),y:t[7]})));e.sort(((t,n)=>t.x-n.x)),console.log(e),new Chart(n,{type:"line",data:{datasets:[{data:e}]},options:{scales:{xAxes:[{type:"time"}],yAxes:[{display:!0,scaleLabel:{display:!0,labelString:"duration"}}]}}})}catch{c(U,a="There was a problem",a)}}(JSON.parse(n))}]}class nt extends M{constructor(t){super(),H(this,t,tt,Z,o,{})}}function et(t){let n,e;return{c(){n=f("div"),e=d(t[0]),m(n,"class","alert alert-danger"),m(n,"role","alert")},m(t,a){i(t,n,a),l(n,e)},p(t,n){1&n&&function(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}(e,t[0])},d(t){t&&u(n)}}}function at(n){let e,a=n[0]&&et(n);return{c(){a&&a.c(),e=d("")},m(t,n){a&&a.m(t,n),i(t,e,n)},p(t,[n]){t[0]?a?a.p(t,n):(a=et(t),a.c(),a.m(e.parentNode,e)):a&&(a.d(1),a=null)},i:t,o:t,d(t){a&&a.d(t),t&&u(e)}}}function rt(t,n,e){let a;return s(t,U,(t=>e(0,a=t))),[a]}class ot extends M{constructor(t){super(),H(this,t,rt,at,o,{})}}function st(t){let n,e,a,r;return n=new X({}),a=new nt({}),{c(){O(n.$$.fragment),e=p(),O(a.$$.fragment)},m(t,o){q(n,t,o),i(t,e,o),q(a,t,o),r=!0},i(t){r||(L(n.$$.fragment,t),L(a.$$.fragment,t),r=!0)},o(t){N(n.$$.fragment,t),N(a.$$.fragment,t),r=!1},d(t){R(n,t),t&&u(e),R(a,t)}}}function ct(t){let n,e;return n=new G({}),{c(){O(n.$$.fragment)},m(t,a){q(n,t,a),e=!0},i(t){e||(L(n.$$.fragment,t),e=!0)},o(t){N(n.$$.fragment,t),e=!1},d(t){R(n,t)}}}function lt(t){let n,e,r,o,s,c,d,h,$,b,v,x,y,w,k,_,C,E,A,j,S,T;_=new ot({});const B=[ct,st],H=[];function M(t,n){return t[0]?0:1}return E=M(t),A=H[E]=B[E](t),{c(){n=f("main"),e=f("nav"),r=f("div"),o=f("a"),o.textContent="App Insights",s=p(),c=f("button"),c.innerHTML='<span class="navbar-toggler-icon"></span>',d=p(),h=f("div"),$=f("ul"),b=f("li"),v=f("a"),v.textContent="Home",x=p(),y=f("li"),w=f("a"),w.textContent="Settings",k=p(),O(_.$$.fragment),C=p(),A.c(),m(o,"class","navbar-brand"),m(o,"href","#"),m(c,"class","navbar-toggler"),m(c,"type","button"),m(c,"data-toggle","collapse"),m(c,"data-target","#navbarCollapse"),m(c,"aria-controls","navbarCollapse"),m(c,"aria-expanded","false"),m(c,"aria-label","Toggle navigation"),m(v,"class","nav-link"),m(v,"href","#"),m(b,"class","nav-item active"),m(b,"data-toggle","collapse"),m(b,"data-target",".navbar-collapse.show"),m(w,"class","nav-link"),m(w,"href","#"),m(y,"class","nav-item"),m(y,"data-toggle","collapse"),m(y,"data-target",".navbar-collapse.show"),m($,"class","navbar-nav mr-auto"),m(h,"class","collapse navbar-collapse"),m(h,"id","navbarCollapse"),m(r,"class","container"),m(e,"class","navbar fixed-top navbar-expand-md navbar-light bg-light"),m(n,"class","svelte-1tky8bj")},m(a,u){i(a,n,u),l(n,e),l(e,r),l(r,o),l(r,s),l(r,c),l(r,d),l(r,h),l(h,$),l($,b),l(b,v),l($,x),l($,y),l(y,w),l(n,k),q(_,n,null),l(n,C),H[E].m(n,null),j=!0,S||(T=[g(v,"click",t[1]),g(w,"click",t[2])],S=!0)},p(t,[e]){let r=E;E=M(t),E!==r&&(I={r:0,c:[],p:I},N(H[r],1,1,(()=>{H[r]=null})),I.r||a(I.c),I=I.p,A=H[E],A?A.p(t,e):(A=H[E]=B[E](t),A.c()),L(A,1),A.m(n,null))},i(t){j||(L(_.$$.fragment,t),L(A),j=!0)},o(t){N(_.$$.fragment,t),N(A),j=!1},d(t){t&&u(n),R(_),H[E].d(),S=!1,a(T)}}}function it(t,n,e){let a=!1;return[a,()=>e(0,a=!1),()=>e(0,a=!0)]}return new class extends M{constructor(t){var n;super(),document.getElementById("svelte-1tky8bj-style")||((n=f("style")).id="svelte-1tky8bj-style",n.textContent="main.svelte-1tky8bj{text-align:center;padding:1em;max-width:240px;margin:0 auto}@media(min-width: 640px){main.svelte-1tky8bj{max-width:none}}",l(document.head,n)),H(this,t,it,lt,o,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
