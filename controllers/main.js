

const login = (req, res)=>{
    res.send('fake register/login/signup page')
}

const dashboard = (req, res)=>{
    const luckyNumber = (Math.floor(Math.random() * 100))
    res.status(200).json({msg: `Hello Rahwa Yohannes`, secret: `your lucky number is ${luckyNumber}`})
}

module.export = { login, dashboard }