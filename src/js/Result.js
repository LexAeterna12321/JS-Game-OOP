class Result {
  static getResult(result) {
    if (result[0] === result[1] && result[1] === result[2]) {
      return true;
    } else if (
      result[0] !== result[1] &&
      result[0] !== result[2] &&
      result[1] !== result[2]
    ) {
      return true;
    } else return false;
  }
  static showResult(result, div) {
    if (result) {
      div.style.color = "green";
      return `Wygrałeś!`;
    } else {
      div.style.color = "red";
      return `Przegrałeś`;
    }
  }
}

export default Result;
