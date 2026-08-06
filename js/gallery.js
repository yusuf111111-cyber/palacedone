/* ==========================================
   GALLERY LIGHTBOX
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const galleryItems = document.querySelectorAll(".gallery-item img");

    const lightbox = document.querySelector(".lightbox");

    const lightboxImage = document.querySelector(".lightbox-image");

    const closeBtn = document.querySelector(".lightbox-close");

    const prevBtn = document.querySelector(".lightbox-prev");

    const nextBtn = document.querySelector(".lightbox-next");

    if (!galleryItems.length) return;

    let currentIndex = 0;

    function openLightbox(index){

        currentIndex = index;

        lightboxImage.src = galleryItems[index].src;

        lightbox.classList.add("active");

        document.body.style.overflow = "hidden";

    }

    function closeLightbox(){

        lightbox.classList.remove("active");

        document.body.style.overflow = "";

    }

    function nextImage(){

        currentIndex++;

        if(currentIndex >= galleryItems.length){

            currentIndex = 0;

        }

        lightboxImage.src = galleryItems[currentIndex].src;

    }

    function previousImage(){

        currentIndex--;

        if(currentIndex < 0){

            currentIndex = galleryItems.length - 1;

        }

        lightboxImage.src = galleryItems[currentIndex].src;

    }

    galleryItems.forEach((image,index)=>{

        image.addEventListener("click",()=>{

            openLightbox(index);

        });

    });

    closeBtn.addEventListener("click",closeLightbox);

    nextBtn.addEventListener("click",nextImage);

    prevBtn.addEventListener("click",previousImage);

    lightbox.addEventListener("click",(e)=>{

        if(e.target===lightbox){

            closeLightbox();

        }

    });

    document.addEventListener("keydown",(e)=>{

        if(!lightbox.classList.contains("active")) return;

        if(e.key==="Escape"){

            closeLightbox();

        }

        if(e.key==="ArrowRight"){

            nextImage();

        }

        if(e.key==="ArrowLeft"){

            previousImage();

        }

    });

});