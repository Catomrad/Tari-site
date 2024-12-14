class Slider{

  constructor(name, slide_class, dot_class, 
    active_dot, display_type ,slideIndex){
    this.name = name;
    this.slide_class = slide_class;
    this.dot_class = dot_class;
    this.slideIndex = slideIndex;
    this.active_dot = active_dot;
    this.display_type = display_type;
  }

  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n) {
    let i;
    let slides = document.getElementsByClassName(this.slide_class);
    let dots = document.getElementsByClassName(this.dot_class);
    if (n > slides.length) {this.slideIndex = 1}
    if (n < 1) {this.slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      console.log(slides[i].style.display)
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(this.active_dot, "");
    }
    slides[this.slideIndex-1].style.display = this.display_type;
    dots[this.slideIndex-1].className += this.active_dot;
  }
}

let banner_slider =  new Slider("Banner_slider", "banner", 
"banner__dot", " banner__dot--active", "block",1);
banner_slider.showSlides(1)

let service_slider = new Slider("Service_slider", "service-page", 
"service__dot", " service__dot--active","flex", 1);
service_slider.showSlides(1)


// Актуальный прайс
function showLists(n){
  let i;
  let lists = document.getElementsByClassName("list");
  for (i = 0; i < lists.length; i++) {
      lists[i].className = lists[i].className.replace(" choosen", "");
    }
  console.log(lists[n])
  lists[n].className += " choosen";
}
showLists(0);

function nextList(){
  let i;
  let currentIndex;
  let lists = document.getElementsByClassName("list");
  for (i = 0; i < lists.length; i++) {
    if (lists[i].className.includes(" choosen")) {
      currentIndex = i;
    }
    lists[i].className = lists[i].className.replace(" choosen", "");
  }
  showLists((currentIndex + 1) % 3);
}
function prevList(){
  let i;
  let currentIndex;
  let lists = document.getElementsByClassName("list");
  for (i = 0; i < lists.length; i++) {
    if (lists[i].className.includes(" choosen")) {
      currentIndex = i;
    }
    lists[i].className = lists[i].className.replace(" choosen", "");
  }
  showLists((currentIndex - 1 + 3) % 3);
}


//Работники
const employeesContainer = document.querySelector('.employees');
const cardWidth = document.querySelector('.employee-card').offsetWidth + 20; // + gap

function scrollNext() {
    employeesContainer.scrollBy({
        left: cardWidth,
        behavior: 'smooth'
    });
}

function scrollPrev() {
    employeesContainer.scrollBy({
        left: -cardWidth,
        behavior: 'smooth'
    });
}