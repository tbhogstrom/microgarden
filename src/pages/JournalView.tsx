import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { formatDate } from '@/lib/dates';
import { Plus } from 'lucide-react';

interface JournalEntry {
  id: string;
  date: Date;
  title: string;
  content: string;
  weather?: string;
  tasks?: string[];
}

const initialEntries: JournalEntry[] = [
  {
    id: '1',
    date: new Date(),
    title: 'Spring Planting Day',
    content: 'Started seedlings for tomatoes and peppers. Soil temperature is perfect for direct sowing peas.',
    weather: 'Sunny, 65°F',
    tasks: ['Start seedlings', 'Direct sow peas', 'Prepare beds'],
  },
];

export function JournalView() {
  const [entries] = useState<JournalEntry[]>(initialEntries);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Garden Journal</h2>
          <p className="text-muted-foreground">
            Document your garden's progress and observations
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Entry
        </Button>
      </div>

      <div className="space-y-4">
        {entries.map((entry) => (
          <Card key={entry.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{entry.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {formatDate(entry.date)}
                  </p>
                </div>
                {entry.weather && (
                  <span className="text-sm text-muted-foreground">
                    {entry.weather}
                  </span>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{entry.content}</p>
              {entry.tasks && (
                <div>
                  <h4 className="font-semibold mb-2">Tasks:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {entry.tasks.map((task, index) => (
                      <li key={index}>{task}</li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}