const questions = [
  "Какое у тебя среднее имя?", "Сколько тебе лет?", "Когда у тебя день рождения?",
  "Какой у тебя знак зодиака?", "Какой у тебя любимый цвет?", "Какое у тебя счастливое / удачное число?",
  "У тебя есть домашние животные?", "Откуда ты родом?", "Какого ты роста?",
  "Какой у тебя размер обуви?", "Сколько у тебя пар обуви?", "О чём был твой последний сон?",
  "Какие у тебя таланты?", "Ты экстрасенс хотя бы немного?", "Какая твоя любимая песня?",
  "Какой твой любимый фильм?", "Каким, по-твоему, должен быть идеальный партнёр?",
  "Ты хочешь детей?", "Хочешь ли ты свадьбу в церкви?", "Ты религиозен?",
  "Ты когда-нибудь лежал в больнице?", "У тебя были проблемы с законом?",
  "Ты когда-нибудь встречал знаменитостей?", "Ванна или душ — что предпочитаешь?",
  "Какого цвета носки ты чаще всего носишь?", "Ты когда-нибудь был по-настоящему популярным?",
  "Хотел бы ты стать большой знаменитостью?", "Какой жанр музыки тебе нравится больше всего?",
  "Ты когда-нибудь купался голышом?", "Сколько подушек у тебя обычно на кровати?",
  "В какой позе ты чаще всего спишь?", "Насколько большой у тебя дом / квартира?",
  "Что ты обычно ешь на завтрак?", "Ты когда-нибудь стрелял из пистолета?",
  "Ты когда-нибудь стрелял из лука?", "Какое твоё любимое слово?",
  "Какое твоё любимое ругательство?", "Какой твой рекорд без сна?",
  "У тебя есть заметные шрамы?", "У тебя когда-нибудь был тайный поклонник?",
  "Ты хорошо умеешь обманывать?", "Ты хорошо разбираешься в людях / персонажах?",
  "Можешь ли ты говорить с акцентом, не похожим на твой?", "У тебя сильный акцент?",
  "Какой акцент тебе нравится больше всего?", "Какой у тебя тип личности (MBTI)?",
  "Какая самая дорогая вещь в твоём гардеробе?", "Умеешь ли ты сворачивать язык в трубочку?",
  "Твой пупок — внутрь или наружу?", "Ты левша или правша?", "Боишься ли ты пауков?",
  "Какая твоя любимая еда?", "Какая твоя любимая иностранная кухня?",
  "Ты чистюля или скорее неряха?", "Какая фраза у тебя чаще всего проскакивает?",
  "Какое слово ты используешь чаще всего?", "Сколько времени тебе нужно, чтобы собраться?",
  "У тебя большое эго?", "Ты кусаешь леденцы или сосёшь?",
  "Ты разговариваешь сам с собой?", "Ты поёшь, когда один?", "Ты хорошо поёшь?",
  "Какой твой самый большой страх?", "Ты сплетник?",
  "Какой самый сильный драматический фильм ты смотрел?",
  "Тебе нравятся длинные или короткие волосы (у партнёра)?",
  "Сможешь ли ты назвать все 50 штатов США?", "Какой был твой любимый школьный предмет?",
  "Ты скорее экстраверт или интроверт?", "Пробовал ли ты нырять с аквалангом?",
  "Что заставляет тебя нервничать / волноваться?", "Боишься ли ты темноты?",
  "Ты часто поправляешь ошибки в речи других?", "Ты боишься щекотки?",
  "Ты когда-нибудь специально пускал слух?", "Был ли ты когда-нибудь для кого-то авторитетом?",
  "Пил ли ты алкоголь до совершеннолетия?", "Пробовал ли ты когда-нибудь наркотики?",
  "Кто был твоим первым крашем / влюблённостью?", "Сколько у тебя пирсингов?",
  "Ты картавишь?", "Как быстро ты набираешь текст на телефоне?",
  "Как быстро ты бегаешь (примерно)?", "Какого цвета твои волосы?",
  "Какого цвета твои глаза?", "На что у тебя аллергия?",
  "Ты ведёшь дневник или журналы?", "Чем занимаются твои родители?",
  "Тебе нравится твой текущий возраст?", "Что тебя больше всего бесит / злит?",
  "Тебе нравится твоё имя?", "Думал ли ты об именах для своих будущих детей?",
  "Ты больше хочешь сына или дочь?", "Какие твои главные сильные стороны?",
  "В чём твои главные слабости / недостатки?", "Хотел бы ты поменять своё имя?",
  "Были ли среди твоих предков короли или знать?", "Какого цвета у тебя покрывало / одеяло?",
  "Какого цвета стены в твоей комнате?", "Какой твой любимый напиток?"
];

let myNick = localStorage.getItem('myNick') || '';
let allAnswers = JSON.parse(localStorage.getItem('allAnswers') || '{}');

const setup = document.getElementById('setup');
const main = document.getElementById('main');
const myNameDisplay = document.getElementById('my-name-display');
const questionsList = document.getElementById('questions-list');
const answersContainer = document.getElementById('answers-container');
const clearMyBtn = document.getElementById('clear-my');

// Запуск
if (myNick) {
  startApp();
} else {
  document.getElementById('start').onclick = () => {
    myNick = document.getElementById('my-nick').value.trim();
    if (!myNick) return alert('Введите никнейм');
    localStorage.setItem('myNick', myNick);
    startApp();
  };
}

function startApp() {
  setup.classList.add('hidden');
  main.classList.remove('hidden');
  myNameDisplay.textContent = myNick;

  renderQuestions();
  renderAllAnswers();

  // Автообновление при изменении в другом окне (если несколько вкладок)
  window.addEventListener('storage', (e) => {
    if (e.key === 'allAnswers') {
      allAnswers = JSON.parse(e.newValue || '{}');
      renderAllAnswers();
    }
  });
}

function renderQuestions() {
  questionsList.innerHTML = '';
  questions.forEach((q, i) => {
    const div = document.createElement('div');
    div.className = 'question-item';
    div.innerHTML = `
      <p><strong>${q}</strong></p>
      <textarea placeholder="Твой ответ..." data-index="${i}"></textarea>
    `;
    questionsList.appendChild(div);

    const ta = div.querySelector('textarea');
    ta.value = getMyAnswer(i) || '';
    ta.oninput = () => {
      saveMyAnswer(i, ta.value.trim());
      renderAllAnswers();
    };
  });
}

function getMyAnswer(i) {
  return (allAnswers[myNick] || {})[i] || '';
}

function saveMyAnswer(i, text) {
  if (!allAnswers[myNick]) allAnswers[myNick] = {};
  if (text) {
    allAnswers[myNick][i] = text;
  } else {
    delete allAnswers[myNick][i];
  }
  if (Object.keys(allAnswers[myNick]).length === 0) {
    delete allAnswers[myNick];
  }
  localStorage.setItem('allAnswers', JSON.stringify(allAnswers));
}

function renderAllAnswers() {
  answersContainer.innerHTML = '';

  Object.entries(allAnswers).forEach(([nick, answers]) => {
    if (Object.keys(answers).length === 0) return;

    const block = document.createElement('div');
    block.className = 'person-block';
    block.innerHTML = `<div class="person-name">${nick}</div>`;

    Object.entries(answers).forEach(([idx, text]) => {
      const row = document.createElement('div');
      row.className = 'answer-row';
      row.innerHTML = `<div class="q">${questions[idx]}</div><div>${text}</div>`;
      block.appendChild(row);
    });

    answersContainer.appendChild(block);
  });

  if (answersContainer.children.length === 0) {
    answersContainer.innerHTML = '<p>Пока никто ничего не ответил...</p>';
  }
}

clearMyBtn.onclick = () => {
  if (!confirm('Очистить все твои ответы?')) return;
  delete allAnswers[myNick];
  localStorage.setItem('allAnswers', JSON.stringify(allAnswers));
  renderAllAnswers();
  location.reload(); // чтобы обновить поля ввода
};