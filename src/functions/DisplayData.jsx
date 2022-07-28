import {useState, useEffect, useRef} from 'react';

function DisplayData(props) {
 
  const [cartItem, setCardItem] = useState([])
  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)

    if (productExit) {
      setCardItem(cartItem.map((item) =>
      (item.id === product.id ?
        { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      setCardItem([...cartItem, { ...product, qty: 1 }])
    }
  }

  const decreaseQty = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)
    if (productExit.qty === 1) {
      setCardItem(cartItem.filter((item) => item.id !== product.id))
    } else {
      setCardItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }
  return (
    <div className="container">
        {
            props.data.map((productItems) => {
                return (
                    
                        <div className="card">
                            <div className="row-img">
                                <img src={productItems.images[1].sizes[3].url} className="card-img-top" alt="..." />
                            </div>

                            <div className="card-body">
                                <h5 className="card-title">{productItems.description}</h5>
                                <p className="card-text1">1 ud.</p>
                               
                                    <button className="a btn" onClick={() => addToCart(productItems)}>
                                        Añadir
                                    </button>                                     
                            </div>
                        </div>   
                )
            })}
    </div>

  )
} 

export default DisplayData;