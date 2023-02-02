
const value = document.getElementsByClassName( 'product__quantity-value')
const buttons = document.getElementsByClassName('product__quantity-control')
const buttonsDec= document.getElementsByClassName('product__quantity-control_dec')
const buttonsInc =document.getElementsByClassName('product__quantity-control_inc')
const arrayInc= Array.from(buttonsInc)
const arrayDec= Array.from(buttonsDec)

const product = document.getElementsByClassName('product')


arrayDec.forEach(el => {
    el.addEventListener('click', choiceDec)
    function choiceDec(event){
        const choiceEl = el.closest('.product').getElementsByClassName('product__quantity-value')[0]
        const sum = parseInt(choiceEl.textContent)  
        if (sum > 1){
            let minus = sum - 1
            choiceEl.innerText = (`${minus}`)
         }
     }
})

arrayInc.forEach(el => {
    el.addEventListener('click', choiceInc)
    function choiceInc(event){
       const choiceEl = el.closest('.product').getElementsByClassName('product__quantity-value')[0]
       const sum = parseInt(choiceEl.textContent)  
       let sum2 = sum + 1 
       choiceEl.innerText = (`${sum2}`)
     }
})


const productAdd = document.getElementsByClassName('product__add')
const arrayProductAdd = Array.from(productAdd)


arrayProductAdd.forEach( el => {
    el.addEventListener('click', add)
    function add(event){
       const products = document.getElementsByClassName('cart__products')
       const dataId = el.closest('.product').getAttribute('data-id')
       const img = el.closest('.product').getElementsByClassName('product__image')
       const imgOfProduct= el.closest('.product').getElementsByClassName('cart__product-image')
       const imgNew = img[0].getAttribute('src')
       const cartProduct = products[0].getElementsByClassName('cart__product')[0]
       const idProduct = document.querySelector(`.cart__product[data-id='${dataId}']`)
       if( idProduct ){
          let newValue = el.closest('.product__quantity').getElementsByClassName('product__quantity-value')[0]
          newValue = parseInt(newValue.textContent)
          let cartProductCount = idProduct.getElementsByClassName('cart__product-count')[0]
          const oldValue = parseInt(cartProductCount.textContent) 
          const sum = newValue + oldValue
          cartProductCount.textContent= sum
    }

    else {
        products[0].insertAdjacentHTML('beforeEnd', `<div class="cart__product" data-id=${dataId}>
                <img class="cart__product-image" src="${imgNew}">
                <div class="cart__product-count">${value[0].textContent}</div>
            </div>`)
    }
}
})
