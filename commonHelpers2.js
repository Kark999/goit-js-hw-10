import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{i as o}from"./assets/vendor-651d7991.js";document.addEventListener("DOMContentLoaded",function(){document.querySelector(".form").addEventListener("submit",function(s){s.preventDefault();const r=document.querySelector('[name="delay"]'),i=document.querySelector('[name="state"]:checked'),e=parseInt(r.value),n=i?i.value:null;if(isNaN(e)||e<=0||!n){o.error({title:"Error",message:"Invalid input. Please enter a valid delay and choose a state.",position:"topCenter",timeout:5e3});return}new Promise((t,a)=>{setTimeout(()=>{n==="fulfilled"?t(e):a(e)},e)}).then(t=>{o.success({title:"Success",message:`✅ Fulfilled promise in ${t}ms`,position:"topCenter",timeout:5e3})}).catch(t=>{o.error({title:"Error",message:`❌ Rejected promise in ${t}ms`,position:"topCenter",timeout:5e3})})})});
//# sourceMappingURL=commonHelpers2.js.map