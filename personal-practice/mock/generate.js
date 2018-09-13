const path = require("path");
const fs = require("fs");
const randomjson = require("randomjson");

const model = {
  person: {
    age: "<@[0-100]>",
    name: "<@chinese{2,4}>",
    sex: "<@[0-1]>"
  },
  profile: {
    workAge: "<@[2-5]>",
    position: "<@string{5,10}>"
  },
  "companies<@{4,8}>":[
    {
      size: "<@[20-40]>",
      address: "<@chinese{10,15}>",
      remainTime: "<@null|number{1,2}>"
    }
  ]
};
let json = randomjson(model);
let target = path.join(__dirname, "db.json");
fs.writeFile(target, JSON.stringify(json, null, 2), err => {
  if (err) throw err;
});
