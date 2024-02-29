import React from "react";


function Product ({ product }) {
    return (  
        <div className="card col-4">
            <img className="card-img-top" src={product.thumbnail} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <div className="row">
                    <p className="badge badge-primary text-dark col-3">{product.category}</p>
                    <p className="col-6">brand: {product.brand}</p>
                    <p className="col-3">{product.price}$</p>
                </div>

                <div className="row">
                    <p className="col-6">Rating : {product.rating}</p>
                    <p className="col-6">{product.stock > 0 ? "In stock" : "Out of stock"}</p>
                </div>
                <a href="#" className="btn btn-primary">Buy</a>
            </div>
      </div>
    );
}

export default Product;