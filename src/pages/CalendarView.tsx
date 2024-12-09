import { SeasonCalendar } from '@/components/garden/SeasonCalendar';
import { PORTLAND_GROWING_SEASONS } from '@/lib/dates';
import type { Season } from '@/types/garden';
import { useState } from 'react';

const currentYear = new Date().getFullYear();
const initialSeason: Season = {
  id: '2024-spring',
  year: currentYear,
  name: 'Spring',
  startDate: PORTLAND_GROWING_SEASONS.spring.start,
  endDate: PORTLAND_GROWING_SEASONS.spring.end,
  plantings: [],
};

export function CalendarView() {
  const [selectedSeason, setSelectedSeason] = useState<Season>(initialSeason);

  const handleDateSelect = (date: Date) => {
    console.log('Selected date:', date);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Growing Calendar</h2>
        <p className="text-muted-foreground">
          Plan and track your plantings throughout the season
        </p>
      </div>
      <SeasonCalendar season={selectedSeason} onDateSelect={handleDateSelect} />
    </div>
  );
}