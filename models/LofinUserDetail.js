const mongoose = require("mongoose");
const Joi = require("@hapi/joi");
const Gamehistoryschema = new mongoose.Schema({
  gameName: { type: String },
  winerPrice: { type: Number },
  player: { type: Number },
  username: { type: String },
  gamePrice: { type: Number },
  date: { type: Date, default: new Date() },
  TotalWin: { type: Number, default: 0 },
  TotalLoss: { type: Number, default: 0 },
  status: { type: String, default: 0 }
});
const PaymentHistorySchema = new mongoose.Schema({
  orderId: { type: String, required: true },
  cust_Email: { type: String, required: true },
  cust_Mobile: { type: String, required: true },
  gateway_type: { type: String, required: true },
  merchantKey: { type: String, required: true },
  secret: { type: String, required: true },
  token: { type: String, required: true },
  txnAmount: { type: Number, required: true },
  upiuid: { type: String, required: true },
  Date: { type: Date, default: new Date() },
  status: { type: Number, default: 0 }
});

const Bonus = new mongoose.Schema({
  date: { type: Date },
  status: { type: String },
  price: { type: Number }
});
const festivalBonusSchema = new mongoose.Schema({
  festivalbonusdataname: { type: String, required: true },
  festivalBonusdata: { type: Number, required: true },
  date: { type: Date },
  status: { type: Boolean }
});
const MailForAllUser = new mongoose.Schema({
  MailType: { type: String },
  MailTypetext: { type: String },
  date: { type: Date, default: new Date() }
});

const DailyBonusSchema = new mongoose.Schema({
  value: { type: Number, default: 0 },
  status: { type: Boolean, default: false },
  clamed: { type: Boolean, default: false }
});
const Withdraw = new mongoose.Schema({
  Amount: { type: Number },
  PhoneNumber: { type: Number },
  Email: { type: String },
  BankName: { type: String },
  IFSC: { type: Number },
  UserName: { type: String },
  AccountNumber: { type: Number },
  UpiAddress: { type: String },
  status: { type: Number, default: 0 }
});
const Singlemailtext = new mongoose.Schema({
  MailType: { type: String },
  MailTypetext: { type: String },
  date: { type: Date, default: new Date() }
});
const loginDetails = new mongoose.Schema({
  userphone: {
    type: Number,
    validate: {
      validator: (value) => Joi.number().validate(value).error === undefined,
      message: "Invalid number"
    }
  },

  wallet: {
    type: Number,
    default: 200,
    validate: {
      validator: (value) => Joi.number().validate(value).error === undefined,
      message: "Invalid wallet value, must be a number"
    }
  },

  username: { type: String },
  userotp: { type: Number },
  isLogin: { type: Boolean, default: false },
  guestid: { type: String },
  reffralcode: { type: String, default: 0 },
  usereffral: { type: String, default: 0 },
  ReferEarnCollection: {
    type: [String],
    default: ["0", "0", "0", "0"]
  },
  reffralcodestatus: { type: Number, default: 0 },
  PaymentHistoryData: [PaymentHistorySchema],
  DailyBonus: {
    type: [DailyBonusSchema],
    default: [
      { value: 0, status: false },
      { value: 0, status: false },
      { value: 0, status: false },
      { value: 0, status: false },
      { value: 0, status: false },
      { value: 0, status: false },
      { value: 0, status: false }
    ]
  },
  bonus: [Bonus],
  MailForAllUser: [MailForAllUser],
  SingleMailText: [Singlemailtext],
  verification: { type: String },
  TotalWin: { type: Number, default: 0 },
  TotalBonus: { type: Number, default: 0 },
  festivalBonusSchema: [festivalBonusSchema],
  TotalLoss: { type: Number, default: 0 },
  status: { type: Number, default: 0 },
  GameHistore: [Gamehistoryschema],
  withdraw: [Withdraw],
  fixedAmntStatus: { type: Number, default: 0 }
});

const userloginDatas = mongoose.model("userloginDatas", loginDetails);

module.exports = userloginDatas;
