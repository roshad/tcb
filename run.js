const cloudbase = require("@cloudbase/node-sdk");
const app = cloudbase.init({
  env: "lowcode-8gw3kj734483521d",
  secretId: "AKIDmPp0xIRM1SebIn5A3iCcqqb7ThnhLkvs",
  secretKey: "lIagYEk9YkjTyEFCB87ze5RZR4SaS5Tb",
});

// 1. 获取数据库引用
var db = app.database();

// const res = db
//   .collection("crawl")
//   .doc("poizon")
//   .update({
//     prices: [
//       ["35.5", "919"],
//       ["36", "929"],
//       ["36.5", "889"],
//       ["37.5", "909"],
//       ["38", "959"],
//       ["38.5", "979"],
//       ["39", "1219"],
//       ["40", "1049"],
//       ["40.5", "999"],
//       ["41", "959"],
//       ["42", "909"],
//       ["42.5", "919"],
//     ],
//   });
// res.then((a) => console.log(a));
const poizon_promise = db.collection("crawl").doc("poizon").get();
(async function () {

  return (await poizon_promise).data[0].prices;
})();
function add() {
  // db.collection("crawl").get().then((res)=>console.log(res.data))
  // db.collection("crawl").add({
  //          category: "Computer",
  //          name: "Thinking in Java",
  //          onSale: true,
  //          sales: 100
  //      })
  //      .then((res) => {
  //          console.log(res);
  //      });
}
