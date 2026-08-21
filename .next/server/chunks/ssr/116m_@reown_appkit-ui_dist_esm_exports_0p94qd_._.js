module.exports=[855019,a=>{"use strict";a.i(508423),a.s([])},813871,a=>{"use strict";a.i(176996);var b=a.i(44886),c=a.i(979837);a.i(525181);var d=a.i(129349);a.i(753762);var e=a.i(691122),f=a.i(192361),g=a.i(924968),h=a.i(415274),i=a.i(526551);let j=f.css`
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

//# sourceMappingURL=116m_%40reown_appkit-ui_dist_esm_exports_0p94qd_._.js.map