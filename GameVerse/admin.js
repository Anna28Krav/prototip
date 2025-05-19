const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("description");
const urlInput = document.getElementById("url");
const categoryInput = document.getElementById("category");

document.getElementById("addGame").addEventListener("click", () => {
  const game = {
    title: titleInput.value,
    description: descriptionInput.value,
    url: urlInput.value,
    category: categoryInput.value,
    likes: 0
  };

  firebase.database().ref("games").push(game);
  alert("Гру додано!");
});
