import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout } from '@/components/layout/AppLayout';
import { CalendarView } from '@/pages/CalendarView';
import { PlantsView } from '@/pages/PlantsView';
import { LayoutView } from '@/pages/LayoutView';
import { AnalyticsView } from '@/pages/AnalyticsView';
import { JournalView } from '@/pages/JournalView';
import { SettingsView } from '@/pages/SettingsView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<CalendarView />} />
          <Route path="plants" element={<PlantsView />} />
          <Route path="layout" element={<LayoutView />} />
          <Route path="analytics" element={<AnalyticsView />} />
          <Route path="journal" element={<JournalView />} />
          <Route path="settings" element={<SettingsView />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;