// Establish Variables
const express = require('express');
const router = express.Router();
const registerUser = require('../db/register.js');

// Register Routes
router.post('/register', async (req, res) => {

    // Create Request
    const { username, email, password } = req.body;

    // Return 400 error for missing field
    if (!username || !email || !password){
        return res.status(400).json({ success: false, message: 'Missing fields'});
    }

    try {

        // Call registerUser function
        const result = await registerUser(username, email, password);

        //Return result of registration
        if (result.success) {
            res.status(201).json(result);
        } else {
            res.status(409).json(result);
        }

    // Catching Errors
    } catch (error){
        console.error('Registration failed: ', error);
        res.status(500).json({ success: false, message: 'Server error'});
    }
});

module.exports = router;