document.addEventListener("DOMContentLoaded", () => {
    const highResImage = new Image();
    highResImage.src = "images/bg-highres.webp";
    highResImage.onload = () => {
        document.body.classList.add("highres");
    };
});
