const detailBtns = document.querySelectorAll(".action");
const popup = document.querySelector(".popup");
const popupContainer = document.querySelector(".popup-container");
const dropdown = document.querySelector(".dropdown")


// Kode untuk membuat setiap button detail ketika di klik akan memunculkan popup
detailBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        event.preventDefault();
        popupContainer.style.display = "block";

    })

    popupContainer.addEventListener('click', function (event) {
        if (event.target === popupContainer) {
          popupContainer.style.display = "none";
        }
      });
});

// Kode untuk menambahkan search pada dropdown untuk layar device mobile
window.addEventListener('resize', function () {
  const dropdownContent = document.querySelector('.dropdown-content');

  if (window.innerWidth < 600) {
    if (!document.querySelector('.search')) {
      const additionalLink = document.createElement('a');
      additionalLink.href = '#';
      additionalLink.textContent = 'Search...';
      additionalLink.classList.add('search');

      dropdownContent.appendChild(additionalLink);
    }
  } else {
    const additionalLink = document.querySelector('.search');
    if (additionalLink) {
      additionalLink.remove();
    }
  }
});
