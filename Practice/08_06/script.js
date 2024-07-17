/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

/**
 * How arrow functions help us with scoping.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#this_and_Arrow_Functions
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
 */

// Define a default volume for the window (the entire DOM):
window.volume = 23;

const greenPack = {
  name: "Frog Pack",
  color: "green",
  volume: 12,
  pocketNum: 7,
  newVolume: function (volume) {
    console.log("this.volume in the method:", this.volume);
    this.volume = volume;
    console.log("this.volume after update:", this.volume);

    (() => {
      console.log("this.volume in arrow function:", this.volume);
    })();
  },
};

function pipAdd(newClass) {
  Element.className = newClass;
}
pipAdd("pip");
pipAdd("pippi");

console.log(greenPack.newVolume(17));
