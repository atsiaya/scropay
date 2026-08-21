(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,629898,e=>{"use strict";e.i(720140);var t=e.i(227565),o=e.i(540647);e.i(890019);var r=e.i(349820),i=e.i(378424);e.i(881514);var a=e.i(931111),n=e.i(70068),s=e.i(352714),l=e.i(209884),c=e.i(793700),d=e.i(610389),p=e.i(966584),h=e.i(69710);let u={isUnsupportedChainView:()=>"UnsupportedChain"===p.RouterController.state.view||"SwitchNetwork"===p.RouterController.state.view&&p.RouterController.state.history.includes("UnsupportedChain"),async safeClose(){this.isUnsupportedChainView()||await h.SIWXUtil.isSIWXCloseDisabled()?c.ModalController.shake():(("DataCapture"===p.RouterController.state.view||"DataCaptureOtpConfirm"===p.RouterController.state.view)&&d.ConnectionController.disconnect(),c.ModalController.close())}};var m=e.i(921693),w=e.i(565898),g=e.i(166758),b=e.i(667265);e.i(540417);var y=e.i(175848),f=e.i(953166),v=e.i(964603),x=e.i(555489),C=t;let k=x.css`
  :host {
    display: block;
    border-radius: clamp(0px, ${({borderRadius:e})=>e["8"]}, 44px);
    box-shadow: 0 0 0 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    overflow: hidden;
  }
`,$=class extends C.LitElement{render(){return o.html`<slot></slot>`}};$.styles=[v.resetStyles,k],$=function(e,t,o,r){var i,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(n=(a<3?i(n):a>3?i(t,o,n):i(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n}([(0,f.customElement)("wui-card")],$),e.i(693043);var S=t,R=e.i(246923),E=t;e.i(175235),e.i(897818),e.i(967549);let P=x.css`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[6]};
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
    box-sizing: border-box;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  :host > wui-flex[data-type='info'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};

      wui-icon {
        color: ${({tokens:e})=>e.theme.iconDefault};
      }
    }
  }
  :host > wui-flex[data-type='success'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.core.backgroundSuccess};

      wui-icon {
        color: ${({tokens:e})=>e.core.borderSuccess};
      }
    }
  }
  :host > wui-flex[data-type='warning'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.core.backgroundWarning};

      wui-icon {
        color: ${({tokens:e})=>e.core.borderWarning};
      }
    }
  }
  :host > wui-flex[data-type='error'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.core.backgroundError};

      wui-icon {
        color: ${({tokens:e})=>e.core.borderError};
      }
    }
  }

  wui-flex {
    width: 100%;
  }

  wui-text {
    word-break: break-word;
    flex: 1;
  }

  .close {
    cursor: pointer;
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  .icon-box {
    height: 40px;
    width: 40px;
    border-radius: ${({borderRadius:e})=>e["2"]};
    background-color: var(--local-icon-bg-value);
  }
`;var A=function(e,t,o,r){var i,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(n=(a<3?i(n):a>3?i(t,o,n):i(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};let O={info:"info",success:"checkmark",warning:"warningCircle",error:"warning"},I=class extends E.LitElement{constructor(){super(...arguments),this.message="",this.type="info"}render(){return o.html`
      <wui-flex
        data-type=${(0,a.ifDefined)(this.type)}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        gap="2"
      >
        <wui-flex columnGap="2" flexDirection="row" alignItems="center">
          <wui-flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            class="icon-box"
          >
            <wui-icon color="inherit" size="md" name=${O[this.type]}></wui-icon>
          </wui-flex>
          <wui-text variant="md-medium" color="inherit" data-testid="wui-alertbar-text"
            >${this.message}</wui-text
          >
        </wui-flex>
        <wui-icon
          class="close"
          color="inherit"
          size="sm"
          name="close"
          @click=${this.onClose}
        ></wui-icon>
      </wui-flex>
    `}onClose(){R.AlertController.close()}};I.styles=[v.resetStyles,P],A([(0,r.property)()],I.prototype,"message",void 0),A([(0,r.property)()],I.prototype,"type",void 0),I=A([(0,f.customElement)("wui-alertbar")],I);let W=x.css`
  :host {
    display: block;
    position: absolute;
    top: ${({spacing:e})=>e["3"]};
    left: ${({spacing:e})=>e["4"]};
    right: ${({spacing:e})=>e["4"]};
    opacity: 0;
    pointer-events: none;
  }
`;var D=function(e,t,o,r){var i,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(n=(a<3?i(n):a>3?i(t,o,n):i(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};let z={info:{backgroundColor:"fg-350",iconColor:"fg-325",icon:"info"},success:{backgroundColor:"success-glass-reown-020",iconColor:"success-125",icon:"checkmark"},warning:{backgroundColor:"warning-glass-reown-020",iconColor:"warning-100",icon:"warningCircle"},error:{backgroundColor:"error-glass-reown-020",iconColor:"error-125",icon:"warning"}},N=class extends S.LitElement{constructor(){super(),this.unsubscribe=[],this.open=R.AlertController.state.open,this.onOpen(!0),this.unsubscribe.push(R.AlertController.subscribeKey("open",e=>{this.open=e,this.onOpen(!1)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let{message:e,variant:t}=R.AlertController.state,r=z[t];return o.html`
      <wui-alertbar
        message=${e}
        backgroundColor=${r?.backgroundColor}
        iconColor=${r?.iconColor}
        icon=${r?.icon}
        type=${t}
      ></wui-alertbar>
    `}onOpen(e){this.open?(this.animate([{opacity:0,transform:"scale(0.85)"},{opacity:1,transform:"scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: auto"):e||(this.animate([{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: none")}};N.styles=W,D([(0,i.state)()],N.prototype,"open",void 0),N=D([(0,f.customElement)("w3m-alertbar")],N);var T=t,L=e.i(242633),j=e.i(829083),B=e.i(149577);e.i(780427);var U=t;e.i(621750);let H=x.css`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: ${({spacing:e})=>e[1]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
    border-radius: ${({borderRadius:e})=>e[32]};
  }

  wui-image {
    border-radius: 100%;
  }

  wui-text {
    padding-left: ${({spacing:e})=>e[1]};
  }

  .left-icon-container,
  .right-icon-container {
    width: 24px;
    height: 24px;
    justify-content: center;
    align-items: center;
  }

  wui-icon {
    color: ${({tokens:e})=>e.theme.iconDefault};
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

  button[data-size='lg'] wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='md'] wui-image {
    width: 20px;
    height: 20px;
  }

  button[data-size='sm'] wui-image {
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

  /* -- Variants --------------------------------------------------------- */
  button[data-type='filled-dropdown'] {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button[data-type='text-dropdown'] {
    background-color: transparent;
  }

  /* -- Focus states --------------------------------------------------- */
  button:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent040};
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
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
`;var V=function(e,t,o,r){var i,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(n=(a<3?i(n):a>3?i(t,o,n):i(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};let F={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},K={lg:"lg",md:"md",sm:"sm"},M=class extends U.LitElement{constructor(){super(...arguments),this.imageSrc="",this.text="",this.size="lg",this.type="text-dropdown",this.disabled=!1}render(){return o.html`<button ?disabled=${this.disabled} data-size=${this.size} data-type=${this.type}>
      ${this.imageTemplate()} ${this.textTemplate()}
      <wui-flex class="right-icon-container">
        <wui-icon name="chevronBottom"></wui-icon>
      </wui-flex>
    </button>`}textTemplate(){let e=F[this.size];return this.text?o.html`<wui-text color="primary" variant=${e}>${this.text}</wui-text>`:null}imageTemplate(){if(this.imageSrc)return o.html`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`;let e=K[this.size];return o.html` <wui-flex class="left-icon-container">
      <wui-icon size=${e} name="networkPlaceholder"></wui-icon>
    </wui-flex>`}};M.styles=[v.resetStyles,v.elementStyles,H],V([(0,r.property)()],M.prototype,"imageSrc",void 0),V([(0,r.property)()],M.prototype,"text",void 0),V([(0,r.property)()],M.prototype,"size",void 0),V([(0,r.property)()],M.prototype,"type",void 0),V([(0,r.property)({type:Boolean})],M.prototype,"disabled",void 0),M=V([(0,f.customElement)("wui-select")],M),e.i(1041),e.i(855118);var X=e.i(199221),Y=t;e.i(560030);var G=e.i(729687);let q=x.css`
  wui-image {
    border-radius: ${({borderRadius:e})=>e.round};
  }

  .transfers-badge {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border: 1px solid ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }
`;var _=function(e,t,o,r){var i,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(n=(a<3?i(n):a>3?i(t,o,n):i(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};let Q=class extends Y.LitElement{constructor(){super(),this.unsubscribe=[],this.paymentAsset=G.PayController.state.paymentAsset,this.amount=G.PayController.state.amount,this.unsubscribe.push(G.PayController.subscribeKey("paymentAsset",e=>{this.paymentAsset=e}),G.PayController.subscribeKey("amount",e=>{this.amount=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=s.ChainController.getAllRequestedCaipNetworks().find(e=>e.caipNetworkId===this.paymentAsset.network);return o.html`<wui-flex
      alignItems="center"
      gap="1"
      .padding=${["1","2","1","1"]}
      class="transfers-badge"
    >
      <wui-image src=${(0,a.ifDefined)(this.paymentAsset.metadata.logoURI)} size="xl"></wui-image>
      <wui-text variant="lg-regular" color="primary">
        ${this.amount} ${this.paymentAsset.metadata.symbol}
      </wui-text>
      <wui-text variant="sm-regular" color="secondary">
        on ${e?.name??"Unknown"}
      </wui-text>
    </wui-flex>`}};Q.styles=[q],_([(0,r.property)()],Q.prototype,"paymentAsset",void 0),_([(0,r.property)()],Q.prototype,"amount",void 0),Q=_([(0,f.customElement)("w3m-pay-header")],Q);let J=x.css`
  :host {
    height: 60px;
  }

  :host > wui-flex {
    box-sizing: border-box;
    background-color: var(--local-header-background-color);
  }

  wui-text {
    background-color: var(--local-header-background-color);
  }

  wui-flex.w3m-header-title {
    transform: translateY(0);
    opacity: 1;
  }

  wui-flex.w3m-header-title[view-direction='prev'] {
    animation:
      slide-down-out 120ms forwards ${({easings:e})=>e["ease-out-power-2"]},
      slide-down-in 120ms forwards ${({easings:e})=>e["ease-out-power-2"]};
    animation-delay: 0ms, 200ms;
  }

  wui-flex.w3m-header-title[view-direction='next'] {
    animation:
      slide-up-out 120ms forwards ${({easings:e})=>e["ease-out-power-2"]},
      slide-up-in 120ms forwards ${({easings:e})=>e["ease-out-power-2"]};
    animation-delay: 0ms, 200ms;
  }

  wui-icon-button[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }

  @keyframes slide-up-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(3px);
      opacity: 0;
    }
  }

  @keyframes slide-up-in {
    from {
      transform: translateY(-3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-down-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-3px);
      opacity: 0;
    }
  }

  @keyframes slide-down-in {
    from {
      transform: translateY(3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;var Z=function(e,t,o,r){var i,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(n=(a<3?i(n):a>3?i(t,o,n):i(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};let ee=["SmartSessionList"],et={PayWithExchange:x.vars.tokens.theme.foregroundPrimary};function eo(){let e=p.RouterController.state.data?.connector?.name,t=p.RouterController.state.data?.wallet?.name,o=p.RouterController.state.data?.network?.name,r=t??e,i=l.ConnectorController.getConnectors(),a=1===i.length&&i[0]?.id==="w3m-email",n=s.ChainController.getAccountData()?.socialProvider;return{Connect:`Connect ${a?"Email":""} Wallet`,Create:"Create Wallet",ChooseAccountName:void 0,Account:void 0,AccountSettings:void 0,AllWallets:"All Wallets",ApproveTransaction:"Approve Transaction",BuyInProgress:"Buy",UsageExceeded:"Usage Exceeded",ConnectingExternal:r??"Connect Wallet",ConnectingWalletConnect:r??"WalletConnect",ConnectingWalletConnectBasic:"WalletConnect",ConnectingSiwe:"Sign In",Convert:"Convert",ConvertSelectToken:"Select token",ConvertPreview:"Preview Convert",Downloads:r?`Get ${r}`:"Downloads",EmailLogin:"Email Login",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",GetWallet:"Get a Wallet",Networks:"Choose Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",Pay:"How you pay",ProfileWallets:"Wallets",SwitchNetwork:o??"Switch Network",Transactions:"Activity",UnsupportedChain:"Switch Network",UpgradeEmailWallet:"Upgrade Your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",WhatIsABuy:"What is Buy?",RegisterAccountName:"Choose Name",RegisterAccountNameSuccess:"",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",Swap:"Swap",SwapSelectToken:"Select Token",SwapPreview:"Preview Swap",WalletSend:"Send",WalletSendPreview:"Review Send",WalletSendSelectToken:"Select Token",WalletSendConfirmed:"Confirmed",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a Wallet?",ConnectWallets:"Connect Wallet",ConnectSocials:"All Socials",ConnectingSocial:n?n.charAt(0).toUpperCase()+n.slice(1):"Connect Social",ConnectingMultiChain:"Select Chain",ConnectingFarcaster:"Farcaster",SwitchActiveChain:"Switch Chain",SmartSessionCreated:void 0,SmartSessionList:"Smart Sessions",SIWXSignMessage:"Sign In",PayLoading:"Processing payment...",PayQuote:"Payment Quote",DataCapture:"Profile",DataCaptureOtpConfirm:"Confirm Email",FundWallet:"Fund Wallet",PayWithExchange:"Deposit from Exchange",PayWithExchangeSelectAsset:"Select Asset",SmartAccountSettings:"Smart Account Settings"}}let er=class extends T.LitElement{constructor(){super(),this.unsubscribe=[],this.heading=eo()[p.RouterController.state.view],this.network=s.ChainController.state.activeCaipNetwork,this.networkImage=j.AssetUtil.getNetworkImage(this.network),this.showBack=!1,this.prevHistoryLength=1,this.view=p.RouterController.state.view,this.viewDirection="",this.unsubscribe.push(L.AssetController.subscribeNetworkImages(()=>{this.networkImage=j.AssetUtil.getNetworkImage(this.network)}),p.RouterController.subscribeKey("view",e=>{setTimeout(()=>{this.view=e,this.heading=eo()[e]},X.ConstantsUtil.ANIMATION_DURATIONS.HeaderText),this.onViewChange(),this.onHistoryChange()}),s.ChainController.subscribeKey("activeCaipNetwork",e=>{this.network=e,this.networkImage=j.AssetUtil.getNetworkImage(this.network)}))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=et[p.RouterController.state.view]??x.vars.tokens.theme.backgroundPrimary;return this.style.setProperty("--local-header-background-color",e),o.html`
      <wui-flex
        .padding=${["0","4","0","4"]}
        justifyContent="space-between"
        alignItems="center"
      >
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `}onWalletHelp(){B.EventsController.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),p.RouterController.push("WhatIsAWallet")}async onClose(){await u.safeClose()}rightHeaderTemplate(){let e=m.OptionsController?.state?.features?.smartSessions;return"Account"===p.RouterController.state.view&&e?o.html`<wui-flex>
      <wui-icon-button
        icon="clock"
        size="lg"
        iconSize="lg"
        type="neutral"
        variant="primary"
        @click=${()=>p.RouterController.push("SmartSessionList")}
        data-testid="w3m-header-smart-sessions"
      ></wui-icon-button>
      ${this.closeButtonTemplate()}
    </wui-flex> `:this.closeButtonTemplate()}closeButtonTemplate(){return o.html`
      <wui-icon-button
        icon="close"
        size="lg"
        type="neutral"
        variant="primary"
        iconSize="lg"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-button>
    `}titleTemplate(){if("PayQuote"===this.view)return o.html`<w3m-pay-header></w3m-pay-header>`;let e=ee.includes(this.view);return o.html`
      <wui-flex
        view-direction="${this.viewDirection}"
        class="w3m-header-title"
        alignItems="center"
        gap="2"
      >
        <wui-text
          display="inline"
          variant="lg-regular"
          color="primary"
          data-testid="w3m-header-text"
        >
          ${this.heading}
        </wui-text>
        ${e?o.html`<wui-tag variant="accent" size="md">Beta</wui-tag>`:null}
      </wui-flex>
    `}leftHeaderTemplate(){let{view:e}=p.RouterController.state,t="Connect"===e,r=m.OptionsController.state.enableEmbedded,i=m.OptionsController.state.enableNetworkSwitch;return"Account"===e&&i?o.html`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${(0,a.ifDefined)(this.network?.name)}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${(0,a.ifDefined)(this.networkImage)}
      ></wui-select>`:this.showBack&&!("ApproveTransaction"===e||"ConnectingSiwe"===e||t&&r)?o.html`<wui-icon-button
        data-testid="header-back"
        id="dynamic"
        icon="chevronLeft"
        size="lg"
        iconSize="lg"
        type="neutral"
        variant="primary"
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-button>`:o.html`<wui-icon-button
      data-hidden=${!t}
      id="dynamic"
      icon="helpCircle"
      size="lg"
      iconSize="lg"
      type="neutral"
      variant="primary"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-button>`}onNetworks(){this.isAllowedNetworkSwitch()&&(B.EventsController.sendEvent({type:"track",event:"CLICK_NETWORKS"}),p.RouterController.push("Networks"))}isAllowedNetworkSwitch(){let e=s.ChainController.getAllRequestedCaipNetworks(),t=!!e&&e.length>1,o=e?.find(({id:e})=>e===this.network?.id);return t||!o}onViewChange(){let{history:e}=p.RouterController.state,t=X.ConstantsUtil.VIEW_DIRECTION.Next;e.length<this.prevHistoryLength&&(t=X.ConstantsUtil.VIEW_DIRECTION.Prev),this.prevHistoryLength=e.length,this.viewDirection=t}async onHistoryChange(){let{history:e}=p.RouterController.state,t=this.shadowRoot?.querySelector("#dynamic");e.length>1&&!this.showBack&&t?(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){p.RouterController.goBack()}};er.styles=J,Z([(0,i.state)()],er.prototype,"heading",void 0),Z([(0,i.state)()],er.prototype,"network",void 0),Z([(0,i.state)()],er.prototype,"networkImage",void 0),Z([(0,i.state)()],er.prototype,"showBack",void 0),Z([(0,i.state)()],er.prototype,"prevHistoryLength",void 0),Z([(0,i.state)()],er.prototype,"view",void 0),Z([(0,i.state)()],er.prototype,"viewDirection",void 0),er=Z([(0,f.customElement)("w3m-header")],er);var ei=t,ea=t;e.i(857288),e.i(337449);let en=x.css`
  :host {
    display: flex;
    align-items: center;
    gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[2]} ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[20]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    box-shadow:
      0px 0px 8px 0px rgba(0, 0, 0, 0.1),
      inset 0 0 0 1px ${({tokens:e})=>e.theme.borderPrimary};
    max-width: 320px;
  }

  wui-icon-box {
    border-radius: ${({borderRadius:e})=>e.round} !important;
    overflow: hidden;
  }

  wui-loading-spinner {
    padding: ${({spacing:e})=>e[1]};
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    border-radius: ${({borderRadius:e})=>e.round} !important;
  }
`;var es=function(e,t,o,r){var i,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(n=(a<3?i(n):a>3?i(t,o,n):i(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};let el=class extends ea.LitElement{constructor(){super(...arguments),this.message="",this.variant="success"}render(){return o.html`
      ${this.templateIcon()}
      <wui-text variant="lg-regular" color="primary" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `}templateIcon(){return"loading"===this.variant?o.html`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:o.html`<wui-icon-box
      size="md"
      color=${({success:"success",error:"error",warning:"warning",info:"default"})[this.variant]}
      icon=${({success:"checkmark",error:"warning",warning:"warningCircle",info:"info"})[this.variant]}
    ></wui-icon-box>`}};el.styles=[v.resetStyles,en],es([(0,r.property)()],el.prototype,"message",void 0),es([(0,r.property)()],el.prototype,"variant",void 0),el=es([(0,f.customElement)("wui-snackbar")],el);var ec=e.i(861041);let ed=ec.css`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var ep=function(e,t,o,r){var i,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(n=(a<3?i(n):a>3?i(t,o,n):i(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};let eh=class extends ei.LitElement{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=w.SnackController.state.open,this.unsubscribe.push(w.SnackController.subscribeKey("open",e=>{this.open=e,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(e=>e())}render(){let{message:e,variant:t}=w.SnackController.state;return o.html` <wui-snackbar message=${e} variant=${t}></wui-snackbar> `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout&&clearTimeout(this.timeout),w.SnackController.state.autoClose&&(this.timeout=setTimeout(()=>w.SnackController.hide(),2500))):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};eh.styles=ed,ep([(0,i.state)()],eh.prototype,"open",void 0),eh=ep([(0,f.customElement)("w3m-snackbar")],eh),e.i(99748),e.i(898103);var eu=e.i(970501);e.i(493882),e.i(131145);let em=x.css`
  :host {
    z-index: ${({tokens:e})=>e.core.zIndex};
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: ${({tokens:e})=>e.theme.overlay};
    backdrop-filter: blur(0px);
    transition:
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      backdrop-filter ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
    backdrop-filter: blur(8px);
  }

  :host(.appkit-modal) {
    position: relative;
    pointer-events: unset;
    background: none;
    width: 100%;
    opacity: 1;
  }

  wui-card {
    max-width: var(--apkt-modal-width);
    width: 100%;
    position: relative;
    outline: none;
    transform: translateY(4px);
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.05);
    transition:
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      border-radius ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]},
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]};
    will-change: border-radius, background-color, transform, box-shadow;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    padding: var(--local-modal-padding);
    box-sizing: border-box;
  }

  :host(.open) wui-card {
    transform: translateY(0px);
  }

  wui-card::before {
    z-index: 1;
    pointer-events: none;
    content: '';
    position: absolute;
    inset: 0;
    border-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
    transition: box-shadow ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    transition-delay: ${({durations:e})=>e.md};
    will-change: box-shadow;
  }

  :host([data-mobile-fullscreen='true']) wui-card::before {
    border-radius: 0px;
  }

  :host([data-border='true']) wui-card::before {
    box-shadow: inset 0px 0px 0px 4px ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  :host([data-border='false']) wui-card::before {
    box-shadow: inset 0px 0px 0px 1px ${({tokens:e})=>e.theme.borderPrimaryDark};
  }

  :host([data-border='true']) wui-card {
    animation:
      fade-in ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      card-background-border var(--apkt-duration-dynamic)
        ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: backwards, both;
    animation-delay: var(--apkt-duration-dynamic);
  }

  :host([data-border='false']) wui-card {
    animation:
      fade-in ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      card-background-default var(--apkt-duration-dynamic)
        ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: backwards, both;
    animation-delay: 0s;
  }

  :host(.appkit-modal) wui-card {
    max-width: var(--apkt-modal-width);
  }

  wui-card[shake='true'] {
    animation:
      fade-in ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      w3m-shake ${({durations:e})=>e.xl}
        ${({easings:e})=>e["ease-out-power-2"]};
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--apkt-spacing-6) 0px;
    }
  }

  @media (max-width: 430px) {
    :host([data-mobile-fullscreen='true']) {
      height: 100dvh;
    }
    :host([data-mobile-fullscreen='true']) wui-flex {
      align-items: stretch;
    }
    :host([data-mobile-fullscreen='true']) wui-card {
      max-width: 100%;
      height: 100%;
      border-radius: 0;
      border: none;
    }
    :host(:not([data-mobile-fullscreen='true'])) wui-flex {
      align-items: flex-end;
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card {
      max-width: 100%;
      border-bottom: none;
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card[data-embedded='true'] {
      border-bottom-left-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
      border-bottom-right-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card:not([data-embedded='true']) {
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
    }

    wui-card[shake='true'] {
      animation: w3m-shake 0.5s ${({easings:e})=>e["ease-out-power-2"]};
    }
  }

  @keyframes fade-in {
    0% {
      transform: scale(0.99) translateY(4px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes card-background-border {
    from {
      background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    }
    to {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  @keyframes card-background-default {
    from {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
    to {
      background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    }
  }
`;var ew=function(e,t,o,r){var i,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(n=(a<3?i(n):a>3?i(t,o,n):i(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};let eg="scroll-lock",eb={PayWithExchange:"0",PayWithExchangeSelectAsset:"0",Pay:"0",PayQuote:"0",PayLoading:"0"};class ey extends t.LitElement{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.hasPrefetched=!1,this.enableEmbedded=m.OptionsController.state.enableEmbedded,this.open=c.ModalController.state.open,this.caipAddress=s.ChainController.state.activeCaipAddress,this.caipNetwork=s.ChainController.state.activeCaipNetwork,this.shake=c.ModalController.state.shake,this.filterByNamespace=l.ConnectorController.state.filterByNamespace,this.padding=x.vars.spacing[1],this.mobileFullScreen=m.OptionsController.state.enableMobileFullScreen,this.initializeTheming(),n.ApiController.prefetchAnalyticsConfig(),this.unsubscribe.push(c.ModalController.subscribeKey("open",e=>e?this.onOpen():this.onClose()),c.ModalController.subscribeKey("shake",e=>this.shake=e),s.ChainController.subscribeKey("activeCaipNetwork",e=>this.onNewNetwork(e)),s.ChainController.subscribeKey("activeCaipAddress",e=>this.onNewAddress(e)),m.OptionsController.subscribeKey("enableEmbedded",e=>this.enableEmbedded=e),l.ConnectorController.subscribeKey("filterByNamespace",e=>{this.filterByNamespace===e||s.ChainController.getAccountData(e)?.caipAddress||(n.ApiController.fetchRecommendedWallets(),this.filterByNamespace=e)}),p.RouterController.subscribeKey("view",()=>{this.dataset.border=eu.HelpersUtil.hasFooter()?"true":"false",this.padding=eb[p.RouterController.state.view]??x.vars.spacing[1]}))}firstUpdated(){if(this.dataset.border=eu.HelpersUtil.hasFooter()?"true":"false",this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),this.caipAddress){if(this.enableEmbedded){c.ModalController.close(),this.prefetch();return}this.onNewAddress(this.caipAddress)}this.open&&this.onOpen(),this.enableEmbedded&&this.prefetch()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return(this.style.setProperty("--local-modal-padding",this.padding),this.enableEmbedded)?o.html`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `:this.open?o.html`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}contentTemplate(){return o.html` <wui-card
      shake="${this.shake}"
      data-embedded="${(0,a.ifDefined)(this.enableEmbedded)}"
      role="alertdialog"
      aria-modal="true"
      tabindex="0"
      data-testid="w3m-modal-card"
    >
      <w3m-header></w3m-header>
      <w3m-router></w3m-router>
      <w3m-footer></w3m-footer>
      <w3m-snackbar></w3m-snackbar>
      <w3m-alertbar></w3m-alertbar>
    </wui-card>`}async onOverlayClick(e){e.target===e.currentTarget&&(this.mobileFullScreen||await this.handleClose())}async handleClose(){await u.safeClose()}initializeTheming(){let{themeVariables:e,themeMode:t}=b.ThemeController.state,o=y.UiHelperUtil.getColorTheme(t);(0,v.initializeTheming)(e,o)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),w.SnackController.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){let e=document.createElement("style");e.dataset.w3m=eg,e.textContent=`
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(e)}onScrollUnlock(){let e=document.head.querySelector(`style[data-w3m="${eg}"]`);e&&e.remove()}onAddKeyboardListener(){this.abortController=new AbortController;let e=this.shadowRoot?.querySelector("wui-card");e?.focus(),window.addEventListener("keydown",t=>{if("Escape"===t.key)this.handleClose();else if("Tab"===t.key){let{tagName:o}=t.target;!o||o.includes("W3M-")||o.includes("WUI-")||e?.focus()}},this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}async onNewAddress(e){let t=s.ChainController.state.isSwitchingNamespace,o="ProfileWallets"===p.RouterController.state.view;e||t||o||c.ModalController.close(),await h.SIWXUtil.initializeIfEnabled(e),this.caipAddress=e,s.ChainController.setIsSwitchingNamespace(!1)}onNewNetwork(e){let t=this.caipNetwork,o=t?.caipNetworkId?.toString(),r=e?.caipNetworkId?.toString(),i="UnsupportedChain"===p.RouterController.state.view,a=c.ModalController.state.open,n=!1;this.enableEmbedded&&"SwitchNetwork"===p.RouterController.state.view&&(n=!0),o!==r&&g.SwapController.resetState(),a&&i&&(n=!0),n&&"SIWXSignMessage"!==p.RouterController.state.view&&p.RouterController.goBack(),this.caipNetwork=e}prefetch(){this.hasPrefetched||(n.ApiController.prefetch(),n.ApiController.fetchWalletsByPage({page:1}),this.hasPrefetched=!0)}}ey.styles=em,ew([(0,r.property)({type:Boolean})],ey.prototype,"enableEmbedded",void 0),ew([(0,i.state)()],ey.prototype,"open",void 0),ew([(0,i.state)()],ey.prototype,"caipAddress",void 0),ew([(0,i.state)()],ey.prototype,"caipNetwork",void 0),ew([(0,i.state)()],ey.prototype,"shake",void 0),ew([(0,i.state)()],ey.prototype,"filterByNamespace",void 0),ew([(0,i.state)()],ey.prototype,"padding",void 0),ew([(0,i.state)()],ey.prototype,"mobileFullScreen",void 0);let ef=class extends ey{};ef=ew([(0,f.customElement)("w3m-modal")],ef);let ev=class extends ey{};ev=ew([(0,f.customElement)("appkit-modal")],ev),e.s(["AppKitModal",0,ev,"W3mModal",0,ef,"W3mModalBase",0,ey],565100);var ex=t;e.i(496768),e.i(453424);let eC=x.css`
  .icon-box {
    width: 64px;
    height: 64px;
    border-radius: ${({borderRadius:e})=>e[5]};
    background-color: ${({colors:e})=>e.semanticError010};
  }
`,ek=class extends ex.LitElement{constructor(){super()}render(){return o.html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="4"
        .padding="${["1","3","4","3"]}"
      >
        <wui-flex justifyContent="center" alignItems="center" class="icon-box">
          <wui-icon size="xxl" color="error" name="warningCircle"></wui-icon>
        </wui-flex>

        <wui-text variant="lg-medium" color="primary" align="center">
          The app isn't responding as expected
        </wui-text>
        <wui-text variant="md-regular" color="secondary" align="center">
          Try again or reach out to the app team for help.
        </wui-text>

        <wui-button
          variant="neutral-secondary"
          size="md"
          @click=${this.onTryAgainClick.bind(this)}
          data-testid="w3m-usage-exceeded-button"
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try Again
        </wui-button>
      </wui-flex>
    `}onTryAgainClick(){p.RouterController.goBack()}};ek.styles=eC,ek=function(e,t,o,r){var i,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(n=(a<3?i(n):a>3?i(t,o,n):i(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n}([(0,f.customElement)("w3m-usage-exceeded-view")],ek),e.s(["W3mUsageExceededView",0,ek],51441);var e$=t,eS=e.i(181307);e.i(137237);let eR=x.css`
  :host {
    width: 100%;
  }
`;var eE=function(e,t,o,r){var i,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(n=(a<3?i(n):a>3?i(t,o,n):i(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};let eP=class extends e$.LitElement{constructor(){super(...arguments),this.hasImpressionSent=!1,this.walletImages=[],this.imageSrc="",this.name="",this.size="md",this.tabIdx=void 0,this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100",this.rdnsId="",this.displayIndex=void 0,this.walletRank=void 0,this.namespaces=[]}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this.cleanupIntersectionObserver()}updated(e){super.updated(e),(e.has("name")||e.has("imageSrc")||e.has("walletRank"))&&(this.hasImpressionSent=!1),e.has("walletRank")&&this.walletRank&&!this.intersectionObserver&&this.setupIntersectionObserver()}setupIntersectionObserver(){this.intersectionObserver=new IntersectionObserver(e=>{e.forEach(e=>{!e.isIntersecting||this.loading||this.hasImpressionSent||this.sendImpressionEvent()})},{threshold:.1}),this.intersectionObserver.observe(this)}cleanupIntersectionObserver(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),this.intersectionObserver=void 0)}sendImpressionEvent(){this.name&&!this.hasImpressionSent&&this.walletRank&&(this.hasImpressionSent=!0,(this.rdnsId||this.name)&&B.EventsController.sendWalletImpressionEvent({name:this.name,walletRank:this.walletRank,rdnsId:this.rdnsId,view:p.RouterController.state.view,displayIndex:this.displayIndex}))}handleGetWalletNamespaces(){return Object.keys(eS.AdapterController.state.adapters).length>1?this.namespaces:[]}render(){return o.html`
      <wui-list-wallet
        .walletImages=${this.walletImages}
        imageSrc=${(0,a.ifDefined)(this.imageSrc)}
        name=${this.name}
        size=${(0,a.ifDefined)(this.size)}
        tagLabel=${(0,a.ifDefined)(this.tagLabel)}
        .tagVariant=${this.tagVariant}
        .walletIcon=${this.walletIcon}
        .tabIdx=${this.tabIdx}
        .disabled=${this.disabled}
        .showAllWallets=${this.showAllWallets}
        .loading=${this.loading}
        loadingSpinnerColor=${this.loadingSpinnerColor}
        .namespaces=${this.handleGetWalletNamespaces()}
      ></wui-list-wallet>
    `}};eP.styles=eR,eE([(0,r.property)({type:Array})],eP.prototype,"walletImages",void 0),eE([(0,r.property)()],eP.prototype,"imageSrc",void 0),eE([(0,r.property)()],eP.prototype,"name",void 0),eE([(0,r.property)()],eP.prototype,"size",void 0),eE([(0,r.property)()],eP.prototype,"tagLabel",void 0),eE([(0,r.property)()],eP.prototype,"tagVariant",void 0),eE([(0,r.property)()],eP.prototype,"walletIcon",void 0),eE([(0,r.property)()],eP.prototype,"tabIdx",void 0),eE([(0,r.property)({type:Boolean})],eP.prototype,"disabled",void 0),eE([(0,r.property)({type:Boolean})],eP.prototype,"showAllWallets",void 0),eE([(0,r.property)({type:Boolean})],eP.prototype,"loading",void 0),eE([(0,r.property)({type:String})],eP.prototype,"loadingSpinnerColor",void 0),eE([(0,r.property)()],eP.prototype,"rdnsId",void 0),eE([(0,r.property)()],eP.prototype,"displayIndex",void 0),eE([(0,r.property)()],eP.prototype,"walletRank",void 0),eE([(0,r.property)({type:Array})],eP.prototype,"namespaces",void 0),eP=eE([(0,f.customElement)("w3m-list-wallet")],eP),e.s(["W3mListWallet",0,eP],522042);var eA=t;let eO=x.css`
  :host {
    --local-duration-height: 0s;
    --local-duration: ${({durations:e})=>e.lg};
    --local-transition: ${({easings:e})=>e["ease-out-power-2"]};
  }

  .container {
    display: block;
    overflow: hidden;
    overflow: hidden;
    position: relative;
    height: var(--local-container-height);
    transition: height var(--local-duration-height) var(--local-transition);
    will-change: height, padding-bottom;
  }

  .container[data-mobile-fullscreen='true'] {
    overflow: scroll;
  }

  .page {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: auto;
    width: inherit;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border-bottom-left-radius: var(--local-border-bottom-radius);
    border-bottom-right-radius: var(--local-border-bottom-radius);
    transition: border-bottom-left-radius var(--local-duration) var(--local-transition);
  }

  .page[data-mobile-fullscreen='true'] {
    height: 100%;
  }

  .page-content {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }

  .footer {
    height: var(--apkt-footer-height);
  }

  div.page[view-direction^='prev-'] .page-content {
    animation:
      slide-left-out var(--local-duration) forwards var(--local-transition),
      slide-left-in var(--local-duration) forwards var(--local-transition);
    animation-delay: 0ms, var(--local-duration, ${({durations:e})=>e.lg});
  }

  div.page[view-direction^='next-'] .page-content {
    animation:
      slide-right-out var(--local-duration) forwards var(--local-transition),
      slide-right-in var(--local-duration) forwards var(--local-transition);
    animation-delay: 0ms, var(--local-duration, ${({durations:e})=>e.lg});
  }

  @keyframes slide-left-out {
    from {
      transform: translateX(0px) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
    to {
      transform: translateX(8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
  }

  @keyframes slide-left-in {
    from {
      transform: translateX(-8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
    to {
      transform: translateX(0) translateY(0) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
  }

  @keyframes slide-right-out {
    from {
      transform: translateX(0px) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
    to {
      transform: translateX(-8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
  }

  @keyframes slide-right-in {
    from {
      transform: translateX(8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
    to {
      transform: translateX(0) translateY(0) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
  }
`;var eI=function(e,t,o,r){var i,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(n=(a<3?i(n):a>3?i(t,o,n):i(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};let eW=class extends eA.LitElement{constructor(){super(...arguments),this.resizeObserver=void 0,this.transitionDuration="0.15s",this.transitionFunction="",this.history="",this.view="",this.setView=void 0,this.viewDirection="",this.historyState="",this.previousHeight="0px",this.mobileFullScreen=m.OptionsController.state.enableMobileFullScreen,this.onViewportResize=()=>{this.updateContainerHeight()}}updated(e){if(e.has("history")){let e=this.history;""!==this.historyState&&this.historyState!==e&&this.onViewChange(e)}e.has("transitionDuration")&&this.style.setProperty("--local-duration",this.transitionDuration),e.has("transitionFunction")&&this.style.setProperty("--local-transition",this.transitionFunction)}firstUpdated(){this.transitionFunction&&this.style.setProperty("--local-transition",this.transitionFunction),this.style.setProperty("--local-duration",this.transitionDuration),this.historyState=this.history,this.resizeObserver=new ResizeObserver(e=>{for(let t of e)if(t.target===this.getWrapper()){let e=t.contentRect.height,o=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--apkt-footer-height")||"0");this.mobileFullScreen?(e=(window.visualViewport?.height||window.innerHeight)-this.getHeaderHeight()-o,this.style.setProperty("--local-border-bottom-radius","0px")):(e+=o,this.style.setProperty("--local-border-bottom-radius",o?"var(--apkt-borderRadius-5)":"0px")),this.style.setProperty("--local-container-height",`${e}px`),"0px"!==this.previousHeight&&this.style.setProperty("--local-duration-height",this.transitionDuration),this.previousHeight=`${e}px`}}),this.resizeObserver.observe(this.getWrapper()),this.updateContainerHeight(),window.addEventListener("resize",this.onViewportResize),window.visualViewport?.addEventListener("resize",this.onViewportResize)}disconnectedCallback(){let e=this.getWrapper();e&&this.resizeObserver&&this.resizeObserver.unobserve(e),window.removeEventListener("resize",this.onViewportResize),window.visualViewport?.removeEventListener("resize",this.onViewportResize)}render(){return o.html`
      <div class="container" data-mobile-fullscreen="${(0,a.ifDefined)(this.mobileFullScreen)}">
        <div
          class="page"
          data-mobile-fullscreen="${(0,a.ifDefined)(this.mobileFullScreen)}"
          view-direction="${this.viewDirection}"
        >
          <div class="page-content">
            <slot></slot>
          </div>
        </div>
      </div>
    `}onViewChange(e){let t=e.split(",").filter(Boolean),o=this.historyState.split(",").filter(Boolean),r=o.length,i=t.length,a=t[t.length-1]||"",n=y.UiHelperUtil.cssDurationToNumber(this.transitionDuration),s="";i>r?s="next":i<r?s="prev":i===r&&t[i-1]!==o[r-1]&&(s="next"),queueMicrotask(()=>{this.viewDirection=`${s}-${a}`}),setTimeout(()=>{this.historyState=e,this.setView?.(a)},n),setTimeout(()=>{this.viewDirection=""},2*n)}getWrapper(){return this.shadowRoot?.querySelector("div.page")}updateContainerHeight(){let e=this.getWrapper();if(!e)return;let t=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--apkt-footer-height")||"0"),o=0;this.mobileFullScreen?(o=(window.visualViewport?.height||window.innerHeight)-this.getHeaderHeight()-t,this.style.setProperty("--local-border-bottom-radius","0px")):(o=e.getBoundingClientRect().height+t,this.style.setProperty("--local-border-bottom-radius",t?"var(--apkt-borderRadius-5)":"0px")),this.style.setProperty("--local-container-height",`${o}px`),"0px"!==this.previousHeight&&this.style.setProperty("--local-duration-height",this.transitionDuration),this.previousHeight=`${o}px`}getHeaderHeight(){return 60}};eW.styles=[eO],eI([(0,r.property)({type:String})],eW.prototype,"transitionDuration",void 0),eI([(0,r.property)({type:String})],eW.prototype,"transitionFunction",void 0),eI([(0,r.property)({type:String})],eW.prototype,"history",void 0),eI([(0,r.property)({type:String})],eW.prototype,"view",void 0),eI([(0,r.property)({attribute:!1})],eW.prototype,"setView",void 0),eI([(0,i.state)()],eW.prototype,"viewDirection",void 0),eI([(0,i.state)()],eW.prototype,"historyState",void 0),eI([(0,i.state)()],eW.prototype,"previousHeight",void 0),eI([(0,i.state)()],eW.prototype,"mobileFullScreen",void 0),eW=eI([(0,f.customElement)("w3m-router-container")],eW),e.s(["W3mRouterContainer",0,eW],160278),e.s([],316901),e.i(316901),e.i(565100),e.i(51441),e.i(522042),e.i(160278),e.s(["AppKitModal",0,ev,"W3mListWallet",0,eP,"W3mModal",0,ef,"W3mModalBase",0,ey,"W3mRouterContainer",0,eW,"W3mUsageExceededView",0,ek],629898)}]);