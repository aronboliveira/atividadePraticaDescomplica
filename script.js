document.querySelectorAll("img").forEach((img) => {
  const newSpan = Object.assign(document.createElement("span"), {
    id: `caption-${img.src.slice(img.src.lastIndexOf("/") + 1)}`.replace(
      ".jpeg",
      ""
    ),
    innerText: `*imagem gerada pelo DallE©`,
  });
  newSpan.classList.add(`caption-img`);
  img.insertAdjacentElement("afterend", newSpan);
});

document.querySelectorAll("script").forEach((script) => {
  /function/gi.test(script.textContent) && script.remove();
});
