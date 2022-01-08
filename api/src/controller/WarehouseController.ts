import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { validate } from 'class-validator';

import Logger from '../../lib/logger';
import { Warehouse } from '../entity/Warehouse';

class WarehouseController {
  static listAll = async (req: Request, res: Response) => {
    const warehouseRepository = getRepository(Warehouse);
    const warehouse = await warehouseRepository.find({
      select: ['warehouseId', 'title', 'description', 'position'],
    });
    res.send(warehouse);
  };

  static getOneById = async (req: Request, res: Response) => {
    const { warehouseId } = req.params;

    const warehouseRepository = getRepository(Warehouse);
    try {
      const warehouse = await warehouseRepository.findOneOrFail(warehouseId, {
        select: ['warehouseId', 'title', 'description', 'position'], // We dont want to send the password on response
      });
      res.send(warehouse);
    } catch (error) {
      Logger.error(res.status(404).send('warehouse not found'));
    }
  };

  static newWarehouse = async (req: Request, res: Response) => {
    const { title, description, position } = req.body;
    const warehouse = new Warehouse();
    warehouse.title = title;
    warehouse.description = description;
    warehouse.position = position;

    const errors = await validate(warehouse);
    if (errors.length > 0) {
      Logger.error(res.status(400).send(errors));
      return;
    }

    Logger.info(res.status(201).send('Warehouse created'));
  };

  static editWarehouse = async (req: Request, res: Response) => {
    const { warehouseId } = req.params;
    const { title, description, position } = req.body;

    const warehouseRepository = getRepository(Warehouse);
    let warehouse;
    try {
      warehouse = await warehouseRepository.findOneOrFail(warehouseId);
    } catch (error) {
      // If not found, send a 404 response
      Logger.error(res.status(404).send('warehouse not found'));
      return;
    }

    warehouse.title = title;
    warehouse.description = description;
    warehouse.position = position;
    const errors = await validate(warehouse);
    if (errors.length > 0) {
      Logger.error(res.status(400).send(errors));
      return;
    }

    try {
      await warehouseRepository.save(warehouse);
    } catch (e) {
      Logger.warn(res.status(409).send('email already in use'));
      return;
    }
    // After all send a 204 (no content, but accepted) response
    Logger.info(res.status(204).send());
  };

  static deleteWarehouse = async (req: Request, res: Response) => {
    const { warehouseId } = req.params;

    const warehouseRepository = getRepository(Warehouse);
    let warehouse: Warehouse;
    try {
      warehouse = await warehouseRepository.findOneOrFail(warehouseId);
    } catch (error) {
      Logger.error(res.status(404).send('Warehouse not found'));
      return;
    }
    warehouseRepository.delete(warehouseId);

    Logger.info(res.status(204).send());
  };
}

export default WarehouseController;
