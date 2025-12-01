import data from './Data/Data.json'
import { Meeting } from './components/Meeting';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './Layout/MainLayout.tsx'
import MeetingLayout from './Layout/MeetingLayout.tsx';
import { ProjectsCaseStudy } from './pages/ProjectsCaseStudy.tsx';
import { ClientCaseStudy } from './pages/ClientCaseStudy.tsx';

function App() {
  return (
    <Routes>
    <Route path='/' element={<MainLayout/>}></Route>
    <Route path='meeting' element={<Meeting data = {data.meeting} />}></Route>
    <Route path='client-case-study' element={<ClientCaseStudy data = {data.clientCaseStudy} />}></Route>
    <Route path='project-case-study' element={<ProjectsCaseStudy data = {data.projectCaseStudy} />}></Route>
    {/* <Route path='/meeting' element={<MeetingLayout/>}></Route> */}
    </Routes>
  );
}

export default App;
