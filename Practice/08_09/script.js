/**
 * Practice: Pass values between functions
 *
 * Create two functions:
 * - Main function
 *  - Creates new <article> element
 *  - Populates <article> with content (see const content below)
 *  - Returns <article> element to where function is called
 * - Helper image function
 *  - Creates new <figure> element
 *  - Adds <img> markup pointing to frogpack.image
 *  - Adds <figcaption> element with image description
 *  - Returns <figure> element to where function is called
 */
class Backpack {
  constructor(
    name,
    volume,
    color,
    pocketNum,
    strapLengthL,
    strapLengthR,
    lidOpen,
    image,
    description
  ) {
    (this.name = name),
      (this.volume = volume),
      (this.color = color),
      (this.pocketNum = pocketNum),
      (this.strapLength = {
        left: strapLengthL,
        right: strapLengthR,
      });
    (this.lidOpen = lidOpen), (this.image = image);
    this.description = description;
  }
  toggleLid(lidStatus) {
    this.lidOpen = lidStatus;
  }
  newStrapLength(lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  }
}

/**
 * addFigure function
 * - Receives dataObj
 * - Creates <figure> <img> <figcaption>
 * - Returns <figure>
 */
const addFigure = (dataObj) => {
  let newFigure = document.createElement("figure");
  let newImg = document.createElement("img");
  newImg.setAttribute("src", dataObj.image);
  newImg.setAttribute("alt", "");
  let newDesc = document.createElement("figcaption");
  newDesc.innerText = dataObj.description;
  newFigure.append(newImg, newDesc);
  return newFigure;
};

const frogpack = new Backpack(
  "Frog Backpack",
  8,
  "green",
  3,
  10,
  10,
  false,
  "../../assets/images/frog.svg",
  "A green kids backpack design to make the kid look like the face of a frog sticking out"
);

const frogFigure = addFigure(frogpack).innerHTML;

// Baseline HTML output
const content = `
    <h1 class="backpack__name">${frogpack.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack_addFigure">Image and Description:<span> ${frogFigure}
      <li class="packprop backpack__volume">Volume:<span> ${
        frogpack.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        frogpack.color
      }</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        frogpack.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        frogpack.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        frogpack.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${
        frogpack.lidOpen ? "open" : "closed"
      }</span></li>
    </ul>  
`;

console.log("The frogpack object: ", frogpack);

const toadpack = new Backpack(
  "Toad Pack",
  12,
  "darkgreen",
  7,
  12,
  12,
  false,
  "../../assets/images/Backpack-And-Camera.svg",
  "A green kids backpack design to make the kid look like a toadie."
);
const toadFigure = addFigure(toadpack).innerHTML;

// Baseline HTML output
const content1 = `
    <h1 class="backpack__name">${toadpack.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack_addFigure">Image and Description:<span> ${toadFigure}
      <li class="packprop backpack__volume">Volume:<span> ${
        toadpack.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        toadpack.color
      }</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        toadpack.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        toadpack.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        toadpack.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${
        toadpack.lidOpen ? "open" : "closed"
      }</span></li>
    </ul>  
`;

console.log("The toadpack object: ", toadpack);

export const content_ = () => {
  content;
};

export { content };

export const content1_ = () => {
  content1;
};

export { content1 };

const mainElement = document.querySelector("main");

const newArticle = document.createElement("article");
newArticle.className = "frogpacker";
newArticle.classList.add("frogpacker");
newArticle.setAttribute("id", "frog");
newArticle.innerHTML = content;

const newArticle1 = document.createElement("article1");
newArticle1.className = "toadpacker";
newArticle1.classList.add("toadpacker");
newArticle1.setAttribute("id", "toad");
newArticle1.innerHTML = content1;

mainElement.append(newArticle);
mainElement.append(newArticle1);
