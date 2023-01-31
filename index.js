require('dotenv').config();
const express =require('express');
const app = express();
const port = 4000
const mongoose = require("mongoose")
mongoose.set("strictQuery", true); 
const employeeRouter = require('./routes/employeeRouter.js')
app.set('view engine', 'ejs')
// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/create', (req, res) => {
    res.status(200).render('create');
})
// routes
app.use(employeeRouter);

// dotenv dependency helps us to encript sensitive variables
// database connection
mongoose.connect(process.env.MONGO).then(() => {
    app.listen(port, () => {
        console.log(`server is running on ${port}..`);

    })
}).catch((err) => {
    console.log(err)
})




// if the profile is  not in a view profile the we use
// e.g profile.ejs in myViews
// app.set('views', 'myViews')