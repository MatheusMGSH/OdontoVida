// =========================================
// MENU MOBILE
// =========================================

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

menuButton.addEventListener("click", () => {

    nav.classList.toggle("active");

    const icon = menuButton.querySelector("i");

    if (nav.classList.contains("active")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


// Fecha o menu ao clicar em um link

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        const icon = menuButton.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


// =========================================
// FAQ
// =========================================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question =
        item.querySelector(".faq-question");

    const answer =
        item.querySelector(".faq-answer");


    question.addEventListener("click", () => {

        const isOpen =
            item.classList.contains("active");


        // Fecha todos os outros

        faqItems.forEach(otherItem => {

            otherItem.classList.remove("active");

            const otherAnswer =
                otherItem.querySelector(".faq-answer");

            otherAnswer.style.maxHeight = null;

        });


        // Abre o selecionado

        if (!isOpen) {

            item.classList.add("active");

            answer.style.maxHeight =
                answer.scrollHeight + "px";

        }

    });

});


// =========================================
// MÁSCARA DE TELEFONE
// =========================================

const phoneInput =
    document.getElementById("phone");

phoneInput.addEventListener("input", () => {

    let value =
        phoneInput.value.replace(/\D/g, "");

    value =
        value.substring(0, 11);


    if (value.length <= 10) {

        value = value.replace(
            /^(\d{2})(\d{4})(\d{0,4})/,
            "($1) $2-$3"
        );

    } else {

        value = value.replace(
            /^(\d{2})(\d{5})(\d{0,4})/,
            "($1) $2-$3"
        );

    }

    phoneInput.value = value;

});


// =========================================
// FORMULÁRIO → WHATSAPP
// =========================================

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", (event) => {

    event.preventDefault();


    const name =
        document.getElementById("name")
            .value
            .trim();


    const phone =
        document.getElementById("phone")
            .value
            .trim();


    const service =
        document.getElementById("service")
            .value;


    const message =
        document.getElementById("message")
            .value
            .trim();


    if (!name || !phone || !service) {

        alert(
            "Preencha seu nome, WhatsApp e o serviço de interesse."
        );

        return;

    }


    // Número da Odonto Vida

    const whatsappNumber =
        "556791859723";


    let whatsappMessage =
        `Olá, Odonto Vida!%0A%0A` +

        `Meu nome é: ${encodeURIComponent(name)}%0A` +

        `Meu WhatsApp: ${encodeURIComponent(phone)}%0A` +

        `Tenho interesse em: ${encodeURIComponent(service)}`;


    if (message) {

        whatsappMessage +=
            `%0A%0AMensagem:%0A${encodeURIComponent(message)}`;

    }


    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;


    window.open(
        whatsappURL,
        "_blank"
    );

});


// =========================================
// ANIMAÇÕES
// =========================================

const elementsToReveal =
    document.querySelectorAll(
        ".service-card, " +
        ".clinic-feature, " +
        ".difference-item, " +
        ".contact-item, " +
        ".contact-form, " +
        ".difference-card"
    );


elementsToReveal.forEach(element => {

    element.classList.add("reveal");

});


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


elementsToReveal.forEach(element => {

    observer.observe(element);

});


// =========================================
// HEADER AO ROLAR
// =========================================

const header =
    document.getElementById("header");


window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.style.boxShadow =
            "0 8px 30px rgba(30, 80, 90, 0.08)";

    } else {

        header.style.boxShadow = "none";

    }

});