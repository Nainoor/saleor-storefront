import { paymentGatewayNames } from "@temp/constants";
import { IPaymentGateway } from "@types";

export const paymentGateways: IPaymentGateway[] = [
  {
    config: [
      {
        field: "store_customer_card",
        value: "false",
      },
    ],
    id: paymentGatewayNames.dummy,
    name: "Dummy",
  },
  {
    config: [
      {
        field: "api_key",
        value: "pk_test_6pRNASCoBOKtIshFeQd4XMUh",
      },
      {
        field: "store_customer_card",
        value: "false",
      },
    ],
    id: paymentGatewayNames.stripe,
    name: "Stripe",
  },
];

const money = {
  gross: {
    amount: 123,
    currency: "INR",
  },
  net: {
    amount: 100,
    currency: "USD",
  },
};


export const costDetails = [
  {
    promoCode: money,
  },
  {
    shipping: money,
  },
  {
    subtotal: money,
  },
  {
    total: money,
  },
];
