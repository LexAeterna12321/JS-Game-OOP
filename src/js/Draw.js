class Draw {
  constructor() {
    this.possibleColors = ["red", "green", "blue"];
    this.colors = document.querySelectorAll(".color");
    const result = []; //ukrycie wyniku losowania anti-hacking

    this.drawColors = function() {
      this.colors.forEach(color => {
        let drewResult = this.possibleColors[
          Math.floor(Math.random() * this.possibleColors.length)
        ];
        color.style.backgroundColor = drewResult;
        result.push(drewResult);
      });
      this.resetResult(result);
      return result;
      //zwraca tablicę z wynikiem - przekazać do klasy result celem sprawdzenia wyniku
    };
    this.resetResult = function(result) {
      if (result.length > 3) {
        result.splice(0, 3);
      }
    };
  }
}

export default Draw;
