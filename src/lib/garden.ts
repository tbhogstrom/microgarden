import type { BedStatus } from '@/types/garden';

export const bedStatusConfig: Record<BedStatus, {
  label: string;
  color: string;
  bgColor: string;
}> = {
  'unused': {
    label: 'Needs Planting',
    color: 'text-yellow-800',
    bgColor: 'bg-yellow-100',
  },
  'overgrown': {
    label: 'Overgrown',
    color: 'text-red-800',
    bgColor: 'bg-red-100',
  },
  'planted': {
    label: 'Planted',
    color: 'text-green-800',
    bgColor: 'bg-green-100',
  },
  'ready-for-harvest': {
    label: 'Ready for Harvest',
    color: 'text-emerald-800',
    bgColor: 'bg-emerald-100',
  },
};