const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/bfhl', (req, res) => {
    try {
        const data = req.body.data;

        const user_id = "john_doe_17091999";
        const email = "john@xyz.com";
        const roll_number = "ABCD123";

        const evenNumbers = [];
        const oddNumbers = [];
        const alphabets = [];

        data.forEach(item => {
            if (typeof item === 'number') {
                if (item % 2 === 0) {
                    evenNumbers.push(item.toString());
                } else {
                    oddNumbers.push(item.toString());
                }
            } else if (typeof item === 'string') {
                alphabets.push(item.toUpperCase());
            }
        });

        const response = {
            is_success: true,
            user_id,
            email,
            roll_number,
            odd_numbers: oddNumbers,
            even_numbers: evenNumbers,
            alphabets: alphabets
        };

        res.json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({ is_success: false, error: "Internal Server Error" });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
