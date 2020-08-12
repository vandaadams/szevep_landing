// scrolls into section when navlink is clicked
const scrollLinks = document.querySelectorAll('.scroll')

scrollLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault()
    const href = link.getAttribute('href')
    document.querySelector(href).scrollIntoView({
      behavior: 'smooth'
    })
  })
});

inView('.section')
  .on('enter', section => {
    // adds active class to navlink when section scrolls in
    scrollLinks.forEach(link => {
      if ('#' + section.id === link.getAttribute('href') && section.id !== 'home') {
        link.classList.add('active')
      }
    });
    // fades in section
    document.querySelector('.' + section.id).classList.remove('hidden')
  })
  // removes active class from navlink when section scrolls out
  .on('exit', section => {
    scrollLinks.forEach(link => {
      if ('#' + section.id === link.getAttribute('href')) {
        link.classList.remove('active')
      }
    });
  })

  inView.threshold(0.5);

$(function() {
  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });
});
