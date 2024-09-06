// Basic form handling example
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
  alert('Thank you for reaching out! We will get back to you soon.');
});

// Scroll-based animations for smooth UI/UX
const elements = document.querySelectorAll('.animate');
window.addEventListener('scroll', () => {
  elements.forEach(element => {
    const position = element.getBoundingClientRect().top;
    if (position < window.innerHeight