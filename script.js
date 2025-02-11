function changeBackground() {
    const background = document.getElementById('background');
    if (background.style.backgroundImage.includes('crying_girl.jpeg')){
        background.style.backgroundImage = "url('laughing.jpeg')"
    } else {
        background.style.backgroundImage = "url('crying_girl.jpeg')";
    }
}