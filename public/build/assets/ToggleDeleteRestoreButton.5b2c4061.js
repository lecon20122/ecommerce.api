import{j as t}from"./app.ceb08db3.js";import{B as l}from"./getScrollBarSize.04a7ec97.js";function s({handleOnClickDelete:o,handleOnClickRestore:r,params:e}){return e.deleted_at?t(l,{className:"mr-2",type:"default",onClick:()=>r(e),children:"UNDO"}):t(l,{className:"mr-2",type:"default",onClick:()=>o(e),children:"SOFT DELETE"})}export{s as T};
