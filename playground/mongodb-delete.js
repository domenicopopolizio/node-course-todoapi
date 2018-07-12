const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser:true},(err, client) => {

    if (err)
        return console.log('Unable to connect to MongoDB server');
    
    console.log('Conneted to MongoDB server');
    
    const db = client.db('TodoApp');

    //deleteMany
    /*  db.collection('Todos').deleteMany({text:'Eat lunch'}).then(
    res => {
        console.log(res);
    }); */
    //deleteOne
    /*  db.collection('Todos').deleteOne({text:'Eat lunch'}).then(
        res => {
            console.log(res);
        }); */
    //findOneAndDelete
    db.collection('Todos').findOneAndDelete({completed:false}).then(res => {
        console.log(res);
    });
    //client.close();
});