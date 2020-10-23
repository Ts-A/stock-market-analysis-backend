const BOM = require("./BOMdb.json");
const Stopwatch = require("../stopWatch");
const { default: Axios } = require("axios");
const time = new Stopwatch();

const getStockData = async () => {
  try {
    var i = 0;
    let items = [];
    time.start();
    for (var i = 0; i < 5; i++) {
      const data = await getFromQuandl(BOM[i].BOMcode);
      const item = data?.data?.dataset;
      let object = {
        id: item?.id,
        name: item?.name,
        end_date: item?.end_date,
        data: item?.data[0],
      }; // data_indices : 0145678
      items.push(object);
      console.log(`Received ${i + 1}/${BOM.length}`);
    }
    console.log(items);
    time.stop();
    let validatedItems = validate(items);
    console.log(items.length - validatedItems.length);
  } catch (e) {
    console.log(e);
    time.stop();
  }
};

const getFromQuandl = async (code) => {
  try {
    let data = await Axios.get(
      `https://www.quandl.com/api/v3/datasets/BSE/${code}.json?api_key=${process.env.QUANDL}`,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    return data;
  } catch (e) {
    console.log(e);
  }
};

const validate = (items) => {
  const validated = [];
  items.forEach((item) => {
    if (item.data) validated.push(item);
  });
  return validated;
};

//TODO: Push validated to Mongo Atlas

module.exports = {
  getStockData,
};
