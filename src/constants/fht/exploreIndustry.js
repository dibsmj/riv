import defence from '../../assets/CategoryPage/FHT/FHTSubcategory/defence.webp';
import educational from '../../assets/CategoryPage/FHT/FHTSubcategory/educational.webp';
import hospitality from '../../assets/CategoryPage/FHT/FHTSubcategory/hospitality.webp';
import medical from '../../assets/CategoryPage/FHT/FHTSubcategory/medical.webp';
import Aviation from '../../assets/CategoryPage/FHT/FHTSubcategory/aviation.webp';
import Construction from '../../assets/CategoryPage/FHT/FHTSubcategory/Construction.webp';

export const getExploreIndustry = (categoryname) => {
  const statsData = {
    uniformandworkwear: [
      {
        src: hospitality,
        name: 'Hospitality',
      },
      {
        src: medical,
        name: 'Medical',
      },
      {
        src: defence,
        name: 'Defence',
      },
      {
        src: educational,
        name: 'Educational',
      },
      {
        src: Aviation,
        name: 'Aviation',
      },
      {
        src: Construction,
        name: 'Construction & Safety equipments',
      },
    ],
  };

  return (
    statsData[categoryname] || [
      {
        src: hospitality,
        name: 'Hospitality',
      },
      {
        src: medical,
        name: 'Medical',
      },
      {
        src: defence,
        name: 'Defence',
      },
      {
        src: educational,
        name: 'Educational',
      },
      {
        src: Aviation,
        name: 'Aviation',
      },
      {
        src: Construction,
        name: 'Construction & Safety equipments',
      },
    ]
  );
};
