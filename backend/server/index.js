const express = require('express'); //Import the express dependency
const app = express();              //Instantiate an express app, 
require('dotenv').config();         //read envrionment file
const port = 3000;                  //Save the port number where your server will be listening
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGODB_URI;

app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  async function run() {
    try {
      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("carClub").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir); 
});
