import OrdersAnalyzer from "../src/index";
import * as matchers from './matchers';

describe('OrdersAnalyzer', () => {
    beforeEach(() => {
        jasmine.addMatchers(matchers);
    });

    const weekdays = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
    const testedWeekdays = ["SUNDAY", "MONDAY", "TUESDAY", "SATURDAY"];
    const metrics = ["total", "count", "avg"];
    const analyzer = new OrdersAnalyzer();

    describe('averageOrderValue for "orders" dataset', () => {
        const { orders } = require('./stationery-data.json');
        const expectedResults = require('./stationery-testcases.json');

        testedWeekdays.forEach(key => {
            const weekday = key;
            const expectedProductSales = expectedResults[key];
            const dailySales = analyzer.averageOrderValue(orders, weekday);

            metrics.forEach((metric) => {
                it(`should return correct ${metric} value for ${weekday}`, () => {
                    if (expectedProductSales[metric] === 0) {
                        expect(dailySales[metric]).toBeUndefinedOrZero();
                    } else {
                        expect(dailySales[metric]).toEqual(expectedProductSales[metric]);
                    }
                });
            });
        });
    });
});
