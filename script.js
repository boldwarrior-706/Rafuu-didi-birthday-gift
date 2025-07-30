function playMusic(src) {
      const player = document.getElementById("player");
      player.src = src;
      player.play();
    }

    function cutCake() {
      document.getElementById("cake-img").style.display = "block";
      // Ensure 'fireworks.mp3' is also available at the root or correct path
      playMusic('fireworks.mp3'); 
      launchConfetti();
      launchHearts();
    }

    function launchConfetti() {
      for (let i = 0; i < 40; i++) {
        const conf = document.createElement('div');
        conf.style.position = 'absolute';
        conf.style.width = '10px';
        conf.style.height = '10px';
        conf.style.borderRadius = '50%';
        conf.style.background = ['#ff1493','#ff69b4','#ffa07a','#ffb6c1'][Math.floor(Math.random()*4)];
        conf.style.left = Math.random()*window.innerWidth + 'px';
        conf.style.top = '-20px';
        conf.style.animation = 'drop 4s ease-in forwards';
        document.body.appendChild(conf);
        setTimeout(() => conf.remove(), 4000);
      }
    }

    function launchHearts() {
      for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random()*window.innerWidth + 'px';
        heart.style.top = '100vh';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
      }
    }

    function setMood(mood) {
      if (mood === 'sparkly') {
        launchConfetti();
        alert("✨ You sparkle even when you're chaotic");
      } else if (mood === 'overthinking') {
        alert("🧠 Chill. You're amazing and Warrior totally said so");
      } else if (mood === 'chaotic') {
        launchConfetti(); launchHearts();
        alert("💥 Chaos unlocked. No turning back now!");
      }
    }

    function showResult() {
      const types = [
        "The Chaos Fairy 🧚‍♀️",
        "The Sass Queen 👑",
        "The Emotional Pancake 🥞",
        "Warrior’s Surprisingly Sweet Bestie 💘"
      ];
      const result = types[Math.floor(Math.random()*types.length)];
      const box = document.getElementById("quiz-result");
      box.textContent = `Your result: ${result}`;
      box.style.display = "block";
    }

    function revealTreasure() {
      document.getElementById("treasure-message").style.display = "block";
      launchConfetti();
    }

    setTimeout(() => {
      document.getElementById("greeting").style.display = "none";
    }, 6000);
    function updateWeirdLabel() {
      const val = document.getElementById("weirdRange").value;
      document.getElementById("weirdLabel").textContent = `Weirdness Level: ${val}/10`;
    }

    function submitWeirdness() {
      const val = document.getElementById("weirdRange").value;
      let message = "";

      if (val <= 3) {
        message = "Wow... either you’re lying or I’ve fooled you. I’m weirder than that 😭";
      } else if (val <= 6) {
        message = "Fair enough. I call it ✨moderately chaotic✨";
      } else if (val <= 9) {
        message = "YES. That’s the correct diagnosis: Warrior = certified weirdo 😎";
      } else {
        message = "10/10? Bro. I might be an alien and you're just finding out now 👽";
      }

      const box = document.getElementById("weirdResult");
      box.textContent = message;
      box.style.display = "block";
    }