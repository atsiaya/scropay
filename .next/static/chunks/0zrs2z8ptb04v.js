(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,649867,e=>{"use strict";e.i(720140);var t=e.i(227565),i=e.i(540647);e.i(890019);var r=e.i(378424),n=e.i(807333),o=e.i(829083),s=e.i(352714),l=e.i(610389),a=e.i(626074),c=e.i(153794),u=e.i(793700),d=e.i(966584),h=e.i(687478),p=e.i(565898),m=e.i(166758),f=e.i(492555);e.i(540417);var w=e.i(953166);e.i(496768),e.i(693043),e.i(125428),e.i(551089);var g=t,k=e.i(349820);e.i(920364);var v=e.i(732702);e.i(453424),e.i(855118);var y=e.i(555489);let b=y.css`
  :host {
    width: 100%;
    height: 100px;
    border-radius: ${({borderRadius:e})=>e["5"]};
    border: 1px solid ${({tokens:e})=>e.theme.foregroundPrimary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-1"]};
    will-change: background-color;
    position: relative;
  }

  :host(:hover) {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    display: ruby;
    color: ${({tokens:e})=>e.theme.textPrimary};
    margin: 0 ${({spacing:e})=>e["2"]};
  }

  .instruction {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
  }

  .paste {
    display: inline-flex;
  }

  textarea {
    background: transparent;
    width: 100%;
    font-family: ${({fontFamily:e})=>e.regular};
    font-style: normal;
    font-size: ${({textSize:e})=>e.large};
    font-weight: ${({fontWeight:e})=>e.regular};
    line-height: ${({typography:e})=>e["lg-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["lg-regular"].letterSpacing};
    color: ${({tokens:e})=>e.theme.textPrimary};
    caret-color: ${({tokens:e})=>e.core.backgroundAccentPrimary};
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
    border: none;
    outline: none;
    appearance: none;
    resize: none;
    overflow: hidden;
  }
`;var x=function(e,t,i,r){var n,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(s=(o<3?n(s):o>3?n(t,i,s):n(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let C=class extends g.LitElement{constructor(){super(...arguments),this.inputElementRef=(0,v.createRef)(),this.instructionElementRef=(0,v.createRef)(),this.readOnly=!1,this.instructionHidden=!!this.value,this.pasting=!1,this.onDebouncedSearch=c.CoreHelperUtil.debounce(async e=>{if(!e.length)return void this.setReceiverAddress("");let t=s.ChainController.state.activeChain;if(c.CoreHelperUtil.isAddress(e,t))return void this.setReceiverAddress(e);try{let t=await l.ConnectionController.getEnsAddress(e);if(t){h.SendController.setReceiverProfileName(e),h.SendController.setReceiverAddress(t);let i=await l.ConnectionController.getEnsAvatar(e);h.SendController.setReceiverProfileImageUrl(i||void 0)}}catch(t){this.setReceiverAddress(e)}finally{h.SendController.setLoading(!1)}})}firstUpdated(){this.value&&(this.instructionHidden=!0),this.checkHidden()}render(){return this.readOnly?i.html` <wui-flex
        flexDirection="column"
        justifyContent="center"
        gap="01"
        .padding=${["8","4","5","4"]}
      >
        <textarea
          spellcheck="false"
          ?disabled=${!0}
          autocomplete="off"
          .value=${this.value??""}
        ></textarea>
      </wui-flex>`:i.html` <wui-flex
      @click=${this.onBoxClick.bind(this)}
      flexDirection="column"
      justifyContent="center"
      gap="01"
      .padding=${["8","4","5","4"]}
    >
      <wui-text
        ${(0,v.ref)(this.instructionElementRef)}
        class="instruction"
        color="secondary"
        variant="md-medium"
      >
        Type or
        <wui-button
          class="paste"
          size="md"
          variant="neutral-secondary"
          iconLeft="copy"
          @click=${this.onPasteClick.bind(this)}
        >
          <wui-icon size="sm" color="inherit" slot="iconLeft" name="copy"></wui-icon>
          Paste
        </wui-button>
        address
      </wui-text>
      <textarea
        spellcheck="false"
        ?disabled=${!this.instructionHidden}
        ${(0,v.ref)(this.inputElementRef)}
        @input=${this.onInputChange.bind(this)}
        @blur=${this.onBlur.bind(this)}
        .value=${this.value??""}
        autocomplete="off"
      ></textarea>
    </wui-flex>`}async focusInput(){this.instructionElementRef.value&&(this.instructionHidden=!0,await this.toggleInstructionFocus(!1),this.instructionElementRef.value.style.pointerEvents="none",this.inputElementRef.value?.focus(),this.inputElementRef.value&&(this.inputElementRef.value.selectionStart=this.inputElementRef.value.selectionEnd=this.inputElementRef.value.value.length))}async focusInstruction(){this.instructionElementRef.value&&(this.instructionHidden=!1,await this.toggleInstructionFocus(!0),this.instructionElementRef.value.style.pointerEvents="auto",this.inputElementRef.value?.blur())}async toggleInstructionFocus(e){this.instructionElementRef.value&&await this.instructionElementRef.value.animate([{opacity:+!e},{opacity:+!!e}],{duration:100,easing:"ease",fill:"forwards"}).finished}onBoxClick(){this.value||this.instructionHidden||this.focusInput()}onBlur(){this.value||!this.instructionHidden||this.pasting||this.focusInstruction()}checkHidden(){this.instructionHidden&&this.focusInput()}async onPasteClick(){this.pasting=!0;let e=await navigator.clipboard.readText();h.SendController.setReceiverAddress(e),this.focusInput()}onInputChange(e){let t=e.target;this.pasting=!1,this.value=e.target?.value,t.value&&!this.instructionHidden&&this.focusInput(),h.SendController.setLoading(!0),this.onDebouncedSearch(t.value)}setReceiverAddress(e){h.SendController.setReceiverAddress(e),h.SendController.setReceiverProfileName(void 0),h.SendController.setReceiverProfileImageUrl(void 0),h.SendController.setLoading(!1)}};C.styles=b,x([(0,k.property)()],C.prototype,"value",void 0),x([(0,k.property)({type:Boolean})],C.prototype,"readOnly",void 0),x([(0,r.state)()],C.prototype,"instructionHidden",void 0),x([(0,r.state)()],C.prototype,"pasting",void 0),C=x([(0,w.customElement)("w3m-input-address")],C);var $=t,S=e.i(175848);e.i(787025),e.i(569046),e.i(527585);let A=y.css`
  :host {
    width: 100%;
    height: 100px;
    border-radius: ${({borderRadius:e})=>e["5"]};
    border: 1px solid ${({tokens:e})=>e.theme.foregroundPrimary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-1"]};
    will-change: background-color;
    transition: all ${({easings:e})=>e["ease-out-power-1"]}
      ${({durations:e})=>e.lg};
  }

  :host(:hover) {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  wui-input-amount {
    mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
  }

  .totalValue {
    width: 100%;
  }
`;var T=function(e,t,i,r){var n,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(s=(o<3?n(s):o>3?n(t,i,s):n(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let R=class extends $.LitElement{constructor(){super(...arguments),this.readOnly=!1,this.isInsufficientBalance=!1}render(){let e=this.readOnly||!this.token;return i.html` <wui-flex
      flexDirection="column"
      gap="01"
      .padding=${["5","3","4","3"]}
    >
      <wui-flex alignItems="center">
        <wui-input-amount
          @inputChange=${this.onInputChange.bind(this)}
          ?disabled=${e}
          .value=${this.sendTokenAmount??""}
          ?error=${!!this.isInsufficientBalance}
        ></wui-input-amount>
        ${this.buttonTemplate()}
      </wui-flex>
      ${this.bottomTemplate()}
    </wui-flex>`}buttonTemplate(){return this.token?i.html`<wui-token-button
        text=${this.token.symbol}
        imageSrc=${this.token.iconUrl}
        @click=${this.handleSelectButtonClick.bind(this)}
      >
      </wui-token-button>`:i.html`<wui-button
      size="md"
      variant="neutral-secondary"
      @click=${this.handleSelectButtonClick.bind(this)}
      >Select token</wui-button
    >`}handleSelectButtonClick(){this.readOnly||d.RouterController.push("WalletSendSelectToken")}sendValueTemplate(){if(!this.readOnly&&this.token&&this.sendTokenAmount){let e=this.token.price*Number(this.sendTokenAmount);return i.html`<wui-text class="totalValue" variant="sm-regular" color="secondary"
        >${e?`$${n.NumberUtil.formatNumberToLocalString(e,2)}`:"Incorrect value"}</wui-text
      >`}return null}maxAmountTemplate(){return this.token?i.html` <wui-text variant="sm-regular" color="secondary">
        ${S.UiHelperUtil.roundNumber(Number(this.token.quantity.numeric),6,5)}
      </wui-text>`:null}actionTemplate(){return this.token?i.html`<wui-link @click=${this.onMaxClick.bind(this)}>Max</wui-link>`:null}bottomTemplate(){return this.readOnly?null:i.html`<wui-flex alignItems="center" justifyContent="space-between">
      ${this.sendValueTemplate()}
      <wui-flex alignItems="center" gap="01" justifyContent="flex-end">
        ${this.maxAmountTemplate()} ${this.actionTemplate()}
      </wui-flex>
    </wui-flex>`}onInputChange(e){h.SendController.setTokenAmount(String(e.detail))}onMaxClick(){if(this.token){let e=Number(this.token.quantity.decimals),t=n.NumberUtil.bigNumber(this.token.quantity.numeric);if(!this.token.address&&this.gasPrice){let i=65000n*BigInt(this.gasPrice),r=n.NumberUtil.bigNumber(i.toString()).div(n.NumberUtil.bigNumber(10).pow(e)),o=t.minus(r);h.SendController.setTokenAmount(o.gt(0)?o.toFixed(e,0):"0")}else h.SendController.setTokenAmount(t.toFixed(e,0))}}};R.styles=A,T([(0,k.property)({type:Object})],R.prototype,"token",void 0),T([(0,k.property)({type:Boolean})],R.prototype,"readOnly",void 0),T([(0,k.property)({type:String})],R.prototype,"sendTokenAmount",void 0),T([(0,k.property)({type:Boolean})],R.prototype,"isInsufficientBalance",void 0),T([(0,k.property)({type:String})],R.prototype,"gasPrice",void 0),R=T([(0,w.customElement)("w3m-input-token")],R);let P=y.css`
  :host {
    display: block;
  }

  wui-flex {
    position: relative;
  }

  wui-icon-box {
    width: 32px;
    height: 32px;
    border-radius: ${({borderRadius:e})=>e["10"]} !important;
    border: 4px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
  }

  wui-button {
    --local-border-radius: ${({borderRadius:e})=>e["4"]} !important;
  }

  .inputContainer {
    height: fit-content;
  }
`;var E=function(e,t,i,r){var n,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(s=(o<3?n(s):o>3?n(t,i,s):n(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let N="Insufficient Funds",I="Preview Send",B=class extends t.LitElement{constructor(){super(),this.unsubscribe=[],this.isTryingToChooseDifferentWallet=!1,this.token=h.SendController.state.token,this.sendTokenAmount=h.SendController.state.sendTokenAmount,this.receiverAddress=h.SendController.state.receiverAddress,this.receiverProfileName=h.SendController.state.receiverProfileName,this.loading=h.SendController.state.loading,this.params=d.RouterController.state.data?.send,this.caipAddress=s.ChainController.getAccountData()?.caipAddress,this.disconnecting=!1,this.gasFee=m.SwapController.state.gasFee,this.token&&!this.params&&(this.fetchBalances(),this.fetchNetworkPrice());const e=s.ChainController.subscribeKey("activeCaipAddress",t=>{!t&&this.isTryingToChooseDifferentWallet&&(this.isTryingToChooseDifferentWallet=!1,u.ModalController.open({view:"Connect",data:{redirectView:"WalletSend"}}).catch(()=>null),e())});this.unsubscribe.push(s.ChainController.subscribeAccountStateProp("caipAddress",e=>{this.caipAddress=e}),h.SendController.subscribe(e=>{this.token=e.token,this.sendTokenAmount=e.sendTokenAmount,this.receiverAddress=e.receiverAddress,this.receiverProfileName=e.receiverProfileName,this.loading=e.loading}),m.SwapController.subscribeKey("gasFee",e=>{this.gasFee=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}async firstUpdated(){await this.handleSendParameters()}render(){let e=this.getMessage(),t=!!this.params;return i.html` <wui-flex flexDirection="column" .padding=${["0","4","4","4"]}>
      <wui-flex class="inputContainer" gap="2" flexDirection="column">
        <w3m-input-token
          .token=${this.token}
          .sendTokenAmount=${this.sendTokenAmount}
          .gasPrice=${this.gasFee}
          ?readOnly=${t}
          ?isInsufficientBalance=${e===N}
        ></w3m-input-token>
        <wui-icon-box size="md" variant="secondary" icon="arrowBottom"></wui-icon-box>
        <w3m-input-address
          ?readOnly=${t}
          .value=${this.receiverProfileName?this.receiverProfileName:this.receiverAddress}
        ></w3m-input-address>
      </wui-flex>
      ${this.buttonTemplate(e)}
    </wui-flex>`}async fetchBalances(){await h.SendController.fetchTokenBalance(),h.SendController.fetchNetworkBalance()}async fetchNetworkPrice(){await m.SwapController.getNetworkTokenPrice(),await m.SwapController.getInitialGasPrice()}onButtonClick(){d.RouterController.push("WalletSendPreview",{send:this.params})}onFundWalletClick(){d.RouterController.push("FundWallet",{redirectView:"WalletSend"})}async onConnectDifferentWalletClick(){try{this.isTryingToChooseDifferentWallet=!0,this.disconnecting=!0,await l.ConnectionController.disconnect()}finally{this.disconnecting=!1}}getMessage(){return this.token?this.sendTokenAmount?this.token.price&&!(Number(this.sendTokenAmount)*this.token.price)?"Incorrect Value":n.NumberUtil.bigNumber(this.sendTokenAmount).gt(this.token.quantity.numeric)?N:this.receiverAddress?c.CoreHelperUtil.isAddress(this.receiverAddress,s.ChainController.state.activeChain)?I:"Invalid Address":"Add Address":"Add Amount":"Select Token"}buttonTemplate(e){let t=!e.startsWith(I),r=e===N,n=!!this.params;return r&&!n?i.html`
        <wui-flex .margin=${["4","0","0","0"]} flexDirection="column" gap="4">
          <wui-button
            @click=${this.onFundWalletClick.bind(this)}
            size="lg"
            variant="accent-secondary"
            fullWidth
          >
            Fund Wallet
          </wui-button>

          <wui-separator data-testid="wui-separator" text="or"></wui-separator>

          <wui-button
            @click=${this.onConnectDifferentWalletClick.bind(this)}
            size="lg"
            variant="neutral-secondary"
            fullWidth
            ?loading=${this.disconnecting}
          >
            Connect a different wallet
          </wui-button>
        </wui-flex>
      `:i.html`<wui-flex .margin=${["4","0","0","0"]}>
      <wui-button
        @click=${this.onButtonClick.bind(this)}
        ?disabled=${t}
        size="lg"
        variant="accent-primary"
        ?loading=${this.loading}
        fullWidth
      >
        ${e}
      </wui-button>
    </wui-flex>`}async handleSendParameters(){if(this.loading=!0,!this.params){this.loading=!1;return}let e=Number(this.params.amount);if(isNaN(e)){p.SnackController.showError("Invalid amount"),this.loading=!1;return}let{namespace:t,chainId:i,assetAddress:r}=this.params;if(!a.ConstantsUtil.SEND_PARAMS_SUPPORTED_CHAINS.includes(t)){p.SnackController.showError(`Chain "${t}" is not supported for send parameters`),this.loading=!1;return}let n=s.ChainController.getCaipNetworkById(i,t);if(!n){p.SnackController.showError(`Network with id "${i}" not found`),this.loading=!1;return}try{let{balance:t,name:i,symbol:s,decimals:l}=await f.BalanceUtil.fetchERC20Balance({caipAddress:this.caipAddress,assetAddress:r,caipNetwork:n});if(!i||!s||!l||!t)return void p.SnackController.showError("Token not found");h.SendController.setToken({name:i,symbol:s,chainId:n.id.toString(),address:`${n.chainNamespace}:${n.id}:${r}`,value:0,price:0,quantity:{decimals:l.toString(),numeric:t.toString()},iconUrl:o.AssetUtil.getTokenImage(s)??""}),h.SendController.setTokenAmount(String(e)),h.SendController.setReceiverAddress(this.params.to)}catch(e){console.error("Failed to load token information:",e),p.SnackController.showError("Failed to load token information")}finally{this.loading=!1}}};B.styles=P,E([(0,r.state)()],B.prototype,"token",void 0),E([(0,r.state)()],B.prototype,"sendTokenAmount",void 0),E([(0,r.state)()],B.prototype,"receiverAddress",void 0),E([(0,r.state)()],B.prototype,"receiverProfileName",void 0),E([(0,r.state)()],B.prototype,"loading",void 0),E([(0,r.state)()],B.prototype,"params",void 0),E([(0,r.state)()],B.prototype,"caipAddress",void 0),E([(0,r.state)()],B.prototype,"disconnecting",void 0),E([(0,r.state)()],B.prototype,"gasFee",void 0),B=E([(0,w.customElement)("w3m-wallet-send-view")],B),e.s(["W3mWalletSendView",0,B],944526);var O=t;e.i(364280),e.i(535786);let D=y.css`
  .contentContainer {
    height: 440px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:e})=>e["3"]};
  }
`;var U=function(e,t,i,r){var n,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(s=(o<3?n(s):o>3?n(t,i,s):n(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let j=class extends O.LitElement{constructor(){super(),this.unsubscribe=[],this.tokenBalances=h.SendController.state.tokenBalances,this.search="",this.onDebouncedSearch=c.CoreHelperUtil.debounce(e=>{this.search=e}),this.fetchBalancesAndNetworkPrice(),this.unsubscribe.push(h.SendController.subscribe(e=>{this.tokenBalances=e.tokenBalances}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return i.html`
      <wui-flex flexDirection="column">
        ${this.templateSearchInput()} <wui-separator></wui-separator> ${this.templateTokens()}
      </wui-flex>
    `}async fetchBalancesAndNetworkPrice(){this.tokenBalances&&this.tokenBalances?.length!==0||(await this.fetchBalances(),await this.fetchNetworkPrice())}async fetchBalances(){await h.SendController.fetchTokenBalance(),h.SendController.fetchNetworkBalance()}async fetchNetworkPrice(){await m.SwapController.getNetworkTokenPrice()}templateSearchInput(){return i.html`
      <wui-flex gap="2" padding="3">
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){return this.tokens=this.tokenBalances?.filter(e=>e.chainId===s.ChainController.state.activeCaipNetwork?.caipNetworkId),this.search?this.filteredTokens=this.tokenBalances?.filter(e=>e.name.toLowerCase().includes(this.search.toLowerCase())):this.filteredTokens=this.tokens,i.html`
      <wui-flex
        class="contentContainer"
        flexDirection="column"
        .padding=${["0","3","0","3"]}
      >
        <wui-flex justifyContent="flex-start" .padding=${["4","3","3","3"]}>
          <wui-text variant="md-medium" color="secondary">Your tokens</wui-text>
        </wui-flex>
        <wui-flex flexDirection="column" gap="2">
          ${this.filteredTokens&&this.filteredTokens.length>0?this.filteredTokens.map(e=>i.html`<wui-list-token
                    @click=${this.handleTokenClick.bind(this,e)}
                    ?clickable=${!0}
                    tokenName=${e.name}
                    tokenImageUrl=${e.iconUrl}
                    tokenAmount=${e.quantity.numeric}
                    tokenValue=${e.value}
                    tokenCurrency=${e.symbol}
                  ></wui-list-token>`):i.html`<wui-flex
                .padding=${["20","0","0","0"]}
                alignItems="center"
                flexDirection="column"
                gap="4"
              >
                <wui-icon-box icon="coinPlaceholder" color="default" size="lg"></wui-icon-box>
                <wui-flex
                  class="textContent"
                  gap="2"
                  flexDirection="column"
                  justifyContent="center"
                  flexDirection="column"
                >
                  <wui-text variant="lg-medium" align="center" color="primary">
                    No tokens found
                  </wui-text>
                  <wui-text variant="lg-regular" align="center" color="secondary">
                    Your tokens will appear here
                  </wui-text>
                </wui-flex>
                <wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>
              </wui-flex>`}
        </wui-flex>
      </wui-flex>
    `}onBuyClick(){d.RouterController.push("OnRampProviders")}onInputChange(e){this.onDebouncedSearch(e.detail)}handleTokenClick(e){h.SendController.setToken(e),h.SendController.setTokenAmount(void 0),d.RouterController.goBack()}};j.styles=D,U([(0,r.state)()],j.prototype,"tokenBalances",void 0),U([(0,r.state)()],j.prototype,"tokens",void 0),U([(0,r.state)()],j.prototype,"filteredTokens",void 0),U([(0,r.state)()],j.prototype,"search",void 0),j=U([(0,w.customElement)("w3m-wallet-send-select-token-view")],j),e.s(["W3mSendSelectTokenView",0,j],419443);var W=t,V=e.i(313824),z=e.i(715312),H=e.i(149577),F=t;e.i(175235),e.i(621750),e.i(897818),e.i(967549);var L=e.i(964603);e.i(765028);let _=y.css`
  :host {
    height: 32px;
    display: flex;
    align-items: center;
    gap: ${({spacing:e})=>e[1]};
    border-radius: ${({borderRadius:e})=>e[32]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    padding: ${({spacing:e})=>e[1]};
    padding-left: ${({spacing:e})=>e[2]};
  }

  wui-avatar,
  wui-image {
    width: 24px;
    height: 24px;
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  wui-icon {
    border-radius: ${({borderRadius:e})=>e[16]};
  }
`;var M=function(e,t,i,r){var n,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(s=(o<3?n(s):o>3?n(t,i,s):n(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let K=class extends F.LitElement{constructor(){super(...arguments),this.text=""}render(){return i.html`<wui-text variant="lg-regular" color="primary">${this.text}</wui-text>
      ${this.imageTemplate()}`}imageTemplate(){return this.address?i.html`<wui-avatar address=${this.address} .imageSrc=${this.imageSrc}></wui-avatar>`:this.imageSrc?i.html`<wui-image src=${this.imageSrc}></wui-image>`:i.html`<wui-icon size="lg" color="inverse" name="networkPlaceholder"></wui-icon>`}};K.styles=[L.resetStyles,L.elementStyles,_],M([(0,k.property)({type:String})],K.prototype,"text",void 0),M([(0,k.property)({type:String})],K.prototype,"address",void 0),M([(0,k.property)({type:String})],K.prototype,"imageSrc",void 0),K=M([(0,w.customElement)("wui-preview-item")],K);var q=t;e.i(881514);var Y=e.i(931111),J=t;let G=y.css`
  :host {
    display: flex;
    padding: ${({spacing:e})=>e[4]} ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-image {
    width: 20px;
    height: 20px;
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }
`;var Q=function(e,t,i,r){var n,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(s=(o<3?n(s):o>3?n(t,i,s):n(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let X=class extends J.LitElement{constructor(){super(...arguments),this.imageSrc=void 0,this.textTitle="",this.textValue=void 0}render(){return i.html`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="lg-regular" color="primary"> ${this.textTitle} </wui-text>
        ${this.templateContent()}
      </wui-flex>
    `}templateContent(){return this.imageSrc?i.html`<wui-image src=${this.imageSrc} alt=${this.textTitle}></wui-image>`:this.textValue?i.html` <wui-text variant="md-regular" color="secondary"> ${this.textValue} </wui-text>`:i.html`<wui-icon size="inherit" color="default" name="networkPlaceholder"></wui-icon>`}};X.styles=[L.resetStyles,L.elementStyles,G],Q([(0,k.property)()],X.prototype,"imageSrc",void 0),Q([(0,k.property)()],X.prototype,"textTitle",void 0),Q([(0,k.property)()],X.prototype,"textValue",void 0),X=Q([(0,w.customElement)("wui-list-content")],X);let Z=y.css`
  :host {
    display: flex;
    width: auto;
    flex-direction: column;
    gap: ${({spacing:e})=>e["1"]};
    border-radius: ${({borderRadius:e})=>e["5"]};
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    padding: ${({spacing:e})=>e["3"]} ${({spacing:e})=>e["2"]}
      ${({spacing:e})=>e["2"]} ${({spacing:e})=>e["2"]};
  }

  wui-list-content {
    width: -webkit-fill-available !important;
  }

  wui-text {
    padding: 0 ${({spacing:e})=>e["2"]};
  }

  wui-flex {
    margin-top: ${({spacing:e})=>e["2"]};
  }

  .network {
    cursor: pointer;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-1"]};
    will-change: background-color;
  }

  .network:focus-visible {
    border: 1px solid ${({tokens:e})=>e.core.textAccentPrimary};
    background-color: ${({tokens:e})=>e.core.glass010};
    -webkit-box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent010};
    -moz-box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent010};
    box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent010};
  }

  .network:hover {
    background-color: ${({tokens:e})=>e.core.glass010};
  }

  .network:active {
    background-color: ${({tokens:e})=>e.core.glass010};
  }
`;var ee=function(e,t,i,r){var n,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(s=(o<3?n(s):o>3?n(t,i,s):n(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let et=class extends q.LitElement{constructor(){super(...arguments),this.params=d.RouterController.state.data?.send}render(){return i.html` <wui-text variant="sm-regular" color="secondary">Details</wui-text>
      <wui-flex flexDirection="column" gap="1">
        <wui-list-content
          textTitle="Address"
          textValue=${S.UiHelperUtil.getTruncateString({string:this.receiverAddress??"",charsStart:4,charsEnd:4,truncate:"middle"})}
        >
        </wui-list-content>
        ${this.networkTemplate()}
      </wui-flex>`}networkTemplate(){return this.caipNetwork?.name?i.html` <wui-list-content
        @click=${()=>this.onNetworkClick(this.caipNetwork)}
        class="network"
        textTitle="Network"
        imageSrc=${(0,Y.ifDefined)(o.AssetUtil.getNetworkImage(this.caipNetwork))}
      ></wui-list-content>`:null}onNetworkClick(e){e&&!this.params&&d.RouterController.push("Networks",{network:e})}};et.styles=Z,ee([(0,k.property)()],et.prototype,"receiverAddress",void 0),ee([(0,k.property)({type:Object})],et.prototype,"caipNetwork",void 0),ee([(0,r.state)()],et.prototype,"params",void 0),et=ee([(0,w.customElement)("w3m-wallet-send-details")],et);let ei=y.css`
  wui-avatar,
  wui-image {
    display: ruby;
    width: 32px;
    height: 32px;
    border-radius: ${({borderRadius:e})=>e["20"]};
  }

  .sendButton {
    width: 70%;
    --local-width: 100% !important;
    --local-border-radius: ${({borderRadius:e})=>e["4"]} !important;
  }

  .cancelButton {
    width: 30%;
    --local-width: 100% !important;
    --local-border-radius: ${({borderRadius:e})=>e["4"]} !important;
  }
`;var er=function(e,t,i,r){var n,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(s=(o<3?n(s):o>3?n(t,i,s):n(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let en=class extends W.LitElement{constructor(){super(),this.unsubscribe=[],this.token=h.SendController.state.token,this.sendTokenAmount=h.SendController.state.sendTokenAmount,this.receiverAddress=h.SendController.state.receiverAddress,this.receiverProfileName=h.SendController.state.receiverProfileName,this.receiverProfileImageUrl=h.SendController.state.receiverProfileImageUrl,this.caipNetwork=s.ChainController.state.activeCaipNetwork,this.loading=h.SendController.state.loading,this.params=d.RouterController.state.data?.send,this.unsubscribe.push(h.SendController.subscribe(e=>{this.token=e.token,this.sendTokenAmount=e.sendTokenAmount,this.receiverAddress=e.receiverAddress,this.receiverProfileName=e.receiverProfileName,this.receiverProfileImageUrl=e.receiverProfileImageUrl,this.loading=e.loading}),s.ChainController.subscribeKey("activeCaipNetwork",e=>this.caipNetwork=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return i.html` <wui-flex flexDirection="column" .padding=${["0","4","4","4"]}>
      <wui-flex gap="2" flexDirection="column" .padding=${["0","2","0","2"]}>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-flex flexDirection="column" gap="01">
            <wui-text variant="sm-regular" color="secondary">Send</wui-text>
            ${this.sendValueTemplate()}
          </wui-flex>
          <wui-preview-item
            text="${this.sendTokenAmount?S.UiHelperUtil.roundNumber(Number(this.sendTokenAmount),6,5):"unknown"} ${this.token?.symbol}"
            .imageSrc=${this.token?.iconUrl}
          ></wui-preview-item>
        </wui-flex>
        <wui-flex>
          <wui-icon color="default" size="md" name="arrowBottom"></wui-icon>
        </wui-flex>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="sm-regular" color="secondary">To</wui-text>
          <wui-preview-item
            text="${this.receiverProfileName?S.UiHelperUtil.getTruncateString({string:this.receiverProfileName,charsStart:20,charsEnd:0,truncate:"end"}):S.UiHelperUtil.getTruncateString({string:this.receiverAddress?this.receiverAddress:"",charsStart:4,charsEnd:4,truncate:"middle"})}"
            address=${this.receiverAddress??""}
            .imageSrc=${this.receiverProfileImageUrl??void 0}
            .isAddress=${!0}
          ></wui-preview-item>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" .padding=${["6","0","0","0"]}>
        <w3m-wallet-send-details
          .caipNetwork=${this.caipNetwork}
          .receiverAddress=${this.receiverAddress}
        ></w3m-wallet-send-details>
        <wui-flex justifyContent="center" gap="1" .padding=${["3","0","0","0"]}>
          <wui-icon size="sm" color="default" name="warningCircle"></wui-icon>
          <wui-text variant="sm-regular" color="secondary">Review transaction carefully</wui-text>
        </wui-flex>
        <wui-flex justifyContent="center" gap="3" .padding=${["4","0","0","0"]}>
          <wui-button
            class="cancelButton"
            @click=${this.onCancelClick.bind(this)}
            size="lg"
            variant="neutral-secondary"
          >
            Cancel
          </wui-button>
          <wui-button
            class="sendButton"
            @click=${this.onSendClick.bind(this)}
            size="lg"
            variant="accent-primary"
            .loading=${this.loading}
          >
            Send
          </wui-button>
        </wui-flex>
      </wui-flex></wui-flex
    >`}sendValueTemplate(){if(!this.params&&this.token&&this.sendTokenAmount){let e=this.token.price*Number(this.sendTokenAmount);return i.html`<wui-text variant="md-regular" color="primary"
        >$${e.toFixed(2)}</wui-text
      >`}return null}async onSendClick(){if(!this.sendTokenAmount||!this.receiverAddress)return void p.SnackController.showError("Please enter a valid amount and receiver address");try{await h.SendController.sendToken(),this.params?d.RouterController.reset("WalletSendConfirmed"):(p.SnackController.showSuccess("Transaction started"),d.RouterController.replace("Account"))}catch(r){let e="Failed to send transaction",t=r instanceof z.AppKitError&&r.originalName===V.ErrorUtil.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST,i=r instanceof z.AppKitError&&r.originalName===V.ErrorUtil.PROVIDER_RPC_ERROR_NAME.SEND_TRANSACTION_ERROR;(t||i)&&(e=r.message),H.EventsController.sendEvent({type:"track",event:t?"SEND_REJECTED":"SEND_ERROR",properties:h.SendController.getSdkEventProperties(r)}),p.SnackController.showError(e)}}onCancelClick(){d.RouterController.goBack()}};en.styles=ei,er([(0,r.state)()],en.prototype,"token",void 0),er([(0,r.state)()],en.prototype,"sendTokenAmount",void 0),er([(0,r.state)()],en.prototype,"receiverAddress",void 0),er([(0,r.state)()],en.prototype,"receiverProfileName",void 0),er([(0,r.state)()],en.prototype,"receiverProfileImageUrl",void 0),er([(0,r.state)()],en.prototype,"caipNetwork",void 0),er([(0,r.state)()],en.prototype,"loading",void 0),er([(0,r.state)()],en.prototype,"params",void 0),en=er([(0,w.customElement)("w3m-wallet-send-preview-view")],en),e.s(["W3mWalletSendPreviewView",0,en],46248);var eo=t;let es=y.css`
  .icon-box {
    width: 64px;
    height: 64px;
    border-radius: 16px;
    background-color: ${({spacing:e})=>e[16]};
    border: 8px solid ${({tokens:e})=>e.theme.borderPrimary};
    border-radius: ${({borderRadius:e})=>e.round};
  }
`,el=class extends eo.LitElement{constructor(){super(),this.unsubscribe=[],this.unsubscribe.push()}render(){return i.html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="4"
        .padding="${["1","3","4","3"]}"
      >
        <wui-flex justifyContent="center" alignItems="center" class="icon-box">
          <wui-icon size="xxl" color="success" name="checkmark"></wui-icon>
        </wui-flex>

        <wui-text variant="h6-medium" color="primary">You successfully sent asset</wui-text>

        <wui-button
          fullWidth
          @click=${this.onCloseClick.bind(this)}
          size="lg"
          variant="neutral-secondary"
        >
          Close
        </wui-button>
      </wui-flex>
    `}onCloseClick(){u.ModalController.close()}};el.styles=es,el=function(e,t,i,r){var n,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(s=(o<3?n(s):o>3?n(t,i,s):n(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s}([(0,w.customElement)("w3m-send-confirmed-view")],el),e.s(["W3mSendConfirmedView",0,el],776202),e.s([],381846),e.i(381846),e.i(944526),e.i(419443),e.i(46248),e.i(776202),e.s(["W3mSendConfirmedView",0,el,"W3mSendSelectTokenView",0,j,"W3mWalletSendPreviewView",0,en,"W3mWalletSendView",0,B],649867)}]);