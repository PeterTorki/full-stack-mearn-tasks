import TV from "./TV.js";
import Speaker from "./Speaker.js";
import BasicRemote from "./BasicRemote.js";
import AdvancedRemote from "./AdvancedRemote.js";

const tv = new TV("Samsung TV");
const speaker = new Speaker("Sony Speaker");

const basicRemote = new BasicRemote(speaker);
const advancedRemote = new AdvancedRemote(tv);

console.log("\n--- Speaker Control (Basic Remote) ---");
basicRemote.increaseVolume();
basicRemote.decreaseVolume();

console.log("\n--- TV Control (Advanced Remote) ---");
advancedRemote.increaseVolume();
advancedRemote.mute();
