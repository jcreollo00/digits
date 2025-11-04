'use client';

import { Card, Image } from 'react-bootstrap';
import Link from 'next/link';

interface ContactCardProps {
  firstName: string;
  lastName: string;
  address: string;
  image: string;
  description: string;
  id: number;
}

/* Renders a single contact card. See list/page.tsx. */
const ContactCard = (props: ContactCardProps) => {
  const { firstName, lastName, address, image, description, id } = props;
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
      <Card.Footer>
        <Link href={`edit/${id}`}>Edit</Link>
      </Card.Footer>
    </Card>
  );
};

export default ContactCard;
