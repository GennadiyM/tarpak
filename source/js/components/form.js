const form = function () {
    const forms = document.querySelectorAll(`.js-form`);

    if (!forms) {
        return;
    }


    const onInputs = (evt) => {
        evt.target.closest(`.formArea`).classList.remove(`formArea_error`);
        evt.target.closest(`.form`).classList.remove(`error`);
    } 

    const onFormSubmit = (evt) => {
        const targetForm = evt.target;
        const honeypot = targetForm.querySelector(`[name="honeypot"]`);
        const popup = targetForm.closest(`.js-popup`);

        if (honeypot.value) {
            evt.preventDefault();
            return;
        }

        const inputs = targetForm.querySelectorAll(`.formArea input`);

        inputs.forEach((input) => {
            const formArea = input.closest(`.formArea`);
            if (!input.value) {
                evt.preventDefault();
                formArea.classList.add(`formArea_error`);
                input.addEventListener(`input`, onInputs);
                targetForm.classList.add(`error`);
            }

            if (input.classList.contains(`js-phone`)) {
                const value = input.value;
                if (value.indexOf(`_`) !== -1) {
                    evt.preventDefault();
                    formArea.classList.add(`formArea_error`);
                    targetForm.classList.add(`error`);
                }
            }
        });

        if (targetForm.classList.contains(`error`)) {
            return;
        }

        const eventType = targetForm.classList.contains(`form_calc`) ? `submit_form_konstruktor` : `form_submit`;
        dataLayer.push({'event': eventType});
        targetForm.classList.add(`form_success`);

        window.setTimeout(function() {
            if (!popup) {
                if (targetForm.classList.contains(`form_calc`)) {
                    window.location.href = "https://tarpak.ru/" 
                }
                return;
            } else {
                popup.querySelector('.js-close').click();
                targetForm.classList.remove(`form_success`);
            }
        }, 1500);
    }

    forms.forEach((item) => {
        item.addEventListener(`submit`, onFormSubmit);
    });
};
  
export default form;