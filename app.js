const express = require('express');
const app = express();
const Users = require('./model');

app.get('/users', (req, res) => {
    let page_no = parseInt(req.query.page_no);
    let size = parseInt(req.query.size);
 
    if (page_no <= 0) {
        res.status(500).send("Page number can't be 0 or negative!!");
    }
 
    let skip = size * (page_no - 1);
    let limit = size;
    var total_pages;
    Users.countDocuments()
        .then(count => total_pages = count)
        .catch(err => res.status(500).send(err))
    Users.find()
        .skip(skip)
        .limit(limit)
        .then(users => {
            res.send({ "data": users, "total_pages": Math.ceil(total_pages / size) });
        }).catch(err => {
            res.status(500).send(err);
        });
});

app.listen(3000, () => {
	console.log("App is running at 3000!!");
});
