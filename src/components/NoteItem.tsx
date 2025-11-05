'use client';

import { ListGroup } from 'react-bootstrap';
import { Note } from '@prisma/client';

interface NoteItemProps {
  note: Note;
}

/* Renders a single note item. See ContactCard.tsx. */
const NoteItem = ({ note }: NoteItemProps) => (
  <ListGroup.Item>
    <p className="fw-lighter">{note.createdAt.toLocaleDateString('en-US')}</p>
    <p>{note.note}</p>
  </ListGroup.Item>
);

export default NoteItem;
