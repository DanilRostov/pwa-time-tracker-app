import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { PORT } from './config/server';
import CORS_DOMAINS from './constants/cors';
import days from './routes/days';
import tasks from './routes/tasks';

const app = express();

app.use(cors(CORS_DOMAINS));
app.use(bodyParser.json());

app.use('/', days);
app.use('/', tasks);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));