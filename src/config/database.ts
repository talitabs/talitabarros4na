import { Pool } from "pg";

// Substitua pela sua string de conexão do Render.com
const connectionString =
  "postgresql://talita4na_user:j2vw3M3aLkEYBjphrA0UNfd8ccYrq1T0@dpg-cr7qs2ggph6c73en7an0-a.oregon-postgres.render.com/talita4na";

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  },
});

export default pool;
