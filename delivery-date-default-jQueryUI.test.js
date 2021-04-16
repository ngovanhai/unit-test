import {
  minimumDays,
  maximumDays,
  isValid,
  fixedDay,
  checkIsLimitedOrderDay,
  getMinDate,
  increaseDay,
  getListLimitedOrderDays,
  checkIsDisableDays,
  otFormatDate,
  convertOldToNewFormatDate,
  convertDateToEnglish,
  convertDisableDaysToEnglishDate,
  getMinimumDays,
  getCurrentDate,
  calculateEndDay,
  checkForUpdate,
  checkIsHoliday,
  checkIsDayOff,
} from "./delivery-date-default-jQueryUI.js";
import {
  dataTestMiniMumdayAndMaximumDay,
  dataArrayEmpty,
  dataString,
  dataNumber,
  dataObjEmpty,
  dataTestIsValid,
  specificProducts,
  specificCollections,
  settings,
  itemCart,
  currentCollection,
  dataTestFixedDay,
  dataTest_CheckIsLimitedOrderDay,
  dataTestGetMindate,
  DataGetListLimitedOrderDays,
  dataTestCheckisDisableDays,
  dataTestOtFomatDate,
  dataTestConvertOldToNewFormatDate,
  dataTestConvertDateToEnglish,
  dataTestConvertDisableDaysToEnglishDate,
  dataTestGetMinimumDays,
  dataTestGetCurrentDate,
  DataCalculateEndDay,
  boolenTrue,
  boolenFalse,
  dataTestCheckForUpdate,
  dataUnderfined,
  dataNumberNegative,
  dataTestIncreaseDay,
  dataTestCalculateEndDay,
  dataTestHoliday,
  DataTestCheckIsDayOff,
} from "./dataTest.js";
const expect = chai.expect;
describe("function minimumDays() class FormProduct", () => {
  it("The resultult returns 3 if there exist specific_Products and current_Product", () => {
    const res = minimumDays(
      dataTestMiniMumdayAndMaximumDay.specificProducts,
      dataTestMiniMumdayAndMaximumDay.currentProduct,
      dataTestMiniMumdayAndMaximumDay.productCollections,
      dataTestMiniMumdayAndMaximumDay.specificCollections
    );
    let expectedOutput = 3;
    chai.assert.equal(expectedOutput, res);
  });

  it("The resultult returns undefined if there is no specific Product or current Product", () => {
    const res = minimumDays(
      dataTestMiniMumdayAndMaximumDay.specificProductsEmpty,
      dataTestMiniMumdayAndMaximumDay.currentProduct,
      dataTestMiniMumdayAndMaximumDay.productCollectionsEmpty,
      dataTestMiniMumdayAndMaximumDay.specificCollections
    );
    let expectedOutput = undefined;
    chai.assert.equal(expectedOutput, res);
  });

  it("The resultult returns 4 if there is no specific Product and current Product", () => {
    const res = minimumDays(
      dataTestMiniMumdayAndMaximumDay.specificProductsEmpty,
      dataTestMiniMumdayAndMaximumDay.currentProduct,
      dataTestMiniMumdayAndMaximumDay.productCollections,
      dataTestMiniMumdayAndMaximumDay.specificCollections
    );
    let expectedOutput = 4;
    chai.assert.equal(expectedOutput, res);
  });
  it("The resultult returns -1 if specificProducts Empty productCollections not exits specificCollections", () => {
    const res = minimumDays(
      dataTestMiniMumdayAndMaximumDay.specificProductsEmpty,
      dataTestMiniMumdayAndMaximumDay.currentProduct,
      dataTestMiniMumdayAndMaximumDay.productCollectionsNotExitsSpecificCollections,
      dataTestMiniMumdayAndMaximumDay.specificCollections
    );
    let expectedOutput = -1;
    chai.assert.equal(expectedOutput, res);
  });
  it("The resultult returns null if specificProducts is Strings", () => {
    const res = minimumDays(
      dataString.string,
      dataTestMiniMumdayAndMaximumDay.currentProduct,
      dataTestMiniMumdayAndMaximumDay.productCollections,
      dataTestMiniMumdayAndMaximumDay.specificCollections
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("The resultult returns null if specificProducts is Number", () => {
    const res = minimumDays(
      dataNumber.interger,
      dataTestMiniMumdayAndMaximumDay.currentProduct,
      dataTestMiniMumdayAndMaximumDay.productCollections,
      dataTestMiniMumdayAndMaximumDay.specificCollections
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("The resultult returns null if currentProduct is Strings", () => {
    const res = minimumDays(
      dataString.string,
      dataTestMiniMumdayAndMaximumDay.currentProduct,
      dataTestMiniMumdayAndMaximumDay.productCollections,
      dataTestMiniMumdayAndMaximumDay.specificCollections
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("The resultult returns null if currentProduct is Number", () => {
    const res = minimumDays(
      dataTestMiniMumdayAndMaximumDay.specificProducts,
      dataNumber.interger,
      dataTestMiniMumdayAndMaximumDay.productCollections,
      dataTestMiniMumdayAndMaximumDay.specificCollections
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("The resultult returns null if currentProduct is Strings", () => {
    const res = minimumDays(
      dataTestMiniMumdayAndMaximumDay.specificProducts,
      dataString.string,
      dataTestMiniMumdayAndMaximumDay.productCollections,
      dataTestMiniMumdayAndMaximumDay.specificCollections
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("The resultult returns null if currentProduct is emptyArray", () => {
    const res = minimumDays(
      dataTestMiniMumdayAndMaximumDay.specificProducts,
      dataArrayEmpty,
      dataTestMiniMumdayAndMaximumDay.productCollections,
      dataTestMiniMumdayAndMaximumDay.specificCollections
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("The resultult returns null if specificProducts.minimumday is Strings", () => {
    const res = minimumDays(
      dataTestMiniMumdayAndMaximumDay.specificProductsMinimumDaysString,
      dataTestMiniMumdayAndMaximumDay.currentProduct,
      dataTestMiniMumdayAndMaximumDay.productCollections,
      dataTestMiniMumdayAndMaximumDay.specificCollections
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("The resultult returns null if specificProducts.minimumday is Negative", () => {
    const res = minimumDays(
      dataTestMiniMumdayAndMaximumDay.specificProductsMinimumDaysIsNegative,
      dataTestMiniMumdayAndMaximumDay.currentProduct,
      dataTestMiniMumdayAndMaximumDay.productCollections,
      dataTestMiniMumdayAndMaximumDay.specificCollections
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("The resultult returns null if  specificProducts empty and productCollections is string", () => {
    const res = minimumDays(
      dataArrayEmpty,
      dataTestMiniMumdayAndMaximumDay.currentProduct,
      dataString.string,
      dataTestMiniMumdayAndMaximumDay.specificCollections
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("The resultult returns null if  specificProducts empty and  productCollections is number", () => {
    const res = minimumDays(
      dataArrayEmpty,
      dataTestMiniMumdayAndMaximumDay.currentProduct,
      dataNumber.interger,
      dataTestMiniMumdayAndMaximumDay.specificCollections
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("The resultult returns null if productCollections is emptyArray", () => {
    const res = minimumDays(
      dataArrayEmpty,
      dataTestMiniMumdayAndMaximumDay.currentProduct,
      dataArrayEmpty,
      dataTestMiniMumdayAndMaximumDay.specificCollections
    );
    let expectedOutput = -1;
    chai.assert.equal(expectedOutput, res);
  });
});
describe("function maximumDays() class FormProduct", () => {
  it("The resultult returns 7 if there exist specific_Products and current_Product", () => {
    const res = maximumDays(
      dataTestMiniMumdayAndMaximumDay.specificProducts,
      dataTestMiniMumdayAndMaximumDay.currentProduct,
      dataTestMiniMumdayAndMaximumDay.productCollections,
      dataTestMiniMumdayAndMaximumDay.specificCollections
    );
    let expectedOutput = 7;
    chai.assert.equal(expectedOutput, res);
  });

  it("The resultult returns undefined if  specificProducts Empty and  productCollections Empty", () => {
    const res = maximumDays(
      dataTestMiniMumdayAndMaximumDay.specificProductsEmpty,
      dataTestMiniMumdayAndMaximumDay.currentProduct,
      dataTestMiniMumdayAndMaximumDay.productCollectionsEmpty,
      dataTestMiniMumdayAndMaximumDay.specificCollections
    );
    let expectedOutput = undefined;
    chai.assert.equal(expectedOutput, res);
  });

  it("The resultult returns 2 if there is no specific Product and current Product", () => {
    const res = maximumDays(
      dataTestMiniMumdayAndMaximumDay.specificProductsEmpty,
      dataTestMiniMumdayAndMaximumDay.currentProduct,
      dataTestMiniMumdayAndMaximumDay.productCollections,
      dataTestMiniMumdayAndMaximumDay.specificCollections
    );
    let expectedOutput = 2;
    chai.assert.equal(expectedOutput, res);
  });

  it("The resultult returns 10 if product have maximunDay = -1", () => {
    const res = maximumDays(
      dataTestMiniMumdayAndMaximumDay.specificProductsIsNegative,
      dataTestMiniMumdayAndMaximumDay.currentProduct,
      dataTestMiniMumdayAndMaximumDay.productCollections,
      dataTestMiniMumdayAndMaximumDay.specificCollections
    );
    let expectedOutput = 10;
    chai.assert.equal(expectedOutput, res);
  });
  let productCollectionsNotExitsSpecificCollections = [238612971692];
  it("The resultult returns -1 if specificProducts Empty productCollections not exits specificCollections", () => {
    const res = maximumDays(
      dataTestMiniMumdayAndMaximumDay.specificProductsEmpty,
      dataTestMiniMumdayAndMaximumDay.currentProduct,
      dataTestMiniMumdayAndMaximumDay.productCollectionsNotExitsSpecificCollections,
      dataTestMiniMumdayAndMaximumDay.specificCollections
    );
    let expectedOutput = -1;
    chai.assert.equal(expectedOutput, res);
  });

  it("The resultult returns null if specificProducts is Strings", () => {
    const res = minimumDays(
      dataString.string,
      dataTestMiniMumdayAndMaximumDay.currentProduct,
      dataTestMiniMumdayAndMaximumDay.productCollections,
      dataTestMiniMumdayAndMaximumDay.specificCollections
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("The resultult returns null if specificProducts is Number", () => {
    const res = minimumDays(
      dataNumber.interger,
      dataTestMiniMumdayAndMaximumDay.currentProduct,
      dataTestMiniMumdayAndMaximumDay.productCollections,
      dataTestMiniMumdayAndMaximumDay.specificCollections
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("The resultult returns null if currentProduct is Strings", () => {
    const res = minimumDays(
      dataString.string,
      dataTestMiniMumdayAndMaximumDay.currentProduct,
      dataTestMiniMumdayAndMaximumDay.productCollections,
      dataTestMiniMumdayAndMaximumDay.specificCollections
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("The resultult returns null if currentProduct is Number", () => {
    const res = minimumDays(
      dataTestMiniMumdayAndMaximumDay.specificProducts,
      dataNumber.interger,
      dataTestMiniMumdayAndMaximumDay.productCollections,
      dataTestMiniMumdayAndMaximumDay.specificCollections
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("The resultult returns null if currentProduct is Strings", () => {
    const res = minimumDays(
      dataTestMiniMumdayAndMaximumDay.specificProducts,
      dataString.string,
      dataTestMiniMumdayAndMaximumDay.productCollections,
      dataTestMiniMumdayAndMaximumDay.specificCollections
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("The resultult returns null if currentProduct is emptyArray", () => {
    const res = minimumDays(
      dataTestMiniMumdayAndMaximumDay.specificProducts,
      dataArrayEmpty,
      dataTestMiniMumdayAndMaximumDay.productCollections,
      dataTestMiniMumdayAndMaximumDay.specificCollections
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("The resultult returns null if specificProducts.minimumday is Strings", () => {
    const res = minimumDays(
      dataTestMiniMumdayAndMaximumDay.specificProductsMinimumDaysString,
      dataTestMiniMumdayAndMaximumDay.currentProduct,
      dataTestMiniMumdayAndMaximumDay.productCollections,
      dataTestMiniMumdayAndMaximumDay.specificCollections
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("The resultult returns null if specificProducts.minimumday is Negative", () => {
    const res = minimumDays(
      dataTestMiniMumdayAndMaximumDay.specificProductsMinimumDaysIsNegative,
      dataTestMiniMumdayAndMaximumDay.currentProduct,
      dataTestMiniMumdayAndMaximumDay.productCollections,
      dataTestMiniMumdayAndMaximumDay.specificCollections
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("The resultult returns null if  specificProducts empty and productCollections is string", () => {
    const res = minimumDays(
      dataArrayEmpty,
      dataTestMiniMumdayAndMaximumDay.currentProduct,
      dataString.string,
      dataTestMiniMumdayAndMaximumDay.specificCollections
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("The resultult returns null if  specificProducts empty and  productCollections is number", () => {
    const res = minimumDays(
      dataArrayEmpty,
      dataTestMiniMumdayAndMaximumDay.currentProduct,
      dataNumber.interger,
      dataTestMiniMumdayAndMaximumDay.specificCollections
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("The resultult returns null if productCollections is emptyArray", () => {
    const res = minimumDays(
      dataArrayEmpty,
      dataTestMiniMumdayAndMaximumDay.currentProduct,
      dataArrayEmpty,
      dataTestMiniMumdayAndMaximumDay.specificCollections
    );
    let expectedOutput = -1;
    chai.assert.equal(expectedOutput, res);
  });
});
describe("function isValid", () => {
  it("The resultult return false if attributes empty , MinimumdayS = 2, IsEmpty = flase", () => {
    const res = isValid(
      dataTestIsValid.attributesEmpty,
      dataTestIsValid.attributeNames,
      dataTestIsValid.MinimumDayS,
      dataTestIsValid.isEmptyFalse
    );
    let expectedOutput = false;
    chai.assert.equal(expectedOutput, res);
  });
  it("The resultult return false if attributes empty MinimumdayS = 2 IsEmpty = true", () => {
    const res = isValid(
      dataTestIsValid.attributesEmpty,
      dataTestIsValid.attributeNames,
      dataTestIsValid.MinimumDayS,
      dataTestIsValid.isEmptyTrue
    );
    let expectedOutput = false;
    chai.assert.equal(expectedOutput, res);
  });
  it("The resultult return false if attributes empty MinimumdayS = 2 IsEmpty = flase", () => {
    const res = isValid(
      dataTestIsValid.attributesEmpty,
      dataTestIsValid.attributeNames,
      dataTestIsValid.MinimumDayS,
      dataTestIsValid.isEmptyFalse
    );
    let expectedOutput = false;
    chai.assert.equal(expectedOutput, res);
  });

  it("The resultult return true if attributes empty MinimumdayS = -1 IsEmpty = flase", () => {
    const res = isValid(
      dataTestIsValid.attributesEmpty,
      dataTestIsValid.attributeNames,
      dataTestIsValid.MinimumDaySUderfined,
      dataTestIsValid.isEmptyFalse
    );
    let expectedOutput = true;
    chai.assert.equal(expectedOutput, res);
  });
  it("The resultult return true if attributes empty MinimumdayS = -1 IsEmpty = true", () => {
    const res = isValid(
      dataTestIsValid.attributesEmpty,
      dataTestIsValid.attributeNames,
      dataTestIsValid.MinimumDaySUderfined,
      dataTestIsValid.isEmptyTrue
    );
    let expectedOutput = true;
    chai.assert.equal(expectedOutput, res);
  });
  it("The resultult return false if attributes  have attributeNames.date and MinimumdayS = 2 IsEmpty = flase", () => {
    const res = isValid(
      dataTestIsValid.attributesHaveAttributeNamesDate,
      dataTestIsValid.attributeNames,
      dataTestIsValid.MinimumDayS,
      dataTestIsValid.isEmptyFalse
    );
    let expectedOutput = false;
    chai.assert.equal(expectedOutput, res);
  });
  it("The resultult return true if attributes  have attributeNames.date and MinimumdayS = -1 IsEmpty = flase", () => {
    const res = isValid(
      dataTestIsValid.attributesHaveAttributeNamesDate,
      dataTestIsValid.attributeNames,
      dataTestIsValid.MinimumDaySUderfined,
      dataTestIsValid.isEmptyFalse
    );
    let expectedOutput = true;
    chai.assert.equal(expectedOutput, res);
  });
  it("The resultult return true if attributes have attributeNames.date and MinimumdayS = -1 IsEmpty = true", () => {
    const res = isValid(
      dataTestIsValid.attributesHaveAttributeNamesDate,
      dataTestIsValid.attributeNames,
      dataTestIsValid.MinimumDaySUderfined,
      dataTestIsValid.isEmptyTrue
    );
    let expectedOutput = true;
    chai.assert.equal(expectedOutput, res);
  });
  it("The resultult return true if attributes have attributeNames.date and MinimumdayS = -1 IsEmpty = true", () => {
    const res = isValid(
      dataTestIsValid.attributesHaveAttributeNamesDate,
      dataTestIsValid.attributeNames,
      dataTestIsValid.MinimumDaySUderfined,
      dataTestIsValid.isEmptyTrue
    );
    let expectedOutput = true;
    chai.assert.equal(expectedOutput, res);
  });

  it("The resultult return true if attributes have attributeNames.date and MinimumdayS = -1 IsEmpty = true ", () => {
    const res = isValid(
      dataTestIsValid.attributesHaveAttributeNamesDateString,
      dataTestIsValid.attributeNames,
      dataTestIsValid.MinimumDaySUderfined,
      dataTestIsValid.isEmptyTrue
    );
    let expectedOutput = true;
    chai.assert.equal(expectedOutput, res);
  });
  it("The resultult return true if attributes have attributeNames.date and MinimumdayS = string IsEmpty = true ", () => {
    const res = isValid(
      dataTestIsValid.attributesHaveAttributeNamesDateString,
      dataTestIsValid.attributeNames,
      dataString.string,
      dataTestIsValid.isEmptyTrue
    );
    let expectedOutput = true;
    chai.assert.equal(expectedOutput, res);
  });
});
describe("function fixedDay()", () => {
  var clock = sinon.useFakeTimers(
    new Date("Tue Apr 13 2021 09:07:50 GMT+0700 (Giờ Đông Dương)")
  );
  let now = new Date();
  it(`The resultult return new Date() = ${now} if  specificProducts = [] and specificCollections = [] `, () => {
    let res = fixedDay(
      itemCart,
      dataArrayEmpty,
      dataArrayEmpty,
      settings,
      currentCollection
    );
    let expectedOutput = new Date();
    res = JSON.stringify(res);
    expectedOutput = JSON.stringify(expectedOutput);
    chai.assert.equal(expectedOutput, res, `== new Date ${expectedOutput}`);
  });
  it(`The resultult return newDate = ${new Date(
    1618632470000
  )} if item cart exits specificProducts ,specificCollections = [] , kind_of_delivery_date = shortest`, () => {
    let res = fixedDay(
      itemCart,
      specificProducts,
      dataArrayEmpty,
      dataTestFixedDay.settingsShortest.settings,
      currentCollection
    );
    let expectedOutput = new Date(1618632470000);
    res = JSON.stringify(res);
    expectedOutput = JSON.stringify(expectedOutput);
    chai.assert.equal(expectedOutput, res);
  });
  it(`The resultult return newDate = ${new Date(
    1618279670000
  )} if item cart exits specificProducts ,specificCollections = [] , kind_of_delivery_date = longest`, () => {
    let res = fixedDay(
      itemCart,
      specificProducts,
      dataArrayEmpty,
      dataTestFixedDay.settingsLongest.settings,
      currentCollection
    );
    let expectedOutput = new Date(1618279670000);
    res = JSON.stringify(res);
    expectedOutput = JSON.stringify(expectedOutput);
    chai.assert.equal(expectedOutput, res);
  });
  it(`The resultult return newDate = ${new Date(
    1618765200000
  )} if itemCart = [] ,currentCollection exits  specificCollections  , kind_of_delivery_date = longest`, () => {
    let res = fixedDay(
      dataArrayEmpty,
      specificProducts,
      specificCollections,
      dataTestFixedDay.settingsLongest.settings,
      currentCollection
    );
    let expectedOutput = new Date(1618765200000);
    res = JSON.stringify(res);
    expectedOutput = JSON.stringify(expectedOutput);
    chai.assert.equal(expectedOutput, res);
  });
  it(`The resultult return newDate =  ${new Date(
    1619024400000
  )} if itemCart = [] ,currentCollection exits  specificCollections  , kind_of_delivery_date = shortest`, () => {
    let res = fixedDay(
      dataArrayEmpty,
      specificProducts,
      specificCollections,
      dataTestFixedDay.settingsShortest.settings,
      currentCollection
    );
    let expectedOutput = new Date(1619024400000);
    res = JSON.stringify(res);
    expectedOutput = JSON.stringify(expectedOutput);
    chai.assert.equal(expectedOutput, res);
  });
  it(`The resultult return newDate =  ${new Date(
    1619024400000
  )} if itemCart,currentCollection exits specificProducts, specificCollections,  kind_of_delivery_date = shortest`, () => {
    let res = fixedDay(
      itemCart,
      specificProducts,
      specificCollections,
      dataTestFixedDay.settingsShortest.settings,
      currentCollection
    );
    let expectedOutput = new Date(1619024400000);
    res = JSON.stringify(res);
    expectedOutput = JSON.stringify(expectedOutput);
    chai.assert.equal(expectedOutput, res);
  });
  it(`The resultult return newDate = ${new Date(
    1618279670000
  )} if itemCart,currentCollection exits specificProducts, specificCollections,  kind_of_delivery_date = longest`, () => {
    let res = fixedDay(
      itemCart,
      specificProducts,
      specificCollections,
      dataTestFixedDay.settingsLongest.settings,
      currentCollection
    );
    let expectedOutput = new Date(1618279670000);
    res = JSON.stringify(res);
    expectedOutput = JSON.stringify(expectedOutput);
    chai.assert.equal(expectedOutput, res);
  });
  it(`The resultult return null if specificProducts is number`, () => {
    let res = fixedDay(
      itemCart,
      dataNumber,
      specificCollections,
      dataTestFixedDay.settingsLongest.settings,
      currentCollection
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it(`The resultult return null if specificProducts is string`, () => {
    let res = fixedDay(
      itemCart,
      dataString,
      specificCollections,
      dataTestFixedDay.settingsLongest.settings,
      currentCollection
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it(`The resultult return null if specificCollections is number`, () => {
    let res = fixedDay(
      itemCart,
      specificProducts,
      dataNumber,
      dataTestFixedDay.settingsLongest.settings,
      currentCollection
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it(`The resultult return null if specificCollections is string`, () => {
    let res = fixedDay(
      itemCart,
      specificProducts,
      dataString,
      dataTestFixedDay.settingsLongest.settings,
      currentCollection
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it(`The resultult return null if specificCollections is string`, () => {
    let res = fixedDay(
      itemCart,
      specificProducts,
      dataString,
      dataTestFixedDay.settingsLongest.settings,
      currentCollection
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it(`The resultult return null if specificCollections is string`, () => {
    let res = fixedDay(
      itemCart,
      specificProducts,
      dataString,
      dataTestFixedDay.settingsLongest.settings,
      currentCollection
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it(`The resultult return null if settings.kind_of_delivery_date is string`, () => {
    let res = fixedDay(
      itemCart,
      specificProducts,
      dataString,
      dataString,
      currentCollection
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it(`The resultult return null if settings.kind_of_delivery_date is number`, () => {
    let res = fixedDay(
      itemCart,
      specificProducts,
      dataString,
      dataNumber,
      currentCollection
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it(`The resultult return  null if cart item is Number`, () => {
    let res = fixedDay(
      dataNumber,
      specificProducts,
      specificCollections,
      settings,
      currentCollection
    );
    let expectedOutput = null;
    res = JSON.stringify(res);
    chai.assert.equal(expectedOutput, res);
  });
  it(`The resultult return  null if cart item is strings`, () => {
    let res = fixedDay(
      dataString,
      specificProducts,
      specificCollections,
      settings,
      currentCollection
    );
    let expectedOutput = null;
    res = JSON.stringify(res);
    chai.assert.equal(expectedOutput, res);
  });
  it(`The resultult return null if  specificProducts = [] specificCollections.fixed_day_start is string `, () => {
    let res = fixedDay(
      itemCart,
      dataArrayEmpty,
      dataTestFixedDay.specificCollections_FixedDaystartString,
      settings,
      currentCollection
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it(`The resultult return null if  specificProducts = [] specificCollections.fixed_day_start wrong date format `, () => {
    let res = fixedDay(
      itemCart,
      dataArrayEmpty,
      dataTestFixedDay.specificCollections_FixedDaystart_WrongDateFormat,
      settings,
      currentCollection
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });

  it(`The resultult return null if specificCollections = [] , specificProducts.fixed_day_start is strings `, () => {
    let res = fixedDay(
      itemCart,
      dataTestFixedDay.specificProducts_FixedDaystartString,
      dataArrayEmpty,
      settings,
      currentCollection
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it(`The resultult return null if specificCollections = [] , specificProducts.fixed_day_start wrong date format`, () => {
    let res = fixedDay(
      itemCart,
      dataTestFixedDay.specificProducts_FixedDaystartString_WrongDateFormat,
      dataArrayEmpty,
      settings,
      currentCollection
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
});
describe("function checkIsLimitedOrderDay()", () => {
  it("The resultult return true if date exits limitedOrderDays", () => {
    let res = checkIsLimitedOrderDay(
      dataTest_CheckIsLimitedOrderDay.limit.date,
      dataTest_CheckIsLimitedOrderDay.limit.limitedOrderDays
    );
    let expectedOutput = true;
    chai.assert.equal(expectedOutput, res);
  });
  it("The resultult return false if date not exits limitedOrderDays", () => {
    let res = checkIsLimitedOrderDay(
      dataTest_CheckIsLimitedOrderDay.notLimit.date,
      dataTest_CheckIsLimitedOrderDay.notLimit.limitedOrderDays
    );
    let expectedOutput = false;
    chai.assert.equal(expectedOutput, res);
  });
  it("The resultult return null if date is strings ", () => {
    let res = checkIsLimitedOrderDay(
      dataString,
      dataTest_CheckIsLimitedOrderDay.notLimit.limitedOrderDays
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("The resultult return null if date is number ", () => {
    let res = checkIsLimitedOrderDay(
      dataNumber,
      dataTest_CheckIsLimitedOrderDay.notLimit.limitedOrderDays
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("The resultult return null if LimitOrder is number ", () => {
    let res = checkIsLimitedOrderDay(
      dataTest_CheckIsLimitedOrderDay.limit.date,
      dataNumber
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("The resultult return null if LimitOrder is string ", () => {
    let res = checkIsLimitedOrderDay(
      dataTest_CheckIsLimitedOrderDay.limit.date,
      dataString
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("The resultult return null if LimitOrder is array empty ", () => {
    let res = checkIsLimitedOrderDay(
      dataTest_CheckIsLimitedOrderDay.limit.date,
      dataArrayEmpty
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
});
describe("function getMindate()", () => {
  var clock = sinon.useFakeTimers(
    new Date("Tue Apr 13 2021 09:07:50 GMT+0700 (Giờ Đông Dương)")
  );
  it(`The resultult return ${new Date(
    new Date().setHours(0, 0, 0, 0)
  )} if date exits limitedOrderDays`, () => {
    let res = getMinDate(dataTestGetMindate.disableDays);
    let expectedOutput = new Date(new Date().setHours(0, 0, 0, 0));
    res = JSON.stringify(res);
    expectedOutput = JSON.stringify(expectedOutput);
    chai.assert.equal(expectedOutput, res);
  });
  it(`The resultult return ${new Date(
    new Date().setHours(0, 0, 0, 0)
  )} if date exits disableDays empty`, () => {
    let res = getMinDate(dataArrayEmpty);
    let expectedOutput = new Date(new Date().setHours(0, 0, 0, 0));
    res = JSON.stringify(res);
    expectedOutput = JSON.stringify(expectedOutput);
    chai.assert.equal(expectedOutput, res);
  });
  const inCeadays = increaseDay(new Date(new Date().setHours(0, 0, 0, 0)), 1);
  it(`The resultult return ${inCeadays} if  day equal disableDay`, () => {
    let res = getMinDate(dataTestGetMindate.disableDaysEqualDay).getTime();
    let expectedOutput = inCeadays.getTime();
    chai.assert.equal(expectedOutput, res);
  });
  it(`The resultult return null if date exits disableDays is Strings`, () => {
    let res = getMinDate(dataString);
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it(`The resultult return null if date exits disableDays is interger`, () => {
    let res = getMinDate(dataNumber.interger);
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it(`The resultult return null if date exits disableDays is negative`, () => {
    let res = getMinDate(dataNumber.negative);
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });

  it(`The resultult return null if date exits disableDays wrong fomat date `, () => {
    let res = getMinDate(dataTestGetMindate.disableDaysWrongFomatDate);
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
});
describe("function getListLimitedOrderDays() ", () => {
  it("the resultult [] if  totalOrders is empty", () => {
    let res = getListLimitedOrderDays(
      dataArrayEmpty,
      DataGetListLimitedOrderDays.settings
    ).length;
    let expectedOutput = [];
    expectedOutput = expectedOutput.length;
    chai.assert.equal(expectedOutput, res);
  });
  it("the resultult [] if  totalOrders is number", () => {
    let res = getListLimitedOrderDays(
      dataNumber,
      DataGetListLimitedOrderDays.settings
    ).length;
    let expectedOutput = [];
    expectedOutput = expectedOutput.length;
    chai.assert.equal(expectedOutput, res);
  });
  it("the resultult [] if  totalOrders is strings", () => {
    let res = getListLimitedOrderDays(
      dataString,
      DataGetListLimitedOrderDays.settings
    ).length;
    let expectedOutput = [];
    expectedOutput = expectedOutput.length;
    chai.assert.equal(expectedOutput, res);
  });
  it("the resultult 1 if  totalOrders is totalOrders isArray totalOrders > 0", () => {
    let res = getListLimitedOrderDays(
      DataGetListLimitedOrderDays.totalOrders,
      DataGetListLimitedOrderDays.settings
    ).length;
    let expectedOutput = 1;
    chai.assert.equal(expectedOutput, res);
  });
  it("the resultult [] if Wrong_delivery_date", () => {
    let res = getListLimitedOrderDays(
      DataGetListLimitedOrderDays.totalOrdersWrongDeliveryDate,
      DataGetListLimitedOrderDays.settings
    ).length;
    let expectedOutput = 0;
    chai.assert.equal(expectedOutput, res);
  });
  it("the resultult [] if Wrong_delivery_date", () => {
    let res = getListLimitedOrderDays(
      DataGetListLimitedOrderDays.totalOrdersWrongDeliveryDate,
      DataGetListLimitedOrderDays.settings_OderLimit_string
    ).length;
    let expectedOutput = 0;
    chai.assert.equal(expectedOutput, res);
  });
  it("the resultult [] if Wrong_delivery_date", () => {
    let res = getListLimitedOrderDays(
      DataGetListLimitedOrderDays.totalOrdersWrongDeliveryDate,
      DataGetListLimitedOrderDays.settings_OderLimit_negative
    ).length;
    let expectedOutput = 0;
    chai.assert.equal(expectedOutput, res);
  });
});
describe("function checkIsDisableDays() ", () => {
  it("the resultult true if  day exits disableDays", () => {
    let res = checkIsDisableDays(
      dataTestCheckisDisableDays.day,
      dataTestCheckisDisableDays.disableDays
    );
    let expectedOutput = true;
    chai.assert.equal(expectedOutput, res);
  });

  it("the resultult false if  day not exits disableDays", () => {
    let res = checkIsDisableDays(
      dataTestCheckisDisableDays.dayNotExitsDisableDays,
      dataTestCheckisDisableDays.disableDays
    );
    let expectedOutput = false;
    chai.assert.equal(expectedOutput, res);
  });

  it("the resultult false if  day not exits disableDays , disableDays is number", () => {
    let res = checkIsDisableDays(
      dataTestCheckisDisableDays.dayNotExitsDisableDays,
      dataNumber.interger
    );
    let expectedOutput = false;
    chai.assert.equal(expectedOutput, res);
  });
  it("the resultult false if  day not exits disableDays , disableDays is strings", () => {
    let res = checkIsDisableDays(
      dataTestCheckisDisableDays.dayNotExitsDisableDays,
      dataString.string
    );
    let expectedOutput = false;
    chai.assert.equal(expectedOutput, res);
  });
  it("the resultult false if  day not exits disableDays , disableDays = -1", () => {
    let res = checkIsDisableDays(
      dataTestCheckisDisableDays.dayNotExitsDisableDays,
      dataNumber.negative
    );
    let expectedOutput = false;
    chai.assert.equal(expectedOutput, res);
  });
  it("the resultult false if  day not exits disableDays , disableDays = []", () => {
    let res = checkIsDisableDays(
      dataTestCheckisDisableDays.dayNotExitsDisableDays,
      dataNumber.negative
    );
    let expectedOutput = false;
    chai.assert.equal(expectedOutput, res);
  });
  it("the resultult false if  day is disableDays empty", () => {
    let res = checkIsDisableDays(
      dataTestCheckisDisableDays.day,
      dataArrayEmpty
    );
    let expectedOutput = false;
    chai.assert.equal(expectedOutput, res);
  });
  it("the resultult false if  day is Number", () => {
    let res = checkIsDisableDays(
      dataNumber,
      dataTestCheckisDisableDays.disableDays
    );
    let expectedOutput = false;
    chai.assert.equal(expectedOutput, res);
  });
  it("the resultult false if  day is strings", () => {
    let res = checkIsDisableDays(
      dataString.string,
      dataTestCheckisDisableDays.disableDays
    );
    let expectedOutput = false;
    chai.assert.equal(expectedOutput, res);
  });
  it("the resultult false if  disableDays is empty", () => {
    let res = checkIsDisableDays(
      dataTestCheckisDisableDays.day,
      dataArrayEmpty
    );
    let expectedOutput = false;
    chai.assert.equal(expectedOutput, res);
  });
  it("the resultult false if  disableDays is not array", () => {
    let res = checkIsDisableDays(dataTestCheckisDisableDays.day, dataNumber);
    let expectedOutput = false;
    chai.assert.equal(expectedOutput, res);
  });
});
describe("function otFomatDate()", () => {
  it("the resultult 2021-10-05 if  date = 10/5/2021", () => {
    let res = otFormatDate(dataTestOtFomatDate.date1);
    let expectedOutput = "2021-10-05";
    chai.assert.equal(expectedOutput, res);
  });
  it("the resultult 2021-10-21 if  date = 2021/10/21", () => {
    let res = otFormatDate(dataTestOtFomatDate.date2);
    let expectedOutput = "2021-10-21";
    chai.assert.equal(expectedOutput, res);
  });
  it("the resultult null if  date = 10112021", () => {
    let res = otFormatDate(dataTestOtFomatDate.date3);
    let expectedOutput = "2021-10-21";
    chai.assert.equal(expectedOutput, res);
  });
  it("the resultult 2021-04-01 if  disableDays is strings", () => {
    let res = otFormatDate(dataTestOtFomatDate.date4);
    let expectedOutput = "2021-04-01";
    chai.assert.equal(expectedOutput, res);
  });

  it("the resultult null if  date  = 32/5/2021", () => {
    let res = otFormatDate(dataTestOtFomatDate.date5);
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });

  it("the resultult null if  date  = -1/5/2021", () => {
    let res = otFormatDate(dataTestOtFomatDate.date6);
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("the resultult null if  date  = 11/-1/2021", () => {
    let res = otFormatDate(dataTestOtFomatDate.date7);
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("the resultult null if  date  = 11/13/-1", () => {
    let res = otFormatDate(dataTestOtFomatDate.date9);
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("the resultult null if  date  = string/13/-1", () => {
    let res = otFormatDate(dataTestOtFomatDate.date10);
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("the resultult null if  date  = string/13/-1", () => {
    let res = otFormatDate(dataTestOtFomatDate.date11);
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("the resultult null if  date  = 10/10/string", () => {
    let res = otFormatDate(dataTestOtFomatDate.date12);
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("the resultult null if  date  = number", () => {
    let res = otFormatDate(dataNumber);
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("the resultult null if  disableDays is strings", () => {
    let res = otFormatDate(dataString.string);
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
});
describe("function convertOldToNewFormatDate()", () => {
  it("the resultult  4-14-2021 if  date = 2021-04-14T02:56:07.073Z", () => {
    let res = convertOldToNewFormatDate(
      dataTestConvertOldToNewFormatDate.date5
    );
    let expectedOutput = "4-14-2021";
    chai.assert.equal(expectedOutput, res);
  });
  it("the resultult 4-14-2021 if  date = 4-14-2021", () => {
    let res = convertOldToNewFormatDate(
      dataTestConvertOldToNewFormatDate.date3
    );
    let expectedOutput = "4-14-2021";
    chai.assert.equal(expectedOutput, res);
  });
  it("the resultult null if  date = 10/5/2021", () => {
    let res = convertOldToNewFormatDate(
      dataTestConvertOldToNewFormatDate.date1
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("the resultult  date null if  date = 2021-13-14T02:56:07.073Z", () => {
    let res = convertOldToNewFormatDate(
      dataTestConvertOldToNewFormatDate.date6
    );
    let expectedOutput = "4-14-2021";
    chai.assert.equal(expectedOutput, res);
  });
  it("the resultult  date null if  date = 2021-string-14T02:56:07.073Z", () => {
    let res = convertOldToNewFormatDate(
      dataTestConvertOldToNewFormatDate.date7
    );
    let expectedOutput = "4-14-2021";
    chai.assert.equal(expectedOutput, res);
  });
  it("the resultult  date null if  date = 2021-04-32T02:56:07.073Z", () => {
    let res = convertOldToNewFormatDate(
      dataTestConvertOldToNewFormatDate.date8
    );
    let expectedOutput = "4-14-2021";
    chai.assert.equal(expectedOutput, res);
  });
  it("the resultult  date null if  date = 2021-04-stringT02:56:07.073Z", () => {
    let res = convertOldToNewFormatDate(
      dataTestConvertOldToNewFormatDate.date9
    );
    let expectedOutput = "4-14-2021";
    chai.assert.equal(expectedOutput, res);
  });
  it("the resultult null  if  date = 10/5/2021", () => {
    let res = convertOldToNewFormatDate(
      dataTestConvertOldToNewFormatDate.date2
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("the resultult null if  date = 10112021", () => {
    let res = convertOldToNewFormatDate(
      dataTestConvertOldToNewFormatDate.date4
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
});
describe("function convertDateToEnglish()", () => {
  it('the resultult 2021-04-25 if  source = new Date("Sat Apr 25 2021 00:00:00 GMT+0700 (Indochina Time)")', () => {
    let res = convertDateToEnglish(
      dataTestConvertDateToEnglish.source,
      dataTestConvertDateToEnglish.settings1
    );
    let expectedOutput = "2021-04-25";
    chai.assert.equal(expectedOutput, res);
  });
  it("the resultult undefined if  source = number", () => {
    let res = convertDateToEnglish(
      dataNumber,
      dataTestConvertDateToEnglish.settings1
    );
    let expectedOutput = undefined;
    chai.assert.equal(expectedOutput, res);
  });
  it("the resultult undefined if  source = string", () => {
    let res = convertDateToEnglish(
      dataString.string,
      dataTestConvertDateToEnglish.settings1
    );
    let expectedOutput = undefined;
    chai.assert.equal(expectedOutput, res);
  });
  it("the resultult undefined if  source = string", () => {
    let res = convertDateToEnglish(
      dataString.string,
      dataTestConvertDateToEnglish.settings1
    );
    let expectedOutput = undefined;
    chai.assert.equal(expectedOutput, res);
  });
  it("the resultult undefined if  source = settings_calendarLanguage wrong fomat", () => {
    let res = convertDateToEnglish(
      dataTestConvertDateToEnglish.source,
      dataTestConvertDateToEnglish.settings_calendarLanguage_negative
    );
    let expectedOutput = undefined;
    chai.assert.equal(expectedOutput, res);
  });
});
describe("function convertDisableDaysToEnglishDate()", () => {
  it('the resultult Wed, 14 Apr 2021 00:00:00 GMT if disableDays = ["2021-04-14T02:56:07.073Z"]', () => {
    let res = convertDisableDaysToEnglishDate(
      dataTestConvertDisableDaysToEnglishDate.disableDays
    ).length;
    let expectedOutput = 1;
    chai.assert.equal(expectedOutput, res);
  });
  it("the resultult [] if disableDays is array empty", () => {
    let res = convertDisableDaysToEnglishDate(dataArrayEmpty).length;
    let expectedOutput = 0;
    chai.assert.equal(expectedOutput, res);
  });
  it('the resultult [] if disableDays = ["202104-14T02:56:07.073Z"] wrong fomat date', () => {
    let res = convertDisableDaysToEnglishDate(
      dataTestConvertDisableDaysToEnglishDate.disableDays1
    ).length;
    let expectedOutput = 0;
    chai.assert.equal(expectedOutput, res);
  });
  it('the resultult [] if disableDays = ["2021-14-14T02:56:07.073Z"] wrong fomat date', () => {
    let res = convertDisableDaysToEnglishDate(
      dataTestConvertDisableDaysToEnglishDate.disableDays2
    ).length;
    let expectedOutput = 0;
    chai.assert.equal(expectedOutput, res);
  });
  it("the resultult [] if disableDays is number", () => {
    let res = convertDisableDaysToEnglishDate(dataNumber).length;
    let expectedOutput = 0;
    chai.assert.equal(expectedOutput, res);
  });
  it("the resultult [] if disableDays is strings", () => {
    let res = convertDisableDaysToEnglishDate(dataString.string).length;
    let expectedOutput = 0;
    chai.assert.equal(expectedOutput, res);
  });
});

describe("function getMinimumdays", () => {
  it('the resultult 4 if defaultMinDays = 4 ,all day workingDay ,currentDate = new Date("Wed Apr 14 2021 15:10:24 GMT+0700 (Indochina Time)"),', () => {
    let res = getMinimumDays(
      dataTestGetMinimumDays.defaultMinDays,
      dataTestGetMinimumDays.sameDayEnable,
      dataTestGetMinimumDays.workingDay,
      dataTestGetMinimumDays.currentDate,
      dataTestGetMinimumDays.settings
    );
    let expectedOutput = 4;
    chai.assert.equal(expectedOutput, res);
  });
  it('the resultult 5 if defaultMinDays = 4 ,all day workingDay ,currentDate = new Date("Wed Apr 14 2021 15:10:24 GMT+0700 (Indochina Time)"),enableCheckCutoffTime = -1,', () => {
    let res = getMinimumDays(
      dataTestGetMinimumDays.defaultMinDays,
      dataTestGetMinimumDays.sameDayEnable,
      dataTestGetMinimumDays.workingDay,
      dataTestGetMinimumDays.currentDate,
      dataNumberNegative
    );
    let expectedOutput = 5;
    chai.assert.equal(expectedOutput, res);
  });
  it('the resultult 5 if defaultMinDays = 4 ,all day workingDay ,currentDate = new Date("Wed Apr 14 2021 15:10:24 GMT+0700 (Indochina Time)"),enableCheckCutoffTime = string,', () => {
    let res = getMinimumDays(
      dataTestGetMinimumDays.defaultMinDays,
      dataTestGetMinimumDays.sameDayEnable,
      dataTestGetMinimumDays.workingDay,
      dataTestGetMinimumDays.currentDate,
      dataString.string
    );
    let expectedOutput = 5;
    chai.assert.equal(expectedOutput, res);
  });
  it('the resultult 5 if defaultMinDays = 4 ,all day workingDay ,currentDate = new Date("Wed Apr 14 2021 15:10:24 GMT+0700 (Indochina Time)"),enableCheckCutoffTime = 999999999999999999,', () => {
    let res = getMinimumDays(
      dataTestGetMinimumDays.defaultMinDays,
      dataTestGetMinimumDays.sameDayEnable,
      dataTestGetMinimumDays.workingDay,
      dataTestGetMinimumDays.currentDate,
      dataNumber.bigInt
    );
    let expectedOutput = 5;
    chai.assert.equal(expectedOutput, res);
  });
  it('the resultult 5 if defaultMinDays = 4 ,1 day not workingDay and Specific inc = 1 and Inc = 1 ,currentDate = new Date("Wed Apr 14 2021 15:10:24 GMT+0700 (Indochina Time)"),', () => {
    let res = getMinimumDays(
      dataTestGetMinimumDays.defaultMinDays,
      dataTestGetMinimumDays.sameDayEnable,
      dataTestGetMinimumDays.workingDay2,
      dataTestGetMinimumDays.currentDate,
      dataTestGetMinimumDays.settings
    );
    let expectedOutput = 5;
    chai.assert.equal(expectedOutput, res);
  });
  it('the resultult 5 if defaultMinDays = 4 ,1 day not workingDay and Specific inc = 1 and Inc = 1 ,currentDate = new Date("Wed Apr 14 2021 15:10:24 GMT+0700 (Indochina Time)"),', () => {
    let res = getMinimumDays(
      dataTestGetMinimumDays.defaultMinDays,
      dataTestGetMinimumDays.sameDayEnable,
      dataTestGetMinimumDays.workingDay2,
      dataTestGetMinimumDays.currentDate,
      dataTestGetMinimumDays.settings
    );
    let expectedOutput = 5;
    chai.assert.equal(expectedOutput, res);
  });
  it("the resultult null if defaultMinDays is strings", () => {
    let res = getMinimumDays(
      dataString.string,
      dataTestGetMinimumDays.sameDayEnable,
      dataTestGetMinimumDays.workingDay2,
      dataTestGetMinimumDays.currentDate,
      dataTestGetMinimumDays.settings
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("the resultult null if defaultMinDays = -1", () => {
    let res = getMinimumDays(
      dataString.string,
      dataTestGetMinimumDays.sameDayEnable,
      dataTestGetMinimumDays.workingDay2,
      dataTestGetMinimumDays.currentDate,
      dataTestGetMinimumDays.settings
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("the resultult 4 if defaultMinDays = 4 , workingDay = []", () => {
    let res = getMinimumDays(
      dataString.string,
      dataTestGetMinimumDays.sameDayEnable,
      dataArrayEmpty,
      dataTestGetMinimumDays.currentDate,
      dataTestGetMinimumDays.settings
    );
    let expectedOutput = 4;
    chai.assert.equal(expectedOutput, res);
  });
  it("the resultult null if defaultMinDays = 4 , workingDay is number", () => {
    let res = getMinimumDays(
      dataString.string,
      dataTestGetMinimumDays.sameDayEnable,
      dataNumber,
      dataTestGetMinimumDays.currentDate,
      dataTestGetMinimumDays.settings
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("the resultult null if defaultMinDays = 4 , wrong fomat date", () => {
    let res = getMinimumDays(
      dataString.string,
      dataTestGetMinimumDays.sameDayEnable,
      dataNumber,
      dataNumber,
      dataTestGetMinimumDays.settings
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
});
describe("function getCurentDate", () => {
  const clock = sinon.useFakeTimers(
    new Date("Tue Apr 13 2021 00:00:00 GMT+07:00 (Giờ Đông Dương)")
  );
  it(`the resultult is = ${new Date()} if fixedDay = new Date() ,timezone = "Default customer timezone"`, () => {
    let res = getCurrentDate(
      dataTestGetCurrentDate.fixedDay,
      dataTestGetCurrentDate.settings_date_timezone_EuropeLondon
    ).getTime();
    let expectedOutput = new Date().getTime();
    chai.assert.equal(expectedOutput, res);
  });
  it(`the resultult is = ${new Date()} if fixedDay = new Date() ,timezone = "Europe/London"`, () => {
    let res = getCurrentDate(
      dataTestGetCurrentDate.fixedDay,
      dataTestGetCurrentDate.settings_date_timezone_EuropeLondon
    ).getTime();
    let expectedOutput = new Date().getTime();
    chai.assert.equal(expectedOutput, res);
  });
  it(`the resultult is = ${new Date()} if fixedDay = new Date() ,timezone = ""`, () => {
    let res = getCurrentDate(
      dataTestGetCurrentDate.fixedDay,
      dataTestGetCurrentDate.settings_date_timezone_EuropeLondon
    ).getTime();
    let expectedOutput = new Date().getTime();
    chai.assert.equal(expectedOutput, res);
  });
  it(`the resultult Mon Apr 12 2021 06:00:00 GMT+0700 if fixedDay = new Date() ,timezone = "Pacific/Niue: (GMT-11:00) Niue"`, () => {
    let res = getCurrentDate(
      dataTestGetCurrentDate.fixedDay,
      dataTestGetCurrentDate.settings_date_timezone_pacific_Niue
    ).getTime();
    let expectedOutput = new Date(
      "Mon Apr 12 2021 06:00:00 GMT+0700"
    ).getTime();
    chai.assert.equal(expectedOutput, res);
  });

  it(`the resultult Mon Apr 12 2021 07:00:00 GMT+0700 if fixedDay = new Date() ,timezone = "Pacific/Niue: (GMT-10:00) Niue"`, () => {
    let res = getCurrentDate(
      dataTestGetCurrentDate.fixedDay,
      dataTestGetCurrentDate.settings_date_timezone_PacificHonolulu
    ).getTime();
    let expectedOutput = new Date(
      "Mon Apr 12 2021 07:00:00 GMT+0700"
    ).getTime();
    chai.assert.equal(expectedOutput, res);
  });
  it(`the resultult Mon Apr 12 2021 07:30:00 GMT+0700 if fixedDay = new Date() ,timezone = "Pacific/Marquesas": "(GMT-09:30) Marquesas"`, () => {
    let res = getCurrentDate(
      dataTestGetCurrentDate.fixedDay,
      dataTestGetCurrentDate.settings_date_timezone_pacific_Marquesas
    ).getTime();
    let expectedOutput = new Date(
      "Mon Apr 12 2021 07:30:00 GMT+0700"
    ).getTime();
    chai.assert.equal(expectedOutput, res);
  });
  it(`the resultult Mon Apr 12 2021 12:30:00 GMT+0700 if fixedDay = new Date() ,timezone = "Pacific/Easter: (GMT-05:00) Easter Island"`, () => {
    let res = getCurrentDate(
      dataTestGetCurrentDate.fixedDay,
      dataTestGetCurrentDate.settings_date_timezone_PacificEaster
    ).getTime();
    let expectedOutput = new Date(
      "Mon Apr 12 2021 12:00:00 GMT+0700 (Indochina Time)"
    ).getTime();
    chai.assert.equal(expectedOutput, res);
  });

  it(`the resultult Mon Apr 12 2021 12:30:00 GMT+0700 if fixedDay = new Date() ,timezone = "America/Caracas: (GMT-04:30) Caracas"`, () => {
    let res = getCurrentDate(
      dataTestGetCurrentDate.fixedDay,
      dataTestGetCurrentDate.settings_date_timezone_AmericaCaracas
    ).getTime();
    let expectedOutput = new Date(
      "Mon Apr 12 2021 12:30:00 GMT+0700"
    ).getTime();
    chai.assert.equal(expectedOutput, res);
  });
  it(`the resultult Mon Apr 12 2021 17:00:00 GMT+0700 if fixedDay = new Date() ,timezone = "Atlantic/Faroe": "(GMT+00:00) Faeroe"`, () => {
    let res = getCurrentDate(
      dataTestGetCurrentDate.fixedDay,
      dataTestGetCurrentDate.settings_date_timezone_AtlanticFaroe
    ).getTime();
    let expectedOutput = new Date(
      "Mon Apr 12 2021 17:00:00 GMT+0700"
    ).getTime();
    chai.assert.equal(expectedOutput, res);
  });
  it(`the resultult Mon Apr 12 2021 22:00:00 GMT+0700 if fixedDay = new Date() ,timezone = "Indian/Kerguelen: (GMT+05:00) Kerguelen"`, () => {
    let res = getCurrentDate(
      dataTestGetCurrentDate.fixedDay,
      dataTestGetCurrentDate.settings_date_timezone_IndianKerguelen
    ).getTime();
    let expectedOutput = new Date(
      "Mon Apr 12 2021 22:00:00 GMT+0700"
    ).getTime();
    chai.assert.equal(expectedOutput, res);
  });
  it(`the resultult Mon Apr 12 2021 22:30:00 GMT+0700 if fixedDay = new Date() ,timezone = "Asia/Calcutta: (GMT+05:30) India Standard Time"`, () => {
    let res = getCurrentDate(
      dataTestGetCurrentDate.fixedDay,
      dataTestGetCurrentDate.settings_date_timezone_AsiaCalcutta
    ).getTime();
    let expectedOutput = new Date(
      "Mon Apr 12 2021 22:30:00 GMT+0700"
    ).getTime();
    // kết quả trả về là 21:30
    chai.assert.equal(expectedOutput, res, `result =${new Date(res)} `);
  });
  it(`the resultult Mon Apr 12 2021 23:00:00 GMT+0700 if fixedDay = new Date() ,timezone = "Indian/Chagos: (GMT+06:00) Chagos"`, () => {
    let res = getCurrentDate(
      dataTestGetCurrentDate.fixedDay,
      dataTestGetCurrentDate.settings_date_timezone_IndianChagos
    ).getTime();
    let expectedOutput = new Date(
      "Mon Apr 12 2021 23:00:00 GMT+0700"
    ).getTime();
    chai.assert.equal(expectedOutput, res);
  });
  it(`the resultult is = Mon Apr 12 2021 23:30:00 GMT+0700 (Giờ Đông Dương) if fixedDay = new Date() ,timezone = "Indian/Cocos: (GMT+06:30) Cocos"`, () => {
    let res = getCurrentDate(
      dataTestGetCurrentDate.fixedDay,
      dataTestGetCurrentDate.settings_date_timezone_IndianCocos
    ).getTime();
    let expectedOutput = new Date(
      "Mon Apr 12 2021 23:30:00 GMT+0700 (Giờ Đông Dương)"
    ).getTime();
    chai.assert.equal(expectedOutput, res, `result =${new Date(res)} `);
  });
  it(`the resultult  Tue Apr 13 2021 01:00:00 GMT+07:00 (Giờ Đông Dương) if fixedDay = new Date() ,timezone = "Australia/Perth: (GMT+08:00) Western Time - Perth"`, () => {
    let res = getCurrentDate(
      dataTestGetCurrentDate.fixedDay,
      dataTestGetCurrentDate.settings_date_timezone_AustraliaPerth
    ).getTime();
    let expectedOutput = new Date(
      "Tue Apr 13 2021 01:00:00 GMT+07:00 (Giờ Đông Dương)"
    ).getTime();
    chai.assert.equal(expectedOutput, res);
  });
  it(`the resultult  Tue Apr 13 2021 01:30:00 GMT+07:00 (Giờ Đông Dương) if fixedDay = new Date() ,timezone = "Asia/Pyongyang: (GMT+08:30) Pyongyang"`, () => {
    let res = getCurrentDate(
      dataTestGetCurrentDate.fixedDay,
      dataTestGetCurrentDate.settings_date_timezone_AsiaPyongyang
    ).getTime();
    let expectedOutput = new Date(
      "Tue Apr 13 2021 01:30:00 GMT+07:00 (Giờ Đông Dương)"
    ).getTime();
    chai.assert.equal(expectedOutput, res, `result =${new Date(res)} `);
  });
  it(`the resultult  Tue Apr 13 2021 02:00:00 GMT+07:00 (Giờ Đông Dương) if fixedDay = new Date() ,timezone = "Pacific/Palau: (GMT+09:00) Palau"`, () => {
    let res = getCurrentDate(
      dataTestGetCurrentDate.fixedDay,
      dataTestGetCurrentDate.settings_date_timezone_PacificPalau
    ).getTime();
    let expectedOutput = new Date(
      "Tue Apr 13 2021 02:00:00 GMT+07:00 (Giờ Đông Dương)"
    ).getTime();
    chai.assert.equal(expectedOutput, res);
  });
  it(`the resultult  Tue Apr 13 2021 02:30:00 GMT+07:00 (Giờ Đông Dương) if fixedDay = new Date() ,timezone = "Australia/Darwin: (GMT+09:30) Central Time - Darwin"`, () => {
    let res = getCurrentDate(
      dataTestGetCurrentDate.fixedDay,
      dataTestGetCurrentDate.settings_date_timezone_AustraliaDarwin
    ).getTime();
    let expectedOutput = new Date(
      "Tue Apr 13 2021 02:30:00 GMT+07:00 (Giờ Đông Dương)"
    ).getTime();
    chai.assert.equal(expectedOutput, res, `result =${new Date(res)} `);
  });
  it(`the resultult  Tue Apr 13 2021 3:30:00 GMT+07:00 (Giờ Đông Dương) if fixedDay = new Date() ,timezone = "Australia/Adelaide: (GMT+10:30) Central Time - Adelaide"`, () => {
    let res = getCurrentDate(
      dataTestGetCurrentDate.fixedDay,
      dataTestGetCurrentDate.settings_date_timezone_AustraliaAdelaide
    ).getTime();
    let expectedOutput = new Date(
      "Tue Apr 13 2021 03:30:00 GMT+07:00 (Giờ Đông Dương)"
    ).getTime();
    chai.assert.equal(expectedOutput, res, `result =${new Date(res)} `);
  });
  it("the null if settings is number", () => {
    let res = getCurrentDate(
      dataTestGetCurrentDate.fixedDay,
      dataNumber
    ).getTime();
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("the null if settings is strings", () => {
    let res = getCurrentDate(
      dataTestGetCurrentDate.fixedDay,
      dataString.string
    ).getTime();
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("the null if settings.date_timezone_offset wrong fomat is number ", () => {
    let res = getCurrentDate(
      dataTestGetCurrentDate.fixedDay,
      dataTestGetCurrentDate.settings_date_timezone_number
    ).getTime();
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("the null if settings.date_timezone_offset wrong fomat is string ", () => {
    let res = getCurrentDate(
      dataTestGetCurrentDate.fixedDay,
      dataTestGetCurrentDate.settings_date_timezone_number
    ).getTime();
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
});
// export const checkForUpdate = (newDate, settings, deliveryDate) => {

describe("function checkforUpdate()", () => {
  it('the resultult {"selectedDate":"04/22/2021","upadte":true} is   newDate: "04/22/2021", settings.kind_of_delivery_date = shortest, deliveryDate: "04/20/2021" ', () => {
    let res = checkForUpdate(
      dataTestCheckForUpdate.newDate,
      dataTestCheckForUpdate.settings_kind_of_delivery_date_shortest,
      dataTestCheckForUpdate.deliveryDate
    );
    let expectedOutput = '{"selectedDate":"04/22/2021","upadte":true}';
    chai.assert.equal(expectedOutput, res);
  });
  it('the resultult {"selectedDate":"04/22/2021","upadte":true} is   newDate = undefined, settings.kind_of_delivery_date = shortest, deliveryDate: "04/20/2021" ', () => {
    let res = checkForUpdate(
      dataUnderfined,
      dataTestCheckForUpdate.settings_kind_of_delivery_date_shortest,
      dataTestCheckForUpdate.deliveryDate
    );
    let expectedOutput = '{"upadte":false}';
    chai.assert.equal(expectedOutput, res);
  });
  it('the resultult {"upadte":false} is   newDate = -1, settings.kind_of_delivery_date = shortest, deliveryDate: "04/20/2021" ', () => {
    let res = checkForUpdate(
      dataNumber,
      dataTestCheckForUpdate.settings_kind_of_delivery_date_shortest,
      dataTestCheckForUpdate.deliveryDate
    );
    let expectedOutput = '{"upadte":false}';
    chai.assert.equal(expectedOutput, res);
  });
  it('the resultult {"upadte":false} is   newDate = string wrong format date, settings.kind_of_delivery_date = shortest, deliveryDate: "04/20/2021" ', () => {
    let res = checkForUpdate(
      dataString.string,
      dataTestCheckForUpdate.settings_kind_of_delivery_date_shortest,
      dataTestCheckForUpdate.deliveryDate
    );
    let expectedOutput = '{"upadte":false}';
    chai.assert.equal(expectedOutput, res);
  });
  it('the resultult {"upadte":false} is   newDate = number negative, settings.kind_of_delivery_date = shortest, deliveryDate: "04/20/2021" ', () => {
    let res = checkForUpdate(
      dataNumberNegative,
      dataTestCheckForUpdate.settings_kind_of_delivery_date_shortest,
      dataTestCheckForUpdate.deliveryDate
    );
    let expectedOutput = '{"upadte":false}';
    chai.assert.equal(expectedOutput, res);
  });
  it('the resultult {"upadte":false} is   newDate = number negative, settings.kind_of_delivery_date = shortest, deliveryDate is number', () => {
    let res = checkForUpdate(
      dataTestCheckForUpdate.newDate,
      dataTestCheckForUpdate.settings_kind_of_delivery_date_shortest,
      dataNumber
    );
    let expectedOutput = '{"upadte":false}';
    chai.assert.equal(expectedOutput, res);
  });
  it('the resultult {"upadte":false} is   newDate = number negative, settings.kind_of_delivery_date = shortest, deliveryDate is strings', () => {
    let res = checkForUpdate(
      dataTestCheckForUpdate.newDate,
      dataTestCheckForUpdate.settings_kind_of_delivery_date_shortest,
      dataString.string
    );
    let expectedOutput = '{"upadte":false}';
    chai.assert.equal(expectedOutput, res);
  });
  it('the resultult {"upadte":false} is   newDate = number negative, settings.kind_of_delivery_date = shortest, deliveryDate is negative', () => {
    let res = checkForUpdate(
      dataTestCheckForUpdate.newDate,
      dataTestCheckForUpdate.settings_kind_of_delivery_date_shortest,
      dataNumberNegative
    );
    let expectedOutput = '{"upadte":false}';
    chai.assert.equal(expectedOutput, res);
  });

  it('the resultult {"selectedDate":"04/22/2021","upadte":true} is   newDate: "04/22/2021", settings.kind_of_delivery_date = longest, deliveryDate: "04/20/2021" ', () => {
    let res = checkForUpdate(
      dataTestCheckForUpdate.newDate,
      dataTestCheckForUpdate.settings_kind_of_delivery_date_longtest,
      dataTestCheckForUpdate.deliveryDate
    );
    let expectedOutput = '{"selectedDate":"04/22/2021","upadte":true}';
    chai.assert.equal(expectedOutput, res);
  });
  it('the resultult {"selectedDate":"04/22/2021","upadte":true} is   newDate = undefined, settings.kind_of_delivery_date = longest, deliveryDate: "04/20/2021" ', () => {
    let res = checkForUpdate(
      dataUnderfined,
      dataTestCheckForUpdate.settings_kind_of_delivery_date_longtest,
      dataTestCheckForUpdate.deliveryDate
    );
    let expectedOutput = '{"upadte":false}';
    chai.assert.equal(expectedOutput, res);
  });
  it('the resultult {"upadte":false} is   newDate = -1, settings.kind_of_delivery_date = longest, deliveryDate: "04/20/2021" ', () => {
    let res = checkForUpdate(
      dataNumber,
      dataTestCheckForUpdate.settings_kind_of_delivery_date_longtest,
      dataTestCheckForUpdate.deliveryDate
    );
    let expectedOutput = '{"upadte":false}';
    chai.assert.equal(expectedOutput, res);
  });
  it('the resultult {"upadte":false} is   newDate = string wrong format date, settings.kind_of_delivery_date = longest, deliveryDate: "04/20/2021" ', () => {
    let res = checkForUpdate(
      dataString.string,
      dataTestCheckForUpdate.settings_kind_of_delivery_date_longtest,
      dataTestCheckForUpdate.deliveryDate
    );
    let expectedOutput = '{"upadte":false}';
    chai.assert.equal(expectedOutput, res);
  });
  it('the resultult {"upadte":false} is   newDate = number negative, settings.kind_of_delivery_date = longest, deliveryDate: "04/20/2021" ', () => {
    let res = checkForUpdate(
      dataNumberNegative,
      dataTestCheckForUpdate.settings_kind_of_delivery_date_longtest,
      dataTestCheckForUpdate.deliveryDate
    );
    let expectedOutput = '{"upadte":false}';
    chai.assert.equal(expectedOutput, res);
  });
  it('the resultult {"upadte":false} is   newDate = number negative, settings.kind_of_delivery_date = longest, deliveryDate is number', () => {
    let res = checkForUpdate(
      dataTestCheckForUpdate.newDate,
      dataTestCheckForUpdate.settings_kind_of_delivery_date_longtest,
      dataNumber
    );
    let expectedOutput = '{"upadte":false}';
    chai.assert.equal(expectedOutput, res);
  });
  it('the resultult {"upadte":false} is   newDate = number negative, settings.kind_of_delivery_date = longest, deliveryDate is strings', () => {
    let res = checkForUpdate(
      dataTestCheckForUpdate.newDate,
      dataTestCheckForUpdate.settings_kind_of_delivery_date_longtest,
      dataString.string
    );
    let expectedOutput = '{"upadte":false}';
    chai.assert.equal(expectedOutput, res);
  });
  it('the resultult {"upadte":false} is   newDate = number negative, settings.kind_of_delivery_date = longest, deliveryDate is negative', () => {
    let res = checkForUpdate(
      dataTestCheckForUpdate.newDate,
      dataTestCheckForUpdate.settings_kind_of_delivery_date_longtest,
      dataNumberNegative
    );
    let expectedOutput = '{"upadte":false}';
    chai.assert.equal(expectedOutput, res);
  });
});
describe("function increaseDay()", () => {
  it("the resultult  Fri Apr 16 2021 15:52:20 GMT+0700 (Giờ Đông Dương) if day is Thu Apr 15 2021 15:52:20 GMT+0700 (Giờ Đông Dương) ,time = 1", () => {
    let res = increaseDay(
      dataTestIncreaseDay.day,
      dataTestIncreaseDay.time
    ).getTime();
    console.log("res", res);
    let expectedOutput = new Date(
      "Fri Apr 16 2021 15:52:20 GMT+0700 (Giờ Đông Dương)"
    ).getTime();
    console.log("ex", expectedOutput);
    console.log("edn");
    chai.assert.equal(expectedOutput, res);
  });
  it("the resultult  0 if day is Thu Apr 15 2021 15:52:20 GMT+0700 (Giờ Đông Dương) ,time = -1", () => {
    let res = increaseDay(dataTestIncreaseDay.day, dataNumberNegative);
    let expectedOutput = 0;
    chai.assert.equal(expectedOutput, res);
  });
  it("the resultult  0 if day is Thu Apr 15 2021 15:52:20 GMT+0700 (Giờ Đông Dương) ,time = strings", () => {
    let res = increaseDay(dataTestIncreaseDay.day, dataString.string);
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("the resultult  0 if day is Thu Apr 15 2021 15:52:20 GMT+0700 (Giờ Đông Dương) ,time = datanumber BigInt", () => {
    let res = increaseDay(dataTestIncreaseDay.day, dataNumber.bigInt);
    let expectedOutput = 0;
    chai.assert.equal(expectedOutput, res);
  });
  it("the resultult  null if day =  Thu Apr 40 2021 00:00:00 GMT+0700 (Giờ Đông Dương),time = 1", () => {
    let res = increaseDay(dataTestIncreaseDay.day1, dataTestIncreaseDay.time);
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("the resultult  null if day = Thu Apr 40 2021 00:00:00 GMT+0700 (Giờ Đông Dương),time = -1", () => {
    let res = increaseDay(dataTestIncreaseDay.day2, dataNumber.negative);
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("the resultult  null if day = Thu Apr 40 2021 00:00:00 GMT+0700 (Giờ Đông Dương),time = strings", () => {
    let res = increaseDay(dataTestIncreaseDay.day2, dataString.string);
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("the resultult  null if day = Thu Apr 40 2021 00:00:00 GMT+0700 (Giờ Đông Dương),time = 9999999999", () => {
    let res = increaseDay(dataTestIncreaseDay.day2, dataString.string);
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("the resultult  Fri Apr 16 2021 00:00:00 GMT+0700 (Giờ Đông Dương) if day = 04/15/2021,time = 1", () => {
    let res = increaseDay(
      dataTestIncreaseDay.day4,
      dataTestIncreaseDay.time
    ).getTime();
    let expectedOutput = new Date("04/16/2021").getTime();
    chai.assert.equal(expectedOutput, res);
  });
  it("the resultult  null if day = 04/15/2021,time = -1", () => {
    let res = increaseDay(dataTestIncreaseDay.day4, dataNumber.negative);
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("the resultult  null if day = 04/15/2021,time = strings", () => {
    let res = increaseDay(dataTestIncreaseDay.day4, dataString.string);
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("the resultult  null if day = 04/15/2021,time = 99999999999", () => {
    let res = increaseDay(dataTestIncreaseDay.day4, dataNumber.bigInt);
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it('the resultult  null if day = ("string/5/2010"),time = 1', () => {
    let res = increaseDay(dataTestIncreaseDay.day6, dataTestIncreaseDay.time);
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it('the resultult  null if day = ("-1/5/2010"),time = 1', () => {
    let res = increaseDay(dataTestIncreaseDay.day6, dataTestIncreaseDay.time);
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
});
describe("function checkIsHoliday()", () => {
  it("the result is true if date exits holidays", () => {
    let res = checkIsHoliday(dataTestHoliday.date, dataTestHoliday.holidays);
    let expectedOutput = true;
    chai.assert.equal(expectedOutput, res);
  });
  it("the result is false if date not exits holidays", () => {
    let res = checkIsHoliday(dataTestHoliday.date1, dataTestHoliday.holidays);
    let expectedOutput = false;
    chai.assert.equal(expectedOutput, res);
  });
  it("the result is false if date is number", () => {
    let res = checkIsHoliday(dataNumber, dataTestHoliday.holidays);
    let expectedOutput = false;
    chai.assert.equal(expectedOutput, res);
  });

  it("the result is false if date is strings", () => {
    let res = checkIsHoliday(dataString.string, dataTestHoliday.holidays);
    let expectedOutput = false;
    chai.assert.equal(expectedOutput, res);
  });
  it("the result is false if date is negative", () => {
    let res = checkIsHoliday(dataNumberNegative, dataTestHoliday.holidays);
    let expectedOutput = false;
    chai.assert.equal(expectedOutput, res);
  });
  it("the result is false if holiday empty", () => {
    let res = checkIsHoliday(dataNumberNegative, dataArrayEmpty);
    let expectedOutput = false;
    chai.assert.equal(expectedOutput, res);
  });
  it("the result is false if holiday is Number", () => {
    let res = checkIsHoliday(dataNumberNegative, dataNumber);
    let expectedOutput = false;
    chai.assert.equal(expectedOutput, res);
  });
  it("the result is false if holiday is strings", () => {
    let res = checkIsHoliday(dataNumberNegative, dataString.string);
    let expectedOutput = false;
    chai.assert.equal(expectedOutput, res);
  });
});
describe("function checkIsDayOff()", () => {
  it("the result is true if date = Thu Apr 22 2021 00:00:00 GMT+0700 (Giờ Đông Dương) in workingDayDisableAllWeek", () => {
    let res = checkIsDayOff(
      DataTestCheckIsDayOff.day1,
      DataTestCheckIsDayOff.workingDayDisableAllWeek
    );
    let expectedOutput = true;
    chai.assert.equal(expectedOutput, res);
  });
  it("the result is false if date in workingDay , day in workingDay is disable ", () => {
    let res = checkIsDayOff(
      DataTestCheckIsDayOff.day1,
      DataTestCheckIsDayOff.workingDayEndableThursday
    );
    let expectedOutput = false;
    chai.assert.equal(expectedOutput, res);
  });
  it("the result is false if date in workingDay , day in workingDay endable is negative ", () => {
    let res = checkIsDayOff(
      DataTestCheckIsDayOff.day1,
      DataTestCheckIsDayOff.workingDayEndableNegative
    );
    let expectedOutput = false;
    chai.assert.equal(expectedOutput, res);
  });
  it("the result is null if date = Thu Apr 32 2021 00:00:00 GMT+0700 (Giờ Đông Dương) wrong fomat date ,workingDay =  workingDayDisableAllWeek", () => {
    let res = checkIsDayOff(
      DataTestCheckIsDayOff.day2,
      DataTestCheckIsDayOff.workingDayDisableAllWeek
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("the result is null if date = Thu Apr 32 2021 00:00:00 GMT+0700 (Giờ Đông Dương) wrong fomat date ,enable in workingday is negavtive", () => {
    let res = checkIsDayOff(
      DataTestCheckIsDayOff.day2,
      DataTestCheckIsDayOff.workingDayEndableNegative
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("the result is null if date = Thu Apr -1 2021 00:00:00 GMT+0700 (Giờ Đông Dương) wrong fomat date ,workingDay =  workingDayDisableAllWeek", () => {
    let res = checkIsDayOff(
      DataTestCheckIsDayOff.day3,
      DataTestCheckIsDayOff.workingDayDisableAllWeek
    );
    let expectedOutput = true;
    chai.assert.equal(expectedOutput, res);
  });
  it("the result is null if date = Thu Apr -1 2021 00:00:00 GMT+0700 (Giờ Đông Dương) wrong fomat date ,enable in workingday is negavtive", () => {
    let res = checkIsDayOff(
      DataTestCheckIsDayOff.day3,
      DataTestCheckIsDayOff.workingDayEndableNegative
    );
    let expectedOutput = true;
    chai.assert.equal(expectedOutput, res);
  });
  it("the result is null if date is number wrong fomat date ,workingDay =  workingDayDisableAllWeek", () => {
    let res = checkIsDayOff(
      dataNumber,
      DataTestCheckIsDayOff.workingDayDisableAllWeek
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("the result is null if date is number wrong fomat date ,enable in workingday is negavtive", () => {
    let res = checkIsDayOff(
      dataNumber,
      DataTestCheckIsDayOff.workingDayEndableNegative
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("the result is null if date is strings wrong fomat date ,workingDay =  workingDayDisableAllWeek", () => {
    let res = checkIsDayOff(
      dataString.string,
      DataTestCheckIsDayOff.workingDayDisableAllWeek
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("the result is null if date is strings wrong fomat date, enable in workingday is negavtive", () => {
    let res = checkIsDayOff(
      dataString.string,
      DataTestCheckIsDayOff.workingDayEndableNegative
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("the result is false if  workingDay = [] ", () => {
    let res = checkIsDayOff(DataTestCheckIsDayOff.day1, dataArrayEmpty);
    let expectedOutput = false;
    chai.assert.equal(expectedOutput, res);
  });
  it("the result is null if  workingDay is number ", () => {
    let res = checkIsDayOff(DataTestCheckIsDayOff.day1, dataNumber);
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("the result is null if  workingDay is strings ", () => {
    let res = checkIsDayOff(DataTestCheckIsDayOff.day1, dataString.string);
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
});
