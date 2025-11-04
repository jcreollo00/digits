import { getServerSession } from 'next-auth';
import { notFound } from 'next/navigation';
import { Stuff, Contact } from '@prisma/client';
import authOptions from '@/lib/authOptions';
import { loggedInProtectedPage } from '@/lib/page-protection';
import { prisma } from '@/lib/prisma';
import EditStuffForm from '@/components/EditStuffForm';
import EditContactForm from '@/components/EditContactForm';

export default async function EditPage({ params }: { params: { id: string | string[] } }) {
  // Protect the page, only logged in users can access it.
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
      // eslint-disable-next-line @typescript-eslint/comma-dangle
    } | null,
  );
  const id = Number(Array.isArray(params?.id) ? params?.id[0] : params?.id);
  // console.log(id);

  // Try to find a contact first
  const contact: Contact | null = await prisma.contact.findUnique({
    where: { id },
  });

  if (contact) {
    return (
      <main>
        <EditContactForm contact={contact} />
      </main>
    );
  }

  // If no contact found, try to find stuff
  const stuff: Stuff | null = await prisma.stuff.findUnique({
    where: { id },
  });

  if (stuff) {
    return (
      <main>
        <EditStuffForm stuff={stuff} />
      </main>
    );
  }

  // If neither found, return 404
  return notFound();
}
