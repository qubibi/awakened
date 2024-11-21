
function setup() {
	f_check_window()
	canvas1 = createCanvas(canvwh.w, canvwh.h, WEBGL);
	// console.log(hl.random(3, 10));
	frameRate(28);
	if (is_mobile) pixelDensity(1.2);
	else pixelDensity(2);
	ortho();	
	imageMode(CENTER)
	canvas1.parent('wr_myCanvas');
	g_output = createGraphics(gowh.w, gowh.h, WEBGL);
	g_room = createGraphics(gowh.w, gowh.h, WEBGL);
	g_room.pixelDensity(1)
	if (is_mobile) {
		if (is_forandroidtaisaku) g_output.pixelDensity(1.2)
		else g_output.pixelDensity(1.2)
	} else {
		g_output.pixelDensity(1.4)
		// g_output.pixelDensity(1.4)
	}
	// g_roomのセットアップ時に
	const gl = g_room.drawingContext;  // .GL ではなく .drawingContext
	gl.enable(gl.BLEND);
	gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
	gl.disable(gl.DEPTH_TEST);

	// g_output.imageMode(CENTER)
	// g_room.imageMode(CENTER)




	g_mask = createGraphics(gowh.w, gowh.h, WEBGL);


	
	g_mask.pixelDensity(.25);
	g_menonaka = createGraphics(gowh.w, gowh.h, WEBGL);
	g_menonaka.pixelDensity(1);
	g_forme = createGraphics(gowh.w, gowh.h, WEBGL);
	g_forme.pixelDensity(1);


	zbody = new Z_body();
	
	zkuti = new Z_kuti();
	zkurome = new Z_kurome();
	zeye_hida = new Z_eyes("hidari");
	zeye_migi = new Z_eyes("migi");
	ssnoto = new Snoto();
	bbut = new Butai();
	nnyu = new Nyu();
	tten = new Tenkai();
	ggam = new Gamen()
	znuri = new Z_nuri();
	zsen = new Z_sen();
	bbut.inipara()
	zeye_hida.inipara()
	zeye_migi.inipara()
	zkuti.inipara()
	zbody.inipara()
	
	g_forme.shader(shd_mask)
	if (is_skiplast && !nftskip_isme) {
		tten.f_skip()
		nnyu.f_skip()
	}

	if (!is_mobile) document.addEventListener('click', f_startAudioContext);
	else document.addEventListener('touchend', f_startAudioContext);

	camerascmag1 = 1;
	camerascmag2 = 1;
	camerascmag3 = 1;
	camerascmag4 = 1;
	if (is_skiplast) {
		if ( !nftskip_iszoom) camerascmag1 = camerascmag2 = camerascmag3  = camerascmag4 = 0
		else camerascmag1 = camerascmag2 = camerascmag3  = camerascmag4 = .5
	}
}


function mousemovecamera() {
	if (tten.face.kuti) {
		if (camerascmag1>0) camerascmag1 += -0.1
		else camerascmag1  =0
	}
	if (tten.face.migime || tten.face.tuno) {
		if (camerascmag2>0)  camerascmag2 += -0.1
		else camerascmag2 = 0
	}
	camerascmag3 = 1-Math.max(nnyu.migimev_re, nnyu.ocv_re)
	camerascmag4 = 1-Math.max(nnyu.migimev_re, nnyu.ocv_re)
}

function draw() {
	if (is_forandroidtaisaku) {
		g_room.clear(androidbg[0]/50, androidbg[1]/50, androidbg[2]/50, androidbg[3]/400);
		// g_room.clear(54, 52, 46, 0.01);
	}

	g_room.push()
	g_room.scale(1+nftcmrsc*camerascmag1+nftcmrsc*camerascmag2)
	g_room.rotate(nftcmrr*camerascmag3)
	g_room.translate(0,nftcmry*camerascmag4)

	tf = !tf
	cc +=1;
	if (is_skiplast) {
				zeye_migi.ynynspd = 0.66
		if (cc==6+ nftskipframe) nnyu.f_mousedown()
		if (cc==9+ nftskipframe) nnyu.f_mouseup()
		if (cc==33+2) {
			hl.token.capturePreview();
    		noLoop();
		}
	} else {
		if (is_AudioContextSetupComplete) ssnoto.f_ef();	
	}
	cc_motion += -1
	if (cc_motion==1) ssnoto.motion_stop_justnow()
	
	if (cc_motion > 0) {
		tfnew = !tfnew
		if (cc_motion <4) {
			if (tfnew) f_drawset()
		} else {
			f_drawset()
		}
	}
	
	znuri.f_efbg(g_room)

	g_mask.clear()
	g_menonaka.clear()
	g_forme.clear()
	g_forme.noStroke()

	znuri.f_efkuti()
	znuri.f_efkurome_sirome()
	if (is_forandroidtaisaku) {
		znuri.f_efatama(g_room)
		zsen.f_efsen()
	}

	zkurome.f_efkuromemask() 

	if (!is_forandroidtaisaku) {
		znuri.f_efatama(g_room)
		zsen.f_efsen()
	}

	g_room.pop()
	ggam.f_ef();

	if (cc<15) {
		background("#ccc")
		fill("#ccc")
		noStroke()
		  rect(canvwh.w/-2, canvwh.h/-2, canvwh.w, canvwh.h);

		// quad()
	}
}

function f_drawset() {
	
	tten.f_ef();
	nnyu.f_ef();
	bbut.f_ef();
	
}




// ////////////////////////////////// ///////////
// ////////////////////////////////// ///////////
// ////////////////////////////////// ///////////
// ////////////////////////////////// ///////////
// ////////////////////////////////// ///////////
// ////////////////////////////////// ///////////
// ////////////////////////////////// ///////////
// ////////////////////////////////// ///////////
// ////////////////////////////////// ///////////
// ////////////////////////////////// ///////////
// ////////////////////////////////// ///////////
// ////////////////////////////////// ///////////
// ////////////////////////////////// ///////////
// ////////////////////////////////// ///////////
// ////////////////////////////////// ///////////
// ////////////////////////////////// ///////////
// ////////////////////////////////// ///////////
// ////////////////////////////////// ///////////
// ////////////////////////////////// ///////////
// ////////////////////////////////// ///////////
// ////////////////////////////////// ///////////
// ////////////////////////////////// ///////////
// ////////////////////////////////// ///////////
// ////////////////////////////////// ///////////
// ////////////////////////////////// ///////////
// ////////////////////////////////// ///////////
// ////////////////////////////////// ///////////
// ////////////////////////////////// ///////////
// ////////////////////////////////// ///////////
// ////////////////////////////////// ///////////
// ////////////////////////////////// ///////////
// ////////////////////////////////// ///////////
// ////////////////////////////////// ///////////
// ////////////////////////////////// ///////////
// ////////////////////////////////// ///////////
// ////////////////////////////////// ///////////
// ////////////////////////////////// ///////////
// ////////////////////////////////// ///////////
// ////////////////////////////////// ///////////
// ////////////////////////////////// ///////////
// ////////////////////////////////// ///////////
// ////////////////////////////////// ///////////
// ////////////////////////////////// ///////////
// ////////////////////////////////// ///////////
// ////////////////////////////////// ///////////
// ////////////////////////////////// ///////////
// ////////////////////////////////// ///////////







function f_startAudioContext() {
	
	if (!is_AudioContextSetupComplete) {
		userStartAudio().then(() => {
			inAudioContext = getAudioContext();
			is_AudioContextSetupComplete = true;
			ssnoto.setup2(); 
			inAudioContext.addEventListener('statechange', () => {
				state_audiocontext = inAudioContext.state; 
					if (!is_forandroidtaisaku) {
						if (inAudioContext.state === 'suspended') inAudioContext.resume();
					}
			});

			if (is_forandroidtaisaku) {
				window.addEventListener('blur', () => {
					if (inAudioContext.state === 'running') inAudioContext.suspend();
				});
				window.addEventListener('pagehide', () => {
					if (inAudioContext.state === 'running') inAudioContext.suspend();
				});
				// Androidのみタッチ操作でAudioContextを再開する
				document.addEventListener('touchstart', () => {
				if (inAudioContext.state === 'suspended') {
					inAudioContext.resume();
				}
				});
			} else {
				window.addEventListener('focus', () => {
					if (inAudioContext.state === 'suspended') inAudioContext.resume();
				});
			}

			
			setTimeout(f_testtest, 200);
		});



		document.removeEventListener('click', f_startAudioContext);
		document.removeEventListener('touchend', f_startAudioContext);
		tten.is_startlock  = false

		// window.addEventListener('focus', () => {
		// 	console.log("focus");
		// 	if (inAudioContext.state !== 'running') {
		// 		inAudioContext.resume();
		// 	}
		// });
	}
}

function f_testtest() {
		// if (touches.length > 0) {
				// updateDebugClear()
		// updateDebug("1 "+is_AudioContextSetupComplete)
		// updateDebug("2 "+is_mobile)
		// updateDebug("3 "+is_hajimete_open)
		if (!is_mouyatta) {
			if (is_AudioContextSetupComplete && is_mobile && !is_hajimete_open) {
				is_mouyatta  =true
				nnyu.f_mouseup();
			}
		}

}



function mousePressed() {
	if (is_AudioContextSetupComplete) nnyu.f_mousedown(mouseX, mouseY);
}
function touchStarted() {
	// if (inAudioContext.state !== 'suspended') {
	// }
	if (touches.length > 0) {

	if (is_AudioContextSetupComplete) nnyu.f_mousedown(touches[0].x,touches[0].y);
	}
	return false;
}
function mouseReleased() {
  nnyu.f_mouseup();//endDrag();
}
function touchEnded() {
	if (is_AudioContextSetupComplete) nnyu.f_mouseup();//endDrag();
	return false;
}
function mouseDragged() {

  if (is_AudioContextSetupComplete) nnyu.f_mousemove(mouseX, mouseY);
}
function touchMoved() {

	if (touches.length > 0) {

		if (is_AudioContextSetupComplete)  nnyu.f_mousemove(touches[0].x, touches[0].y);
	}
  return false; 
}
function keyPressed() {
	// if (key == '1') bbut.f_test()
	// if (key == '2') bbut.aaa = 2
}

function windowResized() {
	f_check_window();

	resizeCanvas(canvwh.w, canvwh.h);
	g_room.resizeCanvas(gowh.w, gowh.h);
	g_output.resizeCanvas(gowh.w, gowh.h);
	g_mask.resizeCanvas(gowh.w, gowh.h);
	g_menonaka.resizeCanvas(gowh.w, gowh.h);
	g_forme.resizeCanvas(gowh.w, gowh.h);


	// g_output.imageMode(CENTER)
	// g_room.imageMode(CENTER)16:25
	// g_output.resizeCanvas(gowh.w, gowh.h);
	ortho();	
}
function f_check_window() {
let _w = window.innerWidth;
let _h = window.innerHeight;
	if (_w > _h * 0.66) {  
		let excess = _w - (_h * 0.66);
		_h = _h - (excess * 0.2);     
		_w = _h * 0.66;               
	} else {
		_w = _h * 0.66;  // 単純に幅を0.66倍に
	}
	let _menseki = 250000
	let _gwh = f_wh_menseki( _w, _h, _menseki )
	gowh.w = _gwh.width
	gowh.h = _gwh.height


	canvwh.w = _w
	canvwh.h = _h
	scaleFactor = Math.max(canvwh.w / gowh.w, canvwh.h / gowh.h);

	winxy[7] = {x:(-canvwh.w/2)/scaleFactor, y:(-canvwh.h/2)/scaleFactor }
	winxy[9] = {x:(canvwh.w/2)/scaleFactor, y:(-canvwh.h/2)/scaleFactor }
	winxy[8] = {x:0, y:(-canvwh.h/2)/scaleFactor }
	winxy[4] = {x:(-canvwh.w/2)/scaleFactor, y:0 }
	winxy[6] = {x:(canvwh.w/2)/scaleFactor, y:0 }
	winxy[2] = {x:0, y:(canvwh.h/2)/scaleFactor }
	winxy[1] = {x:(-canvwh.w/2)/scaleFactor, y:(canvwh.h/2)/scaleFactor }
	winxy[3] = {x:(canvwh.w/2)/scaleFactor, y:(canvwh.h/2)/scaleFactor }

	if (dbg_zoomout)remone = (gowh.h/1500)*30
	else remone = (gowh.h/1000)*30
	
}
