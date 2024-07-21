!function(){"use strict";var e=tinymce.util.Tools.resolve("tinymce.PluginManager");const t=e=>t=>(e=>{const t=typeof e;return null===e?"null":"object"===t&&Array.isArray(e)?"array":"object"===t&&(n=r=e,o=(l=String).prototype,o.isPrototypeOf(n)||(null===(i=r.constructor)||void 0===i?void 0:i.name)===l.name)?"string":t;var n,o;var r,l,i})(t)===e,n=e=>t=>typeof t===e,o=t("string"),r=t("object"),l=t("array"),i=(a=null,e=>a===e);var a;const s=n("boolean"),c=e=>!(e=>null==e)(e),u=n("function"),g=(e,t)=>{if(l(e)){for(let n=0,o=e.length;n<o;++n)if(!t(e[n]))return!1;return!0}return!1},d=()=>{},m=(e,t)=>e===t;class h{constructor(e,t){this.tag=e,this.value=t}static some(e){return new h(!0,e)}static none(){return h.singletonNone}fold(e,t){return this.tag?t(this.value):e()}isSome(){return this.tag}isNone(){return!this.tag}map(e){return this.tag?h.some(e(this.value)):h.none()}bind(e){return this.tag?e(this.value):h.none()}exists(e){return this.tag&&e(this.value)}forall(e){return!this.tag||e(this.value)}filter(e){return!this.tag||e(this.value)?this:h.none()}getOr(e){return this.tag?this.value:e}or(e){return this.tag?this:e}getOrThunk(e){return this.tag?this.value:e()}orThunk(e){return this.tag?this:e()}getOrDie(e){if(this.tag)return this.value;throw new Error(null!=e?e:"Called getOrDie on None")}static from(e){return c(e)?h.some(e):h.none()}getOrNull(){return this.tag?this.value:null}getOrUndefined(){return this.value}each(e){this.tag&&e(this.value)}toArray(){return this.tag?[this.value]:[]}toString(){return this.tag?`some(${this.value})`:"none()"}}h.singletonNone=new h(!1);const f=Array.prototype.indexOf,p=Array.prototype.push,k=(e,t)=>((e,t)=>f.call(e,t))(e,t)>-1,v=e=>{const t=[];for(let n=0,o=e.length;n<o;++n){if(!l(e[n]))throw new Error("Arr.flatten item "+n+" was not an array, input: "+e);p.apply(t,e[n])}return t},x=(e,t)=>v(((e,t)=>{const n=e.length,o=new Array(n);for(let r=0;r<n;r++){const n=e[r];o[r]=t(n,r)}return o})(e,t)),y=(e,t)=>{for(let n=0;n<e.length;n++){const o=t(e[n],n);if(o.isSome())return o}return h.none()},b=(e,t,n=m)=>e.exists((e=>n(e,t))),_=e=>{const t=[],n=e=>{t.push(e)};for(let t=0;t<e.length;t++)e[t].each(n);return t},w=(e,t)=>e?h.some(t):h.none(),C=e=>t=>t.options.get(e),O=C("link_assume_external_targets"),N=C("link_context_toolbar"),A=C("link_list"),S=C("link_default_target"),E=C("link_default_protocol"),T=C("link_target_list"),R=C("link_rel_list"),P=C("link_class_list"),L=C("link_title"),M=C("allow_unsafe_link_target"),D=C("link_quicklink");var U=tinymce.util.Tools.resolve("tinymce.util.Tools");const B=e=>o(e.value)?e.value:"",I=(e,t)=>{const n=[];return U.each(e,(e=>{const r=(e=>o(e.text)?e.text:o(e.title)?e.title:"")(e);if(void 0!==e.menu){const o=I(e.menu,t);n.push({text:r,items:o})}else{const o=t(e);n.push({text:r,value:o})}})),n},j=(e=B)=>t=>h.from(t).map((t=>I(t,e))),K={sanitize:e=>j(B)(e),sanitizeWith:j,createUi:(e,t)=>n=>({name:e,type:"listbox",label:t,items:n}),getValue:B},z=Object.keys,q=Object.hasOwnProperty,V=(e,t,n,o)=>{((e,t)=>{const n=z(e);for(let o=0,r=n.length;o<r;o++){const r=n[o];t(e[r],r)}})(e,((e,r)=>{(t(e,r)?n:o)(e,r)}))},F=(e,t)=>q.call(e,t);var W=tinymce.util.Tools.resolve("tinymce.dom.TreeWalker"),$=tinymce.util.Tools.resolve("tinymce.util.URI");const G=e=>c(e)&&"a"===e.nodeName.toLowerCase(),H=e=>G(e)&&!!X(e),J=(e,t)=>{if(e.collapsed)return[];{const n=e.cloneContents(),o=n.firstChild,r=new W(o,n),l=[];let i=o;do{t(i)&&l.push(i)}while(i=r.next());return l}},Q=e=>/^\w+:/i.test(e),X=e=>{var t,n;return null!==(n=null!==(t=e.getAttribute("data-mce-href"))&&void 0!==t?t:e.getAttribute("href"))&&void 0!==n?n:""},Y=(e,t)=>{const n=["noopener"],o=e?e.split(/\s+/):[],r=e=>e.filter((e=>-1===U.inArray(n,e))),l=t?(e=>(e=r(e)).length>0?e.concat(n):n)(o):r(o);return l.length>0?(e=>U.trim(e.sort().join(" ")))(l):""},Z=(e,t)=>(t=t||ne(e.selection.getRng())[0]||e.selection.getNode(),ie(t)?h.from(e.dom.select("a[href]",t)[0]):h.from(e.dom.getParent(t,"a[href]"))),ee=(e,t)=>Z(e,t).isSome(),te=(e,t)=>(e=>e.replace(/\uFEFF/g,""))(t.fold((()=>e.getContent({format:"text"})),(e=>e.innerText||e.textContent||""))),ne=e=>J(e,H),oe=e=>U.grep(e,H),re=e=>oe(e).length>0,le=e=>{const t=e.schema.getTextInlineElements(),n=e=>1===e.nodeType&&!G(e)&&!F(t,e.nodeName.toLowerCase());if(Z(e).exists((e=>e.hasAttribute("data-mce-block"))))return!1;const o=e.selection.getRng();if(o.collapsed)return!0;return 0===J(o,n).length},ie=e=>c(e)&&"FIGURE"===e.nodeName&&/\bimage\b/i.test(e.className),ae=(e,t)=>{const n={...t};if(0===R(e).length&&!M(e)){const e=Y(n.rel,"_blank"===n.target);n.rel=e||null}return h.from(n.target).isNone()&&!1===T(e)&&(n.target=S(e)),n.href=((e,t)=>"http"!==t&&"https"!==t||Q(e)?e:t+"://"+e)(n.href,O(e)),n},se=(e,t,n)=>{const o=e.selection.getNode(),r=Z(e,o),l=ae(e,(e=>{return t=["title","rel","class","target"],n=(t,n)=>(e[n].each((e=>{t[n]=e.length>0?e:null})),t),o={href:e.href},((e,t)=>{for(let n=0,o=e.length;n<o;n++)t(e[n],n)})(t,((e,t)=>{o=n(o,e,t)})),o;var t,n,o})(n));e.undoManager.transact((()=>{n.href===t.href&&t.attach(),r.fold((()=>{((e,t,n,o)=>{const r=e.dom;ie(t)?me(r,t,o):n.fold((()=>{e.execCommand("mceInsertLink",!1,o)}),(t=>{e.insertContent(r.createHTML("a",o,r.encode(t)))}))})(e,o,n.text,l)}),(t=>{e.focus(),((e,t,n,o)=>{n.each((e=>{F(t,"innerText")?t.innerText=e:t.textContent=e})),e.dom.setAttribs(t,o),e.selection.select(t)})(e,t,n.text,l)}))}))},ce=e=>{const{class:t,href:n,rel:o,target:r,text:l,title:a}=e;return((e,t)=>{const n={};var o;return V(e,t,(o=n,(e,t)=>{o[t]=e}),d),n})({class:t.getOrNull(),href:n,rel:o.getOrNull(),target:r.getOrNull(),text:l.getOrNull(),title:a.getOrNull()},((e,t)=>!1===i(e)))},ue=(e,t,n)=>{const o=((e,t)=>{const n=e.options.get,o={allow_html_data_urls:n("allow_html_data_urls"),allow_script_urls:n("allow_script_urls"),allow_svg_data_urls:n("allow_svg_data_urls")},r=t.href;return{...t,href:$.isDomSafe(r,"a",o)?r:""}})(e,n);e.hasPlugin("rtc",!0)?e.execCommand("createlink",!1,ce(o)):se(e,t,o)},ge=e=>{e.hasPlugin("rtc",!0)?e.execCommand("unlink"):(e=>{e.undoManager.transact((()=>{const t=e.selection.getNode();ie(t)?de(e,t):(e=>{const t=e.dom,n=e.selection,o=n.getBookmark(),r=n.getRng().cloneRange(),l=t.getParent(r.startContainer,"a[href]",e.getBody()),i=t.getParent(r.endContainer,"a[href]",e.getBody());l&&r.setStartBefore(l),i&&r.setEndAfter(i),n.setRng(r),e.execCommand("unlink"),n.moveToBookmark(o)})(e),e.focus()}))})(e)},de=(e,t)=>{var n;const o=e.dom.select("img",t)[0];if(o){const r=e.dom.getParents(o,"a[href]",t)[0];r&&(null===(n=r.parentNode)||void 0===n||n.insertBefore(o,r),e.dom.remove(r))}},me=(e,t,n)=>{var o;const r=e.select("img",t)[0];if(r){const t=e.create("a",n);null===(o=r.parentNode)||void 0===o||o.insertBefore(t,r),t.appendChild(r)}},he=e=>{return F(t=e,n="items")&&void 0!==t[n]&&null!==t[n];var t,n},fe=(e,t)=>y(t,(t=>he(t)?fe(e,t.items):w(t.value===e,t))),pe=(e,t,n,o)=>{const r=o[t],l=e.length>0;return void 0!==r?fe(r,n).map((t=>({url:{value:t.value,meta:{text:l?e:t.text,attach:d}},text:l?e:t.text}))):h.none()},ke=(e,t)=>{const n={text:e.text,title:e.title},o=e=>{const t=(o=e.url,w(n.text.length<=0,h.from(null===(r=o.meta)||void 0===r?void 0:r.text).getOr(o.value)));var o,r;const l=(e=>{var t;return w(n.title.length<=0,h.from(null===(t=e.meta)||void 0===t?void 0:t.title).getOr(""))})(e.url);return t.isSome()||l.isSome()?h.some({...t.map((e=>({text:e}))).getOr({}),...l.map((e=>({title:e}))).getOr({})}):h.none()},r=(e,o)=>{const r=(l=t,i=o,"link"===i?l.link:"anchor"===i?l.anchor:h.none()).getOr([]);var l,i;return pe(n.text,o,r,e)};return{onChange:(e,t)=>{const l=t.name;return"url"===l?o(e()):k(["anchor","link"],l)?r(e(),l):"text"===l||"title"===l?(n[l]=e()[l],h.none()):h.none()}}};var ve=tinymce.util.Tools.resolve("tinymce.util.Delay");const xe=e=>{const t=e.href;return t.indexOf("@")>0&&-1===t.indexOf("/")&&-1===t.indexOf("mailto:")?h.some({message:"The URL you entered seems to be an email address. Do you want to add the required mailto: prefix?",preprocess:e=>({...e,href:"mailto:"+t})}):h.none()},ye=(e,t)=>n=>{const o=n.href;return 1===e&&!Q(o)||0===e&&/^\s*www(\.|\d\.)/i.test(o)?h.some({message:`The URL you entered seems to be an external link. Do you want to add the required ${t}:// prefix?`,preprocess:e=>({...e,href:t+"://"+o})}):h.none()},be=(e,t)=>y([xe,ye(O(e),E(e))],(e=>e(t))).fold((()=>Promise.resolve(t)),(n=>new Promise((o=>{((e,t,n)=>{const o=e.selection.getRng();ve.setEditorTimeout(e,(()=>{e.windowManager.confirm(t,(t=>{e.selection.setRng(o),n(t)}))}))})(e,n.message,(e=>{o(e?n.preprocess(t):t)}))})))),_e=e=>{const t=e.dom.select("a:not([href])"),n=x(t,(e=>{const t=e.name||e.id;return t?[{text:t,value:"#"+t}]:[]}));return n.length>0?h.some([{text:"None",value:""}].concat(n)):h.none()},we=e=>{const t=P(e);return t.length>0?K.sanitize(t):h.none()},Ce=e=>{try{return h.some(JSON.parse(e))}catch(e){return h.none()}},Oe=e=>{const t=t=>e.convertURL(t.value||t.url||"","href"),n=A(e);return new Promise((e=>{o(n)?fetch(n).then((e=>e.ok?e.text().then(Ce):Promise.reject())).then(e,(()=>e(h.none()))):u(n)?n((t=>e(h.some(t)))):e(h.from(n))})).then((e=>e.bind(K.sanitizeWith(t)).map((e=>{if(e.length>0){return[{text:"None",value:""}].concat(e)}return e}))))},Ne=(e,t)=>{const n=R(e);if(n.length>0){const o=b(t,"_blank"),r=e=>Y(K.getValue(e),o);return(!1===M(e)?K.sanitizeWith(r):K.sanitize)(n)}return h.none()},Ae=[{text:"Current window",value:""},{text:"New window",value:"_blank"}],Se=e=>{const t=T(e);return l(t)?K.sanitize(t).orThunk((()=>h.some(Ae))):!1===t?h.none():h.some(Ae)},Ee=(e,t,n)=>{const o=e.getAttrib(t,n);return null!==o&&o.length>0?h.some(o):h.none()},Te=(e,t)=>Oe(e).then((n=>{const o=((e,t)=>{const n=e.dom,o=le(e)?h.some(te(e.selection,t)):h.none(),r=t.bind((e=>h.from(n.getAttrib(e,"href")))),l=t.bind((e=>h.from(n.getAttrib(e,"target")))),i=t.bind((e=>Ee(n,e,"rel"))),a=t.bind((e=>Ee(n,e,"class")));return{url:r,text:o,title:t.bind((e=>Ee(n,e,"title"))),target:l,rel:i,linkClass:a}})(e,t);return{anchor:o,catalogs:{targets:Se(e),rels:Ne(e,o.target),classes:we(e),anchor:_e(e),link:n},optNode:t,flags:{titleEnabled:L(e)}}})),Re=e=>{const t=(e=>{const t=Z(e);return Te(e,t)})(e);t.then((t=>{const n=((e,t)=>n=>{const o=n.getData();if(!o.url.value)return ge(e),void n.close();const r=e=>h.from(o[e]).filter((n=>!b(t.anchor[e],n))),l={href:o.url.value,text:r("text"),target:r("target"),rel:r("rel"),class:r("linkClass"),title:r("title")},i={href:o.url.value,attach:void 0!==o.url.meta&&o.url.meta.attach?o.url.meta.attach:d};be(e,l).then((t=>{ue(e,i,t)})),n.close()})(e,t);return((e,t,n)=>{const o=e.anchor.text.map((()=>({name:"text",type:"input",label:"Text to display"}))).toArray(),r=e.flags.titleEnabled?[{name:"title",type:"input",label:"Title"}]:[],l=((e,t)=>{const n=e.anchor,o=n.url.getOr("");return{url:{value:o,meta:{original:{value:o}}},text:n.text.getOr(""),title:n.title.getOr(""),anchor:o,link:o,rel:n.rel.getOr(""),target:n.target.or(t).getOr(""),linkClass:n.linkClass.getOr("")}})(e,h.from(S(n))),i=e.catalogs,a=ke(l,i);return{title:"Insert/Edit Link",size:"normal",body:{type:"panel",items:v([[{name:"url",type:"urlinput",filetype:"file",label:"URL",picker_text:"Browse links"}],o,r,_([i.anchor.map(K.createUi("anchor","Anchors")),i.rels.map(K.createUi("rel","Rel")),i.targets.map(K.createUi("target","Open link in...")),i.link.map(K.createUi("link","Link list")),i.classes.map(K.createUi("linkClass","Class"))])])},buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],initialData:l,onChange:(e,{name:t})=>{a.onChange(e.getData,{name:t}).each((t=>{e.setData(t)}))},onSubmit:t}})(t,n,e)})).then((t=>{e.windowManager.open(t)}))};var Pe=tinymce.util.Tools.resolve("tinymce.util.VK");const Le=e=>{const t=document.createElement("a");t.target="_blank",t.href=e,t.rel="noreferrer noopener";const n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),((e,t)=>{document.body.appendChild(e),e.dispatchEvent(t),document.body.removeChild(e)})(t,n)},Me=(e,t)=>e.dom.getParent(t,"a[href]"),De=e=>Me(e,e.selection.getStart()),Ue=(e,t)=>{if(t){const n=X(t);if(/^#/.test(n)){const t=e.dom.select(n);t.length&&e.selection.scrollIntoView(t[0],!0)}else Le(t.href)}},Be=e=>()=>{e.execCommand("mceLink",!1,{dialog:!0})},Ie=e=>()=>{Ue(e,De(e))},je=(e,t)=>(e.on("NodeChange",t),()=>e.off("NodeChange",t)),Ke=e=>t=>{const n=()=>{t.setActive(!e.mode.isReadOnly()&&ee(e,e.selection.getNode())),t.setEnabled(e.selection.isEditable())};return n(),je(e,n)},ze=e=>t=>{const n=()=>{t.setEnabled(e.selection.isEditable())};return n(),je(e,n)},qe=e=>t=>{const n=()=>t.setEnabled((e=>1===(e.selection.isCollapsed()?oe(e.dom.getParents(e.selection.getStart())):ne(e.selection.getRng())).length)(e));return n(),je(e,n)},Ve=e=>t=>{const n=t=>{return re(t)||(n=e.selection.getRng(),ne(n).length>0);var n},o=e.dom.getParents(e.selection.getStart()),r=o=>{t.setEnabled(n(o)&&e.selection.isEditable())};return r(o),je(e,(e=>r(e.parents)))},Fe=e=>{const t=t=>{const n=e.selection.getNode();return t.setEnabled(ee(e,n)),d};e.ui.registry.addContextForm("quicklink",{launch:{type:"contextformtogglebutton",icon:"link",tooltip:"Link",onSetup:Ke(e)},label:"Link",predicate:t=>N(e)&&ee(e,t),initValue:()=>{return Z(e).fold((t="",()=>t),X);var t},commands:[{type:"contextformtogglebutton",icon:"link",tooltip:"Link",primary:!0,onSetup:t=>{const n=e.selection.getNode();return t.setActive(ee(e,n)),Ke(e)(t)},onAction:t=>{const n=t.getValue(),o=(t=>{const n=Z(e),o=le(e);if(n.isNone()&&o){const o=te(e.selection,n);return w(0===o.length,t)}return h.none()})(n);ue(e,{href:n,attach:d},{href:n,text:o,title:h.none(),rel:h.none(),target:h.none(),class:h.none()}),(e=>{e.selection.collapse(!1)})(e),t.hide()}},{type:"contextformbutton",icon:"unlink",tooltip:"Remove link",onSetup:t,onAction:t=>{ge(e),t.hide()}},{type:"contextformbutton",icon:"new-tab",tooltip:"Open link",onSetup:t,onAction:t=>{Ie(e)(),t.hide()}}]})};e.add("link",(e=>{(e=>{const t=e.options.register;t("link_assume_external_targets",{processor:e=>{const t=o(e)||s(e);return t?!0===e?{value:1,valid:t}:"http"===e||"https"===e?{value:e,valid:t}:{value:0,valid:t}:{valid:!1,message:"Must be a string or a boolean."}},default:!1}),t("link_context_toolbar",{processor:"boolean",default:!1}),t("link_list",{processor:e=>o(e)||u(e)||g(e,r)}),t("link_default_target",{processor:"string"}),t("link_default_protocol",{processor:"string",default:"https"}),t("link_target_list",{processor:e=>s(e)||g(e,r),default:!0}),t("link_rel_list",{processor:"object[]",default:[]}),t("link_class_list",{processor:"object[]",default:[]}),t("link_title",{processor:"boolean",default:!0}),t("allow_unsafe_link_target",{processor:"boolean",default:!1}),t("link_quicklink",{processor:"boolean",default:!1})})(e),(e=>{e.ui.registry.addToggleButton("link",{icon:"link",tooltip:"Insert/edit link",onAction:Be(e),onSetup:Ke(e)}),e.ui.registry.addButton("openlink",{icon:"new-tab",tooltip:"Open link",onAction:Ie(e),onSetup:qe(e)}),e.ui.registry.addButton("unlink",{icon:"unlink",tooltip:"Remove link",onAction:()=>ge(e),onSetup:Ve(e)})})(e),(e=>{e.ui.registry.addMenuItem("openlink",{text:"Open link",icon:"new-tab",onAction:Ie(e),onSetup:qe(e)}),e.ui.registry.addMenuItem("link",{icon:"link",text:"Link...",shortcut:"Meta+K",onSetup:ze(e),onAction:Be(e)}),e.ui.registry.addMenuItem("unlink",{icon:"unlink",text:"Remove link",onAction:()=>ge(e),onSetup:Ve(e)})})(e),(e=>{e.ui.registry.addContextMenu("link",{update:t=>e.dom.isEditable(t)?re(e.dom.getParents(t,"a"))?"link unlink openlink":"link":""})})(e),Fe(e),(e=>{e.on("click",(t=>{const n=Me(e,t.target);n&&Pe.metaKeyPressed(t)&&(t.preventDefault(),Ue(e,n))})),e.on("keydown",(t=>{if(!t.isDefaultPrevented()&&13===t.keyCode&&(e=>!0===e.altKey&&!1===e.shiftKey&&!1===e.ctrlKey&&!1===e.metaKey)(t)){const n=De(e);n&&(t.preventDefault(),Ue(e,n))}}))})(e),(e=>{e.addCommand("mceLink",((t,n)=>{!0!==(null==n?void 0:n.dialog)&&D(e)?e.dispatch("contexttoolbar-show",{toolbarKey:"quicklink"}):Re(e)}))})(e),(e=>{e.addShortcut("Meta+K","",(()=>{e.execCommand("mceLink")}))})(e)}))}();