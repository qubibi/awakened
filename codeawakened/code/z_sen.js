class Z_sen {
	constructor() {
		this.kutimag_minas = 1;
		this.kutia = 0;
		this.aaatgt = 1
		this.aaa = 4;
		this.bbbtgt = 1
		this.bbb = 19
		this.xxxtgt = 1
		this.xxx = 10;
		this.yyytgt = 1
		this.yyy = 25
	}
	f_ef(_g) {
	}


	f_efsen() {
		let _SLmag = 1;
		if (is_skiplast) _SLmag = 0.78
		if (tten.face.kuti) {
			this.kutia += (1-this.kutia)/3
			this.kutimag_minas += (1-this.kutimag_minas)/3
		} else {
			this.kutimag_minas = 1-nnyu.omag_forkutimaeC_norm;
			this.kutia += (nnyu.omag_forkutimaeB_norm-this.kutia)/3;
		}


		let _migimehutosamag = 1
		if (!tten.face.migime) {
			_migimehutosamag = qb.mppng(nnyu.migimev_re,0,0.1,0,1,true)
		}
		const _hutosa_hidarime = (kefutosa*3+remone*0.7)*(.1*this.kutimag_minas)
		const _hutosa_migime =   (kefutosa*3+remone*0.7)*(.1*(this.kutimag_minas)*_migimehutosamag )
// ///////////////
//* meno mawari 
// ///////////////
		let _matugecolor = keiro
// ///////////////
//* me no rinkaku
// ///////////////
		let _usukusuru =  qb.mppng(nnyu.ocv,0.85, 1.0, 1, 0.5,true)
		
		qline.drawline(g_room, zeye_hida.vt_eye_re, nftgizagiza+2, true, (_hutosa_hidarime*_usukusuru)*_SLmag, _matugecolor, false)
		
		if (nftskip1==1) qline.drawline(g_room, zeye_migi.vt_eye_re, nftgizagiza+2, true, (_hutosa_migime*_usukusuru)*_SLmag, _matugecolor, false)
// ///////////////
//* kuti
// ///////////////
		let _kutisenkosa = 0.4
		if (_bg2cmode==2) _kutisenkosa = 0.8
		qline.drawlinev2(g_room, zkuti.vt_kuti_re,    nftgizagiza+2, true, (((kefutosa*1.4+remone)*_kutisenkosa)*(.1*this.kutia))*_SLmag,      _matugecolor, [0,53])
		//* kuti biru sita
		qline.drawlinev2(g_room, zkuti.vt_kuti_re,    nftgizagiza+2, true, (((kefutosa+remone)*_kutisenkosa)*.1)*_SLmag, _matugecolor, [42, 46], [-7,30], 0.12)
// //////////////////
// * ago
// /////////////////////
		// if ( Math.random()< 0.05 ) this.aaatgt = qb.rndmint(4,10)
		// if ( Math.random()< 0.05 ) this.bbbtgt = qb.rndmint(8,19)
		// this.aaa += (this.aaatgt-this.aaa)/7
		// this.bbb += (this.bbbtgt-this.bbb)/7

		let _rnd1 = .4
		let _rnd2 = .3
		if (is_skiplast) {
			_rnd1 = .3
			_rnd2 = .2
		}
		if (cc_motion>-1) {
			if (Math.random()<_rnd1) {
			if (this.aaa>20) this.aaatgt *= -1
			if (this.aaa<4) this.aaatgt *= -1
			if (Math.random()<.25 && this.aaatgt == 1 && this.aaa>8) this.aaatgt *= -1
			this.aaa += 1*this.aaatgt
			}
			
			if (Math.random()<_rnd2) {
			if (this.bbb>20) this.bbbtgt *= -1
			if (this.bbb<4) this.bbbtgt *= -1
			if (Math.random()<.4 && this.bbbtgt == -1 && this.bbb<15) this.bbbtgt *= -1
			this.bbb += 1*this.bbbtgt
			}
		}
		_rnd1 = .4
		_rnd2 = .3
		if (cc_motion>-1) {
			if (Math.random()<_rnd1) {
			if (this.xxx>34) this.xxxtgt *= -1
			if (this.xxx<4) this.xxxtgt *= -1
			if (Math.random()<.2 && this.xxxtgt == 1 && this.xxx>12) this.xxxtgt *= -1
			this.xxx += 1*this.xxxtgt
			}
			if (Math.random()<_rnd2) {
			if (this.yyy>34) this.yyytgt *= -1
			if (this.yyy<4) this.yyytgt *= -1
			// if (Math.random()<.4 && this.yyytgt == -1 && this.yyy<20) this.yyytgt *= -1
			this.yyy += 1*this.yyytgt
			}

		}



		qline.drawlinev2(g_room, zbody.vt_footue_re,    nftgizagiza+3, true, (((kefutosa+remone)*_kutisenkosa)*(.1))*_SLmag, _matugecolor, [Math.round(this.aaa), Math.round(this.bbb)], [15,0], 0.0)

		qline.drawlinev2(g_room, zbody.vt_tuno_re,    nftgizagiza+3, true, (((kefutosa+remone)*_kutisenkosa)*(.1))*_SLmag, _matugecolor, [Math.round(this.xxx), Math.round(this.yyy)], [0,0], 0.0)







		const _matugenagasa = nftma2genagasa*-this.kutimag_minas
		const _matugehd = [6]
// 		let _matugehd=[]
// for (let i = 0; i <= 51; i+=2) {
//     _matugehd.push(i);
// }

		const _matugemg = [6,7,8,9, 10,11,12, 14, 16, 18]
		
// ///////////////
// * matsuge
// ///////////////
		let _matugefutosa_hd = ((kefutosa*0.8+_hutosa_hidarime)/1.8)*this.kutimag_minas
		let _matugefutosa_mg = ((kefutosa*0.8+_hutosa_migime)/1.8)*(this.kutimag_minas*nnyu.migimev_re)

		if (!nftma2ge_curve) {
			if (is_sirome) {
				if (_bg2cmode==2) _matugecolor = "#ffffff66"
				else if (_bg2cmode==0) _matugecolor = "#ffffffff"
			}
			qline.drawmatuge(g_room, zeye_hida.vt_eye_re, nftgizagiza+2, true, _matugefutosa_hd*_SLmag, _matugecolor, nftma2geatob, [-50 +nnyu.dragmx_re*0.25, nftma2geangley],   _matugenagasa, 0,   1)

			if (nftskip1==1)  qline.drawmatuge(g_room, zeye_migi.vt_eye_re, nftgizagiza+2, true, _matugefutosa_mg*_SLmag, _matugecolor, nftma2geatob, [50 +nnyu.dragmx_re*0.25, nftma2geangley],    _matugenagasa, 0, 1)
		} else {
			qline.drawmatuge(g_room, zeye_hida.vt_eye_re, nftgizagiza+2, true, _matugefutosa_hd*_SLmag, _matugecolor, nftma2geatob, [-50 +nnyu.dragmx_re*0.25, nftma2geangley],   _matugenagasa, 0.5,   4)
			if (nftskip1==1)  qline.drawmatuge(g_room, zeye_migi.vt_eye_re, nftgizagiza+2, true, _matugefutosa_mg*_SLmag, _matugecolor, nftma2geatob, [50 +nnyu.dragmx_re*0.25, nftma2geangley],    _matugenagasa, -0.5, 4)
		}









// nftfutae = 3
		// qline.drawlinev2(g_room, zkuti.vt_kuti_re, 2, true, 60, "#00000077", [10,21],[0,-60] )
		// qline.drawlinev2(g_room, zeye_hida.vt_eye_re, 2, true, 60, "#00000077", [8,25],[0,-50] )
		// qline.drawlinev2(g_room, zeye_migi.vt_eye_re, 2, true, 60, "#00000077", [8,25],[0,-50] )

		if (nftfutae == 4) {
			qline.drawlinev2(g_room, zeye_hida.vt_eye_re, nftgizagiza+3, true, (_hutosa_hidarime*(40*this.kutimag_minas))*nfmayugefutosamag, mabutairo, [nftmayugenagasa+1,20*this.kutimag_minas],[10,-nfmayugekyori], nftmayugeangle )
			if (nftskip1==1)  qline.drawlinev2(g_room, zeye_migi.vt_eye_re, nftgizagiza+3, true, (_hutosa_migime*(40*(this.kutimag_minas*nnyu.migimev_re)))*nfmayugefutosamag, mabutairo,   [4,-nftmayugenagasa+23*this.kutimag_minas],[10,-nfmayugekyori], -nftmayugeangle )
		}
		if (nftfutae == 3) {
			qline.drawlinev2(g_room, zeye_hida.vt_eye_re, nftgizagiza+2, true, (_hutosa_hidarime*.71)*_SLmag, mabutairo, [1,25],[0,-22*this.kutimag_minas],  -0.1 )
			if (nftskip1==1)  qline.drawlinev2(g_room, zeye_migi.vt_eye_re, nftgizagiza+2, true, (_hutosa_migime*.71)*_SLmag, mabutairo, [1,25],  [0,-22*this.kutimag_minas], 0.1 )
		}

		if (nftfutae == 2) {
			qline.drawlinev2(g_room, zeye_hida.vt_eye_re, nftgizagiza+2, true, (_hutosa_hidarime*.51)*_SLmag, mabutairo, [31,49],  [0,17*this.kutimag_minas],  -0.1 )
			if (nftskip1==1)  qline.drawlinev2(g_room, zeye_migi.vt_eye_re, nftgizagiza+2, true, (_hutosa_migime*.51)*_SLmag, mabutairo,   [31,49],  [0,17*this.kutimag_minas], 0.1 )
		}
		if (nftfutae == 1) {
			qline.drawlinev2(g_room, zeye_hida.vt_eye_re, nftgizagiza+2, true, (_hutosa_hidarime*.71)*_SLmag, mabutairo, [1,25],[0,-17*this.kutimag_minas],  0.1 )
			if (nftskip1==1)  qline.drawlinev2(g_room, zeye_migi.vt_eye_re, nftgizagiza+2, true, (_hutosa_migime*.71)*_SLmag, mabutairo, [1,25],  [0,-17*this.kutimag_minas], -0.1 )
		}

		if (nftfutae == 0) {
			qline.drawlinev2(g_room, zeye_hida.vt_eye_re, nftgizagiza+2, true, _hutosa_hidarime*_SLmag, mabutairo, [5,25],[0,-7] )
			if (nftskip1==1)  qline.drawlinev2(g_room, zeye_migi.vt_eye_re, nftgizagiza+2, true, _hutosa_migime*_SLmag, mabutairo, [5,25],[0,-7] )
		}

	}
}