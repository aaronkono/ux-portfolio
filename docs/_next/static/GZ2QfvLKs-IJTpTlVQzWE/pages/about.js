(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"2DY1":function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){return e.replace(r,"-$1").toLowerCase()};var r=/([A-Z])/g;e.exports=t.default},"9SKx":function(e,t,n){"use strict";var r=n("TqRt");t.__esModule=!0,t.default=function(e){return(0,a.default)(e.replace(i,"ms-"))};var a=r(n("DZ0b")),i=/^-ms-/;e.exports=t.default},AEfA:function(e,t,n){"use strict";var r=n("TqRt");t.__esModule=!0,t.default=void 0;var a=r(n("xU8c")),i=r(n("sKrG"));function o(e,t,n){var r,i={target:e,currentTarget:e};function o(e){e.target===e.currentTarget&&(clearTimeout(r),e.target.removeEventListener(a.default.end,o),t.call(this))}a.default.end?null==n&&(n=s(e)||0):n=0,a.default.end?(e.addEventListener(a.default.end,o,!1),r=setTimeout(function(){return o(i)},1.5*(n||100))):setTimeout(o.bind(null,i),0)}o._parseDuration=s;var l=o;function s(e){var t=(0,i.default)(e,a.default.duration),n=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*n}t.default=l,e.exports=t.default},Bp9Y:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=!("undefined"===typeof window||!window.document||!window.document.createElement);t.default=r,e.exports=t.default},DZ0b:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){return e.replace(r,function(e,t){return t.toUpperCase()})};var r=/-(.)/g;e.exports=t.default},H0zx:function(e,t,n){"use strict";var r=n("TqRt");t.__esModule=!0,t.default=function(e){if(!e)throw new TypeError("No Element passed to `getComputedStyle()`");var t=e.ownerDocument;return"defaultView"in t?t.defaultView.opener?e.ownerDocument.defaultView.getComputedStyle(e,null):window.getComputedStyle(e,null):{getPropertyValue:function(t){var n=e.style;"float"==(t=(0,a.default)(t))&&(t="styleFloat");var r=e.currentStyle[t]||null;if(null==r&&n&&n[t]&&(r=n[t]),o.test(r)&&!i.test(t)){var l=n.left,s=e.runtimeStyle,u=s&&s.left;u&&(s.left=e.currentStyle.left),n.left="fontSize"===t?"1em":r,r=n.pixelLeft+"px",n.left=l,u&&(s.left=u)}return r}}};var a=r(n("9SKx")),i=/^(top|right|bottom|left)$/,o=/^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i;e.exports=t.default},Juyh:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),i=n("8Kt/"),o=n.n(i),l=(n("YFqc"),n("wx14")),s=n("zLVn"),u=n("TSYQ"),c=n.n(u);n("QLaP");function f(e,t){return void 0!==e[t]}function d(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function p(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}function v(e,t){return Object.keys(t).reduce(function(n,a){var i,o=n[d(a)],u=n[a],c=Object(s.a)(n,[d(a),a].map(p)),v=t[a],m=Object(r.useRef)({}),h=Object(r.useState)(o),b=h[0],y=h[1],x=f(e,a),g=f(m.current,a);m.current=e,!x&&g&&y(o);var E=e[v],O=Object(r.useCallback)(function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];E&&E.apply(void 0,[e].concat(n)),y(e)},[y,E]);return Object(l.a)({},c,((i={})[a]=x?u:b,i[v]=O,i))},e)}var m=n("dI71");var h=n("DZ0b"),b=n.n(h),y=n("yTlV"),x=function(e){return e[0].toUpperCase()+b()(e).slice(1)};var g=a.a.forwardRef(function(e,t){var n=e.bsPrefix,r=e.className,i=e.as,o=Object(s.a)(e,["bsPrefix","className","as"]);n=Object(y.a)(n,"navbar-brand");var u=i||(o.href?"a":"span");return a.a.createElement(u,Object(l.a)({},o,{ref:t,className:c()(r,n)}))});g.displayName="NavbarBrand";var E=g,O=n("sKrG"),w=n.n(O),C=n("AEfA"),N=n.n(C);n("17x9");var j=n("i8i4"),k=n.n(j),S=!1,T=a.a.createContext(null),P="unmounted",D="exited",_="entering",K="entered",I=function(e){var t,n;function r(t,n){var r;r=e.call(this,t,n)||this;var a,i=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?i?(a=D,r.appearStatus=_):a=K:a=t.unmountOnExit||t.mountOnEnter?P:D,r.state={status:a},r.nextCallback=null,r}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.getDerivedStateFromProps=function(e,t){return e.in&&t.status===P?{status:D}:null};var i=r.prototype;return i.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},i.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==_&&n!==K&&(t=_):n!==_&&n!==K||(t="exiting")}this.updateStatus(!1,t)},i.componentWillUnmount=function(){this.cancelNextCallback()},i.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!==typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},i.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){this.cancelNextCallback();var n=k.a.findDOMNode(this);t===_?this.performEnter(n,e):this.performExit(n)}else this.props.unmountOnExit&&this.state.status===D&&this.setState({status:P})},i.performEnter=function(e,t){var n=this,r=this.props.enter,a=this.context?this.context.isMounting:t,i=this.getTimeouts(),o=a?i.appear:i.enter;!t&&!r||S?this.safeSetState({status:K},function(){n.props.onEntered(e)}):(this.props.onEnter(e,a),this.safeSetState({status:_},function(){n.props.onEntering(e,a),n.onTransitionEnd(e,o,function(){n.safeSetState({status:K},function(){n.props.onEntered(e,a)})})}))},i.performExit=function(e){var t=this,n=this.props.exit,r=this.getTimeouts();n&&!S?(this.props.onExit(e),this.safeSetState({status:"exiting"},function(){t.props.onExiting(e),t.onTransitionEnd(e,r.exit,function(){t.safeSetState({status:D},function(){t.props.onExited(e)})})})):this.safeSetState({status:D},function(){t.props.onExited(e)})},i.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},i.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},i.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},i.onTransitionEnd=function(e,t,n){this.setNextCallback(n);var r=null==t&&!this.props.addEndListener;e&&!r?(this.props.addEndListener&&this.props.addEndListener(e,this.nextCallback),null!=t&&setTimeout(this.nextCallback,t)):setTimeout(this.nextCallback,0)},i.render=function(){var e=this.state.status;if(e===P)return null;var t=this.props,n=t.children,r=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(t,["children"]);if(delete r.in,delete r.mountOnEnter,delete r.unmountOnExit,delete r.appear,delete r.enter,delete r.exit,delete r.timeout,delete r.addEndListener,delete r.onEnter,delete r.onEntering,delete r.onEntered,delete r.onExit,delete r.onExiting,delete r.onExited,"function"===typeof n)return a.a.createElement(T.Provider,{value:null},n(e,r));var i=a.a.Children.only(n);return a.a.createElement(T.Provider,{value:null},a.a.cloneElement(i,r))},r}(a.a.Component);function M(){}I.contextType=T,I.propTypes={},I.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:M,onEntering:M,onEntered:M,onExit:M,onExiting:M,onExited:M},I.UNMOUNTED=0,I.EXITED=1,I.ENTERING=2,I.ENTERED=3,I.EXITING=4;var R=I;var A,L=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(function(e){return null!=e}).reduce(function(e,t){if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];e.apply(this,r),t.apply(this,r)}},null)},U={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};var q=((A={})[D]="collapse",A.exiting="collapsing",A[_]="collapsing",A[K]="collapse show",A),V={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,dimension:"height",getDimensionValue:function(e,t){var n=t["offset"+e[0].toUpperCase()+e.slice(1)],r=U[e];return n+parseInt(w()(t,r[0]),10)+parseInt(w()(t,r[1]),10)}},B=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).handleEnter=function(e){e.style[t.getDimension()]="0"},t.handleEntering=function(e){var n=t.getDimension();e.style[n]=t._getScrollDimensionValue(e,n)},t.handleEntered=function(e){e.style[t.getDimension()]=null},t.handleExit=function(e){var n=t.getDimension();e.style[n]=t.props.getDimensionValue(n,e)+"px",e.offsetHeight},t.handleExiting=function(e){e.style[t.getDimension()]=null},t}Object(m.a)(t,e);var n=t.prototype;return n.getDimension=function(){return"function"===typeof this.props.dimension?this.props.dimension():this.props.dimension},n._getScrollDimensionValue=function(e,t){return e["scroll"+t[0].toUpperCase()+t.slice(1)]+"px"},n.render=function(){var e=this,t=this.props,n=t.onEnter,r=t.onEntering,i=t.onEntered,o=t.onExit,u=t.onExiting,f=t.className,d=t.children,p=Object(s.a)(t,["onEnter","onEntering","onEntered","onExit","onExiting","className","children"]);delete p.dimension,delete p.getDimensionValue;var v=L(this.handleEnter,n),m=L(this.handleEntering,r),h=L(this.handleEntered,i),b=L(this.handleExit,o),y=L(this.handleExiting,u);return a.a.createElement(R,Object(l.a)({addEndListener:N.a},p,{"aria-expanded":p.role?p.in:null,onEnter:v,onEntering:m,onEntered:h,onExit:b,onExiting:y}),function(t,n){return a.a.cloneElement(d,Object(l.a)({},n,{className:c()(f,d.props.className,q[t],"width"===e.getDimension()&&"width")}))})},t}(a.a.Component);B.defaultProps=V;var Y=B,X=a.a.createContext(null),F=a.a.forwardRef(function(e,t){var n=e.children,r=e.bsPrefix,i=Object(s.a)(e,["children","bsPrefix"]);return r=Object(y.a)(r,"navbar-collapse"),a.a.createElement(X.Consumer,null,function(e){return a.a.createElement(Y,Object(l.a)({in:!(!e||!e.expanded)},i),a.a.createElement("div",{ref:t,className:r},n))})});F.displayName="NavbarCollapse";var H=F;var z=function(e){var t=Object(r.useRef)(e);return Object(r.useEffect)(function(){t.current=e},[e]),t};function G(e){var t=z(e);return Object(r.useCallback)(function(){return t.current&&t.current.apply(t,arguments)},[t])}var J=a.a.forwardRef(function(e,t){var n=e.bsPrefix,i=e.className,o=e.children,u=e.label,f=e.as,d=void 0===f?"button":f,p=e.onClick,v=Object(s.a)(e,["bsPrefix","className","children","label","as","onClick"]);n=Object(y.a)(n,"navbar-toggler");var m=Object(r.useContext)(X)||{},h=m.onToggle,b=m.expanded,x=G(function(e){p&&p(e),h&&h()});return"button"===d&&(v.type="button"),a.a.createElement(d,Object(l.a)({},v,{ref:t,onClick:x,"aria-label":u,className:c()(i,n,!!b&&"collapsed")}),o||a.a.createElement("span",{className:n+"-icon"}))});J.displayName="NavbarToggle",J.defaultProps={label:"Toggle navigation"};var Z=J,W=a.a.createContext(),$=function(e,t){return null!=e?String(e):t||null},Q=W,ee=a.a.forwardRef(function(e,t){var n=v(e,{expanded:"onToggle"}),i=n.bsPrefix,o=n.expand,u=n.variant,f=n.bg,d=n.fixed,p=n.sticky,m=n.className,h=n.children,b=n.as,x=void 0===b?"nav":b,g=n.expanded,E=n.onToggle,O=n.onSelect,w=n.collapseOnSelect,C=Object(s.a)(n,["bsPrefix","expand","variant","bg","fixed","sticky","className","children","as","expanded","onToggle","onSelect","collapseOnSelect"]);i=Object(y.a)(i,"navbar");var N=Object(r.useCallback)(function(){O&&O.apply(void 0,arguments),w&&g&&E(!1)},[O,w,g,E]);void 0===C.role&&"nav"!==x&&(C.role="navigation");var j=i+"-expand";"string"===typeof o&&(j=j+"-"+o);var k=Object(r.useMemo)(function(){return{onToggle:function(){return E(!g)},bsPrefix:i,expanded:g}},[i,g,E]);return a.a.createElement(X.Provider,{value:k},a.a.createElement(Q.Provider,{value:N},a.a.createElement(x,Object(l.a)({ref:t},C,{className:c()(m,i,o&&j,u&&i+"-"+u,f&&"bg-"+f,p&&"sticky-"+p,d&&"fixed-"+d)}),h)))});ee.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},ee.displayName="Navbar",ee.Brand=E,ee.Toggle=Z,ee.Collapse=H,ee.Text=function(e,t){var n=void 0===t?{}:t,r=n.displayName,i=void 0===r?x(e):r,o=n.Component,u=void 0===o?"div":o,f=n.defaultProps,d=a.a.forwardRef(function(t,n){var r=t.className,i=t.bsPrefix,o=t.as,f=void 0===o?u:o,d=Object(s.a)(t,["className","bsPrefix","as"]),p=Object(y.a)(i,e);return a.a.createElement(f,Object(l.a)({ref:n,className:c()(r,p)},d))});return d.defaultProps=f,d.displayName=i,d}("navbar-text",{Component:"span"});var te=ee,ne=(n("K9S6"),a.a.createContext(null)),re=n("xIqb"),ae=n.n(re),ie=function(e){return e&&"function"!==typeof e?function(t){e.current=t}:e};var oe=function(e,t){return Object(r.useMemo)(function(){return function(e,t){var n=ie(e),r=ie(t);return function(e){n&&n(e),r&&r(e)}}(e,t)},[e,t])},le=a.a.createContext(null),se=a.a.createContext(null),ue=function(){},ce=a.a.forwardRef(function(e,t){var n,i,o=e.as,u=void 0===o?"ul":o,c=e.onSelect,f=e.activeKey,d=e.role,p=e.onKeyDown,v=Object(s.a)(e,["as","onSelect","activeKey","role","onKeyDown"]),m=Object(r.useContext)(Q),h=Object(r.useContext)(se);h&&(f=h.activeKey,n=h.getControlledId,i=h.getControllerId);var b=Object(r.useState)(!1),y=b[0],x=b[1],g=Object(r.useRef)(null),E=function(e){if(!g.current)return null;var t=ae()(g.current,"[data-rb-event-key]:not(.disabled)"),n=g.current.querySelector(".active"),r=t.indexOf(n);if(-1===r)return null;var a=r+e;return a>=t.length&&(a=0),a<0&&(a=t.length-1),t[a]},O=function(e,t){null!=e&&(c&&c(e,t),m&&m(e,t))};Object(r.useEffect)(function(){if(g.current&&y){var e=g.current.querySelector("[data-rb-event-key].active");e&&e.focus()}},[g,y]);var w=oe(t,g);return a.a.createElement(Q.Provider,{value:O},a.a.createElement(le.Provider,{value:{role:d,activeKey:$(f),getControlledId:n||ue,getControllerId:i||ue}},a.a.createElement(u,Object(l.a)({},v,{onKeyDown:function(e){var t;switch(p&&p(e),e.key){case"ArrowLeft":case"ArrowUp":t=E(-1);break;case"ArrowRight":case"ArrowDown":t=E(1);break;default:return}t&&(e.preventDefault(),O(t.dataset.rbEventKey,e),x(!0))},ref:w}))))});ce.defaultProps={role:"tablist"};var fe=ce,de=a.a.forwardRef(function(e,t){var n=e.bsPrefix,r=e.className,i=e.children,o=e.as,u=void 0===o?"div":o,f=Object(s.a)(e,["bsPrefix","className","children","as"]);return n=Object(y.a)(n,"nav-item"),a.a.createElement(u,Object(l.a)({},f,{ref:t,className:c()(r,n)}),i)});de.displayName="NavItem";var pe=de;function ve(e){return!e||"#"===e.trim()}var me=a.a.forwardRef(function(e,t){var n=e.as,r=void 0===n?"a":n,i=e.disabled,o=e.onKeyDown,u=Object(s.a)(e,["as","disabled","onKeyDown"]),c=function(e){var t=u.href,n=u.onClick;(i||ve(t))&&e.preventDefault(),i?e.stopPropagation():n&&n(e)};return ve(u.href)&&(u.role=u.role||"button",u.href=u.href||"#"),i&&(u.tabIndex=-1,u["aria-disabled"]=!0),a.a.createElement(r,Object(l.a)({ref:t},u,{onClick:c,onKeyDown:L(function(e){" "===e.key&&(e.preventDefault(),c(e))},o)}))});me.displayName="SafeAnchor";var he=me,be=a.a.forwardRef(function(e,t){var n=e.active,i=e.className,o=e.tabIndex,u=e.eventKey,f=e.onSelect,d=e.onClick,p=e.as,v=Object(s.a)(e,["active","className","tabIndex","eventKey","onSelect","onClick","as"]),m=$(u,v.href),h=Object(r.useContext)(Q),b=Object(r.useContext)(le),y=n;b&&(v.role||"tablist"!==b.role||(v.role="tab"),v["data-rb-event-key"]=m,v.id=b.getControllerId(m),v["aria-controls"]=b.getControlledId(m),y=null==n&&null!=m?b.activeKey===m:n),"tab"===v.role&&(v.tabIndex=y?o:-1,v["aria-selected"]=y);var x=G(function(e){d&&d(e),null!=m&&(f&&f(m,e),h&&h(m,e))});return a.a.createElement(p,Object(l.a)({},v,{ref:t,onClick:x,className:c()(i,y&&"active")}))});be.defaultProps={disabled:!1};var ye=be,xe={disabled:!1,as:he},ge=a.a.forwardRef(function(e,t){var n=e.bsPrefix,r=e.disabled,i=e.className,o=e.href,u=e.eventKey,f=e.onSelect,d=e.as,p=Object(s.a)(e,["bsPrefix","disabled","className","href","eventKey","onSelect","as"]);return n=Object(y.a)(n,"nav-link"),a.a.createElement(ye,Object(l.a)({},p,{href:o,ref:t,eventKey:u,as:d,disabled:r,onSelect:f,className:c()(i,n,r&&"disabled")}))});ge.displayName="NavLink",ge.defaultProps=xe;var Ee=ge,Oe=a.a.forwardRef(function(e,t){var n,i,o,u=v(e,{activeKey:"onSelect"}),f=u.as,d=void 0===f?"div":f,p=u.bsPrefix,m=u.variant,h=u.fill,b=u.justify,x=u.navbar,g=u.className,E=u.children,O=u.activeKey,w=Object(s.a)(u,["as","bsPrefix","variant","fill","justify","navbar","className","children","activeKey"]);p=Object(y.a)(p,"nav");var C=Object(r.useContext)(X),N=Object(r.useContext)(ne);return C?(i=C.bsPrefix,x=null==x||x):N&&(o=N.cardHeaderBsPrefix),a.a.createElement(fe,Object(l.a)({as:d,ref:t,activeKey:O,className:c()(g,(n={},n[p]=!x,n[i+"-nav"]=x,n[o+"-"+m]=!!o,n[p+"-"+m]=!!m,n[p+"-fill"]=h,n[p+"-justified"]=b,n))},w),E)});Oe.displayName="Nav",Oe.defaultProps={justify:!1,fill:!1},Oe.Item=pe,Oe.Link=Ee;var we=Oe,Ce=a.a.createElement,Ne=[{href:"",label:""},{href:"",label:""},{href:"",label:""},{href:"",label:""}].map(function(e){return e.key="nav-link-".concat(e.href,"-").concat(e.label),e}),je=function(){return Ce(te,{bg:"dark",variant:"dark",expand:"lg"},Ce(te.Brand,{href:"/"},"AK"),Ce(te.Toggle,{"aria-controls":"basic-navbar-nav"}),Ce(te.Collapse,null,Ce(we,{className:"mr-auto"},Ne.map(function(e){var t=e.key,n=e.href,r=e.label;return Ce(we.Link,{key:t,href:n},r)}))))},ke=n("CafY"),Se=a.a.createElement;t.default=function(){return Se(ke.a,null,Se(o.a,null,Se("title",null,"About")),Se(je,null),Se("div",null,Se("a",{href:"/"},"This is the about page")))}},K9S6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,i.default)(function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var a=null;return t.forEach(function(e){if(null==a){var t=e.apply(void 0,n);null!=t&&(a=t)}}),a})};var r,a=n("pvIh"),i=(r=a)&&r.__esModule?r:{default:r};e.exports=t.default},O9o6:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){return!(!e||!r.test(e))};var r=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;e.exports=t.default},QLaP:function(e,t,n){"use strict";e.exports=function(e,t,n,r,a,i,o,l){if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,a,i,o,l],c=0;(s=new Error(t.replace(/%s/g,function(){return u[c++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}}},TqRt:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},X9D3:function(e,t,n){"use strict";var r=n("TqRt");t.__esModule=!0,t.default=function(e){return(0,a.default)(e).replace(i,"-ms-")};var a=r(n("2DY1")),i=/^ms-/;e.exports=t.default},YFqc:function(e,t,n){e.exports=n("cTJO")},a413:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){return"removeProperty"in e.style?e.style.removeProperty(t):e.style.removeAttribute(t)},e.exports=t.default},cTJO:function(e,t,n){"use strict";var r=n("/HRN"),a=n("WaGi"),i=n("ZDA2"),o=n("/+P4"),l=n("N9n2"),s=n("5Uuq"),u=n("KI45");t.__esModule=!0,t.default=void 0;var c,f=u(n("LX0d")),d=n("CxY0"),p=s(n("q1tI")),v=(u(n("17x9")),u(n("nOHt"))),m=(n("P5f7"),n("g/15"));function h(e){return e&&"object"===typeof e?(0,m.formatWithValidation)(e):e}var b=new f.default,y=window.IntersectionObserver;function x(){return c||(y?c=new y(function(e){e.forEach(function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(c.unobserve(e.target),b.delete(e.target),t())}})},{rootMargin:"200px"}):void 0)}var g=function(e){function t(e){var n;return r(this,t),(n=i(this,o(t).call(this,e))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(e){var t=null,n=null,r=null;return function(a,i){if(r&&a===t&&i===n)return r;var o=e(a,i);return t=a,n=i,r=o,o}}(function(e,t){return{href:h(e),as:t?h(t):t}}),n.linkClicked=function(e){var t=e.currentTarget,r=t.nodeName,a=t.target;if("A"!==r||!(a&&"_self"!==a||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=n.formatUrls(n.props.href,n.props.as),o=i.href,l=i.as;if(function(e){var t=(0,d.parse)(e,!1,!0),n=(0,d.parse)((0,m.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(o)){var s=window.location.pathname;o=(0,d.resolve)(s,o),l=l?(0,d.resolve)(s,l):o,e.preventDefault();var u=n.props.scroll;null==u&&(u=l.indexOf("#")<0),v.default[n.props.replace?"replace":"push"](o,l,{shallow:n.props.shallow}).then(function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())})}}},n.p=!1!==e.prefetch,n}return l(t,e),a(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"handleRef",value:function(e){var t=this;this.p&&y&&e&&e.tagName&&(this.cleanUpListeners(),this.cleanUpListeners=function(e,t){var n=x();return n?(n.observe(e),b.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}b.delete(e)}):function(){}}(e,function(){t.prefetch()}))}},{key:"prefetch",value:function(){if(this.p){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=(0,d.resolve)(e,t);v.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,a=n.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var i=p.Children.only(t),o={ref:function(t){e.handleRef(t),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(t):"object"===typeof i.ref&&(i.ref.current=t))},onMouseEnter:function(t){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(t),e.prefetch()},onClick:function(t){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(o.href=a||r),p.default.cloneElement(i,o)}}]),t}(p.Component);g.propTypes=void 0;var E=g;t.default=E},dI71:function(e,t,n){"use strict";function r(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}n.d(t,"a",function(){return r})},pvIh:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,r,a,i,o){var l=a||"<<anonymous>>",s=o||r;if(null==n[r])return t?new Error("Required "+i+" `"+s+"` was not specified in `"+l+"`."):null;for(var u=arguments.length,c=Array(u>6?u-6:0),f=6;f<u;f++)c[f-6]=arguments[f];return e.apply(void 0,[n,r,l,i,s].concat(c))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default},rB5V:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n("Juyh")}])},sKrG:function(e,t,n){"use strict";var r=n("TqRt");t.__esModule=!0,t.default=function(e,t,n){var r="",c="",f=t;if("string"===typeof t){if(void 0===n)return e.style[(0,a.default)(t)]||(0,o.default)(e).getPropertyValue((0,i.default)(t));(f={})[t]=n}Object.keys(f).forEach(function(t){var n=f[t];n||0===n?(0,u.default)(t)?c+=t+"("+n+") ":r+=(0,i.default)(t)+": "+n+";":(0,l.default)(e,(0,i.default)(t))}),c&&(r+=s.transform+": "+c+";");e.style.cssText+=";"+r};var a=r(n("9SKx")),i=r(n("X9D3")),o=r(n("H0zx")),l=r(n("a413")),s=n("xU8c"),u=r(n("O9o6"));e.exports=t.default},xIqb:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){var n,i="#"===t[0],o="."===t[0],l=i||o?t.slice(1):t;if(r.test(l))return i?(e=e.getElementById?e:document,(n=e.getElementById(l))?[n]:[]):e.getElementsByClassName&&o?a(e.getElementsByClassName(l)):a(e.getElementsByTagName(t));return a(e.querySelectorAll(t))};var r=/^[\w-]*$/,a=Function.prototype.bind.call(Function.prototype.call,[].slice);e.exports=t.default},xU8c:function(e,t,n){"use strict";var r=n("TqRt");t.__esModule=!0,t.default=t.animationEnd=t.animationDelay=t.animationTiming=t.animationDuration=t.animationName=t.transitionEnd=t.transitionDuration=t.transitionDelay=t.transitionTiming=t.transitionProperty=t.transform=void 0;var a,i,o,l,s,u,c,f,d,p,v,m=r(n("Bp9Y")),h="transform";if(t.transform=h,t.animationEnd=o,t.transitionEnd=i,t.transitionDelay=c,t.transitionTiming=u,t.transitionDuration=s,t.transitionProperty=l,t.animationDelay=v,t.animationTiming=p,t.animationDuration=d,t.animationName=f,m.default){var b=function(){for(var e,t,n=document.createElement("div").style,r={O:function(e){return"o"+e.toLowerCase()},Moz:function(e){return e.toLowerCase()},Webkit:function(e){return"webkit"+e},ms:function(e){return"MS"+e}},a=Object.keys(r),i="",o=0;o<a.length;o++){var l=a[o];if(l+"TransitionProperty"in n){i="-"+l.toLowerCase(),e=r[l]("TransitionEnd"),t=r[l]("AnimationEnd");break}}!e&&"transitionProperty"in n&&(e="transitionend");!t&&"animationName"in n&&(t="animationend");return n=null,{animationEnd:t,transitionEnd:e,prefix:i}}();a=b.prefix,t.transitionEnd=i=b.transitionEnd,t.animationEnd=o=b.animationEnd,t.transform=h=a+"-"+h,t.transitionProperty=l=a+"-transition-property",t.transitionDuration=s=a+"-transition-duration",t.transitionDelay=c=a+"-transition-delay",t.transitionTiming=u=a+"-transition-timing-function",t.animationName=f=a+"-animation-name",t.animationDuration=d=a+"-animation-duration",t.animationTiming=p=a+"-animation-delay",t.animationDelay=v=a+"-animation-timing-function"}var y={transform:h,end:i,property:l,timing:u,delay:c,duration:s};t.default=y}},[["rB5V",1,0]]]);