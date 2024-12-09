import { GardenLayout } from '@/components/garden/GardenLayout';
import { CropCalendar } from '@/components/garden/CropCalendar';
import type { GrowingZone, CropSchedule } from '@/types/garden';
import { useState } from 'react';

const nwBedSchedule: CropSchedule[] = [
  {
    id: '1',
    cropName: 'Squash - Acorn',
    startMonth: 5, // May
    endMonth: 9, // September
    notes: 'Direct sow after last frost'
  },
  {
    id: '2',
    cropName: 'Squash - Green Kabocha',
    startMonth: 5,
    endMonth: 9,
    notes: 'Plant with other squash varieties'
  },
  {
    id: '3',
    cropName: 'Pumpkin Maxima',
    startMonth: 5,
    endMonth: 10, // October
    notes: 'Harvest before first frost'
  },
  {
    id: '4',
    cropName: 'Tomatoes',
    startMonth: 5,
    endMonth: 9,
    notes: 'Start indoors in March'
  },
  {
    id: '5',
    cropName: 'Winter Greens',
    startMonth: 10, // October
    endMonth: 3, // March
    notes: 'Succession plant through winter'
  }
];

const initialZones: GrowingZone[] = [
  {
    id: '1',
    name: 'NW Bed',
    dimensions: { width: 6, length: 20 },
    squareFootage: 120,
    soil: 'Garden Mix',
    sunExposure: 'full',
    status: 'ready-for-harvest',
    notes: 'SE facing with full sun',
    cropSchedule: nwBedSchedule,
  },
  {
    id: '2',
    name: 'North Bed',
    dimensions: { width: 18, length: 18 },
    squareFootage: 324,
    soil: 'Garden Mix',
    sunExposure: 'partial',
    status: 'overgrown',
    notes: 'Large Douglas fir in north center',
  },
  {
    id: '3',
    name: 'Pea Alley',
    dimensions: { width: 2, length: 18 },
    squareFootage: 36,
    soil: 'Garden Mix',
    sunExposure: 'full',
    status: 'planted',
    notes: 'South side of North bed, south facing',
  },
  {
    id: '4',
    name: 'NE Bed',
    dimensions: { width: 20, length: 20 },
    squareFootage: 400,
    soil: 'Garden Mix',
    sunExposure: 'partial',
    status: 'unused',
    notes: 'Starting at NE of property',
  },
  {
    id: '5',
    name: 'Strawberry Patch',
    dimensions: { width: 6, length: 12 },
    squareFootage: 72,
    soil: 'Garden Mix',
    sunExposure: 'partial',
    status: 'planted',
    notes: 'Strawberry ground cover',
  },
  {
    id: '6',
    name: 'Blueberry Bed',
    dimensions: { width: 5, length: 18 },
    squareFootage: 90,
    soil: 'Acidic Mix',
    sunExposure: 'full',
    status: 'planted',
    notes: 'South facing on SE side of garden',
  },
];

export function LayoutView() {
  const [zones] = useState<GrowingZone[]>(initialZones);
  const [selectedZone, setSelectedZone] = useState<GrowingZone | null>(zones[0]);

  const handleZoneClick = (zone: GrowingZone) => {
    setSelectedZone(zone);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Garden Layout</h2>
        <p className="text-muted-foreground">
          Manage your growing zones and plan space utilization
        </p>
      </div>
      <GardenLayout zones={zones} onZoneClick={handleZoneClick} />
      {selectedZone?.cropSchedule && (
        <CropCalendar 
          schedule={selectedZone.cropSchedule} 
          zoneName={selectedZone.name}
        />
      )}
    </div>
  );
}