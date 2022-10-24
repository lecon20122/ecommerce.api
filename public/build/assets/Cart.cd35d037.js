import{r as g,j as r,a as e,d as o}from"./app.c680bbd5.js";import f from"./client.cb954034.js";import{h as m}from"./index.m.9084c204.js";import"./footer.14618c8c.js";import"./UserOutline.d0e8c9ed.js";import"./index.52a35bea.js";import"./assertThisInitialized.eb69e595.js";import"./index.1c40f768.js";import"./index.b3d31cad.js";function E({items:p,cartSubTotal:l}){const[i,h]=g.exports.useState(0),u=a=>{o.Inertia.post(m("client.update.cart.item.quantity",{variation:a}),{quantity:i},{preserveState:!1})},b=p.variations.map(a=>{var s,n,c,d;return r("div",{children:[r("div",{className:"flex flex-wrap lg:flex-row gap-5  mb-4",children:[r("div",{className:"flex space-x-5 items-center flex-space-between w-full lg:w-2/5 xl:w-2/4",children:[r("figure",{className:"flex leading-5",children:[e("div",{children:e("div",{className:"block w-16 h-16 rounded border border-gray-200 overflow-hidden",children:e("img",{src:a.parent.variation_images[0].original_url,alt:"Title"})})}),r("figcaption",{className:"ml-3",children:[r("p",{className:"mt-1 text-gray-400",children:[" ",(s=a.variation_type)==null?void 0:s.type.en," : ",(n=a.variation_type_value)==null?void 0:n.value.en]}),r("p",{className:"mt-1 text-gray-400",children:[" ",(c=a.parent.variation_type)==null?void 0:c.type.en," : ",(d=a.parent.variation_type_value)==null?void 0:d.value.en]})]})]}),e("div",{className:"",children:r("div",{className:"w-24 relative flex space-x-1 items-center justify-center",children:[e("input",{type:"number",onChange:t=>h(parseInt(t.target.value)),defaultValue:a.pivot.quantity,min:1,max:a.stock_count,className:"block appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"}),e("button",{className:"text-blue-600",disabled:i==0,onClick:t=>u(a),children:"update"})]})}),e("div",{children:r("div",{className:"leading-5",children:[r("p",{className:"font-semibold not-italic",children:["EGP ",a.pivot.quantity*parseFloat(a.pivot.price)]}),r("small",{className:"text-gray-400",children:[" EGP ",a.price," x ",a.pivot.quantity," "]})]})})]}),e("div",{className:"flex-auto",children:e("div",{className:"float-right flex space-x-1",children:e("div",{onClick:t=>x(a),className:"px-4 py-2 inline-block text-red-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer",children:" Remove"})})})]}),e("hr",{className:"my-4"})]},a.id)}),x=a=>{o.Inertia.post(m("client.remove.item.from.cart",{variation:a}),void 0,{preserveState:!1})};return r(f,{children:[e("section",{className:"py-5 sm:py-7 bg-blue-100",children:e("div",{className:"container max-w-screen-xl mx-auto px-4",children:e("h2",{className:"text-3xl font-semibold mb-2",children:"Shopping cart"})})}),e("section",{className:"py-10",children:e("div",{className:"container max-w-screen-xl mx-auto px-4",children:r("div",{className:"flex flex-col md:flex-row gap-4",children:[e("main",{className:"md:w-3/4",children:r("article",{className:"border border-gray-200 bg-white shadow-sm rounded mb-5 p-3 lg:p-5",children:[b,e("h6",{className:"font-bold",children:"Free Delivery within 1-2 weeks"}),e("p",{className:"text-gray-400",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"})]})}),e("aside",{className:"md:w-1/4",children:r("article",{className:"border border-gray-200 bg-white shadow-sm rounded mb-5 p-3 lg:p-5",children:[r("ul",{className:"mb-5",children:[r("li",{className:"flex justify-between text-gray-600  mb-1",children:[e("span",{children:"Cart subtotal:"}),r("span",{children:["EGP ",l]})]}),r("li",{className:"text-lg font-bold border-t flex justify-between mt-3 pt-3",children:[e("span",{children:"Total price:"}),r("span",{children:["EGP ",l]})]})]}),e("a",{className:"px-4 py-3 mb-2 inline-block text-lg w-full text-center font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700",href:"#",children:" Checkout "}),e("a",{className:"px-4 py-3 inline-block text-lg w-full text-center font-medium text-green-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100",href:"#",children:" Back to shop "})]})})]})})})]})}export{E as default};
