yesButton.addEventListener('click', () => {
  imageDisplay.src = IMAGE_PATHS[IMAGE_PATHS.length - 1];
  imageDisplay.alt = ALT_TEXTS[ALT_TEXTS.length - 1];
  valentineQuestion.textContent = 'Yayyy!! :3 💖';
  responseButtons.style.display = 'none';

  const heart = confetti.shapeFromPath({
    path: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z',
  });

  const duration = 6 * 1000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 20,
      spread: 360,
      startVelocity: 40,
      ticks: 80,
      gravity: 0.6,
      origin: {
        x: Math.random(),
        y: Math.random() - 0.2
      },
      shapes: [heart],
      colors: ['#ff69b4', '#ff1493', '#ff6b81', '#e84393'],
      scalar: 2
    });

    if (Date.now()
