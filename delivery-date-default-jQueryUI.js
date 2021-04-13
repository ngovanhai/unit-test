export const minimumDays = (specificProducts, currentProduct, productCollections, specificCollections) => {
    // specificProducts : sản phẩm được được chọn trong admin
    // currentProduct : sản phẩm hiện tại  
    // specificCollections : danh sách collections được chọn trong admin
    // productCollections : danh sách id các các collection chứa sản phẩm đang xem

    let product = specificProducts.find(
        (product) => Number(product.product_id) === currentProduct.id
    );
    if (product) {
        return product ? Number(product.minimum_days) : -1;
    }
    if (productCollections.length > 0) {
        for (let i = 0; i < productCollections.length; i++) {
            let collection = specificCollections.find(
                (collection) =>
                    Number(collection.collection_id) === productCollections[i]
            );
            if (collection) {
                return collection.minimum_days;
            }
            if (i == productCollections.length - 1) {
                return -1;
            }
        }
    }
}


export const maximumDays = (specificProducts, currentProduct, productCollections, specificCollections) => {

    // specificProducts : sản phẩm được được chọn trong admin
    // currentProduct : sản phẩm hiện tại  
    // specificCollections : danh sách collections được chọn trong admin
    // productCollections : danh sách id các các collection chứa sản phẩm đang xem

    let product = specificProducts.find(
        (product) => Number(product.product_id) === currentProduct.id
    );
    if (product) {
        if (product.maximum_days == -1) {
            product.maximum_days = 10;
        }
        return product
            ? Number(product.maximum_days)
            : 10;
    }
    if (productCollections.length > 0) {
        for (let i = 0; i < productCollections.length; i++) {
            let collection = specificCollections.find(
                (collection) =>
                    Number(collection.collection_id) === productCollections[i]
            );
            if (collection) {
                return collection.maximum_days;
            }
            if (i == productCollections.length - 1) {
                return -1;
            }
        }
    }
}


export const isValid = (attributes, attributeNames, minimumDays, isEmpty) => {
    // attributes
    // attributeNames
    // minimumDays
    // isEmpty
    const pickedDate = attributes.hasOwnProperty(attributeNames.date)
        ? new Date(attributes[attributeNames.date])
        : new Date();
    const pickedTime = pickedDate.getTime();
    const currentDate = new Date().setHours(0, 0, 0, 0);
    const firstValidDate = increaseDay(currentDate, minimumDays);
    const firstValidTime = new Date(firstValidDate).getTime();
    const isExpired = firstValidTime > pickedTime;
    function increaseDay(day, time) {
        if (time > 0) {
            let d = new Date(day);
            d.setDate(d.getDate() + Number(time));
            d = new Date(d);
            return d;
        } else {
            return 0;
        }
    }
    return !isEmpty && !isExpired;
}


export const fixedDay = (items, specificProducts, specificCollections, settings, currentCollection) => {
    var clock = sinon.useFakeTimers(new Date("Tue Apr 13 2021 09:07:50 GMT+0700 (Giờ Đông Dương)"))  // fake new Date()s
    // items : product trong  cart
    // currentCollection : collection trong cart
    // specificProducts : sản phẩm được được chọn trong admin
    // specificCollections : danh sách collections được chọn trong admin
    if (specificCollections.length === 0 && specificProducts.length === 0) {
        return new Date();
    }
    let fixedDays = [];
    let finalFixedDay = new Date();

    const purchasedProducts = items;
    const kindOfDeliveryDate = settings.kind_of_delivery_date;
    const interferingProducts = specificProducts.filter((specific) => {
        return purchasedProducts.some(
            (purchased) =>
                Number(purchased.product_id) === Number(specific.product_id)
        );
    });

    const interferingCollections = specificCollections.filter((specCol) => {
        return currentCollection.some(
            (curCol_id) => Number(curCol_id) === Number(specCol.collection_id)
        );
    });
    if (interferingProducts.length > 0) {
        interferingProducts.forEach((iProd) =>
            fixedDays.push(iProd.fixed_day_start)
        );
    }
    if (interferingCollections.length > 0) {
        interferingCollections.forEach((iColl) =>
            fixedDays.push(iColl.fixed_day_start)
        );
    }
    if (fixedDays.length > 0) {
        let fixedDays_in_milliseconds = fixedDays.map((day) => {
            if (day === "today") return new Date().getTime();
            return new Date(day).getTime();
        });
        switch (kindOfDeliveryDate) {
            case "longest":
                finalFixedDay = new Date(Math.min(...fixedDays_in_milliseconds));
                break;
            case "shortest":
                finalFixedDay = new Date(Math.max(...fixedDays_in_milliseconds));
                break;
            default:
                finalFixedDay = new Date();
        }
        return finalFixedDay;
    } else {
        return finalFixedDay;
    }
}


export const getMinDate = (disableDays) => {
    var clock = sinon.useFakeTimers(new Date("Tue Apr 13 2021 09:07:50 GMT+0700 (Giờ Đông Dương)"))
    let minDate = new Date(new Date().setHours(0, 0, 0, 0));
    console.log("minDate trc", minDate);
    while (checkIsDisableDays(minDate, disableDays)) {
        minDate = increaseDay(minDate, 1);
    }
    console.log("minDate", minDate);
    return minDate;
}

export const checkIsDisableDays = (day, disableDays) => {
    console.log("disableDays", disableDays);
    const isDisable = disableDays.some((disableDay) => {
        return (
            new Date(disableDay.setHours(0, 0, 0, 0)).getTime() == day.getTime()
        );
    });
    return isDisable;
}

export const increaseDay = (day, time) => {
    if (time > 0) {
        let d = new Date(day);
        d.setDate(d.getDate() + Number(time));
        d = new Date(d);
        return d;
    } else {
        return 0;
    }
}
export const checkIsLimitedOrderDay = (date, limitedOrderDays) => {
    const isDisable = limitedOrderDays.some((disableDay) => {
        return (
            new Date(disableDay.setHours(0, 0, 0, 0)).getTime() ==
            new Date(date.setHours(0, 0, 0, 0)).getTime()
        );
    });
    return isDisable;
}

export const getListLimitedOrderDays = (totalOrders, settings) => {
    const limitOrder = Number(settings.order_limit);
    let disableDays = [];
    if (Array.isArray(totalOrders) && totalOrders.length > 0) {
        totalOrders.map((totalOrder) => {
            if (Number(totalOrder.total_orders) >= limitOrder) {
                let convertResult = self.convertDateToEnglish(
                    totalOrder.delivery_date
                );
                if (convertResult != undefined) {
                    disableDays.push(new Date(convertResult));
                }
            }
        });
    }
    return disableDays;
}

export const testMocha = () => {
    return "hello";
}
export const convertDateToEnglish = (source) => {
    let result;
    const moment_language = this.settings.calendar_language.split("-")[1];
    result = moment(source, MOMENT_DATE_FORMATS, moment_language, true)
        .locale("en")
        .format("YYYY-MM-DD");

    if (moment(result).isValid()) return result;
    else return undefined;
}


