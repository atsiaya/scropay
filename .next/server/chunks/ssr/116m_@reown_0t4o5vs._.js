module.exports=[187683,a=>{"use strict";a.i(176996);var b=a.i(44886),c=a.i(979837);a.i(525181);var d=a.i(129349);a.i(876091);var e=a.i(960078);a.i(206222),a.i(696585);var f=a.i(924968),g=a.i(526551),h=a.i(192361);let i=h.css`
  :host {
    width: 100%;
  }

  :host([data-type='primary']) > button {
    background-color: ${({tokens:a})=>a.theme.backgroundPrimary};
  }

  :host([data-type='secondary']) > button {
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({spacing:a})=>a[3]};
    width: 100%;
    border-radius: ${({borderRadius:a})=>a[4]};
    transition:
      background-color ${({durations:a})=>a.lg}
        ${({easings:a})=>a["ease-out-power-2"]},
      scale ${({durations:a})=>a.lg} ${({easings:a})=>a["ease-out-power-2"]};
    will-change: background-color, scale;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-image {
    color: ${({tokens:a})=>a.theme.textPrimary};
  }

  @media (hover: hover) {
    :host([data-type='primary']) > button:hover:enabled {
      background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
    }

    :host([data-type='secondary']) > button:hover:enabled {
      background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var j=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let k=class extends b.LitElement{constructor(){super(...arguments),this.type="primary",this.imageSrc="google",this.imageSize=void 0,this.loading=!1,this.boxColor="foregroundPrimary",this.disabled=!1,this.rightIcon=!0,this.boxed=!0,this.rounded=!1,this.fullSize=!1}render(){return this.dataset.rounded=this.rounded?"true":"false",this.dataset.type=this.type,c.html`
      <button
        ?disabled=${!!this.loading||!!this.disabled}
        data-loading=${this.loading}
        tabindex=${(0,e.ifDefined)(this.tabIdx)}
      >
        <wui-flex gap="2" alignItems="center">
          ${this.templateLeftIcon()}
          <wui-flex gap="1">
            <slot></slot>
          </wui-flex>
        </wui-flex>
        ${this.templateRightIcon()}
      </button>
    `}templateLeftIcon(){return this.icon?c.html`<wui-image
        icon=${this.icon}
        iconColor=${(0,e.ifDefined)(this.iconColor)}
        ?boxed=${this.boxed}
        ?rounded=${this.rounded}
        boxColor=${this.boxColor}
      ></wui-image>`:c.html`<wui-image
      ?boxed=${this.boxed}
      ?rounded=${this.rounded}
      ?fullSize=${this.fullSize}
      size=${(0,e.ifDefined)(this.imageSize)}
      src=${this.imageSrc}
      boxColor=${this.boxColor}
    ></wui-image>`}templateRightIcon(){return this.rightIcon?this.loading?c.html`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:c.html`<wui-icon name="chevronRight" size="lg" color="default"></wui-icon>`:null}};k.styles=[f.resetStyles,f.elementStyles,i],j([(0,d.property)()],k.prototype,"type",void 0),j([(0,d.property)()],k.prototype,"imageSrc",void 0),j([(0,d.property)()],k.prototype,"imageSize",void 0),j([(0,d.property)()],k.prototype,"icon",void 0),j([(0,d.property)()],k.prototype,"iconColor",void 0),j([(0,d.property)({type:Boolean})],k.prototype,"loading",void 0),j([(0,d.property)()],k.prototype,"tabIdx",void 0),j([(0,d.property)()],k.prototype,"boxColor",void 0),j([(0,d.property)({type:Boolean})],k.prototype,"disabled",void 0),j([(0,d.property)({type:Boolean})],k.prototype,"rightIcon",void 0),j([(0,d.property)({type:Boolean})],k.prototype,"boxed",void 0),j([(0,d.property)({type:Boolean})],k.prototype,"rounded",void 0),j([(0,d.property)({type:Boolean})],k.prototype,"fullSize",void 0),k=j([(0,g.customElement)("wui-list-item")],k),a.s([],187683)},981449,a=>{"use strict";a.i(176996);var b=a.i(44886),c=a.i(979837);a.i(525181);var d=a.i(129349);a.i(696585);var e=a.i(924968),f=a.i(526551),g=a.i(192361);let h=g.css`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: ${({tokens:a})=>a.theme.borderPrimary};
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 8px;
    transition: background-color ${({durations:a})=>a.lg}
      ${({easings:a})=>a["ease-out-power-2"]};
    will-change: background-color;
  }

  :host([data-bg-color='primary']) > wui-text {
    background-color: ${({tokens:a})=>a.theme.backgroundPrimary};
  }

  :host([data-bg-color='secondary']) > wui-text {
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
  }
`;var i=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let j=class extends b.LitElement{constructor(){super(...arguments),this.text="",this.bgColor="primary"}render(){return this.dataset.bgColor=this.bgColor,c.html`${this.template()}`}template(){return this.text?c.html`<wui-text variant="md-regular" color="secondary">${this.text}</wui-text>`:null}};j.styles=[e.resetStyles,h],i([(0,d.property)()],j.prototype,"text",void 0),i([(0,d.property)()],j.prototype,"bgColor",void 0),j=i([(0,f.customElement)("wui-separator")],j),a.s([],981449)},528049,946976,a=>{"use strict";a.i(176996);var b=a.i(44886),c=a.i(979837);a.i(525181);var d=a.i(129349);a.i(808710);var e=a.i(924968),f=a.i(526551),g=a.i(192361);let h=g.css`
  button {
    background-color: transparent;
    padding: ${({spacing:a})=>a[1]};
  }

  button:focus-visible {
    box-shadow: 0 0 0 4px ${({tokens:a})=>a.core.foregroundAccent020};
  }

  button[data-variant='accent']:hover:enabled,
  button[data-variant='accent']:focus-visible {
    background-color: ${({tokens:a})=>a.core.foregroundAccent010};
  }

  button[data-variant='primary']:hover:enabled,
  button[data-variant='primary']:focus-visible,
  button[data-variant='secondary']:hover:enabled,
  button[data-variant='secondary']:focus-visible {
    background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
  }

  button[data-size='xs'] > wui-icon {
    width: 8px;
    height: 8px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='xs'],
  button[data-size='sm'] {
    border-radius: ${({borderRadius:a})=>a[1]};
  }

  button[data-size='md'],
  button[data-size='lg'] {
    border-radius: ${({borderRadius:a})=>a[2]};
  }

  button[data-size='md'] > wui-icon {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] > wui-icon {
    width: 20px;
    height: 20px;
  }

  button:disabled {
    background-color: transparent;
    cursor: not-allowed;
    opacity: 0.5;
  }

  button:hover:not(:disabled) {
    background-color: var(--wui-color-accent-glass-015);
  }

  button:focus-visible:not(:disabled) {
    background-color: var(--wui-color-accent-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
`;var i=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let j=class extends b.LitElement{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="default",this.variant="accent"}render(){return c.html`
      <button data-variant=${this.variant} ?disabled=${this.disabled} data-size=${this.size}>
        <wui-icon
          color=${({accent:"accent-primary",primary:"inverse",secondary:"default"})[this.variant]||this.iconColor}
          size=${this.size}
          name=${this.icon}
        ></wui-icon>
      </button>
    `}};j.styles=[e.resetStyles,e.elementStyles,h],i([(0,d.property)()],j.prototype,"size",void 0),i([(0,d.property)({type:Boolean})],j.prototype,"disabled",void 0),i([(0,d.property)()],j.prototype,"icon",void 0),i([(0,d.property)()],j.prototype,"iconColor",void 0),i([(0,d.property)()],j.prototype,"variant",void 0),j=i([(0,f.customElement)("wui-icon-link")],j),a.s([],946976),a.s([],528049)},512705,a=>{"use strict";let b={METMASK_CONNECTOR_NAME:"MetaMask",TRUST_CONNECTOR_NAME:"Trust Wallet",SOLFLARE_CONNECTOR_NAME:"Solflare",PHANTOM_CONNECTOR_NAME:"Phantom",COIN98_CONNECTOR_NAME:"Coin98",MAGIC_EDEN_CONNECTOR_NAME:"Magic Eden",BACKPACK_CONNECTOR_NAME:"Backpack",BITGET_CONNECTOR_NAME:"Bitget Wallet",FRONTIER_CONNECTOR_NAME:"Frontier",XVERSE_CONNECTOR_NAME:"Xverse Wallet",LEATHER_CONNECTOR_NAME:"Leather",OKX_CONNECTOR_NAME:"OKX Wallet",BINANCE_CONNECTOR_NAME:"Binance Wallet",EIP155:a.i(918428).ConstantsUtil.CHAIN.EVM,ADD_CHAIN_METHOD:"wallet_addEthereumChain",EIP6963_ANNOUNCE_EVENT:"eip6963:announceProvider",EIP6963_REQUEST_EVENT:"eip6963:requestProvider",CONNECTOR_RDNS_MAP:{coinbaseWallet:"com.coinbase.wallet",coinbaseWalletSDK:"com.coinbase.wallet"},CONNECTOR_TYPE_EXTERNAL:"EXTERNAL",CONNECTOR_TYPE_WALLET_CONNECT:"WALLET_CONNECT",CONNECTOR_TYPE_INJECTED:"INJECTED",CONNECTOR_TYPE_ANNOUNCED:"ANNOUNCED",CONNECTOR_TYPE_AUTH:"AUTH",CONNECTOR_TYPE_MULTI_CHAIN:"MULTI_CHAIN",CONNECTOR_TYPE_W3M_AUTH:"AUTH",getSDKVersionWarningMessage:(a,b)=>`
     @@@@@@@           @@@@@@@@@@@@@@@@@@      
   @@@@@@@@@@@      @@@@@@@@@@@@@@@@@@@@@@@@   
  @@@@@@@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@  
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@  
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@@   @@@@@@@@@@@ 
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@   @@@@@@@@@@@@ 
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@  @@@@@@@@@@@@@
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@   @@@@@@@@@@@@@    
 @@@@@@   @@@@@@  @@@@@@@@@@@   @@@@@@@@@@@@@@    
 @@@@@@   @@@@@@  @@@@@@@@@@@  @@@@@@@@@@@@@@@ 
 @@@@@@@@@@@@@@@  @@@@@@@@@@   @@@@@@@@@@@@@@@ 
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@  
  @@@@@@@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@  
   @@@@@@@@@@@      @@@@@@@@@@@@@@@@@@@@@@@@   
      @@@@@            @@@@@@@@@@@@@@@@@@  
      
AppKit SDK version ${a} is outdated. Latest version is ${b}. Please update to the latest version for bug fixes and new features.
            
Changelog: https://github.com/reown-com/appkit/releases
NPM Registry: https://www.npmjs.com/package/@reown/appkit`};a.s(["ConstantsUtil",0,b])},99009,a=>{"use strict";var b=a.i(918428),c=a.i(34525),d=a.i(661107),e=a.i(965497),f=a.i(512705);let g={getCaipTokens(a){if(!a)return;let b={};return Object.entries(a).forEach(([a,c])=>{b[`${f.ConstantsUtil.EIP155}:${a}`]=c}),b},isLowerCaseMatch:(a,b)=>a?.toLowerCase()===b?.toLowerCase(),getActiveNamespaceConnectedToAuth(){let a=c.ChainController.state.activeChain;return b.ConstantsUtil.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(c=>d.ConnectorController.getConnectorId(c)===b.ConstantsUtil.CONNECTOR_ID.AUTH&&c===a)},withRetry({conditionFn:a,intervalMs:b,maxRetries:c}){let d=0;return new Promise(e=>{async function f(){return(d+=1,await a())?e(!0):d>=c?e(!1):(setTimeout(f,b),null)}f()})},userChainIdToChainNamespace(a){if("number"==typeof a)return b.ConstantsUtil.CHAIN.EVM;let[c]=a.split(":");return c},getOtherAuthNamespaces:a=>a?b.ConstantsUtil.AUTH_CONNECTOR_SUPPORTED_CHAINS.filter(b=>b!==a):[],getConnectorStorageInfo(a,b){let c=e.StorageUtil.getConnections()[b]??[];return{hasDisconnected:e.StorageUtil.isConnectorDisconnected(a,b),hasConnected:c.some(b=>g.isLowerCaseMatch(b.connectorId,a))}}};a.s(["HelpersUtil",0,g])},305353,a=>{"use strict";a.i(176996);var b=a.i(44886),c=a.i(979837);a.i(525181);var d=a.i(129349);a.i(876091);var e=a.i(960078);a.i(808710),a.i(508423),a.i(696585),a.i(307465);var f=a.i(924968),g=a.i(415274),h=a.i(526551),i=a.i(192361);let j=i.css`
  button {
    display: flex;
    align-items: center;
    height: 40px;
    padding: ${({spacing:a})=>a[2]};
    border-radius: ${({borderRadius:a})=>a[4]};
    column-gap: ${({spacing:a})=>a[1]};
    background-color: transparent;
    transition: background-color ${({durations:a})=>a.lg}
      ${({easings:a})=>a["ease-out-power-2"]};
    will-change: background-color;
  }

  wui-image,
  .icon-box {
    width: ${({spacing:a})=>a[6]};
    height: ${({spacing:a})=>a[6]};
    border-radius: ${({borderRadius:a})=>a[4]};
  }

  wui-text {
    flex: 1;
  }

  .icon-box {
    position: relative;
  }

  .icon-box[data-active='true'] {
    background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
  }

  .circle {
    position: absolute;
    left: 16px;
    top: 15px;
    width: 8px;
    height: 8px;
    background-color: ${({tokens:a})=>a.core.textSuccess};
    box-shadow: 0 0 0 2px ${({tokens:a})=>a.theme.foregroundPrimary};
    border-radius: 50%;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) {
    button:hover:enabled,
    button:active:enabled {
      background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
    }
  }
`;var k=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let l=class extends b.LitElement{constructor(){super(...arguments),this.address="",this.profileName="",this.alt="",this.imageSrc="",this.icon=void 0,this.iconSize="md",this.enableGreenCircle=!0,this.loading=!1,this.charsStart=4,this.charsEnd=6}render(){return c.html`
      <button>
        ${this.leftImageTemplate()} ${this.textTemplate()} ${this.rightImageTemplate()}
      </button>
    `}leftImageTemplate(){let a=this.icon?c.html`<wui-icon
          size=${(0,e.ifDefined)(this.iconSize)}
          color="default"
          name=${this.icon}
          class="icon"
        ></wui-icon>`:c.html`<wui-image src=${this.imageSrc} alt=${this.alt}></wui-image>`;return c.html`
      <wui-flex
        alignItems="center"
        justifyContent="center"
        class="icon-box"
        data-active=${!!this.icon}
      >
        ${a}
        ${this.enableGreenCircle?c.html`<wui-flex class="circle"></wui-flex>`:null}
      </wui-flex>
    `}textTemplate(){return c.html`
      <wui-text variant="lg-regular" color="primary">
        ${g.UiHelperUtil.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?16:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"})}
      </wui-text>
    `}rightImageTemplate(){return c.html`<wui-icon name="chevronBottom" size="sm" color="default"></wui-icon>`}};l.styles=[f.resetStyles,f.elementStyles,j],k([(0,d.property)()],l.prototype,"address",void 0),k([(0,d.property)()],l.prototype,"profileName",void 0),k([(0,d.property)()],l.prototype,"alt",void 0),k([(0,d.property)()],l.prototype,"imageSrc",void 0),k([(0,d.property)()],l.prototype,"icon",void 0),k([(0,d.property)()],l.prototype,"iconSize",void 0),k([(0,d.property)({type:Boolean})],l.prototype,"enableGreenCircle",void 0),k([(0,d.property)({type:Boolean})],l.prototype,"loading",void 0),k([(0,d.property)({type:Number})],l.prototype,"charsStart",void 0),k([(0,d.property)({type:Number})],l.prototype,"charsEnd",void 0),l=k([(0,h.customElement)("wui-wallet-switch")],l),a.s([],305353)},513043,a=>{"use strict";a.i(176996);var b=a.i(44886),c=a.i(979837);a.i(525181);var d=a.i(129349);a.i(808710),a.i(508423);var e=a.i(924968),f=a.i(526551);a.i(188110);var g=a.i(192361);let h=g.css`
  :host {
    position: relative;
    background-color: ${({tokens:a})=>a.theme.foregroundTertiary};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host([data-image='true']) {
    background-color: transparent;
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host([data-size='sm']) {
    width: 32px;
    height: 32px;
  }

  :host([data-size='md']) {
    width: 40px;
    height: 40px;
  }

  :host([data-size='lg']) {
    width: 56px;
    height: 56px;
  }

  :host([name='Extension'])::after {
    border: 1px solid ${({colors:a})=>a.accent010};
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid ${({colors:a})=>a.accent010};
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon {
    color: ${({tokens:a})=>a.theme.iconDefault};
  }

  wui-icon[data-parent-size='sm'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='md'] {
    width: 32px;
    height: 32px;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid ${({tokens:a})=>a.theme.backgroundPrimary};
    padding: 1px;
  }
`;var i=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let j=class extends b.LitElement{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let a="1";return"lg"===this.size?a="4":"md"===this.size?a="2":"sm"===this.size&&(a="1"),this.style.cssText=`
       --local-border-radius: var(--apkt-borderRadius-${a});
   `,this.dataset.size=this.size,this.imageSrc&&(this.dataset.image="true"),this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),c.html`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?c.html`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?c.html`<wui-icon size="md" color="default" name=${this.walletIcon}></wui-icon>`:c.html`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="wallet"
    ></wui-icon>`}};j.styles=[e.resetStyles,h],i([(0,d.property)()],j.prototype,"size",void 0),i([(0,d.property)()],j.prototype,"name",void 0),i([(0,d.property)()],j.prototype,"imageSrc",void 0),i([(0,d.property)()],j.prototype,"walletIcon",void 0),i([(0,d.property)({type:Boolean})],j.prototype,"installed",void 0),i([(0,d.property)()],j.prototype,"badgeSize",void 0),j=i([(0,f.customElement)("wui-wallet-image")],j),a.s([],513043)},159118,a=>{"use strict";a.i(176996);var b=a.i(979837);let c=b.svg`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`;a.s(["networkSvgMd",0,c])},61504,a=>{"use strict";a.i(513043),a.s([])},161693,a=>{"use strict";a.i(176996);var b=a.i(979837);let c=b.svg`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`;a.s(["networkSvgLg",0,c])},375622,a=>{"use strict";a.i(176996);var b=a.i(44886),c=a.i(979837);a.i(525181);var d=a.i(129349),e=a.i(161693),f=a.i(159118);let g=c.svg`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`;a.i(808710),a.i(508423);var h=a.i(924968),i=a.i(526551),j=a.i(192361);let k=j.css`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([data-round='true']) {
    background: ${({tokens:a})=>a.theme.foregroundPrimary};
    border-radius: 100%;
    outline: 1px solid ${({tokens:a})=>a.core.glass010};
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: ${({tokens:a})=>a.theme.foregroundPrimary};
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var l=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let m=class extends b.LitElement{constructor(){super(...arguments),this.size="md",this.name="uknown",this.networkImagesBySize={sm:g,md:f.networkSvgMd,lg:e.networkSvgLg},this.selected=!1,this.round=!1}render(){return this.round?(this.dataset.round="true",this.style.cssText=`
      --local-width: var(--apkt-spacing-10);
      --local-height: var(--apkt-spacing-10);
      --local-icon-size: var(--apkt-spacing-4);
    `):this.style.cssText=`

      --local-path: var(--apkt-path-network-${this.size});
      --local-width:  var(--apkt-width-network-${this.size});
      --local-height:  var(--apkt-height-network-${this.size});
      --local-icon-size:  var(--apkt-spacing-${({sm:"4",md:"6",lg:"10"})[this.size]});
    `,c.html`${this.templateVisual()} ${this.svgTemplate()} `}svgTemplate(){return this.round?null:this.networkImagesBySize[this.size]}templateVisual(){return this.imageSrc?c.html`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:c.html`<wui-icon size="inherit" color="default" name="networkPlaceholder"></wui-icon>`}};m.styles=[h.resetStyles,k],l([(0,d.property)()],m.prototype,"size",void 0),l([(0,d.property)()],m.prototype,"name",void 0),l([(0,d.property)({type:Object})],m.prototype,"networkImagesBySize",void 0),l([(0,d.property)()],m.prototype,"imageSrc",void 0),l([(0,d.property)({type:Boolean})],m.prototype,"selected",void 0),l([(0,d.property)({type:Boolean})],m.prototype,"round",void 0),m=l([(0,i.customElement)("wui-network-image")],m),a.s([],375622)}];

//# sourceMappingURL=116m_%40reown_0t4o5vs._.js.map