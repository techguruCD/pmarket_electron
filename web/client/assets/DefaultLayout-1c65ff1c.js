import{r as l,a as e,j as t,u as b,d as x,e as p,L as u,k as v,i as m,s as y,l as w,m as k,o as N,N as g,p as L,q as H,O as V}from"./index-28e725f7.js";function M(r,a){const[n,d]=l.useState(()=>{try{const s=window.localStorage.getItem(r);return s?JSON.parse(s):a}catch{return a}});return l.useEffect(()=>{try{const s=typeof n=="function"?n(n):n;window.localStorage.setItem(r,JSON.stringify(s))}catch{}},[r,n]),[n,d]}const S=()=>{const[r,a]=M("color-theme","light");return l.useEffect(()=>{const n="dark",d=window.document.body.classList;r==="dark"?d.add(n):d.remove(n)},[r]),[r,a]},Z=()=>{const[r,a]=S();return e("li",{children:t("label",{className:`relative m-0 block h-7.5 w-14 rounded-full ${r==="dark"?"bg-primary":"bg-stroke"}`,children:[e("input",{type:"checkbox",onChange:()=>{typeof a=="function"&&a(r==="light"?"dark":"light")},className:"dur absolute top-0 z-50 m-0 h-full w-full cursor-pointer opacity-0"}),t("span",{className:`absolute top-1/2 left-[3px] flex h-6 w-6 -translate-y-1/2 translate-x-0 items-center justify-center rounded-full bg-white shadow-switcher duration-75 ease-linear ${r==="dark"&&"!right-[3px] !translate-x-full"}`,children:[e("span",{className:"dark:hidden",children:t("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M7.99992 12.6666C10.5772 12.6666 12.6666 10.5772 12.6666 7.99992C12.6666 5.42259 10.5772 3.33325 7.99992 3.33325C5.42259 3.33325 3.33325 5.42259 3.33325 7.99992C3.33325 10.5772 5.42259 12.6666 7.99992 12.6666Z",fill:"#969AA1"}),e("path",{d:"M8.00008 15.3067C7.63341 15.3067 7.33342 15.0334 7.33342 14.6667V14.6134C7.33342 14.2467 7.63341 13.9467 8.00008 13.9467C8.36675 13.9467 8.66675 14.2467 8.66675 14.6134C8.66675 14.9801 8.36675 15.3067 8.00008 15.3067ZM12.7601 13.4267C12.5867 13.4267 12.4201 13.3601 12.2867 13.2334L12.2001 13.1467C11.9401 12.8867 11.9401 12.4667 12.2001 12.2067C12.4601 11.9467 12.8801 11.9467 13.1401 12.2067L13.2267 12.2934C13.4867 12.5534 13.4867 12.9734 13.2267 13.2334C13.1001 13.3601 12.9334 13.4267 12.7601 13.4267ZM3.24008 13.4267C3.06675 13.4267 2.90008 13.3601 2.76675 13.2334C2.50675 12.9734 2.50675 12.5534 2.76675 12.2934L2.85342 12.2067C3.11342 11.9467 3.53341 11.9467 3.79341 12.2067C4.05341 12.4667 4.05341 12.8867 3.79341 13.1467L3.70675 13.2334C3.58008 13.3601 3.40675 13.4267 3.24008 13.4267ZM14.6667 8.66675H14.6134C14.2467 8.66675 13.9467 8.36675 13.9467 8.00008C13.9467 7.63341 14.2467 7.33342 14.6134 7.33342C14.9801 7.33342 15.3067 7.63341 15.3067 8.00008C15.3067 8.36675 15.0334 8.66675 14.6667 8.66675ZM1.38675 8.66675H1.33341C0.966748 8.66675 0.666748 8.36675 0.666748 8.00008C0.666748 7.63341 0.966748 7.33342 1.33341 7.33342C1.70008 7.33342 2.02675 7.63341 2.02675 8.00008C2.02675 8.36675 1.75341 8.66675 1.38675 8.66675ZM12.6734 3.99341C12.5001 3.99341 12.3334 3.92675 12.2001 3.80008C11.9401 3.54008 11.9401 3.12008 12.2001 2.86008L12.2867 2.77341C12.5467 2.51341 12.9667 2.51341 13.2267 2.77341C13.4867 3.03341 13.4867 3.45341 13.2267 3.71341L13.1401 3.80008C13.0134 3.92675 12.8467 3.99341 12.6734 3.99341ZM3.32675 3.99341C3.15341 3.99341 2.98675 3.92675 2.85342 3.80008L2.76675 3.70675C2.50675 3.44675 2.50675 3.02675 2.76675 2.76675C3.02675 2.50675 3.44675 2.50675 3.70675 2.76675L3.79341 2.85342C4.05341 3.11342 4.05341 3.53341 3.79341 3.79341C3.66675 3.92675 3.49341 3.99341 3.32675 3.99341ZM8.00008 2.02675C7.63341 2.02675 7.33342 1.75341 7.33342 1.38675V1.33341C7.33342 0.966748 7.63341 0.666748 8.00008 0.666748C8.36675 0.666748 8.66675 0.966748 8.66675 1.33341C8.66675 1.70008 8.36675 2.02675 8.00008 2.02675Z",fill:"#969AA1"})]})}),e("span",{className:"hidden dark:inline-block",children:e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M14.3533 10.62C14.2466 10.44 13.9466 10.16 13.1999 10.2933C12.7866 10.3667 12.3666 10.4 11.9466 10.38C10.3933 10.3133 8.98659 9.6 8.00659 8.5C7.13993 7.53333 6.60659 6.27333 6.59993 4.91333C6.59993 4.15333 6.74659 3.42 7.04659 2.72666C7.33993 2.05333 7.13326 1.7 6.98659 1.55333C6.83326 1.4 6.47326 1.18666 5.76659 1.48C3.03993 2.62666 1.35326 5.36 1.55326 8.28666C1.75326 11.04 3.68659 13.3933 6.24659 14.28C6.85993 14.4933 7.50659 14.62 8.17326 14.6467C8.27993 14.6533 8.38659 14.66 8.49326 14.66C10.7266 14.66 12.8199 13.6067 14.1399 11.8133C14.5866 11.1933 14.4666 10.8 14.3533 10.62Z",fill:"#969AA1"})})})]})]})})},E=()=>{const[r,a]=l.useState(!1),n=b(),d=x(),s=p(i=>i.chat.notification),o=l.useRef(null),C=l.useRef(null);return l.useEffect(()=>{const i=({target:c})=>{C.current&&(!r||C.current.contains(c)||o.current.contains(c)||a(!1))};return document.addEventListener("click",i),()=>document.removeEventListener("click",i)}),l.useEffect(()=>{const i=({keyCode:c})=>{!r||c!==27||a(!1)};return document.addEventListener("keydown",i),()=>document.removeEventListener("keydown",i)}),e("li",{className:"relative","x-data":"{ dropdownOpen: false, notifying: true }",children:t(u,{ref:o,onClick:i=>{i.preventDefault(),n(v(!1)),d("/member/chat")},className:"relative flex h-8.5 w-8.5 items-center justify-center rounded-full border-[0.5px] border-stroke bg-gray hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white",to:"#",children:[s?e("span",{className:"absolute -top-0.5 -right-0.5 z-1 h-2 w-2 rounded-full bg-meta-1",children:e("span",{className:"absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-meta-1 opacity-75"})}):"",t("svg",{className:"fill-current duration-300 ease-in-out",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M10.9688 1.57495H7.03135C3.43135 1.57495 0.506348 4.41558 0.506348 7.90308C0.506348 11.3906 2.75635 13.8375 8.26885 16.3125C8.40947 16.3687 8.52197 16.3968 8.6626 16.3968C8.85947 16.3968 9.02822 16.3406 9.19697 16.2281C9.47822 16.0593 9.64697 15.75 9.64697 15.4125V14.2031H10.9688C14.5688 14.2031 17.522 11.3625 17.522 7.87495C17.522 4.38745 14.5688 1.57495 10.9688 1.57495ZM10.9688 12.9937H9.3376C8.80322 12.9937 8.35322 13.4437 8.35322 13.9781V15.0187C3.6001 12.825 1.74385 10.8 1.74385 7.9312C1.74385 5.14683 4.10635 2.8687 7.03135 2.8687H10.9688C13.8657 2.8687 16.2563 5.14683 16.2563 7.9312C16.2563 10.7156 13.8657 12.9937 10.9688 12.9937Z",fill:""}),e("path",{d:"M5.42812 7.28442C5.0625 7.28442 4.78125 7.56567 4.78125 7.9313C4.78125 8.29692 5.0625 8.57817 5.42812 8.57817C5.79375 8.57817 6.075 8.29692 6.075 7.9313C6.075 7.56567 5.79375 7.28442 5.42812 7.28442Z",fill:""}),e("path",{d:"M9.00015 7.28442C8.63452 7.28442 8.35327 7.56567 8.35327 7.9313C8.35327 8.29692 8.63452 8.57817 9.00015 8.57817C9.33765 8.57817 9.64702 8.29692 9.64702 7.9313C9.64702 7.56567 9.33765 7.28442 9.00015 7.28442Z",fill:""}),e("path",{d:"M12.5719 7.28442C12.2063 7.28442 11.925 7.56567 11.925 7.9313C11.925 8.29692 12.2063 8.57817 12.5719 8.57817C12.9375 8.57817 13.2188 8.29692 13.2188 7.9313C13.2188 7.56567 12.9094 7.28442 12.5719 7.28442Z",fill:""})]})]})})},I=()=>{const[r,a]=l.useState(!1),n=l.useRef(null),d=l.useRef(null);return l.useEffect(()=>{const s=({target:o})=>{d.current&&(!r||d.current.contains(o)||n.current.contains(o)||a(!1))};return document.addEventListener("click",s),()=>document.removeEventListener("click",s)}),l.useEffect(()=>{const s=({keyCode:o})=>{!r||o!==27||a(!1)};return document.addEventListener("keydown",s),()=>document.removeEventListener("keydown",s)}),t("li",{className:"relative",children:[t(u,{ref:n,onClick:()=>a(!r),to:"#",className:"relative flex h-8.5 w-8.5 items-center justify-center rounded-full border-[0.5px] border-stroke bg-gray hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white",children:[e("span",{className:"absolute -top-0.5 right-0 z-1 h-2 w-2 rounded-full bg-meta-1",children:e("span",{className:"absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-meta-1 opacity-75"})}),e("svg",{className:"fill-current duration-300 ease-in-out",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M16.1999 14.9343L15.6374 14.0624C15.5249 13.8937 15.4687 13.7249 15.4687 13.528V7.67803C15.4687 6.01865 14.7655 4.47178 13.4718 3.31865C12.4312 2.39053 11.0812 1.7999 9.64678 1.6874V1.1249C9.64678 0.787402 9.36553 0.478027 8.9999 0.478027C8.6624 0.478027 8.35303 0.759277 8.35303 1.1249V1.65928C8.29678 1.65928 8.24053 1.65928 8.18428 1.6874C4.92178 2.05303 2.4749 4.66865 2.4749 7.79053V13.528C2.44678 13.8093 2.39053 13.9499 2.33428 14.0343L1.7999 14.9343C1.63115 15.2155 1.63115 15.553 1.7999 15.8343C1.96865 16.0874 2.2499 16.2562 2.55928 16.2562H8.38115V16.8749C8.38115 17.2124 8.6624 17.5218 9.02803 17.5218C9.36553 17.5218 9.6749 17.2405 9.6749 16.8749V16.2562H15.4687C15.778 16.2562 16.0593 16.0874 16.228 15.8343C16.3968 15.553 16.3968 15.2155 16.1999 14.9343ZM3.23428 14.9905L3.43115 14.653C3.5999 14.3718 3.68428 14.0343 3.74053 13.6405V7.79053C3.74053 5.31553 5.70928 3.23428 8.3249 2.95303C9.92803 2.78428 11.503 3.2624 12.6562 4.2749C13.6687 5.1749 14.2312 6.38428 14.2312 7.67803V13.528C14.2312 13.9499 14.3437 14.3437 14.5968 14.7374L14.7655 14.9905H3.23428Z",fill:""})})]}),t("div",{ref:d,onFocus:()=>a(!0),onBlur:()=>a(!1),className:`absolute -right-27 mt-2.5 flex h-90 w-75 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark sm:right-0 sm:w-80 ${r===!0?"block":"hidden"}`,children:[e("div",{className:"px-4.5 py-3",children:e("h5",{className:"text-sm font-medium text-bodydark2",children:"Notification"})}),t("ul",{className:"flex h-auto flex-col overflow-y-auto",children:[e("li",{children:t(u,{className:"flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4",to:"#",children:[t("p",{className:"text-sm",children:[e("span",{className:"text-black dark:text-white",children:"Edit your information in a swipe"})," ","Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."]}),e("p",{className:"text-xs",children:"12 May, 2025"})]})}),e("li",{children:t(u,{className:"flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4",to:"#",children:[t("p",{className:"text-sm",children:[e("span",{className:"text-black dark:text-white",children:"It is a long established fact"})," ","that a reader will be distracted by the readable."]}),e("p",{className:"text-xs",children:"24 Feb, 2025"})]})}),e("li",{children:t(u,{className:"flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4",to:"#",children:[t("p",{className:"text-sm",children:[e("span",{className:"text-black dark:text-white",children:"There are many variations"})," ","of passages of Lorem Ipsum available, but the majority have suffered"]}),e("p",{className:"text-xs",children:"04 Jan, 2025"})]})}),e("li",{children:t(u,{className:"flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4",to:"#",children:[t("p",{className:"text-sm",children:[e("span",{className:"text-black dark:text-white",children:"There are many variations"})," ","of passages of Lorem Ipsum available, but the majority have suffered"]}),e("p",{className:"text-xs",children:"01 Dec, 2024"})]})})]})]})]})},z=r=>{const[a,n]=l.useState(!1),d=l.useRef(null),s=l.useRef(null),o=x(),C=b(),h=i=>{i.preventDefault(),w.defaults.headers.common.Authorization="",localStorage.setItem("token",""),C(k()),o("/member/auth/signin")};return l.useEffect(()=>{const i=({target:c})=>{s.current&&(!a||s.current.contains(c)||d.current.contains(c)||n(!1))};return document.addEventListener("click",i),()=>document.removeEventListener("click",i)}),l.useEffect(()=>{const i=({keyCode:c})=>{!a||c!==27||n(!1)};return document.addEventListener("keydown",i),()=>document.removeEventListener("keydown",i)}),t("div",{className:"relative",children:[t(u,{ref:d,onClick:()=>n(!a),className:"flex items-center gap-4",to:"#",children:[t("span",{className:"hidden text-right lg:block",children:[e("span",{className:"block text-sm font-medium text-black dark:text-white",children:m(r.headerInfo)?"":r.headerInfo.userInfo.name}),e("span",{className:"block text-xs",children:m(r.headerInfo)?"":r.headerInfo.role.name})]}),e("span",{className:"h-12 w-12 rounded-full",children:m(r.headerInfo)||m(r.headerInfo.userInfo)||m(r.headerInfo.userInfo.avatar)?"":e("img",{src:y+r.headerInfo.userInfo.avatar,alt:"User",style:{borderRadius:"50%"}})}),e("svg",{className:`hidden fill-current sm:block ${a?"rotate-180":""}`,width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z",fill:""})})]}),t("div",{ref:s,onFocus:()=>n(!0),onBlur:()=>n(!1),className:`absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ${a===!0?"block":"hidden"}`,children:[t("ul",{className:"flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark",children:[e("li",{children:t(u,{to:"/profile",className:"flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base",children:[t("svg",{className:"fill-current",width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M11 9.62499C8.42188 9.62499 6.35938 7.59687 6.35938 5.12187C6.35938 2.64687 8.42188 0.618744 11 0.618744C13.5781 0.618744 15.6406 2.64687 15.6406 5.12187C15.6406 7.59687 13.5781 9.62499 11 9.62499ZM11 2.16562C9.28125 2.16562 7.90625 3.50624 7.90625 5.12187C7.90625 6.73749 9.28125 8.07812 11 8.07812C12.7188 8.07812 14.0938 6.73749 14.0938 5.12187C14.0938 3.50624 12.7188 2.16562 11 2.16562Z",fill:""}),e("path",{d:"M17.7719 21.4156H4.2281C3.5406 21.4156 2.9906 20.8656 2.9906 20.1781V17.0844C2.9906 13.7156 5.7406 10.9656 9.10935 10.9656H12.925C16.2937 10.9656 19.0437 13.7156 19.0437 17.0844V20.1781C19.0094 20.8312 18.4594 21.4156 17.7719 21.4156ZM4.53748 19.8687H17.4969V17.0844C17.4969 14.575 15.4344 12.5125 12.925 12.5125H9.07498C6.5656 12.5125 4.5031 14.575 4.5031 17.0844V19.8687H4.53748Z",fill:""})]}),"My Profile"]})}),e("li",{children:t(u,{to:"#",className:"flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base",children:[e("svg",{className:"fill-current",width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M17.6687 1.44374C17.1187 0.893744 16.4312 0.618744 15.675 0.618744H7.42498C6.25623 0.618744 5.25935 1.58124 5.25935 2.78437V4.12499H4.29685C3.88435 4.12499 3.50623 4.46874 3.50623 4.91562C3.50623 5.36249 3.84998 5.70624 4.29685 5.70624H5.25935V10.2781H4.29685C3.88435 10.2781 3.50623 10.6219 3.50623 11.0687C3.50623 11.4812 3.84998 11.8594 4.29685 11.8594H5.25935V16.4312H4.29685C3.88435 16.4312 3.50623 16.775 3.50623 17.2219C3.50623 17.6687 3.84998 18.0125 4.29685 18.0125H5.25935V19.25C5.25935 20.4187 6.22185 21.4156 7.42498 21.4156H15.675C17.2218 21.4156 18.4937 20.1437 18.5281 18.5969V3.47187C18.4937 2.68124 18.2187 1.95937 17.6687 1.44374ZM16.9469 18.5625C16.9469 19.2844 16.3625 19.8344 15.6406 19.8344H7.3906C7.04685 19.8344 6.77185 19.5594 6.77185 19.2156V17.875H8.6281C9.0406 17.875 9.41873 17.5312 9.41873 17.0844C9.41873 16.6375 9.07498 16.2937 8.6281 16.2937H6.77185V11.7906H8.6281C9.0406 11.7906 9.41873 11.4469 9.41873 11C9.41873 10.5875 9.07498 10.2094 8.6281 10.2094H6.77185V5.63749H8.6281C9.0406 5.63749 9.41873 5.29374 9.41873 4.84687C9.41873 4.39999 9.07498 4.05624 8.6281 4.05624H6.77185V2.74999C6.77185 2.40624 7.04685 2.13124 7.3906 2.13124H15.6406C15.9844 2.13124 16.2937 2.26874 16.5687 2.50937C16.8094 2.74999 16.9469 3.09374 16.9469 3.43749V18.5625Z",fill:""})}),"My Contacts"]})}),e("li",{children:t(u,{to:"/settings",className:"flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base",children:[t("svg",{className:"fill-current",width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M20.8656 8.86874C20.5219 8.49062 20.0406 8.28437 19.525 8.28437H19.4219C19.25 8.28437 19.1125 8.18124 19.0781 8.04374C19.0437 7.90624 18.975 7.80312 18.9406 7.66562C18.8719 7.52812 18.9406 7.39062 19.0437 7.28749L19.1125 7.21874C19.4906 6.87499 19.6969 6.39374 19.6969 5.87812C19.6969 5.36249 19.525 4.88124 19.1469 4.50312L17.8062 3.12812C17.0844 2.37187 15.8469 2.33749 15.0906 3.09374L14.9875 3.16249C14.8844 3.26562 14.7125 3.29999 14.5406 3.23124C14.4031 3.16249 14.2656 3.09374 14.0937 3.05937C13.9219 2.99062 13.8187 2.85312 13.8187 2.71562V2.54374C13.8187 1.47812 12.9594 0.618744 11.8937 0.618744H9.96875C9.45312 0.618744 8.97187 0.824994 8.62812 1.16874C8.25 1.54687 8.07812 2.02812 8.07812 2.50937V2.64687C8.07812 2.78437 7.975 2.92187 7.8375 2.99062C7.76875 3.02499 7.73437 3.02499 7.66562 3.05937C7.52812 3.12812 7.35625 3.09374 7.25312 2.99062L7.18437 2.88749C6.84062 2.50937 6.35937 2.30312 5.84375 2.30312C5.32812 2.30312 4.84687 2.47499 4.46875 2.85312L3.09375 4.19374C2.3375 4.91562 2.30312 6.15312 3.05937 6.90937L3.12812 7.01249C3.23125 7.11562 3.26562 7.28749 3.19687 7.39062C3.12812 7.52812 3.09375 7.63124 3.025 7.76874C2.95625 7.90624 2.85312 7.97499 2.68125 7.97499H2.57812C2.0625 7.97499 1.58125 8.14687 1.20312 8.52499C0.824996 8.86874 0.618746 9.34999 0.618746 9.86562L0.584371 11.7906C0.549996 12.8562 1.40937 13.7156 2.475 13.75H2.57812C2.75 13.75 2.8875 13.8531 2.92187 13.9906C2.99062 14.0937 3.05937 14.1969 3.09375 14.3344C3.12812 14.4719 3.09375 14.6094 2.99062 14.7125L2.92187 14.7812C2.54375 15.125 2.3375 15.6062 2.3375 16.1219C2.3375 16.6375 2.50937 17.1187 2.8875 17.4969L4.22812 18.8719C4.95 19.6281 6.1875 19.6625 6.94375 18.9062L7.04687 18.8375C7.15 18.7344 7.32187 18.7 7.49375 18.7687C7.63125 18.8375 7.76875 18.9062 7.94062 18.9406C8.1125 19.0094 8.21562 19.1469 8.21562 19.2844V19.4219C8.21562 20.4875 9.075 21.3469 10.1406 21.3469H12.0656C13.1312 21.3469 13.9906 20.4875 13.9906 19.4219V19.2844C13.9906 19.1469 14.0937 19.0094 14.2312 18.9406C14.3 18.9062 14.3344 18.9062 14.4031 18.8719C14.575 18.8031 14.7125 18.8375 14.8156 18.9406L14.8844 19.0437C15.2281 19.4219 15.7094 19.6281 16.225 19.6281C16.7406 19.6281 17.2219 19.4562 17.6 19.0781L18.975 17.7375C19.7312 17.0156 19.7656 15.7781 19.0094 15.0219L18.9406 14.9187C18.8375 14.8156 18.8031 14.6437 18.8719 14.5406C18.9406 14.4031 18.975 14.3 19.0437 14.1625C19.1125 14.025 19.25 13.9562 19.3875 13.9562H19.4906H19.525C20.5562 13.9562 21.4156 13.1312 21.45 12.0656L21.4844 10.1406C21.4156 9.72812 21.2094 9.21249 20.8656 8.86874ZM19.8344 12.1C19.8344 12.3062 19.6625 12.4781 19.4562 12.4781H19.3531H19.3187C18.5281 12.4781 17.8062 12.9594 17.5312 13.6469C17.4969 13.75 17.4281 13.8531 17.3937 13.9562C17.0844 14.6437 17.2219 15.5031 17.7719 16.0531L17.8406 16.1562C17.9781 16.2937 17.9781 16.5344 17.8406 16.6719L16.4656 18.0125C16.3625 18.1156 16.2594 18.1156 16.1906 18.1156C16.1219 18.1156 16.0187 18.1156 15.9156 18.0125L15.8469 17.9094C15.2969 17.325 14.4719 17.1531 13.7156 17.4969L13.5781 17.5656C12.8219 17.875 12.3406 18.5625 12.3406 19.3531V19.4906C12.3406 19.6969 12.1687 19.8687 11.9625 19.8687H10.0375C9.83125 19.8687 9.65937 19.6969 9.65937 19.4906V19.3531C9.65937 18.5625 9.17812 17.8406 8.42187 17.5656C8.31875 17.5312 8.18125 17.4625 8.07812 17.4281C7.80312 17.2906 7.52812 17.2562 7.25312 17.2562C6.77187 17.2562 6.29062 17.4281 5.9125 17.8062L5.84375 17.8406C5.70625 17.9781 5.46562 17.9781 5.32812 17.8406L3.9875 16.4656C3.88437 16.3625 3.88437 16.2594 3.88437 16.1906C3.88437 16.1219 3.88437 16.0187 3.9875 15.9156L4.05625 15.8469C4.64062 15.2969 4.8125 14.4375 4.50312 13.75C4.46875 13.6469 4.43437 13.5437 4.36562 13.4406C4.09062 12.7187 3.40312 12.2031 2.6125 12.2031H2.50937C2.30312 12.2031 2.13125 12.0312 2.13125 11.825L2.16562 9.89999C2.16562 9.76249 2.23437 9.69374 2.26875 9.62499C2.30312 9.59062 2.40625 9.52187 2.54375 9.52187H2.64687C3.4375 9.55624 4.15937 9.07499 4.46875 8.35312C4.50312 8.24999 4.57187 8.14687 4.60625 8.04374C4.91562 7.35624 4.77812 6.49687 4.22812 5.94687L4.15937 5.84374C4.02187 5.70624 4.02187 5.46562 4.15937 5.32812L5.53437 3.98749C5.6375 3.88437 5.74062 3.88437 5.80937 3.88437C5.87812 3.88437 5.98125 3.88437 6.08437 3.98749L6.15312 4.09062C6.70312 4.67499 7.52812 4.84687 8.28437 4.53749L8.42187 4.46874C9.17812 4.15937 9.65937 3.47187 9.65937 2.68124V2.54374C9.65937 2.40624 9.72812 2.33749 9.7625 2.26874C9.79687 2.19999 9.9 2.16562 10.0375 2.16562H11.9625C12.1687 2.16562 12.3406 2.33749 12.3406 2.54374V2.68124C12.3406 3.47187 12.8219 4.19374 13.5781 4.46874C13.6812 4.50312 13.8187 4.57187 13.9219 4.60624C14.6437 4.94999 15.5031 4.81249 16.0875 4.26249L16.1906 4.19374C16.3281 4.05624 16.5687 4.05624 16.7062 4.19374L18.0469 5.56874C18.15 5.67187 18.15 5.77499 18.15 5.84374C18.15 5.91249 18.1156 6.01562 18.0469 6.11874L17.9781 6.18749C17.3594 6.70312 17.1875 7.56249 17.4625 8.24999C17.4969 8.35312 17.5312 8.45624 17.6 8.55937C17.875 9.28124 18.5625 9.79687 19.3531 9.79687H19.4562C19.5937 9.79687 19.6625 9.86562 19.7312 9.89999C19.8 9.93437 19.8344 10.0375 19.8344 10.175V12.1Z",fill:""}),e("path",{d:"M11 6.32498C8.42189 6.32498 6.32501 8.42186 6.32501 11C6.32501 13.5781 8.42189 15.675 11 15.675C13.5781 15.675 15.675 13.5781 15.675 11C15.675 8.42186 13.5781 6.32498 11 6.32498ZM11 14.1281C9.28126 14.1281 7.87189 12.7187 7.87189 11C7.87189 9.28123 9.28126 7.87186 11 7.87186C12.7188 7.87186 14.1281 9.28123 14.1281 11C14.1281 12.7187 12.7188 14.1281 11 14.1281Z",fill:""})]}),"Account Settings"]})})]}),t("button",{className:"flex items-center gap-3.5 py-4 px-6 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base",onClick:h,children:[t("svg",{className:"fill-current",width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M15.5375 0.618744H11.6531C10.7594 0.618744 10.0031 1.37499 10.0031 2.26874V4.64062C10.0031 5.05312 10.3469 5.39687 10.7594 5.39687C11.1719 5.39687 11.55 5.05312 11.55 4.64062V2.23437C11.55 2.16562 11.5844 2.13124 11.6531 2.13124H15.5375C16.3625 2.13124 17.0156 2.78437 17.0156 3.60937V18.3562C17.0156 19.1812 16.3625 19.8344 15.5375 19.8344H11.6531C11.5844 19.8344 11.55 19.8 11.55 19.7312V17.3594C11.55 16.9469 11.2062 16.6031 10.7594 16.6031C10.3125 16.6031 10.0031 16.9469 10.0031 17.3594V19.7312C10.0031 20.625 10.7594 21.3812 11.6531 21.3812H15.5375C17.2219 21.3812 18.5625 20.0062 18.5625 18.3562V3.64374C18.5625 1.95937 17.1875 0.618744 15.5375 0.618744Z",fill:""}),e("path",{d:"M6.05001 11.7563H12.2031C12.6156 11.7563 12.9594 11.4125 12.9594 11C12.9594 10.5875 12.6156 10.2438 12.2031 10.2438H6.08439L8.21564 8.07813C8.52501 7.76875 8.52501 7.2875 8.21564 6.97812C7.90626 6.66875 7.42501 6.66875 7.11564 6.97812L3.67814 10.4844C3.36876 10.7938 3.36876 11.275 3.67814 11.5844L7.11564 15.0906C7.25314 15.2281 7.45939 15.3312 7.66564 15.3312C7.87189 15.3312 8.04376 15.2625 8.21564 15.125C8.52501 14.8156 8.52501 14.3344 8.21564 14.025L6.05001 11.7563Z",fill:""})]}),"Log Out"]})]})]})},R=r=>e("header",{className:"sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none",style:{marginLeft:1},children:t("div",{className:"flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-11",children:[t("div",{className:"flex items-center gap-2 sm:gap-4 lg:hidden",children:[e("button",{"aria-controls":"sidebar",onClick:a=>{a.stopPropagation(),r.setSidebarOpen(!r.sidebarOpen)},className:"z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden",children:t("span",{className:"relative block h-5.5 w-5.5 cursor-pointer",children:[t("span",{className:"du-block absolute right-0 h-full w-full",children:[e("span",{className:`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${!r.sidebarOpen&&"!w-full delay-300"}`}),e("span",{className:`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${!r.sidebarOpen&&"delay-400 !w-full"}`}),e("span",{className:`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${!r.sidebarOpen&&"!w-full delay-500"}`})]}),t("span",{className:"absolute right-0 h-full w-full rotate-45",children:[e("span",{className:`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${!r.sidebarOpen&&"!h-0 !delay-[0]"}`}),e("span",{className:`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${!r.sidebarOpen&&"!h-0 !delay-200"}`})]})]})}),e(u,{className:"block flex-shrink-0 lg:hidden",to:"/"})]}),e("div",{className:"hidden sm:block",children:e("form",{action:"https://formbold.com/s/unique_form_id",method:"POST",children:t("div",{className:"relative",children:[e("button",{className:"absolute top-1/2 left-0 -translate-y-1/2",children:t("svg",{className:"fill-body hover:fill-primary dark:fill-bodydark dark:hover:fill-primary",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z",fill:""}),e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z",fill:""})]})}),e("input",{type:"text",placeholder:"Type to search...",className:"w-full bg-transparent pr-4 pl-9 focus:outline-none"})]})})}),t("div",{className:"flex items-center gap-3 2xsm:gap-7",children:[t("ul",{className:"flex items-center gap-2 2xsm:gap-4",children:[e(Z,{}),e(I,{}),e(E,{})]}),e(z,{headerInfo:r.headerInfo})]})]})}),B=({sidebarOpen:r,setSidebarOpen:a})=>{const n=N(),{pathname:d}=n,s=l.useRef(null),o=l.useRef(null),C=localStorage.getItem("sidebar-expanded"),[h,i]=l.useState(C===null?!1:C==="true");return l.useEffect(()=>{const c=({target:f})=>{!o.current||!s.current||!r||o.current.contains(f)||s.current.contains(f)||a(!1)};return document.addEventListener("click",c),()=>document.removeEventListener("click",c)}),l.useEffect(()=>{const c=({keyCode:f})=>{!r||f!==27||a(!1)};return document.addEventListener("keydown",c),()=>document.removeEventListener("keydown",c)}),l.useEffect(()=>{var c,f;localStorage.setItem("sidebar-expanded",h.toString()),h?(c=document.querySelector("body"))==null||c.classList.add("sidebar-expanded"):(f=document.querySelector("body"))==null||f.classList.remove("sidebar-expanded")},[h]),t("aside",{ref:o,className:`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${r?"translate-x-0":"-translate-x-full"}`,children:[t("div",{className:"flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5",children:[e("a",{href:"/",style:{marginLeft:"10px",marginTop:"5px"},children:t("div",{children:[e("span",{style:{fontSize:"40px",color:"rgb(60, 80, 224)",fontWeight:600,marginRight:"2px"},children:"P"}),e("span",{style:{fontSize:"40px",color:"#FFFFFF",fontWeight:600},children:"market"})]})}),e("button",{ref:s,onClick:()=>a(!r),"aria-controls":"sidebar","aria-expanded":r,className:"block lg:hidden",children:e("svg",{className:"fill-current",width:"20",height:"18",viewBox:"0 0 20 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z",fill:""})})})]}),e("div",{className:"no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear",children:t("nav",{className:"mt-1 py-4 px-4 lg:mt-0 lg:px-6",children:[t("div",{children:[e("h3",{className:"mb-4 ml-4 text-sm font-semibold text-bodydark2",children:"DASHBOARD"}),e("ul",{className:"mb-6 flex flex-col gap-1.5",children:e("li",{children:t(g,{to:"/member/dashboard",className:`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${d.includes("/dashboard")&&"bg-graydark dark:bg-meta-4"}`,children:[t("svg",{className:"fill-current",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M6.10322 0.956299H2.53135C1.5751 0.956299 0.787598 1.7438 0.787598 2.70005V6.27192C0.787598 7.22817 1.5751 8.01567 2.53135 8.01567H6.10322C7.05947 8.01567 7.84697 7.22817 7.84697 6.27192V2.72817C7.8751 1.7438 7.0876 0.956299 6.10322 0.956299ZM6.60947 6.30005C6.60947 6.5813 6.38447 6.8063 6.10322 6.8063H2.53135C2.2501 6.8063 2.0251 6.5813 2.0251 6.30005V2.72817C2.0251 2.44692 2.2501 2.22192 2.53135 2.22192H6.10322C6.38447 2.22192 6.60947 2.44692 6.60947 2.72817V6.30005Z",fill:""}),e("path",{d:"M15.4689 0.956299H11.8971C10.9408 0.956299 10.1533 1.7438 10.1533 2.70005V6.27192C10.1533 7.22817 10.9408 8.01567 11.8971 8.01567H15.4689C16.4252 8.01567 17.2127 7.22817 17.2127 6.27192V2.72817C17.2127 1.7438 16.4252 0.956299 15.4689 0.956299ZM15.9752 6.30005C15.9752 6.5813 15.7502 6.8063 15.4689 6.8063H11.8971C11.6158 6.8063 11.3908 6.5813 11.3908 6.30005V2.72817C11.3908 2.44692 11.6158 2.22192 11.8971 2.22192H15.4689C15.7502 2.22192 15.9752 2.44692 15.9752 2.72817V6.30005Z",fill:""}),e("path",{d:"M6.10322 9.92822H2.53135C1.5751 9.92822 0.787598 10.7157 0.787598 11.672V15.2438C0.787598 16.2001 1.5751 16.9876 2.53135 16.9876H6.10322C7.05947 16.9876 7.84697 16.2001 7.84697 15.2438V11.7001C7.8751 10.7157 7.0876 9.92822 6.10322 9.92822ZM6.60947 15.272C6.60947 15.5532 6.38447 15.7782 6.10322 15.7782H2.53135C2.2501 15.7782 2.0251 15.5532 2.0251 15.272V11.7001C2.0251 11.4188 2.2501 11.1938 2.53135 11.1938H6.10322C6.38447 11.1938 6.60947 11.4188 6.60947 11.7001V15.272Z",fill:""}),e("path",{d:"M15.4689 9.92822H11.8971C10.9408 9.92822 10.1533 10.7157 10.1533 11.672V15.2438C10.1533 16.2001 10.9408 16.9876 11.8971 16.9876H15.4689C16.4252 16.9876 17.2127 16.2001 17.2127 15.2438V11.7001C17.2127 10.7157 16.4252 9.92822 15.4689 9.92822ZM15.9752 15.272C15.9752 15.5532 15.7502 15.7782 15.4689 15.7782H11.8971C11.6158 15.7782 11.3908 15.5532 11.3908 15.272V11.7001C11.3908 11.4188 11.6158 11.1938 11.8971 11.1938H15.4689C15.7502 11.1938 15.9752 11.4188 15.9752 11.7001V15.272Z",fill:""})]}),"Dashboard"]})})})]}),t("div",{children:[e("h3",{className:"mb-4 ml-4 text-sm font-semibold text-bodydark2",children:"SUPPORT"}),e("ul",{className:"mb-6 flex flex-col gap-1.5",children:e("li",{children:t(g,{to:"/member/chat",className:`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${d.includes("chat")&&"bg-graydark dark:bg-meta-4"}`,children:[e("svg",{className:"fill-current",width:"18",height:"19",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("g",{opacity:"0.8",children:e("path",{xmlns:"http://www.w3.org/2000/svg",d:"m501,328.1c0-68.7-60.2-126.4-140.6-140.1 3.4-11.3 5.1-22.5 5.1-33.8 0-78.8-79.3-143.2-177.3-143.2s-177.2,64.4-177.2,143.2c0,35.8 15.6,68.5 44.8,95.1l-32.3,77.7 98-39.9c9.5,2.9 19.5,5.2 30,7.1-3.3,10.9-5,22.2-5,33.8 0,78.8 79.2,143.2 177.2,143.2 22.9,0 44.8-3.1 66.7-10.2l98,39.9-32.3-77.7c29.3-26.5 44.9-60.3 44.9-95.1zm-379.5-62.4l-59.4,23.5 18.8-45c0,0-49-33.1-49-89 0-67.5 69.9-122.8 156.4-122.8s156.4,55.2 158.5,121.7c0,11.1-2,21.3-5.1,31.4-5.9-0.5-11.8-0.7-17.8-0.7-74.6,0-138.2,37.3-164.4,89.8-12-1-38-8.9-38-8.9zm268.9,174c-19.9,8-43.7,12.2-65.6,12.2-86.5,0-156.4-55.2-156.4-122.8 0-67.5 69.9-122.8 156.4-122.8s156.4,55.2 156.4,122.8c0,55.7-49,89-49,89l18.8,45-60.6-23.4z"})})}),"Chat"]})})})]}),t("div",{children:[e("h3",{className:"mb-4 ml-4 text-sm font-semibold text-bodydark2",children:"MANAGEMENT"}),t("ul",{className:"mb-6 flex flex-col gap-1.5",children:[e("li",{children:t(g,{to:"/member/users",className:`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${d.includes("users")&&"bg-graydark dark:bg-meta-4"}`,children:[t("svg",{className:"fill-current",width:"18",height:"19",viewBox:"0 0 18 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M9.0002 7.79065C11.0814 7.79065 12.7689 6.1594 12.7689 4.1344C12.7689 2.1094 11.0814 0.478149 9.0002 0.478149C6.91895 0.478149 5.23145 2.1094 5.23145 4.1344C5.23145 6.1594 6.91895 7.79065 9.0002 7.79065ZM9.0002 1.7719C10.3783 1.7719 11.5033 2.84065 11.5033 4.16252C11.5033 5.4844 10.3783 6.55315 9.0002 6.55315C7.62207 6.55315 6.49707 5.4844 6.49707 4.16252C6.49707 2.84065 7.62207 1.7719 9.0002 1.7719Z",fill:""}),e("path",{d:"M10.8283 9.05627H7.17207C4.16269 9.05627 1.71582 11.5313 1.71582 14.5406V16.875C1.71582 17.2125 1.99707 17.5219 2.3627 17.5219C2.72832 17.5219 3.00957 17.2407 3.00957 16.875V14.5406C3.00957 12.2344 4.89394 10.3219 7.22832 10.3219H10.8564C13.1627 10.3219 15.0752 12.2063 15.0752 14.5406V16.875C15.0752 17.2125 15.3564 17.5219 15.7221 17.5219C16.0877 17.5219 16.3689 17.2407 16.3689 16.875V14.5406C16.2846 11.5313 13.8377 9.05627 10.8283 9.05627Z",fill:""})]}),"Users"]})}),e("li",{children:t(g,{to:"/member/jobs",className:`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${d.includes("jobs")&&"bg-graydark dark:bg-meta-4"}`,children:[e("svg",{className:"fill-current",width:"18",height:"19",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{xmlns:"http://www.w3.org/2000/svg",className:"dashing_een",d:"M31.5,7H21V3.5C21,3.224,20.776,3,20.5,3h-9C11.224,3,11,3.224,11,3.5V7H0.5C0.224,7,0,7.224,0,7.5v20  C0,27.776,0.224,28,0.5,28h31c0.276,0,0.5-0.224,0.5-0.5v-20C32,7.224,31.776,7,31.5,7z M12,4h8v3h-8V4z M31,27H1V8h30V27z M6,11.5  v2C6,13.776,5.776,14,5.5,14S5,13.776,5,13.5v-2C5,11.224,5.224,11,5.5,11S6,11.224,6,11.5z M6,16.5v2C6,18.776,5.776,19,5.5,19  S5,18.776,5,18.5v-2C5,16.224,5.224,16,5.5,16S6,16.224,6,16.5z M6,21.5v2C6,23.776,5.776,24,5.5,24S5,23.776,5,23.5v-2  C5,21.224,5.224,21,5.5,21S6,21.224,6,21.5z M27,11.5v2c0,0.276-0.224,0.5-0.5,0.5S26,13.776,26,13.5v-2c0-0.276,0.224-0.5,0.5-0.5  S27,11.224,27,11.5z M27,16.5v2c0,0.276-0.224,0.5-0.5,0.5S26,18.776,26,18.5v-2c0-0.276,0.224-0.5,0.5-0.5S27,16.224,27,16.5z   M27,21.5v2c0,0.276-0.224,0.5-0.5,0.5S26,23.776,26,23.5v-2c0-0.276,0.224-0.5,0.5-0.5S27,21.224,27,21.5z"})}),"Jobs"]})})]})]})]})})]})},D=()=>{const[r,a]=l.useState(!1),[n,d]=l.useState({role:"",userInfo:{}});l.useRef(!0),x();const s=b();p(h=>h.auth.isAuthenticated);const o=p(h=>h.auth.userInfo),C=p(h=>h.users.roleList);return l.useEffect(()=>{w.defaults.headers.common.Authorization=localStorage.getItem("token"),s(k()),s(L())},[]),l.useEffect(()=>{!m(o)&&!m(o.id)&&H.emit("id",{id:o.id})},[o]),l.useEffect(()=>{!m(C)&&!m(o)&&d({role:C[o.role_id],userInfo:o})},[C]),e("div",{className:"dark:bg-boxdark-2 dark:text-bodydark",children:t("div",{className:"flex h-screen overflow-hidden",children:[e(B,{sidebarOpen:r,setSidebarOpen:a}),t("div",{className:"relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden",children:[e(R,{sidebarOpen:r,setSidebarOpen:a,headerInfo:n}),e("main",{children:e("div",{className:"mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10",children:e(V,{})})})]})]})})};export{D as default};
