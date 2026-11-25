// Keep all demonstration videos muted
document.querySelectorAll("video").forEach((video) => {
  video.muted = true;
  video.volume = 0;
  video.addEventListener("volumechange", () => {
    if (!video.muted || video.volume > 0) {
      video.muted = true;
      video.volume = 0;
    }
  });
});

// Switch code tabs inside Lab 3
document.querySelectorAll(".tab-bar").forEach((bar) => {
  const buttons = bar.querySelectorAll(".tab-btn");
  const wrapper = bar.parentElement;
  const panels = wrapper.querySelectorAll(".code-panel");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      panels.forEach((p) => p.classList.remove("active"));

      btn.classList.add("active");
      const target = document.getElementById(btn.dataset.target);
      if (target) target.classList.add("active");
    });
  });
});

// Copy Arduino code snippets
document.querySelectorAll(".copy-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const code = btn.closest(".code-box-wrapper").querySelector(".code-panel.active code, .code-box-wrapper > pre code").innerText;
    navigator.clipboard.writeText(code).then(() => {
      const original = btn.innerText;
      btn.innerText = "Copied!";
      setTimeout(() => (btn.innerText = original), 1500);
    });
  });
});