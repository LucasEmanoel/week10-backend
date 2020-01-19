const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const http = require('http')
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb://lucas:admin@cluster0-shard-00-00-9tkf4.mongodb.net:27017,cluster0-shard-00-01-9tkf4.mongodb.net:27017,cluster0-shard-00-02-9tkf4.mongodb.net:27017/week10?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex:true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);