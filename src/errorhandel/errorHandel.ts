import {Request, Response,NextFunction} from 'express'

type Error = {
    name : string,
    stack : string,
    message : string,
    status : number

}

const errorHandel = (
    error : Error,
     req : Request, 
     res : Response ,
      next : NextFunction
)=>{
    const status = error.status || 500;
    const message = error.message ||'please check your connection or contact admin';
    res.status(status).json({status, message})
}

export default errorHandel