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
    this.checkCanPlay = function(bet) {
      if (typeof parseFloat(bet) !== "number" || bet <= 0) {
        alert("Wpisz prawidłową liczbę");
        throw Error("Wpisz prawidłową liczbę");
      }

      if (_money <= 0) {
        alert("Koniec gry. Brak środków.");
        throw Error("Koniec gry. Brak środków.");
      } else if (bet <= _money) {
        return _money;
      } else {
        alert("za mało kasy");
        throw Error("za mało kasy");
      }
    };
    // zmiana kwoty środków
    this.changeWalletValue = function(bet, value, result) {
      _money -= bet;
      if (!result) return;
      return (_money += value * 3);
    };
  }
}

export default Wallet;
