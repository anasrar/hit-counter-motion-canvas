import { makeProject } from "@motion-canvas/core";

import intro from "./scenes/intro?scene";
import stack from "./scenes/stack?scene";
import font from "./scenes/font?scene";
import init from "./scenes/init?scene";
import step from "./scenes/step?scene";
import preview from "./scenes/preview?scene";
import deploy from "./scenes/deploy?scene";
import outro from "./scenes/outro?scene";
import attribution from "./scenes/attribution?scene";

// import voice from "./audio/voice.wav";

export default makeProject({
  scenes: [intro, stack, font, init, step, preview, deploy, outro, attribution],
  // audio: voice,
});
