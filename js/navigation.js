/* ==========================================
   NAVIGATION
========================================== */

function initNavigation() {

    const navbar = document.querySelector(".navbar");

    const menuToggle = document.querySelector(".menu-toggle");

    const mobileNav = document.querySelector(".mobile-nav");

    const mobilePanel = document.querySelector(".mobile-nav-content");

    if (!navbar) {

        setTimeout(initNavigation,100);

        return;

    }

    /* ==========================================
       STICKY NAVBAR
    ========================================== */

    function handleScroll(){

        if(window.scrollY > 60){

            navbar.classList.add("scrolled");

        }else{

            navbar.classList.remove("scrolled");

        }

    }

    window.addEventListener("scroll",handleScroll);

    handleScroll();

    /* ==========================================
       MOBILE MENU
    ========================================== */

    if(menuToggle){

        menuToggle.addEventListener("click",()=>{

            menuToggle.classList.toggle("active");

            mobileNav.classList.toggle("active");

            document.body.classList.toggle("menu-open");

        });

    }

    /* ==========================================
       CLOSE MENU
    ========================================== */

    if(mobileNav){

        mobileNav.addEventListener("click",(e)=>{

            if(!mobilePanel.contains(e.target)){

                menuToggle.classList.remove("active");

                mobileNav.classList.remove("active");

                document.body.classList.remove("menu-open");

            }

        });

    }

    /* ==========================================
       SMOOTH SCROLL
    ========================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            const target=document.querySelector(this.getAttribute("href"));

            if(!target) return;

            e.preventDefault();

            window.scrollTo({

                top:target.offsetTop-navbar.offsetHeight,

                behavior:"smooth"

            });

            if(menuToggle){

                menuToggle.classList.remove("active");

            }

            if(mobileNav){

                mobileNav.classList.remove("active");

            }

            document.body.classList.remove("menu-open");

        });

    });

}

document.addEventListener("DOMContentLoaded",initNavigation);