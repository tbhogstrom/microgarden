import Database from 'better-sqlite3';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import type { GrowingZone, CropSchedule } from '@/types/garden';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dbPath = join(__dirname, '..', '..', 'data', 'garden.db');

const db = new Database(dbPath);

export function getGardenBeds(): GrowingZone[] {
  const beds = db.prepare(`
    SELECT 
      b.*,
      json_group_array(
        json_object(
          'id', c.id,
          'cropName', c.crop_name,
          'variety', c.variety,
          'startMonth', c.start_month,
          'endMonth', c.end_month,
          'notes', c.notes
        )
      ) as crop_schedule
    FROM garden_beds b
    LEFT JOIN crop_schedules c ON b.id = c.bed_id
    GROUP BY b.id
  `).all();

  return beds.map(bed => ({
    id: bed.id,
    name: bed.name,
    dimensions: {
      width: bed.width,
      length: bed.length,
    },
    squareFootage: bed.square_footage,
    soil: bed.soil,
    sunExposure: bed.sun_exposure,
    status: bed.status,
    notes: bed.notes,
    cropSchedule: JSON.parse(bed.crop_schedule).filter((s: any) => s.id !== null),
  }));
}

export function updateBedStatus(id: string, status: GrowingZone['status']) {
  const stmt = db.prepare(`
    UPDATE garden_beds 
    SET status = ?, updated_at = CURRENT_TIMESTAMP
    WHERE id = ?
  `);
  
  return stmt.run(status, id);
}

export function addCropSchedule(bedId: string, schedule: Omit<CropSchedule, 'id'>) {
  const stmt = db.prepare(`
    INSERT INTO crop_schedules (
      id, bed_id, crop_name, variety, start_month, end_month, notes
    ) VALUES (
      lower(hex(randomblob(16))), ?, ?, ?, ?, ?, ?
    )
  `);

  return stmt.run(
    bedId,
    schedule.cropName,
    schedule.variety || null,
    schedule.startMonth,
    schedule.endMonth,
    schedule.notes || null
  );
}