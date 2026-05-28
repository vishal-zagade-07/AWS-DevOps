const express = require('express');
const pool = require('../db');
const authMiddleware = require('../auth-middleware');

const router = express.Router();

// Get all cars
router.get('/', async (req, res) => {
  try {
    const { brand, minPrice, maxPrice } = req.query;
    let query = 'SELECT * FROM cars WHERE stock > 0';
    const params = [];

    if (brand) {
      query += ' AND brand ILIKE $' + (params.length + 1);
      params.push(`%${brand}%`);
    }

    if (minPrice) {
      query += ' AND price >= $' + (params.length + 1);
      params.push(minPrice);
    }

    if (maxPrice) {
      query += ' AND price <= $' + (params.length + 1);
      params.push(maxPrice);
    }

    query += ' ORDER BY created_at DESC';
    const result = await pool.query(query, params);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch cars' });
  }
});

// Get single car
router.get('/:id', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM cars WHERE id = $1', [req.params.id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Car not found' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch car' });
  }
});

// Add car (admin only - in real app, check user role)
router.post('/', authMiddleware, async (req, res) => {
  const { brand, model, year, price, color, fuel_type, transmission, mileage, description } =
    req.body;

  try {
    const result = await pool.query(
      'INSERT INTO cars (brand, model, year, price, color, fuel_type, transmission, mileage, description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
      [brand, model, year, price, color, fuel_type, transmission, mileage, description]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add car' });
  }
});

module.exports = router;
