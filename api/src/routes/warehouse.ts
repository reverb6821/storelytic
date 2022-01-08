import { Router } from 'express';
import { checkJwt } from '../middlewares/checkJwt';
import { checkRole } from '../middlewares/checkRole';

import WarehouseController from '../controller/WarehouseController';

const warehouseRouter = Router();

warehouseRouter.get('/warehouseslist', [checkJwt, checkRole(['ADMIN', 'USER'])], WarehouseController.listAll);

warehouseRouter.get(
  '/warehouse:id([0-9]+)',
  [checkJwt, checkRole(['ADMIN', 'USER'])],
  WarehouseController.getOneById,
);

warehouseRouter.post('/newwarehouse', [checkJwt, checkRole(['ADMIN'])], WarehouseController.newWarehouse);

warehouseRouter.patch(
  '/editwarehouse:id([0-9]+)',
  [checkJwt, checkRole(['ADMIN'])],
  WarehouseController.editWarehouse,
);

warehouseRouter.delete(
  '/deletewarehouse:id([0-9]+)',
  [checkJwt, checkRole(['ADMIN'])],
  WarehouseController.deleteWarehouse,
);

export default warehouseRouter;
