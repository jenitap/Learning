/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
  newName: function (packName) {
    this.name = packName;
  },
  newVolume: function (capacity) {
    this.volume = capacity;
  },
  newColor: function (coloring) {
    this.color = coloring;
  },
  newPocketNum: function (pockets) {
    this.pocketNum = pockets;
  },
};

console.log("The pack Object is a: ", backpack);
console.log("The packName value is: ", backpack.name);

console.log("Left drawers before: ", backpack.strapLength.left);
console.log("Right drawers before: ", backpack.strapLength.right);

backpack.newColor("blue");
backpack.newName("travel Pack");
backpack.newPocketNum(17);
backpack.newVolume(33);
backpack.newStrapLength(27, 27);
backpack.toggleLid(true);
