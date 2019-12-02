function init(){
    document.addEventListener('#menuNav', e => {
    const header = e.detail.target;  // header became sticky or stopped sticking.
    const sticking = e.detail.stuck; // true when header is sticky.
    header.classList.toggle('nav_isSticky', sticking); // add drop shadow when sticking.
  
    document.querySelector('#menuNav').textContent = header.textContent;
  });
};

  init();