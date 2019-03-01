const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const util = require('./util/database');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const flash = require('connect-flash');


//error
const errorController = require('./controllers/404');



//init express
const app = express();

const store = new MongoDBStore(
    {
      uri: util.database,
      collection: 'sessions'
    },
    function(error) {
    
    });
  
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const hotelRoutes = require('./routes/hotel');
const authRoutes = require('./routes/auth');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'its a secret key',
    resave: false,
    saveUninitialized: false,
    store: store,
    cookie : {
      maxAge: 1000* 60 * 60 *24 * 365
  },
}))

app.use(flash());

app.use('/admin', adminRoutes);
app.use(hotelRoutes);
app.use(authRoutes);

app.use(errorController.get404);

//mongodb connection with mongoose
mongoose.connect(util.database);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    app.listen(3000, () => console.log('nodejs server started'));
    console.log('Connected to MongoDB');
});

