import mongoose from 'mongoose'; 
const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');


mongoose 
    .connect('mongodb+srv://admin:scorpio857@cluster0.duigrhl.mongodb.net/')
    .then(() => console.log('DB OK'))
    .catch((err) => console.log('DB ERROR', err)); 


const app = express();
const port = 3000;

// Подключение к базе данных MongoDB
const MongoClient = mongodb.MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'mydatabase';
let db;

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Connected to MongoDB');
  db = client.db(dbName);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Маршруты API

// Получить все компании
app.get('/companies', (req, res) => {
  db.collection('companyInfo').find().toArray((err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.send(result);
    }
  });
});

// Получить все заказы
app.get('/orders', (req, res) => {
  db.collection('orders').find().toArray((err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.send(result);
    }
  });
});

// Создать новую компанию
app.post('/companies', (req, res) => {
  const company = req.body;
  db.collection('companyInfo').insertOne(company, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.send('Company created successfully');
    }
  });
});

// Создать новый заказ
app.post('/orders', (req, res) => {
  const order = req.body;
  db.collection('orders').insertOne(order, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.send('Order created successfully');
    }
  });
});

// Запустить сервер
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});