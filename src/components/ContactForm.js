import React from 'react'
import styled from "styled-components";
import Lock from 'react-feather/dist/icons/lock'


export default class QuoteForm extends React.Component {
   constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }


  render() {
const { status } = this.state;
    const ButtonContainer = styled.nav`
    form .btn {
      line-height: 1.75;
      padding: 0.5em 0;
    }
    `

    const FormLabel = styled.label`
        font-weight:bold;
    `
    const PrivacyStatement = styled.div`
      position:relative;
      padding-top:10px;
       p {
         padding-left:19px;
         font-size:11px;
         color:#777;
         line-height:1.2;
       }
       svg {
         color:#28a33f;
         stroke-width: 3px;
         position:absolute;
         padding-top:3px;
       }
    `
  
    return (

    
     <form    
        action="https://usebasin.com/f/f9e70f1ad7f8"
        method="POST"
        enctype="multipart/form-data"
      >
   <div className="form-group">
          <div classNam="row">
            <div className="col-xs-12 col-md-12">
            
                <FormLabel htmlFor="firstname">Name</FormLabel>
            <input type="text" name="name" className="form-control" id="firstname" onChange={this.handleChange} required/>  
            </div>
          </div>
         </div>

<div className="form-group">
         <div className="row">
        <div className="col-xs-12 col-md-12">
        <FormLabel htmlFor="email">Email</FormLabel>
        <input type="email" name="email" onChange={this.handleChange} className="form-control" id="email" required/>
        </div>
        </div>
        </div>
       
<div className="form-group">
          <div className="row">
        <div className="col-xs-12 col-md-12">
        <FormLabel htmlFor="phone">Phone</FormLabel>
        <input type="tel" name="phone" className="form-control" id="phone" required onChange={this.handleChange}/>
   </div>
        </div>
        </div>

<div className="form-group">
        <div className="row">
        <div className="col-xs-12 col-md-12">
        <FormLabel htmlFor="address">Address</FormLabel>
        <input type="text" name="address" className="form-control" id="address" required onChange={this.handleChange}/>
      </div>
        </div>
        </div>


        <div className="form-group">
        <FormLabel htmlFor="description">Comments / Project Details</FormLabel>
        <textarea className="form-control" name="description" id="description" rows="5" onChange={this.handleChange} required ></textarea>
        </div>
        
    <div className="form-group">
        <FormLabel htmlFor="attachment">Upload Pictures</FormLabel>
      <input type="file" name="attachment" accept="image/png, image/jpeg" onChange={this.handleChange} className="form-control" id="attachment" />
</div>
        
        <ButtonContainer>
        {status === "SUCCESS" ? <p>Thanks! We have received your message and will return your enquiry shortly.</p> : <button>Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
         </ButtonContainer>
    
           </form>
  );
  }   




  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}