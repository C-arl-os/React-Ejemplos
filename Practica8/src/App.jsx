import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import MainLayout from './layouts/MainLayout';

import DashboardPage from './pages/DashboardPage';
import TasksPage from './pages/TasksPage';
import ProjectsPage from './pages/ProjectsPage';
import TeamPage from './pages/TeamPage';
import SettingsPage from './pages/SettingsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<DashboardPage />} />

          <Route path="tasks" element={<TasksPage />} />

          <Route
            path="projects"
            element={<ProjectsPage />}
          />

          <Route path="team" element={<TeamPage />} />

          <Route
            path="settings"
            element={<SettingsPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;