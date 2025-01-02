document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".background, .title, .description, .price-button, .whatsapp-button, .social-icons img");
    elements.forEach((el, index) => {
        el.style.opacity = 0;
        setTimeout(() => {
            el.style.transition = "opacity 1s ease";
            el.style.opacity = 1;
        }, index * 500); // تأخير زمني بين كل عنصر
    });
});