import{c as n,e as u}from"./assets/close-1b2cca70.js";/* empty css                      */import{i as r}from"./assets/vendor-651d7991.js";const m="/goit-js-hw-10/assets/ok-7373b1bd.svg",i=document.querySelector("form");i.addEventListener("submit",function(c){c.preventDefault();const f=document.querySelector('[name="delay"]'),a=document.querySelector('[name="state"]:checked'),t=parseInt(f.value),l=a.value;new Promise((e,o)=>{setTimeout(()=>{l==="fulfilled"?e(t):o(t)},t)}).then(e=>{r.success({title:"",message:`Fulfilled promise in ${e} ms`,timeout:5e3,position:"topCenter",messageColor:"#ffffff",messageSize:"16px",backgroundColor:"#59a10d",iconColor:"#ffffff",iconUrl:m,close:!1,buttons:[[`<button type="button" style="background-color: #59a10d" ><img src=${n}></button>`,function(o,s){o.hide({transitionOut:"fadeOut"},s)}]]})}).catch(e=>{r.error({title:"",message:`Rejected promise in ${e} ms`,position:"topCenter",messageColor:"#ffffff",messageSize:"16px",backgroundColor:"#ef4040",iconColor:"#ffffff",iconUrl:u,timeout:5e3,close:!1,buttons:[[`<button type="button" style="background-color: #EF4040" ><img src=${n}></button>`,function(o,s){o.hide({transitionOut:"fadeOut"},s)}]]})}),i.reset()});
//# sourceMappingURL=commonHelpers2.js.map