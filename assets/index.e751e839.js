import{j as m,r as u,a as y,d as g,F as x,R as N,b}from"./vendor.3d1366dc.js";const v=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const c of e)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const c={};return e.integrity&&(c.integrity=e.integrity),e.referrerpolicy&&(c.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?c.credentials="include":e.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(e){if(e.ep)return;e.ep=!0;const c=a(e);fetch(e.href,c)}};v();const r=m.exports.jsx,s=m.exports.jsxs;function w(t){return s("div",{className:t.class,children:[t.children,r("hr",{}),r("p",{children:"Bottom Area, Footer"})]})}var F="/assets/gradient.e0451430.svg";const D={backgroundImage:`url(${F})`,backgroundPosition:"center",backgroundSize:"fit",backgroundRepeat:"no-repeat"},S={padding:"90px"},h={alignItems:"center",justifyContent:"center",content:""},P=async t=>await t.text(),j=(t,n=";")=>{const a=t.slice(0,t.indexOf(`
`)).replace(/\r/g,"").split(n),e=t.slice(t.indexOf(`
`)+1,t.length).replace(/\r/g,"").split(`
`).map(c=>{const i=c.split(n);return a.reduce((l,p,f)=>(l[p]=i[f],l),{})});return console.log(e),{csvData:e,csvHeader:a}},k=async t=>{const n=new FileReader;return new Promise((a,o)=>{n.onerror=()=>{n.abort(),o(new DOMException("Problem parsing input file."))},n.onload=()=>{a(n.result)},n.readAsBinaryString(t)})},O=(t,n,a)=>{var o=[],e=0;for(e=0;e<=n.length-1;e++)o[n[e]]=t[a][Object.keys(t[a])[e]];return console.log(o),o};function C(t){return new Promise(n=>setTimeout(n,t))}const R=async(t,n,a)=>{const o=await k(a);var e=0;for(e=0;e<=t.length-2;e++){const i=new y(o),d=new g(i,{paragraphLoop:!0,linebreaks:!0}),l=O(t,n,e);d.render(l);const p=d.getZip().generate({type:"blob",mimeType:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"});var c=String(t[e][Object.keys(t[e])[0]]);x.exports.saveAs(p,c),await C(250)}},A=async(t,n)=>{const a=await P(t),{csvData:o,csvHeader:e}=j(a);R(o,e,n)};function I(){const[t,n]=u.exports.useState(),[a,o]=u.exports.useState();return s("div",{children:[r("div",{style:D,className:"container-fluid p-0",children:r("p",{style:S,className:"h1 text-center",children:"Create PDFs from Spreadsheet Data"})}),s("div",{className:"container-sm shadow rounded py-3 px-3",children:[s("div",{className:"row py-3",children:[s("form",{id:"csv-form",className:"col-md-6 text-center",children:[r("p",{className:"h5",children:"Upload CSV File"}),s("div",{className:"container border rounded px-3 py-3 text-center",children:[r("p",{className:"py-3 text-secondary",children:"Drop your CSV file here"}),r("input",{style:h,type:"file",accept:".csv",onChange:e=>n(e.target.files[0])})]})]}),s("form",{className:"col-md-6",children:[r("p",{className:"h5",children:"Upload Word File"}),s("div",{className:"container border rounded dashed px-3 py-3",children:[r("p",{className:"py-3 text-secondary",children:"Drop your DOCX file here"}),r("input",{style:h,type:"file",accept:".docx",onChange:e=>o(e.target.files[0])})]})]})]}),r("div",{className:"row-md-6 py-3",children:r("button",{type:"button",className:"btn btn-dark px-3",onClick:e=>{e.preventDefault(),t&&a&&A(t,a)},children:"Generate PDFs"})})]})]})}const L={padding:"90px"};function B(){console.log("nicer button")}function E(){return u.exports.useState(),s("div",{children:[r("div",{className:"container-fluid p-0",children:s("p",{style:L,className:"h1 text-center",children:["Voil\xE1!",r("br",{}),r("p",{className:"h4 mt-3",children:"Your PDFs have been created"})]})}),r("div",{className:"container-sm shadow rounded py-3 px-3",children:s("div",{className:"row py-3",children:[s("form",{id:"csv-form",className:"col-md-6 text-center",children:[r("p",{className:"h5",children:" See all your PDF files"}),r("div",{className:"container border rounded px-3 py-3 text-center",children:s("p",{className:"py-3 text-secondary",children:["File Name (1)",r("br",{}),"File Name (2)",r("br",{}),"File Name (3)",r("br",{}),"File Name (4)",r("br",{}),"File Name (5)"]})})]}),s("form",{className:"col-md-6",children:[r("p",{className:"h5",children:"Download all your PDF files in ZIP"}),s("div",{className:"container border rounded dashed px-3 py-3",children:[r("p",{className:"py-3 text-secondary",children:"The ZIP files includes all your PDFs"}),r("button",{type:"button",className:"btn btn-primary",onClick:B,children:"Download file"})]})]})]})})]})}var M="/assets/logo.d3e328be.png";function Z(){return s("div",{className:"bg-white shadow-sm font-sans d-flex py-3 px-6 w-full justify-content-between",children:[r("div",{className:"mr-auto",children:r("a",{href:"/",children:r("img",{className:"px-3",src:M,width:"80",height:"50",alt:"app logo"})})}),r("div",{className:"d-flex px-3",children:r("a",{className:"text-black text-center",href:"/",children:"Header Right"})})]})}function H(){return r("div",{className:"App bg-white min-h-screen",children:s(w,{children:[r(Z,{}),r(I,{}),r(E,{})]})})}N.render(r(b.StrictMode,{children:r(H,{})}),document.getElementById("root"));
