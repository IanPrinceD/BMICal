const express = require("express");

const app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  let weight = parseFloat(req.body.weight);
  let height = parseFloat(req.body.height);

  let result = weight / ((height / 100) * (height / 100));

   if (result < 18.5) {
    res.send(`Your BMI is ${result}. you are underweight.`);
  } else if (result >= 18.5 && result <= 24.9) {
    res.send(`Your BMI is ${result}. you are normal.`);
  } else if (result >= 25 && result <= 29.9) {
    res.send(`Your BMI is ${result}. you are overweight.`);
  } else {
    res.send(`Your BMI is ${result}. you are obese.`);
  }

});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
