
import { testMocha, minimumDays, maximumDays, isValid, fixedDay, checkIsLimitedOrderDay, getMinDate, increaseDay, getListLimitedOrderDays } from './delivery-date-default-jQueryUI.js';
import { dataTestMiniMumdayAndMaximumDay, dataArrayEmpty, dataString, dataNumber, dataObjEmpty, dataTestIsValid, specificProducts, specificCollections, settings, itemCart, currentCollection, dataTestFixedDay, dataTest_CheckIsLimitedOrderDay, dataTestGetMindate, DataGetListLimitedOrderDays } from './dataTest.js';
const expect = chai.expect;
describe('function minimumDays() class FormProduct', () => {

    it('The result returns 3 if there exist specific_Products and current_Product', () => {
        const res = minimumDays(dataTestMiniMumdayAndMaximumDay.specificProducts, dataTestMiniMumdayAndMaximumDay.currentProduct, dataTestMiniMumdayAndMaximumDay.productCollections, dataTestMiniMumdayAndMaximumDay.specificCollections);
        let expectedOutput = 3;
        chai.assert.equal(expectedOutput, res);
    });


    it('The result returns undefined if there is no specific Product or current Product', () => {
        const res = minimumDays(dataTestMiniMumdayAndMaximumDay.specificProductsEmpty, dataTestMiniMumdayAndMaximumDay.currentProduct, dataTestMiniMumdayAndMaximumDay.productCollectionsEmpty, dataTestMiniMumdayAndMaximumDay.specificCollections);
        let expectedOutput = undefined;
        chai.assert.equal(expectedOutput, res);
    });

    it('The result returns 4 if there is no specific Product and current Product', () => {
        const res = minimumDays(dataTestMiniMumdayAndMaximumDay.specificProductsEmpty, dataTestMiniMumdayAndMaximumDay.currentProduct, dataTestMiniMumdayAndMaximumDay.productCollections, dataTestMiniMumdayAndMaximumDay.specificCollections);
        let expectedOutput = 4;
        chai.assert.equal(expectedOutput, res);
    });
    it('The result returns -1 if specificProducts Empty productCollections not exits specificCollections', () => {
        const res = minimumDays(dataTestMiniMumdayAndMaximumDay.specificProductsEmpty, dataTestMiniMumdayAndMaximumDay.currentProduct, dataTestMiniMumdayAndMaximumDay.productCollectionsNotExitsSpecificCollections, dataTestMiniMumdayAndMaximumDay.specificCollections);
        let expectedOutput = -1;
        chai.assert.equal(expectedOutput, res);
    });
    it('The result returns null if specificProducts is Strings', () => {
        const res = minimumDays(dataString.string, dataTestMiniMumdayAndMaximumDay.currentProduct, dataTestMiniMumdayAndMaximumDay.productCollections, dataTestMiniMumdayAndMaximumDay.specificCollections);
        let expectedOutput = null;
        chai.assert.equal(expectedOutput, res);
    });
    it('The result returns null if specificProducts is Number', () => {
        const res = minimumDays(dataNumber.interger, dataTestMiniMumdayAndMaximumDay.currentProduct, dataTestMiniMumdayAndMaximumDay.productCollections, dataTestMiniMumdayAndMaximumDay.specificCollections);
        let expectedOutput = null;
        chai.assert.equal(expectedOutput, res);
    });
    it('The result returns null if currentProduct is Strings', () => {
        const res = minimumDays(dataString.string, dataTestMiniMumdayAndMaximumDay.currentProduct, dataTestMiniMumdayAndMaximumDay.productCollections, dataTestMiniMumdayAndMaximumDay.specificCollections);
        let expectedOutput = null;
        chai.assert.equal(expectedOutput, res);
    });
    it('The result returns null if currentProduct is Number', () => {
        const res = minimumDays(dataTestMiniMumdayAndMaximumDay.specificProducts, dataNumber.interger, dataTestMiniMumdayAndMaximumDay.productCollections, dataTestMiniMumdayAndMaximumDay.specificCollections);
        let expectedOutput = null;
        chai.assert.equal(expectedOutput, res);
    });
    it('The result returns null if currentProduct is Strings', () => {
        const res = minimumDays(dataTestMiniMumdayAndMaximumDay.specificProducts, dataString.string, dataTestMiniMumdayAndMaximumDay.productCollections, dataTestMiniMumdayAndMaximumDay.specificCollections);
        let expectedOutput = null;
        chai.assert.equal(expectedOutput, res);
    });
    it('The result returns null if currentProduct is emptyArray', () => {
        const res = minimumDays(dataTestMiniMumdayAndMaximumDay.specificProducts, dataArrayEmpty, dataTestMiniMumdayAndMaximumDay.productCollections, dataTestMiniMumdayAndMaximumDay.specificCollections);
        let expectedOutput = null;
        chai.assert.equal(expectedOutput, res);
    });
    it('The result returns null if specificProducts.minimumday is Strings', () => {
        const res = minimumDays(dataTestMiniMumdayAndMaximumDay.specificProductsMinimumDaysString, dataTestMiniMumdayAndMaximumDay.currentProduct, dataTestMiniMumdayAndMaximumDay.productCollections, dataTestMiniMumdayAndMaximumDay.specificCollections);
        let expectedOutput = null;
        chai.assert.equal(expectedOutput, res);
    });
    it('The result returns null if specificProducts.minimumday is Negative', () => {
        const res = minimumDays(dataTestMiniMumdayAndMaximumDay.specificProductsMinimumDaysIsNegative, dataTestMiniMumdayAndMaximumDay.currentProduct, dataTestMiniMumdayAndMaximumDay.productCollections, dataTestMiniMumdayAndMaximumDay.specificCollections);
        let expectedOutput = null;
        chai.assert.equal(expectedOutput, res);
    });
    it('The result returns null if  specificProducts empty and productCollections is string', () => {
        const res = minimumDays(dataArrayEmpty, dataTestMiniMumdayAndMaximumDay.currentProduct, dataString.string, dataTestMiniMumdayAndMaximumDay.specificCollections);
        let expectedOutput = null;
        chai.assert.equal(expectedOutput, res);
    });
    it('The result returns null if  specificProducts empty and  productCollections is number', () => {
        const res = minimumDays(dataArrayEmpty, dataTestMiniMumdayAndMaximumDay.currentProduct, dataNumber.interger, dataTestMiniMumdayAndMaximumDay.specificCollections);
        let expectedOutput = null;
        chai.assert.equal(expectedOutput, res);
    });
    it('The result returns null if productCollections is emptyArray', () => {
        const res = minimumDays(dataArrayEmpty, dataTestMiniMumdayAndMaximumDay.currentProduct, dataArrayEmpty, dataTestMiniMumdayAndMaximumDay.specificCollections);
        let expectedOutput = -1;
        chai.assert.equal(expectedOutput, res);
    });
});
describe('function maximumDays() class FormProduct', () => {
    it('The result returns 7 if there exist specific_Products and current_Product', () => {
        const res = maximumDays(dataTestMiniMumdayAndMaximumDay.specificProducts, dataTestMiniMumdayAndMaximumDay.currentProduct, dataTestMiniMumdayAndMaximumDay.productCollections, dataTestMiniMumdayAndMaximumDay.specificCollections);
        let expectedOutput = 7;
        chai.assert.equal(expectedOutput, res);
    });

    it('The result returns undefined if  specificProducts Empty and  productCollections Empty', () => {
        const res = maximumDays(dataTestMiniMumdayAndMaximumDay.specificProductsEmpty, dataTestMiniMumdayAndMaximumDay.currentProduct, dataTestMiniMumdayAndMaximumDay.productCollectionsEmpty, dataTestMiniMumdayAndMaximumDay.specificCollections);
        let expectedOutput = undefined;
        chai.assert.equal(expectedOutput, res);
    });

    it('The result returns 2 if there is no specific Product and current Product', () => {
        const res = maximumDays(dataTestMiniMumdayAndMaximumDay.specificProductsEmpty, dataTestMiniMumdayAndMaximumDay.currentProduct, dataTestMiniMumdayAndMaximumDay.productCollections, dataTestMiniMumdayAndMaximumDay.specificCollections);
        let expectedOutput = 2;
        chai.assert.equal(expectedOutput, res);
    });

    it('The result returns 10 if product have maximunDay = -1', () => {
        const res = maximumDays(dataTestMiniMumdayAndMaximumDay.specificProductsIsNegative, dataTestMiniMumdayAndMaximumDay.currentProduct, dataTestMiniMumdayAndMaximumDay.productCollections, dataTestMiniMumdayAndMaximumDay.specificCollections);
        let expectedOutput = 10;
        chai.assert.equal(expectedOutput, res);
    });
    let productCollectionsNotExitsSpecificCollections = [
        238612971692
    ]
    it('The result returns -1 if specificProducts Empty productCollections not exits specificCollections', () => {
        const res = maximumDays(dataTestMiniMumdayAndMaximumDay.specificProductsEmpty, dataTestMiniMumdayAndMaximumDay.currentProduct, dataTestMiniMumdayAndMaximumDay.productCollectionsNotExitsSpecificCollections, dataTestMiniMumdayAndMaximumDay.specificCollections);
        let expectedOutput = -1;
        chai.assert.equal(expectedOutput, res);
    });


    it('The result returns null if specificProducts is Strings', () => {
        const res = minimumDays(dataString.string, dataTestMiniMumdayAndMaximumDay.currentProduct, dataTestMiniMumdayAndMaximumDay.productCollections, dataTestMiniMumdayAndMaximumDay.specificCollections);
        let expectedOutput = null;
        chai.assert.equal(expectedOutput, res);
    });
    it('The result returns null if specificProducts is Number', () => {
        const res = minimumDays(dataNumber.interger, dataTestMiniMumdayAndMaximumDay.currentProduct, dataTestMiniMumdayAndMaximumDay.productCollections, dataTestMiniMumdayAndMaximumDay.specificCollections);
        let expectedOutput = null;
        chai.assert.equal(expectedOutput, res);
    });
    it('The result returns null if currentProduct is Strings', () => {
        const res = minimumDays(dataString.string, dataTestMiniMumdayAndMaximumDay.currentProduct, dataTestMiniMumdayAndMaximumDay.productCollections, dataTestMiniMumdayAndMaximumDay.specificCollections);
        let expectedOutput = null;
        chai.assert.equal(expectedOutput, res);
    });
    it('The result returns null if currentProduct is Number', () => {
        const res = minimumDays(dataTestMiniMumdayAndMaximumDay.specificProducts, dataNumber.interger, dataTestMiniMumdayAndMaximumDay.productCollections, dataTestMiniMumdayAndMaximumDay.specificCollections);
        let expectedOutput = null;
        chai.assert.equal(expectedOutput, res);
    });
    it('The result returns null if currentProduct is Strings', () => {
        const res = minimumDays(dataTestMiniMumdayAndMaximumDay.specificProducts, dataString.string, dataTestMiniMumdayAndMaximumDay.productCollections, dataTestMiniMumdayAndMaximumDay.specificCollections);
        let expectedOutput = null;
        chai.assert.equal(expectedOutput, res);
    });
    it('The result returns null if currentProduct is emptyArray', () => {
        const res = minimumDays(dataTestMiniMumdayAndMaximumDay.specificProducts, dataArrayEmpty, dataTestMiniMumdayAndMaximumDay.productCollections, dataTestMiniMumdayAndMaximumDay.specificCollections);
        let expectedOutput = null;
        chai.assert.equal(expectedOutput, res);
    });
    it('The result returns null if specificProducts.minimumday is Strings', () => {
        const res = minimumDays(dataTestMiniMumdayAndMaximumDay.specificProductsMinimumDaysString, dataTestMiniMumdayAndMaximumDay.currentProduct, dataTestMiniMumdayAndMaximumDay.productCollections, dataTestMiniMumdayAndMaximumDay.specificCollections);
        let expectedOutput = null;
        chai.assert.equal(expectedOutput, res);
    });
    it('The result returns null if specificProducts.minimumday is Negative', () => {
        const res = minimumDays(dataTestMiniMumdayAndMaximumDay.specificProductsMinimumDaysIsNegative, dataTestMiniMumdayAndMaximumDay.currentProduct, dataTestMiniMumdayAndMaximumDay.productCollections, dataTestMiniMumdayAndMaximumDay.specificCollections);
        let expectedOutput = null;
        chai.assert.equal(expectedOutput, res);
    });
    it('The result returns null if  specificProducts empty and productCollections is string', () => {
        const res = minimumDays(dataArrayEmpty, dataTestMiniMumdayAndMaximumDay.currentProduct, dataString.string, dataTestMiniMumdayAndMaximumDay.specificCollections);
        let expectedOutput = null;
        chai.assert.equal(expectedOutput, res);
    });
    it('The result returns null if  specificProducts empty and  productCollections is number', () => {
        const res = minimumDays(dataArrayEmpty, dataTestMiniMumdayAndMaximumDay.currentProduct, dataNumber.interger, dataTestMiniMumdayAndMaximumDay.specificCollections);
        let expectedOutput = null;
        chai.assert.equal(expectedOutput, res);
    });
    it('The result returns null if productCollections is emptyArray', () => {
        const res = minimumDays(dataArrayEmpty, dataTestMiniMumdayAndMaximumDay.currentProduct, dataArrayEmpty, dataTestMiniMumdayAndMaximumDay.specificCollections);
        let expectedOutput = -1;
        chai.assert.equal(expectedOutput, res);
    });

});
describe('function isValid', () => {
    it('The result return false if attributes empty , MinimumdayS = 2, IsEmpty = flase', () => {
        const res = isValid(dataTestIsValid.attributesEmpty, dataTestIsValid.attributeNames, dataTestIsValid.MinimumDayS, dataTestIsValid.isEmptyFalse);
        let expectedOutput = false;
        chai.assert.equal(expectedOutput, res);
    });
    it('The result return false if attributes empty MinimumdayS = 2 IsEmpty = true', () => {
        const res = isValid(dataTestIsValid.attributesEmpty, dataTestIsValid.attributeNames, dataTestIsValid.MinimumDayS, dataTestIsValid.isEmptyTrue);
        let expectedOutput = false;
        chai.assert.equal(expectedOutput, res);
    });
    it('The result return false if attributes empty MinimumdayS = 2 IsEmpty = flase', () => {
        const res = isValid(dataTestIsValid.attributesEmpty, dataTestIsValid.attributeNames, dataTestIsValid.MinimumDayS, dataTestIsValid.isEmptyFalse);
        let expectedOutput = false;
        chai.assert.equal(expectedOutput, res);
    });

    it('The result return true if attributes empty MinimumdayS = -1 IsEmpty = flase', () => {
        const res = isValid(dataTestIsValid.attributesEmpty, dataTestIsValid.attributeNames, dataTestIsValid.MinimumDaySUderfined, dataTestIsValid.isEmptyFalse);
        let expectedOutput = true;
        chai.assert.equal(expectedOutput, res);
    });
    it('The result return true if attributes empty MinimumdayS = -1 IsEmpty = true', () => {
        const res = isValid(dataTestIsValid.attributesEmpty, dataTestIsValid.attributeNames, dataTestIsValid.MinimumDaySUderfined, dataTestIsValid.isEmptyTrue);
        let expectedOutput = true;
        chai.assert.equal(expectedOutput, res);
    });
    it('The result return false if attributes  have attributeNames.date and MinimumdayS = 2 IsEmpty = flase', () => {
        const res = isValid(dataTestIsValid.attributesHaveAttributeNamesDate, dataTestIsValid.attributeNames, dataTestIsValid.MinimumDayS, dataTestIsValid.isEmptyFalse);
        let expectedOutput = false;
        chai.assert.equal(expectedOutput, res);
    });
    it('The result return true if attributes  have attributeNames.date and MinimumdayS = -1 IsEmpty = flase', () => {
        const res = isValid(dataTestIsValid.attributesHaveAttributeNamesDate, dataTestIsValid.attributeNames, dataTestIsValid.MinimumDaySUderfined, dataTestIsValid.isEmptyFalse);
        let expectedOutput = true;
        chai.assert.equal(expectedOutput, res);
    });
    it('The result return true if attributes have attributeNames.date and MinimumdayS = -1 IsEmpty = true', () => {
        const res = isValid(dataTestIsValid.attributesHaveAttributeNamesDate, dataTestIsValid.attributeNames, dataTestIsValid.MinimumDaySUderfined, dataTestIsValid.isEmptyTrue);
        let expectedOutput = true;
        chai.assert.equal(expectedOutput, res);
    });
    it('The result return true if attributes have attributeNames.date and MinimumdayS = -1 IsEmpty = true', () => {
        const res = isValid(dataTestIsValid.attributesHaveAttributeNamesDate, dataTestIsValid.attributeNames, dataTestIsValid.MinimumDaySUderfined, dataTestIsValid.isEmptyTrue);
        let expectedOutput = true;
        chai.assert.equal(expectedOutput, res);
    });

    it('The result return true if attributes have attributeNames.date and MinimumdayS = -1 IsEmpty = true ', () => {
        const res = isValid(dataTestIsValid.attributesHaveAttributeNamesDateString, dataTestIsValid.attributeNames, dataTestIsValid.MinimumDaySUderfined, dataTestIsValid.isEmptyTrue);
        let expectedOutput = true;
        chai.assert.equal(expectedOutput, res);
    });
    it('The result return true if attributes have attributeNames.date and MinimumdayS = string IsEmpty = true ', () => {
        const res = isValid(dataTestIsValid.attributesHaveAttributeNamesDateString, dataTestIsValid.attributeNames, dataString.string, dataTestIsValid.isEmptyTrue);
        let expectedOutput = true;
        chai.assert.equal(expectedOutput, res);
    });
});
describe('function fixedDay()', () => {
    var clock = sinon.useFakeTimers(new Date("Tue Apr 13 2021 09:07:50 GMT+0700 (Giờ Đông Dương)"))
    let now = new Date();
    it(`The result return new Date() = ${now} if  specificProducts = [] and specificCollections = [] `, () => {
        let res = fixedDay(itemCart, dataArrayEmpty, dataArrayEmpty, settings, currentCollection)
        let expectedOutput = new Date();
        res = JSON.stringify(res);
        expectedOutput = JSON.stringify(expectedOutput)
        chai.assert.equal(expectedOutput, res, `== new Date ${expectedOutput}`);
    });
    it(`The result return newDate = ${new Date(1618632470000)} if item cart exits specificProducts ,specificCollections = [] , kind_of_delivery_date = shortest`, () => {
        let res = fixedDay(itemCart, specificProducts, dataArrayEmpty, dataTestFixedDay.settingsShortest.settings, currentCollection)
        let expectedOutput = new Date(1618632470000);
        res = JSON.stringify(res);
        expectedOutput = JSON.stringify(expectedOutput);
        chai.assert.equal(expectedOutput, res);
    });
    it(`The result return newDate = ${new Date(1618279670000)} if item cart exits specificProducts ,specificCollections = [] , kind_of_delivery_date = longest`, () => {
        let res = fixedDay(itemCart, specificProducts, dataArrayEmpty, dataTestFixedDay.settingsLongest.settings, currentCollection)
        let expectedOutput = new Date(1618279670000);
        res = JSON.stringify(res);
        expectedOutput = JSON.stringify(expectedOutput);
        chai.assert.equal(expectedOutput, res);
    });
    it(`The result return newDate = ${new Date(1618765200000)} if itemCart = [] ,currentCollection exits  specificCollections  , kind_of_delivery_date = longest`, () => {
        let res = fixedDay(dataArrayEmpty, specificProducts, specificCollections, dataTestFixedDay.settingsLongest.settings, currentCollection)
        let expectedOutput = new Date(1618765200000);
        res = JSON.stringify(res);
        expectedOutput = JSON.stringify(expectedOutput);
        chai.assert.equal(expectedOutput, res);
    });
    it(`The result return newDate =  ${new Date(1619024400000)} if itemCart = [] ,currentCollection exits  specificCollections  , kind_of_delivery_date = shortest`, () => {
        let res = fixedDay(dataArrayEmpty, specificProducts, specificCollections, dataTestFixedDay.settingsShortest.settings, currentCollection)
        let expectedOutput = new Date(1619024400000);
        res = JSON.stringify(res);
        expectedOutput = JSON.stringify(expectedOutput);
        chai.assert.equal(expectedOutput, res);
    });
    it(`The result return newDate =  ${new Date(1619024400000)} if itemCart,currentCollection exits specificProducts, specificCollections,  kind_of_delivery_date = shortest`, () => {
        let res = fixedDay(itemCart, specificProducts, specificCollections, dataTestFixedDay.settingsShortest.settings, currentCollection)
        let expectedOutput = new Date(1619024400000);
        res = JSON.stringify(res);
        expectedOutput = JSON.stringify(expectedOutput);
        chai.assert.equal(expectedOutput, res);
    });
    it(`The result return newDate = ${new Date(1618279670000)} if itemCart,currentCollection exits specificProducts, specificCollections,  kind_of_delivery_date = longest`, () => {
        let res = fixedDay(itemCart, specificProducts, specificCollections, dataTestFixedDay.settingsLongest.settings, currentCollection)
        let expectedOutput = new Date(1618279670000);
        res = JSON.stringify(res);
        expectedOutput = JSON.stringify(expectedOutput);
        chai.assert.equal(expectedOutput, res);
    });
    it(`The result return null if specificProducts is number`, () => {
        let res = fixedDay(itemCart, dataNumber, specificCollections, dataTestFixedDay.settingsLongest.settings, currentCollection)
        let expectedOutput = null;
        chai.assert.equal(expectedOutput, res);
    });
    it(`The result return null if specificProducts is string`, () => {
        let res = fixedDay(itemCart, dataString, specificCollections, dataTestFixedDay.settingsLongest.settings, currentCollection)
        let expectedOutput = null;
        chai.assert.equal(expectedOutput, res);
    });
    it(`The result return null if specificCollections is number`, () => {
        let res = fixedDay(itemCart, specificProducts, dataNumber, dataTestFixedDay.settingsLongest.settings, currentCollection)
        let expectedOutput = null;
        chai.assert.equal(expectedOutput, res);
    });
    it(`The result return null if specificCollections is string`, () => {
        let res = fixedDay(itemCart, specificProducts, dataString, dataTestFixedDay.settingsLongest.settings, currentCollection)
        let expectedOutput = null;
        chai.assert.equal(expectedOutput, res);
    });
    it(`The result return null if specificCollections is string`, () => {
        let res = fixedDay(itemCart, specificProducts, dataString, dataTestFixedDay.settingsLongest.settings, currentCollection)
        let expectedOutput = null;
        chai.assert.equal(expectedOutput, res);
    });
    it(`The result return null if specificCollections is string`, () => {
        let res = fixedDay(itemCart, specificProducts, dataString, dataTestFixedDay.settingsLongest.settings, currentCollection)
        let expectedOutput = null;
        chai.assert.equal(expectedOutput, res);
    });
    it(`The result return null if settings.kind_of_delivery_date is string`, () => {
        let res = fixedDay(itemCart, specificProducts, dataString, dataString, currentCollection)
        let expectedOutput = null;
        chai.assert.equal(expectedOutput, res);
    });
    it(`The result return null if settings.kind_of_delivery_date is number`, () => {
        let res = fixedDay(itemCart, specificProducts, dataString, dataNumber, currentCollection)
        let expectedOutput = null;
        chai.assert.equal(expectedOutput, res);
    });
    it(`The result return  null if cart item is Number`, () => {
        let res = fixedDay(dataNumber, specificProducts, specificCollections, settings, currentCollection)
        let expectedOutput = null;
        res = JSON.stringify(res);
        chai.assert.equal(expectedOutput, res);
    });
    it(`The result return  null if cart item is strings`, () => {
        let res = fixedDay(dataString, specificProducts, specificCollections, settings, currentCollection)
        let expectedOutput = null;
        res = JSON.stringify(res);
        chai.assert.equal(expectedOutput, res);
    });
    it(`The result return null if  specificProducts = [] specificCollections.fixed_day_start is string `, () => {
        let res = fixedDay(itemCart, dataArrayEmpty, dataTestFixedDay.specificCollections_FixedDaystartString, settings, currentCollection)
        let expectedOutput = null;
        chai.assert.equal(expectedOutput, res);
    });
    it(`The result return null if  specificProducts = [] specificCollections.fixed_day_start wrong date format `, () => {
        let res = fixedDay(itemCart, dataArrayEmpty, dataTestFixedDay.specificCollections_FixedDaystart_WrongDateFormat, settings, currentCollection)
        let expectedOutput = null;
        chai.assert.equal(expectedOutput, res);
    });

    it(`The result return null if specificCollections = [] , specificProducts.fixed_day_start is strings `, () => {
        let res = fixedDay(itemCart, dataTestFixedDay.specificProducts_FixedDaystartString, dataArrayEmpty, settings, currentCollection)
        let expectedOutput = null;
        chai.assert.equal(expectedOutput, res);
    });
    it(`The result return null if specificCollections = [] , specificProducts.fixed_day_start wrong date format`, () => {

        let res = fixedDay(itemCart, dataTestFixedDay.specificProducts_FixedDaystartString_WrongDateFormat, dataArrayEmpty, settings, currentCollection)
        let expectedOutput = null;
        chai.assert.equal(expectedOutput, res);
    });
});
describe('function checkIsLimitedOrderDay()', () => {
    it('The result return true if date exits limitedOrderDays', () => {
        let res = checkIsLimitedOrderDay(dataTest_CheckIsLimitedOrderDay.limit.date, dataTest_CheckIsLimitedOrderDay.limit.limitedOrderDays)
        let expectedOutput = true;
        chai.assert.equal(expectedOutput, res);
    });
    it('The result return false if date not exits limitedOrderDays', () => {
        let res = checkIsLimitedOrderDay(dataTest_CheckIsLimitedOrderDay.notLimit.date, dataTest_CheckIsLimitedOrderDay.notLimit.limitedOrderDays)
        let expectedOutput = false;
        chai.assert.equal(expectedOutput, res);
    });
    it('The result return null if date is strings ', () => {
        let res = checkIsLimitedOrderDay(dataString, dataTest_CheckIsLimitedOrderDay.notLimit.limitedOrderDays)
        let expectedOutput = null;
        chai.assert.equal(expectedOutput, res);
    });
    it('The result return null if date is number ', () => {
        let res = checkIsLimitedOrderDay(dataNumber, dataTest_CheckIsLimitedOrderDay.notLimit.limitedOrderDays)
        let expectedOutput = null;
        chai.assert.equal(expectedOutput, res);
    });
    it('The result return null if LimitOrder is number ', () => {
        let res = checkIsLimitedOrderDay(dataTest_CheckIsLimitedOrderDay.limit.date, dataNumber)
        let expectedOutput = null;
        chai.assert.equal(expectedOutput, res);
    });
    it('The result return null if LimitOrder is string ', () => {
        let res = checkIsLimitedOrderDay(dataTest_CheckIsLimitedOrderDay.limit.date, dataString)
        let expectedOutput = null;
        chai.assert.equal(expectedOutput, res);
    });
    it('The result return null if LimitOrder is array empty ', () => {
        let res = checkIsLimitedOrderDay(dataTest_CheckIsLimitedOrderDay.limit.date, dataArrayEmpty)
        let expectedOutput = null;
        chai.assert.equal(expectedOutput, res);
    });
});
describe('function getMindate()', () => {
    var clock = sinon.useFakeTimers(new Date("Tue Apr 13 2021 09:07:50 GMT+0700 (Giờ Đông Dương)"))
    it(`The result return ${new Date(new Date().setHours(0, 0, 0, 0))} if date exits limitedOrderDays`, () => {
        let res = getMinDate(dataTestGetMindate.disableDays);
        let expectedOutput = new Date(new Date().setHours(0, 0, 0, 0));
        res = JSON.stringify(res);
        expectedOutput = JSON.stringify(expectedOutput)
        chai.assert.equal(expectedOutput, res);
    });
    it(`The result return ${new Date(new Date().setHours(0, 0, 0, 0))} if date exits disableDays empty`, () => {
        let res = getMinDate(dataArrayEmpty);
        let expectedOutput = new Date(new Date().setHours(0, 0, 0, 0));
        res = JSON.stringify(res);
        expectedOutput = JSON.stringify(expectedOutput)
        chai.assert.equal(expectedOutput, res);
    });
    const inCeadays = increaseDay(new Date(new Date().setHours(0, 0, 0, 0)), 1);
    it(`The result return ${inCeadays} if  day equal disableDay`, () => {
        let res = getMinDate(dataTestGetMindate.disableDaysEqualDay).getTime();
        let expectedOutput = inCeadays.getTime();
        chai.assert.equal(expectedOutput, res);
    });


    it(`The result return null if date exits disableDays is Strings`, () => {
        let res = getMinDate(dataString);
        let expectedOutput = null;
        chai.assert.equal(expectedOutput, res);
    });
    it(`The result return null if date exits disableDays is number`, () => {
        let res = getMinDate(dataString);
        let expectedOutput = null;
        chai.assert.equal(expectedOutput, res);
    });
    it(`The result return null if date exits disableDays is number`, () => {
        let res = getMinDate(dataString);
        let expectedOutput = null;
        chai.assert.equal(expectedOutput, res);
    });
    it(`The result return null if date exits disableDays wrong fomat date `, () => {
        let res = getMinDate(dataTestGetMindate.disableDaysWrongFomatDate);
        let expectedOutput = null;
        chai.assert.equal(expectedOutput, res);
    });
});
describe('function getListLimitedOrderDays() ', () => {
    it('the result [] if  totalOrders is empty', () => {
        let res = getListLimitedOrderDays(dataArrayEmpty, DataGetListLimitedOrderDays.settings).length
        let expectedOutput = [];
        expectedOutput = expectedOutput.length
        chai.assert.equal(expectedOutput, res);
    });
});



