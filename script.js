<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Happy Birthday! 🎉</title>

  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      min-height: 100vh;
      font-family: Arial, sans-serif;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      background: linear-gradient(135deg, #ff758c, #ff7eb3, #8f94fb);
      position: relative;
    }

    /* Birthday Card */
    .card {
      width: 90%;
      max-width: 600px;
      padding: 40px 25px;
      text-align: center;
      background: rgba(255, 255, 255, 0.18);
      border: 1px solid rgba(255, 255, 255, 0.35);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-radius: 25px;
      box-shadow: 0 10px 35px rgba(0, 0, 0, 0.2);
      color: white;
      z-index: 10;
      animation: cardAppear 1s ease;
    }

    @keyframes cardAppear {
      from {
        opacity: 0;
        transform: scale(0.8) translateY(30px);
      }
      to {
        opacity: 1;
        transform: scale(1) translateY(0);
      }
    }

    h1 {
      font-size: clamp(2.2rem, 8vw, 4.5rem);
      margin-bottom: 15px;
      text-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
      animation: bounce 2s infinite;
    }

    @keyframes bounce {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    }

    .cake {
      font-size: clamp(4rem, 15vw, 7rem);
      margin: 15px 0;
    }

    .message {
      font-size: clamp(1rem, 4vw, 1.4rem);
      line-height: 1.7;
      margin: 20px auto;
      max-width: 500px;
    }

    .highlight {
      font-weight: bold;
      color: #fff9a5;
    }

    button {
      margin-top: 15px;
      border: none;
      padding: 14px 28px;
      border-radius: 50px;
      font-size: 1rem;
      font-weight: bold;
      cursor: pointer;
      color: #ff4f81;
      background: white;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
      transition: 0.3s ease;
    }

    button:hover {
      transform: scale(1.08);
    }

    button:active {
      transform: scale(0.95);
    }

    /* Balloons */
    .balloon {
      position: absolute;
      bottom: -150px;
      width: 60px;
      height: 75px;
      border-radius: 50%;
      opacity: 0.8;
      animation: floatUp linear infinite;
    }

    .balloon::after {
      content: "";
      position: absolute;
      width: 2px;
      height: 100px;
      background: white;
      left: 50%;
      top: 70px;
    }

    .balloon:nth-child(1) {
      left: 10%;
      animation-duration: 10s;
      background: #ff4f81;
    }

    .balloon:nth-child(2) {
      left: 25%;
      animation-duration: 13s;
      animation-delay: 2s;
      background: #ffd166;
    }

    .balloon:nth-child(3) {
      left: 70%;
      animation-duration: 11s;
      animation-delay: 1s;
      background: #06d6a0;
    }

    .balloon:nth-child(4) {
      left: 88%;
      animation-duration: 14s;
      animation-delay: 4s;
      background: #4cc9f0;
    }

    @keyframes floatUp {
      from {
        transform: translateY(0) rotate(0deg);
      }
      to {
        transform: translateY(-120vh) rotate(20deg);
      }
    }

    /* Confetti */
    .confetti {
      position: fixed;
      width: 10px;
      height: 10px;
      top: -20px;
      z-index: 20;
      pointer-events: none;
      animation: fall linear forwards;
    }

    @keyframes fall {
      to {
        transform: translateY(110vh) rotate(720deg);
      }
    }

    /* Mobile adjustments */
    @media (max-width: 480px) {
      .card {
        padding: 30px 18px;
        border-radius: 20px;
      }

      .message {
        line-height: 1.6;
      }

      button {
        width: 100%;
      }
    }
  </style>
</head>

<body>

  <!-- Floating Balloons -->
  <div class="balloon"></div>
  <div class="balloon"></div>
  <div class="balloon"></div>
  <div class="balloon"></div>

  <!-- Birthday Card -->
  <div class="card">
    <h1>Happy Birthday! 🎉</h1>

    <div class="cake">🎂</div>

    <p class="message">
      Wishing you a day filled with <span class="highlight">love, laughter,
      happiness, and unforgettable memories!</span>
      <br><br>
      May all your dreams come true and may this new year of your life bring
      you endless success and joy. 🥳✨
    </p>

    <button onclick="celebrate()">Click for a Surprise! 🎊</button>
  </div>

  <script>
    // Create confetti
    function createConfetti(amount = 150) {
      const colors = [
        "#ff4f81",
        "#ffd166",
        "#06d6a0",
        "#118ab2",
        "#8338ec",
        "#ffffff"
      ];

      for (let i = 0; i < amount; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");

        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.backgroundColor =
          colors[Math.floor(Math.random() * colors.length)];

        confetti.style.width = Math.random() * 10 + 5 + "px";
        confetti.style.height = Math.random() * 10 + 5 + "px";

        confetti.style.borderRadius =
          Math.random() > 0.5 ? "50%" : "0";

        confetti.style.animationDuration =
          Math.random() * 3 + 2 + "s";

        confetti.style.animationDelay =
          Math.random() * 1 + "s";

        document.body.appendChild(confetti);

        // Remove confetti after animation
        setTimeout(() => {
          confetti.remove();
        }, 6000);
      }
    }

    // Surprise button
    function celebrate() {
      createConfetti(250);

      alert("🎉 HAPPY BIRTHDAY! 🎂🥳\nMay your day be as amazing as you are! ❤️");
    }

    // Confetti when page opens
    window.onload = () => {
      createConfetti(100);
    };
  </script>

</body>
</html>