module.exports=[307979,a=>{"use strict";a.i(176996);var b=a.i(44886),c=a.i(979837);a.i(525181);var d=a.i(129349),e=a.i(905653),f=a.i(29853),g=a.i(34525),h=a.i(456594),i=a.i(649637),j=a.i(950802),k=a.i(682762),l=a.i(88921),m=a.i(932774);a.i(564205);var n=a.i(526551);a.i(782682),a.i(735803),a.i(644344),a.i(372488),a.i(603511);var o=a.i(455434),p=b,q=a.i(39957);a.i(904625),a.i(670905);var r=a.i(192361);let s=r.css`
  :host {
    width: 100%;
  }

  .details-container > wui-flex {
    background: ${({tokens:a})=>a.theme.foregroundPrimary};
    border-radius: ${({borderRadius:a})=>a["3"]};
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: ${({spacing:a})=>a["3"]};
    border-radius: ${({borderRadius:a})=>a["3"]};
    cursor: pointer;
  }

  .details-content-container {
    padding: ${({spacing:a})=>a["2"]};
    padding-top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: ${({spacing:a})=>a["3"]};
    padding-left: ${({spacing:a})=>a["3"]};
    padding-right: ${({spacing:a})=>a["2"]};
    border-radius: calc(
      ${({borderRadius:a})=>a["1"]} + ${({borderRadius:a})=>a["1"]}
    );
    background: ${({tokens:a})=>a.theme.foregroundPrimary};
  }

  .details-row-title {
    white-space: nowrap;
  }

  .details-row.provider-free-row {
    padding-right: ${({spacing:a})=>a["2"]};
  }
`;var t=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let u=q.ConstantsUtil.CONVERT_SLIPPAGE_TOLERANCE,v=class extends p.LitElement{constructor(){super(),this.unsubscribe=[],this.networkName=g.ChainController.state.activeCaipNetwork?.name,this.detailsOpen=!1,this.sourceToken=l.SwapController.state.sourceToken,this.toToken=l.SwapController.state.toToken,this.toTokenAmount=l.SwapController.state.toTokenAmount,this.sourceTokenPriceInUSD=l.SwapController.state.sourceTokenPriceInUSD,this.toTokenPriceInUSD=l.SwapController.state.toTokenPriceInUSD,this.priceImpact=l.SwapController.state.priceImpact,this.maxSlippage=l.SwapController.state.maxSlippage,this.networkTokenSymbol=l.SwapController.state.networkTokenSymbol,this.inputError=l.SwapController.state.inputError,this.unsubscribe.push(l.SwapController.subscribe(a=>{this.sourceToken=a.sourceToken,this.toToken=a.toToken,this.toTokenAmount=a.toTokenAmount,this.priceImpact=a.priceImpact,this.maxSlippage=a.maxSlippage,this.sourceTokenPriceInUSD=a.sourceTokenPriceInUSD,this.toTokenPriceInUSD=a.toTokenPriceInUSD,this.inputError=a.inputError}))}render(){let a=this.toTokenAmount&&this.maxSlippage?f.NumberUtil.bigNumber(this.toTokenAmount).minus(this.maxSlippage).toString():null;if(!this.sourceToken||!this.toToken||this.inputError)return null;let b=this.sourceTokenPriceInUSD&&this.toTokenPriceInUSD?1/this.toTokenPriceInUSD*this.sourceTokenPriceInUSD:0;return c.html`
      <wui-flex flexDirection="column" alignItems="center" gap="01" class="details-container">
        <wui-flex flexDirection="column">
          <button @click=${this.toggleDetails.bind(this)}>
            <wui-flex justifyContent="space-between" .padding=${["0","2","0","2"]}>
              <wui-flex justifyContent="flex-start" flexGrow="1" gap="2">
                <wui-text variant="sm-regular" color="primary">
                  1 ${this.sourceToken.symbol} =
                  ${f.NumberUtil.formatNumberToLocalString(b,3)}
                  ${this.toToken.symbol}
                </wui-text>
                <wui-text variant="sm-regular" color="secondary">
                  $${f.NumberUtil.formatNumberToLocalString(this.sourceTokenPriceInUSD)}
                </wui-text>
              </wui-flex>
              <wui-icon name="chevronBottom"></wui-icon>
            </wui-flex>
          </button>
          ${this.detailsOpen?c.html`
                <wui-flex flexDirection="column" gap="2" class="details-content-container">
                  ${this.priceImpact?c.html` <wui-flex flexDirection="column" gap="2">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-flex alignItems="center" gap="2">
                            <wui-text
                              class="details-row-title"
                              variant="sm-regular"
                              color="secondary"
                            >
                              Price impact
                            </wui-text>
                            <w3m-tooltip-trigger
                              text="Price impact reflects the change in market price due to your trade"
                            >
                              <wui-icon size="sm" color="default" name="info"></wui-icon>
                            </w3m-tooltip-trigger>
                          </wui-flex>
                          <wui-flex>
                            <wui-text variant="sm-regular" color="secondary">
                              ${f.NumberUtil.formatNumberToLocalString(this.priceImpact,3)}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  ${this.maxSlippage&&this.sourceToken.symbol?c.html`<wui-flex flexDirection="column" gap="2">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-flex alignItems="center" gap="2">
                            <wui-text
                              class="details-row-title"
                              variant="sm-regular"
                              color="secondary"
                            >
                              Max. slippage
                            </wui-text>
                            <w3m-tooltip-trigger
                              text=${`Max slippage sets the minimum amount you must receive for the transaction to proceed. ${a?`Transaction will be reversed if you receive less than ${f.NumberUtil.formatNumberToLocalString(a,6)} ${this.toToken.symbol} due to price changes.`:""}`}
                            >
                              <wui-icon size="sm" color="default" name="info"></wui-icon>
                            </w3m-tooltip-trigger>
                          </wui-flex>
                          <wui-flex>
                            <wui-text variant="sm-regular" color="secondary">
                              ${f.NumberUtil.formatNumberToLocalString(this.maxSlippage,6)}
                              ${this.toToken.symbol} ${u}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  <wui-flex flexDirection="column" gap="2">
                    <wui-flex
                      justifyContent="space-between"
                      alignItems="center"
                      class="details-row provider-free-row"
                    >
                      <wui-flex alignItems="center" gap="2">
                        <wui-text class="details-row-title" variant="sm-regular" color="secondary">
                          Provider fee
                        </wui-text>
                      </wui-flex>
                      <wui-flex>
                        <wui-text variant="sm-regular" color="secondary">0.85%</wui-text>
                      </wui-flex>
                    </wui-flex>
                  </wui-flex>
                </wui-flex>
              `:null}
        </wui-flex>
      </wui-flex>
    `}toggleDetails(){this.detailsOpen=!this.detailsOpen}};v.styles=[s],t([(0,e.state)()],v.prototype,"networkName",void 0),t([(0,d.property)()],v.prototype,"detailsOpen",void 0),t([(0,e.state)()],v.prototype,"sourceToken",void 0),t([(0,e.state)()],v.prototype,"toToken",void 0),t([(0,e.state)()],v.prototype,"toTokenAmount",void 0),t([(0,e.state)()],v.prototype,"sourceTokenPriceInUSD",void 0),t([(0,e.state)()],v.prototype,"toTokenPriceInUSD",void 0),t([(0,e.state)()],v.prototype,"priceImpact",void 0),t([(0,e.state)()],v.prototype,"maxSlippage",void 0),t([(0,e.state)()],v.prototype,"networkTokenSymbol",void 0),t([(0,e.state)()],v.prototype,"inputError",void 0),v=t([(0,n.customElement)("w3m-swap-details")],v);var w=b;a.i(610594);let x=r.css`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: ${({borderRadius:a})=>a["5"]};
    padding: ${({spacing:a})=>a["5"]};
    padding-right: ${({spacing:a})=>a["3"]};
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
    box-shadow: inset 0px 0px 0px 1px ${({tokens:a})=>a.theme.foregroundPrimary};
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    position: relative;
  }

  wui-shimmer.market-value {
    opacity: 0;
  }

  :host > wui-flex > svg.input_mask {
    position: absolute;
    inset: 0;
    z-index: 5;
  }

  :host wui-flex .input_mask__border,
  :host wui-flex .input_mask__background {
    transition: fill ${({durations:a})=>a.md}
      ${({easings:a})=>a["ease-out-power-1"]};
    will-change: fill;
  }

  :host wui-flex .input_mask__border {
    fill: ${({tokens:a})=>a.core.glass010};
  }

  :host wui-flex .input_mask__background {
    fill: ${({tokens:a})=>a.theme.foregroundPrimary};
  }
`;var y=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let z=class extends w.LitElement{constructor(){super(...arguments),this.target="sourceToken"}render(){return c.html`
      <wui-flex class justifyContent="space-between">
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
          gap="1"
        >
          <wui-shimmer width="80px" height="40px" rounded variant="light"></wui-shimmer>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `}templateTokenSelectButton(){return c.html`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="1"
      >
        <wui-shimmer width="80px" height="40px" rounded variant="light"></wui-shimmer>
      </wui-flex>
    `}};z.styles=[x],y([(0,d.property)()],z.prototype,"target",void 0),z=y([(0,n.customElement)("w3m-swap-input-skeleton")],z);var A=b;let B={numericInputKeyDown(a,b,c){let d=a.metaKey||a.ctrlKey,e=a.key,f=e.toLocaleLowerCase(),g=","===e,h="."===e,i=e>="0"&&e<="9";d||"a"!==f&&"c"!==f&&"v"!==f&&"x"!==f||a.preventDefault(),"0"!==b||g||h||"0"!==e||a.preventDefault(),"0"===b&&i&&(c(e),a.preventDefault()),(g||h)&&(b||(c("0."),a.preventDefault()),(b?.includes(".")||b?.includes(","))&&a.preventDefault()),i||["Backspace","Meta","Ctrl","a","A","c","C","x","X","v","V","ArrowLeft","ArrowRight","Tab"].includes(e)||h||g||a.preventDefault()}};a.i(763097);let C=r.css`
  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: ${({borderRadius:a})=>a["5"]};
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
    padding: ${({spacing:a})=>a["5"]};
    padding-right: ${({spacing:a})=>a["3"]};
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    box-shadow: inset 0px 0px 0px 1px ${({tokens:a})=>a.theme.foregroundPrimary};
    position: relative;
    transition: box-shadow ${({easings:a})=>a["ease-out-power-1"]}
      ${({durations:a})=>a.lg};
    will-change: background-color;
  }

  :host wui-flex.focus {
    box-shadow: inset 0px 0px 0px 1px ${({tokens:a})=>a.core.glass010};
  }

  :host > wui-flex .swap-input,
  :host > wui-flex .swap-token-button {
    z-index: 10;
  }

  :host > wui-flex .swap-input {
    -webkit-mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
    mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
  }

  :host > wui-flex .swap-input input {
    background: none;
    border: none;
    height: 42px;
    width: 100%;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    letter-spacing: -1.28px;
    outline: none;
    caret-color: ${({tokens:a})=>a.core.textAccentPrimary};
    color: ${({tokens:a})=>a.theme.textPrimary};
    padding: 0px;
  }

  :host > wui-flex .swap-input input:focus-visible {
    outline: none;
  }

  :host > wui-flex .swap-input input::-webkit-outer-spin-button,
  :host > wui-flex .swap-input input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .max-value-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${({tokens:a})=>a.core.glass010};
    padding-left: 0px;
  }

  .market-value {
    min-height: 18px;
  }
`;var D=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let E=class extends A.LitElement{constructor(){super(...arguments),this.focused=!1,this.price=0,this.target="sourceToken",this.onSetAmount=null,this.onSetMaxValue=null,this.autoFocus=!1}firstUpdated(){this.autoFocus&&requestAnimationFrame(()=>{let a=this.shadowRoot?.querySelector("input");a?.focus()})}render(){let a=this.marketValue||"0",b=f.NumberUtil.bigNumber(a).gt("0");return c.html`
      <wui-flex
        class="${this.focused?"focus":""}"
        justifyContent="space-between"
        alignItems="center"
      >
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
        >
          <input
            data-testid="swap-input-${this.target}"
            @focusin=${()=>this.onFocusChange(!0)}
            @focusout=${()=>this.onFocusChange(!1)}
            ?disabled=${this.disabled}
            value=${this.value||""}
            @input=${this.dispatchInputChangeEvent}
            @keydown=${this.handleKeydown}
            placeholder="0"
            type="text"
            inputmode="decimal"
            pattern="[0-9,.]*"
          />
          <wui-text class="market-value" variant="sm-regular" color="secondary">
            ${b?`$${f.NumberUtil.formatNumberToLocalString(this.marketValue,2)}`:null}
          </wui-text>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `}handleKeydown(a){return B.numericInputKeyDown(a,this.value,a=>this.onSetAmount?.(this.target,a))}dispatchInputChangeEvent(a){if(!this.onSetAmount)return;let b=a.target.value.replace(/[^0-9.]/gu,"");","===b||"."===b?this.onSetAmount(this.target,"0."):b.endsWith(",")?this.onSetAmount(this.target,b.replace(",",".")):this.onSetAmount(this.target,b)}setMaxValueToInput(){this.onSetMaxValue?.(this.target,this.balance)}templateTokenSelectButton(){return this.token?c.html`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="1"
      >
        <wui-token-button
          data-testid="swap-input-token-${this.target}"
          text=${this.token.symbol}
          imageSrc=${this.token.logoUri}
          @click=${this.onSelectToken.bind(this)}
        >
        </wui-token-button>
        <wui-flex alignItems="center" gap="1"> ${this.tokenBalanceTemplate()} </wui-flex>
      </wui-flex>
    `:c.html` <wui-button
        data-testid="swap-select-token-button-${this.target}"
        class="swap-token-button"
        size="md"
        variant="neutral-secondary"
        @click=${this.onSelectToken.bind(this)}
      >
        Select token
      </wui-button>`}tokenBalanceTemplate(){let a=f.NumberUtil.multiply(this.balance,this.price),b=!!a&&a?.gt(5e-5);return c.html`
      ${b?c.html`<wui-text variant="sm-regular" color="secondary">
            ${f.NumberUtil.formatNumberToLocalString(this.balance,2)}
          </wui-text>`:null}
      ${"sourceToken"===this.target?this.tokenActionButtonTemplate(b):null}
    `}tokenActionButtonTemplate(a){return a?c.html` <button class="max-value-button" @click=${this.setMaxValueToInput.bind(this)}>
        <wui-text color="accent-primary" variant="sm-medium">Max</wui-text>
      </button>`:c.html` <button class="max-value-button" @click=${this.onBuyToken.bind(this)}>
      <wui-text color="accent-primary" variant="sm-medium">Buy</wui-text>
    </button>`}onFocusChange(a){this.focused=a}onSelectToken(){i.EventsController.sendEvent({type:"track",event:"CLICK_SELECT_TOKEN_TO_SWAP"}),k.RouterController.push("SwapSelectToken",{target:this.target})}onBuyToken(){k.RouterController.push("OnRampProviders")}};E.styles=[C],D([(0,d.property)()],E.prototype,"focused",void 0),D([(0,d.property)()],E.prototype,"balance",void 0),D([(0,d.property)()],E.prototype,"value",void 0),D([(0,d.property)()],E.prototype,"price",void 0),D([(0,d.property)()],E.prototype,"marketValue",void 0),D([(0,d.property)()],E.prototype,"disabled",void 0),D([(0,d.property)()],E.prototype,"target",void 0),D([(0,d.property)()],E.prototype,"token",void 0),D([(0,d.property)()],E.prototype,"onSetAmount",void 0),D([(0,d.property)()],E.prototype,"onSetMaxValue",void 0),D([(0,d.property)({type:Boolean})],E.prototype,"autoFocus",void 0),E=D([(0,n.customElement)("w3m-swap-input")],E);let F=r.css`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .action-button {
    width: 100%;
    border-radius: ${({borderRadius:a})=>a["4"]};
  }

  .action-button:disabled {
    border-color: 1px solid ${({tokens:a})=>a.core.glass010};
  }

  .swap-inputs-container {
    position: relative;
  }

  wui-icon-box {
    width: 32px;
    height: 32px;
    border-radius: ${({borderRadius:a})=>a["10"]} !important;
    border: 4px solid ${({tokens:a})=>a.theme.backgroundPrimary};
    background: ${({tokens:a})=>a.theme.foregroundPrimary};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
  }

  .replace-tokens-button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    gap: ${({spacing:a})=>a["2"]};
    border-radius: ${({borderRadius:a})=>a["4"]};
    background-color: ${({tokens:a})=>a.theme.backgroundPrimary};
    padding: ${({spacing:a})=>a["2"]};
  }

  .details-container > wui-flex {
    background: ${({tokens:a})=>a.theme.foregroundPrimary};
    border-radius: ${({borderRadius:a})=>a["3"]};
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: ${({spacing:a})=>a["3"]};
    border-radius: ${({borderRadius:a})=>a["3"]};
    transition: background ${({durations:a})=>a.lg}
      ${({easings:a})=>a["ease-out-power-2"]};
    will-change: background;
  }

  .details-container > wui-flex > button:hover {
    background: ${({tokens:a})=>a.theme.foregroundPrimary};
  }

  .details-content-container {
    padding: ${({spacing:a})=>a["2"]};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: ${({spacing:a})=>a["3"]} ${({spacing:a})=>a["5"]};
    border-radius: ${({borderRadius:a})=>a["3"]};
    background: ${({tokens:a})=>a.theme.foregroundPrimary};
  }
`;var G=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let H=class extends b.LitElement{subscribe({resetSwapState:a,initializeSwapState:b}){return()=>{g.ChainController.subscribeKey("activeCaipNetwork",c=>this.onCaipNetworkChange({newCaipNetwork:c,resetSwapState:a,initializeSwapState:b})),g.ChainController.subscribeChainProp("accountState",c=>{this.onCaipAddressChange({newCaipAddress:c?.caipAddress,resetSwapState:a,initializeSwapState:b})})}}constructor(){super(),this.unsubscribe=[],this.initialParams=k.RouterController.state.data?.swap,this.detailsOpen=!1,this.caipAddress=g.ChainController.getAccountData()?.caipAddress,this.caipNetworkId=g.ChainController.state.activeCaipNetwork?.caipNetworkId,this.initialized=l.SwapController.state.initialized,this.loadingQuote=l.SwapController.state.loadingQuote,this.loadingPrices=l.SwapController.state.loadingPrices,this.loadingTransaction=l.SwapController.state.loadingTransaction,this.sourceToken=l.SwapController.state.sourceToken,this.sourceTokenAmount=l.SwapController.state.sourceTokenAmount,this.sourceTokenPriceInUSD=l.SwapController.state.sourceTokenPriceInUSD,this.toToken=l.SwapController.state.toToken,this.toTokenAmount=l.SwapController.state.toTokenAmount,this.toTokenPriceInUSD=l.SwapController.state.toTokenPriceInUSD,this.inputError=l.SwapController.state.inputError,this.fetchError=l.SwapController.state.fetchError,this.lastTokenPriceUpdate=0,this.minTokenPriceUpdateInterval=1e4,this.visibilityChangeHandler=()=>{document?.hidden?(clearInterval(this.interval),this.interval=void 0):this.startTokenPriceInterval()},this.startTokenPriceInterval=()=>{this.interval&&Date.now()-this.lastTokenPriceUpdate<this.minTokenPriceUpdateInterval||(this.lastTokenPriceUpdate&&Date.now()-this.lastTokenPriceUpdate>this.minTokenPriceUpdateInterval&&this.fetchTokensAndValues(),clearInterval(this.interval),this.interval=setInterval(()=>{this.fetchTokensAndValues()},this.minTokenPriceUpdateInterval))},this.watchTokensAndValues=()=>{this.sourceToken&&this.toToken&&(this.subscribeToVisibilityChange(),this.startTokenPriceInterval())},this.onDebouncedGetSwapCalldata=h.CoreHelperUtil.debounce(async()=>{await l.SwapController.swapTokens()},200),this.subscribe({resetSwapState:!0,initializeSwapState:!1})(),this.unsubscribe.push(this.subscribe({resetSwapState:!1,initializeSwapState:!0}),j.ModalController.subscribeKey("open",a=>{a||l.SwapController.resetState()}),k.RouterController.subscribeKey("view",a=>{a.includes("Swap")||l.SwapController.resetValues()}),l.SwapController.subscribe(a=>{this.initialized=a.initialized,this.loadingQuote=a.loadingQuote,this.loadingPrices=a.loadingPrices,this.loadingTransaction=a.loadingTransaction,this.sourceToken=a.sourceToken,this.sourceTokenAmount=a.sourceTokenAmount,this.sourceTokenPriceInUSD=a.sourceTokenPriceInUSD,this.toToken=a.toToken,this.toTokenAmount=a.toTokenAmount,this.toTokenPriceInUSD=a.toTokenPriceInUSD,this.inputError=a.inputError,this.fetchError=a.fetchError,a.sourceToken&&a.toToken&&this.watchTokensAndValues()}))}async firstUpdated(){l.SwapController.initializeState(),this.watchTokensAndValues(),await this.handleSwapParameters()}disconnectedCallback(){this.unsubscribe.forEach(a=>a?.()),clearInterval(this.interval),document?.removeEventListener("visibilitychange",this.visibilityChangeHandler)}render(){return c.html`
      <wui-flex flexDirection="column" .padding=${["0","4","4","4"]} gap="3">
        ${this.initialized?this.templateSwap():this.templateLoading()}
      </wui-flex>
    `}subscribeToVisibilityChange(){document?.removeEventListener("visibilitychange",this.visibilityChangeHandler),document?.addEventListener("visibilitychange",this.visibilityChangeHandler)}fetchTokensAndValues(){l.SwapController.getNetworkTokenPrice(),l.SwapController.getMyTokensWithBalance(),l.SwapController.swapTokens(),this.lastTokenPriceUpdate=Date.now()}templateSwap(){return c.html`
      <wui-flex flexDirection="column" gap="3">
        <wui-flex flexDirection="column" alignItems="center" gap="2" class="swap-inputs-container">
          ${this.templateTokenInput("sourceToken",this.sourceToken)}
          ${this.templateTokenInput("toToken",this.toToken)} ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateDetails()} ${this.templateActionButton()}
      </wui-flex>
    `}actionButtonLabel(){let a=!this.sourceTokenAmount||"0"===this.sourceTokenAmount;return this.fetchError?"Swap":this.sourceToken&&this.toToken?a?"Enter amount":this.inputError?this.inputError:"Review swap":"Select token"}templateReplaceTokensButton(){return c.html`
      <wui-flex class="replace-tokens-button-container">
        <wui-icon-box
          @click=${this.onSwitchTokens.bind(this)}
          icon="recycleHorizontal"
          size="md"
          variant="default"
        ></wui-icon-box>
      </wui-flex>
    `}templateLoading(){return c.html`
      <wui-flex flexDirection="column" gap="4">
        <wui-flex flexDirection="column" alignItems="center" gap="2" class="swap-inputs-container">
          <w3m-swap-input-skeleton target="sourceToken"></w3m-swap-input-skeleton>
          <w3m-swap-input-skeleton target="toToken"></w3m-swap-input-skeleton>
          ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateActionButton()}
      </wui-flex>
    `}templateTokenInput(a,b){let d=l.SwapController.state.myTokensWithBalance?.find(a=>a?.address===b?.address),e="toToken"===a?this.toTokenAmount:this.sourceTokenAmount,g="toToken"===a?this.toTokenPriceInUSD:this.sourceTokenPriceInUSD,h=f.NumberUtil.parseLocalStringToNumber(e)*g;return c.html`<w3m-swap-input
      .value=${"toToken"===a?this.toTokenAmount:this.sourceTokenAmount}
      .disabled=${"toToken"===a}
      .onSetAmount=${this.handleChangeAmount.bind(this)}
      target=${a}
      .token=${b}
      .balance=${d?.quantity?.numeric}
      .price=${d?.price}
      .marketValue=${h}
      .onSetMaxValue=${this.onSetMaxValue.bind(this)}
      ?autoFocus=${"sourceToken"===a}
    ></w3m-swap-input>`}onSetMaxValue(a,b){let c=f.NumberUtil.bigNumber(b||"0");if(!c.gt(0))return void this.handleChangeAmount(a,"0");let d="sourceToken"===a?this.sourceToken:this.toToken,e=d?.decimals??18,{networkAddress:g}=l.SwapController.getParams(),h=l.SwapController.state.gasFee;if("sourceToken"===a&&d?.address===g&&h&&"0"!==h){let b=150000n*BigInt(h),d=f.NumberUtil.bigNumber(b.toString()).div(f.NumberUtil.bigNumber(10).pow(e)),g=c.minus(d);this.handleChangeAmount(a,g.gt(0)?g.toFixed(e,0):"0")}else this.handleChangeAmount(a,c.toFixed(e,0))}templateDetails(){return this.sourceToken&&this.toToken&&!this.inputError?c.html`<w3m-swap-details .detailsOpen=${this.detailsOpen}></w3m-swap-details>`:null}handleChangeAmount(a,b){l.SwapController.clearError(),"sourceToken"===a?l.SwapController.setSourceTokenAmount(b):l.SwapController.setToTokenAmount(b),this.onDebouncedGetSwapCalldata()}templateActionButton(){let a=!this.toToken||!this.sourceToken,b=!this.sourceTokenAmount||"0"===this.sourceTokenAmount,d=this.loadingQuote||this.loadingPrices||this.loadingTransaction,e=d||a||b||this.inputError;return c.html` <wui-flex gap="2">
      <wui-button
        data-testid="swap-action-button"
        class="action-button"
        fullWidth
        size="lg"
        borderRadius="xs"
        variant="accent-primary"
        ?loading=${!!d}
        ?disabled=${!!e}
        @click=${this.onSwapPreview.bind(this)}
      >
        ${this.actionButtonLabel()}
      </wui-button>
    </wui-flex>`}async onSwitchTokens(){await l.SwapController.switchTokens()}async onSwapPreview(){this.fetchError&&await l.SwapController.swapTokens(),i.EventsController.sendEvent({type:"track",event:"INITIATE_SWAP",properties:{network:this.caipNetworkId||"",swapFromToken:this.sourceToken?.symbol||"",swapToToken:this.toToken?.symbol||"",swapFromAmount:this.sourceTokenAmount||"",swapToAmount:this.toTokenAmount||"",isSmartAccount:(0,m.getPreferredAccountType)(g.ChainController.state.activeChain)===o.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT}}),k.RouterController.push("SwapPreview")}async handleSwapParameters(){if(this.initialParams){if(!l.SwapController.state.initialized){let a=new Promise(a=>{let b=l.SwapController.subscribeKey("initialized",c=>{c&&(b?.(),a())})});await a}await this.setSwapParameters(this.initialParams)}}async setSwapParameters({amount:a,fromToken:b,toToken:c}){if(!l.SwapController.state.tokens||!l.SwapController.state.myTokensWithBalance){let a=new Promise(a=>{let b=l.SwapController.subscribeKey("myTokensWithBalance",c=>{c&&c.length>0&&(b?.(),a())});setTimeout(()=>{b?.(),a()},5e3)});await a}let d=[...l.SwapController.state.tokens||[],...l.SwapController.state.myTokensWithBalance||[]];if(b){let a=d.find(a=>a.symbol.toLowerCase()===b.toLowerCase());a&&l.SwapController.setSourceToken(a)}if(c){let a=d.find(a=>a.symbol.toLowerCase()===c.toLowerCase());a&&l.SwapController.setToToken(a)}a&&!isNaN(Number(a))&&l.SwapController.setSourceTokenAmount(a)}onCaipAddressChange({newCaipAddress:a,resetSwapState:b,initializeSwapState:c}){this.caipAddress!==a&&(this.caipAddress=a,b&&l.SwapController.resetState(),c&&l.SwapController.initializeState())}onCaipNetworkChange({newCaipNetwork:a,resetSwapState:b,initializeSwapState:c}){this.caipNetworkId!==a?.caipNetworkId&&(this.caipNetworkId=a?.caipNetworkId,b&&l.SwapController.resetState(),c&&l.SwapController.initializeState())}};H.styles=F,G([(0,d.property)({type:Object})],H.prototype,"initialParams",void 0),G([(0,e.state)()],H.prototype,"interval",void 0),G([(0,e.state)()],H.prototype,"detailsOpen",void 0),G([(0,e.state)()],H.prototype,"caipAddress",void 0),G([(0,e.state)()],H.prototype,"caipNetworkId",void 0),G([(0,e.state)()],H.prototype,"initialized",void 0),G([(0,e.state)()],H.prototype,"loadingQuote",void 0),G([(0,e.state)()],H.prototype,"loadingPrices",void 0),G([(0,e.state)()],H.prototype,"loadingTransaction",void 0),G([(0,e.state)()],H.prototype,"sourceToken",void 0),G([(0,e.state)()],H.prototype,"sourceTokenAmount",void 0),G([(0,e.state)()],H.prototype,"sourceTokenPriceInUSD",void 0),G([(0,e.state)()],H.prototype,"toToken",void 0),G([(0,e.state)()],H.prototype,"toTokenAmount",void 0),G([(0,e.state)()],H.prototype,"toTokenPriceInUSD",void 0),G([(0,e.state)()],H.prototype,"inputError",void 0),G([(0,e.state)()],H.prototype,"fetchError",void 0),G([(0,e.state)()],H.prototype,"lastTokenPriceUpdate",void 0),H=G([(0,n.customElement)("w3m-swap-view")],H),a.s(["W3mSwapView",0,H],332917);var I=b;let J=r.css`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  .preview-container,
  .details-container {
    width: 100%;
  }

  .token-image {
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px ${({tokens:a})=>a.core.glass010};
    border-radius: 12px;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .token-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:a})=>a["2"]};
    padding: ${({spacing:a})=>a["2"]};
    height: 40px;
    border: none;
    border-radius: 80px;
    background: ${({tokens:a})=>a.theme.foregroundPrimary};
    box-shadow: inset 0 0 0 1px ${({tokens:a})=>a.theme.foregroundPrimary};
    cursor: pointer;
    transition: background ${({durations:a})=>a.lg}
      ${({easings:a})=>a["ease-out-power-2"]};
    will-change: background;
  }

  .token-item:hover {
    background: ${({tokens:a})=>a.core.glass010};
  }

  .preview-token-details-container {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: ${({spacing:a})=>a["3"]} ${({spacing:a})=>a["5"]};
    border-radius: ${({borderRadius:a})=>a["3"]};
    background: ${({tokens:a})=>a.theme.foregroundPrimary};
  }

  .action-buttons-container {
    width: 100%;
    gap: ${({spacing:a})=>a["2"]};
  }

  .action-buttons-container > button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    height: 48px;
    border-radius: ${({borderRadius:a})=>a["4"]};
    border: none;
    box-shadow: inset 0 0 0 1px ${({tokens:a})=>a.core.glass010};
  }

  .action-buttons-container > button:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }

  .action-button > wui-loading-spinner {
    display: inline-block;
  }

  .cancel-button:hover,
  .action-button:hover {
    cursor: pointer;
  }

  .action-buttons-container > wui-button.cancel-button {
    flex: 2;
  }

  .action-buttons-container > wui-button.action-button {
    flex: 4;
  }

  .action-buttons-container > button.action-button > wui-text {
    color: white;
  }

  .details-container > wui-flex {
    background: ${({tokens:a})=>a.theme.foregroundPrimary};
    border-radius: ${({borderRadius:a})=>a["3"]};
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: ${({spacing:a})=>a["3"]};
    border-radius: ${({borderRadius:a})=>a["3"]};
    transition: background ${({durations:a})=>a.lg}
      ${({easings:a})=>a["ease-out-power-2"]};
    will-change: background;
  }

  .details-container > wui-flex > button:hover {
    background: ${({tokens:a})=>a.theme.foregroundPrimary};
  }

  .details-content-container {
    padding: ${({spacing:a})=>a["2"]};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: ${({spacing:a})=>a["3"]} ${({spacing:a})=>a["5"]};
    border-radius: ${({borderRadius:a})=>a["3"]};
    background: ${({tokens:a})=>a.theme.foregroundPrimary};
  }
`;var K=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let L=class extends I.LitElement{constructor(){super(),this.unsubscribe=[],this.detailsOpen=!0,this.approvalTransaction=l.SwapController.state.approvalTransaction,this.swapTransaction=l.SwapController.state.swapTransaction,this.sourceToken=l.SwapController.state.sourceToken,this.sourceTokenAmount=l.SwapController.state.sourceTokenAmount??"",this.sourceTokenPriceInUSD=l.SwapController.state.sourceTokenPriceInUSD,this.balanceSymbol=g.ChainController.getAccountData()?.balanceSymbol,this.toToken=l.SwapController.state.toToken,this.toTokenAmount=l.SwapController.state.toTokenAmount??"",this.toTokenPriceInUSD=l.SwapController.state.toTokenPriceInUSD,this.caipNetwork=g.ChainController.state.activeCaipNetwork,this.inputError=l.SwapController.state.inputError,this.loadingQuote=l.SwapController.state.loadingQuote,this.loadingApprovalTransaction=l.SwapController.state.loadingApprovalTransaction,this.loadingBuildTransaction=l.SwapController.state.loadingBuildTransaction,this.loadingTransaction=l.SwapController.state.loadingTransaction,this.unsubscribe.push(g.ChainController.subscribeChainProp("accountState",a=>{a?.balanceSymbol!==this.balanceSymbol&&k.RouterController.goBack()}),g.ChainController.subscribeKey("activeCaipNetwork",a=>{this.caipNetwork!==a&&(this.caipNetwork=a)}),l.SwapController.subscribe(a=>{this.approvalTransaction=a.approvalTransaction,this.swapTransaction=a.swapTransaction,this.sourceToken=a.sourceToken,this.toToken=a.toToken,this.toTokenPriceInUSD=a.toTokenPriceInUSD,this.sourceTokenAmount=a.sourceTokenAmount??"",this.toTokenAmount=a.toTokenAmount??"",this.inputError=a.inputError,a.inputError&&k.RouterController.goBack(),this.loadingQuote=a.loadingQuote,this.loadingApprovalTransaction=a.loadingApprovalTransaction,this.loadingBuildTransaction=a.loadingBuildTransaction,this.loadingTransaction=a.loadingTransaction}))}firstUpdated(){l.SwapController.getTransaction(),this.refreshTransaction()}disconnectedCallback(){this.unsubscribe.forEach(a=>a?.()),clearInterval(this.interval)}render(){return c.html`
      <wui-flex flexDirection="column" .padding=${["0","4","4","4"]} gap="3">
        ${this.templateSwap()}
      </wui-flex>
    `}refreshTransaction(){this.interval=setInterval(()=>{l.SwapController.getApprovalLoadingState()||l.SwapController.getTransaction()},1e4)}templateSwap(){let a=`${f.NumberUtil.formatNumberToLocalString(parseFloat(this.sourceTokenAmount))} ${this.sourceToken?.symbol}`,b=`${f.NumberUtil.formatNumberToLocalString(parseFloat(this.toTokenAmount))} ${this.toToken?.symbol}`,d=parseFloat(this.sourceTokenAmount)*this.sourceTokenPriceInUSD,e=parseFloat(this.toTokenAmount)*this.toTokenPriceInUSD,g=f.NumberUtil.formatNumberToLocalString(d),h=f.NumberUtil.formatNumberToLocalString(e),i=this.loadingQuote||this.loadingBuildTransaction||this.loadingTransaction||this.loadingApprovalTransaction;return c.html`
      <wui-flex flexDirection="column" alignItems="center" gap="4">
        <wui-flex class="preview-container" flexDirection="column" alignItems="flex-start" gap="4">
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="4"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="01">
              <wui-text variant="sm-regular" color="secondary">Send</wui-text>
              <wui-text variant="md-regular" color="primary">$${g}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${a}
              imageSrc=${this.sourceToken?.logoUri}
            >
            </wui-token-button>
          </wui-flex>
          <wui-icon name="recycleHorizontal" color="default" size="md"></wui-icon>
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="4"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="01">
              <wui-text variant="sm-regular" color="secondary">Receive</wui-text>
              <wui-text variant="md-regular" color="primary">$${h}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${b}
              imageSrc=${this.toToken?.logoUri}
            >
            </wui-token-button>
          </wui-flex>
        </wui-flex>

        ${this.templateDetails()}

        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="2">
          <wui-icon size="sm" color="default" name="info"></wui-icon>
          <wui-text variant="sm-regular" color="secondary">Review transaction carefully</wui-text>
        </wui-flex>

        <wui-flex
          class="action-buttons-container"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          gap="2"
        >
          <wui-button
            class="cancel-button"
            fullWidth
            size="lg"
            borderRadius="xs"
            variant="neutral-secondary"
            @click=${this.onCancelTransaction.bind(this)}
          >
            <wui-text variant="md-medium" color="secondary">Cancel</wui-text>
          </wui-button>
          <wui-button
            class="action-button"
            fullWidth
            size="lg"
            borderRadius="xs"
            variant="accent-primary"
            ?loading=${i}
            ?disabled=${i}
            @click=${this.onSendTransaction.bind(this)}
          >
            <wui-text variant="md-medium" color="invert"> ${this.actionButtonLabel()} </wui-text>
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}templateDetails(){return this.sourceToken&&this.toToken&&!this.inputError?c.html`<w3m-swap-details .detailsOpen=${this.detailsOpen}></w3m-swap-details>`:null}actionButtonLabel(){return this.loadingApprovalTransaction?"Approving...":this.approvalTransaction?"Approve":"Swap"}onCancelTransaction(){k.RouterController.goBack()}onSendTransaction(){this.approvalTransaction?l.SwapController.sendTransactionForApproval(this.approvalTransaction):l.SwapController.sendTransactionForSwap(this.swapTransaction)}};L.styles=J,K([(0,e.state)()],L.prototype,"interval",void 0),K([(0,e.state)()],L.prototype,"detailsOpen",void 0),K([(0,e.state)()],L.prototype,"approvalTransaction",void 0),K([(0,e.state)()],L.prototype,"swapTransaction",void 0),K([(0,e.state)()],L.prototype,"sourceToken",void 0),K([(0,e.state)()],L.prototype,"sourceTokenAmount",void 0),K([(0,e.state)()],L.prototype,"sourceTokenPriceInUSD",void 0),K([(0,e.state)()],L.prototype,"balanceSymbol",void 0),K([(0,e.state)()],L.prototype,"toToken",void 0),K([(0,e.state)()],L.prototype,"toTokenAmount",void 0),K([(0,e.state)()],L.prototype,"toTokenPriceInUSD",void 0),K([(0,e.state)()],L.prototype,"caipNetwork",void 0),K([(0,e.state)()],L.prototype,"inputError",void 0),K([(0,e.state)()],L.prototype,"loadingQuote",void 0),K([(0,e.state)()],L.prototype,"loadingApprovalTransaction",void 0),K([(0,e.state)()],L.prototype,"loadingBuildTransaction",void 0),K([(0,e.state)()],L.prototype,"loadingTransaction",void 0),L=K([(0,n.customElement)("w3m-swap-preview-view")],L),a.s(["W3mSwapPreviewView",0,L],735434);var M=b,N=a.i(575265);a.i(653667);var O=b;a.i(508423),a.i(696585),a.i(307465);var P=a.i(924968);let Q=r.css`
  :host {
    width: 100%;
    height: 60px;
    min-height: 60px;
  }

  :host > wui-flex {
    cursor: pointer;
    height: 100%;
    display: flex;
    column-gap: ${({spacing:a})=>a["3"]};
    padding: ${({spacing:a})=>a["2"]};
    padding-right: ${({spacing:a})=>a["4"]};
    width: 100%;
    background-color: transparent;
    border-radius: ${({borderRadius:a})=>a["4"]};
    color: ${({tokens:a})=>a.theme.foregroundSecondary};
    transition:
      background-color ${({durations:a})=>a.lg}
        ${({easings:a})=>a["ease-out-power-2"]},
      opacity ${({durations:a})=>a.lg} ${({easings:a})=>a["ease-out-power-2"]};
    will-change: background-color, opacity;
  }

  @media (hover: hover) and (pointer: fine) {
    :host > wui-flex:hover {
      background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
    }

    :host > wui-flex:active {
      background-color: ${({tokens:a})=>a.core.glass010};
    }
  }

  :host([disabled]) > wui-flex {
    opacity: 0.6;
  }

  :host([disabled]) > wui-flex:hover {
    background-color: transparent;
  }

  :host > wui-flex > wui-flex {
    flex: 1;
  }

  :host > wui-flex > wui-image,
  :host > wui-flex > .token-item-image-placeholder {
    width: 40px;
    max-width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:a})=>a["20"]};
    position: relative;
  }

  :host > wui-flex > .token-item-image-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host > wui-flex > wui-image::after,
  :host > wui-flex > .token-item-image-placeholder::after {
    position: absolute;
    content: '';
    inset: 0;
    box-shadow: inset 0 0 0 1px ${({tokens:a})=>a.core.glass010};
    border-radius: ${({borderRadius:a})=>a["8"]};
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: ${({borderRadius:a})=>a["2"]};
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }
`;var R=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let S=class extends O.LitElement{constructor(){super(),this.observer=new IntersectionObserver(()=>void 0),this.imageSrc=void 0,this.name=void 0,this.symbol=void 0,this.price=void 0,this.amount=void 0,this.visible=!1,this.imageError=!1,this.observer=new IntersectionObserver(a=>{a.forEach(a=>{a.isIntersecting?this.visible=!0:this.visible=!1})},{threshold:.1})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){if(!this.visible)return null;let a=this.amount&&this.price?f.NumberUtil.multiply(this.price,this.amount)?.toFixed(3):null;return c.html`
      <wui-flex alignItems="center">
        ${this.visualTemplate()}
        <wui-flex flexDirection="column" gap="1">
          <wui-flex justifyContent="space-between">
            <wui-text variant="md-medium" color="primary" lineClamp="1">${this.name}</wui-text>
            ${a?c.html`
                  <wui-text variant="md-medium" color="primary">
                    $${f.NumberUtil.formatNumberToLocalString(a,3)}
                  </wui-text>
                `:null}
          </wui-flex>
          <wui-flex justifyContent="space-between">
            <wui-text variant="sm-regular" color="secondary" lineClamp="1">${this.symbol}</wui-text>
            ${this.amount?c.html`<wui-text variant="sm-regular" color="secondary">
                  ${f.NumberUtil.formatNumberToLocalString(this.amount,5)}
                </wui-text>`:null}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}visualTemplate(){return this.imageError?c.html`<wui-flex class="token-item-image-placeholder">
        <wui-icon name="image" color="inherit"></wui-icon>
      </wui-flex>`:this.imageSrc?c.html`<wui-image
        width="40"
        height="40"
        src=${this.imageSrc}
        @onLoadError=${this.imageLoadError}
      ></wui-image>`:null}imageLoadError(){this.imageError=!0}};S.styles=[P.resetStyles,P.elementStyles,Q],R([(0,d.property)()],S.prototype,"imageSrc",void 0),R([(0,d.property)()],S.prototype,"name",void 0),R([(0,d.property)()],S.prototype,"symbol",void 0),R([(0,d.property)()],S.prototype,"price",void 0),R([(0,d.property)()],S.prototype,"amount",void 0),R([(0,e.state)()],S.prototype,"visible",void 0),R([(0,e.state)()],S.prototype,"imageError",void 0),S=R([(0,n.customElement)("wui-token-list-item")],S);var T=b;a.i(219756);let U=r.css`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    cursor: pointer;
    height: 100%;
    width: 100%;
    display: flex;
    column-gap: ${({spacing:a})=>a["3"]};
    padding: ${({spacing:a})=>a["2"]};
    padding-right: ${({spacing:a})=>a["4"]};
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`,V=class extends T.LitElement{render(){return c.html`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="1">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-flex flexDirection="column" gap="1" alignItems="flex-end">
          <wui-shimmer width="24px" height="12px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="32px" height="12px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
      </wui-flex>
    `}};V.styles=[P.resetStyles,U],V=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}([(0,n.customElement)("wui-token-list-item-loader")],V);let W=r.css`
  :host {
    --tokens-scroll--top-opacity: 0;
    --tokens-scroll--bottom-opacity: 1;
    --suggested-tokens-scroll--left-opacity: 0;
    --suggested-tokens-scroll--right-opacity: 1;
  }

  :host > wui-flex:first-child {
    overflow-y: hidden;
    overflow-x: hidden;
    scrollbar-width: none;
    scrollbar-height: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .suggested-tokens-container {
    overflow-x: auto;
    mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--suggested-tokens-scroll--right-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--right-opacity))) 100%
    );
  }

  .suggested-tokens-container::-webkit-scrollbar {
    display: none;
  }

  .tokens-container {
    border-top: 1px solid ${({tokens:a})=>a.core.glass010};
    height: 100%;
    max-height: 390px;
  }

  .tokens {
    width: 100%;
    overflow-y: auto;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--top-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--tokens-scroll--top-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--tokens-scroll--bottom-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--bottom-opacity))) 100%
    );
  }

  .network-search-input,
  .select-network-button {
    height: 40px;
  }

  .select-network-button {
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:a})=>a["2"]};
    box-shadow: inset 0 0 0 1px ${({tokens:a})=>a.core.glass010};
    background-color: transparent;
    border-radius: ${({borderRadius:a})=>a["3"]};
    padding: ${({spacing:a})=>a["2"]};
    align-items: center;
    transition: background-color ${({durations:a})=>a.lg}
      ${({easings:a})=>a["ease-out-power-2"]};
    will-change: background-color;
  }

  .select-network-button:hover {
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
  }

  .select-network-button > wui-image {
    width: 26px;
    height: 26px;
    border-radius: ${({borderRadius:a})=>a["4"]};
    box-shadow: inset 0 0 0 1px ${({tokens:a})=>a.core.glass010};
  }
`;var X=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let Y=class extends M.LitElement{constructor(){super(),this.unsubscribe=[],this.targetToken=k.RouterController.state.data?.target,this.sourceToken=l.SwapController.state.sourceToken,this.sourceTokenAmount=l.SwapController.state.sourceTokenAmount,this.toToken=l.SwapController.state.toToken,this.myTokensWithBalance=l.SwapController.state.myTokensWithBalance,this.popularTokens=l.SwapController.state.popularTokens,this.suggestedTokens=l.SwapController.state.suggestedTokens,this.tokensLoading=l.SwapController.state.tokensLoading,this.searchValue="",this.unsubscribe.push(l.SwapController.subscribe(a=>{this.sourceToken=a.sourceToken,this.toToken=a.toToken,this.myTokensWithBalance=a.myTokensWithBalance,this.popularTokens=a.popularTokens,this.suggestedTokens=a.suggestedTokens,this.tokensLoading=a.tokensLoading}))}async firstUpdated(){await l.SwapController.getTokenList()}updated(){let a=this.renderRoot?.querySelector(".suggested-tokens-container");a?.addEventListener("scroll",this.handleSuggestedTokensScroll.bind(this));let b=this.renderRoot?.querySelector(".tokens");b?.addEventListener("scroll",this.handleTokenListScroll.bind(this))}disconnectedCallback(){super.disconnectedCallback();let a=this.renderRoot?.querySelector(".suggested-tokens-container"),b=this.renderRoot?.querySelector(".tokens");a?.removeEventListener("scroll",this.handleSuggestedTokensScroll.bind(this)),b?.removeEventListener("scroll",this.handleTokenListScroll.bind(this)),clearInterval(this.interval)}render(){return c.html`
      <wui-flex flexDirection="column" gap="3">
        ${this.templateSearchInput()} ${this.templateSuggestedTokens()} ${this.templateTokens()}
      </wui-flex>
    `}onSelectToken(a){"sourceToken"===this.targetToken?l.SwapController.setSourceToken(a):(l.SwapController.setToToken(a),this.sourceToken&&this.sourceTokenAmount&&l.SwapController.swapTokens()),k.RouterController.goBack()}templateSearchInput(){return c.html`
      <wui-flex .padding=${["1","3","0","3"]} gap="2">
        <wui-input-text
          data-testid="swap-select-token-search-input"
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
          .value=${this.searchValue}
          @inputChange=${this.onSearchInputChange.bind(this)}
        ></wui-input-text>
      </wui-flex>
    `}templateMyTokens(){let a=this.myTokensWithBalance?Object.values(this.myTokensWithBalance):[],b=this.filterTokensWithText(a,this.searchValue);return b?.length>0?c.html`<wui-flex justifyContent="flex-start" padding="2">
          <wui-text variant="md-medium" color="secondary">Your tokens</wui-text>
        </wui-flex>
        ${b.map(a=>{let b=a.symbol===this.sourceToken?.symbol||a.symbol===this.toToken?.symbol;return c.html`
            <wui-token-list-item
              data-testid="swap-select-token-item-${a.symbol}"
              name=${a.name}
              ?disabled=${b}
              symbol=${a.symbol}
              price=${a?.price}
              amount=${a?.quantity?.numeric}
              imageSrc=${a.logoUri}
              @click=${()=>{b||this.onSelectToken(a)}}
            >
            </wui-token-list-item>
          `})}`:null}templateAllTokens(){let a=this.popularTokens?this.popularTokens:[],b=this.filterTokensWithText(a,this.searchValue);return this.tokensLoading?c.html`
        <wui-token-list-item-loader></wui-token-list-item-loader>
        <wui-token-list-item-loader></wui-token-list-item-loader>
        <wui-token-list-item-loader></wui-token-list-item-loader>
        <wui-token-list-item-loader></wui-token-list-item-loader>
        <wui-token-list-item-loader></wui-token-list-item-loader>
      `:b?.length>0?c.html`
        ${b.map(a=>c.html`
            <wui-token-list-item
              data-testid="swap-select-token-item-${a.symbol}"
              name=${a.name}
              symbol=${a.symbol}
              imageSrc=${a.logoUri}
              @click=${()=>this.onSelectToken(a)}
            >
            </wui-token-list-item>
          `)}
      `:null}templateTokens(){return c.html`
      <wui-flex class="tokens-container">
        <wui-flex class="tokens" .padding=${["0","2","2","2"]} flexDirection="column">
          ${this.templateMyTokens()}
          <wui-flex justifyContent="flex-start" padding="3">
            <wui-text variant="md-medium" color="secondary">Tokens</wui-text>
          </wui-flex>
          ${this.templateAllTokens()}
        </wui-flex>
      </wui-flex>
    `}templateSuggestedTokens(){let a=this.suggestedTokens?this.suggestedTokens.slice(0,8):null;return this.tokensLoading?c.html`
        <wui-flex
          class="suggested-tokens-container"
          .padding=${["0","3","0","3"]}
          gap="2"
        >
          <wui-token-button loading></wui-token-button>
          <wui-token-button loading></wui-token-button>
          <wui-token-button loading></wui-token-button>
          <wui-token-button loading></wui-token-button>
          <wui-token-button loading></wui-token-button>
        </wui-flex>
      `:a?c.html`
      <wui-flex
        class="suggested-tokens-container"
        .padding=${["0","3","0","3"]}
        gap="2"
      >
        ${a.map(a=>c.html`
            <wui-token-button
              text=${a.symbol}
              imageSrc=${a.logoUri}
              @click=${()=>this.onSelectToken(a)}
            >
            </wui-token-button>
          `)}
      </wui-flex>
    `:null}onSearchInputChange(a){this.searchValue=a.detail}handleSuggestedTokensScroll(){let a=this.renderRoot?.querySelector(".suggested-tokens-container");a&&(a.style.setProperty("--suggested-tokens-scroll--left-opacity",N.MathUtil.interpolate([0,100],[0,1],a.scrollLeft).toString()),a.style.setProperty("--suggested-tokens-scroll--right-opacity",N.MathUtil.interpolate([0,100],[0,1],a.scrollWidth-a.scrollLeft-a.offsetWidth).toString()))}handleTokenListScroll(){let a=this.renderRoot?.querySelector(".tokens");a&&(a.style.setProperty("--tokens-scroll--top-opacity",N.MathUtil.interpolate([0,100],[0,1],a.scrollTop).toString()),a.style.setProperty("--tokens-scroll--bottom-opacity",N.MathUtil.interpolate([0,100],[0,1],a.scrollHeight-a.scrollTop-a.offsetHeight).toString()))}filterTokensWithText(a,b){return a.filter(a=>`${a.symbol} ${a.name} ${a.address}`.toLowerCase().includes(b.toLowerCase())).sort((a,c)=>{let d=`${a.symbol} ${a.name} ${a.address}`.toLowerCase(),e=`${c.symbol} ${c.name} ${c.address}`.toLowerCase();return d.indexOf(b.toLowerCase())-e.indexOf(b.toLowerCase())})}};Y.styles=W,X([(0,e.state)()],Y.prototype,"interval",void 0),X([(0,e.state)()],Y.prototype,"targetToken",void 0),X([(0,e.state)()],Y.prototype,"sourceToken",void 0),X([(0,e.state)()],Y.prototype,"sourceTokenAmount",void 0),X([(0,e.state)()],Y.prototype,"toToken",void 0),X([(0,e.state)()],Y.prototype,"myTokensWithBalance",void 0),X([(0,e.state)()],Y.prototype,"popularTokens",void 0),X([(0,e.state)()],Y.prototype,"suggestedTokens",void 0),X([(0,e.state)()],Y.prototype,"tokensLoading",void 0),X([(0,e.state)()],Y.prototype,"searchValue",void 0),Y=X([(0,n.customElement)("w3m-swap-select-token-view")],Y),a.s(["W3mSwapSelectTokenView",0,Y],12240),a.s([],717276),a.i(717276),a.i(332917),a.i(735434),a.i(12240),a.s(["W3mSwapPreviewView",0,L,"W3mSwapSelectTokenView",0,Y,"W3mSwapView",0,H],307979)}];

//# sourceMappingURL=116m_%40reown_appkit-scaffold-ui_dist_esm_exports_swaps_0mbsze9.js.map