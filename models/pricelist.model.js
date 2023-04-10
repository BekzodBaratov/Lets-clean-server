const { Schema, model } = require("mongoose");
const Joi = require("joi");

const schema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  term: { type: String, required: true, enum: ["day", "week", "month", "year"] },
  description: { type: String, required: true },
  features: { type: [String], required: true },
});
const Price = model("pricelists", schema);

const validation = (price) => {
  return Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    term: Joi.string().required().valid("day", "week", "month", "year"),
    description: Joi.string().required(),
    features: Joi.array().required(),
  }).validate(price);
};
const validationUpd = (price) => {
  return Joi.object({
    name: Joi.string(),
    price: Joi.number(),
    term: Joi.string().required().valid("day", "week", "month", "year"),
    description: Joi.string(),
    features: Joi.array(),
  }).validate(price);
};

module.exports = { Price, validation, validationUpd };
