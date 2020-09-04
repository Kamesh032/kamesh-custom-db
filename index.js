"use strict";

const fs = require("fs");

const getData = () => {
  try {
    return JSON.parse(fs.readFileSync("db.json"));
  } catch (error) {
    console.log(error);
    return "NOT OK...";
  }
};

const insertData = (data) => {
  try {
    let oldData = getData();
    oldData.push(data);
    fs.writeFileSync("db.json", JSON.stringify(oldData));
    return "OK...";
  } catch (error) {
    console.log(error);
    return "NOT OK...";
  }
};

const deleteData = (id) => {
  try {
    let oldData = getData();
    let newData = oldData.filter((data) => data._id !== id);
    fs.writeFileSync("db.json", JSON.stringify(newData));
    return "OK...";
  } catch (error) {
    console.log(error);
    return "NOT OK...";
  }
};

module.exports = { getData, insertData, deleteData };
