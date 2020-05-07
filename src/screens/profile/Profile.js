import React ,{Component} from 'react';
import './Profile.css';
import Header from '../../common/Header/Header';
import axios from 'axios';
import Button from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import Modal from '@material-ui/core/Modal';

import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';


// const customStyles = {
// content: {
//       top: '50%',
//       left: '50%',
//       right: 'auto',
//       bottom: 'auto',
//       marginRight: '-50%',
//       transform: 'translate(-50%, -50%)'
//   }
//   };

class Profile extends Component
{
  constructor(props)
  {
    super(props);
    this.state={
      profile_picture:"",
      user:[],
      modalIsOpen: false,
      fullname:"",
      images:[],
    }
  }

  openModalHandler = () => {
    this.setState({
        modalIsOpen: true 
      });}        
        
  closeModalHandler = () => {
          this.setState({ 
        modalIsOpen: false });
      }

  editHandler=()=>
  {
    this.openModalHandler();
  }

  componentDidMount()
    {
      axios.get('https://api.instagram.com/v1/users/self/?access_token=8661035776.d0fcd39.39f63ab2f88d4f9c92b0862729ee2784').then(response=>{
            this.setState({profile_picture:response.data.data.profile_picture,
            user:response.data.data})
          
        }).catch(error=>{console.log(error)});

        axios.get('https://api.instagram.com/v1/users/self/media/recent?access_token=8661035776.d0fcd39.39f63ab2f88d4f9c92b0862729ee2784').then((response)=>
      {
          this.setState({images:response.data.data})
          console.log(this.state.images);
        })
.catch((error)=>{ 
        console.log(error);
      });
    }
    
  render()
  {
      return(
      <div><Header showProfilePic="true" pictureUrl={this.state.profile_picture}/>
      <div className="Info-section">
        <img src={this.state.user.profile_picture}/>
        {this.state.user.username}
       {this.state.user.full_name}
      <Button variant="fab" onClick={this.editHandler}><EditIcon color="secondary"/></Button>


      {/* {this.state.user.map(item => (
        <React.Fragment>
          <h2>{item.posts}</h2>
          <p>{item.follows}</p>
          <p>{item.ollowed_by}</p>
        </React.Fragment>))} */}
         <Modal
                    open={this.state.modalIsOpen}
                    aria-labelledby="edit"
                    onClose={this.closeModalHandler}
                     style={{ top: '50%',
                     left: '50%',
                     right: 'auto',
                     bottom: 'auto',
                     marginRight: '-50%',
                     transform: 'translate(-50%, -50%)',
                    }}
         >
              <div>
                  <Typography>Edit</Typography>
                  <FormControl required>
                  <InputLabel htmlFor="FullName">Full Name</InputLabel>
                                <Input id="FullName" type="text" fullname={this.state.fullname} onChange={this.inputFullNameChangeHandler} />
                  </FormControl>
                    <br /><br />
                    <Button variant="contained" color="primary">Update</Button>
                    </div>
                    </Modal>
                    
                    <GridList cellHeight={160} cols={3}>
          
                  {this.state.images.map((image) => (
                <GridListTile cols={image.cols || 1}>
                <img src={image.images.low_resolution.url}/>
               </GridListTile>
                ))}
               </GridList>
                    

        </div></div>)
      
  }
}
export default Profile;