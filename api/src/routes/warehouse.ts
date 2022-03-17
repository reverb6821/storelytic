import { Router } from 'express';
import { checkJwt } from '../middlewares/checkJwt';
import { checkRole } from '../middlewares/checkRole';

import WarehouseController from '../controller/WarehouseController';

const warehouseRouter = Router();

warehouseRouter.get(
  '/warehouses',
  [checkJwt, checkRole(['ADMIN', 'USER'])],
  WarehouseController.listAll,
);

warehouseRouter.get(
  '/warehouses:id([0-9]+)',
  [checkJwt, checkRole(['ADMIN', 'USER'])],
  WarehouseController.getOneById,
);

warehouseRouter.post(
  '/warehouses',
  [checkJwt, checkRole(['ADMIN'])],
  WarehouseController.newWarehouse,
);

warehouseRouter.patch(
  '/warehouses:id([0-9]+)',
  [checkJwt, checkRole(['ADMIN'])],
  WarehouseController.editWarehouse,
);

warehouseRouter.delete(
  '/warehouses:id([0-9]+)',
  [checkJwt, checkRole(['ADMIN'])],
  WarehouseController.deleteWarehouse,
);

export default warehouseRouter;
