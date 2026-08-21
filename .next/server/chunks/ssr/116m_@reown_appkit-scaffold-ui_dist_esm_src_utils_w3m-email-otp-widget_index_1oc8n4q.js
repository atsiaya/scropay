module.exports=[589551,a=>{"use strict";a.i(176996);var b,c=a.i(44886),d=a.i(979837);a.i(525181);var e=a.i(905653),f=a.i(661107),g=a.i(456594),h=a.i(682762),i=a.i(475744);a.i(564205);var j=a.i(526551);a.i(735803),a.i(405239),a.i(292471);var k=c,l=a.i(129349);a.i(307465);var m=a.i(924968),n=a.i(415274),o=c,p=a.i(192361);let q=p.css`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 48px;
    height: 48px;
    background: ${({tokens:a})=>a.theme.foregroundPrimary};
    border-radius: ${({borderRadius:a})=>a[4]};
    border: 1px solid ${({tokens:a})=>a.theme.borderPrimary};
    font-family: ${({fontFamily:a})=>a.regular};
    font-size: ${({textSize:a})=>a.large};
    line-height: 18px;
    letter-spacing: -0.16px;
    text-align: center;
    color: ${({tokens:a})=>a.theme.textPrimary};
    caret-color: ${({tokens:a})=>a.core.textAccentPrimary};
    transition:
      background-color ${({durations:a})=>a.lg}
        ${({easings:a})=>a["ease-out-power-2"]},
      border-color ${({durations:a})=>a.lg}
        ${({easings:a})=>a["ease-out-power-2"]},
      box-shadow ${({durations:a})=>a.lg}
        ${({easings:a})=>a["ease-out-power-2"]};
    will-change: background-color, border-color, box-shadow;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: ${({spacing:a})=>a[4]};
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
    border: 1px solid ${({tokens:a})=>a.theme.borderSecondary};
    box-shadow: 0px 0px 0px 4px ${({tokens:a})=>a.core.foregroundAccent040};
  }
`;var r=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let s=class extends o.LitElement{constructor(){super(...arguments),this.disabled=!1,this.value=""}render(){return d.html`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
      value=${this.value}
    /> `}};s.styles=[m.resetStyles,m.elementStyles,q],r([(0,l.property)({type:Boolean})],s.prototype,"disabled",void 0),r([(0,l.property)({type:String})],s.prototype,"value",void 0),s=r([(0,j.customElement)("wui-input-numeric")],s);var t=a.i(77439);let u=t.css`
  :host {
    position: relative;
    display: block;
  }
`;var v=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let w=class extends k.LitElement{constructor(){super(...arguments),this.length=6,this.otp="",this.values=Array.from({length:this.length}).map(()=>""),this.numerics=[],this.shouldInputBeEnabled=a=>this.values.slice(0,a).every(a=>""!==a),this.handleKeyDown=(a,b)=>{let c=a.target,d=this.getInputElement(c);if(!d)return;["ArrowLeft","ArrowRight","Shift","Delete"].includes(a.key)&&a.preventDefault();let e=d.selectionStart;switch(a.key){case"ArrowLeft":e&&d.setSelectionRange(e+1,e+1),this.focusInputField("prev",b);break;case"ArrowRight":case"Shift":this.focusInputField("next",b);break;case"Delete":case"Backspace":""===d.value?this.focusInputField("prev",b):this.updateInput(d,b,"")}},this.focusInputField=(a,b)=>{if("next"===a){let a=b+1;if(!this.shouldInputBeEnabled(a))return;let c=this.numerics[a<this.length?a:b],d=c?this.getInputElement(c):void 0;d&&(d.disabled=!1,d.focus())}if("prev"===a){let a=b-1,c=this.numerics[a>-1?a:b],d=c?this.getInputElement(c):void 0;d&&d.focus()}}}firstUpdated(){this.otp&&(this.values=this.otp.split(""));let a=this.shadowRoot?.querySelectorAll("wui-input-numeric");a&&(this.numerics=Array.from(a)),this.numerics[0]?.focus()}render(){return d.html`
      <wui-flex gap="1" data-testid="wui-otp-input">
        ${Array.from({length:this.length}).map((a,b)=>d.html`
            <wui-input-numeric
              @input=${a=>this.handleInput(a,b)}
              @click=${a=>this.selectInput(a)}
              @keydown=${a=>this.handleKeyDown(a,b)}
              .disabled=${!this.shouldInputBeEnabled(b)}
              .value=${this.values[b]||""}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}updateInput(a,b,c){let d=this.numerics[b],e=a||(d?this.getInputElement(d):void 0);e&&(e.value=c,this.values=this.values.map((a,d)=>d===b?c:a))}selectInput(a){let b=a.target;if(b){let a=this.getInputElement(b);a?.select()}}handleInput(a,b){let c=a.target,d=this.getInputElement(c);if(d){let c=d.value;"insertFromPaste"===a.inputType?this.handlePaste(d,c,b):n.UiHelperUtil.isNumber(c)&&a.data?(this.updateInput(d,b,a.data),this.focusInputField("next",b)):this.updateInput(d,b,"")}this.dispatchInputChangeEvent()}handlePaste(a,b,c){let d=b[0];if(d&&n.UiHelperUtil.isNumber(d)){this.updateInput(a,c,d);let e=b.substring(1);if(c+1<this.length&&e.length){let a=this.numerics[c+1],b=a?this.getInputElement(a):void 0;b&&this.handlePaste(b,e,c+1)}else this.focusInputField("next",c)}else this.updateInput(a,c,"")}getInputElement(a){return a.shadowRoot?.querySelector("input")?a.shadowRoot.querySelector("input"):null}dispatchInputChangeEvent(){let a=this.values.join("");this.dispatchEvent(new CustomEvent("inputChange",{detail:a,bubbles:!0,composed:!0}))}};w.styles=[m.resetStyles,u],v([(0,l.property)({type:Number})],w.prototype,"length",void 0),v([(0,l.property)({type:String})],w.prototype,"otp",void 0),v([(0,e.state)()],w.prototype,"values",void 0),w=v([(0,j.customElement)("wui-otp")],w),a.i(603511);var x=a.i(289433);let y=t.css`
  wui-loading-spinner {
    margin: 9px auto;
  }

  .email-display,
  .email-display wui-text {
    max-width: 100%;
  }
`;var z=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let A=b=class extends c.LitElement{firstUpdated(){this.startOTPTimeout()}disconnectedCallback(){clearTimeout(this.OTPTimeout)}constructor(){super(),this.loading=!1,this.timeoutTimeLeft=x.W3mFrameHelpers.getTimeToNextEmailLogin(),this.error="",this.otp="",this.email=h.RouterController.state.data?.email,this.authConnector=f.ConnectorController.getAuthConnector()}render(){if(!this.email)throw Error("w3m-email-otp-widget: No email provided");let a=!!this.timeoutTimeLeft,b=this.getFooterLabels(a);return d.html`
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

        ${this.loading?d.html`<wui-loading-spinner size="xl" color="accent-primary"></wui-loading-spinner>`:d.html` <wui-flex flexDirection="column" alignItems="center" gap="2">
              <wui-otp
                dissabled
                length="6"
                @inputChange=${this.onOtpInputChange.bind(this)}
                .otp=${this.otp}
              ></wui-otp>
              ${this.error?d.html`
                    <wui-text variant="sm-regular" align="center" color="error">
                      ${this.error}. Try Again
                    </wui-text>
                  `:null}
            </wui-flex>`}

        <wui-flex alignItems="center" gap="2">
          <wui-text variant="sm-regular" color="secondary">${b.title}</wui-text>
          <wui-link @click=${this.onResendCode.bind(this)} .disabled=${a}>
            ${b.action}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}startOTPTimeout(){this.timeoutTimeLeft=x.W3mFrameHelpers.getTimeToNextEmailLogin(),this.OTPTimeout=setInterval(()=>{this.timeoutTimeLeft>0?this.timeoutTimeLeft=x.W3mFrameHelpers.getTimeToNextEmailLogin():clearInterval(this.OTPTimeout)},1e3)}async onOtpInputChange(a){try{!this.loading&&(this.otp=a.detail,this.shouldSubmitOnOtpChange()&&(this.loading=!0,await this.onOtpSubmit?.(this.otp)))}catch(a){this.error=g.CoreHelperUtil.parseError(a),this.loading=!1}}async onResendCode(){try{if(this.onOtpResend){if(!this.loading&&!this.timeoutTimeLeft){if(this.error="",this.otp="",!f.ConnectorController.getAuthConnector()||!this.email)throw Error("w3m-email-otp-widget: Unable to resend email");this.loading=!0,await this.onOtpResend(this.email),this.startOTPTimeout(),i.SnackController.showSuccess("Code email resent")}}else this.onStartOver&&this.onStartOver()}catch(a){i.SnackController.showError(a)}finally{this.loading=!1}}getFooterLabels(a){return this.onStartOver?{title:"Something wrong?",action:`Try again ${a?`in ${this.timeoutTimeLeft}s`:""}`}:{title:"Didn't receive it?",action:`Resend ${a?`in ${this.timeoutTimeLeft}s`:"Code"}`}}shouldSubmitOnOtpChange(){return this.authConnector&&this.otp.length===b.OTP_LENGTH}};A.OTP_LENGTH=6,A.styles=y,z([(0,e.state)()],A.prototype,"loading",void 0),z([(0,e.state)()],A.prototype,"timeoutTimeLeft",void 0),z([(0,e.state)()],A.prototype,"error",void 0),A=b=z([(0,j.customElement)("w3m-email-otp-widget")],A),a.s(["W3mEmailOtpWidget",0,A],589551)}];

//# sourceMappingURL=116m_%40reown_appkit-scaffold-ui_dist_esm_src_utils_w3m-email-otp-widget_index_1oc8n4q.js.map