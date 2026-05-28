// تشغيل القائمة المتجاوبة للهواتف الذكية
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-links');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// إغلاق القائمة تلقائياً عند الضغط على أي رابط خارجي
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('is-active');
        menuLinks.classList.remove('active');
    });
});

// تفعيل ميزة النزول الذكي الفعال وتحديث الرابط النشط عند التمرير
window.addEventListener('scroll', () => {
    let scrollLocation = window.scrollY;
    
    document.querySelectorAll('section').forEach(section => {
        let sectionTop = section.offsetTop - 100;
        let sectionHeight = section.offsetHeight;
        let id = section.getAttribute('id');
        
        if(scrollLocation >= sectionTop && scrollLocation < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-links a').forEach(links => {
                links.classList.remove('active');
                document.querySelector('.nav-links a[href*=' + id + ']').classList.add('active');
            });
        }
    });
});
