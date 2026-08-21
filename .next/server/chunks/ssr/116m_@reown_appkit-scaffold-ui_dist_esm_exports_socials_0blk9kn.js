module.exports=[675286,a=>{"use strict";a.i(176996);var b=a.i(44886),c=a.i(979837);a.i(525181);var d=a.i(905653);a.i(876091);var e=a.i(960078),f=a.i(412631),g=a.i(678916);a.i(564205);var h=a.i(526551);a.i(735803),a.i(834018);var i=b,j=a.i(129349),k=a.i(420540),l=a.i(88726),m=a.i(661107),n=a.i(39957),o=a.i(682762),p=a.i(243647),q=a.i(456594);a.i(574937);var r=a.i(946293),s=a.i(192361);let t=s.css`
  :host {
    margin-top: ${({spacing:a})=>a["1"]};
  }
  wui-separator {
    margin: ${({spacing:a})=>a["3"]} calc(${({spacing:a})=>a["3"]} * -1)
      ${({spacing:a})=>a["2"]} calc(${({spacing:a})=>a["3"]} * -1);
    width: calc(100% + ${({spacing:a})=>a["3"]} * 2);
  }
`;var u=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let v=class extends i.LitElement{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=m.ConnectorController.state.connectors,this.authConnector=this.connectors.find(a=>"AUTH"===a.type),this.remoteFeatures=f.OptionsController.state.remoteFeatures,this.isPwaLoading=!1,this.hasExceededUsageLimit=l.ApiController.state.plan.hasExceededUsageLimit,this.unsubscribe.push(m.ConnectorController.subscribeKey("connectors",a=>{this.connectors=a,this.authConnector=this.connectors.find(a=>"AUTH"===a.type)}),f.OptionsController.subscribeKey("remoteFeatures",a=>this.remoteFeatures=a))}connectedCallback(){super.connectedCallback(),this.handlePwaFrameLoad()}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}render(){let a=this.remoteFeatures?.socials||[],b=!!this.authConnector,d=a?.length,e="ConnectSocials"===o.RouterController.state.view;return b&&d||e?(e&&!d&&(a=n.ConstantsUtil.DEFAULT_SOCIALS),c.html` <wui-flex flexDirection="column" gap="2">
      ${a.map(a=>c.html`<wui-list-social
            @click=${()=>{this.onSocialClick(a)}}
            data-testid=${`social-selector-${a}`}
            name=${a}
            logo=${a}
            ?disabled=${this.isPwaLoading}
          ></wui-list-social>`)}
    </wui-flex>`):null}async onSocialClick(a){this.hasExceededUsageLimit?o.RouterController.push("UsageExceeded"):a&&await (0,p.executeSocialLogin)(a)}async handlePwaFrameLoad(){if(q.CoreHelperUtil.isPWA()){this.isPwaLoading=!0;try{this.authConnector?.provider instanceof r.W3mFrameProvider&&await this.authConnector.provider.init()}catch(a){k.AlertController.open({displayMessage:"Error loading embedded wallet in PWA",debugMessage:a.message},"error")}finally{this.isPwaLoading=!1}}}};v.styles=t,u([(0,j.property)()],v.prototype,"tabIdx",void 0),u([(0,d.state)()],v.prototype,"connectors",void 0),u([(0,d.state)()],v.prototype,"authConnector",void 0),u([(0,d.state)()],v.prototype,"remoteFeatures",void 0),u([(0,d.state)()],v.prototype,"isPwaLoading",void 0),u([(0,d.state)()],v.prototype,"hasExceededUsageLimit",void 0),v=u([(0,h.customElement)("w3m-social-login-list")],v);let w=s.css`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    transition: opacity ${({durations:a})=>a.md}
      ${({easings:a})=>a["ease-out-power-1"]};
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
`;var x=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let y=class extends b.LitElement{constructor(){super(),this.unsubscribe=[],this.checked=g.OptionsStateController.state.isLegalCheckboxChecked,this.unsubscribe.push(g.OptionsStateController.subscribeKey("isLegalCheckboxChecked",a=>{this.checked=a}))}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}render(){let{termsConditionsUrl:a,privacyPolicyUrl:b}=f.OptionsController.state,d=f.OptionsController.state.features?.legalCheckbox,g=!!(a||b)&&!!d&&!this.checked;return c.html`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${["0","3","3","3"]}
        gap="01"
        class=${(0,e.ifDefined)(g?"disabled":void 0)}
      >
        <w3m-social-login-list tabIdx=${(0,e.ifDefined)(g?-1:void 0)}></w3m-social-login-list>
      </wui-flex>
    `}};y.styles=w,x([(0,d.state)()],y.prototype,"checked",void 0),y=x([(0,h.customElement)("w3m-connect-socials-view")],y),a.s(["W3mConnectSocialsView",0,y],652794);var z=b,A=a.i(34525),B=a.i(166920),C=a.i(649637),D=a.i(950802),E=a.i(475744),F=a.i(965497),G=a.i(716715);a.i(372488),a.i(583823),a.i(656311),a.i(603511);var H=a.i(123319),I=a.i(447066);let J=s.css`
  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: ${({borderRadius:a})=>a["8"]};
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
    right: calc(${({spacing:a})=>a["1"]} * -1);
    bottom: calc(${({spacing:a})=>a["1"]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all ${({easings:a})=>a["ease-out-power-2"]}
      ${({durations:a})=>a.lg};
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
  .capitalize {
    text-transform: capitalize;
  }
`;var K=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let L=class extends z.LitElement{constructor(){super(),this.unsubscribe=[],this.socialProvider=A.ChainController.getAccountData()?.socialProvider,this.socialWindow=A.ChainController.getAccountData()?.socialWindow,this.error=!1,this.connecting=!1,this.message="Connect in the provider window",this.remoteFeatures=f.OptionsController.state.remoteFeatures,this.address=A.ChainController.getAccountData()?.address,this.connectionsByNamespace=B.ConnectionController.getConnections(A.ChainController.state.activeChain),this.hasMultipleConnections=this.connectionsByNamespace.length>0,this.authConnector=m.ConnectorController.getAuthConnector(),this.handleSocialConnection=async a=>{if(a.data?.resultUri)if(a.origin===I.ConstantsUtil.SECURE_SITE_ORIGIN){window.removeEventListener("message",this.handleSocialConnection,!1);try{if(this.authConnector&&!this.connecting){this.connecting=!0;let b=this.parseURLError(a.data.resultUri);if(b)return void this.handleSocialError(b);this.closeSocialWindow(),this.updateMessage();let c=a.data.resultUri;this.socialProvider&&C.EventsController.sendEvent({type:"track",event:"SOCIAL_LOGIN_REQUEST_USER_DATA",properties:{provider:this.socialProvider}}),await B.ConnectionController.connectExternal({id:this.authConnector.id,type:this.authConnector.type,socialUri:c},this.authConnector.chain),this.socialProvider&&(F.StorageUtil.setConnectedSocialProvider(this.socialProvider),C.EventsController.sendEvent({type:"track",event:"SOCIAL_LOGIN_SUCCESS",properties:{provider:this.socialProvider}}))}}catch(a){this.error=!0,this.updateMessage(),this.socialProvider&&C.EventsController.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider,message:q.CoreHelperUtil.parseError(a)}})}}else o.RouterController.goBack(),E.SnackController.showError("Untrusted Origin"),this.socialProvider&&C.EventsController.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider,message:"Untrusted Origin"}})},H.ErrorUtil.EmbeddedWalletAbortController.signal.addEventListener("abort",()=>{this.closeSocialWindow()}),this.unsubscribe.push(A.ChainController.subscribeChainProp("accountState",a=>{if(a&&(this.socialProvider=a.socialProvider,a.socialWindow&&(this.socialWindow=a.socialWindow),a.address)){let b=this.remoteFeatures?.multiWallet;a.address!==this.address&&(this.hasMultipleConnections&&b?(o.RouterController.replace("ProfileWallets"),E.SnackController.showSuccess("New Wallet Added"),this.address=a.address):(D.ModalController.state.open||f.OptionsController.state.enableEmbedded)&&D.ModalController.close())}}),f.OptionsController.subscribeKey("remoteFeatures",a=>{this.remoteFeatures=a})),this.authConnector&&this.connectSocial()}disconnectedCallback(){this.unsubscribe.forEach(a=>a()),window.removeEventListener("message",this.handleSocialConnection,!1),A.ChainController.state.activeCaipAddress||!this.socialProvider||this.connecting||C.EventsController.sendEvent({type:"track",event:"SOCIAL_LOGIN_CANCELED",properties:{provider:this.socialProvider}}),this.closeSocialWindow()}render(){return c.html`
      <wui-flex
        data-error=${(0,e.ifDefined)(this.error)}
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="6"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo=${(0,e.ifDefined)(this.socialProvider)}></wui-logo>
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
    `}loaderTemplate(){let a=G.ThemeController.state.themeVariables["--w3m-border-radius-master"],b=a?parseInt(a.replace("px",""),10):4;return c.html`<wui-loading-thumbnail radius=${9*b}></wui-loading-thumbnail>`}parseURLError(a){try{let b="error=",c=a.indexOf(b);if(-1===c)return null;return a.substring(c+b.length)}catch{return null}}connectSocial(){let a=setInterval(()=>{this.socialWindow?.closed&&(this.connecting||"ConnectingSocial"!==o.RouterController.state.view||o.RouterController.goBack(),clearInterval(a))},1e3);window.addEventListener("message",this.handleSocialConnection,!1)}updateMessage(){this.error?this.message="Something went wrong":this.connecting?this.message="Retrieving user data":this.message="Connect in the provider window"}handleSocialError(a){this.error=!0,this.updateMessage(),this.socialProvider&&C.EventsController.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider,message:a}}),this.closeSocialWindow()}closeSocialWindow(){this.socialWindow&&(this.socialWindow.close(),A.ChainController.setAccountProp("socialWindow",void 0,A.ChainController.state.activeChain))}};L.styles=J,K([(0,d.state)()],L.prototype,"socialProvider",void 0),K([(0,d.state)()],L.prototype,"socialWindow",void 0),K([(0,d.state)()],L.prototype,"error",void 0),K([(0,d.state)()],L.prototype,"connecting",void 0),K([(0,d.state)()],L.prototype,"message",void 0),K([(0,d.state)()],L.prototype,"remoteFeatures",void 0),L=K([(0,h.customElement)("w3m-connecting-social-view")],L),a.s(["W3mConnectingSocialView",0,L],941096);var M=b;a.i(782682),a.i(644344),a.i(556105),a.i(610594);let N=s.css`
  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: ${({borderRadius:a})=>a[4]};
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: ${({durations:a})=>a.xl};
    animation-timing-function: ${({easings:a})=>a["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: ${({borderRadius:a})=>a["8"]};
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
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

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;var O=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let P=class extends M.LitElement{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.socialProvider=A.ChainController.getAccountData()?.socialProvider,this.uri=A.ChainController.getAccountData()?.farcasterUrl,this.ready=!1,this.loading=!1,this.remoteFeatures=f.OptionsController.state.remoteFeatures,this.authConnector=m.ConnectorController.getAuthConnector(),this.forceUpdate=()=>{this.requestUpdate()},this.unsubscribe.push(A.ChainController.subscribeChainProp("accountState",a=>{this.socialProvider=a?.socialProvider,this.uri=a?.farcasterUrl,this.connectFarcaster()}),f.OptionsController.subscribeKey("remoteFeatures",a=>{this.remoteFeatures=a})),window.addEventListener("resize",this.forceUpdate)}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.timeout),window.removeEventListener("resize",this.forceUpdate),!A.ChainController.state.activeCaipAddress&&this.socialProvider&&(this.uri||this.loading)&&C.EventsController.sendEvent({type:"track",event:"SOCIAL_LOGIN_CANCELED",properties:{provider:this.socialProvider}})}render(){return this.onRenderProxy(),c.html`${this.platformTemplate()}`}platformTemplate(){return q.CoreHelperUtil.isMobile()?c.html`${this.mobileTemplate()}`:c.html`${this.desktopTemplate()}`}desktopTemplate(){return this.loading?c.html`${this.loadingTemplate()}`:c.html`${this.qrTemplate()}`}qrTemplate(){return c.html` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${["0","5","5","5"]}
      gap="5"
    >
      <wui-shimmer width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

      <wui-text variant="lg-medium" color="primary"> Scan this QR Code with your phone </wui-text>
      ${this.copyTemplate()}
    </wui-flex>`}loadingTemplate(){return c.html`
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
    `}mobileTemplate(){return c.html` <wui-flex
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
    </wui-flex>`}loaderTemplate(){let a=G.ThemeController.state.themeVariables["--w3m-border-radius-master"],b=a?parseInt(a.replace("px",""),10):4;return c.html`<wui-loading-thumbnail radius=${9*b}></wui-loading-thumbnail>`}async connectFarcaster(){if(this.authConnector)try{await this.authConnector?.provider.connectFarcaster(),this.socialProvider&&(F.StorageUtil.setConnectedSocialProvider(this.socialProvider),C.EventsController.sendEvent({type:"track",event:"SOCIAL_LOGIN_REQUEST_USER_DATA",properties:{provider:this.socialProvider}})),this.loading=!0;let a=B.ConnectionController.getConnections(this.authConnector.chain).length>0;await B.ConnectionController.connectExternal(this.authConnector,this.authConnector.chain);let b=this.remoteFeatures?.multiWallet;this.socialProvider&&C.EventsController.sendEvent({type:"track",event:"SOCIAL_LOGIN_SUCCESS",properties:{provider:this.socialProvider}}),this.loading=!1,a&&b?(o.RouterController.replace("ProfileWallets"),E.SnackController.showSuccess("New Wallet Added")):D.ModalController.close()}catch(a){this.socialProvider&&C.EventsController.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider,message:q.CoreHelperUtil.parseError(a)}}),o.RouterController.goBack(),E.SnackController.showError(a)}}mobileLinkTemplate(){return c.html`<wui-button
      size="md"
      ?loading=${this.loading}
      ?disabled=${!this.uri||this.loading}
      @click=${()=>{this.uri&&q.CoreHelperUtil.openHref(this.uri,"_blank")}}
    >
      Open farcaster</wui-button
    >`}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;let a=this.getBoundingClientRect().width-40,b=G.ThemeController.state.themeVariables["--apkt-qr-color"]??G.ThemeController.state.themeVariables["--w3m-qr-color"];return c.html` <wui-qr-code
      size=${a}
      theme=${G.ThemeController.state.themeMode}
      uri=${this.uri}
      ?farcaster=${!0}
      data-testid="wui-qr-code"
      color=${(0,e.ifDefined)(b)}
    ></wui-qr-code>`}copyTemplate(){let a=!this.uri||!this.ready;return c.html`<wui-button
      .disabled=${a}
      @click=${this.onCopyUri}
      variant="neutral-secondary"
      size="sm"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="sm" color="default" slot="iconRight" name="copy"></wui-icon>
      Copy link
    </wui-button>`}onCopyUri(){try{this.uri&&(q.CoreHelperUtil.copyToClopboard(this.uri),E.SnackController.showSuccess("Link copied"))}catch{E.SnackController.showError("Failed to copy")}}};P.styles=N,O([(0,d.state)()],P.prototype,"socialProvider",void 0),O([(0,d.state)()],P.prototype,"uri",void 0),O([(0,d.state)()],P.prototype,"ready",void 0),O([(0,d.state)()],P.prototype,"loading",void 0),O([(0,d.state)()],P.prototype,"remoteFeatures",void 0),P=O([(0,h.customElement)("w3m-connecting-farcaster-view")],P),a.s(["W3mConnectingFarcasterView",0,P],738740),a.s([],91182),a.i(91182),a.i(652794),a.i(941096),a.i(738740),a.s(["W3mConnectSocialsView",0,y,"W3mConnectingFarcasterView",0,P,"W3mConnectingSocialView",0,L],675286)}];

//# sourceMappingURL=116m_%40reown_appkit-scaffold-ui_dist_esm_exports_socials_0blk9kn.js.map