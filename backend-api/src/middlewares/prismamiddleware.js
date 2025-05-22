import { PrismaClient } from "@prisma/client";
import { DateTime } from "luxon";

const prisma = new PrismaClient();

prisma.$use(async (params, next) => {

  if (params.action === "create" && params.args?.data) {
    // Se o campo não foi passado, definimos automaticamente
    if (!params.args.data.created_at) {
      params.args.data.created_at = DateTime.fromJSDate(new Date())
        .minus({hours: 3})
        .toJSDate();
    }

  }

  return next(params);
});

export default prisma;
