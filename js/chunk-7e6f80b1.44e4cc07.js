(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e6f80b1"],{1799:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{attrs:{"aria-label":"Page navigation"}},[a("ul",{staticClass:"pagination"},[a("li",{staticClass:"page-item",class:{disabled:1===t.pages.current_page}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.emitPages(t.pages.current_page-1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pages.total_pages,(function(e,o){return a("li",{key:o,staticClass:"page-item",class:{active:e===t.pages.current_page}},[a("a",{staticClass:"page-link ",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.emitPages(e)}}},[t._v(t._s(e))])])})),a("li",{staticClass:"page-item",class:{disabled:t.pages.current_page===t.pages.total_pages}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.emitPages(t.pages.current_page+1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])},s=[],i={data(){return{}},props:{pages:{}},methods:{emitPages(t){this.$emit("emit-pages",t)}}},n=i,l=a("2877"),d=Object(l["a"])(n,o,s,!1,null,null,null);e["a"]=d.exports},"8c58":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("h2",{staticClass:"font-weight-bold"},[t._v("優惠卷列表")]),a("div",{staticClass:"text-right mt-4"},[a("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.openCouponModal("new")}}},[t._v(" 新增優惠券 ")])]),a("table",{staticClass:"table mt-4"},[t._m(0),a("tbody",t._l(t.coupons,(function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.title))]),a("td",[t._v(t._s(e.percent))]),a("td",[t._v(t._s(e.deadline.datetime))]),a("td",[e.enabled?a("span",{staticClass:"text-success"},[t._v("啟用")]):a("span",{staticClass:"text-muted"},[t._v("未起用")])]),a("td",[a("div",{staticClass:"btn-group"},[a("button",{staticClass:"btn btn-outline-primary btn-sm",on:{click:function(a){return t.openCouponModal("edit",e)}}},[t._v(" 編輯 ")]),a("button",{staticClass:"btn btn-outline-danger btn-sm",on:{click:function(a){return t.openCouponModal("delete",e)}}},[t._v(" 刪除 ")])])])])})),0)]),a("div",{staticClass:"modal fade",attrs:{id:"couponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(1),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"coupontitle"}},[t._v("標題")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.title,expression:"tempCoupon.title"}],staticClass:"form-control",attrs:{id:"coupontitle",type:"text",placeholder:"請輸入標題"},domProps:{value:t.tempCoupon.title},on:{input:function(e){e.target.composing||t.$set(t.tempCoupon,"title",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"couponcode"}},[t._v("優惠碼")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.code,expression:"tempCoupon.code"}],staticClass:"form-control",attrs:{id:"couponcode",type:"text",placeholder:"請輸入優惠碼"},domProps:{value:t.tempCoupon.code},on:{input:function(e){e.target.composing||t.$set(t.tempCoupon,"code",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"deadline"}},[t._v("到期日")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.deadline,expression:"deadline"}],staticClass:"form-control",attrs:{type:"date",id:"deadline"},domProps:{value:t.deadline},on:{input:function(e){e.target.composing||(t.deadline=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"timelimit"}},[t._v("到期時間")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.timelimit,expression:"timelimit"}],staticClass:"form-control",attrs:{type:"time",step:"1",id:"timelimit"},domProps:{value:t.timelimit},on:{input:function(e){e.target.composing||(t.timelimit=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"discountpercentage"}},[t._v("折扣百分比")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.percent,expression:"tempCoupon.percent"}],staticClass:"form-control",attrs:{id:"discountpercentage",type:"number",placeholder:"請輸入折扣數量"},domProps:{value:t.tempCoupon.percent},on:{input:function(e){e.target.composing||t.$set(t.tempCoupon,"percent",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.enabled,expression:"tempCoupon.enabled"}],staticClass:"form-check-input",attrs:{id:"enabled",type:"checkbox"},domProps:{checked:Array.isArray(t.tempCoupon.enabled)?t._i(t.tempCoupon.enabled,null)>-1:t.tempCoupon.enabled},on:{change:function(e){var a=t.tempCoupon.enabled,o=e.target,s=!!o.checked;if(Array.isArray(a)){var i=null,n=t._i(a,i);o.checked?n<0&&t.$set(t.tempCoupon,"enabled",a.concat([i])):n>-1&&t.$set(t.tempCoupon,"enabled",a.slice(0,n).concat(a.slice(n+1)))}else t.$set(t.tempCoupon,"enabled",s)}}}),a("label",{staticClass:"form-check-label",attrs:{for:"enabled"}},[t._v("是否啟用")])])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" 關閉 ")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.updateCoupon}},[t._v(" "+t._s("new"===t.status?"新增優惠卷":"更新優惠券")+" ")])])])])]),a("div",{staticClass:"modal fade",attrs:{id:"delCouponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(2),a("div",{staticClass:"modal-body"},[t._v(" 是否刪除 "),a("strong",{staticClass:"text-danger"},[t._v(t._s(t.tempCoupon.title))]),t._v(" 優惠券(刪除後將無法恢復)。 ")]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" 取消 ")]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.deleteCoupon}},[t._v(" 確認刪除 ")])])])])]),a("Pagination",{attrs:{pages:t.pagination},on:{"emit-pages":t.getCoupons}})],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("名稱")]),a("th",[t._v("折扣百分比")]),a("th",[t._v("到期日")]),a("th",[t._v("是否啟用")]),a("th",[t._v("編輯")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-primary text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v(" 建立優惠券 ")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-danger text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v("刪除優惠卷")])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],i=a("1157"),n=a.n(i),l=a("1799"),d=a("3508"),c={components:{Pagination:l["a"]},data(){return{pagination:{},coupons:{},tempCoupon:{title:"",enabled:!1,percent:100,deadline_at:0,code:""},deadline:"",timelimit:"",status:"",isLoading:!1}},created(){this.getCoupons()},methods:{openCouponModal(t,e){switch(this.status=t,t){case"new":this.tempCoupon={},n()("#couponModal").modal("show");break;case"edit":{this.tempCoupon={...e};const t=this.tempCoupon.deadline.datetime.split(" ");this.deadline=t[0],this.timelimit=t[1],n()("#couponModal").modal("show");break}case"delete":this.tempCoupon={...e},n()("#delCouponModal").modal("show");break;default:break}},getCoupons(){const t=this;t.isLoading=!0;const e="https://course-ec-api.hexschool.io/api/d52eae5f-b113-4dd1-81cc-46bd383ac57a/admin/ec/coupons";t.$http.get(e).then(e=>{t.pagination=e.data.meta.pagination,t.coupons=e.data.data,t.isLoading=!1}).catch(()=>{d["a"].fire({title:"無法取得資料，稍後再試",icon:"error"}),t.isLoading=!1})},updateCoupon(){const t=this;t.isLoading=!0;let e="https://course-ec-api.hexschool.io/api/d52eae5f-b113-4dd1-81cc-46bd383ac57a/admin/ec/coupon",a="",o="";"new"===t.status?(a="post",o="新增"):(e="https://course-ec-api.hexschool.io/api/d52eae5f-b113-4dd1-81cc-46bd383ac57a/admin/ec/coupon/"+t.tempCoupon.id,a="patch",o="修改"),t.tempCoupon.deadline_at=`${t.deadline} ${t.timelimit}`,t.$http[a](e,t.tempCoupon).then(e=>{n()("#couponModal").modal("hide"),200===e.status?(d["a"].fire({title:o+"優惠卷成功",icon:"success"}),t.getCoupons()):d["a"].fire({title:o+"優惠卷失敗",icon:"success"}),t.isLoading=!1})},deleteCoupon(){const t=this;t.isLoading=!0;const e="https://course-ec-api.hexschool.io/api/d52eae5f-b113-4dd1-81cc-46bd383ac57a/admin/ec/coupon/"+t.tempCoupon.id;let a="";t.$http.delete(e).then(e=>{n()("#delCouponModal").modal("hide"),a="刪除",200===e.status?(d["a"].fire({title:a+"優惠卷成功",icon:"success"}),t.getCoupons()):d["a"].fire({title:a+"優惠卷失敗",icon:"success"})})}}},r=c,p=a("2877"),u=Object(p["a"])(r,o,s,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-7e6f80b1.44e4cc07.js.map