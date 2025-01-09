export const getCaterogyStats = (categoryname) => {
  const statsData = {
    casting: [
      { count: '500+', text: 'suppliers onboarded' },
      { count: '7+ years', text: 'of average Export Experience ' },
      {
        count: '88%',
        text: 'Avg. Seller Response rate for quotations requests ',
      },
      {
        count: '6',
        text: 'Countries catered to, with many new locations coming soon..',
      },
      { count: '100%', text: 'Verified Manufacturers' },
    ],
  };

  return (
    statsData[categoryname] || [
      { count: '500+', text: 'suppliers onboarded' },
      { count: '7+ years', text: 'of average Export Experience ' },
      {
        count: '88%',
        text: 'Avg. Seller Response rate for quotations requests ',
      },
      {
        count: '6',
        text: 'Countries catered to, with many new locations coming soon..',
      },
      { count: '100%', text: 'Verified Manufacturers' },
    ]
  );
};
