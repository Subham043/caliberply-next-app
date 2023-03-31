import React from 'react'

const CheckOutDetails = ({}) => {
  return (
    <>
    <div data-v-94cffce4="" className="row">
                            <div data-v-94cffce4="" className="col-md-6">
                            <label data-v-94cffce4="">Select Shipping Address</label>
                            <select data-v-94cffce4="" name='shipping' onChange={getaddress} className="form-control">
                            <option data-v-94cffce4="" value="0">Select Shipping Address</option>
                            {getShippingDetails && getShippingDetails.map((shipping)=>
                            <option key={shipping.add_id} value={shipping.add_id}>{shipping.add2}</option>
                            )}
                            </select>
                            </div>
                            <div data-v-94cffce4="" className="col-md-6">
                                <label data-v-94cffce4="">Select Billing Address</label>
                                <select data-v-94cffce4="" onChange={getaddress} name='billing' className="form-control">
                                    <option data-v-94cffce4="" value="0">Select Billing address</option>
                                    {getBillingDetails && getBillingDetails.map((billing)=>
                            <option key={billing.add_id} value={billing.add_id}>{billing.add2}</option>
                            )}
                                </select>
                                </div>
                            {/* <div className='col-md-6'>
                                <div className='col-md-12 foundation card'>
                                        <h3>Shipping Address</h3>
                                        <div className='radio-btn'>
                                            <input type='radio' name='shipping' onClick={getSelectedAddress} id='radio213' className='radio visibilty-none' value='213'/>
                                            <label data-v-94cffce4="" for="radio213" class="label"></label>
                                        </div>
                                            {getShippingDetails && getShippingDetails.map((shipping)=>
                                        <div className='col-md-12 foundation_sm'>
                                             <ul key={shipping.add_id}>
                                                <li> {shipping.add_title} </li>
                                                <li>{shipping.email}</li>
                                                <li> {shipping.mobile_no} </li>
                                                <li> {shipping.add1} </li>
                                                <li> {shipping.add2} </li>
                                                <li> {shipping.city}, {shipping.c_state},
                                                    <br/>  
                                                    {shipping.country}, {shipping.zipcode}  </li>
                                            </ul>
                                        </div>
                                            )}
                                </div>
                            </div> */}
                            {/* <div className='col-md-6'>
                                <div className='col-md-12 foundation card'>
                                        <h3>Billing Address</h3>
                                        <div className='radio-btn'>
                                            <input type='radio' name='billing' id='radio214' className='radio visibilty-none' value='214'/>
                                            <label data-v-94cffce4="" for="radio214" class="label"></label>
                                        </div>
                                        <div className='col-md-12 foundation_sm'>
                                        {getBillingDetails && getBillingDetails.map((shipping)=>
                                             <ul key={shipping.add_id}>
                                                <li> {shipping.add_title} </li>
                                                <li>{shipping.email}</li>
                                                <li> {shipping.mobile_no} </li>
                                                <li> {shipping.add1} </li>
                                                <li> {shipping.add2} </li>
                                                <li> {shipping.city}, {shipping.c_state},
                                                    <br/>  
                                                    {shipping.country}, {shipping.zipcode}  </li>
                                            </ul>
                                            )}
                                        </div>
                                </div>
                            </div> */}
                                <div data-v-94cffce4="" className="col-lg-12 col-md-12 col-12" style={{marginBottom:'20px', alignItems:'center' , display:'flex'}}>
                                    <input data-v-94cffce4="" type="checkbox" placeholder="" id="sel" name="sel" className="form-control mb-25" style={{width:'5%', height:'26px', margin:'15px 5px'}}/>
                                        <label data-v-94cffce4="" htmlFor="sel">Select Shipping address as billing address</label>
                                        </div>
                                        </div>
    </>

  )
}

export default CheckOutDetails