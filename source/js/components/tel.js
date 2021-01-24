import Inputmask from "inputmask";


var phone = function () {
    var im = new Inputmask(`+7 (999) 999 - 999`);
    im.mask(`.js-phone`);
};
  
export default phone;