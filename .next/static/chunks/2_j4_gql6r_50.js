(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,158192,e=>{"use strict";e.i(720140);var t=e.i(227565),r=e.i(540647);e.i(890019);var i=e.i(378424),o=e.i(50040),n=e.i(209884),a=e.i(793700),s=e.i(921693),l=e.i(667265);e.i(540417);var c=e.i(953166),d=e.i(861041);let u=d.css`
  div {
    width: 100%;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`;var p=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let m=class extends t.LitElement{constructor(){super(),this.bodyObserver=void 0,this.unsubscribe=[],this.iframe=document.getElementById("w3m-iframe"),this.ready=!1,this.unsubscribe.push(a.ModalController.subscribeKey("open",e=>{e||this.onHideIframe()}),a.ModalController.subscribeKey("shake",e=>{e?this.iframe.style.animation="w3m-shake 500ms var(--apkt-easings-ease-out-power-2)":this.iframe.style.animation="none"}))}disconnectedCallback(){this.onHideIframe(),this.unsubscribe.forEach(e=>e()),this.bodyObserver?.unobserve(window.document.body)}async firstUpdated(){await this.syncTheme(),this.iframe.style.display="block";let e=this?.renderRoot?.querySelector("div");this.bodyObserver=new ResizeObserver(t=>{let r=t?.[0]?.contentBoxSize,i=r?.[0]?.inlineSize;this.iframe.style.height="600px",e.style.height="600px",s.OptionsController.state.enableEmbedded?this.updateFrameSizeForEmbeddedMode():(i&&i<=430?(this.iframe.style.width="100%",this.iframe.style.left="0px",this.iframe.style.bottom="0px",this.iframe.style.top="unset"):(this.iframe.style.width="360px",this.iframe.style.left="calc(50% - 180px)",this.iframe.style.top="calc(50% - 300px + 32px)",this.iframe.style.bottom="unset"),this.onShowIframe())}),this.bodyObserver.observe(window.document.body)}render(){return r.html`<div data-ready=${this.ready} id="w3m-frame-container"></div>`}onShowIframe(){let e=window.innerWidth<=430;this.ready=!0,this.iframe.style.animation=e?"w3m-iframe-zoom-in-mobile 200ms var(--apkt-easings-ease-out-power-2)":"w3m-iframe-zoom-in 200ms var(--apkt-easings-ease-out-power-2)"}onHideIframe(){this.iframe.style.display="none",this.iframe.style.animation="w3m-iframe-fade-out 200ms var(--apkt-easings-ease-out-power-2)"}async syncTheme(){let e=n.ConnectorController.getAuthConnector();if(e){let t=l.ThemeController.getSnapshot().themeMode,r=l.ThemeController.getSnapshot().themeVariables;await e.provider.syncTheme({themeVariables:r,w3mThemeVariables:(0,o.getW3mThemeVariables)(r,t)})}}async updateFrameSizeForEmbeddedMode(){let e=this?.renderRoot?.querySelector("div");await new Promise(e=>{setTimeout(e,300)});let t=this.getBoundingClientRect();e.style.width="100%",this.iframe.style.left=`${t.left}px`,this.iframe.style.top=`${t.top}px`,this.iframe.style.width=`${t.width}px`,this.iframe.style.height=`${t.height}px`,this.onShowIframe()}};m.styles=u,p([(0,i.state)()],m.prototype,"ready",void 0),m=p([(0,c.customElement)("w3m-approve-transaction-view")],m),e.s(["W3mApproveTransactionView",0,m],866674);var h=t,g=e.i(626074);e.i(693043);var f=t,w=e.i(349820);e.i(175235),e.i(621750),e.i(897818);var y=e.i(964603),b=e.i(555489);let v=b.css`
  a {
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
        ${({easings:e})=>e["ease-out-power-2"]},
      border ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, box-shadow, border;
  }

  /* -- Variants --------------------------------------------------------------- */
  a[data-type='success'] {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
    color: ${({tokens:e})=>e.core.textSuccess};
  }

  a[data-type='error'] {
    background-color: ${({tokens:e})=>e.core.backgroundError};
    color: ${({tokens:e})=>e.core.textError};
  }

  a[data-type='warning'] {
    background-color: ${({tokens:e})=>e.core.backgroundWarning};
    color: ${({tokens:e})=>e.core.textWarning};
  }

  /* -- Sizes --------------------------------------------------------------- */
  a[data-size='sm'] {
    height: 24px;
  }

  a[data-size='md'] {
    height: 28px;
  }

  a[data-size='lg'] {
    height: 32px;
  }

  a[data-size='sm'] > wui-image,
  a[data-size='sm'] > wui-icon {
    width: 16px;
    height: 16px;
  }

  a[data-size='md'] > wui-image,
  a[data-size='md'] > wui-icon {
    width: 20px;
    height: 20px;
  }

  a[data-size='lg'] > wui-image,
  a[data-size='lg'] > wui-icon {
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
    a[data-type='success']:not(:disabled):hover {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
      box-shadow: 0px 0px 0px 1px ${({tokens:e})=>e.core.borderSuccess};
    }

    a[data-type='error']:not(:disabled):hover {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
      box-shadow: 0px 0px 0px 1px ${({tokens:e})=>e.core.borderError};
    }

    a[data-type='warning']:not(:disabled):hover {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
      box-shadow: 0px 0px 0px 1px ${({tokens:e})=>e.core.borderWarning};
    }
  }

  a[data-type='success']:not(:disabled):focus-visible {
    box-shadow:
      0px 0px 0px 1px ${({tokens:e})=>e.core.backgroundAccentPrimary},
      0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  a[data-type='error']:not(:disabled):focus-visible {
    box-shadow:
      0px 0px 0px 1px ${({tokens:e})=>e.core.backgroundAccentPrimary},
      0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  a[data-type='warning']:not(:disabled):focus-visible {
    box-shadow:
      0px 0px 0px 1px ${({tokens:e})=>e.core.backgroundAccentPrimary},
      0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  a:disabled {
    opacity: 0.5;
  }
`;var x=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let C={sm:"md-regular",md:"lg-regular",lg:"lg-regular"},$={success:"sealCheck",error:"warning",warning:"exclamationCircle"},S=class extends f.LitElement{constructor(){super(...arguments),this.type="success",this.size="md",this.imageSrc=void 0,this.disabled=!1,this.href="",this.text=void 0}render(){return r.html`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-type=${this.type}
        data-size=${this.size}
      >
        ${this.imageTemplate()}
        <wui-text variant=${C[this.size]} color="inherit">${this.text}</wui-text>
      </a>
    `}imageTemplate(){return this.imageSrc?r.html`<wui-image src=${this.imageSrc} size="inherit"></wui-image>`:r.html`<wui-icon
      name=${$[this.type]}
      weight="fill"
      color="inherit"
      size="inherit"
      class="image-icon"
    ></wui-icon>`}};S.styles=[y.resetStyles,y.elementStyles,v],x([(0,w.property)()],S.prototype,"type",void 0),x([(0,w.property)()],S.prototype,"size",void 0),x([(0,w.property)()],S.prototype,"imageSrc",void 0),x([(0,w.property)({type:Boolean})],S.prototype,"disabled",void 0),x([(0,w.property)()],S.prototype,"href",void 0),x([(0,w.property)()],S.prototype,"text",void 0),S=x([(0,c.customElement)("wui-semantic-chip")],S),e.i(855118);let A=class extends h.LitElement{render(){return r.html`
      <wui-flex flexDirection="column" alignItems="center" gap="5" padding="5">
        <wui-text variant="md-regular" color="primary">Follow the instructions on</wui-text>
        <wui-semantic-chip
          icon="externalLink"
          variant="fill"
          text=${g.ConstantsUtil.SECURE_SITE_DASHBOARD}
          href=${g.ConstantsUtil.SECURE_SITE_DASHBOARD}
          imageSrc=${g.ConstantsUtil.SECURE_SITE_FAVICON}
          data-testid="w3m-secure-website-button"
        >
        </wui-semantic-chip>
        <wui-text variant="sm-regular" color="secondary">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `}};A=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a}([(0,c.customElement)("w3m-upgrade-wallet-view")],A),e.s(["W3mUpgradeWalletView",0,A],242337);var T=t,E=e.i(172339),R=e.i(352714),k=e.i(610389),N=e.i(687478),O=e.i(34602),P=e.i(962874),U=e.i(727068),_=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let I=class extends T.LitElement{constructor(){super(...arguments),this.loading=!1,this.switched=!1,this.text="",this.network=R.ChainController.state.activeCaipNetwork}render(){return r.html`
      <wui-flex flexDirection="column" gap="2" .padding=${["6","4","3","4"]}>
        ${this.togglePreferredAccountTypeTemplate()} ${this.toggleSmartAccountVersionTemplate()}
      </wui-flex>
    `}toggleSmartAccountVersionTemplate(){return r.html`
      <w3m-tooltip-trigger text="Changing the smart account version will reload the page">
        <wui-list-item
          icon=${this.isV6()?"arrowTop":"arrowBottom"}
          ?rounded=${!0}
          ?chevron=${!0}
          data-testid="account-toggle-smart-account-version"
          @click=${this.toggleSmartAccountVersion.bind(this)}
        >
          <wui-text variant="lg-regular" color="primary"
            >Force Smart Account Version ${this.isV6()?"7":"6"}</wui-text
          >
        </wui-list-item>
      </w3m-tooltip-trigger>
    `}isV6(){return"v6"===(P.W3mFrameStorage.get("dapp_smart_account_version")||"v6")}toggleSmartAccountVersion(){P.W3mFrameStorage.set("dapp_smart_account_version",this.isV6()?"v7":"v6"),"u">typeof window&&window?.location?.reload()}togglePreferredAccountTypeTemplate(){let e=this.network?.chainNamespace,t=R.ChainController.checkIfSmartAccountEnabled(),i=n.ConnectorController.getConnectorId(e);return n.ConnectorController.getAuthConnector()&&i===E.ConstantsUtil.CONNECTOR_ID.AUTH&&t?(this.switched||(this.text=(0,O.getPreferredAccountType)(e)===U.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your Smart Account"),r.html`
      <wui-list-item
        icon="swapHorizontal"
        ?rounded=${!0}
        ?chevron=${!0}
        ?loading=${this.loading}
        @click=${this.changePreferredAccountType.bind(this)}
        data-testid="account-toggle-preferred-account-type"
      >
        <wui-text variant="lg-regular" color="primary">${this.text}</wui-text>
      </wui-list-item>
    `):null}async changePreferredAccountType(){let e=this.network?.chainNamespace,t=R.ChainController.checkIfSmartAccountEnabled(),r=(0,O.getPreferredAccountType)(e)!==U.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT&&t?U.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT:U.W3mFrameRpcConstants.ACCOUNT_TYPES.EOA;n.ConnectorController.getAuthConnector()&&(this.loading=!0,await k.ConnectionController.setPreferredAccountType(r,e),this.text=r===U.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your Smart Account",this.switched=!0,N.SendController.resetSend(),this.loading=!1,this.requestUpdate())}};_([(0,i.state)()],I.prototype,"loading",void 0),_([(0,i.state)()],I.prototype,"switched",void 0),_([(0,i.state)()],I.prototype,"text",void 0),_([(0,i.state)()],I.prototype,"network",void 0),I=_([(0,c.customElement)("w3m-smart-account-settings-view")],I),e.s(["W3mSmartAccountSettingsView",0,I],165256);var z=t;e.i(920364);var D=e.i(732702),W=e.i(153794),j=e.i(429078),V=e.i(149577),F=e.i(565898),M=t;e.i(857288),e.i(425015);let B=b.css`
  :host {
    width: 100%;
  }

  button {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    padding: ${({spacing:e})=>e[4]};
  }

  .name {
    max-width: 75%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      cursor: pointer;
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
      border-radius: ${({borderRadius:e})=>e[6]};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: default;
  }

  button:focus-visible:enabled {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent040};
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }
`;var L=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let H=class extends M.LitElement{constructor(){super(...arguments),this.name="",this.registered=!1,this.loading=!1,this.disabled=!1}render(){return r.html`
      <button ?disabled=${this.disabled}>
        <wui-text class="name" color="primary" variant="md-regular">${this.name}</wui-text>
        ${this.templateRightContent()}
      </button>
    `}templateRightContent(){return this.loading?r.html`<wui-loading-spinner size="lg" color="primary"></wui-loading-spinner>`:this.registered?r.html`<wui-tag variant="info" size="sm">Registered</wui-tag>`:r.html`<wui-tag variant="success" size="sm">Available</wui-tag>`}};H.styles=[y.resetStyles,y.elementStyles,B],L([(0,w.property)()],H.prototype,"name",void 0),L([(0,w.property)({type:Boolean})],H.prototype,"registered",void 0),L([(0,w.property)({type:Boolean})],H.prototype,"loading",void 0),L([(0,w.property)({type:Boolean})],H.prototype,"disabled",void 0),H=L([(0,c.customElement)("wui-account-name-suggestion-item")],H);var Y=t;e.i(881514);var K=e.i(931111);e.i(199701);let G=b.css`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
  }

  :host([disabled]) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .base-name {
    position: absolute;
    right: ${({spacing:e})=>e[4]};
    top: 50%;
    transform: translateY(-50%);
    text-align: right;
    padding: ${({spacing:e})=>e[1]};
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[1]};
  }
`;var q=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let X=class extends Y.LitElement{constructor(){super(...arguments),this.disabled=!1,this.loading=!1}render(){return r.html`
      <wui-input-text
        value=${(0,K.ifDefined)(this.value)}
        ?disabled=${this.disabled}
        .value=${this.value||""}
        data-testid="wui-ens-input"
        icon="search"
        inputRightPadding="5xl"
        .onKeyDown=${this.onKeyDown}
      ></wui-input-text>
    `}};X.styles=[y.resetStyles,G],q([(0,w.property)()],X.prototype,"errorMessage",void 0),q([(0,w.property)({type:Boolean})],X.prototype,"disabled",void 0),q([(0,w.property)()],X.prototype,"value",void 0),q([(0,w.property)({type:Boolean})],X.prototype,"loading",void 0),q([(0,w.property)({attribute:!1})],X.prototype,"onKeyDown",void 0),X=q([(0,c.customElement)("wui-ens-input")],X),e.i(453424),e.i(101704),e.i(631484);var Q=e.i(970501);let J=b.css`
  wui-flex {
    width: 100%;
  }

  .suggestion {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  .suggestion:hover:not(:disabled) {
    cursor: pointer;
    border: none;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[6]};
    padding: ${({spacing:e})=>e[4]};
  }

  .suggestion:disabled {
    opacity: 0.5;
    cursor: default;
  }

  .suggestion:focus-visible:not(:disabled) {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent040};
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  .suggested-name {
    max-width: 75%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  form {
    width: 100%;
    position: relative;
  }

  .input-submit-button,
  .input-loading-spinner {
    position: absolute;
    top: 22px;
    transform: translateY(-50%);
    right: 10px;
  }
`;var Z=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let ee=class extends z.LitElement{constructor(){super(),this.formRef=(0,D.createRef)(),this.usubscribe=[],this.name="",this.error="",this.loading=j.EnsController.state.loading,this.suggestions=j.EnsController.state.suggestions,this.profileName=R.ChainController.getAccountData()?.profileName,this.onDebouncedNameInputChange=W.CoreHelperUtil.debounce(e=>{e.length<4?this.error="Name must be at least 4 characters long":Q.HelpersUtil.isValidReownName(e)?(this.error="",j.EnsController.getSuggestions(e)):this.error="The value is not a valid username"}),this.usubscribe.push(j.EnsController.subscribe(e=>{this.suggestions=e.suggestions,this.loading=e.loading}),R.ChainController.subscribeChainProp("accountState",e=>{this.profileName=e?.profileName,e?.profileName&&(this.error="You already own a name")}))}firstUpdated(){this.formRef.value?.addEventListener("keydown",this.onEnterKey.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.usubscribe.forEach(e=>e()),this.formRef.value?.removeEventListener("keydown",this.onEnterKey.bind(this))}render(){return r.html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="4"
        .padding=${["1","3","4","3"]}
      >
        <form ${(0,D.ref)(this.formRef)} @submit=${this.onSubmitName.bind(this)}>
          <wui-ens-input
            @inputChange=${this.onNameInputChange.bind(this)}
            .errorMessage=${this.error}
            .value=${this.name}
            .onKeyDown=${this.onKeyDown.bind(this)}
          >
          </wui-ens-input>
          ${this.submitButtonTemplate()}
          <input type="submit" hidden />
        </form>
        ${this.templateSuggestions()}
      </wui-flex>
    `}submitButtonTemplate(){let e=this.suggestions.find(e=>e.name?.split(".")?.[0]===this.name&&e.registered);if(this.loading)return r.html`<wui-loading-spinner
        class="input-loading-spinner"
        color="secondary"
      ></wui-loading-spinner>`;let t=`${this.name}${E.ConstantsUtil.WC_NAME_SUFFIX}`;return r.html`
      <wui-icon-link
        ?disabled=${!!e}
        class="input-submit-button"
        size="sm"
        icon="chevronRight"
        iconColor=${e?"default":"accent-primary"}
        @click=${()=>this.onSubmitName(t)}
      >
      </wui-icon-link>
    `}onNameInputChange(e){let t=Q.HelpersUtil.validateReownName(e.detail||"");this.name=t,this.onDebouncedNameInputChange(t)}onKeyDown(e){1!==e.key.length||Q.HelpersUtil.isValidReownName(e.key)||e.preventDefault()}templateSuggestions(){return!this.name||this.name.length<4||this.error?null:r.html`<wui-flex flexDirection="column" gap="1" alignItems="center">
      ${this.suggestions.map(e=>r.html`<wui-account-name-suggestion-item
            name=${e.name}
            ?registered=${e.registered}
            ?loading=${this.loading}
            ?disabled=${e.registered||this.loading}
            data-testid="account-name-suggestion"
            @click=${()=>this.onSubmitName(e.name)}
          ></wui-account-name-suggestion-item>`)}
    </wui-flex>`}isAllowedToSubmit(e){let t=e.split(".")?.[0],r=this.suggestions.find(e=>e.name?.split(".")?.[0]===t&&e.registered);return!this.loading&&!this.error&&!this.profileName&&t&&j.EnsController.validateName(t)&&!r}async onSubmitName(e){try{if(!this.isAllowedToSubmit(e))return;V.EventsController.sendEvent({type:"track",event:"REGISTER_NAME_INITIATED",properties:{isSmartAccount:(0,O.getPreferredAccountType)(R.ChainController.state.activeChain)===U.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:e}}),await j.EnsController.registerName(e),V.EventsController.sendEvent({type:"track",event:"REGISTER_NAME_SUCCESS",properties:{isSmartAccount:(0,O.getPreferredAccountType)(R.ChainController.state.activeChain)===U.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:e}})}catch(t){F.SnackController.showError(t.message),V.EventsController.sendEvent({type:"track",event:"REGISTER_NAME_ERROR",properties:{isSmartAccount:(0,O.getPreferredAccountType)(R.ChainController.state.activeChain)===U.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:e,error:W.CoreHelperUtil.parseError(t)}})}}onEnterKey(e){if("Enter"===e.key&&this.name&&this.isAllowedToSubmit(this.name)){let e=`${this.name}${E.ConstantsUtil.WC_NAME_SUFFIX}`;this.onSubmitName(e)}}};ee.styles=J,Z([(0,w.property)()],ee.prototype,"errorMessage",void 0),Z([(0,i.state)()],ee.prototype,"name",void 0),Z([(0,i.state)()],ee.prototype,"error",void 0),Z([(0,i.state)()],ee.prototype,"loading",void 0),Z([(0,i.state)()],ee.prototype,"suggestions",void 0),Z([(0,i.state)()],ee.prototype,"profileName",void 0),ee=Z([(0,c.customElement)("w3m-register-account-name-view")],ee),e.s(["W3mRegisterAccountNameView",0,ee],184116);var et=t,er=e.i(587882),ei=e.i(966584);e.i(496768),e.i(125428),e.i(569046);let eo=d.css`
  .continue-button-container {
    width: 100%;
  }
`,en=class extends et.LitElement{render(){return r.html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="6"
        .padding=${["0","0","4","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{W.CoreHelperUtil.openHref(er.NavigationUtil.URLS.FAQ,"_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return r.html` <wui-flex
      flexDirection="column"
      gap="6"
      alignItems="center"
      .padding=${["0","6","0","6"]}
    >
      <wui-flex gap="3" alignItems="center" justifyContent="center">
        <wui-icon-box size="xl" color="success" icon="checkmark"></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="3">
        <wui-text align="center" variant="md-medium" color="primary">
          Account name chosen successfully
        </wui-text>
        <wui-text align="center" variant="md-regular" color="primary">
          You can now fund your account and trade crypto
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return r.html`<wui-flex
      .padding=${["0","4","0","4"]}
      gap="3"
      class="continue-button-container"
    >
      <wui-button fullWidth size="lg" borderRadius="xs" @click=${this.redirectToAccount.bind(this)}
        >Let's Go!
      </wui-button>
    </wui-flex>`}redirectToAccount(){ei.RouterController.replace("Account")}};en.styles=eo,en=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a}([(0,c.customElement)("w3m-register-account-name-success-view")],en),e.s(["W3mRegisterAccountNameSuccess",0,en],923838),e.s([],886238),e.i(886238),e.i(866674),e.i(242337),e.i(165256),e.i(184116),e.i(923838),e.s(["W3mApproveTransactionView",0,m,"W3mRegisterAccountNameSuccess",0,en,"W3mRegisterAccountNameView",0,ee,"W3mSmartAccountSettingsView",0,I,"W3mUpgradeWalletView",0,A],158192)}]);