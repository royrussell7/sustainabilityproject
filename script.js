/* 

object list:

1. apple core --> compost
2. sandwich --> compost
3. plastic water bottle --> recycling
4. cardboard box --> recycling
5. mask --> garbage
6. chip bag --> garbage

*/

let objectNum, counter = -1, correctCounter = 0;

//run the startup functions
embedNewObject();

// function to embed the object
function embedNewObject() {
    // increment counter
    counter++;

    // remove the explanation of the previous object
    const explanationDiv = document.getElementById('explanation');
    explanationDiv.innerHTML = '';

    // connect the div in html and js
    const objectDiv = document.getElementById('object');
    objectDiv.innerHTML = '';
    
    const img = document.createElement('img');

    // embed the objects
    if (counter == 0) {
        // embed applecore
        img.src = 'images/applecore.png';
        img.height = 200;
        objectDiv.appendChild(img);
    } else if (counter == 1) {
        // embed sandwich
        img.src = 'images/sandwich.png';
        img.height = 200;
        objectDiv.appendChild(img);
    } else if (counter == 2) {
        // embed water bottle
        img.src = 'images/waterbottle.png';
        img.height = 200;
        objectDiv.appendChild(img);
    } else if (counter == 3) {
        // embed box
        img.src = 'images/box.png';
        img.height = 200;
        objectDiv.appendChild(img);
    } else if (counter == 4) {
        // embed mask
        img.src = 'images/mask.png';
        img.height = 200;
        objectDiv.appendChild(img);
    } else if (counter == 5) {
        // embed chip bag
        img.src = 'images/chipbag.png';
        img.height = 200;
        objectDiv.appendChild(img);
    } else {
        console.log('Error: object number is not within the boundaries');
    }
}

// function for when compost is clicked
function clickedCompost() {
    if (counter == 0 || counter == 1) {
        // correct input
        //  increment counter
        correctCounter++;
console.log ('counteradded');
        // embed counter
        const counterDiv = document.getElementById('correctCounter');
        counterDiv.innerHTML = correctCounter;

        // embed new object
        embedNewObject();
        explanation();
    } else {
        // incorrect input
        explanation();
    }
}

//function for when recycling is clicked
function clickedRecycling() {
    if (counter == 2 || counter == 3) {
        // correct input
        //increment counter
        correctCounter++;

        //embed counter
        const counterDiv = document.getElementById('correctCounter');
        counterDiv.innerHTML = correctCounter;

        // embed new object
        embedNewObject();
        explanation();
    } else {
        //incorrect input
        explanation();
    }
}

// function for when garbage is clicked
function clickedGarbage() {
    if (counter == 4 || counter == 5) {
        // correct input
        //increment counter
        correctCounter++;

        //embed counter
        const counterDiv = document.getElementById('correctCounter');
        counterDiv.innerHTML = correctCounter;

        // embed new object
        embedNewObject();
        explanation();
    } else {
        //incorrect input
        explanation();
    }
}

function explanation() {
    // get the div element
    const explanationDiv = document.getElementById('explanation');

    if (counter == 0) {
        explanationDiv.innerHTML = 'An apple core will go into the soil, and give back to the plants around it, so it should go in the compost. This is the case for most foods.';
    } else if (counter == 1) {
        explanationDiv.innerHTML = 'Like the apple core, the sandwich will go into the soil and help the plants around it, so it should go in the compost. This is the case for most foods.';
    } else if (counter == 2) {
        explanationDiv.innerHTML = 'Any plastic material with no label goes into the recycling bin.';
    } else if (counter == 3) {
        explanationDiv.innerHTML = 'Any cardboard with no label goes into the recycling bin.';
    } else if (counter == 4) {
        explanationDiv.innerHTML = 'There are germs on the mask, so it should go in the garbage.';
    } else if (counter == 5) {
        explanationDiv.innerHTML = 'The shiny part inside of the chip bag cannot be recycled, so even though the bag is mostly plastic, it cannot be recycled. So it should go in the garbage.';
    } else {
        alert('You finished the game. Congratulations!');
    }

    setTimeout(embedNewObject, 5000);
}