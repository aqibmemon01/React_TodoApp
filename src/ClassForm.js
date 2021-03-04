import React from 'react';
import {TextField,Button} from '@material-ui/core';
import './App.css'


class ClassForm extends React.Component{

constructor(props){
super(props);
this.state={
    Name:"",
    Quantity:"",
    Price:"",
    UpdateMode:false,
    Updateindex:"",
}
this.SaveProduct = this.SaveProduct.bind(this)
this.DeleteMe = this.DeleteMe.bind(this)
this.UpdateValue = this.UpdateValue.bind(this)
this.UpdateModeOn = this.UpdateModeOn.bind(this)
}

ProductArr = []


SaveProduct(){
this.ProductArr.push({
    Name:this.state.Name,
    Qty:this.state.Quantity,
    Price:this.state.Price,
})
this.setState({Name:"",Quantity:"",Price:""})
console.log(this.ProductArr)
}
DeleteMe(index){
    console.log(index)
    this.ProductArr.splice(index,1);
    this.setState({Name:this.state.Name})
}

UpdateModeOn( index ){
    this.setState({UpdateMode:true,
                   Updateindex:index,
                   Name:this.ProductArr[index].Name,
                   Quantity:this.ProductArr[index].Qty,
                   Price:this.ProductArr[index].Price,
    })
}

UpdateValue(){

this.ProductArr.splice(this.state.Updateindex,1,{
    Name:this.state.Name,
    Qty:this.state.Quantity,
    Price:this.state.Price
})
this.setState({UpdateMode:false,Updateindex:0,Name:"",Quantity:"",Price:""})
}


render(){
return(
<div>

<div className="ClassForm" >
    <h1>Add Product</h1>
    <h3>( Class Component )</h3>
    <form noValidate autoComplete="off">
  <TextField id="outlined-basic" label="Product Name" variant="outlined"  
  onChange={(e)=>this.setState({Name:e.target.value})} value={this.state.Name} /> <br />
  <TextField id="outlined-basic" label="Quantity" type="number" variant="outlined"
  onChange={(e)=>this.setState({Quantity:e.target.value})} value={this.state.Quantity} /><br />
  <TextField id="outlined-basic" label="Price" type="number" variant="outlined"
  onChange={(e)=>this.setState({Price:e.target.value})} value={this.state.Price} /><br />
<br />

<Button variant="contained" color="primary" size="large" onClick={this.SaveProduct} 
 className={this.state.UpdateMode ? "HideMe" : "ShowMe"} >ADD PRODUCT</Button>

<Button variant="contained" color="primary" size="large" onClick={this.UpdateValue}
 className={this.state.UpdateMode ? "ShowMe" : "HideMe"} >Update</Button>
</form>

<br />


</div>

<div>

<table border="3" >
    <tbody >
    <tr>
        <th>
            Item
        </th>
        <th>
            Qty
        </th>
        <th>
            Price
        </th>
        <th>
            Delete
        </th>
        <th>
            Update
        </th >
    </tr>


        {this.ProductArr.map((val,index)=>{
            return(
    <tr key={index} >
        <td>{val.Name}</td>
        <td>{val.Qty}</td>
        <td>{val.Price}</td>
        <td><Button variant="contained" color="secondary" onClick={(myindex)=>this.DeleteMe(index)} >Delete</Button></td>
        <td><Button variant="contained" color="primary" onClick={(myindex)=>this.UpdateModeOn(index)}>
        {this.state.UpdateMode && index==this.state.Updateindex ? "GoTO Form" : "Update"}</Button></td>
    </tr>
            )
        })}
    
    </tbody>
</table>

</div>






</div>

)



}



}

export default ClassForm;