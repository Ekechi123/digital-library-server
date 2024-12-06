const Member = require('../models/memberModel'); // Import member model

// Get all members
const getAllMembers = async (req, res) => {
  try {
    const members = await Member.find(); // Fetch all members
    res.status(200).json(members); // Return the members as JSON
  } catch (error) {
    res.status(500).json({ message: error.message }); // Handle errors
  }
};

// Get a member by ID
const getMemberById = async (req, res) => {
  try {
    const member = await Member.findById(req.params.id); // Find a member by ID
    if (!member) {
      return res.status(404).json({ message: 'Member not found' });
    }
    res.status(200).json(member); // Return the member as JSON
  } catch (error) {
    res.status(500).json({ message: error.message }); // Handle errors
  }
};

// Add a new member
const addMember = async (req, res) => {
  const { name, role, department, hireDate } = req.body; // Get data from request body
  const newMember = new Member({ name, role, department, hireDate });

  try {
    await newMember.save(); // Save the new member
    res.status(201).json(newMember); // Return the created member
  } catch (error) {
    res.status(400).json({ message: error.message }); // Handle errors
  }
};

// Update a member by ID
const updateMember = async (req, res) => {
  try {
    const updatedMember = await Member.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedMember) {
      return res.status(404).json({ message: 'Member not found' });
    }
    res.status(200).json(updatedMember); // Return the updated member
  } catch (error) {
    res.status(400).json({ message: error.message }); // Handle errors
  }
};

// Delete a member by ID
const deleteMember = async (req, res) => {
  try {
    const deletedMember = await Member.findByIdAndDelete(req.params.id); // Delete the member by ID
    if (!deletedMember) {
      return res.status(404).json({ message: 'Member not found' });
    }
    res.status(200).json({ message: 'Member deleted successfully' }); // Return success message
  } catch (error) {
    res.status(500).json({ message: error.message }); // Handle errors
  }
};

module.exports = {
  getAllMembers,
  getMemberById,
  addMember,
  updateMember,
  deleteMember,
};

