module.exports=[224361,(a,b,c)=>{b.exports=a.x("util",()=>require("util"))},688947,(a,b,c)=>{b.exports=a.x("stream",()=>require("stream"))},406461,(a,b,c)=>{b.exports=a.x("zlib",()=>require("zlib"))},500874,(a,b,c)=>{b.exports=a.x("buffer",()=>require("buffer"))},678916,834018,583823,a=>{"use strict";var b=a.i(120289),c=a.i(286682);let d=(0,b.proxy)({isLegalCheckboxChecked:!1}),e={state:d,subscribe:a=>(0,b.subscribe)(d,()=>a(d)),subscribeKey:(a,b)=>(0,c.subscribeKey)(d,a,b),setIsLegalCheckboxChecked(a){d.isLegalCheckboxChecked=a}};a.s(["OptionsStateController",0,e],678916),a.i(176996);var f=a.i(44886),g=a.i(979837);a.i(525181);var h=a.i(905653),i=a.i(412631);a.i(564205);var j=a.i(526551),k=f,l=a.i(129349);a.i(876091);var m=a.i(960078);a.i(753762);var n=a.i(691122);a.i(808710),a.i(696585);var o=a.i(924968),p=a.i(192361);let q=p.css`
  label {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    column-gap: ${({spacing:a})=>a[2]};
  }

  label > input[type='checkbox'] {
    height: 0;
    width: 0;
    opacity: 0;
    position: absolute;
  }

  label > span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    border: 1px solid ${({colors:a})=>a.neutrals400};
    color: ${({colors:a})=>a.white};
    background-color: transparent;
    will-change: border-color, background-color;
  }

  label > span > wui-icon {
    opacity: 0;
    will-change: opacity;
  }

  label > input[type='checkbox']:checked + span > wui-icon {
    color: ${({colors:a})=>a.white};
  }

  label > input[type='checkbox']:not(:checked) > span > wui-icon {
    color: ${({colors:a})=>a.neutrals900};
  }

  label > input[type='checkbox']:checked + span > wui-icon {
    opacity: 1;
  }

  /* -- Sizes --------------------------------------------------- */
  label[data-size='lg'] > span {
    width: 24px;
    height: 24px;
    min-width: 24px;
    min-height: 24px;
    border-radius: ${({borderRadius:a})=>a[10]};
  }

  label[data-size='md'] > span {
    width: 20px;
    height: 20px;
    min-width: 20px;
    min-height: 20px;
    border-radius: ${({borderRadius:a})=>a[2]};
  }

  label[data-size='sm'] > span {
    width: 16px;
    height: 16px;
    min-width: 16px;
    min-height: 16px;
    border-radius: ${({borderRadius:a})=>a[1]};
  }

  /* -- Focus states --------------------------------------------------- */
  label > input[type='checkbox']:focus-visible + span,
  label > input[type='checkbox']:focus + span {
    border: 1px solid ${({tokens:a})=>a.core.borderAccentPrimary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  label > input[type='checkbox']:checked + span {
    background-color: ${({tokens:a})=>a.core.iconAccentPrimary};
    border: 1px solid transparent;
  }

  /* -- Hover states --------------------------------------------------- */
  input[type='checkbox']:not(:checked):not(:disabled) + span:hover {
    border: 1px solid ${({colors:a})=>a.neutrals700};
    background-color: ${({colors:a})=>a.neutrals800};
    box-shadow: none;
  }

  input[type='checkbox']:checked:not(:disabled) + span:hover {
    border: 1px solid transparent;
    background-color: ${({colors:a})=>a.accent080};
    box-shadow: none;
  }

  /* -- Disabled state --------------------------------------------------- */
  label > input[type='checkbox']:checked:disabled + span {
    border: 1px solid transparent;
    opacity: 0.3;
  }

  label > input[type='checkbox']:not(:checked):disabled + span {
    border: 1px solid ${({colors:a})=>a.neutrals700};
  }

  label:has(input[type='checkbox']:disabled) {
    cursor: auto;
  }

  label > input[type='checkbox']:disabled + span {
    cursor: not-allowed;
  }
`;var r=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let s={lg:"md",md:"sm",sm:"sm"},t=class extends k.LitElement{constructor(){super(...arguments),this.inputElementRef=(0,n.createRef)(),this.checked=void 0,this.disabled=!1,this.size="md"}render(){let a=s[this.size];return g.html`
      <label data-size=${this.size}>
        <input
          ${(0,n.ref)(this.inputElementRef)}
          ?checked=${(0,m.ifDefined)(this.checked)}
          ?disabled=${this.disabled}
          type="checkbox"
          @change=${this.dispatchChangeEvent}
        />
        <span>
          <wui-icon name="checkmarkBold" size=${a}></wui-icon>
        </span>
        <slot></slot>
      </label>
    `}dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("checkboxChange",{detail:this.inputElementRef.value?.checked,bubbles:!0,composed:!0}))}};t.styles=[o.resetStyles,q],r([(0,l.property)({type:Boolean})],t.prototype,"checked",void 0),r([(0,l.property)({type:Boolean})],t.prototype,"disabled",void 0),r([(0,l.property)()],t.prototype,"size",void 0),t=r([(0,j.customElement)("wui-checkbox")],t),a.i(603511);let u=p.css`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  wui-checkbox {
    padding: ${({spacing:a})=>a["3"]};
  }
  a {
    text-decoration: none;
    color: ${({tokens:a})=>a.theme.textSecondary};
    font-weight: 500;
  }
`;var v=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let w=class extends f.LitElement{constructor(){super(),this.unsubscribe=[],this.checked=e.state.isLegalCheckboxChecked,this.unsubscribe.push(e.subscribeKey("isLegalCheckboxChecked",a=>{this.checked=a}))}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}render(){let{termsConditionsUrl:a,privacyPolicyUrl:b}=i.OptionsController.state,c=i.OptionsController.state.features?.legalCheckbox;return(a||b)&&c?g.html`
      <wui-checkbox
        ?checked=${this.checked}
        @checkboxChange=${this.onCheckboxChange.bind(this)}
        data-testid="wui-checkbox"
      >
        <wui-text color="secondary" variant="sm-regular" align="left">
          I agree to our ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-checkbox>
    `:null}andTemplate(){let{termsConditionsUrl:a,privacyPolicyUrl:b}=i.OptionsController.state;return a&&b?"and":""}termsTemplate(){let{termsConditionsUrl:a}=i.OptionsController.state;return a?g.html`<a rel="noreferrer" target="_blank" href=${a}>terms of service</a>`:null}privacyTemplate(){let{privacyPolicyUrl:a}=i.OptionsController.state;return a?g.html`<a rel="noreferrer" target="_blank" href=${a}>privacy policy</a>`:null}onCheckboxChange(){e.setIsLegalCheckboxChecked(!this.checked)}};w.styles=[u],v([(0,h.state)()],w.prototype,"checked",void 0),w=v([(0,j.customElement)("w3m-legal-checkbox")],w),a.s([],834018);var x=f;let y=p.css`
  :host {
    display: block;
    width: 100px;
    height: 100px;
  }

  svg {
    width: 100px;
    height: 100px;
  }

  rect {
    fill: none;
    stroke: ${a=>a.colors.accent100};
    stroke-width: 3px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var z=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let A=class extends x.LitElement{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){let a=this.radius>50?50:this.radius,b=36-a;return g.html`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${a}
          stroke-dasharray="${116+b} ${245+b}"
          stroke-dashoffset=${360+1.75*b}
        />
      </svg>
    `}};A.styles=[o.resetStyles,y],z([(0,l.property)({type:Number})],A.prototype,"radius",void 0),A=z([(0,j.customElement)("wui-loading-thumbnail")],A),a.s([],583823)},892701,a=>{"use strict";a.i(176996);var b=a.i(44886),c=a.i(979837);a.i(525181);var d=a.i(129349);a.i(876091);var e=a.i(960078);a.i(808710),a.i(696585);var f=a.i(924968),g=a.i(526551);a.i(989186);var h=a.i(77439);let i=h.css`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var j=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let k=class extends b.LitElement{constructor(){super(...arguments),this.disabled=!1}render(){return c.html`
      <wui-input-text
        type="email"
        placeholder="Email"
        icon="mail"
        size="lg"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
        tabIdx=${(0,e.ifDefined)(this.tabIdx)}
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?c.html`<wui-text variant="sm-regular" color="error">${this.errorMessage}</wui-text>`:null}};k.styles=[f.resetStyles,i],j([(0,d.property)()],k.prototype,"errorMessage",void 0),j([(0,d.property)({type:Boolean})],k.prototype,"disabled",void 0),j([(0,d.property)()],k.prototype,"value",void 0),j([(0,d.property)()],k.prototype,"tabIdx",void 0),k=j([(0,g.customElement)("wui-email-input")],k),a.s([],892701)},845328,326413,a=>{"use strict";var b=a.i(120289),c=a.i(286682),d=a.i(29853),e=a.i(932774),f=a.i(39957),g=a.i(456594),h=a.i(824388),i=a.i(412631);let j={eip155:{native:{assetNamespace:"slip44",assetReference:"60"},defaultTokenNamespace:"erc20"},solana:{native:{assetNamespace:"slip44",assetReference:"501"},defaultTokenNamespace:"token"}},k={56:"714",204:"714"};class l extends Error{}async function m(a,b){let c=function(){let{sdkType:a,sdkVersion:b,projectId:c}=i.OptionsController.getSnapshot(),d=new URL("https://rpc.walletconnect.org/v1/json-rpc");return d.searchParams.set("projectId",c),d.searchParams.set("st",a),d.searchParams.set("sv",b),d.searchParams.set("source","fund-wallet"),d.toString()}(),{projectId:d}=i.OptionsController.getSnapshot(),e={jsonrpc:"2.0",id:1,method:a,params:{...b||{},projectId:d}},f=await fetch(c,{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}),g=await f.json();if(g.error)throw new l(g.error.message);return g}async function n(a){return(await m("reown_getExchanges",a)).result}async function o(a){return(await m("reown_getExchangePayUrl",a)).result}async function p(a){return(await m("reown_getExchangeBuyStatus",a)).result}function q(a,b){let{chainNamespace:c,chainId:d}=h.ParseUtil.parseCaipNetworkId(a),e=j[c];if(!e)throw Error(`Unsupported chain namespace for CAIP-19 formatting: ${c}`);let f=e.native.assetNamespace,g=e.native.assetReference;"native"!==b?(f=e.defaultTokenNamespace,g=b):"eip155"===c&&k[d]&&(g=k[d]);let i=`${c}:${d}`;return`${i}/${f}:${g}`}let r={network:"eip155:8453",asset:"0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},s={ethereumETH:{network:"eip155:1",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},baseETH:{network:"eip155:8453",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},baseUSDC:r,baseSepoliaETH:{network:"eip155:84532",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},ethereumUSDC:{network:"eip155:1",asset:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},arbitrumUSDC:{network:"eip155:42161",asset:"0xaf88d065e77c8cC2239327C5EDb3A432268e5831",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},polygonUSDC:{network:"eip155:137",asset:"0x2791bca1f2de4661ed88a30c99a7a9449aa84174",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},solanaUSDC:{network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},ethereumUSDT:{network:"eip155:1",asset:"0xdAC17F958D2ee523a2206206994597C13D831ec7",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},optimismUSDT:{network:"eip155:10",asset:"0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},arbitrumUSDT:{network:"eip155:42161",asset:"0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},polygonUSDT:{network:"eip155:137",asset:"0xc2132d05d31c914a87c6611c10748aeb04b58e8f",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},solanaUSDT:{network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},solanaSOL:{network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"native",metadata:{name:"Solana",symbol:"SOL",decimals:9}}};function t(a){return Object.values(s).filter(b=>b.network===a)}a.s(["baseSepoliaUSDC",0,{network:"eip155:84532",asset:"0x036CbD53842c5426634e7929541eC2318f3dCF7e",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},"baseUSDC",0,r,"formatCaip19Asset",0,q,"getBuyStatus",0,p,"getExchanges",0,n,"getPayUrl",0,o,"getPaymentAssetsForNetwork",0,t],326413);var u=a.i(182611),v=a.i(34525),w=a.i(649637),x=a.i(475744);let y={paymentAsset:null,amount:null,tokenAmount:0,priceLoading:!1,error:null,exchanges:[],isLoading:!1,currentPayment:void 0,isPaymentInProgress:!1,paymentId:"",assets:[]},z=(0,b.proxy)(y),A={state:z,subscribe:a=>(0,b.subscribe)(z,()=>a(z)),subscribeKey:(a,b)=>(0,c.subscribeKey)(z,a,b),resetState(){Object.assign(z,{...y})},async getAssetsForNetwork(a){let b=t(a),c=await A.getAssetsImageAndPrice(b),d=b.map(a=>{let b="native"===a.asset?(0,e.getActiveNetworkTokenAddress)():`${a.network}:${a.asset}`,d=c.find(a=>a.fungibles?.[0]?.address?.toLowerCase()===b.toLowerCase());return{...a,price:d?.fungibles?.[0]?.price||1,metadata:{...a.metadata,iconUrl:d?.fungibles?.[0]?.iconUrl}}});return z.assets=d,d},async getAssetsImageAndPrice(a){let b=a.map(a=>"native"===a.asset?(0,e.getActiveNetworkTokenAddress)():`${a.network}:${a.asset}`);return await Promise.all(b.map(a=>u.BlockchainApiController.fetchTokenPrice({addresses:[a]})))},getTokenAmount(){if(!z?.paymentAsset?.price)throw Error("Cannot get token price");let a=d.NumberUtil.bigNumber(z.amount??0).round(8),b=d.NumberUtil.bigNumber(z.paymentAsset.price).round(8);return a.div(b).round(8).toNumber()},setAmount(a){z.amount=a,z.paymentAsset?.price&&(z.tokenAmount=A.getTokenAmount())},setPaymentAsset(a){z.paymentAsset=a},isPayWithExchangeEnabled:()=>i.OptionsController.state.remoteFeatures?.payWithExchange,isPayWithExchangeSupported:()=>A.isPayWithExchangeEnabled()&&v.ChainController.state.activeCaipNetwork&&f.ConstantsUtil.PAY_WITH_EXCHANGE_SUPPORTED_CHAIN_NAMESPACES.includes(v.ChainController.state.activeCaipNetwork.chainNamespace),async fetchExchanges(){try{let a=A.isPayWithExchangeSupported();if(!z.paymentAsset||!a){z.exchanges=[],z.isLoading=!1;return}z.isLoading=!0;let b=await n({page:0,asset:q(z.paymentAsset.network,z.paymentAsset.asset),amount:z.amount?.toString()??"0"});z.exchanges=b.exchanges.slice(0,2)}catch(a){throw x.SnackController.showError("Unable to get exchanges"),Error("Unable to get exchanges")}finally{z.isLoading=!1}},async getPayUrl(a,b){try{let c=Number(b.amount),d=await o({exchangeId:a,asset:q(b.network,b.asset),amount:c.toString(),recipient:`${b.network}:${b.recipient}`});return w.EventsController.sendEvent({type:"track",event:"PAY_EXCHANGE_SELECTED",properties:{exchange:{id:a},configuration:{network:b.network,asset:b.asset,recipient:b.recipient,amount:c},currentPayment:{type:"exchange",exchangeId:a},source:"fund-from-exchange",headless:!1}}),d}catch(a){if(a instanceof Error&&a.message.includes("is not supported"))throw Error("Asset not supported");throw Error(a.message)}},async handlePayWithExchange(a){try{let b=v.ChainController.getAccountData()?.address;if(!b)throw Error("No account connected");if(!z.paymentAsset)throw Error("No payment asset selected");let c=g.CoreHelperUtil.returnOpenHref("","popupWindow","scrollbar=yes,width=480,height=720");if(!c)throw Error("Could not create popup window");z.isPaymentInProgress=!0,z.paymentId=crypto.randomUUID(),z.currentPayment={type:"exchange",exchangeId:a};let{network:d,asset:e}=z.paymentAsset,f={network:d,asset:e,amount:z.tokenAmount,recipient:b},h=await A.getPayUrl(a,f);if(!h){try{c.close()}catch(a){console.error("Unable to close popup window",a)}throw Error("Unable to initiate payment")}z.currentPayment.sessionId=h.sessionId,z.currentPayment.status="IN_PROGRESS",z.currentPayment.exchangeId=a,c.location.href=h.url}catch(a){z.error="Unable to initiate payment",x.SnackController.showError(z.error)}},async waitUntilComplete({exchangeId:a,sessionId:b,paymentId:c,retries:d=20}){let e=await A.getBuyStatus(a,b,c);if("SUCCESS"===e.status||"FAILED"===e.status)return e;if(0===d)throw Error("Unable to get deposit status");return await new Promise(a=>{setTimeout(a,5e3)}),A.waitUntilComplete({exchangeId:a,sessionId:b,paymentId:c,retries:d-1})},async getBuyStatus(a,b,c){try{if(!z.currentPayment)throw Error("No current payment");let d=await p({sessionId:b,exchangeId:a});if(z.currentPayment.status=d.status,"SUCCESS"===d.status||"FAILED"===d.status){let a=v.ChainController.getAccountData()?.address;z.currentPayment.result=d.txHash,z.isPaymentInProgress=!1,w.EventsController.sendEvent({type:"track",event:"SUCCESS"===d.status?"PAY_SUCCESS":"PAY_ERROR",properties:{message:"FAILED"===d.status?g.CoreHelperUtil.parseError(z.error):void 0,source:"fund-from-exchange",paymentId:c,configuration:{network:z.paymentAsset?.network||"",asset:z.paymentAsset?.asset||"",recipient:a||"",amount:z.amount??0},currentPayment:{type:"exchange",exchangeId:z.currentPayment?.exchangeId,sessionId:z.currentPayment?.sessionId,result:d.txHash}}})}return d}catch(a){return{status:"UNKNOWN",txHash:""}}},reset(){z.currentPayment=void 0,z.isPaymentInProgress=!1,z.paymentId="",z.paymentAsset=null,z.amount=0,z.tokenAmount=0,z.priceLoading=!1,z.error=null,z.exchanges=[],z.isLoading=!1}};a.s(["ExchangeController",0,A],845328)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__1yhstlz._.js.map