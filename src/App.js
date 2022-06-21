import './App.css';
import SideBar from './components/page-side-bar/side-bar';
import PageBody from './components/page-body/page-body'
import Box from '@mui/material/Box';
import './components/styles/colors.css';
import './components/styles/fonts.css';

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
