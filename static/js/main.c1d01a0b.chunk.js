(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,a){e.exports=a(82)},40:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),n=a(32),o=a.n(n),c=(a(40),a(13)),s=a(14),l=a(16),g=a(15),p=a(17),m=a(84),d=a(86),h=a(85),u=a(34),f=a(11),y=a.n(f),_=[{id:1,name:"Receiver",price:1337,base_part:!0,category:"Receiver",attachments:{Tripod:{connector:"i-1",positions:{top:30.3,left:1}},Grip:{connector:"i-1",positions:{top:30,left:40},offset:{x:"top",y:"left"}},Suppressor:{connector:"i-1",positions:{top:12,left:-17}},Stock:{connector:"i-1",positions:{top:15,left:97.4}},Scope:{connector:"i-1",positions:{top:-28,left:51}},Laser:{connector:"i-1",positions:{top:-18,left:20}}},image:"/images/receiver.png",imageDetails:{width:3374,height:1170}},{id:23,name:"Receiver2",price:1337,base_part:!0,category:"Receiver",attachments:{Grip:{connector:"i-1",positions:{top:32,left:26},offset:{x:"top",y:"left"}},Suppressor:{connector:"i-1",positions:{top:10,left:-17}},Stock:{connector:"i-1",positions:{top:13.5,left:97}},Scope:{connector:"i-1",positions:{top:-25,left:69}},Laser:{connector:"i-1",positions:{top:-28,left:28}}},image:"/images/Gun 2 - Not Assembled.png",imageDetails:{width:3443.6,height:1025.5}},{id:2,name:"Angled_Foregrip_Black",price:10,base_part:!0,category:"Grip",attachments:null,image:"/images/grip/Angled_Foregrip_Black_Left.png",imageDetails:{width:323,height:419}},{id:3,name:"Angled_Foregrip_Tan",price:10,base_part:!1,category:"Grip",attachments:null,image:"/images/grip/Angled_Foregrip_Tan_Left.png",imageDetails:{width:314,height:408}},{id:4,name:"PTS_MVG_Tan",price:10,base_part:!1,category:"Grip",attachments:null,image:"/images/grip/PTS_MVG_Tan_Left.png",imageDetails:{width:229,height:441}},{id:5,name:"SI_grip_red",price:10,base_part:!1,category:"Grip",attachments:{Suppressor:{connector:"i-1",positions:[{top:4.7,left:-18}]}},image:"/images/grip/SI_grip_red_left.png",imageDetails:{width:713,height:258},partOffset:{x:-20,y:0}},{id:6,name:"Laser_Black",price:10,base_part:!1,category:"Laser",attachments:null,image:"/images/laser/Laser_Black_left copy.png",imageDetails:{width:512,height:363}},{id:7,name:"Laser_Tan",price:10,base_part:!1,category:"Laser",attachments:null,image:"/images/laser/Laser_Tan_Left.png",imageDetails:{width:512,height:363}},{id:8,name:"G&G_Scope",price:10,base_part:!1,category:"Scope",attachments:null,image:"/images/scope/G_G_Scope_Left.png",imageDetails:{width:1501,height:471.9}},{id:9,name:"Holosun",price:10,base_part:!1,category:"Scope",attachments:null,image:"/images/scope/Holosun_Left_copy.png",imageDetails:{width:512,height:363},partOffset:{x:80,y:24}},{id:10,name:"HS503CU",price:10,base_part:!1,category:"Scope",attachments:null,image:"/images/scope/HS503CU_copy.png",imageDetails:{width:512,height:363},partOffset:{x:80,y:24}},{id:11,name:"HS510",price:10,base_part:!1,category:"Scope",attachments:null,image:"/images/scope/HS510.png",imageDetails:{width:512,height:363},partOffset:{x:90,y:24}},{id:12,name:"MFT_Black",price:10,base_part:!1,category:"Stock",attachments:null,image:"/images/stock/MFT_Black_Left copy.png",imageDetails:{width:1348,height:762}},{id:13,name:"MFT_Tan",price:10,base_part:!1,category:"Stock",attachments:null,image:"/images/stock/MFT_Tan_Left.png",imageDetails:{width:1371,height:776}},{id:14,name:"PTS_EPS",price:10,base_part:!1,category:"Stock",attachments:null,image:"/images/stock/PTS_EPS.png",imageDetails:{width:1385,height:800},partOffset:{x:1,y:0}},{id:15,name:"PTS_EPS_Tan",price:10,base_part:!1,category:"Stock",attachments:null,image:"/images/stock/PTS_EPS_Tan_Left.png",imageDetails:{width:1383,height:808,offsetX:-5}},{id:16,name:"PTS",price:10,base_part:!1,category:"Suppressor",attachments:null,image:"/images/suppressor/PTS_Suppressor-smaller.png",imageDetails:{width:433,height:111,scale:2},partOffset:{x:4,y:8}},{id:17,name:"PTS_Tan",price:10,base_part:!1,category:"Suppressor",attachments:null,image:"/images/suppressor/PTS_Tan_Suppressor.png",imageDetails:{width:890,height:250}},{id:18,name:"TriPod",price:10,base_part:!1,category:"Tripod",attachments:null,image:"/images/tripod/TriPod_Left.png",imageDetails:{width:1047,height:335}}],S={},w=[];_.forEach(function(e){var t=e.category,a=e.attachments;t in S?S[t].children.push(e):S[t]={name:t,children:[e]},e.category=S[t],a&&e.base_part&&Object.keys(a).forEach(function(t){var i=a[t];t in S||(S[t]={name:t,children:[]}),i.elem=null,i.positioned=0,i.parent=e,i.category=S[t],w.push(i)})});var v=function(e,t){var a,i,r,n,o={x:.215,y:.215},c={x:-750,y:-500};switch(t<576?(i=320,r=150,n="extra-small"):t>=576&&t<=768?(i=576,r=250,n="small"):t>=768&&t<=992?(i=768,r=250,n="medium"):t>=992&&t<=1200?(i=992,r=250,n="large"):(i=1200,r=350,n="extra-large"),(a=new y.a.Stage({container:e,width:i,height:r})).setOffset({x:0,y:0}),n){case"extra-large":o={x:.215,y:.215},c={x:-750,y:-500};break;case"large":o={x:.18,y:.18},c={x:-700,y:-200};break;case"medium":o={x:.14,y:.14},c={x:-680,y:-450};break;case"small":o={x:.1,y:.1},c={x:-680,y:-500};break;case"extra-small":o={x:.056,y:.056},c={x:-730,y:-500};break;default:return}return a.scale({x:o.x,y:o.y}),a.offset({x:c.x,y:c.y}),a},P=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(g.a)(t).call(this,e))).onSelectProduct=function(e,t){var i=S[e].children.find(function(e){return e.id==t});if("Receiver"===e)a.customProduct=i;else{var r=w.filter(function(t){return t.category.name===e}),n=r.findIndex(function(e){return e.parent.id===a.customProduct.id});if(-1===n)return;(r=r[n]).elem=i}a.renderProduct()},a.renderProduct=function(){var e=a.customProduct.imageDetails,t=[e.width,e.height];e.scale&&(t[0]*=e.scale,t[1]*=e.scale),a._layer.destroyChildren(),a.drawImage(a.customProduct),a.drawParts(a.customProduct.attachments,t)},a.drawImage=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],arguments.length>3&&void 0!==arguments[3]?arguments[3]:null),r=new Image;r.onload=function(){var n,o,c=e.imageDetails.width,s=e.imageDetails.height,l=e.imageDetails.scale,g=e.partOffset;l&&(c*=l,s*=l),i&&(n=i[0]*(t.left/100),o=i[1]*(t.top/100),g&&(n+=c*(g.x/100),o+=s*(g.y/100)));var p=new y.a.Image({x:n,y:o,image:r,width:c,height:s,productCategory:e.category.name});a._layer.add(p),a._stage.add(a._layer),a._layer.draw(),p.on("click",function(e){var t=e.target.attrs.productCategory;a.showListProductByCategory(t)})},r.src=e.image},a.drawParts=function(e,t){for(var i in e){var r=e[i],n=r.elem,o=r.positions;n&&a.drawImage(n,o,r.offset,t)}},a.onSelectCategory=function(e,t){e.preventDefault(),a.showListProductByCategory(t)},a.showListProductByCategory=function(e){var t=a.state.products.filter(function(t){if(t.category.name===e)return t});a.setState({selectedProductCategory:e,filteredProducts:t})},a.state={selectedProduct:{},products:[],filteredProducts:[],categories:[],selectedProductCategory:"Grip"},a.canvasStage=r.a.createRef(),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.customProduct=S.Receiver.children[0];var e=[],t=window.innerWidth;for(var a in S)"Receiver"!==a&&e.push(a);this.setState({products:_,categories:e}),this._stage=v(this.canvasStage.current,t),this._layer=new y.a.Layer,this._stage.draw(),this.renderProduct()}},{key:"render",value:function(){var e=this,t=this.state,a=t.filteredProducts,i=t.categories;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"canvas-wrapper"},r.a.createElement("div",{id:"konvajs-container",ref:this.canvasStage})),r.a.createElement("ul",{style:{display:"flex",listStyle:"none",flexWrap:"wrap"}},i.map(function(t){return r.a.createElement("li",{key:t,style:{marginRight:"10px"}},r.a.createElement("button",{onClick:function(a){return e.onSelectCategory(a,t)}},t))})),r.a.createElement("ul",{style:{display:"flex",listStyle:"none"}},a.map(function(t){return r.a.createElement("li",{key:t.id,style:{display:"flex",flexDirection:"column"},onClick:function(){return e.onSelectProduct(t.category.name,t.id)}},r.a.createElement("img",{src:t.image,alt:t.name,style:{width:"100px",height:"150px"}}),t.name)})))}}]),t}(r.a.Component),b=[{id:1,name:"Receiver",price:1337,base_part:!0,category:"Receiver",attachments:{Tripod:{connector:"i-1",positions:{top:25.3,left:1}},Grip:{connector:"i-1",positions:{top:25,left:40},offset:{x:"top",y:"left"}},Suppressor:{connector:"i-1",positions:{top:4.7,left:-18}},Stock:{connector:"i-1",positions:{top:8,left:97.4}},Scope:{connector:"i-1",positions:{top:-25,left:0}},Laser:{connector:"i-1",positions:{top:-29,left:20.5}}},image:"/images/receiver.png",imageDetails:{width:3374,height:1170}},{id:23,name:"Receiver2",price:1337,base_part:!0,category:"Receiver",attachments:{Grip:{connector:"i-1",positions:{top:32,left:26},offset:{x:"top",y:"left"}},Suppressor:{connector:"i-1",positions:{top:10,left:-17}},Stock:{connector:"i-1",positions:{top:13.5,left:97}},Scope:{connector:"i-1",positions:{top:-25,left:69}},Laser:{connector:"i-1",positions:{top:-28,left:28}}},image:"/images/Gun 2 - Not Assembled.png",imageDetails:{width:3443.6,height:1025.5}},{id:2,name:"Angled_Foregrip_Black",price:10,base_part:!0,category:"Grip",attachments:null,image:"/images/grip/Angled_Foregrip_Black_Left.png",imageDetails:{width:323,height:419}},{id:3,name:"Angled_Foregrip_Tan",price:10,base_part:!1,category:"Grip",attachments:null,image:"/images/grip/Angled_Foregrip_Tan_Left.png",imageDetails:{width:314,height:408}},{id:4,name:"PTS_MVG_Tan",price:10,base_part:!1,category:"Grip",attachments:null,image:"/images/grip/PTS_MVG_Tan_Left.png",imageDetails:{width:229,height:441}},{id:5,name:"SI_grip_red",price:10,base_part:!1,category:"Grip",attachments:{Suppressor:{connector:"i-1",positions:[{top:4.7,left:-18}]}},image:"/images/grip/SI_grip_red_left.png",imageDetails:{width:713,height:258}},{id:6,name:"Laser_Black",price:10,base_part:!1,category:"Laser",attachments:null,image:"/images/laser/Laser_Black_left copy.png",imageDetails:{width:512,height:363}},{id:7,name:"Laser_Tan",price:10,base_part:!1,category:"Laser",attachments:null,image:"/images/laser/Laser_Tan_Left.png",imageDetails:{width:512,height:363}},{id:8,name:"G&G_Scope",price:10,base_part:!1,category:"Scope",attachments:null,image:"/images/scope/G_G_Scope_Left.png",imageDetails:{width:1501,height:471.9},partOffset:{x:-40,y:-18}},{id:9,name:"Holosun",price:10,base_part:!1,category:"Scope",attachments:null,image:"/images/scope/Holosun_Left_copy.png",imageDetails:{width:512,height:363}},{id:10,name:"HS503CU",price:10,base_part:!1,category:"Scope",attachments:null,image:"/images/scope/HS503CU_copy.png",imageDetails:{width:512,height:363}},{id:11,name:"HS510",price:10,base_part:!1,category:"Scope",attachments:null,image:"/images/scope/HS510.png",imageDetails:{width:512,height:363}},{id:12,name:"MFT_Black",price:10,base_part:!1,category:"Stock",attachments:null,image:"/images/stock/MFT_Black_Left copy.png",imageDetails:{width:1348,height:762,offsetX:-3}},{id:13,name:"MFT_Tan",price:10,base_part:!1,category:"Stock",attachments:null,image:"/images/stock/MFT_Tan_Left.png",imageDetails:{width:1371,height:776,offsetX:-5,offsetY:-13}},{id:14,name:"PTS_EPS",price:10,base_part:!1,category:"Stock",attachments:null,image:"/images/stock/PTS_EPS.png",imageDetails:{width:1385,height:800},partOffset:{x:1,y:0}},{id:15,name:"PTS_EPS_Tan",price:10,base_part:!1,category:"Stock",attachments:null,image:"/images/stock/PTS_EPS_Tan_Left.png",imageDetails:{width:1383,height:808,offsetX:-5}},{id:16,name:"PTS",price:10,base_part:!1,category:"Suppressor",attachments:null,image:"/images/suppressor/PTS_Suppressor-smaller.png",imageDetails:{width:433,height:111,scale:2},partOffset:{x:4,y:8}},{id:17,name:"PTS_Tan",price:10,base_part:!1,category:"Suppressor",attachments:null,image:"/images/suppressor/PTS_Tan_Suppressor.png",imageDetails:{width:890,height:250}},{id:18,name:"TriPod",price:10,base_part:!1,category:"Tripod",attachments:null,image:"/images/tripod/TriPod_Left.png",imageDetails:{width:1047,height:335}}],k={},T=[];b.forEach(function(e){var t=e.category,a=e.attachments;t in k?k[t].children.push(e):k[t]={name:t,children:[e]},e.category=k[t],a&&e.base_part&&Object.keys(a).forEach(function(t){var i=a[t];t in k||(k[t]={name:t,children:[]}),i.elem=null,i.positioned=0,i.parent=e,i.category=k[t],T.push(i)})});var x=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(g.a)(t).call(this,e))).onSelectProduct=function(e,t){var i=k[e].children.find(function(e){return e.id==t});if("Receiver"===e)a.customProduct=i;else{var r=T.filter(function(t){return t.category.name===e}),n=r.findIndex(function(e){return e.parent.id===a.customProduct.id});if(-1===n)return;(r=r[n]).elem=i}a.renderProduct()},a.renderProduct=function(){var e=a.customProduct.imageDetails,t=[e.width,e.height];e.scale&&(t[0]*=e.scale,t[1]*=e.scale),a._layer.destroyChildren(),a.drawImage(a.customProduct),a.drawParts(a.customProduct.attachments,t)},a.drawImage=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],arguments.length>3&&void 0!==arguments[3]?arguments[3]:null),r=new Image;r.onload=function(){var n,o,c=e.imageDetails.width,s=e.imageDetails.height,l=e.imageDetails.scale,g=e.partOffset;l&&(c*=l,s*=l),i&&(n=i[0]*(t.left/100),o=i[1]*(t.top/100),g&&(n+=c*(g.x/100),o+=s*(g.y/100)));var p=new y.a.Image({x:n,y:o,image:r,width:c,height:s,productCategory:e.category.name});a._layer.add(p),a._stage.add(a._layer),a._layer.draw(),p.on("click",function(e){var t=e.target.attrs.productCategory;a.showListProductByCategory(t)})},r.src=e.image},a.drawParts=function(e,t){for(var i in e){var r=e[i],n=r.elem,o=r.positions;n&&a.drawImage(n,o,r.offset,t)}},a.onSelectCategory=function(e,t){e.preventDefault(),a.showListProductByCategory(t)},a.showListProductByCategory=function(e){var t=a.state.products.filter(function(t){if(t.category.name===e)return t});a.setState({selectedProductCategory:e,filteredProducts:t})},a.state={selectedProduct:{},products:[],filteredProducts:[],categories:[],selectedProductCategory:"Grip"},a.canvasStage=r.a.createRef(),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.customProduct=k.Receiver.children[1];var e=[],t=window.innerWidth;for(var a in k)"Receiver"!==a&&e.push(a);this.setState({products:b,categories:e}),this._stage=v(this.canvasStage.current,t),this._layer=new y.a.Layer,this._stage.draw(),this.renderProduct()}},{key:"render",value:function(){var e=this,t=this.state,a=t.filteredProducts,i=t.categories;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"canvas-wrapper"},r.a.createElement("div",{id:"konvajs-container",ref:this.canvasStage})),r.a.createElement("ul",{style:{display:"flex",listStyle:"none",flexWrap:"wrap"}},i.map(function(t){return r.a.createElement("li",{key:t,style:{marginRight:"10px"}},r.a.createElement("button",{onClick:function(a){return e.onSelectCategory(a,t)}},t))})),r.a.createElement("ul",{style:{display:"flex",listStyle:"none"}},a.map(function(t){return r.a.createElement("li",{key:t.id,style:{display:"flex",flexDirection:"column"},onClick:function(){return e.onSelectProduct(t.category.name,t.id)}},r.a.createElement("img",{src:t.image,alt:t.name,style:{width:"100px",height:"150px"}}),t.name)})))}}]),t}(r.a.Component),D=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{to:"/1",className:"switchGun"},"Receiver 1"),r.a.createElement(d.a,{to:"/2",className:"switchGun"},"Receiver 2"),r.a.createElement(h.a,null,r.a.createElement(u.a,{exact:!0,path:"/1",component:P}),r.a.createElement(u.a,{exact:!0,path:"/2",component:x}))))}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,1,2]]]);
//# sourceMappingURL=main.c1d01a0b.chunk.js.map