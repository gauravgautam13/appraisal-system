const Appraisal = require('../models/Appraisal');

// Submit an appraisal
exports.submitAppraisal = async (req, res) => {
  const { fillerName, fillingForName, formTitle, rating, review } = req.body;



  try {
    const appraisal = new Appraisal({
      fillerName, 
      fillingForName,  
      formTitle,     
      rating,
      review        
    });

    await appraisal.save();
    res.status(201).json(appraisal); 
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getAppraisals = async (req, res) => {
  try {
    const appraisals = await Appraisal.find();
    res.json(appraisals);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getAppraisalById = async (req, res) => {
  const { id } = req.query;

  try {
    const appraisal = await Appraisal.findById(id);
    if (!appraisal) {
      return res.status(200).json({ error: 'Appraisal not found' });
    }
    res.json(appraisal);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};
