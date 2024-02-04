import db from "./gdb.json";

export async function GET(request: Request) {
  return Response.json(db);
}
