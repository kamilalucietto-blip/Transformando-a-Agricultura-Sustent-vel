// MENU MOBILE
const mobileMenu = document.querySelector('.mobile-menu');
const menu = document.querySelector('nav ul');

mobileMenu.addEventListener('click', () => {
    menu.classList.toggle('show');
});

// ANIMAÇÃO AO ROLAR
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => {
    observer.observe(section);
});

// CONTADOR ANIMADO
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / 200;

        if(count < target){
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 20);
        } else {
            counter.innerText = target;
        }
    };
    const observerCounter = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                updateCount();
                observerCounter.unobserve(counter);
            }
        });
    }, {threshold: 0.5});
    observerCounter.observe(counter);
});

// BOTÃO VOLTAR AO TOPO
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if(window.scrollY > 300){
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
});

// VALIDAÇÃO SIMPLES DO FORMULÁRIO
const form = document.getElementById('contactForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if(nome === '' || email === '' || mensagem === ''){
        alert('Por favor, preencha todos os campos!');
        return;
    }
    alert('Mensagem enviada com sucesso!');
    form.reset();
});