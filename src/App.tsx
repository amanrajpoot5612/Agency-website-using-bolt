import data from './Data/Data.json'
import { Meeting } from './components/Meeting';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './Layout/MainLayout.tsx'
import MeetingLayout from './Layout/MeetingLayout.tsx';

function App() {
  return (
    <Routes>
    <Route path='/' element={<MainLayout/>}></Route>
    <Route path='meeting' element={<Meeting data = {data.meeting} />}></Route>
    {/* <Route path='/meeting' element={<MeetingLayout/>}></Route> */}
    </Routes>
  );
}

export default App;
