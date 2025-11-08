document.getElementById("pesticide-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const crop = document.getElementById("crop").value;
  const pest = document.getElementById("pest").value;
  const location = document.getElementById("location").value;
  const resultSection = document.getElementById("result");
  const suggestionText = document.getElementById("suggestion-text");

  // Simple local suggestions (you can later fetch from an API)
  const pesticideData = {
    wheat: {
      aphids: "Imidacloprid 17.8% SL",
      "stem-borer": "Chlorpyrifos 20% EC"
    },
    rice: {
      "stem-borer": "Cartap hydrochloride 50% SP",
      whitefly: "Thiamethoxam 25% WG"
    },
    cotton: {
      bollworm: "Spinosad 45% SC",
      whitefly: "Acetamiprid 20% SP"
    },
    tomato: {
      aphids: "Dimethoate 30% EC",
      whitefly: "Buprofezin 25% SC"
    }
  };

  let suggestion = "No data available for this combination.";
  if (pesticideData[crop] && pesticideData[crop][pest]) {
    suggestion = pesticideData[crop][pest];
  }

  suggestionText.textContent = `For ${crop.toUpperCase()} affected by ${pest}, we recommend using: ${suggestion}. (Location: ${location})`;
  resultSection.classList.remove("hidden");
});
