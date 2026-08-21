module.exports=[902616,11750,955697,776771,512585,19508,301009,a=>{"use strict";a.i(176996);var b=a.i(44886),c=a.i(979837);a.i(525181);var d=a.i(905653);a.i(876091);var e=a.i(960078),f=a.i(197350),g=a.i(34525),h=a.i(166920),i=a.i(661107),j=a.i(950802),k=a.i(682762),l=a.i(475744);a.i(564205);var m=a.i(526551);a.i(782682),a.i(735803),a.i(644344);var n=b,o=a.i(129349);a.i(808710);var p=a.i(924968),q=a.i(192361);let r=q.css`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    padding: ${({spacing:a})=>a[1]};
  }

  /* -- Colors --------------------------------------------------- */
  button[data-type='accent'] wui-icon {
    color: ${({tokens:a})=>a.core.iconAccentPrimary};
  }

  button[data-type='neutral'][data-variant='primary'] wui-icon {
    color: ${({tokens:a})=>a.theme.iconInverse};
  }

  button[data-type='neutral'][data-variant='secondary'] wui-icon {
    color: ${({tokens:a})=>a.theme.iconDefault};
  }

  button[data-type='success'] wui-icon {
    color: ${({tokens:a})=>a.core.iconSuccess};
  }

  button[data-type='error'] wui-icon {
    color: ${({tokens:a})=>a.core.iconError};
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='xs'] {
    width: 16px;
    height: 16px;

    border-radius: ${({borderRadius:a})=>a[1]};
  }

  button[data-size='sm'] {
    width: 20px;
    height: 20px;
    border-radius: ${({borderRadius:a})=>a[1]};
  }

  button[data-size='md'] {
    width: 24px;
    height: 24px;
    border-radius: ${({borderRadius:a})=>a[2]};
  }

  button[data-size='lg'] {
    width: 28px;
    height: 28px;
    border-radius: ${({borderRadius:a})=>a[2]};
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
      background-color: ${({tokens:a})=>a.core.foregroundAccent010};
    }

    button[data-variant='primary'][data-type='neutral']:hover:enabled {
      background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
    }

    button[data-variant='secondary'][data-type='neutral']:hover:enabled {
      background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
    }

    button[data-type='success']:hover:enabled {
      background-color: ${({tokens:a})=>a.core.backgroundSuccess};
    }

    button[data-type='error']:hover:enabled {
      background-color: ${({tokens:a})=>a.core.backgroundError};
    }
  }

  /* -- Focus --------------------------------------------------- */
  button:focus-visible {
    box-shadow: 0 0 0 4px ${({tokens:a})=>a.core.foregroundAccent020};
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
`;var s=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let t=class extends n.LitElement{constructor(){super(...arguments),this.icon="card",this.variant="primary",this.type="accent",this.size="md",this.iconSize=void 0,this.fullWidth=!1,this.disabled=!1}render(){return c.html`<button
      data-variant=${this.variant}
      data-type=${this.type}
      data-size=${this.size}
      data-full-width=${this.fullWidth}
      ?disabled=${this.disabled}
    >
      <wui-icon color="inherit" name=${this.icon} size=${(0,e.ifDefined)(this.iconSize)}></wui-icon>
    </button>`}};t.styles=[p.resetStyles,p.elementStyles,r],s([(0,o.property)()],t.prototype,"icon",void 0),s([(0,o.property)()],t.prototype,"variant",void 0),s([(0,o.property)()],t.prototype,"type",void 0),s([(0,o.property)()],t.prototype,"size",void 0),s([(0,o.property)()],t.prototype,"iconSize",void 0),s([(0,o.property)({type:Boolean})],t.prototype,"fullWidth",void 0),s([(0,o.property)({type:Boolean})],t.prototype,"disabled",void 0),t=s([(0,m.customElement)("wui-icon-button")],t),a.s([],11750),a.i(528049),a.i(855019),a.i(187683),a.i(292471),a.i(375622),a.i(981449),a.i(603511),a.i(61504),a.s(["DIRECT_TRANSFER_DEPOSIT_TYPE",()=>av,"DIRECT_TRANSFER_REQUEST_ID",()=>au,"DIRECT_TRANSFER_TRANSACTION_TYPE",()=>aw,"PayController",()=>ay],955697);var u=a.i(120289),v=a.i(286682),w=a.i(918428),x=a.i(29853),y=a.i(824388),z=a.i(456594),A=a.i(649637),B=a.i(633746),C=a.i(99009);let D="INVALID_PAYMENT_CONFIG",E="INVALID_RECIPIENT",F="INVALID_ASSET",G="INVALID_AMOUNT",H="UNABLE_TO_INITIATE_PAYMENT",I="INVALID_CHAIN_NAMESPACE",J="GENERIC_PAYMENT_ERROR",K="UNABLE_TO_GET_EXCHANGES",L="ASSET_NOT_SUPPORTED",M="UNABLE_TO_GET_PAY_URL",N="UNABLE_TO_GET_BUY_STATUS",O="UNABLE_TO_GET_QUOTE",P="UNABLE_TO_GET_QUOTE_STATUS",Q="INVALID_RECIPIENT_ADDRESS_FOR_ASSET",R={[D]:"Invalid payment configuration",[E]:"Invalid recipient address",[F]:"Invalid asset specified",[G]:"Invalid payment amount",[Q]:"Invalid recipient address for the asset selected",UNKNOWN_ERROR:"Unknown payment error occurred",[H]:"Unable to initiate payment",[I]:"Invalid chain namespace",[J]:"Unable to process payment",[K]:"Unable to get exchanges",[L]:"Asset not supported by the selected exchange",[M]:"Unable to get payment URL",[N]:"Unable to get buy status",UNABLE_TO_GET_TOKEN_BALANCES:"Unable to get token balances",[O]:"Unable to get quote. Please choose a different token",[P]:"Unable to get quote status"};class S extends Error{get message(){return R[this.code]}constructor(a,b){super(R[a]),this.name="AppKitPayError",this.code=a,this.details=b,Error.captureStackTrace&&Error.captureStackTrace(this,S)}}var T=a.i(713129),U=a.i(412631),V=a.i(932774);let W="reown_test";var X=a.i(317673),Y=a.i(858612);async function Z(a,b,c){if(b!==w.ConstantsUtil.CHAIN.EVM)throw new S(I);if(!c.fromAddress)throw new S(D,"fromAddress is required for native EVM payments.");let d="string"==typeof c.amount?parseFloat(c.amount):c.amount;if(isNaN(d))throw new S(D);let e=a.metadata?.decimals??18,f=h.ConnectionController.parseUnits(d.toString(),e);if("bigint"!=typeof f)throw new S(J);return await h.ConnectionController.sendTransaction({chainNamespace:b,to:c.recipient,address:c.fromAddress,value:f,data:"0x"})??void 0}async function $(a,b){if(!b.fromAddress)throw new S(D,"fromAddress is required for ERC20 EVM payments.");let c=a.asset,d=b.recipient,e=Number(a.metadata.decimals),f=h.ConnectionController.parseUnits(b.amount.toString(),e);if(void 0===f)throw new S(J);return await h.ConnectionController.writeContract({fromAddress:b.fromAddress,tokenAddress:c,args:[d,f],method:"transfer",abi:X.ContractUtil.getERC20Abi(c),chainNamespace:w.ConstantsUtil.CHAIN.EVM})??void 0}async function _(a,b){if(a!==w.ConstantsUtil.CHAIN.SOLANA)throw new S(I);if(!b.fromAddress)throw new S(D,"fromAddress is required for Solana payments.");let c="string"==typeof b.amount?parseFloat(b.amount):b.amount;if(isNaN(c)||c<=0)throw new S(D,"Invalid payment amount.");try{if(!Y.ProviderController.getProvider(a))throw new S(J,"No Solana provider available.");let d=await h.ConnectionController.sendTransaction({chainNamespace:w.ConstantsUtil.CHAIN.SOLANA,to:b.recipient,value:c,tokenMint:b.tokenMint});if(!d)throw new S(J,"Transaction failed.");return d}catch(a){if(a instanceof S)throw a;throw new S(J,`Solana payment failed: ${a}`)}}async function aa({sourceToken:a,toToken:b,amount:c,recipient:d}){let e=h.ConnectionController.parseUnits(c,a.metadata.decimals),f=h.ConnectionController.parseUnits(c,b.metadata.decimals);return Promise.resolve({type:au,origin:{amount:e?.toString()??"0",currency:a},destination:{amount:f?.toString()??"0",currency:b},fees:[{id:"service",label:"Service Fee",amount:"0",currency:b}],steps:[{requestId:au,type:"deposit",deposit:{amount:e?.toString()??"0",currency:a.asset,receiver:d}}],timeInSeconds:6})}function ab(a){if(!a)return null;let b=a.steps[0];return b&&b.type===av?b:null}function ac(a,b=0){if(!a)return[];let c=a.steps.filter(a=>a.type===aw),d=c.filter((a,c)=>c+1>b);return c.length>0&&c.length<3?d:[]}let ad=new T.FetchUtil({baseUrl:z.CoreHelperUtil.getApiUrl(),clientId:null});class ae extends Error{}function af(){let{projectId:a,sdkType:b,sdkVersion:c}=U.OptionsController.state;return{projectId:a,st:b||"appkit",sv:c||"html-wagmi-4.2.2"}}async function ag(a,b){let c,d=(c=U.OptionsController.getSnapshot().projectId,`https://rpc.walletconnect.org/v1/json-rpc?projectId=${c}`),{sdkType:e,sdkVersion:f,projectId:g}=U.OptionsController.getSnapshot(),h={jsonrpc:"2.0",id:1,method:a,params:{...b||{},st:e,sv:f,projectId:g}},i=await fetch(d,{method:"POST",body:JSON.stringify(h),headers:{"Content-Type":"application/json"}}),j=await i.json();if(j.error)throw new ae(j.error.message);return j}async function ah(a){return(await ag("reown_getExchanges",a)).result}async function ai(a){return(await ag("reown_getExchangePayUrl",a)).result}async function aj(a){return(await ag("reown_getExchangeBuyStatus",a)).result}async function ak(a){let b=x.NumberUtil.bigNumber(a.amount).times(10**a.toToken.metadata.decimals).toString(),{chainId:c,chainNamespace:d}=y.ParseUtil.parseCaipNetworkId(a.sourceToken.network),{chainId:e,chainNamespace:f}=y.ParseUtil.parseCaipNetworkId(a.toToken.network),g="native"===a.sourceToken.asset?(0,V.getNativeTokenAddress)(d):a.sourceToken.asset,h="native"===a.toToken.asset?(0,V.getNativeTokenAddress)(f):a.toToken.asset;return await ad.post({path:"/appkit/v1/transfers/quote",body:{user:a.address,originChainId:c.toString(),originCurrency:g,destinationChainId:e.toString(),destinationCurrency:h,recipient:a.recipient,amount:b},params:af()})}async function al(a){let b=C.HelpersUtil.isLowerCaseMatch(a.sourceToken.network,a.toToken.network),c=C.HelpersUtil.isLowerCaseMatch(a.sourceToken.asset,a.toToken.asset);return b&&c?aa(a):ak(a)}async function am(a){return await ad.get({path:"/appkit/v1/transfers/status",params:{requestId:a.requestId,...af()}})}async function an(a){return await ad.get({path:`/appkit/v1/transfers/assets/exchanges/${a}`,params:af()})}let ao=["eip155","solana"],ap={eip155:{native:{assetNamespace:"slip44",assetReference:"60"},defaultTokenNamespace:"erc20"},solana:{native:{assetNamespace:"slip44",assetReference:"501"},defaultTokenNamespace:"token"}},aq={56:"714",204:"714"};function ar(a,b){let{chainNamespace:c,chainId:d}=y.ParseUtil.parseCaipNetworkId(a),e=ap[c];if(!e)throw Error(`Unsupported chain namespace for CAIP-19 formatting: ${c}`);let f=e.native.assetNamespace,g=e.native.assetReference;"native"!==b?(f=e.defaultTokenNamespace,g=b):"eip155"===c&&aq[d]&&(g=aq[d]);let h=`${c}:${d}`;return`${h}/${f}:${g}`}function as(a){let b=x.NumberUtil.bigNumber(a,{safe:!0});return b.lt(.001)?"<0.001":b.round(4).toString()}let at="unknown",au="direct-transfer",av="deposit",aw="transaction",ax=(0,u.proxy)({paymentAsset:{network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}},recipient:"0x0",amount:0,isConfigured:!1,error:null,isPaymentInProgress:!1,exchanges:[],isLoading:!1,openInNewTab:!0,redirectUrl:void 0,payWithExchange:void 0,currentPayment:void 0,analyticsSet:!1,paymentId:void 0,choice:"pay",tokenBalances:{[w.ConstantsUtil.CHAIN.EVM]:[],[w.ConstantsUtil.CHAIN.SOLANA]:[]},isFetchingTokenBalances:!1,selectedPaymentAsset:null,quote:void 0,quoteStatus:"waiting",quoteError:null,isFetchingQuote:!1,selectedExchange:void 0,exchangeUrlForQuote:void 0,requestId:void 0}),ay={state:ax,subscribe:a=>(0,u.subscribe)(ax,()=>a(ax)),subscribeKey:(a,b)=>(0,v.subscribeKey)(ax,a,b),async handleOpenPay(a){this.resetState(),this.setPaymentConfig(a),this.initializeAnalytics(),function(){let{chainNamespace:a}=y.ParseUtil.parseCaipNetworkId(ay.state.paymentAsset.network);if(!z.CoreHelperUtil.isAddress(ay.state.recipient,a))throw new S(Q,`Provide valid recipient address for namespace "${a}"`)}(),await this.prepareTokenLogo(),ax.isConfigured=!0,A.EventsController.sendEvent({type:"track",event:"PAY_MODAL_OPEN",properties:{exchanges:ax.exchanges,configuration:{network:ax.paymentAsset.network,asset:ax.paymentAsset.asset,recipient:ax.recipient,amount:ax.amount}}}),await j.ModalController.open({view:"Pay"})},resetState(){ax.paymentAsset={network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}},ax.recipient="0x0",ax.amount=0,ax.isConfigured=!1,ax.error=null,ax.isPaymentInProgress=!1,ax.isLoading=!1,ax.currentPayment=void 0,ax.selectedExchange=void 0,ax.exchangeUrlForQuote=void 0,ax.requestId=void 0},resetQuoteState(){ax.quote=void 0,ax.quoteStatus="waiting",ax.quoteError=null,ax.isFetchingQuote=!1,ax.requestId=void 0},setPaymentConfig(a){if(!a.paymentAsset)throw new S(D);try{ax.choice=a.choice??"pay",ax.paymentAsset=a.paymentAsset,ax.recipient=a.recipient,ax.amount=a.amount,ax.openInNewTab=a.openInNewTab??!0,ax.redirectUrl=a.redirectUrl,ax.payWithExchange=a.payWithExchange,ax.error=null}catch(a){throw new S(D,a.message)}},setSelectedPaymentAsset(a){ax.selectedPaymentAsset=a},setSelectedExchange(a){ax.selectedExchange=a},setRequestId(a){ax.requestId=a},setPaymentInProgress(a){ax.isPaymentInProgress=a},getPaymentAsset:()=>ax.paymentAsset,getExchanges:()=>ax.exchanges,async fetchExchanges(){try{ax.isLoading=!0,ax.exchanges=(await ah({page:0})).exchanges.slice(0,2)}catch(a){throw l.SnackController.showError(R.UNABLE_TO_GET_EXCHANGES),new S(K)}finally{ax.isLoading=!1}},async getAvailableExchanges(a){try{let b=a?.asset&&a?.network?ar(a.network,a.asset):void 0;return await ah({page:a?.page??0,asset:b,amount:a?.amount?.toString()})}catch(a){throw new S(K)}},async getPayUrl(a,b,c=!1){try{let d=Number(b.amount),e=await ai({exchangeId:a,asset:ar(b.network,b.asset),amount:d.toString(),recipient:`${b.network}:${b.recipient}`});return A.EventsController.sendEvent({type:"track",event:"PAY_EXCHANGE_SELECTED",properties:{source:"pay",exchange:{id:a},configuration:{network:b.network,asset:b.asset,recipient:b.recipient,amount:d},currentPayment:{type:"exchange",exchangeId:a},headless:c}}),c&&(this.initiatePayment(),A.EventsController.sendEvent({type:"track",event:"PAY_INITIATED",properties:{source:"pay",paymentId:ax.paymentId||at,configuration:{network:b.network,asset:b.asset,recipient:b.recipient,amount:d},currentPayment:{type:"exchange",exchangeId:a}}})),e}catch(a){if(a instanceof Error&&a.message.includes("is not supported"))throw new S(L);throw Error(a.message)}},async generateExchangeUrlForQuote({exchangeId:a,paymentAsset:b,amount:c,recipient:d}){let e=await ai({exchangeId:a,asset:ar(b.network,b.asset),amount:c.toString(),recipient:d});ax.exchangeSessionId=e.sessionId,ax.exchangeUrlForQuote=e.url},async openPayUrl(a,b,c=!1){try{let d=await this.getPayUrl(a.exchangeId,b,c);if(!d)throw new S(M);let e=a.openInNewTab??!0;return z.CoreHelperUtil.openHref(d.url,e?"_blank":"_self"),d}catch(a){throw a instanceof S?ax.error=a.message:ax.error=R.GENERIC_PAYMENT_ERROR,new S(M)}},async onTransfer({chainNamespace:a,fromAddress:b,toAddress:c,amount:d,paymentAsset:e}){if(ax.currentPayment={type:"wallet",status:"IN_PROGRESS"},!ax.isPaymentInProgress)try{this.initiatePayment();let f=g.ChainController.getAllRequestedCaipNetworks().find(a=>a.caipNetworkId===e.network);if(!f)throw Error("Target network not found");let h=g.ChainController.state.activeCaipNetwork;switch(!C.HelpersUtil.isLowerCaseMatch(h?.caipNetworkId,f.caipNetworkId)&&await g.ChainController.switchActiveNetwork(f),a){case w.ConstantsUtil.CHAIN.EVM:"native"===e.asset&&(ax.currentPayment.result=await Z(e,a,{recipient:c,amount:d,fromAddress:b})),e.asset.startsWith("0x")&&(ax.currentPayment.result=await $(e,{recipient:c,amount:d,fromAddress:b})),ax.currentPayment.status="SUCCESS";break;case w.ConstantsUtil.CHAIN.SOLANA:ax.currentPayment.result=await _(a,{recipient:c,amount:d,fromAddress:b,tokenMint:"native"===e.asset?void 0:e.asset}),ax.currentPayment.status="SUCCESS";break;default:throw new S(I)}}catch(a){throw a instanceof S?ax.error=a.message:ax.error=R.GENERIC_PAYMENT_ERROR,ax.currentPayment.status="FAILED",l.SnackController.showError(ax.error),a}finally{ax.isPaymentInProgress=!1}},async onSendTransaction(a){try{let{namespace:b,transactionStep:c}=a;ay.initiatePayment();let d=g.ChainController.getAllRequestedCaipNetworks().find(a=>a.caipNetworkId===ax.paymentAsset?.network);if(!d)throw Error("Target network not found");let e=g.ChainController.state.activeCaipNetwork;if(C.HelpersUtil.isLowerCaseMatch(e?.caipNetworkId,d.caipNetworkId)||await g.ChainController.switchActiveNetwork(d),b===w.ConstantsUtil.CHAIN.EVM){let{from:a,to:d,data:e,value:f}=c.transaction;await h.ConnectionController.sendTransaction({address:a,to:d,data:e,value:BigInt(f),chainNamespace:b})}else if(b===w.ConstantsUtil.CHAIN.SOLANA){let{instructions:a}=c.transaction;await h.ConnectionController.writeSolanaTransaction({instructions:a})}}catch(a){throw a instanceof S?ax.error=a.message:ax.error=R.GENERIC_PAYMENT_ERROR,l.SnackController.showError(ax.error),a}finally{ax.isPaymentInProgress=!1}},getExchangeById:a=>ax.exchanges.find(b=>b.id===a),validatePayConfig(a){let{paymentAsset:b,recipient:c,amount:d}=a;if(!b)throw new S(D);if(!c)throw new S(E);if(!b.asset)throw new S(F);if(null==d||d<=0)throw new S(G)},async handlePayWithExchange(a){try{ax.currentPayment={type:"exchange",exchangeId:a};let{network:b,asset:c}=ax.paymentAsset,d={network:b,asset:c,amount:ax.amount,recipient:ax.recipient},e=await this.getPayUrl(a,d);if(!e)throw new S(H);return ax.currentPayment.sessionId=e.sessionId,ax.currentPayment.status="IN_PROGRESS",ax.currentPayment.exchangeId=a,this.initiatePayment(),{url:e.url,openInNewTab:ax.openInNewTab}}catch(a){return a instanceof S?ax.error=a.message:ax.error=R.GENERIC_PAYMENT_ERROR,ax.isPaymentInProgress=!1,l.SnackController.showError(ax.error),null}},async getBuyStatus(a,b){try{let c=await aj({sessionId:b,exchangeId:a});return("SUCCESS"===c.status||"FAILED"===c.status)&&A.EventsController.sendEvent({type:"track",event:"SUCCESS"===c.status?"PAY_SUCCESS":"PAY_ERROR",properties:{message:"FAILED"===c.status?z.CoreHelperUtil.parseError(ax.error):void 0,source:"pay",paymentId:ax.paymentId||at,configuration:{network:ax.paymentAsset.network,asset:ax.paymentAsset.asset,recipient:ax.recipient,amount:ax.amount},currentPayment:{type:"exchange",exchangeId:ax.currentPayment?.exchangeId,sessionId:ax.currentPayment?.sessionId,result:c.txHash}}}),c}catch(a){throw new S(N)}},async fetchTokensFromEOA({caipAddress:a,caipNetwork:b,namespace:c}){if(!a)return[];let{address:d}=y.ParseUtil.parseCaipAddress(a),e=b;return c===w.ConstantsUtil.CHAIN.EVM&&(e=void 0),await B.BalanceUtil.getMyTokensWithBalance({address:d,caipNetwork:e})},async fetchTokensFromExchange(){if(!ax.selectedExchange)return[];let a=Object.values((await an(ax.selectedExchange.id)).assets).flat();return await Promise.all(a.map(async a=>{let b={chainId:a.network,address:`${a.network}:${a.asset}`,symbol:a.metadata.symbol,name:a.metadata.name,iconUrl:a.metadata.logoURI||"",price:0,quantity:{numeric:"0",decimals:a.metadata.decimals.toString()}},{chainNamespace:c}=y.ParseUtil.parseCaipNetworkId(b.chainId),d=b.address;if(z.CoreHelperUtil.isCaipAddress(d)){let{address:a}=y.ParseUtil.parseCaipAddress(d);d=a}return b.iconUrl=await f.AssetUtil.getImageByToken(d??"",c).catch(()=>void 0)??"",b}))},async fetchTokens({caipAddress:a,caipNetwork:b,namespace:c}){try{ax.isFetchingTokenBalances=!0;let d=ax.selectedExchange?this.fetchTokensFromExchange():this.fetchTokensFromEOA({caipAddress:a,caipNetwork:b,namespace:c}),e=await d;ax.tokenBalances={...ax.tokenBalances,[c]:e}}catch(b){let a=b instanceof Error?b.message:"Unable to get token balances";l.SnackController.showError(a)}finally{ax.isFetchingTokenBalances=!1}},async fetchQuote({amount:a,address:b,sourceToken:c,toToken:d,recipient:e}){try{ay.resetQuoteState(),ax.isFetchingQuote=!0;let f=await al({amount:a,address:ax.selectedExchange?void 0:b,sourceToken:c,toToken:d,recipient:e});if(ax.selectedExchange){let a=ab(f);if(a){let b=`${c.network}:${a.deposit.receiver}`,d=x.NumberUtil.formatNumber(a.deposit.amount,{decimals:c.metadata.decimals??0,round:8});await ay.generateExchangeUrlForQuote({exchangeId:ax.selectedExchange.id,paymentAsset:c,amount:d.toString(),recipient:b})}}ax.quote=f}catch(b){let a=R.UNABLE_TO_GET_QUOTE;if(b instanceof Error&&b.cause&&b.cause instanceof Response)try{let c=await b.cause.json();c.error&&"string"==typeof c.error&&(a=c.error)}catch{}throw ax.quoteError=a,l.SnackController.showError(a),new S(O)}finally{ax.isFetchingQuote=!1}},async fetchQuoteStatus({requestId:a}){try{if(a===au){let a=ax.selectedExchange,b=ax.exchangeSessionId;if(a&&b){switch((await this.getBuyStatus(a.id,b)).status){case"IN_PROGRESS":case"UNKNOWN":default:ax.quoteStatus="waiting";break;case"SUCCESS":ax.quoteStatus="success",ax.isPaymentInProgress=!1;break;case"FAILED":ax.quoteStatus="failure",ax.isPaymentInProgress=!1}return}ax.quoteStatus="success";return}let{status:b}=await am({requestId:a});ax.quoteStatus=b}catch{throw ax.quoteStatus="failure",new S(P)}},initiatePayment(){ax.isPaymentInProgress=!0,ax.paymentId=crypto.randomUUID()},initializeAnalytics(){ax.analyticsSet||(ax.analyticsSet=!0,this.subscribeKey("isPaymentInProgress",a=>{if(ax.currentPayment?.status&&"UNKNOWN"!==ax.currentPayment.status){let a={IN_PROGRESS:"PAY_INITIATED",SUCCESS:"PAY_SUCCESS",FAILED:"PAY_ERROR"}[ax.currentPayment.status];A.EventsController.sendEvent({type:"track",event:a,properties:{message:"FAILED"===ax.currentPayment.status?z.CoreHelperUtil.parseError(ax.error):void 0,source:"pay",paymentId:ax.paymentId||at,configuration:{network:ax.paymentAsset.network,asset:ax.paymentAsset.asset,recipient:ax.recipient,amount:ax.amount},currentPayment:{type:ax.currentPayment.type,exchangeId:ax.currentPayment.exchangeId,sessionId:ax.currentPayment.sessionId,result:ax.currentPayment.result}}})}}))},async prepareTokenLogo(){if(!ax.paymentAsset.metadata.logoURI)try{let{chainNamespace:a}=y.ParseUtil.parseCaipNetworkId(ax.paymentAsset.network),b=await f.AssetUtil.getImageByToken(ax.paymentAsset.asset,a);ax.paymentAsset.metadata.logoURI=b}catch{}}},az=q.css`
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
    border-radius: ${({borderRadius:a})=>a.round};
    width: 40px;
    height: 40px;
  }

  .chain-image {
    position: absolute;
    width: 20px;
    height: 20px;
    bottom: -3px;
    right: -5px;
    border-radius: ${({borderRadius:a})=>a.round};
    border: 2px solid ${({tokens:a})=>a.theme.backgroundPrimary};
  }

  .payment-methods-container {
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
    border-top-right-radius: ${({borderRadius:a})=>a[8]};
    border-top-left-radius: ${({borderRadius:a})=>a[8]};
  }
`;var aA=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let aB=class extends b.LitElement{constructor(){super(),this.unsubscribe=[],this.amount=ay.state.amount,this.namespace=void 0,this.paymentAsset=ay.state.paymentAsset,this.activeConnectorIds=i.ConnectorController.state.activeConnectorIds,this.caipAddress=void 0,this.exchanges=ay.state.exchanges,this.isLoading=ay.state.isLoading,this.initializeNamespace(),this.unsubscribe.push(ay.subscribeKey("amount",a=>this.amount=a)),this.unsubscribe.push(i.ConnectorController.subscribeKey("activeConnectorIds",a=>this.activeConnectorIds=a)),this.unsubscribe.push(ay.subscribeKey("exchanges",a=>this.exchanges=a)),this.unsubscribe.push(ay.subscribeKey("isLoading",a=>this.isLoading=a)),ay.fetchExchanges(),ay.setSelectedExchange(void 0)}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}render(){return c.html`
      <wui-flex flexDirection="column">
        ${this.paymentDetailsTemplate()} ${this.paymentMethodsTemplate()}
      </wui-flex>
    `}paymentMethodsTemplate(){return c.html`
      <wui-flex flexDirection="column" padding="3" gap="2" class="payment-methods-container">
        ${this.payWithWalletTemplate()} ${this.templateSeparator()}
        ${this.templateExchangeOptions()}
      </wui-flex>
    `}initializeNamespace(){let a=g.ChainController.state.activeChain;this.namespace=a,this.caipAddress=g.ChainController.getAccountData(a)?.caipAddress,this.unsubscribe.push(g.ChainController.subscribeChainProp("accountState",a=>{this.caipAddress=a?.caipAddress},a))}paymentDetailsTemplate(){let a=g.ChainController.getAllRequestedCaipNetworks().find(a=>a.caipNetworkId===this.paymentAsset.network);return c.html`
      <wui-flex
        alignItems="center"
        justifyContent="space-between"
        .padding=${["6","8","6","8"]}
        gap="2"
      >
        <wui-flex alignItems="center" gap="1">
          <wui-text variant="h1-regular" color="primary">
            ${as(this.amount||"0")}
          </wui-text>

          <wui-flex flexDirection="column">
            <wui-text variant="h6-regular" color="secondary">
              ${this.paymentAsset.metadata.symbol||"Unknown"}
            </wui-text>
            <wui-text variant="md-medium" color="secondary"
              >on ${a?.name||"Unknown"}</wui-text
            >
          </wui-flex>
        </wui-flex>

        <wui-flex class="left-image-container">
          <wui-image
            src=${(0,e.ifDefined)(this.paymentAsset.metadata.logoURI)}
            class="token-image"
          ></wui-image>
          <wui-image
            src=${(0,e.ifDefined)(f.AssetUtil.getNetworkImage(a))}
            class="chain-image"
          ></wui-image>
        </wui-flex>
      </wui-flex>
    `}payWithWalletTemplate(){return!function(a){let{chainNamespace:b}=y.ParseUtil.parseCaipNetworkId(a);return ao.includes(b)}(this.paymentAsset.network)?c.html``:this.caipAddress?this.connectedWalletTemplate():this.disconnectedWalletTemplate()}connectedWalletTemplate(){let{name:a,image:b}=this.getWalletProperties({namespace:this.namespace});return c.html`
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
          imageSrc=${(0,e.ifDefined)(b)}
          imageSize="3xl"
        >
          <wui-text variant="lg-regular" color="primary">Pay with ${a}</wui-text>
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
    `}disconnectedWalletTemplate(){return c.html`<wui-list-item
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
    </wui-list-item>`}templateExchangeOptions(){if(this.isLoading)return c.html`<wui-flex justifyContent="center" alignItems="center">
        <wui-loading-spinner size="md"></wui-loading-spinner>
      </wui-flex>`;let a=this.exchanges.filter(a=>{var b;let c;return(b=this.paymentAsset,(c=g.ChainController.getAllRequestedCaipNetworks().find(a=>a.caipNetworkId===b.network))&&c.testnet)?a.id===W:a.id!==W});return 0===a.length?c.html`<wui-flex justifyContent="center" alignItems="center">
        <wui-text variant="md-medium" color="primary">No exchanges available</wui-text>
      </wui-flex>`:a.map(a=>c.html`
        <wui-list-item
          type="secondary"
          boxColor="foregroundSecondary"
          @click=${()=>this.onExchangePayment(a)}
          data-testid="exchange-option-${a.id}"
          ?chevron=${!0}
          imageSrc=${(0,e.ifDefined)(a.imageUrl)}
        >
          <wui-text flexGrow="1" variant="lg-regular" color="primary">
            Pay with ${a.name}
          </wui-text>
        </wui-list-item>
      `)}templateSeparator(){return c.html`<wui-separator text="or" bgColor="secondary"></wui-separator>`}async onWalletPayment(){if(!this.namespace)throw Error("Namespace not found");this.caipAddress?k.RouterController.push("PayQuote"):(await i.ConnectorController.connect(),await j.ModalController.open({view:"PayQuote"}))}onExchangePayment(a){ay.setSelectedExchange(a),k.RouterController.push("PayQuote")}async onDisconnect(){try{await h.ConnectionController.disconnect(),await j.ModalController.open({view:"Pay"})}catch{console.error("Failed to disconnect"),l.SnackController.showError("Failed to disconnect")}}getWalletProperties({namespace:a}){if(!a)return{name:void 0,image:void 0};let b=this.activeConnectorIds[a];if(!b)return{name:void 0,image:void 0};let c=i.ConnectorController.getConnector({id:b,namespace:a});if(!c)return{name:void 0,image:void 0};let d=f.AssetUtil.getConnectorImage(c);return{name:c.name,image:d}}};aB.styles=az,aA([(0,d.state)()],aB.prototype,"amount",void 0),aA([(0,d.state)()],aB.prototype,"namespace",void 0),aA([(0,d.state)()],aB.prototype,"paymentAsset",void 0),aA([(0,d.state)()],aB.prototype,"activeConnectorIds",void 0),aA([(0,d.state)()],aB.prototype,"caipAddress",void 0),aA([(0,d.state)()],aB.prototype,"exchanges",void 0),aA([(0,d.state)()],aB.prototype,"isLoading",void 0),aB=aA([(0,m.customElement)("w3m-pay-view")],aB),a.s(["W3mPayView",0,aB],776771);var aC=b;a.i(823410);var aD=a.i(297951),aE=a.i(415274),aF=b;let aG=q.css`
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
`;var aH=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let aI={"accent-primary":q.vars.tokens.core.backgroundAccentPrimary},aJ=class extends aF.LitElement{constructor(){super(...arguments),this.rings=3,this.duration=2,this.opacity=.3,this.size="200px",this.variant="accent-primary"}render(){let a=aI[this.variant];this.style.cssText=`
      --pulse-size: ${this.size};
      --pulse-duration: ${this.duration}s;
      --pulse-color: ${a};
      --pulse-opacity: ${this.opacity};
    `;let b=Array.from({length:this.rings},(a,b)=>this.renderRing(b,this.rings));return c.html`
      <div class="pulse-container">
        <div class="pulse-rings">${b}</div>
        <div class="pulse-content">
          <slot></slot>
        </div>
      </div>
    `}renderRing(a,b){let d=a/b*this.duration,e=`animation-delay: ${d}s;`;return c.html`<div class="pulse-ring" style=${e}></div>`}};aJ.styles=[p.resetStyles,aG],aH([(0,o.property)({type:Number})],aJ.prototype,"rings",void 0),aH([(0,o.property)({type:Number})],aJ.prototype,"duration",void 0),aH([(0,o.property)({type:Number})],aJ.prototype,"opacity",void 0),aH([(0,o.property)()],aJ.prototype,"size",void 0),aH([(0,o.property)()],aJ.prototype,"variant",void 0),aJ=aH([(0,m.customElement)("wui-pulse")],aJ);let aK=[{id:"received",title:"Receiving funds",icon:"dollar"},{id:"processing",title:"Swapping asset",icon:"recycleHorizontal"},{id:"sending",title:"Sending asset to the recipient address",icon:"send"}],aL=["success","submitted","failure","timeout","refund"],aM=q.css`
  :host {
    display: block;
    height: 100%;
    width: 100%;
  }

  wui-image {
    border-radius: ${({borderRadius:a})=>a.round};
  }

  .token-badge-container {
    position: absolute;
    bottom: 6px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: ${({borderRadius:a})=>a[4]};
    z-index: 3;
    min-width: 105px;
  }

  .token-badge-container.loading {
    background-color: ${({tokens:a})=>a.theme.backgroundPrimary};
    border: 3px solid ${({tokens:a})=>a.theme.backgroundPrimary};
  }

  .token-badge-container.success {
    background-color: ${({tokens:a})=>a.theme.backgroundPrimary};
    border: 3px solid ${({tokens:a})=>a.theme.backgroundPrimary};
  }

  .token-image-container {
    position: relative;
  }

  .token-image {
    border-radius: ${({borderRadius:a})=>a.round};
    width: 64px;
    height: 64px;
  }

  .token-image.success {
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
  }

  .token-image.error {
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
  }

  .token-image.loading {
    background: ${({colors:a})=>a.accent010};
  }

  .token-image wui-icon {
    width: 32px;
    height: 32px;
  }

  .token-badge {
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
    border: 1px solid ${({tokens:a})=>a.theme.foregroundSecondary};
    border-radius: ${({borderRadius:a})=>a[4]};
  }

  .token-badge wui-text {
    white-space: nowrap;
  }

  .payment-lifecycle-container {
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
    border-top-right-radius: ${({borderRadius:a})=>a[6]};
    border-top-left-radius: ${({borderRadius:a})=>a[6]};
  }

  .payment-step-badge {
    padding: ${({spacing:a})=>a[1]} ${({spacing:a})=>a[2]};
    border-radius: ${({borderRadius:a})=>a[1]};
  }

  .payment-step-badge.loading {
    background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
  }

  .payment-step-badge.error {
    background-color: ${({tokens:a})=>a.core.backgroundError};
  }

  .payment-step-badge.success {
    background-color: ${({tokens:a})=>a.core.backgroundSuccess};
  }

  .step-icon-container {
    position: relative;
    height: 40px;
    width: 40px;
    border-radius: ${({borderRadius:a})=>a.round};
    background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
  }

  .step-icon-box {
    position: absolute;
    right: -4px;
    bottom: -1px;
    padding: 2px;
    border-radius: ${({borderRadius:a})=>a.round};
    border: 2px solid ${({tokens:a})=>a.theme.backgroundPrimary};
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
  }

  .step-icon-box.success {
    background-color: ${({tokens:a})=>a.core.backgroundSuccess};
  }
`;var aN=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let aO={received:["pending","success","submitted"],processing:["success","submitted"],sending:["success","submitted"]},aP=class extends aC.LitElement{constructor(){super(),this.unsubscribe=[],this.pollingInterval=null,this.paymentAsset=ay.state.paymentAsset,this.quoteStatus=ay.state.quoteStatus,this.quote=ay.state.quote,this.amount=ay.state.amount,this.namespace=void 0,this.caipAddress=void 0,this.profileName=null,this.activeConnectorIds=i.ConnectorController.state.activeConnectorIds,this.selectedExchange=ay.state.selectedExchange,this.initializeNamespace(),this.unsubscribe.push(ay.subscribeKey("quoteStatus",a=>this.quoteStatus=a),ay.subscribeKey("quote",a=>this.quote=a),i.ConnectorController.subscribeKey("activeConnectorIds",a=>this.activeConnectorIds=a),ay.subscribeKey("selectedExchange",a=>this.selectedExchange=a))}connectedCallback(){super.connectedCallback(),this.startPolling()}disconnectedCallback(){super.disconnectedCallback(),this.stopPolling(),this.unsubscribe.forEach(a=>a())}render(){return c.html`
      <wui-flex flexDirection="column" .padding=${["3","0","0","0"]} gap="2">
        ${this.tokenTemplate()} ${this.paymentTemplate()} ${this.paymentLifecycleTemplate()}
      </wui-flex>
    `}tokenTemplate(){let a=as(this.amount||"0"),b=this.paymentAsset.metadata.symbol??"Unknown",d=g.ChainController.getAllRequestedCaipNetworks().find(a=>a.caipNetworkId===this.paymentAsset.network),h="failure"===this.quoteStatus||"timeout"===this.quoteStatus||"refund"===this.quoteStatus;return"success"===this.quoteStatus||"submitted"===this.quoteStatus?c.html`<wui-flex alignItems="center" justifyContent="center">
        <wui-flex justifyContent="center" alignItems="center" class="token-image success">
          <wui-icon name="checkmark" color="success" size="inherit"></wui-icon>
        </wui-flex>
      </wui-flex>`:h?c.html`<wui-flex alignItems="center" justifyContent="center">
        <wui-flex justifyContent="center" alignItems="center" class="token-image error">
          <wui-icon name="close" color="error" size="inherit"></wui-icon>
        </wui-flex>
      </wui-flex>`:c.html`
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
                src=${(0,e.ifDefined)(f.AssetUtil.getNetworkImage(d))}
                class="chain-image"
                size="mdl"
              ></wui-image>

              <wui-text variant="lg-regular" color="primary">${a} ${b}</wui-text>
            </wui-flex>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}paymentTemplate(){return c.html`
      <wui-flex flexDirection="column" gap="2" .padding=${["0","6","0","6"]}>
        ${this.renderPayment()}
        <wui-separator></wui-separator>
        ${this.renderWallet()}
      </wui-flex>
    `}paymentLifecycleTemplate(){let a=this.getStepsWithStatus();return c.html`
      <wui-flex flexDirection="column" padding="4" gap="2" class="payment-lifecycle-container">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">PAYMENT CYCLE</wui-text>

          ${this.renderPaymentCycleBadge()}
        </wui-flex>

        <wui-flex flexDirection="column" gap="5" .padding=${["2","0","2","0"]}>
          ${a.map(a=>this.renderStep(a))}
        </wui-flex>
      </wui-flex>
    `}renderPaymentCycleBadge(){let a="failure"===this.quoteStatus||"timeout"===this.quoteStatus||"refund"===this.quoteStatus,b="success"===this.quoteStatus||"submitted"===this.quoteStatus;if(a)return c.html`
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge error"
          gap="1"
        >
          <wui-icon name="close" color="error" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="error">Failed</wui-text>
        </wui-flex>
      `;if(b)return c.html`
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge success"
          gap="1"
        >
          <wui-icon name="checkmark" color="success" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="success">Completed</wui-text>
        </wui-flex>
      `;let d=this.quote?.timeInSeconds??0;return c.html`
      <wui-flex alignItems="center" justifyContent="space-between" gap="3">
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge loading"
          gap="1"
        >
          <wui-icon name="clock" color="default" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="primary">Est. ${d} sec</wui-text>
        </wui-flex>

        <wui-icon name="chevronBottom" color="default" size="xxs"></wui-icon>
      </wui-flex>
    `}renderPayment(){let a=g.ChainController.getAllRequestedCaipNetworks().find(a=>{let b=this.quote?.origin.currency.network;if(!b)return!1;let{chainId:c}=y.ParseUtil.parseCaipNetworkId(b);return C.HelpersUtil.isLowerCaseMatch(a.id.toString(),c.toString())}),b=as(x.NumberUtil.formatNumber(this.quote?.origin.amount||"0",{decimals:this.quote?.origin.currency.metadata.decimals??0}).toString()),d=this.quote?.origin.currency.metadata.symbol??"Unknown";return c.html`
      <wui-flex
        alignItems="flex-start"
        justifyContent="space-between"
        .padding=${["3","0","3","0"]}
      >
        <wui-text variant="lg-regular" color="secondary">Payment Method</wui-text>

        <wui-flex flexDirection="column" alignItems="flex-end" gap="1">
          <wui-flex alignItems="center" gap="01">
            <wui-text variant="lg-regular" color="primary">${b}</wui-text>
            <wui-text variant="lg-regular" color="secondary">${d}</wui-text>
          </wui-flex>

          <wui-flex alignItems="center" gap="1">
            <wui-text variant="md-regular" color="secondary">on</wui-text>
            <wui-image
              src=${(0,e.ifDefined)(f.AssetUtil.getNetworkImage(a))}
              size="xs"
            ></wui-image>
            <wui-text variant="md-regular" color="secondary">${a?.name}</wui-text>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}renderWallet(){return c.html`
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
    `}renderWalletText(){let{image:a}=this.getWalletProperties({namespace:this.namespace}),{address:b}=this.caipAddress?y.ParseUtil.parseCaipAddress(this.caipAddress):{},d=this.selectedExchange?.name;return this.selectedExchange?c.html`
        <wui-flex alignItems="center" justifyContent="flex-end" gap="1">
          <wui-text variant="lg-regular" color="primary">${d}</wui-text>
          <wui-image src=${(0,e.ifDefined)(this.selectedExchange.imageUrl)} size="mdl"></wui-image>
        </wui-flex>
      `:c.html`
      <wui-flex alignItems="center" justifyContent="flex-end" gap="1">
        <wui-text variant="lg-regular" color="primary">
          ${aE.UiHelperUtil.getTruncateString({string:this.profileName||b||d||"",charsStart:this.profileName?16:4,charsEnd:6*!this.profileName,truncate:this.profileName?"end":"middle"})}
        </wui-text>

        <wui-image src=${(0,e.ifDefined)(a)} size="mdl"></wui-image>
      </wui-flex>
    `}getStepsWithStatus(){return"failure"===this.quoteStatus||"timeout"===this.quoteStatus||"refund"===this.quoteStatus?aK.map(a=>({...a,status:"failed"})):aK.map(a=>{let b=(aO[a.id]??[]).includes(this.quoteStatus)?"completed":"pending";return{...a,status:b}})}renderStep({title:a,icon:b,status:d}){return c.html`
      <wui-flex alignItems="center" gap="3">
        <wui-flex justifyContent="center" alignItems="center" class="step-icon-container">
          <wui-icon name=${b} color="default" size="mdl"></wui-icon>

          <wui-flex alignItems="center" justifyContent="center" class=${(0,aD.classMap)({"step-icon-box":!0,success:"completed"===d})}>
            ${this.renderStatusIndicator(d)}
          </wui-flex>
        </wui-flex>

        <wui-text variant="md-regular" color="primary">${a}</wui-text>
      </wui-flex>
    `}renderStatusIndicator(a){return"completed"===a?c.html`<wui-icon size="sm" color="success" name="checkmark"></wui-icon>`:"failed"===a?c.html`<wui-icon size="sm" color="error" name="close"></wui-icon>`:"pending"===a?c.html`<wui-loading-spinner color="accent-primary" size="sm"></wui-loading-spinner>`:null}startPolling(){this.pollingInterval||(this.fetchQuoteStatus(),this.pollingInterval=setInterval(()=>{this.fetchQuoteStatus()},3e3))}stopPolling(){this.pollingInterval&&(clearInterval(this.pollingInterval),this.pollingInterval=null)}async fetchQuoteStatus(){let a=ay.state.requestId;if(!a||aL.includes(this.quoteStatus))this.stopPolling();else try{await ay.fetchQuoteStatus({requestId:a}),aL.includes(this.quoteStatus)&&this.stopPolling()}catch{this.stopPolling()}}initializeNamespace(){let a=g.ChainController.state.activeChain;this.namespace=a,this.caipAddress=g.ChainController.getAccountData(a)?.caipAddress,this.profileName=g.ChainController.getAccountData(a)?.profileName??null,this.unsubscribe.push(g.ChainController.subscribeChainProp("accountState",a=>{this.caipAddress=a?.caipAddress,this.profileName=a?.profileName??null},a))}getWalletProperties({namespace:a}){if(!a)return{name:void 0,image:void 0};let b=this.activeConnectorIds[a];if(!b)return{name:void 0,image:void 0};let c=i.ConnectorController.getConnector({id:b,namespace:a});if(!c)return{name:void 0,image:void 0};let d=f.AssetUtil.getConnectorImage(c);return{name:c.name,image:d}}};aP.styles=aM,aN([(0,d.state)()],aP.prototype,"paymentAsset",void 0),aN([(0,d.state)()],aP.prototype,"quoteStatus",void 0),aN([(0,d.state)()],aP.prototype,"quote",void 0),aN([(0,d.state)()],aP.prototype,"amount",void 0),aN([(0,d.state)()],aP.prototype,"namespace",void 0),aN([(0,d.state)()],aP.prototype,"caipAddress",void 0),aN([(0,d.state)()],aP.prototype,"profileName",void 0),aN([(0,d.state)()],aP.prototype,"activeConnectorIds",void 0),aN([(0,d.state)()],aP.prototype,"selectedExchange",void 0),aP=aN([(0,m.customElement)("w3m-pay-loading-view")],aP),a.s(["W3mPayLoadingView",0,aP],512585);var aQ=b;a.i(305353);var aR=b;a.i(610594);var aS=a.i(77439);let aT=aS.css`
  :host {
    display: block;
  }
`,aU=class extends aR.LitElement{render(){return c.html`
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
    `}};aU.styles=[aT],aU=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}([(0,m.customElement)("w3m-pay-fees-skeleton")],aU);var aV=b;let aW=q.css`
  :host {
    display: block;
  }

  wui-image {
    border-radius: ${({borderRadius:a})=>a.round};
  }
`;var aX=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let aY=class extends aV.LitElement{constructor(){super(),this.unsubscribe=[],this.quote=ay.state.quote,this.unsubscribe.push(ay.subscribeKey("quote",a=>this.quote=a))}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}render(){let a=x.NumberUtil.formatNumber(this.quote?.origin.amount||"0",{decimals:this.quote?.origin.currency.metadata.decimals??0,round:6}).toString();return c.html`
      <wui-flex flexDirection="column" gap="4">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Pay</wui-text>
          <wui-text variant="md-regular" color="primary">
            ${a} ${this.quote?.origin.currency.metadata.symbol||"Unknown"}
          </wui-text>
        </wui-flex>

        ${this.quote&&this.quote.fees.length>0?this.quote.fees.map(a=>this.renderFee(a)):null}
      </wui-flex>
    `}renderFee(a){let b="network"===a.id,d=x.NumberUtil.formatNumber(a.amount||"0",{decimals:a.currency.metadata.decimals??0,round:6}).toString();if(b){let b=g.ChainController.getAllRequestedCaipNetworks().find(b=>C.HelpersUtil.isLowerCaseMatch(b.caipNetworkId,a.currency.network));return c.html`
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">${a.label}</wui-text>

          <wui-flex flexDirection="column" alignItems="flex-end" gap="2">
            <wui-text variant="md-regular" color="primary">
              ${d} ${a.currency.metadata.symbol||"Unknown"}
            </wui-text>

            <wui-flex alignItems="center" gap="01">
              <wui-image
                src=${(0,e.ifDefined)(f.AssetUtil.getNetworkImage(b))}
                size="xs"
              ></wui-image>
              <wui-text variant="sm-regular" color="secondary">
                ${b?.name||"Unknown"}
              </wui-text>
            </wui-flex>
          </wui-flex>
        </wui-flex>
      `}return c.html`
      <wui-flex alignItems="center" justifyContent="space-between">
        <wui-text variant="md-regular" color="secondary">${a.label}</wui-text>
        <wui-text variant="md-regular" color="primary">
          ${d} ${a.currency.metadata.symbol||"Unknown"}
        </wui-text>
      </wui-flex>
    `}};aY.styles=[aW],aX([(0,d.state)()],aY.prototype,"quote",void 0),aY=aX([(0,m.customElement)("w3m-pay-fees")],aY);var aZ=b;let a$=q.css`
  :host {
    display: block;
    width: 100%;
  }

  .disabled-container {
    padding: ${({spacing:a})=>a[2]};
    min-height: 168px;
  }

  wui-icon {
    width: ${({spacing:a})=>a[8]};
    height: ${({spacing:a})=>a[8]};
  }

  wui-flex > wui-text {
    max-width: 273px;
  }
`;var a_=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let a0=class extends aZ.LitElement{constructor(){super(),this.unsubscribe=[],this.selectedExchange=ay.state.selectedExchange,this.unsubscribe.push(ay.subscribeKey("selectedExchange",a=>this.selectedExchange=a))}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}render(){let a=!!this.selectedExchange;return c.html`
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

        ${a?null:c.html`<wui-button
              size="md"
              variant="neutral-secondary"
              @click=${this.dispatchConnectOtherWalletEvent.bind(this)}
              >Connect other wallet</wui-button
            >`}
      </wui-flex>
    `}dispatchConnectOtherWalletEvent(){this.dispatchEvent(new CustomEvent("connectOtherWallet",{detail:!0,bubbles:!0,composed:!0}))}};a0.styles=[a$],a_([(0,o.property)({type:Array})],a0.prototype,"selectedExchange",void 0),a0=a_([(0,m.customElement)("w3m-pay-options-empty")],a0);var a1=b;let a2=q.css`
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
    border-radius: ${({borderRadius:a})=>a[4]};
    padding: ${({spacing:a})=>a[3]};
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
    border: 2px solid ${({tokens:a})=>a.theme.foregroundSecondary};
  }
`,a3=class extends a1.LitElement{render(){return c.html`
      <wui-flex flexDirection="column" gap="2" class="pay-options-container">
        ${this.renderOptionEntry()} ${this.renderOptionEntry()} ${this.renderOptionEntry()}
      </wui-flex>
    `}renderOptionEntry(){return c.html`
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
    `}};a3.styles=[a2],a3=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}([(0,m.customElement)("w3m-pay-options-skeleton")],a3);var a4=b,a5=a.i(575265);let a6=q.css`
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
    border-radius: ${({borderRadius:a})=>a[4]};
    padding: ${({spacing:a})=>a[3]};
    transition: background-color ${({durations:a})=>a.lg}
      ${({easings:a})=>a["ease-out-power-1"]};
    will-change: background-color;
  }

  .token-images-container {
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .token-image {
    border-radius: ${({borderRadius:a})=>a.round};
    width: 32px;
    height: 32px;
  }

  .chain-image {
    position: absolute;
    width: 16px;
    height: 16px;
    bottom: -3px;
    right: -5px;
    border-radius: ${({borderRadius:a})=>a.round};
    border: 2px solid ${({tokens:a})=>a.theme.backgroundPrimary};
  }

  @media (hover: hover) and (pointer: fine) {
    .pay-option-container:hover {
      background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
    }
  }
`;var a7=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let a8=class extends a4.LitElement{constructor(){super(),this.unsubscribe=[],this.options=[],this.selectedPaymentAsset=null}disconnectedCallback(){this.unsubscribe.forEach(a=>a()),this.resizeObserver?.disconnect();let a=this.shadowRoot?.querySelector(".pay-options-container");a?.removeEventListener("scroll",this.handleOptionsListScroll.bind(this))}firstUpdated(){let a=this.shadowRoot?.querySelector(".pay-options-container");a&&(requestAnimationFrame(this.handleOptionsListScroll.bind(this)),a?.addEventListener("scroll",this.handleOptionsListScroll.bind(this)),this.resizeObserver=new ResizeObserver(()=>{this.handleOptionsListScroll()}),this.resizeObserver?.observe(a),this.handleOptionsListScroll())}render(){return c.html`
      <wui-flex flexDirection="column" gap="2" class="pay-options-container">
        ${this.options.map(a=>this.payOptionTemplate(a))}
      </wui-flex>
    `}payOptionTemplate(a){let{network:b,metadata:d,asset:h,amount:i="0"}=a,j=g.ChainController.getAllRequestedCaipNetworks().find(a=>a.caipNetworkId===b),k=`${b}:${h}`,l=`${this.selectedPaymentAsset?.network}:${this.selectedPaymentAsset?.asset}`,m=x.NumberUtil.bigNumber(i,{safe:!0}),n=m.gt(0);return c.html`
      <wui-flex
        alignItems="center"
        justifyContent="space-between"
        gap="2"
        @click=${()=>this.onSelect?.(a)}
        class="pay-option-container"
      >
        <wui-flex alignItems="center" gap="2">
          <wui-flex class="token-images-container">
            <wui-image
              src=${(0,e.ifDefined)(d.logoURI)}
              class="token-image"
              size="3xl"
            ></wui-image>
            <wui-image
              src=${(0,e.ifDefined)(f.AssetUtil.getNetworkImage(j))}
              class="chain-image"
              size="md"
            ></wui-image>
          </wui-flex>

          <wui-flex flexDirection="column" gap="1">
            <wui-text variant="lg-regular" color="primary">${d.symbol}</wui-text>
            ${n?c.html`<wui-text variant="sm-regular" color="secondary">
                  ${m.round(6).toString()} ${d.symbol}
                </wui-text>`:null}
          </wui-flex>
        </wui-flex>

        ${k===l?c.html`<wui-icon name="checkmark" size="md" color="success"></wui-icon>`:null}
      </wui-flex>
    `}handleOptionsListScroll(){let a=this.shadowRoot?.querySelector(".pay-options-container");a&&(a.scrollHeight>300?(a.style.setProperty("--options-mask-image",`linear-gradient(
          to bottom,
          rgba(0, 0, 0, calc(1 - var(--options-scroll--top-opacity))) 0px,
          rgba(200, 200, 200, calc(1 - var(--options-scroll--top-opacity))) 1px,
          black 50px,
          black calc(100% - 50px),
          rgba(155, 155, 155, calc(1 - var(--options-scroll--bottom-opacity))) calc(100% - 1px),
          rgba(0, 0, 0, calc(1 - var(--options-scroll--bottom-opacity))) 100%
        )`),a.style.setProperty("--options-scroll--top-opacity",a5.MathUtil.interpolate([0,50],[0,1],a.scrollTop).toString()),a.style.setProperty("--options-scroll--bottom-opacity",a5.MathUtil.interpolate([0,50],[0,1],a.scrollHeight-a.scrollTop-a.offsetHeight).toString())):(a.style.setProperty("--options-mask-image","none"),a.style.setProperty("--options-scroll--top-opacity","0"),a.style.setProperty("--options-scroll--bottom-opacity","0")))}};a8.styles=[a6],a7([(0,o.property)({type:Array})],a8.prototype,"options",void 0),a7([(0,o.property)()],a8.prototype,"selectedPaymentAsset",void 0),a7([(0,o.property)()],a8.prototype,"onSelect",void 0),a8=a7([(0,m.customElement)("w3m-pay-options")],a8);let a9=q.css`
  .payment-methods-container {
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
    border-top-right-radius: ${({borderRadius:a})=>a[5]};
    border-top-left-radius: ${({borderRadius:a})=>a[5]};
  }

  .pay-options-container {
    background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
    border-radius: ${({borderRadius:a})=>a[5]};
    padding: ${({spacing:a})=>a[1]};
  }

  w3m-tooltip-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: fit-content;
  }

  wui-image {
    border-radius: ${({borderRadius:a})=>a.round};
  }

  w3m-pay-options.disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;var ba=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let bb={eip155:{icon:"ethereum",label:"EVM"},solana:{icon:"solana",label:"Solana"},bip122:{icon:"bitcoin",label:"Bitcoin"},ton:{icon:"ton",label:"Ton"}},bc=class extends aQ.LitElement{constructor(){super(),this.unsubscribe=[],this.profileName=null,this.paymentAsset=ay.state.paymentAsset,this.namespace=void 0,this.caipAddress=void 0,this.amount=ay.state.amount,this.recipient=ay.state.recipient,this.activeConnectorIds=i.ConnectorController.state.activeConnectorIds,this.selectedPaymentAsset=ay.state.selectedPaymentAsset,this.selectedExchange=ay.state.selectedExchange,this.isFetchingQuote=ay.state.isFetchingQuote,this.quoteError=ay.state.quoteError,this.quote=ay.state.quote,this.isFetchingTokenBalances=ay.state.isFetchingTokenBalances,this.tokenBalances=ay.state.tokenBalances,this.isPaymentInProgress=ay.state.isPaymentInProgress,this.exchangeUrlForQuote=ay.state.exchangeUrlForQuote,this.completedTransactionsCount=0,this.unsubscribe.push(ay.subscribeKey("paymentAsset",a=>this.paymentAsset=a)),this.unsubscribe.push(ay.subscribeKey("tokenBalances",a=>this.onTokenBalancesChanged(a))),this.unsubscribe.push(ay.subscribeKey("isFetchingTokenBalances",a=>this.isFetchingTokenBalances=a)),this.unsubscribe.push(i.ConnectorController.subscribeKey("activeConnectorIds",a=>this.activeConnectorIds=a)),this.unsubscribe.push(ay.subscribeKey("selectedPaymentAsset",a=>this.selectedPaymentAsset=a)),this.unsubscribe.push(ay.subscribeKey("isFetchingQuote",a=>this.isFetchingQuote=a)),this.unsubscribe.push(ay.subscribeKey("quoteError",a=>this.quoteError=a)),this.unsubscribe.push(ay.subscribeKey("quote",a=>this.quote=a)),this.unsubscribe.push(ay.subscribeKey("amount",a=>this.amount=a)),this.unsubscribe.push(ay.subscribeKey("recipient",a=>this.recipient=a)),this.unsubscribe.push(ay.subscribeKey("isPaymentInProgress",a=>this.isPaymentInProgress=a)),this.unsubscribe.push(ay.subscribeKey("selectedExchange",a=>this.selectedExchange=a)),this.unsubscribe.push(ay.subscribeKey("exchangeUrlForQuote",a=>this.exchangeUrlForQuote=a)),this.resetQuoteState(),this.initializeNamespace(),this.fetchTokens()}disconnectedCallback(){super.disconnectedCallback(),this.resetAssetsState(),this.unsubscribe.forEach(a=>a())}updated(a){super.updated(a),a.has("selectedPaymentAsset")&&this.fetchQuote()}render(){return c.html`
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
    `}profileTemplate(){if(this.selectedExchange){let a=x.NumberUtil.formatNumber(this.quote?.origin.amount,{decimals:this.quote?.origin.currency.metadata.decimals??0}).toString();return c.html`
        <wui-flex
          .padding=${["4","3","4","3"]}
          alignItems="center"
          justifyContent="space-between"
          gap="2"
        >
          <wui-text variant="lg-regular" color="secondary">Paying with</wui-text>

          ${this.quote?c.html`<wui-text variant="lg-regular" color="primary">
                ${x.NumberUtil.bigNumber(a,{safe:!0}).round(6).toString()}
                ${this.quote.origin.currency.metadata.symbol}
              </wui-text>`:c.html`<wui-shimmer width="80px" height="18px" variant="light"></wui-shimmer>`}
        </wui-flex>
      `}let a=z.CoreHelperUtil.getPlainAddress(this.caipAddress)??"",{name:b,image:d}=this.getWalletProperties({namespace:this.namespace}),{icon:f,label:g}=bb[this.namespace]??{};return c.html`
      <wui-flex
        .padding=${["4","3","4","3"]}
        alignItems="center"
        justifyContent="space-between"
        gap="2"
      >
        <wui-wallet-switch
          profileName=${(0,e.ifDefined)(this.profileName)}
          address=${(0,e.ifDefined)(a)}
          imageSrc=${(0,e.ifDefined)(d)}
          alt=${(0,e.ifDefined)(b)}
          @click=${this.onConnectOtherWallet.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>

        <wui-wallet-switch
          profileName=${(0,e.ifDefined)(g)}
          address=${(0,e.ifDefined)(a)}
          icon=${(0,e.ifDefined)(f)}
          iconSize="xs"
          .enableGreenCircle=${!1}
          alt=${(0,e.ifDefined)(g)}
          @click=${this.onConnectOtherWallet.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>
      </wui-flex>
    `}initializeNamespace(){let a=g.ChainController.state.activeChain;this.namespace=a,this.caipAddress=g.ChainController.getAccountData(a)?.caipAddress,this.profileName=g.ChainController.getAccountData(a)?.profileName??null,this.unsubscribe.push(g.ChainController.subscribeChainProp("accountState",a=>this.onAccountStateChanged(a),a))}async fetchTokens(){if(this.namespace){let a;if(this.caipAddress){let{chainId:b,chainNamespace:c}=y.ParseUtil.parseCaipAddress(this.caipAddress),d=`${c}:${b}`;a=g.ChainController.getAllRequestedCaipNetworks().find(a=>a.caipNetworkId===d)}await ay.fetchTokens({caipAddress:this.caipAddress,caipNetwork:a,namespace:this.namespace})}}fetchQuote(){if(this.amount&&this.recipient&&this.selectedPaymentAsset&&this.paymentAsset){let{address:a}=this.caipAddress?y.ParseUtil.parseCaipAddress(this.caipAddress):{};ay.fetchQuote({amount:this.amount.toString(),address:a,sourceToken:this.selectedPaymentAsset,toToken:this.paymentAsset,recipient:this.recipient})}}getWalletProperties({namespace:a}){if(!a)return{name:void 0,image:void 0};let b=this.activeConnectorIds[a];if(!b)return{name:void 0,image:void 0};let c=i.ConnectorController.getConnector({id:b,namespace:a});if(!c)return{name:void 0,image:void 0};let d=f.AssetUtil.getConnectorImage(c);return{name:c.name,image:d}}paymentOptionsViewTemplate(){return c.html`
      <wui-flex flexDirection="column" gap="2">
        <wui-text variant="sm-regular" color="secondary">CHOOSE PAYMENT OPTION</wui-text>
        <wui-flex class="pay-options-container">${this.paymentOptionsTemplate()}</wui-flex>
      </wui-flex>
    `}paymentOptionsTemplate(){let a=this.getPaymentAssetFromTokenBalances();if(this.isFetchingTokenBalances)return c.html`<w3m-pay-options-skeleton></w3m-pay-options-skeleton>`;if(0===a.length)return c.html`<w3m-pay-options-empty
        @connectOtherWallet=${this.onConnectOtherWallet.bind(this)}
      ></w3m-pay-options-empty>`;let b={disabled:this.isFetchingQuote};return c.html`<w3m-pay-options
      class=${(0,aD.classMap)(b)}
      .options=${a}
      .selectedPaymentAsset=${(0,e.ifDefined)(this.selectedPaymentAsset)}
      .onSelect=${this.onSelectedPaymentAssetChanged.bind(this)}
    ></w3m-pay-options>`}amountWithFeeTemplate(){return this.isFetchingQuote||!this.selectedPaymentAsset||this.quoteError?c.html`<w3m-pay-fees-skeleton></w3m-pay-fees-skeleton>`:c.html`<w3m-pay-fees></w3m-pay-fees>`}paymentActionsTemplate(){let a=this.isFetchingQuote||this.isFetchingTokenBalances,b=this.isFetchingQuote||this.isFetchingTokenBalances||!this.selectedPaymentAsset||!!this.quoteError,d=x.NumberUtil.formatNumber(this.quote?.origin.amount??0,{decimals:this.quote?.origin.currency.metadata.decimals??0}).toString();return this.selectedExchange?a||b?c.html`
          <wui-shimmer width="100%" height="48px" variant="light" ?rounded=${!0}></wui-shimmer>
        `:c.html`<wui-button
        size="lg"
        fullWidth
        variant="accent-secondary"
        @click=${this.onPayWithExchange.bind(this)}
      >
        ${`Continue in ${this.selectedExchange.name}`}

        <wui-icon name="arrowRight" color="inherit" size="sm" slot="iconRight"></wui-icon>
      </wui-button>`:c.html`
      <wui-flex alignItems="center" justifyContent="space-between">
        <wui-flex flexDirection="column" gap="1">
          <wui-text variant="md-regular" color="secondary">Order Total</wui-text>

          ${a||b?c.html`<wui-shimmer width="58px" height="32px" variant="light"></wui-shimmer>`:c.html`<wui-flex alignItems="center" gap="01">
                <wui-text variant="h4-regular" color="primary">${as(d)}</wui-text>

                <wui-text variant="lg-regular" color="secondary">
                  ${this.quote?.origin.currency.metadata.symbol||"Unknown"}
                </wui-text>
              </wui-flex>`}
        </wui-flex>

        ${this.actionButtonTemplate({isLoading:a,isDisabled:b})}
      </wui-flex>
    `}actionButtonTemplate(a){let b=ac(this.quote),{isLoading:d,isDisabled:e}=a,f="Pay";return b.length>1&&0===this.completedTransactionsCount&&(f="Approve"),c.html`
      <wui-button
        size="lg"
        variant="accent-primary"
        ?loading=${d||this.isPaymentInProgress}
        ?disabled=${e||this.isPaymentInProgress}
        @click=${()=>{b.length>0?this.onSendTransactions():this.onTransfer()}}
      >
        ${f}
        ${d?null:c.html`<wui-icon
              name="arrowRight"
              color="inherit"
              size="sm"
              slot="iconRight"
            ></wui-icon>`}
      </wui-button>
    `}getPaymentAssetFromTokenBalances(){return this.namespace?(this.tokenBalances[this.namespace]??[]).map(a=>{try{return function(a){let b=g.ChainController.getAllRequestedCaipNetworks().find(b=>b.caipNetworkId===a.chainId),c=a.address;if(!b)throw Error(`Target network not found for balance chainId "${a.chainId}"`);if(C.HelpersUtil.isLowerCaseMatch(a.symbol,b.nativeCurrency.symbol))c="native";else if(z.CoreHelperUtil.isCaipAddress(c)){let{address:a}=y.ParseUtil.parseCaipAddress(c);c=a}else if(!c)throw Error(`Balance address not found for balance symbol "${a.symbol}"`);return{network:b.caipNetworkId,asset:c,metadata:{name:a.name,symbol:a.symbol,decimals:Number(a.quantity.decimals),logoURI:a.iconUrl},amount:a.quantity.numeric}}(a)}catch(a){return null}}).filter(a=>!!a).filter(a=>{let{chainId:b}=y.ParseUtil.parseCaipNetworkId(a.network),{chainId:c}=y.ParseUtil.parseCaipNetworkId(this.paymentAsset.network);return!!C.HelpersUtil.isLowerCaseMatch(a.asset,this.paymentAsset.asset)||!this.selectedExchange||!C.HelpersUtil.isLowerCaseMatch(b.toString(),c.toString())}):[]}onTokenBalancesChanged(a){this.tokenBalances=a;let[b]=this.getPaymentAssetFromTokenBalances();b&&ay.setSelectedPaymentAsset(b)}async onConnectOtherWallet(){await i.ConnectorController.connect(),await j.ModalController.open({view:"PayQuote"})}onAccountStateChanged(a){let{address:b}=this.caipAddress?y.ParseUtil.parseCaipAddress(this.caipAddress):{};if(this.caipAddress=a?.caipAddress,this.profileName=a?.profileName??null,b){let{address:a}=this.caipAddress?y.ParseUtil.parseCaipAddress(this.caipAddress):{};a?C.HelpersUtil.isLowerCaseMatch(a,b)||(this.resetAssetsState(),this.resetQuoteState(),this.fetchTokens()):j.ModalController.close()}}onSelectedPaymentAssetChanged(a){this.isFetchingQuote||ay.setSelectedPaymentAsset(a)}async onTransfer(){let a=ab(this.quote);if(a){if(!C.HelpersUtil.isLowerCaseMatch(this.selectedPaymentAsset?.asset,a.deposit.currency))throw Error("Quote asset is not the same as the selected payment asset");let b=this.selectedPaymentAsset?.amount??"0",c=x.NumberUtil.formatNumber(a.deposit.amount,{decimals:this.selectedPaymentAsset?.metadata.decimals??0}).toString();if(!x.NumberUtil.bigNumber(b).gte(c))return void l.SnackController.showError("Insufficient funds");if(this.quote&&this.selectedPaymentAsset&&this.caipAddress&&this.namespace){let{address:b}=y.ParseUtil.parseCaipAddress(this.caipAddress);await ay.onTransfer({chainNamespace:this.namespace,fromAddress:b,toAddress:a.deposit.receiver,amount:c,paymentAsset:this.selectedPaymentAsset}),ay.setRequestId(a.requestId),k.RouterController.push("PayLoading")}}}async onSendTransactions(){let a=this.selectedPaymentAsset?.amount??"0",b=x.NumberUtil.formatNumber(this.quote?.origin.amount??0,{decimals:this.selectedPaymentAsset?.metadata.decimals??0}).toString();if(!x.NumberUtil.bigNumber(a).gte(b))return void l.SnackController.showError("Insufficient funds");let c=ac(this.quote),[d]=ac(this.quote,this.completedTransactionsCount);d&&this.namespace&&(await ay.onSendTransaction({namespace:this.namespace,transactionStep:d}),this.completedTransactionsCount+=1,this.completedTransactionsCount===c.length&&(ay.setRequestId(d.requestId),k.RouterController.push("PayLoading")))}onPayWithExchange(){if(this.exchangeUrlForQuote){let a=z.CoreHelperUtil.returnOpenHref("","popupWindow","scrollbar=yes,width=480,height=720");if(!a)throw Error("Could not create popup window");a.location.href=this.exchangeUrlForQuote;let b=ab(this.quote);b&&ay.setRequestId(b.requestId),ay.initiatePayment(),k.RouterController.push("PayLoading")}}resetAssetsState(){ay.setSelectedPaymentAsset(null)}resetQuoteState(){ay.resetQuoteState()}};async function bd(a){return ay.handleOpenPay(a)}async function be(a,b=3e5){if(b<=0)throw new S(D,"Timeout must be greater than 0");try{await bd(a)}catch(a){if(a instanceof S)throw a;throw new S(H,a.message)}return new Promise((a,c)=>{var d;let e=!1,f=setTimeout(()=>{e||(e=!0,h(),c(new S(J,"Payment timeout")))},b);function g(){if(e)return;let b=ay.state.currentPayment,c=ay.state.error,d=ay.state.isPaymentInProgress;if(b?.status==="SUCCESS"){e=!0,h(),clearTimeout(f),a({success:!0,result:b.result});return}if(b?.status==="FAILED"){e=!0,h(),clearTimeout(f),a({success:!1,error:c||"Payment failed"});return}!c||d||b||(e=!0,h(),clearTimeout(f),a({success:!1,error:c}))}let h=(d=[bf("currentPayment",g),bf("error",g),bf("isPaymentInProgress",g)],()=>{d.forEach(a=>{try{a()}catch{}})});g()})}function bf(a,b){return ay.subscribeKey(a,b)}bc.styles=a9,ba([(0,d.state)()],bc.prototype,"profileName",void 0),ba([(0,d.state)()],bc.prototype,"paymentAsset",void 0),ba([(0,d.state)()],bc.prototype,"namespace",void 0),ba([(0,d.state)()],bc.prototype,"caipAddress",void 0),ba([(0,d.state)()],bc.prototype,"amount",void 0),ba([(0,d.state)()],bc.prototype,"recipient",void 0),ba([(0,d.state)()],bc.prototype,"activeConnectorIds",void 0),ba([(0,d.state)()],bc.prototype,"selectedPaymentAsset",void 0),ba([(0,d.state)()],bc.prototype,"selectedExchange",void 0),ba([(0,d.state)()],bc.prototype,"isFetchingQuote",void 0),ba([(0,d.state)()],bc.prototype,"quoteError",void 0),ba([(0,d.state)()],bc.prototype,"quote",void 0),ba([(0,d.state)()],bc.prototype,"isFetchingTokenBalances",void 0),ba([(0,d.state)()],bc.prototype,"tokenBalances",void 0),ba([(0,d.state)()],bc.prototype,"isPaymentInProgress",void 0),ba([(0,d.state)()],bc.prototype,"exchangeUrlForQuote",void 0),ba([(0,d.state)()],bc.prototype,"completedTransactionsCount",void 0),bc=ba([(0,m.customElement)("w3m-pay-quote-view")],bc),a.s(["W3mPayQuoteView",0,bc],19508),a.s(["getExchanges",0,function(){return ay.getExchanges()},"getIsPaymentInProgress",0,function(){return ay.state.isPaymentInProgress},"getPayError",0,function(){return ay.state.error},"getPayResult",0,function(){return ay.state.currentPayment?.result},"openPay",0,bd,"pay",0,be],301009),a.s([],902616)}];

//# sourceMappingURL=116m_%40reown_appkit-pay_dist_esm_exports_index_0ucuf28.js.map