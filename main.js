import './main.scss';
import './mixins.scss'
import 'normalize.css/normalize.css';

// Remove loader and add .log, after page loaded
window.addEventListener('load', () => {
    document.getElementById('loader-wrapper').classList.add('hidden');

    console.log('РУССКИЙ ВОЕННЫЙ КОРАБЛЬ, ИДИ НА Х*Й');
    console.log('RUSSIAN WARSHIP, GO F*CK YOURSELF');
});

// Scroll to anchor
document.querySelectorAll('a.scrollTo[href^="#"]')
    .forEach(target =>
        target.addEventListener("click", function (event) {
            event.preventDefault();
            document.querySelector(this.getAttribute("href"))
                .scrollIntoView({behavior: "smooth"});
        })
    );

const body = document.body;
const burger = document.getElementById('btn-burger');
const sidebar = document.getElementById('sidebar');
const patrioticWrapper = document.getElementById('patrioticWrapper');
const mainContent = document.getElementById('mainContent');
const sidebarNavs = document.querySelectorAll('.sidebar__nav-link');

// Toggle sidebar on mobile and tablet
const toggleSidebar = () => {
    body.classList.toggle('overflow-hidden')
    burger.classList.toggle('active');
    sidebar.classList.toggle('active');
    patrioticWrapper.classList.toggle('blurred');
    mainContent.classList.toggle('blurred');

    mainContent.addEventListener('click', closeSidebar, false);
    sidebarNavs.forEach(item => item.addEventListener('click', closeSidebar, false));
};

burger.addEventListener('click', toggleSidebar, false);

// Close sidebar on mobile and tablet on main content click
const closeSidebar = () => {
    sidebar.classList.contains('active') && toggleSidebar();

    mainContent.removeEventListener('click', closeSidebar, false);
    sidebarNavs.forEach(item => item.removeEventListener('click', closeSidebar, false));
};

// TODO: May be for future
// Style sidebar link and close sidebar on sidebar link click
// const onSidebarLinkClick = event => {
//     sidebarNavs.forEach(item => item.classList.remove('active'));
//     event.target.classList.add('active');
//
//     sidebar.classList.contains('active') && toggleSidebar();
// };
//
// sidebarNavs.forEach(item => item.addEventListener('click', onSidebarLinkClick, false));
