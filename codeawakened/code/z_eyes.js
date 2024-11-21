
class Z_eyes {
	constructor(_hidarimigi) {
		this.hidarimigi = _hidarimigi
		this.cc_migime = 0
		this.vt_eye;
		this.vt_eye_re;
		this.vt_eye_reynyn;
		this.ynynspd = .7
		if (this.hidarimigi=="migi") this.ynynspd = .15
		this.namicc = 0;
	}

	inipara () {
		this.f_shape();
		this.vt_eye = qvert.beje_vert2(  this.ap_eye_close, [13,13,13,13])
		this.vt_eye_re = structuredClone(this.vt_eye);
		this.vt_eye_reynyn = structuredClone(this.vt_eye);
	}


	f_shape() {
		// let testtest = remone*2;
		let testtest = 0;
		if (nftmonster) testtest = (remone*2)*nnyu.asiv_re
		let r1 = (remone*2.5)*((1-nnyu.migimev_re)*0.4+0.6);
		let r2 = remone*2;
		let _p4,_p8,_p6,_p2, _p4a, _p6a, _p2a, _p8a
		let _migimedetaramagY = nnyu.migimev_re*0.36
		if (this.hidarimigi=="hidari") {
			_p4 = bbut.f_GETKP(3, 0.0+nftsmex/2, 1.5);
			_p8 = bbut.f_GETKP(3, 1.5, .42+nftme_komari  + nftsmey + _migimedetaramagY);
			_p6 = bbut.f_GETKP(7, 0.0-nftsmex, -1.5);
			_p2 = bbut.f_GETKP(7, -1.5, 0  + -nftsmey - _migimedetaramagY);
			_p4a = bbut.f_GETKP(6, 0, 0);
			_p6a = bbut.f_GETKP(7, 0, 0);
			r2 = bbut.f_GETKP(6, 1.5, 0, true).x*0.5 ;
		} else {
			_p4 = bbut.f_GETKP(7, 0.0+nftsmex, -1.5);
			_p8 = bbut.f_GETKP(5, -1.5, .42+nftme_komari  + nftsmey);
			_p6 = bbut.f_GETKP(5, 0.0-nftsmex/2, 1.5);
			_p2 = bbut.f_GETKP(7, 1.5, 0  + -nftsmey);
			_p4a = bbut.f_GETKP(7, 0, 0);
			_p6a = bbut.f_GETKP(8, 0, -0.7);
		}

		if (this.hidarimigi=="hidari") {
			_p8a = bbut.f_GETKP(3, 1.5, .42);
			_p2a = bbut.f_GETKP(7, -1.5, 0);
			_p4a = bbut.f_GETKP(6, 0, 0);
			_p6a = bbut.f_GETKP(7, 0, 0);
		} else {
			_p8a = bbut.f_GETKP(5, -1.5, .42);
			_p2a = bbut.f_GETKP(7, 1.5, 0);
			_p4a = bbut.f_GETKP(7, 0, 0);
			_p6a = bbut.f_GETKP(8, 0, -0.7);
		}


		this.ap_eye_open = [
			{ x: _p4.x+testtest, 	y: _p4.y,      	ctr1x: 0, ctr1y: 0, ctr2x: 0, ctr2y: -r1*nftsmermag  },
			{ x: _p8.x+testtest/2,   		y: _p8.y, 		ctr1x: -r2, ctr1y: 0, ctr2x: r2, ctr2y: 0  },
			{ x: _p6.x-testtest, 	y: _p6.y, 			ctr1x: 0, ctr1y: -r1*nftsmermag, ctr2x: 0, ctr2y: r1*nftsmermag  },
			{ x: _p2.x+testtest/2, 		y: _p2.y, 			ctr1x: r2, ctr1y: 0, ctr2x: -r2, ctr2y: 0  },
			{ x: _p4.x+testtest, 	y: _p4.y, 			ctr1x: 0, ctr1y: r1*nftsmermag, ctr2x: 0, ctr2y: 0  }
		];
		this.ap_eye_close = [
			{ x: _p4.x, 	y: _p4.y,      	ctr1x: 0, ctr1y: 0, ctr2x: 0, ctr2y: r1  },
			{ x: _p2.x+nnyu.dragmx_re*.1,   		y: _p2.y-remone/2, 		ctr1x: -r2, ctr1y: 0, ctr2x: r2, ctr2y: 0  },
			{ x: _p6.x, 	y: _p6.y, 			ctr1x: 0, ctr1y: r1, ctr2x: 0, ctr2y: r1  },
			{ x: _p2.x+nnyu.dragmx_re*.1, 		y: _p2.y-remone/2, 			ctr1x: r2, ctr1y: 0, ctr2x: -r2, ctr2y: 0  },
			{ x: _p4.x, 	y: _p4.y, 			ctr1x: 0, ctr1y: r1, ctr2x: 0, ctr2y: 0  }
		];
		this.ap_eye_close_kutimae = [
			{ x: _p4a.x, 	y: _p4a.y,      	ctr1x: 0, ctr1y: 0, ctr2x: 0, ctr2y: 0  },
			{ x: _p2a.x,   		y: _p2a.y, 		ctr1x: r1, ctr1y: 0, ctr2x: r1, ctr2y: 0  },
			{ x: _p6a.x, 	y: _p6a.y, 			ctr1x: 0, ctr1y: 0, ctr2x: 0, ctr2y: 0  },
			{ x: _p2a.x, 		y: _p2a.y, 		ctr1x: r1, ctr1y: 0, ctr2x: r1, ctr2y: 0  },
			{ x: _p4a.x, 	y: _p4a.y, 			ctr1x: 0, ctr1y: 0, ctr2x: 0, ctr2y: 0  }
		];
	}

	f_ef() {
		this.f_shape()
		let _mag = nnyu.omag_foreye
		const _me = qb.tweenArrays([this.ap_eye_open, this.ap_eye_close, this.ap_eye_close_kutimae], _mag)
		// const _me = qb.tweenArrays([this.ap_eye_open, this.ap_eye_close], _mag)
		this.vt_eye = qvert.beje_vert2(  _me, [13,13,13,13])
	}

	f_efdraw(_g) {
		let vari_sc =1// 0.5
		let vari_y  =1// 30


		let _scx=1; 
		let _scy=1;
		let _x=0;
		let _y = 0;

		if (tten.face.migime == true ) { // 右目出てる状態
			if (tten.face.kuti == false ) {
				_scx = _scy = qb.mppng(nnyu.omag_forkutimaeA_norm, 0, 0.5, 1, 0, true)
			} 
		} else { // 右目出る前の状態
			if (tten.face.kuti == false ) {
				_scx = _scy = qb.mppng(nnyu.omag_forkutimaeA_norm, 0, 0.5, 1, 0, true)
				_x = bbut.f_GETKP(7,-2,0).x*nnyu.omag_forkutimaeC_norm
			}
		}

		if (this.hidarimigi=="migi") {
			const _migimemae = zeye_hida.vt_eye_re[26]
			if (tten.face.migime == false ) {
				_scx = nnyu.migimev_re
				_scy = 0.01
				_x = _migimemae.x- qb.mppng_cu(nnyu.migimev_re,0,0.5,1, 0,66,0, true,0)
				// _x = _migimemae.x- qb.mppng(nnyu.migimev_re,0,1,0,33,true,-0.9)
				_y = _migimemae.y+vari_y
			} else {
				_scx = nnyu.migimev_re
				_scy = 0
				
				if (nnyu.is_press && !tten.is_migimedeta_ikkaimepress) {
					_x = _migimemae.x- qb.mppng_cu(nnyu.migimev_re,0,0.5,1, 0,66,0, true,0)
					// _x = _migimemae.x- qb.mppng(nnyu.migimev_re,0,1,0,33,true,-0.9)
				}
				
				//_x = _migimemae.x//-nnyu.migimev_re*100
				_y = _migimemae.y+vari_y
				if (tten.is_migimedeta_ikkaimepress) {
					_scy = 1
					_y = 0
				}
				
			}
						
		}

		if (this.hidarimigi=="migi" && nnyu.ocv > 0.5 && !tten.face.kuti) {
			_scy = 0
			_y = zeye_hida.vt_eye_re[26].y+vari_y
		}


		const _vt_eyere = qvert.shiftScaleXY(this.vt_eye, _scx*vari_sc, _scy*vari_sc, 0, _x, _y-vari_y)

		const yama = nftmenoyama;
		const leng = 36;
		const ookisa = nftmemotionokisalike
		let a1 = nftmemotion2spdlike
		let a2 = -0.25
		if (nnyu.cc_presskara>5) a1 = a2 = 0
		
		this.vt_eye_re.forEach((_me, i) => {
			// let _nami = Math.sin(2 * Math.PI * ((i / 53) * 5 + this.namicc));


			let _sin = (Math.sin(yama * Math.PI * (i / leng)) + 1) * ookisa;

			_me.x += this.vt_eye_reynyn[i].x = ( this.vt_eye_reynyn[i].x + ( _vt_eyere[i].x - _me.x ) * (this.ynynspd+_sin+a1) )* (0.45+a2); 
			_me.y += this.vt_eye_reynyn[i].y = ( this.vt_eye_reynyn[i].y + ( _vt_eyere[i].y - _me.y ) * (this.ynynspd+_sin+a1) )* (0.45+a2); 
			// _me.y += this.vt_eye_reynyn[i].y = ( this.vt_eye_reynyn[i].y + ( _vt_eyere[i].y+_nami*20 - _me.y ) * (this.ynynspd+_sin+a1) )* (0.45+a2); 
		});
				// this.namicc += 0.1	

		// console.log(this.namicc);

		// let _alpha = 1
		// if (tten.face.kuti == false) _alpha = 1-nnyu.omag_forkutimaeB_norm
		// if (this.hidarimigi == "migi" && !tten.face.migime) {
		// 	_alpha = (1-nnyu.omag_forkutimaeB_norm)*nnyu.migimev_re
		// }
		// qline.drawline(_g, this.vt_eye_re, 1, true, (remone*.1)*_alpha, "#00f", true, "#fff")

	}
}

