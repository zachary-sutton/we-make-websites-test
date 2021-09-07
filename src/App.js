import './App.css';
import React , {useState} from 'react';
import orders from "./stationery-data-"

/* 
index.js
export default class OrdersAnalyzer {
//import order data from stationery-data.json
    
    constructor() {
        this.weekdays = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
    }

    averageOrderValue(orders, weekday) {
        // TODO: Implement
        return {};
    }
}

*/

function App(){
  //set order data to state
  const [appOrders, setAppOrders] = useState(orders)
  const [dayOrder, setDayOrder] = useState()

  function calcDay(appOrders){
    //convert dates in arr from json dates to js dates
    appOrders.orders.forEach(orders => orders.creationDate = new Date(orders.creationDate))
    //convert dates to getDay
    appOrders.orders.forEach(orders => orders.creationDate = orders.creationDate.getDay())

    //filter through the new array by comparing the dates
    //return new array for searched day
    const theDay = appOrders.orders.filter(order => order.creationDate === 0)

    //total count of orders on searched day 
    const count = theDay.length
    // //get numbers of items in each order
    // const getLength = theDay.map(item => item.orderLines.length)
    // console.log(theDay)

    //calc the total of items in orders
    // const calcLength = getLength.reduce((a, b) => a + b, 0)
    console.log("count = " + count)
    
    //finding the total price of an order - map over the orders on the day 
    const orderTotal = theDay.map(item => {
      //map over the individual items and quantity, multiply them
      const total = item.orderLines.map(item => item.quantity * item.unitPrice)
      //get sum of array of items and quantity total
      const addedTotal = total.reduce((a, b) => a + b, 0)
      return addedTotal
    })
    
    //get total sum
    const finalOrderTotal = orderTotal.reduce((a, b) => a + b, 0)
    //round total to 2dp
    const roundFinalOrderTotal = Math.round(finalOrderTotal * 100) / 100
    console.log("total = " + roundFinalOrderTotal)

    //find average
    const average = roundFinalOrderTotal / theDay.length 
    //round average to 2dp
    const roundAverage = Math.round(average * 100) / 100
    console.log("average = " + roundAverage)

    const dayOrder = {
      count: count,
      total: roundFinalOrderTotal,
      average: roundAverage
    }

  }

    return (
      <div className="App">
        {calcDay(appOrders)}
      </div>
    );
}

export default App;
