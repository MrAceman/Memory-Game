import $ from 'jquery';

class Timer{
  constructor(){
    this.timerVal = 0;
  }

  // var __nativeSI__ = window.setInterval;
  //
  // window.setInterval = function (vCallback, nDelay /*, argumentToPass1, argumentToPass2, etc. */) {
  //   var oThis = this, aArgs = Array.prototype.slice.call(arguments, 2);
  //   return __nativeSI__(vCallback instanceof Function ? function () {
  //     vCallback.apply(oThis, aArgs);
  //   } : vCallback, nDelay);
  // };


// Per MDN... use of setInterval with 'this' doesn't work.  The above code is
// their suggested solution, but I can't get it working.

// https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval

  // updateTimer() {
  //   this.timerVal ++;
  //   $('.timer').html(`Timer:${this.timerVal}`);
  // }
  //
  //
  // startTimer() {
  //   // let newTimer = this.updateTimer();
  //   setInterval(this.updateTimer, 1000);
  // };
}

export {Timer};
