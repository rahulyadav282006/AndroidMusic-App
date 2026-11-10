

/**
 * @format
 */

import TrackPlayer from 'react-native-track-player';
import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import { playbackService } from './musicPlayerServices';

// ✅ Register app
AppRegistry.registerComponent(appName, () => App);

// ✅ Register Track Player service (ONLY ONCE, AFTER IMPORTS)
TrackPlayer.registerPlaybackService(() => playbackService);
