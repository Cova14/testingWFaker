import faker from 'faker';
import { Sync } from 'factory.ts';

export const CommonFactory = Sync.makeFactory({
  createdAt: faker.date.recent().toISOString(),
  updatedAt: faker.date.recent().toISOString(),
});
