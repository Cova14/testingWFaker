import { render, screen, waitFor } from '@testing-library/react';
import { UserFactory } from '../../mocks/UserMock';
import WelcomeBanner from './WelcomeBanner';

const userMock = UserFactory.build();

test('shows welcome message correctly', async () => {
  render(
    <WelcomeBanner user={userMock}/>,
  );

  const welcomeBannerContainer = await waitFor(() => screen.getByTestId('welcome-banner'));

  const { firstName, lastName } = userMock;

  expect(welcomeBannerContainer).toHaveTextContent(`Bienvenido de nuevo ${firstName} ${lastName}`);
});