import { Request, Response, Router } from 'express';

const notFound = Router(); 

notFound.get('*', function(_req: Request, res: Response){
  res.status(404).json({
    status: 'Endpoint not found',
    message: '..What❓'
  })
});

export default notFound
