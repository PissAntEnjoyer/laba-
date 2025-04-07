let startBtn = document.getElementById('startBtn');
let startCzasEl = document.getElementById('startCzas');
let aktywujDoplEl = document.getElementById('aktywujDop');
let stopCzasEl = document.getElementById('stopCzas');
let odliczanieEl = document.getElementById('odliczanie');

let interval;

startBtn.addEventListener('click', () => {
  if (interval) clearInterval(interval); 

  let startCzas = moment();
  let activeEnd = moment(startCzas).add(45, 'minutes');
  let stopCzas = moment(startCzas).add(45, 'minutes');

  startCzasEl.textContent = 'Start: ' + startCzas.format('HH:mm:ss');
  aktywujDoplEl.textContent = 'Aktywny do: ' + activeEnd.format('HH:mm:ss');
  stopCzasEl.textContent = 'Koniec o: ' + stopCzas.format('HH:mm:ss');

  interval = setInterval(() => {
    let now = moment();
    let duration = moment.duration(endTime.diff(now));

    if (duration.asSeconds() <= 0) {
        odliczanieEl.textContent = "Czas minął!";
      clearInterval(interval);
    } else {
        odliczanieEl.textContent = "Pozostało: " +
        String(duration.minutes()).padStart(2, '0') + ':' +
        String(duration.seconds()).padStart(2, '0');
    }
  }, 1000);
});
