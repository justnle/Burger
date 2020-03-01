'use strict';

const orm = require(`../config/orm.js`);

const burger = {
  all(cb) {
    orm.selectAll(`burgers`, res => {
      cb(res);
    });
  },
  create(cb) {
    orm.insertOne(`burgers`, res => {
      cb(res);
    });
  },
  update(cb) {
    orm.updateOne(`burgers`, res => {
      cb(res);
    });
  }
};

module.exports = burger;
