

let dbg_zoomout = false;

let is_mouyatta = false
let is_hajimete_open = false
let hajimenoscr = 1;
let cc = 0;
let cc_motion = 12
let cc_motiontgt = 8
let tf = false
let tfnew = false
let is_mobile = false;
let ssnoto;
let bbut;
let nnyu;
let tten;
let ggam;
let zkurome;
let zeye_hida;
let zeye_migi;
let zkuti;
let zbody;
let znuri;
let zsen;

let shd_su; 
let shd_threshold; 
let shd_blur; 
let shd_mask; 
let shd_lastsharp; 

let canvas1;
let g_output;
let g_room;
let g_menonaka;
let g_mask
let g_forme
let g_debug;


let canvwh = {w:0,h:0}
let gowh = {w:0,h:0}
let winxy = [{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0}]
let scaleFactor = 1;
let remone = 12;



let state_audiocontext = ""
let is_AudioContextSetupComplete = false;
let inAudioContext;
let otomag_mp3 = 0.6;
let otomag_gen = 0.8;
let voicePreset = null;
let singPreset = null;

// // // // // // // // // // // // // // // // // // // // // // // // // // // 
// // // // // // // // // // // // // // // // // // // // // // // // // // // 
// // // // // // // // // // // // // // // // // // // // // // // // // // // 
// // // // // // // // // // // // // // // // // // // // // // // // // // // 
let globalOpenclosev = 0;
// // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // //



let mp3s = {}
function load_otofiles() {
  voicePreset = new VoicePreset(); 
  singPreset = new SingPreset(); 
  
  mp3s.se1 = loadSound('assets/se1.mp3');
  mp3s.se2 = loadSound('assets/se2.mp3');
  mp3s.se1.disconnect();
  mp3s.se2.disconnect();
  mp3s.se2.setVolume(0.5);

  mp3s.seGain = new p5.Gain();
  mp3s.seGain.connect();
  mp3s.seGain.amp(0);
  mp3s.seGain.setInput(mp3s.se1);
  mp3s.seGain.setInput(mp3s.se2);

  mp3s.saaon = loadSound('assets/b04_02.mp3');
  mp3s.saaon.disconnect();
  mp3s.saaonGain = new p5.Gain();
  mp3s.saaonGain.connect();
  mp3s.saaonGain.amp(0);
  mp3s.saaonGain.setInput(mp3s.saaon);

  mp3s.background = loadSound('assets/02.mp3');
	mp3s.background.disconnect();

  mp3s.backgroundGain = new p5.Gain();
  mp3s.backgroundGain.connect();
  mp3s.backgroundGain.amp(0);
	mp3s.backgroundGain.setInput(mp3s.background);

  mp3s.music2 = loadSound('assets/syn10_02.wav');
	mp3s.music2.disconnect();

  mp3s.music2Gain = new p5.Gain();
  mp3s.music2Gain.connect();
  mp3s.music2Gain.amp(0);
	mp3s.music2Gain.setInput(mp3s.music2);

  mp3s.move1 = loadSound('assets/m01.wav');
  mp3s.move2 = loadSound('assets/m02.wav');
  mp3s.move3 = loadSound('assets/m03.wav');
  mp3s.move4 = loadSound('assets/m04.wav');
  mp3s.move5 = loadSound('assets/m05.wav');
  mp3s.move1.disconnect();
  mp3s.move2.disconnect();
  mp3s.move3.disconnect();
  mp3s.move4.disconnect();
  mp3s.move5.disconnect();
  mp3s.moveGain = new p5.Gain();
  mp3s.moveGain.connect();
  mp3s.moveGain.amp(0);
  mp3s.moveGain.setInput(mp3s.move1);
  mp3s.moveGain.setInput(mp3s.move2);
  mp3s.moveGain.setInput(mp3s.move3);
  mp3s.moveGain.setInput(mp3s.move4);
  mp3s.moveGain.setInput(mp3s.move5);


  mp3s.syn1Pool = [];
  mp3s.syn2Pool = [];
  mp3s.syn3Pool = [];
  const poolSize = 8;  
  
  for (let i = 0; i < poolSize; i++) {
    mp3s.syn1Pool[i] = loadSound('assets/syn06.wav');
    mp3s.syn2Pool[i] = loadSound('assets/syn08.wav');  
    mp3s.syn3Pool[i] = loadSound('assets/syn10_s.wav');  
    mp3s.syn1Pool[i].disconnect();
    mp3s.syn2Pool[i].disconnect();
    mp3s.syn3Pool[i].disconnect();
  }

  mp3s.syn1Gain = new p5.Gain();
  mp3s.syn1Gain.connect();
  mp3s.syn1Gain.amp(0);
  
  mp3s.syn1Pool.forEach(synth => mp3s.syn1Gain.setInput(synth));
  mp3s.syn2Pool.forEach(synth => mp3s.syn1Gain.setInput(synth));
  mp3s.syn3Pool.forEach(synth => mp3s.syn1Gain.setInput(synth));
}




function preload() {
  

  load_otofiles() 
	console.log("p5js_preload()");
  if (is_forandroidtaisaku) shd_threshold = loadShader('./shd/p5img.vert', './shd/thresholdandinsfillv3and.frag');
  else shd_threshold = loadShader('./shd/p5img.vert', './shd/thresholdandinsfillv3.frag');
  	// shd_kuwabara = loadShader('./shd/p5img.vert', './shd/kuwabara.frag');
	// shd_threshold = loadShader('./shd/p5img.vert', './shd/threshold.frag');

	shd_blur = loadShader('./shd/p5img.vert', './shd/blurv2.frag');
  shd_mask = loadShader('./shd/p5img.vert', './shd/mmask.frag');

	shd_su = loadShader('./shd/p5img.vert', './shd/su.frag');
  shd_lastsharp = loadShader('./shd/p5img.vert', './shd/lastsharp.frag');
}


// // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // //


function calculateAspectRatio(windowWidth, windowHeight, targetRatio) {
  const [widthRatio, heightRatio] = targetRatio;
  const windowAspectRatio = windowWidth / windowHeight;
  const targetAspectRatio = widthRatio / heightRatio;
  let width, height;
  if (windowAspectRatio > targetAspectRatio) {
    height = windowHeight;    width = height * targetAspectRatio;
  } else {
    width = windowWidth;    height = width / targetAspectRatio;
  }
  return {
    width: Math.round(width),height: Math.round(height)
  };
}
function calculateDimensionsFromArea(totalArea, aspectRatio) {
  const [widthRatio, heightRatio] = aspectRatio;
  // 面積 = 幅 * 高さ = (r * y) * y = r * y^2 （rは縦横比）
  const r = widthRatio / heightRatio;
  const height = Math.sqrt(totalArea / r);
  const width = r * height;
  return {
    width: Math.round(width),
    height: Math.round(height)
  };
}
function f_wh_menseki(windowW, windowH, targetPixels) {
  const windowRatio = windowW / windowH;
  let h = Math.sqrt(targetPixels / windowRatio);
  let w = h * windowRatio;
  w = Math.round(w);
  h = Math.round(h);
  if (w > windowW) {
    w = windowW;    h = Math.round(targetPixels / w);
  }
  if (h > windowH) {
    h = windowH;    w = Math.round(targetPixels / h);
  }
    return {
    width: w,    height: h,    pixels: w * h
  };
}

function isMobile() {
  if ('maxTouchPoints' in navigator && navigator.maxTouchPoints > 0) {
    return true;
  }
  if (window.matchMedia("(pointer: coarse)").matches) {
    return true;
  }
  return false;
}
is_mobile = isMobile();

let debugContent = '';
function updateDebug(text) {
  debugContent += text + '<br>';
  let debugElement = select('#debugdom');
  if (debugElement) {
    debugElement.html(debugContent);
  } else {
    console.warn('Debug element not found');
  }
}
function updateDebugClear() {
  debugContent = '';
  let debugElement = select('#debugdom');
  if (debugElement) {
    debugElement.html('');
  }
}


