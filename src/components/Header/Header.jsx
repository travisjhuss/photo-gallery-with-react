import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import App from '../App/App';

function Header() {
    return (
        <AppBar >
            <Typography >
                My Best Friend, Morton.
            </Typography>
            <Typography>
                - A Life in Still Images
            </Typography>
        </AppBar>
    )
} // end Header

export default Header