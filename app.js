
// create Array
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// shuffleArray logic 
const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);

// sort logic 
const sortArray = arr => arr.sort();

// callback
const resultArray = ( t, e ) => {
    if ( t == 'sort') {
        sortArray(myArray);
    } else {
        shuffleArray(myArray);
    }
    const lists = document.querySelectorAll('.grid-list div');
    for (i = 0; i < lists.length; i++){
        lists[i].innerHTML =  myArray[i];
    }
}

// event handlers
document.querySelector('button.sort').addEventListener('click', resultArray.bind(null , 'sort'));
document.querySelector('button.shuffle').addEventListener('click', resultArray.bind(null , 'shuffle'));







