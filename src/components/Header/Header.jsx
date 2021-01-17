import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import PetsIcon from '@material-ui/icons/Pets';
import './Header.css';

function Header() {
    return (
        <AppBar id="header">
            <Typography variant="h3" id="title">
                My Best Friend, Morton. 
            </Typography>
            <Typography variant="subtitle1" id="subtitle">
                - A Life in Stills <PetsIcon />
            </Typography>
        </AppBar>
    )
} // end Header

export default Header