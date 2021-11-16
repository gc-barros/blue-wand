const target = document.querySelectorAll("[data-anime]");
const animationClass = "animate";

if (target.length) {
    window.addEventListener("scroll", function () {
        animeScroll();
    });
}

function animeScroll() {
    const windowMetade = window.innerHeight * 0.65;

    target.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const isElementVisible = elementTop - windowMetade < 0;

        if (isElementVisible) {
            element.classList.add(animationClass);
        } else {
            element.classList.remove(animationClass);
        }
    });
}

animeScroll();
