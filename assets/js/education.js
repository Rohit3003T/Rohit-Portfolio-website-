AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Full Stack web development",
    cardImage: "assets/images/education-page/webdev.jpeg",
    moocLink: "https://media.licdn.com/dms/image/D5622AQHfVpr8a0yBDw/feedshare-shrink_800/0/1711869626377?e=1721865600&v=beta&t=O4ZNwnPmeTlxLKI113-psD_XS5Cj_wKlcwacLwG3rB8",
  },
  {
    title: "Ethical Hacking",
    cardImage: "assets/images/education-page/ethk.jpeg",
    moocLink: "https://media.licdn.com/dms/image/D4D22AQGahizqriDGsQ/feedshare-shrink_800/0/1704626315027?e=1721865600&v=beta&t=9bi9_ugrYybkrzd9l47iZyIGXX7c6oF95iDV6Z1N5vM",
  },
  {
    title: "Digital Forensics Essntials ",
    cardImage: "assets/images/education-page/foren.jpeg",
    moocLink: "https://media.licdn.com/dms/image/D5622AQEMTw2z320pMA/feedshare-shrink_800/0/1713704050737?e=1721865600&v=beta&t=xrWL9mKqdlD4DH91u4_AZw72GxgnBB1a9n1nX9_CfeI",
  },
  {
    title: "Mongo DB Basics",
    cardImage: "assets/images/education-page/mongo.jpeg",
    moocLink: "https://media.licdn.com/dms/image/D4D22AQHqmWvJlR4Dew/feedshare-shrink_2048_1536/0/1704625709772?e=1722470400&v=beta&t=BF_m3UgEdB7etr42SAFVt3DrV9UEWTuXbFS51w19Wr0",
  },
  {
    title: "Ui UX Designing",
    cardImage: "assets/images/education-page/ux.jpeg",
    moocLink: "https://media.licdn.com/dms/image/D4D22AQHpJ54LQMQlJA/feedshare-shrink_2048_1536/0/1704625450116?e=1722470400&v=beta&t=sT59unC-bu_Y5iIBMV_5AM7NHj63TGCNKFMqqi4J6ZQ",
  },
  
];


let currentItem = 0;

const img = document.getElementById("image");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

window.addEventListener("DOMContentLoaded", function () {
  showExperience();
});

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
    const item = experience[currentItem];
    img.src = item.img;
    currentItem++;
  }, 3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
      (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

/* Badges*/

const bagdes = document.querySelector(".badges");


const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
      (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);

/* Timeline Section*/

$(function () {
  window.sr = ScrollReveal();

  if ($(window).width() < 768) {
    if ($(".timeline-content").hasClass("js--fadeInLeft")) {
      $(".timeline-content")
        .removeClass("js--fadeInLeft")
        .addClass("js--fadeInRight");
    }

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  } else {
    sr.reveal(".js--fadeInLeft", {
      origin: "left",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  }

  sr.reveal(".js--fadeInLeft", {
    origin: "left",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });

  sr.reveal(".js--fadeInRight", {
    origin: "right",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });
});
