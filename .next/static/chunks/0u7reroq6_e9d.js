(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,621750,e=>{"use strict";e.i(720140);var t=e.i(227565),n=e.i(540647);e.i(890019);var a=e.i(349820);e.i(881514);var i=e.i(931111),r=e.i(964603),s=e.i(953166),o=e.i(555489);let p=o.css`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
    user-select: none;
    user-drag: none;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
  }

  :host([data-boxed='true']) {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-boxed='true']) img {
    width: 20px;
    height: 20px;
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  :host([data-full='true']) img {
    width: 100%;
    height: 100%;
  }

  :host([data-boxed='true']) wui-icon {
    width: 20px;
    height: 20px;
  }

  :host([data-icon='error']) {
    background-color: ${({tokens:e})=>e.core.backgroundError};
  }

  :host([data-rounded='true']) {
    border-radius: ${({borderRadius:e})=>e[16]};
  }
`;var u=function(e,t,n,a){var i,r=arguments.length,s=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,a);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let d=class extends t.LitElement{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0,this.boxed=!1,this.rounded=!1,this.fullSize=!1}render(){let e={inherit:"inherit",xxs:"2",xs:"3",sm:"4",md:"4",mdl:"5",lg:"5",xl:"6",xxl:"7","3xl":"8","4xl":"9","5xl":"10"};return(this.style.cssText=`
      --local-width: ${this.size?`var(--apkt-spacing-${e[this.size]});`:"100%"};
      --local-height: ${this.size?`var(--apkt-spacing-${e[this.size]});`:"100%"};
      `,this.dataset.boxed=this.boxed?"true":"false",this.dataset.rounded=this.rounded?"true":"false",this.dataset.full=this.fullSize?"true":"false",this.dataset.icon=this.iconColor||"inherit",this.icon)?n.html`<wui-icon
        color=${this.iconColor||"inherit"}
        name=${this.icon}
        size="lg"
      ></wui-icon> `:this.logo?n.html`<wui-icon size="lg" color="inherit" name=${this.logo}></wui-icon> `:n.html`<img src=${(0,i.ifDefined)(this.src)} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};d.styles=[r.resetStyles,p],u([(0,a.property)()],d.prototype,"src",void 0),u([(0,a.property)()],d.prototype,"logo",void 0),u([(0,a.property)()],d.prototype,"icon",void 0),u([(0,a.property)()],d.prototype,"iconColor",void 0),u([(0,a.property)()],d.prototype,"alt",void 0),u([(0,a.property)()],d.prototype,"size",void 0),u([(0,a.property)({type:Boolean})],d.prototype,"boxed",void 0),u([(0,a.property)({type:Boolean})],d.prototype,"rounded",void 0),u([(0,a.property)({type:Boolean})],d.prototype,"fullSize",void 0),d=u([(0,s.customElement)("wui-image")],d),e.s([],621750)},354686,e=>{"use strict";let t=[{inputs:[{components:[{name:"target",type:"address"},{name:"allowFailure",type:"bool"},{name:"callData",type:"bytes"}],name:"calls",type:"tuple[]"}],name:"aggregate3",outputs:[{components:[{name:"success",type:"bool"},{name:"returnData",type:"bytes"}],name:"returnData",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[{name:"addr",type:"address"}],name:"getEthBalance",outputs:[{name:"balance",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getCurrentBlockTimestamp",outputs:[{internalType:"uint256",name:"timestamp",type:"uint256"}],stateMutability:"view",type:"function"}],n=[{name:"query",type:"function",stateMutability:"view",inputs:[{type:"tuple[]",name:"queries",components:[{type:"address",name:"sender"},{type:"string[]",name:"urls"},{type:"bytes",name:"data"}]}],outputs:[{type:"bool[]",name:"failures"},{type:"bytes[]",name:"responses"}]},{name:"HttpError",type:"error",inputs:[{type:"uint16",name:"status"},{type:"string",name:"message"}]}],a=[{inputs:[{name:"dns",type:"bytes"}],name:"DNSDecodingFailed",type:"error"},{inputs:[{name:"ens",type:"string"}],name:"DNSEncodingFailed",type:"error"},{inputs:[],name:"EmptyAddress",type:"error"},{inputs:[{name:"status",type:"uint16"},{name:"message",type:"string"}],name:"HttpError",type:"error"},{inputs:[],name:"InvalidBatchGatewayResponse",type:"error"},{inputs:[{name:"errorData",type:"bytes"}],name:"ResolverError",type:"error"},{inputs:[{name:"name",type:"bytes"},{name:"resolver",type:"address"}],name:"ResolverNotContract",type:"error"},{inputs:[{name:"name",type:"bytes"}],name:"ResolverNotFound",type:"error"},{inputs:[{name:"primary",type:"string"},{name:"primaryAddress",type:"bytes"}],name:"ReverseAddressMismatch",type:"error"},{inputs:[{internalType:"bytes4",name:"selector",type:"bytes4"}],name:"UnsupportedResolverProfile",type:"error"}],i=[...a,{name:"resolveWithGateways",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"},{name:"gateways",type:"string[]"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]}],r=[...a,{name:"reverseWithGateways",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"},{type:"uint256",name:"coinType"},{type:"string[]",name:"gateways"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolver"},{type:"address",name:"reverseResolver"}]}];e.s(["addressResolverAbi",0,[{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"}],outputs:[{name:"",type:"address"}]},{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"coinType",type:"uint256"}],outputs:[{name:"",type:"bytes"}]}],"batchGatewayAbi",0,n,"erc1155Abi",0,[{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"uint256",name:"balance",type:"uint256"},{internalType:"uint256",name:"needed",type:"uint256"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ERC1155InsufficientBalance",type:"error"},{inputs:[{internalType:"address",name:"approver",type:"address"}],name:"ERC1155InvalidApprover",type:"error"},{inputs:[{internalType:"uint256",name:"idsLength",type:"uint256"},{internalType:"uint256",name:"valuesLength",type:"uint256"}],name:"ERC1155InvalidArrayLength",type:"error"},{inputs:[{internalType:"address",name:"operator",type:"address"}],name:"ERC1155InvalidOperator",type:"error"},{inputs:[{internalType:"address",name:"receiver",type:"address"}],name:"ERC1155InvalidReceiver",type:"error"},{inputs:[{internalType:"address",name:"sender",type:"address"}],name:"ERC1155InvalidSender",type:"error"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"address",name:"owner",type:"address"}],name:"ERC1155MissingApprovalForAll",type:"error"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256[]",name:"ids",type:"uint256[]"},{indexed:!1,internalType:"uint256[]",name:"values",type:"uint256[]"}],name:"TransferBatch",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"id",type:"uint256"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"TransferSingle",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"string",name:"value",type:"string"},{indexed:!0,internalType:"uint256",name:"id",type:"uint256"}],name:"URI",type:"event"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"id",type:"uint256"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address[]",name:"accounts",type:"address[]"},{internalType:"uint256[]",name:"ids",type:"uint256[]"}],name:"balanceOfBatch",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256[]",name:"ids",type:"uint256[]"},{internalType:"uint256[]",name:"values",type:"uint256[]"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeBatchTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"id",type:"uint256"},{internalType:"uint256",name:"value",type:"uint256"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"uri",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"}],"erc1271Abi",0,[{name:"isValidSignature",type:"function",stateMutability:"view",inputs:[{name:"hash",type:"bytes32"},{name:"signature",type:"bytes"}],outputs:[{name:"",type:"bytes4"}]}],"erc20Abi",0,[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{type:"string"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{type:"string"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{type:"bool"}]}],"erc20Abi_bytes32",0,[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{type:"bytes32"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{type:"bytes32"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{type:"bool"}]}],"erc4626Abi",0,[{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"sender",type:"address"},{indexed:!0,name:"receiver",type:"address"},{indexed:!1,name:"assets",type:"uint256"},{indexed:!1,name:"shares",type:"uint256"}],name:"Deposit",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"sender",type:"address"},{indexed:!0,name:"receiver",type:"address"},{indexed:!0,name:"owner",type:"address"},{indexed:!1,name:"assets",type:"uint256"},{indexed:!1,name:"shares",type:"uint256"}],name:"Withdraw",type:"event"},{inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],name:"allowance",outputs:[{type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],name:"approve",outputs:[{type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"asset",outputs:[{name:"assetTokenAddress",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{name:"account",type:"address"}],name:"balanceOf",outputs:[{type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{name:"shares",type:"uint256"}],name:"convertToAssets",outputs:[{name:"assets",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{name:"assets",type:"uint256"}],name:"convertToShares",outputs:[{name:"shares",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{name:"assets",type:"uint256"},{name:"receiver",type:"address"}],name:"deposit",outputs:[{name:"shares",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{name:"caller",type:"address"}],name:"maxDeposit",outputs:[{name:"maxAssets",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{name:"caller",type:"address"}],name:"maxMint",outputs:[{name:"maxShares",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{name:"owner",type:"address"}],name:"maxRedeem",outputs:[{name:"maxShares",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{name:"owner",type:"address"}],name:"maxWithdraw",outputs:[{name:"maxAssets",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{name:"shares",type:"uint256"},{name:"receiver",type:"address"}],name:"mint",outputs:[{name:"assets",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{name:"assets",type:"uint256"}],name:"previewDeposit",outputs:[{name:"shares",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{name:"shares",type:"uint256"}],name:"previewMint",outputs:[{name:"assets",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{name:"shares",type:"uint256"}],name:"previewRedeem",outputs:[{name:"assets",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{name:"assets",type:"uint256"}],name:"previewWithdraw",outputs:[{name:"shares",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{name:"shares",type:"uint256"},{name:"receiver",type:"address"},{name:"owner",type:"address"}],name:"redeem",outputs:[{name:"assets",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"totalAssets",outputs:[{name:"totalManagedAssets",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{name:"to",type:"address"},{name:"amount",type:"uint256"}],name:"transfer",outputs:[{type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{name:"from",type:"address"},{name:"to",type:"address"},{name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{name:"assets",type:"uint256"},{name:"receiver",type:"address"},{name:"owner",type:"address"}],name:"withdraw",outputs:[{name:"shares",type:"uint256"}],stateMutability:"nonpayable",type:"function"}],"erc6492SignatureValidatorAbi",0,[{inputs:[{name:"_signer",type:"address"},{name:"_hash",type:"bytes32"},{name:"_signature",type:"bytes"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[{name:"_signer",type:"address"},{name:"_hash",type:"bytes32"},{name:"_signature",type:"bytes"}],outputs:[{type:"bool"}],stateMutability:"nonpayable",type:"function",name:"isValidSig"}],"erc721Abi",0,[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!0,name:"tokenId",type:"uint256"}]},{type:"event",name:"ApprovalForAll",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"operator",type:"address"},{indexed:!1,name:"approved",type:"bool"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!0,name:"tokenId",type:"uint256"}]},{type:"function",name:"approve",stateMutability:"payable",inputs:[{name:"spender",type:"address"},{name:"tokenId",type:"uint256"}],outputs:[]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{type:"uint256"}]},{type:"function",name:"getApproved",stateMutability:"view",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{type:"address"}]},{type:"function",name:"isApprovedForAll",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"operator",type:"address"}],outputs:[{type:"bool"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{type:"string"}]},{type:"function",name:"ownerOf",stateMutability:"view",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{name:"owner",type:"address"}]},{type:"function",name:"safeTransferFrom",stateMutability:"payable",inputs:[{name:"from",type:"address"},{name:"to",type:"address"},{name:"tokenId",type:"uint256"}],outputs:[]},{type:"function",name:"safeTransferFrom",stateMutability:"nonpayable",inputs:[{name:"from",type:"address"},{name:"to",type:"address"},{name:"id",type:"uint256"},{name:"data",type:"bytes"}],outputs:[]},{type:"function",name:"setApprovalForAll",stateMutability:"nonpayable",inputs:[{name:"operator",type:"address"},{name:"approved",type:"bool"}],outputs:[]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{type:"string"}]},{type:"function",name:"tokenByIndex",stateMutability:"view",inputs:[{name:"index",type:"uint256"}],outputs:[{type:"uint256"}]},{type:"function",name:"tokenByIndex",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"index",type:"uint256"}],outputs:[{name:"tokenId",type:"uint256"}]},{type:"function",name:"tokenURI",stateMutability:"view",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{type:"string"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{type:"uint256"}]},{type:"function",name:"transferFrom",stateMutability:"payable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"tokenId",type:"uint256"}],outputs:[]}],"multicall3Abi",0,t,"textResolverAbi",0,[{name:"text",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"key",type:"string"}],outputs:[{name:"",type:"string"}]}],"universalResolverResolveAbi",0,i,"universalResolverReverseAbi",0,r])},406924,e=>{"use strict";let t={wei:0,gwei:9,szabo:12,finney:15,ether:18};function n(e,t=0){if(!Number.isInteger(t)||t<0)throw new r({decimals:t});let a=e.toString(),i=a.startsWith("-");i&&(a=a.slice(1));let[s,o]=[(a=a.padStart(t,"0")).slice(0,a.length-t),a.slice(a.length-t)];return o=o.replace(/(0+)$/,""),`${i?"-":""}${s||"0"}${o?`.${o}`:""}`}function a(e,t=0){if(!Number.isInteger(t)||t<0)throw new r({decimals:t});if(!/^-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)$/.test(e))throw new i({value:e});let[n="",s="0"]=e.split("."),o=n.startsWith("-");if(o&&(n=n.slice(1)),""===n&&(n="0"),s=s.replace(/(0+)$/,""),0===t)s.length>0&&Number.parseInt(s[0],10)>=5&&(n=`${BigInt(n)+1n}`),s="";else if(s.length>t){let e=s.slice(0,t);if(Number.parseInt(s.slice(t,t+1),10)>=5){let a=function(e){let t=e.split(""),n=t.length-1;for(;n>=0;){let e=Number.parseInt(t[n],10)+1;if(e<10)return t[n]=String(e),t.join("");t[n]="0",n--}return`1${t.join("")}`}(e);a.length>t?(s=a.slice(1),n=`${BigInt(n)+1n}`):s=a}else s=e}else s=s.padEnd(t,"0");return BigInt(`${o?"-":""}${n}${s}`)}class i extends Error{constructor({value:e}){super(`Value \`${e}\` is not a valid decimal number.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Value.InvalidDecimalNumberError"})}}class r extends Error{constructor({decimals:e}){super(`\`decimals\` must be a non-negative integer. Got \`${e}\`.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Value.InvalidDecimalsError"})}}e.s(["format",0,n,"formatEther",0,function(e,a="wei"){return n(e,t.ether-t[a])},"formatGwei",0,function(e,a="wei"){return n(e,t.gwei-t[a])},"from",0,a,"fromEther",0,function(e,n="wei"){return a(e,t.ether-t[n])},"fromGwei",0,function(e,n="wei"){return a(e,t.gwei-t[n])}])},515919,e=>{"use strict";var t=e.i(406924);e.s(["formatUnits",0,function(e,n){return t.format(e,n)}])},337449,e=>{"use strict";e.i(720140);var t=e.i(227565),n=e.i(540647);e.i(890019);var a=e.i(349820);e.i(881514);var i=e.i(931111);e.i(175235);var r=e.i(964603),s=e.i(953166),o=e.i(555489);let p=o.css`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: ${({borderRadius:e})=>e[2]};
    padding: ${({spacing:e})=>e[1]} !important;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    position: relative;
  }

  :host([data-padding='2']) {
    padding: ${({spacing:e})=>e[2]} !important;
  }

  :host:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host > wui-icon {
    z-index: 10;
  }

  /* -- Colors --------------------------------------------------- */
  :host([data-color='accent-primary']) {
    color: ${({tokens:e})=>e.core.iconAccentPrimary};
  }

  :host([data-color='accent-primary']):after {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  :host([data-color='default']),
  :host([data-color='secondary']) {
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  :host([data-color='default']):after {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  :host([data-color='secondary']):after {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  :host([data-color='success']) {
    color: ${({tokens:e})=>e.core.iconSuccess};
  }

  :host([data-color='success']):after {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
  }

  :host([data-color='error']) {
    color: ${({tokens:e})=>e.core.iconError};
  }

  :host([data-color='error']):after {
    background-color: ${({tokens:e})=>e.core.backgroundError};
  }

  :host([data-color='warning']) {
    color: ${({tokens:e})=>e.core.iconWarning};
  }

  :host([data-color='warning']):after {
    background-color: ${({tokens:e})=>e.core.backgroundWarning};
  }

  :host([data-color='inverse']) {
    color: ${({tokens:e})=>e.theme.iconInverse};
  }

  :host([data-color='inverse']):after {
    background-color: transparent;
  }
`;var u=function(e,t,n,a){var i,r=arguments.length,s=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,a);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let d=class extends t.LitElement{constructor(){super(...arguments),this.icon="copy",this.size="md",this.padding="1",this.color="default"}render(){return this.dataset.padding=this.padding,this.dataset.color=this.color,n.html`
      <wui-icon size=${(0,i.ifDefined)(this.size)} name=${this.icon} color="inherit"></wui-icon>
    `}};d.styles=[r.resetStyles,r.elementStyles,p],u([(0,a.property)()],d.prototype,"icon",void 0),u([(0,a.property)()],d.prototype,"size",void 0),u([(0,a.property)()],d.prototype,"padding",void 0),u([(0,a.property)()],d.prototype,"color",void 0),d=u([(0,s.customElement)("wui-icon-box")],d),e.s([],337449)},857288,e=>{"use strict";e.i(720140);var t=e.i(227565),n=e.i(540647);e.i(890019);var a=e.i(349820),i=e.i(555489),r=e.i(964603),s=e.i(953166),o=e.i(861041);let p=o.css`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 1.4s linear infinite;
    color: var(--local-color);
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`;var u=function(e,t,n,a){var i,r=arguments.length,s=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,a);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let d=class extends t.LitElement{constructor(){super(...arguments),this.color="primary",this.size="lg"}render(){let e={primary:i.vars.tokens.theme.textPrimary,secondary:i.vars.tokens.theme.textSecondary,tertiary:i.vars.tokens.theme.textTertiary,invert:i.vars.tokens.theme.textInvert,error:i.vars.tokens.core.textError,warning:i.vars.tokens.core.textWarning,"accent-primary":i.vars.tokens.core.textAccentPrimary};return this.style.cssText=`
      --local-color: ${"inherit"===this.color?"inherit":e[this.color]};
      `,this.dataset.size=this.size,n.html`<svg viewBox="0 0 16 17" fill="none">
      <path
        d="M8.75 2.65625V4.65625C8.75 4.85516 8.67098 5.04593 8.53033 5.18658C8.38968 5.32723 8.19891 5.40625 8 5.40625C7.80109 5.40625 7.61032 5.32723 7.46967 5.18658C7.32902 5.04593 7.25 4.85516 7.25 4.65625V2.65625C7.25 2.45734 7.32902 2.26657 7.46967 2.12592C7.61032 1.98527 7.80109 1.90625 8 1.90625C8.19891 1.90625 8.38968 1.98527 8.53033 2.12592C8.67098 2.26657 8.75 2.45734 8.75 2.65625ZM14 7.90625H12C11.8011 7.90625 11.6103 7.98527 11.4697 8.12592C11.329 8.26657 11.25 8.45734 11.25 8.65625C11.25 8.85516 11.329 9.04593 11.4697 9.18658C11.6103 9.32723 11.8011 9.40625 12 9.40625H14C14.1989 9.40625 14.3897 9.32723 14.5303 9.18658C14.671 9.04593 14.75 8.85516 14.75 8.65625C14.75 8.45734 14.671 8.26657 14.5303 8.12592C14.3897 7.98527 14.1989 7.90625 14 7.90625ZM11.3588 10.9544C11.289 10.8846 11.2062 10.8293 11.115 10.7915C11.0239 10.7538 10.9262 10.7343 10.8275 10.7343C10.7288 10.7343 10.6311 10.7538 10.54 10.7915C10.4488 10.8293 10.366 10.8846 10.2963 10.9544C10.2265 11.0241 10.1711 11.107 10.1334 11.1981C10.0956 11.2893 10.0762 11.387 10.0762 11.4856C10.0762 11.5843 10.0956 11.682 10.1334 11.7731C10.1711 11.8643 10.2265 11.9471 10.2963 12.0169L11.7106 13.4312C11.8515 13.5721 12.0426 13.6513 12.2419 13.6513C12.4411 13.6513 12.6322 13.5721 12.7731 13.4312C12.914 13.2904 12.9932 13.0993 12.9932 12.9C12.9932 12.7007 12.914 12.5096 12.7731 12.3687L11.3588 10.9544ZM8 11.9062C7.80109 11.9062 7.61032 11.9853 7.46967 12.1259C7.32902 12.2666 7.25 12.4573 7.25 12.6562V14.6562C7.25 14.8552 7.32902 15.0459 7.46967 15.1866C7.61032 15.3272 7.80109 15.4062 8 15.4062C8.19891 15.4062 8.38968 15.3272 8.53033 15.1866C8.67098 15.0459 8.75 14.8552 8.75 14.6562V12.6562C8.75 12.4573 8.67098 12.2666 8.53033 12.1259C8.38968 11.9853 8.19891 11.9062 8 11.9062ZM4.64125 10.9544L3.22688 12.3687C3.08598 12.5096 3.00682 12.7007 3.00682 12.9C3.00682 13.0993 3.08598 13.2904 3.22688 13.4312C3.36777 13.5721 3.55887 13.6513 3.75813 13.6513C3.95738 13.6513 4.14848 13.5721 4.28937 13.4312L5.70375 12.0169C5.84465 11.876 5.9238 11.6849 5.9238 11.4856C5.9238 11.2864 5.84465 11.0953 5.70375 10.9544C5.56285 10.8135 5.37176 10.7343 5.1725 10.7343C4.97324 10.7343 4.78215 10.8135 4.64125 10.9544ZM4.75 8.65625C4.75 8.45734 4.67098 8.26657 4.53033 8.12592C4.38968 7.98527 4.19891 7.90625 4 7.90625H2C1.80109 7.90625 1.61032 7.98527 1.46967 8.12592C1.32902 8.26657 1.25 8.45734 1.25 8.65625C1.25 8.85516 1.32902 9.04593 1.46967 9.18658C1.61032 9.32723 1.80109 9.40625 2 9.40625H4C4.19891 9.40625 4.38968 9.32723 4.53033 9.18658C4.67098 9.04593 4.75 8.85516 4.75 8.65625ZM4.2875 3.88313C4.1466 3.74223 3.95551 3.66307 3.75625 3.66307C3.55699 3.66307 3.3659 3.74223 3.225 3.88313C3.0841 4.02402 3.00495 4.21512 3.00495 4.41438C3.00495 4.61363 3.0841 4.80473 3.225 4.94562L4.64125 6.35813C4.78215 6.49902 4.97324 6.57818 5.1725 6.57818C5.37176 6.57818 5.56285 6.49902 5.70375 6.35813C5.84465 6.21723 5.9238 6.02613 5.9238 5.82688C5.9238 5.62762 5.84465 5.43652 5.70375 5.29563L4.2875 3.88313Z"
        fill="currentColor"
      />
    </svg>`}};d.styles=[r.resetStyles,p],u([(0,a.property)()],d.prototype,"color",void 0),u([(0,a.property)()],d.prototype,"size",void 0),d=u([(0,s.customElement)("wui-loading-spinner")],d),e.s([],857288)},496768,692083,e=>{"use strict";e.i(720140);var t=e.i(227565),n=e.i(540647);e.i(890019);var a=e.i(349820);e.i(175235),e.i(857288),e.i(897818);var i=e.i(964603),r=e.i(953166),s=e.i(555489);let o=s.css`
  :host {
    width: var(--local-width);
  }

  button {
    width: var(--local-width);
    white-space: nowrap;
    column-gap: ${({spacing:e})=>e[2]};
    transition:
      scale ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-1"]},
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      border-radius ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]};
    will-change: scale, background-color, border-radius;
    cursor: pointer;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='sm'] {
    border-radius: ${({borderRadius:e})=>e[2]};
    padding: 0 ${({spacing:e})=>e[2]};
    height: 28px;
  }

  button[data-size='md'] {
    border-radius: ${({borderRadius:e})=>e[3]};
    padding: 0 ${({spacing:e})=>e[4]};
    height: 38px;
  }

  button[data-size='lg'] {
    border-radius: ${({borderRadius:e})=>e[4]};
    padding: 0 ${({spacing:e})=>e[5]};
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='accent-primary'] {
    background-color: ${({tokens:e})=>e.core.backgroundAccentPrimary};
    color: ${({tokens:e})=>e.theme.textInvert};
  }

  button[data-variant='accent-secondary'] {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  button[data-variant='neutral-primary'] {
    background-color: ${({tokens:e})=>e.theme.backgroundInvert};
    color: ${({tokens:e})=>e.theme.textInvert};
  }

  button[data-variant='neutral-secondary'] {
    background-color: transparent;
    border: 1px solid ${({tokens:e})=>e.theme.borderSecondary};
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  button[data-variant='neutral-tertiary'] {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  button[data-variant='error-primary'] {
    background-color: ${({tokens:e})=>e.core.textError};
    color: ${({tokens:e})=>e.theme.textInvert};
  }

  button[data-variant='error-secondary'] {
    background-color: ${({tokens:e})=>e.core.backgroundError};
    color: ${({tokens:e})=>e.core.textError};
  }

  button[data-variant='shade'] {
    background: var(--wui-color-gray-glass-002);
    color: var(--wui-color-fg-200);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-size='sm']:focus-visible:enabled {
    border-radius: 28px;
  }

  button[data-size='md']:focus-visible:enabled {
    border-radius: 38px;
  }

  button[data-size='lg']:focus-visible:enabled {
    border-radius: 48px;
  }
  button[data-variant='shade']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) {
    button[data-size='sm']:hover:enabled {
      border-radius: 28px;
    }

    button[data-size='md']:hover:enabled {
      border-radius: 38px;
    }

    button[data-size='lg']:hover:enabled {
      border-radius: 48px;
    }

    button[data-variant='shade']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='shade']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }
  }

  button[data-size='sm']:active:enabled {
    border-radius: 28px;
  }

  button[data-size='md']:active:enabled {
    border-radius: 38px;
  }

  button[data-size='lg']:active:enabled {
    border-radius: 48px;
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled {
    opacity: 0.3;
  }
`;var p=function(e,t,n,a){var i,r=arguments.length,s=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,a);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let u={lg:"lg-regular-mono",md:"md-regular-mono",sm:"sm-regular-mono"},d={lg:"md",md:"md",sm:"sm"},l=class extends t.LitElement{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="accent-primary"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
     `;let e=this.textVariant??u[this.size];return n.html`
      <button data-variant=${this.variant} data-size=${this.size} ?disabled=${this.disabled}>
        ${this.loadingTemplate()}
        <slot name="iconLeft"></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}loadingTemplate(){if(this.loading){let e=d[this.size],t="neutral-primary"===this.variant||"accent-primary"===this.variant?"invert":"primary";return n.html`<wui-loading-spinner color=${t} size=${e}></wui-loading-spinner>`}return null}};l.styles=[i.resetStyles,i.elementStyles,o],p([(0,a.property)()],l.prototype,"size",void 0),p([(0,a.property)({type:Boolean})],l.prototype,"disabled",void 0),p([(0,a.property)({type:Boolean})],l.prototype,"fullWidth",void 0),p([(0,a.property)({type:Boolean})],l.prototype,"loading",void 0),p([(0,a.property)()],l.prototype,"variant",void 0),p([(0,a.property)()],l.prototype,"textVariant",void 0),l=p([(0,r.customElement)("wui-button")],l),e.s([],692083),e.s([],496768)},453424,e=>{"use strict";e.i(175235),e.s([])},608353,e=>{"use strict";e.i(720140);var t=e.i(227565),n=e.i(540647);e.i(890019);var a=e.i(349820),i=e.i(953166),r=e.i(555489);let s=r.css`
  :host {
    display: block;
    background: linear-gradient(
      90deg,
      ${({tokens:e})=>e.theme.foregroundPrimary} 0%,
      ${({tokens:e})=>e.theme.foregroundSecondary} 50%,
      ${({tokens:e})=>e.theme.foregroundPrimary} 100%
    );
    background-size: 200% 100%;
    animation: shimmer 2s linear infinite;
    border-radius: ${({borderRadius:e})=>e[1]};
  }

  :host([data-rounded='true']) {
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  @keyframes shimmer {
    0% {
      background-position: 100% 0;
    }
    100% {
      background-position: -100% 0;
    }
  }
`;var o=function(e,t,n,a){var i,r=arguments.length,s=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,a);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let p=class extends t.LitElement{constructor(){super(...arguments),this.width="",this.height="",this.variant="default",this.rounded=!1}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
    `,this.dataset.rounded=this.rounded?"true":"false",n.html`<slot></slot>`}};p.styles=[s],o([(0,a.property)()],p.prototype,"width",void 0),o([(0,a.property)()],p.prototype,"height",void 0),o([(0,a.property)()],p.prototype,"variant",void 0),o([(0,a.property)({type:Boolean})],p.prototype,"rounded",void 0),p=o([(0,i.customElement)("wui-shimmer")],p),e.s([],608353)},435269,e=>{"use strict";e.i(608353),e.s([])},404213,e=>{"use strict";e.s(["MathUtil",0,{interpolate(e,t,n){if(2!==e.length||2!==t.length)throw Error("inputRange and outputRange must be an array of length 2");let a=e[0]||0,i=e[1]||0,r=t[0]||0,s=t[1]||0;return n<a?r:n>i?s:(s-r)/(i-a)*(n-a)+r}}])},99748,898103,e=>{"use strict";e.i(720140);var t=e.i(227565),n=e.i(540647);e.i(890019);var a=e.i(349820),i=e.i(378424),r=e.i(793700),s=e.i(966584),o=e.i(374225),p=e.i(165064),u=e.i(715312);let d=(0,o.proxy)({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"}),l=(0,u.withErrorBoundary)({state:d,subscribe:e=>(0,o.subscribe)(d,()=>e(d)),subscribeKey:(e,t)=>(0,p.subscribeKey)(d,e,t),showTooltip({message:e,triggerRect:t,variant:n}){d.open=!0,d.message=e,d.triggerRect=t,d.variant=n},hide(){d.open=!1,d.message="",d.triggerRect={width:0,height:0,top:0,left:0}}});e.i(540417);var y=e.i(953166),m=e.i(861041);let c=m.css`
  :host {
    width: 100%;
    display: block;
  }
`;var h=function(e,t,n,a){var i,r=arguments.length,s=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,a);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let b=class extends t.LitElement{constructor(){super(),this.unsubscribe=[],this.text="",this.open=l.state.open,this.unsubscribe.push(s.RouterController.subscribeKey("view",()=>{l.hide()}),r.ModalController.subscribeKey("open",e=>{e||l.hide()}),l.subscribeKey("open",e=>{this.open=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),l.hide()}render(){return n.html`
      <div
        @pointermove=${this.onMouseEnter.bind(this)}
        @pointerleave=${this.onMouseLeave.bind(this)}
      >
        ${this.renderChildren()}
      </div>
    `}renderChildren(){return n.html`<slot></slot> `}onMouseEnter(){let e=this.getBoundingClientRect();if(!this.open){let t=document.querySelector("w3m-modal"),n={width:e.width,height:e.height,left:e.left,top:e.top};if(t){let a=t.getBoundingClientRect();n.left=e.left-(window.innerWidth-a.width)/2,n.top=e.top-(window.innerHeight-a.height)/2}l.showTooltip({message:this.text,triggerRect:n,variant:"shade"})}}onMouseLeave(e){this.contains(e.relatedTarget)||l.hide()}};b.styles=[c],h([(0,a.property)()],b.prototype,"text",void 0),h([(0,i.state)()],b.prototype,"open",void 0),b=h([(0,y.customElement)("w3m-tooltip-trigger")],b),e.s([],99748);var v=t;e.i(693043),e.i(453424),e.i(855118);var f=e.i(555489);let g=f.css`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px ${({spacing:e})=>e["3"]} 10px ${({spacing:e})=>e["3"]};
    border-radius: ${({borderRadius:e})=>e["3"]};
    color: ${({tokens:e})=>e.theme.backgroundPrimary};
    position: absolute;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--apkt-modal-width) - ${({spacing:e})=>e["5"]});
    transition: opacity ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity;
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;var w=function(e,t,n,a){var i,r=arguments.length,s=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,a);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let x=class extends v.LitElement{constructor(){super(),this.unsubscribe=[],this.open=l.state.open,this.message=l.state.message,this.triggerRect=l.state.triggerRect,this.variant=l.state.variant,this.unsubscribe.push(l.subscribe(e=>{this.open=e.open,this.message=e.message,this.triggerRect=e.triggerRect,this.variant=e.variant}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){this.dataset.variant=this.variant;let e=this.triggerRect.top,t=this.triggerRect.left;return this.style.cssText=`
    --w3m-tooltip-top: ${e}px;
    --w3m-tooltip-left: ${t}px;
    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;
    --w3m-tooltip-display: ${this.open?"flex":"none"};
    --w3m-tooltip-opacity: ${+!!this.open};
    `,n.html`<wui-flex>
      <wui-icon data-placement="top" size="inherit" name="cursor"></wui-icon>
      <wui-text color="primary" variant="sm-regular">${this.message}</wui-text>
    </wui-flex>`}};x.styles=[g],w([(0,i.state)()],x.prototype,"open",void 0),w([(0,i.state)()],x.prototype,"message",void 0),w([(0,i.state)()],x.prototype,"triggerRect",void 0),w([(0,i.state)()],x.prototype,"variant",void 0),x=w([(0,y.customElement)("w3m-tooltip")],x),e.s([],898103)}]);