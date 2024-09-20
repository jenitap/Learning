//**
/* Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class Desk {
  constructor(
    // Defines parameters:
    brand,
    // Height, Width, and Depth are in inches.
    height,
    width,
    depth,
    material,
    materialType,
    drawerNum,
    // Drawer size in cubic inches
    drawerSizeC,
    drawerSizeL,
    drawerSizeR,
    drawerOpen
  ) {
    // Define Properties:
    this.brand = brand;
    this.height = height;
    this.width = width;
    this.depth = depth;
    this.material = material;
    this.materialType = materialType;
    this.drawerNum = drawerNum;
    this.drawerSize = {
      center: drawerSizeC,
      leftDrawers: drawerSizeL,
      rightDrawers: drawerSizeR,
    };
    this.drawerOpen = drawerOpen;
  }
  // Add Add methods like normal functions:
  openClose(drawerStatus) {
    this.drawerOpen = drawerStatus;
  }
  newDrawerSize(centerSize, leftDrawersSize, rightDrawersSize) {
    this.drawerSize.center = centerSize;
    this.drawerSize.leftDrawers = leftDrawersSize;
    this.drawerSize.rightDrawers = rightDrawersSize;
  }
}

export default Desk;
