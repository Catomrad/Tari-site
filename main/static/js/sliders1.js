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
  sayHi() {
    alert(this.name);
  }
  // Next/previous controls
  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  // Thumbnail image controls
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
