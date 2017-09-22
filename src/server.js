const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const assert = require('assert')

const url = 'mongodb://test:test@ds157258.mlab.com:57258/zipjobs-test'

const port = process.env.PORT || 8080;
const app = express()

app.use(bodyParser.json())
app.use(express.static('dist'))


MongoClient.connect(url, function(err, db) {
  assert.equal(null, err)
  console.log("Connected successfully to mongo dbserver")

  app.post('/submission', (req, res) => {
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
