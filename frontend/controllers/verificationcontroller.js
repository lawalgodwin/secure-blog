module.exports = (req, res) => {
    const{userName,password}=req.body
if (userName==="Admin" & password==="12345"){
    res.render('verification')
}
else {
    res.render('index')
}
    
}