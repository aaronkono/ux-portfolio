(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{XcHJ:function(e,a,i){"use strict";i.d(a,"a",(function(){return n}));var t=i("q1tI");function n(){var e=Object(t.useRef)(!0),a=Object(t.useRef)((function(){return e.current}));return Object(t.useEffect)((function(){return function(){e.current=!1}}),[]),a.current}},"b+jL":function(e,a,i){"use strict";var t=i("wx14"),n=i("zLVn"),s=i("ZCiN"),c=i("q1tI"),o=i.n(c);var r=function(e,a){var i=Object(c.useRef)(!0);Object(c.useEffect)((function(){if(!i.current)return e();i.current=!1}),a)},l=i("XcHJ"),v=i("i52p"),m=Math.pow(2,31)-1;function d(){var e=Object(l.a)(),a=Object(c.useRef)();return Object(v.a)((function(){return clearTimeout(a.current)})),Object(c.useMemo)((function(){var i=function(){return clearTimeout(a.current)};return{set:function(t,n){void 0===n&&(n=0),e()&&(i(),n<=m?a.current=setTimeout(t,n):function e(a,i,t){var n=t-Date.now();a.current=n<=m?setTimeout(i,n):setTimeout((function(){return e(a,i,t)}),m)}(a,t,Date.now()+n))},clear:i}}),[])}var u=i("TSYQ"),p=i.n(u),N=i("YECM"),f=i("dRu9"),b=i("JCAc"),h=i("YdCC"),g=Object(h.a)("carousel-caption",{Component:"div"}),w=Object(h.a)("carousel-item");function C(e,a){var i=0;return o.a.Children.map(e,(function(e){return o.a.isValidElement(e)?a(e,i++):e}))}var y=i("dbZe"),j=i("vUet"),x=i("z+q/"),O={slide:!0,fade:!1,controls:!0,indicators:!0,defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:o.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:o.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};var k=o.a.forwardRef((function(e,a){var i=Object(b.a)(e,{activeIndex:"onSelect"}),l=i.as,v=void 0===l?"div":l,m=i.bsPrefix,u=i.slide,h=i.fade,g=i.controls,w=i.indicators,O=i.activeIndex,k=i.onSelect,E=i.onSlide,I=i.onSlid,T=i.interval,S=i.keyboard,P=i.onKeyDown,M=i.pause,L=i.onMouseOver,D=i.onMouseOut,R=i.wrap,U=i.touch,q=i.onTouchStart,A=i.onTouchMove,X=i.onTouchEnd,Z=i.prevIcon,F=i.prevLabel,B=i.nextIcon,H=i.nextLabel,J=i.className,_=i.children,K=Object(n.a)(i,["as","bsPrefix","slide","fade","controls","indicators","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","className","children"]),W=Object(j.a)(m,"carousel"),Y=Object(c.useRef)(null),G=Object(c.useState)("next"),Q=G[0],V=G[1],z=Object(c.useState)(!1),$=z[0],ee=z[1],ae=Object(c.useState)(O),ie=ae[0],te=ae[1];$||O===ie||(Y.current?(V(Y.current),Y.current=null):V(O>ie?"next":"prev"),u&&ee(!0),te(O));var ne=o.a.Children.toArray(_).filter(o.a.isValidElement).length,se=Object(c.useCallback)((function(e){if(!$){var a=ie-1;if(a<0){if(!R)return;a=ne-1}Y.current="prev",k(a,e)}}),[$,ie,k,R,ne]),ce=Object(s.a)((function(e){if(!$){var a=ie+1;if(a>=ne){if(!R)return;a=0}Y.current="next",k(a,e)}})),oe=Object(c.useRef)();Object(c.useImperativeHandle)(a,(function(){return{element:oe.current,prev:se,next:ce}}));var re=Object(s.a)((function(){!document.hidden&&function(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;var a=getComputedStyle(e);return"none"!==a.display&&"hidden"!==a.visibility&&"none"!==getComputedStyle(e.parentNode).display}(oe.current)&&ce()})),le="next"===Q?"left":"right";r((function(){u||(E&&E(ie,le),I&&I(ie,le))}),[ie]);var ve=W+"-item-"+Q,me=W+"-item-"+le,de=Object(c.useCallback)((function(e){Object(x.a)(e),E&&E(ie,le)}),[E,ie,le]),ue=Object(c.useCallback)((function(){ee(!1),I&&I(ie,le)}),[I,ie,le]),pe=Object(c.useCallback)((function(e){if(S&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void se(e);case"ArrowRight":return e.preventDefault(),void ce(e)}P&&P(e)}),[S,P,se,ce]),Ne=Object(c.useState)(!1),fe=Ne[0],be=Ne[1],he=Object(c.useCallback)((function(e){"hover"===M&&be(!0),L&&L(e)}),[M,L]),ge=Object(c.useCallback)((function(e){be(!1),D&&D(e)}),[D]),we=Object(c.useRef)(0),Ce=Object(c.useRef)(0),ye=Object(c.useState)(!1),je=ye[0],xe=ye[1],Oe=d(),ke=Object(c.useCallback)((function(e){we.current=e.touches[0].clientX,Ce.current=0,U&&xe(!0),q&&q(e)}),[U,q]),Ee=Object(c.useCallback)((function(e){e.touches&&e.touches.length>1?Ce.current=0:Ce.current=e.touches[0].clientX-we.current,A&&A(e)}),[A]),Ie=Object(c.useCallback)((function(e){if(U){var a=Ce.current;if(Math.abs(a)<=40)return;a>0?se(e):ce(e)}Oe.set((function(){xe(!1)}),T),X&&X(e)}),[U,se,ce,Oe,T,X]),Te=null!=T&&!fe&&!je&&!$,Se=Object(c.useRef)();Object(c.useEffect)((function(){if(Te)return Se.current=setInterval(document.visibilityState?re:ce,T),function(){clearInterval(Se.current)}}),[Te,ce,T,re]);var Pe=Object(c.useMemo)((function(){return w&&Array.from({length:ne},(function(e,a){return function(e){k(a,e)}}))}),[w,ne,k]);return(o.a.createElement(v,Object(t.a)({ref:oe},K,{onKeyDown:pe,onMouseOver:he,onMouseOut:ge,onTouchStart:ke,onTouchMove:Ee,onTouchEnd:Ie,className:p()(J,W,u&&"slide",h&&W+"-fade")}),w&&o.a.createElement("ol",{className:W+"-indicators"},C(_,(function(e,a){return o.a.createElement("li",{key:a,className:a===ie?"active":null,onClick:Pe[a]})}))),o.a.createElement("div",{className:W+"-inner"},C(_,(function(e,a){var i=a===ie;return u?o.a.createElement(f.e,{in:i,onEnter:i?de:null,onEntered:i?ue:null,addEndListener:N.a},(function(a){return o.a.cloneElement(e,{className:p()(e.props.className,i&&"entered"!==a&&ve,("entered"===a||"exiting"===a)&&"active",("entering"===a||"exiting"===a)&&me)})})):o.a.cloneElement(e,{className:p()(e.props.className,i&&"active")})}))),g&&o.a.createElement(o.a.Fragment,null,(R||0!==O)&&o.a.createElement(y.a,{className:W+"-control-prev",onClick:se},Z,F&&o.a.createElement("span",{className:"sr-only"},F)),(R||O!==ne-1)&&o.a.createElement(y.a,{className:W+"-control-next",onClick:ce},B,H&&o.a.createElement("span",{className:"sr-only"},H)))))}));k.displayName="Carousel",k.defaultProps=O,k.Caption=g,k.Item=w;a.a=k},"f3T+":function(e,a,i){"use strict";i.r(a),i.d(a,"default",(function(){return b}));var t=i("q1tI"),n=i.n(t),s=i("8Kt/"),c=i.n(s),o=i("7vrA"),r=i("3Z9Z"),l=i("JI6e"),v=i("b+jL"),m=i("CafY"),d=i("MbLX"),u=(i("Ii92"),i("ECo4")),p=(i("4G1Q"),i("Dfby")),N=i("aIN1"),f=n.a.createElement;function b(){return f(m.a,null,f(c.a,null,f("title",null,"Lululiv Website \xb7 Aaron Konopka, UX / UI Designer")),f(d.a,null),f("header",null,f(o.a,{fluid:!0,className:"ak-container--header ak--container-spacer bg-blue"},f(r.a,{className:"h-100"},f(l.a,{xs:12,className:"h-100"},f("header",{className:"d-flex flex-row h-100"},f("div",{className:"ak--container d-flex align-items-center justify-content-center flex-column w-50"},f("div",{className:"header-subpage-main-text"},f("h1",{className:"f-bold header-font mb-20"},"Lululiv Website"),f("p",{className:"f-secondary mb-20"},"Create a presence for Lululiv and it's offering of property management as a service to Principals around Australia"),f("div",{className:"d-flex flex-row"},f("div",{className:"w-50"},f("p",{className:"mb-4 f-bold"},"Client"),f("p",{className:"f-secondary"},"Lululiv")),f("div",{className:"w-50"},f("p",{className:"mb-4 f-bold"},"Specfic Role"),f("p",{className:"mb-0 f-secondary"},"UX Design"),f("p",{className:"mb-0 f-secondary"},"UI Design"),f("p",{className:"f-secondary"},"Frontend Dev"))))),f("div",{className:"d-flex position-relative align-items-center justify-content-center w-50 ak--profile-image"},f("img",{src:"./static/lululiv-website-header.jpg",className:"w-100"}),f("svg",{className:"position-absolute svg-2",viewBox:"0 0 200 200",xmlns:"http://www.w3.org/2000/svg"},f("path",{fill:"#CDEBF9",d:"M31.9,-34.9C38.1,-17.8,37.4,-4.7,37.5,14C37.6,32.6,38.3,56.8,29.1,61.9C19.8,67,0.6,52.9,-20.4,42.6C-41.3,32.4,-64,26.1,-72,10.8C-80,-4.5,-73.3,-28.8,-58.9,-47.8C-44.4,-66.8,-22.2,-80.5,-4.7,-76.8C12.9,-73.1,25.8,-52,31.9,-34.9Z",transform:"translate(100 100)"})),f("div",{className:"position-absolute dot-outer-container"},f("div",{className:"dot-container"},f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "})),f("div",{className:"dot-container"},f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "})),f("div",{className:"dot-container"},f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "})),f("div",{className:" dot-container"},f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "})),f("div",{className:"dot-container"},f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "})),f("div",{className:"dot-container"},f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "})),f("div",{className:"dot-container"},f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "})),f("div",{className:"dot-container"},f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}))),f("div",{className:"position-absolute dot-outer-container doc-right"},f("div",{className:"dot-container"},f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "})),f("div",{className:"dot-container"},f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "})),f("div",{className:"dot-container"},f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "})),f("div",{className:" dot-container"},f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "})),f("div",{className:"dot-container"},f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "})),f("div",{className:"dot-container"},f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "})),f("div",{className:"dot-container"},f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "})),f("div",{className:"dot-container"},f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}))),f("svg",{className:"position-absolute svg-1",viewBox:"0 0 200 200",xmlns:"http://www.w3.org/2000/svg"},f("path",{fill:"#CDEBF9",d:"M31.9,-34.9C38.1,-17.8,37.4,-4.7,37.5,14C37.6,32.6,38.3,56.8,29.1,61.9C19.8,67,0.6,52.9,-20.4,42.6C-41.3,32.4,-64,26.1,-72,10.8C-80,-4.5,-73.3,-28.8,-58.9,-47.8C-44.4,-66.8,-22.2,-80.5,-4.7,-76.8C12.9,-73.1,25.8,-52,31.9,-34.9Z",transform:"translate(100 100)"}))))))),f(o.a,{className:"ak--container-spacer"},f(r.a,null,f(l.a,null,f("h2",{className:"f-bold text-center mb-8"},"Problem statement & the process"),f("p",{className:"text-center mb-24 f-secondary"},"Defining the problem we're solving"),f("div",{className:"ak--container bg-grey ctaContainer pleft-4 pright-4"},f("div",{className:"processProblemContainerOuter"},f("div",{className:"processProblemContainer"},f("div",{className:"circleIconContainer mb-12"},f("i",{className:"fas fa-exclamation"})),f("div",null,f("h6",{className:"mb-12 f-bold leadUpper"},"Problem")),f("div",null,f("p",{className:"f-secondary"},"Lululiv is a startup company which needs to convey their offering to a wider audience. There was no way for selling Principals to sign up or even enquire about the offering."))),f("div",{className:"processProblemContainer"},f("div",{className:"circleIconContainer mb-12"},f("i",{className:"far fa-microchip"})),f("div",null,f("h6",{className:"mb-12 f-bold leadUpper"},"The Process")),f("div",null,f("p",{className:"f-secondary"},"The creative process was a rapid iterative approach which was over in three days."),f("p",{className:"f-secondary"},"The website needed to convert selling Principals to enquire about this offering. User feedback was crucial as the content on the website needed to be attractive to them. While this was a quick turn around, it has hit all the key metrics the CEOs required.")))),f("svg",{className:"position-absolute ctaSvg ctaSvgTwo svgGrey",viewBox:"0 0 200 200",xmlns:"http://www.w3.org/2000/svg"},f("path",{fill:"#f1f1f1",d:"M37.9,-48.2C51.1,-34,65.3,-24,72.1,-9.2C79,5.7,78.5,25.4,68.2,35.8C58,46.3,37.9,47.6,21.9,48.2C5.9,48.9,-6,49,-19.1,46.7C-32.2,44.4,-46.6,39.8,-54.8,29.7C-63,19.5,-65,3.9,-64.6,-13.7C-64.2,-31.2,-61.5,-50.6,-50.3,-65.2C-39.2,-79.7,-19.6,-89.5,-3.6,-85.2C12.3,-80.8,24.6,-62.4,37.9,-48.2Z",transform:"translate(100 100)"}))))))),f(u.c,{className:"ak--container"},f(u.a,null,f(u.d,null,f("h3",{className:"f-bold mb-0 "},"User flows / Wireframes"))),f(u.b,null,f("div",{className:"iteration-grid"},f("div",null,f("img",{className:"img-fluid",src:"./static/lululiv-website-wireframe.jpg"})),f("div",null,f("img",{className:"img-fluid",src:"./static/lululiv-website-wireframe-1.jpg"})),f("div",null,f("img",{className:"img-fluid",src:"./static/lululiv-website-wireframe-2.jpg"})),f("div",null,f("img",{className:"img-fluid",src:"./static/lululiv-website-wireframe-3.jpg"})),f("div",null,f("img",{className:"img-fluid",src:"./static/lululiv-website-wireframe-4.jpg"})),f("div",null,f("img",{className:"img-fluid",src:"./static/lululiv-website-wireframe-5.jpg"}))))),f(u.c,{className:"ak--container pb-0"},f(u.a,null,f(u.d,null,f("h3",{className:"f-bold mb-0 "},"Prototypes"),f("p",{className:"f-secondary"},"No prototypes available. The time constriant of this project didn't allow for interactive prototyping, this went straight into development after the inital user flow / wireframing stage."))),f(u.b,null,f("div",{className:"iteration-grid ig-prototype"},f("div",null,f("img",{className:"img-fluid",src:"https://images.unsplash.com/photo-1561123760-0b8467594a63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1506&q=80"}))))),f(o.a,{className:"ak--container-spacer"},f(r.a,null,f(l.a,null,f("h2",{className:"f-bold text-center mb-8"},"Results"),f("p",{className:"text-center mb-24 f-secondary panelSubHeading"},"Metrics & Measurements"),f("div",{className:"ak--container bg-grey ctaContainer pleft-4 pright-4"},f("div",{className:"processProblemContainerOuter"},f("div",{className:"processProblemContainer mb-16"},f("div",{className:"circleIconContainer mb-12"},f("i",{className:"far fa-chart-line"})),f("div",null,f("h6",{className:"mb-12 f-bold leadUpper"},"Conversions")),f("div",null,f("p",{className:"f-secondary"},f("strong",null,"22")," New Real Estate Principal enquiries"))),f("div",{className:"processProblemContainer mb-16"},f("div",{className:"circleIconContainer mb-12"},f("i",{className:"far fa-chart-line"})),f("div",null,f("h6",{className:"mb-12 f-bold leadUpper"},"Time")),f("div",null,f("p",{className:"f-secondary"},f("strong",null,"2:37")," Avg. Session Duration")))),f("div",{className:"processProblemContainerOuter"},f("div",{className:"processProblemContainer"},f("div",{className:"circleIconContainer mb-12"},f("i",{className:"far fa-chart-line"})),f("div",null,f("h6",{className:"mb-12 f-bold leadUpper"},"Time")),f("div",null,f("p",{className:"f-secondary"},f("strong",null,"4.27")," Pages seen per session"))),f("div",{className:"processProblemContainer opacity-0"},f("div",{className:"circleIconContainer mb-12"},f("i",{className:"far fa-chart-line"})),f("div",null,f("h6",{className:"mb-12 f-bold leadUpper"},"Productivity")),f("div",null,f("p",{className:"f-secondary"},f("strong",null,"Zero")," back and forward communication emails")))),f("svg",{className:"position-absolute ctaSvg ctaSvgTwo svgGrey",viewBox:"0 0 200 200",xmlns:"http://www.w3.org/2000/svg"},f("path",{fill:"#f1f1f1",d:"M37.9,-48.2C51.1,-34,65.3,-24,72.1,-9.2C79,5.7,78.5,25.4,68.2,35.8C58,46.3,37.9,47.6,21.9,48.2C5.9,48.9,-6,49,-19.1,46.7C-32.2,44.4,-46.6,39.8,-54.8,29.7C-63,19.5,-65,3.9,-64.6,-13.7C-64.2,-31.2,-61.5,-50.6,-50.3,-65.2C-39.2,-79.7,-19.6,-89.5,-3.6,-85.2C12.3,-80.8,24.6,-62.4,37.9,-48.2Z",transform:"translate(100 100)"})))))),f(o.a,{fluid:!0,className:"ak--container-spacer bg-grey"},f(r.a,null,f(l.a,null,f("div",{className:"ak--container"},f("h2",{className:"f-bold text-center"},"Final Product"),f("p",{className:"text-center f-secondary panelSubHeading"},"I'm not too sure anything can top the feeling when all your hard work is display, check out some screenshots below or"," ",f("a",{className:"ak--weblink",href:"https://lululiv.com",target:"_blank"},"visit the website ",f("i",{className:"fal fa-external-link"}))),f("div",{className:"ak--boxShadow"},f(v.a,null,f(v.a.Item,null,f("img",{className:"d-block w-100",src:"./static/lululiv-website-product-1.jpg",alt:"First slide"})),f(v.a.Item,null,f("img",{className:"d-block w-100",src:"./static/lululiv-website-product-2.jpg",alt:"Third slide"})),f(v.a.Item,null,f("img",{className:"d-block w-100",src:"./static/lululiv-website-product-3.jpg",alt:"Third slide"})),f(v.a.Item,null,f("img",{className:"d-block w-100",src:"./static/lululiv-website-product-4.jpg",alt:"Fourth slide"})),f(v.a.Item,null,f("img",{className:"d-block w-100",src:"./static/lululiv-website-product-5.jpg",alt:"Fifth slide"})))))))),f(p.a,{formHeading:f("h2",{className:"f-bold text-center mb-8"},"Like what you see?"),formSubheading:f("p",{className:"text-center mb-24 f-secondary"},"Let's collaborate or have a chat about working together")}),f(N.a,null))}},i52p:function(e,a,i){"use strict";i.d(a,"a",(function(){return n}));var t=i("q1tI");function n(e){var a=function(e){var a=Object(t.useRef)(e);return a.current=e,a}(e);Object(t.useEffect)((function(){return function(){return a.current()}}),[])}},klL6:function(e,a,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/lululiv-website",function(){return i("f3T+")}])}},[["klL6",0,2,1,4,3,6,5]]]);