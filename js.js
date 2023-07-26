// Popup handling
function openPopup(imageSrc, description, videoSrc, linkUrl) {
  const popup = document.getElementById('popup');
  const popupMedia = document.getElementById('popup-media');
  const popupDescription = document.getElementById('popup-description');
  const popupLink = document.getElementById('popup-link');

  popup.style.display = 'block';
  popupMedia.innerHTML = '';
  popupDescription.textContent = description;
  popupLink.textContent = '';
  
  if (videoSrc) {
    const video = document.createElement('video');
    video.src = videoSrc;
    video.controls = true;
    popupMedia.appendChild(video);
  } else {
    const image = document.createElement('img');
    image.src = imageSrc;
    popupMedia.appendChild(image);
  }

  if (linkUrl) {
    const link = document.createElement('a');
    link.href = linkUrl;
    link.textContent = linkUrl;
    popupLink.appendChild(link);
  }
}

function closePopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'none';
}

// GSAP Scroll Trigger
const itemWrapper = document.querySelector('.side-scroll__itemOuter');
const itemInner = document.querySelector('.side-scroll__itemInner');

gsap.to(itemInner, {
  x: () => -(itemInner.clientWidth - itemWrapper.clientWidth),
  ease: 'none',
  scrollTrigger: {
    trigger: '.side-scroll__section', 
    start: 'top top',
    end: () => `+=${itemInner.clientWidth - itemWrapper.clientWidth}`,
    markers: true,
    scrub: true, 
    pin: true,  
    invalidateOnRefresh: true, 
    anticipatePin: 1, 
  },
});

//画像の設定

var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
		if (windowwidth > 768){
			var responsiveImage = [//PC用の画像
				{ src: './img/img_01.jpg'},
				{ src: './img/img_02.jpg'},
				{ src: './img/img_03.jpg'}
			];
		} else {
			var responsiveImage = [//タブレットサイズ（768px）以下用の画像
				{ src: './img/img_sp_01.jpg' },
				{ src: './img/img_sp_02.jpg' },
				{ src: './img/img_sp_03.jpg' }
			];
		}

//Vegas全体の設定







