let images = [
    "https://picsum.photos/400/250?1",
    "https://picsum.photos/400/250?2",
    "https://picsum.photos/400/250?3"
];
let index = 0;
let img = document.getElementById("carouselImage");
function nextImage() {
    index = (index + 1) % images.length;
    img.src = images[index];
}
function prevImage() {
    index = (index - 1 + images.length) % images.length;
    img.src = images[index];
}
function getJoke() {
    fetch("https://official-joke-api.appspot.com/random_joke")
        .then(response => response.json())
        .then(data => {
            document.getElementById("joke").innerText =
                data.setup + " - " + data.punchline;
        })
        .catch(error => {
            document.getElementById("joke").innerText = "Error loading joke";
        });
}
