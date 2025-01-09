/** @jsxImportSource @emotion/react */
import { Container, Button, Col, Row, Card } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Rfx from '../../../assets/homepage/rfx.svg';
import Ta from '../../../assets/homepage/ta.svg';
import OnlinePayment from '../../../assets/homepage/online-payment.svg';
import Value from '../../../assets/homepage/value.svg';

const PageContent = () => {
  const keyFeaturesList = [
    {
      id: 1,
      title: 'RFx to PO',
      icon: Rfx,
      description:
        'End-to-end RFx process, multiple supplier quotations, bid management, contract signing and PO',
    },
    {
      id: 2,
      title: 'Time & Action Tracking',
      icon: Ta,
      description:
        'Customized project templates, order monitoring, approvals, documentation',
    },
    {
      id: 3,
      title: 'Online Payments',
      icon: OnlinePayment,
      description: 'Payment gateway designed for B2B payments',
    },
    {
      id: 4,
      title: 'Value added Services',
      icon: Value,
      description:
        'Partnerships with reputed global players for cross border logistics, quality assurance and supplier financing',
    },
  ];
  const detailsAreaList = [
    {
      title: 'Complete Transparency',
      description:
        'Online RFx process, pricing, negotiations and collaboration tools to directly engage with manufacturers',
    },
    {
      title: 'Verified Manufacturers',
      description:
        'Verified factories and capabilities, product and social compliance certificates, export experience',
    },
    {
      title: 'Simple User Experience',
      description:
        'Seamless journeys, data-rich dashboards, supply chain visibility that makes business decisions easier',
    },
    {
      title: 'Operations Support',
      description:
        'On-ground team that ensures proactive time & action management, quality checks to ensure on time delivery',
    },
  ];
  return (
    <>
      <Col md={10} className="center-col">
        <section className="grid grid-cols-1 justify-center items-center text-center align-middle mt-3">
          <h2 className="fw-semibold text-primary keyFeature header-font ">
            Key Features
          </h2>
          <Row className="features-card">
            {keyFeaturesList &&
              keyFeaturesList.length > 0 &&
              keyFeaturesList.map((features) => (
                <Col md={3} key={features.id}>
                  <Card>
                    <Card.Body>
                      <div className="step-round d-flex justify-content-center align-items-center">
                        <Image
                          src={features.icon}
                          className=""
                          alt={features.title}
                        />
                      </div>
                      <Card.Title className="fw-bold text-primary header-font">
                        {features.title}
                      </Card.Title>
                      <p className="urbanist-font">{features.description}</p>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
        </section>
      </Col>
      <Col md={11} className="center-col">
        <section className="grid grid-cols-1 justify-center items-center text-center align-middle mt-5">
          <h2 className="fw-semibold text-primary keyFeature header-font ">
            Our value Proposition
          </h2>
          <Row className="mt-10 mb-5">
            {detailsAreaList &&
              detailsAreaList.length > 0 &&
              detailsAreaList.map((area) => (
                <Col md={3} className="" key={area.title}>
                  <div className="details-content">
                    <h3 className="fw-bold header-font">{area.title}</h3>
                    <p className="urbanist-font">{area.description}</p>
                  </div>
                </Col>
              ))}
          </Row>
          <a
            className=" font-semibold text-xl header-text"
            href="#enquiryFromLandingPage"
          >
            Send an inquiry <KeyboardArrowRightIcon />
          </a>
        </section>
      </Col>
    </>
  );
};

export default PageContent;
