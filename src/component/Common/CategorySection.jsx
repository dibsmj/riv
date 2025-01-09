/** @jsxImportSource @emotion/react */
import CategorySectionStyles from './CategorySectionStyles';
import {
  Casting,
  Forging,
  Machining,
  Fabrication,
  Extrusion,
  InjectionMolding,
} from '../../config/GetImages';

const CategorySection = () => {
  const IgCategory = [
    {
      name: 'Casting',
      image: Casting,
      link: `/industrial-goods/casting`,
      imageAltTag: `metal casting`,
    },
    {
      name: 'Forging',
      image: Forging,
      link: `/industrial-goods/forging`,
      imageAltTag: `metal forging`,
    },
    {
      name: 'Machining',
      image: Machining,
      link: `/industrial-goods/machining`,
      imageAltTag: `Precision Machining`,
    },
    {
      name: 'Fabrication',
      image: Fabrication,
      link: `/industrial-goods/fabrication`,
      imageAltTag: `Custom Fabrication`,
    },
    {
      name: 'Extrusion',
      image: Extrusion,
      link: `/industrial-goods/extrusion/aluminium-extrusion`,
      imageAltTag: `Metal Extrusion`,
    },
    {
      name: 'Injection Molding',
      image: InjectionMolding,
      link: `#`,
      imageAltTag: `Injection Molding`,
    },
    {
      name: 'Plastic Molding',
      image: InjectionMolding,
      link: `#`,
      imageAltTag: `Injection Molding`,
    },
  ];
  return (
    <section css={CategorySectionStyles}>
      <div className="w-[90%] m-auto justify-center items-center text-center align-middle">
        <div className="  grid grid-cols-3 xs:grid-cols-2 sm:grid-cols-2 ssm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-5 mt-10">
          {IgCategory.map((category, index) => (
            <a
              key={category.name}
              href={category.link}
              className="subcategory no-underline"
            >
              <div className="subcategoryfirstdiv">
                <img
                  alt={category.imageAltTag}
                  className={`w-full`}
                  src={category.image.src}
                />
              </div>
              <h3 className="subcategoryname text-[22px] xs:text-[19px] sm:text-[19px] ssm:text-[20px] md:text-[22px] lg:text-[22px]">
                {category.name}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
