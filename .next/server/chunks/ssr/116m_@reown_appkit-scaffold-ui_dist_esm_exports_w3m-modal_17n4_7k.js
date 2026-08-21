module.exports=[409799,a=>{"use strict";a.i(176996);var b=a.i(44886),c=a.i(979837);a.i(525181);var d=a.i(129349),e=a.i(905653);a.i(876091);var f=a.i(960078),g=a.i(88726),h=a.i(34525),i=a.i(661107),j=a.i(950802),k=a.i(166920),l=a.i(682762),m=a.i(797994);let n={isUnsupportedChainView:()=>"UnsupportedChain"===l.RouterController.state.view||"SwitchNetwork"===l.RouterController.state.view&&l.RouterController.state.history.includes("UnsupportedChain"),async safeClose(){this.isUnsupportedChainView()||await m.SIWXUtil.isSIWXCloseDisabled()?j.ModalController.shake():(("DataCapture"===l.RouterController.state.view||"DataCaptureOtpConfirm"===l.RouterController.state.view)&&k.ConnectionController.disconnect(),j.ModalController.close())}};var o=a.i(412631),p=a.i(475744),q=a.i(88921),r=a.i(716715);a.i(564205);var s=a.i(415274),t=a.i(526551),u=a.i(924968),v=a.i(192361),w=b;let x=v.css`
  :host {
    display: block;
    border-radius: clamp(0px, ${({borderRadius:a})=>a["8"]}, 44px);
    box-shadow: 0 0 0 1px ${({tokens:a})=>a.theme.foregroundPrimary};
    overflow: hidden;
  }
`,y=class extends w.LitElement{render(){return c.html`<slot></slot>`}};y.styles=[u.resetStyles,x],y=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}([(0,t.customElement)("wui-card")],y),a.i(735803);var z=b,A=a.i(420540),B=b;a.i(808710),a.i(696585),a.i(307465);let C=v.css`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:a})=>a[2]};
    padding: ${({spacing:a})=>a[3]};
    border-radius: ${({borderRadius:a})=>a[6]};
    border: 1px solid ${({tokens:a})=>a.theme.borderPrimary};
    box-sizing: border-box;
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
    color: ${({tokens:a})=>a.theme.textPrimary};
  }

  :host > wui-flex[data-type='info'] {
    .icon-box {
      background-color: ${({tokens:a})=>a.theme.foregroundSecondary};

      wui-icon {
        color: ${({tokens:a})=>a.theme.iconDefault};
      }
    }
  }
  :host > wui-flex[data-type='success'] {
    .icon-box {
      background-color: ${({tokens:a})=>a.core.backgroundSuccess};

      wui-icon {
        color: ${({tokens:a})=>a.core.borderSuccess};
      }
    }
  }
  :host > wui-flex[data-type='warning'] {
    .icon-box {
      background-color: ${({tokens:a})=>a.core.backgroundWarning};

      wui-icon {
        color: ${({tokens:a})=>a.core.borderWarning};
      }
    }
  }
  :host > wui-flex[data-type='error'] {
    .icon-box {
      background-color: ${({tokens:a})=>a.core.backgroundError};

      wui-icon {
        color: ${({tokens:a})=>a.core.borderError};
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
    color: ${({tokens:a})=>a.theme.iconDefault};
  }

  .icon-box {
    height: 40px;
    width: 40px;
    border-radius: ${({borderRadius:a})=>a["2"]};
    background-color: var(--local-icon-bg-value);
  }
`;var D=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let E={info:"info",success:"checkmark",warning:"warningCircle",error:"warning"},F=class extends B.LitElement{constructor(){super(...arguments),this.message="",this.type="info"}render(){return c.html`
      <wui-flex
        data-type=${(0,f.ifDefined)(this.type)}
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
            <wui-icon color="inherit" size="md" name=${E[this.type]}></wui-icon>
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
    `}onClose(){A.AlertController.close()}};F.styles=[u.resetStyles,C],D([(0,d.property)()],F.prototype,"message",void 0),D([(0,d.property)()],F.prototype,"type",void 0),F=D([(0,t.customElement)("wui-alertbar")],F);let G=v.css`
  :host {
    display: block;
    position: absolute;
    top: ${({spacing:a})=>a["3"]};
    left: ${({spacing:a})=>a["4"]};
    right: ${({spacing:a})=>a["4"]};
    opacity: 0;
    pointer-events: none;
  }
`;var H=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let I={info:{backgroundColor:"fg-350",iconColor:"fg-325",icon:"info"},success:{backgroundColor:"success-glass-reown-020",iconColor:"success-125",icon:"checkmark"},warning:{backgroundColor:"warning-glass-reown-020",iconColor:"warning-100",icon:"warningCircle"},error:{backgroundColor:"error-glass-reown-020",iconColor:"error-125",icon:"warning"}},J=class extends z.LitElement{constructor(){super(),this.unsubscribe=[],this.open=A.AlertController.state.open,this.onOpen(!0),this.unsubscribe.push(A.AlertController.subscribeKey("open",a=>{this.open=a,this.onOpen(!1)}))}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}render(){let{message:a,variant:b}=A.AlertController.state,d=I[b];return c.html`
      <wui-alertbar
        message=${a}
        backgroundColor=${d?.backgroundColor}
        iconColor=${d?.iconColor}
        icon=${d?.icon}
        type=${b}
      ></wui-alertbar>
    `}onOpen(a){this.open?(this.animate([{opacity:0,transform:"scale(0.85)"},{opacity:1,transform:"scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: auto"):a||(this.animate([{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: none")}};J.styles=G,H([(0,e.state)()],J.prototype,"open",void 0),J=H([(0,t.customElement)("w3m-alertbar")],J);var K=b,L=a.i(575498),M=a.i(197350),N=a.i(649637);a.i(11750);var O=b;a.i(508423);let P=v.css`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: ${({spacing:a})=>a[1]};
    transition: background-color ${({durations:a})=>a.lg}
      ${({easings:a})=>a["ease-out-power-2"]};
    will-change: background-color;
    border-radius: ${({borderRadius:a})=>a[32]};
  }

  wui-image {
    border-radius: 100%;
  }

  wui-text {
    padding-left: ${({spacing:a})=>a[1]};
  }

  .left-icon-container,
  .right-icon-container {
    width: 24px;
    height: 24px;
    justify-content: center;
    align-items: center;
  }

  wui-icon {
    color: ${({tokens:a})=>a.theme.iconDefault};
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
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
  }

  button[data-type='text-dropdown'] {
    background-color: transparent;
  }

  /* -- Focus states --------------------------------------------------- */
  button:focus-visible:enabled {
    background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
    box-shadow: 0 0 0 4px ${({tokens:a})=>a.core.foregroundAccent040};
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled,
    button:active:enabled {
      background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
    }
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled {
    background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
    opacity: 0.5;
  }
`;var Q=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let R={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},S={lg:"lg",md:"md",sm:"sm"},T=class extends O.LitElement{constructor(){super(...arguments),this.imageSrc="",this.text="",this.size="lg",this.type="text-dropdown",this.disabled=!1}render(){return c.html`<button ?disabled=${this.disabled} data-size=${this.size} data-type=${this.type}>
      ${this.imageTemplate()} ${this.textTemplate()}
      <wui-flex class="right-icon-container">
        <wui-icon name="chevronBottom"></wui-icon>
      </wui-flex>
    </button>`}textTemplate(){let a=R[this.size];return this.text?c.html`<wui-text color="primary" variant=${a}>${this.text}</wui-text>`:null}imageTemplate(){if(this.imageSrc)return c.html`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`;let a=S[this.size];return c.html` <wui-flex class="left-icon-container">
      <wui-icon size=${a} name="networkPlaceholder"></wui-icon>
    </wui-flex>`}};T.styles=[u.resetStyles,u.elementStyles,P],Q([(0,d.property)()],T.prototype,"imageSrc",void 0),Q([(0,d.property)()],T.prototype,"text",void 0),Q([(0,d.property)()],T.prototype,"size",void 0),Q([(0,d.property)()],T.prototype,"type",void 0),Q([(0,d.property)({type:Boolean})],T.prototype,"disabled",void 0),T=Q([(0,t.customElement)("wui-select")],T),a.i(575364),a.i(603511);var U=a.i(447066),V=b;a.i(902616);var W=a.i(955697);let X=v.css`
  wui-image {
    border-radius: ${({borderRadius:a})=>a.round};
  }

  .transfers-badge {
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
    border: 1px solid ${({tokens:a})=>a.theme.foregroundSecondary};
    border-radius: ${({borderRadius:a})=>a[4]};
  }
`;var Y=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let Z=class extends V.LitElement{constructor(){super(),this.unsubscribe=[],this.paymentAsset=W.PayController.state.paymentAsset,this.amount=W.PayController.state.amount,this.unsubscribe.push(W.PayController.subscribeKey("paymentAsset",a=>{this.paymentAsset=a}),W.PayController.subscribeKey("amount",a=>{this.amount=a}))}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}render(){let a=h.ChainController.getAllRequestedCaipNetworks().find(a=>a.caipNetworkId===this.paymentAsset.network);return c.html`<wui-flex
      alignItems="center"
      gap="1"
      .padding=${["1","2","1","1"]}
      class="transfers-badge"
    >
      <wui-image src=${(0,f.ifDefined)(this.paymentAsset.metadata.logoURI)} size="xl"></wui-image>
      <wui-text variant="lg-regular" color="primary">
        ${this.amount} ${this.paymentAsset.metadata.symbol}
      </wui-text>
      <wui-text variant="sm-regular" color="secondary">
        on ${a?.name??"Unknown"}
      </wui-text>
    </wui-flex>`}};Z.styles=[X],Y([(0,d.property)()],Z.prototype,"paymentAsset",void 0),Y([(0,d.property)()],Z.prototype,"amount",void 0),Z=Y([(0,t.customElement)("w3m-pay-header")],Z);let $=v.css`
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
      slide-down-out 120ms forwards ${({easings:a})=>a["ease-out-power-2"]},
      slide-down-in 120ms forwards ${({easings:a})=>a["ease-out-power-2"]};
    animation-delay: 0ms, 200ms;
  }

  wui-flex.w3m-header-title[view-direction='next'] {
    animation:
      slide-up-out 120ms forwards ${({easings:a})=>a["ease-out-power-2"]},
      slide-up-in 120ms forwards ${({easings:a})=>a["ease-out-power-2"]};
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
`;var _=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let aa=["SmartSessionList"],ab={PayWithExchange:v.vars.tokens.theme.foregroundPrimary};function ac(){let a=l.RouterController.state.data?.connector?.name,b=l.RouterController.state.data?.wallet?.name,c=l.RouterController.state.data?.network?.name,d=b??a,e=i.ConnectorController.getConnectors(),f=1===e.length&&e[0]?.id==="w3m-email",g=h.ChainController.getAccountData()?.socialProvider;return{Connect:`Connect ${f?"Email":""} Wallet`,Create:"Create Wallet",ChooseAccountName:void 0,Account:void 0,AccountSettings:void 0,AllWallets:"All Wallets",ApproveTransaction:"Approve Transaction",BuyInProgress:"Buy",UsageExceeded:"Usage Exceeded",ConnectingExternal:d??"Connect Wallet",ConnectingWalletConnect:d??"WalletConnect",ConnectingWalletConnectBasic:"WalletConnect",ConnectingSiwe:"Sign In",Convert:"Convert",ConvertSelectToken:"Select token",ConvertPreview:"Preview Convert",Downloads:d?`Get ${d}`:"Downloads",EmailLogin:"Email Login",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",GetWallet:"Get a Wallet",Networks:"Choose Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",Pay:"How you pay",ProfileWallets:"Wallets",SwitchNetwork:c??"Switch Network",Transactions:"Activity",UnsupportedChain:"Switch Network",UpgradeEmailWallet:"Upgrade Your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",WhatIsABuy:"What is Buy?",RegisterAccountName:"Choose Name",RegisterAccountNameSuccess:"",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",Swap:"Swap",SwapSelectToken:"Select Token",SwapPreview:"Preview Swap",WalletSend:"Send",WalletSendPreview:"Review Send",WalletSendSelectToken:"Select Token",WalletSendConfirmed:"Confirmed",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a Wallet?",ConnectWallets:"Connect Wallet",ConnectSocials:"All Socials",ConnectingSocial:g?g.charAt(0).toUpperCase()+g.slice(1):"Connect Social",ConnectingMultiChain:"Select Chain",ConnectingFarcaster:"Farcaster",SwitchActiveChain:"Switch Chain",SmartSessionCreated:void 0,SmartSessionList:"Smart Sessions",SIWXSignMessage:"Sign In",PayLoading:"Processing payment...",PayQuote:"Payment Quote",DataCapture:"Profile",DataCaptureOtpConfirm:"Confirm Email",FundWallet:"Fund Wallet",PayWithExchange:"Deposit from Exchange",PayWithExchangeSelectAsset:"Select Asset",SmartAccountSettings:"Smart Account Settings"}}let ad=class extends K.LitElement{constructor(){super(),this.unsubscribe=[],this.heading=ac()[l.RouterController.state.view],this.network=h.ChainController.state.activeCaipNetwork,this.networkImage=M.AssetUtil.getNetworkImage(this.network),this.showBack=!1,this.prevHistoryLength=1,this.view=l.RouterController.state.view,this.viewDirection="",this.unsubscribe.push(L.AssetController.subscribeNetworkImages(()=>{this.networkImage=M.AssetUtil.getNetworkImage(this.network)}),l.RouterController.subscribeKey("view",a=>{setTimeout(()=>{this.view=a,this.heading=ac()[a]},U.ConstantsUtil.ANIMATION_DURATIONS.HeaderText),this.onViewChange(),this.onHistoryChange()}),h.ChainController.subscribeKey("activeCaipNetwork",a=>{this.network=a,this.networkImage=M.AssetUtil.getNetworkImage(this.network)}))}disconnectCallback(){this.unsubscribe.forEach(a=>a())}render(){let a=ab[l.RouterController.state.view]??v.vars.tokens.theme.backgroundPrimary;return this.style.setProperty("--local-header-background-color",a),c.html`
      <wui-flex
        .padding=${["0","4","0","4"]}
        justifyContent="space-between"
        alignItems="center"
      >
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `}onWalletHelp(){N.EventsController.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),l.RouterController.push("WhatIsAWallet")}async onClose(){await n.safeClose()}rightHeaderTemplate(){let a=o.OptionsController?.state?.features?.smartSessions;return"Account"===l.RouterController.state.view&&a?c.html`<wui-flex>
      <wui-icon-button
        icon="clock"
        size="lg"
        iconSize="lg"
        type="neutral"
        variant="primary"
        @click=${()=>l.RouterController.push("SmartSessionList")}
        data-testid="w3m-header-smart-sessions"
      ></wui-icon-button>
      ${this.closeButtonTemplate()}
    </wui-flex> `:this.closeButtonTemplate()}closeButtonTemplate(){return c.html`
      <wui-icon-button
        icon="close"
        size="lg"
        type="neutral"
        variant="primary"
        iconSize="lg"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-button>
    `}titleTemplate(){if("PayQuote"===this.view)return c.html`<w3m-pay-header></w3m-pay-header>`;let a=aa.includes(this.view);return c.html`
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
        ${a?c.html`<wui-tag variant="accent" size="md">Beta</wui-tag>`:null}
      </wui-flex>
    `}leftHeaderTemplate(){let{view:a}=l.RouterController.state,b="Connect"===a,d=o.OptionsController.state.enableEmbedded,e=o.OptionsController.state.enableNetworkSwitch;return"Account"===a&&e?c.html`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${(0,f.ifDefined)(this.network?.name)}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${(0,f.ifDefined)(this.networkImage)}
      ></wui-select>`:this.showBack&&!("ApproveTransaction"===a||"ConnectingSiwe"===a||b&&d)?c.html`<wui-icon-button
        data-testid="header-back"
        id="dynamic"
        icon="chevronLeft"
        size="lg"
        iconSize="lg"
        type="neutral"
        variant="primary"
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-button>`:c.html`<wui-icon-button
      data-hidden=${!b}
      id="dynamic"
      icon="helpCircle"
      size="lg"
      iconSize="lg"
      type="neutral"
      variant="primary"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-button>`}onNetworks(){this.isAllowedNetworkSwitch()&&(N.EventsController.sendEvent({type:"track",event:"CLICK_NETWORKS"}),l.RouterController.push("Networks"))}isAllowedNetworkSwitch(){let a=h.ChainController.getAllRequestedCaipNetworks(),b=!!a&&a.length>1,c=a?.find(({id:a})=>a===this.network?.id);return b||!c}onViewChange(){let{history:a}=l.RouterController.state,b=U.ConstantsUtil.VIEW_DIRECTION.Next;a.length<this.prevHistoryLength&&(b=U.ConstantsUtil.VIEW_DIRECTION.Prev),this.prevHistoryLength=a.length,this.viewDirection=b}async onHistoryChange(){let{history:a}=l.RouterController.state,b=this.shadowRoot?.querySelector("#dynamic");a.length>1&&!this.showBack&&b?(await b.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,b.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):a.length<=1&&this.showBack&&b&&(await b.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,b.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){l.RouterController.goBack()}};ad.styles=$,_([(0,e.state)()],ad.prototype,"heading",void 0),_([(0,e.state)()],ad.prototype,"network",void 0),_([(0,e.state)()],ad.prototype,"networkImage",void 0),_([(0,e.state)()],ad.prototype,"showBack",void 0),_([(0,e.state)()],ad.prototype,"prevHistoryLength",void 0),_([(0,e.state)()],ad.prototype,"view",void 0),_([(0,e.state)()],ad.prototype,"viewDirection",void 0),ad=_([(0,t.customElement)("w3m-header")],ad);var ae=b,af=b;a.i(206222),a.i(188110);let ag=v.css`
  :host {
    display: flex;
    align-items: center;
    gap: ${({spacing:a})=>a[1]};
    padding: ${({spacing:a})=>a[2]} ${({spacing:a})=>a[3]}
      ${({spacing:a})=>a[2]} ${({spacing:a})=>a[2]};
    border-radius: ${({borderRadius:a})=>a[20]};
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
    box-shadow:
      0px 0px 8px 0px rgba(0, 0, 0, 0.1),
      inset 0 0 0 1px ${({tokens:a})=>a.theme.borderPrimary};
    max-width: 320px;
  }

  wui-icon-box {
    border-radius: ${({borderRadius:a})=>a.round} !important;
    overflow: hidden;
  }

  wui-loading-spinner {
    padding: ${({spacing:a})=>a[1]};
    background-color: ${({tokens:a})=>a.core.foregroundAccent010};
    border-radius: ${({borderRadius:a})=>a.round} !important;
  }
`;var ah=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let ai=class extends af.LitElement{constructor(){super(...arguments),this.message="",this.variant="success"}render(){return c.html`
      ${this.templateIcon()}
      <wui-text variant="lg-regular" color="primary" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `}templateIcon(){return"loading"===this.variant?c.html`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:c.html`<wui-icon-box
      size="md"
      color=${({success:"success",error:"error",warning:"warning",info:"default"})[this.variant]}
      icon=${({success:"checkmark",error:"warning",warning:"warningCircle",info:"info"})[this.variant]}
    ></wui-icon-box>`}};ai.styles=[u.resetStyles,ag],ah([(0,d.property)()],ai.prototype,"message",void 0),ah([(0,d.property)()],ai.prototype,"variant",void 0),ai=ah([(0,t.customElement)("wui-snackbar")],ai);var aj=a.i(77439);let ak=aj.css`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var al=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let am=class extends ae.LitElement{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=p.SnackController.state.open,this.unsubscribe.push(p.SnackController.subscribeKey("open",a=>{this.open=a,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(a=>a())}render(){let{message:a,variant:b}=p.SnackController.state;return c.html` <wui-snackbar message=${a} variant=${b}></wui-snackbar> `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout&&clearTimeout(this.timeout),p.SnackController.state.autoClose&&(this.timeout=setTimeout(()=>p.SnackController.hide(),2500))):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};am.styles=ak,al([(0,e.state)()],am.prototype,"open",void 0),am=al([(0,t.customElement)("w3m-snackbar")],am),a.i(904625),a.i(670905);var an=a.i(591707);a.i(175587),a.i(558858);let ao=v.css`
  :host {
    z-index: ${({tokens:a})=>a.core.zIndex};
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
    background-color: ${({tokens:a})=>a.theme.overlay};
    backdrop-filter: blur(0px);
    transition:
      opacity ${({durations:a})=>a.lg} ${({easings:a})=>a["ease-out-power-2"]},
      backdrop-filter ${({durations:a})=>a.lg}
        ${({easings:a})=>a["ease-out-power-2"]};
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
      transform ${({durations:a})=>a.lg}
        ${({easings:a})=>a["ease-out-power-2"]},
      border-radius ${({durations:a})=>a.lg}
        ${({easings:a})=>a["ease-out-power-1"]},
      background-color ${({durations:a})=>a.lg}
        ${({easings:a})=>a["ease-out-power-1"]},
      box-shadow ${({durations:a})=>a.lg}
        ${({easings:a})=>a["ease-out-power-1"]};
    will-change: border-radius, background-color, transform, box-shadow;
    background-color: ${({tokens:a})=>a.theme.backgroundPrimary};
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
    transition: box-shadow ${({durations:a})=>a.lg}
      ${({easings:a})=>a["ease-out-power-2"]};
    transition-delay: ${({durations:a})=>a.md};
    will-change: box-shadow;
  }

  :host([data-mobile-fullscreen='true']) wui-card::before {
    border-radius: 0px;
  }

  :host([data-border='true']) wui-card::before {
    box-shadow: inset 0px 0px 0px 4px ${({tokens:a})=>a.theme.foregroundSecondary};
  }

  :host([data-border='false']) wui-card::before {
    box-shadow: inset 0px 0px 0px 1px ${({tokens:a})=>a.theme.borderPrimaryDark};
  }

  :host([data-border='true']) wui-card {
    animation:
      fade-in ${({durations:a})=>a.lg} ${({easings:a})=>a["ease-out-power-2"]},
      card-background-border var(--apkt-duration-dynamic)
        ${({easings:a})=>a["ease-out-power-2"]};
    animation-fill-mode: backwards, both;
    animation-delay: var(--apkt-duration-dynamic);
  }

  :host([data-border='false']) wui-card {
    animation:
      fade-in ${({durations:a})=>a.lg} ${({easings:a})=>a["ease-out-power-2"]},
      card-background-default var(--apkt-duration-dynamic)
        ${({easings:a})=>a["ease-out-power-2"]};
    animation-fill-mode: backwards, both;
    animation-delay: 0s;
  }

  :host(.appkit-modal) wui-card {
    max-width: var(--apkt-modal-width);
  }

  wui-card[shake='true'] {
    animation:
      fade-in ${({durations:a})=>a.lg} ${({easings:a})=>a["ease-out-power-2"]},
      w3m-shake ${({durations:a})=>a.xl}
        ${({easings:a})=>a["ease-out-power-2"]};
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
      animation: w3m-shake 0.5s ${({easings:a})=>a["ease-out-power-2"]};
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
      background-color: ${({tokens:a})=>a.theme.backgroundPrimary};
    }
    to {
      background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
    }
  }

  @keyframes card-background-default {
    from {
      background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
    }
    to {
      background-color: ${({tokens:a})=>a.theme.backgroundPrimary};
    }
  }
`;var ap=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let aq="scroll-lock",ar={PayWithExchange:"0",PayWithExchangeSelectAsset:"0",Pay:"0",PayQuote:"0",PayLoading:"0"};class as extends b.LitElement{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.hasPrefetched=!1,this.enableEmbedded=o.OptionsController.state.enableEmbedded,this.open=j.ModalController.state.open,this.caipAddress=h.ChainController.state.activeCaipAddress,this.caipNetwork=h.ChainController.state.activeCaipNetwork,this.shake=j.ModalController.state.shake,this.filterByNamespace=i.ConnectorController.state.filterByNamespace,this.padding=v.vars.spacing[1],this.mobileFullScreen=o.OptionsController.state.enableMobileFullScreen,this.initializeTheming(),g.ApiController.prefetchAnalyticsConfig(),this.unsubscribe.push(j.ModalController.subscribeKey("open",a=>a?this.onOpen():this.onClose()),j.ModalController.subscribeKey("shake",a=>this.shake=a),h.ChainController.subscribeKey("activeCaipNetwork",a=>this.onNewNetwork(a)),h.ChainController.subscribeKey("activeCaipAddress",a=>this.onNewAddress(a)),o.OptionsController.subscribeKey("enableEmbedded",a=>this.enableEmbedded=a),i.ConnectorController.subscribeKey("filterByNamespace",a=>{this.filterByNamespace===a||h.ChainController.getAccountData(a)?.caipAddress||(g.ApiController.fetchRecommendedWallets(),this.filterByNamespace=a)}),l.RouterController.subscribeKey("view",()=>{this.dataset.border=an.HelpersUtil.hasFooter()?"true":"false",this.padding=ar[l.RouterController.state.view]??v.vars.spacing[1]}))}firstUpdated(){if(this.dataset.border=an.HelpersUtil.hasFooter()?"true":"false",this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),this.caipAddress){if(this.enableEmbedded){j.ModalController.close(),this.prefetch();return}this.onNewAddress(this.caipAddress)}this.open&&this.onOpen(),this.enableEmbedded&&this.prefetch()}disconnectedCallback(){this.unsubscribe.forEach(a=>a()),this.onRemoveKeyboardListener()}render(){return(this.style.setProperty("--local-modal-padding",this.padding),this.enableEmbedded)?c.html`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `:this.open?c.html`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}contentTemplate(){return c.html` <wui-card
      shake="${this.shake}"
      data-embedded="${(0,f.ifDefined)(this.enableEmbedded)}"
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
    </wui-card>`}async onOverlayClick(a){a.target===a.currentTarget&&(this.mobileFullScreen||await this.handleClose())}async handleClose(){await n.safeClose()}initializeTheming(){let{themeVariables:a,themeMode:b}=r.ThemeController.state,c=s.UiHelperUtil.getColorTheme(b);(0,u.initializeTheming)(a,c)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),p.SnackController.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){let a=document.createElement("style");a.dataset.w3m=aq,a.textContent=`
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(a)}onScrollUnlock(){let a=document.head.querySelector(`style[data-w3m="${aq}"]`);a&&a.remove()}onAddKeyboardListener(){this.abortController=new AbortController;let a=this.shadowRoot?.querySelector("wui-card");a?.focus(),window.addEventListener("keydown",b=>{if("Escape"===b.key)this.handleClose();else if("Tab"===b.key){let{tagName:c}=b.target;!c||c.includes("W3M-")||c.includes("WUI-")||a?.focus()}},this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}async onNewAddress(a){let b=h.ChainController.state.isSwitchingNamespace,c="ProfileWallets"===l.RouterController.state.view;a||b||c||j.ModalController.close(),await m.SIWXUtil.initializeIfEnabled(a),this.caipAddress=a,h.ChainController.setIsSwitchingNamespace(!1)}onNewNetwork(a){let b=this.caipNetwork,c=b?.caipNetworkId?.toString(),d=a?.caipNetworkId?.toString(),e="UnsupportedChain"===l.RouterController.state.view,f=j.ModalController.state.open,g=!1;this.enableEmbedded&&"SwitchNetwork"===l.RouterController.state.view&&(g=!0),c!==d&&q.SwapController.resetState(),f&&e&&(g=!0),g&&"SIWXSignMessage"!==l.RouterController.state.view&&l.RouterController.goBack(),this.caipNetwork=a}prefetch(){this.hasPrefetched||(g.ApiController.prefetch(),g.ApiController.fetchWalletsByPage({page:1}),this.hasPrefetched=!0)}}as.styles=ao,ap([(0,d.property)({type:Boolean})],as.prototype,"enableEmbedded",void 0),ap([(0,e.state)()],as.prototype,"open",void 0),ap([(0,e.state)()],as.prototype,"caipAddress",void 0),ap([(0,e.state)()],as.prototype,"caipNetwork",void 0),ap([(0,e.state)()],as.prototype,"shake",void 0),ap([(0,e.state)()],as.prototype,"filterByNamespace",void 0),ap([(0,e.state)()],as.prototype,"padding",void 0),ap([(0,e.state)()],as.prototype,"mobileFullScreen",void 0);let at=class extends as{};at=ap([(0,t.customElement)("w3m-modal")],at);let au=class extends as{};au=ap([(0,t.customElement)("appkit-modal")],au),a.s(["AppKitModal",0,au,"W3mModal",0,at,"W3mModalBase",0,as],910797);var av=b;a.i(782682),a.i(644344);let aw=v.css`
  .icon-box {
    width: 64px;
    height: 64px;
    border-radius: ${({borderRadius:a})=>a[5]};
    background-color: ${({colors:a})=>a.semanticError010};
  }
`,ax=class extends av.LitElement{constructor(){super()}render(){return c.html`
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
    `}onTryAgainClick(){l.RouterController.goBack()}};ax.styles=aw,ax=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}([(0,t.customElement)("w3m-usage-exceeded-view")],ax),a.s(["W3mUsageExceededView",0,ax],681192);var ay=b,az=a.i(716380);a.i(2678);let aA=v.css`
  :host {
    width: 100%;
  }
`;var aB=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let aC=class extends ay.LitElement{constructor(){super(...arguments),this.hasImpressionSent=!1,this.walletImages=[],this.imageSrc="",this.name="",this.size="md",this.tabIdx=void 0,this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100",this.rdnsId="",this.displayIndex=void 0,this.walletRank=void 0,this.namespaces=[]}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this.cleanupIntersectionObserver()}updated(a){super.updated(a),(a.has("name")||a.has("imageSrc")||a.has("walletRank"))&&(this.hasImpressionSent=!1),a.has("walletRank")&&this.walletRank&&!this.intersectionObserver&&this.setupIntersectionObserver()}setupIntersectionObserver(){this.intersectionObserver=new IntersectionObserver(a=>{a.forEach(a=>{!a.isIntersecting||this.loading||this.hasImpressionSent||this.sendImpressionEvent()})},{threshold:.1}),this.intersectionObserver.observe(this)}cleanupIntersectionObserver(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),this.intersectionObserver=void 0)}sendImpressionEvent(){this.name&&!this.hasImpressionSent&&this.walletRank&&(this.hasImpressionSent=!0,(this.rdnsId||this.name)&&N.EventsController.sendWalletImpressionEvent({name:this.name,walletRank:this.walletRank,rdnsId:this.rdnsId,view:l.RouterController.state.view,displayIndex:this.displayIndex}))}handleGetWalletNamespaces(){return Object.keys(az.AdapterController.state.adapters).length>1?this.namespaces:[]}render(){return c.html`
      <wui-list-wallet
        .walletImages=${this.walletImages}
        imageSrc=${(0,f.ifDefined)(this.imageSrc)}
        name=${this.name}
        size=${(0,f.ifDefined)(this.size)}
        tagLabel=${(0,f.ifDefined)(this.tagLabel)}
        .tagVariant=${this.tagVariant}
        .walletIcon=${this.walletIcon}
        .tabIdx=${this.tabIdx}
        .disabled=${this.disabled}
        .showAllWallets=${this.showAllWallets}
        .loading=${this.loading}
        loadingSpinnerColor=${this.loadingSpinnerColor}
        .namespaces=${this.handleGetWalletNamespaces()}
      ></wui-list-wallet>
    `}};aC.styles=aA,aB([(0,d.property)({type:Array})],aC.prototype,"walletImages",void 0),aB([(0,d.property)()],aC.prototype,"imageSrc",void 0),aB([(0,d.property)()],aC.prototype,"name",void 0),aB([(0,d.property)()],aC.prototype,"size",void 0),aB([(0,d.property)()],aC.prototype,"tagLabel",void 0),aB([(0,d.property)()],aC.prototype,"tagVariant",void 0),aB([(0,d.property)()],aC.prototype,"walletIcon",void 0),aB([(0,d.property)()],aC.prototype,"tabIdx",void 0),aB([(0,d.property)({type:Boolean})],aC.prototype,"disabled",void 0),aB([(0,d.property)({type:Boolean})],aC.prototype,"showAllWallets",void 0),aB([(0,d.property)({type:Boolean})],aC.prototype,"loading",void 0),aB([(0,d.property)({type:String})],aC.prototype,"loadingSpinnerColor",void 0),aB([(0,d.property)()],aC.prototype,"rdnsId",void 0),aB([(0,d.property)()],aC.prototype,"displayIndex",void 0),aB([(0,d.property)()],aC.prototype,"walletRank",void 0),aB([(0,d.property)({type:Array})],aC.prototype,"namespaces",void 0),aC=aB([(0,t.customElement)("w3m-list-wallet")],aC),a.s(["W3mListWallet",0,aC],590590);var aD=b;let aE=v.css`
  :host {
    --local-duration-height: 0s;
    --local-duration: ${({durations:a})=>a.lg};
    --local-transition: ${({easings:a})=>a["ease-out-power-2"]};
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
    background-color: ${({tokens:a})=>a.theme.backgroundPrimary};
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
    animation-delay: 0ms, var(--local-duration, ${({durations:a})=>a.lg});
  }

  div.page[view-direction^='next-'] .page-content {
    animation:
      slide-right-out var(--local-duration) forwards var(--local-transition),
      slide-right-in var(--local-duration) forwards var(--local-transition);
    animation-delay: 0ms, var(--local-duration, ${({durations:a})=>a.lg});
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
`;var aF=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let aG=class extends aD.LitElement{constructor(){super(...arguments),this.resizeObserver=void 0,this.transitionDuration="0.15s",this.transitionFunction="",this.history="",this.view="",this.setView=void 0,this.viewDirection="",this.historyState="",this.previousHeight="0px",this.mobileFullScreen=o.OptionsController.state.enableMobileFullScreen,this.onViewportResize=()=>{this.updateContainerHeight()}}updated(a){if(a.has("history")){let a=this.history;""!==this.historyState&&this.historyState!==a&&this.onViewChange(a)}a.has("transitionDuration")&&this.style.setProperty("--local-duration",this.transitionDuration),a.has("transitionFunction")&&this.style.setProperty("--local-transition",this.transitionFunction)}firstUpdated(){this.transitionFunction&&this.style.setProperty("--local-transition",this.transitionFunction),this.style.setProperty("--local-duration",this.transitionDuration),this.historyState=this.history,this.resizeObserver=new ResizeObserver(a=>{for(let b of a)if(b.target===this.getWrapper()){let a=b.contentRect.height,c=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--apkt-footer-height")||"0");this.mobileFullScreen?(a=(window.visualViewport?.height||window.innerHeight)-this.getHeaderHeight()-c,this.style.setProperty("--local-border-bottom-radius","0px")):(a+=c,this.style.setProperty("--local-border-bottom-radius",c?"var(--apkt-borderRadius-5)":"0px")),this.style.setProperty("--local-container-height",`${a}px`),"0px"!==this.previousHeight&&this.style.setProperty("--local-duration-height",this.transitionDuration),this.previousHeight=`${a}px`}}),this.resizeObserver.observe(this.getWrapper()),this.updateContainerHeight(),window.addEventListener("resize",this.onViewportResize),window.visualViewport?.addEventListener("resize",this.onViewportResize)}disconnectedCallback(){let a=this.getWrapper();a&&this.resizeObserver&&this.resizeObserver.unobserve(a),window.removeEventListener("resize",this.onViewportResize),window.visualViewport?.removeEventListener("resize",this.onViewportResize)}render(){return c.html`
      <div class="container" data-mobile-fullscreen="${(0,f.ifDefined)(this.mobileFullScreen)}">
        <div
          class="page"
          data-mobile-fullscreen="${(0,f.ifDefined)(this.mobileFullScreen)}"
          view-direction="${this.viewDirection}"
        >
          <div class="page-content">
            <slot></slot>
          </div>
        </div>
      </div>
    `}onViewChange(a){let b=a.split(",").filter(Boolean),c=this.historyState.split(",").filter(Boolean),d=c.length,e=b.length,f=b[b.length-1]||"",g=s.UiHelperUtil.cssDurationToNumber(this.transitionDuration),h="";e>d?h="next":e<d?h="prev":e===d&&b[e-1]!==c[d-1]&&(h="next"),queueMicrotask(()=>{this.viewDirection=`${h}-${f}`}),setTimeout(()=>{this.historyState=a,this.setView?.(f)},g),setTimeout(()=>{this.viewDirection=""},2*g)}getWrapper(){return this.shadowRoot?.querySelector("div.page")}updateContainerHeight(){let a=this.getWrapper();if(!a)return;let b=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--apkt-footer-height")||"0"),c=0;this.mobileFullScreen?(c=(window.visualViewport?.height||window.innerHeight)-this.getHeaderHeight()-b,this.style.setProperty("--local-border-bottom-radius","0px")):(c=a.getBoundingClientRect().height+b,this.style.setProperty("--local-border-bottom-radius",b?"var(--apkt-borderRadius-5)":"0px")),this.style.setProperty("--local-container-height",`${c}px`),"0px"!==this.previousHeight&&this.style.setProperty("--local-duration-height",this.transitionDuration),this.previousHeight=`${c}px`}getHeaderHeight(){return 60}};aG.styles=[aE],aF([(0,d.property)({type:String})],aG.prototype,"transitionDuration",void 0),aF([(0,d.property)({type:String})],aG.prototype,"transitionFunction",void 0),aF([(0,d.property)({type:String})],aG.prototype,"history",void 0),aF([(0,d.property)({type:String})],aG.prototype,"view",void 0),aF([(0,d.property)({attribute:!1})],aG.prototype,"setView",void 0),aF([(0,e.state)()],aG.prototype,"viewDirection",void 0),aF([(0,e.state)()],aG.prototype,"historyState",void 0),aF([(0,e.state)()],aG.prototype,"previousHeight",void 0),aF([(0,e.state)()],aG.prototype,"mobileFullScreen",void 0),aG=aF([(0,t.customElement)("w3m-router-container")],aG),a.s(["W3mRouterContainer",0,aG],891463),a.s([],110860),a.i(110860),a.i(910797),a.i(681192),a.i(590590),a.i(891463),a.s(["AppKitModal",0,au,"W3mListWallet",0,aC,"W3mModal",0,at,"W3mModalBase",0,as,"W3mRouterContainer",0,aG,"W3mUsageExceededView",0,ax],409799)}];

//# sourceMappingURL=116m_%40reown_appkit-scaffold-ui_dist_esm_exports_w3m-modal_17n4_7k.js.map