function companyFactory(name, area = 'technology'){
  const company = {};

  company.name = name;
  company.area = area;

  const announcement = () => {
    console.log(`The company ${company.name} of ${company.area} area is open to business.`);
  }

  company.announcement = announcement;
  
  return company;
}

const nubank = companyFactory('Nubank', 'Finance');
nubank.announcement();

const mercadoLivre = companyFactory('Mercado Livre', 'Ecommerce');
mercadoLivre.announcement();