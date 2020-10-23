const Stopwatch = function () {
  let offset,
    now,
    time = 0,
    interval;
  this.isOn = false;
  const update = () => {
    time += delta(now);
  };
  const delta = () => {
    const newNow = Date.now();
    offset = Math.round((newNow - now) / 1000);
    now = newNow;
    return offset;
  };
  this.start = () => {
    if (!this.isOn) {
      this.isOn = !this.isOn;
      now = Date.now();
      interval = setInterval(update, 1000);
    }
  };
  this.stop = () => {
    if (this.isOn) {
      this.isOn = !this.isOn;
      clearInterval(interval);
      console.log(`${time} s or ${time / 60} minutes or ${time / 3600} hours`);
    }
  };
  this.reset = () => {
    if (this.isOn) {
      this.isOn = !this.isOn;
    }
  };
};

module.exports = Stopwatch;
