let slidesCounter01 = 0;
let slidesCounter02 = 0;
let slidesCounter03 = 0;
let slidesCounter04 = 0;

slides01();
slides02();
slides03();
slides04();

function slides01() {
  const slides01Images = document.querySelectorAll(".slides01");
  
  for (let i = 0; i < slides01Images.length; i++) {
    slides01Images[i].style.display = "none"; // reset all to none
  }

  slidesCounter01++;
  if (slidesCounter01 > slides01Images.length) {slidesCounter01 = 1}
  slides01Images[slidesCounter01 - 1].style.display = "block"; // set current to block
  setTimeout(slides01, 4000);
}

function slides02() {
  const slides02Images = document.querySelectorAll(".slides02");
  
  for (let i = 0; i < slides02Images.length; i++) {
    slides02Images[i].style.display = "none"; // reset all to none
  }

  slidesCounter02++;
  if (slidesCounter02 > slides02Images.length) {slidesCounter02 = 1}
  slides02Images[slidesCounter02 - 1].style.display = "block"; // set current to block
  setTimeout(slides02, 5000);
}

function slides03() {
  const slides03Images = document.querySelectorAll(".slides03");
  
  for (let i = 0; i < slides03Images.length; i++) {
    slides03Images[i].style.display = "none"; // reset all to none
  }

  slidesCounter03++;
  if (slidesCounter03 > slides03Images.length) {slidesCounter03 = 1}
  slides03Images[slidesCounter03 - 1].style.display = "block"; // set current to block
  setTimeout(slides03, 5000);
}

function slides04() {
  const slides04Images = document.querySelectorAll(".slides04");
  
  for (let i = 0; i < slides04Images.length; i++) {
    slides04Images[i].style.display = "none"; // reset all to none
  }

  slidesCounter04++;
  if (slidesCounter04 > slides04Images.length) {slidesCounter04 = 1}
  slides04Images[slidesCounter04 - 1].style.display = "block"; // set current to block
  setTimeout(slides04, 3000);
}