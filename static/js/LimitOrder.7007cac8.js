(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["LimitOrder"],{"1bb8":function(e,t,o){"use strict";o.r(t);o("fb6a"),o("a9e3");var n=o("7a23"),r=o("e524"),i=o.n(r),l=function(e){return Object(n["pushScopeId"])("data-v-44c7e9b5"),e=e(),Object(n["popScopeId"])(),e},c={class:"bridge-tx-container"},a={class:"status-container"},d={class:"icon-container"},s={class:"tx-info"},m={class:"tx-info_li"},u={class:"token-container"},f={class:"icon-token-container mr-5"},b=["src"],v={class:"mr-5"},O={class:"tx-info_li"},j={class:"token-container"},p={class:"icon-token-container mr-5"},_=["src"],k={class:"mr-5"},g={class:"tx-info_li"},h={class:"flex items-center"},y={key:0,class:"tx-info_li"},I={class:"flex items-center justify-end"},N={class:"tx-info_li"},x={class:"flex items-center"},E={class:"tx-info_li"},V={class:"flex items-center"},$={key:0},S={key:1,class:"tx-info_li"},D={class:"flex items-center"},w=["href"],B={class:"iconfont icon-copy",style:{"margin-left":"0.1rem"}},C={key:2,class:"tx-info_li"},T={class:"flex items-center"},A={class:"tx-info_li"},M={class:"flex items-center",style:{"text-align":"right"}},F=["innerHTML"],z={class:"flex items-center justify-center btn-container"},L={class:"status-container"},U={class:"icon-container"},P={class:"tx-info"},K={class:"tx-info_li"},G={class:"token-container"},R={class:"icon-token-container mr-5"},q=["src"],H={class:"mr-5"},J={class:"tx-info_li"},Y={class:"token-container"},W={class:"icon-token-container mr-5"},Z=["src"],Q={class:"mr-5"},X={class:"tx-info_li"},ee={class:"flex items-center"},te={class:"tx-info_li"},oe={class:"flex flex-col"},ne={class:"color-999 text-size-12 items-end"},re={class:"tx-info_li"},ie={key:0,class:"flex items-center"},le={class:"label"},ce={key:1,class:"flex items-center"},ae={class:"label"},de={key:0,class:"tx-info_li"},se={key:1,class:"tx-info_li"},me={key:2,class:"tx-info_li"},ue={class:"flex items-center"},fe=["href"],be={class:"iconfont icon-copy",style:{"margin-left":"0.1rem"}},ve={key:3,class:"tx-info_li"},Oe={class:"flex items-center"},je={class:"tx-info_li"},pe=l((function(){return Object(n["createElementVNode"])("div",{class:"flex items-center"},null,-1)})),_e={key:0,class:"tx-info_li sub-li"},ke={style:{color:"#666","font-size":"0.24rem"}},ge={class:"flex items-center"},he=["href"],ye={class:"iconfont icon-copy",style:{"margin-left":"0.1rem"}},Ie={style:{color:"#666","font-size":"0.24rem"}},Ne=Object(n["createTextVNode"])(" ("),xe={class:"flex items-center text-size-12"},Ee={class:"mr-5"},Ve=l((function(){return Object(n["createElementVNode"])("img",{style:{width:"0.3rem",margin:"0.02rem 0.01rem 0"},src:i.a,alt:"",srcset:""},null,-1)})),$e={class:"mr-5"},Se=Object(n["createTextVNode"])(") "),De=l((function(){return Object(n["createElementVNode"])("span",{style:{flex:"1"}},null,-1)})),we={class:"flex items-center"},Be=["href"],Ce={class:"iconfont icon-copy",style:{"margin-left":"0.1rem"}},Te={key:2,class:"tx-info_li sub-li"},Ae={style:{color:"#666","font-size":"0.24rem"}},Me={class:"flex items-center"},Fe=["href"],ze={class:"iconfont icon-copy",style:{"margin-left":"0.1rem"}},Le={class:"flex items-center justify-center btn-container"};function Ue(e,t,r,i,l,Ue){var Pe,Ke,Ge,Re,qe,He,Je,Ye,We,Ze,Qe,Xe,et,tt,ot,nt,rt,it,lt,ct,at,dt,st,mt,ut,ft,bt,vt,Ot,jt,pt,_t,kt,gt,ht,yt,It,Nt,xt,Et,Vt,$t,St,Dt,wt,Bt,Ct,Tt,At,Mt,Ft,zt,Lt,Ut,Pt,Kt,Gt,Rt,qt,Ht=Object(n["resolveComponent"])("van-nav-bar"),Jt=Object(n["resolveComponent"])("van-icon"),Yt=Object(n["resolveComponent"])("van-loading"),Wt=Object(n["resolveComponent"])("van-image"),Zt=Object(n["resolveComponent"])("van-button"),Qt=Object(n["resolveComponent"])("van-divider"),Xt=Object(n["resolveDirective"])("copy");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",c,[Object(n["createVNode"])(Ht,{"left-text":"","left-arrow":"",fixed:"",placeholder:"","safe-area-inset-top":"","z-index":"2",title:e.$t("limitOrderDetails"),onClickLeft:t[0]||(t[0]=function(t){return e.$router.go(-1)}),onClickRight:t[1]||(t[1]=function(t){return e.show=!0})},null,8,["title"]),"solana"!==(e.$route.query.chain||(null===(Pe=l.orderInfo)||void 0===Pe?void 0:Pe.chain))?(Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],{key:0},[Object(n["createElementVNode"])("div",a,[Object(n["createElementVNode"])("div",d,[2===l.orderInfo.status?(Object(n["openBlock"])(),Object(n["createBlock"])(Jt,{key:0,name:"success",color:"#12B886",size:"0.48rem"})):1===l.orderInfo.status||10===l.orderInfo.status||11===l.orderInfo.status||(0===l.orderInfo.status||-1===l.orderInfo.status)&&1e3*l.orderInfo.created_at+l.LimitExpiredTime<Date.now()?(Object(n["openBlock"])(),Object(n["createBlock"])(Jt,{key:1,name:"fail",color:"#999999",size:"0.48rem"})):(Object(n["openBlock"])(),Object(n["createBlock"])(Yt,{key:2,size:"0.48rem",type:"spinner",color:"#3F80F7"}))]),Object(n["createElementVNode"])("div",null,Object(n["toDisplayString"])(Ue.formatStatus(l.orderInfo)),1)]),Object(n["createElementVNode"])("ul",s,[Object(n["createElementVNode"])("li",m,[Object(n["createElementVNode"])("div",null,Object(n["toDisplayString"])(e.$t("from")),1),Object(n["createElementVNode"])("div",u,[Object(n["createElementVNode"])("div",f,[null!==(Ke=l.orderInfo)&&void 0!==Ke&&Ke.from_token?(Object(n["openBlock"])(),Object(n["createBlock"])(Wt,{key:0,round:"",width:"0.4rem",height:"0.4rem","icon-size":"0.4rem","lazy-load":"","show-loading":"",src:e.$f.formatIcon(l.orderInfo.from_token+"-"+l.orderInfo.chain),"error-icon":o("aeccf")},null,8,["src","error-icon"])):Object(n["createCommentVNode"])("",!0),null!==(Ge=l.orderInfo)&&void 0!==Ge&&Ge.chain?(Object(n["openBlock"])(),Object(n["createElementBlock"])("img",{key:1,class:"icon-svg icon-network",src:"https://ave.s3.ap-east-1.amazonaws.com/chain/".concat(null===(Re=l.orderInfo)||void 0===Re?void 0:Re.chain,".png"),alt:"",srcset:""},null,8,b)):Object(n["createCommentVNode"])("",!0)]),Object(n["createElementVNode"])("span",v,Object(n["toDisplayString"])(e.$f.formatNumber2(Ue.formatUnits((null===(qe=l.orderInfo)||void 0===qe?void 0:qe.from_amount)||0,(null===(He=l.orderInfo)||void 0===He?void 0:He.from_token_decimals)||0))),1),Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])((null===(Je=l.orderInfo)||void 0===Je?void 0:Je.from_token_symbol)||""),1)])]),Object(n["createElementVNode"])("li",O,[Object(n["createElementVNode"])("div",null,Object(n["toDisplayString"])(e.$t("to")),1),Object(n["createElementVNode"])("div",j,[Object(n["createElementVNode"])("div",p,[null!==(Ye=l.orderInfo)&&void 0!==Ye&&Ye.to_token?(Object(n["openBlock"])(),Object(n["createBlock"])(Wt,{key:0,round:"",width:"0.4rem",height:"0.4rem","icon-size":"0.4rem","lazy-load":"","show-loading":"",src:e.$f.formatIcon(l.orderInfo.to_token+"-"+l.orderInfo.chain),"error-icon":o("aeccf")},null,8,["src","error-icon"])):Object(n["createCommentVNode"])("",!0),null!==(We=l.orderInfo)&&void 0!==We&&We.chain?(Object(n["openBlock"])(),Object(n["createElementBlock"])("img",{key:1,class:"icon-svg icon-network",src:"https://ave.s3.ap-east-1.amazonaws.com/chain/".concat(null===(Ze=l.orderInfo)||void 0===Ze?void 0:Ze.chain,".png"),alt:"",srcset:""},null,8,_)):Object(n["createCommentVNode"])("",!0)]),Object(n["createElementVNode"])("span",k,Object(n["toDisplayString"])(e.$f.formatNumber2(Ue.formatUnits((null===(Qe=l.orderInfo)||void 0===Qe?void 0:Qe.to_amount)||0,(null===(Xe=l.orderInfo)||void 0===Xe?void 0:Xe.to_token_decimals)||0))),1),Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])((null===(et=l.orderInfo)||void 0===et?void 0:et.to_token_symbol)||""),1)])]),Object(n["createElementVNode"])("li",g,[Object(n["createElementVNode"])("div",null,Object(n["toDisplayString"])(e.$t("orderType")),1),Object(n["createElementVNode"])("div",h,Object(n["toDisplayString"])(1===l.orderInfo.order_type?e.$t("stopLimit"):e.$t("generalDelegation")),1)]),1===l.orderInfo.order_type?(Object(n["openBlock"])(),Object(n["createElementBlock"])("li",y,[Object(n["createElementVNode"])("div",null,Object(n["toDisplayString"])(e.$t("effectiveCondition")),1),Object(n["createElementVNode"])("div",I,Object(n["toDisplayString"])(e.$t("triggerPriceEffective",{symbol:l.orderInfo.target_token===l.orderInfo.from_token?(null===(tt=l.orderInfo)||void 0===tt?void 0:tt.from_token_symbol)||"":(null===(ot=l.orderInfo)||void 0===ot?void 0:ot.to_token_symbol)||"",price:e.$f.formatNumber2(null===(nt=l.orderInfo)||void 0===nt?void 0:nt.trigger_price)})),1)])):Object(n["createCommentVNode"])("",!0),Object(n["createElementVNode"])("li",N,[Object(n["createElementVNode"])("div",null,Object(n["toDisplayString"])(e.$t("delegatePrice"))+"("+Object(n["toDisplayString"])(l.orderInfo.target_token===l.orderInfo.from_token?(null===(rt=l.orderInfo)||void 0===rt?void 0:rt.from_token_symbol)||"":(null===(it=l.orderInfo)||void 0===it?void 0:it.to_token_symbol)||"")+")",1),Object(n["createElementVNode"])("div",x," $ "+Object(n["toDisplayString"])(e.$f.formatNumber2(null===(lt=l.orderInfo)||void 0===lt?void 0:lt.target_limit_price)),1)]),Object(n["createElementVNode"])("li",E,[Object(n["createElementVNode"])("div",null,Object(n["toDisplayString"])(e.$t("delegateTime")),1),Object(n["createElementVNode"])("div",V,[Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(e.$f.formatDate(l.orderInfo.created_at)),1),(0===l.orderInfo.status||-1===l.orderInfo.status)&&Date.now()<1e3*l.orderInfo.created_at+l.LimitExpiredTime?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",$,"("+Object(n["toDisplayString"])(e.$t("expiresInTime",{t:e.$dayjs(1e3*l.orderInfo.created_at+l.LimitExpiredTime).fromNow()}))+")",1)):Object(n["createCommentVNode"])("",!0)])]),l.orderInfo.executed_tx_hash&&2===l.orderInfo.status?(Object(n["openBlock"])(),Object(n["createElementBlock"])("li",S,[Object(n["createElementVNode"])("div",null,Object(n["toDisplayString"])(e.$t("txHash")),1),Object(n["createElementVNode"])("div",D,[Object(n["createElementVNode"])("a",{href:e.$f.formatExplorerUrl(l.orderInfo.chain,l.orderInfo.executed_tx_hash,"tx"),target:"_blank"},Object(n["toDisplayString"])((null===(ct=l.orderInfo.executed_tx_hash)||void 0===ct?void 0:ct.slice(0,6))+"..."+(null===(at=l.orderInfo.executed_tx_hash)||void 0===at?void 0:at.slice(-6))),9,w),Object(n["withDirectives"])(Object(n["createElementVNode"])("i",B,null,512),[[Xt,l.orderInfo.executed_tx_hash]])])])):Object(n["createCommentVNode"])("",!0),l.orderInfo.executed_tx_hash&&2===l.orderInfo.status?(Object(n["openBlock"])(),Object(n["createElementBlock"])("li",C,[Object(n["createElementVNode"])("div",null,Object(n["toDisplayString"])(e.$t("txTime")),1),Object(n["createElementVNode"])("div",T,Object(n["toDisplayString"])(e.$f.formatDate(l.orderInfo.finished_at)),1)])):Object(n["createCommentVNode"])("",!0),Object(n["createElementVNode"])("li",A,[Object(n["createElementVNode"])("div",null,Object(n["toDisplayString"])(e.$t("estimateGas")),1),Object(n["createElementVNode"])("div",M,Object(n["toDisplayString"])(e.$t("estimateGasTips",{n:e.$f.formatNumber2(null!==(dt=l.limitGasU)&&void 0!==dt?dt:1,1)})),1)])]),Object(n["createElementVNode"])("div",{style:{color:"#f8be46","text-align":"left","font-size":"0.24rem","line-height":"1.5","margin-top":"0.6rem"},innerHTML:e.$t("limitOrderTips")},null,8,F),Object(n["createElementVNode"])("div",z,[0!==l.orderInfo.status&&-1!==l.orderInfo.status||!(l.orderInfo.target_token===l.NATIVE_TOKEN||(0===l.orderInfo.status||-1===l.orderInfo.status)&&1e3*l.orderInfo.created_at+l.LimitExpiredTime>Date.now())?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createBlock"])(Zt,{key:0,class:"btn-s",loading:l.loading,"loading-text":e.$t("revoke"),plain:"",round:"",onClick:Object(n["withModifiers"])(Ue.confirmCancel,["stop"])},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.$t("revoke")),1)]})),_:1},8,["loading","loading-text","onClick"])),Object(n["createVNode"])(Zt,{class:"btn-s",plain:"",round:"",onClick:Object(n["withModifiers"])(Ue.goLimit,["stop"])},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.$t("swapAgain")),1)]})),_:1},8,["onClick"])])],64)):(Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],{key:1},[Object(n["createElementVNode"])("div",L,[Object(n["createElementVNode"])("div",U,["Completed"===l.orderInfo.state?(Object(n["openBlock"])(),Object(n["createBlock"])(Jt,{key:0,name:"success",color:"#12B886",size:"0.48rem"})):"Pending"===(null===(st=l.orderInfo)||void 0===st?void 0:st.state)&&null!==(null===(mt=l.orderInfo)||void 0===mt?void 0:mt.expiredAt)&&Date.now()>1e3*Number((null===(ut=l.orderInfo)||void 0===ut?void 0:ut.expiredAt)||0)?(Object(n["openBlock"])(),Object(n["createBlock"])(Jt,{key:1,name:"warning-o",color:"#999999",size:"0.48rem"})):"Cancelled"===l.orderInfo.state?(Object(n["openBlock"])(),Object(n["createBlock"])(Jt,{key:2,name:"cross",color:"#999",size:"0.48rem"})):(Object(n["openBlock"])(),Object(n["createBlock"])(Yt,{key:3,size:"0.48rem",type:"spinner",color:"#3F80F7"}))]),Object(n["createElementVNode"])("div",null,Object(n["toDisplayString"])(Ue.formatSolanaStatus(l.orderInfo)),1)]),Object(n["createElementVNode"])("ul",P,[Object(n["createElementVNode"])("li",K,[Object(n["createElementVNode"])("div",null,Object(n["toDisplayString"])(e.$t("from")),1),Object(n["createElementVNode"])("div",G,[Object(n["createElementVNode"])("div",R,[null!==(ft=l.orderInfo)&&void 0!==ft&&ft.from_token?(Object(n["openBlock"])(),Object(n["createBlock"])(Wt,{key:0,round:"",width:"0.4rem",height:"0.4rem","icon-size":"0.4rem","lazy-load":"","show-loading":"",src:e.$f.formatIcon(l.orderInfo.from_token+"-"+l.orderInfo.chain),"error-icon":o("aeccf")},null,8,["src","error-icon"])):Object(n["createCommentVNode"])("",!0),null!==(bt=l.orderInfo)&&void 0!==bt&&bt.chain?(Object(n["openBlock"])(),Object(n["createElementBlock"])("img",{key:1,class:"icon-svg icon-network",src:"https://ave.s3.ap-east-1.amazonaws.com/chain/".concat(null===(vt=l.orderInfo)||void 0===vt?void 0:vt.chain,".png"),alt:"",srcset:""},null,8,q)):Object(n["createCommentVNode"])("",!0)]),Object(n["createElementVNode"])("span",H,Object(n["toDisplayString"])(e.$f.formatNumber2(Ue.formatUnits((null===(Ot=l.orderInfo)||void 0===Ot?void 0:Ot.from_amount)||0,(null===(jt=l.orderInfo)||void 0===jt?void 0:jt.from_token_decimals)||0))),1),Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])((null===(pt=l.orderInfo)||void 0===pt?void 0:pt.from_token_symbol)||""),1)])]),Object(n["createElementVNode"])("li",J,[Object(n["createElementVNode"])("div",null,Object(n["toDisplayString"])(e.$t("to")),1),Object(n["createElementVNode"])("div",Y,[Object(n["createElementVNode"])("div",W,[null!==(_t=l.orderInfo)&&void 0!==_t&&_t.to_token?(Object(n["openBlock"])(),Object(n["createBlock"])(Wt,{key:0,round:"",width:"0.4rem",height:"0.4rem","icon-size":"0.4rem","lazy-load":"","show-loading":"",src:e.$f.formatIcon(l.orderInfo.to_token+"-"+l.orderInfo.chain),"error-icon":o("aeccf")},null,8,["src","error-icon"])):Object(n["createCommentVNode"])("",!0),null!==(kt=l.orderInfo)&&void 0!==kt&&kt.chain?(Object(n["openBlock"])(),Object(n["createElementBlock"])("img",{key:1,class:"icon-svg icon-network",src:"https://ave.s3.ap-east-1.amazonaws.com/chain/".concat(null===(gt=l.orderInfo)||void 0===gt?void 0:gt.chain,".png"),alt:"",srcset:""},null,8,Z)):Object(n["createCommentVNode"])("",!0)]),Object(n["createElementVNode"])("span",Q,Object(n["toDisplayString"])(e.$f.formatNumber2(Ue.formatUnits((null===(ht=l.orderInfo)||void 0===ht?void 0:ht.to_amount)||0,(null===(yt=l.orderInfo)||void 0===yt?void 0:yt.to_token_decimals)||0))),1),Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])((null===(It=l.orderInfo)||void 0===It?void 0:It.to_token_symbol)||""),1)])]),Object(n["createElementVNode"])("li",X,[Object(n["createElementVNode"])("div",null,Object(n["toDisplayString"])(e.$t("orderType")),1),Object(n["createElementVNode"])("div",ee,Object(n["toDisplayString"])(e.$t("generalDelegation")),1)]),Object(n["createElementVNode"])("li",te,[Object(n["createElementVNode"])("div",null,Object(n["toDisplayString"])(e.$t("delegatePrice"))+"("+Object(n["toDisplayString"])(Ue.solanaPriceSymbol(l.orderInfo))+")",1),Object(n["createElementVNode"])("div",oe,[Object(n["createElementVNode"])("span",null,"$"+Object(n["toDisplayString"])(Ue.solanaPriceU(l.orderInfo)),1),Object(n["createElementVNode"])("span",ne,"("+Object(n["toDisplayString"])(Ue.solanaPrice(l.orderInfo))+")",1)])]),Object(n["createElementVNode"])("li",re,[Object(n["createElementVNode"])("div",null,Object(n["toDisplayString"])(e.$t("amount1")),1),Ue.solanaTarget(l.orderInfo)?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",ie,[Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(e.$f.formatNumber2(Ue.formatUnits((null===(Nt=l.orderInfo)||void 0===Nt?void 0:Nt.from_amount_used)||0,(null===(xt=l.orderInfo)||void 0===xt?void 0:xt.from_token_decimals)||0)))+"/"+Object(n["toDisplayString"])(e.$f.formatNumber2(Ue.formatUnits((null===(Et=l.orderInfo)||void 0===Et?void 0:Et.from_amount)||0,(null===(Vt=l.orderInfo)||void 0===Vt?void 0:Vt.from_token_decimals)||0)))+" "+Object(n["toDisplayString"])(l.orderInfo.from_token_symbol),1),Object(n["createElementVNode"])("span",le,"("+Object(n["toDisplayString"])(e.$f.formatNumber2((null===($t=l.orderInfo)||void 0===$t?void 0:$t.percent)||0))+"%)",1)])):(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",ce,[Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(e.$f.formatNumber2(Ue.formatUnits((null===(St=l.orderInfo)||void 0===St?void 0:St.to_amount_used)||0,(null===(Dt=l.orderInfo)||void 0===Dt?void 0:Dt.to_token_decimals)||0)))+"/"+Object(n["toDisplayString"])(e.$f.formatNumber2(Ue.formatUnits((null===(wt=l.orderInfo)||void 0===wt?void 0:wt.to_amount)||0,(null===(Bt=l.orderInfo)||void 0===Bt?void 0:Bt.to_token_decimals)||0)))+" "+Object(n["toDisplayString"])(l.orderInfo.to_token_symbol),1),Object(n["createElementVNode"])("span",ae,"("+Object(n["toDisplayString"])(e.$f.formatNumber2((null===(Ct=l.orderInfo)||void 0===Ct?void 0:Ct.percent)||0))+"%)",1)]))]),void 0!==l.orderInfo.expiredAt?(Object(n["openBlock"])(),Object(n["createElementBlock"])("li",de,[Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(e.$t("expiredTime")),1),Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(l.orderInfo.expiredAt?e.$f.formatDate(l.orderInfo.expiredAt):e.$t("never")),1)])):Object(n["createCommentVNode"])("",!0),l.orderInfo.createdAt?(Object(n["openBlock"])(),Object(n["createElementBlock"])("li",se,[Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(e.$t("createTime")),1),Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(e.$f.formatDate(l.orderInfo.createdAt)),1)])):Object(n["createCommentVNode"])("",!0),l.orderInfo.executed_tx_hash&&2===l.orderInfo.status?(Object(n["openBlock"])(),Object(n["createElementBlock"])("li",me,[Object(n["createElementVNode"])("div",null,Object(n["toDisplayString"])(e.$t("txHash")),1),Object(n["createElementVNode"])("div",ue,[Object(n["createElementVNode"])("a",{href:e.$f.formatExplorerUrl(l.orderInfo.chain,l.orderInfo.executed_tx_hash,"tx"),target:"_blank"},Object(n["toDisplayString"])((null===(Tt=l.orderInfo.executed_tx_hash)||void 0===Tt?void 0:Tt.slice(0,6))+"..."+(null===(At=l.orderInfo.executed_tx_hash)||void 0===At?void 0:At.slice(-6))),9,fe),Object(n["withDirectives"])(Object(n["createElementVNode"])("i",be,null,512),[[Xt,l.orderInfo.executed_tx_hash]])])])):Object(n["createCommentVNode"])("",!0),l.orderInfo.executed_tx_hash&&2===l.orderInfo.status?(Object(n["openBlock"])(),Object(n["createElementBlock"])("li",ve,[Object(n["createElementVNode"])("div",null,Object(n["toDisplayString"])(e.$t("txTime")),1),Object(n["createElementVNode"])("div",Oe,Object(n["toDisplayString"])(e.$f.formatDate(l.orderInfo.finished_at)),1)])):Object(n["createCommentVNode"])("",!0),l.orderInfo.createTxid||(null===(Mt=l.orderInfo)||void 0===Mt||null===(Ft=Mt.orders)||void 0===Ft?void 0:Ft.length)>0||null!==(zt=l.orderInfo)&&void 0!==zt&&zt.cancelTxid?(Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],{key:4},[Object(n["createVNode"])(Qt),Object(n["createElementVNode"])("li",je,[Object(n["createElementVNode"])("div",null,Object(n["toDisplayString"])(e.$t("txHash")),1),pe]),l.orderInfo.createTxid?(Object(n["openBlock"])(),Object(n["createElementBlock"])("li",_e,[Object(n["createElementVNode"])("div",ke,Object(n["toDisplayString"])(e.$t("create")),1),Object(n["createElementVNode"])("div",ge,[Object(n["createElementVNode"])("a",{href:e.$f.formatExplorerUrl(l.orderInfo.chain,l.orderInfo.createTxid,"tx"),target:"_blank"},Object(n["toDisplayString"])((null===(Lt=l.orderInfo.createTxid)||void 0===Lt?void 0:Lt.slice(0,6))+"..."+(null===(Ut=l.orderInfo.createTxid)||void 0===Ut?void 0:Ut.slice(-6))),9,he),Object(n["withDirectives"])(Object(n["createElementVNode"])("i",ye,null,512),[[Xt,l.orderInfo.createTxid]])])])):Object(n["createCommentVNode"])("",!0),(null===(Pt=l.orderInfo)||void 0===Pt||null===(Kt=Pt.orders)||void 0===Kt?void 0:Kt.length)>0?(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],{key:1},Object(n["renderList"])(null===(Gt=l.orderInfo)||void 0===Gt?void 0:Gt.orders,(function(t,o){var r,i,c,a,d,s;return Object(n["openBlock"])(),Object(n["createElementBlock"])("li",{key:o,class:"tx-info_li sub-li"},[Object(n["createElementVNode"])("div",Ie,Object(n["toDisplayString"])(e.$t("trade")),1),Ne,Object(n["createElementVNode"])("div",xe,[Object(n["createElementVNode"])("span",Ee,Object(n["toDisplayString"])(e.$f.formatNumber2(Ue.formatUnits((null===t||void 0===t?void 0:t.inAmount)||0,(null===(r=l.orderInfo)||void 0===r?void 0:r.from_token_decimals)||0))),1),Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])((null===(i=l.orderInfo)||void 0===i?void 0:i.from_token_symbol)||""),1),Ve,Object(n["createElementVNode"])("span",$e,Object(n["toDisplayString"])(e.$f.formatNumber2(Ue.formatUnits((null===t||void 0===t?void 0:t.outAmount)||0,(null===(c=l.orderInfo)||void 0===c?void 0:c.to_token_decimals)||0))),1),Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])((null===(a=l.orderInfo)||void 0===a?void 0:a.to_token_symbol)||""),1)]),Se,De,Object(n["createElementVNode"])("div",we,[Object(n["createElementVNode"])("a",{href:e.$f.formatExplorerUrl(l.orderInfo.chain,t.txid,"tx"),target:"_blank"},Object(n["toDisplayString"])((null===(d=t.txid)||void 0===d?void 0:d.slice(0,6))+"..."+(null===(s=t.txid)||void 0===s?void 0:s.slice(-6))),9,Be),Object(n["withDirectives"])(Object(n["createElementVNode"])("i",Ce,null,512),[[Xt,t.txid]])])])})),128)):Object(n["createCommentVNode"])("",!0),l.orderInfo.cancelTxid?(Object(n["openBlock"])(),Object(n["createElementBlock"])("li",Te,[Object(n["createElementVNode"])("div",Ae,Object(n["toDisplayString"])(e.$t("cancel1")),1),Object(n["createElementVNode"])("div",Me,[Object(n["createElementVNode"])("a",{href:e.$f.formatExplorerUrl(l.orderInfo.chain,l.orderInfo.cancelTxid,"tx"),target:"_blank"},Object(n["toDisplayString"])((null===(Rt=l.orderInfo.cancelTxid)||void 0===Rt?void 0:Rt.slice(0,6))+"..."+(null===(qt=l.orderInfo.cancelTxid)||void 0===qt?void 0:qt.slice(-6))),9,Fe),Object(n["withDirectives"])(Object(n["createElementVNode"])("i",ze,null,512),[[Xt,l.orderInfo.cancelTxid]])])])):Object(n["createCommentVNode"])("",!0)],64)):Object(n["createCommentVNode"])("",!0)]),Object(n["createElementVNode"])("div",Le,["Pending"===l.orderInfo.state?(Object(n["openBlock"])(),Object(n["createBlock"])(Zt,{key:0,class:"btn-s",loading:l.loadingSolana[l.orderInfo.publicKey],"loading-text":e.$t("revoke"),plain:"",round:"",onClick:Object(n["withModifiers"])(Ue.confirmCancel,["stop"])},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.$t("revoke")),1)]})),_:1},8,["loading","loading-text","onClick"])):Object(n["createCommentVNode"])("",!0),Object(n["createVNode"])(Zt,{class:"btn-s",plain:"",round:"",onClick:Object(n["withModifiers"])(Ue.goLimit,["stop"])},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.$t("swapAgain")),1)]})),_:1},8,["onClick"])])],64))])}var Pe=o("f3f3"),Ke=o("d0ff"),Ge=o("c964"),Re=(o("96cf"),o("d3b7"),o("3ca3"),o("ddb0"),o("d81d"),o("a630"),o("6062"),o("99af"),o("0481"),o("4069"),o("b680"),o("7db0"),o("4de4"),o("365c")),qe=o("6779"),He=o("c9d9"),Je=o("901e"),Ye=o.n(Je),We=null,Ze={name:"LimitOrderDetails",data:function(){return{LimitExpiredTime:He["g"],NATIVE_TOKEN:He["k"],orderInfo:{},loading:!1,limitContractsFee:He["v"],limitGasU:"0",loadingSolana:{}}},activated:function(){this.init()},methods:{formatUnits:qe["utils"].formatUnits,init:function(){this.getLimitOrder()},getLimitOrder:function(){var e=this;"solana"!==this.$route.query.chain?Object(Re["G"])({id:this.$route.params.id}).then((function(t){var o;console.log(t),e.orderInfo=null!==(o=null===t||void 0===t?void 0:t[0])&&void 0!==o?o:{},e.getGasUsd()})):this.getSolanaLimitOrder()},getSolanaLimitOrder:function(e){var t=this;if("solana"===this.$route.query.chain){var o=this.$route.query,n=(o.inputMint,o.outputMint,o.wallet);return Promise.all([Object(Re["M"])({wallet:n}),Object(Re["N"])({wallet:n,take:100})]).then(function(){var o=Object(Ge["a"])(regeneratorRuntime.mark((function o(r){var i,l,c,a,d,s,m,u,f,b,v,O,j,p,_,k;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return f=null===r||void 0===r||null===(i=r[0])||void 0===i||null===(l=i.map)||void 0===l?void 0:l.call(i,(function(e){var t,o;return[(null===e||void 0===e||null===(t=e.account)||void 0===t?void 0:t.inputMint)+"-solana",(null===e||void 0===e||null===(o=e.account)||void 0===o?void 0:o.outputMint)+"-solana"]})),b=null===r||void 0===r||null===(c=r[1])||void 0===c||null===(a=c.map)||void 0===a?void 0:a.call(c,(function(e){return[(null===e||void 0===e?void 0:e.inputMint)+"-solana",(null===e||void 0===e?void 0:e.outputMint)+"-solana"]})),v=Array.from(new Set([].concat(Object(Ke["a"])(null===f||void 0===f?void 0:f.flat()),Object(Ke["a"])(null===b||void 0===b?void 0:b.flat())))),o.next=5,Object(Re["ab"])(v).catch(function(){var e=Object(Ge["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t),e.abrupt("return",{});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 5:if(O=o.sent,j=null===r||void 0===r||null===(d=r[0])||void 0===d||null===(s=d.map)||void 0===s?void 0:s.call(d,(function(e){var t,o,n,r,i,l,c=e.account;return Object(Pe["a"])(Object(Pe["a"])(Object(Pe["a"])({},e),c),{},{from_token:c.inputMint,from_token_symbol:null===(t=O[c.inputMint+"-solana"])||void 0===t?void 0:t.symbol,from_token_decimals:null===(o=O[c.inputMint+"-solana"])||void 0===o?void 0:o.decimal,from_token_price:null===(n=O[c.inputMint+"-solana"])||void 0===n?void 0:n.current_price_usd,to_token:c.outputMint,to_token_symbol:null===(r=O[c.outputMint+"-solana"])||void 0===r?void 0:r.symbol,to_token_decimals:null===(i=O[c.outputMint+"-solana"])||void 0===i?void 0:i.decimal,to_token_price:null===(l=O[c.outputMint+"-solana"])||void 0===l?void 0:l.current_price_usd,from_amount:Number(c.oriInAmount)||0,to_amount:Number(c.oriOutAmount)||0,id:e.publicKey,orderKey:e.publicKey,chain:"solana",created_at:0,state:"Pending",from_amount_used:new Ye.a(c.oriInAmount).minus(c.inAmount).toFixed(),to_amount_used:new Ye.a(c.oriOutAmount).minus(c.outAmount).toFixed(),percent:new Ye.a(c.oriInAmount).minus(c.inAmount).div(c.oriInAmount).times(100).toFixed()})})),p=null===r||void 0===r||null===(m=r[1])||void 0===m||null===(u=m.map)||void 0===u?void 0:u.call(m,(function(e){var t,o,n,r,i,l;return Object(Pe["a"])(Object(Pe["a"])({},e),{},{from_token:e.inputMint,from_token_symbol:null===(t=O[e.inputMint+"-solana"])||void 0===t?void 0:t.symbol,from_token_decimals:null===(o=O[e.inputMint+"-solana"])||void 0===o?void 0:o.decimal,from_token_price:null===(n=O[e.inputMint+"-solana"])||void 0===n?void 0:n.current_price_usd,to_token:e.outputMint,to_token_symbol:null===(r=O[e.outputMint+"-solana"])||void 0===r?void 0:r.symbol,to_token_decimals:null===(i=O[e.outputMint+"-solana"])||void 0===i?void 0:i.decimal,to_token_price:null===(l=O[e.outputMint+"-solana"])||void 0===l?void 0:l.current_price_usd,from_amount:Number(e.oriInAmount)||0,to_amount:Number(e.oriOutAmount)||0,chain:"solana",from_amount_used:new Ye.a(e.oriInAmount).minus(e.inAmount).toFixed(),to_amount_used:new Ye.a(e.oriOutAmount).minus(e.outAmount).toFixed(),percent:new Ye.a(e.oriInAmount).minus(e.inAmount).div(e.oriInAmount).times(100).toFixed()})})),_=[].concat(Object(Ke["a"])(j),Object(Ke["a"])(p)),k=null===_||void 0===_?void 0:_.some((function(t){return t.orderKey===e&&"Cancelled"===t.state})),!e||k){o.next=15;break}return We&&(clearTimeout(We),We=null),o.abrupt("return",new Promise((function(o,n){We=setTimeout((function(){t.getSolanaLimitOrderTime+=5,t.getSolanaLimitOrder(e).then((function(e){o(e)}))}),5e3)})));case 15:return t.orderInfo=_.find((function(e){return(null===e||void 0===e?void 0:e.orderKey)===t.$route.params.id}))||{},o.abrupt("return",Object(Re["O"])({wallet:n}).then((function(e){console.log(e);var o=null===e||void 0===e?void 0:e.filter((function(e){return e.order.id===t.orderInfo.id}));return(null===o||void 0===o?void 0:o.length)>0&&(t.orderInfo=Object(Pe["a"])(Object(Pe["a"])({},t.orderInfo),{},{orders:o})),Promise.resolve(t.orderInfo)})));case 17:case"end":return o.stop()}}),o)})));return function(e){return o.apply(this,arguments)}}())}},getGasUsd:function(){var e=this;this.orderInfo.chain&&Object(Re["B"])(this.orderInfo.chain).then((function(t){e.limitGasU=t||He["v"][e.orderInfo.chain]}))},formatStatus:function(e){var t;if((0===e.status||-1===e.status)&&1e3*e.created_at+He["g"]<Date.now())return this.$t("expired1");var o=e.status,n={0:this.$t("pendingOrder"),1:this.$t("cancelled"),2:this.$t("completed"),10:this.$t("fail1")+"(".concat(this.$t("nonceError"),")"),11:this.$t("fail1")+"(".concat(this.$t("chainError"),")"),12:this.$t("fail1")+"(".concat(this.$t("signatureError"),")"),13:this.$t("fail1")+"(".concat(this.$t("approveGasPriceLow"),")"),"-1":this.$t("triggerPriceNotReached")};return null!==(t=n[o])&&void 0!==t?t:this.$t("pendingOrder")},formatStatusColor:function(e){if((0===e.status||-1===e.status)&&1e3*e.created_at+He["g"]<Date.now())return"#999999";var t=e.status;return 1===t||10===t||11===t||12===t?"#999999":2===t?"#12B886":0===t?"#3F80F7":"#FF0000"},goLimit:function(){if("solana"===this.orderInfo.chain){var e=0,t="";t=this.solanaTarget(this.orderInfo)?this.orderInfo.from_token:this.orderInfo.to_token;var o=t+"-solana";location.href="/swap/".concat(o,"/").concat(e)}else if(this.orderInfo.target_token&&this.orderInfo.chain){var n=this.orderInfo.target_token+"-"+this.orderInfo.chain,r=1===this.orderInfo.order_type?1:0;location.href="/swap/".concat(n,"/").concat(r)}},confirmCancel:function(){var e,t=this,o="solana"===(null===(e=this.orderInfo)||void 0===e?void 0:e.chain)?this.$t("cancelOrderConfirmingSolana"):this.$t("confirmCancelMessage");this.$dialog.confirm({title:this.$t("cancelOrderConfirming"),message:o,confirmButtonText:this.$t("confirm1"),confirmButtonColor:"#558BED",cancelButtonText:this.$t("cancel")}).then((function(){t.cancelLimitOrder(t.orderInfo)}))},cancelLimitOrder:function(e){var t=this;if("solana"!==e.chain){var o={fromToken:e.from_token,fromAmount:e.from_amount,toToken:e.to_token,minReturn:e.to_min_amount,salt:e.salt,id:e.id,order_id:e.order_id};console.log(o),this.loading=!0,Object(Re["j"])(o).then((function(e){console.log(e),t.$notify({type:"success",message:t.$t("cancelledOrderSuccessfully")}),t.init()})).catch((function(e){t.$f.handleError(e)})).finally((function(){t.loading=!1}))}else this.cancelSolanaLimitOrder(e)},cancelSolanaLimitOrder:function(e){var t=this;this.loadingSolana[e.publicKey]=!0,Object(Re["k"])(e.publicKey).then((function(e){return console.log(e),e.wait()})).then((function(o){console.log(o),t.getSolanaLimitOrder(e.publicKey).then((function(){t.loadingSolana[e.publicKey]=!1,t.$notify({type:"success",message:t.$t("cancelledOrderSuccessfully")})}))})).catch((function(o){t.loadingSolana[e.publicKey]=!1,t.$f.handleError(o)}))},solanaTarget:function(e){var t=["So11111111111111111111111111111111111111112","EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v","Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"],o=t.indexOf(e.from_token),n=t.indexOf(e.to_token);return o<=n},solanaPriceSymbol:function(e){return this.solanaTarget(e)?(null===e||void 0===e?void 0:e.from_token_symbol)||"":(null===e||void 0===e?void 0:e.to_token_symbol)||""},solanaPriceU:function(e){return this.solanaTarget(e)?this.$f.formatNumber2(new Ye.a(e.to_amount).times(Math.pow(10,(null===e||void 0===e?void 0:e.from_token_decimals)-(null===e||void 0===e?void 0:e.to_token_decimals))).times((null===e||void 0===e?void 0:e.to_token_price)||0).div(e.from_amount).toFixed()):this.$f.formatNumber2(new Ye.a(e.from_amount).times(Math.pow(10,(null===e||void 0===e?void 0:e.to_token_decimals)-(null===e||void 0===e?void 0:e.from_token_decimals))).times((null===e||void 0===e?void 0:e.from_token_price)||0).div(e.to_amount).toFixed())},solanaPrice:function(e){return this.solanaTarget(e)?this.$f.formatNumber2(e.to_amount*Math.pow(10,(null===e||void 0===e?void 0:e.from_token_decimals)-(null===e||void 0===e?void 0:e.to_token_decimals))/e.from_amount)+" "+((null===e||void 0===e?void 0:e.to_token_symbol)||"")+" per "+((null===e||void 0===e?void 0:e.from_token_symbol)||""):this.$f.formatNumber2(e.from_amount*Math.pow(10,(null===e||void 0===e?void 0:e.to_token_decimals)-(null===e||void 0===e?void 0:e.from_token_decimals))/e.to_amount)+" "+((null===e||void 0===e?void 0:e.from_token_symbol)||"")+" per "+((null===e||void 0===e?void 0:e.to_token_symbol)||"")},formatSolanaStatus:function(e){var t;if("Pending"===(null===e||void 0===e?void 0:e.state)&&null!==(null===e||void 0===e?void 0:e.expiredAt)&&Date.now()>1e3*Number((null===e||void 0===e?void 0:e.expiredAt)||0))return this.$t("expired1");var o=e.state,n={Pending:this.$t("pendingOrder"),Completed:this.$t("completed"),Cancelled:this.$t("cancelled")};return null!==(t=n[o])&&void 0!==t?t:o},formatSolanaStatusColor:function(e){var t;if("Pending"===(null===e||void 0===e?void 0:e.state)&&null!==(null===e||void 0===e?void 0:e.expiredAt)&&Date.now()>1e3*Number((null===e||void 0===e?void 0:e.expiredAt)||0))return"#999999";var o=e.state,n={Pending:"#3F80F7",Completed:"#12B886",Cancelled:"#999999"};return null!==(t=n[o])&&void 0!==t?t:"#3F80F7"}}},Qe=(o("34de"),o("6b0d")),Xe=o.n(Qe);const et=Xe()(Ze,[["render",Ue],["__scopeId","data-v-44c7e9b5"]]);t["default"]=et},"34de":function(e,t,o){"use strict";o("b851")},aeccf:function(e,t,o){e.exports=o.p+"static/img/icon-default.75f6e9a0.png"},b851:function(e,t,o){},e524:function(e,t,o){e.exports=o.p+"static/img/arrow-right.484eb652.svg"}}]);