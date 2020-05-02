import React ,{Component} from 'react';
import './Profile.css';
import Header from '../../common/Header/Header';
import axios from 'axios';

class Profile extends Component
{
  constructor()
  {
    super();
    this.state={
      profile_picture:""}
  }
  componentDidMount()
    {
      axios.get('https://api.instagram.com/v1/users/self/?access_token=8661035776.d0fcd39.39f63ab2f88d4f9c92b0862729ee2784').then(response=>{
            this.setState({profile_picture:response.data.data.profile_picture})
            console.log(this.state.profile_picture)
          
        }).catch(error=>{console.log(error)})
    }
    
   imageClickHandler=()=>
   {
     this.props.history.push('/home');
   }
  render()
  {
      return(<div><Header showProfilePic="true" pictureUrl={this.state.profile_picture} click={this.imageClickHandler}/></div>);
  }
}
export default Profile;