import React,{Component} from 'react';
import './Home.css';
import Header from '../../common/Header/Header';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';

class Home extends Component
{
  constructor()
    {
        super();
        this.state={
          profile_picture:"",

          
         }
    }
 componentDidMount()
    {
      axios.get('https://api.instagram.com/v1/users/self/media/recent?access_token=8661035776.d0fcd39.39f63ab2f88d4f9c92b0862729ee2784').then((response)=>
      {
        console.log(response);
         this.setState({profile_picture:response.data.data[0].user.profile_picture})
          
       //  this.setState({pic:this.state.users.data[0].user.profile_picture})
      }).catch((error)=>{ 
        console.log(error);
      });
    }
  render()
  {
      return(
      <div>
          <Header showSearchBox="true" showProfilePic="true" pictureUrl={this.state.profile_picture}/>
      </div>
        
     )
  }
}
export default Home;