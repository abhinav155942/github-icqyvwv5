import { Pool, neonConfig } from '@neondatabase/serverless';

// Configure Neon for serverless
neonConfig.poolQueryViaFetch = true;

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    if (!process.env.DATABASE_URL) {
      throw new Error('DATABASE_URL must be set');
    }

    const pool = new Pool({ 
      connectionString: process.env.DATABASE_URL,
      max: 1,
      connectionTimeoutMillis: 10000,
      idleTimeoutMillis: 30000
    });

    const {
      name,
      email,
      phone,
      business,
      coachingNiche,
      otherNiche,
      monthlyRevenue,
      currentChallenges,
      services,
      serviceConfigs,
      files,
      links,
      totalCost,
      userType
    } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !business || !coachingNiche || !monthlyRevenue || !currentChallenges || !services || !userType) {
      return res.status(400).json({ 
        success: false, 
        error: "Missing required fields" 
      });
    }

    // Insert into database
    const result = await pool.query(`
      INSERT INTO contact_submissions (
        name, email, phone, business, coaching_niche, other_niche,
        monthly_revenue, current_challenges, services, service_configs,
        files, links, total_cost, user_type, submitted_at
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, NOW())
      RETURNING id
    `, [
      name, email, phone, business, coachingNiche, otherNiche || null,
      monthlyRevenue, currentChallenges, JSON.stringify(services), 
      serviceConfigs ? JSON.stringify(serviceConfigs) : null,
      files ? JSON.stringify(files) : null,
      links ? JSON.stringify(links) : null,
      totalCost, userType
    ]);

    await pool.end();

    return res.status(200).json({
      success: true,
      message: "Contact form submitted successfully",
      submissionId: result.rows[0].id
    });

  } catch (error) {
    console.error('Database error:', error);
    return res.status(500).json({
      success: false,
      error: "Failed to submit contact form"
    });
  }
}