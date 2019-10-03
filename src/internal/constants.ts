import { generateRegExpFromUrls } from './utils';

export const version = '1.5.2';

export const validOrigins = [
  'https://teams.microsoft.com',
  'https://teams.microsoft.us',
  'https://gov.teams.microsoft.us',
  'https://dod.teams.microsoft.us',
  'https://int.teams.microsoft.com',
  'https://devspaces.skype.com',
  'https://ssauth.skype.com',
  'https://local.teams.office.com', // local development
  'https://local.teams.office.com:8080', // local development
  'https://msft.spoppe.com',
  'https://*.sharepoint.com',
  'https://*.sharepoint-df.com',
  'https://*.sharepointonline.com',
  'https://outlook.office.com',
  'https://outlook-sdf.office.com',
  'https://retailservices-dev.teams.microsoft.com', // Teams: Tasks(Dev) app
  'https://retailservices.teams.microsoft.com', // Teams: Tasks app
  'https://tasks.office.com', // Planner
];

// Ensure these declarations stay in sync with the framework.
export const frameContexts = {
  settings: 'settings',
  content: 'content',
  authentication: 'authentication',
  remove: 'remove',
  task: 'task',
};

export const validOriginRegExp = generateRegExpFromUrls(validOrigins);
