import { Request, Response } from "express";
import { getAddress } from "@ethersproject/address";
import { getKaiPrice, getTopPairs } from "../../utils";
import { return200, return500 } from "../../utils/response";

interface ReturnShape {
  [tokenAddress: string]: {
    name: string;
    symbol: string;
    price: string;
    price_KAI: string;
  };
}

export default async function (req: Request, res: Response): Promise<void> {
  try {
    const topPairs = await getTopPairs();
    const kaiPrice = await getKaiPrice();

    const tokens = topPairs.reduce<ReturnShape>((accumulator, pair: any): ReturnShape => {
      for (const token of [pair.token0, pair.token1]) {
        const tId = getAddress(token.id);

        accumulator[tId] = {
          name: token.name,
          symbol: token.symbol,
          price: String(token.derivedKAI * kaiPrice),
          price_KAI: token.derivedKAI,
        };
      }

      return accumulator;
    }, {});

    return200(res, { updated_at: new Date().getTime(), data: tokens });
  } catch (error) {
    return500(res, error as Error);
  }
}
