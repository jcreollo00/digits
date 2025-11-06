'use client';

/* eslint-disable react/prop-types */
import { useSession } from 'next-auth/react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import { addNote } from '@/lib/dbActions';

interface AddNoteFormProps {
  contactId: number;
}

const AddNoteForm: React.FC<AddNoteFormProps> = ({ contactId }) => {
  const { data: session } = useSession();
  const currentUser = session?.user?.email || '';

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    if (!data.note || data.note.trim() === '') {
      return;
    }

    await addNote({
      note: data.note,
      contactId,
      owner: currentUser,
    });

    swal('Success', 'Your note has been added', 'success', {
      timer: 2000,
    });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <Form.Label>Add Note</Form.Label>
        <textarea
          {...register('note', { required: true })}
          className="form-control"
          rows={3}
          placeholder="Add a timestamped note"
        />
        {errors.note && <div className="text-danger">Note is required</div>}
      </Form.Group>
      <Button type="submit" variant="primary" className="mt-2">
        Submit
      </Button>
    </Form>
  );
};

export default AddNoteForm;
