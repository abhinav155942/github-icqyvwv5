# HookAI

## Project Overview
AI-powered business solutions platform offering sales funnels, chatbots, and content creation services for coaches, creators, and e-commerce businesses.

## Recent Changes
- **2025-01-22**: Successfully completed project migration from Replit Agent to Replit environment
- **2025-01-22**: Fixed Vite host configuration to allow proper access to the application
- **2025-01-22**: Created PostgreSQL database and configured all environment variables
- **2025-01-22**: Verified both frontend (port 5000) and backend (port 3001) are running correctly
- **2025-01-21**: Successfully migrated project from Replit Agent to standard Replit environment
- **2025-01-21**: Added complete Express.js backend with webhook and API functionality
- **2025-01-21**: Implemented secure form submission with backend validation and Make.com integration
- **2025-01-21**: Fixed CSS compilation errors and configured proper Tailwind setup
- **2025-01-21**: Updated workflow configuration to run both frontend (port 5000) and backend (port 3001)
- **2025-01-17**: Successfully migrated project from Replit Agent to standard Replit environment
- **2025-01-17**: Fixed import resolution issues and configured proper TypeScript paths
- **2025-01-17**: Verified Make.com webhook integration is working with provided webhook URL
- **2025-01-17**: Updated Vite configuration to run correctly on port 5000
- **2025-01-20**: Successfully migrated project from Replit Agent to standard Replit environment
- **2025-01-20**: Enhanced Make.com webhook integration with comprehensive local storage backup system
- **2025-01-20**: Updated webhook URL to: e0avjappx2co9oc9hwt6gb53oj42sjbm@hook.us2.make.com
- **2025-01-20**: Created LocalStorageManager utility for robust form data persistence and submission tracking
- **2025-01-20**: Fixed import resolution issues and configured proper Vite workflow
- **2025-06-25**: Completely removed all database and API integrations permanently
- **2025-06-25**: Created clean Make.com webhook-only submission script
- **2025-06-25**: Removed server directory, database hooks, and all external dependencies  
- **2025-06-25**: Form now captures data and sends directly to Make.com webhook with error handling
- **2025-06-25**: Simplified to pure client-side form with webhook integration only
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
- **Frontend**: React with TypeScript, Vite build system (port 5000)
- **Styling**: Tailwind CSS with shadcn/ui components
- **Routing**: React Router DOM for client-side navigation
- **Form Handling**: Client-side form with Make.com webhook integration
- **Webhook Integration**: Single Make.com webhook for form submissions with plain text data format
- **Data Persistence**: LocalStorage for form drafts and submission backup
- **Build System**: Vite with modern TypeScript configuration

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