import { app } from 'mu';

app.get('/hello', function (req, res) {
    res.send('Hello mu-javascript-template');
});

app.get('/overview', function (req, res) {
    let data = {
        categories:
            [
                { category: 'label1', amount: 400 },
                { category: 'label2', amount: 800 },
                { category: 'label3', amount: 1200 },
            ]
    };
    res.send(data);
});