const express = require('express');
const genreRouter = require('./routes/genre.routes');
const filmRouter = require('./routes/film.routes');
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use('/', genreRouter);
app.use('/', filmRouter);

app.listen(PORT, () => console.log(`server started on port ${PORT}`));