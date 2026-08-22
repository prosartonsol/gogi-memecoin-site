document.getElementById('year').textContent = new Date().getFullYear();

const activityButton = document.getElementById('activity-button');
const feedButton = document.getElementById('feed-button');
const funOutput = document.getElementById('fun-output');
const heroGogi = document.querySelector('.hero-art img');
const activities = [
  'gogi is looking for snacks.',
  'gogi has a plan. probably.',
  'gogi is celebrating nothing.',
  'gogi is avoiding responsibility.',
  'gogi is doing his best.'
];

activityButton.addEventListener('click', () => {
  const current = funOutput.textContent;
  const choices = activities.filter((activity) => activity !== current);
  funOutput.textContent = choices[Math.floor(Math.random() * choices.length)];
});

feedButton.addEventListener('click', () => {
  heroGogi.classList.remove('feed-bounce');
  void heroGogi.offsetWidth;
  heroGogi.classList.add('feed-bounce');
  funOutput.textContent = 'thank you. more please.';
});

let typed = '';
document.addEventListener('keydown', (event) => {
  if (event.key.length !== 1) return;
  typed = (typed + event.key.toLowerCase()).slice(-4);
  if (typed !== 'gogi') return;
  document.body.classList.add('gogi-party');
  funOutput.textContent = 'gogi detected. tiny celebration activated.';
  window.setTimeout(() => document.body.classList.remove('gogi-party'), 1500);
});
