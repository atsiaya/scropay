module.exports=[389370,a=>{"use strict";a.i(176996);var b=a.i(44886),c=a.i(979837);a.i(525181);var d=a.i(905653);a.i(876091);var e=a.i(960078),f=a.i(575498),g=a.i(950802),h=a.i(681181),i=a.i(412631),j=a.i(678916);a.i(564205);var k=a.i(526551);a.i(735803),a.i(187683),a.i(603511),a.i(834018);var l=a.i(192361);let m=l.css`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-flex {
    transition: opacity ${({easings:a})=>a["ease-out-power-1"]}
      ${({durations:a})=>a.md};
    will-change: opacity;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var n=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let o=class extends b.LitElement{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=h.OnRampController.state.paymentCurrency,this.currencies=h.OnRampController.state.paymentCurrencies,this.currencyImages=f.AssetController.state.currencyImages,this.checked=j.OptionsStateController.state.isLegalCheckboxChecked,this.unsubscribe.push(h.OnRampController.subscribe(a=>{this.selectedCurrency=a.paymentCurrency,this.currencies=a.paymentCurrencies}),f.AssetController.subscribeKey("currencyImages",a=>this.currencyImages=a),j.OptionsStateController.subscribeKey("isLegalCheckboxChecked",a=>{this.checked=a}))}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}render(){let{termsConditionsUrl:a,privacyPolicyUrl:b}=i.OptionsController.state,d=i.OptionsController.state.features?.legalCheckbox,f=!!(a||b)&&!!d&&!this.checked;return c.html`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${["0","3","3","3"]}
        gap="2"
        class=${(0,e.ifDefined)(f?"disabled":void 0)}
      >
        ${this.currenciesTemplate(f)}
      </wui-flex>
    `}currenciesTemplate(a=!1){return this.currencies.map(b=>c.html`
        <wui-list-item
          imageSrc=${(0,e.ifDefined)(this.currencyImages?.[b.id])}
          @click=${()=>this.selectCurrency(b)}
          variant="image"
          tabIdx=${(0,e.ifDefined)(a?-1:void 0)}
        >
          <wui-text variant="md-medium" color="primary">${b.id}</wui-text>
        </wui-list-item>
      `)}selectCurrency(a){a&&(h.OnRampController.setPaymentCurrency(a),g.ModalController.close())}};o.styles=m,n([(0,d.state)()],o.prototype,"selectedCurrency",void 0),n([(0,d.state)()],o.prototype,"currencies",void 0),n([(0,d.state)()],o.prototype,"currencyImages",void 0),n([(0,d.state)()],o.prototype,"checked",void 0),o=n([(0,k.customElement)("w3m-onramp-fiat-select-view")],o),a.s(["W3mOnrampFiatSelectView",0,o],462191);var p=b,q=a.i(34525),r=a.i(456594),s=a.i(649637),t=a.i(682762),u=a.i(932774),v=a.i(455434),w=b,x=a.i(129349),y=a.i(197350);a.i(644344),a.i(855019),a.i(292471),a.i(463208);let z=l.css`
  button {
    padding: ${({spacing:a})=>a["3"]};
    border-radius: ${({borderRadius:a})=>a["4"]};
    border: none;
    outline: none;
    background-color: ${({tokens:a})=>a.core.glass010};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: ${({spacing:a})=>a["3"]};
    transition: background-color ${({easings:a})=>a["ease-out-power-1"]}
      ${({durations:a})=>a.md};
    will-change: background-color;
    cursor: pointer;
  }

  button:hover {
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
  }

  .provider-image {
    width: ${({spacing:a})=>a["10"]};
    min-width: ${({spacing:a})=>a["10"]};
    height: ${({spacing:a})=>a["10"]};
    border-radius: calc(
      ${({borderRadius:a})=>a["4"]} - calc(${({spacing:a})=>a["3"]} / 2)
    );
    position: relative;
    overflow: hidden;
  }

  .network-icon {
    width: ${({spacing:a})=>a["3"]};
    height: ${({spacing:a})=>a["3"]};
    border-radius: calc(${({spacing:a})=>a["3"]} / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px ${({tokens:a})=>a.theme.foregroundPrimary},
      0 0 0 3px ${({tokens:a})=>a.theme.backgroundPrimary};
    transition: box-shadow ${({easings:a})=>a["ease-out-power-1"]}
      ${({durations:a})=>a.md};
    will-change: box-shadow;
  }

  button:hover .network-icon {
    box-shadow:
      0 0 0 3px ${({tokens:a})=>a.core.glass010},
      0 0 0 3px ${({tokens:a})=>a.theme.backgroundPrimary};
  }
`;var A=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let B=class extends w.LitElement{constructor(){super(...arguments),this.disabled=!1,this.color="inherit",this.label="",this.feeRange="",this.loading=!1,this.onClick=null}render(){return c.html`
      <button ?disabled=${this.disabled} @click=${this.onClick} ontouchstart>
        <wui-visual name=${(0,e.ifDefined)(this.name)} class="provider-image"></wui-visual>
        <wui-flex flexDirection="column" gap="01">
          <wui-text variant="md-regular" color="primary">${this.label}</wui-text>
          <wui-flex alignItems="center" justifyContent="flex-start" gap="4">
            <wui-text variant="sm-medium" color="primary">
              <wui-text variant="sm-regular" color="secondary">Fees</wui-text>
              ${this.feeRange}
            </wui-text>
            <wui-flex gap="2">
              <wui-icon name="bank" size="sm" color="default"></wui-icon>
              <wui-icon name="card" size="sm" color="default"></wui-icon>
            </wui-flex>
            ${this.networksTemplate()}
          </wui-flex>
        </wui-flex>
        ${this.loading?c.html`<wui-loading-spinner color="secondary" size="md"></wui-loading-spinner>`:c.html`<wui-icon name="chevronRight" color="default" size="sm"></wui-icon>`}
      </button>
    `}networksTemplate(){let a=q.ChainController.getAllRequestedCaipNetworks(),b=a?.filter(a=>a?.assets?.imageId)?.slice(0,5);return c.html`
      <wui-flex class="networks">
        ${b?.map(a=>c.html`
            <wui-flex class="network-icon">
              <wui-image src=${(0,e.ifDefined)(y.AssetUtil.getNetworkImage(a))}></wui-image>
            </wui-flex>
          `)}
      </wui-flex>
    `}};B.styles=[z],A([(0,x.property)({type:Boolean})],B.prototype,"disabled",void 0),A([(0,x.property)()],B.prototype,"color",void 0),A([(0,x.property)()],B.prototype,"name",void 0),A([(0,x.property)()],B.prototype,"label",void 0),A([(0,x.property)()],B.prototype,"feeRange",void 0),A([(0,x.property)({type:Boolean})],B.prototype,"loading",void 0),A([(0,x.property)()],B.prototype,"onClick",void 0),B=A([(0,k.customElement)("w3m-onramp-provider-item")],B),a.i(888793);var C=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let D=class extends p.LitElement{constructor(){super(),this.unsubscribe=[],this.providers=h.OnRampController.state.providers,this.unsubscribe.push(h.OnRampController.subscribeKey("providers",a=>{this.providers=a}))}render(){return c.html`
      <wui-flex flexDirection="column" .padding=${["0","3","3","3"]} gap="2">
        ${this.onRampProvidersTemplate()}
      </wui-flex>
    `}onRampProvidersTemplate(){return this.providers.filter(a=>a.supportedChains.includes(q.ChainController.state.activeChain??"eip155")).map(a=>c.html`
          <w3m-onramp-provider-item
            label=${a.label}
            name=${a.name}
            feeRange=${a.feeRange}
            @click=${()=>{this.onClickProvider(a)}}
            ?disabled=${!a.url}
            data-testid=${`onramp-provider-${a.name}`}
          ></w3m-onramp-provider-item>
        `)}onClickProvider(a){h.OnRampController.setSelectedProvider(a),t.RouterController.push("BuyInProgress"),r.CoreHelperUtil.openHref(h.OnRampController.state.selectedProvider?.url||a.url,"popupWindow","width=600,height=800,scrollbars=yes"),s.EventsController.sendEvent({type:"track",event:"SELECT_BUY_PROVIDER",properties:{provider:a.name,isSmartAccount:(0,u.getPreferredAccountType)(q.ChainController.state.activeChain)===v.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT}})}};C([(0,d.state)()],D.prototype,"providers",void 0),D=C([(0,k.customElement)("w3m-onramp-providers-view")],D),a.s(["W3mOnRampProvidersView",0,D],543680);var E=b;a.i(987017);let F=l.css`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-flex {
    transition: opacity ${({easings:a})=>a["ease-out-power-1"]}
      ${({durations:a})=>a.md};
    will-change: opacity;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var G=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let H=class extends E.LitElement{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=h.OnRampController.state.purchaseCurrencies,this.tokens=h.OnRampController.state.purchaseCurrencies,this.tokenImages=f.AssetController.state.tokenImages,this.checked=j.OptionsStateController.state.isLegalCheckboxChecked,this.unsubscribe.push(h.OnRampController.subscribe(a=>{this.selectedCurrency=a.purchaseCurrencies,this.tokens=a.purchaseCurrencies}),f.AssetController.subscribeKey("tokenImages",a=>this.tokenImages=a),j.OptionsStateController.subscribeKey("isLegalCheckboxChecked",a=>{this.checked=a}))}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}render(){let{termsConditionsUrl:a,privacyPolicyUrl:b}=i.OptionsController.state,d=i.OptionsController.state.features?.legalCheckbox,f=!!(a||b)&&!!d&&!this.checked;return c.html`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${["0","3","3","3"]}
        gap="2"
        class=${(0,e.ifDefined)(f?"disabled":void 0)}
      >
        ${this.currenciesTemplate(f)}
      </wui-flex>
    `}currenciesTemplate(a=!1){return this.tokens.map(b=>c.html`
        <wui-list-item
          imageSrc=${(0,e.ifDefined)(this.tokenImages?.[b.symbol])}
          @click=${()=>this.selectToken(b)}
          variant="image"
          tabIdx=${(0,e.ifDefined)(a?-1:void 0)}
        >
          <wui-flex gap="1" alignItems="center">
            <wui-text variant="md-medium" color="primary">${b.name}</wui-text>
            <wui-text variant="sm-regular" color="secondary">${b.symbol}</wui-text>
          </wui-flex>
        </wui-list-item>
      `)}selectToken(a){a&&(h.OnRampController.setPurchaseCurrency(a),g.ModalController.close())}};H.styles=F,G([(0,d.state)()],H.prototype,"selectedCurrency",void 0),G([(0,d.state)()],H.prototype,"tokens",void 0),G([(0,d.state)()],H.prototype,"tokenImages",void 0),G([(0,d.state)()],H.prototype,"checked",void 0),H=G([(0,k.customElement)("w3m-onramp-token-select-view")],H),a.s(["W3mOnrampTokensView",0,H],88731);var I=b,J=a.i(166920),K=a.i(475744),L=a.i(716715);a.i(782682),a.i(372488),a.i(405239),a.i(583823);let M=l.css`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    border-radius: calc(
      ${({borderRadius:a})=>a["1"]} * 9 - ${({borderRadius:a})=>a["3"]}
    );
    position: relative;
    overflow: hidden;
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:a})=>a["1"]} * -1);
    bottom: calc(${({spacing:a})=>a["1"]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity ${({durations:a})=>a.lg} ${({easings:a})=>a["ease-out-power-2"]},
      transform ${({durations:a})=>a.lg}
        ${({easings:a})=>a["ease-out-power-2"]};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({spacing:a})=>a["4"]};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({easings:a})=>a["ease-out-power-2"]} both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: ${({spacing:a})=>a["01"]} ${({spacing:a})=>a["2"]};
  }
`;var N=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let O=class extends I.LitElement{constructor(){super(),this.unsubscribe=[],this.selectedOnRampProvider=h.OnRampController.state.selectedProvider,this.uri=J.ConnectionController.state.wcUri,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.error=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(h.OnRampController.subscribeKey("selectedProvider",a=>{this.selectedOnRampProvider=a}))}disconnectedCallback(){this.intervalId&&clearInterval(this.intervalId)}render(){let a="Continue in external window";this.error?a="Buy failed":this.selectedOnRampProvider&&(a=`Buy in ${this.selectedOnRampProvider?.label}`);let b=this.error?"Buy can be declined from your side or due to and error on the provider app":"We’ll notify you once your Buy is processed";return c.html`
      <wui-flex
        data-error=${(0,e.ifDefined)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="5"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-visual
            name=${(0,e.ifDefined)(this.selectedOnRampProvider?.name)}
            size="lg"
            class="provider-image"
          >
          </wui-visual>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            color="error"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["4","0","0","0"]}
        >
          <wui-text variant="md-medium" color=${this.error?"error":"primary"}>
            ${a}
          </wui-text>
          <wui-text align="center" variant="sm-medium" color="secondary">${b}</wui-text>
        </wui-flex>

        ${this.error?this.tryAgainTemplate():null}
      </wui-flex>

      <wui-flex .padding=${["0","5","5","5"]} justifyContent="center">
        <wui-link @click=${this.onCopyUri} color="secondary">
          <wui-icon size="sm" color="default" slot="iconLeft" name="copy"></wui-icon>
          Copy link
        </wui-link>
      </wui-flex>
    `}onTryAgain(){this.selectedOnRampProvider&&(this.error=!1,r.CoreHelperUtil.openHref(this.selectedOnRampProvider.url,"popupWindow","width=600,height=800,scrollbars=yes"))}tryAgainTemplate(){return this.selectedOnRampProvider?.url?c.html`<wui-button size="md" variant="accent" @click=${this.onTryAgain.bind(this)}>
      <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
      Try again
    </wui-button>`:null}loaderTemplate(){let a=L.ThemeController.state.themeVariables["--w3m-border-radius-master"],b=a?parseInt(a.replace("px",""),10):4;return c.html`<wui-loading-thumbnail radius=${9*b}></wui-loading-thumbnail>`}onCopyUri(){if(!this.selectedOnRampProvider?.url){K.SnackController.showError("No link found"),t.RouterController.goBack();return}try{r.CoreHelperUtil.copyToClopboard(this.selectedOnRampProvider.url),K.SnackController.showSuccess("Link copied")}catch{K.SnackController.showError("Failed to copy")}}};O.styles=M,N([(0,d.state)()],O.prototype,"intervalId",void 0),N([(0,d.state)()],O.prototype,"selectedOnRampProvider",void 0),N([(0,d.state)()],O.prototype,"uri",void 0),N([(0,d.state)()],O.prototype,"ready",void 0),N([(0,d.state)()],O.prototype,"showRetry",void 0),N([(0,d.state)()],O.prototype,"buffering",void 0),N([(0,d.state)()],O.prototype,"error",void 0),N([(0,x.property)({type:Boolean})],O.prototype,"isMobile",void 0),N([(0,x.property)()],O.prototype,"onRetry",void 0),O=N([(0,k.customElement)("w3m-buy-in-progress-view")],O),a.s(["W3mBuyInProgressView",0,O],43850);var P=b;let Q=class extends P.LitElement{render(){return c.html`
      <wui-flex
        flexDirection="column"
        .padding=${["6","10","5","10"]}
        alignItems="center"
        gap="5"
      >
        <wui-visual name="onrampCard"></wui-visual>
        <wui-flex flexDirection="column" gap="2" alignItems="center">
          <wui-text align="center" variant="md-medium" color="primary">
            Quickly and easily buy digital assets!
          </wui-text>
          <wui-text align="center" variant="sm-regular" color="secondary">
            Simply select your preferred onramp provider and add digital assets to your account
            using your credit card or bank transfer
          </wui-text>
        </wui-flex>
        <wui-button @click=${t.RouterController.goBack}>
          <wui-icon size="sm" color="inherit" name="add" slot="iconLeft"></wui-icon>
          Buy
        </wui-button>
      </wui-flex>
    `}};Q=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}([(0,k.customElement)("w3m-what-is-a-buy-view")],Q),a.s(["W3mWhatIsABuyView",0,Q],607722);var R=b,S=b;a.i(653667);let T=l.css`
  :host {
    width: 100%;
  }

  wui-loading-spinner {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }

  .currency-container {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:a})=>a["2"]};
    height: 40px;
    padding: ${({spacing:a})=>a["2"]} ${({spacing:a})=>a["2"]}
      ${({spacing:a})=>a["2"]} ${({spacing:a})=>a["2"]};
    min-width: 95px;
    border-radius: ${({borderRadius:a})=>a.round};
    border: 1px solid ${({tokens:a})=>a.theme.foregroundPrimary};
    background: ${({tokens:a})=>a.theme.foregroundPrimary};
    cursor: pointer;
  }

  .currency-container > wui-image {
    height: 24px;
    width: 24px;
    border-radius: 50%;
  }
`;var U=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let V=class extends S.LitElement{constructor(){super(),this.unsubscribe=[],this.type="Token",this.value=0,this.currencies=[],this.selectedCurrency=this.currencies?.[0],this.currencyImages=f.AssetController.state.currencyImages,this.tokenImages=f.AssetController.state.tokenImages,this.unsubscribe.push(h.OnRampController.subscribeKey("purchaseCurrency",a=>{a&&"Fiat"!==this.type&&(this.selectedCurrency=this.formatPurchaseCurrency(a))}),h.OnRampController.subscribeKey("paymentCurrency",a=>{a&&"Token"!==this.type&&(this.selectedCurrency=this.formatPaymentCurrency(a))}),h.OnRampController.subscribe(a=>{"Fiat"===this.type?this.currencies=a.purchaseCurrencies.map(this.formatPurchaseCurrency):this.currencies=a.paymentCurrencies.map(this.formatPaymentCurrency)}),f.AssetController.subscribe(a=>{this.currencyImages={...a.currencyImages},this.tokenImages={...a.tokenImages}}))}firstUpdated(){h.OnRampController.getAvailableCurrencies()}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}render(){let a=this.selectedCurrency?.symbol||"",b=this.currencyImages[a]||this.tokenImages[a];return c.html`<wui-input-text type="number" size="lg" value=${this.value}>
      ${this.selectedCurrency?c.html` <wui-flex
            class="currency-container"
            justifyContent="space-between"
            alignItems="center"
            gap="1"
            @click=${()=>g.ModalController.open({view:`OnRamp${this.type}Select`})}
          >
            <wui-image src=${(0,e.ifDefined)(b)}></wui-image>
            <wui-text color="primary">${this.selectedCurrency.symbol}</wui-text>
          </wui-flex>`:c.html`<wui-loading-spinner></wui-loading-spinner>`}
    </wui-input-text>`}formatPaymentCurrency(a){return{name:a.id,symbol:a.id}}formatPurchaseCurrency(a){return{name:a.name,symbol:a.symbol}}};V.styles=T,U([(0,x.property)({type:String})],V.prototype,"type",void 0),U([(0,x.property)({type:Number})],V.prototype,"value",void 0),U([(0,d.state)()],V.prototype,"currencies",void 0),U([(0,d.state)()],V.prototype,"selectedCurrency",void 0),U([(0,d.state)()],V.prototype,"currencyImages",void 0),U([(0,d.state)()],V.prototype,"tokenImages",void 0),V=U([(0,k.customElement)("w3m-onramp-input")],V);let W=l.css`
  :host > wui-flex {
    width: 100%;
    max-width: 360px;
  }

  :host > wui-flex > wui-flex {
    border-radius: ${({borderRadius:a})=>a["8"]};
    width: 100%;
  }

  .amounts-container {
    width: 100%;
  }
`;var X=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let Y={USD:"$",EUR:"€",GBP:"£"},Z=[100,250,500,1e3],$=class extends R.LitElement{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.caipAddress=q.ChainController.state.activeCaipAddress,this.loading=g.ModalController.state.loading,this.paymentCurrency=h.OnRampController.state.paymentCurrency,this.paymentAmount=h.OnRampController.state.paymentAmount,this.purchaseAmount=h.OnRampController.state.purchaseAmount,this.quoteLoading=h.OnRampController.state.quotesLoading,this.unsubscribe.push(q.ChainController.subscribeKey("activeCaipAddress",a=>this.caipAddress=a),g.ModalController.subscribeKey("loading",a=>{this.loading=a}),h.OnRampController.subscribe(a=>{this.paymentCurrency=a.paymentCurrency,this.paymentAmount=a.paymentAmount,this.purchaseAmount=a.purchaseAmount,this.quoteLoading=a.quotesLoading}))}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}render(){return c.html`
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center">
        <wui-flex flexDirection="column" alignItems="center" gap="2">
          <w3m-onramp-input
            type="Fiat"
            @inputChange=${this.onPaymentAmountChange.bind(this)}
            .value=${this.paymentAmount||0}
          ></w3m-onramp-input>
          <w3m-onramp-input
            type="Token"
            .value=${this.purchaseAmount||0}
            .loading=${this.quoteLoading}
          ></w3m-onramp-input>
          <wui-flex justifyContent="space-evenly" class="amounts-container" gap="2">
            ${Z.map(a=>c.html`<wui-button
                  variant=${this.paymentAmount===a?"accent-secondary":"neutral-secondary"}
                  size="md"
                  textVariant="md-medium"
                  fullWidth
                  @click=${()=>this.selectPresetAmount(a)}
                  >${`${Y[this.paymentCurrency?.id||"USD"]} ${a}`}</wui-button
                >`)}
          </wui-flex>
          ${this.templateButton()}
        </wui-flex>
      </wui-flex>
    `}templateButton(){return this.caipAddress?c.html`<wui-button
          @click=${this.getQuotes.bind(this)}
          variant="accent-primary"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Get quotes
        </wui-button>`:c.html`<wui-button
          @click=${this.openModal.bind(this)}
          variant="accent"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Connect wallet
        </wui-button>`}getQuotes(){this.loading||g.ModalController.open({view:"OnRampProviders"})}openModal(){g.ModalController.open({view:"Connect"})}async onPaymentAmountChange(a){h.OnRampController.setPaymentAmount(Number(a.detail)),await h.OnRampController.getQuote()}async selectPresetAmount(a){h.OnRampController.setPaymentAmount(a),await h.OnRampController.getQuote()}};$.styles=W,X([(0,x.property)({type:Boolean})],$.prototype,"disabled",void 0),X([(0,d.state)()],$.prototype,"caipAddress",void 0),X([(0,d.state)()],$.prototype,"loading",void 0),X([(0,d.state)()],$.prototype,"paymentCurrency",void 0),X([(0,d.state)()],$.prototype,"paymentAmount",void 0),X([(0,d.state)()],$.prototype,"purchaseAmount",void 0),X([(0,d.state)()],$.prototype,"quoteLoading",void 0),$=X([(0,k.customElement)("w3m-onramp-widget")],$),a.s(["W3mOnrampWidget",0,$],765510),a.s([],336782),a.i(336782),a.i(462191),a.i(543680),a.i(88731),a.i(43850),a.i(607722),a.i(765510),a.s(["W3mBuyInProgressView",0,O,"W3mOnRampProvidersView",0,D,"W3mOnrampFiatSelectView",0,o,"W3mOnrampTokensView",0,H,"W3mOnrampWidget",0,$,"W3mWhatIsABuyView",0,Q],389370)}];

//# sourceMappingURL=116m_%40reown_appkit-scaffold-ui_dist_esm_exports_onramp_0wqzi5a.js.map