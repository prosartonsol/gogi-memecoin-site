document.getElementById('year').textContent = new Date().getFullYear();

const heroGogi = document.querySelector('.hero-art img');
const heroOptions = [
  { src: 'assets/gogi-running.gif', alt: 'Gogi running into the future' },
  { src: 'assets/gogi-celebrating.gif', alt: 'Gogi celebrating' },
  { src: 'assets/gogi-hyped.gif', alt: 'Excited Gogi' },
  { src: 'assets/gogi-eating.gif', alt: 'Gogi enjoying a snack' },
  { src: 'assets/gogi-crying.gif', alt: 'Gogi having a big feeling' },
  { src: 'assets/gogi-tired.gif', alt: 'Tired Gogi' }
];
let previousHero = '';
try { previousHero = sessionStorage.getItem('gogi-hero-gif') || ''; } catch (error) { /* storage may be unavailable */ }
const availableHeroes = heroOptions.filter((hero) => hero.src !== previousHero);
const selectedHero = availableHeroes[Math.floor(Math.random() * availableHeroes.length)];
heroGogi.src = selectedHero.src;
heroGogi.alt = selectedHero.alt;
try { sessionStorage.setItem('gogi-hero-gif', selectedHero.src); } catch (error) { /* storage may be unavailable */ }

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
  let previousX = targetX;
  window.addEventListener('pointermove', (event) => {
    targetX = event.clientX + 18;
    targetY = event.clientY + 18;
    cursorGogi.classList.add('is-visible');
  });
  window.addEventListener('pointerleave', () => cursorGogi.classList.remove('is-visible'));
  const follow = () => {
    currentX += (targetX - currentX) * 0.14;
    currentY += (targetY - currentY) * 0.14;
    const angle = Math.max(-8, Math.min(8, (currentX - previousX) * 0.7));
    cursorGogi.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) rotate(${angle}deg)`;
    previousX = currentX;
    window.requestAnimationFrame(follow);
  };
  follow();
}
