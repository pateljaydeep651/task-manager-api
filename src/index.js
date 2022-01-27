const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const { findByIdAndUpdate } = require('./models/user')

const app = express()
const port = process.env.PORT





app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})


// app.use((req, res, next) => {
//     if(req.method === 'GET'){
    //         res.send('GET requests are disabled')
    //     }
    //     else{
        //         next()
        //     }
        // })
        
        // app.use((req, res, next) => { 
            //     res.status(503).send('Site under maintenance')
            //  })
            
            
            // const Task = require('./models/task')
            // const User = require('./models/user')
            
            // const main = async () => {
                // const task = await Task.findById('61efb2a4e886856544cc15a4')
                // await task.populate('owner').execPopulate()
                // console.log(task.owner)
                
                //     const user = await User.findById('61efb7b76669e75bc02f8332')
                //     console.log(user.tasks)
                //     await user.populate('tasks').execPopulate()
                // }
                
                // main()
                
                // const jwt = require('jsonwebtoken')
                
                // const myFunction = async () => {
                    
                    //     const token = jwt.sign({ _id:'abc123' }, 'This is node JS course', {expiresIn:'7 days'})
//     console.log(token)

//     const data = jwt.verify(token, 'This is node JS course')
//     console.log(data)

// }

// myFunction()



// const multer = require('multer')
// const upload = multer({
//     dest: 'images',
//     limits:{
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb) {
//         if(!file.originalname.match(/\.(doc|docx)$/)){
//             return cb(new Error('Please upload a Word document'))
//         }

//         cb(undefined,true)
//     }
// })

// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send()
// }, (error, req, res, next) =>{
//     res.status(400).send({ error: error.message })
// })