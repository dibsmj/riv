/* eslint-disable no-undef */
/** @jsxImportSource @emotion/react */
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import Grid from '@mui/material/Grid';

const FooterButton = () => (
  <section>
    <Container fluid>
      <Col md={9} className="center-col">
        <Grid container spacing={2}>
          <Grid
            item
            xs={6}
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <a
              href={`${process.env.NEXT_PUBLIC_APP_CUSTOMER_ROOT_URL}register-buyer`}
            >
              <Button variant="primary btn-lg">Register as Buyer</Button>
            </a>
          </Grid>
          <Grid item xs={6}>
            <a
              href={`${process.env.NEXT_PUBLIC_APP_CUSTOMER_ROOT_URL}register-seller`}
            >
              <Button variant="primary btn-lg">Register as Seller</Button>
            </a>
          </Grid>
        </Grid>
      </Col>
    </Container>
  </section>
);

export default FooterButton;
