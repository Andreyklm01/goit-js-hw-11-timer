import moment from './moment';

class Countertimer {
  constructor({ selector, targetDate }) {
    this.targetDate = targetDate;
    this.intervalId = null;
    this.refs = {
      daysRef: document.querySelector(`${selector} [data-value="days"]`),
      hoursRef: document.querySelector(`${selector} [data-value="hours"]`),
      minsRef: document.querySelector(`${selector} [data-value="mins"]`),
      secsRef: document.querySelector(`${selector} [data-value="secs"]`),
    };
  }
  start() {
    this.intervalId = setInterval(() => {
      const currentDate = Date.now();
      const delta = this.targetDate - currentDate;
      const time = moment(delta);
      this.updateValues(time);
    }, 1000);
  }
  updateValues({ days, hours, mins, secs }) {
    const { daysRef, hoursRef, minsRef, secsRef } = this.refs;
    daysRef.textContent = days;
    hoursRef.textContent = hours;
    minsRef.textContent = mins;
    secsRef.textContent = secs;
  }
}

function initTimer(selector, targetDate) {
  const timer = new Countertimer({ selector, targetDate });
  timer.start();
}

initTimer('#timer-1', new Date('Jul 17, 2021'));
