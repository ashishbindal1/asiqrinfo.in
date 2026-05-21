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
      title: "Nahargarh Fort, Jaipur (Sudarshan Garh)",
      audioSrc: "Audio_Nahargarh_Fort/Nahargarh_Fort_Audio_English.mpeg",
      html: `
        <p>
        Nahargarh fort was built by Maharaja Sawai Jai Singh II in the year 1734 for the sake of defence of jaipur city.In the early  18th  century,the Mugal dynasty was at their decline  while power of Marathas was expending. Looking over these conditions, Maharaja Sawai Jai Singh I erected this fort on about 700 feet high hill in  the  north  of jaipur  city.Originally  this  fort  was  named  as  Sudarshangarh,but  later  on  it  was  given  the  name  Nahargarh,dedicating  to  Nahar   singh  Bhomia,a local hero,whose  shrine  is  situated  in  this  premises.Madhvendra  Bhawan</p>

        <p>
        The  fort  wall  around Nahargarh  extended  over  the  surrounding  hills  forming fortification  connects  it  to jaigarh  fort.The  fort  comprises  of  spacious  Tanka  and two splendid step wells for water management, barracks for army personnel's arsenal to house armory, ramps to carry cannons and.
        </p>

        <p>
        Earlier palaces inside the fort were consturcted by successive rulers of jaipur in  diffterent  phases.Diwan-e-aam,treasury  and  rest  rooms  for  soldiers  were  built by  Maharaja Sawai Jai Singh II(1699-1743), Hawa Mandir by Maharaja Ram Singh Ⅱ (1835-1880) and Shri Madhvendra Bhawan by Maharaja    Sawai Madho Singh I (1880-1922). </p>

        <p>
        The  defence  mechanism  of  Nahargarh  was  very  strong.Though  the  fort  never Faced  Any   attack   during   the   course   of  its   history,it   witnessed   some   major historical  events.Firstly In the reign  of Maharaja  Sawai  Pratap  Singh(1779-1803), Nawab Wazir Ali of Awadh was given shelter here.Subsequently during the reign of  Maharaja   Sawai   jagat   singh(1803-1818),the   feudatory   princes(samntas)kept  Raskapoor,as a prisoner in this fort after being frustrated with her interference in the royal matters.Who was lover a Maharaja Jagat  Singh.The  finance minister of the   state,Sanghi   Jhuntharam   was   also   imprisoned   here   during   the   reign   of Maharaja   Sawai   Jai    Singh    I(1819-1835).During   Indian   mutiny    of   1857,the  Europeans  of  the   region,including  the  British  Resident's  wife,were  moved  to Nahargarh  fort  by  Maharaja   Sawai   Ram  singh,for  their  protection.Entrance   of common  men  in  the   fort  was  prohibited  but   special  persons  were   allowed blindfolded.
        </p>

        <p>
        The treasure of the state was kept here Since the regime of Maharaja Sawai Jai singh   I. 
        In this Fort The water storage and its managment system is unique and rare.A huge  water  reservoir(Tanka)and  two  step  wells  were  construced  here  to  collect  the rain water coming through the channels made in the hills.Small chambers were  built between the channels to filter the impurities and to make the water clean.A  sepcial  water purification  system  is  set  up  near  the  step  well  to  purify  the  rain water in multiple phase.These splendid step well are great attraction for tourists because of its magnificent architecture and remarkable systematic planning.
        </p>

        <p>
        <h2 class="period-title">Shri Madhvendra Bhawan</h2>
        The main palace situated in the fort is known as <strong>Shri Madhvendra Bhawan</strong>. This double storyed palace is divided in ten apartments,out of which one was used by the King himself and other nine were built for his concubines.The king's apartment  is  connected  to  all  the  nine  apartment  thorugh  a  corridor,known  as <strong>Raja ka Galiyara</strong>. Through this corridor the king can enter any of nine apartments. 
</p>

        <p>
        Likewise all the apartment were also connected to each other. These apartments are named as Suraj Prakash, Chand Prakash, Khushal Prakash, Anand Prakash, Jawahar Prakash, Laxmi Prakash, Lalit Prakash, Basant Prakash and Ratan Prakash. Each apartment comprises of bed room, store room, verandah, courtyard kitchen and toilet.There is a fire altar in the bed room for winters. The  whole palace is adorned with excellent araish work and fresco paintings. Mainly green, brown, red, blue and yellow colours were used to decorate the painting. Beautiful ventilators are decorated with coloured glasses. This palace is a splendid example of Indo-Western architecutre.
        </p>
      `
    },

    hindi: {
      title: "नाहरगढ़ दुर्ग, जयपुर (सुदर्शनगढ़)",
      audioSrc: "Audio_Nahargarh_Fort/Nahargarh_Fort_Audio_Hindi.mpeg",
      html: `
        <p>
        नाहरगढ़ किले का निर्माण महाराजा सवाई जयसिंह द्वितीय द्वारा जयपुर शहर की सुरक्षार्थ सन 1734 में करवाया गया था। 18 वीं शती के प्रथम चरण में मुगलों का वर्चस्व तो कम हो रहा था, किन्तु मराठों का उपद्रव बढ़ रहा था। इसे मध्यनजर रखते हुये सवाई जयसिंह द्वितीय द्वारा शहर के उतर में लगभग 700 फुट की ऊँची पहाड़ी पर नाहरगढ़ किले का निर्माण करवाया गया। दुर्ग निर्माण के लिए बने नक्शों के अनुसार पूर्व में इसका नाम सुदर्शनगढ़ रखा गया था, परन्तु नाहरसिंह भौमिया का स्थान होने के कारण कालान्तर में इसे नाहरगढ़ नाम दिया गया।
        </p>

        <p>किले के चारों ओर बनी प्राचीर नाहरगढ़ को जयगढ़ से जोड़ती है। दुर्ग में पानी की व्यवस्था के लिए विशाल टांके एवं बावडिया, सैनिकों के लिए बैरकों, युद्ध सामग्री. रखने के लिए शस्त्रागार,तोपों को लाने-ले जाने के लिए ढलुएं मार्गों तथा परकोटे आदि का निर्माण करवाया गया।</p>

        <p>
        किले के प्राचीन महल जैसे दीवाने आम, खजाना भवन एवं सैनिक विश्रामगृह आदि का निर्माण महाराजा सवाई जयसिंह द्वितीय (1699-1743), हवामंदिर का निर्माण महाराजा सवाई रामसिंह द्वितीय (1835 - 1880) एवं श्री माधवेन्द्र भवन का निर्माण महाराजा सवाई माधोसिंह द्वितीय द्वारा (1880-1922) करवाया गया था। नाहरगढ़ की सुरक्षा व्यवस्था अत्यधिक सुदृढ़ रखी गई, यही कारण था कि राजनीतिक बंदियों और खतरनाक कैदियों को यह रखा जाता था। 
        </p>

        <p>
        यह दुर्ग जयपुर राज्य की अनेक ऐतिहासिक घटनाओं का साक्षी रहा है यथा महाराजा सवाई प्रतापसिंह जी के शासनकाल (1779-1803ई.) में अवध के नवाब वजीर अली को शरणागत के रूप में यहाँ रखा गया। महाराजा सवाई जगतसिंह के शासनकाल (1803-1818ई.) मे उनकी प्रेयसी रसकपूर की शासन में दखल अंदाजी से आक्रोशित होकर सामन्तों ने उसे नाहरगढ़ में बन्दी बनाकर रखा।
        </p>

        <p>
        सवाई जयसिंह तृतीय के शासनकाल में (1819-1835) राज्य के अर्थसचिव रहे संघी थाराम को भी यहाँ कैद कर रखा गया। कहा जाता है कि सवाई रामसिंह द्वितीय (1835-1880) के समय में 1857 में कुछ अंग्रेजों को भी यहां सुरक्षित रखा गया था। नाहरगढ़ आम व्यक्ति का प्रवेश निषिद्ध था तथा विशेष व्यक्ति को भी आँखों पर पट्टी बाँध कर प्रवेश दिया जाता था। सवाई जयसिंह द्वितीय के समय से ही राज्य का खजाना नाहरगढ़ दुर्ग में रखा जाता था।
        </p>

        <p>
        नाहरगढ़ में जल प्रबंधन एवं संग्रहण की योजना उपस्थित व अनूठी एवं अनोखी है। यहाँ जल की व्यवस्था के लिये एक विशाल टाका तथा दो बावडिया बनाई गई थी, जिनमें वर्षा का जल पहाड़ियों में निर्मित नालियों के माध्यम से बहता हुआ बावड़ी में एकत्रित होता है। नालियों के मध्य में छोटी-छोटी होदियां बनी है, जो कचरे को रोक कर जल को शुद्ध करती है। बावड़ी के पास एक विशिष्ट प्रकार का जल शोधन तंत्र निर्मित है, जो पहाड़ियों से बहकर आये वर्षा के जल को कई चरणों में शुद्ध कर बावड़ी में पहुँचता है। बावड़ी अपनी अद्वितीय स्थापत्य कला एवं बेजोड़ योजना के कारण पर्यटकों के आकर्षण का केन्द्र है।
        </p>

        <p>
        <h2 class="period-title">श्री माधवेन्द्र भवनः</h2>
        किले की प्राचीर के अंदर स्थित मुख्य भवन को <strong>श्री माधवेन्द्र भवन</strong> के नाम से जाना जाता है। यह दो मंजिला भवन दस भवनों में विभक्त है, जिनमें से मुख्य भवन राजा के उपयोग के लिये एवं शेष नौ भवन उनकी उप पत्नियों (पड़दायतों) के लिये बनवाये गये थे। राजा का भवन समस्त नौ भवनों से एक गलियारे के माध्यम से जुड़ा है, जो <strong>राजा का गलियारा</strong> कहलाता है। इस गलियारे के माध्यम से महाराजा किसी भी पड़दायत के भवन में प्रेवश कर सकते थे।
        </p>

        <p>इसी प्रकार समस्त नौ भवन भी एक-दूसरे से आपस मे जुड़े है। इन भवनों के नामहै सूरज प्रकाश चांद प्रकाश, खुशाल प्रकाश,  आनन्द प्रकाश, जवाहर प्रकाश, लक्ष्मी प्रकाश, रत्न प्रकाश, ललित प्रकाश एवं बंसत प्रकाश प्रत्येक भवन में शयन कक्ष, भंडार गृह,रसोई, शौचालय तथा मध्य में एक चौक बना है। शयनकक्ष में सर्दियों के लिये अलाव (अग्नि स्थल) बने है। यहां उत्कृष्ट आराईश पर भित्ति चित्रों का अनूठा अलंकरण है, जिनमें मुख्यतः हरे, भूरे, लाल नीले एवं पीले रंगों का प्रयोग हुआ है। खूबसूरत रोशनदानों में रंगीन कांच लगे है। यह भवन भारतीय एवं पाश्चात्य वास्तु शैली के मेल का सुन्दर नमूना है। श्री माधवेन्द्र भवन की छत से गुलाबी नगर जयपुर के विहंगम दृश्य का अवलोकन किया जा सकता है।
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