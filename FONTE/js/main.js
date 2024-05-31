const chap = document.querySelector(".chap");
const ong = document.querySelector(".ong");
const spn = document.querySelectorAll(".spn");
const dots = document.querySelectorAll(".dot");
const rewievs = [
  {
    id: 1,
    name: "Helena Gomes",
    info: "Helena is an Assistant Professor passionate about remediation and resource recovery.",
  },
  {
    id: 2,

    name: "Eva Elfie",
    info: "Yulia Sergeyevna Romanova[a] (Russian: Юлия Сергеевна Романова;[1][2][3] born 1997),[b][1][4] known professionally as Eva Elfie lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,

    name: "Azimjon",
    info: "Azimjon is a student at school he was born in 2008 January 22. He likes to chatting with girls. He is a knee. He likes to play football with his friends. He is a clever boy he's favorite subject is mathematics.",
  },
  {
    id: 4,
    name: "Azizbek",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];
let i = 0;
window.onload = function () {
  chap.onclick = function () {
    if (i == 0) {
      i = rewievs.length - 1;
    } else {
      i--;
    }
    document.querySelector(".name").textContent = rewievs[i].name;
    document.querySelector(".info").textContent = rewievs[i].info;
  };
  ong.onclick = function () {
    if (i === rewievs.length - 1) {
      i = 0;
    }else {
      i++;
    }
    document.querySelector(".name").textContent = rewievs[i].name;
    document.querySelector(".info").textContent = rewievs[i].info;
  };
};
spn.forEach((item) => {
  if (item.classList.contains("spn")) {
    item.addEventListener("click", () => {
      document.querySelector(".name").textContent = rewievs[i].name;
      document.querySelector(".info").textContent = rewievs[i].info;
    });
  }
});
const scrollTop = document.querySelector(".scrollTop");
const navbar = document.querySelector(".navbar");
document.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 500) {
    document.querySelector(".scrollTop").classList.add("active");
    document.querySelector(".navbar").classList.add("active");
  } else {
    document.querySelector(".scrollTop").classList.remove("active");
    document.querySelector(".navbar").classList.remove("active");
  }
});
scrollTop.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});
document.querySelector("nav").addEventListener("click", (e) => {
  if (e.target.id == "about") {
    document.documentElement.scrollTop = 500;
  }
  if (e.target.id == "team") {
    document.documentElement.scrollTop = 1910;
  }
  if (e.target.id == "blog") {
    document.documentElement.scrollTop = 2900;
  }
  if (e.target.id == "product") {
    document.documentElement.scrollTop = 3500;
  }
  if (e.target.id == "contact") {
    document.documentElement.scrollTop = 4500;
  }
});

const newsEl = document.querySelector(".news");
const news = [
 [
  {
    id: 1,
    img: "./imgs/s4_img1.svg",
    desc: "Рэй Далио перестал считать <br/> наличные «мусором»",
  },
  {
    id: 2,
    img: "./imgs/s4_img2.svg",
    desc: "Инвестиции в 5G – <br> необходимое условие <br> экономического развития",
  },
  {
    id: 3,
    img: "./imgs/s4_img3.svg",
    desc: "Минфин предложил единый <br> налоговый вычет",
  },
 ],
[
  {
    id: 4,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA6cDfMEqAKyPBuZOImaQ1LsdZ0hvxhq1Cdk4ERBNqSQ&s",
    desc: "Cristiano Ronaldo",
  },
  {
    id: 5,
    img: "https://i.pinimg.com/236x/8d/c2/90/8dc29089787c101965a20e0b66a78163.jpg",
    desc: "Leo Messi",
  },
  {
    id: 6,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOvnymqnSbs8xnqiGvNjd73p3gZj3sPGM5LvyqSV7DfA&s",
    desc: "Kilyan Mbappe",
  },
],
  [
    {
      id: 7,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT01O24BK0_Y7McpYW673rZBhOXU02RS_1rE69tQsbqcw&s",
      desc: "BMW",
    },
    {
      id: 8,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMG25j-iueqMFu8me7xK5fpsy6hqm2WSpwAH5PvnsjA&s",
      desc: "CLS 63",
    },
    {
      id: 9,
      img: "https://scalethumb.leparking.fr/unsafe/331x248/smart/https://cloud.leparking.fr/2021/12/07/21/31/audi-a8-audi-s8-quattro-4-0-v8t-px-for-vw-transporter_8363291854.jpg",
      desc: "Audi",
    },
  ]
];
var index = 0;
const writeData = (index) => {
console.log(dots[0]);
dots.forEach((item, i) => {
  if(i==index){
    item.classList.add("active");
  }else{
    item.classList.remove("active");
  }
})
  newsEl.innerHTML = "";
  console.log(news[index]);
  news[index].forEach((item) => {
    newsEl.innerHTML += `
  <div data-aos="fade-up" class="s4_img1">
  <img src="${item.img}" alt="" />
  <h2>
    ${item.desc}
  </h2>
  <h3 class="n2">Подробнее<i class="fa-solid fa-chevron-right"></i></h3>
</div>
  `;
  });
};
dots.forEach((item, i) => {
  item.addEventListener("click", () => {
    writeData(i);
  })
})
writeData(index);
const left = document.querySelector(".left22");
const right = document.querySelector(".right22");
left.addEventListener("click", () => {

  if (index > 0) {
    index--;
  }
  writeData(index);
});
right.addEventListener("click", () => {
  if (index == news.length - 1) {
    index=0;
  }
  else {
    index++;
  }
  writeData(index);
});