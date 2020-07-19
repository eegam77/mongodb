const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

MongoClient.connect('mongodb+srv://saisharan:saisharan@cluster0-i1mul.mongodb.net/restaurent?retryWrites=true&w=majority', (err,client) => {
    assert.equal(err,null);

    console.log("connected to the db");
    const dbname = 'restaurent';
    const db = client.db(dbname);
    const collection = db.collection('dishes');

    collection.insertOne({"name":"wada","description":"wada with sambar and chutney"},(err, result) => {
        assert.equal(err,null);

        console.log('After insertion is done!');
        console.log('result.ops');

        collection.find({}).toArray((err,docs) => {
            assert.equal(err,null);

            console.log('found:\n');
            console.log(docs);

            db.dropCollection('dishes', (err, result) => {
                assert.equal(err,null);

                client.close();
            })
        })

    });


})