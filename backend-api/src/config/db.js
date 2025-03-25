import mysql from 'mysql2';

const connectionDB = () => {
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
  });

  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
  });
};

export default connectionDB;
