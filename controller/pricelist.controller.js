const { Price, validation, validationUpd } = require("../models/pricelist.model");

exports.getAllPrices = async (req, res) => {
  const prices = await Price.find();
  res.status(200).json({ success: true, message: "price list successfully retrieved", prices });
};
exports.getOnePrice = async (req, res) => {
  const price = await Price.findById(req.params.id);
  if (!price) return res.status(400).json({ success: false, message: "price list not found" });
  res.status(200).json({ success: true, message: "price list successfully retrieved", price });
};
exports.addPrice = async (req, res) => {
  const { error } = validation(req.body);
  if (error) return res.status(400).json({ success: false, message: error.details[0].message });

  const { name, price, features, term, description } = req.body;
  const pricelist = await Price.create({ name, price, features, term, description });
  res.status(201).json({ success: true, message: "price list successfully created", price: pricelist });
};
exports.updPrice = async (req, res) => {
  const { error } = validationUpd(req.body);
  if (error) return res.status(400).json({ success: false, message: error.details[0].message });

  const price = await Price.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.status(204).json({ success: true, message: "Price list updated successfully", price });
};
exports.delPrice = async (req, res) => {
  const price = await Price.findById(req.params.id);
  if (!price) return res.status(400).json({ success: false, message: "price list not found" });

  await price.deleteOne();
  res.status(206).json({ success: true, message: "Price list deleted successfully" });
};
