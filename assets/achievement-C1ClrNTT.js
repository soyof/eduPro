import{d as y,c as $,w as C,p as l,o as t,b as a,F as m,h as u,k as p,u as D,j as w,f as B,g as A,e as H,t as I,_ as x}from"./index-DswlHMNH.js";import{H as F}from"./headerLine-C-vg8SL3.js";import{S as L}from"./selfEmpty-BnX9DJ1_.js";import{A as N}from"./achieveItem-CY5yizQo.js";import{g as S}from"./utils-s55yd7uy.js";import{u as b}from"./achievementHooks-DGtgf9gS.js";import"./services-Dqh1wXe-.js";const q={class:"achievement self-scrollbar-wrap"},E=["onClick"],M=y({__name:"achievement",setup(T){let r=[];const n=D(),{loading:d,getAchieveInfo:h}=b(),f=$(()=>!0),v=e=>{n.push({path:"/achievementMore",query:{key:e.key}})},_=(e,i)=>{n.push({path:"/achievementDtl",query:{key:e.key,id:i.id}})};return h().then(e=>{r=S(e||[])}),(e,i)=>{const k=w("loading");return C((t(),a("div",q,[f.value?(t(!0),a(m,{key:0},u(l(r),(s,c)=>(t(),a("div",{key:`${c}`,class:"achievement-item"},[B(F,{title:s.title,isDeepBgc:!0},{after:A(()=>[H("div",{class:"header-line-more",onClick:o=>v(s)},I(e.$t("more"))+">>",9,E)]),_:2},1032,["title"]),(t(!0),a(m,null,u(s.list.splice(0,5),(o,g)=>(t(),p(N,{key:`${c}-${g}-${s.key}`,info:o,class:"achievement-infos-item",onClick:V=>_(s,o)},null,8,["info","onClick"]))),128))]))),128)):(t(),p(L,{key:1}))])),[[k,l(d)]])}}}),O=x(M,[["__scopeId","data-v-ec52c0d9"]]);export{O as default};
