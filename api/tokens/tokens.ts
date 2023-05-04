import { Request, Response } from "express";
import { getKaiPrice, getTokenByAddress } from "../../utils";
import { return200, return400, return500 } from "../../utils/response";
import { getAddress } from "@ethersproject/address";

export default async function (req: Request, res: Response): Promise<void> {
  if (
    !req.params.address ||
    typeof req.params.address !== "string" ||
    !req.params.address.match(/^0x[0-9a-fA-F]{40}$/)
  ) {
    return400(res, "Invalid address");
    return;
  }

  try {
    const address = getAddress(req.params.address);
    const token = await getTokenByAddress(address.toLowerCase());
    const kaiPrice = await getKaiPrice();

    return200(res, {
      updated_at: new Date().getTime(),
      data: {
        name: token?.name,
        symbol: token?.symbol,
        price: String(kaiPrice * token?.derivedKAI),
        price_KAI: token?.derivedKAI,
      },
    });
  } catch (error) {
    return500(res, error as Error);
  }
}
