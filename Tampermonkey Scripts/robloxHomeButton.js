// ==UserScript==
// @name         Roblox GS
// @namespace    http://tampermonkey.net/
// @version      0.0.2
// @description  Меняю Roblox как могу!
// @author       lolmak
// @match        *://*.roblox.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=roblox.com
// @grant        none
// @homepageURL  https://github.com/lolmak/ublock-filters-and-userscripts
// @updateURL    https://raw.githubusercontent.com/lolmak/ublock-filters-and-userscripts/refs/heads/main/Tampermonkey%20Scripts/robloxHomeButton.js
// @downloadURL  https://raw.githubusercontent.com/lolmak/ublock-filters-and-userscripts/refs/heads/main/Tampermonkey%20Scripts/robloxHomeButton.js


// ==/UserScript==

const svg = `
<svg
   width="28"
   height="28"
   viewBox="0 0 7.408333 7.4083335"
   version="1.1"
   id="svg1"
   xml:space="preserve"
   inkscape:version="1.3.2 (091e20e, 2023-11-25, custom)"
   sodipodi:docname="penis.svg"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg"><sodipodi:namedview
     id="namedview1"
     pagecolor="#ffffff"
     bordercolor="#000000"
     borderopacity="0.25"
     inkscape:showpageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="0"
     inkscape:deskcolor="#d1d1d1"
     inkscape:document-units="px"
     inkscape:zoom="10.262299"
     inkscape:cx="14.714053"
     inkscape:cy="20.90175"
     inkscape:window-width="1920"
     inkscape:window-height="1009"
     inkscape:window-x="-8"
     inkscape:window-y="-8"
     inkscape:window-maximized="1"
     inkscape:current-layer="layer1" /><defs
     id="defs1"><filter
       inkscape:collect="always"
       style="color-interpolation-filters:sRGB"
       id="filter1"
       x="-0.70960817"
       y="-0.71570499"
       width="2.4192163"
       height="2.43141"><feGaussianBlur
         inkscape:collect="always"
         stdDeviation="1.9432305"
         id="feGaussianBlur1" /></filter></defs><g
     inkscape:label="Слой 1"
     inkscape:groupmode="layer"
     id="layer1"><path
       style="opacity:1;fill:#0000ff;stroke:none;stroke-width:1.3118;filter:url(#filter1)"
       d="m 0.78391918,7.1099647 c 0.0911534,0 1.33083952,0.054692 2.07829722,-0.01823 0.747458,-0.072923 0.4922285,-0.2369986 1.2214556,-0.1276146 0.7292271,0.1093841 0.9479952,0.1640761 1.7501452,0.1640761 0.8021499,0 1.1849941,0.4193056 1.1485326,-0.346383 C 6.9458887,6.0161251 7.4563474,5.6150501 6.9094272,4.9952071 6.3625068,4.375364 6.0343547,4.4665174 5.5968182,4.0654425 5.1592821,3.6643675 5.3598196,4.0836722 5.049898,3.0992164 4.7399765,2.1147587 4.8675911,1.9324519 4.5212084,1.476685 4.1748254,1.020918 4.3935935,0.69276578 3.6461358,0.72922714 2.8986779,0.76568849 2.3517576,0.58338172 2.2788348,1.2943782 2.2059121,2.0053746 2.2423735,2.2970655 2.3882189,2.9169087 2.5340643,3.5367518 3.0262928,3.7008278 2.4246803,4.02898 1.8230679,4.3571321 1.7866065,4.3753629 1.3308395,4.5759004 0.87507259,4.7764379 0.65630443,4.7399765 0.61984307,5.1775127 0.58338172,5.6150491 0.56515102,5.9614318 0.67453512,6.2348921 0.78391918,6.5083522 0.78391918,7.1099647 0.78391918,7.1099647 Z"
       id="path1"
       transform="matrix(0.77136365,0,0,0.85568344,0.71901353,0.46306664)" /><ellipse
       style="fill:#333333;stroke:none;stroke-width:0.774508"
       id="path2"
       cx="2.0954254"
       cy="5.7809362"
       rx="1.1915418"
       ry="1.1028122" /><ellipse
       style="fill:#333333;stroke:none;stroke-width:0.774508"
       id="path2-9"
       cx="5.2780762"
       cy="5.8007607"
       rx="1.1915418"
       ry="1.1028122" /><ellipse
       style="fill:#333333;stroke:none;stroke-width:0.774508"
       id="path3"
       cx="3.6544518"
       cy="3.73137"
       rx="0.94655186"
       ry="2.5281453" /></g></svg>
`;

(function () {
    'use strict';

    function replaceText() {
        console.log('Активирован GS скрипт');
        document.querySelectorAll('.font-header-2.dynamic-ellipsis-item').forEach(el => {
            if (el.textContent.includes('Home')) {
                el.textContent = el.textContent.replace('Home', 'Нахуй');
                el.title = 'Нахуй';
            }
        });
        document.querySelectorAll('.icon-nav-home').forEach(el => {
            const wrapper = document.createElement('div');
            wrapper.innerHTML = svg;
            el.replaceWith(wrapper.firstElementChild); // заменяет span на SVG
        });
    }

    // Запускаем при загрузке страницы и наблюдаем за изменениями
    replaceText();
    const observer = new MutationObserver(replaceText);
    observer.observe(document.body, { childList: true, subtree: true });
})();