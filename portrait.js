(() => {
 'use strict';
 const root = document.getElementById('ziyao-home');
 const header = root.querySelector('.zg-header');
 function updateHeader() {
  header.classList.toggle('is-scrolled', window.scrollY > 4);
 }
 window.addEventListener('scroll', updateHeader, { passive:true });
 updateHeader();

 const frame = root.querySelector('.zg-portrait');
 const photo = frame.querySelector('img');
 const crop = { zoom:1.08, x:0, y:100 };
 function renderPortrait() {
  const width = frame.clientWidth;
  const height = frame.clientHeight;
  if (!width || !height) return;
  const naturalWidth = photo.naturalWidth || 1405;
  const naturalHeight = photo.naturalHeight || 1872;
  const base = Math.max(width/naturalWidth, height/naturalHeight);
  const scaledWidth = naturalWidth * base * crop.zoom;
  const scaledHeight = naturalHeight * base * crop.zoom;
  photo.style.width = scaledWidth + 'px';
  photo.style.height = scaledHeight + 'px';
  photo.style.left = (-Math.max(0, scaledWidth-width)*crop.x/100) + 'px';
  photo.style.top = (-Math.max(0, scaledHeight-height)*crop.y/100) + 'px';
 }
 photo.addEventListener('load', renderPortrait);
 new ResizeObserver(renderPortrait).observe(frame);
 renderPortrait();
})();
