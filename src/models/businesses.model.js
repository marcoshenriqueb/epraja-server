// businesses-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const businesses = new Schema({
    name: { type: String, required: true },
    picture: { type: String, required: false },
    price: { type: Number, required: false },
    address: { type: String, required: false },
    type: { type: String, required: false },
    businessHours: { type: String, required: false },
    deliveryArea: { type: String, required: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('businesses', businesses);
};
