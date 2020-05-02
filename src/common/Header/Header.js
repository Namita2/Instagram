import React,{Component} from 'react';
import './Header.css';
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';

class Header extends Component{
    render(){
    return( 
    <header className="app-header">
        <div className="app-logo">
            <h3 onClick={this.props.imageClickHandler}>Image Viewer</h3>
        </div>
        {this.props.showProfilePic==="true" ?
        <div className="profile-pic">
            <IconButton size="small">
                <img className="profile-icon" src={this.props.pictureUrl}/>
           </IconButton>
        </div>:""}
        {this.props.showSearchBox==="true" ?
        <div className="search-container">
        <div className="button-container">
            <SearchIcon/>
        </div>
            <FormControl>
                <Input disableUnderline={true} type="text" placeholder="Search..." name="search"/>
            </FormControl>
        </div> : ""}
    </header>);
    }
}
export default Header;