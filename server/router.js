const controller = require('./controller/controller');
const router = require('express').Router();
var request = require('request');

router.get('/lostKids', controller.getLostKids)
// router.post('/kid', (req, res) => {
//   res.send('add child to database')
// })
// router.get('/kids', async (req,res) => {
//   request('http://find-us.herokuapp.com', function (error, response, body) {
//     if(!error) {
//       const children = JSON.parse(body).filter((child, index) => {
//         if (child.aged_photo !== "") {
//           child.photo = `https://api.missingkids.org/photographs/NCMC${child.ncmec_number}c1.jpg`;
//           child.aged_photo = `https://api.missingkids.org/photographs/NCMC${child.ncmec_number}e1.jpg`;
//           child.found = 'false';
//           return child;
//         }
//       })
      // children.filter(
      //   function (child, index) {
      //     request(child.photo, function (error, response, body) {
      //       if(!error) {
      //         return child;
      //       }
      //       else {child.photo = "https://www.google.com/logos/doodles/2019/30th-anniversary-of-the-fall-of-the-berlin-wall-5163676096004096.6-l.png"}
      //     })
      //     return child;
      //   }
      // )

    
//       res.send(children)
//     }
//   })
// })
// router.get('/missingkids', controller.getKids)

module.exports = router;

// http://www.missingkids.com/photographs/NCMC600818e1.jpg

// https://api.missingkids.org/photographs/NCMC600818e1.jpg