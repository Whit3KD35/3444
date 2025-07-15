const express = require('express');
const router = express.Router();

const {
    fetchAllSets,
    fetchSpecific,
    createSet,
    addFlashcard
} = require('../db/flashcards');


// GET all flashcard sets
router.get('/sets', async (req, res) => {
    const result = await fetchAllSets();
    res.status(result.success ? 200 : 500).json(result);
});


// GET flashcards in a specific set by ID
//TODO

// POST create a new flashcard set
router.post('/sets', async (req, res) => {
    const { title, desc, is_public, creator_id } = req.body;

    //Fail case missing fields
    if (!title || !desc || is_public === undefined || !creator_id) {
        return res.status(400).json({ success: false, message: 'Missing fields in request body.' });
    }

    const result = await createSet(title, desc, is_public, creator_id);
    res.status(result.success ? 201 : 500).json(result);
});


// POST add flashcard to set
router.post('/flashcards', async (req, res) => {
    const { question, answer, flashcard_set } = req.body;

    //Fail Case missing fields
    if (!question || !answer || !flashcard_set) {
        return res.status(400).json({ success: false, message: 'Missing fields in request body.' });
    }

    const result = await addFlashcard(question, answer, flashcard_set);
    res.status(result.success ? 201 : 500).json(result);
});

module.exports = router;