import helmet from 'helmet';
import express from 'express';

const app = express();

app.use(helmet());

export default app;