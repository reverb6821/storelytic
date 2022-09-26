'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Products', [
      {
        name: 'Razer DeathAdder V2 Pro',
        description: 'Best-in-Class Wired Gaming Mouse Ergonomics, Optical Mouse Switch, Focus + 20K Optical Sensor with Speedflex Cable',
        quantity: 5,
        stock: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Razer BlackWidow V3 TKL',
        description: 'Green Switch Gaming Keyboard with RGB Chroma Lighting, Multi-Function Digital Wheel and Multimedia Keys, Ergonomic Wrist Rest, US Layout, Black',
        quantity: 2,
        stock: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Razer Nari Essential',
        description: 'Wireless Headset with THX support.',
        quantity: 6,
        stock: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'MSI Optix MAG342CQR',
        description: 'Monitor Gaming Curve 34", Display 21:9 (UWQHD) 3440x1440, 144Hz, 1ms, VA, FreeSync Premium, HDR Ready, RGB Mystic Light, Night Vision.',
        quantity: 6,
        stock: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sabrent Rocket Q',
        description: '2TB NVMe PCIe M.2 2280 Internal SSD High Performance Solid State Drive R/W 3200/2900MB/s (SB-RKTQ-2TB).',
        quantity: 6,
        stock: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sabrent Rocket Q',
        description: '2TB NVMe PCIe M.2 2280 Internal SSD High Performance Solid State Drive R/W 3200/2900MB/s (SB-RKTQ-2TB).',
        quantity: 6,
        stock: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Corsair Vengeance SODIMM',
        description: 'Corsair Vengeance SODIMM 32GB (2x16GB) DDR4 3200MHz C22 Laptop/Notebook Memory, Nero',
        quantity: 6,
        stock: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Products', null, {})
  }
}
