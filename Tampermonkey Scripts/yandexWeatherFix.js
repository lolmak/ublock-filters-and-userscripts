// ==UserScript==
// @name         Yandex погода Fix
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  Перемещает кнопку настроек вправо!
// @author       lolmak
// @match        *://*.yandex.ru/pogoda/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=yandex.ru/pogoda/
// @grant        none
// @homepageURL  https://github.com/lolmak/ublock-filters-and-userscripts
// @updateURL    https://raw.githubusercontent.com/lolmak/ublock-filters-and-userscripts/refs/heads/main/Tampermonkey%20Scripts/yandexWeatherFix.js
// @downloadURL  https://raw.githubusercontent.com/lolmak/ublock-filters-and-userscripts/refs/heads/main/Tampermonkey%20Scripts/yandexWeatherFix.js
// ==/UserScript==

(function () {
    'use strict';

    function moveSettingButton() {
        console.log('Активирован GS скрипт');
        document.querySelectorAll('[class*="AppSettings_button__"]').forEach(el => {
            if (el) {
                el.style.justifySelf = 'start';
            }
        });
    }

    // Запускаем при загрузке страницы и наблюдаем за изменениями
    moveSettingButton();
    const observer = new MutationObserver(moveSettingButton);
    observer.observe(document.body, { childList: true, subtree: true });
})();