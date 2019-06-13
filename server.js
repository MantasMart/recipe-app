const express = require(`express`);
const fetch = require(`node-fetch`);
const app = express();

app.use(express.static(__dirname));
//let mealCategories;


app.get("/", (req, res) => {
    res.render(`${__dirname}/index.html`);
});

app.get("/api/categories", (req, res) => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(response => response.json())
    .then(jsonResp => res.json(jsonResp))
});


app.get("/api/ingredients", (req, res) => {
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
    .then(response => response.json())
    .then(jsonResp => res.json(jsonResp))
});


app.get("/meal", (req, res) => {
    res.sendFile(`${__dirname}/meal.html`);
})


app.get("/api/search_cat", (req, res) => {
    const c = req.query.c;
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${c}`)
    .then(response => response.json())
    .then(jsonResp => res.json(jsonResp))
})


app.get("/api/meal", (req, res) => {
    const i = req.query.i;
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${i}`)
    .then(response => response.json())
    .then(jsonResp => res.json(jsonResp))
});

app.listen(3000);

