const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Mongodb connected"))
  .catch((e) => console.log(e));
