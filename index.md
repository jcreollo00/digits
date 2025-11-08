<img src="doc/landing.png">

Digits is a contact management application built with Next.js 14 that allows users to create, manage, and add timestamped notes to their contacts.

## Installation

First, [install PostgreSQL](https://www.postgresql.org/download/). Then create a database for your application.
```
$ createdb digits
```

Second, go to your GitHub repository for digits, and click the "Clone or download" button to download your repo to your local file system. Using [GitHub Desktop](https://desktop.github.com/) is a great choice if you use MacOS or Windows.

Third, cd into the directory of your local copy of the repo, and install third party libraries with:
```
$ npm install
```

Fourth, create a `.env` file from the `sample.env`. Set the `DATABASE_URL` variable to match your PostgreSQL database that you created in the first step. See the Prisma docs [Connect your database](https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases/connect-your-database-typescript-postgresql). Then run the Prisma migration to set up the PostgreSQL tables.
```
$ npx prisma migrate dev
```

Fifth, seed the database with the `/config/settings.development.json` data using `npx prisma db seed`.
```
$ npx prisma db seed
```

Finally, start up the application:
```
$ npm run dev
```

The application will appear at [http://localhost:3000](http://localhost:3000).

### Viewing the running app

If all goes well, the application will appear at [http://localhost:3000](http://localhost:3000). You can login using the credentials in [settings.development.json](./config/settings.development.json), or else register a new account.

### ESLint

You can verify that the code obeys our coding standards by running ESLint over the code in the src/ directory with:
```
$ npm run lint
```

## Walkthrough

The following sections describe the major features of this application.

### Landing page

When you retrieve the app at http://localhost:3000, this is what should be displayed:

<img src="doc/landing.png">

The next step is to use the Login menu to either Login to an existing account or register a new account.

### Login page

Clicking on the Login link, then on the Sign In menu item displays the sign in page.

### Register page

Alternatively, clicking on the Login link, then on the Sign Up menu item displays the registration page where you can create a new account.

### List Contacts page

After logging in, users can view their contacts. Each contact includes an image, name, address, description, and any associated timestamped notes.

<img src="doc/list-contacts.png">

You can click the "Edit" link to go to the Edit Contact page. You can also add timestamped notes to any contact using the "Add Note" form at the bottom of each contact card.

### Add Contact page

After logging in, here is the page that allows you to add new contacts:

<img src="doc/add-contact.png">

### Edit Contact page

After clicking on the "Edit" link associated with a contact, this page displays that allows you to change and save it:

<img src="doc/edit-contact.png">

### Admin page

Admin users have access to a special page that lists all contacts and users in the system:

<img src="doc/admin.png">

Note that non-admin users cannot get to this page, even if they type in the URL by hand.

## Tables

The application implements three tables: Contact, Note, and User.

- **Contact**: id, firstName, lastName, address, image, description, owner
- **Note**: id, contactId, note, owner, createdAt
- **User**: id, email, password (hashed using bcrypt), role

The models are defined in [prisma/schema.prisma](./prisma/schema.prisma).

The tables are initialized in [prisma/seed.ts](./prisma/seed.ts) using the command `npx prisma db seed`.
