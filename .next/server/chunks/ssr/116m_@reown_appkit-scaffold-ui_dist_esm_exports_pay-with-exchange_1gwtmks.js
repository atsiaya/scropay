module.exports=[53283,a=>{"use strict";a.i(176996);var b=a.i(44886),c=a.i(979837);a.i(525181);var d=a.i(905653);a.i(876091);var e=a.i(960078),f=a.i(197350),g=a.i(34525),h=a.i(166920),i=a.i(845328),j=a.i(682762),k=a.i(475744);a.i(564205);var l=a.i(526551),m=b,n=a.i(129349);a.i(808710),a.i(508423),a.i(696585);var o=a.i(924968),p=a.i(192361);let q=p.css`
  button {
    border: none;
    border-radius: ${({borderRadius:a})=>a["20"]};
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: ${({spacing:a})=>a[1]};
    transition:
      background-color ${({durations:a})=>a.lg}
        ${({easings:a})=>a["ease-out-power-2"]},
      box-shadow ${({durations:a})=>a.lg}
        ${({easings:a})=>a["ease-out-power-2"]};
    will-change: background-color, box-shadow;
  }

  /* -- Variants --------------------------------------------------------------- */
  button[data-type='accent'] {
    background-color: ${({tokens:a})=>a.core.backgroundAccentPrimary};
    color: ${({tokens:a})=>a.theme.textPrimary};
  }

  button[data-type='neutral'] {
    background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
    color: ${({tokens:a})=>a.theme.textPrimary};
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
    padding-left: ${({spacing:a})=>a[1]};
    padding-right: ${({spacing:a})=>a[1]};
  }

  wui-image {
    border-radius: ${({borderRadius:a})=>a[3]};
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
      background-color: ${({tokens:a})=>a.core.foregroundAccent060};
    }

    button[data-type='neutral']:not(:disabled):hover {
      background-color: ${({tokens:a})=>a.theme.foregroundTertiary};
    }
  }

  button[data-type='accent']:not(:disabled):focus-visible,
  button[data-type='accent']:not(:disabled):active {
    box-shadow: 0 0 0 4px ${({tokens:a})=>a.core.foregroundAccent020};
  }

  button[data-type='neutral']:not(:disabled):focus-visible,
  button[data-type='neutral']:not(:disabled):active {
    box-shadow: 0 0 0 4px ${({tokens:a})=>a.core.foregroundAccent020};
  }

  button:disabled {
    opacity: 0.5;
  }
`;var r=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let s={sm:"sm-regular",md:"md-regular",lg:"lg-regular"},t=class extends m.LitElement{constructor(){super(...arguments),this.type="accent",this.size="md",this.imageSrc="",this.disabled=!1,this.leftIcon=void 0,this.rightIcon=void 0,this.text=""}render(){return c.html`
      <button ?disabled=${this.disabled} data-type=${this.type} data-size=${this.size}>
        ${this.imageSrc?c.html`<wui-image src=${this.imageSrc}></wui-image>`:null}
        ${this.leftIcon?c.html`<wui-icon name=${this.leftIcon} color="inherit" size="inherit"></wui-icon>`:null}
        <wui-text variant=${s[this.size]} color="inherit">${this.text}</wui-text>
        ${this.rightIcon?c.html`<wui-icon name=${this.rightIcon} color="inherit" size="inherit"></wui-icon>`:null}
      </button>
    `}};t.styles=[o.resetStyles,o.elementStyles,q],r([(0,n.property)()],t.prototype,"type",void 0),r([(0,n.property)()],t.prototype,"size",void 0),r([(0,n.property)()],t.prototype,"imageSrc",void 0),r([(0,n.property)({type:Boolean})],t.prototype,"disabled",void 0),r([(0,n.property)()],t.prototype,"leftIcon",void 0),r([(0,n.property)()],t.prototype,"rightIcon",void 0),r([(0,n.property)()],t.prototype,"text",void 0),t=r([(0,l.customElement)("wui-chip-button")],t),a.i(735803),a.i(528049),a.i(855019),a.i(187683),a.i(610594),a.i(603511);var u=b;a.i(782682),a.i(813871),a.i(405239);var v=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let w=class extends u.LitElement{constructor(){super(...arguments),this.maxDecimals=void 0,this.maxIntegers=void 0}render(){return c.html`
      <wui-flex alignItems="center" gap="1">
        <wui-input-amount
          widthVariant="fit"
          fontSize="h2"
          .maxDecimals=${(0,e.ifDefined)(this.maxDecimals)}
          .maxIntegers=${(0,e.ifDefined)(this.maxIntegers)}
          .value=${this.amount?String(this.amount):""}
        ></wui-input-amount>
        <wui-text variant="md-regular" color="secondary">USD</wui-text>
      </wui-flex>
    `}};v([(0,n.property)({type:Number})],w.prototype,"amount",void 0),v([(0,n.property)({type:Number})],w.prototype,"maxDecimals",void 0),v([(0,n.property)({type:Number})],w.prototype,"maxIntegers",void 0),w=v([(0,l.customElement)("w3m-fund-input")],w);let x=p.css`
  .amount-input-container {
    border-radius: ${({borderRadius:a})=>a["6"]};
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
    padding: ${({spacing:a})=>a[1]};
  }

  .container {
    border-radius: 30px;
  }
`;var y=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let z=[10,50,100],A=class extends b.LitElement{constructor(){super(),this.unsubscribe=[],this.network=g.ChainController.state.activeCaipNetwork,this.exchanges=i.ExchangeController.state.exchanges,this.isLoading=i.ExchangeController.state.isLoading,this.amount=i.ExchangeController.state.amount,this.tokenAmount=i.ExchangeController.state.tokenAmount,this.priceLoading=i.ExchangeController.state.priceLoading,this.isPaymentInProgress=i.ExchangeController.state.isPaymentInProgress,this.currentPayment=i.ExchangeController.state.currentPayment,this.paymentId=i.ExchangeController.state.paymentId,this.paymentAsset=i.ExchangeController.state.paymentAsset,this.unsubscribe.push(g.ChainController.subscribeKey("activeCaipNetwork",a=>{this.network=a,this.setDefaultPaymentAsset()}),i.ExchangeController.subscribe(a=>{this.exchanges=a.exchanges,this.isLoading=a.isLoading,this.amount=a.amount,this.tokenAmount=a.tokenAmount,this.priceLoading=a.priceLoading,this.paymentId=a.paymentId,this.isPaymentInProgress=a.isPaymentInProgress,this.currentPayment=a.currentPayment,this.paymentAsset=a.paymentAsset,a.isPaymentInProgress&&a.currentPayment?.exchangeId&&a.currentPayment?.sessionId&&a.paymentId&&this.handlePaymentInProgress()}))}disconnectedCallback(){this.unsubscribe.forEach(a=>a()),i.ExchangeController.state.isPaymentInProgress||i.ExchangeController.reset()}async firstUpdated(){await this.getPaymentAssets(),this.paymentAsset||await this.setDefaultPaymentAsset(),i.ExchangeController.setAmount(z[0]),await i.ExchangeController.fetchExchanges()}render(){return c.html`
      <wui-flex flexDirection="column" class="container">
        ${this.amountInputTemplate()} ${this.exchangesTemplate()}
      </wui-flex>
    `}exchangesLoadingTemplate(){return Array.from({length:2}).map(()=>c.html`<wui-shimmer width="100%" height="65px" borderRadius="xxs"></wui-shimmer>`)}_exchangesTemplate(){return this.exchanges.length>0?this.exchanges.map(a=>c.html`<wui-list-item
              @click=${()=>this.onExchangeClick(a)}
              chevron
              variant="image"
              imageSrc=${a.imageUrl}
              ?loading=${this.isLoading}
            >
              <wui-text variant="md-regular" color="primary">
                Deposit from ${a.name}
              </wui-text>
            </wui-list-item>`):c.html`<wui-flex flexDirection="column" alignItems="center" gap="4" padding="4">
          <wui-text variant="lg-medium" align="center" color="primary">
            No exchanges support this asset on this network
          </wui-text>
        </wui-flex>`}exchangesTemplate(){return c.html`<wui-flex
      flexDirection="column"
      gap="2"
      .padding=${["3","3","3","3"]}
      class="exchanges-container"
    >
      ${this.isLoading?this.exchangesLoadingTemplate():this._exchangesTemplate()}
    </wui-flex>`}amountInputTemplate(){return c.html`
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
            @click=${()=>j.RouterController.push("PayWithExchangeSelectAsset")}
            size="lg"
            .chainImageSrc=${(0,e.ifDefined)(f.AssetUtil.getNetworkImage(this.network))}
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
          ${z.map(a=>c.html`<wui-chip-button
                @click=${()=>i.ExchangeController.setAmount(a)}
                type="neutral"
                size="lg"
                text=${`$${a}`}
              ></wui-chip-button>`)}
        </wui-flex>
      </wui-flex>
    `}tokenAmountTemplate(){return this.priceLoading?c.html`<wui-shimmer
        width="65px"
        height="20px"
        borderRadius="xxs"
        variant="light"
      ></wui-shimmer>`:c.html`
      <wui-text variant="md-regular" color="secondary">
        ${this.tokenAmount.toFixed(4)} ${this.paymentAsset?.metadata.symbol}
      </wui-text>
    `}async onExchangeClick(a){this.amount?await i.ExchangeController.handlePayWithExchange(a.id):k.SnackController.showError("Please enter an amount")}handlePaymentInProgress(){let a=g.ChainController.state.activeChain,{redirectView:b="Account"}=j.RouterController.state.data??{};this.isPaymentInProgress&&this.currentPayment?.exchangeId&&this.currentPayment?.sessionId&&this.paymentId&&(i.ExchangeController.waitUntilComplete({exchangeId:this.currentPayment.exchangeId,sessionId:this.currentPayment.sessionId,paymentId:this.paymentId}).then(b=>{"SUCCESS"===b.status?(k.SnackController.showSuccess("Deposit completed"),i.ExchangeController.reset(),a&&(g.ChainController.fetchTokenBalance(),h.ConnectionController.updateBalance(a)),j.RouterController.replace("Transactions")):"FAILED"===b.status&&k.SnackController.showError("Deposit failed")}),k.SnackController.showLoading("Deposit in progress..."),j.RouterController.replace(b))}onAmountChange({detail:a}){i.ExchangeController.setAmount(a?Number(a):null)}async getPaymentAssets(){this.network&&await i.ExchangeController.getAssetsForNetwork(this.network.caipNetworkId)}async setDefaultPaymentAsset(){if(this.network){let a=await i.ExchangeController.getAssetsForNetwork(this.network.caipNetworkId);a[0]&&i.ExchangeController.setPaymentAsset(a[0])}}};A.styles=x,y([(0,d.state)()],A.prototype,"network",void 0),y([(0,d.state)()],A.prototype,"exchanges",void 0),y([(0,d.state)()],A.prototype,"isLoading",void 0),y([(0,d.state)()],A.prototype,"amount",void 0),y([(0,d.state)()],A.prototype,"tokenAmount",void 0),y([(0,d.state)()],A.prototype,"priceLoading",void 0),y([(0,d.state)()],A.prototype,"isPaymentInProgress",void 0),y([(0,d.state)()],A.prototype,"currentPayment",void 0),y([(0,d.state)()],A.prototype,"paymentId",void 0),y([(0,d.state)()],A.prototype,"paymentAsset",void 0),A=y([(0,l.customElement)("w3m-deposit-from-exchange-view")],A),a.s(["W3mDepositFromExchangeView",0,A],908906);var B=b,C=a.i(456594);a.i(644344),a.i(372488),a.i(653667),a.i(14277),a.i(981449);let D=p.css`
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
    border-radius: ${({borderRadius:a})=>a["3"]};
  }
`;var E=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let F=class extends B.LitElement{constructor(){super(),this.unsubscribe=[],this.assets=i.ExchangeController.state.assets,this.search="",this.onDebouncedSearch=C.CoreHelperUtil.debounce(a=>{this.search=a}),this.unsubscribe.push(i.ExchangeController.subscribe(a=>{this.assets=a.assets}))}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}render(){return c.html`
      <wui-flex flexDirection="column">
        ${this.templateSearchInput()} <wui-separator></wui-separator> ${this.templateTokens()}
      </wui-flex>
    `}templateSearchInput(){return c.html`
      <wui-flex gap="2" padding="3">
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){let a=this.assets.filter(a=>a.metadata.name.toLowerCase().includes(this.search.toLowerCase())),b=a.length>0;return c.html`
      <wui-flex
        class="contentContainer"
        flexDirection="column"
        .padding=${["0","3","0","3"]}
      >
        <wui-flex justifyContent="flex-start" .padding=${["4","3","3","3"]}>
          <wui-text variant="md-medium" color="secondary">Available tokens</wui-text>
        </wui-flex>
        <wui-flex flexDirection="column" gap="2">
          ${b?a.map(a=>c.html`<wui-list-item
                    .imageSrc=${a.metadata.iconUrl}
                    ?clickable=${!0}
                    @click=${this.handleTokenClick.bind(this,a)}
                  >
                    <wui-text variant="md-medium" color="primary">${a.metadata.name}</wui-text>
                    <wui-text variant="md-regular" color="secondary"
                      >${a.metadata.symbol}</wui-text
                    >
                  </wui-list-item>`):c.html`<wui-flex
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
    `}onBuyClick(){j.RouterController.push("OnRampProviders")}onInputChange(a){this.onDebouncedSearch(a.detail)}handleTokenClick(a){i.ExchangeController.setPaymentAsset(a),j.RouterController.goBack()}};F.styles=D,E([(0,d.state)()],F.prototype,"assets",void 0),E([(0,d.state)()],F.prototype,"search",void 0),F=E([(0,l.customElement)("w3m-deposit-from-exchange-select-asset-view")],F),a.s(["W3mDepositFromExchangeSelectAssetView",0,F],808443),a.s([],532095),a.i(532095),a.i(908906),a.i(808443),a.s(["W3mDepositFromExchangeSelectAssetView",0,F,"W3mDepositFromExchangeView",0,A],53283)}];

//# sourceMappingURL=116m_%40reown_appkit-scaffold-ui_dist_esm_exports_pay-with-exchange_1gwtmks.js.map