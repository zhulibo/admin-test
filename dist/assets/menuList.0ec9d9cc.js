import{h as E}from"./index.82bb0ea4.js";import{a as Q,E as D,b as W}from"./element-plus.57de7fca.js";import{d as ee,r as g,a3 as A,w as te,o as y,c as q,a as U,_ as e,T as l,U as T,S as x,u as le,n as I,a6 as m,ak as H,Y as s,Z as C,X as ue}from"./@vue.acab0428.js";import"./pinia.cc224967.js";import"./vue-router.13ff4542.js";import"./path-browserify.12fd8122.js";import"./axios.c0d44eb0.js";import"./lodash-es.082cdea4.js";import"./@vueuse.60d5afff.js";import"./@element-plus.2f5a972a.js";import"./@popperjs.36402333.js";import"./@ctrl.82a509e0.js";import"./dayjs.180da8d0.js";import"./async-validator.fb49d0f5.js";import"./memoize-one.4ee5c96d.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./@floating-ui.cba15af0.js";function ae(){return E.request({url:"/api/menu/list",method:"get"})}function ne(F){return E.request({url:"/api/menu/add",method:"post",data:F})}function L(F){return E.request({url:"/api/menu/update",method:"put",data:F})}function oe(F){return E.request({url:"/api/menu/del/"+F,method:"delete"})}const de={class:"wrapper"},re={class:"table-head"},ie={class:"new-item"},se=s("\u5237\u65B0"),me=s("\u65B0\u589E"),pe=s("\u662F"),ce=s("\u5426"),_e=s("\u4FEE\u6539"),fe=s("\u5220\u9664"),he={class:"dialog-footer"},ve=s("\u53D6\u6D88"),Fe=s("\u786E\u5B9A"),He=ee({__name:"menuList",setup(F){const V=g(!0),B=g([]),f=()=>{V.value=!0,ae().then(n=>{B.value=n.data,V.value=!1}).catch(()=>{V.value=!1})};f();const R=g(),S=()=>{f()},M=n=>{V.value=!0;const u={id:n.id,status:n.status};L(u).then(d=>{D.success("\u64CD\u4F5C\u6210\u529F"),f()}).catch(()=>{f()})},$=n=>{W.confirm("\u786E\u5B9A\u5220\u9664 "+n.title,"\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(()=>{oe(n.id).then(u=>{D.success(u.msg),f()})})},h=g(!1),k=g(),X=async()=>{h.value=!0,await I(),N()},Y=async n=>{h.value=!0,N(),await I();for(const r in a)a[r]=n[r];a.id=n.id;const u=Number(n.parentId),d=[];let p=!1;function i(r){for(let o=0;o<r.length&&!p;o++)r[o].id===u?(d.push(r[o].id),p=!0):r[o].children&&r[o].children.length>0?(d.push(r[o].id),i(r[o].children)):o===r.length-1&&d.pop()}i(B.value),w.value=d},N=()=>{var n;(n=k.value)==null||n.resetFields(),w.value=[],delete a.id},w=g([]),a=A({parentId:"",title:"",name:"",path:"",component:"",orderNum:0,hidden:0,cache:0,status:1}),Z=A({title:[{required:!0,message:"\u8BF7\u8F93\u5165",trigger:"blur"}],component:[{required:!0,message:"\u8BF7\u8F93\u5165",trigger:"blur"}],name:[{required:!0,message:"\u8BF7\u8F93\u5165",trigger:"blur"}],path:[{required:!0,message:"\u8BF7\u8F93\u5165",trigger:"blur"}]}),j=()=>{var n;(n=k.value)==null||n.validate(u=>{u&&(a.id?L(a).then(d=>{D.success(d.msg),h.value=!1,f()}):ne(a).then(d=>{D.success(d.msg),h.value=!1,f()}))})};return te(()=>w,n=>{Array.isArray(n.value)?n.value.length>0?a.parentId=String(n.value[n.value.length-1]):a.parentId="":n.value===null&&(a.parentId="")},{deep:!0}),(n,u)=>{const d=m("icon"),p=m("el-button"),i=m("el-table-column"),r=m("el-tag"),o=m("el-switch"),z=m("el-cascader"),c=m("el-form-item"),_=m("el-col"),b=m("el-input"),G=m("el-row"),J=m("el-form"),K=m("el-dialog"),O=H("copy"),P=H("loading");return y(),q("div",de,[U("div",re,[U("div",ie,[e(p,{type:"primary",plain:"",onClick:S},{default:l(()=>[e(d,{name:"refresh"}),se]),_:1}),e(p,{type:"primary",onClick:X},{default:l(()=>[e(d,{name:"add"}),me]),_:1})])]),T((y(),x(le(Q),{ref_key:"tableRef",ref:R,data:B.value,"row-key":"id","default-expand-all":""},{default:l(()=>[e(i,{prop:"createTime",label:"\u65F6\u95F4",align:"center",width:"200"}),e(i,{prop:"title",label:"\u83DC\u5355\u540D\u79F0","min-width":"160"},{default:l(t=>[T((y(),q("span",null,[s(C(t.row.title),1)])),[[O,t.row.title]])]),_:1}),e(i,{prop:"component",label:"\u6587\u4EF6\u8DEF\u5F84","min-width":"180"},{default:l(t=>[s(C(t.row.component),1)]),_:1}),e(i,{prop:"name",label:"\u8DEF\u7531\u540D\u79F0","min-width":"120"},{default:l(t=>[s(C(t.row.name),1)]),_:1}),e(i,{prop:"path",label:"\u8DEF\u7531\u5730\u5740","min-width":"120"},{default:l(t=>[s(C(t.row.path),1)]),_:1}),e(i,{prop:"orderNum",label:"\u6392\u5E8F",align:"center","min-width":"120"},{default:l(t=>[s(C(t.row.orderNum),1)]),_:1}),e(i,{prop:"hidden",label:"\u662F\u5426\u9690\u85CF",align:"center","min-width":"120"},{default:l(t=>[t.row.hidden===1?(y(),x(r,{key:0,type:"success"},{default:l(()=>[pe]),_:1})):t.row.hidden===0?(y(),x(r,{key:1,type:"info"},{default:l(()=>[ce]),_:1})):ue("",!0)]),_:1}),e(i,{prop:"cache",label:"\u662F\u5426\u7F13\u5B58",align:"center","min-width":"120"},{default:l(t=>[e(o,{modelValue:t.row.cache,"onUpdate:modelValue":v=>t.row.cache=v,"active-value":1,"inactive-value":0,onChange:v=>M(t.row)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),e(i,{prop:"status",label:"\u72B6\u6001",align:"center","min-width":"120"},{default:l(t=>[e(o,{modelValue:t.row.status,"onUpdate:modelValue":v=>t.row.status=v,"active-value":1,"inactive-value":0,onChange:v=>M(t.row)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),e(i,{label:"\u64CD\u4F5C",align:"center",width:"150",fixed:"right","class-name":"manage-td"},{default:l(t=>[e(p,{type:"primary",link:"",onClick:v=>Y(t.row)},{default:l(()=>[e(d,{name:"edit"}),_e]),_:2},1032,["onClick"]),e(p,{type:"warning",link:"",onClick:v=>$(t.row)},{default:l(()=>[e(d,{name:"del"}),fe]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[P,V.value]]),e(K,{modelValue:h.value,"onUpdate:modelValue":u[10]||(u[10]=t=>h.value=t),title:"\u7F16\u8F91\u83DC\u5355",width:"800px"},{footer:l(()=>[U("span",he,[e(p,{onClick:u[9]||(u[9]=t=>h.value=!1)},{default:l(()=>[ve]),_:1}),e(p,{type:"primary",onClick:j},{default:l(()=>[Fe]),_:1})])]),default:l(()=>[e(J,{ref_key:"menuFormRef",ref:k,model:a,rules:Z,"label-width":"auto"},{default:l(()=>[e(G,{gutter:20},{default:l(()=>[e(_,{span:12},{default:l(()=>[e(c,{label:"\u4E0A\u7EA7\u83DC\u5355",prop:"parent"},{default:l(()=>[e(z,{modelValue:w.value,"onUpdate:modelValue":u[0]||(u[0]=t=>w.value=t),options:B.value,props:{value:"id",label:"title",children:"children",checkStrictly:!0,expandTrigger:"hover"},clearable:""},null,8,["modelValue","options"])]),_:1})]),_:1}),e(_,{span:12},{default:l(()=>[e(c,{label:"\u83DC\u5355\u540D\u79F0",prop:"title"},{default:l(()=>[e(b,{modelValue:a.title,"onUpdate:modelValue":u[1]||(u[1]=t=>a.title=t),placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue"])]),_:1})]),_:1}),e(_,{span:12},{default:l(()=>[e(c,{label:"\u8DEF\u7531\u540D\u79F0",prop:"name"},{default:l(()=>[e(b,{modelValue:a.name,"onUpdate:modelValue":u[2]||(u[2]=t=>a.name=t),placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue"])]),_:1})]),_:1}),e(_,{span:12},{default:l(()=>[e(c,{label:"\u8DEF\u7531\u5730\u5740",prop:"path"},{default:l(()=>[e(b,{modelValue:a.path,"onUpdate:modelValue":u[3]||(u[3]=t=>a.path=t),placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue"])]),_:1})]),_:1}),e(_,{span:12},{default:l(()=>[e(c,{label:"\u6587\u4EF6\u8DEF\u5F84",prop:"component"},{default:l(()=>[e(b,{modelValue:a.component,"onUpdate:modelValue":u[4]||(u[4]=t=>a.component=t),placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue"])]),_:1})]),_:1}),e(_,{span:12},{default:l(()=>[e(c,{label:"\u6392\u5E8F",prop:"orderNum"},{default:l(()=>[e(b,{modelValue:a.orderNum,"onUpdate:modelValue":u[5]||(u[5]=t=>a.orderNum=t),placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue"])]),_:1})]),_:1}),e(_,{span:12},{default:l(()=>[e(c,{label:"\u662F\u5426\u9690\u85CF",prop:"hidden"},{default:l(()=>[e(o,{modelValue:a.hidden,"onUpdate:modelValue":u[6]||(u[6]=t=>a.hidden=t),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),_:1})]),_:1}),e(_,{span:12},{default:l(()=>[e(c,{label:"\u662F\u5426\u7F13\u5B58",prop:"cache"},{default:l(()=>[e(o,{modelValue:a.cache,"onUpdate:modelValue":u[7]||(u[7]=t=>a.cache=t),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),_:1})]),_:1}),e(_,{span:12},{default:l(()=>[e(c,{label:"\u72B6\u6001",prop:"status"},{default:l(()=>[e(o,{modelValue:a.status,"onUpdate:modelValue":u[8]||(u[8]=t=>a.status=t),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])])}}});export{He as default};
