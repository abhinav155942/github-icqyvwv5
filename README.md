# Business Coaching Platform

A full-stack web application for business coaching services with contact forms, service selection, and interactive chat functionality.

## Features

- **Multi-user Types**: Support for coaches, creators, and e-commerce businesses
- **Service Selection**: Dynamic pricing and service configuration
- **Contact Forms**: Comprehensive contact form with file uploads
- **Chat Interface**: Interactive chat with conversation history
- **Email Integration**: Automated confirmation emails via SendGrid
- **Database Integration**: PostgreSQL with Drizzle ORM
- **Responsive Design**: Mobile-first design with Tailwind CSS

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, Vite
- **Backend**: Express.js, Node.js
- **Database**: PostgreSQL with Neon (serverless)
- **ORM**: Drizzle ORM
- **Email**: SendGrid
- **Deployment**: Vercel

## Local Development

1. Clone the repository:
```bash
git clone <your-repo-url>
cd <your-repo-name>
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file with:
```
DATABASE_URL=your_neon_database_url
SENDGRID_API_KEY=your_sendgrid_api_key
NODE_ENV=development
```

4. Run database migrations:
```bash
npm run db:push
```

5. Start development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## Deployment to Vercel

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard:
   - `DATABASE_URL`: Your Neon database connection string
   - `SENDGRID_API_KEY`: Your SendGrid API key
3. Deploy the application

The `vercel.json` configuration is already set up for seamless deployment.

## Project Structure

```
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── pages/         # Page components
│   │   └── utils/         # Utility functions
├── server/                # Express backend
│   ├── routes.ts          # API routes
│   ├── db.ts             # Database configuration
│   ├── storage.ts        # Database operations
│   └── emailService.ts   # Email functionality
├── shared/                # Shared schemas and types
└── vercel.json           # Vercel deployment config
```

## API Endpoints

- `POST /api/contact-submission` - Submit contact form
- `GET /api/contact-submission` - Get submission by email
- `GET /api/health` - Health check endpoint

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| DATABASE_URL | Neon PostgreSQL connection string | Yes |
| SENDGRID_API_KEY | SendGrid API key for emails | No (optional) |
| NODE_ENV | Environment (development/production) | Yes |

## License

MIT License