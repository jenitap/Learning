/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
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
    dateAcquired,
    image
  ) {
    this.name = name;
    this.volume = volume;
    this.color = color;
    this.pocketNum = pocketNum;
    this.strapLength = {
      left: strapLengthL,
      right: strapLengthR,
    };
    this.lidOpen = lidOpen;
    this.dateAcquired = dateAcquired;
    this.image = image;
  }
  toggleLid(lidStatus) {
    this.lidOpen = lidStatus;
  }
  newStrapLength(lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  }
  backpackAge() {
    let now = new Date();
    let acquired = new Date(this.dateAcquired);
    let elapsed = now - acquired; // elapsed time in milliseconds
    let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24));
    return daysSinceAcquired;
  }
}

class Suitcase {
  constructor(
    name,
    volume,
    color,
    pocketNum,
    wheelNumber,
    zipperOpen,
    dateAcquired,
    image
  ) {
    this.name = name;
    this.volume = volume;
    this.color = color;
    this.pocketNum = pocketNum;
    this.wheelNumber = wheelNumber;
    this.zipperOpen = zipperOpen;
    this.dateAcquired = dateAcquired;
    this.image = image;
  }
  toggleLid(zipperStatus) {
    this.zipperOpen = zipperStatus;
  }

  backpackAge() {
    let now = new Date();
    let acquired = new Date(this.dateAcquired);
    let elapsed = now - acquired; // elapsed time in milliseconds
    let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24));
    return daysSinceAcquired;
  }

  suitcaseAge() {
    let now = new Date();
    let acquired = new Date(this.dateAcquired);
    let elapsed = now - acquired; // elapsed time in milliseconds
    let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24));
    return daysSinceAcquired;
  }
}

/**
 * Traverse the DOM tree using querySelector() and querySelectorAll()
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll
 */

//import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "blue",
  15,
  26,
  26,
  false,
  "July 7, 2017 14:00:00 PST",
  "../../assets/images/everyday.svg"
);

const everyPack = new Backpack(
  "Frog Backpack",
  8,
  "green",
  3,
  10,
  10,
  false,
  "September 7, 2017 14:00:00 PST",
  "../../assets/images/frog.svg"
);

const travelSuitcase = new Suitcase(
  "Travel Suitcase",
  30,
  "navyblue",
  5,
  4,
  false,
  "July 7, 2017 17:00:00 PST",
  "suitcase-svgrepo-com.svg"
);

const main = document.querySelector(".maincontent");
const main1 = document.querySelector(".maincontent1");

const content = `
    <article class="backpack" id="everyday">
      <figure class="backpack__image">
        <img src=${everydayPack.image} alt="" />
      </figure>
      <h1 class="backpack__name">${everydayPack.name}</h1>
      <ul class="backpack__features">
        <li class="packprop backpack__volume">Volume:<span> ${
          everydayPack.volume
        }l</span></li>
        <li class="packprop backpack__color">Color:<span> ${
          everydayPack.color
        }</span></li>
        <li class="backpack__age">Age:<span> ${everydayPack.backpackAge()} days old</span></li>
        <li class="packprop backpack__pockets">Number of pockets:<span> ${
          everydayPack.pocketNum
        }</span></li>
        <li class="packprop backpack__strap">Left strap length:<span> ${
          everydayPack.strapLength.left
        } inches</span></li>
        <li class="packprop backpack__strap">Right strap length:<span> ${
          everydayPack.strapLength.right
        } inches</span></li>
        <li class="packprop backpack__lid">Lid status:<span> ${
          everydayPack.lidOpen
        }</span></li>
      </ul>
    </article>

    <article class="backpack" id="frog">
      <figure class="backpack__image">
        <img src=${everyPack.image} alt="" />
      </figure>
      <h1 class="backpack__name">${everyPack.name}</h1>
      <ul class="backpack__features">
        <li class="packprop backpack__volume">Volume:<span> ${
          everyPack.volume
        }l</span></li>
        <li class="packprop backpack__color">Color:<span> ${
          everyPack.color
        }</span></li>
        <li class="backpack__age">Age:<span> ${everyPack.backpackAge()} days old</span></li>
        <li class="packprop backpack__pockets">Number of pockets:<span> ${
          everyPack.pocketNum
        }</span></li>
        <li class="packprop backpack__strap">Left strap length:<span> ${
          everyPack.strapLength.left
        } inches</span></li>
        <li class="packprop backpack__strap">Right strap length:<span> ${
          everyPack.strapLength.right
        } inches</span></li>
        <li class="packprop backpack__lid">Lid status:<span> ${
          everyPack.lidOpen
        }</span></li>
      </ul>
    </article>
  `;

const content1 = `
  <article class="suitcase" id="travel">
    <figure class="suitcase__image">
      <img src=${travelSuitcase.image} alt="" />
    </figure>
    <h1 class="suitcase__name">${travelSuitcase.name}</h1>
    <ul class="suitcase__features">
      <li class="packprop1 suitcase__volume">Volume:<span> ${
        travelSuitcase.volume
      }l</span></li>
      <li class="packprop1 suitcase__color">Color:<span> ${
        travelSuitcase.color
      }</span></li>
      <li class="suitcase__age">Age:<span> ${travelSuitcase.suitcaseAge()} days old</span></li>
      <li class="packprop1 suitcase__pockets">Number of pockets:<span> ${
        travelSuitcase.pocketNum
      }</span></li>
      <li class="packprop1 suitcase__wheelNumber">Number of wheels:<span> ${
        travelSuitcase.wheelNumber
      }</span></li>
      <li class="packprop1 siutcase__zipper">zipper status:<span> ${
        travelSuitcase.zipperOpen
      }</span></li>
    </ul>
  </article>
`;

main.innerHTML = content;
main1.innerHTML = content1;
