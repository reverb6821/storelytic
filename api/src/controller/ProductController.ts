import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Logger from '../../lib/logger';
import { Product } from '../entity/Product';

class ProductController{

    static listAll = async (req: Request, res: Response) => {

        const productRepository = getRepository(Product);
        const products = await productRepository.find({
          select: [
                'productId', 
                'createdAt',
                'title',
                'description',
                'qty',
                'image',
                'serialnumber',
                'entrydate',
                'exitdate',
                'updatedAt',
                'updatedby',
                'shipment',
                'status',
                'warehouse'
            ] 
        });
        res.send(products);
    }

    static getOneById = async (req: Request, res: Response) => {

        const id: number = req.params.id;
      
        const productRepository = getRepository(Product);
        try {
          const product = await productRepository.findOneOrFail(id, {
            select: [
                'productId', 
                'createdAt',
                'title',
                'description',
                'qty',
                'image',
                'serialnumber',
                'entrydate',
                'exitdate',
                'updatedAt',
                'updatedby',
                'shipment',
                'status',
                'warehouse'
            ] //We dont want to send the password on response
          });
          res.send(product);
        } catch (error) {
          Logger.error(res.status(404).send('Product not found'));
        }
    };


}

export default ProductController;