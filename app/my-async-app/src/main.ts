import './style.css'

const placeOrder = (drink: string) => {
  return new Promise((resolve, reject) => {
    if (drink === 'blackCoffee') {
      resolve('Order Placed. YAYYYYYY!!!')
    } else {
      reject('Sorry, We only serve coffee. :(')
    }
  })
}

const processOrder = (order: string) => {
  return new Promise((resolve) => {
    console.log('Order is being processed')
    resolve(`Black Coffee is served for the ${order}`)
  })
}

placeOrder('blackCoffee').then((orderFromCustomer) => {
  console.log('Request received')
  if (typeof orderFromCustomer !== 'string') return
  let orderProcessed = processOrder(orderFromCustomer)
  return orderProcessed
}).then((orderProcessed) => {
  console.log(orderProcessed)
}).catch((err) => {
  console.log(err)
})