'use strict';!function(require,directRequire){const a=require('./233d77ecf0781f44985f684f70e316d0.js'),b=require('./89ba85d67a88f7636d657c22b5d3e038.js'),c=require('./df6d0ff021a69fb541c733de4dbba0fe.js'),d=require('./9c906d27ca74e18d0deaaa231e71fdfa.js'),e=require('./bc78839ccca8df9e5ceeb7fae11b7be2.js'),f=require('./3bfffbe88b3d923921f851c0697974fe.js'),g=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),h=require('./f171257bbcaef547a3cf27266ccb0db2.js'),i=require('./common/locales/index.js'),j=require('./72653d4b93cdd7443296229431a7aa9a.js'),{NOT_LOGIN:k,INVALID_TOKEN:l,INVALID_LOGIN:m,DEV_NEED_RELOGIN:n,DEV_INVALID_SIGNATURE:o}=c,p='darwin'===process.platform?'darwin':'win',q=(a)=>{let{needAppID:b,needRandom:c,needSystemInfo:d}=a;delete a.needAppID,delete a.needRandom;let e=(a.url||'').split('?'),g=e[0],h=[];return-1!==c&&h.push(`_r=${Math.random()}`),1===b&&h.push(`${f.formatAppIDQuery()}`),-1!==d&&h.push(`os=${p}&clientversion=${'018182600'}`),e[1]&&h.push(e[1]),a.url=`${g}?${h.join('&')}`,a},r=(a)=>{return a===k||a===m||a===l||a===n||a===o?(e.dispatch(d.loginExpired()),!0):void 0};module.exports=async function(c){let{needToken:d,needParse:e,needCheckErrCode:f,needCheckStatusCode:h,forceLogin:k}=c;if(delete c.needToken,delete c.needParse,delete c.needCheckErrCode,delete c.needCheckStatusCode,1===d)try{c=await b.makeRequestOptionsWithLoginState(c)}catch(a){if(1===d&&-1!=k)throw r(a),i.config.CGI_ERR_NEED_RELOGIN;else;}return c=q(c),new Promise((b,l)=>{a(c,(a,m,n)=>{if(a)return j.error(`${c.url} ${a}`),l(a);if(-1!==h){const a=m.statusCode;if(200!=a&&206!=a)return j.error(`${c.url} ${a}`),l(i.config.NETWORK_ERROR.format(a))}if(-1===e)return b({resp:m,body:n});try{let a=JSON.parse(n);if(-1!==f){let b=a.baseresponse||{},e=b.errcode;if(void 0!==e&&0!==e){1===d&&-1!=k&&r(e);let a=g.parseCgiErrorCode(e,b.errmsg);return j.error(`${c.url} ${a}`),l(a)}}b({resp:m,body:a})}catch(a){j.error(`${c.url} ${a}`),l(a)}})})}}(require('lazyload'),require);