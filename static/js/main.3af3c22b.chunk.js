(this["webpackJsonpfifteen-puzzle"]=this["webpackJsonpfifteen-puzzle"]||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a,i,l=n(0),u=n.n(l),o=n(3),r=n.n(o),m=(n(15),n(16),n(4)),c=n(1),s=n(5),d=n(6),f=n(8),h=n(7),b=n(9);i=[];for(var v=[{id:0,num:1,animate:null},{id:1,num:2,animate:null},{id:2,num:3,animate:null},{id:3,num:4,animate:null},{id:4,num:5,animate:null},{id:5,num:6,animate:null},{id:6,num:7,animate:null},{id:7,num:8,animate:null},{id:8,num:9,animate:null},{id:9,num:10,animate:null},{id:10,num:11,animate:null},{id:11,num:12,animate:null},{id:12,num:13,animate:null},{id:13,num:14,animate:null},{id:14,num:15,animate:null},{id:15,num:16,animate:null}],p=function e(){if(a=Math.floor(16*Math.random()+1),void 0!==i.find((function(e){return e===a})))return e();i.push(a)},g=0;g<16;g++)p();v.forEach((function(e,t){16===i[t]&&(i[t]=null),e.num=i[t]}));var E=function(e){var t,n=e.num,a=e.id,i=e.click,l=e.animate;return t=null===n?"item-".concat(n," ").concat(l):"item item-".concat(n," ").concat(l),u.a.createElement("div",{className:"Tile",onClick:function(){return i(a)}},u.a.createElement("div",{className:t},u.a.createElement("div",{className:"Tile_num"},n)))},O=function(e){var t=e.table,n=e.click,a=e.start,i=["TileContainer"];return a&&(i.push("zoomInCenter"),console.log(a)),i=i.join(" "),u.a.createElement("div",{className:i},u.a.createElement("div",{className:"TileContainer_box"},t.map((function(e){return u.a.createElement(E,{key:e.id,click:n,id:e.id,num:e.num,animate:e.animate})}))))},w=function(e){var t=e.doesShow,n=e.click,a=e.gameInit,i=["Welcome_instructions"];return!0===t?i.push("slideIn"):!1===t&&i.push("slideOut"),i=i.join(" "),console.log(i),u.a.createElement("div",{className:"Welcome"},u.a.createElement("div",{className:"Welcome_title"},u.a.createElement("div",{className:"btn btn-white",onClick:function(){return a()}},u.a.createElement("h1",null,"Start")),u.a.createElement("div",{className:"btn btn-white",onClick:function(){return n()}},u.a.createElement("h1",null,"Instructions"))),u.a.createElement("div",{className:i},u.a.createElement("p",null,"Game rules are very simple. You must order all numbers in sequence. So the final result must be 1-15, starting from top left corner.")))},j=function(e){var t=e.gameReset,n=["GameInit"];return e.start&&n.push("slideFromTop"),n=n.join(" "),console.log("This is GamInit style ".concat(n)),u.a.createElement("div",{className:n},u.a.createElement("div",{className:"GameInit_btn",onClick:function(){return t()}},"Start again"))};function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(n,!0).forEach((function(t){Object(m.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(f.a)(this,Object(h.a)(t).call(this))).gameReset=function(){var t,n;n=[];for(var a=[{id:0,num:1,animate:null},{id:1,num:2,animate:null},{id:2,num:3,animate:null},{id:3,num:4,animate:null},{id:4,num:5,animate:null},{id:5,num:6,animate:null},{id:6,num:7,animate:null},{id:7,num:8,animate:null},{id:8,num:9,animate:null},{id:9,num:10,animate:null},{id:10,num:11,animate:null},{id:11,num:12,animate:null},{id:12,num:13,animate:null},{id:13,num:14,animate:null},{id:14,num:15,animate:null},{id:15,num:16,animate:null}],i=function e(){if(t=Math.floor(16*Math.random()+1),void 0!==n.find((function(e){return e===t})))return e();n.push(t)},l=0;l<16;l++)i();a.forEach((function(e,t){16===n[t]&&(n[t]=null),e.num=n[t]})),e.setState({table:a})},e.setToNull=function(){var t=Object(c.a)(e.state.table);t.forEach((function(e){e.animate=null})),e.setState({table:t})},e.changeNum=function(t){var n=e.state.table.findIndex((function(e){return e.id===t})),a=Object(c.a)(e.state.table),i=e.state.table.findIndex((function(e){return null===e.num}));i-n!==1&&i-n!==4&&n-i!==1&&n-i!==4||(e.setToNull(),a[i].num=a[n].num,i-n===1&&(a[i].animate="slideToLeft"),i-n===4&&(a[i].animate="slideToBottom"),n-i===1&&(a[i].animate="slideToRight"),n-i===4&&(a[i].animate="slideToTop"),e.setState({table:a}),a[n].num=null)},e.toggleInstruction=function(){var t=y({},e.state.Welcome);t.intructionShow=!e.state.Welcome.intructionShow,e.setState({Welcome:t})},e.gameInit=function(){var t=y({},e.state.Welcome);t.start=!0,console.log(t),e.setState({Welcome:t})},e.state={Welcome:{intructionShow:null,start:!1},table:v},e}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return u.a.createElement("div",{className:"App"},u.a.createElement(j,{gameReset:this.gameReset,start:this.state.Welcome.start}),!1===this.state.Welcome.start?u.a.createElement(w,{gameInit:this.gameInit,doesShow:this.state.Welcome.intructionShow,click:this.toggleInstruction}):null,u.a.createElement(O,{table:this.state.table,click:this.changeNum,start:this.state.Welcome.start}))}}]),t}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(u.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.3af3c22b.chunk.js.map