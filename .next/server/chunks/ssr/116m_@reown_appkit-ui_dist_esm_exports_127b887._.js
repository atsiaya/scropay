module.exports=[763097,a=>{"use strict";a.i(176996);var b=a.i(44886),c=a.i(979837);a.i(525181);var d=a.i(129349);a.i(808710),a.i(508423),a.i(219756),a.i(696585),a.i(307465);var e=a.i(924968),f=a.i(526551),g=a.i(192361);let h=g.css`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: ${({spacing:a})=>a[1]};
    transition: background-color ${({durations:a})=>a.lg}
      ${({easings:a})=>a["ease-out-power-2"]};
    will-change: background-color;
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
    border-radius: ${({borderRadius:a})=>a[32]};
  }

  wui-image {
    border-radius: ${({borderRadius:a})=>a[32]};
  }

  wui-text {
    padding-left: ${({spacing:a})=>a[1]};
    padding-right: ${({spacing:a})=>a[1]};
  }

  .left-icon-container {
    width: 24px;
    height: 24px;
    justify-content: center;
    align-items: center;
  }

  .left-image-container {
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .chain-image {
    position: absolute;
    border: 1px solid ${({tokens:a})=>a.theme.foregroundPrimary};
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

  button[data-size='lg'] .token-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='md'] .token-image {
    width: 20px;
    height: 20px;
  }

  button[data-size='sm'] .token-image {
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

  button[data-size='lg'] .chain-image {
    width: 12px;
    height: 12px;
    bottom: 2px;
    right: -4px;
  }

  button[data-size='md'] .chain-image {
    width: 10px;
    height: 10px;
    bottom: 2px;
    right: -4px;
  }

  button[data-size='sm'] .chain-image {
    width: 8px;
    height: 8px;
    bottom: 2px;
    right: -3px;
  }

  /* -- Focus states --------------------------------------------------- */
  button:focus-visible:enabled {
    background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
    box-shadow: 0 0 0 4px ${({tokens:a})=>a.core.foregroundAccent040};
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) {
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
`;var i=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let j={lg:"lg-regular",md:"lg-regular",sm:"md-regular"},k={lg:"lg",md:"md",sm:"sm"},l=class extends b.LitElement{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.text="",this.loading=!1}render(){return this.loading?c.html` <wui-flex alignItems="center" gap="01" padding="01">
        <wui-shimmer width="20px" height="20px"></wui-shimmer>
        <wui-shimmer width="32px" height="18px" borderRadius="4xs"></wui-shimmer>
      </wui-flex>`:c.html`
      <button ?disabled=${this.disabled} data-size=${this.size}>
        ${this.imageTemplate()} ${this.textTemplate()}
      </button>
    `}imageTemplate(){if(this.imageSrc&&this.chainImageSrc)return c.html`<wui-flex class="left-image-container">
        <wui-image src=${this.imageSrc} class="token-image"></wui-image>
        <wui-image src=${this.chainImageSrc} class="chain-image"></wui-image>
      </wui-flex>`;if(this.imageSrc)return c.html`<wui-image src=${this.imageSrc} class="token-image"></wui-image>`;let a=k[this.size];return c.html`<wui-flex class="left-icon-container">
      <wui-icon size=${a} name="networkPlaceholder"></wui-icon>
    </wui-flex>`}textTemplate(){let a=j[this.size];return c.html`<wui-text color="primary" variant=${a}
      >${this.text}</wui-text
    >`}};l.styles=[e.resetStyles,e.elementStyles,h],i([(0,d.property)()],l.prototype,"size",void 0),i([(0,d.property)()],l.prototype,"imageSrc",void 0),i([(0,d.property)()],l.prototype,"chainImageSrc",void 0),i([(0,d.property)({type:Boolean})],l.prototype,"disabled",void 0),i([(0,d.property)()],l.prototype,"text",void 0),i([(0,d.property)({type:Boolean})],l.prototype,"loading",void 0),l=i([(0,f.customElement)("wui-token-button")],l),a.s([],763097)},813871,a=>{"use strict";a.i(176996);var b=a.i(44886),c=a.i(979837);a.i(525181);var d=a.i(129349);a.i(753762);var e=a.i(691122),f=a.i(192361),g=a.i(924968),h=a.i(415274),i=a.i(526551);let j=f.css`
  :host {
    position: relative;
    display: inline-block;
  }

  :host([data-error='true']) > input {
    color: ${({tokens:a})=>a.core.textError};
  }

  :host([data-error='false']) > input {
    color: ${({tokens:a})=>a.theme.textPrimary};
  }

  input {
    background: transparent;
    height: auto;
    box-sizing: border-box;
    color: ${({tokens:a})=>a.theme.textPrimary};
    font-feature-settings: 'case' on;
    font-size: ${({textSize:a})=>a.h4};
    caret-color: ${({tokens:a})=>a.core.backgroundAccentPrimary};
    line-height: ${({typography:a})=>a["h4-regular-mono"].lineHeight};
    letter-spacing: ${({typography:a})=>a["h4-regular-mono"].letterSpacing};
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
    font-family: ${({fontFamily:a})=>a.mono};
  }

  :host([data-width-variant='auto']) input {
    width: 100%;
  }

  :host([data-width-variant='fit']) input {
    width: 1ch;
  }

  .wui-input-amount-fit-mirror {
    position: absolute;
    visibility: hidden;
    white-space: pre;
    font-size: var(--local-font-size);
    line-height: 130%;
    letter-spacing: -1.28px;
    font-family: ${({fontFamily:a})=>a.mono};
  }

  .wui-input-amount-fit-width {
    display: inline-block;
    position: relative;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input::placeholder {
    color: ${({tokens:a})=>a.theme.textSecondary};
  }
`;var k=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let l=class extends b.LitElement{constructor(){super(...arguments),this.inputElementRef=(0,e.createRef)(),this.disabled=!1,this.value="",this.placeholder="0",this.widthVariant="auto",this.maxDecimals=void 0,this.maxIntegers=void 0,this.fontSize="h4",this.error=!1}firstUpdated(){this.resizeInput()}updated(){this.style.setProperty("--local-font-size",f.vars.textSize[this.fontSize]),this.resizeInput()}render(){return(this.dataset.widthVariant=this.widthVariant,this.dataset.error=String(this.error),this.inputElementRef?.value&&this.value&&(this.inputElementRef.value.value=this.value),"auto"===this.widthVariant)?this.inputTemplate():c.html`
      <div class="wui-input-amount-fit-width">
        <span class="wui-input-amount-fit-mirror"></span>
        ${this.inputTemplate()}
      </div>
    `}inputTemplate(){return c.html`<input
      ${(0,e.ref)(this.inputElementRef)}
      type="text"
      inputmode="decimal"
      pattern="[0-9,.]*"
      placeholder=${this.placeholder}
      ?disabled=${this.disabled}
      autofocus
      value=${this.value??""}
      @input=${this.dispatchInputChangeEvent.bind(this)}
    />`}dispatchInputChangeEvent(){this.inputElementRef.value&&(this.inputElementRef.value.value=h.UiHelperUtil.maskInput({value:this.inputElementRef.value.value,decimals:this.maxDecimals,integers:this.maxIntegers}),this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value.value,bubbles:!0,composed:!0})),this.resizeInput())}resizeInput(){if("fit"===this.widthVariant){let a=this.inputElementRef.value;if(a){let b=a.previousElementSibling;b&&(b.textContent=a.value||"0",a.style.width=`${b.offsetWidth}px`)}}}};l.styles=[g.resetStyles,g.elementStyles,j],k([(0,d.property)({type:Boolean})],l.prototype,"disabled",void 0),k([(0,d.property)({type:String})],l.prototype,"value",void 0),k([(0,d.property)({type:String})],l.prototype,"placeholder",void 0),k([(0,d.property)({type:String})],l.prototype,"widthVariant",void 0),k([(0,d.property)({type:Number})],l.prototype,"maxDecimals",void 0),k([(0,d.property)({type:Number})],l.prototype,"maxIntegers",void 0),k([(0,d.property)({type:String})],l.prototype,"fontSize",void 0),k([(0,d.property)({type:Boolean})],l.prototype,"error",void 0),l=k([(0,i.customElement)("wui-input-amount")],l),a.s([],813871)}];

//# sourceMappingURL=116m_%40reown_appkit-ui_dist_esm_exports_127b887._.js.map