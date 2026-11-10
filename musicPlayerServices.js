import TrackPlayer,{Event} from "react-native-track-player";



import  {playListData}  from './src/constants'

export async function setupPlayer() {
  try {
    await TrackPlayer.setupPlayer();

    await TrackPlayer.updateOptions({
      stopWithApp: true,
      capabilities: [
        Event.RemotePlay,
        Event.RemotePause,
        Event.RemoteNext,
        Event.RemotePrevious,
      ],
    });

    return true;
  } catch (error) {
    console.log("setupPlayer error:", error);
    return false;
  }
}

export async function addTrack(){
    await TrackPlayer.add(playListData)
    await TrackPlayer.setRepeatMode(RepeatModeQueue)
}

export const playbackService = async () => {
  TrackPlayer.addEventListener(Event.RemotePause, async () => {
    await TrackPlayer.pause();
  });

  TrackPlayer.addEventListener(Event.RemotePlay, async () => {
    await TrackPlayer.play();
  });

  TrackPlayer.addEventListener(Event.RemoteNext, async () => {
    await TrackPlayer.skipToNext();
  });

  TrackPlayer.addEventListener(Event.RemotePrevious, async () => {
    await TrackPlayer.skipToPrevious();
  });
};
