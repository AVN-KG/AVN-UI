var d=Object.defineProperty;var n=(e,a)=>d(e,"name",{value:a,configurable:!0});import{s as l}from"./styled-components.browser.esm.42759d77.js";import{j as c}from"./jsx-runtime.c65a79db.js";/* empty css              */import"./iframe.66c1ecdf.js";var i=(e=>(e.PRIMARY="primary",e.SUCCESS="success",e.WARNING="warning",e.DANGER="danger",e))(i||{});const t=n(({children:e,disabled:a,onClick:r,variant:p="primary",...o})=>c("button",{disabled:a,onClick:n(s=>{a||r&&r(s)},"handleClick"),...o,children:e}),"Button"),u=l(t)`
  background-color: var(
    --${e=>{var a;return e.disabled?"gray":(a=e.variant)!=null?a:"primary"}}
  );
  border-radius: 6px;
  border: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  color: var(
    ${e=>e.variant&&e.variant==="success"?"--dark":"--light"}
  );
  cursor: ${e=>e.disabled?"default":"pointer"};
  font-weight: 600;
  letter-spacing: 1px;
  opacity: ${e=>e.disabled?"0.6":"1"};
  outline: none;
  padding: 0.8rem;
  text-transform: uppercase;
  transition: 0.4s;

  &:not([disabled]):hover {
    opacity: 0.8;
  }

  &:active {
    box-shadow: none;
  }
`;try{t.displayName="Button",t.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"BUTTON_VARIANTS.PRIMARY"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"success"'},{value:'"warning"'},{value:'"danger"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/ButtonExemple/Button.tsx#Button"]={docgenInfo:t.__docgenInfo,name:"Button",path:"src/lib/ButtonExemple/Button.tsx#Button"})}catch{}const h={title:"Design System/Button",component:u},S={args:{children:"primary"}},x={args:{children:"disabled",disabled:!0}},_={args:{children:"success",variant:i.SUCCESS}},C={args:{children:"click me",onClick:()=>alert("button clicked")}},B=["Default","Disabled","SuccessVariant","WithClickHandler"];export{S as Default,x as Disabled,_ as SuccessVariant,C as WithClickHandler,B as __namedExportsOrder,h as default};
//# sourceMappingURL=Button.stories.7eebafc2.js.map
