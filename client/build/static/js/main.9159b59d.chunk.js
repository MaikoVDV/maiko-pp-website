(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{16:function(t,e,r){},19:function(t,e,r){},34:function(t,e,r){},41:function(t,e,r){},61:function(t,e,r){},62:function(t,e,r){},63:function(t,e,r){},64:function(t,e,r){},65:function(t,e,r){},66:function(t,e,r){},67:function(t,e,r){},68:function(t,e,r){},69:function(t,e,r){},70:function(t,e,r){},71:function(t,e,r){"use strict";r.r(e);var n=r(1),a=r.n(n),o=r(13),c=r.n(o),u=(r(19),r(34),r(7)),s=r(10),i=r(29),d=r(14),p=r(2),l="GET_CARDS",b="ADD_CARD",j="DELETE_CARD",h="CARDS_LOADING",g="GET_GROUPS",O="GET_GROUP_BY_ID",f="GET_GROUPLIST",y="ADD_GROUP",v="DELETE_GROUP",m="GROUPS_LOADING",x="CHANGE_OVERLAY_STATUS",S="CHANGE_CARDMODAL_STATUS",C="CHANGE_JOIN_GROUPMODAL_STATUS",G="CHANGE_CREATE_GROUPMODAL_STATUS",T="CHANGE_GROUPINFO_MODAL_STATUS",I="CHANGE_EXPANDED_CARDMODAL_STATUS",N="ADD_JWT",w="LOGIN_USER",M="JOIN_GROUP",D="LEAVE_GROUP",A={cards:[],loading:!1},_={currentGroup:{name:"",desc:"",date:Date.now,users:[],cards:[]},groups:[],loading:!1},R={name:"",pfp:"",groups:[],date:Date.now,currentJwt:""},k={overlayStatus:!1,cardModalStatus:!1,joinGroupModalStatus:!1,createGroupModalStatus:!1,groupInfoModalStatus:!1,expandedCardModalStatus:!1,currentCard:{}},E=Object(s.b)({card:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case l:return Object(p.a)(Object(p.a)({},t),{},{cards:e.payload,loading:!1});case b:return Object(p.a)(Object(p.a)({},t),{},{cards:[e.payload].concat(Object(d.a)(t.cards))});case j:return Object(p.a)(Object(p.a)({},t),{},{cards:t.cards.filter((function(t){return t._id!==e.payload}))});case h:return Object(p.a)(Object(p.a)({},t),{},{loading:!0});default:return t}},group:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case g:return Object(p.a)(Object(p.a)({},t),{},{groups:e.payload,loading:!1});case O:return Object(p.a)(Object(p.a)({},t),{},{currentGroup:e.payload,loading:!1});case f:return Object(p.a)(Object(p.a)({},t),{},{groupList:e.payload,loading:!1});case y:return Object(p.a)(Object(p.a)({},t),{},{groups:[e.payload].concat(Object(d.a)(t.groups))});case v:return Object(p.a)(Object(p.a)({},t),{},{groups:t.groups.filter((function(t){return t._id!==e.payload}))});case m:return Object(p.a)(Object(p.a)({},t),{},{loading:!0});default:return t}},runtimeVars:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case x:return Object(p.a)(Object(p.a)({},t),{},{overlayStatus:e.payload});case S:return Object(p.a)(Object(p.a)({},t),{},{cardModalStatus:e.payload});case G:return Object(p.a)(Object(p.a)({},t),{},{createGroupModalStatus:e.payload});case C:return Object(p.a)(Object(p.a)({},t),{},{joinGroupModalStatus:e.payload});case T:return Object(p.a)(Object(p.a)({},t),{},{groupInfoModalStatus:e.payload});case I:return Object(p.a)(Object(p.a)({},t),{},{expandedCardModalStatus:e.changedState,currentCard:e.data});default:return t}},user:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case w:return Object(p.a)(Object(p.a)({},t),{},{name:e.payload.userName,pfp:e.payload.pfp,groups:e.payload.groups});case N:return Object(p.a)(Object(p.a)({},t),{},{currentJwt:e.payload});case M:case D:return Object(p.a)(Object(p.a)({},t),{},{groups:e.payload});default:return t}}}),U=[i.a],L=Object(s.d)(E,{},Object(s.c)(s.a.apply(void 0,U))),J=r(3),P=r(4),F=r(6),V=r(5),H=(r(41),r(18)),q=r(8),B=r.n(q),Y=function(t){return function(e){B.a.post("/api/getGroupById",{id:t}).then((function(t){e({type:O,payload:t.data})}))}},W=function(){return{type:m}},z=function(t){return function(e){B.a.get("/api/cards",{params:{groupId:t}}).then((function(t){return e({type:l,payload:t.data})})).catch((function(t){console.log("An error occured whilst attempting to get the cards in a group. Here's the error mesage:\n\n"+t)}))}},X=function(t,e){return function(r){B.a.post("/api/cards",{title:t.title,desc:t.desc,groupId:e}).then((function(t){return r({type:b,payload:t.data})})).catch((function(t){console.log("An error has occured whilst attempting to add a card. Here's the error mesage:\n\n"+t)}))}},K=function(t,e){return function(r){B.a.post("/api/users/joinGroup",{jwt:t,groupId:e}).then((function(t){r({type:M,payload:t.data})})).catch((function(t){console.error("An error occured whilst attempting to join a group:\n\n"+t+"\n\n"+t.response.statusText)}))}},Q=r(0),Z="284487736635-cn97glpichk24oo3qomruucndt3doan3.apps.googleusercontent.com",$=function(t){Object(F.a)(r,t);var e=Object(V.a)(r);function r(){var t;return Object(J.a)(this,r),(t=e.call(this)).responseGoogleSuccess=function(e){var r={name:e.profileObj.name,emailId:e.profileObj.email};t.props.addJwt(e.tokenId),t.setState({userInfo:r,isLoggedIn:!0}),t.props.loginUser(e.tokenId)},t.responseGoogleError=function(t){console.log(t)},t.logout=function(e){console.log(e);t.setState({userInfo:{name:"",emailId:""},isLoggedIn:!1})},t.state={isLoggedIn:!1,userInfo:{name:"",emailId:""}},t}return Object(P.a)(r,[{key:"render",value:function(){return Object(Q.jsx)("div",{className:"row mt-5",style:{float:"right",lineHeight:"var(--titlebar-height)"},children:Object(Q.jsx)("div",{className:"col-md-12",children:this.state.isLoggedIn?Object(Q.jsx)("div",{children:Object(Q.jsx)(H.GoogleLogout,{clientId:Z,buttonText:"Logout",onLogoutSuccess:this.logout})}):Object(Q.jsx)(H.GoogleLogin,{clientId:Z,buttonText:"Sign In with Google",onSuccess:this.responseGoogleSuccess,onFailure:this.responseGoogleError,isSignedIn:!0,cookiePolicy:"single_host_origin"})})})}}]),r}(n.Component),tt=Object(u.b)((function(t){return{}}),{loginUser:function(t){return function(e){B.a.post("/api/users/login",{jwt:t}).then((function(t){e({type:w,payload:t.data})})).catch((function(t){console.log("An error occured whilst attempting to register a new user:\n\n"+t)}))}},addJwt:function(t){return function(e){e({type:N,payload:t})}}})($),et=function(t){Object(F.a)(r,t);var e=Object(V.a)(r);function r(){var t;Object(J.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={titleContent:t.props.titleContent},t}return Object(P.a)(r,[{key:"render",value:function(){return Object(Q.jsxs)("div",{className:"titlebar",children:[Object(Q.jsx)("p",{children:this.state.titleContent}),Object(Q.jsx)(rt,{show:this.props.containsSignInButton})]})}}]),r}(n.Component);function rt(t){return t.show?Object(Q.jsx)(tt,{}):null}var nt=et,at=function(t){return{type:x,payload:t}},ot=function(t){return{type:S,payload:t}},ct=function(t){return{type:G,payload:t}},ut=function(t){return{type:C,payload:t}},st=function(t){return{type:T,payload:t}},it=function(t,e){return{type:I,changedState:t,data:e}},dt=(r(61),function(t){Object(F.a)(r,t);var e=Object(V.a)(r);function r(){var t;Object(J.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).openCard=function(){t.props.changeExpandedCardModalStatus(!0,t.props.cardData),t.props.changeOverlayStatus(!0)},t}return Object(P.a)(r,[{key:"render",value:function(){return Object(Q.jsxs)("div",{className:"card",onClick:this.openCard,children:[Object(Q.jsx)("p",{className:"card-title",children:this.props.cardData.title}),Object(Q.jsx)("p",{className:"card-desc",children:this.props.cardData.desc})]})}}]),r}(n.Component)),pt=Object(u.b)((function(t){return{currentGroup:t.group.currentGroup}}),{changeExpandedCardModalStatus:it,changeOverlayStatus:at})(dt),lt=(r(62),function(t){Object(F.a)(r,t);var e=Object(V.a)(r);function r(){return Object(J.a)(this,r),e.apply(this,arguments)}return Object(P.a)(r,[{key:"render",value:function(){var t=this,e=[];return void 0!==this.props.currentGroup._id&&(e=this.props.cards),Object(Q.jsx)("div",{id:"card-list",children:e.map((function(e){return Object(Q.jsx)(pt,{cardData:e,groupId:t.props.currentGroup._id},e._id)}))})}}]),r}(n.Component)),bt=Object(u.b)((function(t){return{currentGroup:t.group.currentGroup,cards:t.card.cards}}))(lt),jt=(r(63),function(t){Object(F.a)(r,t);var e=Object(V.a)(r);function r(){return Object(J.a)(this,r),e.apply(this,arguments)}return Object(P.a)(r,[{key:"render",value:function(){return void 0!==this.props.uniqueStyle&&(this.uniqueStyle=this.props.uniqueStyle),Object(Q.jsx)("button",{style:this.uniqueStyle,className:"default-button ".concat(this.props.buttonType),onClick:this.props.buttonTrigger,children:Object(Q.jsx)("p",{style:{whiteSpace:"nowrap"},children:this.props.buttonText})})}}]),r}(n.Component)),ht=jt,gt=(r(16),r(64),function(t){Object(F.a)(r,t);var e=Object(V.a)(r);function r(t){var n;return Object(J.a)(this,r),(n=e.call(this,t)).ClosePanel=function(t){n.props.changeGroupInfoModalStatus(!1)},n.LeaveGroup=function(t){n.props.leaveGroup(n.props.currentJwt,n.props.currentGroup._id),n.ClosePanel()},n.state={groupName:"",groupDesc:""},n.groupTitleInput=a.a.createRef(),n.groupDescInput=a.a.createRef(),n}return Object(P.a)(r,[{key:"render",value:function(){var t=new Date(this.props.currentGroup.date),e="".concat(t.getDate(),"-").concat(t.getMonth(),"-").concat(t.getFullYear());return""===this.props.currentGroup.name?Object(Q.jsxs)("div",{id:"group-info-panel",className:"group-modal",style:{visibility:!1===this.props.groupModalStatus?"hidden":"visible"},children:[Object(Q.jsx)("p",{className:"modal-title",style:{fontWeight:"bold"},children:"Open a group to view info about it here!"}),Object(Q.jsx)("div",{className:"modal-buttons",style:{display:"flex",justifyContent:"flex-end",width:"100%"},children:Object(Q.jsx)(ht,{buttonType:"modal-button",buttonText:"Close",buttonTrigger:this.ClosePanel})})]}):Object(Q.jsxs)("div",{id:"group-info-panel",className:"group-modal",style:{visibility:!1===this.props.groupModalStatus?"hidden":"visible"},children:[Object(Q.jsx)("p",{className:"modal-title",style:{fontWeight:"bold"},children:this.props.currentGroup.name}),Object(Q.jsx)("p",{className:"modal-content",children:this.props.currentGroup.desc}),Object(Q.jsxs)("p",{className:"modal-content",children:["Join code: ",this.props.currentGroup._id]}),Object(Q.jsxs)("p",{className:"modal-content",children:["Creation date: ",e]}),Object(Q.jsxs)("div",{id:"participant-list",children:[Object(Q.jsx)("p",{className:"modal-title",children:"Participants"}),this.props.currentGroup.users.map((function(t){return Object(Q.jsxs)("div",{className:"listed-user",children:[Object(Q.jsx)("img",{className:"pfp",src:t.pfp}),Object(Q.jsx)("p",{className:"modal-content",children:t.userName}),Object(Q.jsx)("p",{className:"modal-content",children:"User rank"})]},t.userId)}))]}),Object(Q.jsxs)("div",{className:"modal-buttons",style:{display:"flex",justifyContent:"flex-end",width:"100%"},children:[Object(Q.jsx)(ht,{buttonType:"modal-button",buttonText:"Close",buttonTrigger:this.ClosePanel}),Object(Q.jsx)(ht,{buttonType:"modal-button",buttonText:"Leave group",buttonTrigger:this.LeaveGroup})]})]})}}]),r}(n.Component)),Ot=Object(u.b)((function(t){return{groupModalStatus:t.runtimeVars.groupInfoModalStatus,currentGroup:t.group.currentGroup,currentJwt:t.user.currentJwt,groupDate:new Date(t.group.currentGroup.date)}}),{changeGroupInfoModalStatus:st,leaveGroup:function(t,e){return function(r){B.a.post("/api/users/leaveGroup",{jwt:t,groupId:e}).then((function(t){r({type:D,payload:t.data}),r(Y(t.data[0].groupId)),r(z(t.data[0].groupId))})).catch((function(t){void 0==t.response&&(t.response=""),console.error("An error occured whilst attempting to leave a group:\n\n"+t+"\n\n"+t.response.statusText)}))}}})(gt),ft=function(t){Object(F.a)(r,t);var e=Object(V.a)(r);function r(){var t;Object(J.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).AddCard=function(){t.props.addCard({title:"Frontend card",desc:"I added this card with the frontend!"},t.props.currentGroup._id)},t}return Object(P.a)(r,[{key:"render",value:function(){return Object(Q.jsxs)("div",{id:"group-content-area",children:[Object(Q.jsx)("div",{style:{overflowY:"scroll",position:"absolute",bottom:"0px",top:"0px",left:"0px",right:"0px"},children:Object(Q.jsx)(bt,{cards:this.props.cards})}),Object(Q.jsxs)("div",{style:{position:"absolute",top:"0px",bottom:"0px",right:"0px",left:"0px",background:"white"},children:[Object(Q.jsx)(Ot,{})," "]})]})}}]),r}(n.Component),yt=Object(u.b)((function(t){return{currentGroup:t.group.currentGroup,card:t.card,groupInfoStatus:t.runtimeVars.groupInfoModalStatus}}),{addCard:X})(ft),vt=(r(65),function(t){Object(F.a)(r,t);var e=Object(V.a)(r);function r(){return Object(J.a)(this,r),e.apply(this,arguments)}return Object(P.a)(r,[{key:"openGroup",value:function(t){this.props.getGroupById(t.groupId),this.props.getCards(t.groupId)}},{key:"render",value:function(){var t=this,e=[];return void 0!==this.props.currentUser&&(e=this.props.groups),Object(Q.jsx)("div",{className:"group-list",children:e.map((function(e){return Object(Q.jsx)(ht,{buttonType:"list-item-v",buttonText:e.groupName,g:e,buttonTrigger:function(){t.openGroup(e)}},e.groupId)}))})}}]),r}(n.Component)),mt=Object(u.b)((function(t){return{groups:t.user.groups,currentUser:t.user}}),{getGroups:function(t){return function(e){e(W()),B.a.get("/api/groups").then((function(r){e({type:g,payload:r.data}),void 0!==t&&t()}))}},getGroupById:Y,getCards:z})(vt),xt=(r(66),function(t){Object(F.a)(r,t);var e=Object(V.a)(r);function r(){var t;Object(J.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).AddCard=function(){t.props.changeOverlayStatus(!0),t.props.changeCardModalStatus(!0)},t.OpenInfo=function(){t.props.changeGroupInfoModalStatus(!0)},t}return Object(P.a)(r,[{key:"render",value:function(){return Object(Q.jsxs)("div",{style:{display:"block",position:"relative"},id:"group-options-bar",children:[Object(Q.jsx)(ht,{uniqueStyle:{position:"absolute",transform:"translateY(-50%)",top:"50%"},buttonType:"list-item-h",buttonTrigger:this.AddCard,buttonText:"Add card"}),Object(Q.jsx)(ht,{uniqueStyle:{right:"0px",position:"absolute",transform:"translateY(-50%)",top:"50%"},buttonType:"list-item-h",buttonTrigger:this.OpenInfo,buttonText:"Group Info"})]})}}]),r}(n.Component)),St=Object(u.b)((function(t){return{}}),{changeOverlayStatus:at,changeCardModalStatus:ot,changeGroupInfoModalStatus:st})(xt),Ct=(r(67),function(t){Object(F.a)(r,t);var e=Object(V.a)(r);function r(){var t;Object(J.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).CreateGroup=function(){t.props.changeOverlayStatus(!0),t.props.changeCreateGroupModalStatus(!0)},t.JoinGroup=function(){t.props.changeOverlayStatus(!0),t.props.changeJoinGroupModalStatus(!0)},t}return Object(P.a)(r,[{key:"render",value:function(){return Object(Q.jsxs)("div",{id:"group-options-bar",children:[Object(Q.jsx)(ht,{uniqueStyle:{marginRight:"auto",marginLeft:"auto",flex:"0 1 45%"},buttonType:"list-item-h",buttonTrigger:this.CreateGroup,buttonText:"Create group"}),Object(Q.jsx)(ht,{uniqueStyle:{marginLeft:"auto",marginRight:"auto",flex:"0 1 45%"},buttonType:"list-item-h",buttonTrigger:this.JoinGroup,buttonText:"Join group"})]})}}]),r}(n.Component)),Gt=Object(u.b)((function(t){return{}}),{changeOverlayStatus:at,changeCreateGroupModalStatus:ct,changeJoinGroupModalStatus:ut})(Ct),Tt=(r(68),function(t){Object(F.a)(r,t);var e=Object(V.a)(r);function r(t){var n;return Object(J.a)(this,r),(n=e.call(this,t)).ToggleModal=function(){n.props.changeCardModalStatus(!1),n.props.changeOverlayStatus(!1)},n.SendCard=function(){var t={title:n.state.cardTitle,desc:n.state.cardDesc};n.titleField.current.value="",n.descField.current.value="",n.props.addCard(t,n.props.currentGroup._id),n.props.changeOverlayStatus(!1),n.props.changeCardModalStatus(!1)},n.UpdateTitle=function(t){n.setState({cardTitle:t.target.value})},n.UpdateDesc=function(t){n.setState({cardDesc:t.target.value})},n.state={cardTitle:"",cardDesc:""},n.titleField=a.a.createRef(),n.descField=a.a.createRef(),n}return Object(P.a)(r,[{key:"render",value:function(){return Object(Q.jsxs)("div",{className:"card-modal",style:{visibility:!1===this.props.cardModalStatus?"hidden":"visible"},children:[Object(Q.jsx)("input",{ref:this.titleField,className:"modal-title",onChange:this.UpdateTitle,type:"text",placeholder:"Add a title"}),Object(Q.jsx)("input",{ref:this.descField,className:"modal-content",onChange:this.UpdateDesc,type:"text",placeholder:"Add some details"}),Object(Q.jsx)("div",{className:"modal-buttons",style:{display:"flex",justifyContent:"flex-end",width:"100%"},children:Object(Q.jsx)(ht,{buttonType:"modal-button",buttonText:"Add card",buttonTrigger:this.SendCard})})]})}}]),r}(n.Component)),It=Object(u.b)((function(t){return{overlayStatus:t.runtimeVars.overlayStatus,cardModalStatus:t.runtimeVars.cardModalStatus,currentGroup:t.group.currentGroup}}),{addCard:X,changeOverlayStatus:at,changeCardModalStatus:ot})(Tt),Nt=function(t){Object(F.a)(r,t);var e=Object(V.a)(r);function r(t){var n;return Object(J.a)(this,r),(n=e.call(this,t)).SendGroup=function(){var t={name:n.state.groupName,desc:n.state.groupDesc};n.groupTitleInput.current.value="",n.groupDescInput.current.value="",n.props.addGroup(n.props.currentJwt,t),n.props.changeOverlayStatus(!1),n.props.changeCreateGroupModalStatus(!1)},n.UpdateName=function(t){n.setState({groupName:t.target.value})},n.UpdateDesc=function(t){n.setState({groupDesc:t.target.value})},n.state={groupName:"",groupDesc:""},n.groupTitleInput=a.a.createRef(),n.groupDescInput=a.a.createRef(),n}return Object(P.a)(r,[{key:"render",value:function(){return Object(Q.jsxs)("div",{className:"group-modal",style:{visibility:!1===this.props.groupModalStatus?"hidden":"visible"},children:[Object(Q.jsx)("input",{ref:this.groupTitleInput,className:"modal-title",onChange:this.UpdateName,type:"text",placeholder:"Name your group"}),Object(Q.jsx)("input",{ref:this.groupDescInput,className:"modal-content",onChange:this.UpdateDesc,type:"text",placeholder:"Describe your group"}),Object(Q.jsx)("div",{className:"modal-buttons",style:{display:"flex",justifyContent:"flex-end",width:"100%"},children:Object(Q.jsx)(ht,{buttonType:"modal-button",buttonText:"Create group",buttonTrigger:this.SendGroup})})]})}}]),r}(n.Component),wt=Object(u.b)((function(t){return{overlayStatus:t.runtimeVars.overlayStatus,groupModalStatus:t.runtimeVars.createGroupModalStatus,currentGroup:t.group.currentGroup,currentJwt:t.user.currentJwt}}),{addGroup:function(t,e){return function(r){B.a.post("/api/groups",e).then((function(e){r(K(t,e.data._id)),r({type:y,payload:e.data})}))}},changeOverlayStatus:at,changeCreateGroupModalStatus:ct})(Nt),Mt=function(t){Object(F.a)(r,t);var e=Object(V.a)(r);function r(t){var n;return Object(J.a)(this,r),(n=e.call(this,t)).SendGroup=function(){var t=n.state.groupId;n.idField.current.value="",n.props.joinGroup(n.props.jwt,t),n.props.changeOverlayStatus(!1),n.props.changeJoinGroupModalStatus(!1)},n.UpdateId=function(t){n.setState({groupId:t.target.value})},n.state={groupId:""},n.idField=a.a.createRef(),n}return Object(P.a)(r,[{key:"render",value:function(){return Object(Q.jsxs)("div",{className:"group-modal",style:{visibility:!1===this.props.groupModalStatus?"hidden":"visible"},children:[Object(Q.jsx)("input",{ref:this.idField,className:"modal-title",onChange:this.UpdateId,type:"text",placeholder:"Enter the group code"}),Object(Q.jsx)("div",{className:"modal-buttons",style:{display:"flex",justifyContent:"flex-end",width:"100%"},children:Object(Q.jsx)(ht,{buttonType:"modal-button",buttonText:"Join group",buttonTrigger:this.SendGroup})})]})}}]),r}(n.Component),Dt=Object(u.b)((function(t){return{overlayStatus:t.runtimeVars.overlayStatus,groupModalStatus:t.runtimeVars.joinGroupModalStatus,currentGroup:t.group.currentGroup,jwt:t.user.currentJwt}}),{joinGroup:K,changeOverlayStatus:at,changeJoinGroupModalStatus:ut})(Mt),At=(r(69),function(t){Object(F.a)(r,t);var e=Object(V.a)(r);function r(){return Object(J.a)(this,r),e.apply(this,arguments)}return Object(P.a)(r,[{key:"render",value:function(){return Object(Q.jsx)("div",{id:"overlay",style:{background:!0===this.props.overlayStatus?"#000000cc":"transparent"}})}}]),r}(n.Component)),_t=Object(u.b)((function(t){return{overlayStatus:t.runtimeVars.overlayStatus}}))(At),Rt=(r(70),function(t){Object(F.a)(r,t);var e=Object(V.a)(r);function r(t){var n;return Object(J.a)(this,r),(n=e.call(this,t)).CloseModal=function(){n.props.changeExpandedCardModalStatus(!1),n.props.changeOverlayStatus(!1)},n.RemoveCard=function(){n.props.deleteCard(n.props.currentCard._id,n.props.currentGroup._id),n.props.changeExpandedCardModalStatus(!1),n.props.changeOverlayStatus(!1)},n.state={cardTitle:"",cardDesc:""},n.button=a.a.createRef(),n.modalContentContainer=a.a.createRef(),n}return Object(P.a)(r,[{key:"render",value:function(){var t,e,r,n,a,o;return Object(Q.jsxs)("div",{className:"card-modal",style:{visibility:!1===this.props.modalStatus?"hidden":"visible",height:"".concat((null===(t=this.modalContentContainer)||void 0===t||null===(e=t.current)||void 0===e?void 0:e.clientHeight)+(null===(r=this.button)||void 0===r||null===(n=r.current)||void 0===n?void 0:n.clientHeight),"px")},children:[Object(Q.jsxs)("div",{ref:this.modalContentContainer,children:[Object(Q.jsx)("p",{className:"modal-title",children:null===(a=this.props.currentCard)||void 0===a?void 0:a.title}),Object(Q.jsx)("p",{className:"modal-content",children:null===(o=this.props.currentCard)||void 0===o?void 0:o.desc})]}),Object(Q.jsxs)("div",{className:"modal-buttons",style:{display:"flex",justifyContent:"flex-end",width:"100%"},children:[Object(Q.jsx)(ht,{ref:this.button,buttonType:"",buttonText:"Close",buttonTrigger:this.CloseModal}),Object(Q.jsx)(ht,{ref:this.button,buttonType:"danger",buttonText:"Remove card",buttonTrigger:this.RemoveCard})]})]})}}]),r}(n.Component)),kt=Object(u.b)((function(t){return{overlayStatus:t.runtimeVars.overlayStatus,modalStatus:t.runtimeVars.expandedCardModalStatus,currentCard:t.runtimeVars.currentCard,currentGroup:t.group.currentGroup}}),{changeOverlayStatus:at,changeExpandedCardModalStatus:it,deleteCard:function(t,e){return function(r){var n={cardId:t,groupId:e};r({type:j,payload:t}),B.a.delete("/api/cards",{data:n})}}})(Rt),Et=function(t){Object(F.a)(r,t);var e=Object(V.a)(r);function r(){return Object(J.a)(this,r),e.apply(this,arguments)}return Object(P.a)(r,[{key:"testFunction",value:function(t){this.props.joinGroup(L.getState().user.currentJwt,"617d2eb15da2a883fceb81e8")}},{key:"render",value:function(){return Object(Q.jsx)("button",{style:{zIndex:1e3,position:"absolute",right:10,bottom:10},onClick:this.testFunction.bind(this),children:"test"})}}]),r}(n.Component);Object(u.b)((function(t){return{}}),{joinGroup:K})(Et);var Ut=function(){return Object(Q.jsx)("div",{className:"App",children:Object(Q.jsxs)(u.a,{store:L,children:[Object(Q.jsx)(_t,{}),Object(Q.jsxs)("div",{id:"main-flex-container",children:[Object(Q.jsxs)("div",{id:"group-list",style:{position:"fixed"},children:[Object(Q.jsx)(nt,{titleContent:"Groups"}),Object(Q.jsx)(Gt,{}),Object(Q.jsx)("div",{style:{width:"100%",height:"1rem",background:"linear-gradient(var(--drop-shadow-color), transparent)"}}),Object(Q.jsx)(mt,{})]}),Object(Q.jsx)("div",{id:"group-menu",style:{position:"fixed",zIndex:10},children:Object(Q.jsxs)("div",{children:[Object(Q.jsx)(nt,{titleContent:"My group",containsSignInButton:!0})," ",Object(Q.jsx)(St,{}),Object(Q.jsx)("div",{style:{width:"100%",height:"1rem",background:"linear-gradient(var(--drop-shadow-color), transparent)"}})]})}),Object(Q.jsx)(yt,{cards:L.getState().group.groups.cards})]}),Object(Q.jsx)(It,{}),Object(Q.jsx)(wt,{}),Object(Q.jsx)(Dt,{}),Object(Q.jsx)(kt,{})]})})};c.a.render(Object(Q.jsx)(a.a.StrictMode,{children:Object(Q.jsx)(Ut,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.9159b59d.chunk.js.map