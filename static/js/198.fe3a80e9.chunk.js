"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[198],{5198:function(t,e,n){n.r(e),n.d(e,{default:function(){return p}});var r=n(2791),a=n(4420),o={contactList:"ContactList_contactList__+SpO1",contactItem:"ContactList_contactItem__1JJfT",buttonDelete:"ContactList_buttonDelete__yxrLW"},c=n(6052),s=function(t){return t.contacts.contacts},i=function(t){return t.filters.filter},u=n(184),l=function(){var t=(0,a.v9)(s),e=(0,a.v9)(i).toLowerCase(),n=(0,a.I0)(),r=t.filter((function(t){return t.name.toLowerCase().includes(e)}));return(0,u.jsxs)("div",{className:o.containerList,children:[!(null!==r&&void 0!==r&&r.length)&&(0,u.jsx)("p",{children:"There are no contacts in your phonebook. Please add your first contact!"}),(0,u.jsx)("ul",{className:o.contactList,children:r.map((function(t){return(0,u.jsxs)("li",{className:o.contactItem,children:[t.name,": ",t.number,(0,u.jsx)("button",{id:t.id,className:o.buttonDelete,type:"button",onClick:function(){return n((0,c.GK)(t.id))},children:"Delete"})]},t.id)}))})]})},m=n(3829);var f=function(){var t=(0,a.I0)(),e=(0,a.v9)(s);return(0,u.jsxs)("form",{className:m.Z.form,onSubmit:function(n){n.preventDefault();var r=n.target,a=r.name.value,o=r.number.value;if(e.find((function(t){return t.name.toLowerCase()===a.toLowerCase()})))return alert("".concat(a," is alredy in contacts."));t((0,c.uK)({name:a,number:o})),r.reset()},children:[(0,u.jsxs)("label",{className:m.Z.formLabel,children:["Name",(0,u.jsx)("input",{className:m.Z.formInput,type:"text",name:"name",required:!0})]}),(0,u.jsxs)("label",{className:m.Z.formLabel,children:["Number",(0,u.jsx)("input",{className:m.Z.formInput,type:"tel",name:"number",required:!0})]}),(0,u.jsx)("button",{className:m.Z.formButton,type:"submit",children:"Add contact"})]})},_="Filter_titleFilter__1lF8u",d="Filter_inputFilter__bTq6I",b=n(4808),h=function(){var t=(0,a.I0)();return(0,u.jsxs)("label",{className:_,children:["Find contacts by name",(0,u.jsx)("input",{className:d,type:"text",name:"filter",onChange:function(e){t((0,b.l)(e.target.value))}})]})};function p(){var t=(0,a.I0)(),e=(0,a.v9)((function(t){return t.contacts.isLoading}));return(0,r.useEffect)((function(){t((0,c.yF)())}),[t]),(0,u.jsxs)("div",{children:[(0,u.jsx)("h1",{children:"Your contacts"}),(0,u.jsx)(f,{}),(0,u.jsx)("h2",{children:"Contacts"}),(0,u.jsx)(h,{}),e&&"Request in progress...",(0,u.jsx)(l,{})]})}},3829:function(t,e){e.Z={form:"ContactForm_form__ttXmo",formLabel:"ContactForm_formLabel__ZcPlW",formButton:"ContactForm_formButton__W7F-0",formInput:"ContactForm_formInput__WxPOM",containerForm:"ContactForm_containerForm__Rz99O"}}}]);
//# sourceMappingURL=198.fe3a80e9.chunk.js.map