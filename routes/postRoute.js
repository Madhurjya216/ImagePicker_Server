const express = require('express');
const router = express.Router();
const data = require('../Scheme/imageScheme');

router.post('/', (req, res) => {
    const { id, name, category, image } = req.body;

    try {
        if(!id || !name || !category || !image) {
            res.status(502).send('Please enter all the fields');
        }
    
        const Data = new data({id, name, category, image});
        const allData = Data.save();
        if(allData){
            res.send('Uploaded Successfully');
        }else{
            res.send('Failed to upload');
        }
    } catch (error) {
        console.log('err mssg >>>' + error );
    }
})

module.exports = router;