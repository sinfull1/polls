(self.webpackChunkpollApplication=self.webpackChunkpollApplication||[]).push([[986],{5469:(e,t,r)=>{"use strict";r.r(t)},2400:(e,t,r)=>{"use strict";r.r(t)},9837:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(1375));r(5469);var l=n(r(42)),u=n(r(9537)),o=r(4494);t.default=function(){return a.default.createElement("div",{className:"App"},a.default.createElement(o.Provider,{store:u.default},a.default.createElement(l.default,null)))}},9986:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(1375)),l=n(r(9837));t.default=function(){return a.default.createElement(l.default,null)}},3624:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(9669)),l=n(r(9669)),u={post:{Authorization:"Bearer "+localStorage.getItem("user")},get:{Authorization:"Bearer "+localStorage.getItem("user")}};t.default=new function(){this.callAPI=function(e){var t={url:e.url,headers:u,data:e.data,method:e.method,timeout:3e3,responseType:"json",cancelToken:new l.default.CancelToken((function(e){}))};return a.default(t)},this.callLoginAPI=function(e){var t={url:e.url,headers:u,data:e.data,method:e.method,timeout:3e3};return a.default(t)}}},42:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return a(t,e),t},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=l(r(1375));r(2400);var i=r(4494),s=r(4494),c=u(r(5472));t.default=function(){var e=i.useSelector((function(e){return e.poll.polls})),t=s.useDispatch();return o.useEffect((function(){t({type:"ADD_POLLS",payload:{}})}),[]),o.default.createElement(o.default.Fragment,null,o.default.createElement("h2",{style:{textAlignLast:"center"}}," Polling Assistant"),o.default.createElement("div",{className:"d-flex flex-wrap justify-content-around"},e?e.map((function(e,t){return o.default.createElement("div",{className:"card"},o.default.createElement(c.default,{polls:e.polls,bids:e.bids,comments:e.comments}))})):null))}},5472:function(e,t,r){"use strict";var n=this&&this.__read||function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,a,l=r.call(e),u=[];try{for(;(void 0===t||t-- >0)&&!(n=l.next()).done;)u.push(n.value)}catch(e){a={error:e}}finally{try{n&&!n.done&&(r=l.return)&&r.call(l)}finally{if(a)throw a.error}}return u},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=a(r(1375)),u=r(5985),o=a(r(8149)),i=a(r(4158)),s=a(r(236)),c=a(r(3463)),d=a(r(400)),f=r(6889),p=a(r(1910)),h=r(8043),m=r(4494),_=u.makeStyles((function(e){return{root:{maxWidth:320,maxHeight:400},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:f.red[500]}}}));t.default=function(e){var t,r,a,u=_(),f=n(l.default.useState(!1),2),v=(f[0],f[1],n(l.default.useState(0),2)),y=(v[0],v[1],m.useDispatch()),b=function(t){var r=e.polls.key,n="YES"===t.target.outerText;y({type:"ADD_BIDS",payload:{pollkey:r,side:n}})};return l.default.createElement(o.default,{className:u.root},l.default.createElement(i.default,{title:e.polls.name,subheader:"September 14, 2016"}),l.default.createElement(s.default,{className:u.media,image:p.default,title:"Planets Poll"}),l.default.createElement(c.default,null,l.default.createElement(d.default,{variant:"body2",color:"textSecondary",component:"p"},e.polls.description),l.default.createElement(d.default,{variant:"body2",color:"textSecondary",component:"p"},e.bids?(r=(t=e.bids).filter((function(e){return e.side})),a=t.filter((function(e){return!e.side})),l.default.createElement(l.default.Fragment,null,l.default.createElement("p",null,"Yay: ",r.length," -- Nays: ",a.length))):null),l.default.createElement("div",{className:"card-button"},l.default.createElement(h.Button,{variant:"outlined",size:"small",color:"default",onClick:function(e){return b(e)}},"Yes"),l.default.createElement(h.Button,{variant:"outlined",size:"small",color:"default",onClick:function(e){return b(e)}},"No"))))}},9583:function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=r(7407),u=a(r(7437));t.default=function(e){return void 0===e&&(e={}),l.combineReducers(n(n({},e),{poll:u.default}))}},7821:function(e,t,r){"use strict";var n=this&&this.__generator||function(e,t){var r,n,a,l,u={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return l={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function o(l){return function(o){return function(l){if(r)throw new TypeError("Generator is already executing.");for(;u;)try{if(r=1,n&&(a=2&l[0]?n.return:l[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,l[1])).done)return a;switch(n=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return u.label++,{value:l[1],done:!1};case 5:u.label++,n=l[1],l=[0];continue;case 7:l=u.ops.pop(),u.trys.pop();continue;default:if(!((a=(a=u.trys).length>0&&a[a.length-1])||6!==l[0]&&2!==l[0])){u=0;continue}if(3===l[0]&&(!a||l[1]>a[0]&&l[1]<a[3])){u.label=l[1];break}if(6===l[0]&&u.label<a[1]){u.label=a[1],a=l;break}if(a&&u.label<a[2]){u.label=a[2],u.ops.push(l);break}a[2]&&u.ops.pop(),u.trys.pop();continue}l=t.call(e,u)}catch(e){l=[6,e],n=0}finally{r=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,o])}}},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.setPolls=t.addBidValue=t.addBids=t.getPolls=void 0;var l=r(4857),u=r(7437),o=a(r(3624));function i(){var e;return n(this,(function(t){switch(t.label){case 0:return t.trys.push([0,4,,6]),[4,l.call((function(){return o.default.callAPI({url:"https://www.gopaychain.in/api/poll",method:"GET"})}))];case 1:return 200!=(e=t.sent()).status?[3,3]:[4,l.put(u.addPolls(e.data))];case 2:t.sent(),t.label=3;case 3:return[3,6];case 4:return t.sent(),[4,l.put({type:"TODO_FETCH_FAILED"})];case 5:return t.sent(),[3,6];case 6:return[2]}}))}function s(e){var t,r;return n(this,(function(n){switch(n.label){case 0:return n.trys.push([0,4,,6]),t=e.pollkey,e.side,[4,l.call((function(){return o.default.callAPI({url:"https://www.gopaychain.in/api/bid/"+t+"/"+e.side,method:"GET"})}))];case 1:return 200!=(r=n.sent()).status?[3,3]:[4,l.put(u.addBid(r.data))];case 2:n.sent(),n.label=3;case 3:return[3,6];case 4:return n.sent(),[4,l.put({type:"TODO_FETCH_FAILED"})];case 5:return n.sent(),[3,6];case 6:return[2]}}))}t.getPolls=i,t.addBids=s,t.addBidValue=function(){var e;return n(this,(function(t){switch(t.label){case 0:return[4,l.take("ADD_BIDS")];case 1:return e=t.sent(),[4,l.fork(s,e.payload)];case 2:return t.sent(),[3,0];case 3:return[2]}}))},t.setPolls=function(){return n(this,(function(e){switch(e.label){case 0:return[4,l.take("ADD_POLLS")];case 1:return e.sent(),[4,l.fork(i)];case 2:return e.sent(),[3,0];case 3:return[2]}}))}},7451:function(e,t,r){"use strict";var n=this&&this.__generator||function(e,t){var r,n,a,l,u={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return l={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function o(l){return function(o){return function(l){if(r)throw new TypeError("Generator is already executing.");for(;u;)try{if(r=1,n&&(a=2&l[0]?n.return:l[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,l[1])).done)return a;switch(n=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return u.label++,{value:l[1],done:!1};case 5:u.label++,n=l[1],l=[0];continue;case 7:l=u.ops.pop(),u.trys.pop();continue;default:if(!((a=(a=u.trys).length>0&&a[a.length-1])||6!==l[0]&&2!==l[0])){u=0;continue}if(3===l[0]&&(!a||l[1]>a[0]&&l[1]<a[3])){u.label=l[1];break}if(6===l[0]&&u.label<a[1]){u.label=a[1],a=l;break}if(a&&u.label<a[2]){u.label=a[2],u.ops.push(l);break}a[2]&&u.ops.pop(),u.trys.pop();continue}l=t.call(e,u)}catch(e){l=[6,e],n=0}finally{r=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,o])}}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(4857),l=r(7821);t.default=function(){return n(this,(function(e){switch(e.label){case 0:return[4,a.all([l.addBidValue(),l.setPolls()])];case 1:return e.sent(),[2]}}))}},7437:(e,t,r)=>{"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.addBid=t.addPolls=void 0;var a=r(7407).createSlice({name:"poll",initialState:{polls:[]},reducers:{addBid:function(e,t){window.location.reload()},addPolls:function(e,t){e.polls=t.payload}}});t.addPolls=(n=a.actions).addPolls,t.addBid=n.addBid,t.default=a.reducer},9537:function(e,t,r){"use strict";var n=this&&this.__read||function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,a,l=r.call(e),u=[];try{for(;(void 0===t||t-- >0)&&!(n=l.next()).done;)u.push(n.value)}catch(e){a={error:e}}finally{try{n&&!n.done&&(r=l.return)&&r.call(l)}finally{if(a)throw a.error}}return u},a=this&&this.__spreadArray||function(e,t){for(var r=0,n=t.length,a=e.length;r<n;r++,a++)e[a]=t[r];return e},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=r(7407),o=l(r(797)),i=l(r(7451)),s=l(r(4500)),c=l(r(9583)),d=o.default(),f=[d,s.default],p=u.configureStore({reducer:c.default({}),middleware:a(a([],n(u.getDefaultMiddleware({thunk:!1}))),n(f))});d.run(i.default),t.default=p},1910:(e,t,r)=>{"use strict";e.exports=r.p+"85e023592f1eff0c8c8d.jpg"}}]);