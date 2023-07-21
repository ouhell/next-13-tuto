import { User } from "@database/schema/User";
import connectToDB from "@utils/connectToDatabase";

export async function GET(request: Request) {
  await connectToDB();
  const users = await User.find();
  return new Response(JSON.stringify(users), {
    status: 200,
  });
}
