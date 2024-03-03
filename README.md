# kamesh-custom-db
JSON based data storage system
# https://tea.xyz/what-is-this-file
---
version: 1.0.0
codeOwners:
  - '0xfC841f6b436136f67FE8bFb4F45653bBce519176'
quorum: 1



## How to use:


###### Installation:
npm i kamesh-custom-db

There are three methods in this package:

1. getData()
2. insertData(Object)
3. deleteData(_id)


###### Import:

1. const { getData, insertData, deleteData } = require("kamesh-custom-db");

#### Get Data:
console.log(getData());

#### Insert Data:
insertData({ _id: "1", employeeId: "1010103", name: "Test test" });

#### Delete Data:
deleteData("1");

-----------------------------------------------------------------------------
