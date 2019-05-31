// DEPENDENCIES
const express = require('express')
const marsMissions = require('./model/marsMissions')
const app = express();


// run `npm install` to install dependencies in package.json

// * Your mission is to complete the app
// * The app will need routes for index and show
// * The app will need views for index and show
//
// * Make it so you can click on a mission’s name on the index page, and be taken to that mission’s show page
// * Bonus: add images to the data and have them display
// * Bonus: add static css to style the pages

// NOTES:
// ejs has not been installed
// views folder has not been created
// views/missions folder has not been created

// PORT
const port = 3000;



// INDEX Route
// send data to 'missions/index.ejs' view
// the view should display just the names of each mission
// display the mission names as <li> in a <ul> with the class name "missions"

// SHOW Route
// send data to 'missions/show.ejs' view
// the view should display all the data for a single mission


//show all objects
app.get("/", (request, response)=>{
  response.send(marsMissions)
})


// SHOW INDEX
app.get('/mars-missions/:id', (req,res)=>{
  res.render('show.ejs', {
       'missions': marsMissions[req.params.id]
    })
});


//show only name of objects
app.get('/mars-missions', (req,res)=>{
  res.render('index.ejs', {
      "missions": marsMissions
  })
})





// LISTENER
app.listen(port, function() {
  console.log('Missions to Mars running on port: ', port);
})




