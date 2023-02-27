document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('[data-form="log"]').addEventListener('click', () => {
        document.querySelector('[data-form="reg"]').classList.remove('form__nav_btn-active');
        document.querySelector('[data-form="log"]').classList.add('form__nav_btn-active');

        document.querySelector('[data-form="logWindow"]').classList.remove('form__content-pass');
        document.querySelector('[data-form="regWindow"]').classList.add('form__content-pass');

    });

    document.querySelector('[data-form="reg"]').addEventListener('click', () => {
        document.querySelector('[data-form="log"]').classList.remove('form__nav_btn-active');
        document.querySelector('[data-form="reg"]').classList.add('form__nav_btn-active');

        document.querySelector('[data-form="regWindow"]').classList.remove('form__content-pass');
        document.querySelector('[data-form="logWindow"]').classList.add('form__content-pass');
    });

    document.querySelector('[data-form="close"]').addEventListener('click', () => {
        let window = document.querySelector('[data-form="window"]');
        window.classList.add("layout-pass");
        window.addEventListener('transitionend', () => {
            window.style.display = 'none';
        })
    });

})