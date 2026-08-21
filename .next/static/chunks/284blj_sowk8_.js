(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,859932,e=>{"use strict";e.i(720140);var t=e.i(227565),i=e.i(540647);e.i(890019);var o=e.i(378424);e.i(881514);var r=e.i(931111),n=e.i(921693),s=e.i(310883);e.i(540417);var a=e.i(953166);e.i(693043),e.i(388147);var l=t,c=e.i(349820),d=e.i(246923),h=e.i(70068),u=e.i(209884),p=e.i(626074),m=e.i(966584),C=e.i(43304),w=e.i(153794);e.i(796444);var g=e.i(930960),v=e.i(555489);let f=v.css`
  :host {
    margin-top: ${({spacing:e})=>e["1"]};
  }
  wui-separator {
    margin: ${({spacing:e})=>e["3"]} calc(${({spacing:e})=>e["3"]} * -1)
      ${({spacing:e})=>e["2"]} calc(${({spacing:e})=>e["3"]} * -1);
    width: calc(100% + ${({spacing:e})=>e["3"]} * 2);
  }
`;var b=function(e,t,i,o){var r,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(n<3?r(s):n>3?r(t,i,s):r(t,i))||s);return n>3&&s&&Object.defineProperty(t,i,s),s};let y=class extends l.LitElement{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=u.ConnectorController.state.connectors,this.authConnector=this.connectors.find(e=>"AUTH"===e.type),this.remoteFeatures=n.OptionsController.state.remoteFeatures,this.isPwaLoading=!1,this.hasExceededUsageLimit=h.ApiController.state.plan.hasExceededUsageLimit,this.unsubscribe.push(u.ConnectorController.subscribeKey("connectors",e=>{this.connectors=e,this.authConnector=this.connectors.find(e=>"AUTH"===e.type)}),n.OptionsController.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}connectedCallback(){super.connectedCallback(),this.handlePwaFrameLoad()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.remoteFeatures?.socials||[],t=!!this.authConnector,o=e?.length,r="ConnectSocials"===m.RouterController.state.view;return t&&o||r?(r&&!o&&(e=p.ConstantsUtil.DEFAULT_SOCIALS),i.html` <wui-flex flexDirection="column" gap="2">
      ${e.map(e=>i.html`<wui-list-social
            @click=${()=>{this.onSocialClick(e)}}
            data-testid=${`social-selector-${e}`}
            name=${e}
            logo=${e}
            ?disabled=${this.isPwaLoading}
          ></wui-list-social>`)}
    </wui-flex>`):null}async onSocialClick(e){this.hasExceededUsageLimit?m.RouterController.push("UsageExceeded"):e&&await (0,C.executeSocialLogin)(e)}async handlePwaFrameLoad(){if(w.CoreHelperUtil.isPWA()){this.isPwaLoading=!0;try{this.authConnector?.provider instanceof g.W3mFrameProvider&&await this.authConnector.provider.init()}catch(e){d.AlertController.open({displayMessage:"Error loading embedded wallet in PWA",debugMessage:e.message},"error")}finally{this.isPwaLoading=!1}}}};y.styles=f,b([(0,c.property)()],y.prototype,"tabIdx",void 0),b([(0,o.state)()],y.prototype,"connectors",void 0),b([(0,o.state)()],y.prototype,"authConnector",void 0),b([(0,o.state)()],y.prototype,"remoteFeatures",void 0),b([(0,o.state)()],y.prototype,"isPwaLoading",void 0),b([(0,o.state)()],y.prototype,"hasExceededUsageLimit",void 0),y=b([(0,a.customElement)("w3m-social-login-list")],y);let x=v.css`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    transition: opacity ${({durations:e})=>e.md}
      ${({easings:e})=>e["ease-out-power-1"]};
    will-change: opacity;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }

  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var E=function(e,t,i,o){var r,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(n<3?r(s):n>3?r(t,i,s):r(t,i))||s);return n>3&&s&&Object.defineProperty(t,i,s),s};let S=class extends t.LitElement{constructor(){super(),this.unsubscribe=[],this.checked=s.OptionsStateController.state.isLegalCheckboxChecked,this.unsubscribe.push(s.OptionsStateController.subscribeKey("isLegalCheckboxChecked",e=>{this.checked=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=n.OptionsController.state,o=n.OptionsController.state.features?.legalCheckbox,s=!!(e||t)&&!!o&&!this.checked;return i.html`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${["0","3","3","3"]}
        gap="01"
        class=${(0,r.ifDefined)(s?"disabled":void 0)}
      >
        <w3m-social-login-list tabIdx=${(0,r.ifDefined)(s?-1:void 0)}></w3m-social-login-list>
      </wui-flex>
    `}};S.styles=x,E([(0,o.state)()],S.prototype,"checked",void 0),S=E([(0,a.customElement)("w3m-connect-socials-view")],S),e.s(["W3mConnectSocialsView",0,S],483203);var $=t,P=e.i(352714),k=e.i(610389),L=e.i(149577),O=e.i(793700),R=e.i(565898),U=e.i(856181),I=e.i(667265);e.i(125428),e.i(67635),e.i(99919),e.i(855118);var T=e.i(934911),A=e.i(199221);let W=v.css`
  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: ${({borderRadius:e})=>e["8"]};
  }
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
  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:e})=>e["1"]} * -1);
    bottom: calc(${({spacing:e})=>e["1"]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all ${({easings:e})=>e["ease-out-power-2"]}
      ${({durations:e})=>e.lg};
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
  .capitalize {
    text-transform: capitalize;
  }
`;var F=function(e,t,i,o){var r,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(n<3?r(s):n>3?r(t,i,s):r(t,i))||s);return n>3&&s&&Object.defineProperty(t,i,s),s};let D=class extends $.LitElement{constructor(){super(),this.unsubscribe=[],this.socialProvider=P.ChainController.getAccountData()?.socialProvider,this.socialWindow=P.ChainController.getAccountData()?.socialWindow,this.error=!1,this.connecting=!1,this.message="Connect in the provider window",this.remoteFeatures=n.OptionsController.state.remoteFeatures,this.address=P.ChainController.getAccountData()?.address,this.connectionsByNamespace=k.ConnectionController.getConnections(P.ChainController.state.activeChain),this.hasMultipleConnections=this.connectionsByNamespace.length>0,this.authConnector=u.ConnectorController.getAuthConnector(),this.handleSocialConnection=async e=>{if(e.data?.resultUri)if(e.origin===A.ConstantsUtil.SECURE_SITE_ORIGIN){window.removeEventListener("message",this.handleSocialConnection,!1);try{if(this.authConnector&&!this.connecting){this.connecting=!0;let t=this.parseURLError(e.data.resultUri);if(t)return void this.handleSocialError(t);this.closeSocialWindow(),this.updateMessage();let i=e.data.resultUri;this.socialProvider&&L.EventsController.sendEvent({type:"track",event:"SOCIAL_LOGIN_REQUEST_USER_DATA",properties:{provider:this.socialProvider}}),await k.ConnectionController.connectExternal({id:this.authConnector.id,type:this.authConnector.type,socialUri:i},this.authConnector.chain),this.socialProvider&&(U.StorageUtil.setConnectedSocialProvider(this.socialProvider),L.EventsController.sendEvent({type:"track",event:"SOCIAL_LOGIN_SUCCESS",properties:{provider:this.socialProvider}}))}}catch(e){this.error=!0,this.updateMessage(),this.socialProvider&&L.EventsController.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider,message:w.CoreHelperUtil.parseError(e)}})}}else m.RouterController.goBack(),R.SnackController.showError("Untrusted Origin"),this.socialProvider&&L.EventsController.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider,message:"Untrusted Origin"}})},T.ErrorUtil.EmbeddedWalletAbortController.signal.addEventListener("abort",()=>{this.closeSocialWindow()}),this.unsubscribe.push(P.ChainController.subscribeChainProp("accountState",e=>{if(e&&(this.socialProvider=e.socialProvider,e.socialWindow&&(this.socialWindow=e.socialWindow),e.address)){let t=this.remoteFeatures?.multiWallet;e.address!==this.address&&(this.hasMultipleConnections&&t?(m.RouterController.replace("ProfileWallets"),R.SnackController.showSuccess("New Wallet Added"),this.address=e.address):(O.ModalController.state.open||n.OptionsController.state.enableEmbedded)&&O.ModalController.close())}}),n.OptionsController.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e})),this.authConnector&&this.connectSocial()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),window.removeEventListener("message",this.handleSocialConnection,!1),P.ChainController.state.activeCaipAddress||!this.socialProvider||this.connecting||L.EventsController.sendEvent({type:"track",event:"SOCIAL_LOGIN_CANCELED",properties:{provider:this.socialProvider}}),this.closeSocialWindow()}render(){return i.html`
      <wui-flex
        data-error=${(0,r.ifDefined)(this.error)}
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="6"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo=${(0,r.ifDefined)(this.socialProvider)}></wui-logo>
          ${this.error?null:this.loaderTemplate()}
          <wui-icon-box color="error" icon="close" size="sm"></wui-icon-box>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="2">
          <wui-text align="center" variant="lg-medium" color="primary"
            >Log in with
            <span class="capitalize">${this.socialProvider??"Social"}</span></wui-text
          >
          <wui-text align="center" variant="lg-regular" color=${this.error?"error":"secondary"}
            >${this.message}</wui-text
          ></wui-flex
        >
      </wui-flex>
    `}loaderTemplate(){let e=I.ThemeController.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return i.html`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}parseURLError(e){try{let t="error=",i=e.indexOf(t);if(-1===i)return null;return e.substring(i+t.length)}catch{return null}}connectSocial(){let e=setInterval(()=>{this.socialWindow?.closed&&(this.connecting||"ConnectingSocial"!==m.RouterController.state.view||m.RouterController.goBack(),clearInterval(e))},1e3);window.addEventListener("message",this.handleSocialConnection,!1)}updateMessage(){this.error?this.message="Something went wrong":this.connecting?this.message="Retrieving user data":this.message="Connect in the provider window"}handleSocialError(e){this.error=!0,this.updateMessage(),this.socialProvider&&L.EventsController.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider,message:e}}),this.closeSocialWindow()}closeSocialWindow(){this.socialWindow&&(this.socialWindow.close(),P.ChainController.setAccountProp("socialWindow",void 0,P.ChainController.state.activeChain))}};D.styles=W,F([(0,o.state)()],D.prototype,"socialProvider",void 0),F([(0,o.state)()],D.prototype,"socialWindow",void 0),F([(0,o.state)()],D.prototype,"error",void 0),F([(0,o.state)()],D.prototype,"connecting",void 0),F([(0,o.state)()],D.prototype,"message",void 0),F([(0,o.state)()],D.prototype,"remoteFeatures",void 0),D=F([(0,a.customElement)("w3m-connecting-social-view")],D),e.s(["W3mConnectingSocialView",0,D],277969);var _=t;e.i(496768),e.i(453424),e.i(410001),e.i(435269);let N=v.css`
  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: ${({borderRadius:e})=>e["8"]};
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
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

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;var j=function(e,t,i,o){var r,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(n<3?r(s):n>3?r(t,i,s):r(t,i))||s);return n>3&&s&&Object.defineProperty(t,i,s),s};let M=class extends _.LitElement{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.socialProvider=P.ChainController.getAccountData()?.socialProvider,this.uri=P.ChainController.getAccountData()?.farcasterUrl,this.ready=!1,this.loading=!1,this.remoteFeatures=n.OptionsController.state.remoteFeatures,this.authConnector=u.ConnectorController.getAuthConnector(),this.forceUpdate=()=>{this.requestUpdate()},this.unsubscribe.push(P.ChainController.subscribeChainProp("accountState",e=>{this.socialProvider=e?.socialProvider,this.uri=e?.farcasterUrl,this.connectFarcaster()}),n.OptionsController.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e})),window.addEventListener("resize",this.forceUpdate)}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.timeout),window.removeEventListener("resize",this.forceUpdate),!P.ChainController.state.activeCaipAddress&&this.socialProvider&&(this.uri||this.loading)&&L.EventsController.sendEvent({type:"track",event:"SOCIAL_LOGIN_CANCELED",properties:{provider:this.socialProvider}})}render(){return this.onRenderProxy(),i.html`${this.platformTemplate()}`}platformTemplate(){return w.CoreHelperUtil.isMobile()?i.html`${this.mobileTemplate()}`:i.html`${this.desktopTemplate()}`}desktopTemplate(){return this.loading?i.html`${this.loadingTemplate()}`:i.html`${this.qrTemplate()}`}qrTemplate(){return i.html` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${["0","5","5","5"]}
      gap="5"
    >
      <wui-shimmer width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

      <wui-text variant="lg-medium" color="primary"> Scan this QR Code with your phone </wui-text>
      ${this.copyTemplate()}
    </wui-flex>`}loadingTemplate(){return i.html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["5","5","5","5"]}
        gap="5"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo="farcaster"></wui-logo>
          ${this.loaderTemplate()}
          <wui-icon-box color="error" icon="close" size="sm"></wui-icon-box>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="2">
          <wui-text align="center" variant="md-medium" color="primary">
            Loading user data
          </wui-text>
          <wui-text align="center" variant="sm-regular" color="secondary">
            Please wait a moment while we load your data.
          </wui-text>
        </wui-flex>
      </wui-flex>
    `}mobileTemplate(){return i.html` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${["10","5","5","5"]}
      gap="5"
    >
      <wui-flex justifyContent="center" alignItems="center">
        <wui-logo logo="farcaster"></wui-logo>
        ${this.loaderTemplate()}
        <wui-icon-box
          color="error"
          icon="close"
          size="sm"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="2">
        <wui-text align="center" variant="md-medium" color="primary"
          >Continue in Farcaster</span></wui-text
        >
        <wui-text align="center" variant="sm-regular" color="secondary"
          >Accept connection request in the app</wui-text
        ></wui-flex
      >
      ${this.mobileLinkTemplate()}
    </wui-flex>`}loaderTemplate(){let e=I.ThemeController.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return i.html`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}async connectFarcaster(){if(this.authConnector)try{await this.authConnector?.provider.connectFarcaster(),this.socialProvider&&(U.StorageUtil.setConnectedSocialProvider(this.socialProvider),L.EventsController.sendEvent({type:"track",event:"SOCIAL_LOGIN_REQUEST_USER_DATA",properties:{provider:this.socialProvider}})),this.loading=!0;let e=k.ConnectionController.getConnections(this.authConnector.chain).length>0;await k.ConnectionController.connectExternal(this.authConnector,this.authConnector.chain);let t=this.remoteFeatures?.multiWallet;this.socialProvider&&L.EventsController.sendEvent({type:"track",event:"SOCIAL_LOGIN_SUCCESS",properties:{provider:this.socialProvider}}),this.loading=!1,e&&t?(m.RouterController.replace("ProfileWallets"),R.SnackController.showSuccess("New Wallet Added")):O.ModalController.close()}catch(e){this.socialProvider&&L.EventsController.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider,message:w.CoreHelperUtil.parseError(e)}}),m.RouterController.goBack(),R.SnackController.showError(e)}}mobileLinkTemplate(){return i.html`<wui-button
      size="md"
      ?loading=${this.loading}
      ?disabled=${!this.uri||this.loading}
      @click=${()=>{this.uri&&w.CoreHelperUtil.openHref(this.uri,"_blank")}}
    >
      Open farcaster</wui-button
    >`}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;let e=this.getBoundingClientRect().width-40,t=I.ThemeController.state.themeVariables["--apkt-qr-color"]??I.ThemeController.state.themeVariables["--w3m-qr-color"];return i.html` <wui-qr-code
      size=${e}
      theme=${I.ThemeController.state.themeMode}
      uri=${this.uri}
      ?farcaster=${!0}
      data-testid="wui-qr-code"
      color=${(0,r.ifDefined)(t)}
    ></wui-qr-code>`}copyTemplate(){let e=!this.uri||!this.ready;return i.html`<wui-button
      .disabled=${e}
      @click=${this.onCopyUri}
      variant="neutral-secondary"
      size="sm"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="sm" color="default" slot="iconRight" name="copy"></wui-icon>
      Copy link
    </wui-button>`}onCopyUri(){try{this.uri&&(w.CoreHelperUtil.copyToClopboard(this.uri),R.SnackController.showSuccess("Link copied"))}catch{R.SnackController.showError("Failed to copy")}}};M.styles=N,j([(0,o.state)()],M.prototype,"socialProvider",void 0),j([(0,o.state)()],M.prototype,"uri",void 0),j([(0,o.state)()],M.prototype,"ready",void 0),j([(0,o.state)()],M.prototype,"loading",void 0),j([(0,o.state)()],M.prototype,"remoteFeatures",void 0),M=j([(0,a.customElement)("w3m-connecting-farcaster-view")],M),e.s(["W3mConnectingFarcasterView",0,M],556334),e.s([],212251),e.i(212251),e.i(483203),e.i(277969),e.i(556334),e.s(["W3mConnectSocialsView",0,S,"W3mConnectingFarcasterView",0,M,"W3mConnectingSocialView",0,D],859932)}]);