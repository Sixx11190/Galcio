// 1. Selecionando os elementos no DOM
const navAuthBtn = document.getElementById('btn-auth');
const modal = document.getElementById('auth-modal');
const closeBtn = document.getElementById('close-modal');
const tabSignin = document.getElementById('tab-signin');
const tabSignup = document.getElementById('tab-signup');
const formSignin = document.getElementById('form-signin');
const formSignup = document.getElementById('form-signup');

if (navAuthBtn && modal) {
    navAuthBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.remove('hidden');
    });
}

if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
    });
}

if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });
}

if (tabSignin && tabSignup && formSignin && formSignup) {
    tabSignin.addEventListener('click', () => {
     tabSignin.classList.add('active');
     tabSignup.classList.remove('active');
     formSignin.classList.remove('hidden');
     formSignup.classList.add('hidden');
    });
}

tabSignup.addEventListener('click', () => {
    tabSignup.classList.add('active');
    tabSignin.classList.remove('active');
    formSignup.classList.remove('hidden');
    formSignin.classList.add('hidden');
});

const openSidebar = document.getElementById('open-sidebar');
const closeSidebar = document.getElementById('close-sidebar');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');

function toggleSidebar() {
 if (sidebar && sidebarOverlay);
    sidebar.classList.toggle('active');
    sidebarOverlay.classList.toggle('active');
}

if (openSidebar && closeSidebar && sidebarOverlay) {
    openSidebar.addEventListener('click', toggleSidebar);
    closeSidebar.addEventListener('click', toggleSidebar);
    sidebarOverlay.addEventListener('click', toggleSidebar);
}