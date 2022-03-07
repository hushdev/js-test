const drawContainer = (containerSize, childSize, numberOfChildren) => {
    let mainSquare = document.querySelector("#mainSquare"), // parent container
        containerSizeInfo = document.querySelector('.containerSizeInfo'), //parent size info in HTML
        squareSizeInfo = document.querySelector('.squareSizeInfo'), //square size info in HTML
        numberInfo = document.querySelector('.numberOfSquares'); //number of squares info in HML

    // Parent styles in HTML
    mainSquare.style.width = containerSize + 'px';
    mainSquare.style.height = containerSize + 'px';

    // Number of children in HMTL
    numberInfo.textContent = numberOfChildren;

    // Container size in HTML
    containerSizeInfo.textContent = `${containerSize} px`;

    // Square size in HTML
    squareSizeInfo.textContent = `${childSize} px`;

    // Loop to draw squares
    for (let i = 1; i <= numberOfChildren; i++) {
        let child = document.createElement('div');

        // Creating and styling the square
        child.classList.add('square');
        child.style.width = `${childSize}px`;
        child.style.height = `${childSize}px`;
        child.style.backgroundColor = randomizeColor();

        // Pushing square to the Parent
        mainSquare.appendChild(child);
    }


    // Loop to create the :hover event
    for (let i = 0; i < mainSquare.children.length; i++) {
        const child = mainSquare.children[i];
        let hoverTimeout; // Will be reseted on :mouseleave
        let removeTimeout;
        
        child.addEventListener('mouseover', () => {
            child.style.backgroundColor = randomizeColor();
            hoverTimeout = setTimeout(() => {
                child.classList.add('hide'); // Hide item from the DOM
                numberOfChildren--; //Decrement the number of children
                numberInfo.textContent = numberOfChildren; // print to HTML

                removeTimeout = setTimeout(() => {
                    child.remove(); // Delete item from the DOM
                }, 200);
                clearTimeout(removeTimeout); // Clear timeout
            }, 2000)
        });

        child.addEventListener('mouseleave', () => {
            clearTimeout(hoverTimeout) // Reset timeout
        });
    }
};

// Function to get random RGB color code
const randomizeColor = () => {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`;
};

drawContainer(200, 40, 25)
// drawContainer(310, 200, 4);
// drawContainer(413, 42, 30);
// drawContainer(200, 300, 2);
