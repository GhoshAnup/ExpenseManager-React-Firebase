
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) =>(
    <div>
        <h1>Info</h1>
        <p> This info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) =>{
    return (props) =>(
        <div>
        {props.isAdmin && <p> This in private info. Please do not share!</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) =>{
    return (props) =>(
        <div>
        {props.isAuth ? (
            <WrappedComponent {...props}/>
            ):(
              <p>Please log in to view the info</p>
            )}            
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin ={true} info='There are the details'/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuth ={false} info='There are the details'/>, document.getElementById('app'));