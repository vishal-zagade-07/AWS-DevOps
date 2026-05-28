const express = require('express');
const pool = require('../db');
const authMiddleware = require('../auth-middleware');

const router = express.Router();

// Create order
router.post('/', authMiddleware, async (req, res) => {
  const { car_id, quantity } = req.body;

  try {
    const carResult = await pool.query('SELECT * FROM cars WHERE id = $1', [car_id]);

    if (carResult.rows.length === 0) {
      return res.status(404).json({ error: 'Car not found' });
    }

    const car = carResult.rows[0];
    const totalPrice = car.price * (quantity || 1);

    const orderResult = await pool.query(
      'INSERT INTO orders (user_id, car_id, quantity, total_price) VALUES ($1, $2, $3, $4) RETURNING *',
      [req.userId, car_id, quantity || 1, totalPrice]
    );

    // Update car stock
    await pool.query('UPDATE cars SET stock = stock - $1 WHERE id = $2', [quantity || 1, car_id]);

    res.status(201).json(orderResult.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create order' });
  }
});

// Get user orders
router.get('/', authMiddleware, async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT o.*, c.brand, c.model FROM orders o JOIN cars c ON o.car_id = c.id WHERE o.user_id = $1 ORDER BY o.created_at DESC',
      [req.userId]
    );
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
});

module.exports = router;
