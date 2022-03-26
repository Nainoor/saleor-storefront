import { CompleteCheckout_checkoutComplete_order } from "@saleor/sdk/lib/mutations/gqlTypes/CompleteCheckout";
// import React, { useEffect, useRef, useState } from "react";
import React, { useEffect, useRef } from "react";
// import { useIntl } from "react-intl";

import { ErrorMessage } from "@components/atoms";
// import { paymentErrorMessages } from "@temp/intl";
import {
  IFormError,
  IPaymentGatewayConfig,
  IPaymentSubmitResult,
} from "@types";

// import { razorpayErrorMessages } from "./intl";

// import { v4 as uuidv4 } from 'uuid';


export const razorpayNotNegativeConfirmationStatusCodes = [
  "Authorised",
  "AuthenticationFinished",
  "AuthenticationNotRequired",
  "Pending",
  "Received",
  "PresentToShopper",
];

interface IResourceConfig {
  src: string;
}

// interface RazorpaySubmitState {
//   data?: any;
//   isValid?: boolean;
// }
// interface RazorpaySubmitDropin {
//   handleAction?: (data?: any) => any;
// }
// interface RazorpayError {
//   error?: string;
// }

export interface IProps {
  /**
   * Payment gateway Token.
   */
  token?: string;
  /**
   * Payment gateway client configuration.
   */
  config: IPaymentGatewayConfig[];
  /**
   * Form reference on which payment might be submitted.
   */
  formRef?: React.RefObject<HTMLFormElement>;
  /**
   * Payment gateway script resource configuration.
   */
  scriptConfig: IResourceConfig;
  // /**
  //  * Payment gateway CSS styling resource configuration.
  //  */
  // styleConfig: IResourceConfig;
  /**
   * Method called after the form is submitted.
   */
  processPayment: (token: string) => void;
  /**
   * Method to call on gateway payment submission.
   */
  submitPayment: (data: object) => Promise<IPaymentSubmitResult>;
  /**
   * Method called after succesful gateway payment submission. This is the case when no confirmation is needed.
   */
  submitPaymentSuccess: (
    order?: CompleteCheckout_checkoutComplete_order | null
  ) => void;
  /**
   * Errors returned by the payment gateway.
   */
  errors?: IFormError[];
  /**
   * Method called when gateway error occured.
   */
  onError: (errors: IFormError[]) => void;
}

const RazorpayPaymentGateway: React.FC<IProps> = ({
  token,
  config,
  formRef,
  scriptConfig,
  processPayment,
  submitPayment,
  submitPaymentSuccess,
  errors,
  onError,
}: IProps) => {
  // const intl = useIntl();

  // const UUID = uuidv4();

  const razorpayClientKey = config?.find(({ field }) => field === "api_key")?.value;
  // const razorpayConfig = config?.find(({ field }) => field === "config")?.value;
  // const parsedRazorpayConfig = razorpayConfig && JSON.parse(razorpayConfig);

  // REMOVE NEXT RUN AFTER DEPLOY
  // const [dropin, setDropin] = useState<any>();
  const gatewayRef = useRef<HTMLDivElement>(null);

  // const _window = window as any;

  useEffect(() => {
    if (razorpayClientKey && gatewayRef.current) {
      const script = document.createElement("script");
      script.src = scriptConfig.src;
      script.async = true;
      script.onload = initRazorpayGatewayHandlers; // Wait until the script is loaded before initiating RazorpayCheckout
      document.body.appendChild(script);
    }
  }, [razorpayClientKey, gatewayRef.current]);

  const initRazorpayGatewayHandlers = () => {
    // const configuration =  {
    //     // locale: navigator.language,
    //     // environment: "test",
    //     // clientKey: razorpayClientKey,
    //     // paymentMethodsResponse: parsedRazorpayConfig,
    //     // showPayButton: false,
    //     key: razorpayClientKey,
    //     currency: "INR",
    //     amount: "50000",
    //     order_id: token,
    //     name: 'Bhuvan Patel Originals',
    //     description: 'Thank you for nothing. Please give us some money',
    //     image: 'https://bhuvanpatel.com/favicon-512.png',
    //     onSubmit: onSubmitRazorpayForm,
    //     onAdditionalDetails: onSubmitRazorpayForm,
    //     onError: onRazorpayError,
    //   };

    
    
    // const dropinElement = checkout?.create("dropin");
    
    // console.log(checkout);
    // if (dropinElement && !dropin && gatewayRef.current) {
    //   dropinElement?.mount(gatewayRef.current);
    //   setDropin(dropinElement);
    // }
  };

  // const onSubmitRazorpayForm = async (
  //   state?: RazorpaySubmitState,
  //   dropin?: RazorpaySubmitDropin
  // ) => {
  //   if (!state?.isValid) {
  //     onError([
  //       new Error(
  //         intl.formatMessage(razorpayErrorMessages.invalidPaymentSubmission)
  //       ),
  //     ]);
  //   } else {
  //     const payment = await submitPayment(state?.data);

  //     if (payment.errors?.length) {
  //       onError(payment.errors);
  //     } else if (!payment?.confirmationNeeded) {
  //       submitPaymentSuccess(payment?.order);
  //     } else if (!dropin?.handleAction) {
  //       onError([
  //         new Error(
  //           intl.formatMessage(
  //             paymentErrorMessages.cannotHandlePaymentConfirmation
  //           )
  //         ),
  //       ]);
  //     } else if (!payment?.confirmationData) {
  //       onError([
  //         new Error(
  //           intl.formatMessage(paymentErrorMessages.paymentNoConfirmationData)
  //         ),
  //       ]);
  //     } else {
  //       let paymentAction;
  //       try {
  //         paymentAction = JSON.parse(payment.confirmationData);
  //       } catch (parseError) {
  //         onError([
  //           new Error(
  //             intl.formatMessage(
  //               paymentErrorMessages.paymentMalformedConfirmationData
  //             )
  //           ),
  //         ]);
  //         return;
  //       }
  //       try {
  //         dropin.handleAction(paymentAction);
  //       } catch (error) {
  //         onError([new Error(error)]);
  //       }
  //     }
  //   }
  // };

  // const onRazorpayError = (error?: RazorpayError) => {
  //   if (error?.error) {
  //     onError([{ message: error.error }]);
  //   } else {
  //     onError([
  //       new Error(intl.formatMessage(razorpayErrorMessages.unknownPayment)),
  //     ]);
  //   }
  // };

  useEffect(() => {
    
    (formRef?.current as any)?.addEventListener("submitComplete", () => {
      // dropin.submit();
    });
    
  }, [formRef]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    processPayment(token!);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div ref={gatewayRef} />
      <ErrorMessage errors={errors} />
    </form>
  );
};

export { RazorpayPaymentGateway };
