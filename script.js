// Testimonial Carousel
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const box = document.getElementById('testimonial-box');
const dots = document.querySelectorAll('.dot');

let index = 0;
const testimonials = [
  `"Sannara gave me a global perspective and real impact experience." — Alumni, France`,
  `"The perfect blend of learning and cultural discovery." — Alumni, Australia`,
  `"Inspiring journey with real-world applications." — Alumni, Singapore`
];

function showTestimonial(i) {
  box.innerHTML = `<p>${testimonials[i]}</p>`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[i].classList.add('active');
}

prevBtn.addEventListener('click', () => {
  index = (index - 1 + testimonials.length) % testimonials.length;
  showTestimonial(index);
});

nextBtn.addEventListener('click', () => {
  index = (index + 1) % testimonials.length;
  showTestimonial(index);
});

showTestimonial(index);
