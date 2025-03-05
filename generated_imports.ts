// Auto-generated import statements
import { Piece } from '@activepieces/pieces-framework';

// Define the type for piece imports
type PiecePackage = {
  [key: string]: {
    auth: any;
    piece: any;
  };
};

/**
 * Helper function to find properties case-insensitively
 * Looks for a property that matches the given name regardless of case
 */
function findProperty(obj: any, propName: string): any {
  // If the property exists with exact name, return it
  if (obj[propName] !== undefined) {
    return obj[propName];
  }
  
  // Do a case-insensitive search
  const lowerPropName = propName.toLowerCase();
  for (const key of Object.keys(obj)) {
    if (key.toLowerCase() === lowerPropName) {
      return obj[key];
    }
  }
  
    
  throw new Error(`Property ${propName} not found in object`);

}

import * as PieceAmazonSqs from '@activepieces/piece-amazon-sqs'
import * as PieceCalCom from '@activepieces/piece-cal-com'
import * as PieceWebhook from '@activepieces/piece-webhook'
import * as PieceDevin from '@activepieces/piece-devin'
import * as PieceDrip from '@activepieces/piece-drip'
import * as PieceFreshdesk from '@activepieces/piece-freshdesk'
import * as PieceGeneratebanners from '@activepieces/piece-generatebanners'
import * as PieceMicrosoftTeams from '@activepieces/piece-microsoft-teams'
import * as PieceMoxieCrm from '@activepieces/piece-moxie-crm'
import * as PieceContentful from '@activepieces/piece-contentful'
import * as PieceTwinLabs from '@activepieces/piece-twin-labs'
import * as PieceFliqrAi from '@activepieces/piece-fliqr-ai'
import * as PieceDust from '@activepieces/piece-dust'
import * as PieceGoogleDocs from '@activepieces/piece-google-docs'
import * as PieceWebflow from '@activepieces/piece-webflow'
import * as PieceTwitter from '@activepieces/piece-twitter'
import * as PieceBaserow from '@activepieces/piece-baserow'
import * as PieceCrypto from '@activepieces/piece-crypto'
import * as PieceMonday from '@activepieces/piece-monday'
import * as PieceHackernews from '@activepieces/piece-hackernews'
import * as PieceAminos from '@activepieces/piece-aminos'
import * as PieceWoocommerce from '@activepieces/piece-woocommerce'
import * as PieceImageAi from '@activepieces/piece-image-ai'
import * as PieceSchedule from '@activepieces/piece-schedule'
import * as PieceImageHelper from '@activepieces/piece-image-helper'
import * as PieceSendfox from '@activepieces/piece-sendfox'
import * as PieceNocodb from '@activepieces/piece-nocodb'
import * as PieceGhostcms from '@activepieces/piece-ghostcms'
import * as PieceBannerbear from '@activepieces/piece-bannerbear'
import * as PieceBox from '@activepieces/piece-box'
import * as PieceImap from '@activepieces/piece-imap'
import * as PieceDiscord from '@activepieces/piece-discord'
import * as PieceSmaily from '@activepieces/piece-smaily'
import * as PieceZohoBooks from '@activepieces/piece-zoho-books'
import * as PieceClockodo from '@activepieces/piece-clockodo'
import * as PieceSurrealdb from '@activepieces/piece-surrealdb'
import * as PieceKizeoForms from '@activepieces/piece-kizeo-forms'
import * as PieceForms from '@activepieces/piece-forms'
import * as PieceMicrosoftSharepoint from '@activepieces/piece-microsoft-sharepoint'
import * as PieceGitlab from '@activepieces/piece-gitlab'
import * as PieceMessagebird from '@activepieces/piece-messagebird'
import * as PieceTelegramBot from '@activepieces/piece-telegram-bot'
import * as PieceMicrosoftExcel365 from '@activepieces/piece-microsoft-excel-365'
import * as PieceWordpress from '@activepieces/piece-wordpress'
import * as PieceMastodon from '@activepieces/piece-mastodon'
import * as PieceTidycal from '@activepieces/piece-tidycal'
import * as PiecePylon from '@activepieces/piece-pylon'
import * as PieceLocalai from '@activepieces/piece-localai'
import * as PieceMicrosoftDynamics365BusinessCentral from '@activepieces/piece-microsoft-dynamics-365-business-central'
import * as PieceSendgrid from '@activepieces/piece-sendgrid'
import * as PieceBamboohr from '@activepieces/piece-bamboohr'
import * as PieceMautic from '@activepieces/piece-mautic'
import * as PieceScrapegrapghai from '@activepieces/piece-scrapegrapghai'
import * as PieceApitable from '@activepieces/piece-apitable'
import * as PieceCaptainData from '@activepieces/piece-captain-data'
import * as PieceMindee from '@activepieces/piece-mindee'
import * as PieceFirecrawl from '@activepieces/piece-firecrawl'
import * as PieceMicrosoftOnedrive from '@activepieces/piece-microsoft-onedrive'
import * as PieceZohoInvoice from '@activepieces/piece-zoho-invoice'
import * as PieceDateHelper from '@activepieces/piece-date-helper'
import * as PieceActivecampaign from '@activepieces/piece-activecampaign'
import * as PieceXero from '@activepieces/piece-xero'
import * as PieceInvoiceninja from '@activepieces/piece-invoiceninja'
import * as PieceAcumbamail from '@activepieces/piece-acumbamail'
import * as PieceActualbudget from '@activepieces/piece-actualbudget'
import * as PieceVillage from '@activepieces/piece-village'
import * as PieceClaude from '@activepieces/piece-claude'
import * as PieceLeadConnector from '@activepieces/piece-lead-connector'
import * as PieceAmazonSns from '@activepieces/piece-amazon-sns'
import * as PieceSquare from '@activepieces/piece-square'
import * as PieceSpotify from '@activepieces/piece-spotify'
import * as PieceOdoo from '@activepieces/piece-odoo'
import * as PieceMaileroo from '@activepieces/piece-maileroo'
import * as PiecePoper from '@activepieces/piece-poper'
import * as PieceLlmrails from '@activepieces/piece-llmrails'
import * as PieceFreshsales from '@activepieces/piece-freshsales'
import * as PiecePipedrive from '@activepieces/piece-pipedrive'
import * as PieceDatocms from '@activepieces/piece-datocms'
import * as PieceGoogleForms from '@activepieces/piece-google-forms'
import * as PieceSessionsUs from '@activepieces/piece-sessions-us'
import * as PieceLinear from '@activepieces/piece-linear'
import * as PieceFlowlu from '@activepieces/piece-flowlu'
import * as PieceVtex from '@activepieces/piece-vtex'
import * as PieceMailjet from '@activepieces/piece-mailjet'
import * as PieceTextAi from '@activepieces/piece-text-ai'
import * as PieceSegment from '@activepieces/piece-segment'
import * as PieceConvertkit from '@activepieces/piece-convertkit'
import * as PieceLever from '@activepieces/piece-lever'
import * as PieceRss from '@activepieces/piece-rss'
import * as PieceIntercom from '@activepieces/piece-intercom'
import * as PieceNtfy from '@activepieces/piece-ntfy'
import * as PieceGoogleTasks from '@activepieces/piece-google-tasks'
import * as PieceVtiger from '@activepieces/piece-vtiger'
import * as PieceTalkable from '@activepieces/piece-talkable'
import * as PieceShopify from '@activepieces/piece-shopify'
import * as PieceGroq from '@activepieces/piece-groq'
import * as PieceClearout from '@activepieces/piece-clearout'
import * as PieceMathHelper from '@activepieces/piece-math-helper'
import * as PieceSftp from '@activepieces/piece-sftp'
import * as PiecePdf from '@activepieces/piece-pdf'
import * as PieceTextHelper from '@activepieces/piece-text-helper'
import * as PieceTypeform from '@activepieces/piece-typeform'
import * as PieceClickup from '@activepieces/piece-clickup'
import * as PieceMailchimp from '@activepieces/piece-mailchimp'
import * as PieceGravityforms from '@activepieces/piece-gravityforms'
import * as PieceChargekeep from '@activepieces/piece-chargekeep'
import * as PieceFrame from '@activepieces/piece-frame'
import * as PieceRabbitmq from '@activepieces/piece-rabbitmq'
import * as PieceSnowflake from '@activepieces/piece-snowflake'
import * as PieceVbout from '@activepieces/piece-vbout'
import * as PieceSubflows from '@activepieces/piece-subflows'
import * as PieceSendinblue from '@activepieces/piece-sendinblue'
import * as PieceJiraCloud from '@activepieces/piece-jira-cloud'
import * as PieceWhatsable from '@activepieces/piece-whatsable'
import * as PieceTotalcms from '@activepieces/piece-totalcms'
import * as PieceYoutube from '@activepieces/piece-youtube'
import * as PieceSoap from '@activepieces/piece-soap'
import * as PieceDeepseek from '@activepieces/piece-deepseek'
import * as PieceCertopus from '@activepieces/piece-certopus'
import * as PieceFacebookLeads from '@activepieces/piece-facebook-leads'
import * as PieceBubble from '@activepieces/piece-bubble'
import * as PieceMixpanel from '@activepieces/piece-mixpanel'
import * as PieceXml from '@activepieces/piece-xml'
import * as PieceQrcode from '@activepieces/piece-qrcode'
import * as PieceNotion from '@activepieces/piece-notion'
import * as PieceElevenlabs from '@activepieces/piece-elevenlabs'
import * as PiecePastebin from '@activepieces/piece-pastebin'
import * as PieceSupabase from '@activepieces/piece-supabase'
import * as PieceZohoCrm from '@activepieces/piece-zoho-crm'
import * as PieceAzureOpenai from '@activepieces/piece-azure-openai'
import * as PieceInstasent from '@activepieces/piece-instasent'
import * as PieceGoogleCalendar from '@activepieces/piece-google-calendar'
import * as PieceZuora from '@activepieces/piece-zuora'
import * as PieceAfforai from '@activepieces/piece-afforai'
import * as PieceTags from '@activepieces/piece-tags'
import * as PieceBrilliantDirectories from '@activepieces/piece-brilliant-directories'
import * as PieceRetable from '@activepieces/piece-retable'
import * as PieceHubspot from '@activepieces/piece-hubspot'
import * as PiecePushover from '@activepieces/piece-pushover'
import * as PieceHarvest from '@activepieces/piece-harvest'
import * as PieceMicrosoftOutlookCalendar from '@activepieces/piece-microsoft-outlook-calendar'
import * as PieceAirtable from '@activepieces/piece-airtable'
import * as PieceHeartbeat from '@activepieces/piece-heartbeat'
import * as PieceTally from '@activepieces/piece-tally'
import * as PieceTodoist from '@activepieces/piece-todoist'
import * as PieceConnections from '@activepieces/piece-connections'
import * as PieceRobolly from '@activepieces/piece-robolly'
import * as PieceAzureCommunicationServices from '@activepieces/piece-azure-communication-services'
import * as PieceAianswer from '@activepieces/piece-aianswer'
import * as PieceScenario from '@activepieces/piece-scenario'
import * as PieceLinka from '@activepieces/piece-linka'
import * as PiecePostgres from '@activepieces/piece-postgres'
import * as PiecePerplexityAi from '@activepieces/piece-perplexity-ai'
import * as PieceOnfleet from '@activepieces/piece-onfleet'
import * as PieceJson from '@activepieces/piece-json'
import * as PieceWedof from '@activepieces/piece-wedof'
import * as PieceGistly from '@activepieces/piece-gistly'
import * as PieceGithub from '@activepieces/piece-github'
import * as PieceStableDiffusionWebui from '@activepieces/piece-stable-diffusion-webui'
import * as PieceGoogleGemini from '@activepieces/piece-google-gemini'
import * as PieceFigma from '@activepieces/piece-figma'
import * as PieceOpenRouter from '@activepieces/piece-open-router'
import * as PieceApollo from '@activepieces/piece-apollo'
import * as PieceGoogleSheets from '@activepieces/piece-google-sheets'
import * as PieceSeven from '@activepieces/piece-seven'
import * as PieceLine from '@activepieces/piece-line'
import * as PieceJotform from '@activepieces/piece-jotform'
import * as PieceZendesk from '@activepieces/piece-zendesk'
import * as PieceInstagramBusiness from '@activepieces/piece-instagram-business'
import * as PieceCartloom from '@activepieces/piece-cartloom'
import * as PieceHttp from '@activepieces/piece-http'
import * as PieceGoogleDrive from '@activepieces/piece-google-drive'
import * as PieceGraphql from '@activepieces/piece-graphql'
import * as PieceCsv from '@activepieces/piece-csv'
import * as PieceSmtp from '@activepieces/piece-smtp'
import * as PieceStraico from '@activepieces/piece-straico'
import * as PieceGcloudPubsub from '@activepieces/piece-gcloud-pubsub'
import * as PieceUtilityAi from '@activepieces/piece-utility-ai'
import * as PieceDataMapper from '@activepieces/piece-data-mapper'
import * as PieceMysql from '@activepieces/piece-mysql'
import * as PieceCloutly from '@activepieces/piece-cloutly'
import * as PieceMailerLite from '@activepieces/piece-mailer-lite'
import * as PieceSupadata from '@activepieces/piece-supadata'
import * as PieceConfluence from '@activepieces/piece-confluence'
import * as PieceAssemblyai from '@activepieces/piece-assemblyai'
import * as PieceKallabotAi from '@activepieces/piece-kallabot-ai'
import * as PieceDeepl from '@activepieces/piece-deepl'
import * as PieceQdrant from '@activepieces/piece-qdrant'
import * as PieceQueue from '@activepieces/piece-queue'
import * as PieceRetune from '@activepieces/piece-retune'
import * as PieceDiscourse from '@activepieces/piece-discourse'
import * as PieceZoom from '@activepieces/piece-zoom'
import * as PieceFlowise from '@activepieces/piece-flowise'
import * as PieceDropbox from '@activepieces/piece-dropbox'
import * as PieceAmazonS3 from '@activepieces/piece-amazon-s3'
import * as PieceMicrosoftDynamicsCrm from '@activepieces/piece-microsoft-dynamics-crm'
import * as PieceSaastic from '@activepieces/piece-saastic'
import * as PieceGotify from '@activepieces/piece-gotify'
import * as PieceBonjoro from '@activepieces/piece-bonjoro'
import * as PieceSalesforce from '@activepieces/piece-salesforce'
import * as PieceAshby from '@activepieces/piece-ashby'
import * as PieceFileHelper from '@activepieces/piece-file-helper'
import * as PieceSlack from '@activepieces/piece-slack'
import * as PieceFormbricks from '@activepieces/piece-formbricks'
import * as PiecePastefy from '@activepieces/piece-pastefy'
import * as PieceDataSummarizer from '@activepieces/piece-data-summarizer'
import * as PieceMattermost from '@activepieces/piece-mattermost'
import * as PiecePosthog from '@activepieces/piece-posthog'
import * as PieceMetabase from '@activepieces/piece-metabase'
import * as PieceRazorpay from '@activepieces/piece-razorpay'
import * as PieceContiguity from '@activepieces/piece-contiguity'
import * as PieceCustomerIo from '@activepieces/piece-customer-io'
import * as PieceTrello from '@activepieces/piece-trello'
import * as PieceSurveymonkey from '@activepieces/piece-surveymonkey'
import * as PieceReoonVerifier from '@activepieces/piece-reoon-verifier'
import * as PieceGrist from '@activepieces/piece-grist'
import * as PieceGoogleMyBusiness from '@activepieces/piece-google-my-business'
import * as PieceConstantContact from '@activepieces/piece-constant-contact'
import * as PieceTavily from '@activepieces/piece-tavily'
import * as PieceFacebookPages from '@activepieces/piece-facebook-pages'
import * as PieceSendy from '@activepieces/piece-sendy'
import * as PieceSimplepdf from '@activepieces/piece-simplepdf'
import * as PieceGameball from '@activepieces/piece-gameball'
import * as PieceNifty from '@activepieces/piece-nifty'
import * as PieceWootric from '@activepieces/piece-wootric'
import * as PieceKrispCall from '@activepieces/piece-krisp-call'
import * as PieceCalendly from '@activepieces/piece-calendly'
import * as PieceClarifai from '@activepieces/piece-clarifai'
import * as PieceSperse from '@activepieces/piece-sperse'
import * as PieceDelay from '@activepieces/piece-delay'
import * as PieceRespaid from '@activepieces/piece-respaid'
import * as PieceThankster from '@activepieces/piece-thankster'
import * as PieceZerobounce from '@activepieces/piece-zerobounce'
import * as PieceBeamer from '@activepieces/piece-beamer'
import * as PieceUpgradechat from '@activepieces/piece-upgradechat'
import * as PieceKimai from '@activepieces/piece-kimai'
import * as PieceMatrix from '@activepieces/piece-matrix'
import * as PieceAsana from '@activepieces/piece-asana'
import * as PieceReachinbox from '@activepieces/piece-reachinbox'
import * as PieceGoogleSearchConsole from '@activepieces/piece-google-search-console'
import * as PieceWebling from '@activepieces/piece-webling'
import * as PieceApify from '@activepieces/piece-apify'
import * as PieceGmail from '@activepieces/piece-gmail'
import * as PieceQuickzu from '@activepieces/piece-quickzu'
import * as PieceTaskade from '@activepieces/piece-taskade'
import * as PieceWhatsapp from '@activepieces/piece-whatsapp'
import * as PieceBettermode from '@activepieces/piece-bettermode'
import * as PieceResend from '@activepieces/piece-resend'
import * as PieceGoogleContacts from '@activepieces/piece-google-contacts'
import * as PieceOpenai from '@activepieces/piece-openai'
import * as PieceLinkedin from '@activepieces/piece-linkedin'
import * as PieceActivepieces from '@activepieces/piece-activepieces'
import * as PieceMatomo from '@activepieces/piece-matomo'
import * as PieceStabilityAi from '@activepieces/piece-stability-ai'
import * as PieceApproval from '@activepieces/piece-approval'
import * as PieceTwilio from '@activepieces/piece-twilio'
import * as PieceStore from '@activepieces/piece-store'
import * as PieceStripe from '@activepieces/piece-stripe'
import * as PieceBinance from '@activepieces/piece-binance'

export const pieceIntegrations: PiecePackage = {
  "AmazonSqs": {
    auth: findProperty(PieceAmazonSqs, 'amazonsqsAuth'),
    piece: findProperty(PieceAmazonSqs, 'amazonsqs')
  },
  "CalCom": {
    auth: findProperty(PieceCalCom, 'calcomAuth'),
    piece: findProperty(PieceCalCom, 'calcom')
  },
  "Webhook": {
    auth: findProperty(PieceWebhook, 'webhookAuth'),
    piece: findProperty(PieceWebhook, 'webhook')
  },
  "Devin": {
    auth: findProperty(PieceDevin, 'devinAuth'),
    piece: findProperty(PieceDevin, 'devin')
  },
  "Drip": {
    auth: findProperty(PieceDrip, 'dripAuth'),
    piece: findProperty(PieceDrip, 'drip')
  },
  "Freshdesk": {
    auth: findProperty(PieceFreshdesk, 'freshdeskAuth'),
    piece: findProperty(PieceFreshdesk, 'freshdesk')
  },
  "Generatebanners": {
    auth: findProperty(PieceGeneratebanners, 'generatebannersAuth'),
    piece: findProperty(PieceGeneratebanners, 'generatebanners')
  },
  "MicrosoftTeams": {
    auth: findProperty(PieceMicrosoftTeams, 'microsoftteamsAuth'),
    piece: findProperty(PieceMicrosoftTeams, 'microsoftteams')
  },
  "MoxieCrm": {
    auth: findProperty(PieceMoxieCrm, 'moxiecrmAuth'),
    piece: findProperty(PieceMoxieCrm, 'moxiecrm')
  },
  "Contentful": {
    auth: findProperty(PieceContentful, 'contentfulAuth'),
    piece: findProperty(PieceContentful, 'contentful')
  },
  "TwinLabs": {
    auth: findProperty(PieceTwinLabs, 'twinlabsAuth'),
    piece: findProperty(PieceTwinLabs, 'twinlabs')
  },
  "FliqrAi": {
    auth: findProperty(PieceFliqrAi, 'fliqraiAuth'),
    piece: findProperty(PieceFliqrAi, 'fliqrai')
  },
  "Dust": {
    auth: findProperty(PieceDust, 'dustAuth'),
    piece: findProperty(PieceDust, 'dust')
  },
  "GoogleDocs": {
    auth: findProperty(PieceGoogleDocs, 'googledocsAuth'),
    piece: findProperty(PieceGoogleDocs, 'googledocs')
  },
  "Webflow": {
    auth: findProperty(PieceWebflow, 'webflowAuth'),
    piece: findProperty(PieceWebflow, 'webflow')
  },
  "Twitter": {
    auth: findProperty(PieceTwitter, 'twitterAuth'),
    piece: findProperty(PieceTwitter, 'twitter')
  },
  "Baserow": {
    auth: findProperty(PieceBaserow, 'baserowAuth'),
    piece: findProperty(PieceBaserow, 'baserow')
  },
  "Crypto": {
    auth: findProperty(PieceCrypto, 'cryptoAuth'),
    piece: findProperty(PieceCrypto, 'crypto')
  },
  "Monday": {
    auth: findProperty(PieceMonday, 'mondayAuth'),
    piece: findProperty(PieceMonday, 'monday')
  },
  "Hackernews": {
    auth: findProperty(PieceHackernews, 'hackernewsAuth'),
    piece: findProperty(PieceHackernews, 'hackernews')
  },
  "Aminos": {
    auth: findProperty(PieceAminos, 'aminosAuth'),
    piece: findProperty(PieceAminos, 'aminos')
  },
  "Woocommerce": {
    auth: findProperty(PieceWoocommerce, 'woocommerceAuth'),
    piece: findProperty(PieceWoocommerce, 'woocommerce')
  },
  "ImageAi": {
    auth: findProperty(PieceImageAi, 'imageaiAuth'),
    piece: findProperty(PieceImageAi, 'imageai')
  },
  "Schedule": {
    auth: findProperty(PieceSchedule, 'scheduleAuth'),
    piece: findProperty(PieceSchedule, 'schedule')
  },
  "ImageHelper": {
    auth: findProperty(PieceImageHelper, 'imagehelperAuth'),
    piece: findProperty(PieceImageHelper, 'imagehelper')
  },
  "Sendfox": {
    auth: findProperty(PieceSendfox, 'sendfoxAuth'),
    piece: findProperty(PieceSendfox, 'sendfox')
  },
  "Nocodb": {
    auth: findProperty(PieceNocodb, 'nocodbAuth'),
    piece: findProperty(PieceNocodb, 'nocodb')
  },
  "Ghostcms": {
    auth: findProperty(PieceGhostcms, 'ghostcmsAuth'),
    piece: findProperty(PieceGhostcms, 'ghostcms')
  },
  "Bannerbear": {
    auth: findProperty(PieceBannerbear, 'bannerbearAuth'),
    piece: findProperty(PieceBannerbear, 'bannerbear')
  },
  "Box": {
    auth: findProperty(PieceBox, 'boxAuth'),
    piece: findProperty(PieceBox, 'box')
  },
  "Imap": {
    auth: findProperty(PieceImap, 'imapAuth'),
    piece: findProperty(PieceImap, 'imap')
  },
  "Discord": {
    auth: findProperty(PieceDiscord, 'discordAuth'),
    piece: findProperty(PieceDiscord, 'discord')
  },
  "Smaily": {
    auth: findProperty(PieceSmaily, 'smailyAuth'),
    piece: findProperty(PieceSmaily, 'smaily')
  },
  "ZohoBooks": {
    auth: findProperty(PieceZohoBooks, 'zohobooksAuth'),
    piece: findProperty(PieceZohoBooks, 'zohobooks')
  },
  "Clockodo": {
    auth: findProperty(PieceClockodo, 'clockodoAuth'),
    piece: findProperty(PieceClockodo, 'clockodo')
  },
  "Surrealdb": {
    auth: findProperty(PieceSurrealdb, 'surrealdbAuth'),
    piece: findProperty(PieceSurrealdb, 'surrealdb')
  },
  "KizeoForms": {
    auth: findProperty(PieceKizeoForms, 'kizeoformsAuth'),
    piece: findProperty(PieceKizeoForms, 'kizeoforms')
  },
  "Forms": {
    auth: findProperty(PieceForms, 'formsAuth'),
    piece: findProperty(PieceForms, 'forms')
  },
  "MicrosoftSharepoint": {
    auth: findProperty(PieceMicrosoftSharepoint, 'microsoftsharepointAuth'),
    piece: findProperty(PieceMicrosoftSharepoint, 'microsoftsharepoint')
  },
  "Gitlab": {
    auth: findProperty(PieceGitlab, 'gitlabAuth'),
    piece: findProperty(PieceGitlab, 'gitlab')
  },
  "Messagebird": {
    auth: findProperty(PieceMessagebird, 'messagebirdAuth'),
    piece: findProperty(PieceMessagebird, 'messagebird')
  },
  "TelegramBot": {
    auth: findProperty(PieceTelegramBot, 'telegrambotAuth'),
    piece: findProperty(PieceTelegramBot, 'telegrambot')
  },
  "MicrosoftExcel365": {
    auth: findProperty(PieceMicrosoftExcel365, 'microsoftexcel365Auth'),
    piece: findProperty(PieceMicrosoftExcel365, 'microsoftexcel365')
  },
  "Wordpress": {
    auth: findProperty(PieceWordpress, 'wordpressAuth'),
    piece: findProperty(PieceWordpress, 'wordpress')
  },
  "Mastodon": {
    auth: findProperty(PieceMastodon, 'mastodonAuth'),
    piece: findProperty(PieceMastodon, 'mastodon')
  },
  "Tidycal": {
    auth: findProperty(PieceTidycal, 'tidycalAuth'),
    piece: findProperty(PieceTidycal, 'tidycal')
  },
  "Pylon": {
    auth: findProperty(PiecePylon, 'pylonAuth'),
    piece: findProperty(PiecePylon, 'pylon')
  },
  "Localai": {
    auth: findProperty(PieceLocalai, 'localaiAuth'),
    piece: findProperty(PieceLocalai, 'localai')
  },
  "MicrosoftDynamics365BusinessCentral": {
    auth: findProperty(PieceMicrosoftDynamics365BusinessCentral, 'microsoftdynamics365businesscentralAuth'),
    piece: findProperty(PieceMicrosoftDynamics365BusinessCentral, 'microsoftdynamics365businesscentral')
  },
  "Sendgrid": {
    auth: findProperty(PieceSendgrid, 'sendgridAuth'),
    piece: findProperty(PieceSendgrid, 'sendgrid')
  },
  "Bamboohr": {
    auth: findProperty(PieceBamboohr, 'bamboohrAuth'),
    piece: findProperty(PieceBamboohr, 'bamboohr')
  },
  "Mautic": {
    auth: findProperty(PieceMautic, 'mauticAuth'),
    piece: findProperty(PieceMautic, 'mautic')
  },
  "Scrapegrapghai": {
    auth: findProperty(PieceScrapegrapghai, 'scrapegrapghaiAuth'),
    piece: findProperty(PieceScrapegrapghai, 'scrapegrapghai')
  },
  "Apitable": {
    auth: findProperty(PieceApitable, 'apitableAuth'),
    piece: findProperty(PieceApitable, 'apitable')
  },
  "CaptainData": {
    auth: findProperty(PieceCaptainData, 'captaindataAuth'),
    piece: findProperty(PieceCaptainData, 'captaindata')
  },
  "Mindee": {
    auth: findProperty(PieceMindee, 'mindeeAuth'),
    piece: findProperty(PieceMindee, 'mindee')
  },
  "Firecrawl": {
    auth: findProperty(PieceFirecrawl, 'firecrawlAuth'),
    piece: findProperty(PieceFirecrawl, 'firecrawl')
  },
  "MicrosoftOnedrive": {
    auth: findProperty(PieceMicrosoftOnedrive, 'microsoftonedriveAuth'),
    piece: findProperty(PieceMicrosoftOnedrive, 'microsoftonedrive')
  },
  "ZohoInvoice": {
    auth: findProperty(PieceZohoInvoice, 'zohoinvoiceAuth'),
    piece: findProperty(PieceZohoInvoice, 'zohoinvoice')
  },
  "DateHelper": {
    auth: findProperty(PieceDateHelper, 'datehelperAuth'),
    piece: findProperty(PieceDateHelper, 'datehelper')
  },
  "Activecampaign": {
    auth: findProperty(PieceActivecampaign, 'activecampaignAuth'),
    piece: findProperty(PieceActivecampaign, 'activecampaign')
  },
  "Xero": {
    auth: findProperty(PieceXero, 'xeroAuth'),
    piece: findProperty(PieceXero, 'xero')
  },
  "Invoiceninja": {
    auth: findProperty(PieceInvoiceninja, 'invoiceninjaAuth'),
    piece: findProperty(PieceInvoiceninja, 'invoiceninja')
  },
  "Acumbamail": {
    auth: findProperty(PieceAcumbamail, 'acumbamailAuth'),
    piece: findProperty(PieceAcumbamail, 'acumbamail')
  },
  "Actualbudget": {
    auth: findProperty(PieceActualbudget, 'actualbudgetAuth'),
    piece: findProperty(PieceActualbudget, 'actualbudget')
  },
  "Village": {
    auth: findProperty(PieceVillage, 'villageAuth'),
    piece: findProperty(PieceVillage, 'village')
  },
  "Claude": {
    auth: findProperty(PieceClaude, 'claudeAuth'),
    piece: findProperty(PieceClaude, 'claude')
  },
  "LeadConnector": {
    auth: findProperty(PieceLeadConnector, 'leadconnectorAuth'),
    piece: findProperty(PieceLeadConnector, 'leadconnector')
  },
  "AmazonSns": {
    auth: findProperty(PieceAmazonSns, 'amazonsnsAuth'),
    piece: findProperty(PieceAmazonSns, 'amazonsns')
  },
  "Square": {
    auth: findProperty(PieceSquare, 'squareAuth'),
    piece: findProperty(PieceSquare, 'square')
  },
  "Spotify": {
    auth: findProperty(PieceSpotify, 'spotifyAuth'),
    piece: findProperty(PieceSpotify, 'spotify')
  },
  "Odoo": {
    auth: findProperty(PieceOdoo, 'odooAuth'),
    piece: findProperty(PieceOdoo, 'odoo')
  },
  "Maileroo": {
    auth: findProperty(PieceMaileroo, 'mailerooAuth'),
    piece: findProperty(PieceMaileroo, 'maileroo')
  },
  "Poper": {
    auth: findProperty(PiecePoper, 'poperAuth'),
    piece: findProperty(PiecePoper, 'poper')
  },
  "Llmrails": {
    auth: findProperty(PieceLlmrails, 'llmrailsAuth'),
    piece: findProperty(PieceLlmrails, 'llmrails')
  },
  "Freshsales": {
    auth: findProperty(PieceFreshsales, 'freshsalesAuth'),
    piece: findProperty(PieceFreshsales, 'freshsales')
  },
  "Pipedrive": {
    auth: findProperty(PiecePipedrive, 'pipedriveAuth'),
    piece: findProperty(PiecePipedrive, 'pipedrive')
  },
  "Datocms": {
    auth: findProperty(PieceDatocms, 'datocmsAuth'),
    piece: findProperty(PieceDatocms, 'datocms')
  },
  "GoogleForms": {
    auth: findProperty(PieceGoogleForms, 'googleformsAuth'),
    piece: findProperty(PieceGoogleForms, 'googleforms')
  },
  "SessionsUs": {
    auth: findProperty(PieceSessionsUs, 'sessionsusAuth'),
    piece: findProperty(PieceSessionsUs, 'sessionsus')
  },
  "Linear": {
    auth: findProperty(PieceLinear, 'linearAuth'),
    piece: findProperty(PieceLinear, 'linear')
  },
  "Flowlu": {
    auth: findProperty(PieceFlowlu, 'flowluAuth'),
    piece: findProperty(PieceFlowlu, 'flowlu')
  },
  "Vtex": {
    auth: findProperty(PieceVtex, 'vtexAuth'),
    piece: findProperty(PieceVtex, 'vtex')
  },
  "Mailjet": {
    auth: findProperty(PieceMailjet, 'mailjetAuth'),
    piece: findProperty(PieceMailjet, 'mailjet')
  },
  "TextAi": {
    auth: findProperty(PieceTextAi, 'textaiAuth'),
    piece: findProperty(PieceTextAi, 'textai')
  },
  "Segment": {
    auth: findProperty(PieceSegment, 'segmentAuth'),
    piece: findProperty(PieceSegment, 'segment')
  },
  "Convertkit": {
    auth: findProperty(PieceConvertkit, 'convertkitAuth'),
    piece: findProperty(PieceConvertkit, 'convertkit')
  },
  "Lever": {
    auth: findProperty(PieceLever, 'leverAuth'),
    piece: findProperty(PieceLever, 'lever')
  },
  "Rss": {
    auth: findProperty(PieceRss, 'rssAuth'),
    piece: findProperty(PieceRss, 'rss')
  },
  "Intercom": {
    auth: findProperty(PieceIntercom, 'intercomAuth'),
    piece: findProperty(PieceIntercom, 'intercom')
  },
  "Ntfy": {
    auth: findProperty(PieceNtfy, 'ntfyAuth'),
    piece: findProperty(PieceNtfy, 'ntfy')
  },
  "GoogleTasks": {
    auth: findProperty(PieceGoogleTasks, 'googletasksAuth'),
    piece: findProperty(PieceGoogleTasks, 'googletasks')
  },
  "Vtiger": {
    auth: findProperty(PieceVtiger, 'vtigerAuth'),
    piece: findProperty(PieceVtiger, 'vtiger')
  },
  "Talkable": {
    auth: findProperty(PieceTalkable, 'talkableAuth'),
    piece: findProperty(PieceTalkable, 'talkable')
  },
  "Shopify": {
    auth: findProperty(PieceShopify, 'shopifyAuth'),
    piece: findProperty(PieceShopify, 'shopify')
  },
  "Groq": {
    auth: findProperty(PieceGroq, 'groqAuth'),
    piece: findProperty(PieceGroq, 'groq')
  },
  "Clearout": {
    auth: findProperty(PieceClearout, 'clearoutAuth'),
    piece: findProperty(PieceClearout, 'clearout')
  },
  "MathHelper": {
    auth: findProperty(PieceMathHelper, 'mathhelperAuth'),
    piece: findProperty(PieceMathHelper, 'mathhelper')
  },
  "Sftp": {
    auth: findProperty(PieceSftp, 'sftpAuth'),
    piece: findProperty(PieceSftp, 'sftp')
  },
  "Pdf": {
    auth: findProperty(PiecePdf, 'pdfAuth'),
    piece: findProperty(PiecePdf, 'pdf')
  },
  "TextHelper": {
    auth: findProperty(PieceTextHelper, 'texthelperAuth'),
    piece: findProperty(PieceTextHelper, 'texthelper')
  },
  "Typeform": {
    auth: findProperty(PieceTypeform, 'typeformAuth'),
    piece: findProperty(PieceTypeform, 'typeform')
  },
  "Clickup": {
    auth: findProperty(PieceClickup, 'clickupAuth'),
    piece: findProperty(PieceClickup, 'clickup')
  },
  "Mailchimp": {
    auth: findProperty(PieceMailchimp, 'mailchimpAuth'),
    piece: findProperty(PieceMailchimp, 'mailchimp')
  },
  "Gravityforms": {
    auth: findProperty(PieceGravityforms, 'gravityformsAuth'),
    piece: findProperty(PieceGravityforms, 'gravityforms')
  },
  "Chargekeep": {
    auth: findProperty(PieceChargekeep, 'chargekeepAuth'),
    piece: findProperty(PieceChargekeep, 'chargekeep')
  },
  "Frame": {
    auth: findProperty(PieceFrame, 'frameAuth'),
    piece: findProperty(PieceFrame, 'frame')
  },
  "Rabbitmq": {
    auth: findProperty(PieceRabbitmq, 'rabbitmqAuth'),
    piece: findProperty(PieceRabbitmq, 'rabbitmq')
  },
  "Snowflake": {
    auth: findProperty(PieceSnowflake, 'snowflakeAuth'),
    piece: findProperty(PieceSnowflake, 'snowflake')
  },
  "Vbout": {
    auth: findProperty(PieceVbout, 'vboutAuth'),
    piece: findProperty(PieceVbout, 'vbout')
  },
  "Subflows": {
    auth: findProperty(PieceSubflows, 'subflowsAuth'),
    piece: findProperty(PieceSubflows, 'subflows')
  },
  "Sendinblue": {
    auth: findProperty(PieceSendinblue, 'sendinblueAuth'),
    piece: findProperty(PieceSendinblue, 'sendinblue')
  },
  "JiraCloud": {
    auth: findProperty(PieceJiraCloud, 'jiracloudAuth'),
    piece: findProperty(PieceJiraCloud, 'jiracloud')
  },
  "Whatsable": {
    auth: findProperty(PieceWhatsable, 'whatsableAuth'),
    piece: findProperty(PieceWhatsable, 'whatsable')
  },
  "Totalcms": {
    auth: findProperty(PieceTotalcms, 'totalcmsAuth'),
    piece: findProperty(PieceTotalcms, 'totalcms')
  },
  "Youtube": {
    auth: findProperty(PieceYoutube, 'youtubeAuth'),
    piece: findProperty(PieceYoutube, 'youtube')
  },
  "Soap": {
    auth: findProperty(PieceSoap, 'soapAuth'),
    piece: findProperty(PieceSoap, 'soap')
  },
  "Deepseek": {
    auth: findProperty(PieceDeepseek, 'deepseekAuth'),
    piece: findProperty(PieceDeepseek, 'deepseek')
  },
  "Certopus": {
    auth: findProperty(PieceCertopus, 'certopusAuth'),
    piece: findProperty(PieceCertopus, 'certopus')
  },
  "FacebookLeads": {
    auth: findProperty(PieceFacebookLeads, 'facebookleadsAuth'),
    piece: findProperty(PieceFacebookLeads, 'facebookleads')
  },
  "Bubble": {
    auth: findProperty(PieceBubble, 'bubbleAuth'),
    piece: findProperty(PieceBubble, 'bubble')
  },
  "Mixpanel": {
    auth: findProperty(PieceMixpanel, 'mixpanelAuth'),
    piece: findProperty(PieceMixpanel, 'mixpanel')
  },
  "Xml": {
    auth: findProperty(PieceXml, 'xmlAuth'),
    piece: findProperty(PieceXml, 'xml')
  },
  "Qrcode": {
    auth: findProperty(PieceQrcode, 'qrcodeAuth'),
    piece: findProperty(PieceQrcode, 'qrcode')
  },
  "Notion": {
    auth: findProperty(PieceNotion, 'notionAuth'),
    piece: findProperty(PieceNotion, 'notion')
  },
  "Elevenlabs": {
    auth: findProperty(PieceElevenlabs, 'elevenlabsAuth'),
    piece: findProperty(PieceElevenlabs, 'elevenlabs')
  },
  "Pastebin": {
    auth: findProperty(PiecePastebin, 'pastebinAuth'),
    piece: findProperty(PiecePastebin, 'pastebin')
  },
  "Supabase": {
    auth: findProperty(PieceSupabase, 'supabaseAuth'),
    piece: findProperty(PieceSupabase, 'supabase')
  },
  "ZohoCrm": {
    auth: findProperty(PieceZohoCrm, 'zohocrmAuth'),
    piece: findProperty(PieceZohoCrm, 'zohocrm')
  },
  "AzureOpenai": {
    auth: findProperty(PieceAzureOpenai, 'azureopenaiAuth'),
    piece: findProperty(PieceAzureOpenai, 'azureopenai')
  },
  "Instasent": {
    auth: findProperty(PieceInstasent, 'instasentAuth'),
    piece: findProperty(PieceInstasent, 'instasent')
  },
  "GoogleCalendar": {
    auth: findProperty(PieceGoogleCalendar, 'googlecalendarAuth'),
    piece: findProperty(PieceGoogleCalendar, 'googlecalendar')
  },
  "Zuora": {
    auth: findProperty(PieceZuora, 'zuoraAuth'),
    piece: findProperty(PieceZuora, 'zuora')
  },
  "Afforai": {
    auth: findProperty(PieceAfforai, 'afforaiAuth'),
    piece: findProperty(PieceAfforai, 'afforai')
  },
  "Tags": {
    auth: findProperty(PieceTags, 'tagsAuth'),
    piece: findProperty(PieceTags, 'tags')
  },
  "BrilliantDirectories": {
    auth: findProperty(PieceBrilliantDirectories, 'brilliantdirectoriesAuth'),
    piece: findProperty(PieceBrilliantDirectories, 'brilliantdirectories')
  },
  "Retable": {
    auth: findProperty(PieceRetable, 'retableAuth'),
    piece: findProperty(PieceRetable, 'retable')
  },
  "Hubspot": {
    auth: findProperty(PieceHubspot, 'hubspotAuth'),
    piece: findProperty(PieceHubspot, 'hubspot')
  },
  "Pushover": {
    auth: findProperty(PiecePushover, 'pushoverAuth'),
    piece: findProperty(PiecePushover, 'pushover')
  },
  "Harvest": {
    auth: findProperty(PieceHarvest, 'harvestAuth'),
    piece: findProperty(PieceHarvest, 'harvest')
  },
  "MicrosoftOutlookCalendar": {
    auth: findProperty(PieceMicrosoftOutlookCalendar, 'microsoftoutlookcalendarAuth'),
    piece: findProperty(PieceMicrosoftOutlookCalendar, 'microsoftoutlookcalendar')
  },
  "Airtable": {
    auth: findProperty(PieceAirtable, 'airtableAuth'),
    piece: findProperty(PieceAirtable, 'airtable')
  },
  "Heartbeat": {
    auth: findProperty(PieceHeartbeat, 'heartbeatAuth'),
    piece: findProperty(PieceHeartbeat, 'heartbeat')
  },
  "Tally": {
    auth: findProperty(PieceTally, 'tallyAuth'),
    piece: findProperty(PieceTally, 'tally')
  },
  "Todoist": {
    auth: findProperty(PieceTodoist, 'todoistAuth'),
    piece: findProperty(PieceTodoist, 'todoist')
  },
  "Connections": {
    auth: findProperty(PieceConnections, 'connectionsAuth'),
    piece: findProperty(PieceConnections, 'connections')
  },
  "Robolly": {
    auth: findProperty(PieceRobolly, 'robollyAuth'),
    piece: findProperty(PieceRobolly, 'robolly')
  },
  "AzureCommunicationServices": {
    auth: findProperty(PieceAzureCommunicationServices, 'azurecommunicationservicesAuth'),
    piece: findProperty(PieceAzureCommunicationServices, 'azurecommunicationservices')
  },
  "Aianswer": {
    auth: findProperty(PieceAianswer, 'aianswerAuth'),
    piece: findProperty(PieceAianswer, 'aianswer')
  },
  "Scenario": {
    auth: findProperty(PieceScenario, 'scenarioAuth'),
    piece: findProperty(PieceScenario, 'scenario')
  },
  "Linka": {
    auth: findProperty(PieceLinka, 'linkaAuth'),
    piece: findProperty(PieceLinka, 'linka')
  },
  "Postgres": {
    auth: findProperty(PiecePostgres, 'postgresAuth'),
    piece: findProperty(PiecePostgres, 'postgres')
  },
  "PerplexityAi": {
    auth: findProperty(PiecePerplexityAi, 'perplexityaiAuth'),
    piece: findProperty(PiecePerplexityAi, 'perplexityai')
  },
  "Onfleet": {
    auth: findProperty(PieceOnfleet, 'onfleetAuth'),
    piece: findProperty(PieceOnfleet, 'onfleet')
  },
  "Json": {
    auth: findProperty(PieceJson, 'jsonAuth'),
    piece: findProperty(PieceJson, 'json')
  },
  "Wedof": {
    auth: findProperty(PieceWedof, 'wedofAuth'),
    piece: findProperty(PieceWedof, 'wedof')
  },
  "Gistly": {
    auth: findProperty(PieceGistly, 'gistlyAuth'),
    piece: findProperty(PieceGistly, 'gistly')
  },
  "Github": {
    auth: findProperty(PieceGithub, 'githubAuth'),
    piece: findProperty(PieceGithub, 'github')
  },
  "StableDiffusionWebui": {
    auth: findProperty(PieceStableDiffusionWebui, 'stablediffusionwebuiAuth'),
    piece: findProperty(PieceStableDiffusionWebui, 'stablediffusionwebui')
  },
  "GoogleGemini": {
    auth: findProperty(PieceGoogleGemini, 'googlegeminiAuth'),
    piece: findProperty(PieceGoogleGemini, 'googlegemini')
  },
  "Figma": {
    auth: findProperty(PieceFigma, 'figmaAuth'),
    piece: findProperty(PieceFigma, 'figma')
  },
  "OpenRouter": {
    auth: findProperty(PieceOpenRouter, 'openrouterAuth'),
    piece: findProperty(PieceOpenRouter, 'openrouter')
  },
  "Apollo": {
    auth: findProperty(PieceApollo, 'apolloAuth'),
    piece: findProperty(PieceApollo, 'apollo')
  },
  "GoogleSheets": {
    auth: findProperty(PieceGoogleSheets, 'googlesheetsAuth'),
    piece: findProperty(PieceGoogleSheets, 'googlesheets')
  },
  "Seven": {
    auth: findProperty(PieceSeven, 'sevenAuth'),
    piece: findProperty(PieceSeven, 'seven')
  },
  "Line": {
    auth: findProperty(PieceLine, 'lineAuth'),
    piece: findProperty(PieceLine, 'line')
  },
  "Jotform": {
    auth: findProperty(PieceJotform, 'jotformAuth'),
    piece: findProperty(PieceJotform, 'jotform')
  },
  "Zendesk": {
    auth: findProperty(PieceZendesk, 'zendeskAuth'),
    piece: findProperty(PieceZendesk, 'zendesk')
  },
  "InstagramBusiness": {
    auth: findProperty(PieceInstagramBusiness, 'instagrambusinessAuth'),
    piece: findProperty(PieceInstagramBusiness, 'instagrambusiness')
  },
  "Cartloom": {
    auth: findProperty(PieceCartloom, 'cartloomAuth'),
    piece: findProperty(PieceCartloom, 'cartloom')
  },
  "Http": {
    auth: findProperty(PieceHttp, 'httpAuth'),
    piece: findProperty(PieceHttp, 'http')
  },
  "GoogleDrive": {
    auth: findProperty(PieceGoogleDrive, 'googledriveAuth'),
    piece: findProperty(PieceGoogleDrive, 'googledrive')
  },
  "Graphql": {
    auth: findProperty(PieceGraphql, 'graphqlAuth'),
    piece: findProperty(PieceGraphql, 'graphql')
  },
  "Csv": {
    auth: findProperty(PieceCsv, 'csvAuth'),
    piece: findProperty(PieceCsv, 'csv')
  },
  "Smtp": {
    auth: findProperty(PieceSmtp, 'smtpAuth'),
    piece: findProperty(PieceSmtp, 'smtp')
  },
  "Straico": {
    auth: findProperty(PieceStraico, 'straicoAuth'),
    piece: findProperty(PieceStraico, 'straico')
  },
  "GcloudPubsub": {
    auth: findProperty(PieceGcloudPubsub, 'gcloudpubsubAuth'),
    piece: findProperty(PieceGcloudPubsub, 'gcloudpubsub')
  },
  "UtilityAi": {
    auth: findProperty(PieceUtilityAi, 'utilityaiAuth'),
    piece: findProperty(PieceUtilityAi, 'utilityai')
  },
  "DataMapper": {
    auth: findProperty(PieceDataMapper, 'datamapperAuth'),
    piece: findProperty(PieceDataMapper, 'datamapper')
  },
  "Mysql": {
    auth: findProperty(PieceMysql, 'mysqlAuth'),
    piece: findProperty(PieceMysql, 'mysql')
  },
  "Cloutly": {
    auth: findProperty(PieceCloutly, 'cloutlyAuth'),
    piece: findProperty(PieceCloutly, 'cloutly')
  },
  "MailerLite": {
    auth: findProperty(PieceMailerLite, 'mailerliteAuth'),
    piece: findProperty(PieceMailerLite, 'mailerlite')
  },
  "Supadata": {
    auth: findProperty(PieceSupadata, 'supadataAuth'),
    piece: findProperty(PieceSupadata, 'supadata')
  },
  "Confluence": {
    auth: findProperty(PieceConfluence, 'confluenceAuth'),
    piece: findProperty(PieceConfluence, 'confluence')
  },
  "Assemblyai": {
    auth: findProperty(PieceAssemblyai, 'assemblyaiAuth'),
    piece: findProperty(PieceAssemblyai, 'assemblyai')
  },
  "KallabotAi": {
    auth: findProperty(PieceKallabotAi, 'kallabotaiAuth'),
    piece: findProperty(PieceKallabotAi, 'kallabotai')
  },
  "Deepl": {
    auth: findProperty(PieceDeepl, 'deeplAuth'),
    piece: findProperty(PieceDeepl, 'deepl')
  },
  "Qdrant": {
    auth: findProperty(PieceQdrant, 'qdrantAuth'),
    piece: findProperty(PieceQdrant, 'qdrant')
  },
  "Queue": {
    auth: findProperty(PieceQueue, 'queueAuth'),
    piece: findProperty(PieceQueue, 'queue')
  },
  "Retune": {
    auth: findProperty(PieceRetune, 'retuneAuth'),
    piece: findProperty(PieceRetune, 'retune')
  },
  "Discourse": {
    auth: findProperty(PieceDiscourse, 'discourseAuth'),
    piece: findProperty(PieceDiscourse, 'discourse')
  },
  "Zoom": {
    auth: findProperty(PieceZoom, 'zoomAuth'),
    piece: findProperty(PieceZoom, 'zoom')
  },
  "Flowise": {
    auth: findProperty(PieceFlowise, 'flowiseAuth'),
    piece: findProperty(PieceFlowise, 'flowise')
  },
  "Dropbox": {
    auth: findProperty(PieceDropbox, 'dropboxAuth'),
    piece: findProperty(PieceDropbox, 'dropbox')
  },
  "AmazonS3": {
    auth: findProperty(PieceAmazonS3, 'amazons3Auth'),
    piece: findProperty(PieceAmazonS3, 'amazons3')
  },
  "MicrosoftDynamicsCrm": {
    auth: findProperty(PieceMicrosoftDynamicsCrm, 'microsoftdynamicscrmAuth'),
    piece: findProperty(PieceMicrosoftDynamicsCrm, 'microsoftdynamicscrm')
  },
  "Saastic": {
    auth: findProperty(PieceSaastic, 'saasticAuth'),
    piece: findProperty(PieceSaastic, 'saastic')
  },
  "Gotify": {
    auth: findProperty(PieceGotify, 'gotifyAuth'),
    piece: findProperty(PieceGotify, 'gotify')
  },
  "Bonjoro": {
    auth: findProperty(PieceBonjoro, 'bonjoroAuth'),
    piece: findProperty(PieceBonjoro, 'bonjoro')
  },
  "Salesforce": {
    auth: findProperty(PieceSalesforce, 'salesforceAuth'),
    piece: findProperty(PieceSalesforce, 'salesforce')
  },
  "Ashby": {
    auth: findProperty(PieceAshby, 'ashbyAuth'),
    piece: findProperty(PieceAshby, 'ashby')
  },
  "FileHelper": {
    auth: findProperty(PieceFileHelper, 'filehelperAuth'),
    piece: findProperty(PieceFileHelper, 'filehelper')
  },
  "Slack": {
    auth: findProperty(PieceSlack, 'slackAuth'),
    piece: findProperty(PieceSlack, 'slack')
  },
  "Formbricks": {
    auth: findProperty(PieceFormbricks, 'formbricksAuth'),
    piece: findProperty(PieceFormbricks, 'formbricks')
  },
  "Pastefy": {
    auth: findProperty(PiecePastefy, 'pastefyAuth'),
    piece: findProperty(PiecePastefy, 'pastefy')
  },
  "DataSummarizer": {
    auth: findProperty(PieceDataSummarizer, 'datasummarizerAuth'),
    piece: findProperty(PieceDataSummarizer, 'datasummarizer')
  },
  "Mattermost": {
    auth: findProperty(PieceMattermost, 'mattermostAuth'),
    piece: findProperty(PieceMattermost, 'mattermost')
  },
  "Posthog": {
    auth: findProperty(PiecePosthog, 'posthogAuth'),
    piece: findProperty(PiecePosthog, 'posthog')
  },
  "Metabase": {
    auth: findProperty(PieceMetabase, 'metabaseAuth'),
    piece: findProperty(PieceMetabase, 'metabase')
  },
  "Razorpay": {
    auth: findProperty(PieceRazorpay, 'razorpayAuth'),
    piece: findProperty(PieceRazorpay, 'razorpay')
  },
  "Contiguity": {
    auth: findProperty(PieceContiguity, 'contiguityAuth'),
    piece: findProperty(PieceContiguity, 'contiguity')
  },
  "CustomerIo": {
    auth: findProperty(PieceCustomerIo, 'customerioAuth'),
    piece: findProperty(PieceCustomerIo, 'customerio')
  },
  "Trello": {
    auth: findProperty(PieceTrello, 'trelloAuth'),
    piece: findProperty(PieceTrello, 'trello')
  },
  "Surveymonkey": {
    auth: findProperty(PieceSurveymonkey, 'surveymonkeyAuth'),
    piece: findProperty(PieceSurveymonkey, 'surveymonkey')
  },
  "ReoonVerifier": {
    auth: findProperty(PieceReoonVerifier, 'reoonverifierAuth'),
    piece: findProperty(PieceReoonVerifier, 'reoonverifier')
  },
  "Grist": {
    auth: findProperty(PieceGrist, 'gristAuth'),
    piece: findProperty(PieceGrist, 'grist')
  },
  "GoogleMyBusiness": {
    auth: findProperty(PieceGoogleMyBusiness, 'googlemybusinessAuth'),
    piece: findProperty(PieceGoogleMyBusiness, 'googlemybusiness')
  },
  "ConstantContact": {
    auth: findProperty(PieceConstantContact, 'constantcontactAuth'),
    piece: findProperty(PieceConstantContact, 'constantcontact')
  },
  "Tavily": {
    auth: findProperty(PieceTavily, 'tavilyAuth'),
    piece: findProperty(PieceTavily, 'tavily')
  },
  "FacebookPages": {
    auth: findProperty(PieceFacebookPages, 'facebookpagesAuth'),
    piece: findProperty(PieceFacebookPages, 'facebookpages')
  },
  "Sendy": {
    auth: findProperty(PieceSendy, 'sendyAuth'),
    piece: findProperty(PieceSendy, 'sendy')
  },
  "Simplepdf": {
    auth: findProperty(PieceSimplepdf, 'simplepdfAuth'),
    piece: findProperty(PieceSimplepdf, 'simplepdf')
  },
  "Gameball": {
    auth: findProperty(PieceGameball, 'gameballAuth'),
    piece: findProperty(PieceGameball, 'gameball')
  },
  "Nifty": {
    auth: findProperty(PieceNifty, 'niftyAuth'),
    piece: findProperty(PieceNifty, 'nifty')
  },
  "Wootric": {
    auth: findProperty(PieceWootric, 'wootricAuth'),
    piece: findProperty(PieceWootric, 'wootric')
  },
  "KrispCall": {
    auth: findProperty(PieceKrispCall, 'krispcallAuth'),
    piece: findProperty(PieceKrispCall, 'krispcall')
  },
  "Calendly": {
    auth: findProperty(PieceCalendly, 'calendlyAuth'),
    piece: findProperty(PieceCalendly, 'calendly')
  },
  "Clarifai": {
    auth: findProperty(PieceClarifai, 'clarifaiAuth'),
    piece: findProperty(PieceClarifai, 'clarifai')
  },
  "Sperse": {
    auth: findProperty(PieceSperse, 'sperseAuth'),
    piece: findProperty(PieceSperse, 'sperse')
  },
  "Delay": {
    auth: findProperty(PieceDelay, 'delayAuth'),
    piece: findProperty(PieceDelay, 'delay')
  },
  "Respaid": {
    auth: findProperty(PieceRespaid, 'respaidAuth'),
    piece: findProperty(PieceRespaid, 'respaid')
  },
  "Thankster": {
    auth: findProperty(PieceThankster, 'thanksterAuth'),
    piece: findProperty(PieceThankster, 'thankster')
  },
  "Zerobounce": {
    auth: findProperty(PieceZerobounce, 'zerobounceAuth'),
    piece: findProperty(PieceZerobounce, 'zerobounce')
  },
  "Beamer": {
    auth: findProperty(PieceBeamer, 'beamerAuth'),
    piece: findProperty(PieceBeamer, 'beamer')
  },
  "Upgradechat": {
    auth: findProperty(PieceUpgradechat, 'upgradechatAuth'),
    piece: findProperty(PieceUpgradechat, 'upgradechat')
  },
  "Kimai": {
    auth: findProperty(PieceKimai, 'kimaiAuth'),
    piece: findProperty(PieceKimai, 'kimai')
  },
  "Matrix": {
    auth: findProperty(PieceMatrix, 'matrixAuth'),
    piece: findProperty(PieceMatrix, 'matrix')
  },
  "Asana": {
    auth: findProperty(PieceAsana, 'asanaAuth'),
    piece: findProperty(PieceAsana, 'asana')
  },
  "Reachinbox": {
    auth: findProperty(PieceReachinbox, 'reachinboxAuth'),
    piece: findProperty(PieceReachinbox, 'reachinbox')
  },
  "GoogleSearchConsole": {
    auth: findProperty(PieceGoogleSearchConsole, 'googlesearchconsoleAuth'),
    piece: findProperty(PieceGoogleSearchConsole, 'googlesearchconsole')
  },
  "Webling": {
    auth: findProperty(PieceWebling, 'weblingAuth'),
    piece: findProperty(PieceWebling, 'webling')
  },
  "Apify": {
    auth: findProperty(PieceApify, 'apifyAuth'),
    piece: findProperty(PieceApify, 'apify')
  },
  "Gmail": {
    auth: findProperty(PieceGmail, 'gmailAuth'),
    piece: findProperty(PieceGmail, 'gmail')
  },
  "Quickzu": {
    auth: findProperty(PieceQuickzu, 'quickzuAuth'),
    piece: findProperty(PieceQuickzu, 'quickzu')
  },
  "Taskade": {
    auth: findProperty(PieceTaskade, 'taskadeAuth'),
    piece: findProperty(PieceTaskade, 'taskade')
  },
  "Whatsapp": {
    auth: findProperty(PieceWhatsapp, 'whatsappAuth'),
    piece: findProperty(PieceWhatsapp, 'whatsapp')
  },
  "Bettermode": {
    auth: findProperty(PieceBettermode, 'bettermodeAuth'),
    piece: findProperty(PieceBettermode, 'bettermode')
  },
  "Resend": {
    auth: findProperty(PieceResend, 'resendAuth'),
    piece: findProperty(PieceResend, 'resend')
  },
  "GoogleContacts": {
    auth: findProperty(PieceGoogleContacts, 'googlecontactsAuth'),
    piece: findProperty(PieceGoogleContacts, 'googlecontacts')
  },
  "Openai": {
    auth: findProperty(PieceOpenai, 'openaiAuth'),
    piece: findProperty(PieceOpenai, 'openai')
  },
  "Linkedin": {
    auth: findProperty(PieceLinkedin, 'linkedinAuth'),
    piece: findProperty(PieceLinkedin, 'linkedin')
  },
  "Activepieces": {
    auth: findProperty(PieceActivepieces, 'activepiecesAuth'),
    piece: findProperty(PieceActivepieces, 'activepieces')
  },
  "Matomo": {
    auth: findProperty(PieceMatomo, 'matomoAuth'),
    piece: findProperty(PieceMatomo, 'matomo')
  },
  "StabilityAi": {
    auth: findProperty(PieceStabilityAi, 'stabilityaiAuth'),
    piece: findProperty(PieceStabilityAi, 'stabilityai')
  },
  "Approval": {
    auth: findProperty(PieceApproval, 'approvalAuth'),
    piece: findProperty(PieceApproval, 'approval')
  },
  "Twilio": {
    auth: findProperty(PieceTwilio, 'twilioAuth'),
    piece: findProperty(PieceTwilio, 'twilio')
  },
  "Store": {
    auth: findProperty(PieceStore, 'storeAuth'),
    piece: findProperty(PieceStore, 'store')
  },
  "Stripe": {
    auth: findProperty(PieceStripe, 'stripeAuth'),
    piece: findProperty(PieceStripe, 'stripe')
  },
  "Binance": {
    auth: findProperty(PieceBinance, 'binanceAuth'),
    piece: findProperty(PieceBinance, 'binance')
  },
};
