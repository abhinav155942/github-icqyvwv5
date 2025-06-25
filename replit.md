# AI Coach Growth Suite

## Project Overview
AI-powered business solutions platform offering sales funnels, chatbots, and content creation services for coaches, creators, and e-commerce businesses.

## Recent Changes
- **2025-01-24**: Simplified onboarding tour and removed highlight feature for cleaner user experience
- **2025-01-24**: Successfully completed migration from Replit Agent to standard Replit environment
- **2025-06-19**: Implemented database storage for contact form submissions with PostgreSQL
- **2025-06-19**: Added SendGrid email notification system for automatic user confirmations
- **2025-06-19**: Created persistent purchase button functionality based on database records
- **2025-06-19**: Updated Preview page Badge from "$2M+ Revenue" to "$134k+ Revenue" with text-[13px] styling
- **2025-06-19**: Configured Vercel deployment with serverless API functions
- **2025-06-19**: Added video showcase section to "Preview Our Work" page featuring David Goggins strategy content
- **2025-06-19**: Fixed missing tsx dependency issue and confirmed all workflows running properly
- **2025-06-18**: Changed "Preview Out Portfolio" page name to "Preview Our Work"
- **2025-06-18**: Changed "Our Projects" page name to "Preview Our Portfolio"  
- **2025-06-18**: Upgraded Sales Funnel Setup preview with comprehensive 5-step flow, performance stats, and advanced features
- **2025-06-18**: Updated review dates to fall between March 22, 2025 and June 15, 2025
- **2024-01-16**: Migrated from Lovable to Replit environment
- **2024-01-16**: Replaced fake success stories with authentic customer reviews section
- **2024-01-16**: Added ReviewsSection component with 18 realistic reviews (ratings 2-5, mostly 3-4)
- **2024-01-16**: Updated Projects page to focus on portfolio and customer feedback
- **2024-01-16**: Migrated from MemStorage to PostgreSQL database with Drizzle ORM

## Project Architecture
- **Frontend**: React with TypeScript, Vite build system
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM and Neon serverless driver
- **Email**: SendGrid integration for automated notifications
- **Deployment**: Vercel with serverless API functions
- **Styling**: Tailwind CSS with shadcn/ui components
- **Routing**: React Router DOM for client-side navigation
- **Storage**: DatabaseStorage class implementing IStorage interface
- **API**: RESTful endpoints for contact form submissions and user data persistence

## Key Features
- User type selection (coach, creator, e-commerce)
- Dynamic content based on user type
- AI service showcases and benefits
- Customer reviews and ratings
- Contact forms and lead generation
- Preview demonstrations

## User Preferences
- Prefers authentic-looking content over obviously fake testimonials
- Values realistic ratings and reviews (3-4 stars mostly)
- Wants professional appearance with genuine customer feedback
- Prefers simplified UI without complex highlight features in tours