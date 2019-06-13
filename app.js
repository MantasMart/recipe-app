const table = document.getElementById("table");

const selectCategory = document.getElementById("select-category");
const selectIngredient = document.getElementById("select-ingredient");
const typeName = document.getElementById("type-name");

const apiCategories = `http://localhost:3000/api/categories`;
fetch(apiCategories)
.then(res => res.json())
.then(jsonResp => {
    console.log(jsonResp);
    jsonResp.categories.forEach(element => {
        let {strCategory} = element;
        let opt = document.createElement("option");
        opt.value = strCategory;
        opt.innerHTML = strCategory;
        selectCategory.appendChild(opt);
    })
})

const apiIngredients = `http://localhost:3000/api/ingredients`;
fetch(apiIngredients)
.then(res => res.json())
.then(jsonResp => {
    console.log(jsonResp);
    jsonResp.meals.forEach(element => {
        let {strIngredient} = element;
        let opt = document.createElement("option");
        opt.value = strIngredient;
        opt.innerHTML = strIngredient;
        selectIngredient.appendChild(opt);
    })
})

function onButtonClickCategories(){
    fetch(`http://localhost:3000/api/search_cat?c=${selectCategory.value}`)
    .then(res => res.json())
    .then(jsonResp => {
       // let j = jsonResp
        console.log(jsonResp)
        clearTable();
        populateTable(jsonResp);
      /*  jsonResp.meals.forEach(element => {
            console.log(element);
        });*/
       
    })

}

function clearTable(){
    while(table.firstChild) 
        table.removeChild(table.firstChild); 
}

function populateTable(jsonResp){
    console.log(jsonResp);
    jsonResp.meals.forEach(meal => {
        console.log(meal.strMeal);
        const newRow = document.createElement("tr");
        const newMealImageCell = document.createElement("td");
        const newMealNameCell = document.createElement("td");
        const newMealImage = document.createElement("img");

        table.appendChild(newRow);
        newRow.appendChild(newMealImageCell);
        newRow.appendChild(newMealNameCell);
//console.log(newMealImage);
        newMealImageCell.appendChild(newMealImage);
        newMealImage.width = 100;
        const {strMealThumb, strMeal, idMeal} = meal;
        newMealImage.src = strMealThumb; 
        newMealNameCell.textContent = strMeal;
        newRow.id = idMeal;
        newRow.addEventListener('click', function(){
            window.location = `http://localhost:3000/meal?i=${this.id}`;
        })

    })
}