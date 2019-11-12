const LostKids = require('../model/kid');

exports.getLostKids = async (req, res) => {
  try {
    const lostKids = await LostKids.find();
    res.json(lostKids);
    res.status(200);

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}



