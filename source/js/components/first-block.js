
const firstBlock = function () {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty(`--vh`, `${vh}px`);
    
    window.addEventListener(`resize`, () => {
        if(window.matchMedia(`(max-width: 768px)`).matches){
            vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty(`--vh`, `${vh}px`);
        }
    });
  };
  
  export default firstBlock;