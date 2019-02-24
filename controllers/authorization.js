const User = require("../models/user");
const bcrypt = require("bcryptjs");

exports.getLogin = (req, res, next) => {
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuthenticated: req.session.isLoggedIn,
    isAdmin: req.session.user
  });
};

exports.postLogin = (req, res, next) => {
  email = req.body.email;
  password = req.body.password;
  User.findOne({email: email})
  .then(user => {
      if(!user) {
          return res.redirect('/login');
      }
      bcrypt.compare(password, user.password)
      .then(doMatch => {
          if(doMatch) {
              req.session.isLoggedIn = true;
              req.session.user = user;
              return req.session.save(err => {
                  console.log(err);
                  admin = req.session.user.admin;
                  if(admin === 1) {
                    res.redirect('/admin/hotels');
                  } else {
                    res.redirect('/');
                  }
                  
              })
          }
      })
      .catch(err => {
          console.log('err');
          res.redirect('/login');
      });
  })
};

exports.postLogout = (req, res, next) => {
  req.session.destroy(err => {
    console.log(err);
    res.redirect("/");
  });
};

exports.getSignup = (req, res, next) => {
  res.render("auth/signup", {
    pageTitle: "SignUp",
    path: "/signup",
    isAuthenticated: false,
    isAdmin: req.session.user
  });
};

exports.postSignup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const confirmpassword = req.body.password;
  User.findOne({ email: email })
    .then(userDoc => {
      if (userDoc) {
        return res.redirect("/signup");
      }
      return bcrypt
        .hash(password, 12)
        .then(hashedPassword => {
          const user = new User({
            email: email,
            password: hashedPassword,
            order: { hotels: [] },
            admin: 0
          });
          return user.save();
        })
        .then(result => {
          res.redirect("/login");
        });
    })

    .catch(err => console.log(err));
};
