import { DataSource } from "typeorm";
import { User } from "./schema/User";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "ep-gentle-limit-176179.eu-central-1.aws.neon.tech",
  port: 5432,
  username: "oussamabarca200",
  password: "1vSYsbEGRyu6",
  database: "neondb",
  extra: {
    ssl: true,
  },
  entities: [User],
  synchronize: true,
});

export default AppDataSource;
