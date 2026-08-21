(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,35139,(e,t,r)=>{var i={675:function(e,t){"use strict";t.byteLength=function(e){var t=l(e),r=t[0],i=t[1];return(r+i)*3/4-i},t.toByteArray=function(e){var t,r,n=l(e),s=n[0],a=n[1],u=new o((s+a)*3/4-a),f=0,h=a>0?s-4:s;for(r=0;r<h;r+=4)t=i[e.charCodeAt(r)]<<18|i[e.charCodeAt(r+1)]<<12|i[e.charCodeAt(r+2)]<<6|i[e.charCodeAt(r+3)],u[f++]=t>>16&255,u[f++]=t>>8&255,u[f++]=255&t;return 2===a&&(t=i[e.charCodeAt(r)]<<2|i[e.charCodeAt(r+1)]>>4,u[f++]=255&t),1===a&&(t=i[e.charCodeAt(r)]<<10|i[e.charCodeAt(r+1)]<<4|i[e.charCodeAt(r+2)]>>2,u[f++]=t>>8&255,u[f++]=255&t),u},t.fromByteArray=function(e){for(var t,i=e.length,o=i%3,n=[],s=0,a=i-o;s<a;s+=16383)n.push(function(e,t,i){for(var o,n=[],s=t;s<i;s+=3)o=(e[s]<<16&0xff0000)+(e[s+1]<<8&65280)+(255&e[s+2]),n.push(r[o>>18&63]+r[o>>12&63]+r[o>>6&63]+r[63&o]);return n.join("")}(e,s,s+16383>a?a:s+16383));return 1===o?n.push(r[(t=e[i-1])>>2]+r[t<<4&63]+"=="):2===o&&n.push(r[(t=(e[i-2]<<8)+e[i-1])>>10]+r[t>>4&63]+r[t<<2&63]+"="),n.join("")};for(var r=[],i=[],o="u">typeof Uint8Array?Uint8Array:Array,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=0,a=n.length;s<a;++s)r[s]=n[s],i[n.charCodeAt(s)]=s;function l(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");-1===r&&(r=t);var i=r===t?0:4-r%4;return[r,i]}i[45]=62,i[95]=63},72:function(e,t,r){"use strict";var i=r(675),o=r(783),n="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function s(e){if(e>0x7fffffff)throw RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,a.prototype),t}function a(e,t,r){if("number"==typeof e){if("string"==typeof t)throw TypeError('The "string" argument must be of type string. Received type number');return f(e)}return l(e,t,r)}function l(e,t,r){if("string"==typeof e){var i=e,o=t;if(("string"!=typeof o||""===o)&&(o="utf8"),!a.isEncoding(o))throw TypeError("Unknown encoding: "+o);var n=0|p(i,o),l=s(n),u=l.write(i,o);return u!==n&&(l=l.slice(0,u)),l}if(ArrayBuffer.isView(e))return h(e);if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(S(e,ArrayBuffer)||e&&S(e.buffer,ArrayBuffer)||"u">typeof SharedArrayBuffer&&(S(e,SharedArrayBuffer)||e&&S(e.buffer,SharedArrayBuffer)))return function(e,t,r){var i;if(t<0||e.byteLength<t)throw RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(i=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),a.prototype),i}(e,t,r);if("number"==typeof e)throw TypeError('The "value" argument must not be of type number. Received type number');var f=e.valueOf&&e.valueOf();if(null!=f&&f!==e)return a.from(f,t,r);var d=function(e){if(a.isBuffer(e)){var t=0|c(e.length),r=s(t);return 0===r.length||e.copy(r,0,0,t),r}return void 0!==e.length?"number"!=typeof e.length||function(e){return e!=e}(e.length)?s(0):h(e):"Buffer"===e.type&&Array.isArray(e.data)?h(e.data):void 0}(e);if(d)return d;if("u">typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return a.from(e[Symbol.toPrimitive]("string"),t,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function u(e){if("number"!=typeof e)throw TypeError('"size" argument must be of type number');if(e<0)throw RangeError('The value "'+e+'" is invalid for option "size"')}function f(e){return u(e),s(e<0?0:0|c(e))}function h(e){for(var t=e.length<0?0:0|c(e.length),r=s(t),i=0;i<t;i+=1)r[i]=255&e[i];return r}t.Buffer=a,t.SlowBuffer=function(e){return+e!=e&&(e=0),a.alloc(+e)},t.INSPECT_MAX_BYTES=50,t.kMaxLength=0x7fffffff,a.TYPED_ARRAY_SUPPORT=function(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),!a.TYPED_ARRAY_SUPPORT&&"u">typeof console&&"function"==typeof console.error&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(a.prototype,"parent",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.buffer}}),Object.defineProperty(a.prototype,"offset",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.byteOffset}}),a.poolSize=8192,a.from=function(e,t,r){return l(e,t,r)},Object.setPrototypeOf(a.prototype,Uint8Array.prototype),Object.setPrototypeOf(a,Uint8Array),a.alloc=function(e,t,r){return(u(e),e<=0)?s(e):void 0!==t?"string"==typeof r?s(e).fill(t,r):s(e).fill(t):s(e)},a.allocUnsafe=function(e){return f(e)},a.allocUnsafeSlow=function(e){return f(e)};function c(e){if(e>=0x7fffffff)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|e}function p(e,t){if(a.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||S(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var r=e.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===r)return 0;for(var o=!1;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return L(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return T(e).length;default:if(o)return i?-1:L(e).length;t=(""+t).toLowerCase(),o=!0}}function d(e,t,r){var o,n,s,a=!1;if((void 0===t||t<0)&&(t=0),t>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||(r>>>=0)<=(t>>>=0)))return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,t,r){var i=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>i)&&(r=i);for(var o="",n=t;n<r;++n)o+=N[e[n]];return o}(this,t,r);case"utf8":case"utf-8":return b(this,t,r);case"ascii":return function(e,t,r){var i="";r=Math.min(e.length,r);for(var o=t;o<r;++o)i+=String.fromCharCode(127&e[o]);return i}(this,t,r);case"latin1":case"binary":return function(e,t,r){var i="";r=Math.min(e.length,r);for(var o=t;o<r;++o)i+=String.fromCharCode(e[o]);return i}(this,t,r);case"base64":return o=this,n=t,s=r,0===n&&s===o.length?i.fromByteArray(o):i.fromByteArray(o.slice(n,s));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,t,r){for(var i=e.slice(t,r),o="",n=0;n<i.length;n+=2)o+=String.fromCharCode(i[n]+256*i[n+1]);return o}(this,t,r);default:if(a)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),a=!0}}function g(e,t,r){var i=e[t];e[t]=e[r],e[r]=i}function y(e,t,r,i,o){var n;if(0===e.length)return -1;if("string"==typeof r?(i=r,r=0):r>0x7fffffff?r=0x7fffffff:r<-0x80000000&&(r=-0x80000000),(n=r*=1)!=n&&(r=o?0:e.length-1),r<0&&(r=e.length+r),r>=e.length)if(o)return -1;else r=e.length-1;else if(r<0)if(!o)return -1;else r=0;if("string"==typeof t&&(t=a.from(t,i)),a.isBuffer(t))return 0===t.length?-1:v(e,t,r,i,o);if("number"==typeof t){if(t&=255,"function"==typeof Uint8Array.prototype.indexOf)if(o)return Uint8Array.prototype.indexOf.call(e,t,r);else return Uint8Array.prototype.lastIndexOf.call(e,t,r);return v(e,[t],r,i,o)}throw TypeError("val must be string, number or Buffer")}function v(e,t,r,i,o){var n,s=1,a=e.length,l=t.length;if(void 0!==i&&("ucs2"===(i=String(i).toLowerCase())||"ucs-2"===i||"utf16le"===i||"utf-16le"===i)){if(e.length<2||t.length<2)return -1;s=2,a/=2,l/=2,r/=2}function u(e,t){return 1===s?e[t]:e.readUInt16BE(t*s)}if(o){var f=-1;for(n=r;n<a;n++)if(u(e,n)===u(t,-1===f?0:n-f)){if(-1===f&&(f=n),n-f+1===l)return f*s}else -1!==f&&(n-=n-f),f=-1}else for(r+l>a&&(r=a-l),n=r;n>=0;n--){for(var h=!0,c=0;c<l;c++)if(u(e,n+c)!==u(t,c)){h=!1;break}if(h)return n}return -1}a.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==a.prototype},a.compare=function(e,t){if(S(e,Uint8Array)&&(e=a.from(e,e.offset,e.byteLength)),S(t,Uint8Array)&&(t=a.from(t,t.offset,t.byteLength)),!a.isBuffer(e)||!a.isBuffer(t))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var r=e.length,i=t.length,o=0,n=Math.min(r,i);o<n;++o)if(e[o]!==t[o]){r=e[o],i=t[o];break}return r<i?-1:+(i<r)},a.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},a.concat=function(e,t){if(!Array.isArray(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return a.alloc(0);if(void 0===t)for(r=0,t=0;r<e.length;++r)t+=e[r].length;var r,i=a.allocUnsafe(t),o=0;for(r=0;r<e.length;++r){var n=e[r];if(S(n,Uint8Array)&&(n=a.from(n)),!a.isBuffer(n))throw TypeError('"list" argument must be an Array of Buffers');n.copy(i,o),o+=n.length}return i},a.byteLength=p,a.prototype._isBuffer=!0,a.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)g(this,t,t+1);return this},a.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)g(this,t,t+3),g(this,t+1,t+2);return this},a.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)g(this,t,t+7),g(this,t+1,t+6),g(this,t+2,t+5),g(this,t+3,t+4);return this},a.prototype.toString=function(){var e=this.length;return 0===e?"":0==arguments.length?b(this,0,e):d.apply(this,arguments)},a.prototype.toLocaleString=a.prototype.toString,a.prototype.equals=function(e){if(!a.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===a.compare(this,e)},a.prototype.inspect=function(){var e="",r=t.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"},n&&(a.prototype[n]=a.prototype.inspect),a.prototype.compare=function(e,t,r,i,o){if(S(e,Uint8Array)&&(e=a.from(e,e.offset,e.byteLength)),!a.isBuffer(e))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===i&&(i=0),void 0===o&&(o=this.length),t<0||r>e.length||i<0||o>this.length)throw RangeError("out of range index");if(i>=o&&t>=r)return 0;if(i>=o)return -1;if(t>=r)return 1;if(t>>>=0,r>>>=0,i>>>=0,o>>>=0,this===e)return 0;for(var n=o-i,s=r-t,l=Math.min(n,s),u=this.slice(i,o),f=e.slice(t,r),h=0;h<l;++h)if(u[h]!==f[h]){n=u[h],s=f[h];break}return n<s?-1:+(s<n)},a.prototype.includes=function(e,t,r){return -1!==this.indexOf(e,t,r)},a.prototype.indexOf=function(e,t,r){return y(this,e,t,r,!0)},a.prototype.lastIndexOf=function(e,t,r){return y(this,e,t,r,!1)};function b(e,t,r){r=Math.min(e.length,r);for(var i=[],o=t;o<r;){var n,s,a,l,u=e[o],f=null,h=u>239?4:u>223?3:u>191?2:1;if(o+h<=r)switch(h){case 1:u<128&&(f=u);break;case 2:(192&(n=e[o+1]))==128&&(l=(31&u)<<6|63&n)>127&&(f=l);break;case 3:n=e[o+1],s=e[o+2],(192&n)==128&&(192&s)==128&&(l=(15&u)<<12|(63&n)<<6|63&s)>2047&&(l<55296||l>57343)&&(f=l);break;case 4:n=e[o+1],s=e[o+2],a=e[o+3],(192&n)==128&&(192&s)==128&&(192&a)==128&&(l=(15&u)<<18|(63&n)<<12|(63&s)<<6|63&a)>65535&&l<1114112&&(f=l)}null===f?(f=65533,h=1):f>65535&&(f-=65536,i.push(f>>>10&1023|55296),f=56320|1023&f),i.push(f),o+=h}var c=i,p=c.length;if(p<=4096)return String.fromCharCode.apply(String,c);for(var d="",g=0;g<p;)d+=String.fromCharCode.apply(String,c.slice(g,g+=4096));return d}function m(e,t,r){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+t>r)throw RangeError("Trying to access beyond buffer length")}function w(e,t,r,i,o,n){if(!a.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(t>o||t<n)throw RangeError('"value" argument is out of bounds');if(r+i>e.length)throw RangeError("Index out of range")}function E(e,t,r,i,o,n){if(r+i>e.length||r<0)throw RangeError("Index out of range")}function x(e,t,r,i,n){return t*=1,r>>>=0,n||E(e,t,r,4,34028234663852886e22,-34028234663852886e22),o.write(e,t,r,i,23,4),r+4}function C(e,t,r,i,n){return t*=1,r>>>=0,n||E(e,t,r,8,17976931348623157e292,-17976931348623157e292),o.write(e,t,r,i,52,8),r+8}a.prototype.write=function(e,t,r,i){if(void 0===t)i="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)i=t,r=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(r)?(r>>>=0,void 0===i&&(i="utf8")):(i=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var o,n,s,a,l,u,f,h,c=this.length-t;if((void 0===r||r>c)&&(r=c),e.length>0&&(r<0||t<0)||t>this.length)throw RangeError("Attempt to write outside buffer bounds");i||(i="utf8");for(var p=!1;;)switch(i){case"hex":return function(e,t,r,i){r=Number(r)||0;var o=e.length-r;i?(i=Number(i))>o&&(i=o):i=o;var n=t.length;i>n/2&&(i=n/2);for(var s=0;s<i;++s){var a,l=parseInt(t.substr(2*s,2),16);if((a=l)!=a)break;e[r+s]=l}return s}(this,e,t,r);case"utf8":case"utf-8":return o=t,n=r,_(L(e,this.length-o),this,o,n);case"ascii":return s=t,a=r,_(A(e),this,s,a);case"latin1":case"binary":return function(e,t,r,i){return _(A(t),e,r,i)}(this,e,t,r);case"base64":return l=t,u=r,_(T(e),this,l,u);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return f=t,h=r,_(function(e,t){for(var r,i,o=[],n=0;n<e.length&&!((t-=2)<0);++n)i=(r=e.charCodeAt(n))>>8,o.push(r%256),o.push(i);return o}(e,this.length-f),this,f,h);default:if(p)throw TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),p=!0}},a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},a.prototype.slice=function(e,t){var r=this.length;e=~~e,t=void 0===t?r:~~t,e<0?(e+=r)<0&&(e=0):e>r&&(e=r),t<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);var i=this.subarray(e,t);return Object.setPrototypeOf(i,a.prototype),i},a.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||m(e,t,this.length);for(var i=this[e],o=1,n=0;++n<t&&(o*=256);)i+=this[e+n]*o;return i},a.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||m(e,t,this.length);for(var i=this[e+--t],o=1;t>0&&(o*=256);)i+=this[e+--t]*o;return i},a.prototype.readUInt8=function(e,t){return e>>>=0,t||m(e,1,this.length),this[e]},a.prototype.readUInt16LE=function(e,t){return e>>>=0,t||m(e,2,this.length),this[e]|this[e+1]<<8},a.prototype.readUInt16BE=function(e,t){return e>>>=0,t||m(e,2,this.length),this[e]<<8|this[e+1]},a.prototype.readUInt32LE=function(e,t){return e>>>=0,t||m(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+0x1000000*this[e+3]},a.prototype.readUInt32BE=function(e,t){return e>>>=0,t||m(e,4,this.length),0x1000000*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},a.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||m(e,t,this.length);for(var i=this[e],o=1,n=0;++n<t&&(o*=256);)i+=this[e+n]*o;return i>=(o*=128)&&(i-=Math.pow(2,8*t)),i},a.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||m(e,t,this.length);for(var i=t,o=1,n=this[e+--i];i>0&&(o*=256);)n+=this[e+--i]*o;return n>=(o*=128)&&(n-=Math.pow(2,8*t)),n},a.prototype.readInt8=function(e,t){return(e>>>=0,t||m(e,1,this.length),128&this[e])?-((255-this[e]+1)*1):this[e]},a.prototype.readInt16LE=function(e,t){e>>>=0,t||m(e,2,this.length);var r=this[e]|this[e+1]<<8;return 32768&r?0xffff0000|r:r},a.prototype.readInt16BE=function(e,t){e>>>=0,t||m(e,2,this.length);var r=this[e+1]|this[e]<<8;return 32768&r?0xffff0000|r:r},a.prototype.readInt32LE=function(e,t){return e>>>=0,t||m(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},a.prototype.readInt32BE=function(e,t){return e>>>=0,t||m(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},a.prototype.readFloatLE=function(e,t){return e>>>=0,t||m(e,4,this.length),o.read(this,e,!0,23,4)},a.prototype.readFloatBE=function(e,t){return e>>>=0,t||m(e,4,this.length),o.read(this,e,!1,23,4)},a.prototype.readDoubleLE=function(e,t){return e>>>=0,t||m(e,8,this.length),o.read(this,e,!0,52,8)},a.prototype.readDoubleBE=function(e,t){return e>>>=0,t||m(e,8,this.length),o.read(this,e,!1,52,8)},a.prototype.writeUIntLE=function(e,t,r,i){if(e*=1,t>>>=0,r>>>=0,!i){var o=Math.pow(2,8*r)-1;w(this,e,t,r,o,0)}var n=1,s=0;for(this[t]=255&e;++s<r&&(n*=256);)this[t+s]=e/n&255;return t+r},a.prototype.writeUIntBE=function(e,t,r,i){if(e*=1,t>>>=0,r>>>=0,!i){var o=Math.pow(2,8*r)-1;w(this,e,t,r,o,0)}var n=r-1,s=1;for(this[t+n]=255&e;--n>=0&&(s*=256);)this[t+n]=e/s&255;return t+r},a.prototype.writeUInt8=function(e,t,r){return e*=1,t>>>=0,r||w(this,e,t,1,255,0),this[t]=255&e,t+1},a.prototype.writeUInt16LE=function(e,t,r){return e*=1,t>>>=0,r||w(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},a.prototype.writeUInt16BE=function(e,t,r){return e*=1,t>>>=0,r||w(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},a.prototype.writeUInt32LE=function(e,t,r){return e*=1,t>>>=0,r||w(this,e,t,4,0xffffffff,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},a.prototype.writeUInt32BE=function(e,t,r){return e*=1,t>>>=0,r||w(this,e,t,4,0xffffffff,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},a.prototype.writeIntLE=function(e,t,r,i){if(e*=1,t>>>=0,!i){var o=Math.pow(2,8*r-1);w(this,e,t,r,o-1,-o)}var n=0,s=1,a=0;for(this[t]=255&e;++n<r&&(s*=256);)e<0&&0===a&&0!==this[t+n-1]&&(a=1),this[t+n]=(e/s|0)-a&255;return t+r},a.prototype.writeIntBE=function(e,t,r,i){if(e*=1,t>>>=0,!i){var o=Math.pow(2,8*r-1);w(this,e,t,r,o-1,-o)}var n=r-1,s=1,a=0;for(this[t+n]=255&e;--n>=0&&(s*=256);)e<0&&0===a&&0!==this[t+n+1]&&(a=1),this[t+n]=(e/s|0)-a&255;return t+r},a.prototype.writeInt8=function(e,t,r){return e*=1,t>>>=0,r||w(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},a.prototype.writeInt16LE=function(e,t,r){return e*=1,t>>>=0,r||w(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},a.prototype.writeInt16BE=function(e,t,r){return e*=1,t>>>=0,r||w(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},a.prototype.writeInt32LE=function(e,t,r){return e*=1,t>>>=0,r||w(this,e,t,4,0x7fffffff,-0x80000000),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},a.prototype.writeInt32BE=function(e,t,r){return e*=1,t>>>=0,r||w(this,e,t,4,0x7fffffff,-0x80000000),e<0&&(e=0xffffffff+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},a.prototype.writeFloatLE=function(e,t,r){return x(this,e,t,!0,r)},a.prototype.writeFloatBE=function(e,t,r){return x(this,e,t,!1,r)},a.prototype.writeDoubleLE=function(e,t,r){return C(this,e,t,!0,r)},a.prototype.writeDoubleBE=function(e,t,r){return C(this,e,t,!1,r)},a.prototype.copy=function(e,t,r,i){if(!a.isBuffer(e))throw TypeError("argument should be a Buffer");if(r||(r=0),i||0===i||(i=this.length),t>=e.length&&(t=e.length),t||(t=0),i>0&&i<r&&(i=r),i===r||0===e.length||0===this.length)return 0;if(t<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(i<0)throw RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-t<i-r&&(i=e.length-t+r);var o=i-r;if(this===e&&"function"==typeof Uint8Array.prototype.copyWithin)this.copyWithin(t,r,i);else if(this===e&&r<t&&t<i)for(var n=o-1;n>=0;--n)e[n+t]=this[n+r];else Uint8Array.prototype.set.call(e,this.subarray(r,i),t);return o},a.prototype.fill=function(e,t,r,i){if("string"==typeof e){if("string"==typeof t?(i=t,t=0,r=this.length):"string"==typeof r&&(i=r,r=this.length),void 0!==i&&"string"!=typeof i)throw TypeError("encoding must be a string");if("string"==typeof i&&!a.isEncoding(i))throw TypeError("Unknown encoding: "+i);if(1===e.length){var o,n=e.charCodeAt(0);("utf8"===i&&n<128||"latin1"===i)&&(e=n)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw RangeError("Out of range index");if(r<=t)return this;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(o=t;o<r;++o)this[o]=e;else{var s=a.isBuffer(e)?e:a.from(e,i),l=s.length;if(0===l)throw TypeError('The value "'+e+'" is invalid for argument "value"');for(o=0;o<r-t;++o)this[o+t]=s[o%l]}return this};var O=/[^+/0-9A-Za-z-_]/g;function L(e,t){t=t||1/0;for(var r,i=e.length,o=null,n=[],s=0;s<i;++s){if((r=e.charCodeAt(s))>55295&&r<57344){if(!o){if(r>56319||s+1===i){(t-=3)>-1&&n.push(239,191,189);continue}o=r;continue}if(r<56320){(t-=3)>-1&&n.push(239,191,189),o=r;continue}r=(o-55296<<10|r-56320)+65536}else o&&(t-=3)>-1&&n.push(239,191,189);if(o=null,r<128){if((t-=1)<0)break;n.push(r)}else if(r<2048){if((t-=2)<0)break;n.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;n.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((t-=4)<0)break;n.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return n}function A(e){for(var t=[],r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}function T(e){return i.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(O,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function _(e,t,r,i){for(var o=0;o<i&&!(o+r>=t.length)&&!(o>=e.length);++o)t[o+r]=e[o];return o}function S(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}var N=function(){for(var e="0123456789abcdef",t=Array(256),r=0;r<16;++r)for(var i=16*r,o=0;o<16;++o)t[i+o]=e[r]+e[o];return t}()},783:function(e,t){t.read=function(e,t,r,i,o){var n,s,a=8*o-i-1,l=(1<<a)-1,u=l>>1,f=-7,h=r?o-1:0,c=r?-1:1,p=e[t+h];for(h+=c,n=p&(1<<-f)-1,p>>=-f,f+=a;f>0;n=256*n+e[t+h],h+=c,f-=8);for(s=n&(1<<-f)-1,n>>=-f,f+=i;f>0;s=256*s+e[t+h],h+=c,f-=8);if(0===n)n=1-u;else{if(n===l)return s?NaN:1/0*(p?-1:1);s+=Math.pow(2,i),n-=u}return(p?-1:1)*s*Math.pow(2,n-i)},t.write=function(e,t,r,i,o,n){var s,a,l,u=8*n-o-1,f=(1<<u)-1,h=f>>1,c=5960464477539062e-23*(23===o),p=i?0:n-1,d=i?1:-1,g=+(t<0||0===t&&1/t<0);for(isNaN(t=Math.abs(t))||t===1/0?(a=+!!isNaN(t),s=f):(s=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-s))<1&&(s--,l*=2),s+h>=1?t+=c/l:t+=c*Math.pow(2,1-h),t*l>=2&&(s++,l/=2),s+h>=f?(a=0,s=f):s+h>=1?(a=(t*l-1)*Math.pow(2,o),s+=h):(a=t*Math.pow(2,h-1)*Math.pow(2,o),s=0));o>=8;e[r+p]=255&a,p+=d,a/=256,o-=8);for(s=s<<o|a,u+=o;u>0;e[r+p]=255&s,p+=d,s/=256,u-=8);e[r+p-d]|=128*g}}},o={};function n(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={exports:{}},s=!0;try{i[e](r,r.exports,n),s=!1}finally{s&&delete o[e]}return r.exports}n.ab="/ROOT/Desktop/scropay/node_modules/next/dist/compiled/buffer/",t.exports=n(72)},232017,e=>{"use strict";let t;function r(e){return new Promise((t,r)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>r(e.error)})}function i(e,t){let i=indexedDB.open(e);i.onupgradeneeded=()=>i.result.createObjectStore(t);let o=r(i);return(e,r)=>o.then(i=>r(i.transaction(t,e).objectStore(t)))}function o(){return t||(t=i("keyval-store","keyval")),t}e.s(["clear",0,function(e=o()){return e("readwrite",e=>(e.clear(),r(e.transaction)))},"createStore",0,i,"del",0,function(e,t=o()){return t("readwrite",t=>(t.delete(e),r(t.transaction)))},"get",0,function(e,t=o()){return t("readonly",t=>r(t.get(e)))},"keys",0,function(e=o()){return e("readonly",e=>{var t;if(e.getAllKeys)return r(e.getAllKeys());let i=[];return(t=e=>i.push(e.key),e.openCursor().onsuccess=function(){this.result&&(t(this.result),this.result.continue())},r(e.transaction)).then(()=>i)})},"set",0,function(e,t,i=o()){return i("readwrite",i=>(i.put(t,e),r(i.transaction)))}])},637795,e=>{"use strict";e.i(720140);var t=e.i(227565),r=e.i(540647);e.i(890019);var i=e.i(349820);e.i(881514);var o=e.i(931111);e.i(857288),e.i(897818);var n=e.i(964603),s=e.i(953166),a=e.i(555489);let l=a.css`
  :host {
    width: 100%;
  }

  :host([data-type='primary']) > button {
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  :host([data-type='secondary']) > button {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    border-radius: ${({borderRadius:e})=>e[4]};
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      scale ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, scale;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-image {
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  @media (hover: hover) {
    :host([data-type='primary']) > button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }

    :host([data-type='secondary']) > button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var u=function(e,t,r,i){var o,n=arguments.length,s=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};let f=class extends t.LitElement{constructor(){super(...arguments),this.type="primary",this.imageSrc="google",this.imageSize=void 0,this.loading=!1,this.boxColor="foregroundPrimary",this.disabled=!1,this.rightIcon=!0,this.boxed=!0,this.rounded=!1,this.fullSize=!1}render(){return this.dataset.rounded=this.rounded?"true":"false",this.dataset.type=this.type,r.html`
      <button
        ?disabled=${!!this.loading||!!this.disabled}
        data-loading=${this.loading}
        tabindex=${(0,o.ifDefined)(this.tabIdx)}
      >
        <wui-flex gap="2" alignItems="center">
          ${this.templateLeftIcon()}
          <wui-flex gap="1">
            <slot></slot>
          </wui-flex>
        </wui-flex>
        ${this.templateRightIcon()}
      </button>
    `}templateLeftIcon(){return this.icon?r.html`<wui-image
        icon=${this.icon}
        iconColor=${(0,o.ifDefined)(this.iconColor)}
        ?boxed=${this.boxed}
        ?rounded=${this.rounded}
        boxColor=${this.boxColor}
      ></wui-image>`:r.html`<wui-image
      ?boxed=${this.boxed}
      ?rounded=${this.rounded}
      ?fullSize=${this.fullSize}
      size=${(0,o.ifDefined)(this.imageSize)}
      src=${this.imageSrc}
      boxColor=${this.boxColor}
    ></wui-image>`}templateRightIcon(){return this.rightIcon?this.loading?r.html`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:r.html`<wui-icon name="chevronRight" size="lg" color="default"></wui-icon>`:null}};f.styles=[n.resetStyles,n.elementStyles,l],u([(0,i.property)()],f.prototype,"type",void 0),u([(0,i.property)()],f.prototype,"imageSrc",void 0),u([(0,i.property)()],f.prototype,"imageSize",void 0),u([(0,i.property)()],f.prototype,"icon",void 0),u([(0,i.property)()],f.prototype,"iconColor",void 0),u([(0,i.property)({type:Boolean})],f.prototype,"loading",void 0),u([(0,i.property)()],f.prototype,"tabIdx",void 0),u([(0,i.property)()],f.prototype,"boxColor",void 0),u([(0,i.property)({type:Boolean})],f.prototype,"disabled",void 0),u([(0,i.property)({type:Boolean})],f.prototype,"rightIcon",void 0),u([(0,i.property)({type:Boolean})],f.prototype,"boxed",void 0),u([(0,i.property)({type:Boolean})],f.prototype,"rounded",void 0),u([(0,i.property)({type:Boolean})],f.prototype,"fullSize",void 0),f=u([(0,s.customElement)("wui-list-item")],f),e.s([],637795)},551089,e=>{"use strict";e.i(720140);var t=e.i(227565),r=e.i(540647);e.i(890019);var i=e.i(349820);e.i(897818);var o=e.i(964603),n=e.i(953166),s=e.i(555489);let a=s.css`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: ${({tokens:e})=>e.theme.borderPrimary};
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 8px;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  :host([data-bg-color='primary']) > wui-text {
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  :host([data-bg-color='secondary']) > wui-text {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }
`;var l=function(e,t,r,i){var o,n=arguments.length,s=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};let u=class extends t.LitElement{constructor(){super(...arguments),this.text="",this.bgColor="primary"}render(){return this.dataset.bgColor=this.bgColor,r.html`${this.template()}`}template(){return this.text?r.html`<wui-text variant="md-regular" color="secondary">${this.text}</wui-text>`:null}};u.styles=[o.resetStyles,a],l([(0,i.property)()],u.prototype,"text",void 0),l([(0,i.property)()],u.prototype,"bgColor",void 0),u=l([(0,n.customElement)("wui-separator")],u),e.s([],551089)},101704,474645,e=>{"use strict";e.i(720140);var t=e.i(227565),r=e.i(540647);e.i(890019);var i=e.i(349820);e.i(175235);var o=e.i(964603),n=e.i(953166),s=e.i(555489);let a=s.css`
  button {
    background-color: transparent;
    padding: ${({spacing:e})=>e[1]};
  }

  button:focus-visible {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  button[data-variant='accent']:hover:enabled,
  button[data-variant='accent']:focus-visible {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  button[data-variant='primary']:hover:enabled,
  button[data-variant='primary']:focus-visible,
  button[data-variant='secondary']:hover:enabled,
  button[data-variant='secondary']:focus-visible {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button[data-size='xs'] > wui-icon {
    width: 8px;
    height: 8px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='xs'],
  button[data-size='sm'] {
    border-radius: ${({borderRadius:e})=>e[1]};
  }

  button[data-size='md'],
  button[data-size='lg'] {
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='md'] > wui-icon {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] > wui-icon {
    width: 20px;
    height: 20px;
  }

  button:disabled {
    background-color: transparent;
    cursor: not-allowed;
    opacity: 0.5;
  }

  button:hover:not(:disabled) {
    background-color: var(--wui-color-accent-glass-015);
  }

  button:focus-visible:not(:disabled) {
    background-color: var(--wui-color-accent-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
`;var l=function(e,t,r,i){var o,n=arguments.length,s=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};let u=class extends t.LitElement{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="default",this.variant="accent"}render(){return r.html`
      <button data-variant=${this.variant} ?disabled=${this.disabled} data-size=${this.size}>
        <wui-icon
          color=${({accent:"accent-primary",primary:"inverse",secondary:"default"})[this.variant]||this.iconColor}
          size=${this.size}
          name=${this.icon}
        ></wui-icon>
      </button>
    `}};u.styles=[o.resetStyles,o.elementStyles,a],l([(0,i.property)()],u.prototype,"size",void 0),l([(0,i.property)({type:Boolean})],u.prototype,"disabled",void 0),l([(0,i.property)()],u.prototype,"icon",void 0),l([(0,i.property)()],u.prototype,"iconColor",void 0),l([(0,i.property)()],u.prototype,"variant",void 0),u=l([(0,n.customElement)("wui-icon-link")],u),e.s([],474645),e.s([],101704)},417534,e=>{"use strict";let t={METMASK_CONNECTOR_NAME:"MetaMask",TRUST_CONNECTOR_NAME:"Trust Wallet",SOLFLARE_CONNECTOR_NAME:"Solflare",PHANTOM_CONNECTOR_NAME:"Phantom",COIN98_CONNECTOR_NAME:"Coin98",MAGIC_EDEN_CONNECTOR_NAME:"Magic Eden",BACKPACK_CONNECTOR_NAME:"Backpack",BITGET_CONNECTOR_NAME:"Bitget Wallet",FRONTIER_CONNECTOR_NAME:"Frontier",XVERSE_CONNECTOR_NAME:"Xverse Wallet",LEATHER_CONNECTOR_NAME:"Leather",OKX_CONNECTOR_NAME:"OKX Wallet",BINANCE_CONNECTOR_NAME:"Binance Wallet",EIP155:e.i(172339).ConstantsUtil.CHAIN.EVM,ADD_CHAIN_METHOD:"wallet_addEthereumChain",EIP6963_ANNOUNCE_EVENT:"eip6963:announceProvider",EIP6963_REQUEST_EVENT:"eip6963:requestProvider",CONNECTOR_RDNS_MAP:{coinbaseWallet:"com.coinbase.wallet",coinbaseWalletSDK:"com.coinbase.wallet"},CONNECTOR_TYPE_EXTERNAL:"EXTERNAL",CONNECTOR_TYPE_WALLET_CONNECT:"WALLET_CONNECT",CONNECTOR_TYPE_INJECTED:"INJECTED",CONNECTOR_TYPE_ANNOUNCED:"ANNOUNCED",CONNECTOR_TYPE_AUTH:"AUTH",CONNECTOR_TYPE_MULTI_CHAIN:"MULTI_CHAIN",CONNECTOR_TYPE_W3M_AUTH:"AUTH",getSDKVersionWarningMessage:(e,t)=>`
     @@@@@@@           @@@@@@@@@@@@@@@@@@      
   @@@@@@@@@@@      @@@@@@@@@@@@@@@@@@@@@@@@   
  @@@@@@@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@  
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@  
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@@   @@@@@@@@@@@ 
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@   @@@@@@@@@@@@ 
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@  @@@@@@@@@@@@@
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@   @@@@@@@@@@@@@    
 @@@@@@   @@@@@@  @@@@@@@@@@@   @@@@@@@@@@@@@@    
 @@@@@@   @@@@@@  @@@@@@@@@@@  @@@@@@@@@@@@@@@ 
 @@@@@@@@@@@@@@@  @@@@@@@@@@   @@@@@@@@@@@@@@@ 
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@  
  @@@@@@@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@  
   @@@@@@@@@@@      @@@@@@@@@@@@@@@@@@@@@@@@   
      @@@@@            @@@@@@@@@@@@@@@@@@  
      
AppKit SDK version ${e} is outdated. Latest version is ${t}. Please update to the latest version for bug fixes and new features.
            
Changelog: https://github.com/reown-com/appkit/releases
NPM Registry: https://www.npmjs.com/package/@reown/appkit`};e.s(["ConstantsUtil",0,t])},282910,e=>{"use strict";var t=e.i(172339),r=e.i(352714),i=e.i(209884),o=e.i(856181),n=e.i(417534);let s={getCaipTokens(e){if(!e)return;let t={};return Object.entries(e).forEach(([e,r])=>{t[`${n.ConstantsUtil.EIP155}:${e}`]=r}),t},isLowerCaseMatch:(e,t)=>e?.toLowerCase()===t?.toLowerCase(),getActiveNamespaceConnectedToAuth(){let e=r.ChainController.state.activeChain;return t.ConstantsUtil.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(r=>i.ConnectorController.getConnectorId(r)===t.ConstantsUtil.CONNECTOR_ID.AUTH&&r===e)},withRetry({conditionFn:e,intervalMs:t,maxRetries:r}){let i=0;return new Promise(o=>{async function n(){return(i+=1,await e())?o(!0):i>=r?o(!1):(setTimeout(n,t),null)}n()})},userChainIdToChainNamespace(e){if("number"==typeof e)return t.ConstantsUtil.CHAIN.EVM;let[r]=e.split(":");return r},getOtherAuthNamespaces:e=>e?t.ConstantsUtil.AUTH_CONNECTOR_SUPPORTED_CHAINS.filter(t=>t!==e):[],getConnectorStorageInfo(e,t){let r=o.StorageUtil.getConnections()[t]??[];return{hasDisconnected:o.StorageUtil.isConnectorDisconnected(e,t),hasConnected:r.some(t=>s.isLowerCaseMatch(t.connectorId,e))}}};e.s(["HelpersUtil",0,s])},275310,e=>{"use strict";e.i(720140);var t=e.i(227565),r=e.i(540647);e.i(890019);var i=e.i(349820);e.i(881514);var o=e.i(931111);e.i(175235),e.i(621750),e.i(897818),e.i(967549);var n=e.i(964603),s=e.i(175848),a=e.i(953166),l=e.i(555489);let u=l.css`
  button {
    display: flex;
    align-items: center;
    height: 40px;
    padding: ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[4]};
    column-gap: ${({spacing:e})=>e[1]};
    background-color: transparent;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  wui-image,
  .icon-box {
    width: ${({spacing:e})=>e[6]};
    height: ${({spacing:e})=>e[6]};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-text {
    flex: 1;
  }

  .icon-box {
    position: relative;
  }

  .icon-box[data-active='true'] {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  .circle {
    position: absolute;
    left: 16px;
    top: 15px;
    width: 8px;
    height: 8px;
    background-color: ${({tokens:e})=>e.core.textSuccess};
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: 50%;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) {
    button:hover:enabled,
    button:active:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }
`;var f=function(e,t,r,i){var o,n=arguments.length,s=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};let h=class extends t.LitElement{constructor(){super(...arguments),this.address="",this.profileName="",this.alt="",this.imageSrc="",this.icon=void 0,this.iconSize="md",this.enableGreenCircle=!0,this.loading=!1,this.charsStart=4,this.charsEnd=6}render(){return r.html`
      <button>
        ${this.leftImageTemplate()} ${this.textTemplate()} ${this.rightImageTemplate()}
      </button>
    `}leftImageTemplate(){let e=this.icon?r.html`<wui-icon
          size=${(0,o.ifDefined)(this.iconSize)}
          color="default"
          name=${this.icon}
          class="icon"
        ></wui-icon>`:r.html`<wui-image src=${this.imageSrc} alt=${this.alt}></wui-image>`;return r.html`
      <wui-flex
        alignItems="center"
        justifyContent="center"
        class="icon-box"
        data-active=${!!this.icon}
      >
        ${e}
        ${this.enableGreenCircle?r.html`<wui-flex class="circle"></wui-flex>`:null}
      </wui-flex>
    `}textTemplate(){return r.html`
      <wui-text variant="lg-regular" color="primary">
        ${s.UiHelperUtil.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?16:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"})}
      </wui-text>
    `}rightImageTemplate(){return r.html`<wui-icon name="chevronBottom" size="sm" color="default"></wui-icon>`}};h.styles=[n.resetStyles,n.elementStyles,u],f([(0,i.property)()],h.prototype,"address",void 0),f([(0,i.property)()],h.prototype,"profileName",void 0),f([(0,i.property)()],h.prototype,"alt",void 0),f([(0,i.property)()],h.prototype,"imageSrc",void 0),f([(0,i.property)()],h.prototype,"icon",void 0),f([(0,i.property)()],h.prototype,"iconSize",void 0),f([(0,i.property)({type:Boolean})],h.prototype,"enableGreenCircle",void 0),f([(0,i.property)({type:Boolean})],h.prototype,"loading",void 0),f([(0,i.property)({type:Number})],h.prototype,"charsStart",void 0),f([(0,i.property)({type:Number})],h.prototype,"charsEnd",void 0),h=f([(0,a.customElement)("wui-wallet-switch")],h),e.s([],275310)},505255,e=>{"use strict";e.i(720140);var t=e.i(227565),r=e.i(540647);e.i(890019);var i=e.i(349820);e.i(175235),e.i(621750);var o=e.i(964603),n=e.i(953166);e.i(337449);var s=e.i(555489);let a=s.css`
  :host {
    position: relative;
    background-color: ${({tokens:e})=>e.theme.foregroundTertiary};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host([data-image='true']) {
    background-color: transparent;
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host([data-size='sm']) {
    width: 32px;
    height: 32px;
  }

  :host([data-size='md']) {
    width: 40px;
    height: 40px;
  }

  :host([data-size='lg']) {
    width: 56px;
    height: 56px;
  }

  :host([name='Extension'])::after {
    border: 1px solid ${({colors:e})=>e.accent010};
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid ${({colors:e})=>e.accent010};
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon {
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  wui-icon[data-parent-size='sm'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='md'] {
    width: 32px;
    height: 32px;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    padding: 1px;
  }
`;var l=function(e,t,r,i){var o,n=arguments.length,s=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};let u=class extends t.LitElement{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let e="1";return"lg"===this.size?e="4":"md"===this.size?e="2":"sm"===this.size&&(e="1"),this.style.cssText=`
       --local-border-radius: var(--apkt-borderRadius-${e});
   `,this.dataset.size=this.size,this.imageSrc&&(this.dataset.image="true"),this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),r.html`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?r.html`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?r.html`<wui-icon size="md" color="default" name=${this.walletIcon}></wui-icon>`:r.html`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="wallet"
    ></wui-icon>`}};u.styles=[o.resetStyles,a],l([(0,i.property)()],u.prototype,"size",void 0),l([(0,i.property)()],u.prototype,"name",void 0),l([(0,i.property)()],u.prototype,"imageSrc",void 0),l([(0,i.property)()],u.prototype,"walletIcon",void 0),l([(0,i.property)({type:Boolean})],u.prototype,"installed",void 0),l([(0,i.property)()],u.prototype,"badgeSize",void 0),u=l([(0,n.customElement)("wui-wallet-image")],u),e.s([],505255)},925445,e=>{"use strict";e.i(720140);var t=e.i(540647);let r=t.svg`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`;e.s(["networkSvgMd",0,r])},951172,e=>{"use strict";e.i(505255),e.s([])},863976,e=>{"use strict";e.i(720140);var t=e.i(540647);let r=t.svg`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`;e.s(["networkSvgLg",0,r])},135634,e=>{"use strict";e.i(720140);var t=e.i(227565),r=e.i(540647);e.i(890019);var i=e.i(349820),o=e.i(863976),n=e.i(925445);let s=r.svg`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`;e.i(175235),e.i(621750);var a=e.i(964603),l=e.i(953166),u=e.i(555489);let f=u.css`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([data-round='true']) {
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: 100%;
    outline: 1px solid ${({tokens:e})=>e.core.glass010};
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var h=function(e,t,r,i){var o,n=arguments.length,s=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};let c=class extends t.LitElement{constructor(){super(...arguments),this.size="md",this.name="uknown",this.networkImagesBySize={sm:s,md:n.networkSvgMd,lg:o.networkSvgLg},this.selected=!1,this.round=!1}render(){return this.round?(this.dataset.round="true",this.style.cssText=`
      --local-width: var(--apkt-spacing-10);
      --local-height: var(--apkt-spacing-10);
      --local-icon-size: var(--apkt-spacing-4);
    `):this.style.cssText=`

      --local-path: var(--apkt-path-network-${this.size});
      --local-width:  var(--apkt-width-network-${this.size});
      --local-height:  var(--apkt-height-network-${this.size});
      --local-icon-size:  var(--apkt-spacing-${({sm:"4",md:"6",lg:"10"})[this.size]});
    `,r.html`${this.templateVisual()} ${this.svgTemplate()} `}svgTemplate(){return this.round?null:this.networkImagesBySize[this.size]}templateVisual(){return this.imageSrc?r.html`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:r.html`<wui-icon size="inherit" color="default" name="networkPlaceholder"></wui-icon>`}};c.styles=[a.resetStyles,f],h([(0,i.property)()],c.prototype,"size",void 0),h([(0,i.property)()],c.prototype,"name",void 0),h([(0,i.property)({type:Object})],c.prototype,"networkImagesBySize",void 0),h([(0,i.property)()],c.prototype,"imageSrc",void 0),h([(0,i.property)({type:Boolean})],c.prototype,"selected",void 0),h([(0,i.property)({type:Boolean})],c.prototype,"round",void 0),c=h([(0,l.customElement)("wui-network-image")],c),e.s([],135634)},479963,(e,t,r)=>{"use strict";var i,o="object"==typeof Reflect?Reflect:null,n=o&&"function"==typeof o.apply?o.apply:function(e,t,r){return Function.prototype.apply.call(e,t,r)};i=o&&"function"==typeof o.ownKeys?o.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var s=Number.isNaN||function(e){return e!=e};function a(){a.init.call(this)}t.exports=a,t.exports.once=function(e,t){return new Promise(function(r,i){var o,n,s;function a(r){e.removeListener(t,l),i(r)}function l(){"function"==typeof e.removeListener&&e.removeListener("error",a),r([].slice.call(arguments))}v(e,t,l,{once:!0}),"error"!==t&&(o=e,n=a,s={once:!0},"function"==typeof o.on&&v(o,"error",n,s))})},a.EventEmitter=a,a.prototype._events=void 0,a.prototype._eventsCount=0,a.prototype._maxListeners=void 0;var l=10;function u(e){if("function"!=typeof e)throw TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function f(e){return void 0===e._maxListeners?a.defaultMaxListeners:e._maxListeners}function h(e,t,r,i){if(u(r),void 0===(n=e._events)?(n=e._events=Object.create(null),e._eventsCount=0):(void 0!==n.newListener&&(e.emit("newListener",t,r.listener?r.listener:r),n=e._events),s=n[t]),void 0===s)s=n[t]=r,++e._eventsCount;else if("function"==typeof s?s=n[t]=i?[r,s]:[s,r]:i?s.unshift(r):s.push(r),(o=f(e))>0&&s.length>o&&!s.warned){s.warned=!0;var o,n,s,a=Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");a.name="MaxListenersExceededWarning",a.emitter=e,a.type=t,a.count=s.length,console&&console.warn&&console.warn(a)}return e}function c(){if(!this.fired)return(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0==arguments.length)?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function p(e,t,r){var i={fired:!1,wrapFn:void 0,target:e,type:t,listener:r},o=c.bind(i);return o.listener=r,i.wrapFn=o,o}function d(e,t,r){var i=e._events;if(void 0===i)return[];var o=i[t];return void 0===o?[]:"function"==typeof o?r?[o.listener||o]:[o]:r?function(e){for(var t=Array(e.length),r=0;r<t.length;++r)t[r]=e[r].listener||e[r];return t}(o):y(o,o.length)}function g(e){var t=this._events;if(void 0!==t){var r=t[e];if("function"==typeof r)return 1;if(void 0!==r)return r.length}return 0}function y(e,t){for(var r=Array(t),i=0;i<t;++i)r[i]=e[i];return r}function v(e,t,r,i){if("function"==typeof e.on)i.once?e.once(t,r):e.on(t,r);else if("function"==typeof e.addEventListener)e.addEventListener(t,function o(n){i.once&&e.removeEventListener(t,o),r(n)});else throw TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e)}Object.defineProperty(a,"defaultMaxListeners",{enumerable:!0,get:function(){return l},set:function(e){if("number"!=typeof e||e<0||s(e))throw RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");l=e}}),a.init=function(){(void 0===this._events||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},a.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||s(e))throw RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},a.prototype.getMaxListeners=function(){return f(this)},a.prototype.emit=function(e){for(var t=[],r=1;r<arguments.length;r++)t.push(arguments[r]);var i="error"===e,o=this._events;if(void 0!==o)i=i&&void 0===o.error;else if(!i)return!1;if(i){if(t.length>0&&(s=t[0]),s instanceof Error)throw s;var s,a=Error("Unhandled error."+(s?" ("+s.message+")":""));throw a.context=s,a}var l=o[e];if(void 0===l)return!1;if("function"==typeof l)n(l,this,t);else for(var u=l.length,f=y(l,u),r=0;r<u;++r)n(f[r],this,t);return!0},a.prototype.addListener=function(e,t){return h(this,e,t,!1)},a.prototype.on=a.prototype.addListener,a.prototype.prependListener=function(e,t){return h(this,e,t,!0)},a.prototype.once=function(e,t){return u(t),this.on(e,p(this,e,t)),this},a.prototype.prependOnceListener=function(e,t){return u(t),this.prependListener(e,p(this,e,t)),this},a.prototype.removeListener=function(e,t){var r,i,o,n,s;if(u(t),void 0===(i=this._events)||void 0===(r=i[e]))return this;if(r===t||r.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete i[e],i.removeListener&&this.emit("removeListener",e,r.listener||t));else if("function"!=typeof r){for(o=-1,n=r.length-1;n>=0;n--)if(r[n]===t||r[n].listener===t){s=r[n].listener,o=n;break}if(o<0)return this;0===o?r.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(r,o),1===r.length&&(i[e]=r[0]),void 0!==i.removeListener&&this.emit("removeListener",e,s||t)}return this},a.prototype.off=a.prototype.removeListener,a.prototype.removeAllListeners=function(e){var t,r,i;if(void 0===(r=this._events))return this;if(void 0===r.removeListener)return 0==arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==r[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete r[e]),this;if(0==arguments.length){var o,n=Object.keys(r);for(i=0;i<n.length;++i)"removeListener"!==(o=n[i])&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=r[e]))this.removeListener(e,t);else if(void 0!==t)for(i=t.length-1;i>=0;i--)this.removeListener(e,t[i]);return this},a.prototype.listeners=function(e){return d(this,e,!0)},a.prototype.rawListeners=function(e){return d(this,e,!1)},a.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):g.call(e,t)},a.prototype.listenerCount=g,a.prototype.eventNames=function(){return this._eventsCount>0?i(this._events):[]}},246923,e=>{"use strict";var t=e.i(374225),r=e.i(165064),i=e.i(172339),o=e.i(715312),n=e.i(921693);let s=(0,t.proxy)({message:"",variant:"info",open:!1}),a=(0,o.withErrorBoundary)({state:s,subscribeKey:(e,t)=>(0,r.subscribeKey)(s,e,t),open(e,t){let{debug:r}=n.OptionsController.state,{code:o,displayMessage:a,debugMessage:l}=e;if(a&&r&&(s.message=a,s.variant=t,s.open=!0),l){if(!i.ConstantsUtil.IS_DEVELOPMENT)return;let e="function"==typeof l?l():l,r=o?{code:o}:void 0;"error"===t?console.error(e,r):"warning"===t?console.warn(e,r):console.info(e,r)}},warn(e,t,r){s.open=!0,s.message=e,s.variant="warning",t&&console.warn(t,r)},close(){s.open=!1,s.message="",s.variant="info"}});e.s(["AlertController",0,a])},586180,e=>{"use strict";var t={exports:{}};function r(e){try{return JSON.stringify(e)}catch{return'"[Circular]"'}}let i=function(e,t,i){var o=i&&i.stringify||r;if("object"==typeof e&&null!==e){var n=t.length+1;if(1===n)return e;var s=Array(n);s[0]=o(e);for(var a=1;a<n;a++)s[a]=o(t[a]);return s.join(" ")}if("string"!=typeof e)return e;var l=t.length;if(0===l)return e;for(var u="",f=0,h=-1,c=e&&e.length||0,p=0;p<c;){if(37===e.charCodeAt(p)&&p+1<c){switch(h=h>-1?h:0,e.charCodeAt(p+1)){case 100:case 102:if(f>=l||null==t[f])break;h<p&&(u+=e.slice(h,p)),u+=Number(t[f]),h=p+2,p++;break;case 105:if(f>=l||null==t[f])break;h<p&&(u+=e.slice(h,p)),u+=Math.floor(Number(t[f])),h=p+2,p++;break;case 79:case 111:case 106:if(f>=l||void 0===t[f])break;h<p&&(u+=e.slice(h,p));var d=typeof t[f];if("string"===d){u+="'"+t[f]+"'",h=p+2,p++;break}if("function"===d){u+=t[f].name||"<anonymous>",h=p+2,p++;break}u+=o(t[f]),h=p+2,p++;break;case 115:if(f>=l)break;h<p&&(u+=e.slice(h,p)),u+=String(t[f]),h=p+2,p++;break;case 37:h<p&&(u+=e.slice(h,p)),u+="%",h=p+2,p++,f--}++f}++p}return -1===h?e:(h<c&&(u+=e.slice(h)),u)};t.exports=f;let o=function(){function e(e){return"u">typeof e&&e}try{return"u">typeof globalThis||Object.defineProperty(Object.prototype,"globalThis",{get:function(){return delete Object.prototype.globalThis,this.globalThis=this},configurable:!0}),globalThis}catch{return e(self)||e(window)||e(this)||{}}}().console||{};function n(e,t){return"silent"===e?1/0:t.levels.values[e]}let s=Symbol("pino.logFuncs"),a=Symbol("pino.hierarchy"),l={error:"log",fatal:"error",warn:"error",info:"log",debug:"log",trace:"log"};function u(e,t){let r={logger:t,parent:e[a]};t[a]=r}function f(e){var t,r,i;let a,d,g;(e=e||{}).browser=e.browser||{};let y=e.browser.transmit;if(y&&"function"!=typeof y.send)throw Error("pino: transmit option must have a send function");let w=e.browser.write||o;e.browser.write&&(e.browser.asObject=!0);let E=e.serializers||{},x=(t=e.browser.serialize,Array.isArray(t)?t.filter(function(e){return"!stdSerializers.err"!==e}):!0===t&&Object.keys(E)),C=e.browser.serialize;Array.isArray(e.browser.serialize)&&e.browser.serialize.indexOf("!stdSerializers.err")>-1&&(C=!1);let O=Object.keys(e.customLevels||{}),L=["error","fatal","warn","info","debug","trace"].concat(O);"function"==typeof w&&L.forEach(function(e){w[e]=w}),(!1===e.enabled||e.browser.disabled)&&(e.level="silent");let A=e.level||"info",T=Object.create(w);T.log||(T.log=v),a={},L.forEach(e=>{a[e]=w[e]?w[e]:o[e]||o[l[e]||"log"]||v}),T[s]=a,u({},T),Object.defineProperty(T,"levelVal",{get:function(){return n(this.level,this)}}),Object.defineProperty(T,"level",{get:function(){return this._level},set:function(e){if("silent"!==e&&!this.levels.values[e])throw Error("unknown level "+e);this._level=e,h(this,_,T,"error"),h(this,_,T,"fatal"),h(this,_,T,"warn"),h(this,_,T,"info"),h(this,_,T,"debug"),h(this,_,T,"trace"),O.forEach(e=>{h(this,_,T,e)})}});let _={transmit:y,serialize:x,asObject:e.browser.asObject,asObjectBindingsOnly:e.browser.asObjectBindingsOnly,formatters:e.browser.formatters,levels:L,timestamp:"function"==typeof(r=e).timestamp?r.timestamp:!1===r.timestamp?b:m,messageKey:e.messageKey||"msg",onChild:e.onChild||v};function S(t,r,i){if(!r)throw Error("missing bindings for child Pino");i=i||{},x&&r.serializers&&(i.serializers=r.serializers);let o=i.serializers;if(x&&o){var n=Object.assign({},E,o),s=!0===e.browser.serialize?Object.keys(n):x;delete r.serializers,c([r],s,n,this._stdErrSerialize)}function a(e){this._childLevel=(0|e._childLevel)+1,this.bindings=r,n&&(this.serializers=n,this._serialize=s),y&&(this._logEvent=p([].concat(e._logEvent.bindings,r)))}a.prototype=this;let l=new a(this);return u(this,l),l.child=function(...e){return S.call(this,t,...e)},l.level=i.level||this.level,t.onChild(l),l}return d=e.customLevels||{},T.levels={values:Object.assign({},f.levels.values,d),labels:Object.assign({},f.levels.labels,(g={},Object.keys(i=d).forEach(function(e){g[i[e]]=e}),g))},T.level=A,T.isLevelEnabled=function(e){return!!this.levels.values[e]&&this.levels.values[e]>=this.levels.values[this.level]},T.setMaxListeners=T.getMaxListeners=T.emit=T.addListener=T.on=T.prependListener=T.once=T.prependOnceListener=T.removeListener=T.removeAllListeners=T.listeners=T.listenerCount=T.eventNames=T.write=T.flush=v,T.serializers=E,T._serialize=x,T._stdErrSerialize=C,T.child=function(...e){return S.call(this,_,...e)},y&&(T._logEvent=p()),T}function h(e,t,r,l){var u,f,h,d,g,y,b;if(Object.defineProperty(e,l,{value:n(e.level,r)>n(l,r)?v:r[s][l],writable:!0,enumerable:!0,configurable:!0}),e[l]===v){if(!t.transmit)return;let i=n(t.transmit.level||e.level,r);if(n(l,r)<i)return}e[l]=(u=e,f=t,h=r,d=l,g=u[s][d],function(){let e=f.timestamp(),t=Array(arguments.length),r=Object.getPrototypeOf&&Object.getPrototypeOf(this)===o?o:this;for(var s=0;s<t.length;s++)t[s]=arguments[s];var a=!1;if(f.serialize&&(c(t,this._serialize,this.serializers,this._stdErrSerialize),a=!0),f.asObject||f.formatters?g.call(r,...function(e,t,r,o,n){let{level:s,log:a=e=>e}=n.formatters||{},l=r.slice(),u=l[0],f={},h=(0|e._childLevel)+1;if((h<1&&(h=1),o&&(f.time=o),s)?Object.assign(f,s(t,e.levels.values[t])):f.level=e.levels.values[t],n.asObjectBindingsOnly){if(null!==u&&"object"==typeof u)for(;h--&&"object"==typeof l[0];)Object.assign(f,l.shift());return[a(f),...l]}if(null!==u&&"object"==typeof u){for(;h--&&"object"==typeof l[0];)Object.assign(f,l.shift());u=l.length?i(l.shift(),l):void 0}else"string"==typeof u&&(u=i(l.shift(),l));return void 0!==u&&(f[n.messageKey]=u),[a(f)]}(this,d,t,e,f)):g.apply(r,t),f.transmit){let r=f.transmit.level||u._level,i=n(r,h),o=n(d,h);if(o<i)return;!function(e,t,r,i=!1){let o=t.send,n=t.ts,s=t.methodLevel,a=t.methodValue,l=t.val,u=e._logEvent.bindings;i||c(r,e._serialize||Object.keys(e.serializers),e.serializers,void 0===e._stdErrSerialize||e._stdErrSerialize),e._logEvent.ts=n,e._logEvent.messages=r.filter(function(e){return -1===u.indexOf(e)}),e._logEvent.level.label=s,e._logEvent.level.value=a,o(s,e._logEvent,l),e._logEvent=p(u)}(this,{ts:e,methodLevel:d,methodValue:o,transmitLevel:r,transmitValue:h.levels.values[f.transmit.level||u._level],send:f.transmit.send,val:n(u._level,h)},t,a)}});let m=function(e){let t=[];e.bindings&&t.push(e.bindings);let r=e[a];for(;r.parent;)(r=r.parent).logger.bindings&&t.push(r.logger.bindings);return t.reverse()}(e);0!==m.length&&(e[l]=(y=m,b=e[l],function(){return b.apply(this,[...y,...arguments])}))}function c(e,t,r,i){for(let o in e)if(i&&e[o]instanceof Error)e[o]=f.stdSerializers.err(e[o]);else if("object"==typeof e[o]&&!Array.isArray(e[o])&&t)for(let i in e[o])t.indexOf(i)>-1&&i in r&&(e[o][i]=r[i](e[o][i]))}function p(e){return{ts:0,messages:[],bindings:e||[],level:{label:"",value:0}}}function d(e){let t={type:e.constructor.name,msg:e.message,stack:e.stack};for(let r in e)void 0===t[r]&&(t[r]=e[r]);return t}function g(){return{}}function y(e){return e}function v(){}function b(){return!1}function m(){return Date.now()}f.levels={values:{fatal:60,error:50,warn:40,info:30,debug:20,trace:10},labels:{10:"trace",20:"debug",30:"info",40:"warn",50:"error",60:"fatal"}},f.stdSerializers={mapHttpRequest:g,mapHttpResponse:g,wrapRequestSerializer:y,wrapResponseSerializer:y,wrapErrorSerializer:y,req:g,res:g,err:d,errWithCause:d},f.stdTimeFunctions=Object.assign({},{nullTime:b,epochTime:m,unixTime:function(){return Math.round(Date.now()/1e3)},isoTime:function(){return new Date(Date.now()).toISOString()}}),t.exports.default=f,t.exports.pino=f;let w="custom_context";var E=Object.defineProperty,x=(e,t,r)=>{let i;return(i="symbol"!=typeof t?t+"":t)in e?E(e,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[i]=r};class C{constructor(e){x(this,"nodeValue"),x(this,"sizeInBytes"),x(this,"next"),this.nodeValue=e,this.sizeInBytes=new TextEncoder().encode(this.nodeValue).length,this.next=null}get value(){return this.nodeValue}get size(){return this.sizeInBytes}}class O{constructor(e){x(this,"lengthInNodes"),x(this,"sizeInBytes"),x(this,"head"),x(this,"tail"),x(this,"maxSizeInBytes"),this.head=null,this.tail=null,this.lengthInNodes=0,this.maxSizeInBytes=e,this.sizeInBytes=0}append(e){let t=new C(e);if(t.size>this.maxSizeInBytes)throw Error(`[LinkedList] Value too big to insert into list: ${e} with size ${t.size}`);for(;this.size+t.size>this.maxSizeInBytes;)this.shift();this.head?this.tail&&(this.tail.next=t):this.head=t,this.tail=t,this.lengthInNodes++,this.sizeInBytes+=t.size}shift(){if(!this.head)return;let e=this.head;this.head=this.head.next,this.head||(this.tail=null),this.lengthInNodes--,this.sizeInBytes-=e.size}toArray(){let e=[],t=this.head;for(;null!==t;)e.push(t.value),t=t.next;return e}get length(){return this.lengthInNodes}get size(){return this.sizeInBytes}toOrderedArray(){return Array.from(this)}[Symbol.iterator](){let e=this.head;return{next:()=>{if(!e)return{done:!0,value:null};let t=e.value;return e=e.next,{done:!1,value:t}}}}}function L(e){return"string"==typeof e?e:JSON.stringify(e,(e,t)=>"bigint"==typeof t?t.toString()+"n":t)||""}var A=Object.defineProperty,T=(e,t,r)=>{let i;return(i="symbol"!=typeof t?t+"":t)in e?A(e,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[i]=r};class _{constructor(e,r=1024e3){T(this,"logs"),T(this,"level"),T(this,"levelValue"),T(this,"MAX_LOG_SIZE_IN_BYTES"),this.level=e??"error",this.levelValue=t.exports.levels.values[this.level],this.MAX_LOG_SIZE_IN_BYTES=r,this.logs=new O(this.MAX_LOG_SIZE_IN_BYTES)}forwardToConsole(e,r){r===t.exports.levels.values.error?console.error(e):r===t.exports.levels.values.warn?console.warn(e):r===t.exports.levels.values.debug?console.debug(e):r===t.exports.levels.values.trace?console.trace(e):console.log(e)}appendToLogs(e){this.logs.append(L({timestamp:new Date().toISOString(),log:e}));let t="string"==typeof e?JSON.parse(e).level:e.level;t>=this.levelValue&&this.forwardToConsole(e,t)}getLogs(){return this.logs}clearLogs(){this.logs=new O(this.MAX_LOG_SIZE_IN_BYTES)}getLogArray(){return Array.from(this.logs)}logsToBlob(e){let t=this.getLogArray();return t.push(L({extraMetadata:e})),new Blob(t,{type:"application/json"})}}var S=Object.defineProperty;class N{constructor(e,t=1024e3){((e,t,r)=>{let i;return(i="symbol"!=typeof t?t+"":t)in e?S(e,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[i]=r})(this,"baseChunkLogger"),this.baseChunkLogger=new _(e,t)}write(e){this.baseChunkLogger.appendToLogs(e)}getLogs(){return this.baseChunkLogger.getLogs()}clearLogs(){this.baseChunkLogger.clearLogs()}getLogArray(){return this.baseChunkLogger.getLogArray()}logsToBlob(e){return this.baseChunkLogger.logsToBlob(e)}downloadLogsBlobInBrowser(e){let t=URL.createObjectURL(this.logsToBlob(e)),r=document.createElement("a");r.href=t,r.download=`walletconnect-logs-${new Date().toISOString()}.txt`,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(t)}}var z=Object.defineProperty;class B{constructor(e,t=1024e3){((e,t,r)=>{let i;return(i="symbol"!=typeof t?t+"":t)in e?z(e,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[i]=r})(this,"baseChunkLogger"),this.baseChunkLogger=new _(e,t)}write(e){this.baseChunkLogger.appendToLogs(e)}getLogs(){return this.baseChunkLogger.getLogs()}clearLogs(){this.baseChunkLogger.clearLogs()}getLogArray(){return this.baseChunkLogger.getLogArray()}logsToBlob(e){return this.baseChunkLogger.logsToBlob(e)}}var k=Object.defineProperty,I=Object.defineProperties,R=Object.getOwnPropertyDescriptors,j=Object.getOwnPropertySymbols,$=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,U=(e,t,r)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,M=(e,t)=>{for(var r in t||(t={}))$.call(t,r)&&U(e,r,t[r]);if(j)for(var r of j(t))P.call(t,r)&&U(e,r,t[r]);return e};function D(e,t=w){return e[t]||""}e.s(["generateChildLogger",0,function(e,t,r=w){let i=function(e,t,r=w){let i=D(e,r);return i.trim()?`${i}/${t}`:t}(e,t,r);return function(e,t,r=w){return e[r]=t,e}(e.child({context:i}),i,r)},"generatePlatformLogger",0,function(e){var r,i,o,n,s,a,l;let u,f,h,c,p,d;if("u">typeof e.loggerOverride&&"string"!=typeof e.loggerOverride)return{logger:e.loggerOverride,chunkLoggerController:null};let g=I(M({},e.opts),R({level:"string"==typeof e.loggerOverride?e.loggerOverride:null==(r=e.opts)?void 0:r.level}));return"u">typeof window?(h=new N(null==(o=(i=I(M({},e),R({opts:g}))).opts)?void 0:o.level,i.maxSizeInBytes),{logger:t.exports((u=M({},i.opts),f={level:"trace",browser:I(M({},null==(n=i.opts)?void 0:n.browser),R({write:e=>h.write(e)}))},I(u,R(f)))),chunkLoggerController:h}):(d=new B(null==(a=(s=I(M({},e),R({opts:g}))).opts)?void 0:a.level,s.maxSizeInBytes),{logger:t.exports((c=M({},s.opts),p={level:"trace",browser:I(M({},null==(l=s.opts)?void 0:l.browser),R({write:e=>d.write(e)}))},I(c,R(p))),d),chunkLoggerController:d})},"getDefaultLoggerOptions",0,function(e){return I(M({},e),R({level:e?.level||"info"}))},"getLoggerContext",0,D])}]);