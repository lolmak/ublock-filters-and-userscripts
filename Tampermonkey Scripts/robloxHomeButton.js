// ==UserScript==
// @name         Roblox GS
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  Меняю Roblox как могу!
// @author       lolmak
// @match        *://*.roblox.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=roblox.com
// @grant        none
// ==/UserScript==

const svg = `
<svg
   width="28"
   height="28"
   viewBox="0 0 13.229166 13.229167"
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
     inkscape:zoom="7.2565409"
     inkscape:cx="50.850675"
     inkscape:cy="23.358237"
     inkscape:window-width="1920"
     inkscape:window-height="1009"
     inkscape:window-x="-8"
     inkscape:window-y="-8"
     inkscape:window-maximized="1"
     inkscape:current-layer="layer1" /><defs
     id="defs1" /><g
     inkscape:label="Слой 1"
     inkscape:groupmode="layer"
     id="layer1"><ellipse
       style="fill:#333333;stroke:none;stroke-width:1.64799"
       id="path2"
       cx="3.5259438"
       cy="10.441869"
       rx="2.4506052"
       ry="2.427702" /><ellipse
       style="fill:#333333;stroke:none;stroke-width:1.64799"
       id="path2-9"
       cx="10.071598"
       cy="10.48551"
       rx="2.4506052"
       ry="2.427702" /><ellipse
       style="fill:#333333;stroke:none;stroke-width:1.64799"
       id="path3"
       cx="6.7323427"
       cy="5.9300065"
       rx="1.9467424"
       ry="5.565393" /></g></svg>
`;

(function () {
    'use strict';

    function replaceText() {
        console.log('Активирован GS скрипт');
        document.querySelectorAll('.font-header-2.dynamic-ellipsis-item').forEach(el => {
            if (el.textContent.includes('Home')) {
                el.textContent = el.textContent.replace('Home', 'нахуй');
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