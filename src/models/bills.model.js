// bills-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const bills = new Schema({
    table: { type: Number, required: true },
    billStatus: {
      type: mongooseClient.Schema.Types.ObjectId,
      ref: 'bill-statuses',
      required: true
    },
    business: {
      type: mongooseClient.Schema.Types.ObjectId,
      ref: 'businesses',
      required: true
    },
    menuItems: [
      {
        menuItem: {
          type: mongooseClient.Schema.Types.ObjectId,
          ref: 'menu-items',
          required: true
        },
        itemStatus: {
          type: mongooseClient.Schema.Types.ObjectId,
          ref: 'menu-item-statuses',
          required: true
        }
      }
    ],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('bills', bills);
};
