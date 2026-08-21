module.exports=[878773,(a,b,c)=>{a.e,b.exports=function(){"use strict";var a="millisecond",b="second",c="minute",d="hour",e="week",f="month",g="quarter",h="year",i="date",j="Invalid Date",k=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,l=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m=function(a,b,c){var d=String(a);return!d||d.length>=b?a:""+Array(b+1-d.length).join(c)+a},n="en",o={};o[n]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(a){var b=["th","st","nd","rd"],c=a%100;return"["+a+(b[(c-20)%10]||b[c]||b[0])+"]"}};var p="$isDayjsObject",q=function(a){return a instanceof u||!(!a||!a[p])},r=function a(b,c,d){var e;if(!b)return n;if("string"==typeof b){var f=b.toLowerCase();o[f]&&(e=f),c&&(o[f]=c,e=f);var g=b.split("-");if(!e&&g.length>1)return a(g[0])}else{var h=b.name;o[h]=b,e=h}return!d&&e&&(n=e),e||!d&&n},s=function(a,b){if(q(a))return a.clone();var c="object"==typeof b?b:{};return c.date=a,c.args=arguments,new u(c)},t={s:m,z:function(a){var b=-a.utcOffset(),c=Math.abs(b);return(b<=0?"+":"-")+m(Math.floor(c/60),2,"0")+":"+m(c%60,2,"0")},m:function a(b,c){if(b.date()<c.date())return-a(c,b);var d=12*(c.year()-b.year())+(c.month()-b.month()),e=b.clone().add(d,f),g=c-e<0,h=b.clone().add(d+(g?-1:1),f);return+(-(d+(c-e)/(g?e-h:h-e))||0)},a:function(a){return a<0?Math.ceil(a)||0:Math.floor(a)},p:function(j){return({M:f,y:h,w:e,d:"day",D:i,h:d,m:c,s:b,ms:a,Q:g})[j]||String(j||"").toLowerCase().replace(/s$/,"")},u:function(a){return void 0===a}};t.l=r,t.i=q,t.w=function(a,b){return s(a,{locale:b.$L,utc:b.$u,x:b.$x,$offset:b.$offset})};var u=function(){function m(a){this.$L=r(a.locale,null,!0),this.parse(a),this.$x=this.$x||a.x||{},this[p]=!0}var n=m.prototype;return n.parse=function(a){this.$d=function(a){var b=a.date,c=a.utc;if(null===b)return new Date(NaN);if(t.u(b))return new Date;if(b instanceof Date)return new Date(b);if("string"==typeof b&&!/Z$/i.test(b)){var d=b.match(k);if(d){var e=d[2]-1||0,f=(d[7]||"0").substring(0,3);return c?new Date(Date.UTC(d[1],e,d[3]||1,d[4]||0,d[5]||0,d[6]||0,f)):new Date(d[1],e,d[3]||1,d[4]||0,d[5]||0,d[6]||0,f)}}return new Date(b)}(a),this.init()},n.init=function(){var a=this.$d;this.$y=a.getFullYear(),this.$M=a.getMonth(),this.$D=a.getDate(),this.$W=a.getDay(),this.$H=a.getHours(),this.$m=a.getMinutes(),this.$s=a.getSeconds(),this.$ms=a.getMilliseconds()},n.$utils=function(){return t},n.isValid=function(){return this.$d.toString()!==j},n.isSame=function(a,b){var c=s(a);return this.startOf(b)<=c&&c<=this.endOf(b)},n.isAfter=function(a,b){return s(a)<this.startOf(b)},n.isBefore=function(a,b){return this.endOf(b)<s(a)},n.$g=function(a,b,c){return t.u(a)?this[b]:this.set(c,a)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(a,g){var j=this,k=!!t.u(g)||g,l=t.p(a),m=function(a,b){var c=t.w(j.$u?Date.UTC(j.$y,b,a):new Date(j.$y,b,a),j);return k?c:c.endOf("day")},n=function(a,b){return t.w(j.toDate()[a].apply(j.toDate("s"),(k?[0,0,0,0]:[23,59,59,999]).slice(b)),j)},o=this.$W,p=this.$M,q=this.$D,r="set"+(this.$u?"UTC":"");switch(l){case h:return k?m(1,0):m(31,11);case f:return k?m(1,p):m(0,p+1);case e:var s=this.$locale().weekStart||0,u=(o<s?o+7:o)-s;return m(k?q-u:q+(6-u),p);case"day":case i:return n(r+"Hours",0);case d:return n(r+"Minutes",1);case c:return n(r+"Seconds",2);case b:return n(r+"Milliseconds",3);default:return this.clone()}},n.endOf=function(a){return this.startOf(a,!1)},n.$set=function(e,g){var j,k=t.p(e),l="set"+(this.$u?"UTC":""),m=((j={}).day=l+"Date",j[i]=l+"Date",j[f]=l+"Month",j[h]=l+"FullYear",j[d]=l+"Hours",j[c]=l+"Minutes",j[b]=l+"Seconds",j[a]=l+"Milliseconds",j)[k],n="day"===k?this.$D+(g-this.$W):g;if(k===f||k===h){var o=this.clone().set(i,1);o.$d[m](n),o.init(),this.$d=o.set(i,Math.min(this.$D,o.daysInMonth())).$d}else m&&this.$d[m](n);return this.init(),this},n.set=function(a,b){return this.clone().$set(a,b)},n.get=function(a){return this[t.p(a)]()},n.add=function(a,g){var i,j=this;a=Number(a);var k=t.p(g),l=function(b){var c=s(j);return t.w(c.date(c.date()+Math.round(b*a)),j)};if(k===f)return this.set(f,this.$M+a);if(k===h)return this.set(h,this.$y+a);if("day"===k)return l(1);if(k===e)return l(7);var m=((i={})[c]=6e4,i[d]=36e5,i[b]=1e3,i)[k]||1,n=this.$d.getTime()+a*m;return t.w(n,this)},n.subtract=function(a,b){return this.add(-1*a,b)},n.format=function(a){var b=this,c=this.$locale();if(!this.isValid())return c.invalidDate||j;var d=a||"YYYY-MM-DDTHH:mm:ssZ",e=t.z(this),f=this.$H,g=this.$m,h=this.$M,i=c.weekdays,k=c.months,m=c.meridiem,n=function(a,c,e,f){return a&&(a[c]||a(b,d))||e[c].slice(0,f)},o=function(a){return t.s(f%12||12,a,"0")},p=m||function(a,b,c){var d=a<12?"AM":"PM";return c?d.toLowerCase():d};return d.replace(l,function(a,d){return d||function(a){switch(a){case"YY":return String(b.$y).slice(-2);case"YYYY":return t.s(b.$y,4,"0");case"M":return h+1;case"MM":return t.s(h+1,2,"0");case"MMM":return n(c.monthsShort,h,k,3);case"MMMM":return n(k,h);case"D":return b.$D;case"DD":return t.s(b.$D,2,"0");case"d":return String(b.$W);case"dd":return n(c.weekdaysMin,b.$W,i,2);case"ddd":return n(c.weekdaysShort,b.$W,i,3);case"dddd":return i[b.$W];case"H":return String(f);case"HH":return t.s(f,2,"0");case"h":return o(1);case"hh":return o(2);case"a":return p(f,g,!0);case"A":return p(f,g,!1);case"m":return String(g);case"mm":return t.s(g,2,"0");case"s":return String(b.$s);case"ss":return t.s(b.$s,2,"0");case"SSS":return t.s(b.$ms,3,"0");case"Z":return e}return null}(a)||e.replace(":","")})},n.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},n.diff=function(a,i,j){var k,l=this,m=t.p(i),n=s(a),o=(n.utcOffset()-this.utcOffset())*6e4,p=this-n,q=function(){return t.m(l,n)};switch(m){case h:k=q()/12;break;case f:k=q();break;case g:k=q()/3;break;case e:k=(p-o)/6048e5;break;case"day":k=(p-o)/864e5;break;case d:k=p/36e5;break;case c:k=p/6e4;break;case b:k=p/1e3;break;default:k=p}return j?k:t.a(k)},n.daysInMonth=function(){return this.endOf(f).$D},n.$locale=function(){return o[this.$L]},n.locale=function(a,b){if(!a)return this.$L;var c=this.clone(),d=r(a,b,!0);return d&&(c.$L=d),c},n.clone=function(){return t.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},m}(),v=u.prototype;return s.prototype=v,[["$ms",a],["$s",b],["$m",c],["$H",d],["$W","day"],["$M",f],["$y",h],["$D",i]].forEach(function(a){v[a[1]]=function(b){return this.$g(b,a[0],a[1])}}),s.extend=function(a,b){return a.$i||(a(b,u,s),a.$i=!0),s},s.locale=r,s.isDayjs=q,s.unix=function(a){return s(1e3*a)},s.en=o[n],s.Ls=o,s.p={},s}()},484134,(a,b,c)=>{a.e,b.exports={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(a){var b=["th","st","nd","rd"],c=a%100;return"["+a+(b[(c-20)%10]||b[c]||b[0])+"]"}}},777844,(a,b,c)=>{a.e,b.exports=function(a,b,c){a=a||{};var d=b.prototype,e={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function f(a,b,c,e){return d.fromToBase(a,b,c,e)}c.en.relativeTime=e,d.fromToBase=function(b,d,f,g,h){for(var i,j,k,l=f.$locale().relativeTime||e,m=a.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],n=m.length,o=0;o<n;o+=1){var p=m[o];p.d&&(i=g?c(b).diff(f,p.d,!0):f.diff(b,p.d,!0));var q=(a.rounding||Math.round)(Math.abs(i));if(k=i>0,q<=p.r||!p.r){q<=1&&o>0&&(p=m[o-1]);var r=l[p.l];h&&(q=h(""+q)),j="string"==typeof r?r.replace("%d",q):r(q,d,p.l,k);break}}if(d)return j;var s=k?l.future:l.past;return"function"==typeof s?s(j):s.replace("%s",j)},d.to=function(a,b){return f(a,b,this,!0)},d.from=function(a,b){return f(a,b,this)};var g=function(a){return a.$u?c.utc():c()};d.toNow=function(a){return this.to(g(this),a)},d.fromNow=function(a){return this.from(g(this),a)}}},161839,(a,b,c)=>{a.e,b.exports=function(a,b,c){c.updateLocale=function(a,b){var d=c.Ls[a];if(d)return(b?Object.keys(b):[]).forEach(function(a){d[a]=b[a]}),d}}},439150,a=>{"use strict";a.i(176996);var b,c,d=a.i(44886),e=a.i(979837);a.i(525181);var f=a.i(129349),g=a.i(905653),h=a.i(878773),i=a.i(484134),j=a.i(777844),k=a.i(161839);h.default.extend(j.default),h.default.extend(k.default);let l={...i.default,name:"en-web3-modal",relativeTime:{future:"in %s",past:"%s ago",s:"%d sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}},m=["January","February","March","April","May","June","July","August","September","October","November","December"];h.default.locale("en-web3-modal",l);var n=a.i(34525),o=a.i(456594),p=a.i(649637),q=a.i(412631),r=a.i(682762),s=a.i(44946),t=a.i(932774);a.i(564205);var u=a.i(415274);let v=["receive","deposit","borrow","claim"],w=["withdraw","repay","burn"],x={getTransactionGroupTitle(a,b){let c=((a=new Date().toISOString())=>(0,h.default)(a).year())(),d=m[b];return a===c?d:`${d} ${a}`},getTransactionImages(a){let[b]=a;return a?.length>1?a.map(a=>this.getTransactionImage(a)):[this.getTransactionImage(b)]},getTransactionImage:a=>({type:x.getTransactionTransferTokenType(a),url:x.getTransactionImageURL(a)}),getTransactionImageURL(a){let b,c=!!a?.nft_info,d=!!a?.fungible_info;return a&&c?b=a?.nft_info?.content?.preview?.url:a&&d&&(b=a?.fungible_info?.icon?.url),b},getTransactionTransferTokenType:a=>a?.fungible_info?"FUNGIBLE":a?.nft_info?"NFT":void 0,getTransactionDescriptions(a,b){let c=a?.metadata?.operationType,d=b||a?.transfers,e=d&&d.length>0,f=d&&d.length>1,g=e&&d.every(a=>!!a?.fungible_info),[h,i]=d||[],j=this.getTransferDescription(h),k=this.getTransferDescription(i);if(!e)return("send"===c||"receive"===c)&&g?[j=u.UiHelperUtil.getTruncateString({string:a?.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),u.UiHelperUtil.getTruncateString({string:a?.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"})]:[a.metadata.status];if(f)return d?.map(a=>this.getTransferDescription(a));let l="";return v.includes(c)?l="+":w.includes(c)&&(l="-"),[j=l.concat(j)]},getTransferDescription(a){let b="";return a&&(a?.nft_info?b=a?.nft_info?.name||"-":a?.fungible_info&&(b=this.getFungibleTransferDescription(a)||"-")),b},getFungibleTransferDescription(a){return a?[this.getQuantityFixedValue(a?.quantity.numeric),a?.fungible_info?.symbol].join(" ").trim():null},mergeTransfers(a){if(a?.length<=1)return a;let b=this.filterGasFeeTransfers(a).reduce((a,b)=>{let c=b?.fungible_info?.name,d=a.find(({fungible_info:a,direction:d})=>c&&c===a?.name&&d===b.direction);if(d){let a=Number(d.quantity.numeric)+Number(b.quantity.numeric);d.quantity.numeric=a.toString(),d.value=(d.value||0)+(b.value||0)}else a.push(b);return a},[]),c=b;return b.length>2&&(c=b.sort((a,b)=>(b.value||0)-(a.value||0)).slice(0,2)),c=c.sort((a,b)=>"out"===a.direction&&"in"===b.direction?-1:+("in"===a.direction&&"out"===b.direction))},filterGasFeeTransfers(a){let b=a?.reduce((a,b)=>{let c=b?.fungible_info?.name;return c&&(a[c]||(a[c]=[]),a[c].push(b)),a},{}),c=[];return Object.values(b??{}).forEach(a=>{if(1===a.length){let b=a[0];b&&c.push(b)}else{let b=a.filter(a=>"in"===a.direction),d=a.filter(a=>"out"===a.direction);if(1===b.length&&1===d.length){let e=b[0],f=d[0],g=!1;if(e&&f){let a=Number(e.quantity.numeric),b=Number(f.quantity.numeric);b<.1*a?(c.push(e),g=!0):a<.1*b&&(c.push(f),g=!0)}g||c.push(...a)}else{let b=this.filterGasFeesFromTokenGroup(a);c.push(...b)}}}),a?.forEach(a=>{a?.fungible_info?.name||c.push(a)}),c},filterGasFeesFromTokenGroup(a){if(a.length<=1)return a;let b=a?.map(a=>Number(a.quantity.numeric)),c=Math.max(...b);if(Math.min(...b)<.01*c)return a?.filter(a=>Number(a.quantity.numeric)>=.01*c);let d=a?.filter(a=>"in"===a.direction),e=a?.filter(a=>"out"===a.direction);if(1===d.length&&1===e.length){let a=d[0],b=e[0];if(a&&b){let c=Number(a.quantity.numeric),d=Number(b.quantity.numeric);if(d<.1*c)return[a];if(c<.1*d)return[b]}}return a},getQuantityFixedValue:a=>a?parseFloat(a).toFixed(3):null};var y=a.i(526551);a.i(735803),a.i(372488),a.i(405239),a.i(603511);var z=d;a.i(876091);var A=a.i(960078);a.i(696585);var B=a.i(924968);(b=c||(c={})).approve="approved",b.bought="bought",b.borrow="borrowed",b.burn="burnt",b.cancel="canceled",b.claim="claimed",b.deploy="deployed",b.deposit="deposited",b.execute="executed",b.mint="minted",b.receive="received",b.repay="repaid",b.send="sent",b.sell="sold",b.stake="staked",b.trade="swapped",b.unstake="unstaked",b.withdraw="withdrawn";var C=d;a.i(808710),a.i(508423),a.i(188110);var D=a.i(192361);let E=D.css`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px ${({tokens:a})=>a.core.glass010};
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
  }

  :host([data-no-images='true']) > wui-flex {
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
    border-radius: ${({borderRadius:a})=>a[3]} !important;
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }

  .swap-fallback-container {
    position: absolute;
    inset: 0;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .swap-fallback-container.first {
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-fallback-container.last {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }

  wui-flex.status-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
    border-radius: ${({borderRadius:a})=>a[4]};
    background-color: ${({tokens:a})=>a.theme.backgroundPrimary};
    box-shadow: 0 0 0 2px ${({tokens:a})=>a.theme.backgroundPrimary};
    overflow: hidden;
    width: 16px;
    height: 16px;
  }
`;var F=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let G=class extends C.LitElement{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""},this.failedImageUrls=new Set}handleImageError(a){return b=>{b.stopPropagation(),this.failedImageUrls.add(a),this.requestUpdate()}}render(){let[a,b]=this.images;this.images.length||(this.dataset.noImages="true");let c=a?.type==="NFT",d=b?.url?"NFT"===b.type:c;return this.style.cssText=`
    --local-left-border-radius: ${c?"var(--apkt-borderRadius-3)":"var(--apkt-borderRadius-5)"};
    --local-right-border-radius: ${d?"var(--apkt-borderRadius-3)":"var(--apkt-borderRadius-5)"};
    `,e.html`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){let[a,b]=this.images;return 2===this.images.length&&(a?.url||b?.url)?this.renderSwapImages(a,b):a?.url&&!this.failedImageUrls.has(a.url)?this.renderSingleImage(a):a?.type==="NFT"?this.renderPlaceholderIcon("nftPlaceholder"):this.renderPlaceholderIcon("coinPlaceholder")}renderSwapImages(a,b){return e.html`<div class="swap-images-container">
      ${a?.url?this.renderImageOrFallback(a,"first",!0):null}
      ${b?.url?this.renderImageOrFallback(b,"last",!0):null}
    </div>`}renderSingleImage(a){return this.renderImageOrFallback(a,void 0,!1)}renderImageOrFallback(a,b,c=!1){return a.url?this.failedImageUrls.has(a.url)?c&&b?this.renderFallbackIconInContainer(b):this.renderFallbackIcon():e.html`<wui-image
      src=${a.url}
      alt="Transaction image"
      @onLoadError=${this.handleImageError(a.url)}
    ></wui-image>`:null}renderFallbackIconInContainer(a){return e.html`<div class="swap-fallback-container ${a}">${this.renderFallbackIcon()}</div>`}renderFallbackIcon(){return e.html`<wui-icon
      size="xl"
      weight="regular"
      color="default"
      name="networkPlaceholder"
    ></wui-icon>`}renderPlaceholderIcon(a){return e.html`<wui-icon size="xl" weight="regular" color="default" name=${a}></wui-icon>`}templateIcon(){let a,b="accent-primary";return(a=this.getIcon(),this.status&&(b=this.getStatusColor()),a)?e.html`
      <wui-flex alignItems="center" justifyContent="center" class="status-box">
        <wui-icon-box size="sm" color=${b} icon=${a}></wui-icon-box>
      </wui-flex>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():"trade"===this.type?"swapHorizontal":"approve"===this.type?"checkmark":"cancel"===this.type?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success";case"failed":return"error";case"pending":return"inverse";default:return"accent-primary"}}};G.styles=[E],F([(0,f.property)()],G.prototype,"type",void 0),F([(0,f.property)()],G.prototype,"status",void 0),F([(0,f.property)()],G.prototype,"direction",void 0),F([(0,f.property)({type:Boolean})],G.prototype,"onlyDirectionIcon",void 0),F([(0,f.property)({type:Array})],G.prototype,"images",void 0),F([(0,f.property)({type:Object})],G.prototype,"secondImage",void 0),F([(0,g.state)()],G.prototype,"failedImageUrls",void 0),G=F([(0,y.customElement)("wui-transaction-visual")],G);let H=D.css`
  :host {
    width: 100%;
  }

  :host > wui-flex:first-child {
    align-items: center;
    column-gap: ${({spacing:a})=>a[2]};
    padding: ${({spacing:a})=>a[1]} ${({spacing:a})=>a[2]};
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var I=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let J=class extends z.LitElement{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[]}render(){return e.html`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${(0,A.ifDefined)(this.direction)}
          type=${this.type}
          .onlyDirectionIcon=${this.onlyDirectionIcon}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="1">
          <wui-text variant="lg-medium" color="primary">
            ${c[this.type]||this.type}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="sm-medium" color="secondary"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){let a=this.descriptions?.[0];return a?e.html`
          <wui-text variant="md-regular" color="secondary">
            <span>${a}</span>
          </wui-text>
        `:null}templateSecondDescription(){let a=this.descriptions?.[1];return a?e.html`
          <wui-icon class="description-separator-icon" size="sm" name="arrowRight"></wui-icon>
          <wui-text variant="md-regular" color="secondary">
            <span>${a}</span>
          </wui-text>
        `:null}};J.styles=[B.resetStyles,H],I([(0,f.property)()],J.prototype,"type",void 0),I([(0,f.property)({type:Array})],J.prototype,"descriptions",void 0),I([(0,f.property)()],J.prototype,"date",void 0),I([(0,f.property)({type:Boolean})],J.prototype,"onlyDirectionIcon",void 0),I([(0,f.property)()],J.prototype,"status",void 0),I([(0,f.property)()],J.prototype,"direction",void 0),I([(0,f.property)({type:Array})],J.prototype,"images",void 0),J=I([(0,y.customElement)("wui-transaction-list-item")],J);var K=d;a.i(219756),a.i(307465);var L=d;let M=D.css`
  wui-flex {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  wui-image {
    border-radius: ${({borderRadius:a})=>a[128]};
  }

  .fallback-icon {
    color: ${({tokens:a})=>a.theme.iconInverse};
    border-radius: ${({borderRadius:a})=>a[3]};
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
  }

  .direction-icon,
  .status-image {
    position: absolute;
    right: 0;
    bottom: 0;
    border-radius: ${({borderRadius:a})=>a[128]};
    border: 2px solid ${({tokens:a})=>a.theme.backgroundPrimary};
  }

  .direction-icon {
    padding: ${({spacing:a})=>a["01"]};
    color: ${({tokens:a})=>a.core.iconSuccess};

    background-color: color-mix(
      in srgb,
      ${({tokens:a})=>a.core.textSuccess} 30%,
      ${({tokens:a})=>a.theme.backgroundPrimary} 70%
    );
  }

  /* -- Sizes --------------------------------------------------- */
  :host([data-size='sm']) > wui-image:not(.status-image),
  :host([data-size='sm']) > wui-flex {
    width: 24px;
    height: 24px;
  }

  :host([data-size='lg']) > wui-image:not(.status-image),
  :host([data-size='lg']) > wui-flex {
    width: 40px;
    height: 40px;
  }

  :host([data-size='sm']) .fallback-icon {
    height: 16px;
    width: 16px;
    padding: ${({spacing:a})=>a[1]};
  }

  :host([data-size='lg']) .fallback-icon {
    height: 32px;
    width: 32px;
    padding: ${({spacing:a})=>a[1]};
  }

  :host([data-size='sm']) .direction-icon,
  :host([data-size='sm']) .status-image {
    transform: translate(40%, 30%);
  }

  :host([data-size='lg']) .direction-icon,
  :host([data-size='lg']) .status-image {
    transform: translate(40%, 10%);
  }

  :host([data-size='sm']) .status-image {
    height: 14px;
    width: 14px;
  }

  :host([data-size='lg']) .status-image {
    height: 20px;
    width: 20px;
  }

  /* -- Crop effects --------------------------------------------------- */
  .swap-crop-left-image,
  .swap-crop-right-image {
    position: absolute;
    top: 0;
    bottom: 0;
  }

  .swap-crop-left-image {
    left: 0;
    clip-path: inset(0px calc(50% + 1.5px) 0px 0%);
  }

  .swap-crop-right-image {
    right: 0;
    clip-path: inset(0px 0px 0px calc(50% + 1.5px));
  }
`;var N=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let O={sm:"xxs",lg:"md"},P=class extends L.LitElement{constructor(){super(...arguments),this.type="approve",this.size="lg",this.statusImageUrl="",this.images=[]}render(){return e.html`<wui-flex>${this.templateVisual()} ${this.templateIcon()}</wui-flex>`}templateVisual(){switch(this.dataset.size=this.size,this.type){case"trade":return this.swapTemplate();case"fiat":return this.fiatTemplate();case"unknown":return this.unknownTemplate();default:return this.tokenTemplate()}}swapTemplate(){let[a,b]=this.images;return 2===this.images.length&&(a||b)?e.html`
        <wui-image class="swap-crop-left-image" src=${a} alt="Swap image"></wui-image>
        <wui-image class="swap-crop-right-image" src=${b} alt="Swap image"></wui-image>
      `:a?e.html`<wui-image src=${a} alt="Swap image"></wui-image>`:null}fiatTemplate(){return e.html`<wui-icon
      class="fallback-icon"
      size=${O[this.size]}
      name="dollar"
    ></wui-icon>`}unknownTemplate(){return e.html`<wui-icon
      class="fallback-icon"
      size=${O[this.size]}
      name="questionMark"
    ></wui-icon>`}tokenTemplate(){let[a]=this.images;return a?e.html`<wui-image src=${a} alt="Token image"></wui-image> `:e.html`<wui-icon
      class="fallback-icon"
      name=${"nft"===this.type?"image":"coinPlaceholder"}
    ></wui-icon>`}templateIcon(){return this.statusImageUrl?e.html`<wui-image
        class="status-image"
        src=${this.statusImageUrl}
        alt="Status image"
      ></wui-image>`:e.html`<wui-icon
      class="direction-icon"
      size=${O[this.size]}
      name=${this.getTemplateIcon()}
    ></wui-icon>`}getTemplateIcon(){return"trade"===this.type?"arrowClockWise":"arrowBottom"}};P.styles=[M],N([(0,f.property)()],P.prototype,"type",void 0),N([(0,f.property)()],P.prototype,"size",void 0),N([(0,f.property)()],P.prototype,"statusImageUrl",void 0),N([(0,f.property)({type:Array})],P.prototype,"images",void 0),P=N([(0,y.customElement)("wui-transaction-thumbnail")],P);let Q=D.css`
  :host > wui-flex:first-child {
    gap: ${({spacing:a})=>a[2]};
    padding: ${({spacing:a})=>a[3]};
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`,R=class extends K.LitElement{render(){return e.html`
      <wui-flex alignItems="center" .padding=${["1","2","1","2"]}>
        <wui-shimmer width="40px" height="40px" rounded></wui-shimmer>
        <wui-flex flexDirection="column" gap="1">
          <wui-shimmer width="124px" height="16px" rounded></wui-shimmer>
          <wui-shimmer width="60px" height="14px" rounded></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" rounded></wui-shimmer>
      </wui-flex>
    `}};R.styles=[B.resetStyles,Q],R=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}([(0,y.customElement)("wui-transaction-list-item-loader")],R);var S=a.i(455434);let T=D.css`
  :host {
    min-height: 100%;
  }

  .group-container[last-group='true'] {
    padding-bottom: ${({spacing:a})=>a["3"]};
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:a})=>a["3"]};
  }

  .contentContainer > .textContent {
    width: 65%;
  }

  .emptyContainer {
    height: 100%;
  }
`;var U=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let V="last-transaction",W=class extends d.LitElement{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.page="activity",this.caipAddress=n.ChainController.state.activeCaipAddress,this.transactionsByYear=s.TransactionsController.state.transactionsByYear,this.loading=s.TransactionsController.state.loading,this.empty=s.TransactionsController.state.empty,this.next=s.TransactionsController.state.next,s.TransactionsController.clearCursor(),this.unsubscribe.push(n.ChainController.subscribeKey("activeCaipAddress",a=>{a&&this.caipAddress!==a&&(s.TransactionsController.resetTransactions(),s.TransactionsController.fetchTransactions(a)),this.caipAddress=a}),n.ChainController.subscribeKey("activeCaipNetwork",()=>{this.updateTransactionView()}),s.TransactionsController.subscribe(a=>{this.transactionsByYear=a.transactionsByYear,this.loading=a.loading,this.empty=a.empty,this.next=a.next}))}firstUpdated(){this.updateTransactionView(),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}render(){return e.html` ${this.empty?null:this.templateTransactionsByYear()}
    ${this.loading?this.templateLoading():null}
    ${!this.loading&&this.empty?this.templateEmpty():null}`}updateTransactionView(){s.TransactionsController.resetTransactions(),this.caipAddress&&s.TransactionsController.fetchTransactions(o.CoreHelperUtil.getPlainAddress(this.caipAddress))}templateTransactionsByYear(){return Object.keys(this.transactionsByYear).sort().reverse().map(a=>{let b=parseInt(a,10),c=Array(12).fill(null).map((a,c)=>({groupTitle:x.getTransactionGroupTitle(b,c),transactions:this.transactionsByYear[b]?.[c]})).filter(({transactions:a})=>a).reverse();return c.map(({groupTitle:a,transactions:b},d)=>{let f=d===c.length-1;return b?e.html`
          <wui-flex
            flexDirection="column"
            class="group-container"
            last-group="${f?"true":"false"}"
            data-testid="month-indexes"
          >
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["2","3","3","3"]}
            >
              <wui-text variant="md-medium" color="secondary" data-testid="group-title">
                ${a}
              </wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="2">
              ${this.templateTransactions(b,f)}
            </wui-flex>
          </wui-flex>
        `:null})})}templateRenderTransaction(a,b){let{date:c,descriptions:d,direction:f,images:g,status:h,type:i,transfers:j,isAllNFT:k}=this.getTransactionListItemProps(a);return e.html`
      <wui-transaction-list-item
        date=${c}
        .direction=${f}
        id=${b&&this.next?V:""}
        status=${h}
        type=${i}
        .images=${g}
        .onlyDirectionIcon=${k||1===j.length}
        .descriptions=${d}
      ></wui-transaction-list-item>
    `}templateTransactions(a,b){return a.map((c,d)=>{let f=b&&d===a.length-1;return e.html`${this.templateRenderTransaction(c,f)}`})}emptyStateActivity(){return e.html`<wui-flex
      class="emptyContainer"
      flexGrow="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      .padding=${["10","5","10","5"]}
      gap="5"
      data-testid="empty-activity-state"
    >
      <wui-icon-box color="default" icon="wallet" size="xl"></wui-icon-box>
      <wui-flex flexDirection="column" alignItems="center" gap="2">
        <wui-text align="center" variant="lg-medium" color="primary">No Transactions yet</wui-text>
        <wui-text align="center" variant="lg-regular" color="secondary"
          >Start trading on dApps <br />
          to grow your wallet!</wui-text
        >
      </wui-flex>
    </wui-flex>`}emptyStateAccount(){return e.html`<wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="4"
      data-testid="empty-account-state"
    >
      <wui-icon-box icon="swapHorizontal" size="lg" color="default"></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="2"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="md-regular" align="center" color="primary">No activity yet</wui-text>
        <wui-text variant="sm-regular" align="center" color="secondary"
          >Your next transactions will appear here</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Trade</wui-link>
    </wui-flex>`}templateEmpty(){return"account"===this.page?e.html`${this.emptyStateAccount()}`:e.html`${this.emptyStateActivity()}`}templateLoading(){return"activity"===this.page?e.html` <wui-flex flexDirection="column" width="100%">
        <wui-flex .padding=${["2","3","3","3"]}>
          <wui-shimmer width="70px" height="16px" rounded></wui-shimmer>
        </wui-flex>
        <wui-flex flexDirection="column" gap="2" width="100%">
          ${Array(7).fill(e.html` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(a=>a)}
        </wui-flex>
      </wui-flex>`:null}onReceiveClick(){r.RouterController.push("WalletReceive")}createPaginationObserver(){let{projectId:a}=q.OptionsController.state;this.paginationObserver=new IntersectionObserver(([b])=>{b?.isIntersecting&&!this.loading&&(s.TransactionsController.fetchTransactions(o.CoreHelperUtil.getPlainAddress(this.caipAddress)),p.EventsController.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:o.CoreHelperUtil.getPlainAddress(this.caipAddress),projectId:a,cursor:this.next,isSmartAccount:(0,t.getPreferredAccountType)(n.ChainController.state.activeChain)===S.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT}}))},{}),this.setPaginationObserver()}setPaginationObserver(){this.paginationObserver?.disconnect();let a=this.shadowRoot?.querySelector(`#${V}`);a&&this.paginationObserver?.observe(a)}getTransactionListItemProps(a){let b=((a,b="DD MMM")=>(0,h.default)(a).format(b))(a?.metadata?.minedAt),c=x.mergeTransfers(a?.transfers||[]),d=x.getTransactionDescriptions(a,c),e=c?.[0],f=!!e&&c?.every(a=>!!a.nft_info),g=x.getTransactionImages(c);return{date:b,direction:e?.direction,descriptions:d,isAllNFT:f,images:g,status:a.metadata?.status,transfers:c,type:a.metadata?.operationType}}};W.styles=T,U([(0,f.property)()],W.prototype,"page",void 0),U([(0,g.state)()],W.prototype,"caipAddress",void 0),U([(0,g.state)()],W.prototype,"transactionsByYear",void 0),U([(0,g.state)()],W.prototype,"loading",void 0),U([(0,g.state)()],W.prototype,"empty",void 0),U([(0,g.state)()],W.prototype,"next",void 0),W=U([(0,y.customElement)("w3m-activity-list")],W),a.s([],439150)}];

//# sourceMappingURL=116m_1mrnrbd._.js.map