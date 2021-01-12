import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';

const Home = () => {
  const history = useHistory();
  const { oktaAuth, authState } = useOktaAuth();

  if (authState.isPending) return null;

  const login = async () => history.push('/login');
  
  const logout = async () => oktaAuth.signOut();

  const button = authState.isAuthenticated ? 
    <button type="button" className="btn btn-lg btn-danger text-center " style={{height:"25%", textAlign:"center" , fontSize:"30px" }} onClick={logout}>Logout</button> :
    <button type="button" className="btn btn-lg btn-danger text-center "  style={{height:"25%", textAlign:"center" , fontSize:"30px" }} onClick={login}>Login</button>;

  return (
    <div>
       <br></br>
      <br></br>
    <div className="row ">
      <div className="  col-sm-12 h-100 bg bg-success border border-primary text-light "style={{height:"50%", textAlign:"center", fontSize:"30px" }}>  <Link to='/AdminPage'><h1>Home</h1></Link> </div>
      </div>
      <br></br>
      <br></br>
      <div className="row ">
      <div className=" col-sm-12 h-50 bg bg-info text-light" style={{height:"50%", textAlign:"center" , fontSize:"30px" }}> <Link to='/protected'><h1>Protected</h1></Link> </div>
       </div>
      <br></br>
      <br></br>
      <div className="row ">
      <div className="col-sm-12 h-50 border bg bg-warning border-primary  text-light"style={{height:"50%", textAlign:"center", fontSize:"30px" }}>  <Link to='/UserInt'><h1>User-Database</h1></Link></div>
</div>
      <br></br>
      <br></br>
      
        <div class="col text-center">
       {button}
       </div>
       
    </div>
  );
};
export default Home;