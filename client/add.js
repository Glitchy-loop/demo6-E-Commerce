const form = document.forms.addProductForm

form.addEventListener('submit', async e => {
  e.preventDefault()

  let name = e.target.elements.name.value.trim()
  let price = Number(e.target.elements.price.value.trim())
  let image = e.target.elements.image.value.trim()

  addABike(name, price, image)

  window.location.replace('./index.html')
})

const addABike = (name, price, image) => {
  try {
    fetch('http://localhost:8080/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        price,
        image
      })
    }).then(res => console.log(res))
  } catch (err) {
    console.log(err.message)
  }
}
