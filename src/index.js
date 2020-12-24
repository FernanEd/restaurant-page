import { HOME_CONTENT } from '../src/tab_home.js';
import { MENU_CONTENT } from '../src/tab_menu.js';
import { CONTACT_CONTENT } from '../src/tab_contact.js';


const TABS = (() => {
    let home_tab = document.querySelector("#home-tab");
    let menu_tab = document.querySelector("#menu-tab");
    let contact_tab = document.querySelector("#contact-tab");

    const makeTabLogic = () => {
        const TABS = [home_tab, menu_tab, contact_tab]
        TABS.forEach(tab => {
            tab.addEventListener("click", e => {
                deselectTabs(TABS);
                selectTab(tab);
            });
        })
    }
    
    const deselectTabs = TABS => {
        TABS.forEach(tab => tab.classList.remove('tab-selected'));
    }

    const selectTab = (tab) => {
        tab.classList.add('tab-selected');
        console.log(tab.id);
        let currentPage;
        switch(tab.id){
            case 'home-tab':
                currentPage = HOME_CONTENT;
                break;
            case 'menu-tab':
                currentPage = MENU_CONTENT;
                break;
            case 'contact-tab':
                currentPage = CONTACT_CONTENT;
                break;
        }
        DISPLAY.showPage(currentPage);
    }

    return { makeTabLogic }
})();


const DISPLAY = (() => {
    const CONTENTDIV = document.querySelector("#content");
    const showPage = contents => {
        CONTENTDIV.innerHTML = "";
        CONTENTDIV.append(contents);
    }

    return { showPage }
})();

DISPLAY.showPage(HOME_CONTENT);
TABS.makeTabLogic();