let count = 0;

function incrementCounter() {
  count++;
  document.getElementById('counter').innerText = count;
}

function getCatFact() {
  fetch("https://catfact.ninja/fact")
    .then(response => response.json())
    .then(data => {
      document.getElementById("catFact").innerText = data.fact;
    })
    .catch(error => {
      document.getElementById("catFact").innerText = "Failed to load fact.";
    });
}

document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const navLinks = document.getElementById("nav-links");
  const overlay = document.getElementById("overlay");

  burger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    overlay.classList.toggle("active");
  });

  overlay.addEventListener("click", () => {
    navLinks.classList.remove("active");
    overlay.classList.remove("active");
  });
});

function getCatFact() {
  fetch("https://catfact.ninja/fact")
    .then(response => response.json())
    .then(data => {
      document.getElementById("catFact").innerText = data.fact;
      const catImage = document.getElementById("catImage");
      fetch("https://api.thecatapi.com/v1/images/search")
        .then(res => res.json())
        .then(imgData => {
          catImage.src = imgData[0].url;
          catImage.style.display = "block";
        });
    })
    .catch(error => {
      document.getElementById("catFact").innerText = "Failed to load fact.";
    });
}
