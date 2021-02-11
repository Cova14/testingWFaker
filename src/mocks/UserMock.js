import faker from 'faker';
import { Sync, each } from 'factory.ts';
import { CommonFactory } from './CommonMock';
import { CompanyFactory } from './CompanyMock';

export const UserFactory = Sync.makeFactory({
  firstName: each(() => faker.name.firstName()),
  lastName: each(() => faker.name.lastName()),
  companies: each(() => CompanyFactory.buildList(2))
}).combine(CommonFactory);
