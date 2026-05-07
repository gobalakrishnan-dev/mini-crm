const router = require("express").Router();

const Company = require("../models/Company");
const Lead = require("../models/Lead");

const auth = require("../middleware/authMiddleware");

router.post("/", auth, async (req, res) => {

  const company = await Company.create(req.body);

  res.json(company);
});

router.get("/", auth, async (req, res) => {

  const companies = await Company.find();

  res.json(companies);
});

router.get("/:id", auth, async (req, res) => {

  const company = await Company.findById(
    req.params.id
  );

  const leads = await Lead.find({
    company: req.params.id,
    isDeleted: false,
  });

  res.json({
    company,
    leads,
  });
});

module.exports = router;