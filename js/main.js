/* MODAL */
const dialogElement = document.getElementById("modal");
const submitButton = document.getElementById("submit");
const modalName = document.getElementById("modal-name");
const modalAttendance = document.getElementById("modal-attendance");

dialogElement.addEventListener("click", closeOnBackDropClick);

function closeOnBackDropClick({ currentTarget, target }) {
  const dialogElement = currentTarget;
  const isClickedOnBackDrop = target === dialogElement;
  if (isClickedOnBackDrop) {
    dialogElement.close();
    modalName.value = "";
    modalAttendance.value = "yes";
  }
}

submitButton.addEventListener("click", (e) => {
  const formNode = event.target.form;
  const isValid = formNode.checkValidity();
  if (isValid) {
    e.preventDefault();
    alert(`Спасибо, ${modalName.value}! Ваш ответ: ${modalAttendance.value === "yes" ? "Ждем вас!" : "Жаль, что не сможете."}`);
    modalName.value = "";
    modalAttendance.value = "yes";
    dialogElement.close();
  }
});

/* SWIPER PRICE - Disabled to ensure all items are visible
const sliderItems = document.querySelectorAll(".section-price__item");
const buttonPrev = document.getElementById("slider-prev");
const buttonNext = document.getElementById("slider-next");

let position = 0;

buttonNext.addEventListener("click", () => {
  if (position > -200) {
    buttonPrev.classList.remove('slider-button-nonvisible');
    position -= 100;
    sliderItems.forEach(item => {
      item.style.left = `${position}%`;
      if (position === -200) {
        buttonNext.classList.add('slider-button-nonvisible');
      }
    });
  }
});

buttonPrev.addEventListener("click", () => {
  if (position < 0) {
    buttonNext.classList.remove('slider-button-nonvisible');
    position += 100;
    sliderItems.forEach(item => {
      item.style.left = `${position}%`;
      if (position === 0) {
        buttonPrev.classList.add('slider-button-nonvisible');
      }
    });
  }
});
*/

/* COUNTDOWN TIMER */
function countdown() {
  const weddingDate = new Date("July 4, 2025 15:00:00").getTime();
  const now = new Date().getTime();
  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days.toString().padStart(2, "0");
  document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
  document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
  document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");

  if (distance < 0) {
    clearInterval(countdownInterval);
    document.querySelector(".countdown").innerHTML = "<p>Свадьба началась!</p>";
  }
}

const countdownInterval = setInterval(countdown, 1000);

/* SECTION FADE-IN ANIMATION */
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll('.section, .section-group, .section-group-story');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => observer.observe(section));

  // Countdown logic
  const countdownDate = new Date('2025-07-04T13:00:00').getTime();
  const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

    if (distance < 0) {
      clearInterval(countdownInterval);
      document.querySelector('.countdown').textContent = 'Событие началось!';
    }
  };

  const countdownInterval = setInterval(updateCountdown, 1000);
  updateCountdown();
})

const slider = document.querySelector('.photos__slider');
const photos = document.querySelectorAll('.place__photo');
const prevBtn = document.querySelector('.slider-button.prev');
const nextBtn = document.querySelector('.slider-button.next');
let currentIndex = 0;

if (slider && photos.length > 0 && prevBtn && nextBtn) {
  function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    prevBtn.style.display = currentIndex === 0 ? 'none' : 'block';
    nextBtn.style.display = currentIndex === photos.length - 1 ? 'none' : 'block';
  }

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentIndex < photos.length - 1) {
      currentIndex++;
      updateSlider();
    }
  });

  updateSlider();
};