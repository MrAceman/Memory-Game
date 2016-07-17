import $ from 'jquery';

class Score{

  constructor(){
    this.currentScore = 0;
    this.currentGuess = 0;
  }

  updateGuess(){
    this.currentGuess ++;
    $('.guess').html(`Guesses:${this.currentGuess}`);
  }

  checkWin(){
    $('.score').html(`Score:${this.currentScore}`);
    if (this.currentScore >= 10){
      alert("YOU WIN!");
      window.clearInterval(interval);
    }
    else{};
  };
}

export {Score};
