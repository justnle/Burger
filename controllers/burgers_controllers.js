'use strict';

const express = require(`express`);
const router = express.Router();

const burger = require(`../models/burger.js`);

router.get(`/`, (req, res) => {
  burger.all(data => {
    const hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render(`index`, hbsObject);
  });
});

router.post(`/api/burgers`, (req, res) => {
  burger.create([`burger_name`], [req.body.burger_name], result => {
    res.json({ id: result.insertId });
  });
});

router.put(`/api/burgers/:id`, (req, res) => {
  const condition = `id = ${ req.params.id}`;
  const badRequest = 400;
  const okRequest = 200;

  console.log(`condition`, condition);

  burger.update(
    { devour: req.body.devour },
    condition,
    result => {
      if (result.changedRows === 0) {
        return res.status(badRequest).end();
      } else {
        res.status(okRequest).end();
      }
    }
  );
});

module.exports = router;
