window.addEventListener("load", start);

let scene1 = {
  title: "A trip to the ocean",
  text: "You are on a pier",
  choices: [
    { btnText: "Inhale the ocean air", nextScene: "scene2A" },
    { btnText: "Jump headfirst into the water", nextScene: "scene2B" },
    { btnText: "Look for the nearest ice cream shop", nextScene: "scene2C" },
  ],
};

let scene2A = {
  title: "A trip to the ocean",
  text: "You are still on the pier. You feel refreshed and at peace.",
  choices: [{ btnText: "Take another breath. It wont hurt" }, { btnText: "Look for a bench. You could use a nap" }],
};
let scene2B = {
  title: "A trip to the ocean",
  text: "The water is colder than anticipated - you feel the cramps setting in",
  choices: [{ btnText: "Attempt to climb the nearest ladder" }, { btnText: "Dive deeper. You feel at one with the water" }],
};

let scene2C = {
  title: "A trip to the ocean",
  text: "You see a run-down square with a rusted sign of an ice cone on top",
  choices: [{ btnText: "They might have some interesting flavors. Investigate further" }, { btnText: "If this place is inhabited by anybody, it's probably drug dealers. Keep looking." }],
};

function start() {
  console.log("running");
  showScene(scene1);
}

function showScene(scene) {
  const htmlScene = document.querySelector("#scene");
  htmlScene.querySelector("#title").innerHTML = scene.title;
  htmlScene.querySelector("#situation").innerHTML = scene.text;
  const options = document.querySelector("#options");
  options.innerHTML = "";
  scene.choices.forEach((button, index) => {
    options.insertAdjacentHTML(
      "beforeend",
      `
        <button id="option${index}" class="option">${button.btnText}</button>
        `
    );
  });
  document.querySelectorAll(".option").forEach(htmlButton => {
    htmlButton.addEventListener("click", buttonClicked);
  });
}

function buttonClicked(event) {
  console.log(event);
}
