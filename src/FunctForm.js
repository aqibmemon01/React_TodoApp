import React, { useEffect } from 'react';
import { useState } from 'react';
import { TextField, Button } from '@material-ui/core';




function App() {

    const [Name, SetName] = useState("")
    const [Qty, SetQty] = useState("")
    const [Price, SetPrice] = useState("")
    const [UpdateMode, SetUpdateMode] = useState(false)
    const [Updateindex, SetUpdateindex] = useState(false)
    const [MyProduct, SetMyProduct] = useState([])
    var ProductArr = [];

function SaveProduct(){


SetMyProduct([...MyProduct,{
    Name:Name,
    Qty:Qty,
    Price:Price,
}])

console.log(MyProduct)

     SetName("")
     SetQty("")
     SetPrice("")


}


function DeleteMe(myindex){
    SetMyProduct(MyProduct.filter((d,index)=> index !== myindex))
}


function UpdateValue(){
    MyProduct.splice(Updateindex,1,{
        Name:Name,
        Qty:Qty,
        Price:Price
    })     
    SetUpdateMode(false)
    SetMyProduct(MyProduct)
    SetName("")
    SetQty("")
    SetPrice("")
}

function UpdateModeOn(index){
        SetUpdateMode(true)
        SetUpdateindex(index)
        SetName(MyProduct[index].Name)
        SetQty(MyProduct[index].Qty)
        SetPrice(MyProduct[index].Price)
}


    return (
        <div>
        <div className="ClassForm" >
            <h1>Add Product</h1>
            <h3>( Func. Component )</h3>
            <form noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Product Name" variant="outlined" value={Name} 
                onChange={(e) => SetName(e.target.value)} /> <br />
                <TextField id="outlined-basic" label="Quantity" type="number" variant="outlined" value={Qty}
                onChange={(e) => SetQty(e.target.value)} /><br />
                <TextField id="outlined-basic" label="Price" type="number" variant="outlined" value={Price} 
                onChange={(e) => SetPrice(e.target.value)} /><br />
                <br />
                {/* <Button variant="contained" color="primary" size="large" >ADD PRODUCT</Button> */}
                <Button variant="contained" color="primary" size="large" onClick={SaveProduct} 
                className={UpdateMode ? "HideMe" : "ShowMe"} >ADD PRODUCT</Button>

                <Button variant="contained" color="primary" size="large" onClick={UpdateValue}
                className={UpdateMode ? "ShowMe" : "HideMe"} >Update</Button>

            </form>
        </div>
<br/>
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


        {MyProduct.map((val,index)=>
            
    <tr key={index} >
        <td>{val.Name}</td>
        <td>{val.Qty}</td>
        <td>{val.Price}</td>
        <td><Button variant="contained" color="secondary" onClick={(myindex)=>DeleteMe(index)} >Delete</Button></td>
        <td><Button variant="contained" color="primary" onClick={(myindex)=>UpdateModeOn(index)}>
        {UpdateMode && index==Updateindex ? "GoTO Form" : "Update"}</Button></td>
    </tr>
            
        )}
    
    </tbody>
</table>

</div>


        </div>
    );
}

export default App;
