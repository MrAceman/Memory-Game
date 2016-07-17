class Score{

  constructor(){
    this.currentScore = 0;
  }

  checkWin(){
    if (this.currentScore >= 10){
      alert("YOU WIN!");
    }
    else{};
  };

}

export {Score};
