const formData=require('../models/form')
const dotenv = require("dotenv");
const e = require('express');
dotenv.config();



exports.formData = async function (req, res) {
    try {
      const { name, selectdata, terms } = req.body;
     return formData.create({
        name,
        selectdata,
        terms,
      })
        .then((userData) =>
          res.status(201).send({
            success: true,
            message: "data successfully entered",
            userData,
          })
        )
    } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
    }
  };

  exports.getAllData = async function (req, res) {
    try {
      const items = await formData.findAll({});
      return res.status(200).json({
        status:200,
        data:items,
        message:"data successfully retrieved"
      })
    } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
    }
  };
  exports.getdatabyId = async (request, response) => {
    try {
      const formdatabyid = await formData.findByPk(request.params.id);
      response.status(200).json(formdatabyid);
    } catch (error) {
      response.status(500).json(error);
    }
  };

  exports.updatedata =async(req,res)=>{
    try {
      const { name, selectdata,terms } = req.body;
      return formData.findByPk(req.params.id)
        .then((data) => {
          data.update({
            name: name || data.name,
            selectdata: selectdata || data.selectdata,
            terms:terms|| data.terms,
          })
          .then((updated) => {
              res.status(200).send({
                message: 'data updated successfully',
                data: {
                  name: name || updated.name,
                  selectdata:selectdata ||updated.selectdata,
                  terms:terms|| updated.terms,
                },
              });
            })
            .catch((error) => res.status(400).send(error));
        })
        .catch((error) => res.status(400).send(error));
    } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
    }
  }
  exports.delete = async function (req, res) {
    try {
      return formData.findByPk(req.params.Id)
        .then((data) => {
          if (!data) {
            return res.status(400).send({
              message: 'Data Not Found',
            });
          }
          return data
            .destroy()
            .then(() =>
              res.status(200).send({
                message: 'Data successfully deleted',
              })
            )
            .catch((error) => res.status(400).send(error));
        })
        .catch((error) => res.status(400).send(error));
    } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
    }
  };
