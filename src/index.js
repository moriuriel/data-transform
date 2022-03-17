const dt = require("./dt");

const main = () => {
  const data = {
    name: "uriel",
    last_name: "vanso",
  };

  const shopfiyToBling = dt({ file: "shopfiyToBling", payload: data });

  console.log(shopfiyToBling);
};

main();
