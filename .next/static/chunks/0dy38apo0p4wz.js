(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,808060,e=>{"use strict";e.i(621750),e.s([])},787025,e=>{"use strict";e.i(720140);var t=e.i(227565),i=e.i(540647);e.i(890019);var n=e.i(349820);e.i(920364);var o=e.i(732702),r=e.i(555489),a=e.i(964603),s=e.i(175848),l=e.i(953166);let c=r.css`
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
`;var u=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let h=class extends t.LitElement{constructor(){super(...arguments),this.inputElementRef=(0,o.createRef)(),this.disabled=!1,this.value="",this.placeholder="0",this.widthVariant="auto",this.maxDecimals=void 0,this.maxIntegers=void 0,this.fontSize="h4",this.error=!1}firstUpdated(){this.resizeInput()}updated(){this.style.setProperty("--local-font-size",r.vars.textSize[this.fontSize]),this.resizeInput()}render(){return(this.dataset.widthVariant=this.widthVariant,this.dataset.error=String(this.error),this.inputElementRef?.value&&this.value&&(this.inputElementRef.value.value=this.value),"auto"===this.widthVariant)?this.inputTemplate():i.html`
      <div class="wui-input-amount-fit-width">
        <span class="wui-input-amount-fit-mirror"></span>
        ${this.inputTemplate()}
      </div>
    `}inputTemplate(){return i.html`<input
      ${(0,o.ref)(this.inputElementRef)}
      type="text"
      inputmode="decimal"
      pattern="[0-9,.]*"
      placeholder=${this.placeholder}
      ?disabled=${this.disabled}
      autofocus
      value=${this.value??""}
      @input=${this.dispatchInputChangeEvent.bind(this)}
    />`}dispatchInputChangeEvent(){this.inputElementRef.value&&(this.inputElementRef.value.value=s.UiHelperUtil.maskInput({value:this.inputElementRef.value.value,decimals:this.maxDecimals,integers:this.maxIntegers}),this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value.value,bubbles:!0,composed:!0})),this.resizeInput())}resizeInput(){if("fit"===this.widthVariant){let e=this.inputElementRef.value;if(e){let t=e.previousElementSibling;t&&(t.textContent=e.value||"0",e.style.width=`${t.offsetWidth}px`)}}}};h.styles=[a.resetStyles,a.elementStyles,c],u([(0,n.property)({type:Boolean})],h.prototype,"disabled",void 0),u([(0,n.property)({type:String})],h.prototype,"value",void 0),u([(0,n.property)({type:String})],h.prototype,"placeholder",void 0),u([(0,n.property)({type:String})],h.prototype,"widthVariant",void 0),u([(0,n.property)({type:Number})],h.prototype,"maxDecimals",void 0),u([(0,n.property)({type:Number})],h.prototype,"maxIntegers",void 0),u([(0,n.property)({type:String})],h.prototype,"fontSize",void 0),u([(0,n.property)({type:Boolean})],h.prototype,"error",void 0),h=u([(0,l.customElement)("wui-input-amount")],h),e.s([],787025)},384386,e=>{"use strict";e.i(720140);var t=e.i(227565),i=e.i(540647);e.i(890019);var n=e.i(378424);e.i(881514);var o=e.i(931111),r=e.i(829083),a=e.i(352714),s=e.i(610389),l=e.i(326508),c=e.i(966584),u=e.i(565898);e.i(540417);var h=e.i(953166),p=t,d=e.i(349820);e.i(175235),e.i(621750),e.i(897818);var m=e.i(964603),g=e.i(555489);let y=g.css`
  button {
    border: none;
    border-radius: ${({borderRadius:e})=>e["20"]};
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: ${({spacing:e})=>e[1]};
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, box-shadow;
  }

  /* -- Variants --------------------------------------------------------------- */
  button[data-type='accent'] {
    background-color: ${({tokens:e})=>e.core.backgroundAccentPrimary};
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  button[data-type='neutral'] {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  /* -- Sizes --------------------------------------------------------------- */
  button[data-size='sm'] {
    height: 24px;
  }

  button[data-size='md'] {
    height: 28px;
  }

  button[data-size='lg'] {
    height: 32px;
  }

  button[data-size='sm'] > wui-image,
  button[data-size='sm'] > wui-icon {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-image,
  button[data-size='md'] > wui-icon {
    width: 20px;
    height: 20px;
  }

  button[data-size='lg'] > wui-image,
  button[data-size='lg'] > wui-icon {
    width: 24px;
    height: 24px;
  }

  wui-text {
    padding-left: ${({spacing:e})=>e[1]};
    padding-right: ${({spacing:e})=>e[1]};
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e[3]};
    overflow: hidden;
    user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  /* -- States --------------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button[data-type='accent']:not(:disabled):hover {
      background-color: ${({tokens:e})=>e.core.foregroundAccent060};
    }

    button[data-type='neutral']:not(:disabled):hover {
      background-color: ${({tokens:e})=>e.theme.foregroundTertiary};
    }
  }

  button[data-type='accent']:not(:disabled):focus-visible,
  button[data-type='accent']:not(:disabled):active {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  button[data-type='neutral']:not(:disabled):focus-visible,
  button[data-type='neutral']:not(:disabled):active {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  button:disabled {
    opacity: 0.5;
  }
`;var x=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let f={sm:"sm-regular",md:"md-regular",lg:"lg-regular"},w=class extends p.LitElement{constructor(){super(...arguments),this.type="accent",this.size="md",this.imageSrc="",this.disabled=!1,this.leftIcon=void 0,this.rightIcon=void 0,this.text=""}render(){return i.html`
      <button ?disabled=${this.disabled} data-type=${this.type} data-size=${this.size}>
        ${this.imageSrc?i.html`<wui-image src=${this.imageSrc}></wui-image>`:null}
        ${this.leftIcon?i.html`<wui-icon name=${this.leftIcon} color="inherit" size="inherit"></wui-icon>`:null}
        <wui-text variant=${f[this.size]} color="inherit">${this.text}</wui-text>
        ${this.rightIcon?i.html`<wui-icon name=${this.rightIcon} color="inherit" size="inherit"></wui-icon>`:null}
      </button>
    `}};w.styles=[m.resetStyles,m.elementStyles,y],x([(0,d.property)()],w.prototype,"type",void 0),x([(0,d.property)()],w.prototype,"size",void 0),x([(0,d.property)()],w.prototype,"imageSrc",void 0),x([(0,d.property)({type:Boolean})],w.prototype,"disabled",void 0),x([(0,d.property)()],w.prototype,"leftIcon",void 0),x([(0,d.property)()],w.prototype,"rightIcon",void 0),x([(0,d.property)()],w.prototype,"text",void 0),w=x([(0,h.customElement)("wui-chip-button")],w),e.i(693043),e.i(101704),e.i(808060),e.i(637795),e.i(435269),e.i(855118);var b=t;e.i(496768),e.i(787025),e.i(569046);var v=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let $=class extends b.LitElement{constructor(){super(...arguments),this.maxDecimals=void 0,this.maxIntegers=void 0}render(){return i.html`
      <wui-flex alignItems="center" gap="1">
        <wui-input-amount
          widthVariant="fit"
          fontSize="h2"
          .maxDecimals=${(0,o.ifDefined)(this.maxDecimals)}
          .maxIntegers=${(0,o.ifDefined)(this.maxIntegers)}
          .value=${this.amount?String(this.amount):""}
        ></wui-input-amount>
        <wui-text variant="md-regular" color="secondary">USD</wui-text>
      </wui-flex>
    `}};v([(0,d.property)({type:Number})],$.prototype,"amount",void 0),v([(0,d.property)({type:Number})],$.prototype,"maxDecimals",void 0),v([(0,d.property)({type:Number})],$.prototype,"maxIntegers",void 0),$=v([(0,h.customElement)("w3m-fund-input")],$);let C=g.css`
  .amount-input-container {
    border-radius: ${({borderRadius:e})=>e["6"]};
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    padding: ${({spacing:e})=>e[1]};
  }

  .container {
    border-radius: 30px;
  }
`;var k=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let I=[10,50,100],E=class extends t.LitElement{constructor(){super(),this.unsubscribe=[],this.network=a.ChainController.state.activeCaipNetwork,this.exchanges=l.ExchangeController.state.exchanges,this.isLoading=l.ExchangeController.state.isLoading,this.amount=l.ExchangeController.state.amount,this.tokenAmount=l.ExchangeController.state.tokenAmount,this.priceLoading=l.ExchangeController.state.priceLoading,this.isPaymentInProgress=l.ExchangeController.state.isPaymentInProgress,this.currentPayment=l.ExchangeController.state.currentPayment,this.paymentId=l.ExchangeController.state.paymentId,this.paymentAsset=l.ExchangeController.state.paymentAsset,this.unsubscribe.push(a.ChainController.subscribeKey("activeCaipNetwork",e=>{this.network=e,this.setDefaultPaymentAsset()}),l.ExchangeController.subscribe(e=>{this.exchanges=e.exchanges,this.isLoading=e.isLoading,this.amount=e.amount,this.tokenAmount=e.tokenAmount,this.priceLoading=e.priceLoading,this.paymentId=e.paymentId,this.isPaymentInProgress=e.isPaymentInProgress,this.currentPayment=e.currentPayment,this.paymentAsset=e.paymentAsset,e.isPaymentInProgress&&e.currentPayment?.exchangeId&&e.currentPayment?.sessionId&&e.paymentId&&this.handlePaymentInProgress()}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),l.ExchangeController.state.isPaymentInProgress||l.ExchangeController.reset()}async firstUpdated(){await this.getPaymentAssets(),this.paymentAsset||await this.setDefaultPaymentAsset(),l.ExchangeController.setAmount(I[0]),await l.ExchangeController.fetchExchanges()}render(){return i.html`
      <wui-flex flexDirection="column" class="container">
        ${this.amountInputTemplate()} ${this.exchangesTemplate()}
      </wui-flex>
    `}exchangesLoadingTemplate(){return Array.from({length:2}).map(()=>i.html`<wui-shimmer width="100%" height="65px" borderRadius="xxs"></wui-shimmer>`)}_exchangesTemplate(){return this.exchanges.length>0?this.exchanges.map(e=>i.html`<wui-list-item
              @click=${()=>this.onExchangeClick(e)}
              chevron
              variant="image"
              imageSrc=${e.imageUrl}
              ?loading=${this.isLoading}
            >
              <wui-text variant="md-regular" color="primary">
                Deposit from ${e.name}
              </wui-text>
            </wui-list-item>`):i.html`<wui-flex flexDirection="column" alignItems="center" gap="4" padding="4">
          <wui-text variant="lg-medium" align="center" color="primary">
            No exchanges support this asset on this network
          </wui-text>
        </wui-flex>`}exchangesTemplate(){return i.html`<wui-flex
      flexDirection="column"
      gap="2"
      .padding=${["3","3","3","3"]}
      class="exchanges-container"
    >
      ${this.isLoading?this.exchangesLoadingTemplate():this._exchangesTemplate()}
    </wui-flex>`}amountInputTemplate(){return i.html`
      <wui-flex
        flexDirection="column"
        .padding=${["0","3","3","3"]}
        class="amount-input-container"
      >
        <wui-flex
          justifyContent="space-between"
          alignItems="center"
          .margin=${["0","0","6","0"]}
        >
          <wui-text variant="md-medium" color="secondary">Asset</wui-text>
          <wui-token-button
            data-testid="deposit-from-exchange-asset-button"
            flexDirection="row-reverse"
            text=${this.paymentAsset?.metadata.symbol||""}
            imageSrc=${this.paymentAsset?.metadata.iconUrl||""}
            @click=${()=>c.RouterController.push("PayWithExchangeSelectAsset")}
            size="lg"
            .chainImageSrc=${(0,o.ifDefined)(r.AssetUtil.getNetworkImage(this.network))}
          >
          </wui-token-button>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          .margin=${["0","0","4","0"]}
        >
          <w3m-fund-input
            @inputChange=${this.onAmountChange.bind(this)}
            .amount=${this.amount}
            .maxDecimals=${6}
            .maxIntegers=${10}
          >
          </w3m-fund-input>
          ${this.tokenAmountTemplate()}
        </wui-flex>
        <wui-flex justifyContent="center" gap="2">
          ${I.map(e=>i.html`<wui-chip-button
                @click=${()=>l.ExchangeController.setAmount(e)}
                type="neutral"
                size="lg"
                text=${`$${e}`}
              ></wui-chip-button>`)}
        </wui-flex>
      </wui-flex>
    `}tokenAmountTemplate(){return this.priceLoading?i.html`<wui-shimmer
        width="65px"
        height="20px"
        borderRadius="xxs"
        variant="light"
      ></wui-shimmer>`:i.html`
      <wui-text variant="md-regular" color="secondary">
        ${this.tokenAmount.toFixed(4)} ${this.paymentAsset?.metadata.symbol}
      </wui-text>
    `}async onExchangeClick(e){this.amount?await l.ExchangeController.handlePayWithExchange(e.id):u.SnackController.showError("Please enter an amount")}handlePaymentInProgress(){let e=a.ChainController.state.activeChain,{redirectView:t="Account"}=c.RouterController.state.data??{};this.isPaymentInProgress&&this.currentPayment?.exchangeId&&this.currentPayment?.sessionId&&this.paymentId&&(l.ExchangeController.waitUntilComplete({exchangeId:this.currentPayment.exchangeId,sessionId:this.currentPayment.sessionId,paymentId:this.paymentId}).then(t=>{"SUCCESS"===t.status?(u.SnackController.showSuccess("Deposit completed"),l.ExchangeController.reset(),e&&(a.ChainController.fetchTokenBalance(),s.ConnectionController.updateBalance(e)),c.RouterController.replace("Transactions")):"FAILED"===t.status&&u.SnackController.showError("Deposit failed")}),u.SnackController.showLoading("Deposit in progress..."),c.RouterController.replace(t))}onAmountChange({detail:e}){l.ExchangeController.setAmount(e?Number(e):null)}async getPaymentAssets(){this.network&&await l.ExchangeController.getAssetsForNetwork(this.network.caipNetworkId)}async setDefaultPaymentAsset(){if(this.network){let e=await l.ExchangeController.getAssetsForNetwork(this.network.caipNetworkId);e[0]&&l.ExchangeController.setPaymentAsset(e[0])}}};E.styles=C,k([(0,n.state)()],E.prototype,"network",void 0),k([(0,n.state)()],E.prototype,"exchanges",void 0),k([(0,n.state)()],E.prototype,"isLoading",void 0),k([(0,n.state)()],E.prototype,"amount",void 0),k([(0,n.state)()],E.prototype,"tokenAmount",void 0),k([(0,n.state)()],E.prototype,"priceLoading",void 0),k([(0,n.state)()],E.prototype,"isPaymentInProgress",void 0),k([(0,n.state)()],E.prototype,"currentPayment",void 0),k([(0,n.state)()],E.prototype,"paymentId",void 0),k([(0,n.state)()],E.prototype,"paymentAsset",void 0),E=k([(0,h.customElement)("w3m-deposit-from-exchange-view")],E),e.s(["W3mDepositFromExchangeView",0,E],682316);var P=t,A=e.i(153794);e.i(453424),e.i(125428),e.i(364280),e.i(535786),e.i(551089);let S=g.css`
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
`;var D=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let z=class extends P.LitElement{constructor(){super(),this.unsubscribe=[],this.assets=l.ExchangeController.state.assets,this.search="",this.onDebouncedSearch=A.CoreHelperUtil.debounce(e=>{this.search=e}),this.unsubscribe.push(l.ExchangeController.subscribe(e=>{this.assets=e.assets}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return i.html`
      <wui-flex flexDirection="column">
        ${this.templateSearchInput()} <wui-separator></wui-separator> ${this.templateTokens()}
      </wui-flex>
    `}templateSearchInput(){return i.html`
      <wui-flex gap="2" padding="3">
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){let e=this.assets.filter(e=>e.metadata.name.toLowerCase().includes(this.search.toLowerCase())),t=e.length>0;return i.html`
      <wui-flex
        class="contentContainer"
        flexDirection="column"
        .padding=${["0","3","0","3"]}
      >
        <wui-flex justifyContent="flex-start" .padding=${["4","3","3","3"]}>
          <wui-text variant="md-medium" color="secondary">Available tokens</wui-text>
        </wui-flex>
        <wui-flex flexDirection="column" gap="2">
          ${t?e.map(e=>i.html`<wui-list-item
                    .imageSrc=${e.metadata.iconUrl}
                    ?clickable=${!0}
                    @click=${this.handleTokenClick.bind(this,e)}
                  >
                    <wui-text variant="md-medium" color="primary">${e.metadata.name}</wui-text>
                    <wui-text variant="md-regular" color="secondary"
                      >${e.metadata.symbol}</wui-text
                    >
                  </wui-list-item>`):i.html`<wui-flex
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
                >
                  <wui-text variant="lg-medium" align="center" color="primary">
                    No tokens found
                  </wui-text>
                </wui-flex>
                <wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>
              </wui-flex>`}
        </wui-flex>
      </wui-flex>
    `}onBuyClick(){c.RouterController.push("OnRampProviders")}onInputChange(e){this.onDebouncedSearch(e.detail)}handleTokenClick(e){l.ExchangeController.setPaymentAsset(e),c.RouterController.goBack()}};z.styles=S,D([(0,n.state)()],z.prototype,"assets",void 0),D([(0,n.state)()],z.prototype,"search",void 0),z=D([(0,h.customElement)("w3m-deposit-from-exchange-select-asset-view")],z),e.s(["W3mDepositFromExchangeSelectAssetView",0,z],514653),e.s([],320745),e.i(320745),e.i(682316),e.i(514653),e.s(["W3mDepositFromExchangeSelectAssetView",0,z,"W3mDepositFromExchangeView",0,E],384386)}]);