const express = require('express');
const router = express.Router();
const staffController = require('../controllers/staffController');

// Route to get all staff members
router.get('/', staffController.getAllStaff);

// Route to get a single staff member by ID
router.get('/:id', staffController.getStaffById);

// Route to create a new staff member (now using createStaff)
router.post('/', staffController.createStaff);

// Route to update a staff member's information
router.put('/:id', staffController.updateStaff);

// Route to delete a staff member by ID
router.delete('/:id', staffController.deleteStaff);

module.exports = router;
