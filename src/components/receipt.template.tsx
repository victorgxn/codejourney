import {
  Body,
  Container,
  Column,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

const baseUrl = process.env.URL ? process.env.URL : '';

interface ReceiptEmailProps {
  email: string;
  username: string;
  courseList: any;
}

export const ReceiptEmail = ({
  username,
  email,
  courseList,
}: ReceiptEmailProps) => (
  <Html>
    <Head />
    <Preview>Recibo</Preview>

    <Body style={main}>
      <Container style={container}>
        <Section>
          <Row>
            <Column>
              <Img
                src='https://www.codejourney.es/images/logo/codejourneyLogo.png'
                width="42"
                height="42"
                alt="Codejourney"
              />
            </Column>

            <Column align="right" style={tableCell}>
              <Text style={heading}>Recibo</Text>
            </Column>
          </Row>
        </Section>
        <Section style={informationTable}>
          <Row style={informationTableRow}>
            <Column colSpan={2}>
              <Section>
                <Row>
                  <Column style={informationTableColumn}>
                    <Text style={informationTableLabel}>
                      CORREO ELECTRONICO
                    </Text>
                    <Link
                      style={{
                        ...informationTableValue,
                        color: '#15c',
                        textDecoration: 'underline',
                      }}
                    >
                      {email}
                    </Link>
                  </Column>
                </Row>

                <Row>
                  <Column style={informationTableColumn}>
                    <Text style={informationTableLabel}>FECHA</Text>
                    <Text style={informationTableValue}>30/04/2024</Text>
                  </Column>
                </Row>

                <Row>
                  <Column style={informationTableColumn}>
                    <Text style={informationTableLabel}>ID PEDIDO</Text>
                    <Link
                      style={{
                        ...informationTableValue,
                        color: '#15c',
                        textDecoration: 'underline',
                      }}
                    >
                      HS6245MVL1
                    </Link>
                  </Column>
                  <Column style={informationTableColumn}>
                    <Text style={informationTableLabel}>DNI</Text>
                    <Text style={informationTableValue}>123456789</Text>
                  </Column>
                </Row>
              </Section>
            </Column>
            <Column style={informationTableColumn} colSpan={2}>
              <Text style={informationTableLabel}>DATOS FACTURACION</Text>
              <Text style={informationTableValue}>Visa .... 7461 (Visa)</Text>
              <Text style={informationTableValue}>{username}</Text>
              <Text style={informationTableValue}>Bocatas Paco 123</Text>
              <Text style={informationTableValue}>Málaga</Text>
              <Text style={informationTableValue}>España</Text>
            </Column>
          </Row>
        </Section>
        <Section style={productTitleTable}>
          <Text style={productsTitle}>PRODUCTOS</Text>
        </Section>
        <Section>
          <Row>
            <Column style={{ width: '120px' }}>
              <Img
                src={courseList?.banner?.url}
                width="120"
                height="70"
                alt="Curso"
                style={productIcon}
              />
            </Column>
            <Column style={{ paddingLeft: '22px' }}>
              <Text style={productTitle}>{courseList?.name}</Text>
              <Link href={`${baseUrl}/contacto`}>Reportar un problema</Link>
            </Column>

            <Column style={productPriceWrapper} align="right">
              <Text style={productPrice}>3.99€</Text>
            </Column>
          </Row>
        </Section>
        <Hr style={productPriceLine} />
        <Section align="right">
          <Row>
            <Column style={tableCell} align="right">
              <Text style={productPriceTotal}>TOTAL</Text>
            </Column>
            <Column style={productPriceVerticalLine}></Column>
            <Column style={productPriceLargeWrapper}>
              <Text style={productPriceLarge}>3.99€</Text>
            </Column>
          </Row>
        </Section>
        <Hr style={productPriceLineBottom} />
        <Section>
          <Row>
            <Column align="center" style={footerIcon}>
              <Img
                src='https://www.codejourney.es/images/logo/codejourneyLogo.png'
                width="26"
                height="26"
                alt="Codejourney logo"
              />
            </Column>
          </Row>
        </Section>
        <Text style={footerLinksWrapper}>
          <Link href={`${baseUrl}/contacto`}>Contacto</Link> •{' '}
          <Link href={`${baseUrl}/terminos-y-condiciones`}>
            Terminos y condiciones
          </Link>{' '}
          •{' '}
          <Link href={`${baseUrl}/privacidad-generico`}>
            Política de privacidad{' '}
          </Link>
        </Text>
        <Text style={footerCopyright}>
          Copyright © 2024 Codejourney. <br />{' '}
        </Text>
      </Container>
    </Body>
  </Html>
);

const main = {
  fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
  backgroundColor: '#ffffff',
};

const resetText = {
  margin: '0',
  padding: '0',
  lineHeight: 1.4,
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  width: '660px',
  maxWidth: '100%',
};

const tableCell = { display: 'table-cell' };

const heading = {
  fontSize: '32px',
  fontWeight: '300',
  color: '#888888',
};

const informationTable = {
  borderCollapse: 'collapse' as const,
  borderSpacing: '0px',
  color: 'rgb(51,51,51)',
  backgroundColor: 'rgb(250,250,250)',
  borderRadius: '3px',
  fontSize: '12px',
};

const informationTableRow = {
  height: '46px',
};

const informationTableColumn = {
  paddingLeft: '20px',
  borderStyle: 'solid',
  borderColor: 'white',
  borderWidth: '0px 1px 1px 0px',
  height: '44px',
};

const informationTableLabel = {
  ...resetText,
  color: 'rgb(102,102,102)',
  fontSize: '10px',
};

const informationTableValue = {
  fontSize: '12px',
  margin: '0',
  padding: '0',
  lineHeight: 1.4,
};

const productTitleTable = {
  ...informationTable,
  margin: '30px 0 15px 0',
  height: '24px',
};

const productsTitle = {
  background: '#fafafa',
  paddingLeft: '10px',
  fontSize: '14px',
  fontWeight: '500',
  margin: '0',
};

const productIcon = {
  margin: '0 0 0 20px',
  borderRadius: '14px',
  border: '1px solid rgba(128,128,128,0.2)',
};

const productTitle = { fontSize: '12px', fontWeight: '600', ...resetText };

const productPriceTotal = {
  margin: '0',
  color: 'rgb(102,102,102)',
  fontSize: '10px',
  fontWeight: '600',
  padding: '0px 30px 0px 0px',
  textAlign: 'right' as const,
};

const productPrice = {
  fontSize: '12px',
  fontWeight: '600',
  margin: '0',
};

const productPriceLarge = {
  margin: '0px 20px 0px 0px',
  fontSize: '16px',
  fontWeight: '600',
  whiteSpace: 'nowrap' as const,
  textAlign: 'right' as const,
};

const productPriceWrapper = {
  display: 'table-cell',
  padding: '0px 20px 0px 0px',
  width: '100px',
  verticalAlign: 'top',
};

const productPriceLine = { margin: '30px 0 0 0' };

const productPriceVerticalLine = {
  height: '48px',
  borderLeft: '1px solid',
  borderColor: 'rgb(238,238,238)',
};

const productPriceLargeWrapper = { display: 'table-cell', width: '90px' };

const productPriceLineBottom = { margin: '0 0 75px 0' };


const footerIcon = { display: 'block', margin: '40px 0 0 0' };

const footerLinksWrapper = {
  margin: '8px 0 0 0',
  textAlign: 'center' as const,
  fontSize: '12px',
  color: 'rgb(102,102,102)',
};

const footerCopyright = {
  margin: '25px 0 0 0',
  textAlign: 'center' as const,
  fontSize: '12px',
  color: 'rgb(102,102,102)',
};