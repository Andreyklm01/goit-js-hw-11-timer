import moment from './moment';

class Countertimer {
  constructor({ selector, targetDate }) {
    this.targetDate = targetDate;
    this.refs = {
      _days: document.querySelector(`${selector} [data-value="days"]`),
      _hours: document.querySelector(`${selector} [data-value="hours"]`),
      _mins: document.querySelector(`${selector} [data-value="mins"]`),
      _secs: document.querySelector(`${selector} [data-value="secs"]`),
    };
    this.timerId = null;
  }
  start() {
    this.timerId = setInterval(() => {
      const delta = this.targetDate - Date.now();
      const time = moment(delta);
      this.updateInterface(time);
    }, 1000);
  }
  updateInterface({ days, hours, mins, secs }) {
    const { _days, _hours, _mins, _secs } = this.refs;
    _days.textContent = days;
    _hours.textContent = hours;
    _mins.textContent = mins;
    _secs.textContent = secs;
  }
}

function initTimer(selector, targetDate) {
  const newTimer = new Countertimer({ selector, targetDate });
  newTimer.start();
}

initTimer('#timer-1', new Date('Jul 17, 2021'));
