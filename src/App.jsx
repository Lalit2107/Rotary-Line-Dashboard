import { Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import CommandCenter from './pages/CommandCenter';
import ActivityLog from './pages/ActivityLog';
import RotaryOverview from './pages/RotaryOverview';
import MachineAnalytics from './pages/MachineAnalytics';

export default function App() {
    return (
        <AppLayout>
            <Routes>
                <Route path="/" element={<CommandCenter />} />
                <Route path="/activity-log" element={<ActivityLog />} />
                <Route path="/rotary-overview" element={<RotaryOverview />} />
                <Route path="/machine-analytics" element={<MachineAnalytics />} />
            </Routes>
        </AppLayout>
    );
}
