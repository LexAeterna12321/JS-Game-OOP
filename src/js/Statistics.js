class Statistics {
  constructor(games = 0, wins = 0, losses = 0) {
    this.games = games;
    this.wins = wins;
    this.losses = losses;
  }
  addGameToStats(result) {
    result ? this.wins++ : this.losses++;
    this.games++;
  }
  ShowGameResults() {
    const { games, wins, losses } = this;
    const gamesSpan = document.querySelector("span.number");
    const winsSpan = document.querySelector("span.win");
    const lossesSpan = document.querySelector("span.loss");
    gamesSpan.textContent = games;
    winsSpan.textContent = wins;
    lossesSpan.textContent = losses;
  }
}
