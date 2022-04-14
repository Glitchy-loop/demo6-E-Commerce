const getBikes = async () => {
  res = await fetch('http://localhost:8080/products')
  const data = await res.json()

  displayBikes(data)
  //   console.log(data)
}

getBikes()

const displayBikes = async data => {
  const products = document.querySelector('.products')

  products.innerHTML = ''

  data.forEach(bike => {
    const div = document.createElement('div')
    div.className = 'product'

    const img = document.createElement('img')
    img.src = bike.image || 'No image'

    const title = document.createElement('div')
    title.className = 'title'
    title.textContent = bike.name || 'No title specified'

    const price = document.createElement('div')
    price.className = 'price'
    price.textContent = bike.price || 'No price specified'

    div.append(img, title, price)

    products.append(div)
  })
}

const search = () => {
  const searchQuery = document.getElementById('search')

  searchQuery.addEventListener('keyup', async () => {
    let search = searchQuery.value.trim().toLowerCase()

    fetch('http://localhost:8080/products/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: search
      })
    })
      .then(res => res.json())
      .then(data => {
        return displayBikes(data)
      })
  })
}

search()
