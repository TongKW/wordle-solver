(()=>{"use strict";!async function(){!function(e){for(var r=document.querySelector("game-app").shadowRoot.querySelector("game-theme-manager").querySelector("game-keyboard").shadowRoot,t=0;t<e.length;t++){var o=e.charAt(t);r.querySelector(`button[data-key='${o}']`).click()}r.querySelector("button[data-key='↵']").click()}("crane"),await new Promise((e=>setTimeout(e,2500)));var e=function(e){for(var r=document.querySelector("game-app").shadowRoot.querySelector("game-theme-manager").querySelector("#board").children[0].shadowRoot.querySelector("div[class='row']").children,t="",o=0;o<5;o++){var a=r[o].getAttribute("evaluation");"present"===a&&(t+="P"),"absent"===a&&(t+="A"),"correct"===a&&(t+="C")}return t}();console.log(e)}()})();