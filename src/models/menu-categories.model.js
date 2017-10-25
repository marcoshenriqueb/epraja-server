// menuCategories-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const menuCategories = new Schema({
    name: { type: String, required: true },
    business: {
      type: mongooseClient.Schema.Types.ObjectId,
      ref: 'businesses',
      required: true
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('menuCategories', menuCategories);
};
