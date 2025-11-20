// Fade in page after background image loads
const bgImage = new Image();
bgImage.src = "images/bg-highres.webp";

bgImage.onload = () => {
    document.body.classList.add("loaded");
};

// Fallback: show content after 2 seconds even if image hasn't loaded
setTimeout(() => {
    document.body.classList.add("loaded");
}, 2000);
