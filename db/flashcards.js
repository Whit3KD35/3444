const pool = require('./pool');

async function fetchAllSets() {
    try {

        const result = await pool.query('SELECT * FROM flashcard_set');
        return { success: true, data: result.rows };
        
    } catch (error){
        console.error('Fetch error:', error);
        return { success: false, message: 'Server error during flashcard fetch.' };
    }
}

async function fetchSpecific(set_id) {
    try {

        const result = await pool.query('SELECT * FROM flashcards WHERE flashset_ID = $1', 
            [set_id]);
        return { success: true, data: result.rows };
        
    } catch (error){
        console.error('Fetch error:', error);
        return { success: false, message: 'Server error during flashcard fetch.' };
    }
}

async function createSet(title, desc, public, user_id){
    try {
          const result = await pool.query(
            'INSERT INTO flashcard_set (title, desc, is_public, creator_id) VALUES ($1, $2, $3, $4)',
            [title, desc, public, user_id]
        );
        return { success: true, message: 'Set Added'};
    } catch (error){
        console.error('Set error:', error);
        return { success: false, message: 'Server error during set creation.' };
    }
}

async function addFlashcard (question, answer, flashcard_set){
    try {
          const result = await pool.query(
            'INSERT INTO flashcard_set (question, answer, flashcard_set) VALUES ($1, $2, $3)',
            [question, answer, flashcard_set]
        );
        return { success: true, message: 'card Added'};
    } catch (error){
        console.error('Card error:', error);
        return { success: false, message: 'Server error during card creation.' };
    }
}

module.exports = {
    fetchAllSets,
    fetchSpecific,
    createSet,
    addFlashcard
}