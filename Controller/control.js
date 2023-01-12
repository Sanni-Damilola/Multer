const datas = require("../Model/model");

const postdata = async (req, res) => {
  try {
    const { Name, About } = req.body;
    const post = await datas.create({
      Name,
      About: About
        ? About
        : `Hi ${Name.toUpperCase()}Tell Your Contact About YourSelf`,
      Image: req.file ? req.file.path : "DefaultImage",
    });

    res.status(201).json({
      message: "Successfully Upload data",
      data: post,
    });
  } catch (error) {
    res.status(400).json({
      message: "An error occured",
      data: error.message,
    });
    console.log(error);
  }
};

const getall = async (req, res) => {
  try {
    const get = await datas.find();
    res.status(201).json({
      message: "Successfully gotten all data",
      data: get,
    });
  } catch (error) {
    req.status(400).json({
      message: "An error occured",
      data: error.message,
    });
  }
};

const deletedata = async (req, res) => {
  try {
    const deleteone = await datas.findByIdAndDelete(req.params.id);
    res.status(201).json({
      message: "Successfully delted data id " + req.params.id,
    });
  } catch (error) {
    req.status(400).json({
      message: "An error occured",
      data: error.message,
    });
  }
};

const getone = async (req, res) => {
  try {
    const getone = await datas.findById(req.params.id);
    res.status(201).json({
      message: "Successfully delted data id" + req.params.id,
      data: getone,
    });
  } catch (error) {
    req.status(400).json({
      message: "An error occured",
      data: error.message,
    });
  }
};

const deleteall = async (req, res) => {
  try {
    const deletemany = await datas.deleteMany();
    res.status(201).json({
      message: "Successfully delted all data",
      data: deletemany,
    });
  } catch (error) {
    req.status(400).json({
      message: "An error occured",
      data: error.message,
    });
  }
};

module.exports = { getall, postdata, deletedata, deleteall, getone };
