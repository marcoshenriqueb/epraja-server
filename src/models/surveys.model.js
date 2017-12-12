// surveys-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const surveys = new Schema({
    business: {
      type: mongooseClient.Schema.Types.ObjectId,
      ref: 'businesses',
      required: true
    },
    surveyRate: {
      type: mongooseClient.Schema.Types.ObjectId,
      ref: 'survey-rates',
      required: true
    },
    details: { type: String, required: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('surveys', surveys);
};
