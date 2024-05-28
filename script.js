document.querySelectorAll("script").forEach((script) => {
  /function/gi.test(script.textContent) && script.remove();
});
