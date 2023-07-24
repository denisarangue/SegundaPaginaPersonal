document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.querySelector(".toggle-btn");
    const hiddenParagraphs = document.querySelector(".hidden-paragraphs");
  
    toggleBtn.addEventListener("click", function() {
      hiddenParagraphs.classList.toggle("visible");
    });
  });