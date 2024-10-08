const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection URI
const uri = process.env.MONGODB_URI;

if (!uri) {
    console.error('MongoDB URI is required to connect to DB');
    process.exit(1);
}

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.get('/', async(req, res) => {
  console.log("you visited my ddb server")
  return "hello";
})

// MongoDB client
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  
// Connect to MongoDB
client.connect().then(() => {
    const db = client.db('phe_10_users_workouts');
    const collection = db.collection('users');

    // Endpoint для обработки отправки формы
    app.post('/submit', async (req, res) => {
        const { name, age, area, time } = req.body;
        try {
            // Сохраняем данные в базе
            const result = await collection.insertOne({ name, age, area, time });
            res.json({ success: true, message: 'Data received and saved!' });
        } catch (error) {
            console.error('Error saving data to MongoDB:', error);
            res.status(500).json({ success: false, message: 'Failed to save data' });
        }
    });

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(err => {
    console.error('Failed to connect to MongoDB:', err);
});

// Закрываем соединение с MongoDB при завершении приложения
process.on('SIGINT', async () => {
    await client.close();
    console.log('MongoDB connection closed');
    process.exit(0);
});
