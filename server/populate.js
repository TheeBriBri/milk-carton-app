// const LostKids = require('./model/kid')
const FoundKids = require('./model/kid')
const request = require('request')
 
function populate (req,res) {
  request('http://find-us.herokuapp.com', (error, response, body) => {
    if(!error) {
      const children = JSON.parse(body).filter((child) => {
        if (child.aged_photo !== "") {
          child.photo = `https://api.missingkids.org/photographs/NCMC${child.ncmec_number}c1.jpg`;
          child.aged_photo = `https://api.missingkids.org/photographs/NCMC${child.ncmec_number}e1.jpg`;
          delete child.agency_name;
          delete child.org_contact;
          delete child.agency_contact;
          delete child.org;
          delete child.country;
          child.found = false;
          return child;
        }
      });

      
      Promise.all(children.map(async (child, index) => {
        const check = await asyncRequest(child.photo);
        if (check) delete children[index];
        return child;
      })).then(()=> {
        FoundKids.insertMany(children, {ordered: false}, (err, res) => {
          if (err) console.log(err);
          console.log('This should have worked', res)
        })
      })
    }
  })
}

function asyncRequest (url, rej) {
  return new Promise((res) => {
    request(url, (err, response, _) => {
      if (err) rej(err);
      res(response.statusCode === 404)
    })
  }) 
}

// Kids.deleteMany({}, function (err) {
//   console.log('Delete all kids')
// })


populate();