const router = require('express').Router();
const data = require('../data/index');

router.get('/', (req, res)=> {
    res.send("Hello")
})

router.post('/user/new', (req, res)=> {
    // get the object and send it to the data
    console.log("Data arived");
    var newuser = {
        'f_name': req.body.f_name,
        's_name': req.body.s_name,
        'email': req.body.email,
        'pass': req.body.pass,
        'adress': req.body.adress,
        'phone': req.body.phone,
        'gender': req.body.gender
    }
    data.insert_data(newuser)
})

router.get('/user/list', (req, res)=> {
    // get all users
    data.list_users(function(return_data) {
        //console.log(return_data.data.rows);
        data.fetch_data(return_data.data.rows, function(fetched_data) {
            res.json(fetched_data);
        })
        //res.json({A: 5})
    })
})

module.exports = router;
