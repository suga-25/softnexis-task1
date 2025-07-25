require('dotenv').config();              // Load env variables
const express = require('express');      // Import Express
const mongoose = require('mongoose');    // Import Mongoose
const productroutes = require('./routes/productroutes');
const app = express();                   // Create Express app
app.use(express.json());                 // To parse JSON body
app.use('/products', productroutes);
// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// Default route
app.get('/', (req, res) => {
    res.send('🚀 API is working!');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
