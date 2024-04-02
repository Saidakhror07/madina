gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
ScrollSmoother.create({
  wrapper: ".Wrapper",
  content: ".Content",
});

let navRouterPhoneMode = document.querySelector(".phone-mode-router");
let navRouterPhoneModeClose = document.querySelector(".close-phone-mode");
let navRouter = document.querySelector(".nav-router");
navRouterPhoneMode.addEventListener("click", () => {
  navRouter.classList.add("active");
});
navRouterPhoneModeClose.addEventListener("click", () => {
  navRouter.classList.remove("active");
});

let sec1Elipses = document.querySelectorAll(".sec-1-left .ellipses button");
let sec1ElipsesArray = Array.from(sec1Elipses);

let all = document.querySelector(".all"),
  sell = document.querySelector(".sell"),
  rent = document.querySelector(".rent");

let filterArray = [all, sell, rent];

function removeActiveFilter() {
  filterArray.map((val) => val.classList.remove("active"));
}

filterArray.map((val) => {
  val.addEventListener("click", () => {
    removeActiveFilter();
    val.classList.add("active");
  });
});

// Section 3 Start
let sec3CardsArray = [
  {
    id: 0,
    img: "./COMPONENTS/IMGS/sec-3__img1.png",
    iconTitle: "Popular",
    icon: "./COMPONENTS/ICONS/svg/sec-3__img1.svg",
    title: "Tematik bazimlar",
    info: "Uyda uyushtiriladigan bazimlar...",
    color: "var(--popular-color)",
    bg: "var(--popular)",
  },
  {
    id: 1,
    img: "./COMPONENTS/IMGS/sec-3__img3.png",
    iconTitle: "New Listing",
    icon: "./COMPONENTS/ICONS/svg/sec-3__img2.svg",
    title: "Chodir bazimlar",
    info: "Chodirlar bilan tashkil qilingan bazimlar",
    color: "var(--listing-color)",
    bg: "var(--listing)",
  },
  {
    id: 2,
    img: "./COMPONENTS/IMGS/slide-3.png",
    iconTitle: "Discounted Price",
    icon: "./COMPONENTS/ICONS/svg/sec-3__img3.svg",
    title: "Hona bezaklari..",
    info: "Party tashkil qilinadigan honani bezash",
    color: "var(--price-color)",
    bg: "var(--price)",
  },
  {
    id: 3,
    img: "./COMPONENTS/IMGS/slide-2.png",
    iconTitle: "Popular",
    icon: "./COMPONENTS/ICONS/svg/sec-3__img1.svg",
    title: "Stol bezatish",
    info: "Bazim dasturhoni tashkil etish",
    color: "var(--popular-color)",
    bg: "var(--popular)",
  },
];
let sec3Cards = document.querySelector(".swiper-wrapper2");
let swiper = new Swiper(".mySwiper2", {
  slidesPerView: ScrollTrigger.isTouch !== 1 ? 3.5 : 1,
  spaceBetween: 50,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  grabCursor: true,
});
sec3CardsArray.map((val, i) => {
  sec3Cards.innerHTML += `
    <div class="swiper-slide" >
    <div class="sec-3-card">
    <div class="img-box">
      <img src=${val.img} alt="img">
      <div style=background:${val.bg}; class="card-icon">
        <img src=${val.icon} alt="icon">
        <p style=color:${val.color}; class="card-icon__title">${val.iconTitle}</p>
      </div>
    </div>
    <h1 class="title">${val.title}</h1>
    <p class="info">${val.info}</p>
  </div>
    </div>
  `;
});
let sec3_cards = document.querySelectorAll(".sec-3-card");
let first_modal = document.querySelector(".first-modal");
let close_modal_1 = document.querySelector(".close-modal-1");
let modal_body = document.querySelector(".modal-body");
sec3_cards.forEach((val, i) => {
  val.addEventListener("click", (e) => {
    first_modal.classList.add("active");
    modal_body.innerHTML = `
    <div class="sec-3-card">
      <div class="img-box">
      <img src=${sec3CardsArray[i].img} alt="img">
        <div style=background:${sec3CardsArray[i].bg}; class="card-icon">
          <img src=${sec3CardsArray[i].icon} alt="icon">
          <p style=color:${sec3CardsArray[i].color}; class="card-icon__title">${sec3CardsArray[i].iconTitle}</p>
        </div>
      </div>
        <h1 class="price">$${sec3CardsArray[i].price}</h1>
        <h1 class="title">${sec3CardsArray[i].title}</h1>
        <p class="info">${sec3CardsArray[i].info}</p>
    </div>
    `;
  });
});
close_modal_1.addEventListener("click", () => {
  first_modal.classList.remove("active");
});

// Section 3 End

// Section 5 Start
let expertArray = [
  {
    id: 0,
    img: "./COMPONENTS/IMGS/sec-5__img1.png",
    name: "Brendon M",
    expert: "CEO & Founder",
  },
  {
    id: 1,
    img: "./COMPONENTS/IMGS/sec-5__img2.png",
    name: "Jodi J. Appleby",
    expert: "Real Estate Developer",
  },
  {
    id: 2,
    img: "./COMPONENTS/IMGS/sec-5__img3.png",
    name: "Justin S. Meza",
    expert: "Listing Agent",
  },
  {
    id: 3,
    img: "./COMPONENTS/IMGS/sec-5__img4.png",
    name: "Susan T. Smith",
    expert: "Buyer's Agent",
  },
];
let expertsBox = document.querySelector(".sec-5-bottom");

expertArray.map((val, i) => {
  expertsBox.innerHTML += `
            <div class="sec-5-expert-info">
              <img src=${val.img} alt="expert__img">
              <h1 class="name">${val.name}</h1>
              <p class="expert">${val.expert}</p>
            </div>
  `;
});

// Section 5 End

// Liberys Start

// Swiper Start
let swiper1 = new Swiper(".mySwiper", {
  speed: 1500,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
    clickable: true,
  },
  grabCursor: true,
  mousewheel: true,
});
// Section - 6 Start

let sec6Swiper = document.querySelector(".mySwiper3 .swiper-wrapper");

for (let i = 0; i < 8; i++) {
  sec6Swiper.innerHTML += `
    <div class="swiper-slide">
      <div class="prewiev">
        <p class="commit">
          I highly recommend Jodi J. Appleby. She was attentive to
          our needs and worked tirelessly to find us the perfect
          home. We couldn't be happier with our new place!
        </p>
        <hr />
        <div class="user-box">
          <div>
            <img
              src="./COMPONENTS/IMGS/sec-6__img1.svg"
              alt="user"
            />
            <h1 class="name">Barbara D. Smith</h1>
          </div>
          <img
            src="./COMPONENTS/ICONS/svg/stars-4.svg"
            alt="stars"
          />
        </div>
      </div>
    </div>
  `;
}
let swiper3 = new Swiper(".mySwiper3", {
  speed: 1500,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
  grabCursor: true,
  mousewheel: true,
});
// Section - 6 End

let section1 = document.querySelectorAll(".section-1"),
  section2 = document.querySelectorAll(".section-2"),
  section3 = document.querySelectorAll(".section-3"),
  section4 = document.querySelectorAll(".section-4"),
  section5 = document.querySelectorAll(".section-5");
sectionsArray = [section1, section2, section3, section4, section5];

let sec5ex = document.querySelectorAll(".sec-5-expert-info");
sec5exArray = Array.from(sec5ex);

let sec6__1 = document.querySelector(".sec-6-top__content");
let sec6__2 = document.querySelector(".sec-6-top__title");
let sec6__3 = document.querySelector(".sec-6-top__paragraph");

let sec6Array = [sec6__1, sec6__2, sec6__3];

if (ScrollTrigger.isTouch !== 1) {
  sectionsArray.map((val) => {
    gsap.fromTo(
      val,
      { opacity: 1 },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: val,
          start: "center",
          end: "720",
          scrub: true,
        },
      }
    );
  });

  gsap.fromTo(
    ".Header",
    { opacity: 1 },
    {
      opacity: 0,
      scrollTrigger: {
        trigger: ".Header",
        start: "center",
        end: "720",
        scrub: true,
      },
    }
  );
  // Section - 1
  gsap.fromTo(
    ".section-1",
    { y: 150 },
    {
      y: 0,
      scrollTrigger: {
        trigger: ".section-1",
        start: "-950",
        end: "-350",
        scrub: true,
      },
    }
  );
  gsap.fromTo(
    ".sec-1-btm__logos",
    { opacity: 0, x: -350 },
    {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: ".sec-1-btm__logos",
        start: "-850",
        end: "-350",
        scrub: true,
      },
    }
  );
  // Section - 2
  gsap.fromTo(
    ".sec-2-left__other",
    { scale: 0 },
    {
      scale: 1,
      scrollTrigger: {
        trigger: ".sec-2-left__other",
        start: "-850",
        end: "-400",
        scrub: true,
      },
    }
  );
  gsap.fromTo(
    ".sec-2-right img",
    { scale: 0 },
    {
      scale: 1,
      scrollTrigger: {
        trigger: ".sec-2-right img",
        start: "-950",
        end: "-550",
        scrub: true,
      },
    }
  );
  // Section - 4
  gsap.fromTo(
    ".cardRight",
    { x: 300, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".cardRight",
        start: "-950",
        end: "-350",
        scrub: true,
      },
    }
  );
  gsap.fromTo(
    ".cardLeft",
    { x: -300, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".cardRight",
        start: "-950",
        end: "-350",
        scrub: true,
      },
    }
  );
  gsap.fromTo(
    ".cardCenter",
    { scale: 0, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      scrollTrigger: {
        trigger: ".cardRight",
        start: "-950",
        end: "-350",
        scrub: true,
      },
    }
  );
  gsap.fromTo(
    ".sec-4-title",
    { y: 200, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".sec-4-title",
        start: "-950",
        end: "-350",
        scrub: true,
      },
    }
  );
  // Section - 5
  sec5exArray.map((val, i) => {
    gsap.fromTo(
      val,
      { y: 80 * (i + 1), opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: val,
          start: "-1050",
          end: "-450",
          scrub: true,
        },
      }
    );
  });
  // Section 6
  sec6Array.map((val, i) => {
    gsap.fromTo(
      val,
      { x: -50 * (i + 1), opacity: 0 },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: val,
          start: "-850",
          end: "-350",
          scrub: true,
        },
      }
    );
  });
  gsap.fromTo(
    ".sec-6-register",
    { y: 200, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".sec-6-register",
        start: "-850",
        end: "-450",
        scrub: true,
      },
    }
  );
  // Swiper End
}

let routes = document.querySelectorAll(".nav-route");

function removeActive_a() {
  routes.forEach((val) => {
    val.classList.remove("active");
  });
}

routes.forEach((val) => {
  val.addEventListener("click", () => {
    removeActive_a();
    val.classList.add("active");
  });
});
