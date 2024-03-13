var express = require("express");
const axios = require("axios");
const jwt = require("jsonwebtoken");
// const {
//   priceControllerOfGame
// } = require("../controller/Admin.js/Controller.js");

const {
  UserloginData,
  sendOTP,
  ReferWinDataController,
  ReferErnDataGet,
  ReferEarnFixedAmt,
  ReferWinDataFixedAmt,
  ReferWinDataFixedAmtgetdata,
  ReferWinDataGet,
  DeletereferBounsAmount,
  paymentHistoryGetdata,
  DeletereReferWin,
  FestivalBonusEdit,
  festivalgetAlldata,
  updateotp,
  deleteSIngleMailUser,
  getdailyBonusDatas,
  referwin,
  withdrowapprovePost,
  paymentHistoryGetdataSingle,
  SingleMailPost,
  DailyBonusData,
  withdrawgetAll,
  DailyBonusFetchData,
  MailHistorySchemaData,
  PlayasGuest,
  fetchSingleUserMailData,
  GameHistoryDataGet,
  FestivalBonus,
  DeletereReferEarnfixedData,
  SingleUserMailEdit,
  FestivalBonusforuserEditInFestival,
  GamePriceDataController,
  DeletereReferWinsecond,
  FestivalBonusHistory,
  validatebinding,
  DeletereReferEarn,
  FestivalBonusforuser,
  GamePriceGetwithoutid,
  ReferErnData,
  MailTextData,
  GameHistoryData,
  FestivalBonusDeleter,
  FestivalBonusforuserDelete,
  // updateotpByname,
  // updateotpByNumber,
  // updateotptwo,

  // withdrowrejectUpdate,
  // GetpancarDetails,

  // withdrowrejectGet,
  // withdrowapproveUpdate,

  withdrowapproveGet,
  TotalNumberUser,
  TotalNumberOfPendingWith,
  // withdrowgetdata,
  // walletupdate,
  // getcarromdatahistory,
  // withdrow,
  // userDetails,
  // CarromPriceData,
  // candidatepan,
  // GamePriceGet,f
  geimg,
  // Getalldatauser,
  //post admin
  AddAdmin,
  withdrowrejectPost,
  DailyDataforfrontenddata,
  // get Admin
  callbackpayemnt,
  GetAdminUser,
  //update admin
  UpdateAdmin,
  //change admin password
  ChangeAdminPassword,
  PaymentHistorinsert,
  //multerfimgaesupload
  UploadImgMulter,
  DeleteAdminImg,
  // BankDeatilsOfUser,
  // UpiDeatilsOfUser,
  // BankDeatilsOfUser,
  // UpiDeatilsOfUserget,
  // BankDeatilsOfUserGet,
  // Gamehistory,
  justchekck,
  imgaesupload,
  EditName,
  referwin_Getdata,
  BankDetails,
  BankDetailsgets,
  upiDetails,
  UpiDetailsgets,
  withdraw,
  withdrawget,
  GamePricePostdelete,
  SliderImages,
  MailForUserData,
  UploadImgMulter1,
  getSliderImages,
  SliderimgDelete,
  deleteSliderImage,
  updateSlider,
  UploadImgMulter2,
  imgaesuploadNotice,
  getNoticeImages,
  MailUpdate,
  deletEeNoticeImage,
  updateNotice,
  Payment,
  UserFetchData,
  UserPersonalFetchData,
  SpinnerBonus,
  BindingData,
  MailForHistory,
  MailHistoryEditforUser,
  MailHistoryEdit,
  MailHistoryDeleteAllUser,
  // TotalNumberOfPendingRecharge,
  MailHistoryDelete,
  PaymentHistorUpdate,
  ReferEarnFixedAmtgetData
  // Gamehistory,
  // lobbyhistory
} = require("../controller/User/UserLofinController.js");

const router = express.Router();
// router.get("/userDetails", userDetails);
// router.get("/", async (req, res) => {
// try {
// Make multiple GET requests
// const [
// userDetailsResponse
// ludodataResponse,
// pooldataResponse,
// carromdataResponce
// ] = await Promise.all([
//   axios.get("https://landscapbackendproject6.onrender.com/userDetails")
// axios.get("https://landscapbackendproject6.onrender.com/getludodatahistory"),
// axios.get("https://landscapbackendproject6.onrender.com/getpoopdatahistory"),
// axios.get("https://landscapbackendproject6.onrender.com/getcarromdatahistory")
// ]);

// Extract data from the responses
// const userdata = userDetailsResponse.data;
// const ludodata = ludodataResponse.data;
// const pooldata = pooldataResponse.data;
// const carromdata = carromdataResponce.data;
// console.log("User Data:", userdata);
// console.log("Ludo Data:", ludodata);
// console.log("carrom Data:", carromdata);
// console.log("pool Data:", pooldata);

// Render the view with both sets of data

router.get("/home", async (req, res) => {
  try {
    const resp = await axios.get("https://wild-puce-puppy-sock.cyclic.app/TotalNumberUser");
    const TotalNumberUser = resp.data;
    const TotalNumberOfPendingWith = await axios.get(
      "https://wild-puce-puppy-sock.cyclic.app/TotalNumberOfPendingWith"
    );
    const TotalNumberWith = TotalNumberOfPendingWith.data;
    // const TotalNumberOfPendingRecharge = await axios.get(
    //   "https://wild-puce-puppy-sock.cyclic.app/TotalNumberOfPendingRecharge"
    // );
    // const TotalNumberOfRecharegData = TotalNumberOfPendingRecharge.data;
    res.render("index", {
      title: "Dashboard",
      currentRoute: req.url,
      TotalNumberUser,
      TotalNumberWith,
      // TotalNumberOfRecharegData
    });
  } catch (error) {
    console.error("Error fetching game prices:", error);
    res.render("error", { error: "Failed to fetch game prices" });
  }
});

router.get("/UserFetchData", UserFetchData);
router.get("/TotalNumberUser", TotalNumberUser);
router.get("/TotalNumberOfPendingWith", TotalNumberOfPendingWith);
router.get("/UserPersonalFetchData/:userId", UserPersonalFetchData);
// router.get("/TotalNumberOfPendingRecharge", TotalNumberOfPendingRecharge);

//     res.render("index", {
//       title: "Dashboard",
//       currentRoute: req.url
//       // userdata
//       // ludodata,
//       // pooldata,
//       // carromdata
//     });
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     res.render("error", { error: "Failed to fetch data" });
//   }
// });

// gameprice details post api
router.post("/GamePricePost", GamePriceDataController);
router.get("/GamePriceGetwithoutid", GamePriceGetwithoutid);

router.get("/admin_role", (req, res) => {
  res.render("admin_role", { title: "Admin Role", currentRoute: req.url });
});

router.get("/player", async (req, res) => {
  // res.render("player", { title: "Player Master", currentRoute: req.url });
  try {
    // Make a GET request to the GamePriceGet API
    const resp = await axios.get("https://wild-puce-puppy-sock.cyclic.app/UserFetchData");
    const userdata = resp.data;
    res.render("player", {
      title: "Entryfees",
      currentRoute: req.url,
      userdata
    });
  } catch (error) {
    console.error("Error fetching game prices:", error);
    res.render("error", { error: "Failed to fetch game prices" });
  }
});

router.get("/entryfees", (req, res) => {
  res.render("entryfees", { title: "Entryfees", currentRoute: req.url });
});
router.get("/user", async (req, res) => {
  const userId = req.query.id;
  try {
    const paymentHistoryGetdataSingle = await axios.get(
      `https://wild-puce-puppy-sock.cyclic.app/paymentHistoryGetdataSingle/${userId}`
    );
    const paymentHistorydata = paymentHistoryGetdataSingle.data;
    console.log(paymentHistorydata);
    // Fetch user data
    const userDataResponse = await axios.get(
      `https://wild-puce-puppy-sock.cyclic.app/UserPersonalFetchData/${userId}`
    );
    const userdata1 = userDataResponse.data;

    // Fetch game history data
    const gameHistoryResponse = await axios.get(
      `https://wild-puce-puppy-sock.cyclic.app/GameHistoryDataGet/${userId}`
    );
    const gameHistoryData = gameHistoryResponse.data;

    const withdrawget = await axios.get(
      `https://wild-puce-puppy-sock.cyclic.app/withdrawget/${userId}`
    );
    const withdrawdata = withdrawget.data;
    res.render("user", {
      title: "Entryfees",
      currentRoute: req.url,
      userdata1,
      gameHistoryData,
      withdrawdata,
      paymentHistorydata
    });
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.render("error", { error: "Failed to fetch user data" });
  }
});

router.get("/users-profile", (req, res) => {
  res.render("users-profile", {
    title: "Users Profile",
    currentRoute: req.url
  });
});

router.get("/pages-login", (req, res) => {
  res.render("pages-login", { title: "pages-login", currentRoute: req.url });
});

router.get("/pages-register", (req, res) => {
  res.render("pages-register", {
    title: "pages-register",
    currentRoute: req.url
  });
});

router.get("/pages-contact", (req, res) => {
  res.render("pages-contact", { title: "Bonus", currentRoute: req.url });
});

router.get("/Bonus", async (req, res) => {
  try {
    // Make a GET request to the GamePriceGet API
    const response = await axios.get("https://wild-puce-puppy-sock.cyclic.app/referwin_Getdata");
    const referdata = response.data;
    // console.log(gamePrices);
    res.render("Bonus", {
      title: "bonus",
      currentRoute: req.url,
      referdata
    });
  } catch (error) {
    console.error("Error fetching refer bonus data:", error);
    return res.render("error", { error: "Failed to fetch notice data" }); // Add return here
    // res.render("error", { error: "Failed to fetch game prices" });
  }
  // res.render("Bonus", { title: "Bonus", currentRoute: req.url });
});

router.get("/Refer", async (req, res) => {
  try {
    const ReferEarnFixedAmtResponse = await axios.get(
      "https://wild-puce-puppy-sock.cyclic.app/ReferEarnFixedAmtgetData"
    );
    const ReferEarnFixedAmt = ReferEarnFixedAmtResponse.data;

    const ReferEarndataResponse = await axios.get(
      "https://wild-puce-puppy-sock.cyclic.app/ReferErnDataGet"
    );
    const ReferEarndata = ReferEarndataResponse.data;

    res.render("refer", {
      title: "Approval",
      currentRoute: req.url,
      ReferEarndata,
      ReferEarnFixedAmt
    });
  } catch (error) {
    // console.error("Error fetching ImgSlider:", error);
    res.render("error", { error: "Failed to fetch game prices" });
  }
});

router.post("/DeletereReferEarn", DeletereReferEarn);

router.get("/Win_lose", (req, res) => {
  res.render("Win_lose", { title: "Win", currentRoute: req.url });
});

router.get("/slider", async (req, res) => {
  try {
    // Make a GET request to the GamePriceGet API
    const response = await axios.get("https://wild-puce-puppy-sock.cyclic.app/NoticeSliderget");
    const ImgNotice = response.data;
    // console.log(gamePrices);
    res.render("slider", {
      title: "Slider",
      currentRoute: req.url,
      ImgNotice: ImgNotice
    });
  } catch (error) {
    console.error("Error fetching ImgSlider:", error);
    return res.render("error", { error: "Failed to fetch notice data" }); // Add return here
    // res.render("error", { error: "Failed to fetch game prices" });
  }
});

router.get("/tic_re", (req, res) => {
  res.render("tic_re", { title: "Ticket Request", currentRoute: req.url });
});

router.get("/tic_app", (req, res) => {
  res.render("tic_app", { title: "Ticket Approval", currentRoute: req.url });
});
router.get("/ReferWin", async (req, res) => {
  const response = await axios.get(
    "https://wild-puce-puppy-sock.cyclic.app/ReferWinDataFixedAmtgetdata"
  );
  const referwinfixeddata = response.data;
  // console.log(referwinfixeddata);
  const resp = await axios.get("https://wild-puce-puppy-sock.cyclic.app/ReferWinDataGet");
  const referwin = resp.data;
  try {
    res.render("ReferWin", {
      title: "Refer Win",
      currentRoute: req.url,
      referwindata: referwin,
      referwinfixeddata
    });
  } catch (error) {
    console.error("Error fetching ImgSlider:", error);
    return res.render("error", { error: "Failed to fetch notice data" }); // Add return here
    // res.render("error", { error: "Failed to fetch game prices" });
  }
});
router.post("/DeletereReferWin", DeletereReferWin);
// router.get("/Carrom", (req, res) => {
//   res.render("Carrom", { title: "Ticket Approval", currentRoute: req.url });
// });

router.get("/rech_rej", async (req, res) => {
  const resp = await axios.get("https://wild-puce-puppy-sock.cyclic.app/UserFetchData");
  const userdata = resp.data;
  try {
    res.render("rech_rej", {
      title: "Recharge Reject",
      currentRoute: req.url,
      userdata: userdata
    });
  } catch (error) {
    console.error("Error fetching ImgSlider:", error);
    return res.render("error", { error: "Failed to fetch notice data" }); // Add return here
    // res.render("error", { error: "Failed to fetch game prices" });
  }
});

router.get("/rech_pe", async (req, res) => {
  const resp = await axios.get("https://wild-puce-puppy-sock.cyclic.app/UserFetchData");
  const userdata = resp.data;
  try {
    res.render("rech_pe", {
      title: "Recharge Request",
      currentRoute: req.url,
      userdata: userdata
    });
  } catch (error) {
    console.error("Error fetching ImgSlider:", error);
    return res.render("error", { error: "Failed to fetch notice data" }); // Add return here
    // res.render("error", { error: "Failed to fetch game prices" });
  }
});

router.get("/rech_app", async (req, res) => {
  const resp = await axios.get("https://wild-puce-puppy-sock.cyclic.app/UserFetchData");
  const userdata = resp.data;
  console.log(userdata);
  try {
    res.render("rech_app", {
      title: "Recharge Approval",
      currentRoute: req.url,
      userdata: userdata
    });
  } catch (error) {
    console.error("Error fetching ImgSlider:", error);
    return res.render("error", { error: "Failed to fetch notice data" }); // Add return here
    // res.render("error", { error: "Failed to fetch game prices" });
  }
});

router.get("/Ludo", (req, res) => {
  res.render("Ludo", { title: "Ludo", currentRoute: req.url });
});

router.get("/Carrom", async (req, res) => {
  try {
    // Make a GET request to the GamePriceGet API
    const response = await axios.get(
      "https://wild-puce-puppy-sock.cyclic.app/GamePriceGetwithoutid"
    );
    const carromPrices = response.data;
    // console.log(gamePrices);
    res.render("Carrom", {
      title: "Carrom",
      currentRoute: req.url,
      carromPrices
    });
  } catch (error) {
    console.error("Error fetching game prices:", error);
    res.render("error", { error: "Failed to fetch game prices" });
  }
});

router.get("/Slide", async (req, res) => {
  try {
    // Make a GET request to the GamePriceGet API
    const response = await axios.get("https://wild-puce-puppy-sock.cyclic.app/getSliderimg");
    const ImgSlider = response.data;
    // console.log(ImgSlider);
    res.render("Slide", {
      title: "Reject",
      currentRoute: req.url,
      ImgSlider
    });
  } catch (error) {
    // console.error("Error fetching ImgSlider:", error);s
    res.render("error", { error: "Failed to fetch game prices" });
  }
});

router.get("/with_re", async (req, res) => {
  try {
    // Make a GET request to the GamePriceGet API
    const response = await axios.get("https://wild-puce-puppy-sock.cyclic.app/withdrawgetAll");
    const withdrawrequest = response.data;
    // console.log(gamePrices);
    res.render("with_re", {
      title: "Approval",
      currentRoute: req.url,
      withdrawrequest
    });
  } catch (error) {
    // console.error("Error fetching ImgSlider:", error);s
    res.render("error", { error: "Failed to fetch game prices" });
  }
});
router.get("/with_app", async (req, res) => {
  try {
    // Make a GET request to the GamePriceGet API
    const response = await axios.get("https://wild-puce-puppy-sock.cyclic.app/withdrawgetAll");
    const withdrawapprove = response.data;
    res.render("with_app", {
      title: "Approval",
      currentRoute: req.url,
      withdrawapprove
    });
  } catch (error) {
    // console.error("Error fetching ImgSlider:", error);s
    res.render("error", { error: "Failed to fetch game prices" });
  }
});
router.get("/mail", async (req, res) => {
  try {
    // Make a GET request to the GamePriceGet API
    const response = await axios.get(
      "https://wild-puce-puppy-sock.cyclic.app/festivalgetAlldata"
    );
    const festivaldata = response.data;
    // console.log(gamePrices);
    res.render("mail_page", {
      title: "Approval",
      currentRoute: req.url,
      festivaldata
    });
  } catch (error) {
    // console.error("Error fetching ImgSlider:", error);s
    res.render("error", { error: "Failed to fetch game prices" });
  }
});
router.get("/mailBonus", async (req, res) => {
  try {
    // Make a GET request to the GamePriceGet API
    const resp = await axios.get("https://wild-puce-puppy-sock.cyclic.app/MailHistorySchemaData");
    const Mailldatacollection = resp.data;
    const UserFetchData = await axios.get(
      "https://wild-puce-puppy-sock.cyclic.app/UserFetchData"
    );
    const UserFetchDataforMail = UserFetchData.data;
    res.render("mailPageBonus", {
      title: "Approval",
      currentRoute: req.url,
      Mailldatacollection,
      UserFetchDataforMail
    });
  } catch (error) {
    console.error("Error fetching User:", error);
    res.render("error", { error: "Failed to fetch User" });
  }
});
router.get("/SingleMalForUser/:id", async (req, res) => {
  try {
    // Make a GET request to the GamePriceGet API  fetchSingleUserMailData
    const { id } = req.params;

    const fetchSingleUserMailData = await axios.get(
      `https://wild-puce-puppy-sock.cyclic.app/fetchSingleUserMailData/${id}`
    );
    const fetchSingleUserMailDatadetails = fetchSingleUserMailData.data;
    res.render("mailPageBonusSingleUser", {
      title: "Approval",
      currentRoute: req.url,
      fetchSingleUserMailDatadetails
    });
  } catch (error) {
    console.error("Error fetching User:", error);
    res.render("error", { error: "Failed to fetch User" });
  }
});

router.get("/with_rej", async (req, res) => {
  try {
    const response = await axios.get("https://wild-puce-puppy-sock.cyclic.app/withdrawgetAll");
    const withdrawapprove = response.data;
    res.render("with_rej", {
      title: "Approval",
      currentRoute: req.url,
      withdrawapprove
    });
  } catch (error) {
    // console.error("Error fetching ImgSlider:", error);s
    res.render("error", { error: "Failed to fetch game prices" });
  }
});

router.get("/festival", async (req, res) => {
  try {
    const response = await axios.get(
      "https://wild-puce-puppy-sock.cyclic.app/getdailyBonusDatas"
    );
    const dailybonsdatas = response.data;
    // console.log(dailybonsdatas);
    res.render("festival", {
      title: "Approval",
      currentRoute: req.url,
      dailybonsdatas
    });
  } catch (error) {
    // console.error("Error fetching ImgSlider:", error);s
    res.render("error", { error: "Failed to fetch game prices" });
  }
});

router.post("/UserloginData", UserloginData);
// withdrwa reject and request post router

router.post("/withdrowapprovePost", withdrowapprovePost);
router.post("/withdrowrejectPost", withdrowrejectPost);
router.post("/ReferWinDataController", ReferWinDataController);
router.post("/updateotp", updateotp);
router.get("/ReferWinDataGet", ReferWinDataGet);
router.post("/PlayasGuest", PlayasGuest);
router.post("/referwinadmin", referwin);
router.get("/referwin_Getdata", referwin_Getdata);
//bankDetails get and post api
router.post("/BankDetails", BankDetails);
router.get("/BankDetailsgets/:UniqeId", BankDetailsgets);
//UpiDetails get and post api
router.post("/UpiDetails", upiDetails);
router.get("/UpiDetailsgets/:UniqeId", UpiDetailsgets);
//withdraw details post api
router.post("/withdraw", withdraw);
router.get("/withdrawget/:UniqeId", withdrawget);
router.get("/withdrawgetAll", withdrawgetAll);
//gamepricedata delete
router.post("/GamePricePostdelete/:id", GamePricePostdelete);
// DeletereReferWinsecond delete win fixed amount
router.post("/DeletereReferWinsecond", DeletereReferWinsecond);
//DeletereReferEarnfixedData delete earn data
router.post("/DeletereReferEarnfixedData", DeletereReferEarnfixedData);
//payment post api
router.post("/payment", Payment);
//spinner post data api
router.post("/spinnerBonus", SpinnerBonus);
//add admin
router.post("/AddAdmin", AddAdmin);

// update admin
router.post("/users-profile", UploadImgMulter, UpdateAdmin);

//getAdmin
router.get("/AdminData", GetAdminUser);

// change admin password
router.post("/ChangeAdminPassword", ChangeAdminPassword);

//bindingdata form submit
router.post("/BindingData", BindingData);
//delete admin profile img router
router.post("/DeleteAdminImg", DeleteAdminImg);
// gameHistorydata router
// Festival Bonus post Router api
router.post("/FestivalBonus", FestivalBonus);
router.post("/FestivalBonusforuser", FestivalBonusforuser);
//festival row delete
// router.post("/FestivalDelete", FestivalDelete);

// festival Bonus get router api
router.get("/festivalgetAlldata", festivalgetAlldata);
// payment callback url route
router.post("/callback", callbackpayemnt);
//festival Bonus Update post router api
router.post("/FestivalBonusEditInUser", FestivalBonusEdit);
router.post(
  "/FestivalBonusforuserEditInFestival",
  FestivalBonusforuserEditInFestival
);
router.post("/FestivalBonusforuserDelete", FestivalBonusforuserDelete);
router.post("/FestivalBonusDeleter", FestivalBonusDeleter);
//Mail Text Router
router.post("/MailTextData", MailTextData);
//mail single user update
router.post("/MailUpdate", MailUpdate);
//refere Win Fixed Bonus Data
router.post("/ReferEarnFixedAmt", ReferEarnFixedAmt);

router.get("/ReferEarnFixedAmtgetData", ReferEarnFixedAmtgetData);
router.post("/MailForUserData", MailForUserData);
router.post("/MailForHistory", MailForHistory);
//Mail For All uSer Update
router.post("/MailHistoryEditforUser", MailHistoryEditforUser);
router.post("/MailHistoryEdit", MailHistoryEdit);
//post api for delete all user data of mail
router.post("/MailAllUserDelete", MailHistoryDeleteAllUser);
router.post("/MailHistoryDelete", MailHistoryDelete);
//router for get data of single user mail
router.get(
  "/fetchSingleUserMailData/:SingleMailUseredata",
  fetchSingleUserMailData
);
//router for get data of dailybonus
router.get("/DailyDataforfrontenddata", DailyDataforfrontenddata);
//router fro get data of single mail

router.get("/MailHistorySchemaData", MailHistorySchemaData);
//post api for festival clam data from client side router
router.post("/FestivalBonusHistory", FestivalBonusHistory);
//single mail user data Insert User
router.post("/SingleMailPost", SingleMailPost);
//single mail user edit router
router.post("/SingleUserMailEdit", SingleUserMailEdit);
//single mail user delete router
router.post("/deleteSIngleMailUser", deleteSIngleMailUser);
//withdraw router for approv
router.post("/GameHistoryData", GameHistoryData);
//router for  DailBonus post
router.post("/DailyBonusData", DailyBonusData);
//router for  get data from dailyBonusData
router.get("/getdailyBonusDatas", getdailyBonusDatas);
//router to fetch data
router.post("/DailyBonusFetchData", DailyBonusFetchData);
// delete route for daily bonus
router.post("/DeletereferBounsAmount", DeletereferBounsAmount);
//PaymentHistorinsert router for post api
router.post("/PaymentHistorinsert", PaymentHistorinsert);
//payment History Update router post
router.post("/PaymentHistorUpdate", PaymentHistorUpdate);
//payment Historyget router
//payment Historyget router for single user
router.get("/paymentHistoryGetdataSingle/:userId", paymentHistoryGetdataSingle);
router.post("/justcheck", justchekck);
//ReferErnData router post api
router.post("/ReferErnData", ReferErnData);
// router ReferErnDataGet for get data
router.get("/ReferErnDataGet", ReferErnDataGet);
//ReferWinDataFixedAmt  refer win fixed amout
router.post("/ReferWinDataFixedAmt", ReferWinDataFixedAmt);

router.get("/ReferWinDataFixedAmtgetdata", ReferWinDataFixedAmtgetdata);
router.get("/getimg", geimg);
router.get("/GameHistoryDataGet/:id", GameHistoryDataGet);

router.post("/uploadimg", UploadImgMulter1, imgaesupload);
router.get("/getSliderimg", getSliderImages);
router.post("/SliderimgDelete", deleteSliderImage);
router.post("/updateSlider", UploadImgMulter1, updateSlider);
router.post("/send-otp", sendOTP);

router.post("/NoticeSlider", UploadImgMulter2, imgaesuploadNotice);
// editname of user post api
router.post("/editname", EditName);
router.get("/NoticeSliderget", getNoticeImages);
router.post("/NoticeDelteImg", deletEeNoticeImage);
router.post("/NoticeUpdateImg", UploadImgMulter2, updateNotice);
router.post('/validate-binding',validatebinding)

module.exports = router;
