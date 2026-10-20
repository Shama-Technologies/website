declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_EMAILJS_SERVICE_ID?: string;
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID?: string;
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY?: string;
    SHEET_WEBHOOK_URL?: string;
    SHEET_WEBHOOK_SECRET?: string;
    EMAIL_USER?: string;
    EMAIL_APP_PASSWORD?: string;
    EMAIL_FROM?: string;
    EMAIL_TO?: string;
  }
}

declare const process: {
  env: NodeJS.ProcessEnv;
};
