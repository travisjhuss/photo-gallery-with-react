import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import App from '../App/App';

function Header() {
    return (
        <AppBar >
            <Typography variant="h3">
                My Best Friend, Morton.
            </Typography>
            <Typography variant="subtitle1">
                - A Life in Still Images
            </Typography>
        </AppBar>
    )
} // end Header

export default Header