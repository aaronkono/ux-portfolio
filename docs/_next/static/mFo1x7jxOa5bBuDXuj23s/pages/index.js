(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"3Z9Z":function(e,a,t){"use strict";var i=t("wx14"),l=t("zLVn"),n=t("TSYQ"),s=t.n(n),r=t("q1tI"),c=t.n(r),o=t("vUet"),u=["xl","lg","md","sm","xs"],m=c.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,r=e.noGutters,m=e.as,f=void 0===m?"div":m,d=Object(l.a)(e,["bsPrefix","className","noGutters","as"]),p=Object(o.a)(t,"row"),b=p+"-cols",h=[];return u.forEach((function(e){var a,t=d[e];delete d[e];var i="xs"!==e?"-"+e:"";null!=(a=null!=t&&"object"===typeof t?t.cols:t)&&h.push(""+b+i+"-"+a)})),c.a.createElement(f,Object(i.a)({ref:a},d,{className:s.a.apply(void 0,[n,p,r&&"no-gutters"].concat(h))}))}));m.displayName="Row",m.defaultProps={noGutters:!1},a.a=m},"7vrA":function(e,a,t){"use strict";var i=t("wx14"),l=t("zLVn"),n=t("TSYQ"),s=t.n(n),r=t("q1tI"),c=t.n(r),o=t("vUet"),u=c.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.fluid,r=e.as,u=void 0===r?"div":r,m=e.className,f=Object(l.a)(e,["bsPrefix","fluid","as","className"]),d=Object(o.a)(t,"container"),p="string"===typeof n?"-"+n:"-fluid";return c.a.createElement(u,Object(i.a)({ref:a},f,{className:s()(m,n?""+d+p:d)}))}));u.displayName="Container",u.defaultProps={fluid:!1},a.a=u},Dfby:function(e,a,t){"use strict";var i=t("1OyB"),l=t("vuIU"),n=t("Ji7U"),s=t("md7G"),r=t("foSv"),c=t("q1tI"),o=t.n(c),u=t("7vrA"),m=t("3Z9Z"),f=t("JI6e"),d=(t("8nKq"),o.a.createElement);function p(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,i=Object(r.a)(e);if(a){var l=Object(r.a)(this).constructor;t=Reflect.construct(i,arguments,l)}else t=i.apply(this,arguments);return Object(s.a)(this,t)}}var b=function(e){Object(n.a)(t,e);var a=p(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return d(u.a,{fluid:!0,className:"ak--container-spacer ak--blue-container"},d(m.a,null,d(f.a,{xs:12},d("div",{className:"ak--container"},d("div",null,this.props.formHeading),d("div",null,this.props.formSubheading),d("div",{className:"ak--form-container"},d("form",{action:"https://app.99inbound.com/api/e/TjWKVWYx",method:"POST",target:"_blank"},d("div",{className:"form-group"},d("input",{id:"nameLabel",className:"form-control fc-ak--input",type:"text",name:"name",placeholder:"Name (required)",required:!0})),d("div",{className:"form-group mb-36"},d("input",{id:"emailLabel",className:"form-control fc-ak--input",type:"email",name:"email",placeholder:"Email address (required)",required:!0})),d("div",{className:"text-center"},d("button",{className:"btn btn-ak--outline btn-ak--outline-wh btn-md"},"Let's grab a coffee!"))))))))}}]),t}(o.a.Component);a.a=b},JI6e:function(e,a,t){"use strict";var i=t("wx14"),l=t("zLVn"),n=t("TSYQ"),s=t.n(n),r=t("q1tI"),c=t.n(r),o=t("vUet"),u=["xl","lg","md","sm","xs"],m=c.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,r=e.as,m=void 0===r?"div":r,f=Object(l.a)(e,["bsPrefix","className","as"]),d=Object(o.a)(t,"col"),p=[],b=[];return u.forEach((function(e){var a,t,i,l=f[e];if(delete f[e],null!=l&&"object"===typeof l){var n=l.span;a=void 0===n||n,t=l.offset,i=l.order}else a=l;var s="xs"!==e?"-"+e:"";null!=a&&p.push(!0===a?""+d+s:""+d+s+"-"+a),null!=i&&b.push("order"+s+"-"+i),null!=t&&b.push("offset"+s+"-"+t)})),p.length||p.push(d),c.a.createElement(m,Object(i.a)({},f,{ref:a,className:s.a.apply(void 0,[n].concat(p,b))}))}));m.displayName="Col",a.a=m},RNiq:function(e,a,t){"use strict";t.r(a);var i=t("q1tI"),l=t.n(i),n=t("8Kt/"),s=t.n(n),r=t("MbLX"),c=t("CafY"),o=(t("Zpkv"),t("7vrA")),u=t("3Z9Z"),m=t("JI6e"),f=t("Ylv7"),d=t("Dfby"),p=t("aIN1"),b=l.a.createElement;a.default=function(){var e=Object(i.useState)(""),a=e[0],t=e[1];return Object(i.useEffect)((function(){t(" active")})),b(c.a,null,b(s.a,null,b("title",null,"Home")),b(r.a,null),b(o.a,{fluid:!0,className:"ak-container--header ak--container-spacer ak--blue-container"},b(u.a,{className:"h-100"},b(m.a,{xs:12,className:"h-100"},b("header",{className:"h-100"},b("div",{className:"ak--container d-flex h-100 align-items-center justify-content-center flex-column "},b("div",{className:"header-main-text"+a},b("h1",{className:"f-bold header-font mb-36"},"Hi, Aaron Konopka is the name! I live and breath product design, creating a cohesive balance between UX and UI design, throughout the whole product lifecycle. I also come neatly packaged with a technical background and an impeccable taste is shoes. Pleasure to meet you..."),b("a",{href:"/portfolio",className:"btn btn-ak--outline btn-md"},"Check out what i've worked on"," ",b("i",{className:"fal fa-long-arrow-right"})))))))),b(f.a,null),b(d.a,{formHeading:b("h2",{className:"f-bold text-center ak--body-title ak--wh"},"Mind a coffee catch up?"),formSubheading:b("p",{className:"ak--body-subtitle ak--wh text-center mb-36"},"Let's collaborate and have a chat about working together")}),b(p.a,null))}},Ylv7:function(e,a,t){"use strict";var i=t("q1tI"),l=t.n(i),n=t("7vrA"),s=t("3Z9Z"),r=t("JI6e"),c=(t("itRK"),l.a.createElement);a.a=function(){return c(n.a,{fluid:!0,className:"ak--container-spacer"},c(s.a,null,c(r.a,{xs:12},c("div",{className:"ak--container"},c("h2",{className:"f-bold text-center ak--body-title"},"Transforming ideas into products"),c("p",{className:"ak--body-subtitle text-center mb-36"},"Process driven design & development from beginning to end"),c("div",{className:"project-grid"},c("div",{className:"project-thumbnail"},c("a",{href:"/inspect-app"},c("div",{className:"thumbnail-inner"},c("img",{className:"img-fluid",src:"https://images.unsplash.com/photo-1553531580-652231dae097?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1026&q=80"})),c("div",null,c("h4",null,"Inspect App"),c("p",{className:"mb-0"},"Sed bibendum, mi sit amet sollicitudin pulvinar, risus augue luctus lectus")))),c("div",{className:"project-thumbnail "},c("a",{href:"/fix-platform-manage"},c("div",{className:"thumbnail-inner"},c("img",{className:"img-fluid",src:"https://images.unsplash.com/photo-1553531580-652231dae097?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1026&q=80"})),c("div",null,c("h4",null,"FIX Platform - Manage"),c("p",{className:"mb-0"},"Sed bibendum, mi sit amet sollicitudin pulvinar, risus augue luctus lectus")))),c("div",{className:"project-thumbnail"},c("a",{href:"/toop-website"},c("div",{className:"thumbnail-inner"},c("img",{className:"img-fluid",src:"https://images.unsplash.com/photo-1553531580-652231dae097?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1026&q=80"})),c("div",null,c("h4",null,"Toop&Toop Website"),c("p",{className:"mb-0"},"Sed bibendum, mi sit amet sollicitudin pulvinar, risus augue luctus lectus")))),c("div",{className:"project-thumbnail"},c("a",{href:"/fix-platform-tenant"},c("div",{className:"thumbnail-inner"},c("img",{className:"img-fluid",src:"https://images.unsplash.com/photo-1553531580-652231dae097?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1026&q=80"})),c("div",null,c("h4",null,"FIX Platform - Tenant"),c("p",{className:"mb-0"},"Sed bibendum, mi sit amet sollicitudin pulvinar, risus augue luctus lectus")))),c("div",{className:"project-thumbnail"},c("a",{href:"/fix-platform-owner"},c("div",{className:"thumbnail-inner"},c("img",{className:"img-fluid",src:"https://images.unsplash.com/photo-1553531580-652231dae097?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1026&q=80"})),c("div",null,c("h4",null,"FIX Platform - Owner"),c("p",{className:"mb-0"},"Sed bibendum, mi sit amet sollicitudin pulvinar, risus augue luctus lectus")))),c("div",{className:"project-thumbnail"},c("a",{href:"/renew-platform"},c("div",{className:"thumbnail-inner"},c("img",{className:"img-fluid",src:"https://images.unsplash.com/photo-1553531580-652231dae097?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1026&q=80"})),c("div",null,c("h4",null,"Renew Platform"),c("p",{className:"mb-0"},"Sed bibendum, mi sit amet sollicitudin pulvinar, risus augue luctus lectus")))))))))}},aIN1:function(e,a,t){"use strict";var i=t("q1tI"),l=t.n(i),n=t("7vrA"),s=t("3Z9Z"),r=t("JI6e"),c=(t("iQsK"),l.a.createElement);a.a=function(){return c("footer",null,c(n.a,{fluid:!0},c(s.a,null,c(r.a,{xs:12},c("div",{className:"lulu-container footer-outer"},c("div",{className:"d-flex flex-column flex-sm-row align-items-center align-items-sm-start mb-3"},c("div",{className:"align-self-start mb-4"},c("a",{href:"/"},"AK"),c("p",{className:"mb-0 fs-14"},"Impeccable taste is shoes")),c("div",{className:"ml-auto footer-grid footer-grid-list"},c("div",null,c("p",{className:"mb-0"},"Home"),c("ul",null,c("li",null,c("a",{href:"/"},"a")))),c("div",null,c("p",{className:"mb-0"},"Portfolio"),c("ul",null,c("li",null,c("a",{href:"/inspect-app"},"Inspect App")),c("li",null,c("a",{href:"/toop-website"},"Toop&Toop Website")),c("li",null,c("a",{href:"/fix-platform-manage"},"FIX Platform - Manage")),c("li",null,c("a",{href:"/fix-platform-tenant"},"FIX Platform - Tenant")),c("li",null,c("a",{href:"/fix-platform-owner"},"FIX Platform - Owner")),c("li",null,c("a",{href:"/renew-platform"},"Renew Platform")))))))))))}},vlRD:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("RNiq")}])}},[["vlRD",0,2,1,4,3,5]]]);