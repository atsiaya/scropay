(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,776418,823102,t=>{"use strict";var e=t.i(172339),i=t.i(458325),r=t.i(70068),o=t.i(893796),a=t.i(352714),n=t.i(34602),s=t.i(931153);class l{constructor(t){this.getNonce=t.getNonce}async createMessage(t){let e={accountAddress:t.accountAddress,chainId:t.chainId,version:"1",domain:"u"<typeof document?"Unknown Domain":document.location.host,uri:"u"<typeof document?"Unknown URI":document.location.href,resources:this.resources,nonce:await this.getNonce(t),issuedAt:this.stringifyDate(new Date),statement:void 0,expirationTime:void 0,notBefore:void 0};return Object.assign(e,{toString:()=>this.stringify(e)})}stringify(t){let e=this.getNetworkName(t.chainId);return[`${t.domain} wants you to sign in with your ${e} account:`,t.accountAddress,t.statement?`
${t.statement}
`:"",`URI: ${t.uri}`,`Version: ${t.version}`,`Chain ID: ${t.chainId}`,`Nonce: ${t.nonce}`,t.issuedAt&&`Issued At: ${t.issuedAt}`,t.expirationTime&&`Expiration Time: ${t.expirationTime}`,t.notBefore&&`Not Before: ${t.notBefore}`,t.requestId&&`Request ID: ${t.requestId}`,t.resources?.length&&t.resources.reduce((t,e)=>`${t}
- ${e}`,"Resources:")].filter(t=>"string"==typeof t).join("\n").trim()}getNetworkName(t){let e=a.ChainController.getAllRequestedCaipNetworks();return s.NetworkUtil.getNetworkNameByCaipNetworkId(e,t)}stringifyDate(t){return t.toISOString()}}t.s(["ReownAuthenticationMessenger",0,l],823102),t.s(["ReownAuthentication",0,class{constructor(t={}){this.otpUuid=null,this.listeners={sessionChanged:[]},this.localAuthStorageKey=t.localAuthStorageKey||i.SafeLocalStorageKeys.SIWX_AUTH_TOKEN,this.localNonceStorageKey=t.localNonceStorageKey||i.SafeLocalStorageKeys.SIWX_NONCE_TOKEN,this.required=t.required??!0,this.messenger=new l({getNonce:this.getNonce.bind(this)})}async createMessage(t){return this.messenger.createMessage(t)}async addSession(t){let e=await this.request({method:"POST",key:"authenticate",body:{data:t.data,message:t.message,signature:t.signature,clientId:this.getClientId(),walletInfo:this.getWalletInfo()},headers:["nonce","otp"]});this.setStorageToken(e.token,this.localAuthStorageKey),this.emit("sessionChanged",t),this.setAppKitAccountUser(function(t){let e=t.split(".");if(3!==e.length)throw Error("Invalid token");let i=e[1];if("string"!=typeof i)throw Error("Invalid token");let r=i.replace(/-/gu,"+").replace(/_/gu,"/");return JSON.parse(atob(r.padEnd(r.length+(4-r.length%4)%4,"=")))}(e.token)),this.otpUuid=null}async getSessions(t,e){try{if(!this.getStorageToken(this.localAuthStorageKey))return[];let i=await this.request({method:"GET",key:"me",query:{},headers:["auth"]});if(!i)return[];let r=i.address.toLowerCase()===e.toLowerCase(),o=i.caip2Network===t;if(!r||!o)return[];let a={data:{accountAddress:i.address,chainId:i.caip2Network},message:"",signature:""};return this.emit("sessionChanged",a),this.setAppKitAccountUser(i),[a]}catch{return[]}}async revokeSession(t,e){return Promise.resolve(this.clearStorageTokens())}async setSessions(t){if(0===t.length)this.clearStorageTokens();else{let e=t.find(t=>t.data.chainId===(0,n.getActiveCaipNetwork)()?.caipNetworkId)||t[0];await this.addSession(e)}}getRequired(){return this.required}async getSessionAccount(){if(!this.getStorageToken(this.localAuthStorageKey))throw Error("Not authenticated");return this.request({method:"GET",key:"me",body:void 0,query:{includeAppKitAccount:!0},headers:["auth"]})}async setSessionAccountMetadata(t=null){if(!this.getStorageToken(this.localAuthStorageKey))throw Error("Not authenticated");return this.request({method:"PUT",key:"account-metadata",body:{metadata:t},headers:["auth"]})}on(t,e){return this.listeners[t].push(e),()=>{this.listeners[t]=this.listeners[t].filter(t=>t!==e)}}removeAllListeners(){Object.keys(this.listeners).forEach(t=>{this.listeners[t]=[]})}async requestEmailOtp({email:t,account:e}){let i=await this.request({method:"POST",key:"otp",body:{email:t,account:e}});return this.otpUuid=i.uuid,this.messenger.resources=[`email:${t}`],i}confirmEmailOtp({code:t}){return this.request({method:"PUT",key:"otp",body:{code:t},headers:["otp"]})}async request({method:t,key:i,query:r,body:o,headers:a}){let{projectId:n,st:s,sv:l}=this.getSDKProperties(),c=new URL(`${e.ConstantsUtil.W3M_API_URL}/auth/v1/${String(i)}`);c.searchParams.set("projectId",n),c.searchParams.set("st",s),c.searchParams.set("sv",l),r&&Object.entries(r).forEach(([t,e])=>c.searchParams.set(t,String(e)));let u=await fetch(c,{method:t,body:o?JSON.stringify(o):void 0,headers:Array.isArray(a)?a.reduce((t,e)=>{switch(e){case"nonce":t["x-nonce-jwt"]=`Bearer ${this.getStorageToken(this.localNonceStorageKey)}`;break;case"auth":t.Authorization=`Bearer ${this.getStorageToken(this.localAuthStorageKey)}`;break;case"otp":this.otpUuid&&(t["x-otp"]=this.otpUuid)}return t},{}):void 0});if(!u.ok)throw Error(await u.text());return u.headers.get("content-type")?.includes("application/json")?u.json():null}getStorageToken(t){return i.SafeLocalStorage.getItem(t)}setStorageToken(t,e){i.SafeLocalStorage.setItem(e,t)}clearStorageTokens(){this.otpUuid=null,i.SafeLocalStorage.removeItem(this.localAuthStorageKey),i.SafeLocalStorage.removeItem(this.localNonceStorageKey),this.emit("sessionChanged",void 0)}async getNonce(){let{nonce:t,token:e}=await this.request({method:"GET",key:"nonce"});return this.setStorageToken(e,this.localNonceStorageKey),t}getClientId(){return o.BlockchainApiController.state.clientId}getWalletInfo(){let t=a.ChainController.getAccountData()?.connectedWalletInfo;if(!t)return;if("social"in t&&"identifier"in t)return{type:"social",social:t.social,identifier:t.identifier};let{name:e,icon:i}=t,r="unknown";switch(t.type){case"EXTERNAL":case"INJECTED":case"ANNOUNCED":r="extension";break;case"WALLET_CONNECT":r="walletconnect";break;default:r="unknown"}return{type:r,name:e,icon:i}}getSDKProperties(){return r.ApiController._getSdkProperties()}emit(t,e){this.listeners[t].forEach(t=>t(e))}setAppKitAccountUser(t){let{email:i}=t;i&&Object.values(e.ConstantsUtil.CHAIN).forEach(t=>{a.ChainController.setAccountProp("user",{email:i},t)})}}],776418)},292469,t=>{"use strict";t.i(720140);var e,i=t.i(227565),r=t.i(540647);t.i(890019);var o=t.i(378424),a=t.i(209884),n=t.i(153794),s=t.i(966584),l=t.i(565898);t.i(540417);var c=t.i(953166);t.i(693043),t.i(569046),t.i(631484);var u=i,h=t.i(349820);t.i(967549);var d=t.i(964603),p=t.i(175848),m=i,g=t.i(555489);let f=g.css`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 48px;
    height: 48px;
    background: ${({tokens:t})=>t.theme.foregroundPrimary};
    border-radius: ${({borderRadius:t})=>t[4]};
    border: 1px solid ${({tokens:t})=>t.theme.borderPrimary};
    font-family: ${({fontFamily:t})=>t.regular};
    font-size: ${({textSize:t})=>t.large};
    line-height: 18px;
    letter-spacing: -0.16px;
    text-align: center;
    color: ${({tokens:t})=>t.theme.textPrimary};
    caret-color: ${({tokens:t})=>t.core.textAccentPrimary};
    transition:
      background-color ${({durations:t})=>t.lg}
        ${({easings:t})=>t["ease-out-power-2"]},
      border-color ${({durations:t})=>t.lg}
        ${({easings:t})=>t["ease-out-power-2"]},
      box-shadow ${({durations:t})=>t.lg}
        ${({easings:t})=>t["ease-out-power-2"]};
    will-change: background-color, border-color, box-shadow;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: ${({spacing:t})=>t[4]};
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  input:focus-visible:enabled {
    background-color: transparent;
    border: 1px solid ${({tokens:t})=>t.theme.borderSecondary};
    box-shadow: 0px 0px 0px 4px ${({tokens:t})=>t.core.foregroundAccent040};
  }
`;var w=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let y=class extends m.LitElement{constructor(){super(...arguments),this.disabled=!1,this.value=""}render(){return r.html`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
      value=${this.value}
    /> `}};y.styles=[d.resetStyles,d.elementStyles,f],w([(0,h.property)({type:Boolean})],y.prototype,"disabled",void 0),w([(0,h.property)({type:String})],y.prototype,"value",void 0),y=w([(0,c.customElement)("wui-input-numeric")],y);var v=t.i(861041);let x=v.css`
  :host {
    position: relative;
    display: block;
  }
`;var b=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let S=class extends u.LitElement{constructor(){super(...arguments),this.length=6,this.otp="",this.values=Array.from({length:this.length}).map(()=>""),this.numerics=[],this.shouldInputBeEnabled=t=>this.values.slice(0,t).every(t=>""!==t),this.handleKeyDown=(t,e)=>{let i=t.target,r=this.getInputElement(i);if(!r)return;["ArrowLeft","ArrowRight","Shift","Delete"].includes(t.key)&&t.preventDefault();let o=r.selectionStart;switch(t.key){case"ArrowLeft":o&&r.setSelectionRange(o+1,o+1),this.focusInputField("prev",e);break;case"ArrowRight":case"Shift":this.focusInputField("next",e);break;case"Delete":case"Backspace":""===r.value?this.focusInputField("prev",e):this.updateInput(r,e,"")}},this.focusInputField=(t,e)=>{if("next"===t){let t=e+1;if(!this.shouldInputBeEnabled(t))return;let i=this.numerics[t<this.length?t:e],r=i?this.getInputElement(i):void 0;r&&(r.disabled=!1,r.focus())}if("prev"===t){let t=e-1,i=this.numerics[t>-1?t:e],r=i?this.getInputElement(i):void 0;r&&r.focus()}}}firstUpdated(){this.otp&&(this.values=this.otp.split(""));let t=this.shadowRoot?.querySelectorAll("wui-input-numeric");t&&(this.numerics=Array.from(t)),this.numerics[0]?.focus()}render(){return r.html`
      <wui-flex gap="1" data-testid="wui-otp-input">
        ${Array.from({length:this.length}).map((t,e)=>r.html`
            <wui-input-numeric
              @input=${t=>this.handleInput(t,e)}
              @click=${t=>this.selectInput(t)}
              @keydown=${t=>this.handleKeyDown(t,e)}
              .disabled=${!this.shouldInputBeEnabled(e)}
              .value=${this.values[e]||""}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}updateInput(t,e,i){let r=this.numerics[e],o=t||(r?this.getInputElement(r):void 0);o&&(o.value=i,this.values=this.values.map((t,r)=>r===e?i:t))}selectInput(t){let e=t.target;if(e){let t=this.getInputElement(e);t?.select()}}handleInput(t,e){let i=t.target,r=this.getInputElement(i);if(r){let i=r.value;"insertFromPaste"===t.inputType?this.handlePaste(r,i,e):p.UiHelperUtil.isNumber(i)&&t.data?(this.updateInput(r,e,t.data),this.focusInputField("next",e)):this.updateInput(r,e,"")}this.dispatchInputChangeEvent()}handlePaste(t,e,i){let r=e[0];if(r&&p.UiHelperUtil.isNumber(r)){this.updateInput(t,i,r);let o=e.substring(1);if(i+1<this.length&&o.length){let t=this.numerics[i+1],e=t?this.getInputElement(t):void 0;e&&this.handlePaste(e,o,i+1)}else this.focusInputField("next",i)}else this.updateInput(t,i,"")}getInputElement(t){return t.shadowRoot?.querySelector("input")?t.shadowRoot.querySelector("input"):null}dispatchInputChangeEvent(){let t=this.values.join("");this.dispatchEvent(new CustomEvent("inputChange",{detail:t,bubbles:!0,composed:!0}))}};S.styles=[d.resetStyles,x],b([(0,h.property)({type:Number})],S.prototype,"length",void 0),b([(0,h.property)({type:String})],S.prototype,"otp",void 0),b([(0,o.state)()],S.prototype,"values",void 0),S=b([(0,c.customElement)("wui-otp")],S),t.i(855118);var E=t.i(798449);let C=v.css`
  wui-loading-spinner {
    margin: 9px auto;
  }

  .email-display,
  .email-display wui-text {
    max-width: 100%;
  }
`;var $=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let k=e=class extends i.LitElement{firstUpdated(){this.startOTPTimeout()}disconnectedCallback(){clearTimeout(this.OTPTimeout)}constructor(){super(),this.loading=!1,this.timeoutTimeLeft=E.W3mFrameHelpers.getTimeToNextEmailLogin(),this.error="",this.otp="",this.email=s.RouterController.state.data?.email,this.authConnector=a.ConnectorController.getAuthConnector()}render(){if(!this.email)throw Error("w3m-email-otp-widget: No email provided");let t=!!this.timeoutTimeLeft,e=this.getFooterLabels(t);return r.html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["4","0","4","0"]}
        gap="4"
      >
        <wui-flex
          class="email-display"
          flexDirection="column"
          alignItems="center"
          .padding=${["0","5","0","5"]}
        >
          <wui-text variant="md-regular" color="primary" align="center">
            Enter the code we sent to
          </wui-text>
          <wui-text variant="md-medium" color="primary" lineClamp="1" align="center">
            ${this.email}
          </wui-text>
        </wui-flex>

        <wui-text variant="sm-regular" color="secondary">The code expires in 20 minutes</wui-text>

        ${this.loading?r.html`<wui-loading-spinner size="xl" color="accent-primary"></wui-loading-spinner>`:r.html` <wui-flex flexDirection="column" alignItems="center" gap="2">
              <wui-otp
                dissabled
                length="6"
                @inputChange=${this.onOtpInputChange.bind(this)}
                .otp=${this.otp}
              ></wui-otp>
              ${this.error?r.html`
                    <wui-text variant="sm-regular" align="center" color="error">
                      ${this.error}. Try Again
                    </wui-text>
                  `:null}
            </wui-flex>`}

        <wui-flex alignItems="center" gap="2">
          <wui-text variant="sm-regular" color="secondary">${e.title}</wui-text>
          <wui-link @click=${this.onResendCode.bind(this)} .disabled=${t}>
            ${e.action}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}startOTPTimeout(){this.timeoutTimeLeft=E.W3mFrameHelpers.getTimeToNextEmailLogin(),this.OTPTimeout=setInterval(()=>{this.timeoutTimeLeft>0?this.timeoutTimeLeft=E.W3mFrameHelpers.getTimeToNextEmailLogin():clearInterval(this.OTPTimeout)},1e3)}async onOtpInputChange(t){try{!this.loading&&(this.otp=t.detail,this.shouldSubmitOnOtpChange()&&(this.loading=!0,await this.onOtpSubmit?.(this.otp)))}catch(t){this.error=n.CoreHelperUtil.parseError(t),this.loading=!1}}async onResendCode(){try{if(this.onOtpResend){if(!this.loading&&!this.timeoutTimeLeft){if(this.error="",this.otp="",!a.ConnectorController.getAuthConnector()||!this.email)throw Error("w3m-email-otp-widget: Unable to resend email");this.loading=!0,await this.onOtpResend(this.email),this.startOTPTimeout(),l.SnackController.showSuccess("Code email resent")}}else this.onStartOver&&this.onStartOver()}catch(t){l.SnackController.showError(t)}finally{this.loading=!1}}getFooterLabels(t){return this.onStartOver?{title:"Something wrong?",action:`Try again ${t?`in ${this.timeoutTimeLeft}s`:""}`}:{title:"Didn't receive it?",action:`Resend ${t?`in ${this.timeoutTimeLeft}s`:"Code"}`}}shouldSubmitOnOtpChange(){return this.authConnector&&this.otp.length===e.OTP_LENGTH}};k.OTP_LENGTH=6,k.styles=C,$([(0,o.state)()],k.prototype,"loading",void 0),$([(0,o.state)()],k.prototype,"timeoutTimeLeft",void 0),$([(0,o.state)()],k.prototype,"error",void 0),k=e=$([(0,c.customElement)("w3m-email-otp-widget")],k),t.s(["W3mEmailOtpWidget",0,k],292469)},684214,t=>{"use strict";t.i(720140);var e=t.i(227565),i=t.i(540647);t.i(890019);var r=t.i(349820);t.i(540417);var o=t.i(953166),a=t.i(861041);let n=a.css`
  .email-sufixes {
    display: flex;
    flex-direction: row;
    gap: var(--wui-spacing-3xs);
    overflow-x: auto;
    max-width: 100%;
    margin-top: var(--wui-spacing-s);
    margin-bottom: calc(-1 * var(--wui-spacing-m));
    padding-bottom: var(--wui-spacing-m);
    margin-left: calc(-1 * var(--wui-spacing-m));
    margin-right: calc(-1 * var(--wui-spacing-m));
    padding-left: var(--wui-spacing-m);
    padding-right: var(--wui-spacing-m);

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;var s=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let l=["@gmail.com","@outlook.com","@yahoo.com","@hotmail.com","@aol.com","@icloud.com","@zoho.com"],c=class extends e.LitElement{constructor(){super(...arguments),this.email=""}render(){let t=l.filter(this.filter.bind(this)).map(this.item.bind(this));return 0===t.length?null:i.html`<div class="email-sufixes">${t}</div>`}filter(t){if(!this.email)return!1;let e=this.email.split("@");if(e.length<2)return!0;let i=e.pop();return t.includes(i)&&t!==`@${i}`}item(t){let e=()=>{let e=this.email.split("@");e.length>1&&e.pop();let i=e[0]+t;this.dispatchEvent(new CustomEvent("change",{detail:i,bubbles:!0,composed:!0}))};return i.html`<wui-button variant="neutral" size="sm" @click=${e}
      >${t}</wui-button
    >`}};c.styles=[n],s([(0,r.property)()],c.prototype,"email",void 0),c=s([(0,o.customElement)("w3m-email-suffixes-widget")],c),t.s(["W3mEmailSuffixesWidget",0,c],323442);var u=e;let h=a.css`
  .recent-emails {
    display: flex;
    flex-direction: column;
    padding: var(--wui-spacing-s) 0;
    border-top: 1px solid var(--wui-color-gray-glass-005);
    border-bottom: 1px solid var(--wui-color-gray-glass-005);
  }

  .recent-emails-heading {
    margin-bottom: var(--wui-spacing-s);
  }

  .recent-emails-list-item {
    --wui-color-gray-glass-002: transparent;
  }
`;var d=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let p=class extends u.LitElement{constructor(){super(...arguments),this.emails=[]}render(){return 0===this.emails.length?null:i.html`<div class="recent-emails">
      <wui-text variant="micro-600" color="fg-200" class="recent-emails-heading"
        >Recently used emails</wui-text
      >
      ${this.emails.map(this.item.bind(this))}
    </div>`}item(t){let e=()=>{this.dispatchEvent(new CustomEvent("select",{detail:t,bubbles:!0,composed:!0}))};return i.html`<wui-list-item
      @click=${e}
      ?chevron=${!0}
      icon="mail"
      iconVariant="overlay"
      class="recent-emails-list-item"
    >
      <wui-text variant="paragraph-500" color="fg-100">${t}</wui-text>
    </wui-list-item>`}};p.styles=[h],d([(0,r.property)()],p.prototype,"emails",void 0),p=d([(0,o.customElement)("w3m-recent-emails-widget")],p),t.s(["W3mRecentEmailsWidget",0,p],762140);var m=t.i(378424),g=t.i(352714),f=t.i(921693),w=t.i(966584),y=t.i(565898),v=t.i(776418),x=t.i(292469),b=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let S=class extends x.W3mEmailOtpWidget{constructor(){super(...arguments),this.siwx=f.OptionsController.state.siwx,this.onOtpSubmit=async t=>{await this.siwx.confirmEmailOtp({code:t}),w.RouterController.replace("SIWXSignMessage")},this.onOtpResend=async t=>{let e=g.ChainController.getAccountData();if(!e?.caipAddress)throw Error("No account data found");await this.siwx.requestEmailOtp({email:t,account:e.caipAddress})}}connectedCallback(){this.siwx&&this.siwx instanceof v.ReownAuthentication||y.SnackController.showError("ReownAuthentication is not initialized."),super.connectedCallback()}shouldSubmitOnOtpChange(){return this.otp.length===x.W3mEmailOtpWidget.OTP_LENGTH}};b([(0,m.state)()],S.prototype,"siwx",void 0),S=b([(0,o.customElement)("w3m-data-capture-otp-confirm-view")],S),t.s(["W3mDataCaptureOtpConfirmView",0,S],969775);var E=e,C=t.i(458325),$=t.i(175848);let k=a.css`
  .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-3xs);

    transition-property: margin, height;
    transition-duration: var(--wui-duration-md);
    transition-timing-function: var(--wui-ease-out-power-1);
    margin-top: -100px;

    &[data-state='loading'] {
      margin-top: 0px;
    }

    position: relative;
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      height: 252px;
      width: 360px;
      background: radial-gradient(
        96.11% 53.95% at 50% 51.28%,
        transparent 0%,
        color-mix(in srgb, var(--wui-color-bg-100) 5%, transparent) 49%,
        color-mix(in srgb, var(--wui-color-bg-100) 65%, transparent) 99.43%
      );
    }
  }

  .hero-main-icon {
    width: 176px;
    transition-property: background-color;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-1);

    &[data-state='loading'] {
      width: 56px;
    }
  }

  .hero-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-3xs);
    flex-wrap: nowrap;
    min-width: fit-content;

    &:nth-child(1) {
      transform: translateX(-30px);
    }

    &:nth-child(2) {
      transform: translateX(30px);
    }

    &:nth-child(4) {
      transform: translateX(40px);
    }

    transition-property: height;
    transition-duration: var(--wui-duration-md);
    transition-timing-function: var(--wui-ease-out-power-1);
    height: 68px;

    &[data-state='loading'] {
      height: 0px;
    }
  }

  .hero-row-icon {
    opacity: 0.1;
    transition-property: opacity;
    transition-duration: var(--wui-duration-md);
    transition-timing-function: var(--wui-ease-out-power-1);

    &[data-state='loading'] {
      opacity: 0;
    }
  }
`;var I=function(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let A=class extends E.LitElement{constructor(){super(...arguments),this.email=w.RouterController.state.data?.email??g.ChainController.getAccountData()?.user?.email??"",this.address=g.ChainController.getAccountData()?.address??"",this.loading=!1,this.appName=f.OptionsController.state.metadata?.name??"AppKit",this.siwx=f.OptionsController.state.siwx,this.isRequired=Array.isArray(f.OptionsController.state.remoteFeatures?.emailCapture)&&f.OptionsController.state.remoteFeatures?.emailCapture.includes("required"),this.recentEmails=this.getRecentEmails()}connectedCallback(){this.siwx&&this.siwx instanceof v.ReownAuthentication||y.SnackController.showError("ReownAuthentication is not initialized. Please contact support."),super.connectedCallback()}firstUpdated(){this.loading=!1,this.recentEmails=this.getRecentEmails(),this.email&&this.onSubmit()}render(){return i.html`
      <wui-flex flexDirection="column" .padding=${["3xs","m","m","m"]} gap="l">
        ${this.hero()} ${this.paragraph()} ${this.emailInput()} ${this.recentEmailsWidget()}
        ${this.footerActions()}
      </wui-flex>
    `}hero(){return i.html`
      <div class="hero" data-state=${this.loading?"loading":"default"}>
        ${this.heroRow(["id","mail","wallet","x","solana","qrCode"])}
        ${this.heroRow(["mail","farcaster","wallet","discord","mobile","qrCode"])}
        <div class="hero-row">
          ${this.heroIcon("github")} ${this.heroIcon("bank")}
          <wui-icon-box
            size="xl"
            iconSize="xxl"
            iconColor=${this.loading?"fg-100":"accent-100"}
            backgroundColor=${this.loading?"fg-100":"accent-100"}
            icon=${this.loading?"id":"user"}
            isOpaque
            class="hero-main-icon"
            data-state=${this.loading?"loading":"default"}
          >
          </wui-icon-box>
          ${this.heroIcon("id")} ${this.heroIcon("card")}
        </div>
        ${this.heroRow(["google","id","github","verify","apple","mobile"])}
      </div>
    `}heroRow(t){return i.html`
      <div class="hero-row" data-state=${this.loading?"loading":"default"}>
        ${t.map(this.heroIcon.bind(this))}
      </div>
    `}heroIcon(t){return i.html`
      <wui-icon-box
        size="xl"
        iconSize="xxl"
        iconColor="fg-100"
        backgroundColor="fg-100"
        icon=${t}
        data-state=${this.loading?"loading":"default"}
        isOpaque
        class="hero-row-icon"
      >
      </wui-icon-box>
    `}paragraph(){return this.loading?i.html`
        <wui-text variant="paragraph-400" color="fg-200" align="center"
          >We are verifying your account with email
          <wui-text variant="paragraph-600" color="accent-100">${this.email}</wui-text> and address
          <wui-text variant="paragraph-600" color="fg-100">
            ${$.UiHelperUtil.getTruncateString({string:this.address,charsEnd:4,charsStart:4,truncate:"middle"})} </wui-text
          >, please wait a moment.</wui-text
        >
      `:this.isRequired?i.html`
        <wui-text variant="paragraph-600" color="fg-100" align="center">
          ${this.appName} requires your email for authentication.
        </wui-text>
      `:i.html`
      <wui-flex flexDirection="column" gap="xs" alignItems="center">
        <wui-text variant="paragraph-600" color="fg-100" align="center" size>
          ${this.appName} would like to collect your email.
        </wui-text>

        <wui-text variant="small-400" color="fg-200" align="center">
          Don't worry, it's optional&mdash;you can skip this step.
        </wui-text>
      </wui-flex>
    `}emailInput(){if(this.loading)return null;let t=t=>{"Enter"===t.key&&this.onSubmit()},e=t=>{this.email=t.detail};return i.html`
      <wui-flex flexDirection="column">
        <wui-email-input
          .value=${this.email}
          .disabled=${this.loading}
          @inputChange=${e}
          @keydown=${t}
        ></wui-email-input>

        <w3m-email-suffixes-widget
          .email=${this.email}
          @change=${e}
        ></w3m-email-suffixes-widget>
      </wui-flex>
    `}recentEmailsWidget(){if(0===this.recentEmails.length||this.loading)return null;let t=t=>{this.email=t.detail,this.onSubmit()};return i.html`
      <w3m-recent-emails-widget
        .emails=${this.recentEmails}
        @select=${t}
      ></w3m-recent-emails-widget>
    `}footerActions(){return i.html`
      <wui-flex flexDirection="row" fullWidth gap="s">
        ${this.isRequired?null:i.html`<wui-button
              size="lg"
              variant="neutral"
              fullWidth
              .disabled=${this.loading}
              @click=${this.onSkip.bind(this)}
              >Skip this step</wui-button
            >`}

        <wui-button
          size="lg"
          variant="main"
          type="submit"
          fullWidth
          .disabled=${!this.email||!this.isValidEmail(this.email)}
          .loading=${this.loading}
          @click=${this.onSubmit.bind(this)}
        >
          Continue
        </wui-button>
      </wui-flex>
    `}async onSubmit(){if(!(this.siwx instanceof v.ReownAuthentication))return void y.SnackController.showError("ReownAuthentication is not initialized. Please contact support.");let t=g.ChainController.getActiveCaipAddress();if(!t)throw Error("Account is not connected.");if(!this.isValidEmail(this.email))return void y.SnackController.showError("Please provide a valid email.");try{this.loading=!0;let e=await this.siwx.requestEmailOtp({email:this.email,account:t});this.pushRecentEmail(this.email),null===e.uuid?w.RouterController.replace("SIWXSignMessage"):w.RouterController.replace("DataCaptureOtpConfirm",{email:this.email})}catch(t){y.SnackController.showError("Failed to send email OTP"),this.loading=!1}}onSkip(){w.RouterController.replace("SIWXSignMessage")}getRecentEmails(){let t=C.SafeLocalStorage.getItem(C.SafeLocalStorageKeys.RECENT_EMAILS);return(t?t.split(","):[]).filter(this.isValidEmail.bind(this)).slice(0,3)}pushRecentEmail(t){let e=Array.from(new Set([t,...this.getRecentEmails()])).slice(0,3);C.SafeLocalStorage.setItem(C.SafeLocalStorageKeys.RECENT_EMAILS,e.join(","))}isValidEmail(t){return/^\S+@\S+\.\S+$/u.test(t)}};A.styles=[k],I([(0,m.state)()],A.prototype,"email",void 0),I([(0,m.state)()],A.prototype,"address",void 0),I([(0,m.state)()],A.prototype,"loading",void 0),I([(0,m.state)()],A.prototype,"appName",void 0),I([(0,m.state)()],A.prototype,"siwx",void 0),I([(0,m.state)()],A.prototype,"isRequired",void 0),I([(0,m.state)()],A.prototype,"recentEmails",void 0),A=I([(0,o.customElement)("w3m-data-capture-view")],A),t.s(["W3mDataCaptureView",0,A],50191),t.s([],166507),t.i(166507),t.i(323442),t.i(762140),t.i(969775),t.i(50191),t.s(["W3mDataCaptureOtpConfirmView",0,S,"W3mDataCaptureView",0,A,"W3mEmailSuffixesWidget",0,c,"W3mRecentEmailsWidget",0,p],684214)}]);