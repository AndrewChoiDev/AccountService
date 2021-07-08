import * as functions from "firebase-functions";
import * as admin from 'firebase-admin';
admin.initializeApp();


export const helloWorld = functions.https.onRequest((req, res) => {
  res.send("hello from firebase function...");
});

import * as sgMail from '@sendgrid/mail';
const API_KEY = functions.config().sendgrid.key;
const TEMPLATE_ID = functions.config().sendgrid.template_id;
sgMail.setApiKey(API_KEY);

export const welcomeEmail = functions.auth.user().onCreate(user => {
  const msg = {
    to: user.email,
    from: 'automated@andrewchoi.info',
    templateId: TEMPLATE_ID,
    dynamic_template_data: {
      subject: 'Welcome to my awesome app!',
      name: user.displayName,
    },
  };

  return sgMail.send(msg);
});