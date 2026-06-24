(function(){
  'use strict';

  // FAQ, byline logo and footer are now static HTML in each article.
  // This file only keeps the back-to-top button clear of the footer so
  // contact details stay visible. It is non-critical: if it fails to
  // load, the page and all content still work.

  var footer=document.querySelector('footer');
  var btt=document.getElementById('btt');
  if(btt && footer){
    function placeButton(){
      btt.classList.toggle('visible',window.scrollY>400);
      var rect=footer.getBoundingClientRect();
      btt.style.bottom=rect.top<window.innerHeight?(window.innerHeight-rect.top+16)+'px':'';
    }
    window.addEventListener('scroll',placeButton,{passive:true});
    window.addEventListener('resize',placeButton,{passive:true});
    placeButton();
  }
})();
