const fs = require("fs");
const https = require("https");
const csv = require("csvtojson");

const SHEET_ID = "13-iJ_w9D3RSIm1l7ZL4rIBZTTRwjiu6VBcQWqUkrPlQ";

const CSV_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv`;

const file = fs.createWriteStream("file.csv");
https.get(CSV_URL, res => {
  res.pipe(file);
  res.on("end", () => {
    csv()
      .fromFile("./file.csv")
      .then(jsonObj => {
        fs.writeFile("./_data/member.json", JSON.stringify(jsonObj), err => {
          if (err) {
            console.log(err);
          }
        });
      });
  });
});
