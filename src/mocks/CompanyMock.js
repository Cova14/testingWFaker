import faker from 'faker';
import { Sync, each } from 'factory.ts';
import { CommonFactory } from './CommonMock';

export const CompanyFactory = Sync.makeFactory({
  name: each(() => faker.company.companyName()),
}).combine(CommonFactory);
