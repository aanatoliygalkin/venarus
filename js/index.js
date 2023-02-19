document.addEventListener('DOMContentLoaded', () => {

  const swiper = new Swiper('.swiper', {

    direction: 'horizontal',
    loop: true,
  
    pagination: {
      clickable: true,
      el: '.swiper-pagination',
    },
  
    autoplay: {
      delay: 2000,
    }
  
  });

  let currentVideo = null;

  function countImg(count) {
    remClass();
    if (count == 1) {
      document.querySelector('.slider-img1').classList.add('slider-img-bg1');
      document.querySelector('.slider-img2').classList.add('slider-img-bg2');
      document.querySelector('.slider-img3').classList.add('slider-img-bg3');
    }
    if (count == 2) {
      document.querySelector('.slider-img1').classList.add('slider-img-bg3');
      document.querySelector('.slider-img2').classList.add('slider-img-bg1');
      document.querySelector('.slider-img3').classList.add('slider-img-bg2');
    }
    if (count == 3) {
      document.querySelector('.slider-img1').classList.add('slider-img-bg2');
      document.querySelector('.slider-img2').classList.add('slider-img-bg3');
      document.querySelector('.slider-img3').classList.add('slider-img-bg1');
    }
  };

  function remClass() {
    for (c = 1; c < 4; c++) {
      for (i = 1; i < 4; i++) {
        if (document.querySelector('.slider-img' + c).classList.contains('slider-img-bg' + i)) {
          document.querySelector('.slider-img' + c).classList.remove('slider-img-bg' + i);
        }
      }
    }
  }

  const arrowRight = document.querySelector('.slider-arrow-right');
  const arrowLeft = document.querySelector('.slider-arrow-left');
  let count = 1;

  document.querySelector('.slider-img1').classList.add('slider-img-bg1')
  document.querySelector('.slider-img2').classList.add('slider-img-bg2');
  document.querySelector('.slider-img3').classList.add('slider-img-bg3');

  arrowRight.addEventListener('click', () => {
    if (count < 3) {
      count++;
    } else {
      count = 1;
    }
    countImg(count);
  });

  arrowLeft.addEventListener('click', () => {
    if (count > 1) {
      count--;
    } else {
      count = 3;
    }
    countImg(count);
  });

  document.querySelector('.contraindications-close').addEventListener('click', () => {
    event.currentTarget.parentNode.style.display = 'none';
  });

  document.querySelector('.logo-menu').addEventListener('click', () => {
    document.querySelector('.header-menu').style.display = 'block';
    document.querySelector('.logo-menu-active').style.display = 'block';
    document.querySelector('.logo-menu').style.display = 'none';
  });

  document.querySelector('.logo-menu-active').addEventListener('click', () => {
    document.querySelector('.header-menu').style.display = 'none';
    document.querySelector('.logo-menu').style.display = 'block';
    document.querySelector('.logo-menu-active').style.display = 'none';
  });

  document.querySelectorAll('.view-right-play').forEach(function (f) {
    f.addEventListener('click', () => {
      createPopup(event.currentTarget.id);
    });
  });

  function createPopup(slideNum) {
    let videoDiv = document.createElement('div');
    videoDiv.classList.add('view-video-div');
    let effect = document.createElement('div');
    effect.classList.add('view-video-effect');
    effect.addEventListener('click', () => {
      videoDiv.remove();
    });
    let ifram = document.createElement('iframe');
    ifram.classList.add('view-video');
    ifram.width = '560';
    ifram.height = '315';
    ifram.src = 'https://www.youtube.com/embed/DcKTiUWY9ng';
    ifram.title = 'title="YouTube video player';
    ifram.frameborder = "0";
    ifram.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    ifram.allowfullscreen = true;
    videoDiv.append(effect);
    videoDiv.append(ifram);
    document.body.append(videoDiv);
    currentVideo = videoDiv;
  };

});