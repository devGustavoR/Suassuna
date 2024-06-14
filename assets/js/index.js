document.addEventListener('DOMContentLoaded', (event) => {
  let scrollContainers = document.querySelectorAll('.catalogo-wrap');

  scrollContainers.forEach(container => {
    let scrollContainer = container.querySelector('.catalogo');
    let backBtn = container.querySelector('.backBtn');
    let nextBtn = container.querySelector('.nextBtn');

    if (scrollContainer && backBtn && nextBtn) {
      scrollContainer.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
      });

      nextBtn.addEventListener('click', () => {
        scrollContainer.scrollLeft += 900;
      });

      backBtn.addEventListener('click', () => {
        scrollContainer.scrollLeft -= 900;
      });
    } else {
      console.error('Um ou mais elementos não foram encontrados:', {
        scrollContainer,
        backBtn,
        nextBtn
      });
    }
  });
});
