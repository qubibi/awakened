let is_skiplast = false
	if (hl.context.previewMode === true) is_skiplast = true

let nftskip1 = 1;
let nftskip_iszoom = false;
let nftskip_isme = false;
if (hl.random()<.055) nftskip_iszoom = true
if (hl.random()<.055) nftskip1 = .51
if (hl.random()<.03) {
	nftskip_isme = true
	nftskip_iszoom = true
}
if (!is_skiplast) {
	nftskip1 = 1;
	nftskip_iszoom = false;
	nftskip_isme = false;
}
const is_skiplast_kutiake = hl.random() < 0.04
const is_skiplast_kutiguchagucha = hl.random(0.02, 0.07)
const nftskipframe = hl.randomInt(2,3)
let nftrndm_otoA = hl.randomInt(0,100)//50 high, 70 normal, 90 low,95 tamaki.100 beast
let nftrndm_otoB = hl.randomInt(0,100);//50 normal, 60 umai, 70 heta, 80 awaya, 90 oshaberi

// ///////////////////////////////////////////
// ///////////////////////////////////////////
// ///////////////////////////////////////////
//* */ ////////////// SP //////////////////////
// ///////////////////////////////////////////
// ///////////////////////////////////////////
// ///////////////////////////////////////////
const is_sakasa = hl.random() < 0.01
const is_sirome = hl.random() < 0.025
const nftmonster = hl.random() < 0.063
let nftgizagiza = 0
if (hl.random()<.01) nftgizagiza = 8
const nftmenoyama = hl.randomInt(2,6)
let nftmemotionokisalike = hl.random(0.2,1.2)
if (hl.random()<.9) nftmemotionokisalike = 0.2
let nftmemotion2spdlike = hl.random(0.8,2.2)
if (hl.random()<.9) nftmemotion2spdlike = 1.8
let nftkutimotionsin2 = hl.random(0.0,1.0)
let nftkutimotionguchagucha = hl.random(0.105,0.13)
let nftkutimotionyama = hl.randomInt(3,4)


// ///////////////////////////////////////////
// ///////////////////////////////////////////
// ///////////////////////////////////////////
//* */ ////////////// camera / kouzu //////////////////////
// ///////////////////////////////////////////
// ///////////////////////////////////////////
// ///////////////////////////////////////////
let  nftsaigozoomout = hl.randomInt(0,120)
let nftcmrsc = hl.random(0.22, 0.41)/2
let nftcmrr = hl.random(-0.1, 0.2)
let nftcmry = hl.random(10, 40)
let nftkouzu = 0
if (!nftmonster && hl.random()<.1) nftkouzu = 1
let nftkouzux = hl.random(-111,77)
let nftcrome = hl.random(1.15, 1.25)
if ( hl.random()< 0.3 ) nftcrome = hl.random(0.15, 1.55)
let mekagayaki_ookisa = hl.randomInt(22,28)
let mekagayaki_ookisa2 = hl.randomInt(10,14)
let mekagayaki_x = hl.random(0,3)
let mekagayaki_dir = 1
if (hl.random()<.1) mekagayaki_dir = -1
let mekagayaki_mag = nftcrome
// ///////////////////////////////////////////
// ///////////////////////////////////////////
// ///////////////////////////////////////////
//* */ ////////////// color //////////////////////
// ///////////////////////////////////////////
// ///////////////////////////////////////////
// ///////////////////////////////////////////
const nftcsepia = hl.random(0.06,0.3)
const is_monokuro = hl.random() < 0.1
const hlrndm1 = hl.random() //used
const hlrndm2 = hl.random() // used
let keiro = "#000"
let mabutairo = "#000"
let kefutosa = 0
if (is_forandroidtaisaku) kefutosa = 3.5
let _bg2cmode = 1
if (hl.random()<.3) {
	if (hl.random()<.65) _bg2cmode = 0
	else if (!nftmonster)_bg2cmode = 2
}

let _bg2chue = hl.randomInt(360)
// let nftcbg1 = "#5c89f36f"
// if (_bg2chue>265)nftcbg1 = "#cc8f536a"
// else if (_bg2chue>240)nftcbg1 = "#5cf9836f"
let nftcbg1 = "#cc8f536a"//qb.colrndm(hl.random(.41,.81))
if (hl.random()<.2) nftcbg1 = qb.colrndm(hl.random(.4,.81))
if (_bg2cmode==2) { //dark
	const _arr = f_bg1_huemap(_bg2chue)
	nftcbg1 = qb.hsv(_arr[0],_arr[1],_arr[2],_arr[3])
	kefutosa = 2.75;
	if (is_forandroidtaisaku) kefutosa = 4
	if (hlrndm1<0.25) keiro="#fff"
	else if  (hlrndm1<0.5) keiro="#0ff"
	else if  (hlrndm1<0.75) keiro="#fe0"
	else if  (hlrndm1<=1) keiro="#f8c"
}
mabutairo = keiro


let nftcbg2 = f_bg2_rndmcol(_bg2chue,_bg2cmode)
let androidbg = nftcbg2
let nftcatama1;// = "#665666aa"
let nftcatama2;// = nftcatama1
let blackmaincol = getRandomSimilarColor("#888888aa",19)
let blackmaincol2 = getRandomSimilarColor("#665666aa",19)

if (_bg2cmode==2) {
	if (hlrndm2<0.2) {
		nftcatama2 = nftcatama1 = blackmaincol
		// nftcatama2 = nftcatama1 = "#888888aa"
	} else if (hlrndm2<0.4) {
		nftcatama1 = blackmaincol2;    nftcatama2 = blackmaincol
	} else {
		nftcatama1 = qb.hsvrndm(.5, 0,360, .45,.75, .55, .85)
		if (hl.random() <.1) nftcatama2 = nftcatama1
		else nftcatama2 = qb.hsvrndm(.5, 0,360, .45,.75, .55, .85)
	}
} else {
	if (hlrndm2<0.25) {
		nftcatama2 = nftcatama1 = blackmaincol2
	} else if (hlrndm2<0.4) {
		nftcatama1 = blackmaincol2;    nftcatama2 = blackmaincol
		if (nftmonster) nftcatama2 = nftcatama1 = blackmaincol2
	} else {
		nftcatama1 = qb.hsvrndm(.5, 0,360, .45,.75, .55, .85)
		if (hl.random() <.1) nftcatama2 = nftcatama1
		else nftcatama2 = qb.hsvrndm(.5, 0,360, .45,.75, .55, .85)
		if (nftmonster) nftcatama2 = nftcatama1
	}
}
let nftckuti = "#bf622288"
if (is_monokuro) {
	nftckuti = "#787878da"
	nftcbg1 = qb.hsvrndm(.5, 0,360, .0,.0, .2, .75)
	nftcbg2 = qb.hsvrndm(hl.random(.35,.55), 0,360, .0,.0, .4, .7)
	if (_bg2cmode==2) nftcbg2 = qb.hsvrndm(hl.random(.35,.55), 0,360, .0,.0, .35, .65)
	nftcatama1 = qb.hsvrndm(.5, 0,360, .0,.0, .2, .85)
	nftcatama2 = qb.hsvrndm(.5, 0,360, .0,.0, .2, .85)
	if (nftmonster) nftcatama2 = nftcatama1
}
let nftckurome = "#0030405f"
if (hl.random()<.3) nftckurome= qb.hsvrndm(.373, 0,360, 0.9,1, 0.1, 0.7)
if (is_sirome) nftckurome = "#00000000"



// ///////////////////////////////////////////
// ///////////////////////////////////////////
// ///////////////////////////////////////////
//* */ ////////////// shape //////////////////////
// ///////////////////////////////////////////
// ///////////////////////////////////////////
// ///////////////////////////////////////////
let nftskuti1x = (Math.pow(hl.random(), 0.6)) * hl.random() * 2;
let nftskuti1y = (Math.pow(hl.random(), 0.7)) * hl.random() * 1;
let nftskuti1y2 = (Math.pow(hl.random(), 0.7)) * hl.random() * 1;
let nftsmey = 0//(Math.pow(hl.random(), 0.8)) * hl.random() * 1;
nftsmey = (Math.pow(hl.random(), 0.85)) * hl.random() * .9;
let nftsmex =  0//(Math.pow(hl.random(), 0.8)) * hl.random() * 1;
// if (nftsmey<0.1) nftsmex = (Math.pow(hl.random(), 0.7)) * hl.random() * .99;
// else  nftsmex = (Math.pow(hl.random(), 0.7)) * hl.random() * .55;
nftsmex = (Math.pow(hl.random(), 0.85)) * hl.random() * .8;
const nftme_sikaku = hl.random() < .1
let nftsmermag =  1
if (hl.random()<.3) nftsmermag = hl.random(-1,0.7)
let nftyorimey = hl.random(-0.1,-0.4)
let nftyorimex = hl.random(-0.5,0.5)
if (!is_skiplast) nftyorimey = nftyorimex = 0
const nftkutihenoji = hl.random() < 0.1
const nftkamigata = hl.random() < .5
let nftkaofukkura = 0.5
if (hl.random()<.4) nftkaofukkura = 1
 
// ///////////////////////////////////////////
// ///////////////////////////////////////////
// ///////////////////////////////////////////
//* */ /// mayuge //////////////////////
// ///////////////////////////////////////////
// ///////////////////////////////////////////
// ///////////////////////////////////////////
let nftmayugeangle = hl.random(-0.4,0.4)
let nfmayugekyori =  hl.random(10,88)
let nfmayugefutosamag = hl.random(0,1.5)
let nftmayugenagasa = hl.randomInt(0,10)
let nftfutae =hl.randomInt(3)
if (hl.random()<.1) {
	nftfutae = 4
mabutairo = colorToRGBA(keiro);
}

function expandColor(color) {
    color = color.slice(1); // '#'を除去
    if (color.length === 3) {
        return color.split('').map(c => c + c).join('');
    }
    return color;
}
function colorToRGBA(keiro, alpha = 0.39) {
    // まず16進数を6桁に展開
    let expanded = expandColor(keiro);
    // 2文字ずつ区切って16進数から10進数に変換
    let rgb = [];
    for (let i = 0; i < 6; i += 2) {
        rgb.push(parseInt(expanded.substr(i, 2), 16));
    }
   return `rgba(${rgb.join(',')},${alpha})`;
}



// ///////////////////////////////////////////
// ///////////////////////////////////////////
// ///////////////////////////////////////////
//* */ /// ma2ge //////////////////////
// ///////////////////////////////////////////
// ///////////////////////////////////////////
// ///////////////////////////////////////////
let nftma2ge_curve = true
let nftma2genagasa = 37
if ( hl.random()< .15 ) nftma2genagasa = hl.random(5, 100)
let nftma2geangley = hl.random(-55, -110)
let nftma2geatob = []
const _forma2ge = hl.random()
if (_forma2ge<0.45) { /////////////////////////////
	for (let i = 4; i <= 20; i+=2) {
		nftma2geatob.push(i);
	}
} else if (_forma2ge<0.8) { /////////////////////////////
		const _abc = hl.randomInt(0,18)
		const _def = _abc+hl.randomInt(0,13)
		for (let i = _abc; i <= _def; i+=1) {
			nftma2geatob.push(i);
		}
} else { /////////////////////////////
	for (let i = 1; i <= 50; i+=1) {
		nftma2geatob.push(i);
	}
	nftma2ge_curve = false
	nftma2genagasa = hl.randomInt(5,20)
	if (is_sirome && _bg2cmode!=1) nftma2genagasa = hl.randomInt(150,350)
}

// ///////////////////////////////////////////
// ///////////////////////////////////////////
// ///////////////////////////////////////////
// ///////////////////////////////////////////
// ///////////////////////////////////////////
// ///////////////////////////////////////////
// ///////////////////////////////////////////
// ///////////////////////////////////////////
// ///////////////////////////////////////////
// ///////////////////////////////////////////
// ///////////////////////////////////////////
// ///////////////////////////////////////////













let nftme_komari = 0
if ( hl.random()< 0.05 ) nftme_komari = 1

// nftkao1 = 0.7
// if ( hl.random()< 0.2 ) nftkao1 = 0.9
let nftkaoburuburu1 = 0.6
if (hl.random()<.2) nftkaoburuburu1 = hl.random(0.35, 0.7)
let nftkaoburuburu2 = hl.random(0.5, 0.63)




















function f_bg2_rndmcol(h = 0, mode = 0) {
	// 色相を0-360に正規化
	h = ((h % 360) + 360) % 360;
	
	// モード別のパラメータマップ（[h, s, v, a]）
	const colorfulMap = [
		[0, .75, 1.0, .44],    // 0
		[30, .75, .75, .44],   // 30
		[60, .73, .57, .44],   // 60
		[90, .73, .63, .44],   // 90
		[120, .69, .75, .44],  // 120
		[150, .70, .70, .42],  // 150
		[180, .70, .67, .42],  // 180
		[210, .70, .80, .4],  // 210
		[240, .68, .99, .42],  // 240
		[270, .70, .99, .44],  // 270
		[300, .68, .80, .45],  // 300
	[330, .72, .87, .47],
		[360, .75, 1.0, .44]   // 360(=0)と同じ値
	];
	
	const calmMap = [
		[0, .30, .68, .44],    // 0
		[30, .40, .63, .44],   // 30
		[60, .40, .56, .44],   // 60
		[90, .35, .60, .44],   // 90
		[120, .27, .60, .42],  // 120
		[150, .24, .59, .42],  // 150
		[180, .23, .57, .42],  // 180
		[210, .21, .60, .40],  // 210
		[240, .24, .65, .40],  // 240
		[270, .24, .65, .40],  // 270
		[300, .27, .64, .40],  // 300
		[360, .30, .68, .44]   // 360(=0)と同じ値
	];
	
	const darkMap = [
		[0, .50, .38, .40],    // 0
		[60, .50, .35, .40],   // 60
		[90, .50, .37, .40],   // 90
		[120, .50, .37, .35],  // 120
		[180, .50, .37, .35],  // 180
		[240, .40, .37, .30],  // 240
		[300, .45, .31, .25],  // 300
		[360, .50, .38, .40]   // 360(=0)と同じ値
	];

	
	// 使用するマップを選択
	const map = mode === 0 ? colorfulMap : 
						 mode === 1 ? calmMap : darkMap;
						 
	// 末端処理（300-360の範囲）
	if (h > map[map.length - 2][0]) {
		const lower = map[map.length - 2];  // 最後のデータ点（300）
		const upper = map[0];               // 最初のデータ点（0/360）
		const t = (h - lower[0]) / (360 - lower[0]);  // 位置を0-1に正規化
		const s = lower[1] + t * (upper[1] - lower[1]);
		const v = lower[2] + t * (upper[2] - lower[2]);
		const a = lower[3] + t * (upper[3] - lower[3]);
		return [...qb.hsv2rgb(h, s, v), ~~(a * 255)];
	}
	
	// 通常の範囲の処理
	let lower = map[0];
	let upper = map[1];
	
	for(let i = 0; i < map.length - 1; i++) {
		if(h >= map[i][0] && h <= map[i + 1][0]) {
			lower = map[i];
			upper = map[i + 1];
			break;
		}
	}
	
	// パラメータを線形補間
	const t = (h - lower[0]) / (upper[0] - lower[0]);
	const s = lower[1] + t * (upper[1] - lower[1]);
	const v = lower[2] + t * (upper[2] - lower[2]);
	const a = lower[3] + t * (upper[3] - lower[3]);
	
	return [...qb.hsv2rgb(h, s, v), ~~(a * 255)];
}



function f_bg1_huemap(h = 0) {
	h = ((h % 360) + 360) % 360;
	const hueData = [
		[0, 200, .55,          .8, .5],
		[60, 210, .54,        .73, .45],
		[120, 300, .5,        .72, .45],
		[180, 330, .5,        .71, .45],
[240, 410 % 360,    .55,  .7, .45],  // 予め正規化
		[300, 300, .1,        .73,      .45],
		[360, 200, .55,        .8, .5]
	];


	// 二分探索で範囲を特定
	let start = 0;
	let end = hueData.length - 1;
	
	while (start < end - 1) {
		const mid = (start + end) >> 1;
		if (hueData[mid][0] > h) end = mid;
		else start = mid;
	}
	
	const t = (h - hueData[start][0]) / (hueData[end][0] - hueData[start][0]);
	
	// 一度の計算で全パラメータを補間
	return [
		((hueData[start][1] + t * (hueData[end][1] - hueData[start][1])) % 360),
		hueData[start][2] + t * (hueData[end][2] - hueData[start][2]),
		hueData[start][3] + t * (hueData[end][3] - hueData[start][3]),
		hueData[start][4] + t * (hueData[end][4] - hueData[start][4])
	];
}


// const bgColor = nftcbg2
// const isRgba = Array.isArray(bgColor);
let htmlbackground = qb.hsvrndm(1, 0, 360, 0.5, 0.97, 0.8, .97); // 彩度50-100%、明度80-100%

if (is_forandroidtaisaku && macwin != "Windows") {
document.documentElement.style.backgroundColor = 
		`rgb(0,0,0)`;
} else {
// document.documentElement.style.backgroundColor = 
// 		`rgb(${htmlbackground[0]}, ${htmlbackground[1]}, ${htmlbackground[2]})`;
document.documentElement.style.backgroundColor = 
		`rgb(249,249,249)`;

}

function getRandomSimilarColor(baseColor = '#888888aa', range = 20) {
  function randomize(x) {
    return Math.min(255, Math.max(0, Math.round(x + (hl.random() - 0.5) * 2 * range)));
  }

  const r = randomize(parseInt(baseColor.slice(1,3), 16));
  const g = randomize(parseInt(baseColor.slice(3,5), 16));
  const b = randomize(parseInt(baseColor.slice(5,7), 16));
  const a = parseInt(baseColor.slice(7,9), 16);

  return '#' + 
    r.toString(16).padStart(2, '0') + 
    g.toString(16).padStart(2, '0') + 
    b.toString(16).padStart(2, '0') + 
    a.toString(16).padStart(2, '0');
}