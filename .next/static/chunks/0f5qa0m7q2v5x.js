(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,657175,e=>{"use strict";e.i(720140);var t=e.i(227565),i=e.i(540647);e.i(540417);var r=e.i(953166);e.i(693043),e.i(794390);var l=e.i(861041);let o=l.css`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`,s=class extends t.LitElement{render(){return i.html`
      <wui-flex flexDirection="column" .padding=${["0","3","3","3"]} gap="3">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};s.styles=o,s=function(e,t,i,r){var l,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var c=e.length-1;c>=0;c--)(l=e[c])&&(s=(o<3?l(s):o>3?l(t,i,s):l(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s}([(0,r.customElement)("w3m-transactions-view")],s),e.s(["W3mTransactionsView",0,s],914080),e.s([],104260),e.i(104260),e.i(914080),e.s(["W3mTransactionsView",0,s],657175)}]);