# kamesh-custom-db
JSON based data storage system



## How to use:


###### Installation:
npm i kamesh-custom-db

There are three methods in this package:

1. getData()
2. insertData(Object)
3. deleteData(_id)


###### Usage:
1. Create a file "db.json" with empty object.
2. const { getData, insertData, deleteData } = require("kamesh-custom-db");

#### Get Data:
console.log(getData());

#### Insert Data:
//insertData({ _id: "3", employeeId: "1010103", name: "Test test" });

#### Delete Data:
//deleteData("1");

-----------------------------------------------------------------------------
