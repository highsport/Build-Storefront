import express, { Request, Response } from 'express'
import morgan from 'morgan'
import * as dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 3000
// create an instance server
const app = express()
// HTTP request logger middleware
app.use(morgan('short'))
// start express server
app.listen(PORT, () => {
  console.log(`Server is starting at prot:${PORT}`)
})

export default app