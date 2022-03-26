import { defineMessages, IntlShape } from "react-intl";

const description = "Razorpay payment gateway error";

export const razorpayErrorMessages = defineMessages({
  unknownPayment: {
    defaultMessage: "Unknown payment submission error occured.",
    description,
  },
  invalidPaymentSubmission: {
    defaultMessage: "Invalid payment submission.",
    description,
  },
});

export const razorpayConfirmationErrorMessages = defineMessages({
  error: {
    defaultMessage: "Error processing payment occured.",
    description,
  },
  refused: {
    defaultMessage:
      "The payment was refused. Try the payment again using a different payment method or card.",
    description,
  },
  cancelled: {
    defaultMessage: "Payment was cancelled.",
    description,
  },
  general: {
    defaultMessage: "Payment could not be confirmed.",
    description,
  },
});

export function translateRazorpayConfirmationError(
  status: string,
  intl: IntlShape
): string {
  switch (status) {
    case "Error":
      return intl.formatMessage(razorpayConfirmationErrorMessages.error);
    case "Refused":
      return intl.formatMessage(razorpayConfirmationErrorMessages.refused);
    case "Cancelled":
      return intl.formatMessage(razorpayConfirmationErrorMessages.cancelled);
    default:
      return intl.formatMessage(razorpayConfirmationErrorMessages.general);
  }
}
