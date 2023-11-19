<script>
  // Parallax effect for video
  const video = document.querySelector('video');
  const intro = document.querySelector('#intro');

  window.addEventListener('scroll', () => {
    let scrollPosition = window.pageYOffset;
    video.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    intro.style.opacity = 1 - scrollPosition / intro.offsetHeight;
  });
</script>