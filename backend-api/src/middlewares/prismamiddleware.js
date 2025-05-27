import { PrismaClient } from "@prisma/client";
import { DateTime, Zone } from "luxon";

const prisma = new PrismaClient();

prisma.$use(async (params, next) => {

  if (params.action === "create" && params.args?.data) {

    if (!params.args.data.created_at) {
      params.args.data.created_at = DateTime.fromJSDate(new Date())
        .minus({hours: 3})
        .toJSDate();
    }

    if(!params.args.data.updated_at && params.model !== "reservations") {
      params.args.data.updated_at = DateTime.fromJSDate(new Date())
        .minus({hours: 3})
        .toJSDate();
    }

  }

  if(params.action === "update" && params.args?.data) {

    params.args.data.updated_at = DateTime.fromJSDate(new Date())
      .minus({hours: 3})
      .toJSDate();

  }

  if(params.model === "reservations" && (params.action === "create" || params.action === "update")){
    params.args.data.check_in = DateTime.fromJSDate(params.args.data.check_in)
      .minus({hours: 3})
      .toJSDate();
    
    params.args.data.check_out = DateTime.fromJSDate(params.args.data.check_out)
      .minus({hours: 3})
      .toJSDate();
  }

  return next(params);
});

export default prisma;
