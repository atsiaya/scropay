(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,166758,e=>{"use strict";var t=e.i(374225),o=e.i(165064),r=e.i(807333),n=e.i(172339),a=e.i(727068),i=e.i(492555),s=e.i(34602),c=e.i(626074),l=e.i(153794),d=e.i(683647);let u={getGasPriceInEther:(e,t)=>Number(t*e)/1e18,getGasPriceInUSD(e,t,o){let n=u.getGasPriceInEther(t,o);return r.NumberUtil.bigNumber(e).times(n).toNumber()},getPriceImpact({sourceTokenAmount:e,sourceTokenPriceInUSD:t,toTokenPriceInUSD:o,toTokenAmount:n}){let a=r.NumberUtil.bigNumber(e).times(t),i=r.NumberUtil.bigNumber(n).times(o);return a.minus(i).div(a).times(100).toNumber()},getMaxSlippage(e,t){let o=r.NumberUtil.bigNumber(e).div(100);return r.NumberUtil.multiply(t,o).toNumber()},getProviderFee:(e,t=.0085)=>r.NumberUtil.bigNumber(e).times(t).toString(),isInsufficientNetworkTokenForGas:(e,t)=>!!r.NumberUtil.bigNumber(e).eq(0)||r.NumberUtil.bigNumber(r.NumberUtil.bigNumber(t||"0")).gt(e),isInsufficientSourceTokenForSwap(e,t,o){let n=o?.find(e=>e.address===t)?.quantity?.numeric;return r.NumberUtil.bigNumber(n||"0").lt(e)}};var m=e.i(715312),p=e.i(246923),g=e.i(893796),k=e.i(352714),T=e.i(610389),h=e.i(209884),w=e.i(149577),b=e.i(966584),A=e.i(565898);let S={initializing:!1,initialized:!1,loadingPrices:!1,loadingQuote:!1,loadingApprovalTransaction:!1,loadingBuildTransaction:!1,loadingTransaction:!1,switchingTokens:!1,fetchError:!1,approvalTransaction:void 0,swapTransaction:void 0,transactionError:void 0,sourceToken:void 0,sourceTokenAmount:"",sourceTokenPriceInUSD:0,toToken:void 0,toTokenAmount:"",toTokenPriceInUSD:0,networkPrice:"0",networkBalanceInUSD:"0",networkTokenSymbol:"",inputError:void 0,slippage:c.ConstantsUtil.CONVERT_SLIPPAGE_TOLERANCE,tokens:void 0,popularTokens:void 0,suggestedTokens:void 0,foundTokens:void 0,myTokensWithBalance:void 0,tokensPriceMap:{},gasFee:"0",gasPriceInUSD:0,priceImpact:void 0,maxSlippage:void 0,providerFee:void 0},C=(0,t.proxy)({...S}),y={state:C,subscribe:e=>(0,t.subscribe)(C,()=>e(C)),subscribeKey:(e,t)=>(0,o.subscribeKey)(C,e,t),getParams(){let e=k.ChainController.state.activeChain,t=k.ChainController.getAccountData(e)?.caipAddress??k.ChainController.state.activeCaipAddress,o=l.CoreHelperUtil.getPlainAddress(t),a=(0,s.getActiveNetworkTokenAddress)(),i=h.ConnectorController.getConnectorId(k.ChainController.state.activeChain);if(!o)throw Error("No address found to swap the tokens from.");let c=!C.toToken?.address||!C.toToken?.decimals,d=!C.sourceToken?.address||!C.sourceToken?.decimals||!r.NumberUtil.bigNumber(C.sourceTokenAmount).gt(0),u=!C.sourceTokenAmount;return{networkAddress:a,fromAddress:o,fromCaipAddress:t,sourceTokenAddress:C.sourceToken?.address,toTokenAddress:C.toToken?.address,toTokenAmount:C.toTokenAmount,toTokenDecimals:C.toToken?.decimals,sourceTokenAmount:C.sourceTokenAmount,sourceTokenDecimals:C.sourceToken?.decimals,invalidToToken:c,invalidSourceToken:d,invalidSourceTokenAmount:u,availableToSwap:t&&!c&&!d&&!u,isAuthConnector:i===n.ConstantsUtil.CONNECTOR_ID.AUTH}},async setSourceToken(e){if(!e){C.sourceToken=e,C.sourceTokenAmount="",C.sourceTokenPriceInUSD=0;return}C.sourceToken=e,await f.setTokenPrice(e.address,"sourceToken")},setSourceTokenAmount(e){C.sourceTokenAmount=e},async setToToken(e){if(!e){C.toToken=e,C.toTokenAmount="",C.toTokenPriceInUSD=0;return}C.toToken=e,await f.setTokenPrice(e.address,"toToken")},setToTokenAmount(e){C.toTokenAmount=e?r.NumberUtil.toFixed(e,6):""},async setTokenPrice(e,t){let o=C.tokensPriceMap[e]||0;o||(C.loadingPrices=!0,o=await f.getAddressPrice(e)),"sourceToken"===t?C.sourceTokenPriceInUSD=o:"toToken"===t&&(C.toTokenPriceInUSD=o),C.loadingPrices&&(C.loadingPrices=!1),f.getParams().availableToSwap&&!C.switchingTokens&&f.swapTokens()},async switchTokens(){if(!C.initializing&&C.initialized&&!C.switchingTokens){C.switchingTokens=!0;try{let e=C.toToken?{...C.toToken}:void 0,t=C.sourceToken?{...C.sourceToken}:void 0,o=e&&""===C.toTokenAmount?"1":C.toTokenAmount;f.setSourceTokenAmount(o),f.setToTokenAmount(""),await f.setSourceToken(e),await f.setToToken(t),C.switchingTokens=!1,f.swapTokens()}catch(e){throw C.switchingTokens=!1,e}}},resetState(){C.myTokensWithBalance=S.myTokensWithBalance,C.tokensPriceMap=S.tokensPriceMap,C.initialized=S.initialized,C.initializing=S.initializing,C.switchingTokens=S.switchingTokens,C.sourceToken=S.sourceToken,C.sourceTokenAmount=S.sourceTokenAmount,C.sourceTokenPriceInUSD=S.sourceTokenPriceInUSD,C.toToken=S.toToken,C.toTokenAmount=S.toTokenAmount,C.toTokenPriceInUSD=S.toTokenPriceInUSD,C.networkPrice=S.networkPrice,C.networkTokenSymbol=S.networkTokenSymbol,C.networkBalanceInUSD=S.networkBalanceInUSD,C.inputError=S.inputError},resetValues(){let{networkAddress:e}=f.getParams(),t=C.tokens?.find(t=>t.address===e);f.setSourceToken(t),f.setToToken(void 0)},getApprovalLoadingState:()=>C.loadingApprovalTransaction,clearError(){C.transactionError=void 0},async initializeState(){if(!C.initializing){if(C.initializing=!0,!C.initialized)try{await f.fetchTokens(),C.initialized=!0}catch(e){C.initialized=!1,A.SnackController.showError("Failed to initialize swap"),b.RouterController.goBack()}C.initializing=!1}},async fetchTokens(){let{networkAddress:e}=f.getParams();await f.getNetworkTokenPrice(),await f.getMyTokensWithBalance();let t=C.myTokensWithBalance?.find(t=>t.address===e);t&&(C.networkTokenSymbol=t.symbol,f.setSourceToken(t),f.setSourceTokenAmount("0"))},async getTokenList(){let e=k.ChainController.state.activeCaipNetwork?.caipNetworkId;if(C.caipNetworkId!==e||!C.tokens)try{C.tokensLoading=!0;let t=await d.SwapApiUtil.getTokenList(e);C.tokens=t,C.caipNetworkId=e,C.popularTokens=t.sort((e,t)=>e.symbol<t.symbol?-1:+(e.symbol>t.symbol));let o=(e&&c.ConstantsUtil.SUGGESTED_TOKENS_BY_CHAIN?.[e]||[]).map(e=>t.find(t=>t.symbol===e)).filter(e=>!!e),r=(c.ConstantsUtil.SWAP_SUGGESTED_TOKENS||[]).map(e=>t.find(t=>t.symbol===e)).filter(e=>!!e).filter(e=>!o.some(t=>t.address===e.address));C.suggestedTokens=[...o,...r]}catch(e){C.tokens=[],C.popularTokens=[],C.suggestedTokens=[]}finally{C.tokensLoading=!1}},async getAddressPrice(e){let t=C.tokensPriceMap[e];if(t)return t;let o=await g.BlockchainApiController.fetchTokenPrice({addresses:[e]}),r=o?.fungibles||[],n=[...C.tokens||[],...C.myTokensWithBalance||[]],a=n?.find(t=>t.address===e)?.symbol,i=parseFloat((r.find(e=>e.symbol.toLowerCase()===a?.toLowerCase())?.price||0).toString());return C.tokensPriceMap[e]=i,i},async getNetworkTokenPrice(){let{networkAddress:e}=f.getParams(),t=await g.BlockchainApiController.fetchTokenPrice({addresses:[e]}).catch(()=>(A.SnackController.showError("Failed to fetch network token price"),{fungibles:[]})),o=t.fungibles?.[0],r=o?.price.toString()||"0";C.tokensPriceMap[e]=parseFloat(r),C.networkTokenSymbol=o?.symbol||"",C.networkPrice=r},async getMyTokensWithBalance(e){let t=await i.BalanceUtil.getMyTokensWithBalance({forceUpdate:e,caipNetwork:k.ChainController.state.activeCaipNetwork,address:k.ChainController.getAccountData()?.address}),o=d.SwapApiUtil.mapBalancesToSwapTokens(t);o&&(await f.getInitialGasPrice(),f.setBalances(o))},setBalances(e){let{networkAddress:t}=f.getParams(),o=k.ChainController.state.activeCaipNetwork;if(!o)return;let n=e.find(e=>e.address===t);e.forEach(e=>{C.tokensPriceMap[e.address]=e.price||0}),C.myTokensWithBalance=e.filter(e=>e.address.startsWith(o.caipNetworkId)),C.networkBalanceInUSD=n?r.NumberUtil.multiply(n.quantity.numeric,n.price).toString():"0"},async getInitialGasPrice(){let e=await d.SwapApiUtil.fetchGasPrice();if(!e)return{gasPrice:null,gasPriceInUSD:null};switch(k.ChainController.state?.activeCaipNetwork?.chainNamespace){case n.ConstantsUtil.CHAIN.SOLANA:return C.gasFee=e.standard??"0",C.gasPriceInUSD=r.NumberUtil.multiply(e.standard,C.networkPrice).div(1e9).toNumber(),{gasPrice:BigInt(C.gasFee),gasPriceInUSD:Number(C.gasPriceInUSD)};case n.ConstantsUtil.CHAIN.EVM:default:let t=e.standard??"0",o=BigInt(t),a=BigInt(15e4),i=u.getGasPriceInUSD(C.networkPrice,a,o);return C.gasFee=t,C.gasPriceInUSD=i,{gasPrice:o,gasPriceInUSD:i}}},async swapTokens(){let e=k.ChainController.getAccountData()?.address,t=C.sourceToken,o=C.toToken,n=r.NumberUtil.bigNumber(C.sourceTokenAmount).gt(0);if(n||f.setToTokenAmount(""),!o||!t||C.loadingPrices||!n||!e)return;C.loadingQuote=!0;let a=r.NumberUtil.bigNumber(C.sourceTokenAmount).times(10**t.decimals).round(0).toFixed(0);try{let n=await g.BlockchainApiController.fetchSwapQuote({userAddress:e,from:t.address,to:o.address,gasPrice:C.gasFee,amount:a.toString()});C.loadingQuote=!1;let i=n?.quotes?.[0]?.toAmount;if(!i)return void p.AlertController.open({displayMessage:"Incorrect amount",debugMessage:"Please enter a valid amount"},"error");let s=r.NumberUtil.bigNumber(i).div(10**o.decimals).toString();f.setToTokenAmount(s),f.hasInsufficientToken(C.sourceTokenAmount,t.address)?C.inputError="Insufficient balance":(C.inputError=void 0,f.setTransactionDetails())}catch(t){let e=await d.SwapApiUtil.handleSwapError(t);C.loadingQuote=!1,C.inputError=e||"Insufficient balance"}},async getTransaction(){let{fromCaipAddress:e,availableToSwap:t}=f.getParams(),o=C.sourceToken,r=C.toToken;if(e&&t&&o&&r&&!C.loadingQuote)try{let t;return C.loadingBuildTransaction=!0,t=await d.SwapApiUtil.fetchSwapAllowance({userAddress:e,tokenAddress:o.address,sourceTokenAmount:C.sourceTokenAmount,sourceTokenDecimals:o.decimals})?await f.createSwapTransaction():await f.createAllowanceTransaction(),C.loadingBuildTransaction=!1,C.fetchError=!1,t}catch(e){b.RouterController.goBack(),A.SnackController.showError("Failed to check allowance"),C.loadingBuildTransaction=!1,C.approvalTransaction=void 0,C.swapTransaction=void 0,C.fetchError=!0;return}},async createAllowanceTransaction(){let{fromCaipAddress:e,sourceTokenAddress:t,toTokenAddress:o}=f.getParams();if(e&&o){if(!t)throw Error("createAllowanceTransaction - No source token address found.");try{let r=await g.BlockchainApiController.generateApproveCalldata({from:t,to:o,userAddress:e}),n=l.CoreHelperUtil.getPlainAddress(r.tx.from);if(!n)throw Error("SwapController:createAllowanceTransaction - address is required");let a={data:r.tx.data,to:n,gasPrice:BigInt(r.tx.eip155.gasPrice),value:BigInt(r.tx.value),toAmount:C.toTokenAmount};return C.swapTransaction=void 0,C.approvalTransaction={data:a.data,to:a.to,gasPrice:a.gasPrice,value:a.value,toAmount:a.toAmount},{data:a.data,to:a.to,gasPrice:a.gasPrice,value:a.value,toAmount:a.toAmount}}catch(e){b.RouterController.goBack(),A.SnackController.showError("Failed to create approval transaction"),C.approvalTransaction=void 0,C.swapTransaction=void 0,C.fetchError=!0;return}}},async createSwapTransaction(){let{networkAddress:e,fromCaipAddress:t,sourceTokenAmount:o}=f.getParams(),r=C.sourceToken,n=C.toToken;if(!t||!o||!r||!n)return;let a=T.ConnectionController.parseUnits(o,r.decimals)?.toString();try{let o=r.address===e,i=await g.BlockchainApiController.generateSwapCalldata({userAddress:t,from:r.address,to:n.address,amount:a,disableEstimate:!0}),s=BigInt(i.tx.eip155.gas),c=BigInt(i.tx.eip155.gasPrice);if(o&&a){let o=C.myTokensWithBalance?.find(t=>t.address===e);if(o){let e=parseInt(o.quantity.decimals,10),l=T.ConnectionController.parseUnits(o.quantity.numeric,e)??0n,d=s*c;if(BigInt(a)+d>l){let e=l>d?l-d:0n;e>0n&&(i=await g.BlockchainApiController.generateSwapCalldata({userAddress:t,from:r.address,to:n.address,amount:e.toString(),disableEstimate:!0}),a=e.toString(),s=BigInt(i.tx.eip155.gas),c=BigInt(i.tx.eip155.gasPrice))}}}let d=l.CoreHelperUtil.getPlainAddress(i.tx.to);if(!d)throw Error("SwapController:createSwapTransaction - address is required");let m={data:i.tx.data,to:d,gas:s,gasPrice:c,value:o?BigInt(a??"0"):BigInt("0"),toAmount:C.toTokenAmount};return C.gasPriceInUSD=u.getGasPriceInUSD(C.networkPrice,s,c),C.approvalTransaction=void 0,C.swapTransaction=m,m}catch(e){b.RouterController.goBack(),A.SnackController.showError("Failed to create transaction"),C.approvalTransaction=void 0,C.swapTransaction=void 0,C.fetchError=!0;return}},onEmbeddedWalletApprovalSuccess(){A.SnackController.showLoading("Approve limit increase in your wallet"),b.RouterController.replace("SwapPreview")},async sendTransactionForApproval(e){let{fromAddress:t,isAuthConnector:o}=f.getParams();C.loadingApprovalTransaction=!0,o?b.RouterController.pushTransactionStack({onSuccess:f.onEmbeddedWalletApprovalSuccess}):A.SnackController.showLoading("Approve limit increase in your wallet");try{await T.ConnectionController.sendTransaction({address:t,to:e.to,data:e.data,value:e.value,chainNamespace:n.ConstantsUtil.CHAIN.EVM}),await f.swapTokens(),await f.getTransaction(),C.approvalTransaction=void 0,C.loadingApprovalTransaction=!1}catch(e){C.transactionError=e?.displayMessage,C.loadingApprovalTransaction=!1,A.SnackController.showError(e?.displayMessage||"Transaction error"),w.EventsController.sendEvent({type:"track",event:"SWAP_APPROVAL_ERROR",properties:{message:e?.displayMessage||e?.message||"Unknown",network:k.ChainController.state.activeCaipNetwork?.caipNetworkId||"",swapFromToken:f.state.sourceToken?.symbol||"",swapToToken:f.state.toToken?.symbol||"",swapFromAmount:f.state.sourceTokenAmount||"",swapToAmount:f.state.toTokenAmount||"",isSmartAccount:(0,s.getPreferredAccountType)(n.ConstantsUtil.CHAIN.EVM)===a.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT}})}},async sendTransactionForSwap(e){if(!e)return;let{fromAddress:t,toTokenAmount:o,isAuthConnector:i}=f.getParams();C.loadingTransaction=!0;let c=`Swapping ${C.sourceToken?.symbol} to ${r.NumberUtil.formatNumberToLocalString(o,3)} ${C.toToken?.symbol}`,l=`Swapped ${C.sourceToken?.symbol} to ${r.NumberUtil.formatNumberToLocalString(o,3)} ${C.toToken?.symbol}`;i?b.RouterController.pushTransactionStack({onSuccess(){b.RouterController.replace("Account"),A.SnackController.showLoading(c),y.resetState()}}):A.SnackController.showLoading("Confirm transaction in your wallet");try{let o=[C.sourceToken?.address,C.toToken?.address].join(","),r=await T.ConnectionController.sendTransaction({address:t,to:e.to,data:e.data,value:e.value,chainNamespace:n.ConstantsUtil.CHAIN.EVM});return C.loadingTransaction=!1,A.SnackController.showSuccess(l),w.EventsController.sendEvent({type:"track",event:"SWAP_SUCCESS",properties:{network:k.ChainController.state.activeCaipNetwork?.caipNetworkId||"",swapFromToken:f.state.sourceToken?.symbol||"",swapToToken:f.state.toToken?.symbol||"",swapFromAmount:f.state.sourceTokenAmount||"",swapToAmount:f.state.toTokenAmount||"",isSmartAccount:(0,s.getPreferredAccountType)(n.ConstantsUtil.CHAIN.EVM)===a.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT}}),y.resetState(),i||b.RouterController.replace("Account"),y.getMyTokensWithBalance(o),r}catch(e){C.transactionError=e?.displayMessage,C.loadingTransaction=!1,A.SnackController.showError(e?.displayMessage||"Transaction error"),w.EventsController.sendEvent({type:"track",event:"SWAP_ERROR",properties:{message:e?.displayMessage||e?.message||"Unknown",network:k.ChainController.state.activeCaipNetwork?.caipNetworkId||"",swapFromToken:f.state.sourceToken?.symbol||"",swapToToken:f.state.toToken?.symbol||"",swapFromAmount:f.state.sourceTokenAmount||"",swapToAmount:f.state.toTokenAmount||"",isSmartAccount:(0,s.getPreferredAccountType)(n.ConstantsUtil.CHAIN.EVM)===a.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT}});return}},hasInsufficientToken:(e,t)=>u.isInsufficientSourceTokenForSwap(e,t,C.myTokensWithBalance),setTransactionDetails(){let{toTokenAddress:e,toTokenDecimals:t}=f.getParams();e&&t&&(C.gasPriceInUSD=u.getGasPriceInUSD(C.networkPrice,BigInt(C.gasFee),BigInt(15e4)),C.priceImpact=u.getPriceImpact({sourceTokenAmount:C.sourceTokenAmount,sourceTokenPriceInUSD:C.sourceTokenPriceInUSD,toTokenPriceInUSD:C.toTokenPriceInUSD,toTokenAmount:C.toTokenAmount}),C.maxSlippage=u.getMaxSlippage(C.slippage,C.toTokenAmount),C.providerFee=u.getProviderFee(C.sourceTokenAmount))}},f=(0,m.withErrorBoundary)(y);e.s(["SwapController",0,f],166758)},527585,e=>{"use strict";e.i(720140);var t=e.i(227565),o=e.i(540647);e.i(890019);var r=e.i(349820);e.i(175235),e.i(621750),e.i(608353),e.i(897818),e.i(967549);var n=e.i(964603),a=e.i(953166),i=e.i(555489);let s=i.css`
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
`;var c=function(e,t,o,r){var n,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(i=(a<3?n(i):a>3?n(t,o,i):n(t,o))||i);return a>3&&i&&Object.defineProperty(t,o,i),i};let l={lg:"lg-regular",md:"lg-regular",sm:"md-regular"},d={lg:"lg",md:"md",sm:"sm"},u=class extends t.LitElement{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.text="",this.loading=!1}render(){return this.loading?o.html` <wui-flex alignItems="center" gap="01" padding="01">
        <wui-shimmer width="20px" height="20px"></wui-shimmer>
        <wui-shimmer width="32px" height="18px" borderRadius="4xs"></wui-shimmer>
      </wui-flex>`:o.html`
      <button ?disabled=${this.disabled} data-size=${this.size}>
        ${this.imageTemplate()} ${this.textTemplate()}
      </button>
    `}imageTemplate(){if(this.imageSrc&&this.chainImageSrc)return o.html`<wui-flex class="left-image-container">
        <wui-image src=${this.imageSrc} class="token-image"></wui-image>
        <wui-image src=${this.chainImageSrc} class="chain-image"></wui-image>
      </wui-flex>`;if(this.imageSrc)return o.html`<wui-image src=${this.imageSrc} class="token-image"></wui-image>`;let e=d[this.size];return o.html`<wui-flex class="left-icon-container">
      <wui-icon size=${e} name="networkPlaceholder"></wui-icon>
    </wui-flex>`}textTemplate(){let e=l[this.size];return o.html`<wui-text color="primary" variant=${e}
      >${this.text}</wui-text
    >`}};u.styles=[n.resetStyles,n.elementStyles,s],c([(0,r.property)()],u.prototype,"size",void 0),c([(0,r.property)()],u.prototype,"imageSrc",void 0),c([(0,r.property)()],u.prototype,"chainImageSrc",void 0),c([(0,r.property)({type:Boolean})],u.prototype,"disabled",void 0),c([(0,r.property)()],u.prototype,"text",void 0),c([(0,r.property)({type:Boolean})],u.prototype,"loading",void 0),u=c([(0,a.customElement)("wui-token-button")],u),e.s([],527585)}]);