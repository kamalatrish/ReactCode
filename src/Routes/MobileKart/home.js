import React from 'react';
import axios from 'axios';
export default class IndexComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileData: [],
            pageState: 1,
        }
    }
    componentDidMount() {
        this.getProducts()
    }

    routeProduct(mobId) {
        console.log("mobileId", mobId)
        localStorage.setItem("mobileId", mobId)
        window.location.href = "/product"
    }

    getProducts() {
        debugger;
        let url = 'https://assignment-appstreet.herokuapp.com/api/v1/products?page=' + this.state.pageState
        axios.get(url)
            .then((response) => {
                console.log("response",response)
                console.log("products", response.data.products);
                if (response.data.products.length == 0) {
                    alert("maximum limit reached")
                }
                else {
                    if (this.state.pageState == 1) {
                        this.setState({
                            mobileData: response.data.products,
                            pageState: this.state.pageState + 1
                        })
                    }
                    else {
                        let mobileData = this.state.mobileData
                        mobileData = mobileData.concat(response.data.products)
                        this.setState({
                            mobileData,
                            pageState: this.state.pageState + 1
                        })
                        console.log("mobileDataOld", mobileData)
                    }
                }
            })
    }
    render() {
        return (
            <div className="container fluid">
                {this.state.pageState != 1 ? <span>
                    <div className="row">
                        {this.state.mobileData.map((mobData, index) => {
                            return (
                                <div className="col-sm-3 border10 mobileMargin" key={index} id={mobData._id} onClick={() => this.routeProduct(mobData._id)}>
                                    <div className="row mobileMargin img-container">
                                        <img src={mobData.images[0]} />
                                    </div>
                                    <div className="row mobileMargin">{mobData.name}</div>
                                    <div className="row mobileMargin priceFont">
                                        <span>Rs. {mobData.sale_price}</span>
                                        <span className="colorGrey">Rs.{mobData.mark_price}</span>
                                        <span className="colorGreen">{" " + mobData.sale_msg} </span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="row">
                        <button type="button" className="btn btn-primary" onClick={() => this.getProducts()}>Load More</button>
                    </div>
                </span> :
                <div className="row">Fetching Information Plase wait !!!!!</div>
                }

            </div>
        );
    }
}
