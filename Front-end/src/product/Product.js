import React, { Component } from 'react';
import axios from "axios";

class Product extends Component {
    constructor(){
        super()
        this.handleGetproduct = this.handleGetproduct.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleupdate = this.handleupdate.bind(this)
        this.handlechange = this.handlechange.bind(this)
        this.changeproductCategory = this.changeproductCategory.bind(this)
        this.changeproductName = this.changeproductName.bind(this)
        this.changequantity = this.changequantity.bind(this)
    
       this.state = {
        getProduct : false,
        getUpdate : "",
        productCategory: "",
        productName : "",
        price :"",
        quantity :""
       }
    }
    
    handlechange = async(data)=>{
        this.setState({
            getProduct : "",
            getUpdate : data,
            productCategory : data.productCategory,
            productName : data.productName,
            price : data.price,
            quantity : data.quantity
    
        })
    }
    
    handleupdate = async() =>{
        let product = {
            productCategory :this.state.productCategory,
           productName : this.state.productName,
            price : this.state.price,
            quantity : this.state.quantity
        }
    
        axios.put("http://localhost:402/product/updateproduct",product).then(res=>{
            console.log("res",res.data);
            this.setState({
                getUpdate : res.data.result
            })
            alert("Product successfully upadted!");
            this.handleGetproduct();
        })
    }
    
    
    handleDelete = async(email)=>{
    
        axios.delete("http://localhost:402/product/deleteproduct",{params:{email:email}}).then(res=>{
            console.log("success");
            alert("Product delete successfully!");
            this.handleGetproduct();
        }).catch(err=>{
            console.log("err",err.message)
        })
    }
    
    handleGetproduct = async() =>{
    
        axios.get("http://localhost:402/product/getallproduct").then(res=>{
            console.log('res',res.data)
            this.setState({
                getProduct : res.data.result
            })
        }).catch(err=>{
            console.log("err",err.message);
        })
    
    }
    
    
    changeproductCategory(p){
        this.setState({
            productCategory : p.target.value
        })
    }
    changeproductName(p){
        this.setState({
            productName : p.target.value
        })
    }
    changeprice(p){
        this.setState({
            price : p.target.value
        })
    }
    changequantity(p){
        this.setState({
            quantity : p.target.value
        })
    }
    
        render(){
    
            if(this.state.getProduct){
                console.log("state",this.state.getProduct)
            return(<>
            <h1> Product Details </h1>
            <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Product Category</th>
          <th scope="col">Product Name</th>
          <th scope="col">Price</th>
          <th scope="col">Quantity</th>
          <th scope="col">Update</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
    {
        this.state.getProduct.map((data,index)=>{
    
            return(<>
            <tr>
            <th scope="row">{index+1}</th>
            <td>{data.productCategory}</td>
            <td>{data.productName}</td>
            <td>{data.price}</td>
            <td>{data.quantity}</td>
            <td><button className="btn btn-primary" onClick={()=>this.handlechange(data)}>update</button></td>
            <td><button className="btn btn-danger" onClick={()=>this.handleDelete(data._id)}>Delete</button></td>
          </tr>
            </>)
       
        })
    }
      </tbody>
    </table>
    
            </>)
    
            }else if(this.state.getUpdate){
    
                return(<>
                         <div className="col-md-5 container">
                          <form>
      <div className="row mb-4">
        <div className="">
          <div className="form-outline">
            <input type="text" className="form-control" value={this.state.productCategory} onChange ={this.changeproductCategory} />
            <label className="form-label" >Product Category</label>
          </div>
        </div>
      </div>
      <div className="row mb-4">
          <div className="form-outline">
            <input type="text" className="form-control" value={this.state.productName} onChange = {this.changeproductName} />
            <label className="form-label" ></label>
          </div>
        </div>
        <div className="row mb-4">
          <div className="form-outline">
            <input type="text" className="form-control" value={this.state.price} onChange = {this.changeprice} />
            <label className="form-label" ></label>
          </div>
        </div>
        <div className="row mb-4">
          <div className="form-outline">
            <input type="text" className="form-control" value={this.state.quantity} onChange = {this.changequantity} />
            <label className="form-label" ></label>
          </div>
        </div>
      
      <button type="button"  className="btn btn-primary btn-block mb-4" onClick={this.handleupdate}>Update</button>
    
    </form></div>
                
                </>)
            }else{
                return(<>
                
                <button type="button" className="btn btn-primary" onClick={this.handleGetproduct}>Get Product Detail</button>
                </>)
            }
        }
    
    }

export default Product;