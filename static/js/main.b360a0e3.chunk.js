(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n(2),s=n.n(i),o=n(10),c=n.n(o),d=(n(17),n(8)),r=n(11),h=n(4),u=n(5),l=n(1),b=n(7),j=n(6),O=n(3),v=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(h.a)(this,n),(a=e.call(this,t)).state={isEditing:!1,task:a.props.task},a.handleRemove=a.handleRemove.bind(Object(l.a)(a)),a.toggleForm=a.toggleForm.bind(Object(l.a)(a)),a.handleUpdate=a.handleUpdate.bind(Object(l.a)(a)),a.handleChange=a.handleChange.bind(Object(l.a)(a)),a}return Object(u.a)(n,[{key:"handleUpdate",value:function(t){t.preventDefault(),this.props.updateTodo(this.props.id,this.state.task),this.toggleForm()}},{key:"handleChange",value:function(t){this.setState(Object(O.a)({},t.target.name,t.target.value))}},{key:"toggleForm",value:function(){this.setState({isEditing:!this.state.isEditing})}},{key:"handleRemove",value:function(){this.props.removeTodo(this.props.id)}},{key:"render",value:function(){return this.state.isEditing?Object(a.jsx)("div",{children:Object(a.jsxs)("form",{onSubmit:this.handleUpdate,children:[Object(a.jsx)("input",{type:"text",value:this.state.task,name:"task",onChange:this.handleChange}),Object(a.jsx)("button",{children:"Save"})]})}):Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{onClick:this.toggleForm,children:"Edit"}),Object(a.jsx)("button",{onClick:this.handleRemove,children:"X"}),Object(a.jsx)("li",{children:this.props.task})]})}}]),n}(i.Component),p=n(21),m=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(h.a)(this,n),(a=e.call(this,t)).state={task:""},a.handleChange=a.handleChange.bind(Object(l.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(l.a)(a)),a}return Object(u.a)(n,[{key:"handleChange",value:function(t){this.setState(Object(O.a)({},t.target.name,t.target.value))}},{key:"handleSubmit",value:function(t){t.preventDefault(),this.props.createTodo(Object(d.a)(Object(d.a)({},this.state),{},{id:Object(p.a)()})),this.setState({task:""})}},{key:"render",value:function(){return Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsx)("label",{htmlFor:"task",children:"New Todo"}),Object(a.jsx)("input",{type:"text",placeholder:"New Todo",id:"task",name:"task",value:this.state.task,onChange:this.handleChange}),Object(a.jsx)("button",{children:"Add Todo"})]})}}]),n}(i.Component),g=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(h.a)(this,n),(a=e.call(this,t)).state={todos:[]},a.create=a.create.bind(Object(l.a)(a)),a.remove=a.remove.bind(Object(l.a)(a)),a.update=a.update.bind(Object(l.a)(a)),a}return Object(u.a)(n,[{key:"create",value:function(t){this.setState({todos:[].concat(Object(r.a)(this.state.todos),[t])})}},{key:"update",value:function(t,e){var n=this.state.todos.map((function(n){return n.id===t?Object(d.a)(Object(d.a)({},n),{},{task:e}):n}));this.setState({todos:n})}},{key:"remove",value:function(t){this.setState({todos:this.state.todos.filter((function(e){return e.id!==t}))})}},{key:"render",value:function(){var t=this,e=this.state.todos.map((function(e){return Object(a.jsx)(v,{id:e.id,task:e.task,removeTodo:t.remove,updateTodo:t.update},e.id)}));return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"ToDo List!"}),Object(a.jsx)(m,{createTodo:this.create}),e]})}}]),n}(i.Component);n(18);var f=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(g,{})})},k=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,s=e.getLCP,o=e.getTTFB;n(t),a(t),i(t),s(t),o(t)}))};c.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(f,{})}),document.getElementById("root")),k()}},[[19,1,2]]]);
//# sourceMappingURL=main.b360a0e3.chunk.js.map