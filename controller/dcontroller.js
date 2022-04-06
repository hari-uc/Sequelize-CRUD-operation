//CRUD controller
//Author : hariuc2001@gmail.com
//Date : 24-03-2022

const db = require("../models");

const tabledetails = db.tabledetails;

// Posting data
const add = async (req, res) => {
  let info = {
    pro_id: req.body.pro_id,
    pro_name: req.body.pro_name,
    pro_description: req.body.pro_description,
  };
  await tabledetails
    .create(info)
    .then(() => {
      res.status(200).send(info);
    })
    .catch((err) => {
      console.log(err);
    });
};

//Viewing record through id
const view = async (req, res) => {
  const id = req.params.id;
  let one = await tabledetails.findOne({ where: { pro_id: id } });
  console.log("===============================================");
  res.status(200).send({ data: one });
};

//Deleting record through id
const del = async (req, res) => {
  const id = req.params.id;
  let del = await tabledetails.destroy({ where: { pro_id: id } });
  res.status(200).send({ data: del });
};

//Updating field through id
const update = async (req, res) => {
  const id = req.params.id;
  let upd = await tabledetails.update(req.body, { where: { pro_id: id } });
  res.status(200).send({ data: upd });
};

//Exporting methods.
module.exports = {
  add,
  view,
  del,
  update,
};
