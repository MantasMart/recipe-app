const instructions = document.getElementById("instructions");
const caption = document.getElementById("caption-name");
const image = document.getElementById("figure-image");

document.onload = fillData();


function fillData(){
    const urlParams = new URLSearchParams(window.location.search);
    const i = urlParams.get('i');
    console.log(i);
    fetch(`http://localhost:3000/api/meal?i=${i}`)
    .then(response => response.json())
    .then(jsonResp => {
        
        meal = jsonResp.meals[0];
        console.log(meal);
        const {strInstructions, strMeal, strMealThumb} = meal;
        instructions.innerHTML = strInstructions;
        caption.innerHTML = strMeal;
        image.src = strMealThumb; 
    });
}