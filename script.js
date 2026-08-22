document.getElementById('year').textContent = new Date().getFullYear();

const activityButton = document.getElementById('activity-button');
const funOutput = document.getElementById('fun-output');
const activities = [
  'gogi is looking for snacks.',
  'gogi has a plan. probably.',
  'gogi is celebrating nothing.',
  'gogi is avoiding responsibility.',
  'gogi is doing his best.',
  'gogi is waiting for a sign.',
  'gogi is pretending to understand.',
  'gogi is thinking about lunch.',
  'gogi is running five minutes late.',
  'gogi is making a questionable decision.',
  'gogi is staring at the ceiling.',
  'gogi is emotionally prepared. almost.',
  'gogi is dancing when nobody asked.',
  'gogi is taking a very important nap.',
  'gogi is trying to remember why he walked in here.',
  'gogi is opening one more tab.',
  'gogi is celebrating a tiny win.',
  'gogi is holding it together with snacks.',
  'gogi is waiting for the weekend.',
  'gogi is absolutely not overthinking it.',
  'gogi is looking busy.',
  'gogi is hoping this counts as a strategy.',
  'gogi is following his heart. to the fridge.',
  'gogi is making friends with the furniture.',
  'gogi is late but arriving with confidence.',
  'gogi is trying something new. brave.',
  'gogi is one tiny inconvenience from a nap.',
  'gogi is proud of himself for no clear reason.',
  'gogi is waiting for someone else to make the plan.',
  'gogi is simply vibing.'
];

activityButton.addEventListener('click', () => {
  const current = funOutput.textContent;
  const choices = activities.filter((activity) => activity !== current);
  funOutput.textContent = choices[Math.floor(Math.random() * choices.length)];
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

const cursorGogi = document.getElementById('cursor-gogi');
const canFollowCursor = window.matchMedia('(pointer: fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (canFollowCursor) {
  let targetX = -100;
  let targetY = -100;
  let currentX = targetX;
  let currentY = targetY;
  window.addEventListener('pointermove', (event) => {
    targetX = event.clientX + 18;
    targetY = event.clientY + 18;
    cursorGogi.classList.add('is-visible');
  });
  const follow = () => {
    currentX += (targetX - currentX) * 0.14;
    currentY += (targetY - currentY) * 0.14;
    cursorGogi.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
    window.requestAnimationFrame(follow);
  };
  follow();
}
