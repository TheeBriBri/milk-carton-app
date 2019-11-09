const mongoose = require('../db');
const Schema = mongoose.Schema;

const missingKidsModel = new Schema ({
  race: {type:String},
  aged_photo: {type:String},
  weight: {type:Number},
  photo: {type:String},
  date: {type:Date},
  country: {type:String},
  org_name: {type:String},
  agency_contact: {type:String},
  state: {type:String},
  first_name: {type:String},
  agency_name: {type:String},
  sex: {type:String},
  namus_number: {type:Number},
  height: {type:Number},
  age: {type:Number},
  eye_color: {type:String},
  circumstance: {type:String},
  county: {type:String},
  org: {type:String},
  hair_color: {type:String},
  last_name: {type:String},
  city: {type:String},
  ncmec_number: {type:Number},
  middle_name: {type:String},
  org_contact: {type:String},
  found: {type:String}
});


module.exports = mongoose.model('LostKids', missingKidsModel);