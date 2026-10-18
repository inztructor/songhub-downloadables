
import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.songhub.downloadables',
  appName: 'songhub_downloadables',
  webDir: 'www',
  server: {
    url: 'https://songhubdownloads.blogspot.com/',
    cleartext: false
  }
};

export default config;
