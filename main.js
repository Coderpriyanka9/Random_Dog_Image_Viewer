document.getElementById("btn").addEventListener("click", randomDogImageViewer);
function randomDogImageViewer() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
        document.getElementById("dogImage").src = data.message;
    })
    .catch(error => console.error('Error:', error));

}
randomDogImageViewer();

