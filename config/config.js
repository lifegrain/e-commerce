if (process.env.NODE_ENV === `test` || process.env.NODE_ENV === `development`) {
  require(`dotenv`).config();
}

module.exports = {
  development: {
    username: "postgres",
    password: "postgres",
    database: "e-com_CMS",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  test: {
    username: "postgres",
    password: "postgres",
    database: "e-com_CMS-test",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  production: {
    username: "urfdghhpqzzobf",
    password: "7867342fcbbc83dd74cd407081fe3781824cf1ba967726f863fcd04acc2ca315",
    database: "dcmfn4fbaa488d",
    host: "ec2-18-235-20-228.compute-1.amazonaws.com",
    dialect: "postgres"
  }
};
