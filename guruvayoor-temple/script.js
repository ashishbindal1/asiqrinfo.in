/*ASI Heritage QR System Copyright © Ashish Bindal Licensed under GPL v3*/
/*Copyright Reserved by SoftTech*/
/*Code Designed by © Ashish Bindal on 12/01/2026*/

/*GLOBAL LANGUAGE HANDLING*/
let currentLang = localStorage.getItem("siteLanguage") || "en";

function applyTextLanguage(lang) {
    document.querySelectorAll(".lang").forEach((el) => {
        const text = el.getAttribute("data-" + lang);
        if (text) el.innerHTML = text;
    });
}

function applyAudioLanguage(lang) {
    document.querySelectorAll(".audio-lang").forEach((audio) => {
        audio.pause();
        audio.currentTime = 0;
        audio.style.display = "none";
    });

    const selectedAudio = document.getElementById("audio-" + lang);
    if (selectedAudio) selectedAudio.style.display = "block";
}

function applyVideoLanguage(lang) {
    // stop all videos (important!)
    document.querySelectorAll(".lang-video iframe").forEach((iframe) => {
        const src = iframe.getAttribute("src");
        iframe.setAttribute("src", src); // reload iframe => stops playback
    });

    // hide all wrappers
    document.querySelectorAll(".lang-video").forEach((wrap) => {
        wrap.style.display = "none";
    });

    // show selected
    const selectedWrap = document.querySelector(`.lang-video[data-lang="${lang}"]`);
    if (selectedWrap) selectedWrap.style.display = "block";
}


function setLanguage(lang) {
    if (!lang) return;

    currentLang = lang;
    localStorage.setItem("siteLanguage", lang);

    // Sync dropdown
    const dropdown = document.querySelector(".lang-select");
    if (dropdown) dropdown.value = lang;

    applyTextLanguage(lang);
    /*applyAudioLanguage(lang);*/
    // If user is already on audio/video section, update instantly
    const audioSectionVisible = document.getElementById("audioSection");
    const videoSectionVisible = document.getElementById("videoSection");

    if (audioSectionVisible) applyAudioLanguage(lang);
    if (videoSectionVisible) applyVideoLanguage(lang);
}

/*SECTION SWITCHING*/

function showSection(id) {
    document.querySelectorAll(".tab-content").forEach((sec) => {
        sec.style.display = "none";
    });

    const section = document.getElementById(id);
    if (section) section.style.display = "block";

    if (id === "audioSection") {
        applyAudioLanguage(currentLang);
    }
    if (id === "videoSection") {
        applyVideoLanguage(currentLang);
    }
}

/*IMAGE SLIDER*/

let slideIndex = 1;

function plusSlides(n) {
    showSlides((slideIndex += n));
}

function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    if (!slides.length) return;

    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    for (let s of slides) s.style.display = "none";
    for (let d of dots) d.className = d.className.replace(" active", "");

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

/*GALLERY VIEW*/

/*GALLERY VIEW (safe even when gallery/lightbox is commented out)*/

(function () {
  const gallery = document.getElementById("gallerySection");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lbCount = document.getElementById("lbCount");

  // If Gallery section is not present (because it's commented out), do nothing safely.
  if (!gallery || !lightbox || !lightboxImg || !lbCount) return;

  const images = Array.from(gallery.querySelectorAll(".gallery-img"));
  if (!images.length) return;

  const btnClose = lightbox.querySelector(".lb-close");
  const btnPrev = lightbox.querySelector(".lb-prev");
  const btnNext = lightbox.querySelector(".lb-next");

  if (!btnClose || !btnPrev || !btnNext) return;

  let currentIndex = 0;

  function updateView() {
    const img = images[currentIndex];
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt || "Gallery image";
    lbCount.textContent = (currentIndex + 1) + " / " + images.length;
  }

  function openLightbox(index) {
    currentIndex = index;
    updateView();
    lightbox.classList.add("active");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("active");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImg.src = "";
    document.body.style.overflow = "";
  }

  function nextImg() {
    currentIndex = (currentIndex + 1) % images.length;
    updateView();
  }

  function prevImg() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateView();
  }

  images.forEach((img, idx) => img.addEventListener("click", () => openLightbox(idx)));

  btnClose.addEventListener("click", closeLightbox);
  btnNext.addEventListener("click", nextImg);
  btnPrev.addEventListener("click", prevImg);

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") nextImg();
    if (e.key === "ArrowLeft") prevImg();
  });

  let startX = 0;
  let endX = 0;

  lightbox.addEventListener(
    "touchstart",
    (e) => {
      startX = e.changedTouches[0].screenX;
    },
    { passive: true }
  );

  lightbox.addEventListener(
    "touchend",
    (e) => {
      endX = e.changedTouches[0].screenX;
      const diff = endX - startX;

      if (Math.abs(diff) > 40) {
        if (diff < 0) nextImg();
        else prevImg();
      }
    },
    { passive: true }
  );
})();


/*INITIAL LOAD*/

window.addEventListener("load", () => {
    setLanguage(currentLang);
    showSlides(slideIndex);
    setInterval(() => plusSlides(1), 4000);
});