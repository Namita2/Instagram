import React,{Component} from 'react';
import './Login.css'
import Header from '../../common/Header/Header';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import {Link} from 'react-router-dom';
import loginData from '../../assets/loginData';

class Login extends Component
{
    constructor()
    {
        super();
        this.state={
            username:"",
            password:"",
            usernameRequired:"dispNone",
            passwordRequired:"dispNone",
            incorrectUsernameOrPassword:"dispNone",
            loggedIn: sessionStorage.getItem("access-token") == null ? false : true

    }
}

loginClickHandler=()=>
{
    this.state.username==="" ? this.setState({usernameRequired:"dispBlock"}) :this.setState({usernameRequired:"dispNone"});
   this.state.password==="" ? this.setState({passwordRequired:"dispBlock"}) :this.setState({passwordRequired:"dispNone"});
    
    if((this.state.username)&&(this.state.password))
    {
          
    }
    else
    {
      this.setState({incorrectUsernameOrPassword:"dispBlock"})
    }
   
}

inputUsernameChangeHandler=(e)=>
{
    this.setState({username:e.target.value})
}

inputPasswordChangeHandler=(e)=>
{
    this.setState({password:e.target.value})
}


 render(){
  return(
<div>
       <Header/> 
       <Card style={{minWidth:'300px',maxWidth:'240px',margin:'auto',marginTop:'10px'}}>
           <CardContent>
            <FormControl>
                <Typography style={{marginBottom:'20px'}}>
                    LOGIN
                 </Typography>
            </FormControl>
                     <br/>
            <FormControl required>
                   <InputLabel htmlFor="username">Username</InputLabel>
                   <Input type="text" id="username" username={this.state.username} onChange={this.inputUsernameChangeHandler}/>
                   <FormHelperText className={this.state.usernameRequired}><span className="red">required</span></FormHelperText>
            </FormControl>
                    <br/>
            <FormControl required> 
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <Input type="password" password={this.state.password} id="password" onChange={this.inputPasswordChangeHandler}/>
                  <FormHelperText className={this.state.passwordRequired}><span className="red">required</span></FormHelperText>
            </FormControl>
               <br/>
              <br/>
              <FormHelperText className={this.state.incorrectUsernameOrPassword}><span className="red">Incorrect Username and/or Password</span></FormHelperText>
              <Button className="btn" variant="contained" color="primary" onClick={this.loginClickHandler}>Login</Button>
           </CardContent>
     </Card>
    </div>
    );
    }
}
export default Login;