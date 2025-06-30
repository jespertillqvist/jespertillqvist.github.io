(function() {
    "use strict";
  
// Spinner
function spinner() {
    setTimeout(function () {
        var spinner = document.getElementById('spinner');
        if (spinner) {
            spinner.classList.remove('show');
        }
    }, 1);
}
spinner();


// Sticky Navbar
window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.sticky-top');
    if (window.scrollY > 300) {
        navbar.classList.add('shadow-sm');
        navbar.style.top = '0px';
    } else {
        navbar.classList.remove('shadow-sm');
        navbar.style.top = '-100px';
    }
});


// Back to top button
window.addEventListener('scroll', function () {
    var backToTop = document.querySelector('.back-to-top');
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});
document.querySelector('.back-to-top').addEventListener('click', function () {
    window.scrollTo({top: 0, behavior: 'smooth'});
});

// Portfolio isotope and filter
document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .active').classList.remove('active');
        this.classList.add('active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });
})();