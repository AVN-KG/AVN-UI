var Z=Object.defineProperty;var a=(e,t)=>Z(e,"name",{value:t,configurable:!0});import{s as o}from"./styled-components.browser.esm.42759d77.js";import{j as n,a as l,r as u}from"./jsx-runtime.c65a79db.js";import{d as r,A as F}from"./AppLogo.3641552c.js";/* empty css              */import"./iframe.66c1ecdf.js";const _=a(({...e})=>n("div",{...e,onClick:e.onClick,children:e.children}),"Flex"),s=o(_)`
  display: flex;
  flex-direction: ${e=>e.direction||"row"};
  align-items: ${e=>e.align||"stretch"};
  justify-content: ${e=>e.justify||"stretch"};
  margin: ${e=>e.margin||"0"};
  padding: ${e=>e.padding||"0"};
  gap: ${e=>e.gap||"0"};
  width: ${e=>e.width||"auto"};
  cursor: ${e=>e.cursor||"auto"};
`;try{_.displayName="Flex",_.__docgenInfo={description:"",displayName:"Flex",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"string"}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"string"}},justify:{defaultValue:null,description:"",name:"justify",required:!1,type:{name:"string"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"string"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"string"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},cursor:{defaultValue:null,description:"",name:"cursor",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/global-components/Flex.tsx#Flex"]={docgenInfo:_.__docgenInfo,name:"Flex",path:"src/global-components/Flex.tsx#Flex"})}catch{}const K=o.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  color: var(--black);

  @media ${e=>{var t,i;return((i=(t=e==null?void 0:e.theme)==null?void 0:t.media)==null?void 0:i.phone)||r.media.phone}} {
    font-size: 14px;
  }
`;function y(e){return l(s,{gap:"20px",align:"center",children:[n(F,{...e}),n(K,{children:e==null?void 0:e.app_name})]})}a(y,"AppTitle");try{y.displayName="AppTitle",y.__docgenInfo={description:"",displayName:"AppTitle",props:{app_name:{defaultValue:null,description:"",name:"app_name",required:!0,type:{name:"string"}},auto_media:{defaultValue:null,description:"",name:"auto_media",required:!1,type:{name:"boolean"}},app_logo:{defaultValue:null,description:"",name:"app_logo",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},logo_path:{defaultValue:null,description:"",name:"logo_path",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/AppTitle/AppTitle.tsx#AppTitle"]={docgenInfo:y.__docgenInfo,name:"AppTitle",path:"src/lib/AppTitle/AppTitle.tsx#AppTitle"})}catch{}const Y=a(()=>n("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n("g",{style:{mixBlendMode:"darken"},children:n("path",{d:"M18 3C18.5523 3 19 3.44772 19 4C19 4.55228 18.5523 5 18 5V3ZM2 5C1.44772 5 1 4.55228 1 4C1 3.44772 1.44772 3 2 3V5ZM18 9.5C18.5523 9.5 19 9.94771 19 10.5C19 11.0523 18.5523 11.5 18 11.5V9.5ZM2 11.5C1.44772 11.5 1 11.0523 1 10.5C1 9.94771 1.44772 9.5 2 9.5V11.5ZM10 16C10.5523 16 11 16.4477 11 17C11 17.5523 10.5523 18 10 18V16ZM2 18C1.44772 18 1 17.5523 1 17C1 16.4477 1.44772 16 2 16V18ZM18 5H2V3H18V5ZM18 11.5H2V9.5H18V11.5ZM10 18H2V16H10V18Z",fill:"#64748B"})})}),"BurgerIcon"),R=a(()=>n("svg",{width:"15",height:"14",viewBox:"0 0 15 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.44194 10.3391C5.24098 10.1301 5.24749 9.79777 5.4565 9.59681L8.21292 7.00024L5.4565 4.40368C5.24749 4.20271 5.24098 3.87037 5.44194 3.66136C5.64291 3.45236 5.97526 3.44584 6.18426 3.64681L9.33426 6.62181C9.4372 6.72079 9.49538 6.85743 9.49538 7.00024C9.49538 7.14305 9.4372 7.2797 9.33426 7.37868L6.18426 10.3537C5.97526 10.5546 5.64291 10.5481 5.44194 10.3391Z",fill:"#2869FE"})}),"ChevronRightIcon"),g=a(({themeColor:e})=>n("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n("path",{d:"M0.935515 2.4141L3.52552 5.0041C3.91552 5.3941 4.54552 5.3941 4.93552 5.0041L7.52552 2.4141C8.15552 1.7841 7.70551 0.704102 6.81552 0.704102H1.63552C0.745515 0.704102 0.305515 1.7841 0.935515 2.4141Z",fill:e||"#64748B"})}),"ArrowDownIcon"),x=a(({menuIconColor:e})=>e?l("svg",{width:"17",height:"18",viewBox:"0 0 17 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n("path",{d:"M0 1.50024C0 0.947959 0.447715 0.500244 1 0.500244H3.43478C3.98707 0.500244 4.43478 0.947959 4.43478 1.50024V3.93503C4.43478 4.48731 3.98707 4.93503 3.43478 4.93503H1C0.447715 4.93503 0 4.48731 0 3.93503V1.50024Z",fill:e}),n("path",{d:"M0 7.78285C0 7.23057 0.447715 6.78285 1 6.78285H3.43478C3.98707 6.78285 4.43478 7.23057 4.43478 7.78285V10.2176C4.43478 10.7699 3.98707 11.2176 3.43478 11.2176H1C0.447715 11.2176 0 10.7699 0 10.2176V7.78285Z",fill:e}),n("path",{d:"M0 14.0655C0 13.5132 0.447715 13.0655 1 13.0655H3.43478C3.98707 13.0655 4.43478 13.5132 4.43478 14.0655V16.5002C4.43478 17.0525 3.98707 17.5002 3.43478 17.5002H1C0.447715 17.5002 0 17.0525 0 16.5002V14.0655Z",fill:e}),n("path",{d:"M6.28261 1.50024C6.28261 0.947959 6.73032 0.500244 7.28261 0.500244H9.71739C10.2697 0.500244 10.7174 0.947959 10.7174 1.50024V3.93503C10.7174 4.48731 10.2697 4.93503 9.71739 4.93503H7.28261C6.73032 4.93503 6.28261 4.48731 6.28261 3.93503V1.50024Z",fill:e}),n("path",{d:"M6.28261 7.78285C6.28261 7.23057 6.73032 6.78285 7.28261 6.78285H9.71739C10.2697 6.78285 10.7174 7.23057 10.7174 7.78285V10.2176C10.7174 10.7699 10.2697 11.2176 9.71739 11.2176H7.28261C6.73032 11.2176 6.28261 10.7699 6.28261 10.2176V7.78285Z",fill:e}),n("path",{d:"M6.28261 14.0655C6.28261 13.5132 6.73032 13.0655 7.28261 13.0655H9.71739C10.2697 13.0655 10.7174 13.5132 10.7174 14.0655V16.5002C10.7174 17.0525 10.2697 17.5002 9.71739 17.5002H7.28261C6.73032 17.5002 6.28261 17.0525 6.28261 16.5002V14.0655Z",fill:e}),n("path",{d:"M12.5652 1.50024C12.5652 0.947959 13.0129 0.500244 13.5652 0.500244H16C16.5523 0.500244 17 0.947959 17 1.50024V3.93503C17 4.48731 16.5523 4.93503 16 4.93503H13.5652C13.0129 4.93503 12.5652 4.48731 12.5652 3.93503V1.50024Z",fill:e}),n("path",{d:"M12.5652 7.78285C12.5652 7.23057 13.0129 6.78285 13.5652 6.78285H16C16.5523 6.78285 17 7.23057 17 7.78285V10.2176C17 10.7699 16.5523 11.2176 16 11.2176H13.5652C13.0129 11.2176 12.5652 10.7699 12.5652 10.2176V7.78285Z",fill:e}),n("path",{d:"M12.5652 14.0655C12.5652 13.5132 13.0129 13.0655 13.5652 13.0655H16C16.5523 13.0655 17 13.5132 17 14.0655V16.5002C17 17.0525 16.5523 17.5002 16 17.5002H13.5652C13.0129 17.5002 12.5652 17.0525 12.5652 16.5002V14.0655Z",fill:e})]}):l("svg",{width:"17",height:"18",viewBox:"0 0 17 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n("path",{d:"M0 1.50024C0 0.947959 0.447715 0.500244 1 0.500244H3.43478C3.98707 0.500244 4.43478 0.947959 4.43478 1.50024V3.93503C4.43478 4.48731 3.98707 4.93503 3.43478 4.93503H1C0.447715 4.93503 0 4.48731 0 3.93503V1.50024Z",fill:"#64748B"}),n("path",{d:"M0 7.78285C0 7.23057 0.447715 6.78285 1 6.78285H3.43478C3.98707 6.78285 4.43478 7.23057 4.43478 7.78285V10.2176C4.43478 10.7699 3.98707 11.2176 3.43478 11.2176H1C0.447715 11.2176 0 10.7699 0 10.2176V7.78285Z",fill:"#64748B"}),n("path",{d:"M0 14.0655C0 13.5132 0.447715 13.0655 1 13.0655H3.43478C3.98707 13.0655 4.43478 13.5132 4.43478 14.0655V16.5002C4.43478 17.0525 3.98707 17.5002 3.43478 17.5002H1C0.447715 17.5002 0 17.0525 0 16.5002V14.0655Z",fill:"#64748B"}),n("path",{d:"M6.28261 1.50024C6.28261 0.947959 6.73032 0.500244 7.28261 0.500244H9.71739C10.2697 0.500244 10.7174 0.947959 10.7174 1.50024V3.93503C10.7174 4.48731 10.2697 4.93503 9.71739 4.93503H7.28261C6.73032 4.93503 6.28261 4.48731 6.28261 3.93503V1.50024Z",fill:"#64748B"}),n("path",{d:"M6.28261 7.78285C6.28261 7.23057 6.73032 6.78285 7.28261 6.78285H9.71739C10.2697 6.78285 10.7174 7.23057 10.7174 7.78285V10.2176C10.7174 10.7699 10.2697 11.2176 9.71739 11.2176H7.28261C6.73032 11.2176 6.28261 10.7699 6.28261 10.2176V7.78285Z",fill:"#64748B"}),n("path",{d:"M6.28261 14.0655C6.28261 13.5132 6.73032 13.0655 7.28261 13.0655H9.71739C10.2697 13.0655 10.7174 13.5132 10.7174 14.0655V16.5002C10.7174 17.0525 10.2697 17.5002 9.71739 17.5002H7.28261C6.73032 17.5002 6.28261 17.0525 6.28261 16.5002V14.0655Z",fill:"#64748B"}),n("path",{d:"M12.5652 1.50024C12.5652 0.947959 13.0129 0.500244 13.5652 0.500244H16C16.5523 0.500244 17 0.947959 17 1.50024V3.93503C17 4.48731 16.5523 4.93503 16 4.93503H13.5652C13.0129 4.93503 12.5652 4.48731 12.5652 3.93503V1.50024Z",fill:"#64748B"}),n("path",{d:"M12.5652 7.78285C12.5652 7.23057 13.0129 6.78285 13.5652 6.78285H16C16.5523 6.78285 17 7.23057 17 7.78285V10.2176C17 10.7699 16.5523 11.2176 16 11.2176H13.5652C13.0129 11.2176 12.5652 10.7699 12.5652 10.2176V7.78285Z",fill:"#64748B"}),n("path",{d:"M12.5652 14.0655C12.5652 13.5132 13.0129 13.0655 13.5652 13.0655H16C16.5523 13.0655 17 13.5132 17 14.0655V16.5002C17 17.0525 16.5523 17.5002 16 17.5002H13.5652C13.0129 17.5002 12.5652 17.0525 12.5652 16.5002V14.0655Z",fill:"#64748B"})]}),"AppsMenuIcon"),j=a(()=>n("svg",{width:"31",height:"30",viewBox:"0 0 31 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.25 7.5C4.25 5.42893 5.92893 3.75 8 3.75H10.8125C12.8836 3.75 14.5625 5.42893 14.5625 7.5V10.3125C14.5625 12.3836 12.8836 14.0625 10.8125 14.0625H8C5.92893 14.0625 4.25 12.3836 4.25 10.3125V7.5ZM16.4375 7.5C16.4375 5.42893 18.1164 3.75 20.1875 3.75H23C25.0711 3.75 26.75 5.42893 26.75 7.5V10.3125C26.75 12.3836 25.0711 14.0625 23 14.0625H20.1875C18.1164 14.0625 16.4375 12.3836 16.4375 10.3125V7.5ZM4.25 19.6875C4.25 17.6164 5.92893 15.9375 8 15.9375H10.8125C12.8836 15.9375 14.5625 17.6164 14.5625 19.6875V22.5C14.5625 24.5711 12.8836 26.25 10.8125 26.25H8C5.92893 26.25 4.25 24.5711 4.25 22.5V19.6875ZM16.4375 19.6875C16.4375 17.6164 18.1164 15.9375 20.1875 15.9375H23C25.0711 15.9375 26.75 17.6164 26.75 19.6875V22.5C26.75 24.5711 25.0711 26.25 23 26.25H20.1875C18.1164 26.25 16.4375 24.5711 16.4375 22.5V19.6875Z",fill:"#64748B"})}),"App2x2Icon"),V=a(({color:e})=>l("svg",{width:"23",height:"22",viewBox:"0 0 23 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.9998 7.03601C14.9998 9.26537 13.1196 11.0723 10.7998 11.0723C8.48 11.0723 6.5998 9.26537 6.5998 7.03601C6.5998 4.80665 8.48 2.99976 10.7998 2.99976C13.1196 2.99976 14.9998 4.80665 14.9998 7.03601Z",stroke:e?`${e}`:"#2869FE",strokeWidth:"1.5",strokeLinecap:"square"}),n("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.7998 19.9998H3.7998C3.7998 19.0438 3.7998 18.1344 3.7998 17.3109C3.7998 15.0803 5.68021 13.2727 7.9998 13.2727H13.5998C15.9194 13.2727 17.7998 15.0803 17.7998 17.3109C17.7998 18.1344 17.7998 19.0438 17.7998 19.9998Z",stroke:e?`${e}`:"#2869FE",strokeWidth:"1.5",strokeLinecap:"square"})]}),"UserIcon"),I=a(({unlock:e,color:t,func:i})=>e?n("svg",{width:"21",height:"20",viewBox:"0 0 21 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",onClick:()=>{i()},style:{cursor:"pointer"},children:n("path",{d:"M6.96449 8.8311V5.32461C6.96449 3.38803 8.59254 1.81812 10.6009 1.81812C12.6092 1.81812 14.2372 3.38803 14.2372 5.32461V5.90902M4.54025 8.8311H16.6615C17.3309 8.8311 17.8736 9.35441 17.8736 9.99993V17.0129C17.8736 17.6584 17.3309 18.1818 16.6615 18.1818H4.54025C3.87081 18.1818 3.32812 17.6584 3.32812 17.0129V9.99993C3.32812 9.35441 3.87081 8.8311 4.54025 8.8311Z",stroke:t?`${t}`:"#2869FE",strokeWidth:"1.5"})}):n("svg",{width:"21",height:"20",viewBox:"0 0 21 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",onClick:()=>{i()},style:{cursor:"pointer"},children:n("path",{d:"M6.76429 8.8311V5.32461C6.76429 3.38803 8.39235 1.81812 10.4007 1.81812C12.409 1.81812 14.037 3.38803 14.037 5.32461V8.8311M4.34005 8.8311H16.4613C17.1307 8.8311 17.6734 9.35441 17.6734 9.99993V17.0129C17.6734 17.6584 17.1307 18.1818 16.4613 18.1818H4.34005C3.67061 18.1818 3.12793 17.6584 3.12793 17.0129V9.99993C3.12793 9.35441 3.67061 8.8311 4.34005 8.8311Z",stroke:t?`${t}`:"#2869FE",strokeWidth:"1.5"})}),"LockIcon"),A=a(({color:e})=>n("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n("path",{d:"M6.75 0.75C6.75 0.335786 6.41421 0 6 0C5.58579 0 5.25 0.335786 5.25 0.75V5.25H0.75C0.335786 5.25 0 5.58579 0 6C0 6.41421 0.335786 6.75 0.75 6.75L5.25 6.75V11.25C5.25 11.6642 5.58579 12 6 12C6.41421 12 6.75 11.6642 6.75 11.25V6.75L11.25 6.75C11.6642 6.75 12 6.41421 12 6C12 5.58579 11.6642 5.25 11.25 5.25H6.75V0.75Z",fill:e||"white"})}),"PlusIcon"),k=a(({color:e})=>l("svg",{width:"21",height:"20",viewBox:"0 0 21 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n("path",{d:"M18.5339 10.0001C18.5339 14.6001 14.8005 18.3334 10.2005 18.3334C5.60052 18.3334 1.86719 14.6001 1.86719 10.0001C1.86719 5.40008 5.60052 1.66675 10.2005 1.66675C14.8005 1.66675 18.5339 5.40008 18.5339 10.0001Z",stroke:"#2869FE",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),n("path",{d:"M13.2916 12.65L10.7083 11.1083C10.2583 10.8416 9.8916 10.2 9.8916 9.67497V6.2583",stroke:"#2869FE",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),"ClockIcon"),L=a(({color:e})=>n("svg",{width:"21",height:"20",viewBox:"0 0 21 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n("path",{d:"M5.74186 1V7.03448M15.1863 1V7.03448M5.15158 10.0517H8.69325M15.7766 10.0517H12.2349M5.15158 13.6724H8.69325M12.2349 13.6724H15.7766M3.38075 4.01724H17.5474C18.1994 4.01724 18.728 4.55759 18.728 5.22414V17.2931C18.728 17.9597 18.1994 18.5 17.5474 18.5H3.38075C2.72875 18.5 2.2002 17.9597 2.2002 17.2931V5.22414C2.2002 4.55759 2.72875 4.01724 3.38075 4.01724Z",stroke:"#2869FE",strokeWidth:"1.5"})}),"CalendarIcon"),b=a(({color:e})=>l("svg",{width:"21",height:"20",viewBox:"0 0 21 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n("path",{d:"M9.78385 17.5001C14.1561 17.5001 17.7005 13.9557 17.7005 9.58341C17.7005 5.21116 14.1561 1.66675 9.78385 1.66675C5.4116 1.66675 1.86719 5.21116 1.86719 9.58341C1.86719 13.9557 5.4116 17.5001 9.78385 17.5001Z",stroke:"#2869FE",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),n("path",{d:"M18.5339 18.3334L16.8672 16.6667",stroke:"#2869FE",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),"SearchIcon"),T=a(({color:e="var(--blue_gray)"})=>n("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.83922 1.80413C7.9327 1.3367 8.34312 1.00024 8.8198 1.00024H11.1802C11.6569 1.00024 12.0673 1.3367 12.1608 1.80413L12.4913 3.45654C13.1956 3.72483 13.8454 4.10356 14.4196 4.57157L16.0179 4.03089C16.4694 3.87814 16.966 4.06534 17.2043 4.47816L18.3845 6.52232C18.6229 6.93513 18.5367 7.45879 18.1786 7.77347L16.9119 8.8867C16.9699 9.24934 17 9.62127 17 10.0002C17 10.3792 16.9699 10.7511 16.9119 11.1138L18.1786 12.227C18.5367 12.5417 18.6229 13.0653 18.3845 13.4782L17.2043 15.5223C16.966 15.9351 16.4694 16.1223 16.0179 15.9696L14.4196 15.4289C13.8454 15.8969 13.1956 16.2757 12.4913 16.544L12.1608 18.1964C12.0673 18.6638 11.6569 19.0002 11.1802 19.0002H8.8198C8.34312 19.0002 7.9327 18.6638 7.83922 18.1964L7.50874 16.544C6.80442 16.2757 6.1546 15.8969 5.58042 15.4289L3.98213 15.9696C3.53059 16.1223 3.034 15.9351 2.79566 15.5223L1.61546 13.4782C1.37712 13.0654 1.4633 12.5417 1.82136 12.227L3.08808 11.1138C3.03011 10.7512 2.99999 10.3792 2.99999 10.0002C2.99999 9.62128 3.03011 9.24935 3.08808 8.88671L1.82136 7.77348C1.4633 7.45881 1.37712 6.93515 1.61546 6.52233L2.79566 4.47817C3.034 4.06535 3.53059 3.87815 3.98213 4.03091L5.58041 4.57158C6.15459 4.10357 6.80442 3.72483 7.50874 3.45654L7.83922 1.80413ZM9.99999 13.0002C11.6568 13.0002 13 11.6571 13 10.0002C13 8.34339 11.6568 7.00024 9.99999 7.00024C8.34314 7.00024 6.99999 8.34339 6.99999 10.0002C6.99999 11.6571 8.34314 13.0002 9.99999 13.0002Z",fill:e})}),"SettingsIcon"),O=a(({color:e="var(--blue_gray)"})=>n("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.45519 2.00431C7.68518 2.18801 7.78646 2.48927 7.71414 2.7746C7.57443 3.32583 7.5 3.90385 7.5 4.50032C7.5 8.36632 10.634 11.5003 14.5 11.5003C15.6435 11.5003 16.721 11.2267 17.6724 10.742C17.9347 10.6084 18.2509 10.6406 18.4809 10.8243C18.7109 11.008 18.8122 11.3092 18.7399 11.5946C17.8069 15.2759 14.4725 18.0003 10.5 18.0003C5.80558 18.0003 2 14.1947 2 9.50032C2 6.19176 3.89048 3.32604 6.64671 1.92205C6.909 1.78844 7.22519 1.82062 7.45519 2.00431Z",fill:e})}),"MoonIcon"),E=a(({color:e="var(--blue_gray)"})=>l("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n("path",{d:"M3.77583 17.9836L16.2057 17.9982C17.185 17.9993 17.9824 17.2038 17.9835 16.2245L17.9871 13.1731C17.9874 12.897 17.7638 12.6729 17.4877 12.6726L16.712 12.6716C16.4358 12.6713 16.2117 12.8949 16.2114 13.1711L16.2078 16.2225L3.77791 16.2079L3.79245 3.77802L16.2224 3.79256L16.2188 6.84396C16.2185 7.1201 16.4421 7.34422 16.7182 7.34454L17.4939 7.34545C17.77 7.34577 17.9942 7.12218 17.9945 6.84604L17.9981 3.79463C17.9992 2.81533 17.2037 2.018 16.2244 2.01686L3.79452 2.00232C2.81522 2.00118 2.01789 2.79665 2.01675 3.77594L2.00221 16.2059C2.00106 17.1852 2.79742 17.9825 3.77583 17.9836Z",fill:e}),n("path",{d:"M10.8926 7.49024C10.8931 7.07098 10.4084 6.83733 10.0807 7.09885L6.93887 9.60627C6.68844 9.80614 6.68799 10.1867 6.93796 10.3871L10.0739 12.9019C10.401 13.1642 10.8862 12.9317 10.8867 12.5124L10.8886 10.8883L17.4914 10.896C17.7675 10.8963 17.9917 10.6727 17.992 10.3966L17.9929 9.62089C17.9932 9.34475 17.7696 9.12063 17.4935 9.12031L10.8907 9.11259L10.8926 7.49024Z",fill:e})]}),"ExitIcon"),q=a(({iconType:e})=>{switch(e){case"mistake":return n("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n("path",{d:"M15 10.0002H5",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})});default:return n("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n("path",{d:"M4.16699 10.8335L7.50033 14.1668L15.8337 5.8335",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}},"CheckedIcon");try{g.displayName="ArrowDownIcon",g.__docgenInfo={description:"",displayName:"ArrowDownIcon",props:{unlock:{defaultValue:null,description:"",name:"unlock",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"var(--blue_gray)"},description:"",name:"color",required:!1,type:{name:"string"}},func:{defaultValue:null,description:"",name:"func",required:!1,type:{name:"Function"}},menuIconColor:{defaultValue:null,description:"",name:"menuIconColor",required:!1,type:{name:"string"}},themeColor:{defaultValue:null,description:"",name:"themeColor",required:!1,type:{name:"string"}},iconType:{defaultValue:null,description:"",name:"iconType",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/icons/icons.tsx#ArrowDownIcon"]={docgenInfo:g.__docgenInfo,name:"ArrowDownIcon",path:"src/lib/icons/icons.tsx#ArrowDownIcon"})}catch{}try{x.displayName="AppsMenuIcon",x.__docgenInfo={description:"",displayName:"AppsMenuIcon",props:{unlock:{defaultValue:null,description:"",name:"unlock",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"var(--blue_gray)"},description:"",name:"color",required:!1,type:{name:"string"}},func:{defaultValue:null,description:"",name:"func",required:!1,type:{name:"Function"}},menuIconColor:{defaultValue:null,description:"",name:"menuIconColor",required:!1,type:{name:"string"}},themeColor:{defaultValue:null,description:"",name:"themeColor",required:!1,type:{name:"string"}},iconType:{defaultValue:null,description:"",name:"iconType",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/icons/icons.tsx#AppsMenuIcon"]={docgenInfo:x.__docgenInfo,name:"AppsMenuIcon",path:"src/lib/icons/icons.tsx#AppsMenuIcon"})}catch{}try{V.displayName="UserIcon",V.__docgenInfo={description:"",displayName:"UserIcon",props:{unlock:{defaultValue:null,description:"",name:"unlock",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"var(--blue_gray)"},description:"",name:"color",required:!1,type:{name:"string"}},func:{defaultValue:null,description:"",name:"func",required:!1,type:{name:"Function"}},menuIconColor:{defaultValue:null,description:"",name:"menuIconColor",required:!1,type:{name:"string"}},themeColor:{defaultValue:null,description:"",name:"themeColor",required:!1,type:{name:"string"}},iconType:{defaultValue:null,description:"",name:"iconType",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/icons/icons.tsx#UserIcon"]={docgenInfo:V.__docgenInfo,name:"UserIcon",path:"src/lib/icons/icons.tsx#UserIcon"})}catch{}try{I.displayName="LockIcon",I.__docgenInfo={description:"",displayName:"LockIcon",props:{unlock:{defaultValue:null,description:"",name:"unlock",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"var(--blue_gray)"},description:"",name:"color",required:!1,type:{name:"string"}},func:{defaultValue:null,description:"",name:"func",required:!1,type:{name:"Function"}},menuIconColor:{defaultValue:null,description:"",name:"menuIconColor",required:!1,type:{name:"string"}},themeColor:{defaultValue:null,description:"",name:"themeColor",required:!1,type:{name:"string"}},iconType:{defaultValue:null,description:"",name:"iconType",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/icons/icons.tsx#LockIcon"]={docgenInfo:I.__docgenInfo,name:"LockIcon",path:"src/lib/icons/icons.tsx#LockIcon"})}catch{}try{A.displayName="PlusIcon",A.__docgenInfo={description:"",displayName:"PlusIcon",props:{unlock:{defaultValue:null,description:"",name:"unlock",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"var(--blue_gray)"},description:"",name:"color",required:!1,type:{name:"string"}},func:{defaultValue:null,description:"",name:"func",required:!1,type:{name:"Function"}},menuIconColor:{defaultValue:null,description:"",name:"menuIconColor",required:!1,type:{name:"string"}},themeColor:{defaultValue:null,description:"",name:"themeColor",required:!1,type:{name:"string"}},iconType:{defaultValue:null,description:"",name:"iconType",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/icons/icons.tsx#PlusIcon"]={docgenInfo:A.__docgenInfo,name:"PlusIcon",path:"src/lib/icons/icons.tsx#PlusIcon"})}catch{}try{k.displayName="ClockIcon",k.__docgenInfo={description:"",displayName:"ClockIcon",props:{unlock:{defaultValue:null,description:"",name:"unlock",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"var(--blue_gray)"},description:"",name:"color",required:!1,type:{name:"string"}},func:{defaultValue:null,description:"",name:"func",required:!1,type:{name:"Function"}},menuIconColor:{defaultValue:null,description:"",name:"menuIconColor",required:!1,type:{name:"string"}},themeColor:{defaultValue:null,description:"",name:"themeColor",required:!1,type:{name:"string"}},iconType:{defaultValue:null,description:"",name:"iconType",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/icons/icons.tsx#ClockIcon"]={docgenInfo:k.__docgenInfo,name:"ClockIcon",path:"src/lib/icons/icons.tsx#ClockIcon"})}catch{}try{L.displayName="CalendarIcon",L.__docgenInfo={description:"",displayName:"CalendarIcon",props:{unlock:{defaultValue:null,description:"",name:"unlock",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"var(--blue_gray)"},description:"",name:"color",required:!1,type:{name:"string"}},func:{defaultValue:null,description:"",name:"func",required:!1,type:{name:"Function"}},menuIconColor:{defaultValue:null,description:"",name:"menuIconColor",required:!1,type:{name:"string"}},themeColor:{defaultValue:null,description:"",name:"themeColor",required:!1,type:{name:"string"}},iconType:{defaultValue:null,description:"",name:"iconType",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/icons/icons.tsx#CalendarIcon"]={docgenInfo:L.__docgenInfo,name:"CalendarIcon",path:"src/lib/icons/icons.tsx#CalendarIcon"})}catch{}try{b.displayName="SearchIcon",b.__docgenInfo={description:"",displayName:"SearchIcon",props:{unlock:{defaultValue:null,description:"",name:"unlock",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"var(--blue_gray)"},description:"",name:"color",required:!1,type:{name:"string"}},func:{defaultValue:null,description:"",name:"func",required:!1,type:{name:"Function"}},menuIconColor:{defaultValue:null,description:"",name:"menuIconColor",required:!1,type:{name:"string"}},themeColor:{defaultValue:null,description:"",name:"themeColor",required:!1,type:{name:"string"}},iconType:{defaultValue:null,description:"",name:"iconType",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/icons/icons.tsx#SearchIcon"]={docgenInfo:b.__docgenInfo,name:"SearchIcon",path:"src/lib/icons/icons.tsx#SearchIcon"})}catch{}try{T.displayName="SettingsIcon",T.__docgenInfo={description:"",displayName:"SettingsIcon",props:{unlock:{defaultValue:null,description:"",name:"unlock",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"var(--blue_gray)"},description:"",name:"color",required:!1,type:{name:"string"}},func:{defaultValue:null,description:"",name:"func",required:!1,type:{name:"Function"}},menuIconColor:{defaultValue:null,description:"",name:"menuIconColor",required:!1,type:{name:"string"}},themeColor:{defaultValue:null,description:"",name:"themeColor",required:!1,type:{name:"string"}},iconType:{defaultValue:null,description:"",name:"iconType",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/icons/icons.tsx#SettingsIcon"]={docgenInfo:T.__docgenInfo,name:"SettingsIcon",path:"src/lib/icons/icons.tsx#SettingsIcon"})}catch{}try{O.displayName="MoonIcon",O.__docgenInfo={description:"",displayName:"MoonIcon",props:{unlock:{defaultValue:null,description:"",name:"unlock",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"var(--blue_gray)"},description:"",name:"color",required:!1,type:{name:"string"}},func:{defaultValue:null,description:"",name:"func",required:!1,type:{name:"Function"}},menuIconColor:{defaultValue:null,description:"",name:"menuIconColor",required:!1,type:{name:"string"}},themeColor:{defaultValue:null,description:"",name:"themeColor",required:!1,type:{name:"string"}},iconType:{defaultValue:null,description:"",name:"iconType",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/icons/icons.tsx#MoonIcon"]={docgenInfo:O.__docgenInfo,name:"MoonIcon",path:"src/lib/icons/icons.tsx#MoonIcon"})}catch{}try{E.displayName="ExitIcon",E.__docgenInfo={description:"",displayName:"ExitIcon",props:{unlock:{defaultValue:null,description:"",name:"unlock",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"var(--blue_gray)"},description:"",name:"color",required:!1,type:{name:"string"}},func:{defaultValue:null,description:"",name:"func",required:!1,type:{name:"Function"}},menuIconColor:{defaultValue:null,description:"",name:"menuIconColor",required:!1,type:{name:"string"}},themeColor:{defaultValue:null,description:"",name:"themeColor",required:!1,type:{name:"string"}},iconType:{defaultValue:null,description:"",name:"iconType",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/icons/icons.tsx#ExitIcon"]={docgenInfo:E.__docgenInfo,name:"ExitIcon",path:"src/lib/icons/icons.tsx#ExitIcon"})}catch{}try{q.displayName="CheckedIcon",q.__docgenInfo={description:"",displayName:"CheckedIcon",props:{unlock:{defaultValue:null,description:"",name:"unlock",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"var(--blue_gray)"},description:"",name:"color",required:!1,type:{name:"string"}},func:{defaultValue:null,description:"",name:"func",required:!1,type:{name:"Function"}},menuIconColor:{defaultValue:null,description:"",name:"menuIconColor",required:!1,type:{name:"string"}},themeColor:{defaultValue:null,description:"",name:"themeColor",required:!1,type:{name:"string"}},iconType:{defaultValue:null,description:"",name:"iconType",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/icons/icons.tsx#CheckedIcon"]={docgenInfo:q.__docgenInfo,name:"CheckedIcon",path:"src/lib/icons/icons.tsx#CheckedIcon"})}catch{}const P=[{id:1,name:"WorkPlace",path:"https://workplace.avn.kg/",icon:null},{id:2,name:"AVN 13",path:"https://workplace.avn.kg/",icon:null},{id:3,name:"AVN Visa",path:"https://workplace.avn.kg/",icon:null},{id:4,name:"AVN Campus",path:"https://workplace.avn.kg/",icon:null},{id:5,name:"AVN 11",path:"https://workplace.avn.kg/",icon:null},{id:6,name:"WorkPlace",path:"https://workplace.avn.kg/",icon:null},{id:7,name:"AVN 13",path:"https://workplace.avn.kg/",icon:null},{id:8,name:"AVN Visa",path:"https://workplace.avn.kg/",icon:null}];function v(e){const t=u.exports.useRef(null),[i,p]=u.exports.useState(!1),h=a(()=>{p(!i)},"handleShowModal"),f=a(d=>{const C=d.composedPath&&d.composedPath();t.current&&!C.includes(t.current)&&p(!1)},"handleModalClose");return u.exports.useEffect(()=>{document.body.addEventListener("click",f)},[]),l(W,{ref:t,...e,children:[n(D,{onClick:h,children:n(x,{menuIconColor:e.menuIconColor})}),n(z,{modal:i,children:P.map((d,C)=>l(U,{onClick:()=>p(!1),href:d.path,children:[n(J,{children:d.icon?n("img",{src:`${`data:image/jpeg;base64,${d.icon}`}`,alt:d.name}):n(j,{})}),n(X,{children:d.name})]},d.id))})]})}a(v,"AppsMenu");const W=o.div`
  /* display: flex;
    align-items: center; */
  @media ${e=>{var t,i;return((i=(t=e==null?void 0:e.theme)==null?void 0:t.media)==null?void 0:i.phone)||r.media.phone}} {
    display: ${e=>e.auto_media?"none":"block"};
  }
`,D=o.div`
  display: flex;
  align-items: center;
  max-width: 17px;
  max-height: 17px;
  width: 100%;
  cursor: pointer;
  svg {
    width: 17px;
    height: 17px;
    object-fit: cover;
  }
`,z=o.ul`
  max-height: 324px;
  overflow-y: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
  opacity: ${e=>e.modal?"1":"0"};
  visibility: ${e=>e.modal?"visible":"hidden"};
  top: ${e=>{var t,i;return((i=(t=e==null?void 0:e.theme)==null?void 0:t.theme)==null?void 0:i.header_height)||r.theme.header_height}};
  right: 0;
  position: absolute;
  padding: 20px;
  background: var(--white);
  box-shadow: 0px 4px 40px 4px rgba(66, 133, 244, 0.1);
  border-radius: 0px 0px 0px 6px;
  transition: ${e=>{var t,i;return((i=(t=e==null?void 0:e.theme)==null?void 0:t.theme)==null?void 0:i.transition)||r.theme.transition}};
  z-index: ${e=>e.modal?"1":"-10"};
`,U=o.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: 65px;
  text-decoration: none;
  transition: ${e=>{var t,i;return((i=(t=e==null?void 0:e.theme)==null?void 0:t.theme)==null?void 0:i.transition)||r.theme.transition}};
  cursor: pointer;

  :hover div {
    color: var(--main_color);
  }
`,J=o.div`
  max-width: 30px;
  max-height: 30px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  img {
    width: 100%;
    /* height: 30px; */
    object-fit: cover;
  }
  svg {
    width: 30px;
    height: 30px;
    object-fit: cover;
  }
`,X=o.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: var(--blue_gray);
  text-align: center;
`;try{v.displayName="AppsMenu",v.__docgenInfo={description:"",displayName:"AppsMenu",props:{auto_media:{defaultValue:null,description:"",name:"auto_media",required:!1,type:{name:"boolean"}},menuIconColor:{defaultValue:null,description:"",name:"menuIconColor",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/AppsMenu/AppsMenu.tsx#AppsMenu"]={docgenInfo:v.__docgenInfo,name:"AppsMenu",path:"src/lib/AppsMenu/AppsMenu.tsx#AppsMenu"})}catch{}function G(){let e=localStorage.getItem("avatar");const t=e?JSON.parse(e):null,i=u.exports.useRef(null),[p,h]=u.exports.useState(!1);return n(Q,{ref:i,children:l(s,{gap:"20px",align:"center",children:[l(ne,{children:[n("p",{children:"\u0423\u043B\u0443\u043A\u0431\u0435\u043A\u043E\u0432 \u0410. \u0423."}),n("span",{children:"\u0421\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442"})]}),l(s,{gap:"10px",align:"center",children:[n(ee,{children:n("img",{src:`${t?`data:image/jpeg;base64,${t}`:"./Avatar.jpg"}`,alt:"fio"})}),n(te,{modal:p,children:n(g,{})})]})]})})}a(G,"Profile");const Q=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,ee=o.div`
  max-width: 40px;
  max-height: 40px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
  }
`,ne=o.div`
  max-width: 200px;
  display: grid;
  justify-content: end;
  text-align: end;
  font-size: 14px;
  line-height: 18px;

  p {
    white-space: pre;
    color: var(--main_color);
    font-weight: 600;
    overflow: hidden;
  }

  span {
    white-space: pre;
    overflow: hidden;
    color: var(--blue_gray);
    font-weight: 400;
  }

  @media ${e=>{var t,i;return((i=(t=e==null?void 0:e.theme)==null?void 0:t.media)==null?void 0:i.phone)||r.media.phone}} {
    display: none;
  }
`,te=o.div`
  display: flex;
  svg {
    transition: ${e=>{var t,i;return((i=(t=e==null?void 0:e.theme)==null?void 0:t.theme)==null?void 0:i.transition)||r.theme.transition}};
    transform: ${e=>e.modal?"scale(1, -1)":"scale(1, 1)"};
  }
`;function w(e){return l(s,{gap:"20px",align:"center",children:[n(G,{}),n(v,{...e})]})}a(w,"AvatarAppsContainer");try{w.displayName="AvatarAppsContainer",w.__docgenInfo={description:"",displayName:"AvatarAppsContainer",props:{auto_media:{defaultValue:null,description:"",name:"auto_media",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/AvatarAppsContainer/AvatarAppsContainer.tsx#AvatarAppsContainer"]={docgenInfo:w.__docgenInfo,name:"AvatarAppsContainer",path:"src/lib/AvatarAppsContainer/AvatarAppsContainer.tsx#AvatarAppsContainer"})}catch{}const B=[{title:"\u0420\u0443\u0441",key:"ru"},{title:"\u041A\u044B\u0440\u0433",key:"kg"},{title:"En",key:"en"}];function S(e){let t=localStorage.getItem("lang")||"";const i=u.exports.useRef(null),[p,h]=u.exports.useState(!1),[f,d]=u.exports.useState({title:"\u0420\u0443\u0441",key:"ru"});u.exports.useEffect(()=>{if(t){const c=B.find(m=>m.key===t);d(c||f)}},[]);const C=a((c,m)=>{localStorage.setItem("lang",c),d({title:m,key:c}),M()},"changeLanguage"),M=a(()=>{h(!p)},"handleShowModal"),$=a(c=>{const m=c.composedPath&&c.composedPath();i.current&&!m.includes(i.current)&&h(!1)},"handleModalClose");return u.exports.useEffect(()=>{document.body.addEventListener("click",$)},[]),l(ie,{ref:i,children:[l(s,{align:"center",gap:"10px",cursor:"pointer",padding:"20px",onClick:()=>M(),children:[n(H,{active:!0,themeColor:e.themeColor,children:n("div",{children:f.title})}),n(le,{modal:p,children:n(g,{themeColor:e.themeColor})})]}),n(ae,{modal:p,children:B.map((c,m)=>{if(f.key!==c.key)return n(s,{align:"center",gap:"10px",cursor:"pointer",padding:"5px",onClick:()=>C(c.key,c.title),children:n(H,{children:c.title})},m)})})]})}a(S,"LangSwitch");const ie=o.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`,ae=o.ul`
  opacity: ${e=>e.modal?"1":"0"};
  visibility: ${e=>e.modal?"visible":"hidden"};
  top: ${e=>{var t,i;return`calc(${((i=(t=e==null?void 0:e.theme)==null?void 0:t.theme)==null?void 0:i.header_height)||r.theme.header_height} + 1px)`}};
  left: 0;
  position: absolute;
  padding: 15px;
  background: var(--white);
  box-shadow: 0px 4px 40px 4px rgba(66, 133, 244, 0.1);
  border-radius: 0px 0px 4px 4px;
  transition: ${e=>{var t,i;return((i=(t=e==null?void 0:e.theme)==null?void 0:t.theme)==null?void 0:i.transition)||r.theme.transition}};
  z-index: ${e=>e.modal?"1":"-10"};
`,H=o.h3`
  color: ${e=>e.themeColor?e.themeColor:e.active?"var(--main_color)":"var(--blue_gray)"};
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  transition: ${e=>{var t,i;return((i=(t=e==null?void 0:e.theme)==null?void 0:t.theme)==null?void 0:i.transition)||r.theme.transition}};
  & :hover {
    color: ${e=>e.themeColor?e.themeColor:"var(--main_color)"};
    transition: ${e=>{var t,i;return((i=(t=e==null?void 0:e.theme)==null?void 0:t.theme)==null?void 0:i.transition)||r.theme.transition}};
  }
`,le=o.div`
  display: flex;
  svg {
    transition: ${e=>{var t,i;return((i=(t=e==null?void 0:e.theme)==null?void 0:t.theme)==null?void 0:i.transition)||r.theme.transition}};
    transform: ${e=>e.modal?"scale(1, -1)":"scale(1, 1)"};
  }
`;try{S.displayName="LangSwitch",S.__docgenInfo={description:"",displayName:"LangSwitch",props:{divRef:{defaultValue:null,description:"",name:"divRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},modal:{defaultValue:null,description:"",name:"modal",required:!1,type:{name:"Boolean"}},themeColor:{defaultValue:null,description:"",name:"themeColor",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/LangSwitch/LangSwitch.tsx#LangSwitch"]={docgenInfo:S.__docgenInfo,name:"LangSwitch",path:"src/lib/LangSwitch/LangSwitch.tsx#LangSwitch"})}catch{}function oe(){return l(s,{gap:"10px",align:"center",children:[l(N,{children:[n(R,{}),n("a",{children:"appPage"})]}),l(N,{activeLink:!0,children:[n(R,{}),n("a",{children:"subpage"})]})]})}a(oe,"Navigation");const N=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  order: 2;
  
  svg {
    width: 14px;
    height: 14px;
    object-fit: cover;
  }

  a {
    cursor: pointer;
    color: ${e=>e.activeLink?"var(--main_color)":"var(--blue_gray)"};
  }
`;function re(){return n(ce,{children:l(s,{justify:"space-between",gap:"10px",padding:"0px 15px",width:"100%",children:[l(s,{gap:"10px",align:"center",children:[l(s,{gap:"20px",align:"center",children:[n(se,{children:n(Y,{})}),n(y,{app_name:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",auto_media:!0})]}),n(ue,{children:n(oe,{})})]}),l(s,{gap:"20px",align:"center",children:[n(de,{children:n(S,{})}),n(w,{auto_media:!0})]})]})})}a(re,"Navbar");const de=o.div`
  @media ${e=>{var t,i;return((i=(t=e==null?void 0:e.theme)==null?void 0:t.media)==null?void 0:i.tablet)||r.media.tablet}} {
    display: none;
  }
`,ce=o.div`
  width: 100%;
  background: var(--white);
  border-bottom: 1px solid #e3e8ef;
  display: flex;
  align-items: center;
  max-height: ${e=>{var t,i;return((i=(t=e==null?void 0:e.theme)==null?void 0:t.theme)==null?void 0:i.header_height)||r.theme.header_height}};
  min-height: ${e=>{var t,i;return((i=(t=e==null?void 0:e.theme)==null?void 0:t.theme)==null?void 0:i.header_height)||r.theme.header_height}};

  padding: 0px 5px;
  transition: ${e=>{var t,i;return((i=(t=e==null?void 0:e.theme)==null?void 0:t.theme)==null?void 0:i.transition)||r.theme.transition}};

  @media ${e=>{var t,i;return((i=(t=e==null?void 0:e.theme)==null?void 0:t.media)==null?void 0:i.laptop)||r.media.laptop}} {
    padding: 0px;
  }
`,se=o.div`
  display: none;
  max-width: 20px;
  max-height: 20px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: pointer;
  svg {
    width: 20px;
    height: 20px;
    object-fit: cover;
  }

  @media ${e=>{var t,i;return((i=(t=e==null?void 0:e.theme)==null?void 0:t.media)==null?void 0:i.laptop)||r.media.laptop}} {
    display: block;
  }
`,ue=o.div`
  @media ${e=>{var t,i;return((i=(t=e==null?void 0:e.theme)==null?void 0:t.media)==null?void 0:i.tablet)||r.media.tablet}} {
    display: none;
  }
`,_e={title:"Design AVN-UI/Navbar",component:re},ye=[];export{ye as __namedExportsOrder,_e as default};
//# sourceMappingURL=Navbar.stories.0f17c82f.js.map
