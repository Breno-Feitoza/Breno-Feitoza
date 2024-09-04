import { Pool } from "pg";

// Substitua pela sua string de conexão do Render.com
const connectionString =
  "postgresql://breno_user:qomY9DYQFmPeKMlRzXwaCzYoKfXEIFUK@dpg-crbp02bv2p9s73djcb00-a.oregon-postgres.render.com/breno";

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  },
});

export default pool;
