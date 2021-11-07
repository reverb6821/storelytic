const { Router } = require('express');

export const router = Router();

router.get('/', (req, res) => {
    res.json({ message: 'Welcome to Storelytic  - Warehouse Management App.' })
})