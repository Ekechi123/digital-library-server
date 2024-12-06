const Staff = require('../models/staffModel');  // Import the staff model

// Register a new staff member
exports.registerStaff = async (req, res) => {
    try {
        const { name, email, password, position } = req.body;

        // Check if the staff already exists
        const existingStaff = await Staff.findOne({ email });
        if (existingStaff) {
            return res.status(400).json({ message: 'Staff member already exists' });
        }

        // Create a new staff member
        const newStaff = new Staff({
            name,
            email,
            password,
            position
        });

        // Save the staff member to the database
        await newStaff.save();
        return res.status(201).json({ message: 'Staff member registered successfully', staff: newStaff });
    } catch (error) {
        return res.status(500).json({ message: 'Error registering staff member', error });
    }
};

// Get all staff members
exports.getAllStaff = async (req, res) => {
    try {
        const staffList = await Staff.find();
        return res.status(200).json(staffList);
    } catch (error) {
        return res.status(500).json({ message: 'Error fetching staff members', error });
    }
};

// Get a specific staff member by ID
exports.getStaffById = async (req, res) => {
    try {
        const staff = await Staff.findById(req.params.id);
        if (!staff) {
            return res.status(404).json({ message: 'Staff member not found' });
        }
        return res.status(200).json(staff);
    } catch (error) {
        return res.status(500).json({ message: 'Error fetching staff member', error });
    }
};

// Update staff member information
exports.updateStaff = async (req, res) => {
    try {
        const updatedStaff = await Staff.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedStaff) {
            return res.status(404).json({ message: 'Staff member not found' });
        }
        return res.status(200).json(updatedStaff);
    } catch (error) {
        return res.status(500).json({ message: 'Error updating staff member', error });
    }
};

// Delete a staff member
exports.deleteStaff = async (req, res) => {
    try {
        const deletedStaff = await Staff.findByIdAndDelete(req.params.id);
        if (!deletedStaff) {
            return res.status(404).json({ message: 'Staff member not found' });
        }
        return res.status(200).json({ message: 'Staff member deleted successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'Error deleting staff member', error });
    }
};

