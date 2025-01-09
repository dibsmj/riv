import { UniformHeaderImage, UniformBackground } from '../../config/GetImages';

const categoryDescriptions = {
  uniformandworkwear: (
    <div className="text-lg">
      <b>Did you know?</b> <br /> India{`'`} Total Uniform Export Value Reaches
      $1.86 Billion for the Period of January 2023 to April 2024 <br />
      <br /> <b>What does rivexa do?</b> <br /> We are a one stop digital
      Co-pilot for all your sourcing needs from India. Our digital platform and
      experienced team provides you with resources, support and end to end
      seamless sourcing solutions. <br />
      <p>
        <a
          className="font-bold"
          href="https://rivexa.com/resources/how-to-registered-as-a-buyer-on-rivexa"
          alt="nothing"
        >
          Learn more
        </a>{' '}
        about India{`'`} uniform exports and how to register as a buyer on
        rivexa.
      </p>
    </div>
  ),
};

export const getCategoryHeader = (categoryname) => {
  const headerData = {
    uniformandworkwear: {
      title: 'Custom Uniforms and Workwear Manufacturers',
      description: categoryDescriptions.uniformandworkwear,
      image: UniformHeaderImage,
      background: UniformBackground,
    },
  };

  const { title, description, image, background } =
    headerData[categoryname] || headerData.uniformandworkwear;

  return {
    title,
    description,
    image,
    background,
  };
};
