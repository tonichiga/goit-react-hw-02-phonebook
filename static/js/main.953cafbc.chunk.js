(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={addButton:"ButtonAddContact_addButton__MI9Bn"}},11:function(t,e,n){t.exports={list:"VisibileContacts_list__3qGLN"}},17:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(9),o=n.n(r),i=(n(17),n(12)),s=n(2),u=n(3),l=n(5),b=n(4),d=n(8),h=n(10),m=n.n(h),j=n(0),p=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n,a=e.target,c=a.name,r=a.number,o=a.value;t.setState((n={},Object(d.a)(n,c,o),Object(d.a)(n,r,o),n))},t.reset=function(){t.setState({name:"",number:""})},t.hanldesubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("form",{onSubmit:this.hanldesubmit,children:[Object(j.jsx)("p",{children:"Name"}),Object(j.jsx)("input",{type:"text",onChange:this.handleChange,value:this.state.name,name:"name"}),Object(j.jsx)("p",{children:"Number"}),Object(j.jsx)("input",{type:"number",onChange:this.handleChange,value:this.state.number,name:"number"}),Object(j.jsx)("button",{type:"submit",className:m.a.addButton,children:"Add contact"})]})}}]),n}(a.Component),f=n(6),O=n.n(f),C=function(t){var e=t.name,n=t.number,a=t.deleteContact,c=t.id;return Object(j.jsxs)("li",{className:O.a.contactElement,children:[Object(j.jsxs)("div",{className:O.a.contactWrapper,children:[Object(j.jsx)("p",{className:O.a.contactName,children:e}),Object(j.jsx)("p",{children:n})]}),Object(j.jsx)("button",{className:O.a.contactButton,onClick:function(){return a(c)},children:"Delete"})]})},x=n(11),v=n.n(x),g=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={filter:""},t.findContact=function(){return t.props.contacts.filter((function(e){return e.name===t.state.filter}))},t.handleContactFinder=function(e){t.setState({filter:e.target.value})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this,e=this.findContact();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)("p",{children:"Find contact"}),Object(j.jsx)("input",{type:"text",placeholder:"enter name",onChange:this.handleContactFinder,value:this.state.filter}),Object(j.jsx)("p",{children:e.map((function(t){return t.name}))}),Object(j.jsx)("ul",{className:v.a.list,children:this.props.data.map((function(e){return Object(j.jsx)(C,{name:e.name,number:e.number,deleteContact:t.props.delete,id:e.id},e.id)}))})]})}}]),n}(a.Component),_=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.formSubmitHandler=function(e){var n={name:e.name,number:e.number,id:Date.now()};if(t.state.contacts.find((function(t){return t.name===n.name})))return alert("\u0442\u0430\u043a\u043e\u0439 \u043a\u043e\u043d\u0442\u0430\u043a\u0442 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442");t.setState((function(t){return{contacts:[n].concat(Object(i.a)(t.contacts))}}))},t.deleteContact=function(e){console.log(e),t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state.contacts;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h2",{children:"Phonebook"}),Object(j.jsx)(p,{onSubmit:this.formSubmitHandler}),Object(j.jsx)(g,{data:t,contacts:this.state.contacts,delete:this.deleteContact})]})}}]),n}(a.Component),y=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),r(t),o(t)}))};o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(_,{})}),document.getElementById("root")),y()},6:function(t,e,n){t.exports={contactElement:"VisibileContactsComponent_contactElement__3t52t",contactName:"VisibileContactsComponent_contactName__2Gi27",contactButton:"VisibileContactsComponent_contactButton__1iX-1",contactWrapper:"VisibileContactsComponent_contactWrapper__3vr-x"}}},[[19,1,2]]]);
//# sourceMappingURL=main.953cafbc.chunk.js.map