import "reflect-metadata";
import AppDataSource from "@database/datasource";

let isDataBaseConnected = false;

export default async function connectToDB() {
  if (isDataBaseConnected) return;

  const data = await AppDataSource.initialize();
  isDataBaseConnected = true;
}
