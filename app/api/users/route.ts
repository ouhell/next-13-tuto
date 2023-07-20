export async function GET(request: Request) {
  const users = [
    {
      name: "hamida",
      age: 23,
    },
  ];
  return new Response(JSON.stringify(users));
}
