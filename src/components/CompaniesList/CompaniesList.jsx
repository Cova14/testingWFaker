const CompaniesList = ({ companies }) => {
  return(
    <div>
      <h3>Compañias</h3>
      <div data-testid='companies-list'>
        {companies.map(company => (
          <p data-testid='company-item' key={company.name}>{company.name}</p>
        ))}
      </div>
    </div>
  );
};

export default CompaniesList;
