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

// exports.addKid = async (req, res) => {
//   try {
//     const newKid = await Kids.create(
//       {
//         race: req.body.race,
//         aged_photo: req.body.aged_photo,
//         photo: req.body.photo,
//         dateMissing: req.body.date ,
//         first_name: req.body.first_name,
//         middle_name: req.body.middle_name,
//         last_name: req.body.last_name,
//       }
//     );
//     res.status(201);
//     res.json(newKid);

//   } catch (error) {
//     console.log(error);
//     res.sendStatus(500);
//   }
// }