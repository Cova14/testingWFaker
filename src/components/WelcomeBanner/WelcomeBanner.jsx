const WelcomeBanner = ({ user }) => {
  const { firstName, lastName } = user;

  return (
    <div>
      <h1 data-testid='welcome-banner'>Bienvenido de nuevo {firstName} {lastName}</h1>
    </div>
  );
};

export default WelcomeBanner;
