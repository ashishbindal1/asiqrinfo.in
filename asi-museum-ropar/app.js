/*ASI Heritage QR System Copyright © Ashish Bindal Licensed under GPL v3*/
/*Copyright Reserved by SoftTech*/
/*Code Designed by © Ashish Bindal on 19/02/2026*/

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
      title: "Archaeological Museum, Ropar",
      audioSrc: "Audio_Museum_Ropar/ASI_Museum_Ropar_Audio_English.mp3",
      html: `
        <p>
        <h2 class="period-title">Rupnagar (Ropar)-A Multi-Cultural Spectrum</h2>
        Nestling against the picturesque backdrop of the verdant Shivaliks, a series of mounds at Rupnagar (Ropar) conceal the ruins of an ancient town which flourished for more than 4000 years. One of the mounds which stands majestically and is free from dismal encroachments was excavated from 1952-55 under the direction of Shri Y.D. Sharma of the Archaeological Survey of India. As a result, it earned the distinction of being the northernmost Harappan settlement in the Indian sub-continent and also that of yielding relics of the early Iron Age culture which was hitherto unknown. In addition, it revealed the horizons of five other cultures of the historical times. Thus providing an almost complete cultural index for this part of India. Besides, it was the first Harappan site to be excavated in free India.</p>

        <p>
        The relics from Rupnagar indicate that it should have been a commercial town, as it lay at the crossroads where the routes coming from the Himalayas, the south direction, and the valleys of the Indus and the Ganga converged. Lying at the bend where the Sutlaj (ancient Satadru or Sutudri) takes a sudden westward turn, the site very well answers to the location of the town of Ailadhana mentioned in the Valmiki's Ramayana. It is believed that Bharata, brother of Rama, crossed the river, enroute from Rajpur in the Shivalika to Ayodhya. Rupnagar is also associated with the folklore of Rupa and Vasanta. It was here the Guru Gobind Singh crossed the river in December 1704, to fight the battle of Chamkaur Sahib, Maharaja Ranjit Singh and Lord William Bentinck, the British Governor General met each other in October,1831.
        </p>

        <p>
        The sequence of the six cultures which have been brought to light at Rupnagar still serves as a dependable index for Punjab and Harayana.
        </p>

        <p>
        <h2 class="period-title">PERIOD I: HARAPPAN CULTURE (Circa 2000-1400 B.C.)</h2>
        The first settlers at Rupnagar were the Harappans who lived in the houses made of Kanker- stones, river pebbles and sun-dried bricks. The use of baked bricks was also known to them. The find of a stamp seal, made of steatite, points towards the commercial nature of the settlement. Besides, the other finds include a variety of items of the Harappan make. The Harappan ware were accompanied by those of the Barab tradition, so named after the type site which is not far from here. Significantly, the lower levels revealed some pottery elements which are akin to those of the pre-Harappan levels of Kalibangan (Rajasthan), Banawali (Harayana) and Kot Diji (Pakistan).
        </p>

        <p>
        <h2 class="period-title">PERIOD II: PAINTED GREY WARE CULTURE (Circa 1100-700 B.C.)</h2>
        After a break of several centuries, the site was re-occupied by a new set of people who were living in the houses made of timber and grass. They excelled in making deluxe ware which is grey in colour and decorated with black paintings. This pottery, together with the other companion wares, has since been found at several sites associated with the Mahabharata heroes. More significantly, these people introduced the iron and glass technologies as well.
        </p>

        <p>
        <h2 class="period-title">PERIOD III: NORTHERN BLACK POLISHED WARE CULTURE (Circa 600-200 B.C.</h2>
        This period ushered in the era of the second Urban Revolution during which the Buddha and Mahavira Jain preached their doctrines and the imperial Nandas and Mauryas ruled. This culture is named after another superfine pottery which is treated with highly shiny polish of various shades, such as black, gray, blue, golden, silvery, red, and brown. Furthermore, the Indian coinage made its debut together with the Brahmi and the Kharoshthi scripts. During this period, India entered the age of proper history-the age of sixteen mahajanpadas and the imperial unity.
        </p>

        <p>
        <h2 class="period-title">PERIOD IV: THE AGE OF SUNGAS, THE KUSHANAS AND THE GUPTAS (Circa 200 B.C.-A.D. 600)</h2>
        With the fall of the Mauryan rule, India again parcelled out into smaller states. Some of them were republic which came up in the eastern Punjab and Harayana. Rupnagar was possibly in the Kuninda or Audumbara republic. It received in its material culture the influences from the Indo-Greek, the Scythian, the Parthian and the Sunga traditions. Then followed the age of the Kushana paramountey. Subsequently, it once again came under the republican system until the Guptas became all powerful. The archaeological material in the form of pottery; terracotta, coins, seals and other knick-knacks of all the above cultures are found in the assemblage of this period at Rupnagar. Amongst the finds, a coin mould of Apolodotus-II, a gold coin of Chandragupta Kumaradevi type and a hoard of 660 coins, mainly of the Kushanas and tribal Kushanas are important. Perhaps, the Hunas were responsible for destruction of the town in the sixth century A.D
        </p>

        <p>
        <h2 class="period-title">PERIOD V: EARLY MEDIEVAL (Circa 700-1200 A.D.)</h2>
        Once again, there was a short period of desertion of the site before the people of period-V appeared on the scene. They confined themselves to the southern mound which now underlies the modern town. However, the limited excavation has revealed the prosperity of the period during which nice houses of bricks were constructed.
        </p>

        <p>
         <h2 class="period-title">PERIOD VI: MEDIEVAL (Circa 1200-1700 A.D.)</h2>
         Evidences of this period are also very meagre. The glazed poly chrome pottery and lakhauri bricks were in use. A coin from the top filling belongs to Mubarak Shah. (1316-1320), the Sultan of Delhi while another from the surface belongs to Ibrahim Lodi II (1517-1526). 
        </p>

        <p>
        Some of the specimens of the excavated finds belonging to each cultural period are displayed separately in the museum.
        </p>
      `
    },

    hindi: {
      title: "पुरातत्व संग्रहालय, रोपड़",
      audioSrc: "Audio_Museum_Ropar/ASI_Museum_Ropar_Audio_Hindi.mp3",
      html: `
        <p>
        <h2 class="period-title">रूपनगर (रोपड़)-एक बहुसांस्कृतिक प्रतिबिम्ब</h2>
        शिवालिक की सुरम्य श्रृंखलाओं की तलहटी में बसा रूपनगर, अपने अन्दर चार हजार वर्षों से अधिक पुराने शहर के अवशेषों को संजोए हुए है। ऐसे ही एक टीले पर सन् 1952 - 1955 के मध्य भारतीय पुरातत्त्व सर्वेक्षण के श्री यज्ञदत्त शर्मा के निर्देशन में उत्खनन कार्य किया गया। स्वतंत्र भारत में रूपनगर के टीले पर पहली बार पुरातात्त्विक उत्खनन के फलस्वरूप हड़प्पा संस्कृति की एक बस्ती प्रकाश में आयी जिसे उस संस्कृति के जाने पहचाने कर्मक्षेत्र के सबसे उत्तर में स्थित स्थान होने का गौरव भी मिला। इसके अतिरिक्त पाँच अन्य सांस्कृतिक कालों का भी पता चला तथा पहली बार यहाँ लौह युग की संस्कृति की पहचान हुई। रूपनगर से प्राप्त संस्कृतियों ने भारत के इस भाग के लिए एक सूचिबद्ध संस्कृतियों का नमूना प्रस्तुत किया है, जिसके आधार पर आज भी विश्लेषण किया जाता है।</p>

        <p>रूपनगर के अवशेषों से स्पष्ट है कि इसका हमेशा से व्यापारिक महत्व रहा था, जिसका सशक्त कारण इसकी भौगोलिक स्थिति है यह एक ऐसे चौराहे पर बसा है जहाँ हिमालय, सिन्धु की घाटी और गंगा के मैदानों से आने वाले मार्ग मिलते थे। रूपनगर सतलुज (प्राचीन सतद्रु या सतुद्री) के किनारे ऐसे मोड़ पर अवस्थित है जहाँ नदी पश्चिममुखी होकर बहने लगती है। रूपनगर की स्थिति वाल्मीकीय रामायण में वर्णित एलधान नामक स्थान से समानता रखती है, जहाँ भरत ने शिवालिक में स्थित कैकेय देश की राजधानी राजपुर से आते हुए अयोध्या जाने के लिए नदी को पार किया था। इस स्थान को रूप-वसन्त की लोकगाथा से भी जोड़ा जाता है। यहीं चमकौर साहिब जाते हुए दिसम्बर 1704 में श्री गुरु गोबिन्द सिंह जी ने नदी पार की तथा इसी स्थान पर नदी के बीचो-बीच अक्टूबर 1831 में महाराजा रणजीत सिंह और भारत के तत्कालीन गवर्नर जनरल लॉर्ड विलियम बैंटिक के बीच राजनैतिक वार्ता हुई थी।</p>

        <p>
        <h2 class="period-title">काल I : हड़प्पा संस्कृति ( लगभग ईसा पूर्व 2000 - 1400 )</h2>
        यहाँ सर्वप्रथम हड़प्पा संस्कृति के लोगों के द्वारा बस्ती बसाई गई। ये लोग कच्ची ईटों, कंकड़-पत्थर तथा मिट्टी के गारे से बने घरों में रहते थे। कुछ पकी ईटों के प्रमाण भी मिले हैं। यहाँ में प्राप्त सेलखड़ी की मुद्रा व्यापारिक स्वरूप को दर्शाती है। इसके अतिरिक्त इन लोगों के द्वारा प्रयोग होने वाली विभिन्न वस्तुएँ भी प्राप्त हुई हैं। यहाँ से प्राप्त मृद्भाण्डों में हड़प्पा संस्कृति व बाड़ा संस्कृति के मृद्भाण्डों का सम्मिश्रण स्पष्ट मिलता है। यह उल्लेखनीय है कि निचले स्तरों से मिले मृद्भाण्ड कालीबंगा (राजस्थान), बणावली (हरियाणा) तथा कोटदीजी (पाकिस्तान) से मिले प्राक् हड़प्पा काल के मृद्भाण्डों से समानता रखते हैं।</p>

        <p>
        <h2 class="period-title">काल II : चित्रित धूसर मृद्भाण्डीय संस्कृति ( लगभग ईसा पूर्व 1100 - 700 )</h2>
        कई शताब्दियों के पश्चात यहाँ चित्रित धूसर मृद्भाण्डों का प्रयोग करने वाले एक नई संस्कृति के लोग आकर बस गए। धूसर रंग के मृद्भाण्डों पर साधारणतः  काले रंग से चित्रकारी की जाती थी, परन्तु कभी-कभी लाल व भूरे रंग का प्रयोग भी होता था। महाभारत में उल्लिखित कई स्थलों से इसी तरह के मृद्भाण्डों की प्राप्ति हुई है। इनके द्वारा गृह निर्माण मिट्टी, लकड़ी एवं घास-फूस से किया जाता था। इस काल की अन्य प्रमुख विशेषता ताम्बे के अतिरिक्त लोहे की वस्तुएँ एवं शीशे का प्रयोग है।</p>

        <p>
        <h2 class="period-title">काल III : उत्तरी कृष्ण मार्जित मृद्भाण्डीय संस्कृति ( लगभग ईसा पूर्व 600 - 200 )</h2>
        द्वितीय शहरीकरण के इस काल में बुद्ध तथा महावीर जैन अपनी शिक्षाओं से समाज में ज्ञान का प्रकाश फैला रहे थे वहीं राजनीति के क्षेत्र में महाजनपद, तत्पश्चात् नंद मौर्य साम्राज्य प्रभावशाली हो रहे थे। इस काल को इसकी अत्यन्त विशिष्ट मृ‌द्भाण्डीय परम्परा में नामांकित किया गया है। यह धात्विक ओप वाले मृद्भाण्ड कई रंगों यथा काले, धूसर, नीले, सुनहरे, रूपहले, लाल, आदि रंगों में मिलते हैं। व्यापार एवं वाणिज्य के क्षेत्र में सर्वप्रथम सिक्कों का प्रयोग क्रान्तिकारी परिवर्तन की ओर इंगित करता है। ब्राह्मी एवं खरोष्ठी लिपि का प्रयोग भी इसी काल से ही प्रारम्भ हुआ। इन लोगों के द्वारा अवशिष्ट पदार्थों के विसर्जन के लिए शोष गर्त (Ringwell) के प्रमाण मिले हैं।</p>

        <p>
        <h2 class="period-title">काल IV : शुंग, कुषाण तथा गुप्त संस्कृति ( लगभग ईसा पूर्व 200 - 600 ईसवी )</h2>
        मौर्य शासन के पतन के बाद भारत एक बार पुनः छोटे-छोटे राज्यों में बंट गया। इनमें से कुछ जनपद पूर्वी पंजाब व हरियाणा के क्षेत्र में उदित हुए। रूपनगर सम्भवतः  इन्हीं में से एक औदुम्बर या कुणिन्द जनपद के अधीन था। यहाँ शुंगों के अतिरिक्त यवन, शक-पहलव परम्पराओं का प्रभाव सांस्कृतिक पुरावशेषों पर स्पष्ट दृष्टिगोचर होता है। कुछ समय तक यह कुषाणों के अधीन रहा, परन्तु गुप्तों के शक्तिशाली होने तक यहाँ पुनः  जनपदीय शासन प्रणाली प्रभावशाली रही। इस काल की सभी संस्कृतियों के अवशेष, मृद्भाण्डों, मृण्मय कला, सिक्कों, मुद्राओं, मुद्रांकों तथा अन्य पुरावशेष के रूप में मिलते हैं। इनके अतिरिक्त अपोलोदोतस-II के सिक्के का सांचा, चन्द्रगुप्त-I का स्वर्ण सिक्का तथा 660 ताम्र सिक्कों की निधि जिसमें मुख्यतः कुषाण व स्थानीय कुषाणो के सिक्के हैं, महत्वपूर्ण प्राप्तियाँ हैं। संभवतः  600 ईसवी में हुणों के द्वारा इस शहर को नष्ट कर दिया गया।</p>

        <p>
        <h2 class="period-title">काल V : प्रारम्भिक मध्यकाल ( लगभग 700 - 1200 ईसवी )</h2>
        कुछ समय पश्चात यह शहर पुनः  मानवीय गतिविधियों से जीवन्त हुआ। परन्तु इस बार शहर का बसाव दक्षिणी टीले पर हुआ जहाँ वर्तमान में आधुनिक शहर है। सीमित खुदाई के परिणामस्वरूप ईंटों से बने सुन्दर मकान मिले हैं. जो इस काल की समृद्धि के गवाह हैं।</p>

        <p>
        <h2 class="period-title">काल VI : मध्यकाल ( लगभग 1200 - 1700 ईसवी )</h2>
        पिछले काल की तरह इस काल के प्रमाण भी बहुत कम हैं। चमकीली पॉलिश वाले चीनी मिट्टी के बर्तन तथा लखौरी ईंटों की संरचना सामान्यतः  मिलती है। मुबारक शाह ( 1316 - 1320 ईसवी ) दिल्ली सुल्तान का एक सिक्का तथा उपरी सतह से इब्राहिम लोदी-II ( 1517 - 1526 ईसवी ) का एक अन्य सिक्का भी प्राप्त हुआ है।</p>

        <p>इस संग्रहालय में खुदाई से प्राप्त अवशेषों को उनके सांस्कृतिक क्रमानु‌सार अलग-अलग प्रदर्शित किया गया है।</p>
      `
    },

    punjabi: {
      title: "ਪੁਰਾਤਤਵ ਸੰਗਰਹਾਲਯ, ਰੋਪੜ",
      audioSrc: "Audio_Museum_Ropar/punjabi.mp3",
      html: `<p></p>`
    }
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