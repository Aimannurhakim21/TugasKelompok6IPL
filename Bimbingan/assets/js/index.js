const detailBtns = document.querySelectorAll(".action");
// const popups = document.querySelector(".popup");
const detailJupenBtn = document.querySelector("#detail-jupen");
const detailBimbinganBtn = document.querySelector("#detail-bimbingan");
const detailSidangBtn = document.querySelector("#detailSidang");

const popupContainer = document.querySelector(".popup-container");
const dropdown = document.querySelector(".dropdown")


// Kode untuk membuat setiap button detail ketika di klik akan memunculkan popup
detailBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        event.preventDefault();

        // mendapatkan nilai id dari button. misal detail-jupen, maka hanya akan mengambil nilai jupen
        const popupId = this.id.replace('detail-', ''); 

        // mencari element berdasarkan id popup - popupId, misal popup-jupen
        const popup = document.getElementById(`popup-${popupId}`);

        // Jika cocok, tampilkan popup
        if (popup) {  
          const popups = document.querySelectorAll(".popup");
            popups.forEach(popup => {
                popup.style.display = "none";
            });

            popupContainer.style.display = "block";
            popup.style.display = "block";
        }

    })

    // Jika klik diluar card popup, akan menghilangkan atau menutup card popup
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
