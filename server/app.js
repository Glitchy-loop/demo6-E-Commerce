const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())
const products = [
  {
    image:
      'https://cdn.pixabay.com/photo/2013/07/13/13/43/racing-bicycle-161449_960_720.png',
    name: 'Mountain bike',
    price: 140
  },
  {
    image:
      'https://cdn.pixabay.com/photo/2013/07/13/13/46/bicycle-161524_960_720.png',
    name: 'Simple bike',
    price: 310
  },
  {
    image:
      'https://cdn.pixabay.com/photo/2019/06/12/16/59/bike-4269753_960_720.jpg',
    name: 'Racing bike',
    price: 820
  },
  {
    image:
      'https://cdn.pixabay.com/photo/2016/11/18/12/49/bicycle-1834265_960_720.jpg',
    name: 'Just a bike',
    price: 510
  }
]

app.get('/products', (req, res) => {
  res.send(products)
})

app.post('/products', (req, res) => {
  if (req.body.image && req.body.name && req.body.price) {
    products.push({
      image: req.body.image,
      name: req.body.name,
      price: req.body.price
    })
    res.send('Product addedd succesfully')
  } else {
    res.send('Incorrect data')
  }
})

app.post('/products/search', (req, res) => {
  filteredProducts = products.filter(product => {
    return product.name.toLowerCase().includes(req.body.name.toLowerCase())
  })
  res.send(filteredProducts)
})

app.listen(8080, () => console.log('Server is running on port 8080'))
