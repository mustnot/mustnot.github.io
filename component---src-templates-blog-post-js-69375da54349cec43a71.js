(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"1QcF":function(e,t,n){},RPjP:function(e,t,n){"use strict";e.exports=n("SLms")},SLms:function(e,t,n){"use strict";n("HAE/"),n("91GP"),n("hHhE"),n("/SS/"),n("V+eJ"),n("5Pf0"),n("DNiP"),n("RW0V"),n("dZ+Y"),n("8+KV"),n("pIFo"),Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=s(n("q1tI")),i=s(n("17x9"));function s(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var l=["shortname","identifier","title","url","category_id","onNewComment","language"],f=!1;function m(e,t){var n=t.onNewComment,r=t.language,a=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["onNewComment","language"]);for(var o in a)e.page[o]=a[o];e.language=r,n&&(e.callbacks={onNewComment:[n]})}var p=function(e){function t(){return u(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){this.loadDisqus()}},{key:"componentDidUpdate",value:function(){this.loadDisqus()}},{key:"shouldComponentUpdate",value:function(e,t){return e.identifier!==this.props.identifier}},{key:"render",value:function(){var e=this,t=Object.keys(this.props).reduce((function(t,n){return l.some((function(e){return e===n}))?t:r({},t,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},n,e.props[n]))}),{});return o.default.createElement("div",t,o.default.createElement("div",{id:"disqus_thread"}))}},{key:"addDisqusScript",value:function(){if(!f){var e=this.disqus=document.createElement("script"),t=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];e.async=!0,e.type="text/javascript",e.src="//"+this.props.shortname+".disqus.com/embed.js",t.appendChild(e),f=!0}}},{key:"loadDisqus",value:function(){var e=this,t={};l.forEach((function(n){"shortname"!==n&&e.props[n]&&(t[n]=e.props[n])})),"undefined"!=typeof DISQUS?DISQUS.reset({reload:!0,config:function(){m(this,t),this.page.url=this.page.url.replace(/#/,"")+"#!newthread"}}):(window.disqus_config=function(){m(this,t)},this.addDisqusScript())}}]),t}(o.default.Component);p.displayName="DisqusThread",p.propTypes={id:i.default.string,shortname:i.default.string.isRequired,identifier:i.default.string,title:i.default.string,url:i.default.string,category_id:i.default.string,onNewComment:i.default.func,language:i.default.string},p.defaultProps={url:"undefined"==typeof window?null:window.location.href},t.default=p},TsVF:function(e,t,n){},jmfv:function(e,t,n){},"n1n/":function(e,t,n){},uhgt:function(e,t,n){},vg9a:function(e,t,n){},yZlL:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=(n("TsVF"),function(){return a.a.createElement("hr",{className:"custom-hr"})}),i=n("hpys"),s=n("CC2r"),u=function(e){var t=e.title;return a.a.createElement("h1",null,t)},c=(n("1QcF"),function(e){var t=e.date;return a.a.createElement("p",{className:"post-date"},t)}),l=function(e){var t=e.html;return a.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}})},f=(n("jmfv"),function(e){var t=e.sponsorId;return a.a.createElement("div",{className:"sponsor-button"},a.a.createElement("a",{className:"bmc-button",target:"_blank",rel:"noopener noreferrer",href:"https://www.buymeacoffee.com/"+t},a.a.createElement("img",{src:"https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg",alt:"Buy me a coffee"}),a.a.createElement("span",null,"Buy me a coffee")))}),m=n("lbRd"),p=n("Wbzz"),d=(n("n1n/"),function(e){var t=e.pageContext,n=t.previous,r=t.next;return a.a.createElement("ul",{className:"navigator"},a.a.createElement("li",null,n&&a.a.createElement(p.Link,{to:n.fields.slug,rel:"prev"},"← ",n.frontmatter.title)),a.a.createElement("li",null,r&&a.a.createElement(p.Link,{to:r.fields.slug,rel:"next"},r.frontmatter.title," →")))}),h=(n("I78e"),n("RPjP")),b=n.n(h);function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).state={toasts:[]},n.notifyAboutComment=n.notifyAboutComment.bind(y(n)),n.onSnackbarDismiss=n.onSnackbarDismiss.bind(y(n)),n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,g(t,n);var o=r.prototype;return o.onSnackbarDismiss=function(){var e=this.state.toasts.slice(1);this.setState({toasts:e})},o.notifyAboutComment=function(){var e=this.state.toasts.slice();e.push({text:"New comment available!!"}),this.setState({toasts:e})},o.render=function(){var e=this.props,t=e.post,n=e.shortName,r=e.siteUrl+e.slug;return a.a.createElement(b.a,{shortname:n,identifier:t.frontmatter.title,title:t.frontmatter.title,url:r,category_id:t.frontmatter.category_id,onNewComment:this.notifyAboutComment})},r}(r.Component),E=(n("RW0V"),n("JqEL")),w=n("WlAH"),_=function(e){var t=e.repo,n=a.a.createRef();return Object(r.useEffect)((function(){var e=E.f(w.d.DARK),r=document.createElement("script"),a={src:"https://utteranc.es/client.js",repo:t,branch:"master",theme:e?"photon-dark":"github-light",label:"comment",async:!0,"issue-term":"pathname",crossorigin:"anonymous"};Object.keys(a).forEach((function(e){r.setAttribute(e,a[e])})),n.current.appendChild(r)}),[]),a.a.createElement("div",{className:"utterances",ref:n})},j=n("EXIE");n("uhgt"),n("vg9a"),t.default=function(e){var t=e.data,n=e.pageContext,p=e.location;Object(r.useEffect)((function(){return j.c(),function(){return j.a()}}),[]);var h=t.markdownRemark,b=t.site.siteMetadata,y=b.title,g=b.comment,E=b.siteUrl,w=(b.author,b.sponsor),C=g.disqusShortName,O=g.utterances,k=h.frontmatter,N=k.title,S=k.date;return a.a.createElement(i.a,{location:p,title:y},a.a.createElement(s.a,{title:N,description:h.excerpt}),a.a.createElement(u,{title:N}),a.a.createElement(c,{date:S}),a.a.createElement(l,{html:h.html}),!!w.buyMeACoffeeId&&a.a.createElement(f,{sponsorId:w.buyMeACoffeeId}),a.a.createElement(o,null),a.a.createElement(m.a,null),a.a.createElement(d,{pageContext:n}),!!C&&a.a.createElement(v,{post:h,shortName:C,siteUrl:E,slug:n.slug}),!!O&&a.a.createElement(_,{repo:O}))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-69375da54349cec43a71.js.map