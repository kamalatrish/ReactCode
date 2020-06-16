import React from 'react';
import axios from 'axios';
// import home from './Images/ap.png'; // Tell Webpack this JS file uses this image
export default class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mobId: localStorage.getItem("mobileId"),
            productDataPrim: {},
            imageUrl: "",
            allData: {},
            response: false
        }
    }
    calculcateDiscount() {
        let discount = this.state.productDataPrim.mark_price - this.state.productDataPrim.sale_price
        let discountPercent = this.state.productDataPrim.mark_price / discount
        console.log(discount);
        let msgString = "You save Rs." + discount + " (" + discountPercent + "% Off)"
        return msgString
    }

    componentDidMount() {
        console.log("mobId", this.state.mobId)
        console.log("Products Page")
        let url = "https://assignment-appstreet.herokuapp.com/api/v1/products/" + this.state.mobId
        axios.get(url)
            .then((response) => {
                console.log("products", response.data);
                console.log("products primary", response.data.primary_product.images);
                console.log(response.data.primary_product.name)
                this.setState({
                    imageUrl: response.data.primary_product.images[0],
                    productDataPrim: response.data.primary_product,
                    allData: response.data,
                    response: true
                })
            })
    }

    render() {
        return (
            <div className="row">
                <div className="container fluid">
                    {this.state.response ?
                        <div className="productPad border10 margProd">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="row productPad border10 mobileMargin">
                                        <div className="img-containerProd mx-auto">
                                            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                                                {/* <!-- Indicators --> */}
                                                {/* <!-- Wrapper for slides --> */}
                                                <div class="carousel-inner">
                                                    {this.state.productDataPrim.images.map((imgItem, index) => {
                                                        return (
                                                            <div className={index == 0 ? "item active" : "item"}>
                                                                <img src={imgItem} />
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                                {/* <!-- Left and right controls --> */}
                                                <span>
                                                    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                                                    </a>
                                                    <a class="right carousel-control" href="#myCarousel" data-slide="next">
                                                    </a>
                                                </span>
                                            </div>

                                            <img src={this.state.productDataPrim.images[0]} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="details">
                                        <div className="uppercase">
                                            {this.state.productDataPrim.name} (1.5GB, BLACK)
                                    </div>
                                        <div className="discription">
                                            {this.state.productDataPrim.desc}
                                        </div>
                                        <div>
                                            <b>Rs. {this.state.productDataPrim.sale_price}</b>   <span className="colorGrey">Rs.{this.state.productDataPrim.mark_price}</span>
                                        </div>
                                        <span className="colorGreen">{this.calculcateDiscount()}</span>
                                        <div>
                                            *Local taxes included (wherever applicable)
                                    </div>
                                        {this.state.allData.attributes.map((item, index) => {
                                            return (
                                                <div key={index}>
                                                    <h5>{item.name}</h5>
                                                    {this.state.allData.options.filter((optItem) => optItem.attrib_id == item._id).map((optionItem, optionIndex) => {
                                                        return (
                                                            <button type="button" class={optionIndex == 0 ? "btn btn-primary" : "btn btn-default"}>{optionItem.name}</button>
                                                        )
                                                    })}
                                                </div>

                                            )
                                        })}
                                        <button type="button" class="btn btn-primary margProd">ADD TO CART</button>
                                    </div>
                                </div>
                            </div>
                        </div> :
                        <div className="row">Fetching Information Plase wait !!!!!</div>
                    }
                </div>
            </div>
        );
    }
}
