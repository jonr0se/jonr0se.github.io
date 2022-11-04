
const backgroundImages = [
  {
    url: 'https://images.unsplash.com/photo-1506259091721-347e791bab0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&q=80',
    isDesktopFriendly: true,
  },
  {
    url: 'https://images.unsplash.com/photo-1666053582202-25115d97c97b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&q=80',
    isDesktopFriendly: true,
  },
  {
    url: 'https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&q=80',
    isDesktopFriendly: true,
  },
  {
    url: 'https://images.unsplash.com/photo-1520188740392-665a13f453fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&q=80',
    isDesktopFriendly: true,
  },
  {
    url: 'https://images.unsplash.com/photo-1555448248-2571daf6344b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fGFic3RyYWN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&q=80',
    isMobileFriendly: true,
    minWidth: 768,
  },
  {
    url: 'https://images.unsplash.com/photo-1556139954-ec19cce61d61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&q=80',
    isMobileFriendly: true,
    minWidth: 768,
  },
  {
    url: 'https://images.unsplash.com/photo-1550537687-c91072c4792d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&q=80',
    isMobileFriendly: true,
    minWidth: 768,
  },
];

let lastWindowWidth = window.innerWidth;

function setBackgroundImage() {
  const isMobile = window.innerWidth < 768;
  const images = backgroundImages.filter((image) => isMobile ? image.isMobileFriendly : image.isDesktopFriendly);
  const randomBackgroundImg = images[Math.floor(Math.random() * images.length)];
  const imgSize = Math.max(Math.ceil(window.innerWidth * 1.2), randomBackgroundImg.minWidth || 600);
  const url = `${randomBackgroundImg.url}&w=${imgSize}`;
  let img = document.querySelector('#page-top-background-image-container .page-top-background-image');
  if (!img) {
    const imgContainer = document.getElementById('page-top-background-image-container');
    img = document.createElement('img');
    img.classList.add('page-top-background-image');
    img.alt = 'main background image';
    img.crossOrigin = 'anonymous'
    imgContainer.appendChild(img);
  }
  img.src = url;
}

function handleWindowResize() {
  if (window.innerWidth - lastWindowWidth > 180 || window.innerWidth < 768 !== lastWindowWidth < 768) {
    lastWindowWidth = window.innerWidth;
    setBackgroundImage();
  }
}

document.addEventListener('DOMContentLoaded', setBackgroundImage, { once: true });
window.addEventListener('resize', handleWindowResize);

function currentTime() {
  let date = new Date(); 
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = 'AM';

  if(hh === 0){
      hh = 12;
  }
  if(hh > 12){
      hh = hh - 12;
      session = 'PM';
   }

   hh = (hh < 10) ? '0' + hh : hh;
   mm = (mm < 10) ? '0' + mm : mm;
   ss = (ss < 10) ? '0' + ss : ss;
    
   let time = hh + ':' + mm + ':' + ss + ' ' + session;

  document.getElementById('clock').innerText = time; 
  let t = setTimeout(function(){ currentTime() }, 1000);
}
currentTime();
const currentYear = new Date().getFullYear();
console.log(`Copyright © ${currentYear} All Rights Reserved. Easter egg message!`);
