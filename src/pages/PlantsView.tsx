import { useState } from 'react';
import { Plant } from '@/types/garden';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Search } from 'lucide-react';

const initialPlants: Plant[] = [
  {
    id: '1',
    name: 'Tomato',
    variety: 'San Marzano',
    daysToMaturity: 75,
    spacing: 24,
    companionPlants: ['Basil', 'Marigold'],
    avoidPlants: ['Potato', 'Brassicas'],
  },
  {
    id: '2',
    name: 'Lettuce',
    variety: 'Buttercrunch',
    daysToMaturity: 45,
    spacing: 6,
    companionPlants: ['Carrots', 'Radishes'],
  },
];

export function PlantsView() {
  const [searchTerm, setSearchTerm] = useState('');
  const [plants] = useState<Plant[]>(initialPlants);

  const filteredPlants = plants.filter(plant => 
    plant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    plant.variety?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Plants Database</h2>
        <p className="text-muted-foreground">
          Browse and manage your plant varieties
        </p>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search plants..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-9"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPlants.map((plant) => (
          <Card key={plant.id}>
            <CardHeader>
              <CardTitle>{plant.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="space-y-2 text-sm">
                {plant.variety && (
                  <div>
                    <dt className="text-muted-foreground">Variety</dt>
                    <dd>{plant.variety}</dd>
                  </div>
                )}
                <div>
                  <dt className="text-muted-foreground">Days to Maturity</dt>
                  <dd>{plant.daysToMaturity} days</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Spacing</dt>
                  <dd>{plant.spacing} inches</dd>
                </div>
                {plant.companionPlants && (
                  <div>
                    <dt className="text-muted-foreground">Companion Plants</dt>
                    <dd>{plant.companionPlants.join(', ')}</dd>
                  </div>
                )}
              </dl>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}