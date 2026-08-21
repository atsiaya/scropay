module.exports=[372488,a=>{"use strict";a.i(188110),a.s([])},753762,691122,a=>{"use strict";var b=a.i(979837);let{I:c}=b._$LH;var d=a.i(550747);let e=(a,b)=>{let c=a._$AN;if(void 0===c)return!1;for(let a of c)a._$AO?.(b,!1),e(a,b);return!0},f=a=>{let b,c;do{if(void 0===(b=a._$AM))break;(c=b._$AN).delete(a),a=b}while(0===c?.size)},g=a=>{for(let b;b=a._$AM;a=b){let c=b._$AN;if(void 0===c)b._$AN=c=new Set;else if(c.has(a))break;c.add(a),j(b)}};function h(a){void 0!==this._$AN?(f(this),this._$AM=a,g(this)):this._$AM=a}function i(a,b=!1,c=0){let d=this._$AH,g=this._$AN;if(void 0!==g&&0!==g.size)if(b)if(Array.isArray(d))for(let a=c;a<d.length;a++)e(d[a],!1),f(d[a]);else null!=d&&(e(d,!1),f(d));else e(this,a)}let j=a=>{a.type==d.PartType.CHILD&&(a._$AP??=i,a._$AQ??=h)};class k extends d.Directive{constructor(){super(...arguments),this._$AN=void 0}_$AT(a,b,c){super._$AT(a,b,c),g(this),this.isConnected=a._$AU}_$AO(a,b=!0){a!==this.isConnected&&(this.isConnected=a,a?this.reconnected?.():this.disconnected?.()),b&&(e(this,a),f(this))}setValue(a){if(void 0===this._$Ct.strings)this._$Ct._$AI(a,this);else{let b=[...this._$Ct._$AH];b[this._$Ci]=a,this._$Ct._$AI(b,this,0)}}disconnected(){}reconnected(){}}class l{}let m=new WeakMap,n=(0,d.directive)(class extends k{render(a){return b.nothing}update(a,[c]){let d=c!==this.G;return d&&this.rt(void 0),(d||this.lt!==this.ct)&&(this.G=c,this.ht=a.options?.host,this.rt(this.ct=a.element)),b.nothing}rt(a){if(void 0!==this.G)if(this.isConnected||(a=void 0),"function"==typeof this.G){let b=this.ht??globalThis,c=m.get(b);void 0===c&&(c=new WeakMap,m.set(b,c)),void 0!==c.get(this.G)&&this.G.call(this.ht,void 0),c.set(this.G,a),void 0!==a&&this.G.call(this.ht,a)}else this.G.value=a}get lt(){return"function"==typeof this.G?m.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});a.s(["createRef",0,()=>new l,"ref",0,n],691122),a.s([],753762)},989186,a=>{"use strict";a.i(176996);var b=a.i(44886),c=a.i(979837);a.i(525181);var d=a.i(129349);a.i(876091);var e=a.i(960078);a.i(753762);var f=a.i(691122);a.i(808710),a.i(696585);var g=a.i(924968),h=a.i(526551),i=a.i(192361);let j=i.css`
  :host {
    position: relative;
    width: 100%;
    display: inline-flex;
    flex-direction: column;
    gap: ${({spacing:a})=>a[3]};
    color: ${({tokens:a})=>a.theme.textPrimary};
    caret-color: ${({tokens:a})=>a.core.textAccentPrimary};
  }

  .wui-input-text-container {
    position: relative;
    display: flex;
  }

  input {
    width: 100%;
    border-radius: ${({borderRadius:a})=>a[4]};
    color: inherit;
    background: transparent;
    border: 1px solid ${({tokens:a})=>a.theme.borderPrimary};
    caret-color: ${({tokens:a})=>a.core.textAccentPrimary};
    padding: ${({spacing:a})=>a[3]} ${({spacing:a})=>a[3]}
      ${({spacing:a})=>a[3]} ${({spacing:a})=>a[10]};
    font-size: ${({textSize:a})=>a.large};
    line-height: ${({typography:a})=>a["lg-regular"].lineHeight};
    letter-spacing: ${({typography:a})=>a["lg-regular"].letterSpacing};
    font-weight: ${({fontWeight:a})=>a.regular};
    font-family: ${({fontFamily:a})=>a.regular};
  }

  input[data-size='lg'] {
    padding: ${({spacing:a})=>a[4]} ${({spacing:a})=>a[3]}
      ${({spacing:a})=>a[4]} ${({spacing:a})=>a[10]};
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      border: 1px solid ${({tokens:a})=>a.theme.borderSecondary};
    }
  }

  input:disabled {
    cursor: unset;
    border: 1px solid ${({tokens:a})=>a.theme.borderPrimary};
  }

  input::placeholder {
    color: ${({tokens:a})=>a.theme.textSecondary};
  }

  input:focus:enabled {
    border: 1px solid ${({tokens:a})=>a.theme.borderSecondary};
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
    -webkit-box-shadow: 0px 0px 0px 4px ${({tokens:a})=>a.core.foregroundAccent040};
    -moz-box-shadow: 0px 0px 0px 4px ${({tokens:a})=>a.core.foregroundAccent040};
    box-shadow: 0px 0px 0px 4px ${({tokens:a})=>a.core.foregroundAccent040};
  }

  div.wui-input-text-container:has(input:disabled) {
    opacity: 0.5;
  }

  wui-icon.wui-input-text-left-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    left: ${({spacing:a})=>a[4]};
    color: ${({tokens:a})=>a.theme.iconDefault};
  }

  button.wui-input-text-submit-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:a})=>a[3]};
    width: 24px;
    height: 24px;
    border: none;
    background: transparent;
    border-radius: ${({borderRadius:a})=>a[2]};
    color: ${({tokens:a})=>a.core.textAccentPrimary};
  }

  button.wui-input-text-submit-button:disabled {
    opacity: 1;
  }

  button.wui-input-text-submit-button.loading wui-icon {
    animation: spin 1s linear infinite;
  }

  button.wui-input-text-submit-button:hover {
    background: ${({tokens:a})=>a.core.foregroundAccent010};
  }

  input:has(+ .wui-input-text-submit-button) {
    padding-right: ${({spacing:a})=>a[12]};
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  /* -- Keyframes --------------------------------------------------- */
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;var k=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let l=class extends b.LitElement{constructor(){super(...arguments),this.inputElementRef=(0,f.createRef)(),this.disabled=!1,this.loading=!1,this.placeholder="",this.type="text",this.value="",this.size="md"}render(){return c.html` <div class="wui-input-text-container">
        ${this.templateLeftIcon()}
        <input
          data-size=${this.size}
          ${(0,f.ref)(this.inputElementRef)}
          data-testid="wui-input-text"
          type=${this.type}
          enterkeyhint=${(0,e.ifDefined)(this.enterKeyHint)}
          ?disabled=${this.disabled}
          placeholder=${this.placeholder}
          @input=${this.dispatchInputChangeEvent.bind(this)}
          @keydown=${this.onKeyDown}
          .value=${this.value||""}
        />
        ${this.templateSubmitButton()}
        <slot class="wui-input-text-slot"></slot>
      </div>
      ${this.templateError()} ${this.templateWarning()}`}templateLeftIcon(){return this.icon?c.html`<wui-icon
        class="wui-input-text-left-icon"
        size="md"
        data-size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}templateSubmitButton(){return this.onSubmit?c.html`<button
        class="wui-input-text-submit-button ${this.loading?"loading":""}"
        @click=${this.onSubmit?.bind(this)}
        ?disabled=${this.disabled||this.loading}
      >
        ${this.loading?c.html`<wui-icon name="spinner" size="md"></wui-icon>`:c.html`<wui-icon name="chevronRight" size="md"></wui-icon>`}
      </button>`:null}templateError(){return this.errorText?c.html`<wui-text variant="sm-regular" color="error">${this.errorText}</wui-text>`:null}templateWarning(){return this.warningText?c.html`<wui-text variant="sm-regular" color="warning">${this.warningText}</wui-text>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};l.styles=[g.resetStyles,g.elementStyles,j],k([(0,d.property)()],l.prototype,"icon",void 0),k([(0,d.property)({type:Boolean})],l.prototype,"disabled",void 0),k([(0,d.property)({type:Boolean})],l.prototype,"loading",void 0),k([(0,d.property)()],l.prototype,"placeholder",void 0),k([(0,d.property)()],l.prototype,"type",void 0),k([(0,d.property)()],l.prototype,"value",void 0),k([(0,d.property)()],l.prototype,"errorText",void 0),k([(0,d.property)()],l.prototype,"warningText",void 0),k([(0,d.property)()],l.prototype,"onSubmit",void 0),k([(0,d.property)()],l.prototype,"size",void 0),k([(0,d.property)({attribute:!1})],l.prototype,"onKeyDown",void 0),l=k([(0,h.customElement)("wui-input-text")],l),a.s([],989186)},653667,a=>{"use strict";a.i(989186),a.s([])},14277,a=>{"use strict";a.i(176996);var b=a.i(44886),c=a.i(979837);a.i(525181);var d=a.i(129349),e=a.i(29853);a.i(808710),a.i(508423),a.i(696585),a.i(307465);var f=a.i(924968),g=a.i(526551),h=a.i(192361);let i=h.css`
  :host {
    width: 100%;
  }

  button {
    padding: ${({spacing:a})=>a[3]};
    display: flex;
    gap: ${({spacing:a})=>a[3]};
    justify-content: space-between;
    width: 100%;
    border-radius: ${({borderRadius:a})=>a[4]};
    background-color: transparent;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
    }
  }

  button:focus-visible:enabled {
    background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
    box-shadow: 0 0 0 4px ${({tokens:a})=>a.core.foregroundAccent040};
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image,
  wui-icon {
    width: ${({spacing:a})=>a[10]};
    height: ${({spacing:a})=>a[10]};
  }

  wui-image {
    border-radius: ${({borderRadius:a})=>a[16]};
  }

  .token-name-container {
    flex: 1;
  }
`;var j=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let k=class extends b.LitElement{constructor(){super(...arguments),this.tokenName="",this.tokenImageUrl="",this.tokenValue=0,this.tokenAmount="0.0",this.tokenCurrency="",this.clickable=!1}render(){return c.html`
      <button data-clickable=${String(this.clickable)}>
        <wui-flex gap="2" alignItems="center">
          ${this.visualTemplate()}
          <wui-flex
            flexDirection="column"
            justifyContent="space-between"
            gap="1"
            class="token-name-container"
          >
            <wui-text variant="md-regular" color="primary" lineClamp="1">
              ${this.tokenName}
            </wui-text>
            <wui-text variant="sm-regular-mono" color="secondary">
              ${e.NumberUtil.formatNumberToLocalString(this.tokenAmount,4)} ${this.tokenCurrency}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          justifyContent="space-between"
          gap="1"
          alignItems="flex-end"
          width="auto"
        >
          <wui-text variant="md-regular-mono" color="primary"
            >$${this.tokenValue.toFixed(2)}</wui-text
          >
          <wui-text variant="sm-regular-mono" color="secondary">
            ${e.NumberUtil.formatNumberToLocalString(this.tokenAmount,4)}
          </wui-text>
        </wui-flex>
      </button>
    `}visualTemplate(){return this.tokenName&&this.tokenImageUrl?c.html`<wui-image alt=${this.tokenName} src=${this.tokenImageUrl}></wui-image>`:c.html`<wui-icon name="coinPlaceholder" color="default"></wui-icon>`}};k.styles=[f.resetStyles,f.elementStyles,i],j([(0,d.property)()],k.prototype,"tokenName",void 0),j([(0,d.property)()],k.prototype,"tokenImageUrl",void 0),j([(0,d.property)({type:Number})],k.prototype,"tokenValue",void 0),j([(0,d.property)()],k.prototype,"tokenAmount",void 0),j([(0,d.property)()],k.prototype,"tokenCurrency",void 0),j([(0,d.property)({type:Boolean})],k.prototype,"clickable",void 0),k=j([(0,g.customElement)("wui-list-token")],k),a.s([],14277)},540141,a=>{"use strict";a.i(176996);var b=a.i(44886),c=a.i(979837);a.i(525181);var d=a.i(129349);a.i(508423);var e=a.i(924968),f=a.i(415274),g=a.i(526551),h=a.i(192361);let i=h.css`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
    border-radius: ${({borderRadius:a})=>a[16]};
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  :host([data-variant='generated']) {
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var j=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let k=class extends b.LitElement{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0,this.size="xl"}render(){let a={inherit:"inherit",xxs:"3",xs:"5",sm:"6",md:"8",mdl:"8",lg:"10",xl:"16",xxl:"20"};return this.style.cssText=`
    --local-width: var(--apkt-spacing-${a[this.size??"xl"]});
    --local-height: var(--apkt-spacing-${a[this.size??"xl"]});
    `,c.html`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",c.html`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";let a=f.UiHelperUtil.generateAvatarColors(this.address);return this.style.cssText+=`
 ${a}`,null}return this.dataset.variant="default",null}};k.styles=[e.resetStyles,i],j([(0,d.property)()],k.prototype,"imageSrc",void 0),j([(0,d.property)()],k.prototype,"alt",void 0),j([(0,d.property)()],k.prototype,"address",void 0),j([(0,d.property)()],k.prototype,"size",void 0),k=j([(0,g.customElement)("wui-avatar")],k),a.s([],540141)}];

//# sourceMappingURL=116m_1jgsd5b._.js.map