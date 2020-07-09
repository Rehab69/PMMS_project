import React, {useRef} from 'react';
import PopPop from 'react-poppop';
import './CSS files/modal-style.css'

const PopupSFC = (props) => {
  const modalRef = useRef();
const fireModal = () =>{
console.log(modalRef)
}

  return (  
    <div>
<button type="button" data-toggle="modal" data-target="#myModal" onClick={fireModal}>Launch modal</button>   
<div className="modal fade" id="myModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header border-bottom-0">
        <h5 className="modal-title" id="exampleModalLabel">Create Account</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <form>
        <div className="modal-body">
          <div className="form-group">
            <label for="email1">Email address</label>
            <input type="email" className="form-control" id="email1" aria-describedby="emailHelp" placeholder="Enter email"></input>
            <small id="emailHelp" className="form-text text-muted">Your information is safe with us.</small>
          </div>
          <div className="form-group">
            <label for="password1">Password</label>
            <input type="password" className="form-control" id="password1" placeholder="Password"></input>
          </div>
          <div className="form-group">
            <label for="password1">Confirm Password</label>
            <input type="password" className="form-control" id="password2" placeholder="Confirm Password"></input>
          </div>
        </div>
        <div className="modal-footer border-top-0 d-flex justify-content-center">
          <button type="submit" className="btn btn-success">Submit</button>
        </div>
      </form>
    </div>
</div>

  </div></div>
  );
}

export default PopupSFC;
 
