var mongoose = require("mongoose");
var restaurantdet = mongoose.Schema;
var restaurant = new restaurantdet({
  restid: {
    type: String
  },
  userId: {
    type: String
  },
  userEmail: {
    type: String
  },
  restName: {
    type: String
  },
  restAddress: {
    type: String
  },
  restZip: {
    type: String
  },
  restPhone: {
    type: String
  },
  restDesc: {
    type: String
  },
  restImage: {
    type: String
  }
});
var restaurantdet = mongoose.model("restaurantdetails", restaurant);
module.exports = { restaurantdet };
