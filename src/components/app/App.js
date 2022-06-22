import './App.css';
import SideBar from '../page-side-bar/side-bar';
import PageBody from '../page-body/page-body'
import Box from '@mui/material/Box';
import '../styles/colors.css';
import '../styles/fonts.css';

function App() {
  return (
    <div className='app'>
      <Box sx={{ display: 'flex' }} className="base-box">
        <SideBar></SideBar>
        <PageBody></PageBody>
      </Box>
    </div >

  );
}

export default App;
