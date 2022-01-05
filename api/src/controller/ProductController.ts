import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { validate } from 'class-validator';

import Logger from '../../lib/logger';
import { Product } from '../entity/Product';

class ProductController {
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
        'warehouse',
      ],
    });
    res.send(products);
  };

  static getOneById = async (req: Request, res: Response) => {
    const id: number = req.params.productId;

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
          'warehouse',
        ], // We dont want to send the password on response
      });
      res.send(product);
    } catch (error) {
      Logger.error(res.status(404).send('Product not found'));
    }
  };

  static newProduct = async (req: Request, res: Response) => {
    // Get parameters from the body
    const {
      createdAt,
      title,
      description,
      qty,
      image,
      serialnumber,
      entrydate,
      exitdate,
      updatedAt,
      updatedby,
      shipment,
      status,
      warehouse,
    } = req.body;

    const product = new Product();
    product.createdAt = createdAt;
    product.title = title;
    product.description = description;
    product.qty = qty;
    product.image = image;
    product.serialnumber = serialnumber;
    product.entrydate = entrydate;
    product.exitdate = exitdate;
    product.updatedAt = updatedAt;
    product.updatedby = updatedby;
    product.shipment = shipment;
    product.status = status;
    product.warehouse = warehouse;

    // Validade if the parameters are ok
    const errors = await validate(product);
    if (errors.length > 0) {
      Logger.error(res.status(400).send(errors));
      return;
    }

    // Try to save. If fails, the username is already in use
    const productRepository = getRepository(Product);
    try {
      await productRepository.save(product);
    } catch (e) {
      Logger.warn(res.status(409).send('Serial number already in use'));
      return;
    }

    // If all ok, send 201 response
    Logger.info(res.status(201).send('Product added'));
  };

  static editProduct = async (req: Request, res: Response) => {
    // Get the ID from the url
    const id = req.params.productId;

    // Get values from the body
    const {
      createdAt,
      title,
      description,
      qty,
      image,
      serialnumber,
      entrydate,
      exitdate,
      updatedAt,
      updatedby,
      shipment,
      status,
      warehouse,
    } = req.body;

    // Try to find user on database
    const productRepository = getRepository(Product);
    let product;
    try {
      product = await productRepository.findOneOrFail(id);
    } catch (error) {
      // If not found, send a 404 response
      Logger.error(res.status(404).send('Product not found'));
      return;
    }

    const errors = await validate(product);
    if (errors.length > 0) {
      Logger.error(res.status(400).send(errors));
      return;
    }

    // Try to safe, if fails, that means username already in use
    try {
      await productRepository.save(product);
    } catch (e) {
      Logger.warn(res.status(409).send('product already in use'));
      return;
    }
    // After all send a 204 (no content, but accepted) response
    Logger.info(res.status(204).send());
  };

  static deleteProduct = async (req: Request, res: Response) => {
    // Get the ID from the url
    const id = req.params.productId;

    const productRepository = getRepository(Product);
    let product: Product;
    try {
      product = await productRepository.findOneOrFail(id);
    } catch (error) {
      Logger.error(res.status(404).send('product not found'));
      return;
    }
    productRepository.delete(id);

    // After all send a 204 (no content, but accepted) response
    Logger.info(res.status(204).send());
  };
}

export default ProductController;
