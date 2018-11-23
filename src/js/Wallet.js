class Wallet {
  constructor(money) {
    // zmienna prywatna przechowuje ilość pieniędzy
    let _money = money;
    this.getValue = function() {
      return _money;
    };
    this.setMoney = function(value) {
      _money = value;
    };
    // sprawdzanie czy można grać
    this.checkCanPlay = function() {
      this.bet = document.querySelector("#bid").value;

      if (typeof parseFloat(this.bet) !== "number" || this.bet <= 0)
        return console.error("Wpisz prawidłową liczbę");

      if (_money <= 0) {
        return alert("Koniec gry. Brak środków.");
      } else if (this.bet <= _money) {
        this.changeWalletValue(this.bet);
        return _money;
      } else throw Error("za mało kasy");
    };
    // zmiana kwoty środków
    this.changeWalletValue = function(value, result) {
      _money -= this.bet;
      if (result) {
        _money += parseFloat(value * 3); // może trzeba przenieść do innej sekcji np. Result, żeby tutaj przekazywać sam wynik
      }
    };
  }
}

// export default Wallet;
