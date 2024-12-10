const express = require('express');
const router = express.Router();
const { getAllStaff, getStaffById, updateStaff, deleteStaff } = require('../controllers/staffController');

// Define routes for staff
router.get('/', getAllStaff);  // Get all staff
router.get('/:id', getStaffById);  // Get specific staff by ID
router.put('/:id', updateStaff);  // Update staff by ID
router.delete('/:id', deleteStaff);  // Delete staff by ID

module.exports = router;
