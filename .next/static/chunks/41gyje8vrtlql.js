(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,560030,780427,729687,692613,256606,595246,397503,e=>{"use strict";e.i(720140);var t=e.i(227565),i=e.i(540647);e.i(890019);var r=e.i(378424);e.i(881514);var n=e.i(931111),a=e.i(829083),s=e.i(352714),o=e.i(610389),l=e.i(209884),c=e.i(793700),u=e.i(966584),d=e.i(565898);e.i(540417);var p=e.i(953166);e.i(496768),e.i(693043),e.i(453424);var h=t,m=e.i(349820);e.i(175235);var g=e.i(964603),y=e.i(555489);let w=y.css`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    padding: ${({spacing:e})=>e[1]};
  }

  /* -- Colors --------------------------------------------------- */
  button[data-type='accent'] wui-icon {
    color: ${({tokens:e})=>e.core.iconAccentPrimary};
  }

  button[data-type='neutral'][data-variant='primary'] wui-icon {
    color: ${({tokens:e})=>e.theme.iconInverse};
  }

  button[data-type='neutral'][data-variant='secondary'] wui-icon {
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  button[data-type='success'] wui-icon {
    color: ${({tokens:e})=>e.core.iconSuccess};
  }

  button[data-type='error'] wui-icon {
    color: ${({tokens:e})=>e.core.iconError};
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='xs'] {
    width: 16px;
    height: 16px;

    border-radius: ${({borderRadius:e})=>e[1]};
  }

  button[data-size='sm'] {
    width: 20px;
    height: 20px;
    border-radius: ${({borderRadius:e})=>e[1]};
  }

  button[data-size='md'] {
    width: 24px;
    height: 24px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='lg'] {
    width: 28px;
    height: 28px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='xs'] wui-icon {
    width: 8px;
    height: 8px;
  }

  button[data-size='sm'] wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] wui-icon {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] wui-icon {
    width: 20px;
    height: 20px;
  }

  /* -- Hover --------------------------------------------------- */
  @media (hover: hover) {
    button[data-type='accent']:hover:enabled {
      background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    }

    button[data-variant='primary'][data-type='neutral']:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }

    button[data-variant='secondary'][data-type='neutral']:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }

    button[data-type='success']:hover:enabled {
      background-color: ${({tokens:e})=>e.core.backgroundSuccess};
    }

    button[data-type='error']:hover:enabled {
      background-color: ${({tokens:e})=>e.core.backgroundError};
    }
  }

  /* -- Focus --------------------------------------------------- */
  button:focus-visible {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  /* -- Properties --------------------------------------------------- */
  button[data-full-width='true'] {
    width: 100%;
  }

  :host([fullWidth]) {
    width: 100%;
  }

  button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var f=function(e,t,i,r){var n,a=arguments.length,s=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(s=(a<3?n(s):a>3?n(t,i,s):n(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let b=class extends h.LitElement{constructor(){super(...arguments),this.icon="card",this.variant="primary",this.type="accent",this.size="md",this.iconSize=void 0,this.fullWidth=!1,this.disabled=!1}render(){return i.html`<button
      data-variant=${this.variant}
      data-type=${this.type}
      data-size=${this.size}
      data-full-width=${this.fullWidth}
      ?disabled=${this.disabled}
    >
      <wui-icon color="inherit" name=${this.icon} size=${(0,n.ifDefined)(this.iconSize)}></wui-icon>
    </button>`}};b.styles=[g.resetStyles,g.elementStyles,w],f([(0,m.property)()],b.prototype,"icon",void 0),f([(0,m.property)()],b.prototype,"variant",void 0),f([(0,m.property)()],b.prototype,"type",void 0),f([(0,m.property)()],b.prototype,"size",void 0),f([(0,m.property)()],b.prototype,"iconSize",void 0),f([(0,m.property)({type:Boolean})],b.prototype,"fullWidth",void 0),f([(0,m.property)({type:Boolean})],b.prototype,"disabled",void 0),b=f([(0,p.customElement)("wui-icon-button")],b),e.s([],780427),e.i(101704),e.i(808060),e.i(637795),e.i(631484),e.i(135634),e.i(551089),e.i(855118),e.i(951172),e.s(["DIRECT_TRANSFER_DEPOSIT_TYPE",()=>ev,"DIRECT_TRANSFER_REQUEST_ID",()=>ex,"DIRECT_TRANSFER_TRANSACTION_TYPE",()=>eC,"PayController",()=>eP],729687);var x=e.i(374225),v=e.i(165064),C=e.i(172339),k=e.i(807333),P=e.i(785323),A=e.i(153794),I=e.i(149577),E=e.i(492555),S=e.i(282910);let $="INVALID_PAYMENT_CONFIG",N="INVALID_RECIPIENT",T="INVALID_ASSET",U="INVALID_AMOUNT",R="UNABLE_TO_INITIATE_PAYMENT",q="INVALID_CHAIN_NAMESPACE",O="GENERIC_PAYMENT_ERROR",D="UNABLE_TO_GET_EXCHANGES",_="ASSET_NOT_SUPPORTED",j="UNABLE_TO_GET_PAY_URL",L="UNABLE_TO_GET_BUY_STATUS",F="UNABLE_TO_GET_QUOTE",z="UNABLE_TO_GET_QUOTE_STATUS",B="INVALID_RECIPIENT_ADDRESS_FOR_ASSET",W={[$]:"Invalid payment configuration",[N]:"Invalid recipient address",[T]:"Invalid asset specified",[U]:"Invalid payment amount",[B]:"Invalid recipient address for the asset selected",UNKNOWN_ERROR:"Unknown payment error occurred",[R]:"Unable to initiate payment",[q]:"Invalid chain namespace",[O]:"Unable to process payment",[D]:"Unable to get exchanges",[_]:"Asset not supported by the selected exchange",[j]:"Unable to get payment URL",[L]:"Unable to get buy status",UNABLE_TO_GET_TOKEN_BALANCES:"Unable to get token balances",[F]:"Unable to get quote. Please choose a different token",[z]:"Unable to get quote status"};class Q extends Error{get message(){return W[this.code]}constructor(e,t){super(W[e]),this.name="AppKitPayError",this.code=e,this.details=t,Error.captureStackTrace&&Error.captureStackTrace(this,Q)}}var M=e.i(96587),H=e.i(921693),K=e.i(34602);let G="reown_test";var Y=e.i(520191),V=e.i(879132);async function X(e,t,i){if(t!==C.ConstantsUtil.CHAIN.EVM)throw new Q(q);if(!i.fromAddress)throw new Q($,"fromAddress is required for native EVM payments.");let r="string"==typeof i.amount?parseFloat(i.amount):i.amount;if(isNaN(r))throw new Q($);let n=e.metadata?.decimals??18,a=o.ConnectionController.parseUnits(r.toString(),n);if("bigint"!=typeof a)throw new Q(O);return await o.ConnectionController.sendTransaction({chainNamespace:t,to:i.recipient,address:i.fromAddress,value:a,data:"0x"})??void 0}async function J(e,t){if(!t.fromAddress)throw new Q($,"fromAddress is required for ERC20 EVM payments.");let i=e.asset,r=t.recipient,n=Number(e.metadata.decimals),a=o.ConnectionController.parseUnits(t.amount.toString(),n);if(void 0===a)throw new Q(O);return await o.ConnectionController.writeContract({fromAddress:t.fromAddress,tokenAddress:i,args:[r,a],method:"transfer",abi:Y.ContractUtil.getERC20Abi(i),chainNamespace:C.ConstantsUtil.CHAIN.EVM})??void 0}async function Z(e,t){if(e!==C.ConstantsUtil.CHAIN.SOLANA)throw new Q(q);if(!t.fromAddress)throw new Q($,"fromAddress is required for Solana payments.");let i="string"==typeof t.amount?parseFloat(t.amount):t.amount;if(isNaN(i)||i<=0)throw new Q($,"Invalid payment amount.");try{if(!V.ProviderController.getProvider(e))throw new Q(O,"No Solana provider available.");let r=await o.ConnectionController.sendTransaction({chainNamespace:C.ConstantsUtil.CHAIN.SOLANA,to:t.recipient,value:i,tokenMint:t.tokenMint});if(!r)throw new Q(O,"Transaction failed.");return r}catch(e){if(e instanceof Q)throw e;throw new Q(O,`Solana payment failed: ${e}`)}}async function ee({sourceToken:e,toToken:t,amount:i,recipient:r}){let n=o.ConnectionController.parseUnits(i,e.metadata.decimals),a=o.ConnectionController.parseUnits(i,t.metadata.decimals);return Promise.resolve({type:ex,origin:{amount:n?.toString()??"0",currency:e},destination:{amount:a?.toString()??"0",currency:t},fees:[{id:"service",label:"Service Fee",amount:"0",currency:t}],steps:[{requestId:ex,type:"deposit",deposit:{amount:n?.toString()??"0",currency:e.asset,receiver:r}}],timeInSeconds:6})}function et(e){if(!e)return null;let t=e.steps[0];return t&&t.type===ev?t:null}function ei(e,t=0){if(!e)return[];let i=e.steps.filter(e=>e.type===eC),r=i.filter((e,i)=>i+1>t);return i.length>0&&i.length<3?r:[]}let er=new M.FetchUtil({baseUrl:A.CoreHelperUtil.getApiUrl(),clientId:null});class en extends Error{}function ea(){let{projectId:e,sdkType:t,sdkVersion:i}=H.OptionsController.state;return{projectId:e,st:t||"appkit",sv:i||"html-wagmi-4.2.2"}}async function es(e,t){let i,r=(i=H.OptionsController.getSnapshot().projectId,`https://rpc.walletconnect.org/v1/json-rpc?projectId=${i}`),{sdkType:n,sdkVersion:a,projectId:s}=H.OptionsController.getSnapshot(),o={jsonrpc:"2.0",id:1,method:e,params:{...t||{},st:n,sv:a,projectId:s}},l=await fetch(r,{method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/json"}}),c=await l.json();if(c.error)throw new en(c.error.message);return c}async function eo(e){return(await es("reown_getExchanges",e)).result}async function el(e){return(await es("reown_getExchangePayUrl",e)).result}async function ec(e){return(await es("reown_getExchangeBuyStatus",e)).result}async function eu(e){let t=k.NumberUtil.bigNumber(e.amount).times(10**e.toToken.metadata.decimals).toString(),{chainId:i,chainNamespace:r}=P.ParseUtil.parseCaipNetworkId(e.sourceToken.network),{chainId:n,chainNamespace:a}=P.ParseUtil.parseCaipNetworkId(e.toToken.network),s="native"===e.sourceToken.asset?(0,K.getNativeTokenAddress)(r):e.sourceToken.asset,o="native"===e.toToken.asset?(0,K.getNativeTokenAddress)(a):e.toToken.asset;return await er.post({path:"/appkit/v1/transfers/quote",body:{user:e.address,originChainId:i.toString(),originCurrency:s,destinationChainId:n.toString(),destinationCurrency:o,recipient:e.recipient,amount:t},params:ea()})}async function ed(e){let t=S.HelpersUtil.isLowerCaseMatch(e.sourceToken.network,e.toToken.network),i=S.HelpersUtil.isLowerCaseMatch(e.sourceToken.asset,e.toToken.asset);return t&&i?ee(e):eu(e)}async function ep(e){return await er.get({path:"/appkit/v1/transfers/status",params:{requestId:e.requestId,...ea()}})}async function eh(e){return await er.get({path:`/appkit/v1/transfers/assets/exchanges/${e}`,params:ea()})}let em=["eip155","solana"],eg={eip155:{native:{assetNamespace:"slip44",assetReference:"60"},defaultTokenNamespace:"erc20"},solana:{native:{assetNamespace:"slip44",assetReference:"501"},defaultTokenNamespace:"token"}},ey={56:"714",204:"714"};function ew(e,t){let{chainNamespace:i,chainId:r}=P.ParseUtil.parseCaipNetworkId(e),n=eg[i];if(!n)throw Error(`Unsupported chain namespace for CAIP-19 formatting: ${i}`);let a=n.native.assetNamespace,s=n.native.assetReference;"native"!==t?(a=n.defaultTokenNamespace,s=t):"eip155"===i&&ey[r]&&(s=ey[r]);let o=`${i}:${r}`;return`${o}/${a}:${s}`}function ef(e){let t=k.NumberUtil.bigNumber(e,{safe:!0});return t.lt(.001)?"<0.001":t.round(4).toString()}let eb="unknown",ex="direct-transfer",ev="deposit",eC="transaction",ek=(0,x.proxy)({paymentAsset:{network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}},recipient:"0x0",amount:0,isConfigured:!1,error:null,isPaymentInProgress:!1,exchanges:[],isLoading:!1,openInNewTab:!0,redirectUrl:void 0,payWithExchange:void 0,currentPayment:void 0,analyticsSet:!1,paymentId:void 0,choice:"pay",tokenBalances:{[C.ConstantsUtil.CHAIN.EVM]:[],[C.ConstantsUtil.CHAIN.SOLANA]:[]},isFetchingTokenBalances:!1,selectedPaymentAsset:null,quote:void 0,quoteStatus:"waiting",quoteError:null,isFetchingQuote:!1,selectedExchange:void 0,exchangeUrlForQuote:void 0,requestId:void 0}),eP={state:ek,subscribe:e=>(0,x.subscribe)(ek,()=>e(ek)),subscribeKey:(e,t)=>(0,v.subscribeKey)(ek,e,t),async handleOpenPay(e){this.resetState(),this.setPaymentConfig(e),this.initializeAnalytics(),function(){let{chainNamespace:e}=P.ParseUtil.parseCaipNetworkId(eP.state.paymentAsset.network);if(!A.CoreHelperUtil.isAddress(eP.state.recipient,e))throw new Q(B,`Provide valid recipient address for namespace "${e}"`)}(),await this.prepareTokenLogo(),ek.isConfigured=!0,I.EventsController.sendEvent({type:"track",event:"PAY_MODAL_OPEN",properties:{exchanges:ek.exchanges,configuration:{network:ek.paymentAsset.network,asset:ek.paymentAsset.asset,recipient:ek.recipient,amount:ek.amount}}}),await c.ModalController.open({view:"Pay"})},resetState(){ek.paymentAsset={network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}},ek.recipient="0x0",ek.amount=0,ek.isConfigured=!1,ek.error=null,ek.isPaymentInProgress=!1,ek.isLoading=!1,ek.currentPayment=void 0,ek.selectedExchange=void 0,ek.exchangeUrlForQuote=void 0,ek.requestId=void 0},resetQuoteState(){ek.quote=void 0,ek.quoteStatus="waiting",ek.quoteError=null,ek.isFetchingQuote=!1,ek.requestId=void 0},setPaymentConfig(e){if(!e.paymentAsset)throw new Q($);try{ek.choice=e.choice??"pay",ek.paymentAsset=e.paymentAsset,ek.recipient=e.recipient,ek.amount=e.amount,ek.openInNewTab=e.openInNewTab??!0,ek.redirectUrl=e.redirectUrl,ek.payWithExchange=e.payWithExchange,ek.error=null}catch(e){throw new Q($,e.message)}},setSelectedPaymentAsset(e){ek.selectedPaymentAsset=e},setSelectedExchange(e){ek.selectedExchange=e},setRequestId(e){ek.requestId=e},setPaymentInProgress(e){ek.isPaymentInProgress=e},getPaymentAsset:()=>ek.paymentAsset,getExchanges:()=>ek.exchanges,async fetchExchanges(){try{ek.isLoading=!0,ek.exchanges=(await eo({page:0})).exchanges.slice(0,2)}catch(e){throw d.SnackController.showError(W.UNABLE_TO_GET_EXCHANGES),new Q(D)}finally{ek.isLoading=!1}},async getAvailableExchanges(e){try{let t=e?.asset&&e?.network?ew(e.network,e.asset):void 0;return await eo({page:e?.page??0,asset:t,amount:e?.amount?.toString()})}catch(e){throw new Q(D)}},async getPayUrl(e,t,i=!1){try{let r=Number(t.amount),n=await el({exchangeId:e,asset:ew(t.network,t.asset),amount:r.toString(),recipient:`${t.network}:${t.recipient}`});return I.EventsController.sendEvent({type:"track",event:"PAY_EXCHANGE_SELECTED",properties:{source:"pay",exchange:{id:e},configuration:{network:t.network,asset:t.asset,recipient:t.recipient,amount:r},currentPayment:{type:"exchange",exchangeId:e},headless:i}}),i&&(this.initiatePayment(),I.EventsController.sendEvent({type:"track",event:"PAY_INITIATED",properties:{source:"pay",paymentId:ek.paymentId||eb,configuration:{network:t.network,asset:t.asset,recipient:t.recipient,amount:r},currentPayment:{type:"exchange",exchangeId:e}}})),n}catch(e){if(e instanceof Error&&e.message.includes("is not supported"))throw new Q(_);throw Error(e.message)}},async generateExchangeUrlForQuote({exchangeId:e,paymentAsset:t,amount:i,recipient:r}){let n=await el({exchangeId:e,asset:ew(t.network,t.asset),amount:i.toString(),recipient:r});ek.exchangeSessionId=n.sessionId,ek.exchangeUrlForQuote=n.url},async openPayUrl(e,t,i=!1){try{let r=await this.getPayUrl(e.exchangeId,t,i);if(!r)throw new Q(j);let n=e.openInNewTab??!0;return A.CoreHelperUtil.openHref(r.url,n?"_blank":"_self"),r}catch(e){throw e instanceof Q?ek.error=e.message:ek.error=W.GENERIC_PAYMENT_ERROR,new Q(j)}},async onTransfer({chainNamespace:e,fromAddress:t,toAddress:i,amount:r,paymentAsset:n}){if(ek.currentPayment={type:"wallet",status:"IN_PROGRESS"},!ek.isPaymentInProgress)try{this.initiatePayment();let a=s.ChainController.getAllRequestedCaipNetworks().find(e=>e.caipNetworkId===n.network);if(!a)throw Error("Target network not found");let o=s.ChainController.state.activeCaipNetwork;switch(!S.HelpersUtil.isLowerCaseMatch(o?.caipNetworkId,a.caipNetworkId)&&await s.ChainController.switchActiveNetwork(a),e){case C.ConstantsUtil.CHAIN.EVM:"native"===n.asset&&(ek.currentPayment.result=await X(n,e,{recipient:i,amount:r,fromAddress:t})),n.asset.startsWith("0x")&&(ek.currentPayment.result=await J(n,{recipient:i,amount:r,fromAddress:t})),ek.currentPayment.status="SUCCESS";break;case C.ConstantsUtil.CHAIN.SOLANA:ek.currentPayment.result=await Z(e,{recipient:i,amount:r,fromAddress:t,tokenMint:"native"===n.asset?void 0:n.asset}),ek.currentPayment.status="SUCCESS";break;default:throw new Q(q)}}catch(e){throw e instanceof Q?ek.error=e.message:ek.error=W.GENERIC_PAYMENT_ERROR,ek.currentPayment.status="FAILED",d.SnackController.showError(ek.error),e}finally{ek.isPaymentInProgress=!1}},async onSendTransaction(e){try{let{namespace:t,transactionStep:i}=e;eP.initiatePayment();let r=s.ChainController.getAllRequestedCaipNetworks().find(e=>e.caipNetworkId===ek.paymentAsset?.network);if(!r)throw Error("Target network not found");let n=s.ChainController.state.activeCaipNetwork;if(S.HelpersUtil.isLowerCaseMatch(n?.caipNetworkId,r.caipNetworkId)||await s.ChainController.switchActiveNetwork(r),t===C.ConstantsUtil.CHAIN.EVM){let{from:e,to:r,data:n,value:a}=i.transaction;await o.ConnectionController.sendTransaction({address:e,to:r,data:n,value:BigInt(a),chainNamespace:t})}else if(t===C.ConstantsUtil.CHAIN.SOLANA){let{instructions:e}=i.transaction;await o.ConnectionController.writeSolanaTransaction({instructions:e})}}catch(e){throw e instanceof Q?ek.error=e.message:ek.error=W.GENERIC_PAYMENT_ERROR,d.SnackController.showError(ek.error),e}finally{ek.isPaymentInProgress=!1}},getExchangeById:e=>ek.exchanges.find(t=>t.id===e),validatePayConfig(e){let{paymentAsset:t,recipient:i,amount:r}=e;if(!t)throw new Q($);if(!i)throw new Q(N);if(!t.asset)throw new Q(T);if(null==r||r<=0)throw new Q(U)},async handlePayWithExchange(e){try{ek.currentPayment={type:"exchange",exchangeId:e};let{network:t,asset:i}=ek.paymentAsset,r={network:t,asset:i,amount:ek.amount,recipient:ek.recipient},n=await this.getPayUrl(e,r);if(!n)throw new Q(R);return ek.currentPayment.sessionId=n.sessionId,ek.currentPayment.status="IN_PROGRESS",ek.currentPayment.exchangeId=e,this.initiatePayment(),{url:n.url,openInNewTab:ek.openInNewTab}}catch(e){return e instanceof Q?ek.error=e.message:ek.error=W.GENERIC_PAYMENT_ERROR,ek.isPaymentInProgress=!1,d.SnackController.showError(ek.error),null}},async getBuyStatus(e,t){try{let i=await ec({sessionId:t,exchangeId:e});return("SUCCESS"===i.status||"FAILED"===i.status)&&I.EventsController.sendEvent({type:"track",event:"SUCCESS"===i.status?"PAY_SUCCESS":"PAY_ERROR",properties:{message:"FAILED"===i.status?A.CoreHelperUtil.parseError(ek.error):void 0,source:"pay",paymentId:ek.paymentId||eb,configuration:{network:ek.paymentAsset.network,asset:ek.paymentAsset.asset,recipient:ek.recipient,amount:ek.amount},currentPayment:{type:"exchange",exchangeId:ek.currentPayment?.exchangeId,sessionId:ek.currentPayment?.sessionId,result:i.txHash}}}),i}catch(e){throw new Q(L)}},async fetchTokensFromEOA({caipAddress:e,caipNetwork:t,namespace:i}){if(!e)return[];let{address:r}=P.ParseUtil.parseCaipAddress(e),n=t;return i===C.ConstantsUtil.CHAIN.EVM&&(n=void 0),await E.BalanceUtil.getMyTokensWithBalance({address:r,caipNetwork:n})},async fetchTokensFromExchange(){if(!ek.selectedExchange)return[];let e=Object.values((await eh(ek.selectedExchange.id)).assets).flat();return await Promise.all(e.map(async e=>{let t={chainId:e.network,address:`${e.network}:${e.asset}`,symbol:e.metadata.symbol,name:e.metadata.name,iconUrl:e.metadata.logoURI||"",price:0,quantity:{numeric:"0",decimals:e.metadata.decimals.toString()}},{chainNamespace:i}=P.ParseUtil.parseCaipNetworkId(t.chainId),r=t.address;if(A.CoreHelperUtil.isCaipAddress(r)){let{address:e}=P.ParseUtil.parseCaipAddress(r);r=e}return t.iconUrl=await a.AssetUtil.getImageByToken(r??"",i).catch(()=>void 0)??"",t}))},async fetchTokens({caipAddress:e,caipNetwork:t,namespace:i}){try{ek.isFetchingTokenBalances=!0;let r=ek.selectedExchange?this.fetchTokensFromExchange():this.fetchTokensFromEOA({caipAddress:e,caipNetwork:t,namespace:i}),n=await r;ek.tokenBalances={...ek.tokenBalances,[i]:n}}catch(t){let e=t instanceof Error?t.message:"Unable to get token balances";d.SnackController.showError(e)}finally{ek.isFetchingTokenBalances=!1}},async fetchQuote({amount:e,address:t,sourceToken:i,toToken:r,recipient:n}){try{eP.resetQuoteState(),ek.isFetchingQuote=!0;let a=await ed({amount:e,address:ek.selectedExchange?void 0:t,sourceToken:i,toToken:r,recipient:n});if(ek.selectedExchange){let e=et(a);if(e){let t=`${i.network}:${e.deposit.receiver}`,r=k.NumberUtil.formatNumber(e.deposit.amount,{decimals:i.metadata.decimals??0,round:8});await eP.generateExchangeUrlForQuote({exchangeId:ek.selectedExchange.id,paymentAsset:i,amount:r.toString(),recipient:t})}}ek.quote=a}catch(t){let e=W.UNABLE_TO_GET_QUOTE;if(t instanceof Error&&t.cause&&t.cause instanceof Response)try{let i=await t.cause.json();i.error&&"string"==typeof i.error&&(e=i.error)}catch{}throw ek.quoteError=e,d.SnackController.showError(e),new Q(F)}finally{ek.isFetchingQuote=!1}},async fetchQuoteStatus({requestId:e}){try{if(e===ex){let e=ek.selectedExchange,t=ek.exchangeSessionId;if(e&&t){switch((await this.getBuyStatus(e.id,t)).status){case"IN_PROGRESS":case"UNKNOWN":default:ek.quoteStatus="waiting";break;case"SUCCESS":ek.quoteStatus="success",ek.isPaymentInProgress=!1;break;case"FAILED":ek.quoteStatus="failure",ek.isPaymentInProgress=!1}return}ek.quoteStatus="success";return}let{status:t}=await ep({requestId:e});ek.quoteStatus=t}catch{throw ek.quoteStatus="failure",new Q(z)}},initiatePayment(){ek.isPaymentInProgress=!0,ek.paymentId=crypto.randomUUID()},initializeAnalytics(){ek.analyticsSet||(ek.analyticsSet=!0,this.subscribeKey("isPaymentInProgress",e=>{if(ek.currentPayment?.status&&"UNKNOWN"!==ek.currentPayment.status){let e={IN_PROGRESS:"PAY_INITIATED",SUCCESS:"PAY_SUCCESS",FAILED:"PAY_ERROR"}[ek.currentPayment.status];I.EventsController.sendEvent({type:"track",event:e,properties:{message:"FAILED"===ek.currentPayment.status?A.CoreHelperUtil.parseError(ek.error):void 0,source:"pay",paymentId:ek.paymentId||eb,configuration:{network:ek.paymentAsset.network,asset:ek.paymentAsset.asset,recipient:ek.recipient,amount:ek.amount},currentPayment:{type:ek.currentPayment.type,exchangeId:ek.currentPayment.exchangeId,sessionId:ek.currentPayment.sessionId,result:ek.currentPayment.result}}})}}))},async prepareTokenLogo(){if(!ek.paymentAsset.metadata.logoURI)try{let{chainNamespace:e}=P.ParseUtil.parseCaipNetworkId(ek.paymentAsset.network),t=await a.AssetUtil.getImageByToken(ek.paymentAsset.asset,e);ek.paymentAsset.metadata.logoURI=t}catch{}}},eA=y.css`
  wui-separator {
    margin: var(--apkt-spacing-3) calc(var(--apkt-spacing-3) * -1) var(--apkt-spacing-2)
      calc(var(--apkt-spacing-3) * -1);
    width: calc(100% + var(--apkt-spacing-3) * 2);
  }

  .token-display {
    padding: var(--apkt-spacing-3) var(--apkt-spacing-3);
    border-radius: var(--apkt-borderRadius-5);
    background-color: var(--apkt-tokens-theme-backgroundPrimary);
    margin-top: var(--apkt-spacing-3);
    margin-bottom: var(--apkt-spacing-3);
  }

  .token-display wui-text {
    text-transform: none;
  }

  wui-loading-spinner {
    padding: var(--apkt-spacing-2);
  }

  .left-image-container {
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .token-image {
    border-radius: ${({borderRadius:e})=>e.round};
    width: 40px;
    height: 40px;
  }

  .chain-image {
    position: absolute;
    width: 20px;
    height: 20px;
    bottom: -3px;
    right: -5px;
    border-radius: ${({borderRadius:e})=>e.round};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  .payment-methods-container {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-top-right-radius: ${({borderRadius:e})=>e[8]};
    border-top-left-radius: ${({borderRadius:e})=>e[8]};
  }
`;var eI=function(e,t,i,r){var n,a=arguments.length,s=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(s=(a<3?n(s):a>3?n(t,i,s):n(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let eE=class extends t.LitElement{constructor(){super(),this.unsubscribe=[],this.amount=eP.state.amount,this.namespace=void 0,this.paymentAsset=eP.state.paymentAsset,this.activeConnectorIds=l.ConnectorController.state.activeConnectorIds,this.caipAddress=void 0,this.exchanges=eP.state.exchanges,this.isLoading=eP.state.isLoading,this.initializeNamespace(),this.unsubscribe.push(eP.subscribeKey("amount",e=>this.amount=e)),this.unsubscribe.push(l.ConnectorController.subscribeKey("activeConnectorIds",e=>this.activeConnectorIds=e)),this.unsubscribe.push(eP.subscribeKey("exchanges",e=>this.exchanges=e)),this.unsubscribe.push(eP.subscribeKey("isLoading",e=>this.isLoading=e)),eP.fetchExchanges(),eP.setSelectedExchange(void 0)}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return i.html`
      <wui-flex flexDirection="column">
        ${this.paymentDetailsTemplate()} ${this.paymentMethodsTemplate()}
      </wui-flex>
    `}paymentMethodsTemplate(){return i.html`
      <wui-flex flexDirection="column" padding="3" gap="2" class="payment-methods-container">
        ${this.payWithWalletTemplate()} ${this.templateSeparator()}
        ${this.templateExchangeOptions()}
      </wui-flex>
    `}initializeNamespace(){let e=s.ChainController.state.activeChain;this.namespace=e,this.caipAddress=s.ChainController.getAccountData(e)?.caipAddress,this.unsubscribe.push(s.ChainController.subscribeChainProp("accountState",e=>{this.caipAddress=e?.caipAddress},e))}paymentDetailsTemplate(){let e=s.ChainController.getAllRequestedCaipNetworks().find(e=>e.caipNetworkId===this.paymentAsset.network);return i.html`
      <wui-flex
        alignItems="center"
        justifyContent="space-between"
        .padding=${["6","8","6","8"]}
        gap="2"
      >
        <wui-flex alignItems="center" gap="1">
          <wui-text variant="h1-regular" color="primary">
            ${ef(this.amount||"0")}
          </wui-text>

          <wui-flex flexDirection="column">
            <wui-text variant="h6-regular" color="secondary">
              ${this.paymentAsset.metadata.symbol||"Unknown"}
            </wui-text>
            <wui-text variant="md-medium" color="secondary"
              >on ${e?.name||"Unknown"}</wui-text
            >
          </wui-flex>
        </wui-flex>

        <wui-flex class="left-image-container">
          <wui-image
            src=${(0,n.ifDefined)(this.paymentAsset.metadata.logoURI)}
            class="token-image"
          ></wui-image>
          <wui-image
            src=${(0,n.ifDefined)(a.AssetUtil.getNetworkImage(e))}
            class="chain-image"
          ></wui-image>
        </wui-flex>
      </wui-flex>
    `}payWithWalletTemplate(){return!function(e){let{chainNamespace:t}=P.ParseUtil.parseCaipNetworkId(e);return em.includes(t)}(this.paymentAsset.network)?i.html``:this.caipAddress?this.connectedWalletTemplate():this.disconnectedWalletTemplate()}connectedWalletTemplate(){let{name:e,image:t}=this.getWalletProperties({namespace:this.namespace});return i.html`
      <wui-flex flexDirection="column" gap="3">
        <wui-list-item
          type="secondary"
          boxColor="foregroundSecondary"
          @click=${this.onWalletPayment}
          .boxed=${!1}
          ?chevron=${!0}
          ?fullSize=${!1}
          ?rounded=${!0}
          data-testid="wallet-payment-option"
          imageSrc=${(0,n.ifDefined)(t)}
          imageSize="3xl"
        >
          <wui-text variant="lg-regular" color="primary">Pay with ${e}</wui-text>
        </wui-list-item>

        <wui-list-item
          type="secondary"
          icon="power"
          iconColor="error"
          @click=${this.onDisconnect}
          data-testid="disconnect-button"
          ?chevron=${!1}
          boxColor="foregroundSecondary"
        >
          <wui-text variant="lg-regular" color="secondary">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `}disconnectedWalletTemplate(){return i.html`<wui-list-item
      type="secondary"
      boxColor="foregroundSecondary"
      variant="icon"
      iconColor="default"
      iconVariant="overlay"
      icon="wallet"
      @click=${this.onWalletPayment}
      ?chevron=${!0}
      data-testid="wallet-payment-option"
    >
      <wui-text variant="lg-regular" color="primary">Pay with wallet</wui-text>
    </wui-list-item>`}templateExchangeOptions(){if(this.isLoading)return i.html`<wui-flex justifyContent="center" alignItems="center">
        <wui-loading-spinner size="md"></wui-loading-spinner>
      </wui-flex>`;let e=this.exchanges.filter(e=>{var t;let i;return(t=this.paymentAsset,(i=s.ChainController.getAllRequestedCaipNetworks().find(e=>e.caipNetworkId===t.network))&&i.testnet)?e.id===G:e.id!==G});return 0===e.length?i.html`<wui-flex justifyContent="center" alignItems="center">
        <wui-text variant="md-medium" color="primary">No exchanges available</wui-text>
      </wui-flex>`:e.map(e=>i.html`
        <wui-list-item
          type="secondary"
          boxColor="foregroundSecondary"
          @click=${()=>this.onExchangePayment(e)}
          data-testid="exchange-option-${e.id}"
          ?chevron=${!0}
          imageSrc=${(0,n.ifDefined)(e.imageUrl)}
        >
          <wui-text flexGrow="1" variant="lg-regular" color="primary">
            Pay with ${e.name}
          </wui-text>
        </wui-list-item>
      `)}templateSeparator(){return i.html`<wui-separator text="or" bgColor="secondary"></wui-separator>`}async onWalletPayment(){if(!this.namespace)throw Error("Namespace not found");this.caipAddress?u.RouterController.push("PayQuote"):(await l.ConnectorController.connect(),await c.ModalController.open({view:"PayQuote"}))}onExchangePayment(e){eP.setSelectedExchange(e),u.RouterController.push("PayQuote")}async onDisconnect(){try{await o.ConnectionController.disconnect(),await c.ModalController.open({view:"Pay"})}catch{console.error("Failed to disconnect"),d.SnackController.showError("Failed to disconnect")}}getWalletProperties({namespace:e}){if(!e)return{name:void 0,image:void 0};let t=this.activeConnectorIds[e];if(!t)return{name:void 0,image:void 0};let i=l.ConnectorController.getConnector({id:t,namespace:e});if(!i)return{name:void 0,image:void 0};let r=a.AssetUtil.getConnectorImage(i);return{name:i.name,image:r}}};eE.styles=eA,eI([(0,r.state)()],eE.prototype,"amount",void 0),eI([(0,r.state)()],eE.prototype,"namespace",void 0),eI([(0,r.state)()],eE.prototype,"paymentAsset",void 0),eI([(0,r.state)()],eE.prototype,"activeConnectorIds",void 0),eI([(0,r.state)()],eE.prototype,"caipAddress",void 0),eI([(0,r.state)()],eE.prototype,"exchanges",void 0),eI([(0,r.state)()],eE.prototype,"isLoading",void 0),eE=eI([(0,p.customElement)("w3m-pay-view")],eE),e.s(["W3mPayView",0,eE],692613);var eS=t;e.i(474155);var e$=e.i(774363),eN=e.i(175848),eT=t;let eU=y.css`
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .pulse-container {
    position: relative;
    width: var(--pulse-size);
    height: var(--pulse-size);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pulse-rings {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .pulse-ring {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 2px solid var(--pulse-color);
    opacity: 0;
    animation: pulse var(--pulse-duration, 2s) ease-out infinite;
  }

  .pulse-content {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @keyframes pulse {
    0% {
      transform: scale(0.5);
      opacity: var(--pulse-opacity, 0.3);
    }
    50% {
      opacity: calc(var(--pulse-opacity, 0.3) * 0.5);
    }
    100% {
      transform: scale(1.2);
      opacity: 0;
    }
  }
`;var eR=function(e,t,i,r){var n,a=arguments.length,s=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(s=(a<3?n(s):a>3?n(t,i,s):n(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let eq={"accent-primary":y.vars.tokens.core.backgroundAccentPrimary},eO=class extends eT.LitElement{constructor(){super(...arguments),this.rings=3,this.duration=2,this.opacity=.3,this.size="200px",this.variant="accent-primary"}render(){let e=eq[this.variant];this.style.cssText=`
      --pulse-size: ${this.size};
      --pulse-duration: ${this.duration}s;
      --pulse-color: ${e};
      --pulse-opacity: ${this.opacity};
    `;let t=Array.from({length:this.rings},(e,t)=>this.renderRing(t,this.rings));return i.html`
      <div class="pulse-container">
        <div class="pulse-rings">${t}</div>
        <div class="pulse-content">
          <slot></slot>
        </div>
      </div>
    `}renderRing(e,t){let r=e/t*this.duration,n=`animation-delay: ${r}s;`;return i.html`<div class="pulse-ring" style=${n}></div>`}};eO.styles=[g.resetStyles,eU],eR([(0,m.property)({type:Number})],eO.prototype,"rings",void 0),eR([(0,m.property)({type:Number})],eO.prototype,"duration",void 0),eR([(0,m.property)({type:Number})],eO.prototype,"opacity",void 0),eR([(0,m.property)()],eO.prototype,"size",void 0),eR([(0,m.property)()],eO.prototype,"variant",void 0),eO=eR([(0,p.customElement)("wui-pulse")],eO);let eD=[{id:"received",title:"Receiving funds",icon:"dollar"},{id:"processing",title:"Swapping asset",icon:"recycleHorizontal"},{id:"sending",title:"Sending asset to the recipient address",icon:"send"}],e_=["success","submitted","failure","timeout","refund"],ej=y.css`
  :host {
    display: block;
    height: 100%;
    width: 100%;
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e.round};
  }

  .token-badge-container {
    position: absolute;
    bottom: 6px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: ${({borderRadius:e})=>e[4]};
    z-index: 3;
    min-width: 105px;
  }

  .token-badge-container.loading {
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border: 3px solid ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  .token-badge-container.success {
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border: 3px solid ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  .token-image-container {
    position: relative;
  }

  .token-image {
    border-radius: ${({borderRadius:e})=>e.round};
    width: 64px;
    height: 64px;
  }

  .token-image.success {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .token-image.error {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .token-image.loading {
    background: ${({colors:e})=>e.accent010};
  }

  .token-image wui-icon {
    width: 32px;
    height: 32px;
  }

  .token-badge {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border: 1px solid ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  .token-badge wui-text {
    white-space: nowrap;
  }

  .payment-lifecycle-container {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-top-right-radius: ${({borderRadius:e})=>e[6]};
    border-top-left-radius: ${({borderRadius:e})=>e[6]};
  }

  .payment-step-badge {
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[1]};
  }

  .payment-step-badge.loading {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  .payment-step-badge.error {
    background-color: ${({tokens:e})=>e.core.backgroundError};
  }

  .payment-step-badge.success {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
  }

  .step-icon-container {
    position: relative;
    height: 40px;
    width: 40px;
    border-radius: ${({borderRadius:e})=>e.round};
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  .step-icon-box {
    position: absolute;
    right: -4px;
    bottom: -1px;
    padding: 2px;
    border-radius: ${({borderRadius:e})=>e.round};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .step-icon-box.success {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
  }
`;var eL=function(e,t,i,r){var n,a=arguments.length,s=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(s=(a<3?n(s):a>3?n(t,i,s):n(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let eF={received:["pending","success","submitted"],processing:["success","submitted"],sending:["success","submitted"]},ez=class extends eS.LitElement{constructor(){super(),this.unsubscribe=[],this.pollingInterval=null,this.paymentAsset=eP.state.paymentAsset,this.quoteStatus=eP.state.quoteStatus,this.quote=eP.state.quote,this.amount=eP.state.amount,this.namespace=void 0,this.caipAddress=void 0,this.profileName=null,this.activeConnectorIds=l.ConnectorController.state.activeConnectorIds,this.selectedExchange=eP.state.selectedExchange,this.initializeNamespace(),this.unsubscribe.push(eP.subscribeKey("quoteStatus",e=>this.quoteStatus=e),eP.subscribeKey("quote",e=>this.quote=e),l.ConnectorController.subscribeKey("activeConnectorIds",e=>this.activeConnectorIds=e),eP.subscribeKey("selectedExchange",e=>this.selectedExchange=e))}connectedCallback(){super.connectedCallback(),this.startPolling()}disconnectedCallback(){super.disconnectedCallback(),this.stopPolling(),this.unsubscribe.forEach(e=>e())}render(){return i.html`
      <wui-flex flexDirection="column" .padding=${["3","0","0","0"]} gap="2">
        ${this.tokenTemplate()} ${this.paymentTemplate()} ${this.paymentLifecycleTemplate()}
      </wui-flex>
    `}tokenTemplate(){let e=ef(this.amount||"0"),t=this.paymentAsset.metadata.symbol??"Unknown",r=s.ChainController.getAllRequestedCaipNetworks().find(e=>e.caipNetworkId===this.paymentAsset.network),o="failure"===this.quoteStatus||"timeout"===this.quoteStatus||"refund"===this.quoteStatus;return"success"===this.quoteStatus||"submitted"===this.quoteStatus?i.html`<wui-flex alignItems="center" justifyContent="center">
        <wui-flex justifyContent="center" alignItems="center" class="token-image success">
          <wui-icon name="checkmark" color="success" size="inherit"></wui-icon>
        </wui-flex>
      </wui-flex>`:o?i.html`<wui-flex alignItems="center" justifyContent="center">
        <wui-flex justifyContent="center" alignItems="center" class="token-image error">
          <wui-icon name="close" color="error" size="inherit"></wui-icon>
        </wui-flex>
      </wui-flex>`:i.html`
      <wui-flex alignItems="center" justifyContent="center">
        <wui-flex class="token-image-container">
          <wui-pulse size="125px" rings="3" duration="4" opacity="0.5" variant="accent-primary">
            <wui-flex justifyContent="center" alignItems="center" class="token-image loading">
              <wui-icon name="paperPlaneTitle" color="accent-primary" size="inherit"></wui-icon>
            </wui-flex>
          </wui-pulse>

          <wui-flex
            justifyContent="center"
            alignItems="center"
            class="token-badge-container loading"
          >
            <wui-flex
              alignItems="center"
              justifyContent="center"
              gap="01"
              padding="1"
              class="token-badge"
            >
              <wui-image
                src=${(0,n.ifDefined)(a.AssetUtil.getNetworkImage(r))}
                class="chain-image"
                size="mdl"
              ></wui-image>

              <wui-text variant="lg-regular" color="primary">${e} ${t}</wui-text>
            </wui-flex>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}paymentTemplate(){return i.html`
      <wui-flex flexDirection="column" gap="2" .padding=${["0","6","0","6"]}>
        ${this.renderPayment()}
        <wui-separator></wui-separator>
        ${this.renderWallet()}
      </wui-flex>
    `}paymentLifecycleTemplate(){let e=this.getStepsWithStatus();return i.html`
      <wui-flex flexDirection="column" padding="4" gap="2" class="payment-lifecycle-container">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">PAYMENT CYCLE</wui-text>

          ${this.renderPaymentCycleBadge()}
        </wui-flex>

        <wui-flex flexDirection="column" gap="5" .padding=${["2","0","2","0"]}>
          ${e.map(e=>this.renderStep(e))}
        </wui-flex>
      </wui-flex>
    `}renderPaymentCycleBadge(){let e="failure"===this.quoteStatus||"timeout"===this.quoteStatus||"refund"===this.quoteStatus,t="success"===this.quoteStatus||"submitted"===this.quoteStatus;if(e)return i.html`
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge error"
          gap="1"
        >
          <wui-icon name="close" color="error" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="error">Failed</wui-text>
        </wui-flex>
      `;if(t)return i.html`
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge success"
          gap="1"
        >
          <wui-icon name="checkmark" color="success" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="success">Completed</wui-text>
        </wui-flex>
      `;let r=this.quote?.timeInSeconds??0;return i.html`
      <wui-flex alignItems="center" justifyContent="space-between" gap="3">
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge loading"
          gap="1"
        >
          <wui-icon name="clock" color="default" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="primary">Est. ${r} sec</wui-text>
        </wui-flex>

        <wui-icon name="chevronBottom" color="default" size="xxs"></wui-icon>
      </wui-flex>
    `}renderPayment(){let e=s.ChainController.getAllRequestedCaipNetworks().find(e=>{let t=this.quote?.origin.currency.network;if(!t)return!1;let{chainId:i}=P.ParseUtil.parseCaipNetworkId(t);return S.HelpersUtil.isLowerCaseMatch(e.id.toString(),i.toString())}),t=ef(k.NumberUtil.formatNumber(this.quote?.origin.amount||"0",{decimals:this.quote?.origin.currency.metadata.decimals??0}).toString()),r=this.quote?.origin.currency.metadata.symbol??"Unknown";return i.html`
      <wui-flex
        alignItems="flex-start"
        justifyContent="space-between"
        .padding=${["3","0","3","0"]}
      >
        <wui-text variant="lg-regular" color="secondary">Payment Method</wui-text>

        <wui-flex flexDirection="column" alignItems="flex-end" gap="1">
          <wui-flex alignItems="center" gap="01">
            <wui-text variant="lg-regular" color="primary">${t}</wui-text>
            <wui-text variant="lg-regular" color="secondary">${r}</wui-text>
          </wui-flex>

          <wui-flex alignItems="center" gap="1">
            <wui-text variant="md-regular" color="secondary">on</wui-text>
            <wui-image
              src=${(0,n.ifDefined)(a.AssetUtil.getNetworkImage(e))}
              size="xs"
            ></wui-image>
            <wui-text variant="md-regular" color="secondary">${e?.name}</wui-text>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}renderWallet(){return i.html`
      <wui-flex
        alignItems="flex-start"
        justifyContent="space-between"
        .padding=${["3","0","3","0"]}
      >
        <wui-text variant="lg-regular" color="secondary"
          >${this.selectedExchange?"Exchange":"Wallet"}</wui-text
        >

        ${this.renderWalletText()}
      </wui-flex>
    `}renderWalletText(){let{image:e}=this.getWalletProperties({namespace:this.namespace}),{address:t}=this.caipAddress?P.ParseUtil.parseCaipAddress(this.caipAddress):{},r=this.selectedExchange?.name;return this.selectedExchange?i.html`
        <wui-flex alignItems="center" justifyContent="flex-end" gap="1">
          <wui-text variant="lg-regular" color="primary">${r}</wui-text>
          <wui-image src=${(0,n.ifDefined)(this.selectedExchange.imageUrl)} size="mdl"></wui-image>
        </wui-flex>
      `:i.html`
      <wui-flex alignItems="center" justifyContent="flex-end" gap="1">
        <wui-text variant="lg-regular" color="primary">
          ${eN.UiHelperUtil.getTruncateString({string:this.profileName||t||r||"",charsStart:this.profileName?16:4,charsEnd:6*!this.profileName,truncate:this.profileName?"end":"middle"})}
        </wui-text>

        <wui-image src=${(0,n.ifDefined)(e)} size="mdl"></wui-image>
      </wui-flex>
    `}getStepsWithStatus(){return"failure"===this.quoteStatus||"timeout"===this.quoteStatus||"refund"===this.quoteStatus?eD.map(e=>({...e,status:"failed"})):eD.map(e=>{let t=(eF[e.id]??[]).includes(this.quoteStatus)?"completed":"pending";return{...e,status:t}})}renderStep({title:e,icon:t,status:r}){return i.html`
      <wui-flex alignItems="center" gap="3">
        <wui-flex justifyContent="center" alignItems="center" class="step-icon-container">
          <wui-icon name=${t} color="default" size="mdl"></wui-icon>

          <wui-flex alignItems="center" justifyContent="center" class=${(0,e$.classMap)({"step-icon-box":!0,success:"completed"===r})}>
            ${this.renderStatusIndicator(r)}
          </wui-flex>
        </wui-flex>

        <wui-text variant="md-regular" color="primary">${e}</wui-text>
      </wui-flex>
    `}renderStatusIndicator(e){return"completed"===e?i.html`<wui-icon size="sm" color="success" name="checkmark"></wui-icon>`:"failed"===e?i.html`<wui-icon size="sm" color="error" name="close"></wui-icon>`:"pending"===e?i.html`<wui-loading-spinner color="accent-primary" size="sm"></wui-loading-spinner>`:null}startPolling(){this.pollingInterval||(this.fetchQuoteStatus(),this.pollingInterval=setInterval(()=>{this.fetchQuoteStatus()},3e3))}stopPolling(){this.pollingInterval&&(clearInterval(this.pollingInterval),this.pollingInterval=null)}async fetchQuoteStatus(){let e=eP.state.requestId;if(!e||e_.includes(this.quoteStatus))this.stopPolling();else try{await eP.fetchQuoteStatus({requestId:e}),e_.includes(this.quoteStatus)&&this.stopPolling()}catch{this.stopPolling()}}initializeNamespace(){let e=s.ChainController.state.activeChain;this.namespace=e,this.caipAddress=s.ChainController.getAccountData(e)?.caipAddress,this.profileName=s.ChainController.getAccountData(e)?.profileName??null,this.unsubscribe.push(s.ChainController.subscribeChainProp("accountState",e=>{this.caipAddress=e?.caipAddress,this.profileName=e?.profileName??null},e))}getWalletProperties({namespace:e}){if(!e)return{name:void 0,image:void 0};let t=this.activeConnectorIds[e];if(!t)return{name:void 0,image:void 0};let i=l.ConnectorController.getConnector({id:t,namespace:e});if(!i)return{name:void 0,image:void 0};let r=a.AssetUtil.getConnectorImage(i);return{name:i.name,image:r}}};ez.styles=ej,eL([(0,r.state)()],ez.prototype,"paymentAsset",void 0),eL([(0,r.state)()],ez.prototype,"quoteStatus",void 0),eL([(0,r.state)()],ez.prototype,"quote",void 0),eL([(0,r.state)()],ez.prototype,"amount",void 0),eL([(0,r.state)()],ez.prototype,"namespace",void 0),eL([(0,r.state)()],ez.prototype,"caipAddress",void 0),eL([(0,r.state)()],ez.prototype,"profileName",void 0),eL([(0,r.state)()],ez.prototype,"activeConnectorIds",void 0),eL([(0,r.state)()],ez.prototype,"selectedExchange",void 0),ez=eL([(0,p.customElement)("w3m-pay-loading-view")],ez),e.s(["W3mPayLoadingView",0,ez],256606);var eB=t;e.i(275310);var eW=t;e.i(435269);var eQ=e.i(861041);let eM=eQ.css`
  :host {
    display: block;
  }
`,eH=class extends eW.LitElement{render(){return i.html`
      <wui-flex flexDirection="column" gap="4">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Pay</wui-text>
          <wui-shimmer width="60px" height="16px" borderRadius="4xs" variant="light"></wui-shimmer>
        </wui-flex>

        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Network Fee</wui-text>

          <wui-flex flexDirection="column" alignItems="flex-end" gap="2">
            <wui-shimmer
              width="75px"
              height="16px"
              borderRadius="4xs"
              variant="light"
            ></wui-shimmer>

            <wui-flex alignItems="center" gap="01">
              <wui-shimmer width="14px" height="14px" rounded variant="light"></wui-shimmer>
              <wui-shimmer
                width="49px"
                height="14px"
                borderRadius="4xs"
                variant="light"
              ></wui-shimmer>
            </wui-flex>
          </wui-flex>
        </wui-flex>

        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Service Fee</wui-text>
          <wui-shimmer width="75px" height="16px" borderRadius="4xs" variant="light"></wui-shimmer>
        </wui-flex>
      </wui-flex>
    `}};eH.styles=[eM],eH=function(e,t,i,r){var n,a=arguments.length,s=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(s=(a<3?n(s):a>3?n(t,i,s):n(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s}([(0,p.customElement)("w3m-pay-fees-skeleton")],eH);var eK=t;let eG=y.css`
  :host {
    display: block;
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e.round};
  }
`;var eY=function(e,t,i,r){var n,a=arguments.length,s=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(s=(a<3?n(s):a>3?n(t,i,s):n(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let eV=class extends eK.LitElement{constructor(){super(),this.unsubscribe=[],this.quote=eP.state.quote,this.unsubscribe.push(eP.subscribeKey("quote",e=>this.quote=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=k.NumberUtil.formatNumber(this.quote?.origin.amount||"0",{decimals:this.quote?.origin.currency.metadata.decimals??0,round:6}).toString();return i.html`
      <wui-flex flexDirection="column" gap="4">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Pay</wui-text>
          <wui-text variant="md-regular" color="primary">
            ${e} ${this.quote?.origin.currency.metadata.symbol||"Unknown"}
          </wui-text>
        </wui-flex>

        ${this.quote&&this.quote.fees.length>0?this.quote.fees.map(e=>this.renderFee(e)):null}
      </wui-flex>
    `}renderFee(e){let t="network"===e.id,r=k.NumberUtil.formatNumber(e.amount||"0",{decimals:e.currency.metadata.decimals??0,round:6}).toString();if(t){let t=s.ChainController.getAllRequestedCaipNetworks().find(t=>S.HelpersUtil.isLowerCaseMatch(t.caipNetworkId,e.currency.network));return i.html`
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">${e.label}</wui-text>

          <wui-flex flexDirection="column" alignItems="flex-end" gap="2">
            <wui-text variant="md-regular" color="primary">
              ${r} ${e.currency.metadata.symbol||"Unknown"}
            </wui-text>

            <wui-flex alignItems="center" gap="01">
              <wui-image
                src=${(0,n.ifDefined)(a.AssetUtil.getNetworkImage(t))}
                size="xs"
              ></wui-image>
              <wui-text variant="sm-regular" color="secondary">
                ${t?.name||"Unknown"}
              </wui-text>
            </wui-flex>
          </wui-flex>
        </wui-flex>
      `}return i.html`
      <wui-flex alignItems="center" justifyContent="space-between">
        <wui-text variant="md-regular" color="secondary">${e.label}</wui-text>
        <wui-text variant="md-regular" color="primary">
          ${r} ${e.currency.metadata.symbol||"Unknown"}
        </wui-text>
      </wui-flex>
    `}};eV.styles=[eG],eY([(0,r.state)()],eV.prototype,"quote",void 0),eV=eY([(0,p.customElement)("w3m-pay-fees")],eV);var eX=t;let eJ=y.css`
  :host {
    display: block;
    width: 100%;
  }

  .disabled-container {
    padding: ${({spacing:e})=>e[2]};
    min-height: 168px;
  }

  wui-icon {
    width: ${({spacing:e})=>e[8]};
    height: ${({spacing:e})=>e[8]};
  }

  wui-flex > wui-text {
    max-width: 273px;
  }
`;var eZ=function(e,t,i,r){var n,a=arguments.length,s=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(s=(a<3?n(s):a>3?n(t,i,s):n(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let e0=class extends eX.LitElement{constructor(){super(),this.unsubscribe=[],this.selectedExchange=eP.state.selectedExchange,this.unsubscribe.push(eP.subscribeKey("selectedExchange",e=>this.selectedExchange=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=!!this.selectedExchange;return i.html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="3"
        class="disabled-container"
      >
        <wui-icon name="coins" color="default" size="inherit"></wui-icon>

        <wui-text variant="md-regular" color="primary" align="center">
          You don't have enough funds to complete this transaction
        </wui-text>

        ${e?null:i.html`<wui-button
              size="md"
              variant="neutral-secondary"
              @click=${this.dispatchConnectOtherWalletEvent.bind(this)}
              >Connect other wallet</wui-button
            >`}
      </wui-flex>
    `}dispatchConnectOtherWalletEvent(){this.dispatchEvent(new CustomEvent("connectOtherWallet",{detail:!0,bubbles:!0,composed:!0}))}};e0.styles=[eJ],eZ([(0,m.property)({type:Array})],e0.prototype,"selectedExchange",void 0),e0=eZ([(0,p.customElement)("w3m-pay-options-empty")],e0);var e1=t;let e3=y.css`
  :host {
    display: block;
    width: 100%;
  }

  .pay-options-container {
    max-height: 196px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .pay-options-container::-webkit-scrollbar {
    display: none;
  }

  .pay-option-container {
    border-radius: ${({borderRadius:e})=>e[4]};
    padding: ${({spacing:e})=>e[3]};
    min-height: 60px;
  }

  .token-images-container {
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .chain-image {
    position: absolute;
    bottom: -3px;
    right: -5px;
    border: 2px solid ${({tokens:e})=>e.theme.foregroundSecondary};
  }
`,e2=class extends e1.LitElement{render(){return i.html`
      <wui-flex flexDirection="column" gap="2" class="pay-options-container">
        ${this.renderOptionEntry()} ${this.renderOptionEntry()} ${this.renderOptionEntry()}
      </wui-flex>
    `}renderOptionEntry(){return i.html`
      <wui-flex
        alignItems="center"
        justifyContent="space-between"
        gap="2"
        class="pay-option-container"
      >
        <wui-flex alignItems="center" gap="2">
          <wui-flex class="token-images-container">
            <wui-shimmer
              width="32px"
              height="32px"
              rounded
              variant="light"
              class="token-image"
            ></wui-shimmer>
            <wui-shimmer
              width="16px"
              height="16px"
              rounded
              variant="light"
              class="chain-image"
            ></wui-shimmer>
          </wui-flex>

          <wui-flex flexDirection="column" gap="1">
            <wui-shimmer
              width="74px"
              height="16px"
              borderRadius="4xs"
              variant="light"
            ></wui-shimmer>
            <wui-shimmer
              width="46px"
              height="14px"
              borderRadius="4xs"
              variant="light"
            ></wui-shimmer>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}};e2.styles=[e3],e2=function(e,t,i,r){var n,a=arguments.length,s=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(s=(a<3?n(s):a>3?n(t,i,s):n(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s}([(0,p.customElement)("w3m-pay-options-skeleton")],e2);var e5=t,e4=e.i(404213);let e6=y.css`
  :host {
    display: block;
    width: 100%;
  }

  .pay-options-container {
    max-height: 196px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    mask-image: var(--options-mask-image);
    -webkit-mask-image: var(--options-mask-image);
  }

  .pay-options-container::-webkit-scrollbar {
    display: none;
  }

  .pay-option-container {
    cursor: pointer;
    border-radius: ${({borderRadius:e})=>e[4]};
    padding: ${({spacing:e})=>e[3]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-1"]};
    will-change: background-color;
  }

  .token-images-container {
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .token-image {
    border-radius: ${({borderRadius:e})=>e.round};
    width: 32px;
    height: 32px;
  }

  .chain-image {
    position: absolute;
    width: 16px;
    height: 16px;
    bottom: -3px;
    right: -5px;
    border-radius: ${({borderRadius:e})=>e.round};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  @media (hover: hover) and (pointer: fine) {
    .pay-option-container:hover {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }
`;var e8=function(e,t,i,r){var n,a=arguments.length,s=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(s=(a<3?n(s):a>3?n(t,i,s):n(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let e7=class extends e5.LitElement{constructor(){super(),this.unsubscribe=[],this.options=[],this.selectedPaymentAsset=null}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.resizeObserver?.disconnect();let e=this.shadowRoot?.querySelector(".pay-options-container");e?.removeEventListener("scroll",this.handleOptionsListScroll.bind(this))}firstUpdated(){let e=this.shadowRoot?.querySelector(".pay-options-container");e&&(requestAnimationFrame(this.handleOptionsListScroll.bind(this)),e?.addEventListener("scroll",this.handleOptionsListScroll.bind(this)),this.resizeObserver=new ResizeObserver(()=>{this.handleOptionsListScroll()}),this.resizeObserver?.observe(e),this.handleOptionsListScroll())}render(){return i.html`
      <wui-flex flexDirection="column" gap="2" class="pay-options-container">
        ${this.options.map(e=>this.payOptionTemplate(e))}
      </wui-flex>
    `}payOptionTemplate(e){let{network:t,metadata:r,asset:o,amount:l="0"}=e,c=s.ChainController.getAllRequestedCaipNetworks().find(e=>e.caipNetworkId===t),u=`${t}:${o}`,d=`${this.selectedPaymentAsset?.network}:${this.selectedPaymentAsset?.asset}`,p=k.NumberUtil.bigNumber(l,{safe:!0}),h=p.gt(0);return i.html`
      <wui-flex
        alignItems="center"
        justifyContent="space-between"
        gap="2"
        @click=${()=>this.onSelect?.(e)}
        class="pay-option-container"
      >
        <wui-flex alignItems="center" gap="2">
          <wui-flex class="token-images-container">
            <wui-image
              src=${(0,n.ifDefined)(r.logoURI)}
              class="token-image"
              size="3xl"
            ></wui-image>
            <wui-image
              src=${(0,n.ifDefined)(a.AssetUtil.getNetworkImage(c))}
              class="chain-image"
              size="md"
            ></wui-image>
          </wui-flex>

          <wui-flex flexDirection="column" gap="1">
            <wui-text variant="lg-regular" color="primary">${r.symbol}</wui-text>
            ${h?i.html`<wui-text variant="sm-regular" color="secondary">
                  ${p.round(6).toString()} ${r.symbol}
                </wui-text>`:null}
          </wui-flex>
        </wui-flex>

        ${u===d?i.html`<wui-icon name="checkmark" size="md" color="success"></wui-icon>`:null}
      </wui-flex>
    `}handleOptionsListScroll(){let e=this.shadowRoot?.querySelector(".pay-options-container");e&&(e.scrollHeight>300?(e.style.setProperty("--options-mask-image",`linear-gradient(
          to bottom,
          rgba(0, 0, 0, calc(1 - var(--options-scroll--top-opacity))) 0px,
          rgba(200, 200, 200, calc(1 - var(--options-scroll--top-opacity))) 1px,
          black 50px,
          black calc(100% - 50px),
          rgba(155, 155, 155, calc(1 - var(--options-scroll--bottom-opacity))) calc(100% - 1px),
          rgba(0, 0, 0, calc(1 - var(--options-scroll--bottom-opacity))) 100%
        )`),e.style.setProperty("--options-scroll--top-opacity",e4.MathUtil.interpolate([0,50],[0,1],e.scrollTop).toString()),e.style.setProperty("--options-scroll--bottom-opacity",e4.MathUtil.interpolate([0,50],[0,1],e.scrollHeight-e.scrollTop-e.offsetHeight).toString())):(e.style.setProperty("--options-mask-image","none"),e.style.setProperty("--options-scroll--top-opacity","0"),e.style.setProperty("--options-scroll--bottom-opacity","0")))}};e7.styles=[e6],e8([(0,m.property)({type:Array})],e7.prototype,"options",void 0),e8([(0,m.property)()],e7.prototype,"selectedPaymentAsset",void 0),e8([(0,m.property)()],e7.prototype,"onSelect",void 0),e7=e8([(0,p.customElement)("w3m-pay-options")],e7);let e9=y.css`
  .payment-methods-container {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-top-right-radius: ${({borderRadius:e})=>e[5]};
    border-top-left-radius: ${({borderRadius:e})=>e[5]};
  }

  .pay-options-container {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[5]};
    padding: ${({spacing:e})=>e[1]};
  }

  w3m-tooltip-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: fit-content;
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e.round};
  }

  w3m-pay-options.disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;var te=function(e,t,i,r){var n,a=arguments.length,s=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(s=(a<3?n(s):a>3?n(t,i,s):n(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let tt={eip155:{icon:"ethereum",label:"EVM"},solana:{icon:"solana",label:"Solana"},bip122:{icon:"bitcoin",label:"Bitcoin"},ton:{icon:"ton",label:"Ton"}},ti=class extends eB.LitElement{constructor(){super(),this.unsubscribe=[],this.profileName=null,this.paymentAsset=eP.state.paymentAsset,this.namespace=void 0,this.caipAddress=void 0,this.amount=eP.state.amount,this.recipient=eP.state.recipient,this.activeConnectorIds=l.ConnectorController.state.activeConnectorIds,this.selectedPaymentAsset=eP.state.selectedPaymentAsset,this.selectedExchange=eP.state.selectedExchange,this.isFetchingQuote=eP.state.isFetchingQuote,this.quoteError=eP.state.quoteError,this.quote=eP.state.quote,this.isFetchingTokenBalances=eP.state.isFetchingTokenBalances,this.tokenBalances=eP.state.tokenBalances,this.isPaymentInProgress=eP.state.isPaymentInProgress,this.exchangeUrlForQuote=eP.state.exchangeUrlForQuote,this.completedTransactionsCount=0,this.unsubscribe.push(eP.subscribeKey("paymentAsset",e=>this.paymentAsset=e)),this.unsubscribe.push(eP.subscribeKey("tokenBalances",e=>this.onTokenBalancesChanged(e))),this.unsubscribe.push(eP.subscribeKey("isFetchingTokenBalances",e=>this.isFetchingTokenBalances=e)),this.unsubscribe.push(l.ConnectorController.subscribeKey("activeConnectorIds",e=>this.activeConnectorIds=e)),this.unsubscribe.push(eP.subscribeKey("selectedPaymentAsset",e=>this.selectedPaymentAsset=e)),this.unsubscribe.push(eP.subscribeKey("isFetchingQuote",e=>this.isFetchingQuote=e)),this.unsubscribe.push(eP.subscribeKey("quoteError",e=>this.quoteError=e)),this.unsubscribe.push(eP.subscribeKey("quote",e=>this.quote=e)),this.unsubscribe.push(eP.subscribeKey("amount",e=>this.amount=e)),this.unsubscribe.push(eP.subscribeKey("recipient",e=>this.recipient=e)),this.unsubscribe.push(eP.subscribeKey("isPaymentInProgress",e=>this.isPaymentInProgress=e)),this.unsubscribe.push(eP.subscribeKey("selectedExchange",e=>this.selectedExchange=e)),this.unsubscribe.push(eP.subscribeKey("exchangeUrlForQuote",e=>this.exchangeUrlForQuote=e)),this.resetQuoteState(),this.initializeNamespace(),this.fetchTokens()}disconnectedCallback(){super.disconnectedCallback(),this.resetAssetsState(),this.unsubscribe.forEach(e=>e())}updated(e){super.updated(e),e.has("selectedPaymentAsset")&&this.fetchQuote()}render(){return i.html`
      <wui-flex flexDirection="column">
        ${this.profileTemplate()}

        <wui-flex
          flexDirection="column"
          gap="4"
          class="payment-methods-container"
          .padding=${["4","4","5","4"]}
        >
          ${this.paymentOptionsViewTemplate()} ${this.amountWithFeeTemplate()}

          <wui-flex
            alignItems="center"
            justifyContent="space-between"
            .padding=${["1","0","1","0"]}
          >
            <wui-separator></wui-separator>
          </wui-flex>

          ${this.paymentActionsTemplate()}
        </wui-flex>
      </wui-flex>
    `}profileTemplate(){if(this.selectedExchange){let e=k.NumberUtil.formatNumber(this.quote?.origin.amount,{decimals:this.quote?.origin.currency.metadata.decimals??0}).toString();return i.html`
        <wui-flex
          .padding=${["4","3","4","3"]}
          alignItems="center"
          justifyContent="space-between"
          gap="2"
        >
          <wui-text variant="lg-regular" color="secondary">Paying with</wui-text>

          ${this.quote?i.html`<wui-text variant="lg-regular" color="primary">
                ${k.NumberUtil.bigNumber(e,{safe:!0}).round(6).toString()}
                ${this.quote.origin.currency.metadata.symbol}
              </wui-text>`:i.html`<wui-shimmer width="80px" height="18px" variant="light"></wui-shimmer>`}
        </wui-flex>
      `}let e=A.CoreHelperUtil.getPlainAddress(this.caipAddress)??"",{name:t,image:r}=this.getWalletProperties({namespace:this.namespace}),{icon:a,label:s}=tt[this.namespace]??{};return i.html`
      <wui-flex
        .padding=${["4","3","4","3"]}
        alignItems="center"
        justifyContent="space-between"
        gap="2"
      >
        <wui-wallet-switch
          profileName=${(0,n.ifDefined)(this.profileName)}
          address=${(0,n.ifDefined)(e)}
          imageSrc=${(0,n.ifDefined)(r)}
          alt=${(0,n.ifDefined)(t)}
          @click=${this.onConnectOtherWallet.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>

        <wui-wallet-switch
          profileName=${(0,n.ifDefined)(s)}
          address=${(0,n.ifDefined)(e)}
          icon=${(0,n.ifDefined)(a)}
          iconSize="xs"
          .enableGreenCircle=${!1}
          alt=${(0,n.ifDefined)(s)}
          @click=${this.onConnectOtherWallet.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>
      </wui-flex>
    `}initializeNamespace(){let e=s.ChainController.state.activeChain;this.namespace=e,this.caipAddress=s.ChainController.getAccountData(e)?.caipAddress,this.profileName=s.ChainController.getAccountData(e)?.profileName??null,this.unsubscribe.push(s.ChainController.subscribeChainProp("accountState",e=>this.onAccountStateChanged(e),e))}async fetchTokens(){if(this.namespace){let e;if(this.caipAddress){let{chainId:t,chainNamespace:i}=P.ParseUtil.parseCaipAddress(this.caipAddress),r=`${i}:${t}`;e=s.ChainController.getAllRequestedCaipNetworks().find(e=>e.caipNetworkId===r)}await eP.fetchTokens({caipAddress:this.caipAddress,caipNetwork:e,namespace:this.namespace})}}fetchQuote(){if(this.amount&&this.recipient&&this.selectedPaymentAsset&&this.paymentAsset){let{address:e}=this.caipAddress?P.ParseUtil.parseCaipAddress(this.caipAddress):{};eP.fetchQuote({amount:this.amount.toString(),address:e,sourceToken:this.selectedPaymentAsset,toToken:this.paymentAsset,recipient:this.recipient})}}getWalletProperties({namespace:e}){if(!e)return{name:void 0,image:void 0};let t=this.activeConnectorIds[e];if(!t)return{name:void 0,image:void 0};let i=l.ConnectorController.getConnector({id:t,namespace:e});if(!i)return{name:void 0,image:void 0};let r=a.AssetUtil.getConnectorImage(i);return{name:i.name,image:r}}paymentOptionsViewTemplate(){return i.html`
      <wui-flex flexDirection="column" gap="2">
        <wui-text variant="sm-regular" color="secondary">CHOOSE PAYMENT OPTION</wui-text>
        <wui-flex class="pay-options-container">${this.paymentOptionsTemplate()}</wui-flex>
      </wui-flex>
    `}paymentOptionsTemplate(){let e=this.getPaymentAssetFromTokenBalances();if(this.isFetchingTokenBalances)return i.html`<w3m-pay-options-skeleton></w3m-pay-options-skeleton>`;if(0===e.length)return i.html`<w3m-pay-options-empty
        @connectOtherWallet=${this.onConnectOtherWallet.bind(this)}
      ></w3m-pay-options-empty>`;let t={disabled:this.isFetchingQuote};return i.html`<w3m-pay-options
      class=${(0,e$.classMap)(t)}
      .options=${e}
      .selectedPaymentAsset=${(0,n.ifDefined)(this.selectedPaymentAsset)}
      .onSelect=${this.onSelectedPaymentAssetChanged.bind(this)}
    ></w3m-pay-options>`}amountWithFeeTemplate(){return this.isFetchingQuote||!this.selectedPaymentAsset||this.quoteError?i.html`<w3m-pay-fees-skeleton></w3m-pay-fees-skeleton>`:i.html`<w3m-pay-fees></w3m-pay-fees>`}paymentActionsTemplate(){let e=this.isFetchingQuote||this.isFetchingTokenBalances,t=this.isFetchingQuote||this.isFetchingTokenBalances||!this.selectedPaymentAsset||!!this.quoteError,r=k.NumberUtil.formatNumber(this.quote?.origin.amount??0,{decimals:this.quote?.origin.currency.metadata.decimals??0}).toString();return this.selectedExchange?e||t?i.html`
          <wui-shimmer width="100%" height="48px" variant="light" ?rounded=${!0}></wui-shimmer>
        `:i.html`<wui-button
        size="lg"
        fullWidth
        variant="accent-secondary"
        @click=${this.onPayWithExchange.bind(this)}
      >
        ${`Continue in ${this.selectedExchange.name}`}

        <wui-icon name="arrowRight" color="inherit" size="sm" slot="iconRight"></wui-icon>
      </wui-button>`:i.html`
      <wui-flex alignItems="center" justifyContent="space-between">
        <wui-flex flexDirection="column" gap="1">
          <wui-text variant="md-regular" color="secondary">Order Total</wui-text>

          ${e||t?i.html`<wui-shimmer width="58px" height="32px" variant="light"></wui-shimmer>`:i.html`<wui-flex alignItems="center" gap="01">
                <wui-text variant="h4-regular" color="primary">${ef(r)}</wui-text>

                <wui-text variant="lg-regular" color="secondary">
                  ${this.quote?.origin.currency.metadata.symbol||"Unknown"}
                </wui-text>
              </wui-flex>`}
        </wui-flex>

        ${this.actionButtonTemplate({isLoading:e,isDisabled:t})}
      </wui-flex>
    `}actionButtonTemplate(e){let t=ei(this.quote),{isLoading:r,isDisabled:n}=e,a="Pay";return t.length>1&&0===this.completedTransactionsCount&&(a="Approve"),i.html`
      <wui-button
        size="lg"
        variant="accent-primary"
        ?loading=${r||this.isPaymentInProgress}
        ?disabled=${n||this.isPaymentInProgress}
        @click=${()=>{t.length>0?this.onSendTransactions():this.onTransfer()}}
      >
        ${a}
        ${r?null:i.html`<wui-icon
              name="arrowRight"
              color="inherit"
              size="sm"
              slot="iconRight"
            ></wui-icon>`}
      </wui-button>
    `}getPaymentAssetFromTokenBalances(){return this.namespace?(this.tokenBalances[this.namespace]??[]).map(e=>{try{return function(e){let t=s.ChainController.getAllRequestedCaipNetworks().find(t=>t.caipNetworkId===e.chainId),i=e.address;if(!t)throw Error(`Target network not found for balance chainId "${e.chainId}"`);if(S.HelpersUtil.isLowerCaseMatch(e.symbol,t.nativeCurrency.symbol))i="native";else if(A.CoreHelperUtil.isCaipAddress(i)){let{address:e}=P.ParseUtil.parseCaipAddress(i);i=e}else if(!i)throw Error(`Balance address not found for balance symbol "${e.symbol}"`);return{network:t.caipNetworkId,asset:i,metadata:{name:e.name,symbol:e.symbol,decimals:Number(e.quantity.decimals),logoURI:e.iconUrl},amount:e.quantity.numeric}}(e)}catch(e){return null}}).filter(e=>!!e).filter(e=>{let{chainId:t}=P.ParseUtil.parseCaipNetworkId(e.network),{chainId:i}=P.ParseUtil.parseCaipNetworkId(this.paymentAsset.network);return!!S.HelpersUtil.isLowerCaseMatch(e.asset,this.paymentAsset.asset)||!this.selectedExchange||!S.HelpersUtil.isLowerCaseMatch(t.toString(),i.toString())}):[]}onTokenBalancesChanged(e){this.tokenBalances=e;let[t]=this.getPaymentAssetFromTokenBalances();t&&eP.setSelectedPaymentAsset(t)}async onConnectOtherWallet(){await l.ConnectorController.connect(),await c.ModalController.open({view:"PayQuote"})}onAccountStateChanged(e){let{address:t}=this.caipAddress?P.ParseUtil.parseCaipAddress(this.caipAddress):{};if(this.caipAddress=e?.caipAddress,this.profileName=e?.profileName??null,t){let{address:e}=this.caipAddress?P.ParseUtil.parseCaipAddress(this.caipAddress):{};e?S.HelpersUtil.isLowerCaseMatch(e,t)||(this.resetAssetsState(),this.resetQuoteState(),this.fetchTokens()):c.ModalController.close()}}onSelectedPaymentAssetChanged(e){this.isFetchingQuote||eP.setSelectedPaymentAsset(e)}async onTransfer(){let e=et(this.quote);if(e){if(!S.HelpersUtil.isLowerCaseMatch(this.selectedPaymentAsset?.asset,e.deposit.currency))throw Error("Quote asset is not the same as the selected payment asset");let t=this.selectedPaymentAsset?.amount??"0",i=k.NumberUtil.formatNumber(e.deposit.amount,{decimals:this.selectedPaymentAsset?.metadata.decimals??0}).toString();if(!k.NumberUtil.bigNumber(t).gte(i))return void d.SnackController.showError("Insufficient funds");if(this.quote&&this.selectedPaymentAsset&&this.caipAddress&&this.namespace){let{address:t}=P.ParseUtil.parseCaipAddress(this.caipAddress);await eP.onTransfer({chainNamespace:this.namespace,fromAddress:t,toAddress:e.deposit.receiver,amount:i,paymentAsset:this.selectedPaymentAsset}),eP.setRequestId(e.requestId),u.RouterController.push("PayLoading")}}}async onSendTransactions(){let e=this.selectedPaymentAsset?.amount??"0",t=k.NumberUtil.formatNumber(this.quote?.origin.amount??0,{decimals:this.selectedPaymentAsset?.metadata.decimals??0}).toString();if(!k.NumberUtil.bigNumber(e).gte(t))return void d.SnackController.showError("Insufficient funds");let i=ei(this.quote),[r]=ei(this.quote,this.completedTransactionsCount);r&&this.namespace&&(await eP.onSendTransaction({namespace:this.namespace,transactionStep:r}),this.completedTransactionsCount+=1,this.completedTransactionsCount===i.length&&(eP.setRequestId(r.requestId),u.RouterController.push("PayLoading")))}onPayWithExchange(){if(this.exchangeUrlForQuote){let e=A.CoreHelperUtil.returnOpenHref("","popupWindow","scrollbar=yes,width=480,height=720");if(!e)throw Error("Could not create popup window");e.location.href=this.exchangeUrlForQuote;let t=et(this.quote);t&&eP.setRequestId(t.requestId),eP.initiatePayment(),u.RouterController.push("PayLoading")}}resetAssetsState(){eP.setSelectedPaymentAsset(null)}resetQuoteState(){eP.resetQuoteState()}};async function tr(e){return eP.handleOpenPay(e)}async function tn(e,t=3e5){if(t<=0)throw new Q($,"Timeout must be greater than 0");try{await tr(e)}catch(e){if(e instanceof Q)throw e;throw new Q(R,e.message)}return new Promise((e,i)=>{var r;let n=!1,a=setTimeout(()=>{n||(n=!0,o(),i(new Q(O,"Payment timeout")))},t);function s(){if(n)return;let t=eP.state.currentPayment,i=eP.state.error,r=eP.state.isPaymentInProgress;if(t?.status==="SUCCESS"){n=!0,o(),clearTimeout(a),e({success:!0,result:t.result});return}if(t?.status==="FAILED"){n=!0,o(),clearTimeout(a),e({success:!1,error:i||"Payment failed"});return}!i||r||t||(n=!0,o(),clearTimeout(a),e({success:!1,error:i}))}let o=(r=[ta("currentPayment",s),ta("error",s),ta("isPaymentInProgress",s)],()=>{r.forEach(e=>{try{e()}catch{}})});s()})}function ta(e,t){return eP.subscribeKey(e,t)}ti.styles=e9,te([(0,r.state)()],ti.prototype,"profileName",void 0),te([(0,r.state)()],ti.prototype,"paymentAsset",void 0),te([(0,r.state)()],ti.prototype,"namespace",void 0),te([(0,r.state)()],ti.prototype,"caipAddress",void 0),te([(0,r.state)()],ti.prototype,"amount",void 0),te([(0,r.state)()],ti.prototype,"recipient",void 0),te([(0,r.state)()],ti.prototype,"activeConnectorIds",void 0),te([(0,r.state)()],ti.prototype,"selectedPaymentAsset",void 0),te([(0,r.state)()],ti.prototype,"selectedExchange",void 0),te([(0,r.state)()],ti.prototype,"isFetchingQuote",void 0),te([(0,r.state)()],ti.prototype,"quoteError",void 0),te([(0,r.state)()],ti.prototype,"quote",void 0),te([(0,r.state)()],ti.prototype,"isFetchingTokenBalances",void 0),te([(0,r.state)()],ti.prototype,"tokenBalances",void 0),te([(0,r.state)()],ti.prototype,"isPaymentInProgress",void 0),te([(0,r.state)()],ti.prototype,"exchangeUrlForQuote",void 0),te([(0,r.state)()],ti.prototype,"completedTransactionsCount",void 0),ti=te([(0,p.customElement)("w3m-pay-quote-view")],ti),e.s(["W3mPayQuoteView",0,ti],595246),e.s(["getExchanges",0,function(){return eP.getExchanges()},"getIsPaymentInProgress",0,function(){return eP.state.isPaymentInProgress},"getPayError",0,function(){return eP.state.error},"getPayResult",0,function(){return eP.state.currentPayment?.result},"openPay",0,tr,"pay",0,tn],397503),e.s([],560030)}]);