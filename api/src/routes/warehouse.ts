import { Router } from 'express';
import { checkJwt } from '../middlewares/checkJwt';
import { checkRole } from '../middlewares/checkRole';

import WarehouseController from '../controller/WarehouseController';

const warehouseRouter = Router();

warehouseRouter.get(
  '/warehouses',
  [checkJwt, checkRole([1, 2])],
  WarehouseController.listAll,
);

warehouseRouter.get(
  '/warehouses/:id',
  [checkJwt, checkRole([1, 2])],
  WarehouseController.getOneById,
);

warehouseRouter.post(
  '/warehouses',
  [checkJwt, checkRole([1])],
  WarehouseController.newWarehouse,
);

warehouseRouter.patch(
  '/warehouses/:id',
  [checkJwt, checkRole([1])],
  WarehouseController.editWarehouse,
);

warehouseRouter.delete(
  '/warehouses/:id',
  [checkJwt, checkRole([1])],
  WarehouseController.deleteWarehouse,
);

export default warehouseRouter;
