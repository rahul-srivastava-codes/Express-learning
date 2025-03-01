const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

var user = [
  {
    name: "John Doe",
    kidneys: [
      {
        healthy: true,
      },
      {
        healthy: false,
      },
    ],
  },
];
app.get("/", (req, res) => {
  const kidney = user[0].kidneys;
  const numberofkidney = kidney.length;
  let healthykidney = 0;
  for (var i = 0; i < numberofkidney; i++) {
    if (kidney[i].healthy == true) {
      healthykidney++;
    }
  }
  let unhealthykidney = numberofkidney - healthykidney;
  console.log(numberofkidney);
  res.send({
    kidney: numberofkidney,
    healthykidney: healthykidney,
    unhealthykidney: unhealthykidney,
  });
});
app.post("/", (req, res) => {
  const ishealthy = req.body.healthy;
  user[0].kidneys.push({
    healthy: ishealthy,
  });
  res.json({
    msg: "Done",
  });
});
app.put("/", (req, res) => {
  for (let i = 0; i < user[0].kidneys.length; i++) {
    user[0].kidneys[i].healthy = true;
  }
  const book = req.query.id;
  console.log(book);
  res.json({
    msg: "Success",
  });
});
app.delete("/", (req, res) => {
  const newkidney = [];
  for (let i = 0; i < user[0].kidneys.length; i++) {
    if (user[0].kidneys[i] == true) {
      newkidney.push({ healthy: true });
    }
    user[0].kidneys = newkidney;
  }

  res.json({
    msg: "deleted",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
