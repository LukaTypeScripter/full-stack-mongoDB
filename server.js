const express = require('express')

const connectDb = require('./config/db')

const app = express();
connectDb();
app.get('/', (req,res) => res.send("api developed"))


//define routs

app.use('/api/users',require('./routes/api/users'))
app.use('/api/auth',require('./routes/api/auth'))
app.use('/api/posts',require('./routes/api/posts'))
app.use('/api/profile',require('./routes/api/profile'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});