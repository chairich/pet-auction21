// @ts-ignore
import * as promptpay from "promptpay-qr";

export async function generatePromptPayQR(idOrPhone: string, amount: number): Promise<string> {
  const qrData = await promptpay.generate(idOrPhone, { amount });
  return qrData;
}
