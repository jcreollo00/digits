'use client';

import { Card, Image } from 'react-bootstrap';

interface ContactCardProps {
  firstName: string;
  lastName: string;
  address: string;
  image: string;
  description: string;
}

/* Renders a single contact card. See list/page.tsx. */
const ContactCard = (props: ContactCardProps) => {
  const { firstName, lastName, address, image, description } = props;
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
      </Card.Body>
    </Card>
  );
};

export default ContactCard;
