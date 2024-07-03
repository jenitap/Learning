/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const desk = {
  brand: "Staples",
  // Height, Width, and Depth are in inches.
  height: 36,
  width: 72,
  depth: 36,
  material: "wood",
  materialType: "oak",
  drawerNum: 7,
  // Drawer size in cubic inches
  drawerSize: {
    center: 1728,
    leftDrawers: 2304,
    rightDrawers: 2304,
  },
  drawerOpen: false,
  openClose: function (drawerStatus) {
    this.drawerOpen = drawerStatus;
  },
  newDrawerSize: function (centerSize, leftDrawersSize, rightDrawersSize) {
    this.drawerSize.center = centerSize;
    this.drawerSize.leftDrawers = leftDrawersSize;
    this.drawerSize.rightDrawers = rightDrawersSize;
  },
};

console.log("The desk Object is: ", desk);
console.log("The drawerNum value: ", desk.drawerNum);

console.log("Left drawers before:", desk.drawerSize.leftDrawers);

desk.newDrawerSize(1740, 2342, 2342);
