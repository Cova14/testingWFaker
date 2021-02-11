import { render, screen } from '@testing-library/react';
import { UserFactory } from '../../mocks/UserMock';
import CompaniesList from './CompaniesList';

const userMock = UserFactory.build()

test('shows list of companies', async () => {
  render(
    <CompaniesList companies={userMock.companies} />,
  );

  const listContainer = screen.getByTestId('companies-list');
  const listItems = screen.getAllByTestId('company-item');

  expect(listContainer).toBeInTheDocument();
  listItems.forEach((listItem, index) => expect(listItem).toHaveTextContent(userMock.companies[index].name));

});
