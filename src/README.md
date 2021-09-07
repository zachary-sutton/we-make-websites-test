# Find an average order value for every weekday

You are working on an e-commerce platform which requires a new functionality to be implemented: calculating an average order value, grouped by days of week (along with the data required to calculate the average).

# Setup

Follow these steps if you are using zip/git mode (i.e. not available inside Devskiller in-browser IDE):

1. `npm install` – install dependencies
2. `npm test` – run all tests once (this will be used to evaluate your solutions)
3. `npm run test:watch` - run all tests in _watch mode_ (optionally, you can use it locally if you prefer)

# Task

Implement `OrdersAnalyzer#averageOrderValue` method that

1. For passed orders and weekday will return an object with the following keys:
  - `count` - number of orders (integer), for that day of week
  - `total` - total value of all orders, for that day of week
  - `avg` - an average total order value, for that day of week
An example object would look like the following:
```json
{
  "count": 3,
  "total": 30,
  "avg": 10
}
```
if there were `3` orders with total value `30` (so the average is `10`).

2. The `total` and `avg` values should be rounded to two decimal digits, half up. For instance, if the calculated value equals `0.555` then it should be rounded to `0.56`.

3. The method should always return an object. If there are no orders for some weekday, there might be no entry in the nested object or there might be an entry with a `0` value. For example, both following are fine:
```json
{
  "total": 0,
  "count": 0,
  "avg": 0
}
```
and
```json
{
}
```

## Example data

The data (_orders_) is available in `data.json`. Testcases are defined in `testcases.json`.

Orders collection:

```javascript
[
  {
    "orderId": 554,
    "creationDate": "2017-03-25T10:35:20Z", // Saturday
    "orderLines": [
      { "productId": 9872, "name": "Pencil", "quantity": 3, "unitPrice": 3.00 }
    ]
  },
  {
    "orderId": 555,
    "creationDate": "2017-03-25T11:24:20Z", // Saturday
    "orderLines": [
      { "productId": 9872, "name": "Pencil", "quantity": 1, "unitPrice": 3.00 },
      { "productId": 1746, "name": "Eraser", "quantity": 1, "unitPrice": 1.00 }
    ]
  },
  {
    "orderId": 453,
    "creationDate": "2017-03-27T14:53:12Z", // Monday
    "orderLines": [
      { "productId": 5723, "name": "Pen", "quantity": 4, "unitPrice": 4.22 },
      { "productId": 9872, "name": "Pencil", "quantity": 3, "unitPrice": 3.12 },
      { "productId": 3433, "name": "Erasers Set", "quantity": 1, "unitPrice": 6.15 }
    ]
  },
  {
    "orderId": 431,
    "creationDate": "2017-03-20T12:15:02Z", // Monday
    "orderLines": [
      { "productId": 5723, "name": "Pen", "quantity": 7, "unitPrice": 4.22 },
      { "productId": 3433, "name": "Erasers Set", "quantity": 2, "unitPrice": 6.15 }
    ]
  },
  {
    "orderId": 690,
    "creationDate": "2017-03-26T11:14:00Z", // Sunday
    "orderLines": [
      { "productId": 9872, "name": "Pencil", "quantity": 4, "unitPrice": 3.12 },
      { "productId": 4098, "name": "Marker", "quantity": 5, "unitPrice": 4.50 }
    ]
  }
]
```

## Example output

Your implementation should return following output for example data and `"SATURDAY"`:

```json
{
  "total": 13,
  "count": 2,
  "avg": 6.5
}
```

In the example above, there are two orders placed on Saturday: first with total value equal to `9` and second with total value equal to `4`, so:
- the total order value is `13`
- the order count is `2`
- the average order value is `6.5`
