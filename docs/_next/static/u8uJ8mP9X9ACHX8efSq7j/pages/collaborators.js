(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{OuXd:function(e,a,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/collaborators",function(){return i("h6w+")}])},XcHJ:function(e,a,i){"use strict";i.d(a,"a",(function(){return n}));var t=i("q1tI");function n(){var e=Object(t.useRef)(!0),a=Object(t.useRef)((function(){return e.current}));return Object(t.useEffect)((function(){return function(){e.current=!1}}),[]),a.current}},"b+jL":function(e,a,i){"use strict";var t=i("wx14"),n=i("zLVn"),s=i("ZCiN"),o=i("q1tI"),c=i.n(o);var l=function(e,a){var i=Object(o.useRef)(!0);Object(o.useEffect)((function(){if(!i.current)return e();i.current=!1}),a)},r=i("XcHJ"),d=i("i52p"),m=Math.pow(2,31)-1;function v(){var e=Object(r.a)(),a=Object(o.useRef)();return Object(d.a)((function(){return clearTimeout(a.current)})),Object(o.useMemo)((function(){var i=function(){return clearTimeout(a.current)};return{set:function(t,n){void 0===n&&(n=0),e()&&(i(),n<=m?a.current=setTimeout(t,n):function e(a,i,t){var n=t-Date.now();a.current=n<=m?setTimeout(i,n):setTimeout((function(){return e(a,i,t)}),m)}(a,t,Date.now()+n))},clear:i}}),[])}var u=i("TSYQ"),p=i.n(u),N=i("YECM"),f=i("dRu9"),b=i("JCAc"),h=i("YdCC"),g=Object(h.a)("carousel-caption",{Component:"div"}),w=Object(h.a)("carousel-item");function C(e,a){var i=0;return c.a.Children.map(e,(function(e){return c.a.isValidElement(e)?a(e,i++):e}))}var y=i("dbZe"),k=i("vUet"),x=i("z+q/"),O={slide:!0,fade:!1,controls:!0,indicators:!0,defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:c.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:c.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};var j=c.a.forwardRef((function(e,a){var i=Object(b.a)(e,{activeIndex:"onSelect"}),r=i.as,d=void 0===r?"div":r,m=i.bsPrefix,u=i.slide,h=i.fade,g=i.controls,w=i.indicators,O=i.activeIndex,j=i.onSelect,I=i.onSlide,E=i.onSlid,S=i.interval,T=i.keyboard,M=i.onKeyDown,P=i.pause,U=i.onMouseOver,D=i.onMouseOut,L=i.wrap,R=i.touch,A=i.onTouchStart,X=i.onTouchMove,F=i.onTouchEnd,q=i.prevIcon,B=i.prevLabel,Z=i.nextIcon,J=i.nextLabel,_=i.className,K=i.children,H=Object(n.a)(i,["as","bsPrefix","slide","fade","controls","indicators","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","className","children"]),Y=Object(k.a)(m,"carousel"),z=Object(o.useRef)(null),V=Object(o.useState)("next"),W=V[0],G=V[1],Q=Object(o.useState)(!1),$=Q[0],ee=Q[1],ae=Object(o.useState)(O),ie=ae[0],te=ae[1];$||O===ie||(z.current?(G(z.current),z.current=null):G(O>ie?"next":"prev"),u&&ee(!0),te(O));var ne=c.a.Children.toArray(K).filter(c.a.isValidElement).length,se=Object(o.useCallback)((function(e){if(!$){var a=ie-1;if(a<0){if(!L)return;a=ne-1}z.current="prev",j(a,e)}}),[$,ie,j,L,ne]),oe=Object(s.a)((function(e){if(!$){var a=ie+1;if(a>=ne){if(!L)return;a=0}z.current="next",j(a,e)}})),ce=Object(o.useRef)();Object(o.useImperativeHandle)(a,(function(){return{element:ce.current,prev:se,next:oe}}));var le=Object(s.a)((function(){!document.hidden&&function(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;var a=getComputedStyle(e);return"none"!==a.display&&"hidden"!==a.visibility&&"none"!==getComputedStyle(e.parentNode).display}(ce.current)&&oe()})),re="next"===W?"left":"right";l((function(){u||(I&&I(ie,re),E&&E(ie,re))}),[ie]);var de=Y+"-item-"+W,me=Y+"-item-"+re,ve=Object(o.useCallback)((function(e){Object(x.a)(e),I&&I(ie,re)}),[I,ie,re]),ue=Object(o.useCallback)((function(){ee(!1),E&&E(ie,re)}),[E,ie,re]),pe=Object(o.useCallback)((function(e){if(T&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void se(e);case"ArrowRight":return e.preventDefault(),void oe(e)}M&&M(e)}),[T,M,se,oe]),Ne=Object(o.useState)(!1),fe=Ne[0],be=Ne[1],he=Object(o.useCallback)((function(e){"hover"===P&&be(!0),U&&U(e)}),[P,U]),ge=Object(o.useCallback)((function(e){be(!1),D&&D(e)}),[D]),we=Object(o.useRef)(0),Ce=Object(o.useRef)(0),ye=Object(o.useState)(!1),ke=ye[0],xe=ye[1],Oe=v(),je=Object(o.useCallback)((function(e){we.current=e.touches[0].clientX,Ce.current=0,R&&xe(!0),A&&A(e)}),[R,A]),Ie=Object(o.useCallback)((function(e){e.touches&&e.touches.length>1?Ce.current=0:Ce.current=e.touches[0].clientX-we.current,X&&X(e)}),[X]),Ee=Object(o.useCallback)((function(e){if(R){var a=Ce.current;if(Math.abs(a)<=40)return;a>0?se(e):oe(e)}Oe.set((function(){xe(!1)}),S),F&&F(e)}),[R,se,oe,Oe,S,F]),Se=null!=S&&!fe&&!ke&&!$,Te=Object(o.useRef)();Object(o.useEffect)((function(){if(Se)return Te.current=setInterval(document.visibilityState?le:oe,S),function(){clearInterval(Te.current)}}),[Se,oe,S,le]);var Me=Object(o.useMemo)((function(){return w&&Array.from({length:ne},(function(e,a){return function(e){j(a,e)}}))}),[w,ne,j]);return(c.a.createElement(d,Object(t.a)({ref:ce},H,{onKeyDown:pe,onMouseOver:he,onMouseOut:ge,onTouchStart:je,onTouchMove:Ie,onTouchEnd:Ee,className:p()(_,Y,u&&"slide",h&&Y+"-fade")}),w&&c.a.createElement("ol",{className:Y+"-indicators"},C(K,(function(e,a){return c.a.createElement("li",{key:a,className:a===ie?"active":null,onClick:Me[a]})}))),c.a.createElement("div",{className:Y+"-inner"},C(K,(function(e,a){var i=a===ie;return u?c.a.createElement(f.e,{in:i,onEnter:i?ve:null,onEntered:i?ue:null,addEndListener:N.a},(function(a){return c.a.cloneElement(e,{className:p()(e.props.className,i&&"entered"!==a&&de,("entered"===a||"exiting"===a)&&"active",("entering"===a||"exiting"===a)&&me)})})):c.a.cloneElement(e,{className:p()(e.props.className,i&&"active")})}))),g&&c.a.createElement(c.a.Fragment,null,(L||0!==O)&&c.a.createElement(y.a,{className:Y+"-control-prev",onClick:se},q,B&&c.a.createElement("span",{className:"sr-only"},B)),(L||O!==ne-1)&&c.a.createElement(y.a,{className:Y+"-control-next",onClick:oe},Z,J&&c.a.createElement("span",{className:"sr-only"},J)))))}));j.displayName="Carousel",j.defaultProps=O,j.Caption=g,j.Item=w;a.a=j},"h6w+":function(e,a,i){"use strict";i.r(a),i.d(a,"default",(function(){return b}));var t=i("q1tI"),n=i.n(t),s=i("8Kt/"),o=i.n(s),c=i("7vrA"),l=i("3Z9Z"),r=i("JI6e"),d=i("b+jL"),m=i("CafY"),v=i("MbLX"),u=(i("Ii92"),i("ECo4")),p=i("Dfby"),N=i("aIN1"),f=n.a.createElement;function b(){return f(m.a,null,f(o.a,null,f("title",null,"Sine - Collaborators \xb7 Aaron Konopka, UX / UI Designer")),f(v.a,null),f("header",null,f(c.a,{fluid:!0,className:"ak-container--header ak--container-spacer bg-blue"},f(l.a,{className:"h-100"},f(r.a,{xs:12,className:"h-100"},f("header",{className:"d-flex flex-row h-100"},f("div",{className:"ak--container d-flex align-items-center justify-content-center flex-column w-50"},f("div",{className:"header-subpage-main-text"},f("h1",{className:"f-bold header-font mb-20"},"Collaborators case study"),f("p",{className:"f-secondary mb-20"},"I reduced friction and time on task for users add, editing and removing collaborators from their account."),f("div",{className:"d-flex flex-row"},f("div",{className:"w-50"},f("p",{className:"mb-4 f-bold"},"Client"),f("p",{className:"f-secondary"},"Sine")),f("div",{className:"w-50"},f("p",{className:"mb-4 f-bold"},"Specific Role"),f("p",{className:"mb-0 f-secondary"},"UX Design"),f("p",{className:"mb-0 f-secondary"},"UI Design"))))),f("div",{className:"d-flex position-relative align-items-center justify-content-center w-50"},f("img",{src:"./static/colabs-future.png",className:"w-100 z-index-2"}),f("svg",{className:"position-absolute svg-2",viewBox:"0 0 200 200",xmlns:"http://www.w3.org/2000/svg"},f("path",{fill:"#CDEBF9",d:"M31.9,-34.9C38.1,-17.8,37.4,-4.7,37.5,14C37.6,32.6,38.3,56.8,29.1,61.9C19.8,67,0.6,52.9,-20.4,42.6C-41.3,32.4,-64,26.1,-72,10.8C-80,-4.5,-73.3,-28.8,-58.9,-47.8C-44.4,-66.8,-22.2,-80.5,-4.7,-76.8C12.9,-73.1,25.8,-52,31.9,-34.9Z",transform:"translate(100 100)"})),f("div",{className:"position-absolute dot-outer-container"},f("div",{className:"dot-container"},f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "})),f("div",{className:"dot-container"},f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "})),f("div",{className:"dot-container"},f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "})),f("div",{className:" dot-container"},f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "})),f("div",{className:"dot-container"},f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "})),f("div",{className:"dot-container"},f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "})),f("div",{className:"dot-container"},f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "})),f("div",{className:"dot-container"},f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}))),f("div",{className:"position-absolute dot-outer-container doc-right"},f("div",{className:"dot-container"},f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "})),f("div",{className:"dot-container"},f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "})),f("div",{className:"dot-container"},f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "})),f("div",{className:" dot-container"},f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "})),f("div",{className:"dot-container"},f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "})),f("div",{className:"dot-container"},f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "})),f("div",{className:"dot-container"},f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "})),f("div",{className:"dot-container"},f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}),f("div",{className:"position-relative c--container "}))),f("svg",{className:"position-absolute svg-1",viewBox:"0 0 200 200",xmlns:"http://www.w3.org/2000/svg"},f("path",{fill:"#CDEBF9",d:"M31.9,-34.9C38.1,-17.8,37.4,-4.7,37.5,14C37.6,32.6,38.3,56.8,29.1,61.9C19.8,67,0.6,52.9,-20.4,42.6C-41.3,32.4,-64,26.1,-72,10.8C-80,-4.5,-73.3,-28.8,-58.9,-47.8C-44.4,-66.8,-22.2,-80.5,-4.7,-76.8C12.9,-73.1,25.8,-52,31.9,-34.9Z",transform:"translate(100 100)"}))))))),f(c.a,{className:"ak--container-spacer"},f(l.a,null,f(r.a,null,f("h2",{className:"f-bold text-center mb-8"},"Problem statement & the process"),f("p",{className:"text-center mb-24 f-secondary"},"Defining the problem we're solving"),f("div",{className:"ak--container bg-grey ctaContainer pleft-4 pright-4"},f("div",{className:"processProblemContainerOuter"},f("div",{className:"processProblemContainer"},f("div",{className:"circleIconContainer mb-12"},f("i",{className:"fas fa-exclamation"})),f("div",null,f("h6",{className:"mb-12 f-bold leadUpper"},"Problem")),f("div",null,f("p",{className:"f-secondary"},"Users are spending an unnecessary amount of time adding, editing and deleting collaborators due to the page's composition."),f("p",{className:"f-secondary"},"The main concern was that each collaborator would be added and appear multiple times rather than consolidating into a table row per role. Some customers would have more than 1500 rows in this table."))),f("div",{className:"processProblemContainer"},f("div",{className:"circleIconContainer mb-12"},f("i",{className:"far fa-lightbulb-on"})),f("div",null,f("h6",{className:"mb-12 f-bold leadUpper"},"The solution")),f("div",null,f("p",{className:"f-secondary"},"The solution reduces the friction when adding, editing and deleting collaborators as well as consolidating each role into it's own table row."),f("p",{className:"f-secondary"},"Find out how I saved our users time on task and more below.")))),f("svg",{className:"position-absolute ctaSvg ctaSvgTwo svgGrey",viewBox:"0 0 200 200",xmlns:"http://www.w3.org/2000/svg"},f("path",{fill:"#f1f1f1",d:"M37.9,-48.2C51.1,-34,65.3,-24,72.1,-9.2C79,5.7,78.5,25.4,68.2,35.8C58,46.3,37.9,47.6,21.9,48.2C5.9,48.9,-6,49,-19.1,46.7C-32.2,44.4,-46.6,39.8,-54.8,29.7C-63,19.5,-65,3.9,-64.6,-13.7C-64.2,-31.2,-61.5,-50.6,-50.3,-65.2C-39.2,-79.7,-19.6,-89.5,-3.6,-85.2C12.3,-80.8,24.6,-62.4,37.9,-48.2Z",transform:"translate(100 100)"}))))))),f(u.c,{className:"ak--container"},f(u.a,null,f(u.d,null,f("h3",{className:"f-bold mb-12 "},"Before & After"),f("p",{className:"f-secondary"},"A snapshot of what the Collaborators page used to look like."))),f(u.b,null,f("div",{className:"iteration-grid"},f("div",{className:"no-shadow"},f("img",{className:"img-fluid",src:"./static/colabs-current.png"}),f("p",{className:"mb-0 f-secondary"},f("i",null,"Collaborators before"))),f("div",{className:"no-shadow"},f("img",{className:"img-fluid",src:"./static/colabs-future.png"}),f("p",{className:"mb-0 f-secondary"},f("i",null,"Collaborators after")))))),f(u.c,{className:"ak--container"},f(u.a,null,f(u.d,null,f("h3",{className:"f-bold mb-12"},"A quick brainstorm"),f("p",{className:""},"After a couple conversations with a customer and their admin, I collated my notes and started the following:"),f("ul",null,f("li",null,"Empathy mapping"),f("li",null,"Current vs future concept (text based for IA purposes)"),f("li",null,"Wireframing ideas")))),f(u.b,null,f("div",{className:"iteration-grid"},f("div",{className:"no-shadow"},f("img",{className:"img-fluid",src:"./static/colabs-empathyMap.png"})),f("div",{className:"no-shadow"},f("img",{className:"img-fluid",src:"./static/colabs-currentFuture.png"})),f("div",{className:"no-shadow"},f("img",{className:"img-fluid",src:"./static/colabs-wireframing.png"}))))),f(u.c,{className:"ak--container"},f(u.a,null,f(u.d,null,f("h3",{className:"f-bold mb-12"},"Prototype"),f("p",{className:""},"I created components to use in the proposed solution then created a prototype to test."))),f(u.b,null,f("div",{className:"iteration-grid"},f("div",{className:"no-shadow"},f("img",{className:"img-fluid",src:"./static/colabs-addNewColab.png"})),f("div",{className:"no-shadow"},f("img",{className:"img-fluid",src:"./static/colabs-addSitePer.png"})),f("div",{className:"no-shadow"},f("img",{className:"img-fluid",src:"./static/colabs-deleteBulk.png"})),f("div",{className:"no-shadow"},f("img",{className:"img-fluid",src:"./static/colabs-deleteColab.png"}))))),f(c.a,{className:"ak--container-spacer"},f(l.a,null,f(r.a,null,f("h2",{className:"f-bold text-center mb-8"},"Testing & Feedback"),f("p",{className:"text-center mb-24 f-secondary"},"I interviewed 4 customers and 1 internal stakeholder to validate my solution."),f("div",{className:"ak--container bg-grey ctaContainer pleft-4 pright-4"},f("div",{className:"processProblemContainerOuter"},f("div",{className:"processProblemContainer mb-16"},f("div",{className:"circleIconContainer mb-12"},f("i",{className:"fas fa-question"})),f("div",null,f("h6",{className:"mb-12 f-bold leadUpper"},"Customer / User feedback")),f("div",null,f("p",{className:"f-secondary"},"Overall they liked the consolidation of site permissions under one role."))),f("div",{className:"processProblemContainer mb-16"},f("div",{className:"circleIconContainer mb-12"},f("i",{className:"far fa-chart-line-down"})),f("div",null,f("h6",{className:"mb-12 f-bold leadUpper"},"Time on task")),f("div",null,f("p",{className:"f-secondary"},"Their time on task will be significantly lower when making changes.")))),f("div",{className:"processProblemContainerOuter"},f("div",{className:"processProblemContainer mb-16"},f("div",{className:"circleIconContainer mb-12"},f("i",{className:"fas fa-question"})),f("div",null,f("h6",{className:"mb-12 f-bold leadUpper"},"Customer / user feedback")),f("div",null,f("p",{className:"f-secondary"},"Mentioned that they would like to see the address of where a site is located."))),f("div",{className:"processProblemContainer mb-16"},f("div",{className:"circleIconContainer mb-12"},f("i",{className:"fas fa-question"})),f("div",null,f("h6",{className:"mb-12 f-bold leadUpper"},"Customer / user feedback")),f("div",null,f("p",{className:"f-secondary"},"Mentioned that they would like to filter by site / state.")))),f("svg",{className:"position-absolute ctaSvg ctaSvgTwo svgGrey",viewBox:"0 0 200 200",xmlns:"http://www.w3.org/2000/svg"},f("path",{fill:"#f1f1f1",d:"M37.9,-48.2C51.1,-34,65.3,-24,72.1,-9.2C79,5.7,78.5,25.4,68.2,35.8C58,46.3,37.9,47.6,21.9,48.2C5.9,48.9,-6,49,-19.1,46.7C-32.2,44.4,-46.6,39.8,-54.8,29.7C-63,19.5,-65,3.9,-64.6,-13.7C-64.2,-31.2,-61.5,-50.6,-50.3,-65.2C-39.2,-79.7,-19.6,-89.5,-3.6,-85.2C12.3,-80.8,24.6,-62.4,37.9,-48.2Z",transform:"translate(100 100)"})))))),f(u.c,{className:"ak--container"},f(u.a,null,f(u.d,null,f("h3",{className:"f-bold mb-12"},"Updates based on feedback"),f("p",{className:""},"The updates that came out of testing were implemented as a slight improvement of the overall solution."))),f(u.b,null,f("div",{className:"iteration-grid"},f("div",{className:"no-shadow"},f("img",{className:"img-fluid",src:"./static/colabs-feedbackUpdate1.png"})),f("div",{className:"no-shadow"},f("img",{className:"img-fluid",src:"./static/colabs-feedbackUpdate2.png"}))))),f(c.a,{fluid:!0,className:"ak--container-spacer bg-grey"},f(l.a,null,f(r.a,null,f("div",{className:"ak--container"},f("h2",{className:"f-bold text-center mb-8"},"Final Product"),f("p",{className:"text-center f-secondary mb-24 secondaryTextWidth"},"I'm not too sure anything can top the feeling when all your hard work is display, check out some screenshots below"),f("div",{className:""},f(d.a,null,f(d.a.Item,null,f("img",{className:"d-block w-100",src:"./static/colabs-future.png",alt:"First slide"})))))))),f(c.a,{fluid:!0,className:"ak--container-spacer"},f(l.a,null,f(r.a,null,f("div",{className:"ak--container"},f("h2",{className:"f-bold text-center mb-8"},"Future considerations"),f("p",{className:"text-center f-secondary mb-24 secondaryTextWidth"},"The solution outlined is only the start of the journey. I have proposed this concept as a future enhancement to further consolidate collaborators."),f("div",{className:""},f(d.a,null,f(d.a.Item,null,f("img",{className:"d-block w-100",src:"./static/colabs-futureConsideration.png",alt:"First slide"})))))))),f(p.a,{formHeading:f("h2",{className:"f-bold text-center mb-8"},"Like what you see?"),formSubheading:f("p",{className:"text-center mb-24 f-secondary"},"Let's collaborate or have a chat about working together")}),f(N.a,null))}},i52p:function(e,a,i){"use strict";i.d(a,"a",(function(){return n}));var t=i("q1tI");function n(e){var a=function(e){var a=Object(t.useRef)(e);return a.current=e,a}(e);Object(t.useEffect)((function(){return function(){return a.current()}}),[])}}},[["OuXd",0,2,1,4,3,6,5]]]);