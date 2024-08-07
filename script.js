const languages = {
  mo: {
    heading: "Happy Moomin, Ksenia!",
    countdown: "Time left: ",
    celebrations: "🎉 Happy Moomin! 🎉",
  },
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

let currentLanguage = 'mo'; // Set the default language to English

function updateLanguage(language) {
  currentLanguage = language; // Update the currentLanguage variable
  document.getElementById('heading').innerText = languages[language].heading;
  document.getElementById('countdown').innerText = languages[language].countdown;
  document.getElementById('celebrationsMessage').innerText = languages[language].celebrations;
}

const birthdayDate = new Date('2024-08-02T00:00:00+07:00');

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = birthdayDate - now;

  if (timeLeft > 0) {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML =
      languages[currentLanguage].countdown + days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's';

    document.getElementById('countdown').style.display = 'block';
    document.getElementById('celebrationsMessage').style.display = 'none';
  } else {
    document.getElementById('countdown').style.display = 'none';
    document.getElementById('celebrationsMessage').style.display = 'block';
  }
}

setInterval(updateCountdown, 1000);
