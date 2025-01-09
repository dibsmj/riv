export const getCaterogyStats = (categoryname) => {
  const statsData = {
    uniformandworkwear: [
      {
        name: '250+',
        desc: 'strong supplier base',
      },
      {
        name: '10,000 + units',
        desc: 'production capacity',
      },
      {
        name: '$4 Million +',
        desc: 'annual Avg turn over of suppliers',
      },
      {
        name: '100%',
        desc: 'verified supplier base',
      },
    ],
  };

  return (
    statsData[categoryname] || [
      {
        name: '100+',
        desc: 'strong supplier base',
      },
      {
        name: '10,000 +',
        desc: 'monthly average production capacity',
      },
      {
        name: '$4 Million +',
        desc: 'annual Avg turn over of suppliers',
      },
      {
        name: '100%',
        desc: 'verified supplier base',
      },
    ]
  );
};
