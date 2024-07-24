document.addEventListener(`DOMContentLoaded`, function(){
    const menu = document.querySelectorAll(`.main-menu li`);

    for(const m of menu){
        m.addEventListener(`mouseenter`, function (){
            this.classList.add(`on`);
            
            for(const siblings of menu){
                if (siblings !== this){
                    siblings.classList.remove(`on`);
                }
            }
        });
        m.addEventListener(`mouseleave`, function (){
            this.classList.remove(`on`);
        });


    }

    var swiper = new Swiper(".bannerSwiper", {
        allowTouchMove : true,
        slideToClickedSlide : true,
        speed: 1000,
        clickable: true,
        autoplay : {
            delay: 3000,
        },
    });


    const krBtns = document.querySelectorAll(`.language`);

    for(const on of krBtns){
        on.addEventListener(`mouseenter`, function(){
            const laBtn = document.querySelectorAll(`.language-on, .fill, .kr span, .kr svg`);
            
            for(const list of laBtn){
                list.classList.add(`on`);
            }
        });
        on.addEventListener(`mouseleave`, function(){
            const laBtn = document.querySelectorAll(`.language-on, .fill, .kr span, .kr svg`);
            
            for(const list of laBtn){
                list.classList.remove(`on`);
            }
        });  
    }

    const can = document.querySelector(`.sec-3-img`);
    const blackBg = document.querySelector(`.blackbg`);

    can.addEventListener(`click`, function(){
        blackBg.classList.add(`on`);
    });

    blackBg.addEventListener(`click`, function(event){
        if (event.target == event.currentTarget){
            this.classList.remove(`on`);
        }
    });

    var swiper = new Swiper(".sec3Swiper", {
        loop: true, 
        speed: 1000,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
      },
    });

    AOS.init({

        disable: function () {
          var desktop = 1200;
          return window.innerWidth < desktop;
        } // 1200px 이하일 때 disable
      
      });

    function moveCan() {
        const windowWidth = window.innerWidth;
        
        if (windowWidth >= 760) {
            const sec3blocks = document.querySelectorAll('.sec-3 .container');

            sec3blocks.forEach(block => {
                const sFront = 150;
            
                const front = block.querySelector('.sec-3-img img');
            
                block.addEventListener('mousemove', (e) => {
                    const x = e.clientX;
                    const y = e.clientY;
            
                    front.style.transform = `
                        translate(
                            ${x / sFront}%,
                            ${y / sFront}%
                    )`;
                });
            });



            const sec5blocks = document.querySelectorAll('.sec-5 .container');

            sec5blocks.forEach(block => {
                const sFront = 150;
            
                const front = block.querySelectorAll('.box .coke-img img');
            
                block.addEventListener('mousemove', (e) => {
                    const x = e.clientX;
                    const y = e.clientY;
            
                    for (let coke of front) {
                        coke.style.transform = `
                            translate(
                                ${x / sFront}%,
                                ${y / sFront}%
                        )`;
                    }
                });
            });
        } else{
        }

    }

    moveCan();

    window.addEventListener(`resize`, function (){
        moveCan();
    });




    const sec5Box = document.querySelectorAll(`.box`);

    for(const on of sec5Box){
        on.addEventListener(`mouseenter`, function(){
            const boxBg = document.querySelector(`.can-bg`);
    
            boxBg.classList.add(`on`);
        });
    }

    const hamBtn = document.querySelector(`.hamburger-bg`);
    const subMenu = document.querySelector(`.sub-menu`);

    hamBtn.addEventListener(`click`, function () {
        this.classList.toggle(`on`);

        const menuHas = hamBtn.classList.contains(`on`);

        if (menuHas === true) {
            subMenu.classList.add(`on`);
        } else {
            subMenu.classList.remove(`on`);
        }
    });

    const hideLabtn = () => {
        const windowWidth = window.innerWidth;

        const laBtn =  document.querySelector(`.sub-menu .language`);

        if(windowWidth < 1200){
            laBtn.classList.add(`remove`);
        }else{
            laBtn.classList.remove(`remove`);
        }
    }
    hideLabtn();

    window.addEventListener(`resize`, function(){
        hideLabtn();
    });


});