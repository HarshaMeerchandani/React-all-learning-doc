import React, { Component } from "react";
import proimage from "./images/proimage.jpg";

class Product extends Component {
  constructor() {
    super();
    this.state = {
      product_name: "Cream",
      product_img: <img src={proimage} width="100px;" alt="proimage" />,
      img: "https://static.toiimg.com/photo/64870090.cms",
      product_cost: "400rps",
      product_wt: "500g",
      product_gst: "8%",
      products: [
        {
          name: "facecream",
          price: 200,
          product_img: <img src={proimage} width="100px;" alt="proimage" />,
          img: "https://static.toiimg.com/photo/64870090.cms",
          gst: "10%"
        },

        {
          name: "washcream",
          price: 300,
          product_img: <img src={proimage} width="100px;" alt="proimage" />,
          img: "https://static.toiimg.com/photo/64870090.cms",
          gst: "14%"
        },

        {
          name: "handcream",
          price: 300,
          product_img: <img src={proimage} width="100px;" alt="proimage" />,
          img: "https://static.toiimg.com/photo/64870090.cms",
          gst: "14%"
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <h5>Product Details </h5>
        <p>
          {this.state.product_name} , {this.state.product_img} ,{" "}
          {this.state.product_cost} ,{this.state.product_wt} ,
          {this.state.product_gst}{" "}
        </p>
        <h5>Product Array </h5>
        <tr>
          <td>
            <th>Title</th>
          </td>
          <td>
            {" "}
            <th>Price</th>
          </td>
          <td>
            {" "}
            <th>Image</th>
          </td>
          <td>
            {" "}
            <th>GST</th>
          </td>
        </tr>
        {this.state.products.map(product => {
          return (
            <table>
              <tr>
                <td>{product.name}</td>
                <td>{product.product_img}</td>
                <td>
                  <img src={product.img} alt="product images" width="100px" />
                </td>
                <td>{product.price}</td>
                <td>{product.gst}</td>
              </tr>
            </table>
          );
        })}
      </div>
    );
  }
}

export default Product;
