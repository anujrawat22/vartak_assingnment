import { Request, Response, NextFunction } from 'express';
const fs = require('fs')
const logger = (req: Request, res: Response, next: NextFunction) => {
  const currentDateTime = new Date().toISOString();
  const method = req.method;
  const url = req.originalUrl;
  const ip = req.ip;

  fs.appendFile("logger.txt","\n"+`[${currentDateTime}] ${method} ${url} | IP : ${ip}`,(err)=>{
    if(err){
        console.log(err)
    }else{

        console.log(`Date -:[${currentDateTime}] ${method} ${url} | IP :${ip}`);
    }
  })
  
  next();
};

export default logger;