// src/routes/memberRoutes.js
const express = require('express');
const router = express.Router();
const memberController = require('../controllers/memberController');

// Route to get all members
router.get('/', memberController.getAllMembers);

// Route to get a single member by ID
router.get('/:id', memberController.getMemberById);

// Route to create a new member
router.post('/', memberController.createMember);

// Route to update a member's information
router.put('/:id', memberController.updateMember);

// Route to delete a member by ID
router.delete('/:id', memberController.deleteMember);

module.exports = router;

