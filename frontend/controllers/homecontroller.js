module.exports = (req, res) => {
    const{token}=req.body
if (token==="1234"){
    res.render('home')
}
else {
    res.render('verification')
}
    
}