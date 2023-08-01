const languages = {
  en: {
    heading: "Happy Birthday, Ksenia!",
    countdown: "Time left: ",
    celebrations: "🎉 Celebrations! 🎉",
  },
  de: {
    heading: "Herzlichen Glückwunsch zum Geburtstag, Ksenia!",
    countdown: "Verbleibende Zeit: ",
    celebrations: "🎉 Feiern! 🎉",
  },
  ru: {
    heading: "С днем рождения, Ксения!",
    countdown: "Осталось времени: ",
    celebrations: "🎉 Праздничные мероприятия! 🎉",
  },
};

function updateLanguage(language) {
  document.getElementById('heading').innerText = languages[language].heading;
  document.getElementById('countdown').innerText = languages[language].countdown;
  document.getElementById('celebrationsMessage').innerText = languages[language].celebrations;
}

const birthdayDate = new Date('2023-08-02T00:00:00+07:00');

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = birthdayDate - now;

  if (timeLeft > 0) {
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML =
      languages[getCurrentLanguage()].countdown + hours + 'h ' + minutes + 'm ' + seconds + 's';

    document.getElementById('countdown').style.display = 'block';
    document.getElementById('celebrationsMessage').style.display = 'none';
  } else {
    document.getElementById('countdown').style.display = 'none';
    document.getElementById('celebrationsMessage').style.display = 'block';
  }
}

setInterval(updateCountdown, 1000);
