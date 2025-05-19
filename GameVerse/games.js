firebase.database().ref("games").on("value", (snapshot) => {
  const games = snapshot.val();
  const allGames = document.querySelector(".all-games");
  const topGames = document.querySelector(".top-games");

  allGames.innerHTML = "";
  topGames.innerHTML = "";

  for (let id in games) {
    const game = games[id];
    const card = document.createElement("div");
    card.className = "game-card";
    card.innerHTML = `
      <h3>${game.title}</h3>
      <p>${game.description}</p>
      <a href="${game.url}" class="cta" target="_blank">Грати</a>
    `;
    allGames.appendChild(card);

    if (game.likes && game.likes >= 1) {
      const topCard = card.cloneNode(true);
      topGames.appendChild(topCard);
    }
  }
});
