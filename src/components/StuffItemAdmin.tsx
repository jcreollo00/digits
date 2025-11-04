import { Stuff } from '@prisma/client';

/* Renders a single row in the List Stuff table. See list/page.tsx. */
const StuffItemAdmin = (props: Stuff) => {
  const { name, quantity, condition, owner, id } = props;
  return (
    <tr>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{condition}</td>
      <td>{owner}</td>
      <td>
        <a href={`/edit/${id}`}>Edit</a>
      </td>
    </tr>
  );
};

export default StuffItemAdmin;
