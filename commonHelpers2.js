import{c as i,e as u}from"./assets/close-1b2cca70.js";/* empty css                      */import{i as r}from"./assets/vendor-651d7991.js";const l="/goit-js-hw-10/assets/ok-7373b1bd.svg";document.addEventListener("submit",function(c){c.preventDefault();const n=document.querySelector('[name="delay"]'),f=document.querySelector('[name="state"]:checked'),o=parseInt(n.value),a=f.value;new Promise((e,t)=>{setTimeout(a==="fulfilled"?()=>e(o):()=>t(o),o)}).then(e=>{r.success({title:"",message:`Fulfilled promise in ${e} ms`,timeout:5e3,position:"topCenter",messageColor:"#ffffff",messageSize:"16px",backgroundColor:"#59a10d",iconColor:"#ffffff",iconUrl:l,close:!1,buttons:[[`<button type="button" style="background-color: #59a10d" ><img src=${i}></button>`,function(t,s){t.hide({transitionOut:"fadeOut"},s)}]]})}).catch(e=>{r.error({title:"",message:`Rejected promise in ${e} ms`,position:"topCenter",messageColor:"#ffffff",messageSize:"16px",backgroundColor:"#ef4040",iconColor:"#ffffff",iconUrl:u,timeout:5e3,close:!1,buttons:[[`<button type="button" style="background-color: #EF4040" ><img src=${i}></button>`,function(t,s){t.hide({transitionOut:"fadeOut"},s)}]]})}),n.value=""});
//# sourceMappingURL=commonHelpers2.js.map
