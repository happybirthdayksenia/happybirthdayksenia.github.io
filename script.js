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
