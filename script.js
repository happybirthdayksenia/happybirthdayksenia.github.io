const languages = {
  en: {
    heading: "Happy Birthday, Ksenia!",
    countdown: "Time left: ",
    celebrations: "🎉 Celebrations! 🎉",
    note: "This page was built by Duck, Moomin, and Krtek, but Simon did not contribute anything since he has forgotten Ksenia's birthday. That's funny because Simon is me. 😄",
  },
  de: {
    heading: "Herzlichen Glückwunsch zum Geburtstag, Ksenia!",
    countdown: "Verbleibende Zeit: ",
    celebrations: "🎉 Feiern! 🎉",
    note: "Diese Seite wurde von Duck, Moomin und Krtek erstellt, aber Simon hat nichts beigetragen, da er Ksenias Geburtstag vergessen hat. Das ist lustig, weil Simon ich bin. 😄",
  },
  ru: {
    heading: "С днем рождения, Ксения!",
    countdown: "Осталось времени: ",
    celebrations: "🎉 Праздничные мероприятия! 🎉",
    note: "Эта страница была создана Уткой, Муми-троллем и Кртеком, но Саймон ничего не внес, потому что он забыл про день рождения Ксении. Это забавно, потому что Саймон - это я. 😄",
  },
};

function updateLanguage(language) {
  document.getElementById('heading').innerText = languages[language].heading;
  document.getElementById('countdownLabel').innerText = languages[language].countdown;
  document.getElementById('celebrationsMessage').innerText = languages[language].celebrations;
  document.getElementById('note').innerText = languages[language].note;
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
      hours + 'h ' + minutes + 'm ' + seconds + 's';
    document.getElementById('countdown').style.display = 'block';
    document.getElementById('celebrationsMessage').style.display = 'none';
  } else {
    document.getElementById('countdown').style.display = 'none';
    document.getElementById('celebrationsMessage').style.display = 'block';
  }
}

setInterval(updateCountdown, 1000);
