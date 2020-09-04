"use strict";

const fs = require("fs");
const path = "db.json";

const getData = () => {
  try {
    if (fs.existsSync(path)) {
      return JSON.parse(fs.readFileSync(path));
    } else {
      console.log("No DB found");
    }
  } catch (error) {
    console.log(error);
    return "NOT OK...";
  }
};

const insertData = (data) => {
  try {
    if (fs.existsSync(path)) {
      let oldData = getData();
      oldData.push(data);
      fs.writeFileSync(path, JSON.stringify(oldData));
      return "OK...";
    } else {
      fs.writeFile(path, "[" + JSON.stringify(data) + "]", (err) => {
        if (err) throw err;
      });
    }
  } catch (error) {
    console.log(error);
    return "NOT OK...";
  }
};

const deleteData = (id) => {
  try {
    if (fs.existsSync(path)) {
      let oldData = getData();
      let newData = oldData.filter((data) => data._id !== id);
      fs.writeFileSync(path, JSON.stringify(newData));
      return "OK...";
    } else {
      console.log("No DB found");
    }
  } catch (error) {
    console.log(error);
    return "NOT OK...";
  }
};

module.exports = { getData, insertData, deleteData };
