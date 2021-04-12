import {
  minimumDays,
  maximumDays,
  isValid,
  fixedDay,
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
} from "./dataTest.js";
const expect = chai.expect;
describe("function minimumDays() class FormProduct", () => {
  it("The result returns 3 if there exist specific_Products and current_Product", () => {
    const res = minimumDays(
      dataTestMiniMumdayAndMaximumDay.specificProducts,
      dataTestMiniMumdayAndMaximumDay.currentProduct,
      dataTestMiniMumdayAndMaximumDay.productCollections,
      dataTestMiniMumdayAndMaximumDay.specificCollections
    );
    let expectedOutput = 3;
    chai.assert.equal(expectedOutput, res);
  });

  it("The result returns undefined if there is no specific Product or current Product", () => {
    const res = minimumDays(
      dataTestMiniMumdayAndMaximumDay.specificProductsEmpty,
      dataTestMiniMumdayAndMaximumDay.currentProduct,
      dataTestMiniMumdayAndMaximumDay.productCollectionsEmpty,
      dataTestMiniMumdayAndMaximumDay.specificCollections
    );
    let expectedOutput = undefined;
    chai.assert.equal(expectedOutput, res);
  });

  it("The result returns 4 if there is no specific Product and current Product", () => {
    const res = minimumDays(
      dataTestMiniMumdayAndMaximumDay.specificProductsEmpty,
      dataTestMiniMumdayAndMaximumDay.currentProduct,
      dataTestMiniMumdayAndMaximumDay.productCollections,
      dataTestMiniMumdayAndMaximumDay.specificCollections
    );
    let expectedOutput = 4;
    chai.assert.equal(expectedOutput, res);
  });
  it("The result returns -1 if specificProducts Empty productCollections not exits specificCollections", () => {
    const res = minimumDays(
      dataTestMiniMumdayAndMaximumDay.specificProductsEmpty,
      dataTestMiniMumdayAndMaximumDay.currentProduct,
      dataTestMiniMumdayAndMaximumDay.productCollectionsNotExitsSpecificCollections,
      dataTestMiniMumdayAndMaximumDay.specificCollections
    );
    let expectedOutput = -1;
    chai.assert.equal(expectedOutput, res);
  });
  it("The result returns null if specificProducts is Strings", () => {
    const res = minimumDays(
      dataString.string,
      dataTestMiniMumdayAndMaximumDay.currentProduct,
      dataTestMiniMumdayAndMaximumDay.productCollections,
      dataTestMiniMumdayAndMaximumDay.specificCollections
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("The result returns null if specificProducts is Number", () => {
    const res = minimumDays(
      dataNumber.interger,
      dataTestMiniMumdayAndMaximumDay.currentProduct,
      dataTestMiniMumdayAndMaximumDay.productCollections,
      dataTestMiniMumdayAndMaximumDay.specificCollections
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("The result returns null if currentProduct is Strings", () => {
    const res = minimumDays(
      dataString.string,
      dataTestMiniMumdayAndMaximumDay.currentProduct,
      dataTestMiniMumdayAndMaximumDay.productCollections,
      dataTestMiniMumdayAndMaximumDay.specificCollections
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("The result returns null if currentProduct is Number", () => {
    const res = minimumDays(
      dataTestMiniMumdayAndMaximumDay.specificProducts,
      dataNumber.interger,
      dataTestMiniMumdayAndMaximumDay.productCollections,
      dataTestMiniMumdayAndMaximumDay.specificCollections
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("The result returns null if currentProduct is Strings", () => {
    const res = minimumDays(
      dataTestMiniMumdayAndMaximumDay.specificProducts,
      dataString.string,
      dataTestMiniMumdayAndMaximumDay.productCollections,
      dataTestMiniMumdayAndMaximumDay.specificCollections
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("The result returns null if currentProduct is emptyArray", () => {
    const res = minimumDays(
      dataTestMiniMumdayAndMaximumDay.specificProducts,
      dataArrayEmpty,
      dataTestMiniMumdayAndMaximumDay.productCollections,
      dataTestMiniMumdayAndMaximumDay.specificCollections
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("The result returns null if specificProducts.minimumday is Strings", () => {
    const res = minimumDays(
      dataTestMiniMumdayAndMaximumDay.specificProductsMinimumDaysString,
      dataTestMiniMumdayAndMaximumDay.currentProduct,
      dataTestMiniMumdayAndMaximumDay.productCollections,
      dataTestMiniMumdayAndMaximumDay.specificCollections
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("The result returns null if specificProducts.minimumday is Negative", () => {
    const res = minimumDays(
      dataTestMiniMumdayAndMaximumDay.specificProductsMinimumDaysIsNegative,
      dataTestMiniMumdayAndMaximumDay.currentProduct,
      dataTestMiniMumdayAndMaximumDay.productCollections,
      dataTestMiniMumdayAndMaximumDay.specificCollections
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("The result returns null if  specificProducts empty and productCollections is string", () => {
    const res = minimumDays(
      dataArrayEmpty,
      dataTestMiniMumdayAndMaximumDay.currentProduct,
      dataString.string,
      dataTestMiniMumdayAndMaximumDay.specificCollections
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("The result returns null if  specificProducts empty and  productCollections is number", () => {
    const res = minimumDays(
      dataArrayEmpty,
      dataTestMiniMumdayAndMaximumDay.currentProduct,
      dataNumber.interger,
      dataTestMiniMumdayAndMaximumDay.specificCollections
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("The result returns null if productCollections is emptyArray", () => {
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
  it("The result returns 7 if there exist specific_Products and current_Product", () => {
    const res = maximumDays(
      dataTestMiniMumdayAndMaximumDay.specificProducts,
      dataTestMiniMumdayAndMaximumDay.currentProduct,
      dataTestMiniMumdayAndMaximumDay.productCollections,
      dataTestMiniMumdayAndMaximumDay.specificCollections
    );
    let expectedOutput = 7;
    chai.assert.equal(expectedOutput, res);
  });

  it("The result returns undefined if  specificProducts Empty and  productCollections Empty", () => {
    const res = maximumDays(
      dataTestMiniMumdayAndMaximumDay.specificProductsEmpty,
      dataTestMiniMumdayAndMaximumDay.currentProduct,
      dataTestMiniMumdayAndMaximumDay.productCollectionsEmpty,
      dataTestMiniMumdayAndMaximumDay.specificCollections
    );
    let expectedOutput = undefined;
    chai.assert.equal(expectedOutput, res);
  });

  it("The result returns 2 if there is no specific Product and current Product", () => {
    const res = maximumDays(
      dataTestMiniMumdayAndMaximumDay.specificProductsEmpty,
      dataTestMiniMumdayAndMaximumDay.currentProduct,
      dataTestMiniMumdayAndMaximumDay.productCollections,
      dataTestMiniMumdayAndMaximumDay.specificCollections
    );
    let expectedOutput = 2;
    chai.assert.equal(expectedOutput, res);
  });

  it("The result returns 10 if product have maximunDay = -1", () => {
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
  it("The result returns -1 if specificProducts Empty productCollections not exits specificCollections", () => {
    const res = maximumDays(
      dataTestMiniMumdayAndMaximumDay.specificProductsEmpty,
      dataTestMiniMumdayAndMaximumDay.currentProduct,
      dataTestMiniMumdayAndMaximumDay.productCollectionsNotExitsSpecificCollections,
      dataTestMiniMumdayAndMaximumDay.specificCollections
    );
    let expectedOutput = -1;
    chai.assert.equal(expectedOutput, res);
  });

  it("The result returns null if specificProducts is Strings", () => {
    const res = minimumDays(
      dataString.string,
      dataTestMiniMumdayAndMaximumDay.currentProduct,
      dataTestMiniMumdayAndMaximumDay.productCollections,
      dataTestMiniMumdayAndMaximumDay.specificCollections
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("The result returns null if specificProducts is Number", () => {
    const res = minimumDays(
      dataNumber.interger,
      dataTestMiniMumdayAndMaximumDay.currentProduct,
      dataTestMiniMumdayAndMaximumDay.productCollections,
      dataTestMiniMumdayAndMaximumDay.specificCollections
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("The result returns null if currentProduct is Strings", () => {
    const res = minimumDays(
      dataString.string,
      dataTestMiniMumdayAndMaximumDay.currentProduct,
      dataTestMiniMumdayAndMaximumDay.productCollections,
      dataTestMiniMumdayAndMaximumDay.specificCollections
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("The result returns null if currentProduct is Number", () => {
    const res = minimumDays(
      dataTestMiniMumdayAndMaximumDay.specificProducts,
      dataNumber.interger,
      dataTestMiniMumdayAndMaximumDay.productCollections,
      dataTestMiniMumdayAndMaximumDay.specificCollections
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("The result returns null if currentProduct is Strings", () => {
    const res = minimumDays(
      dataTestMiniMumdayAndMaximumDay.specificProducts,
      dataString.string,
      dataTestMiniMumdayAndMaximumDay.productCollections,
      dataTestMiniMumdayAndMaximumDay.specificCollections
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("The result returns null if currentProduct is emptyArray", () => {
    const res = minimumDays(
      dataTestMiniMumdayAndMaximumDay.specificProducts,
      dataArrayEmpty,
      dataTestMiniMumdayAndMaximumDay.productCollections,
      dataTestMiniMumdayAndMaximumDay.specificCollections
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("The result returns null if specificProducts.minimumday is Strings", () => {
    const res = minimumDays(
      dataTestMiniMumdayAndMaximumDay.specificProductsMinimumDaysString,
      dataTestMiniMumdayAndMaximumDay.currentProduct,
      dataTestMiniMumdayAndMaximumDay.productCollections,
      dataTestMiniMumdayAndMaximumDay.specificCollections
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("The result returns null if specificProducts.minimumday is Negative", () => {
    const res = minimumDays(
      dataTestMiniMumdayAndMaximumDay.specificProductsMinimumDaysIsNegative,
      dataTestMiniMumdayAndMaximumDay.currentProduct,
      dataTestMiniMumdayAndMaximumDay.productCollections,
      dataTestMiniMumdayAndMaximumDay.specificCollections
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("The result returns null if  specificProducts empty and productCollections is string", () => {
    const res = minimumDays(
      dataArrayEmpty,
      dataTestMiniMumdayAndMaximumDay.currentProduct,
      dataString.string,
      dataTestMiniMumdayAndMaximumDay.specificCollections
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("The result returns null if  specificProducts empty and  productCollections is number", () => {
    const res = minimumDays(
      dataArrayEmpty,
      dataTestMiniMumdayAndMaximumDay.currentProduct,
      dataNumber.interger,
      dataTestMiniMumdayAndMaximumDay.specificCollections
    );
    let expectedOutput = null;
    chai.assert.equal(expectedOutput, res);
  });
  it("The result returns null if productCollections is emptyArray", () => {
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
  it("The result return false if attributes empty , MinimumdayS = 2, IsEmpty = flase", () => {
    const res = isValid(
      dataTestIsValid.attributesEmpty,
      dataTestIsValid.attributeNames,
      dataTestIsValid.MinimumDayS,
      dataTestIsValid.isEmptyFalse
    );
    let expectedOutput = false;
    chai.assert.equal(expectedOutput, res);
  });
  it("The result return false if attributes empty MinimumdayS = 2 IsEmpty = true", () => {
    const res = isValid(
      dataTestIsValid.attributesEmpty,
      dataTestIsValid.attributeNames,
      dataTestIsValid.MinimumDayS,
      dataTestIsValid.isEmptyTrue
    );
    let expectedOutput = false;
    chai.assert.equal(expectedOutput, res);
  });
  it("The result return false if attributes empty MinimumdayS = 2 IsEmpty = flase", () => {
    const res = isValid(
      dataTestIsValid.attributesEmpty,
      dataTestIsValid.attributeNames,
      dataTestIsValid.MinimumDayS,
      dataTestIsValid.isEmptyFalse
    );
    let expectedOutput = false;
    chai.assert.equal(expectedOutput, res);
  });

  it("The result return true if attributes empty MinimumdayS = -1 IsEmpty = flase", () => {
    const res = isValid(
      dataTestIsValid.attributesEmpty,
      dataTestIsValid.attributeNames,
      dataTestIsValid.MinimumDaySUderfined,
      dataTestIsValid.isEmptyFalse
    );
    let expectedOutput = true;
    chai.assert.equal(expectedOutput, res);
  });
  it("The result return true if attributes empty MinimumdayS = -1 IsEmpty = true", () => {
    const res = isValid(
      dataTestIsValid.attributesEmpty,
      dataTestIsValid.attributeNames,
      dataTestIsValid.MinimumDaySUderfined,
      dataTestIsValid.isEmptyTrue
    );
    let expectedOutput = true;
    chai.assert.equal(expectedOutput, res);
  });
  it("The result return false if attributes  have attributeNames.date and MinimumdayS = 2 IsEmpty = flase", () => {
    const res = isValid(
      dataTestIsValid.attributesHaveAttributeNamesDate,
      dataTestIsValid.attributeNames,
      dataTestIsValid.MinimumDayS,
      dataTestIsValid.isEmptyFalse
    );
    let expectedOutput = false;
    chai.assert.equal(expectedOutput, res);
  });
  it("The result return true if attributes  have attributeNames.date and MinimumdayS = -1 IsEmpty = flase", () => {
    const res = isValid(
      dataTestIsValid.attributesHaveAttributeNamesDate,
      dataTestIsValid.attributeNames,
      dataTestIsValid.MinimumDaySUderfined,
      dataTestIsValid.isEmptyFalse
    );
    let expectedOutput = true;
    chai.assert.equal(expectedOutput, res);
  });
  it("The result return true if attributes have attributeNames.date and MinimumdayS = -1 IsEmpty = true", () => {
    const res = isValid(
      dataTestIsValid.attributesHaveAttributeNamesDate,
      dataTestIsValid.attributeNames,
      dataTestIsValid.MinimumDaySUderfined,
      dataTestIsValid.isEmptyTrue
    );
    let expectedOutput = true;
    chai.assert.equal(expectedOutput, res);
  });
  it("The result return true if attributes have attributeNames.date and MinimumdayS = -1 IsEmpty = true", () => {
    const res = isValid(
      dataTestIsValid.attributesHaveAttributeNamesDate,
      dataTestIsValid.attributeNames,
      dataTestIsValid.MinimumDaySUderfined,
      dataTestIsValid.isEmptyTrue
    );
    let expectedOutput = true;
    chai.assert.equal(expectedOutput, res);
  });

  it("The result return true if attributes have attributeNames.date and MinimumdayS = -1 IsEmpty = true ", () => {
    const res = isValid(
      dataTestIsValid.attributesHaveAttributeNamesDateString,
      dataTestIsValid.attributeNames,
      dataTestIsValid.MinimumDaySUderfined,
      dataTestIsValid.isEmptyTrue
    );
    let expectedOutput = true;
    chai.assert.equal(expectedOutput, res);
  });
  it("The result return true if attributes have attributeNames.date and MinimumdayS = string IsEmpty = true ", () => {
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
  let nowDate = new Date("Apr 13 2021 00:18:23 GMT+0700 (Indochina Time)");
  //   const nowDate = new Date();
  it(`The result return new Date() = ${nowDate} if  specificProducts = [] and specificCollections = []`, () => {
    let res = fixedDay(
      itemCart,
      specificProducts,
      specificCollections,
      settings,
      currentCollection
    );
    let expectedOutput = nowDate;
    res = JSON.stringify(res);
    expectedOutput = JSON.stringify(expectedOutput);
    chai.assert.equal(expectedOutput, res);
  });
  it(`The result return new Date() = ${nowDate} if  specificProducts = [] and specificCollections = [] `, () => {
    let res = fixedDay(
      itemCart,
      dataArrayEmpty,
      dataArrayEmpty,
      settings,
      currentCollection
    );
    let expectedOutput = nowDate;
    res = JSON.stringify(res);
    expectedOutput = JSON.stringify(expectedOutput);
    chai.assert.equal(expectedOutput, res, `== new Date ${expectedOutput}`);
  });
  it(`The result return new Date() = ${nowDate} if  cart item = []`, () => {
    let res = fixedDay(
      dataArrayEmpty,
      specificProducts,
      specificCollections,
      settings,
      currentCollection
    );
    let expectedOutput = nowDate;
    res = JSON.stringify(res);
    expectedOutput = JSON.stringify(expectedOutput);
    chai.assert.equal(expectedOutput, res, `== new Date ${expectedOutput}`);
  });
  it(`The result return  null if cart item is Number`, () => {
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
  it(`The result return  null if cart item is String`, () => {
    let res = fixedDay(
      dataString.string,
      specificProducts,
      specificCollections,
      settings,
      currentCollection
    );
    let expectedOutput = null;
    res = JSON.stringify(res);
    chai.assert.equal(expectedOutput, res);
  });
  it(`The result return ${nowDate} if item have specificProdcuts , specificCollection empty , fixed_day_start = today,kindOfDeliveryDate = shortest`, () => {
    let res = fixedDay(
      itemCart,
      specificProducts,
      dataArrayEmpty,
      settings,
      currentCollection
    );
    let expectedOutput = nowDate;
    res = JSON.stringify(res);
    expectedOutput = JSON.stringify(nowDate);
    chai.assert.equal(expectedOutput, res);
  });
  it(`The result return ${nowDate} if item have specificProdcuts , specificCollection empty , fixed_day_start = today,kindOfDeliveryDate = shortest`, () => {
    let res = fixedDay(
      itemCart,
      specificProducts,
      dataArrayEmpty,
      settings,
      currentCollection
    );
    let expectedOutput = nowDate;
    res = JSON.stringify(res);
    expectedOutput = JSON.stringify(nowDate);
    chai.assert.equal(expectedOutput, res);
  });
  it(`The result return ${nowDate} if item have specificProdcuts , specificCollection empty , fixed_day_start = today,kindOfDeliveryDate = shortest`, () => {
    let res = fixedDay(
      itemCart,
      specificProducts,
      dataArrayEmpty,
      settings,
      currentCollection
    );
    let expectedOutput = nowDate;
    res = JSON.stringify(res);
    expectedOutput = JSON.stringify(nowDate);
    chai.assert.equal(expectedOutput, res);
  });
  it(`The result return ${nowDate} if item have specificProdcuts , specificCollection empty , fixed_day_start = today,kindOfDeliveryDate = shortest`, () => {
    let res = fixedDay(
      itemCart,
      specificProducts,
      specificCollections,
      settings,
      currentCollection
    );
    let expectedOutput = nowDate;
    res = JSON.stringify(res);
    expectedOutput = JSON.stringify(nowDate);
    chai.assert.equal(expectedOutput, res);
  });
});
