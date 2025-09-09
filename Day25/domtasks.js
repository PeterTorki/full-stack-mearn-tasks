function* generator() {
  const tips = [
    // create 10 tips for web page
    "Stay hydrated throughout the day.",
    "Take short breaks while working.",
    "Get at least 7-8 hours of sleep.",
    "Write down your goals daily.",
    "Exercise regularly to boost energy.",
    "Practice gratitude every morning.",
    "Keep learning something new.",
    "Maintain good posture at your desk.",
    "Eat more whole foods and less processed food.",
    "Prioritize tasks with a to-do list.",
  ];
  for (const tip of tips) {
    yield tip;
  }
}

const gen = generator();

const first = document.querySelector("#first");
const second = document.querySelector("#second");
const text = document.querySelector("#text");

first.addEventListener("click", () => {
  const genNext = gen.next();
  if (genNext.done) {
    return;
  }
  text.textContent = genNext.value;
});

second.addEventListener("click", () => {
  let genNext = gen.next();
  setInterval(() => {
    if (genNext.done) {
      return;
    }
    text.textContent = genNext.value;
    genNext = gen.next();
  }, 3000);
  text.textContent = genNext.value;
});
// Task 5
alert(
  (function sum(x, y) {
    return x + y;
  })(5, 6)
);
