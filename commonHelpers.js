import{e as m,c as h}from"./assets/close-1b2cca70.js";/* empty css                      */import{f as y}from"./assets/vendor-651d7991.js";const r=document.querySelector(".start");document.querySelector(".timer");let i;y("#datetime-picker",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose:function(e){const t=e[0];t<new Date?(r.disabled=!0,iziToast.show({title:"",message:"Please choose a date in the future",class:"error-message",position:"topCenter",titleColor:"#ffffff",titleSize:"16px",titleLineHeight:"1.5",messageColor:"#ffffff",messageSize:"16px",messageLineHeight:"1.5",backgroundColor:"#ef4040",iconColor:"#ffffff",iconUrl:m,timeout:0,close:!1,buttons:[[`<button type="button" style="background-color: #EF4040" ><img src=${h}></button>`,function(o,n){o.hide({transitionOut:"fadeOut"},n)}]]})):(r.disabled=!1,i=t)}});function g(e){const u=Math.floor(e/864e5),d=Math.floor(e%864e5/36e5),l=Math.floor(e%864e5%36e5/6e4),f=Math.floor(e%864e5%36e5%6e4/1e3);return{days:u,hours:d,minutes:l,seconds:f}}function s(e){return e.toString().padStart(2,"0")}function a(e){const t=document.querySelector("[data-days]"),o=document.querySelector("[data-hours]"),n=document.querySelector("[data-minutes]"),c=document.querySelector("[data-seconds]");t.textContent=s(e.days),o.textContent=s(e.hours),n.textContent=s(e.minutes),c.textContent=s(e.seconds)}function p(){r.disabled=!0;const e=setInterval(function(){const t=new Date,o=i-t;if(o<=0)clearInterval(e),a({days:0,hours:0,minutes:0,seconds:0});else{const n=g(o);a(n)}},1e3)}r.addEventListener("click",function(){p()});
//# sourceMappingURL=commonHelpers.js.map
