const { MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id.id.length)
// console.log(id.toHexString().length)

MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) =>{
    if(error){
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

    // db.collection('users').deleteMany({
    //     age: 27
    // }).then((result) =>{
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('tasks').deleteOne({
        description: 'Clean the house'
    }).then((result) =>{
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    // db.collection('users').updateOne({
    //     _id: new ObjectID("61e90ff0c3ee0d0d38cc678c")
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch(()=>{
    //     console.log(error)
    //  })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set:{
    //         completed: true
    //     }
    // }).then((result) =>{
    //     console.log(result.modifiedCount)
    // }).catch((error) =>{
    //     console.log(error)
    // })

    // db.collection('tasks').findOne({_id: new ObjectID("61e91e19b3149b2ed083f31c")}, (error, task) => {
    //     if(error){
    //         return console.log('Unable to fetch details !!!')
    //     }
    //     console.log(task)
    // })
    // db.collection('tasks').find({ completed: false}).toArray((error, task) => {
    //     console.log(task)
    // })

    // db.collection('users').findOne({ _id: ObjectID("61e923bdecca320db894f316") }, (error, user) =>{
    //     if(error){
    //         console.log('Unable to fetch!!')
    //     }
    //     console.log(user)
    // })

    // db.collection('users').find({ age:21 }).toArray((error, users)=>{
    //     console.log(users)
    // })
    

    // db.collection('users').insertOne({
    //     name: 'Patel',
    //     age: 20
    // }, (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert User')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 28
    //     },{
    //         name: 'Gunther',
    //         age: 27
    //     }
    // ], (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert document!')
    //     }

    //     console.log(result.ops)
    // })


    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Clean the house',
    //         completed: true
    //     },{
    //         description: 'Renew inspection',
    //         completed: false
    //     },{
    //         description: 'Pot Plants',
    //         completed: false
    //     }
    // ],(error, result) => {
    //     if(error){
    //         return console.log('Unable to insert tasks!!!')
    //     }

    //     console.log(result.ops)
    // })
})
