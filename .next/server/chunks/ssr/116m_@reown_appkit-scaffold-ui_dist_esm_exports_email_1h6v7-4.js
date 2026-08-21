module.exports=[185364,a=>{"use strict";var b=a.i(34525),c=a.i(166920),d=a.i(456594),e=a.i(649637),f=a.i(950802),g=a.i(412631),h=a.i(682762),i=a.i(475744);a.i(564205);var j=a.i(526551),k=a.i(589551);let l=class extends k.W3mEmailOtpWidget{constructor(){super(...arguments),this.onOtpSubmit=async a=>{try{if(this.authConnector){let d=b.ChainController.state.activeChain,j=c.ConnectionController.getConnections(d),k=g.OptionsController.state.remoteFeatures?.multiWallet,l=j.length>0;if(await this.authConnector.provider.connectOtp({otp:a}),e.EventsController.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),d)await c.ConnectionController.connectExternal(this.authConnector,d);else throw Error("Active chain is not set on ChainController");if(g.OptionsController.state.remoteFeatures?.emailCapture)return;if(g.OptionsController.state.siwx)return void f.ModalController.close();if(l&&k){h.RouterController.replace("ProfileWallets"),i.SnackController.showSuccess("New Wallet Added");return}f.ModalController.close()}}catch(a){throw e.EventsController.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL",properties:{message:d.CoreHelperUtil.parseError(a)}}),a}},this.onOtpResend=async a=>{this.authConnector&&(await this.authConnector.provider.connectEmail({email:a}),e.EventsController.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}))}}};l=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}([(0,j.customElement)("w3m-email-verify-otp-view")],l),a.s(["W3mEmailVerifyOtpView",0,l],847514),a.i(176996);var m=a.i(44886),n=a.i(979837);a.i(525181);var o=a.i(905653),p=a.i(661107);a.i(735803),a.i(372488),a.i(405239),a.i(603511);var q=a.i(192361);let r=q.css`
  wui-icon-box {
    height: ${({spacing:a})=>a["16"]};
    width: ${({spacing:a})=>a["16"]};
  }
`;var s=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let t=class extends m.LitElement{constructor(){super(),this.email=h.RouterController.state.data?.email,this.authConnector=p.ConnectorController.getAuthConnector(),this.loading=!1,this.listenForDeviceApproval()}render(){if(!this.email)throw Error("w3m-email-verify-device-view: No email provided");if(!this.authConnector)throw Error("w3m-email-verify-device-view: No auth connector provided");return n.html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["6","3","6","3"]}
        gap="4"
      >
        <wui-icon-box size="xl" color="accent-primary" icon="sealCheck"></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="3">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="md-regular" color="primary">
              Approve the login link we sent to
            </wui-text>
            <wui-text variant="md-regular" color="primary"><b>${this.email}</b></wui-text>
          </wui-flex>

          <wui-text variant="sm-regular" color="secondary" align="center">
            The code expires in 20 minutes
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section" gap="2">
            <wui-text variant="sm-regular" color="primary" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}async listenForDeviceApproval(){if(this.authConnector)try{await this.authConnector.provider.connectDevice(),e.EventsController.sendEvent({type:"track",event:"DEVICE_REGISTERED_FOR_EMAIL"}),e.EventsController.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),h.RouterController.replace("EmailVerifyOtp",{email:this.email})}catch(a){h.RouterController.goBack()}}async onResendCode(){try{if(!this.loading){if(!this.authConnector||!this.email)throw Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,await this.authConnector.provider.connectEmail({email:this.email}),this.listenForDeviceApproval(),i.SnackController.showSuccess("Code email resent")}}catch(a){i.SnackController.showError(a)}finally{this.loading=!1}}};t.styles=r,s([(0,o.state)()],t.prototype,"loading",void 0),t=s([(0,j.customElement)("w3m-email-verify-device-view")],t),a.s(["W3mEmailVerifyDeviceView",0,t],99621);var u=m;a.i(753762);var v=a.i(691122);a.i(782682),a.i(892701);var w=a.i(77439);let x=w.css`
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`;var y=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let z=class extends u.LitElement{constructor(){super(...arguments),this.formRef=(0,v.createRef)(),this.initialEmail=h.RouterController.state.data?.email??"",this.redirectView=h.RouterController.state.data?.redirectView,this.email="",this.loading=!1}firstUpdated(){this.formRef.value?.addEventListener("keydown",a=>{"Enter"===a.key&&this.onSubmitEmail(a)})}render(){return n.html`
      <wui-flex flexDirection="column" padding="4" gap="4">
        <form ${(0,v.ref)(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
          <wui-email-input
            value=${this.initialEmail}
            .disabled=${this.loading}
            @inputChange=${this.onEmailInputChange.bind(this)}
          >
          </wui-email-input>
          <input type="submit" hidden />
        </form>
        ${this.buttonsTemplate()}
      </wui-flex>
    `}onEmailInputChange(a){this.email=a.detail}async onSubmitEmail(a){try{if(this.loading)return;this.loading=!0,a.preventDefault();let b=p.ConnectorController.getAuthConnector();if(!b)throw Error("w3m-update-email-wallet: Auth connector not found");let c=await b.provider.updateEmail({email:this.email});e.EventsController.sendEvent({type:"track",event:"EMAIL_EDIT"}),"VERIFY_SECONDARY_OTP"===c.action?h.RouterController.push("UpdateEmailSecondaryOtp",{email:this.initialEmail,newEmail:this.email,redirectView:this.redirectView}):h.RouterController.push("UpdateEmailPrimaryOtp",{email:this.initialEmail,newEmail:this.email,redirectView:this.redirectView})}catch(a){i.SnackController.showError(a),this.loading=!1}}buttonsTemplate(){let a=!this.loading&&this.email.length>3&&this.email!==this.initialEmail;return this.redirectView?n.html`
      <wui-flex gap="3">
        <wui-button size="md" variant="neutral" fullWidth @click=${h.RouterController.goBack}>
          Cancel
        </wui-button>

        <wui-button
          size="md"
          variant="accent-primary"
          fullWidth
          @click=${this.onSubmitEmail.bind(this)}
          .disabled=${!a}
          .loading=${this.loading}
        >
          Save
        </wui-button>
      </wui-flex>
    `:n.html`
        <wui-button
          size="md"
          variant="accent-primary"
          fullWidth
          @click=${this.onSubmitEmail.bind(this)}
          .disabled=${!a}
          .loading=${this.loading}
        >
          Save
        </wui-button>
      `}};z.styles=x,y([(0,o.state)()],z.prototype,"email",void 0),y([(0,o.state)()],z.prototype,"loading",void 0),z=y([(0,j.customElement)("w3m-update-email-wallet-view")],z),a.s(["W3mUpdateEmailWalletView",0,z],581195);var A=k;let B=class extends A.W3mEmailOtpWidget{constructor(){super(),this.email=h.RouterController.state.data?.email,this.onOtpSubmit=async a=>{try{this.authConnector&&(await this.authConnector.provider.updateEmailPrimaryOtp({otp:a}),e.EventsController.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),h.RouterController.replace("UpdateEmailSecondaryOtp",h.RouterController.state.data))}catch(a){throw e.EventsController.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL",properties:{message:d.CoreHelperUtil.parseError(a)}}),a}},this.onStartOver=()=>{h.RouterController.replace("UpdateEmailWallet",h.RouterController.state.data)}}};B=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}([(0,j.customElement)("w3m-update-email-primary-otp-view")],B),a.s(["W3mUpdateEmailPrimaryOtpView",0,B],484491);var C=k;let D=class extends C.W3mEmailOtpWidget{constructor(){super(),this.email=h.RouterController.state.data?.newEmail,this.redirectView=h.RouterController.state.data?.redirectView,this.onOtpSubmit=async a=>{try{this.authConnector&&(await this.authConnector.provider.updateEmailSecondaryOtp({otp:a}),e.EventsController.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),this.redirectView&&h.RouterController.reset(this.redirectView))}catch(a){throw e.EventsController.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL",properties:{message:d.CoreHelperUtil.parseError(a)}}),a}},this.onStartOver=()=>{h.RouterController.replace("UpdateEmailWallet",h.RouterController.state.data)}}};D=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}([(0,j.customElement)("w3m-update-email-secondary-otp-view")],D),a.s(["W3mUpdateEmailSecondaryOtpView",0,D],198740);var E=m,F=a.i(918428),G=a.i(512705),H=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let I=class extends E.LitElement{constructor(){super(),this.authConnector=p.ConnectorController.getAuthConnector(),this.isEmailEnabled=g.OptionsController.state.remoteFeatures?.email,this.isAuthEnabled=this.checkIfAuthEnabled(p.ConnectorController.state.connectors),this.connectors=p.ConnectorController.state.connectors,p.ConnectorController.subscribeKey("connectors",a=>{this.connectors=a,this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors)})}render(){if(!this.isEmailEnabled)throw Error("w3m-email-login-view: Email is not enabled");if(!this.isAuthEnabled)throw Error("w3m-email-login-view: No auth connector provided");return n.html`<wui-flex flexDirection="column" .padding=${["1","3","3","3"]} gap="4">
      <w3m-email-login-widget></w3m-email-login-widget>
    </wui-flex> `}checkIfAuthEnabled(a){let b=a.filter(a=>a.type===G.ConstantsUtil.CONNECTOR_TYPE_AUTH).map(a=>a.chain);return F.ConstantsUtil.AUTH_CONNECTOR_SUPPORTED_CHAINS.some(a=>b.includes(a))}};H([(0,o.state)()],I.prototype,"connectors",void 0),I=H([(0,j.customElement)("w3m-email-login-view")],I),a.s(["W3mEmailLoginView",0,I],947566),a.s([],701811),a.i(701811),a.i(847514),a.i(99621),a.i(581195),a.i(484491),a.i(198740),a.i(947566),a.s(["W3mEmailLoginView",0,I,"W3mEmailOtpWidget",()=>k.W3mEmailOtpWidget,"W3mEmailVerifyDeviceView",0,t,"W3mEmailVerifyOtpView",0,l,"W3mUpdateEmailPrimaryOtpView",0,B,"W3mUpdateEmailSecondaryOtpView",0,D,"W3mUpdateEmailWalletView",0,z],185364)}];

//# sourceMappingURL=116m_%40reown_appkit-scaffold-ui_dist_esm_exports_email_1h6v7-4.js.map