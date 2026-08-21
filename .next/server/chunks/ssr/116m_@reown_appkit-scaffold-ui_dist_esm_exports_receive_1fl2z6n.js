module.exports=[116818,a=>{"use strict";a.i(176996);var b=a.i(44886),c=a.i(979837);a.i(525181);var d=a.i(905653);a.i(876091);var e=a.i(960078),f=a.i(197350),g=a.i(34525),h=a.i(456594),i=a.i(682762),j=a.i(475744),k=a.i(716715),l=a.i(932774);a.i(564205);var m=a.i(415274),n=a.i(526551),o=b,p=a.i(129349);a.i(808710),a.i(508423),a.i(696585),a.i(307465);var q=a.i(924968),r=a.i(192361);let s=r.css`
  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({spacing:a})=>a[4]};
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
    border-radius: ${({borderRadius:a})=>a[3]};
    border: none;
    padding: ${({spacing:a})=>a[3]};
    transition: background-color ${({durations:a})=>a.lg}
      ${({easings:a})=>a["ease-out-power-2"]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button:hover:enabled,
  button:active:enabled {
    background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
  }

  wui-text {
    flex: 1;
    color: ${({tokens:a})=>a.theme.textSecondary};
  }

  wui-flex {
    width: auto;
    display: flex;
    align-items: center;
    gap: ${({spacing:a})=>a["01"]};
  }

  wui-icon {
    color: ${({tokens:a})=>a.theme.iconDefault};
  }

  .network-icon {
    position: relative;
    width: 20px;
    height: 20px;
    border-radius: ${({borderRadius:a})=>a[4]};
    overflow: hidden;
    margin-left: -8px;
  }

  .network-icon:first-child {
    margin-left: 0px;
  }

  .network-icon:after {
    position: absolute;
    inset: 0;
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    border-radius: ${({borderRadius:a})=>a[4]};
    box-shadow: inset 0 0 0 1px ${({tokens:a})=>a.core.glass010};
  }
`;var t=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let u=class extends o.LitElement{constructor(){super(...arguments),this.networkImages=[""],this.text=""}render(){return c.html`
      <button>
        <wui-text variant="md-regular" color="inherit">${this.text}</wui-text>
        <wui-flex>
          ${this.networksTemplate()}
          <wui-icon name="chevronRight" size="sm" color="inherit"></wui-icon>
        </wui-flex>
      </button>
    `}networksTemplate(){let a=this.networkImages.slice(0,5);return c.html` <wui-flex class="networks">
      ${a?.map(a=>c.html` <wui-flex class="network-icon"> <wui-image src=${a}></wui-image> </wui-flex>`)}
    </wui-flex>`}};u.styles=[q.resetStyles,q.elementStyles,s],t([(0,p.property)({type:Array})],u.prototype,"networkImages",void 0),t([(0,p.property)()],u.prototype,"text",void 0),u=t([(0,n.customElement)("wui-compatible-network")],u),a.i(735803),a.i(556105),a.i(603511);var v=a.i(455434);let w=r.css`
  wui-compatible-network {
    margin-top: ${({spacing:a})=>a["4"]};
    width: 100%;
  }

  wui-qr-code {
    width: unset !important;
    height: unset !important;
  }

  wui-icon {
    align-items: normal;
  }
`;var x=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let y=class extends b.LitElement{constructor(){super(),this.unsubscribe=[],this.address=g.ChainController.getAccountData()?.address,this.profileName=g.ChainController.getAccountData()?.profileName,this.network=g.ChainController.state.activeCaipNetwork,this.unsubscribe.push(g.ChainController.subscribeChainProp("accountState",a=>{a?(this.address=a.address,this.profileName=a.profileName):j.SnackController.showError("Account not found")}),g.ChainController.subscribeKey("activeCaipNetwork",a=>{a?.id&&(this.network=a)}))}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}render(){if(!this.address)throw Error("w3m-wallet-receive-view: No account provided");let a=f.AssetUtil.getNetworkImage(this.network);return c.html` <wui-flex
      flexDirection="column"
      .padding=${["0","4","4","4"]}
      alignItems="center"
    >
      <wui-chip-button
        data-testid="receive-address-copy-button"
        @click=${this.onCopyClick.bind(this)}
        text=${m.UiHelperUtil.getTruncateString({string:this.profileName||this.address||"",charsStart:this.profileName?18:4,charsEnd:4*!this.profileName,truncate:this.profileName?"end":"middle"})}
        icon="copy"
        size="sm"
        imageSrc=${a||""}
        variant="gray"
      ></wui-chip-button>
      <wui-flex
        flexDirection="column"
        .padding=${["4","0","0","0"]}
        alignItems="center"
        gap="4"
      >
        <wui-qr-code
          size=${232}
          theme=${k.ThemeController.state.themeMode}
          uri=${this.address}
          ?arenaClear=${!0}
          color=${(0,e.ifDefined)(k.ThemeController.state.themeVariables["--apkt-qr-color"]??k.ThemeController.state.themeVariables["--w3m-qr-color"])}
          data-testid="wui-qr-code"
        ></wui-qr-code>
        <wui-text variant="lg-regular" color="primary" align="center">
          Copy your address or scan this QR code
        </wui-text>
        <wui-button @click=${this.onCopyClick.bind(this)} size="sm" variant="neutral-secondary">
          <wui-icon slot="iconLeft" size="sm" color="inherit" name="copy"></wui-icon>
          <wui-text variant="md-regular" color="inherit">Copy address</wui-text>
        </wui-button>
      </wui-flex>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){let a=g.ChainController.getAllRequestedCaipNetworks(),b=g.ChainController.checkIfSmartAccountEnabled(),d=g.ChainController.state.activeCaipNetwork,e=a.filter(a=>a?.chainNamespace===d?.chainNamespace);if((0,l.getPreferredAccountType)(d?.chainNamespace)===v.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT&&b)return d?c.html`<wui-compatible-network
        @click=${this.onReceiveClick.bind(this)}
        text="Only receive assets on this network"
        .networkImages=${[f.AssetUtil.getNetworkImage(d)??""]}
      ></wui-compatible-network>`:null;let h=(e?.filter(a=>a?.assets?.imageId)?.slice(0,5)).map(f.AssetUtil.getNetworkImage).filter(Boolean);return c.html`<wui-compatible-network
      @click=${this.onReceiveClick.bind(this)}
      text="Only receive assets on these networks"
      .networkImages=${h}
    ></wui-compatible-network>`}onReceiveClick(){i.RouterController.push("WalletCompatibleNetworks")}onCopyClick(){try{this.address&&(h.CoreHelperUtil.copyToClopboard(this.address),j.SnackController.showSuccess("Address copied"))}catch{j.SnackController.showError("Failed to copy")}}};y.styles=w,x([(0,d.state)()],y.prototype,"address",void 0),x([(0,d.state)()],y.prototype,"profileName",void 0),x([(0,d.state)()],y.prototype,"network",void 0),y=x([(0,n.customElement)("w3m-wallet-receive-view")],y),a.s(["W3mWalletReceiveView",0,y],67963),a.s([],98006),a.i(98006),a.i(67963),a.s(["W3mWalletReceiveView",0,y],116818)}];

//# sourceMappingURL=116m_%40reown_appkit-scaffold-ui_dist_esm_exports_receive_1fl2z6n.js.map