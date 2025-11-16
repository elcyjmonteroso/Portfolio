/* Hamburger Button */
document.querySelector('.menu-toggle').addEventListener('click', function() {
  const icon = this.querySelector('i');
  icon.classList.toggle('bx-menu');
  icon.classList.toggle('bx-x');
});

const toggleBtn = document.querySelector('.menu-toggle');
const toggleIcon = toggleBtn.querySelector('i');
const mobileNav = document.getElementById('mobileNav');

mobileNav.addEventListener('shown.bs.collapse', () => {
  toggleIcon.classList.remove('bx-menu');
  toggleIcon.classList.add('bx-x');
});

mobileNav.addEventListener('hidden.bs.collapse', () => {
  toggleIcon.classList.add('bx-menu');
  toggleIcon.classList.remove('bx-x');
});

// add blur + transparency on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

/* Hero */
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".hero").classList.add("loaded");
  });





/* Off the Grid */
document.querySelectorAll('.off-the-grid-gallery').forEach(gallery => {
  const imagesContainer = gallery.querySelector('.images');
  const images = gallery.querySelectorAll('.images img');
  const dotsContainer = gallery.querySelector('.dots');
  const prevBtn = gallery.querySelector('.prev');
  const nextBtn = gallery.querySelector('.next');
  let currentIndex = 0;

  // Create dots
  dotsContainer.innerHTML = "";
  images.forEach((_, i) => {
    const dot = document.createElement('span');
    if (i === 0) dot.classList.add('active');
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll('span');

  function showImage(index) {
    imagesContainer.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(d => d.classList.remove('active'));
    dots[index].classList.add('active');
  }

  // Button navigation
  prevBtn.onclick = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  };
  nextBtn.onclick = () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  };

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      currentIndex = i;
      showImage(i);
    });
  });

  // === MODAL POPUP ===
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const modalPrev = document.getElementById("modalPrev");
  const modalNext = document.getElementById("modalNext");
  const modalDots = document.querySelector(".modal-dots");
  const close = document.querySelector(".close");

  let currentImgs = [];
  let modalIndex = 0;

  document.querySelectorAll(".off-the-grid-gallery img").forEach(img => {
    img.addEventListener("click", () => {
      const gallery = img.closest(".off-the-grid-gallery");
      currentImgs = Array.from(gallery.querySelectorAll("img"));
      modal.style.display = "flex";
      modalIndex = currentImgs.indexOf(img);
      updateModal();
    });
  });

  function updateModal() {
    modalImg.src = currentImgs[modalIndex].src;
    modalDots.innerHTML = currentImgs.map((_, i) => 
      `<span class="${i === modalIndex ? "active" : ""}"></span>`
    ).join("");
  }

  modalPrev.onclick = () => {
    modalIndex = (modalIndex - 1 + currentImgs.length) % currentImgs.length;
    updateModal();
  };
  modalNext.onclick = () => {
    modalIndex = (modalIndex + 1) % currentImgs.length;
    updateModal();
  };
  close.onclick = () => modal.style.display = "none";
  modal.onclick = e => { if (e.target === modal) modal.style.display = "none"; };
});





/* Certifications */
document.querySelectorAll('.cert-gallery').forEach(gallery => {
  const imagesContainer = gallery.querySelector('.images');
  const images = gallery.querySelectorAll('.images img');
  const dotsContainer = gallery.querySelector('.dots');
  const prevBtn = gallery.querySelector('.prev');
  const nextBtn = gallery.querySelector('.next');
  let currentIndex = 0;

  // Create dots
  dotsContainer.innerHTML = "";
  images.forEach((_, i) => {
    const dot = document.createElement('span');
    if (i === 0) dot.classList.add('active');
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll('span');

  function showImage(index) {
    imagesContainer.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(d => d.classList.remove('active'));
    dots[index].classList.add('active');
  }

  // Button navigation
  prevBtn.onclick = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  };
  nextBtn.onclick = () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  };

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      currentIndex = i;
      showImage(i);
    });
  });

  // === MODAL POPUP ===
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const modalPrev = document.getElementById("modalPrev");
  const modalNext = document.getElementById("modalNext");
  const modalDots = document.querySelector(".modal-dots");
  const close = document.querySelector(".close");

  let currentImgs = [];
  let modalIndex = 0;

  document.querySelectorAll(".cert-gallery img").forEach(img => {
    img.addEventListener("click", () => {
      const gallery = img.closest(".cert-gallery");
      currentImgs = Array.from(gallery.querySelectorAll("img"));
      modal.style.display = "flex";
      modalIndex = currentImgs.indexOf(img);
      updateModal();
    });
  });

  function updateModal() {
    modalImg.src = currentImgs[modalIndex].src;
    modalDots.innerHTML = currentImgs.map((_, i) => 
      `<span class="${i === modalIndex ? "active" : ""}"></span>`
    ).join("");
  }

  modalPrev.onclick = () => {
    modalIndex = (modalIndex - 1 + currentImgs.length) % currentImgs.length;
    updateModal();
  };
  modalNext.onclick = () => {
    modalIndex = (modalIndex + 1) % currentImgs.length;
    updateModal();
  };
  close.onclick = () => modal.style.display = "none";
  modal.onclick = e => { if (e.target === modal) modal.style.display = "none"; };
});





/* Email Copy */
document.querySelector(".btn-copy-email").addEventListener("click", function () {
    const email = "elcyjeanmonteroso@gmail.com";

    navigator.clipboard.writeText(email);

    this.classList.add("copied");
    this.querySelector("span").textContent = "Copied!";

    setTimeout(() => {
        this.classList.remove("copied");
        this.querySelector("span").textContent = "Copy my email";
    }, 2000);
});


// Initialize EmailJS
emailjs.init("EpQ0uSB-zlAdtzW_K");

// Handle Form Submission
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const btnText = document.getElementById("btnText");
    const notif = document.getElementById("formNotif");

    // Loading state
    btnText.textContent = "Sending...";

    // Send form
    emailjs.sendForm("service_c5bcxvb", "template_i9odbxa", this)
        .then(() => {
            btnText.textContent = "Send message";

            notif.textContent = "Message sent successfully!";
            notif.classList.remove("error");
            notif.style.display = "block";

            this.reset();

            setTimeout(() => {
                notif.style.display = "none";
            }, 3000);
        })
        .catch(() => {
            btnText.textContent = "Send message";

            notif.textContent = "Something went wrong. Try again.";
            notif.classList.add("error");
            notif.style.display = "block";

            setTimeout(() => {
                notif.style.display = "none";
            }, 3000);
        });
});





/* Copy Email */
const copyEmailBtn = document.getElementById("copyEmailBtn");
const copyEmailText = document.getElementById("copyEmailText");

const myEmail = "elcyjeanmonteroso@gmail.com"; // ← YOUR EMAIL HERE

copyEmailBtn.addEventListener("click", function () {

    navigator.clipboard.writeText(myEmail).then(() => {

        // Change text to "Copied!"
        copyEmailText.textContent = "Copied!";
        copyEmailBtn.classList.add("copied");

        // Revert after 2 seconds
        setTimeout(() => {
            copyEmailText.textContent = "Copy my email";
            copyEmailBtn.classList.remove("copied");
        }, 2000);

    }).catch(() => {
        // fallback in case copying fails
        alert("Failed to copy email.");
    });
});

