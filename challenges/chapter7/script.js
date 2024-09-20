// JavaScript code below
// Write your answer here, then test your code.

// Change these boolean values to control whether you see 
// the expected answer and/or hints
const showExpectedResult = false;
const showHints = false;

const deskArray = [
    "pen",
    "camera",
    "phone",
    "notebook",
    "headphones",
    "laptop",
    "light bulb",
    "USB drive",
    "elephant"
];

const processArray = deskArray => {

    let newDeskArr = [...deskArray];

    // Your code goes here

    // 1
    newDeskArr.pop();

    // 2
    newDeskArr.sort();

    // 3 newDeskArr.unshift(newDeskArr.pop());
    function moveItems (newDeskArr) {
        newDeskArr.unshift(newDeskArr[newDeskArr.length - 1]);
        newDeskArr.pop()
        return newDeskArr
    }
    moveItems(newDeskArr);

    // 4   const usbIndex = newDeskArr.indexOf("USB drive");
    // newDeskArr.push(newDeskArr.splice(usbIndex, 1));
    newDeskArr.push(newDeskArr.splice(newDeskArr.indexOf("USB drive"), 1)[0]);
    
    // 5  const laptopIndex = newDeskArr.indexOf("laptop");
    //  newDeskArr.splice(laptopIndex, 1);
    function removeItemOnce(newDeskArr, value) {
        var index = newDeskArr.indexOf(value);
        if (index > -1) {
            newDeskArr.splice(index, 1);
        }
        return newDeskArr;
    }
      removeItemOnce(newDeskArr, "laptop");
    // Your code ends here

    return newDeskArr;
};
