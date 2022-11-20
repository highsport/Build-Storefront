import express, { Request, response, Response } from 'express'
import morgan from 'morgan'
import helmet from "helmet";
import * as dotenv from 'dotenv'
import rateLimit from 'express-rate-limit'
import config from './database/config'

dotenv.config()

const PORT = config.port || 3000
// create an instance server
const app = express();
// limit handeller
const limiter = rateLimit({
	windowMs:  600000, // 10 minutes
	max: 100, // Limit each IP to 100 requests 
  message : 'requests more than premited',
	standardHeaders: true, 
	legacyHeaders: false, 
})
// middleware for logger, parser ,limiter and secure 
app.use(morgan('combined'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded());
app.use(limiter);
app.use((req : Request, res : Response) => {
  res.status(404).json({
    message : 'try again later'
  });
});
// start express server
app.listen(PORT, () => {
  console.log(`Server is starting at prot:${PORT}`)
})

export default app