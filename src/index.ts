#!/usr/bin/env node
import open from 'open';

const linkedinUrl = 'https://www.linkedin.com/in/rutagengwa-eric-2417192a3/';

console.log('Opening Eric Rutagengwa\'s LinkedIn profile...');
open(linkedinUrl).catch((error: Error) => {
  console.error('Failed to open LinkedIn profile:', error.message);
  process.exit(1);
});