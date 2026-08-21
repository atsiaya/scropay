module.exports=[420540,a=>{"use strict";var b=a.i(120289),c=a.i(286682),d=a.i(918428),e=a.i(606191),f=a.i(412631);let g=(0,b.proxy)({message:"",variant:"info",open:!1}),h=(0,e.withErrorBoundary)({state:g,subscribeKey:(a,b)=>(0,c.subscribeKey)(g,a,b),open(a,b){let{debug:c}=f.OptionsController.state,{code:e,displayMessage:h,debugMessage:i}=a;if(h&&c&&(g.message=h,g.variant=b,g.open=!0),i){if(!d.ConstantsUtil.IS_DEVELOPMENT)return;let a="function"==typeof i?i():i,c=e?{code:e}:void 0;"error"===b?console.error(a,c):"warning"===b?console.warn(a,c):console.info(a,c)}},warn(a,b,c){g.open=!0,g.message=a,g.variant="warning",b&&console.warn(b,c)},close(){g.open=!1,g.message="",g.variant="info"}});a.s(["AlertController",0,h])},219756,a=>{"use strict";a.i(176996);var b=a.i(44886),c=a.i(979837);a.i(525181);var d=a.i(129349),e=a.i(526551),f=a.i(192361);let g=f.css`
  :host {
    display: block;
    background: linear-gradient(
      90deg,
      ${({tokens:a})=>a.theme.foregroundPrimary} 0%,
      ${({tokens:a})=>a.theme.foregroundSecondary} 50%,
      ${({tokens:a})=>a.theme.foregroundPrimary} 100%
    );
    background-size: 200% 100%;
    animation: shimmer 2s linear infinite;
    border-radius: ${({borderRadius:a})=>a[1]};
  }

  :host([data-rounded='true']) {
    border-radius: ${({borderRadius:a})=>a[16]};
  }

  @keyframes shimmer {
    0% {
      background-position: 100% 0;
    }
    100% {
      background-position: -100% 0;
    }
  }
`;var h=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let i=class extends b.LitElement{constructor(){super(...arguments),this.width="",this.height="",this.variant="default",this.rounded=!1}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
    `,this.dataset.rounded=this.rounded?"true":"false",c.html`<slot></slot>`}};i.styles=[g],h([(0,d.property)()],i.prototype,"width",void 0),h([(0,d.property)()],i.prototype,"height",void 0),h([(0,d.property)()],i.prototype,"variant",void 0),h([(0,d.property)({type:Boolean})],i.prototype,"rounded",void 0),i=h([(0,e.customElement)("wui-shimmer")],i),a.s([],219756)},610594,a=>{"use strict";a.i(219756),a.s([])},575265,a=>{"use strict";a.s(["MathUtil",0,{interpolate(a,b,c){if(2!==a.length||2!==b.length)throw Error("inputRange and outputRange must be an array of length 2");let d=a[0]||0,e=a[1]||0,f=b[0]||0,g=b[1]||0;return c<d?f:c>e?g:(g-f)/(e-d)*(c-d)+f}}])},904625,670905,a=>{"use strict";a.i(176996);var b=a.i(44886),c=a.i(979837);a.i(525181);var d=a.i(129349),e=a.i(905653),f=a.i(950802),g=a.i(682762),h=a.i(120289),i=a.i(286682),j=a.i(606191);let k=(0,h.proxy)({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"}),l=(0,j.withErrorBoundary)({state:k,subscribe:a=>(0,h.subscribe)(k,()=>a(k)),subscribeKey:(a,b)=>(0,i.subscribeKey)(k,a,b),showTooltip({message:a,triggerRect:b,variant:c}){k.open=!0,k.message=a,k.triggerRect=b,k.variant=c},hide(){k.open=!1,k.message="",k.triggerRect={width:0,height:0,top:0,left:0}}});a.i(564205);var m=a.i(526551),n=a.i(77439);let o=n.css`
  :host {
    width: 100%;
    display: block;
  }
`;var p=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let q=class extends b.LitElement{constructor(){super(),this.unsubscribe=[],this.text="",this.open=l.state.open,this.unsubscribe.push(g.RouterController.subscribeKey("view",()=>{l.hide()}),f.ModalController.subscribeKey("open",a=>{a||l.hide()}),l.subscribeKey("open",a=>{this.open=a}))}disconnectedCallback(){this.unsubscribe.forEach(a=>a()),l.hide()}render(){return c.html`
      <div
        @pointermove=${this.onMouseEnter.bind(this)}
        @pointerleave=${this.onMouseLeave.bind(this)}
      >
        ${this.renderChildren()}
      </div>
    `}renderChildren(){return c.html`<slot></slot> `}onMouseEnter(){let a=this.getBoundingClientRect();if(!this.open){let b=document.querySelector("w3m-modal"),c={width:a.width,height:a.height,left:a.left,top:a.top};if(b){let d=b.getBoundingClientRect();c.left=a.left-(window.innerWidth-d.width)/2,c.top=a.top-(window.innerHeight-d.height)/2}l.showTooltip({message:this.text,triggerRect:c,variant:"shade"})}}onMouseLeave(a){this.contains(a.relatedTarget)||l.hide()}};q.styles=[o],p([(0,d.property)()],q.prototype,"text",void 0),p([(0,e.state)()],q.prototype,"open",void 0),q=p([(0,m.customElement)("w3m-tooltip-trigger")],q),a.s([],904625);var r=b;a.i(735803),a.i(644344),a.i(603511);var s=a.i(192361);let t=s.css`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px ${({spacing:a})=>a["3"]} 10px ${({spacing:a})=>a["3"]};
    border-radius: ${({borderRadius:a})=>a["3"]};
    color: ${({tokens:a})=>a.theme.backgroundPrimary};
    position: absolute;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--apkt-modal-width) - ${({spacing:a})=>a["5"]});
    transition: opacity ${({durations:a})=>a.lg}
      ${({easings:a})=>a["ease-out-power-2"]};
    will-change: opacity;
    opacity: 0;
    animation-duration: ${({durations:a})=>a.xl};
    animation-timing-function: ${({easings:a})=>a["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: ${({tokens:a})=>a.theme.textSecondary};
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: ${({tokens:a})=>a.theme.backgroundPrimary};
    border: 1px solid ${({tokens:a})=>a.theme.borderPrimary};
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: ${({tokens:a})=>a.theme.foregroundPrimary};
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;var u=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let v=class extends r.LitElement{constructor(){super(),this.unsubscribe=[],this.open=l.state.open,this.message=l.state.message,this.triggerRect=l.state.triggerRect,this.variant=l.state.variant,this.unsubscribe.push(l.subscribe(a=>{this.open=a.open,this.message=a.message,this.triggerRect=a.triggerRect,this.variant=a.variant}))}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}render(){this.dataset.variant=this.variant;let a=this.triggerRect.top,b=this.triggerRect.left;return this.style.cssText=`
    --w3m-tooltip-top: ${a}px;
    --w3m-tooltip-left: ${b}px;
    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;
    --w3m-tooltip-display: ${this.open?"flex":"none"};
    --w3m-tooltip-opacity: ${+!!this.open};
    `,c.html`<wui-flex>
      <wui-icon data-placement="top" size="inherit" name="cursor"></wui-icon>
      <wui-text color="primary" variant="sm-regular">${this.message}</wui-text>
    </wui-flex>`}};v.styles=[t],u([(0,e.state)()],v.prototype,"open",void 0),u([(0,e.state)()],v.prototype,"message",void 0),u([(0,e.state)()],v.prototype,"triggerRect",void 0),u([(0,e.state)()],v.prototype,"variant",void 0),v=u([(0,m.customElement)("w3m-tooltip")],v),a.s([],670905)},915338,a=>{"use strict";var b={exports:{}};function c(a){try{return JSON.stringify(a)}catch{return'"[Circular]"'}}let d=function(a,b,d){var e=d&&d.stringify||c;if("object"==typeof a&&null!==a){var f=b.length+1;if(1===f)return a;var g=Array(f);g[0]=e(a);for(var h=1;h<f;h++)g[h]=e(b[h]);return g.join(" ")}if("string"!=typeof a)return a;var i=b.length;if(0===i)return a;for(var j="",k=0,l=-1,m=a&&a.length||0,n=0;n<m;){if(37===a.charCodeAt(n)&&n+1<m){switch(l=l>-1?l:0,a.charCodeAt(n+1)){case 100:case 102:if(k>=i||null==b[k])break;l<n&&(j+=a.slice(l,n)),j+=Number(b[k]),l=n+2,n++;break;case 105:if(k>=i||null==b[k])break;l<n&&(j+=a.slice(l,n)),j+=Math.floor(Number(b[k])),l=n+2,n++;break;case 79:case 111:case 106:if(k>=i||void 0===b[k])break;l<n&&(j+=a.slice(l,n));var o=typeof b[k];if("string"===o){j+="'"+b[k]+"'",l=n+2,n++;break}if("function"===o){j+=b[k].name||"<anonymous>",l=n+2,n++;break}j+=e(b[k]),l=n+2,n++;break;case 115:if(k>=i)break;l<n&&(j+=a.slice(l,n)),j+=String(b[k]),l=n+2,n++;break;case 37:l<n&&(j+=a.slice(l,n)),j+="%",l=n+2,n++,k--}++k}++n}return -1===l?a:(l<m&&(j+=a.slice(l)),j)};b.exports=k;let e=function(){function a(a){return"u">typeof a&&a}try{return"u">typeof globalThis||Object.defineProperty(Object.prototype,"globalThis",{get:function(){return delete Object.prototype.globalThis,this.globalThis=this},configurable:!0}),globalThis}catch{return a(self)||a(window)||a(this)||{}}}().console||{};function f(a,b){return"silent"===a?1/0:b.levels.values[a]}let g=Symbol("pino.logFuncs"),h=Symbol("pino.hierarchy"),i={error:"log",fatal:"error",warn:"error",info:"log",debug:"log",trace:"log"};function j(a,b){let c={logger:b,parent:a[h]};b[h]=c}function k(a){var b,c,d;let h,o,p;(a=a||{}).browser=a.browser||{};let q=a.browser.transmit;if(q&&"function"!=typeof q.send)throw Error("pino: transmit option must have a send function");let u=a.browser.write||e;a.browser.write&&(a.browser.asObject=!0);let v=a.serializers||{},w=(b=a.browser.serialize,Array.isArray(b)?b.filter(function(a){return"!stdSerializers.err"!==a}):!0===b&&Object.keys(v)),x=a.browser.serialize;Array.isArray(a.browser.serialize)&&a.browser.serialize.indexOf("!stdSerializers.err")>-1&&(x=!1);let y=Object.keys(a.customLevels||{}),z=["error","fatal","warn","info","debug","trace"].concat(y);"function"==typeof u&&z.forEach(function(a){u[a]=u}),(!1===a.enabled||a.browser.disabled)&&(a.level="silent");let A=a.level||"info",B=Object.create(u);B.log||(B.log=r),h={},z.forEach(a=>{h[a]=u[a]?u[a]:e[a]||e[i[a]||"log"]||r}),B[g]=h,j({},B),Object.defineProperty(B,"levelVal",{get:function(){return f(this.level,this)}}),Object.defineProperty(B,"level",{get:function(){return this._level},set:function(a){if("silent"!==a&&!this.levels.values[a])throw Error("unknown level "+a);this._level=a,l(this,C,B,"error"),l(this,C,B,"fatal"),l(this,C,B,"warn"),l(this,C,B,"info"),l(this,C,B,"debug"),l(this,C,B,"trace"),y.forEach(a=>{l(this,C,B,a)})}});let C={transmit:q,serialize:w,asObject:a.browser.asObject,asObjectBindingsOnly:a.browser.asObjectBindingsOnly,formatters:a.browser.formatters,levels:z,timestamp:"function"==typeof(c=a).timestamp?c.timestamp:!1===c.timestamp?s:t,messageKey:a.messageKey||"msg",onChild:a.onChild||r};function D(b,c,d){if(!c)throw Error("missing bindings for child Pino");d=d||{},w&&c.serializers&&(d.serializers=c.serializers);let e=d.serializers;if(w&&e){var f=Object.assign({},v,e),g=!0===a.browser.serialize?Object.keys(f):w;delete c.serializers,m([c],g,f,this._stdErrSerialize)}function h(a){this._childLevel=(0|a._childLevel)+1,this.bindings=c,f&&(this.serializers=f,this._serialize=g),q&&(this._logEvent=n([].concat(a._logEvent.bindings,c)))}h.prototype=this;let i=new h(this);return j(this,i),i.child=function(...a){return D.call(this,b,...a)},i.level=d.level||this.level,b.onChild(i),i}return o=a.customLevels||{},B.levels={values:Object.assign({},k.levels.values,o),labels:Object.assign({},k.levels.labels,(p={},Object.keys(d=o).forEach(function(a){p[d[a]]=a}),p))},B.level=A,B.isLevelEnabled=function(a){return!!this.levels.values[a]&&this.levels.values[a]>=this.levels.values[this.level]},B.setMaxListeners=B.getMaxListeners=B.emit=B.addListener=B.on=B.prependListener=B.once=B.prependOnceListener=B.removeListener=B.removeAllListeners=B.listeners=B.listenerCount=B.eventNames=B.write=B.flush=r,B.serializers=v,B._serialize=w,B._stdErrSerialize=x,B.child=function(...a){return D.call(this,C,...a)},q&&(B._logEvent=n()),B}function l(a,b,c,i){var j,k,l,o,p,q,s;if(Object.defineProperty(a,i,{value:f(a.level,c)>f(i,c)?r:c[g][i],writable:!0,enumerable:!0,configurable:!0}),a[i]===r){if(!b.transmit)return;let d=f(b.transmit.level||a.level,c);if(f(i,c)<d)return}a[i]=(j=a,k=b,l=c,o=i,p=j[g][o],function(){let a=k.timestamp(),b=Array(arguments.length),c=Object.getPrototypeOf&&Object.getPrototypeOf(this)===e?e:this;for(var g=0;g<b.length;g++)b[g]=arguments[g];var h=!1;if(k.serialize&&(m(b,this._serialize,this.serializers,this._stdErrSerialize),h=!0),k.asObject||k.formatters?p.call(c,...function(a,b,c,e,f){let{level:g,log:h=a=>a}=f.formatters||{},i=c.slice(),j=i[0],k={},l=(0|a._childLevel)+1;if((l<1&&(l=1),e&&(k.time=e),g)?Object.assign(k,g(b,a.levels.values[b])):k.level=a.levels.values[b],f.asObjectBindingsOnly){if(null!==j&&"object"==typeof j)for(;l--&&"object"==typeof i[0];)Object.assign(k,i.shift());return[h(k),...i]}if(null!==j&&"object"==typeof j){for(;l--&&"object"==typeof i[0];)Object.assign(k,i.shift());j=i.length?d(i.shift(),i):void 0}else"string"==typeof j&&(j=d(i.shift(),i));return void 0!==j&&(k[f.messageKey]=j),[h(k)]}(this,o,b,a,k)):p.apply(c,b),k.transmit){let c=k.transmit.level||j._level,d=f(c,l),e=f(o,l);if(e<d)return;!function(a,b,c,d=!1){let e=b.send,f=b.ts,g=b.methodLevel,h=b.methodValue,i=b.val,j=a._logEvent.bindings;d||m(c,a._serialize||Object.keys(a.serializers),a.serializers,void 0===a._stdErrSerialize||a._stdErrSerialize),a._logEvent.ts=f,a._logEvent.messages=c.filter(function(a){return -1===j.indexOf(a)}),a._logEvent.level.label=g,a._logEvent.level.value=h,e(g,a._logEvent,i),a._logEvent=n(j)}(this,{ts:a,methodLevel:o,methodValue:e,transmitLevel:c,transmitValue:l.levels.values[k.transmit.level||j._level],send:k.transmit.send,val:f(j._level,l)},b,h)}});let t=function(a){let b=[];a.bindings&&b.push(a.bindings);let c=a[h];for(;c.parent;)(c=c.parent).logger.bindings&&b.push(c.logger.bindings);return b.reverse()}(a);0!==t.length&&(a[i]=(q=t,s=a[i],function(){return s.apply(this,[...q,...arguments])}))}function m(a,b,c,d){for(let e in a)if(d&&a[e]instanceof Error)a[e]=k.stdSerializers.err(a[e]);else if("object"==typeof a[e]&&!Array.isArray(a[e])&&b)for(let d in a[e])b.indexOf(d)>-1&&d in c&&(a[e][d]=c[d](a[e][d]))}function n(a){return{ts:0,messages:[],bindings:a||[],level:{label:"",value:0}}}function o(a){let b={type:a.constructor.name,msg:a.message,stack:a.stack};for(let c in a)void 0===b[c]&&(b[c]=a[c]);return b}function p(){return{}}function q(a){return a}function r(){}function s(){return!1}function t(){return Date.now()}k.levels={values:{fatal:60,error:50,warn:40,info:30,debug:20,trace:10},labels:{10:"trace",20:"debug",30:"info",40:"warn",50:"error",60:"fatal"}},k.stdSerializers={mapHttpRequest:p,mapHttpResponse:p,wrapRequestSerializer:q,wrapResponseSerializer:q,wrapErrorSerializer:q,req:p,res:p,err:o,errWithCause:o},k.stdTimeFunctions=Object.assign({},{nullTime:s,epochTime:t,unixTime:function(){return Math.round(Date.now()/1e3)},isoTime:function(){return new Date(Date.now()).toISOString()}}),b.exports.default=k,b.exports.pino=k;let u="custom_context";var v=Object.defineProperty,w=(a,b,c)=>{let d;return(d="symbol"!=typeof b?b+"":b)in a?v(a,d,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[d]=c};class x{constructor(a){w(this,"nodeValue"),w(this,"sizeInBytes"),w(this,"next"),this.nodeValue=a,this.sizeInBytes=new TextEncoder().encode(this.nodeValue).length,this.next=null}get value(){return this.nodeValue}get size(){return this.sizeInBytes}}class y{constructor(a){w(this,"lengthInNodes"),w(this,"sizeInBytes"),w(this,"head"),w(this,"tail"),w(this,"maxSizeInBytes"),this.head=null,this.tail=null,this.lengthInNodes=0,this.maxSizeInBytes=a,this.sizeInBytes=0}append(a){let b=new x(a);if(b.size>this.maxSizeInBytes)throw Error(`[LinkedList] Value too big to insert into list: ${a} with size ${b.size}`);for(;this.size+b.size>this.maxSizeInBytes;)this.shift();this.head?this.tail&&(this.tail.next=b):this.head=b,this.tail=b,this.lengthInNodes++,this.sizeInBytes+=b.size}shift(){if(!this.head)return;let a=this.head;this.head=this.head.next,this.head||(this.tail=null),this.lengthInNodes--,this.sizeInBytes-=a.size}toArray(){let a=[],b=this.head;for(;null!==b;)a.push(b.value),b=b.next;return a}get length(){return this.lengthInNodes}get size(){return this.sizeInBytes}toOrderedArray(){return Array.from(this)}[Symbol.iterator](){let a=this.head;return{next:()=>{if(!a)return{done:!0,value:null};let b=a.value;return a=a.next,{done:!1,value:b}}}}}function z(a){return"string"==typeof a?a:JSON.stringify(a,(a,b)=>"bigint"==typeof b?b.toString()+"n":b)||""}var A=Object.defineProperty,B=(a,b,c)=>{let d;return(d="symbol"!=typeof b?b+"":b)in a?A(a,d,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[d]=c};class C{constructor(a,c=1024e3){B(this,"logs"),B(this,"level"),B(this,"levelValue"),B(this,"MAX_LOG_SIZE_IN_BYTES"),this.level=a??"error",this.levelValue=b.exports.levels.values[this.level],this.MAX_LOG_SIZE_IN_BYTES=c,this.logs=new y(this.MAX_LOG_SIZE_IN_BYTES)}forwardToConsole(a,c){c===b.exports.levels.values.error?console.error(a):c===b.exports.levels.values.warn?console.warn(a):c===b.exports.levels.values.debug?console.debug(a):c===b.exports.levels.values.trace?console.trace(a):console.log(a)}appendToLogs(a){this.logs.append(z({timestamp:new Date().toISOString(),log:a}));let b="string"==typeof a?JSON.parse(a).level:a.level;b>=this.levelValue&&this.forwardToConsole(a,b)}getLogs(){return this.logs}clearLogs(){this.logs=new y(this.MAX_LOG_SIZE_IN_BYTES)}getLogArray(){return Array.from(this.logs)}logsToBlob(a){let b=this.getLogArray();return b.push(z({extraMetadata:a})),new Blob(b,{type:"application/json"})}}var D=Object.defineProperty;class E{constructor(a,b=1024e3){((a,b,c)=>{let d;return(d="symbol"!=typeof b?b+"":b)in a?D(a,d,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[d]=c})(this,"baseChunkLogger"),this.baseChunkLogger=new C(a,b)}write(a){this.baseChunkLogger.appendToLogs(a)}getLogs(){return this.baseChunkLogger.getLogs()}clearLogs(){this.baseChunkLogger.clearLogs()}getLogArray(){return this.baseChunkLogger.getLogArray()}logsToBlob(a){return this.baseChunkLogger.logsToBlob(a)}}var F=Object.defineProperty,G=Object.defineProperties,H=Object.getOwnPropertyDescriptors,I=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable,L=(a,b,c)=>b in a?F(a,b,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[b]=c,M=(a,b)=>{for(var c in b||(b={}))J.call(b,c)&&L(a,c,b[c]);if(I)for(var c of I(b))K.call(b,c)&&L(a,c,b[c]);return a};function N(a,b=u){return a[b]||""}a.s(["generateChildLogger",0,function(a,b,c=u){let d=function(a,b,c=u){let d=N(a,c);return d.trim()?`${d}/${b}`:b}(a,b,c);return function(a,b,c=u){return a[c]=b,a}(a.child({context:d}),d,c)},"generatePlatformLogger",0,function(a){var c,d,e,f;let g,h,i;if("u">typeof a.loggerOverride&&"string"!=typeof a.loggerOverride)return{logger:a.loggerOverride,chunkLoggerController:null};let j=G(M({},a.opts),H({level:"string"==typeof a.loggerOverride?a.loggerOverride:null==(c=a.opts)?void 0:c.level}));return i=new E(null==(e=(d=G(M({},a),H({opts:j}))).opts)?void 0:e.level,d.maxSizeInBytes),{logger:b.exports((g=M({},d.opts),h={level:"trace",browser:G(M({},null==(f=d.opts)?void 0:f.browser),H({write:a=>i.write(a)}))},G(g,H(h))),i),chunkLoggerController:i}},"getDefaultLoggerOptions",0,function(a){return G(M({},a),H({level:a?.level||"info"}))},"getLoggerContext",0,N])},987017,858915,a=>{"use strict";a.i(176996);var b=a.i(44886),c=a.i(979837);a.i(525181);var d=a.i(905653),e=a.i(412631);a.i(564205);var f=a.i(526551);a.i(735803),a.i(603511);var g=b;a.i(808710),a.i(696585),a.i(307465);var h=a.i(924968),i=a.i(192361);let j=i.css`
  .reown-logo {
    height: 24px;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: ${({tokens:a})=>a.theme.textSecondary};
  }

  a:hover {
    opacity: 0.9;
  }
`,k=class extends g.LitElement{render(){return c.html`
      <a
        data-testid="ux-branding-reown"
        href=${"https://reown.com"}
        rel="noreferrer"
        target="_blank"
        style="text-decoration: none;"
      >
        <wui-flex
          justifyContent="center"
          alignItems="center"
          gap="1"
          .padding=${["01","0","3","0"]}
        >
          <wui-text variant="sm-regular" color="inherit"> UX by </wui-text>
          <wui-icon name="reown" size="inherit" class="reown-logo"></wui-icon>
        </wui-flex>
      </a>
    `}};k.styles=[h.resetStyles,h.elementStyles,j],k=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}([(0,f.customElement)("wui-ux-by-reown")],k),a.s([],858915);let l=i.css`
  :host wui-ux-by-reown {
    padding-top: 0;
  }

  :host wui-ux-by-reown.branding-only {
    padding-top: ${({spacing:a})=>a["3"]};
  }

  a {
    text-decoration: none;
    color: ${({tokens:a})=>a.core.textAccentPrimary};
    font-weight: 500;
  }
`;var m=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let n=class extends b.LitElement{constructor(){super(),this.unsubscribe=[],this.remoteFeatures=e.OptionsController.state.remoteFeatures,this.unsubscribe.push(e.OptionsController.subscribeKey("remoteFeatures",a=>this.remoteFeatures=a))}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}render(){let{termsConditionsUrl:a,privacyPolicyUrl:b}=e.OptionsController.state,d=e.OptionsController.state.features?.legalCheckbox;return(a||b)&&!d?c.html`
      <wui-flex flexDirection="column">
        <wui-flex .padding=${["4","3","3","3"]} justifyContent="center">
          <wui-text color="secondary" variant="md-regular" align="center">
            By connecting your wallet, you agree to our <br />
            ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
          </wui-text>
        </wui-flex>
        ${this.reownBrandingTemplate()}
      </wui-flex>
    `:c.html`
        <wui-flex flexDirection="column"> ${this.reownBrandingTemplate(!0)} </wui-flex>
      `}andTemplate(){let{termsConditionsUrl:a,privacyPolicyUrl:b}=e.OptionsController.state;return a&&b?"and":""}termsTemplate(){let{termsConditionsUrl:a}=e.OptionsController.state;return a?c.html`<a href=${a} target="_blank" rel="noopener noreferrer"
      >Terms of Service</a
    >`:null}privacyTemplate(){let{privacyPolicyUrl:a}=e.OptionsController.state;return a?c.html`<a href=${a} target="_blank" rel="noopener noreferrer"
      >Privacy Policy</a
    >`:null}reownBrandingTemplate(a=!1){return this.remoteFeatures?.reownBranding?a?c.html`<wui-ux-by-reown class="branding-only"></wui-ux-by-reown>`:c.html`<wui-ux-by-reown></wui-ux-by-reown>`:null}};n.styles=[l],m([(0,d.state)()],n.prototype,"remoteFeatures",void 0),n=m([(0,f.customElement)("w3m-legal-footer")],n),a.s([],987017)},888793,a=>{"use strict";a.i(176996);var b=a.i(44886),c=a.i(979837),d=a.i(34525),e=a.i(649637),f=a.i(412631),g=a.i(682762),h=a.i(932774);a.i(564205);var i=a.i(526551);a.i(735803),a.i(644344),a.i(405239),a.i(603511);var j=a.i(455434),k=a.i(77439);let l=k.css``,m=class extends b.LitElement{render(){let{termsConditionsUrl:a,privacyPolicyUrl:b}=f.OptionsController.state;return a||b?c.html`
      <wui-flex
        .padding=${["4","3","3","3"]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="3"
      >
        <wui-text color="secondary" variant="md-regular" align="center">
          We work with the best providers to give you the lowest fees and best support. More options
          coming soon!
        </wui-text>

        ${this.howDoesItWorkTemplate()}
      </wui-flex>
    `:null}howDoesItWorkTemplate(){return c.html` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-primary" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`}onWhatIsBuy(){e.EventsController.sendEvent({type:"track",event:"SELECT_WHAT_IS_A_BUY",properties:{isSmartAccount:(0,h.getPreferredAccountType)(d.ChainController.state.activeChain)===j.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT}}),g.RouterController.push("WhatIsABuy")}};m.styles=[l],m=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}([(0,i.customElement)("w3m-onramp-providers-footer")],m),a.s([],888793)},427699,(a,b,c)=>{b.exports=a.x("events",()=>require("events"))},254799,(a,b,c)=>{b.exports=a.x("crypto",()=>require("crypto"))},524836,(a,b,c)=>{b.exports=a.x("https",()=>require("https"))},921517,(a,b,c)=>{b.exports=a.x("http",()=>require("http"))},504446,(a,b,c)=>{b.exports=a.x("net",()=>require("net"))},755004,(a,b,c)=>{b.exports=a.x("tls",()=>require("tls"))},792509,(a,b,c)=>{b.exports=a.x("url",()=>require("url"))},698692,a=>{"use strict";let b;function c(a){return new Promise((b,c)=>{a.oncomplete=a.onsuccess=()=>b(a.result),a.onabort=a.onerror=()=>c(a.error)})}function d(a,b){let d=indexedDB.open(a);d.onupgradeneeded=()=>d.result.createObjectStore(b);let e=c(d);return(a,c)=>e.then(d=>c(d.transaction(b,a).objectStore(b)))}function e(){return b||(b=d("keyval-store","keyval")),b}a.s(["clear",0,function(a=e()){return a("readwrite",a=>(a.clear(),c(a.transaction)))},"createStore",0,d,"del",0,function(a,b=e()){return b("readwrite",b=>(b.delete(a),c(b.transaction)))},"get",0,function(a,b=e()){return b("readonly",b=>c(b.get(a)))},"keys",0,function(a=e()){return a("readonly",a=>{var b;if(a.getAllKeys)return c(a.getAllKeys());let d=[];return(b=a=>d.push(a.key),a.openCursor().onsuccess=function(){this.result&&(b(this.result),this.result.continue())},c(a.transaction)).then(()=>d)})},"set",0,function(a,b,d=e()){return d("readwrite",d=>(d.put(b,a),c(d.transaction)))}])}];

//# sourceMappingURL=%5Broot-of-the-server%5D__0ly8fv6._.js.map