import './main.scss';
import './mixins.scss'
import 'normalize.css/normalize.css';

// Scroll to anchor
document.querySelectorAll('a.scrollTo[href^="#"]')
    .forEach(target =>
        target.addEventListener("click", function (event) {
            event.preventDefault();
            document.querySelector(this.getAttribute("href"))
                .scrollIntoView({behavior: "smooth"});
        })
    );

// Toggle sidebar on mobile and tablet
const body = document.body;
const burger = document.getElementById('btn-burger');
const sidebar = document.getElementById('sidebar');
const patrioticWrapper = document.getElementById('patrioticWrapper');
const mainContent = document.getElementById('mainContent');

const toggleSidebar = () => {
    body.classList.toggle('overflow-hidden')
    burger.classList.toggle('active');
    sidebar.classList.toggle('active');
    patrioticWrapper.classList.toggle('blurred');
    mainContent.classList.toggle('blurred');
};

burger.addEventListener('click', toggleSidebar, false);

// Close sidebar on mobile and tablet on main content click
const closeSidebar = () => sidebar.classList.contains('active') && toggleSidebar();

mainContent.addEventListener('click', closeSidebar, false);

// Close sidebar on sidebar link click
const sidebarNavs = document.querySelectorAll('.sidebar__nav-link');

sidebarNavs.forEach(item => item.addEventListener('click', closeSidebar, false));
