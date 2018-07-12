const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser:true},(err, client) => {

    if (err)
        return console.log('Unable to connect to MongoDB server');
    
    console.log('Conneted to MongoDB server');
    
    const db = client.db('TodoApp');

    db.collection('Todos').insertOne( {
        text:'Something to do 1',
        comleted: false
    }, (err, result) =>  {
        if(err) return console.log("Unable to insert todo",  err);
        console.log(JSON.stringify(result.ops, undefined, 2));
    }); 
    db.collection('Todos').insertOne( {
        text:'Something to do 2',
        comleted: true
    }, (err, result) =>  {
        if(err) return console.log("Unable to insert todo",  err);
        console.log(JSON.stringify(result.ops, undefined, 2));
    }); 
    db.collection('Todos').insertOne( {
        text:'Something to do 3',
        comleted: false
    }, (err, result) =>  {
        if(err) return console.log("Unable to insert todo",  err);
        console.log(JSON.stringify(result.ops, undefined, 2));
    }); 

    

    client.close();
});