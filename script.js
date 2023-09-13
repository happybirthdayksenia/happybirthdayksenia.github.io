const languages = {
  en: {
    heading: "Ksenia's and Simon's vacation in Moscow!",
    countdown: "Ksenia and Simon will be happy in: ",
    celebrations: "❤️ Simon it in Moscow! ❤️",
  },
  de: {
    heading: "Ksenias und Simons Urlaub in Moskau!",
    countdown: "Ksenia und Simon werden glücklich sein in: ",
    celebrations: "❤️ Simon ist in Moskau! ❤️",
  },
  ru: {
    heading: "Отдых Ксении и Саймона в Москве!",
    countdown: "Ксения и Саймон будут счастливы через: ",
    celebrations: "❤️ Саймон это в Москве! ❤️",
  },
};

let currentLanguage = 'en'; // Set the default language to English

function updateLanguage(language) {
  currentLanguage = language; // Update the currentLanguage variable
  document.getElementById('heading').innerText = languages[language].heading;
  document.getElementById('countdown').innerText = languages[language].countdown;
  document.getElementById('celebrationsMessage').innerText = languages[language].celebrations;
}

const birthdayDate = new Date('2023-12-30T19:35:00+03:00');

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
