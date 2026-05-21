/*ASI Heritage QR System Copyright © Ashish Bindal Licensed under GPL v3*/
/*Copyright Reserved by SoftTech*/
/*Code Designed by © Ashish Bindal on 25/03/2026*/

document.addEventListener("DOMContentLoaded", () => {
  // =========================
  // ASI SLIDER (independent)
  // =========================
  let slideIndex = 1;

  const slides = document.querySelectorAll(".asi-slider .slide");
  const prevBtn = document.querySelector(".asi-slider .prev");
  const nextBtn = document.querySelector(".asi-slider .next");
  const dots = document.querySelectorAll(".slider-dots .dot");

  function showSlides(n) {
    if (!slides.length) return;

    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    slides.forEach((s) => (s.style.display = "none"));
    dots.forEach((d) => d.classList.remove("active"));

    slides[slideIndex - 1].style.display = "block";
    if (dots[slideIndex - 1]) dots[slideIndex - 1].classList.add("active");
  }

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  if (prevBtn) prevBtn.addEventListener("click", () => plusSlides(-1));
  if (nextBtn) nextBtn.addEventListener("click", () => plusSlides(1));

  dots.forEach((dot, idx) => {
    dot.addEventListener("click", () => currentSlide(idx + 1));
  });

  showSlides(slideIndex);

  // Auto slide every 4 seconds
  if (slides.length > 1) {
    setInterval(() => plusSlides(1), 4000);
  }

  // =========================
  // LANGUAGE TABS + CONTENT + AUDIO
  // =========================
  const tabs = document.querySelectorAll(".tabs--main button.tab"); // only buttons (not brochure link)
  const titleEl = document.getElementById("pageTitle");

  const langSection = document.getElementById("langSection");
  const gallerySection = document.getElementById("gallerySection");

  const textEl = document.getElementById("textContent");

  // AUDIO elements (must exist in HTML)
  const audioPlayer = document.getElementById("audioPlayer");
  const audioSource = document.getElementById("audioSource");

  // Put your real content here
  const data = {
    english: {
      title: "Museum of Legacies, Jaipur",
      audioSrc: "Audio_Museum_Legacies/Museum_Legacies_Audio_English.mpeg",
      html: `
        <p>
        The building of "Museum of Legacies" was originally the residence of Pandit Shivdeen, minister of the erstwhile Jaipur State during the period of Sawai Raja Ram Singh II, from 1825 to 1830. It opened in 1857 as the "Madarsa-e-Hunari” or the Institute of Arts under the patronage of Sawai Raja Ram Singh II. It is the oldest institution in the State to promote art and culture and is one of the pioneers in the craft industry of Jaipur.The name changed to Maharaja School of Arts and Crafts in 1886 and then succeeded by Rajasthan School of Arts in 1988. The school was shifted to its present location in 1909 and the building was named "Maharaja Sawai Ram Singh Ji Museum of Arts and Crafts" in 1958. The museum is now known as "Museum of Legacies".
        </p>

        <p>
        In the recent past, Government decided to convert this building into a museum and opened the Museum of Legacies” on 09 December 2017. It's aim is to create an artspace that exclusively displays the rich cultural heritage of Rajasthan with a diverse collection that includes everything from textiles, Jewellery and stoneware to inlay work, painting, pottery,sculpture and more. Apart from this indigenous arts from different parts of India would also be exhibited. This will be a very inclusive space that will cater to locals and tourists alike. One can view the best of Rajasthani art and craft,under one roof.
        </p>

        <p>
        <h2 class="period-title">Presently, work is in progress to build a museum by displaying the sculptures and art artifacts recovered from Virasat Museum  Narayan Ghiya and other smugglers.</h2>
        </p>
      `
    },

    hindi: {
      title: "विरासत संग्रहालय, जयपुर",
      audioSrc: "Audio_Museum_Legacies/Museum_Legacies_Audio_Hindi.mpeg",
      html: `
        <p>
        यह भवन मूल रूप से पण्डित शिवदिन का निवास स्थान था, जो कि तत्कालिन जयपुर रियासत के महाराजा सवाई रामसिंह द्वितीय के शासन काल में 1825-1830 के दौरान मन्त्री के पद पर रहे। यह भवन 1857 मे सवाई रामसिंह द्वितीय के संरक्षण मे" मदरसा ए हुनरी " अर्थात् कला के संस्थान के रूप मे खोला गया। यह संस्थान राज्य मे कला, संस्कृति, पर्यटन एवं शिल्प उधोग को बढाने का मूल आधार स्तम्भ रहा है। वर्ष 1886 मे इस संस्थान का नाम परिवर्तन कर महाराजा स्कूल ऑफ आर्ट्स एण्ड क्रॉफ्ट्स रखा गया। तत्पश्चात् 1988 मे इस संस्थान का नाम पुनः बदल कर राजस्थान स्कूल ऑफ आर्ट्स रख दिया गया। कुछ वर्ष पूर्व राज्य सरकार द्वारा भवन को एक संग्रहालय के रूप में परिवर्तित करने का निर्णय लिया गया और 9 दिसम्बर 2017 को विरासत संग्रहालय के रूप मे खोला गया। इसे कला का संग्रहालय बनाने का उददेश्य राजस्थान की विरासत को विभिन्न प्रकार के संग्रहो के माध्यम से प्रदर्शित करना जिसमें वस्त्र, आभूषण, रत्न, पच्चीकारी कार्य, चित्रकला, मृदभाण्ड कला, मूर्तिकला इत्यादि सम्मिलित है। इसके अलावा भारत के विभिन्न क्षेत्रो की स्वतंत्र कला को भी यहाँ प्रदर्शित किया जायेगा। एक ही छत के नीचे कोई भी राजस्थानी कला एंव शिल्प का दर्शक बन सकता है।
        </p>

        <p>
        <h2 class="period-title">वर्तमान में वामन नारायण घीया व अन्य तस्करों से प्राप्त मूर्तियों व कला पुरासामग्री को प्रदर्शित कर संग्रहालय बनाये जाने हेतु कार्य प्रगति पर है</h2>
        </p>
      `
    },
  };

  function setActive(btn) {
    tabs.forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
  }

  function stopAudio() {
    if (!audioPlayer) return;
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
  }

  function setAudio(src) {
    if (!audioPlayer || !audioSource) return;

    stopAudio();
    audioSource.src = src || "";
    audioPlayer.load(); // refresh player to new file
  }

  function showLanguage(key) {
    const info = data[key];
    if (!info) return;

    // show language section, hide gallery
    langSection.style.display = "";
    gallerySection.style.display = "none";

    // update title + text
    titleEl.textContent = info.title;
    textEl.innerHTML = info.html;

    // update audio per language
    setAudio(info.audioSrc);
  }

  function showGallery() {
    titleEl.textContent = "Gallery";
    langSection.style.display = "none";
    gallerySection.style.display = "";

    // stop audio when entering gallery
    stopAudio();
  }

  // Click on tab
  tabs.forEach((btn) => {
    btn.addEventListener("click", () => {
      const view = btn.dataset.view;
      setActive(btn);

      if (view === "gallery") {
        showGallery();
      } else {
        showLanguage(view);
      }
    });
  });

  // Initial load
  showLanguage("english");

  // =========================
  // LIGHTBOX (Gallery)
  // =========================
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lbClose = document.querySelector(".lb-close");
  const lbPrev = document.querySelector(".lb-prev");
  const lbNext = document.querySelector(".lb-next");
  const lbCount = document.getElementById("lbCount");

  function getGalleryImages() {
    return Array.from(document.querySelectorAll("#gallerySection .gallery-img"));
  }

  let currentIndex = 0;

  function openLightbox(index) {
    const imgs = getGalleryImages();
    if (!imgs.length) return;

    currentIndex = index;
    const img = imgs[currentIndex];

    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt || "Gallery image";
    if (lbCount) lbCount.textContent = `${currentIndex + 1} / ${imgs.length}`;

    if (lightbox) {
      lightbox.classList.add("open");
      lightbox.setAttribute("aria-hidden", "false");
    }

    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    if (!lightbox) return;

    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImg.src = "";
    document.body.style.overflow = "";
  }

  function showNext(step) {
    const imgs = getGalleryImages();
    if (!imgs.length) return;

    currentIndex = (currentIndex + step + imgs.length) % imgs.length;

    const img = imgs[currentIndex];
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt || "Gallery image";
    if (lbCount) lbCount.textContent = `${currentIndex + 1} / ${imgs.length}`;
  }

  document.addEventListener("click", (e) => {
    const thumb = e.target.closest("#gallerySection .gallery-img");
    if (!thumb) return;

    const imgs = getGalleryImages();
    const index = imgs.indexOf(thumb);
    if (index >= 0) openLightbox(index);
  });

  if (lbClose) lbClose.addEventListener("click", closeLightbox);
  if (lbPrev) lbPrev.addEventListener("click", () => showNext(-1));
  if (lbNext) lbNext.addEventListener("click", () => showNext(1));

  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (!lightbox || !lightbox.classList.contains("open")) return;

    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") showNext(-1);
    if (e.key === "ArrowRight") showNext(1);
  });
});