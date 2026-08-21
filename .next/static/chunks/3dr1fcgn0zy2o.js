(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,787025,e=>{"use strict";e.i(720140);var t=e.i(227565),o=e.i(540647);e.i(890019);var r=e.i(349820);e.i(920364);var i=e.i(732702),n=e.i(555489),a=e.i(964603),s=e.i(175848),l=e.i(953166);let c=n.css`
  :host {
    position: relative;
    display: inline-block;
  }

  :host([data-error='true']) > input {
    color: ${({tokens:e})=>e.core.textError};
  }

  :host([data-error='false']) > input {
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  input {
    background: transparent;
    height: auto;
    box-sizing: border-box;
    color: ${({tokens:e})=>e.theme.textPrimary};
    font-feature-settings: 'case' on;
    font-size: ${({textSize:e})=>e.h4};
    caret-color: ${({tokens:e})=>e.core.backgroundAccentPrimary};
    line-height: ${({typography:e})=>e["h4-regular-mono"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h4-regular-mono"].letterSpacing};
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
    font-family: ${({fontFamily:e})=>e.mono};
  }

  :host([data-width-variant='auto']) input {
    width: 100%;
  }

  :host([data-width-variant='fit']) input {
    width: 1ch;
  }

  .wui-input-amount-fit-mirror {
    position: absolute;
    visibility: hidden;
    white-space: pre;
    font-size: var(--local-font-size);
    line-height: 130%;
    letter-spacing: -1.28px;
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-input-amount-fit-width {
    display: inline-block;
    position: relative;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input::placeholder {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }
`;var u=function(e,t,o,r){var i,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(n<3?i(a):n>3?i(t,o,a):i(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};let d=class extends t.LitElement{constructor(){super(...arguments),this.inputElementRef=(0,i.createRef)(),this.disabled=!1,this.value="",this.placeholder="0",this.widthVariant="auto",this.maxDecimals=void 0,this.maxIntegers=void 0,this.fontSize="h4",this.error=!1}firstUpdated(){this.resizeInput()}updated(){this.style.setProperty("--local-font-size",n.vars.textSize[this.fontSize]),this.resizeInput()}render(){return(this.dataset.widthVariant=this.widthVariant,this.dataset.error=String(this.error),this.inputElementRef?.value&&this.value&&(this.inputElementRef.value.value=this.value),"auto"===this.widthVariant)?this.inputTemplate():o.html`
      <div class="wui-input-amount-fit-width">
        <span class="wui-input-amount-fit-mirror"></span>
        ${this.inputTemplate()}
      </div>
    `}inputTemplate(){return o.html`<input
      ${(0,i.ref)(this.inputElementRef)}
      type="text"
      inputmode="decimal"
      pattern="[0-9,.]*"
      placeholder=${this.placeholder}
      ?disabled=${this.disabled}
      autofocus
      value=${this.value??""}
      @input=${this.dispatchInputChangeEvent.bind(this)}
    />`}dispatchInputChangeEvent(){this.inputElementRef.value&&(this.inputElementRef.value.value=s.UiHelperUtil.maskInput({value:this.inputElementRef.value.value,decimals:this.maxDecimals,integers:this.maxIntegers}),this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value.value,bubbles:!0,composed:!0})),this.resizeInput())}resizeInput(){if("fit"===this.widthVariant){let e=this.inputElementRef.value;if(e){let t=e.previousElementSibling;t&&(t.textContent=e.value||"0",e.style.width=`${t.offsetWidth}px`)}}}};d.styles=[a.resetStyles,a.elementStyles,c],u([(0,r.property)({type:Boolean})],d.prototype,"disabled",void 0),u([(0,r.property)({type:String})],d.prototype,"value",void 0),u([(0,r.property)({type:String})],d.prototype,"placeholder",void 0),u([(0,r.property)({type:String})],d.prototype,"widthVariant",void 0),u([(0,r.property)({type:Number})],d.prototype,"maxDecimals",void 0),u([(0,r.property)({type:Number})],d.prototype,"maxIntegers",void 0),u([(0,r.property)({type:String})],d.prototype,"fontSize",void 0),u([(0,r.property)({type:Boolean})],d.prototype,"error",void 0),d=u([(0,l.customElement)("wui-input-amount")],d),e.s([],787025)},166758,e=>{"use strict";var t=e.i(374225),o=e.i(165064),r=e.i(807333),i=e.i(172339),n=e.i(727068),a=e.i(492555),s=e.i(34602),l=e.i(626074),c=e.i(153794),u=e.i(683647);let d={getGasPriceInEther:(e,t)=>Number(t*e)/1e18,getGasPriceInUSD(e,t,o){let i=d.getGasPriceInEther(t,o);return r.NumberUtil.bigNumber(e).times(i).toNumber()},getPriceImpact({sourceTokenAmount:e,sourceTokenPriceInUSD:t,toTokenPriceInUSD:o,toTokenAmount:i}){let n=r.NumberUtil.bigNumber(e).times(t),a=r.NumberUtil.bigNumber(i).times(o);return n.minus(a).div(n).times(100).toNumber()},getMaxSlippage(e,t){let o=r.NumberUtil.bigNumber(e).div(100);return r.NumberUtil.multiply(t,o).toNumber()},getProviderFee:(e,t=.0085)=>r.NumberUtil.bigNumber(e).times(t).toString(),isInsufficientNetworkTokenForGas:(e,t)=>!!r.NumberUtil.bigNumber(e).eq(0)||r.NumberUtil.bigNumber(r.NumberUtil.bigNumber(t||"0")).gt(e),isInsufficientSourceTokenForSwap(e,t,o){let i=o?.find(e=>e.address===t)?.quantity?.numeric;return r.NumberUtil.bigNumber(i||"0").lt(e)}};var p=e.i(715312),m=e.i(246923),g=e.i(893796),h=e.i(352714),k=e.i(610389),T=e.i(209884),w=e.i(149577),b=e.i(966584),f=e.i(565898);let y={initializing:!1,initialized:!1,loadingPrices:!1,loadingQuote:!1,loadingApprovalTransaction:!1,loadingBuildTransaction:!1,loadingTransaction:!1,switchingTokens:!1,fetchError:!1,approvalTransaction:void 0,swapTransaction:void 0,transactionError:void 0,sourceToken:void 0,sourceTokenAmount:"",sourceTokenPriceInUSD:0,toToken:void 0,toTokenAmount:"",toTokenPriceInUSD:0,networkPrice:"0",networkBalanceInUSD:"0",networkTokenSymbol:"",inputError:void 0,slippage:l.ConstantsUtil.CONVERT_SLIPPAGE_TOLERANCE,tokens:void 0,popularTokens:void 0,suggestedTokens:void 0,foundTokens:void 0,myTokensWithBalance:void 0,tokensPriceMap:{},gasFee:"0",gasPriceInUSD:0,priceImpact:void 0,maxSlippage:void 0,providerFee:void 0},v=(0,t.proxy)({...y}),S={state:v,subscribe:e=>(0,t.subscribe)(v,()=>e(v)),subscribeKey:(e,t)=>(0,o.subscribeKey)(v,e,t),getParams(){let e=h.ChainController.state.activeChain,t=h.ChainController.getAccountData(e)?.caipAddress??h.ChainController.state.activeCaipAddress,o=c.CoreHelperUtil.getPlainAddress(t),n=(0,s.getActiveNetworkTokenAddress)(),a=T.ConnectorController.getConnectorId(h.ChainController.state.activeChain);if(!o)throw Error("No address found to swap the tokens from.");let l=!v.toToken?.address||!v.toToken?.decimals,u=!v.sourceToken?.address||!v.sourceToken?.decimals||!r.NumberUtil.bigNumber(v.sourceTokenAmount).gt(0),d=!v.sourceTokenAmount;return{networkAddress:n,fromAddress:o,fromCaipAddress:t,sourceTokenAddress:v.sourceToken?.address,toTokenAddress:v.toToken?.address,toTokenAmount:v.toTokenAmount,toTokenDecimals:v.toToken?.decimals,sourceTokenAmount:v.sourceTokenAmount,sourceTokenDecimals:v.sourceToken?.decimals,invalidToToken:l,invalidSourceToken:u,invalidSourceTokenAmount:d,availableToSwap:t&&!l&&!u&&!d,isAuthConnector:a===i.ConstantsUtil.CONNECTOR_ID.AUTH}},async setSourceToken(e){if(!e){v.sourceToken=e,v.sourceTokenAmount="",v.sourceTokenPriceInUSD=0;return}v.sourceToken=e,await A.setTokenPrice(e.address,"sourceToken")},setSourceTokenAmount(e){v.sourceTokenAmount=e},async setToToken(e){if(!e){v.toToken=e,v.toTokenAmount="",v.toTokenPriceInUSD=0;return}v.toToken=e,await A.setTokenPrice(e.address,"toToken")},setToTokenAmount(e){v.toTokenAmount=e?r.NumberUtil.toFixed(e,6):""},async setTokenPrice(e,t){let o=v.tokensPriceMap[e]||0;o||(v.loadingPrices=!0,o=await A.getAddressPrice(e)),"sourceToken"===t?v.sourceTokenPriceInUSD=o:"toToken"===t&&(v.toTokenPriceInUSD=o),v.loadingPrices&&(v.loadingPrices=!1),A.getParams().availableToSwap&&!v.switchingTokens&&A.swapTokens()},async switchTokens(){if(!v.initializing&&v.initialized&&!v.switchingTokens){v.switchingTokens=!0;try{let e=v.toToken?{...v.toToken}:void 0,t=v.sourceToken?{...v.sourceToken}:void 0,o=e&&""===v.toTokenAmount?"1":v.toTokenAmount;A.setSourceTokenAmount(o),A.setToTokenAmount(""),await A.setSourceToken(e),await A.setToToken(t),v.switchingTokens=!1,A.swapTokens()}catch(e){throw v.switchingTokens=!1,e}}},resetState(){v.myTokensWithBalance=y.myTokensWithBalance,v.tokensPriceMap=y.tokensPriceMap,v.initialized=y.initialized,v.initializing=y.initializing,v.switchingTokens=y.switchingTokens,v.sourceToken=y.sourceToken,v.sourceTokenAmount=y.sourceTokenAmount,v.sourceTokenPriceInUSD=y.sourceTokenPriceInUSD,v.toToken=y.toToken,v.toTokenAmount=y.toTokenAmount,v.toTokenPriceInUSD=y.toTokenPriceInUSD,v.networkPrice=y.networkPrice,v.networkTokenSymbol=y.networkTokenSymbol,v.networkBalanceInUSD=y.networkBalanceInUSD,v.inputError=y.inputError},resetValues(){let{networkAddress:e}=A.getParams(),t=v.tokens?.find(t=>t.address===e);A.setSourceToken(t),A.setToToken(void 0)},getApprovalLoadingState:()=>v.loadingApprovalTransaction,clearError(){v.transactionError=void 0},async initializeState(){if(!v.initializing){if(v.initializing=!0,!v.initialized)try{await A.fetchTokens(),v.initialized=!0}catch(e){v.initialized=!1,f.SnackController.showError("Failed to initialize swap"),b.RouterController.goBack()}v.initializing=!1}},async fetchTokens(){let{networkAddress:e}=A.getParams();await A.getNetworkTokenPrice(),await A.getMyTokensWithBalance();let t=v.myTokensWithBalance?.find(t=>t.address===e);t&&(v.networkTokenSymbol=t.symbol,A.setSourceToken(t),A.setSourceTokenAmount("0"))},async getTokenList(){let e=h.ChainController.state.activeCaipNetwork?.caipNetworkId;if(v.caipNetworkId!==e||!v.tokens)try{v.tokensLoading=!0;let t=await u.SwapApiUtil.getTokenList(e);v.tokens=t,v.caipNetworkId=e,v.popularTokens=t.sort((e,t)=>e.symbol<t.symbol?-1:+(e.symbol>t.symbol));let o=(e&&l.ConstantsUtil.SUGGESTED_TOKENS_BY_CHAIN?.[e]||[]).map(e=>t.find(t=>t.symbol===e)).filter(e=>!!e),r=(l.ConstantsUtil.SWAP_SUGGESTED_TOKENS||[]).map(e=>t.find(t=>t.symbol===e)).filter(e=>!!e).filter(e=>!o.some(t=>t.address===e.address));v.suggestedTokens=[...o,...r]}catch(e){v.tokens=[],v.popularTokens=[],v.suggestedTokens=[]}finally{v.tokensLoading=!1}},async getAddressPrice(e){let t=v.tokensPriceMap[e];if(t)return t;let o=await g.BlockchainApiController.fetchTokenPrice({addresses:[e]}),r=o?.fungibles||[],i=[...v.tokens||[],...v.myTokensWithBalance||[]],n=i?.find(t=>t.address===e)?.symbol,a=parseFloat((r.find(e=>e.symbol.toLowerCase()===n?.toLowerCase())?.price||0).toString());return v.tokensPriceMap[e]=a,a},async getNetworkTokenPrice(){let{networkAddress:e}=A.getParams(),t=await g.BlockchainApiController.fetchTokenPrice({addresses:[e]}).catch(()=>(f.SnackController.showError("Failed to fetch network token price"),{fungibles:[]})),o=t.fungibles?.[0],r=o?.price.toString()||"0";v.tokensPriceMap[e]=parseFloat(r),v.networkTokenSymbol=o?.symbol||"",v.networkPrice=r},async getMyTokensWithBalance(e){let t=await a.BalanceUtil.getMyTokensWithBalance({forceUpdate:e,caipNetwork:h.ChainController.state.activeCaipNetwork,address:h.ChainController.getAccountData()?.address}),o=u.SwapApiUtil.mapBalancesToSwapTokens(t);o&&(await A.getInitialGasPrice(),A.setBalances(o))},setBalances(e){let{networkAddress:t}=A.getParams(),o=h.ChainController.state.activeCaipNetwork;if(!o)return;let i=e.find(e=>e.address===t);e.forEach(e=>{v.tokensPriceMap[e.address]=e.price||0}),v.myTokensWithBalance=e.filter(e=>e.address.startsWith(o.caipNetworkId)),v.networkBalanceInUSD=i?r.NumberUtil.multiply(i.quantity.numeric,i.price).toString():"0"},async getInitialGasPrice(){let e=await u.SwapApiUtil.fetchGasPrice();if(!e)return{gasPrice:null,gasPriceInUSD:null};switch(h.ChainController.state?.activeCaipNetwork?.chainNamespace){case i.ConstantsUtil.CHAIN.SOLANA:return v.gasFee=e.standard??"0",v.gasPriceInUSD=r.NumberUtil.multiply(e.standard,v.networkPrice).div(1e9).toNumber(),{gasPrice:BigInt(v.gasFee),gasPriceInUSD:Number(v.gasPriceInUSD)};case i.ConstantsUtil.CHAIN.EVM:default:let t=e.standard??"0",o=BigInt(t),n=BigInt(15e4),a=d.getGasPriceInUSD(v.networkPrice,n,o);return v.gasFee=t,v.gasPriceInUSD=a,{gasPrice:o,gasPriceInUSD:a}}},async swapTokens(){let e=h.ChainController.getAccountData()?.address,t=v.sourceToken,o=v.toToken,i=r.NumberUtil.bigNumber(v.sourceTokenAmount).gt(0);if(i||A.setToTokenAmount(""),!o||!t||v.loadingPrices||!i||!e)return;v.loadingQuote=!0;let n=r.NumberUtil.bigNumber(v.sourceTokenAmount).times(10**t.decimals).round(0).toFixed(0);try{let i=await g.BlockchainApiController.fetchSwapQuote({userAddress:e,from:t.address,to:o.address,gasPrice:v.gasFee,amount:n.toString()});v.loadingQuote=!1;let a=i?.quotes?.[0]?.toAmount;if(!a)return void m.AlertController.open({displayMessage:"Incorrect amount",debugMessage:"Please enter a valid amount"},"error");let s=r.NumberUtil.bigNumber(a).div(10**o.decimals).toString();A.setToTokenAmount(s),A.hasInsufficientToken(v.sourceTokenAmount,t.address)?v.inputError="Insufficient balance":(v.inputError=void 0,A.setTransactionDetails())}catch(t){let e=await u.SwapApiUtil.handleSwapError(t);v.loadingQuote=!1,v.inputError=e||"Insufficient balance"}},async getTransaction(){let{fromCaipAddress:e,availableToSwap:t}=A.getParams(),o=v.sourceToken,r=v.toToken;if(e&&t&&o&&r&&!v.loadingQuote)try{let t;return v.loadingBuildTransaction=!0,t=await u.SwapApiUtil.fetchSwapAllowance({userAddress:e,tokenAddress:o.address,sourceTokenAmount:v.sourceTokenAmount,sourceTokenDecimals:o.decimals})?await A.createSwapTransaction():await A.createAllowanceTransaction(),v.loadingBuildTransaction=!1,v.fetchError=!1,t}catch(e){b.RouterController.goBack(),f.SnackController.showError("Failed to check allowance"),v.loadingBuildTransaction=!1,v.approvalTransaction=void 0,v.swapTransaction=void 0,v.fetchError=!0;return}},async createAllowanceTransaction(){let{fromCaipAddress:e,sourceTokenAddress:t,toTokenAddress:o}=A.getParams();if(e&&o){if(!t)throw Error("createAllowanceTransaction - No source token address found.");try{let r=await g.BlockchainApiController.generateApproveCalldata({from:t,to:o,userAddress:e}),i=c.CoreHelperUtil.getPlainAddress(r.tx.from);if(!i)throw Error("SwapController:createAllowanceTransaction - address is required");let n={data:r.tx.data,to:i,gasPrice:BigInt(r.tx.eip155.gasPrice),value:BigInt(r.tx.value),toAmount:v.toTokenAmount};return v.swapTransaction=void 0,v.approvalTransaction={data:n.data,to:n.to,gasPrice:n.gasPrice,value:n.value,toAmount:n.toAmount},{data:n.data,to:n.to,gasPrice:n.gasPrice,value:n.value,toAmount:n.toAmount}}catch(e){b.RouterController.goBack(),f.SnackController.showError("Failed to create approval transaction"),v.approvalTransaction=void 0,v.swapTransaction=void 0,v.fetchError=!0;return}}},async createSwapTransaction(){let{networkAddress:e,fromCaipAddress:t,sourceTokenAmount:o}=A.getParams(),r=v.sourceToken,i=v.toToken;if(!t||!o||!r||!i)return;let n=k.ConnectionController.parseUnits(o,r.decimals)?.toString();try{let o=r.address===e,a=await g.BlockchainApiController.generateSwapCalldata({userAddress:t,from:r.address,to:i.address,amount:n,disableEstimate:!0}),s=BigInt(a.tx.eip155.gas),l=BigInt(a.tx.eip155.gasPrice);if(o&&n){let o=v.myTokensWithBalance?.find(t=>t.address===e);if(o){let e=parseInt(o.quantity.decimals,10),c=k.ConnectionController.parseUnits(o.quantity.numeric,e)??0n,u=s*l;if(BigInt(n)+u>c){let e=c>u?c-u:0n;e>0n&&(a=await g.BlockchainApiController.generateSwapCalldata({userAddress:t,from:r.address,to:i.address,amount:e.toString(),disableEstimate:!0}),n=e.toString(),s=BigInt(a.tx.eip155.gas),l=BigInt(a.tx.eip155.gasPrice))}}}let u=c.CoreHelperUtil.getPlainAddress(a.tx.to);if(!u)throw Error("SwapController:createSwapTransaction - address is required");let p={data:a.tx.data,to:u,gas:s,gasPrice:l,value:o?BigInt(n??"0"):BigInt("0"),toAmount:v.toTokenAmount};return v.gasPriceInUSD=d.getGasPriceInUSD(v.networkPrice,s,l),v.approvalTransaction=void 0,v.swapTransaction=p,p}catch(e){b.RouterController.goBack(),f.SnackController.showError("Failed to create transaction"),v.approvalTransaction=void 0,v.swapTransaction=void 0,v.fetchError=!0;return}},onEmbeddedWalletApprovalSuccess(){f.SnackController.showLoading("Approve limit increase in your wallet"),b.RouterController.replace("SwapPreview")},async sendTransactionForApproval(e){let{fromAddress:t,isAuthConnector:o}=A.getParams();v.loadingApprovalTransaction=!0,o?b.RouterController.pushTransactionStack({onSuccess:A.onEmbeddedWalletApprovalSuccess}):f.SnackController.showLoading("Approve limit increase in your wallet");try{await k.ConnectionController.sendTransaction({address:t,to:e.to,data:e.data,value:e.value,chainNamespace:i.ConstantsUtil.CHAIN.EVM}),await A.swapTokens(),await A.getTransaction(),v.approvalTransaction=void 0,v.loadingApprovalTransaction=!1}catch(e){v.transactionError=e?.displayMessage,v.loadingApprovalTransaction=!1,f.SnackController.showError(e?.displayMessage||"Transaction error"),w.EventsController.sendEvent({type:"track",event:"SWAP_APPROVAL_ERROR",properties:{message:e?.displayMessage||e?.message||"Unknown",network:h.ChainController.state.activeCaipNetwork?.caipNetworkId||"",swapFromToken:A.state.sourceToken?.symbol||"",swapToToken:A.state.toToken?.symbol||"",swapFromAmount:A.state.sourceTokenAmount||"",swapToAmount:A.state.toTokenAmount||"",isSmartAccount:(0,s.getPreferredAccountType)(i.ConstantsUtil.CHAIN.EVM)===n.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT}})}},async sendTransactionForSwap(e){if(!e)return;let{fromAddress:t,toTokenAmount:o,isAuthConnector:a}=A.getParams();v.loadingTransaction=!0;let l=`Swapping ${v.sourceToken?.symbol} to ${r.NumberUtil.formatNumberToLocalString(o,3)} ${v.toToken?.symbol}`,c=`Swapped ${v.sourceToken?.symbol} to ${r.NumberUtil.formatNumberToLocalString(o,3)} ${v.toToken?.symbol}`;a?b.RouterController.pushTransactionStack({onSuccess(){b.RouterController.replace("Account"),f.SnackController.showLoading(l),S.resetState()}}):f.SnackController.showLoading("Confirm transaction in your wallet");try{let o=[v.sourceToken?.address,v.toToken?.address].join(","),r=await k.ConnectionController.sendTransaction({address:t,to:e.to,data:e.data,value:e.value,chainNamespace:i.ConstantsUtil.CHAIN.EVM});return v.loadingTransaction=!1,f.SnackController.showSuccess(c),w.EventsController.sendEvent({type:"track",event:"SWAP_SUCCESS",properties:{network:h.ChainController.state.activeCaipNetwork?.caipNetworkId||"",swapFromToken:A.state.sourceToken?.symbol||"",swapToToken:A.state.toToken?.symbol||"",swapFromAmount:A.state.sourceTokenAmount||"",swapToAmount:A.state.toTokenAmount||"",isSmartAccount:(0,s.getPreferredAccountType)(i.ConstantsUtil.CHAIN.EVM)===n.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT}}),S.resetState(),a||b.RouterController.replace("Account"),S.getMyTokensWithBalance(o),r}catch(e){v.transactionError=e?.displayMessage,v.loadingTransaction=!1,f.SnackController.showError(e?.displayMessage||"Transaction error"),w.EventsController.sendEvent({type:"track",event:"SWAP_ERROR",properties:{message:e?.displayMessage||e?.message||"Unknown",network:h.ChainController.state.activeCaipNetwork?.caipNetworkId||"",swapFromToken:A.state.sourceToken?.symbol||"",swapToToken:A.state.toToken?.symbol||"",swapFromAmount:A.state.sourceTokenAmount||"",swapToAmount:A.state.toTokenAmount||"",isSmartAccount:(0,s.getPreferredAccountType)(i.ConstantsUtil.CHAIN.EVM)===n.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT}});return}},hasInsufficientToken:(e,t)=>d.isInsufficientSourceTokenForSwap(e,t,v.myTokensWithBalance),setTransactionDetails(){let{toTokenAddress:e,toTokenDecimals:t}=A.getParams();e&&t&&(v.gasPriceInUSD=d.getGasPriceInUSD(v.networkPrice,BigInt(v.gasFee),BigInt(15e4)),v.priceImpact=d.getPriceImpact({sourceTokenAmount:v.sourceTokenAmount,sourceTokenPriceInUSD:v.sourceTokenPriceInUSD,toTokenPriceInUSD:v.toTokenPriceInUSD,toTokenAmount:v.toTokenAmount}),v.maxSlippage=d.getMaxSlippage(v.slippage,v.toTokenAmount),v.providerFee=d.getProviderFee(v.sourceTokenAmount))}},A=(0,p.withErrorBoundary)(S);e.s(["SwapController",0,A],166758)},527585,e=>{"use strict";e.i(720140);var t=e.i(227565),o=e.i(540647);e.i(890019);var r=e.i(349820);e.i(175235),e.i(621750),e.i(608353),e.i(897818),e.i(967549);var i=e.i(964603),n=e.i(953166),a=e.i(555489);let s=a.css`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: ${({spacing:e})=>e[1]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[32]};
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e[32]};
  }

  wui-text {
    padding-left: ${({spacing:e})=>e[1]};
    padding-right: ${({spacing:e})=>e[1]};
  }

  .left-icon-container {
    width: 24px;
    height: 24px;
    justify-content: center;
    align-items: center;
  }

  .left-image-container {
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .chain-image {
    position: absolute;
    border: 1px solid ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='lg'] {
    height: 32px;
  }

  button[data-size='md'] {
    height: 28px;
  }

  button[data-size='sm'] {
    height: 24px;
  }

  button[data-size='lg'] .token-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='md'] .token-image {
    width: 20px;
    height: 20px;
  }

  button[data-size='sm'] .token-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] .left-icon-container {
    width: 24px;
    height: 24px;
  }

  button[data-size='md'] .left-icon-container {
    width: 20px;
    height: 20px;
  }

  button[data-size='sm'] .left-icon-container {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] .chain-image {
    width: 12px;
    height: 12px;
    bottom: 2px;
    right: -4px;
  }

  button[data-size='md'] .chain-image {
    width: 10px;
    height: 10px;
    bottom: 2px;
    right: -4px;
  }

  button[data-size='sm'] .chain-image {
    width: 8px;
    height: 8px;
    bottom: 2px;
    right: -3px;
  }

  /* -- Focus states --------------------------------------------------- */
  button:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent040};
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) {
    button:hover:enabled,
    button:active:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    opacity: 0.5;
  }
`;var l=function(e,t,o,r){var i,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(n<3?i(a):n>3?i(t,o,a):i(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};let c={lg:"lg-regular",md:"lg-regular",sm:"md-regular"},u={lg:"lg",md:"md",sm:"sm"},d=class extends t.LitElement{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.text="",this.loading=!1}render(){return this.loading?o.html` <wui-flex alignItems="center" gap="01" padding="01">
        <wui-shimmer width="20px" height="20px"></wui-shimmer>
        <wui-shimmer width="32px" height="18px" borderRadius="4xs"></wui-shimmer>
      </wui-flex>`:o.html`
      <button ?disabled=${this.disabled} data-size=${this.size}>
        ${this.imageTemplate()} ${this.textTemplate()}
      </button>
    `}imageTemplate(){if(this.imageSrc&&this.chainImageSrc)return o.html`<wui-flex class="left-image-container">
        <wui-image src=${this.imageSrc} class="token-image"></wui-image>
        <wui-image src=${this.chainImageSrc} class="chain-image"></wui-image>
      </wui-flex>`;if(this.imageSrc)return o.html`<wui-image src=${this.imageSrc} class="token-image"></wui-image>`;let e=u[this.size];return o.html`<wui-flex class="left-icon-container">
      <wui-icon size=${e} name="networkPlaceholder"></wui-icon>
    </wui-flex>`}textTemplate(){let e=c[this.size];return o.html`<wui-text color="primary" variant=${e}
      >${this.text}</wui-text
    >`}};d.styles=[i.resetStyles,i.elementStyles,s],l([(0,r.property)()],d.prototype,"size",void 0),l([(0,r.property)()],d.prototype,"imageSrc",void 0),l([(0,r.property)()],d.prototype,"chainImageSrc",void 0),l([(0,r.property)({type:Boolean})],d.prototype,"disabled",void 0),l([(0,r.property)()],d.prototype,"text",void 0),l([(0,r.property)({type:Boolean})],d.prototype,"loading",void 0),d=l([(0,n.customElement)("wui-token-button")],d),e.s([],527585)}]);