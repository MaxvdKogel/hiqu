(function(e){function t(t){for(var i,c,r=t[0],o=t[1],d=t[2],u=0,v=[];u<r.length;u++)c=r[u],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&v.push(s[c][0]),s[c]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);l&&l(t);while(v.length)v.shift()();return n.push.apply(n,d||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],i=!0,r=1;r<a.length;r++){var o=a[r];0!==s[o]&&(i=!1)}i&&(n.splice(t--,1),e=c(c.s=a[0]))}return e}var i={},s={app:0},n=[];function c(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=e,c.c=i,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)c.d(a,i,function(t){return e[t]}.bind(null,i));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=t,r=r.slice();for(var d=0;d<r.length;d++)t(r[d]);var l=o;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"065e":function(e,t,a){"use strict";a("8fcd")},"06b6":function(e,t,a){"use strict";a("e5f9")},"0f43":function(e,t,a){},"1a7e":function(e,t,a){"use strict";a("2047")},"1acc":function(e,t,a){"use strict";a("e4fa")},2047:function(e,t,a){},"3f71":function(e,t,a){"use strict";a("49f6")},4459:function(e,t,a){"use strict";a("0f43")},"49f6":function(e,t,a){},"56bb":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("7a23");function s(e,t,a,s,n,c){var r=Object(i["y"])("Header"),o=Object(i["y"])("Menu"),d=Object(i["y"])("router-view");return Object(i["s"])(),Object(i["d"])(i["a"],null,[Object(i["e"])("div",null,[Object(i["h"])(r),Object(i["h"])(o)]),Object(i["h"])(d)],64)}Object(i["v"])("data-v-b8c3a15e");var n={class:"container header__container"},c={class:"nav"},r=Object(i["e"])("p",{class:"logo fino opacity"},"Hiqu",-1),o=Object(i["e"])("div",{class:"topLine"},null,-1),d=Object(i["e"])("div",{class:"bottomLine"},null,-1),l=[o,d];function u(e,t,a,s,o,d){return Object(i["s"])(),Object(i["d"])("header",null,[Object(i["e"])("div",n,[Object(i["e"])("div",c,[r,Object(i["e"])("div",{class:Object(i["n"])(["hamburger opacity",{active:this.$store.state.isBurgerActive}]),onClick:t[0]||(t[0]=Object(i["D"])((function(){return d.toggle&&d.toggle.apply(d,arguments)}),["prevent"]))},l,2)])])])}Object(i["t"])();var v=a("cffa"),f=v["a"].timeline({defaults:{ease:"power2"}}),m={name:"Header",data:function(){return{isBurgerActive:!1}},mounted:function(){f.from(".opacity",{opacity:0,duration:1},"+=0.75")},methods:{toggle:function(){this.isBurgerActive=!this.isBurgerActive,this.$store.state.isMenuActive=this.isBurgerActive}}};a("f6c6");m.render=u,m.__scopeId="data-v-b8c3a15e";var p=m;Object(i["v"])("data-v-023c9d3f");var b={class:"menu"},h={class:"container",ref:"menuContainer"},g={class:"links"},j=Object(i["g"])("Home"),O=Object(i["g"])("Products"),y=Object(i["g"])("About us"),w=Object(i["f"])('<div class="social-links" data-v-023c9d3f><div class="insta social-link hide" data-v-023c9d3f><svg id="insta" xmlns="http://www.w3.org/2000/svg" width="16.8" height="16.8" viewBox="0 0 14 14" data-v-023c9d3f><path id="Path_8" data-name="Path 8" d="M7,.162C5.1.162,4.861.17,4.114.2a5.138,5.138,0,0,0-1.7.325,3.431,3.431,0,0,0-1.24.807,3.431,3.431,0,0,0-.807,1.24,5.138,5.138,0,0,0-.325,1.7C.008,5.022,0,5.26,0,7.162S.008,9.3.042,10.048a5.138,5.138,0,0,0,.325,1.7,3.432,3.432,0,0,0,.807,1.24,3.431,3.431,0,0,0,1.24.807,5.138,5.138,0,0,0,1.7.325c.747.034.985.042,2.886.042s2.139-.008,2.886-.042a5.138,5.138,0,0,0,1.7-.325,3.579,3.579,0,0,0,2.047-2.047,5.138,5.138,0,0,0,.325-1.7C13.992,9.3,14,9.063,14,7.162s-.008-2.139-.042-2.886a5.138,5.138,0,0,0-.325-1.7,3.431,3.431,0,0,0-.807-1.24,3.432,3.432,0,0,0-1.24-.807A5.138,5.138,0,0,0,9.886.2C9.139.17,8.9.162,7,.162ZM7,1.423c1.869,0,2.09.007,2.829.041a3.874,3.874,0,0,1,1.3.241,2.169,2.169,0,0,1,.8.524,2.169,2.169,0,0,1,.524.8,3.873,3.873,0,0,1,.241,1.3c.034.738.041.96.041,2.829s-.007,2.09-.041,2.829a3.873,3.873,0,0,1-.241,1.3,2.318,2.318,0,0,1-1.329,1.329,3.873,3.873,0,0,1-1.3.241c-.738.034-.959.041-2.829.041s-2.091-.007-2.829-.041a3.873,3.873,0,0,1-1.3-.241,2.169,2.169,0,0,1-.8-.524,2.168,2.168,0,0,1-.524-.8A3.873,3.873,0,0,1,1.3,9.99c-.034-.738-.041-.96-.041-2.829s.007-2.09.041-2.829a3.873,3.873,0,0,1,.241-1.3,2.169,2.169,0,0,1,.524-.8,2.169,2.169,0,0,1,.8-.524,3.874,3.874,0,0,1,1.3-.241C4.91,1.43,5.131,1.423,7,1.423Z" transform="translate(0 -0.162)" data-v-023c9d3f></path><path id="Path_9" data-name="Path 9" d="M128.135,130.63a2.333,2.333,0,1,1,2.333-2.333A2.333,2.333,0,0,1,128.135,130.63Zm0-5.928a3.595,3.595,0,1,0,3.595,3.595A3.595,3.595,0,0,0,128.135,124.7Z" transform="translate(-121.135 -121.296)" fill="#030404" data-v-023c9d3f></path><path id="Path_10" data-name="Path 10" d="M363.612,89.629a.84.84,0,1,1-.84-.84A.84.84,0,0,1,363.612,89.629Z" transform="translate(-352.036 -86.365)" fill="#030404" data-v-023c9d3f></path></svg></div><div class="facebook social-link hide" data-v-023c9d3f><svg xmlns="http://www.w3.org/2000/svg" width="8.93" height="16.8" viewBox="0 0 7.442 14" data-v-023c9d3f><path id="facebook" d="M126.876,7.816l.386-2.515h-2.413V3.669a1.257,1.257,0,0,1,1.418-1.358h1.1V.17A13.376,13.376,0,0,0,125.417,0a3.07,3.07,0,0,0-3.286,3.384V5.3h-2.209V7.816h2.209v6.079a8.793,8.793,0,0,0,2.718,0V7.816Z" transform="translate(-119.922)" data-v-023c9d3f></path></svg></div><div class="twitter social-link hide" data-v-023c9d3f><svg xmlns="http://www.w3.org/2000/svg" width="20.328" height="16.5176" viewBox="0 0 14 11.376" data-v-023c9d3f><path id="twitter" d="M4.4,59.363a8.117,8.117,0,0,0,8.173-8.173c0-.124,0-.248-.008-.371A5.844,5.844,0,0,0,14,49.332a5.734,5.734,0,0,1-1.65.452A2.883,2.883,0,0,0,13.613,48.2a5.757,5.757,0,0,1-1.824.7,2.875,2.875,0,0,0-4.895,2.62,8.159,8.159,0,0,1-5.92-3,2.886,2.886,0,0,0,.889,3.834,2.851,2.851,0,0,1-1.3-.36v.036a2.882,2.882,0,0,0,2.3,2.816,2.868,2.868,0,0,1-1.3.049,2.881,2.881,0,0,0,2.684,1.995A5.765,5.765,0,0,1,.684,58.114,5.844,5.844,0,0,1,0,58.072,8.133,8.133,0,0,0,4.4,59.36" transform="translate(0 -47.987)" data-v-023c9d3f></path></svg></div></div>',1),k=Object(i["e"])("div",{class:"imgDiv menuImgDiv hide"},[Object(i["e"])("img",{class:"img menuImg",src:"/assets/img/kamer-menu.jpg",alt:""})],-1);function x(e,t,a,s,n,c){var r=Object(i["y"])("router-link");return Object(i["s"])(),Object(i["d"])("div",b,[Object(i["e"])("div",h,[Object(i["e"])("div",g,[Object(i["h"])(r,{to:"/",exact:"",class:"title link hide menu-link home",onClick:t[0]||(t[0]=function(e){return c.closeMenu()})},{default:Object(i["C"])((function(){return[j]})),_:1}),Object(i["h"])(r,{to:"/products",exact:"",class:"title link hide menu-link",onClick:t[1]||(t[1]=function(e){return c.closeMenu()})},{default:Object(i["C"])((function(){return[O]})),_:1}),Object(i["h"])(r,{to:"/about",exact:"",class:"title link hide menu-link",onClick:t[2]||(t[2]=function(e){return c.closeMenu()})},{default:Object(i["C"])((function(){return[y]})),_:1}),w]),k],512)])}Object(i["t"])();var I=a("4e7c");v["a"].registerPlugin(I["a"]);var P=v["a"].timeline(),A={name:"Menu",data:function(){return{isMenuActive:!1,animIsRunning:!1}},mounted:function(){this.resize()},watch:{"$store.state.isMenuActive":function(){var e=this,t=document.querySelector(".menu");t.classList.toggle("menu-active"),this.isMenuActive=!this.isMenuActive,0==this.animIsRunning&&(this.isMenuActive?(this.$store.state.isBurgerActive=!0,document.querySelector(".hamburger").classList.add("active"),document.querySelector("body").style.overflowY="hidden",document.querySelector(".menuImg").classList.remove("hide"),document.querySelector(".menuImgDiv").classList.remove("hide"),this.animIsRunning=!this.animIsRunning,document.querySelector(".menuImgDiv").classList.add("height"),document.querySelector(".hamburger").style.pointerEvents="none",P.to(".menu",{height:window.innerHeight,duration:.5,ease:"power2.out"}).fromTo("a.menu-link",{opacity:0,y:75},{opacity:1,y:0,duration:.75,stagger:.2,ease:"power2"}).from(".menuImg",{height:0,duration:1,ease:"power2"},"-=1").fromTo(".social-link",{opacity:0,y:50},{opacity:1,y:0,duration:.5,ease:"power2",onComplete:function(){e.animIsRunning=!e.animIsRunning,document.querySelector(".hamburger").style.pointerEvents="auto"}},"-=.5")):this.closeMenu())}},methods:{closeMenu:function(){var e=this;this.$store.state.isBurgerActive=!1,window.scrollTo(0,0),this.animIsRunning=!this.animIsRunning,document.querySelector(".hamburger").style.pointerEvents="none",document.querySelector("body").style.overflowY="scroll",document.querySelector(".hamburger").classList.remove("active"),document.querySelector(".menuImgDiv").classList.remove("height"),P.to(".social-link",{opacity:0,y:-50,duration:.5,ease:"power2.in"}).to(".menuImg",{height:0,duration:1,ease:"power2.in",onComplete:function(){document.querySelector(".menuImg").classList.add("hide"),v["a"].to(".menuImg",{clearProps:"height"})}},"-=1").to("a.menu-link",{opacity:0,y:-75,duration:.75,stagger:-.2,ease:"power2.in"},"-=.5").to(".menu",{height:0,duration:.5,ease:"power2.in",onComplete:function(){e.animIsRunning=!e.animIsRunning,document.querySelector(".hamburger").style.pointerEvents="auto",e.isMenuActive=!1}})},resize:function(){var e=this;window.addEventListener("resize",(function(){v["a"].to(".menuImg",{clearProps:"height"}),e.isMenuActive&&v["a"].to(".menu",{height:window.innerHeight})}))}}};a("06b6");A.render=x,A.__scopeId="data-v-023c9d3f";var S=A,_={name:"App",components:{Header:p,Menu:S},mounted:function(){window.addEventListener("scroll",this.inViewport),window.addEventListener("scroll",this.parallax)},unmounted:function(){window.removeEventListener("scroll",this.inViewport),window.removeEventListener("scroll",this.parallax)},methods:{inViewport:function(){for(var e=document.querySelectorAll(".hidden"),t=0;t<e.length;t++)e[t].getBoundingClientRect().top-.75*window.innerHeight<0&&(e[t].classList.remove("hidden"),v["a"].from(e[t],{opacity:0,y:50,duration:.5}))},parallax:function(){this.scrolled=window.pageYOffset;for(var e=document.querySelectorAll(".parallax"),t=0;t<e.length;t++){var a=this.scrolled*e[t].dataset.rate;e[t].style.transform="translateY("+a+"px)"}}}};a("065e");_.render=s;var M=_,L=a("6c02");function q(e,t,a,s,n,c){var r=Object(i["y"])("landingPage"),o=Object(i["y"])("fullscreenImg"),d=Object(i["y"])("popularProducts"),l=Object(i["y"])("newsletter"),u=Object(i["y"])("Footer");return Object(i["s"])(),Object(i["d"])(i["a"],null,[Object(i["h"])(r),Object(i["h"])(o),Object(i["h"])(d),Object(i["h"])(l),Object(i["h"])(u,{"bg-color":"white"})],64)}Object(i["v"])("data-v-abb96048");var $={class:"landingPage"},C={class:"container landingPage__container"},B=Object(i["f"])('<div class="images" data-v-abb96048><div class="img1 parallax" data-rate="-0.05" data-v-abb96048><img class="img-up img" src="assets/img/kamer1.jpg" alt="" data-v-abb96048></div><div class="img2 parallax" data-rate=".1" data-v-abb96048><img class="img-up img" src="assets/img/kamer2.jpg" alt="" data-v-abb96048></div><div class="img3 parallax" data-rate=".01" data-v-abb96048><img class="img-up img" src="assets/img/kamer3.jpg" alt="" data-v-abb96048></div></div>',1),E={class:"txt"},H=Object(i["e"])("h1",{class:"title fino anim parallax","data-rate":"0"},[Object(i["g"])("Quality interiors that make you "),Object(i["e"])("br"),Object(i["g"])(" feel at home.")],-1),R=Object(i["e"])("p",{class:"p bilo intro anim parallax","data-rate":"0"}," Hiqu is a premium interior reseller offering a full range of interior design services since 1998. ",-1),D={class:"cta fino anim parallax","data-rate":"0"},T={class:"ctaTxt",ref:"ctaTxt"};function W(e,t,a,s,n,c){return Object(i["s"])(),Object(i["d"])("div",$,[Object(i["e"])("div",C,[B,Object(i["e"])("div",E,[H,R,Object(i["e"])("div",D,[Object(i["e"])("p",T,"products",512)])])])])}Object(i["t"])();var F=v["a"].timeline({defaults:{ease:"power2"}}),V={name:"landingPage",data:function(){return{scrolled:0}},mounted:function(){F.from(".img-up",{height:0,duration:1,stagger:.2,clearProps:"height"}).from(".anim",{opacity:0,y:50,duration:.75,stagger:.15},"-=1").from(this.$refs.ctaTxt,{opacity:0,duration:.3},"-=0.45")}};a("c800");V.render=W,V.__scopeId="data-v-abb96048";var X=V;Object(i["v"])("data-v-e34246a6");var Z={class:"imgDiv"};function z(e,t,a,s,n,c){return Object(i["s"])(),Object(i["d"])("div",Z)}Object(i["t"])();var U={name:"fullscreenImg"};a("f5e0");U.render=z,U.__scopeId="data-v-e34246a6";var Y=U;Object(i["v"])("data-v-7d15cb66");var J={class:"bg"},Q={class:"container"},N=Object(i["e"])("h2",{class:"fino title hidden"},"Popular products",-1),G={class:"slider",ref:"slider"},K={class:"products",ref:"products"},ee=Object(i["f"])('<div class="product" data-v-7d15cb66><img class="img" src="assets/img/products/couch.jpg" alt="couch" data-v-7d15cb66></div><div class="product" data-v-7d15cb66><img class="img" src="assets/img/products/nightstand.jpg" alt="nightstand" data-v-7d15cb66></div><div class="product" data-v-7d15cb66><img class="img" src="assets/img/products/bed.jpg" alt="bed" data-v-7d15cb66></div><div class="product" data-v-7d15cb66><img class="img" src="assets/img/products/couch.jpg" alt="bed" data-v-7d15cb66></div><div class="product" data-v-7d15cb66><img class="img" src="assets/img/products/nightstand.jpg" alt="bed" data-v-7d15cb66></div><div class="product" data-v-7d15cb66><img class="img" src="assets/img/products/bed.jpg" alt="bed" data-v-7d15cb66></div>',6),te=[ee];function ae(e,t,a,s,n,c){return Object(i["s"])(),Object(i["d"])("div",J,[Object(i["e"])("div",Q,[N,Object(i["e"])("div",G,[Object(i["e"])("div",K,te,512)],512)])])}Object(i["t"])();var ie={name:"popularProducts",data:function(){return{isPressed:!1,startingPoint:0,cursorX:0}},mounted:function(){var e=this;this.$refs.slider.addEventListener("mousedown",this.mouseDown),document.addEventListener("mouseup",this.mouseUp),this.$refs.slider.addEventListener("mousemove",this.mouseMove),this.$refs.slider.addEventListener("mouseenter",(function(){e.$refs.slider.style.cursor="grab"}))},unmounted:function(){document.removeEventListener("mouseup",this.mouseUp)},methods:{mouseDown:function(e){this.isPressed=!0,this.startingPoint=e.offsetX-this.$refs.products.offsetLeft+.05*window.innerWidth,window.innerWidth>1300&&(this.startingPoint=e.offsetX-this.$refs.products.offsetLeft+65)},mouseUp:function(){this.isPressed&&(this.isPressed=!1),this.$refs.slider.style.cursor="grab"},mouseMove:function(e){this.isPressed&&(e.preventDefault(),this.$refs.slider.style.cursor="grabbing",this.cursorX=e.offsetX,this.$refs.products.style.left="".concat(this.cursorX-this.startingPoint,"px")),this.checkBoundary()},checkBoundary:function(){parseInt(this.$refs.products.style.left)>0?this.$refs.products.style.left=0:parseInt(document.querySelector(".container").offsetWidth)-parseInt(this.$refs.products.style.left)>this.$refs.products.offsetWidth&&(this.$refs.products.style.left="-".concat(this.$refs.products.offsetWidth-document.querySelector(".container").offsetWidth,"px"))}}};a("67cf");ie.render=ae,ie.__scopeId="data-v-7d15cb66";var se=ie;Object(i["v"])("data-v-2a0d183a");var ne={class:"bgContainer"},ce=Object(i["f"])('<div class="form" data-v-2a0d183a><div class="inner" data-v-2a0d183a><h2 class="title hidden" data-v-2a0d183a>Newsletter</h2><p class="p hidden" data-v-2a0d183a>Subscribe to our newsletter and get a 10% discount!</p><form data-v-2a0d183a><input type="text" class="hidden" placeholder="Email address" data-v-2a0d183a></form><div class="cta hidden" data-v-2a0d183a><p class="ctaTxt" data-v-2a0d183a>Subscribe</p></div></div></div>',1),re=[ce],oe=Object(i["e"])("div",{class:"imgDiv"},[Object(i["e"])("img",{class:"img",src:"/assets/img/keuken.jpg",alt:""})],-1);function de(e,t,a,s,n,c){return Object(i["s"])(),Object(i["d"])("div",ne,[Object(i["e"])("div",{class:"bg",style:Object(i["o"])({"--remaining":e.remainingSpace})},re,4),oe])}Object(i["t"])();var le={name:"newsletter",data:function(){return{remainingSpace:"0px"}},mounted:function(){this.calcRemainingSpace()},methods:{calcRemainingSpace:function(){var e=this;window.innerWidth>=1300&&(this.remainingSpace=(window.innerWidth-1300-.01*window.innerWidth)/2+"px"),window.addEventListener("resize",(function(){e.remainingSpace=(window.innerWidth-1300-.01*window.innerWidth)/2+"px"}))}}};a("4459");le.render=de,le.__scopeId="data-v-2a0d183a";var ue=le;Object(i["v"])("data-v-187cc5de");var ve={class:"container"},fe=Object(i["e"])("p",{class:"logo fino"},"Hiqu",-1),me={class:"links bilo p"},pe=Object(i["f"])('<div class="col" data-v-187cc5de><p class="link" data-v-187cc5de>Home</p><p class="link" data-v-187cc5de>Products</p><p class="link" data-v-187cc5de>About us</p></div><div class="col" data-v-187cc5de><p class="link" data-v-187cc5de>Instagram</p><p class="link" data-v-187cc5de>Facebook</p><p class="link" data-v-187cc5de>Twitter</p></div>',2),be={class:"developer"},he=Object(i["e"])("p",null,"Developed by",-1),ge=["href"];function je(e,t,a,s,n,c){return Object(i["s"])(),Object(i["d"])("footer",{style:Object(i["o"])(c.cssProps)},[Object(i["e"])("div",ve,[fe,Object(i["e"])("div",me,[pe,Object(i["e"])("div",be,[he,Object(i["e"])("a",{class:"link stonks",href:"https://stonks.agency/",target:"_blank"},"Stonks Agency",8,ge)])])])],4)}Object(i["t"])();var Oe={name:"Footer",props:["bgColor"],computed:{cssProps:function(){return{"--bg":this.bgColor}}}};a("1acc");Oe.render=je,Oe.__scopeId="data-v-187cc5de";var ye=Oe,we={name:"Home",components:{landingPage:X,fullscreenImg:Y,popularProducts:se,newsletter:ue,Footer:ye}};we.render=q;var ke=we;Object(i["v"])("data-v-e5271f32");var xe=Object(i["f"])('<div class="bg" data-v-e5271f32><div class="container" data-v-e5271f32><div class="images" data-v-e5271f32><div class="img1 parallax" data-rate=".05" data-v-e5271f32><img src="/assets/img/about/diningRoom.jpg" alt="" class="img" data-v-e5271f32></div><div class="img2 parallax" data-rate="-.05" data-v-e5271f32><img src="/assets/img/about/kitchen.jpg" alt="" class="img" data-v-e5271f32></div></div><div class="txt" data-v-e5271f32><h1 class="title fino" data-v-e5271f32>About us</h1><p class="bilo p" data-v-e5271f32> Hiqu is a high-end interior reseller since 1998. derived under the mindset that your home reflects who you are, it should be beautiful but practical at the same time. We have a full range of products and design services to make it exactly the way you want and make you really feel at home. </p><div class="cta fino" data-v-e5271f32><p class="ctaTxt" data-v-e5271f32>products</p></div></div></div></div>',1);function Ie(e,t,a,s,n,c){var r=Object(i["y"])("Footer");return Object(i["s"])(),Object(i["d"])(i["a"],null,[xe,Object(i["h"])(r,{"bg-color":"var(--background-light)"})],64)}Object(i["t"])();var Pe={name:"About",components:{Footer:ye}};a("3f71");Pe.render=Ie,Pe.__scopeId="data-v-e5271f32";var Ae=Pe;Object(i["v"])("data-v-187d2539");var Se=Object(i["e"])("div",{class:"bg"},[Object(i["e"])("div",{class:"container"},[Object(i["e"])("div",{class:"imgDiv"},[Object(i["e"])("div",{style:{width:"100%",height:"0","padding-bottom":"75%",position:"relative"}},[Object(i["e"])("iframe",{src:"https://giphy.com/embed/Ju7l5y9osyymQ",width:"100%",height:"100%",style:{position:"absolute"},frameBorder:"0",allowFullScreen:""})])]),Object(i["e"])("div",{class:"txt"},[Object(i["e"])("h1",{class:"fino title"},"products"),Object(i["e"])("p",{class:"bilo p"}," Uhhh I'm sorry we don't really sell interior. But I do sell websites! I'm a freelance web developer and this was one of my side projects. So if you need a website or just want to see my work, visit my portfolio. "),Object(i["e"])("div",{class:"cta fino"},[Object(i["e"])("p",{class:"ctaTxt"},"portfolio")])])])],-1);function _e(e,t,a,s,n,c){var r=Object(i["y"])("Footer");return Object(i["s"])(),Object(i["d"])(i["a"],null,[Se,Object(i["h"])(r,{"bg-color":"var(--background-light)"})],64)}Object(i["t"])();var Me={name:"About",components:{Footer:ye}};a("1a7e");Me.render=_e,Me.__scopeId="data-v-187d2539";var Le=Me,qe=Object(L["a"])({history:Object(L["b"])(),routes:[{path:"/",name:"Home",component:ke},{path:"/about",name:"About",component:Ae},{path:"/products",name:"Products",component:Le}]}),$e=qe,Ce=a("5502"),Be=Object(Ce["a"])({state:{isMenuActive:!1,isBurgerActive:!1},mutations:{},getters:{getMenuState:function(e){return e.isMenuActive}}});Object(i["c"])(M).use($e).use(Be).mount("#app")},5950:function(e,t,a){},"67cf":function(e,t,a){"use strict";a("56bb")},"8fcd":function(e,t,a){},a2ab:function(e,t,a){},c800:function(e,t,a){"use strict";a("a2ab")},e4fa:function(e,t,a){},e5f9:function(e,t,a){},f37e:function(e,t,a){},f5e0:function(e,t,a){"use strict";a("f37e")},f6c6:function(e,t,a){"use strict";a("5950")}});
//# sourceMappingURL=app.e43894f2.js.map