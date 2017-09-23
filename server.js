const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const MongoClient = require('mongodb').MongoClient
const assert = require('assert')

const url = 'mongodb://zipjobsadmin:Zip10065@zipjobs-shard-00-00-j5kbg.mongodb.net:27017,zipjobs-shard-00-01-j5kbg.mongodb.net:27017,zipjobs-shard-00-02-j5kbg.mongodb.net:27017/test?ssl=true&replicaSet=ZipJobs-shard-0&authSource=admin'

const port = process.env.PORT || 8080;
const app = express()

app.use(bodyParser.json())
app.use(express.static('dist'))


MongoClient.connect(url, function(err, db) {
  assert.equal(null, err)
  console.log("Connected successfully to mongo dbserver")

  app.get('/', function(req, res) {
    const index = path.join(__dirname, 'dist', 'index.html');
    res.sendFile(index);
  })

  app.post('/submission', (req, res) => {
    console.log('Submission')
    console.log(req.body)
    const collection = db.collection('submissions')
    collection.insertOne(req.body, (err, r) => {
      if (err || r.insertedCount !== 1) res.send({ status: 'failed' })
      else res.send({ status: 'ok' })
    })
  })

  app.listen(port, () => {
    console.log('Listening on 8080')
  })
})
