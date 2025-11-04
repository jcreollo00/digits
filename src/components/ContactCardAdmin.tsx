'use client';

import { Card, Image } from 'react-bootstrap';

interface ContactCardAdminProps {
  firstName: string;
  lastName: string;
  address: string;
  image: string;
  description: string;
  owner: string;
}

/* Renders a single contact card for admin. See admin/page.tsx. */
const ContactCardAdmin = (props: ContactCardAdminProps) => {
  const { firstName, lastName, address, image, description, owner } = props;
  return (
    <Card className="h-100">
      <Card.Header>
        <Image src={image} width={75} />
        <Card.Title>
          {firstName}
          {' '}
          {lastName}
        </Card.Title>
        <Card.Subtitle>{address}</Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <Card.Text>{description}</Card.Text>
        <p className="blockquote-footer">{owner}</p>
      </Card.Body>
    </Card>
  );
};

export default ContactCardAdmin;
