(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{349:function(a,t,e){},378:function(a,t,e){"use strict";var o=e(349);e.n(o).a},396:function(a,t,e){"use strict";e.r(t);var o={data:function(){return{formData:{name:"",sex:"",like:[],status:""},rules:{name:[{required:!0,message:"名称不能为空",tiggers:["change","blur"]}],sex:[{required:!0,message:"性别为必选项",tiggers:"change"}],like:[{required:!0,type:"array",message:"爱好为必选项",tiggers:"change"}]}}},methods:{handleSubmit:function(a){this.$refs.form1.validate((function(a){a?window.alert("提交成功"):window.alert("表单校验失败")}))},ok1:function(){this.value=!1},cancel1:function(){this.value=!1}}},r=(e(378),e(56)),s=Object(r.a)(o,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"form-表单"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#form-表单"}},[a._v("#")]),a._v(" Form 表单")]),a._v(" "),e("p",[a._v("由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据")]),e("p"),a._v(" "),e("h2",{attrs:{id:"典型表单"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#典型表单"}},[a._v("#")]),a._v(" 典型表单")]),a._v(" "),e("p",[a._v("包括各种表单项，比如输入框、选择器、开关、单选框、多选框等。")]),a._v(" "),e("div",{staticClass:"mt-10"},[e("fox-form",{attrs:{model:a.formData,"label-position":"right"}},[e("fox-form-item",{attrs:{prop:"name",label:"名称"}},[e("fox-input",{model:{value:a.formData.name,callback:function(t){a.$set(a.formData,"name",t)},expression:"formData.name"}})],1),a._v(" "),e("fox-form-item",{attrs:{prop:"sex",label:"性别"}},[e("fox-radio-group",{model:{value:a.formData.sex,callback:function(t){a.$set(a.formData,"sex",t)},expression:"formData.sex"}},[e("fox-radio",{attrs:{label:"1"}},[a._v("男")]),a._v(" "),e("fox-radio",{attrs:{label:"0"}},[a._v("女")])],1)],1),a._v(" "),e("fox-form-item",{attrs:{prop:"like",label:"爱好"}},[e("fox-checkbox-group",{model:{value:a.formData.like,callback:function(t){a.$set(a.formData,"like",t)},expression:"formData.like"}},[e("fox-checkbox",{attrs:{label:"1"}},[a._v("读书")]),a._v(" "),e("fox-checkbox",{attrs:{label:"2"}},[a._v("看报")]),a._v(" "),e("fox-checkbox",{attrs:{label:"3"}},[a._v("玩游戏")]),a._v(" "),e("fox-checkbox",{attrs:{label:"4"}},[a._v("听音乐")])],1)],1),a._v(" "),e("fox-form-item",{attrs:{prop:"status",label:"状态"}},[e("fox-switch",{model:{value:a.formData.status,callback:function(t){a.$set(a.formData,"status",t)},expression:"formData.status"}})],1),a._v(" "),e("fox-form-item",[e("fox-button",{attrs:{type:"primary"},on:{click:a.handleSubmit}},[a._v("提交")]),a._v(" "),e("fox-button",[a._v("重置")])],1)],1)],1),a._v(" "),e("h2",{attrs:{id:"表单验证"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#表单验证"}},[a._v("#")]),a._v(" 表单验证")]),a._v(" "),e("p",[a._v("在防止用户犯错的前提下，尽可能让用户更早地发现并纠正错误。")]),a._v(" "),e("div",{staticClass:"mt-10"},[e("fox-form",{ref:"form1",attrs:{model:a.formData,rules:a.rules,"label-position":"right"}},[e("fox-form-item",{attrs:{prop:"name",label:"名称"}},[e("fox-input",{model:{value:a.formData.name,callback:function(t){a.$set(a.formData,"name",t)},expression:"formData.name"}})],1),a._v(" "),e("fox-form-item",{attrs:{prop:"sex",label:"性别"}},[e("fox-radio-group",{model:{value:a.formData.sex,callback:function(t){a.$set(a.formData,"sex",t)},expression:"formData.sex"}},[e("fox-radio",{attrs:{label:"1"}},[a._v("男")]),a._v(" "),e("fox-radio",{attrs:{label:"0"}},[a._v("女")])],1)],1),a._v(" "),e("fox-form-item",{attrs:{prop:"like",label:"爱好"}},[e("fox-checkbox-group",{model:{value:a.formData.like,callback:function(t){a.$set(a.formData,"like",t)},expression:"formData.like"}},[e("fox-checkbox",{attrs:{label:"1"}},[a._v("读书")]),a._v(" "),e("fox-checkbox",{attrs:{label:"2"}},[a._v("看报")]),a._v(" "),e("fox-checkbox",{attrs:{label:"3"}},[a._v("玩游戏")]),a._v(" "),e("fox-checkbox",{attrs:{label:"4"}},[a._v("听音乐")])],1)],1),a._v(" "),e("fox-form-item",{attrs:{prop:"status",label:"状态"}},[e("fox-switch",{model:{value:a.formData.status,callback:function(t){a.$set(a.formData,"status",t)},expression:"formData.status"}})],1),a._v(" "),e("fox-form-item",[e("fox-button",{attrs:{type:"primary"},on:{click:a.handleSubmit}},[a._v("提交")]),a._v(" "),e("fox-button",[a._v("重置")])],1)],1)],1)])}),[],!1,null,"79aebaea",null);t.default=s.exports}}]);