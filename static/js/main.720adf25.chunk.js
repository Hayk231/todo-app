(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{173:function(t,e,c){"use strict";c.r(e);var n=c(1),o=c(3),a=c.n(o),s=c(31),r=c(24),i=(c(57),c(11)),d=c(56),u=c.n(d),b=c(82),j=c(17),l=c.n(j),O=c(2),f=function(t){var e=Object(i.b)(),c=t.todo;return Object(O.jsxs)("div",{className:"todo_single_cont",children:[Object(O.jsxs)("div",{style:{backgroundColor:c.color},className:"todo_single",children:[Object(O.jsx)("div",{children:c.title}),Object(O.jsx)("div",{children:c.description})]},c._id),Object(O.jsxs)("div",{className:"todo_single_buttons",children:[Object(O.jsx)("button",{onClick:function(){return t.setEditData(c)},children:"Edit"}),Object(O.jsx)("button",{onClick:function(){return e((t=c._id,function(e){l.a.delete("https://todo.eachbase.com/api/HaykHovsepyan/todos/".concat(t)).then((function(){return e({type:"DELETE_TODO",id:t})}))}));var t},children:"Delete"})]})]})},h=(c(66),function(){return Object(O.jsx)("div",{className:"loader",children:Object(O.jsxs)("div",{className:"sk-cube-grid",children:[Object(O.jsx)("div",{className:"sk-cube sk-cube1"}),Object(O.jsx)("div",{className:"sk-cube sk-cube2"}),Object(O.jsx)("div",{className:"sk-cube sk-cube3"}),Object(O.jsx)("div",{className:"sk-cube sk-cube4"}),Object(O.jsx)("div",{className:"sk-cube sk-cube5"}),Object(O.jsx)("div",{className:"sk-cube sk-cube6"}),Object(O.jsx)("div",{className:"sk-cube sk-cube7"}),Object(O.jsx)("div",{className:"sk-cube sk-cube8"}),Object(O.jsx)("div",{className:"sk-cube sk-cube9"})]})})}),p=c(83),v=c.n(p),m=(c(171),function(t){var e=Object(i.b)(),c=Object(i.c)((function(t){return t.todos})),o=Object(n.useState)(""),a=Object(r.a)(o,2),s=a[0],d=a[1],u=Object(n.useState)(""),b=Object(r.a)(u,2),j=b[0],f=b[1],h=Object(n.useState)("#ff9146"),p=Object(r.a)(h,2),m=p[0],x=p[1],_=t.editData,k=t.resetEditData;Object(n.useEffect)((function(){_&&D(_)}),[_]);var D=function(t){d(t.title),f(t.description),x(t.color)},E=function(){d(""),f(""),x("#ff9146"),k("")};return Object(O.jsxs)("div",{className:"action_container",children:[Object(O.jsx)("button",{onClick:function(){return e(function(t){return function(e){e({type:"CLEAR_TODOS"}),t&&t.length&&l.a.all(t.map((function(t){return l.a.delete("https://todo.eachbase.com/api/HaykHovsepyan/todos/".concat(t._id))})))}}(c))},className:"delete_all_button",disabled:!!_,children:"Delete All"}),Object(O.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),s){var c,n,o={title:s,description:j,color:m};e(_?(c=o,n=_._id,function(t){l.a.patch("https://todo.eachbase.com/api/HaykHovsepyan/todos/".concat(n),c).then((function(e){return t({type:"EDIT_TODO",data:e.data})}))}):function(t){return function(e){l.a.post("https://todo.eachbase.com/api/HaykHovsepyan/todos",t).then((function(t){return e({type:"ADD_TODO",todo:t.data})}))}}(o)),E()}else alert("Empty title")},id:"add_form",children:[Object(O.jsx)("div",{className:"add_form_header",children:_?"Edit Todo":"Add Todo"}),Object(O.jsx)("input",{type:"text",placeholder:"Title*",value:s,onChange:function(t){return d(t.target.value)}}),Object(O.jsx)("textarea",{placeholder:"Description",value:j,form:"add_form",onChange:function(t){return f(t.target.value)}}),Object(O.jsxs)("div",{className:"add_form_color_cont",children:["Color: ",Object(O.jsx)(v.a,{color:m,onChange:function(t){return x(t.color)},placement:"topRight"})]}),Object(O.jsxs)("div",{className:"add_form_action_buttons",children:[Object(O.jsx)("button",{type:"submit",children:_?"Edit":"Add"}),_&&Object(O.jsx)("button",{type:"button",onClick:E,children:"Cancel"})]})]})]})}),x=function(){var t=Object(i.b)(),e=Object(i.c)((function(t){return t})),c=e.todos,o=e.showLoader,a=Object(n.useState)(""),d=Object(r.a)(a,2),j=d[0],p=d[1];Object(n.useEffect)((function(){t(function(){var t=Object(b.a)(u.a.mark((function t(e){var c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.get("https://todo.eachbase.com/api/HaykHovsepyan/todos").then((function(t){return t.data}));case 2:c=t.sent,e({type:"GET_TODOS",todos:c}),e({type:"HIDE_LOADER"});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[]);var v=function(t){window.scrollTo({top:0,behavior:"smooth"}),p(t)};return Object(O.jsx)("div",{className:"todo_container",children:o?Object(O.jsx)(h,{}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(m,{editData:j,resetEditData:p}),Object(O.jsx)("div",{className:"todo_list",children:Object(s.a)(c).reverse().map((function(t){return Object(O.jsx)(f,{todo:t,setEditData:v},t._id)}))})]})})},_=c(6),k={todos:[],showLoader:!0},D=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"HIDE_LOADER":return Object(_.a)(Object(_.a)({},t),{},{showLoader:!1});case"GET_TODOS":return Object(_.a)(Object(_.a)({},t),{},{todos:e.todos});case"ADD_TODO":return Object(_.a)(Object(_.a)({},t),{},{todos:[].concat(Object(s.a)(t.todos),[e.todo])});case"EDIT_TODO":var c=t.todos.findIndex((function(t){return t._id===e.data._id})),n=Object(s.a)(t.todos);return n[c]=e.data,Object(_.a)(Object(_.a)({},t),{},{todos:n});case"DELETE_TODO":var o=t.todos.filter((function(t){return t._id!==e.id}));return Object(_.a)(Object(_.a)({},t),{},{todos:o});case"CLEAR_TODOS":return Object(_.a)(Object(_.a)({},t),{},{todos:[]});default:return t}},E=c(30),y=c(89),N=Object(E.c)(D,Object(E.a)(y.a));a.a.render(Object(O.jsx)(i.a,{store:N,children:Object(O.jsx)(x,{})}),document.getElementById("root"))},57:function(t,e,c){},66:function(t,e,c){}},[[173,1,2]]]);
//# sourceMappingURL=main.720adf25.chunk.js.map