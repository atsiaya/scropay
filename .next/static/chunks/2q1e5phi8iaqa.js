(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,808060,e=>{"use strict";e.i(621750),e.s([])},804705,e=>{"use strict";e.i(720140);var t=e.i(227565),r=e.i(540647);e.i(890019);var i=e.i(378424);e.i(881514);var o=e.i(931111),n=e.i(242633),s=e.i(793700),a=e.i(337518),l=e.i(921693),c=e.i(310883);e.i(540417);var u=e.i(953166);e.i(693043),e.i(637795),e.i(855118),e.i(388147);var p=e.i(555489);let d=p.css`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-flex {
    transition: opacity ${({easings:e})=>e["ease-out-power-1"]}
      ${({durations:e})=>e.md};
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
`;var m=function(e,t,r,i){var o,n=arguments.length,s=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};let h=class extends t.LitElement{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=a.OnRampController.state.paymentCurrency,this.currencies=a.OnRampController.state.paymentCurrencies,this.currencyImages=n.AssetController.state.currencyImages,this.checked=c.OptionsStateController.state.isLegalCheckboxChecked,this.unsubscribe.push(a.OnRampController.subscribe(e=>{this.selectedCurrency=e.paymentCurrency,this.currencies=e.paymentCurrencies}),n.AssetController.subscribeKey("currencyImages",e=>this.currencyImages=e),c.OptionsStateController.subscribeKey("isLegalCheckboxChecked",e=>{this.checked=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=l.OptionsController.state,i=l.OptionsController.state.features?.legalCheckbox,n=!!(e||t)&&!!i&&!this.checked;return r.html`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${["0","3","3","3"]}
        gap="2"
        class=${(0,o.ifDefined)(n?"disabled":void 0)}
      >
        ${this.currenciesTemplate(n)}
      </wui-flex>
    `}currenciesTemplate(e=!1){return this.currencies.map(t=>r.html`
        <wui-list-item
          imageSrc=${(0,o.ifDefined)(this.currencyImages?.[t.id])}
          @click=${()=>this.selectCurrency(t)}
          variant="image"
          tabIdx=${(0,o.ifDefined)(e?-1:void 0)}
        >
          <wui-text variant="md-medium" color="primary">${t.id}</wui-text>
        </wui-list-item>
      `)}selectCurrency(e){e&&(a.OnRampController.setPaymentCurrency(e),s.ModalController.close())}};h.styles=d,m([(0,i.state)()],h.prototype,"selectedCurrency",void 0),m([(0,i.state)()],h.prototype,"currencies",void 0),m([(0,i.state)()],h.prototype,"currencyImages",void 0),m([(0,i.state)()],h.prototype,"checked",void 0),h=m([(0,u.customElement)("w3m-onramp-fiat-select-view")],h),e.s(["W3mOnrampFiatSelectView",0,h],414581);var y=t,f=e.i(352714),w=e.i(153794),g=e.i(149577),b=e.i(966584),v=e.i(34602),C=e.i(727068),x=t,$=e.i(349820),k=e.i(829083);e.i(453424),e.i(808060),e.i(631484),e.i(120154);let R=p.css`
  button {
    padding: ${({spacing:e})=>e["3"]};
    border-radius: ${({borderRadius:e})=>e["4"]};
    border: none;
    outline: none;
    background-color: ${({tokens:e})=>e.core.glass010};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: ${({spacing:e})=>e["3"]};
    transition: background-color ${({easings:e})=>e["ease-out-power-1"]}
      ${({durations:e})=>e.md};
    will-change: background-color;
    cursor: pointer;
  }

  button:hover {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .provider-image {
    width: ${({spacing:e})=>e["10"]};
    min-width: ${({spacing:e})=>e["10"]};
    height: ${({spacing:e})=>e["10"]};
    border-radius: calc(
      ${({borderRadius:e})=>e["4"]} - calc(${({spacing:e})=>e["3"]} / 2)
    );
    position: relative;
    overflow: hidden;
  }

  .network-icon {
    width: ${({spacing:e})=>e["3"]};
    height: ${({spacing:e})=>e["3"]};
    border-radius: calc(${({spacing:e})=>e["3"]} / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px ${({tokens:e})=>e.theme.foregroundPrimary},
      0 0 0 3px ${({tokens:e})=>e.theme.backgroundPrimary};
    transition: box-shadow ${({easings:e})=>e["ease-out-power-1"]}
      ${({durations:e})=>e.md};
    will-change: box-shadow;
  }

  button:hover .network-icon {
    box-shadow:
      0 0 0 3px ${({tokens:e})=>e.core.glass010},
      0 0 0 3px ${({tokens:e})=>e.theme.backgroundPrimary};
  }
`;var O=function(e,t,r,i){var o,n=arguments.length,s=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};let P=class extends x.LitElement{constructor(){super(...arguments),this.disabled=!1,this.color="inherit",this.label="",this.feeRange="",this.loading=!1,this.onClick=null}render(){return r.html`
      <button ?disabled=${this.disabled} @click=${this.onClick} ontouchstart>
        <wui-visual name=${(0,o.ifDefined)(this.name)} class="provider-image"></wui-visual>
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
        ${this.loading?r.html`<wui-loading-spinner color="secondary" size="md"></wui-loading-spinner>`:r.html`<wui-icon name="chevronRight" color="default" size="sm"></wui-icon>`}
      </button>
    `}networksTemplate(){let e=f.ChainController.getAllRequestedCaipNetworks(),t=e?.filter(e=>e?.assets?.imageId)?.slice(0,5);return r.html`
      <wui-flex class="networks">
        ${t?.map(e=>r.html`
            <wui-flex class="network-icon">
              <wui-image src=${(0,o.ifDefined)(k.AssetUtil.getNetworkImage(e))}></wui-image>
            </wui-flex>
          `)}
      </wui-flex>
    `}};P.styles=[R],O([(0,$.property)({type:Boolean})],P.prototype,"disabled",void 0),O([(0,$.property)()],P.prototype,"color",void 0),O([(0,$.property)()],P.prototype,"name",void 0),O([(0,$.property)()],P.prototype,"label",void 0),O([(0,$.property)()],P.prototype,"feeRange",void 0),O([(0,$.property)({type:Boolean})],P.prototype,"loading",void 0),O([(0,$.property)()],P.prototype,"onClick",void 0),P=O([(0,u.customElement)("w3m-onramp-provider-item")],P),e.i(268213);var I=function(e,t,r,i){var o,n=arguments.length,s=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};let A=class extends y.LitElement{constructor(){super(),this.unsubscribe=[],this.providers=a.OnRampController.state.providers,this.unsubscribe.push(a.OnRampController.subscribeKey("providers",e=>{this.providers=e}))}render(){return r.html`
      <wui-flex flexDirection="column" .padding=${["0","3","3","3"]} gap="2">
        ${this.onRampProvidersTemplate()}
      </wui-flex>
    `}onRampProvidersTemplate(){return this.providers.filter(e=>e.supportedChains.includes(f.ChainController.state.activeChain??"eip155")).map(e=>r.html`
          <w3m-onramp-provider-item
            label=${e.label}
            name=${e.name}
            feeRange=${e.feeRange}
            @click=${()=>{this.onClickProvider(e)}}
            ?disabled=${!e.url}
            data-testid=${`onramp-provider-${e.name}`}
          ></w3m-onramp-provider-item>
        `)}onClickProvider(e){a.OnRampController.setSelectedProvider(e),b.RouterController.push("BuyInProgress"),w.CoreHelperUtil.openHref(a.OnRampController.state.selectedProvider?.url||e.url,"popupWindow","width=600,height=800,scrollbars=yes"),g.EventsController.sendEvent({type:"track",event:"SELECT_BUY_PROVIDER",properties:{provider:e.name,isSmartAccount:(0,v.getPreferredAccountType)(f.ChainController.state.activeChain)===C.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT}})}};I([(0,i.state)()],A.prototype,"providers",void 0),A=I([(0,u.customElement)("w3m-onramp-providers-view")],A),e.s(["W3mOnRampProvidersView",0,A],895431);var T=t;e.i(326717);let j=p.css`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-flex {
    transition: opacity ${({easings:e})=>e["ease-out-power-1"]}
      ${({durations:e})=>e.md};
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
`;var D=function(e,t,r,i){var o,n=arguments.length,s=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};let E=class extends T.LitElement{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=a.OnRampController.state.purchaseCurrencies,this.tokens=a.OnRampController.state.purchaseCurrencies,this.tokenImages=n.AssetController.state.tokenImages,this.checked=c.OptionsStateController.state.isLegalCheckboxChecked,this.unsubscribe.push(a.OnRampController.subscribe(e=>{this.selectedCurrency=e.purchaseCurrencies,this.tokens=e.purchaseCurrencies}),n.AssetController.subscribeKey("tokenImages",e=>this.tokenImages=e),c.OptionsStateController.subscribeKey("isLegalCheckboxChecked",e=>{this.checked=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=l.OptionsController.state,i=l.OptionsController.state.features?.legalCheckbox,n=!!(e||t)&&!!i&&!this.checked;return r.html`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${["0","3","3","3"]}
        gap="2"
        class=${(0,o.ifDefined)(n?"disabled":void 0)}
      >
        ${this.currenciesTemplate(n)}
      </wui-flex>
    `}currenciesTemplate(e=!1){return this.tokens.map(t=>r.html`
        <wui-list-item
          imageSrc=${(0,o.ifDefined)(this.tokenImages?.[t.symbol])}
          @click=${()=>this.selectToken(t)}
          variant="image"
          tabIdx=${(0,o.ifDefined)(e?-1:void 0)}
        >
          <wui-flex gap="1" alignItems="center">
            <wui-text variant="md-medium" color="primary">${t.name}</wui-text>
            <wui-text variant="sm-regular" color="secondary">${t.symbol}</wui-text>
          </wui-flex>
        </wui-list-item>
      `)}selectToken(e){e&&(a.OnRampController.setPurchaseCurrency(e),s.ModalController.close())}};E.styles=j,D([(0,i.state)()],E.prototype,"selectedCurrency",void 0),D([(0,i.state)()],E.prototype,"tokens",void 0),D([(0,i.state)()],E.prototype,"tokenImages",void 0),D([(0,i.state)()],E.prototype,"checked",void 0),E=D([(0,u.customElement)("w3m-onramp-token-select-view")],E),e.s(["W3mOnrampTokensView",0,E],781686);var L=t,S=e.i(610389),W=e.i(565898),B=e.i(667265);e.i(496768),e.i(125428),e.i(569046),e.i(67635);let U=p.css`
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
      ${({borderRadius:e})=>e["1"]} * 9 - ${({borderRadius:e})=>e["3"]}
    );
    position: relative;
    overflow: hidden;
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:e})=>e["1"]} * -1);
    bottom: calc(${({spacing:e})=>e["1"]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({spacing:e})=>e["4"]};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({easings:e})=>e["ease-out-power-2"]} both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: ${({spacing:e})=>e["01"]} ${({spacing:e})=>e["2"]};
  }
`;var z=function(e,t,r,i){var o,n=arguments.length,s=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};let V=class extends L.LitElement{constructor(){super(),this.unsubscribe=[],this.selectedOnRampProvider=a.OnRampController.state.selectedProvider,this.uri=S.ConnectionController.state.wcUri,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.error=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(a.OnRampController.subscribeKey("selectedProvider",e=>{this.selectedOnRampProvider=e}))}disconnectedCallback(){this.intervalId&&clearInterval(this.intervalId)}render(){let e="Continue in external window";this.error?e="Buy failed":this.selectedOnRampProvider&&(e=`Buy in ${this.selectedOnRampProvider?.label}`);let t=this.error?"Buy can be declined from your side or due to and error on the provider app":"We’ll notify you once your Buy is processed";return r.html`
      <wui-flex
        data-error=${(0,o.ifDefined)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="5"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-visual
            name=${(0,o.ifDefined)(this.selectedOnRampProvider?.name)}
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
            ${e}
          </wui-text>
          <wui-text align="center" variant="sm-medium" color="secondary">${t}</wui-text>
        </wui-flex>

        ${this.error?this.tryAgainTemplate():null}
      </wui-flex>

      <wui-flex .padding=${["0","5","5","5"]} justifyContent="center">
        <wui-link @click=${this.onCopyUri} color="secondary">
          <wui-icon size="sm" color="default" slot="iconLeft" name="copy"></wui-icon>
          Copy link
        </wui-link>
      </wui-flex>
    `}onTryAgain(){this.selectedOnRampProvider&&(this.error=!1,w.CoreHelperUtil.openHref(this.selectedOnRampProvider.url,"popupWindow","width=600,height=800,scrollbars=yes"))}tryAgainTemplate(){return this.selectedOnRampProvider?.url?r.html`<wui-button size="md" variant="accent" @click=${this.onTryAgain.bind(this)}>
      <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
      Try again
    </wui-button>`:null}loaderTemplate(){let e=B.ThemeController.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return r.html`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){if(!this.selectedOnRampProvider?.url){W.SnackController.showError("No link found"),b.RouterController.goBack();return}try{w.CoreHelperUtil.copyToClopboard(this.selectedOnRampProvider.url),W.SnackController.showSuccess("Link copied")}catch{W.SnackController.showError("Failed to copy")}}};V.styles=U,z([(0,i.state)()],V.prototype,"intervalId",void 0),z([(0,i.state)()],V.prototype,"selectedOnRampProvider",void 0),z([(0,i.state)()],V.prototype,"uri",void 0),z([(0,i.state)()],V.prototype,"ready",void 0),z([(0,i.state)()],V.prototype,"showRetry",void 0),z([(0,i.state)()],V.prototype,"buffering",void 0),z([(0,i.state)()],V.prototype,"error",void 0),z([(0,$.property)({type:Boolean})],V.prototype,"isMobile",void 0),z([(0,$.property)()],V.prototype,"onRetry",void 0),V=z([(0,u.customElement)("w3m-buy-in-progress-view")],V),e.s(["W3mBuyInProgressView",0,V],22154);var K=t;let M=class extends K.LitElement{render(){return r.html`
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
        <wui-button @click=${b.RouterController.goBack}>
          <wui-icon size="sm" color="inherit" name="add" slot="iconLeft"></wui-icon>
          Buy
        </wui-button>
      </wui-flex>
    `}};M=function(e,t,r,i){var o,n=arguments.length,s=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s}([(0,u.customElement)("w3m-what-is-a-buy-view")],M),e.s(["W3mWhatIsABuyView",0,M],712639);var q=t,F=t;e.i(364280);let N=p.css`
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
    right: ${({spacing:e})=>e["2"]};
    height: 40px;
    padding: ${({spacing:e})=>e["2"]} ${({spacing:e})=>e["2"]}
      ${({spacing:e})=>e["2"]} ${({spacing:e})=>e["2"]};
    min-width: 95px;
    border-radius: ${({borderRadius:e})=>e.round};
    border: 1px solid ${({tokens:e})=>e.theme.foregroundPrimary};
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    cursor: pointer;
  }

  .currency-container > wui-image {
    height: 24px;
    width: 24px;
    border-radius: 50%;
  }
`;var H=function(e,t,r,i){var o,n=arguments.length,s=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};let Q=class extends F.LitElement{constructor(){super(),this.unsubscribe=[],this.type="Token",this.value=0,this.currencies=[],this.selectedCurrency=this.currencies?.[0],this.currencyImages=n.AssetController.state.currencyImages,this.tokenImages=n.AssetController.state.tokenImages,this.unsubscribe.push(a.OnRampController.subscribeKey("purchaseCurrency",e=>{e&&"Fiat"!==this.type&&(this.selectedCurrency=this.formatPurchaseCurrency(e))}),a.OnRampController.subscribeKey("paymentCurrency",e=>{e&&"Token"!==this.type&&(this.selectedCurrency=this.formatPaymentCurrency(e))}),a.OnRampController.subscribe(e=>{"Fiat"===this.type?this.currencies=e.purchaseCurrencies.map(this.formatPurchaseCurrency):this.currencies=e.paymentCurrencies.map(this.formatPaymentCurrency)}),n.AssetController.subscribe(e=>{this.currencyImages={...e.currencyImages},this.tokenImages={...e.tokenImages}}))}firstUpdated(){a.OnRampController.getAvailableCurrencies()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.selectedCurrency?.symbol||"",t=this.currencyImages[e]||this.tokenImages[e];return r.html`<wui-input-text type="number" size="lg" value=${this.value}>
      ${this.selectedCurrency?r.html` <wui-flex
            class="currency-container"
            justifyContent="space-between"
            alignItems="center"
            gap="1"
            @click=${()=>s.ModalController.open({view:`OnRamp${this.type}Select`})}
          >
            <wui-image src=${(0,o.ifDefined)(t)}></wui-image>
            <wui-text color="primary">${this.selectedCurrency.symbol}</wui-text>
          </wui-flex>`:r.html`<wui-loading-spinner></wui-loading-spinner>`}
    </wui-input-text>`}formatPaymentCurrency(e){return{name:e.id,symbol:e.id}}formatPurchaseCurrency(e){return{name:e.name,symbol:e.symbol}}};Q.styles=N,H([(0,$.property)({type:String})],Q.prototype,"type",void 0),H([(0,$.property)({type:Number})],Q.prototype,"value",void 0),H([(0,i.state)()],Q.prototype,"currencies",void 0),H([(0,i.state)()],Q.prototype,"selectedCurrency",void 0),H([(0,i.state)()],Q.prototype,"currencyImages",void 0),H([(0,i.state)()],Q.prototype,"tokenImages",void 0),Q=H([(0,u.customElement)("w3m-onramp-input")],Q);let X=p.css`
  :host > wui-flex {
    width: 100%;
    max-width: 360px;
  }

  :host > wui-flex > wui-flex {
    border-radius: ${({borderRadius:e})=>e["8"]};
    width: 100%;
  }

  .amounts-container {
    width: 100%;
  }
`;var Y=function(e,t,r,i){var o,n=arguments.length,s=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};let _={USD:"$",EUR:"€",GBP:"£"},G=[100,250,500,1e3],J=class extends q.LitElement{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.caipAddress=f.ChainController.state.activeCaipAddress,this.loading=s.ModalController.state.loading,this.paymentCurrency=a.OnRampController.state.paymentCurrency,this.paymentAmount=a.OnRampController.state.paymentAmount,this.purchaseAmount=a.OnRampController.state.purchaseAmount,this.quoteLoading=a.OnRampController.state.quotesLoading,this.unsubscribe.push(f.ChainController.subscribeKey("activeCaipAddress",e=>this.caipAddress=e),s.ModalController.subscribeKey("loading",e=>{this.loading=e}),a.OnRampController.subscribe(e=>{this.paymentCurrency=e.paymentCurrency,this.paymentAmount=e.paymentAmount,this.purchaseAmount=e.purchaseAmount,this.quoteLoading=e.quotesLoading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return r.html`
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
            ${G.map(e=>r.html`<wui-button
                  variant=${this.paymentAmount===e?"accent-secondary":"neutral-secondary"}
                  size="md"
                  textVariant="md-medium"
                  fullWidth
                  @click=${()=>this.selectPresetAmount(e)}
                  >${`${_[this.paymentCurrency?.id||"USD"]} ${e}`}</wui-button
                >`)}
          </wui-flex>
          ${this.templateButton()}
        </wui-flex>
      </wui-flex>
    `}templateButton(){return this.caipAddress?r.html`<wui-button
          @click=${this.getQuotes.bind(this)}
          variant="accent-primary"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Get quotes
        </wui-button>`:r.html`<wui-button
          @click=${this.openModal.bind(this)}
          variant="accent"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Connect wallet
        </wui-button>`}getQuotes(){this.loading||s.ModalController.open({view:"OnRampProviders"})}openModal(){s.ModalController.open({view:"Connect"})}async onPaymentAmountChange(e){a.OnRampController.setPaymentAmount(Number(e.detail)),await a.OnRampController.getQuote()}async selectPresetAmount(e){a.OnRampController.setPaymentAmount(e),await a.OnRampController.getQuote()}};J.styles=X,Y([(0,$.property)({type:Boolean})],J.prototype,"disabled",void 0),Y([(0,i.state)()],J.prototype,"caipAddress",void 0),Y([(0,i.state)()],J.prototype,"loading",void 0),Y([(0,i.state)()],J.prototype,"paymentCurrency",void 0),Y([(0,i.state)()],J.prototype,"paymentAmount",void 0),Y([(0,i.state)()],J.prototype,"purchaseAmount",void 0),Y([(0,i.state)()],J.prototype,"quoteLoading",void 0),J=Y([(0,u.customElement)("w3m-onramp-widget")],J),e.s(["W3mOnrampWidget",0,J],225266),e.s([],853663),e.i(853663),e.i(414581),e.i(895431),e.i(781686),e.i(22154),e.i(712639),e.i(225266),e.s(["W3mBuyInProgressView",0,V,"W3mOnRampProvidersView",0,A,"W3mOnrampFiatSelectView",0,h,"W3mOnrampTokensView",0,E,"W3mOnrampWidget",0,J,"W3mWhatIsABuyView",0,M],804705)}]);