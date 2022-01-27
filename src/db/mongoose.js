const mongoose = require('mongoose')
//const validator = require('validator')


mongoose.connect(process.env.MONGODB_URL,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})


// const task = new Task({
//     description: '      Eat Lunch',
//     // completed: false
// })
// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log(error);
// })

// const me = new User({
//     name: '   Jaydeep',
//     email: 'JAYDEEP@PATEL.IO    ',
//     password: 'phone098'
// })

// me.save().then( (me)=> {
//     console.log(me)
// }).catch( (error) => {
//     console.log('Error!!',error)
// })