import './style.css'

document.getElementById("start-button").addEventListener("click", () => {
  const resultElement = document.getElementById("result");

  if (!window.EyeDropper) {
    resultElement.textContent =
      "Seu navegador não suporta a API";
    return;
  }

  const eyeDropper = new EyeDropper();

  eyeDropper
    .open()
    .then((result) => {
      resultElement.textContent = result.sRGBHex;
      resultElement.style.backgroundColor = result.sRGBHex;
    })
    .catch((e) => {
      resultElement.textContent = e;
    });
});

document.getElementById("copy-button").addEventListener("click", () => {
  const resultElement = document.getElementById("result");
  const color = resultElement.textContent;

  navigator.clipboard.writeText(color).then(() => {
    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.textContent = "Sua cor foi copiada!";
    document.body.appendChild(popup);

    setTimeout(() => {
      document.body.removeChild(popup);
    }, 2000);
  });
});