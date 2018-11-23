import Wallet from "./Wallet";
import Draw from "./Draw";
import Result from "./Result";
import Statistics from "./Statistics";

class Game {
  constructor(startMoney) {
    this.wallet = new Wallet(startMoney);
    this.stats = new Statistics();
    this.draw = new Draw();
  }
  startGame() {
    let { bet, wallet, stats, draw } = this;
    const startBtn = document.querySelector("button#start");
    startBtn.addEventListener("click", () => {
      bet = document.querySelector("#bid").value;
      const roundResult = document.querySelector(".roundResult");
      wallet.checkCanPlay(bet);
      const drawRes = Result.getResult(draw.drawColors());
      wallet.changeWalletValue(bet, bet, drawRes);
      this.render();
      stats.addGameToStats(drawRes);
      stats.ShowGameResults();
      roundResult.textContent = Result.showResult(drawRes, roundResult);
    });
  }

  render() {
    const walletSpan = document.querySelector("span.wallet");
    walletSpan.textContent = this.wallet.getValue();
  }
}

export default Game;
