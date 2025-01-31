/* eslint-disable global-require */
import { generatePath } from "react-router";

import { paths } from "@paths";
import { ssrMode } from "@temp/constants";

export const PRODUCTS_PER_PAGE = 6;
export const SUPPORT_EMAIL = "support@bhuvanpatel.com";
export const PROVIDERS = {
  BRAINTREE: {
    label: "Braintree",
  },
  DUMMY: {
    label: "Dummy",
  },
  STRIPE: {
    label: "Stripe",
  },
  RAZORPAY: {
    label: "Razorpay",
    script: {
      src: "https://checkout.razorpay.com/v1/checkout.js",
    },
  },
  ADYEN: {
    label: "Adyen",
    script: {
      src:
        "https://checkoutshopper-test.adyen.com/checkoutshopper/sdk/3.10.1/adyen.js",
      integrity:
        "sha384-wG2z9zSQo61EIvyXmiFCo+zB3y0ZB4hsrXVcANmpP8HLthjoQJQPBh7tZKJSV8jA",
      crossOrigin: "anonymous",
    },
    style: {
      src:
        "https://checkoutshopper-test.adyen.com/checkoutshopper/sdk/3.10.1/adyen.css",
      integrity:
        "sha384-8ofgICZZ/k5cC5N7xegqFZOA73H9RQ7H13439JfAZW8Gj3qjuKL2isaTD3GMIhDE",
      crossOrigin: "anonymous",
    },
  },
};
export const STATIC_PAGES = [
  {
    label: "About Us",
    url: generatePath(paths.page, { slug: "about-us" }),
  },
  {
    label: "Privacy Policy",
    url: generatePath(paths.page, { slug: "privacy-policy" }),
  },
  {
    label: "Contact Us",
    url: generatePath(paths.page, { slug: "contact-us" }),
  },
  {
    label: "Refund and Cancellations",
    url: generatePath(paths.page, { slug: "refund-and-cancellations" }),
  },
  {
    label: "Shipping Policy",
    url: generatePath(paths.page, { slug: "shipping-policy" }),
  },
  {
    label: "Terms and Conditions",
    url: generatePath(paths.page, { slug: "terms-and-conditions" }),
  },
];
export const SOCIAL_MEDIA = [
  {
    ariaLabel: "facebook",
    href: "https://www.facebook.com/bhuvanpateloriginals",
    path: require("../images/facebook-icon.svg"),
  },
  {
    ariaLabel: "instagram",
    href: "https://www.instagram.com/bhuvanpateloriginals/",
    path: require("../images/instagram-icon.svg"),
  },
  {
    ariaLabel: "twitter",
    href: "https://twitter.com/bhuvanp40197003",
    path: require("../images/twitter-icon.svg"),
  },
  // {
  //   ariaLabel: "youtube",
  //   href: "https://www.youtube.com/channel/UCg_ptb-U75e7BprLCGS4s1g/videos",
  //   path: require("../images/youtube-icon.svg"),
  // },
];
export const META_DEFAULTS = {
  custom: [],
  description: "This is the website for buying Bhuvan Patel Originals",
  image: `${
    !ssrMode ? window.location.origin : ""
  }${require("../images/logo.svg")}`,
  title: "Bhuvan Patel Originals - Shop and Portfolio",
  type: "website",
  url: !ssrMode ? window.location.origin : "",
};
