const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const cors = require('cors');
const Form = require('./models/form')

app.use(cors());
app.use(bodyParser.json());

app.post('/api/create-form', async (req, res) => {
    let {config, name} = req.body;
    config = JSON.stringify(config)
    try {
        const form = await Form.create({ config, name});
        res.status(201).json({
            message: 'Form successfully created',
            form,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/api/update-form', async (req, res) => {
    let {config, name, id} = req.body;
    config = JSON.stringify(config)
    try {
        const form = await Form.update({ config }, {where: {id}});
        res.status(201).json({
            message: 'Form successfully updated',
            form,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/api/list-all-forms', async (req, res) => {
    try {
        const data = await Form.findAll({attributes: ['id', 'name']});
        res.status(201).json({
            message: 'Form successfully updated',
            data,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/api/list-one-form', async (req, res) => {
    let {id} = req.query;
    try {
        const form = await Form.findOne({where: {id}});
        res.status(201).json({
            message: 'Form successfully updated',
            form,
        });
    } catch (error) {
       res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
