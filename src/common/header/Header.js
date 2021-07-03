import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography'
import SearchIcon from '@material-ui/icons/Search';
import '../header/Header.css'
import avatar from '../../assets/profile.jpg'
import {
    AppBar, Divider,
    fade,
    InputBase, Menu, MenuItem,
    Toolbar,
    withStyles
} from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';

const styles = (theme) => ({
    root: {
        flexGrow: 1,
    },
    appBarBackground: {
        background: '#263238'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        font: '18px',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: '4px',
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: '300px',
            backgroundColor: '#c0c0c0',
            color: 'black'
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
    profileAvatar: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(0.5)
        },
        border: 'solid',
        borderWidth: '0.5px',
        borderRadius: '50%',
        width: '50px',
        height: '45px',
        marginLeft: '30px',
        cursor: 'pointer'
    },
});


class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.anchorEl = null;
    }


    render() {
        const {classes} = this.props;
        const {anchorEl} = this.state;
        return (

            <div className={classes.root}>
                <AppBar className={classes.appBarBackground} position="static">
                    <Toolbar>
                        <Typography className={classes.title} variant="h6" noWrap>
                            Image Viewer
                        </Typography>

                         {/*Checking for User logged in or not*/}
                        {sessionStorage.getItem("isLoggedIn") === "true" ?

                        // Search input box starts here
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon/>
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{'aria-label': 'search'}}
                            />
                        </div>
                        // Search input box ends here
                        : ""}

                        {sessionStorage.getItem("isLoggedIn") === "true" ?
                        <div>
                            {/*Dropdown controller*/}
                            <div className={classes.profileAvatar} aria-controls="profile-menu" aria-haspopup="true"
                                 onClick={this.handleClick}>
                                <Avatar alt="Profile Picture" src={avatar}/>
                            </div>
                            {/*End of Avatar Section*/}

                            <div>
                                <Menu
                                    id="profile-menu"
                                    anchorEl={anchorEl}
                                    keepMounted={false}
                                    open={Boolean(anchorEl)}
                                    onClose={this.handleClose}
                                    PaperProps={{
                                        style: {
                                            transform: 'translateX(10px) translateY(50px)',
                                            backgroundColor: '#f0ebeb'
                                        }
                                    }}
                                >
                                    <MenuItem onClick={this.handleClose}>My Account</MenuItem>
                                    <Divider variant="middle" style={{height: '2px'}}/>
                                    <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                                </Menu>
                            </div>
                        </div>
                            // End of Profile menu
                        :""}
                    </Toolbar>
                </AppBar>
            </div>)
    }

    searchHandler = (event) => {

    }

    // On selecting 'Logout' in the menu. Remove access token and Redirect to login.
    logoutClickHandler = () => {
        sessionStorage.removeItem('access-token');
        sessionStorage.removeItem("isLoggedIn");
        this.props.history.push('/');
    }

    handleClick = event => this.setState({anchorEl: event.currentTarget})
    handleClose = () => this.setState({anchorEl: null})

}

export default withStyles(styles)(Header)