import{j as t}from"./app.2069c097.js";import{B as l}from"./styleChecker.147b1434.js";function s({handleOnClickDelete:o,handleOnClickRestore:r,params:e}){return e.deleted_at?t(l,{className:"mr-2",type:"default",onClick:()=>r(e),children:"UNDO"}):t(l,{className:"mr-2",type:"default",onClick:()=>o(e),children:"SOFT DELETE"})}export{s as T};