import express from 'express';
import './database/connection';

const app = express();
app.use(express.json());

app.get('/', (req,res) => {
  return res.json({message: 'success'});
});

app.listen(3333);