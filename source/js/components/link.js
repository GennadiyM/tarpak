var link = function () {
    document.addEventListener(`click`, function(evt) {
        if (evt.target.tagName === `A`) {
            const href = evt.target.href;
            if (href.indexOf(`tel`) >= 0) {
                dataLayer.push({'event': 'click_tel'})
            }
        }
    })
};
  
export default link;