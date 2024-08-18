/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Desk from "./Desk.js";

const officeDesk = new Desk(
  "staples",
  36,
  72,
  36,
  "wood",
  "oak",
  7,
  1728,
  2304,
  2304,
  false
);

console.log("The officeDesk object: ", officeDesk);
console.log("The drawerNum value: ", officeDesk.drawerNum);

const studyDesk = new Desk(
  "staples",
  36,
  72,
  36,
  "wood",
  "birch",
  5,
  1728,
  2340,
  2340,
  false
);

console.log("The studyDesk object: ", studyDesk);
console.log("The drawerNum value: ", studyDesk.drawerNum);
