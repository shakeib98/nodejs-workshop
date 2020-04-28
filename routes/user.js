let express = require('express'),
    router = express.Router(),
    db_insert = require('../db-functions/insert'),
    db_read = require('../db-functions/read'),
    db_update = require('../db-functions/update')


router.post('/insertUser', async function (req, res) {
    let user = await db_insert.insertUser(req.body)
    if (user)
        res.json({
            status: 200,
            user
        })
    else
        res.json({
            status: 400
        })
});


router.get("/getUser/:name", async function (req, res) {
    let user = await db_read.getUser(req.params.name)
    if (user)
        res.json({
            status: 200,
            user
        })
    else
        res.json({
            status: 400
        })
});

router.get("/update/:name", async function (req, res) {
    let user = await db_update.updateUser(req.params.name)
    if (user)
        res.json({
            status: 200
        })
    else
        res.json({
            status: 400
        })
});


module.exports = router;
