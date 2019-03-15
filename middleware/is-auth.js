module.exports =(req, res, next) => {
    if(req.session.isLoggedIn && req.session.user.admin === 1) {
        next();
    } else{
        res.redirect('/');
    }
}