const scrollBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
  // 일정 위치 이상 스크롤하면 버튼 표시
  if (window.scrollY > 200) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

 window.addEventListener('load', () => {
    const image = document.querySelector('.intro-image img');
    image.style.opacity = '1';
    image.style.transform = 'translateY(0)';
  });
