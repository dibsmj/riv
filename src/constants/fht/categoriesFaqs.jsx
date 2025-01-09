import { FAQ_LIST } from '../faqConstants';

export const getCategoryFaqs = (categoryname) => {
  const faqData = {
    uniformandworkwear: [
      {
        id: 1,
        question: 'Do we cater to speciality uniforms?',
        answer:
          'Yes, our supplier base does cater to speciality uniforms, however, we can confirm only post understanding your requirements clearly. You can share your requirements through  enquiry module.',
      },
      {
        id: 2,
        question: 'Can I order my own designs or is there a catalogue?',
        answer:
          'rivexa provides customised manufacturing solutions to buyers across the globe. We work on the designs shared by buyers; however, we also provide design solutions, it is a value-added service. To know more; talk to our category expert today.',
      },
      {
        id: 3,
        question: 'How do I start my sourcing journey?',
        answer: (
          <div>
            Click on the{' '}
            <a
              href="https://customer.rivexa.com/register-buyer"
              className=" underline text-[#8e8e8e]"
            >
              link
            </a>{' '}
            to start your sourcing journey with rivexa! For buyers based out of
            UAE, Europe or UK, keep your VAT/trading license certificate handy.
            Buyers based out of USA, kindly keep your EIN certificate handy, for
            a smooth onboarding.
          </div>
        ),
      },
      {
        id: 4,
        question: 'What are the additional services that rivexa provides?',
        answer:
          'rivexa provides the following value-added services- Designing, 3rd party Quality Inspection from Indetex and SGS, Logistics and Finance partners.',
      },
      {
        id: 5,
        question: 'What do you mean by Verified Suppliers?',
        answer: (
          <div>
            <p>
              {' '}
              We at rivexa, do a thorough background check on our supplier base,
              on the following parameters :{' '}
            </p>
            <ul>
              <li>Compliance Certification</li>
              <li>Machinery & Manufacturing Capability</li>
              <li>Design & Development Capabilities</li>
              <li>Multi-Category Expertise</li>
              <li>Historic Service Levels</li>
              <li>Relevant Export Experience</li>
            </ul>
          </div>
        ),
      },
      {
        id: 6,
        question: 'What is the Minimum Order Quantity?',
        answer:
          'We can cater to a minimum MOQ of 150 units and above, however please note based on product, fabric, and style MOQ may vary.',
      },
    ],
  };

  return faqData[categoryname] || FAQ_LIST;
};
