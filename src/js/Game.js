// import Wallet from "./Wallet";

class Game {
  constructor(startMoney) {
    this.wallet = new Wallet(startMoney);
    this.stats = new Statistics();
  }
  startGame() {
    const startBtn = document.querySelector("button#start");
    startBtn.addEventListener("click", () => {
      this.wallet.checkCanPlay();
      this.render();
      // testowanie dodawania do statystyk - usunąć potem
      const rand = Math.round(Math.random());
      if (rand == 1) {
        this.stats.addGameToStats(true);
      } else if (rand == 0) {
        this.stats.addGameToStats(false);
      }
      // koniec testu
      this.stats.ShowGameResults();
    });
  }
  render() {
    const walletSpan = document.querySelector("span.wallet");
    walletSpan.textContent = this.wallet.getValue();
  }
}
const game = new Game(200);
game.startGame();
game.render();

// export default Game;
