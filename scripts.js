document.addEventListener('DOMContentLoaded', () => {
  const toggleButtons = document.querySelectorAll('.toggle-btn');
  const navLinks = document.querySelectorAll('nav a');
  const slidesContainer = document.querySelector('.slides');
  const images = document.querySelectorAll('.slides img');
  const prevButton = document.querySelector('.slider-btn.prev');
  const nextButton = document.querySelector('.slider-btn.next');
  const feedbackBtn = document.getElementById('feedback-btn');
  const feedbackOptions = document.getElementById('feedback-options');
  const feedbackIcon = document.getElementById('feedback-icon');
  const feedbackText = document.getElementById('feedback-text');
  const closeFeedback = document.getElementById('close-feedback');
  const contactFormBtn = document.getElementById('contact-form-btn');
  const contactForm = document.getElementById('contact-form');

  // Кнопки "Детальніше" і "Послуги"
  toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      if (button.id === 'feedback-btn') return;
      const content = button.nextElementSibling;
      if (content?.classList.contains('toggle-content')) {
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
      }
    });
  });

  // Плавна навігація
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Слайдер
  let index = 0;
  let autoSlideInterval = setInterval(showNextSlide, 3000);

  function showSlide(i) {
    index = (i + images.length) % images.length;
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
  }

  function showNextSlide() {
    showSlide(index + 1);
  }

  function showPrevSlide() {
    showSlide(index - 1);
  }

  nextButton.addEventListener('click', () => {
    clearInterval(autoSlideInterval);
    showNextSlide();
    autoSlideInterval = setInterval(showNextSlide, 3000);
  });

  prevButton.addEventListener('click', () => {
    clearInterval(autoSlideInterval);
    showPrevSlide();
    autoSlideInterval = setInterval(showNextSlide, 3000);
  });

  // Віджет зв’язку
  feedbackBtn.addEventListener('click', () => {
    const expanded = feedbackOptions.style.display === 'block';
    feedbackOptions.style.display = expanded ? 'none' : 'block';
    feedbackIcon.style.display = expanded ? 'inline' : 'none';
    feedbackText.style.display = expanded ? 'none' : 'inline';
    feedbackBtn.style.display = expanded ? 'flex' : 'none';
  });

  closeFeedback.addEventListener('click', () => {
    feedbackOptions.style.display = 'none';
    feedbackIcon.style.display = 'inline';
    feedbackText.style.display = 'none';
    feedbackBtn.style.display = 'flex';
  });

  contactFormBtn.addEventListener('click', () => {
    contactForm.style.display = contactForm.style.display === 'block' ? 'none' : 'block';
  });
});
