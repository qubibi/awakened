class Nyu {
	constructor() {
		this.ocv = 0;
		this.ocv_re = 0;
		this.tunov = 0;
		this.asiv = 0;
		this.asiv_re = 0;
		this.migimev = 0;
		this.migimev_re = 0;
		this.is_press = false;
		this.pressv = 0;
		this.pressspd = 0;
		this.dragStartX = this.dragStartY = 0;
		this.dragmx = this.dragmy = 0;
		this.dragmytgt =0
		this.dragmy_re = 0;
		this.dragmx_re = 0;
		this.dragmx_re_uragaeri = 0;
		// this.omag_0_33 = 0
		this.omag_33_100 = 0
		this.omag_forkutimaeA_norm = 0
		this.omag_forkutimaeB_norm = 0
		this.omag_forkutimaeC_norm = 0
		this.omag_33_66_norm = 0
		this.omag_33_100_norm = 0
		this.omag_66_100_norm = 0
		this.justpressNegatgt = 0;
		this.justpressNega = 1;
		this.justpressNeganuru = 2
		this.kutihajimenuru = 400
		if (is_mobile) this.kutihajimenuru = 244

		this.tojitaaitastats = {};
		this.omag_foreye = 0;
		this.cc_presskara = 0;
		this.cc_fakemouseup = 0
		this.cc_hajimedake = 0
	}
	f_skip() {
		
		this.migimev_re = nftskip1
		this.tunov = 1;
		this.asiv = 1;
	}

	f_mousemove( _x, _y) {
		if (!tten.is_startlock || is_skiplast) {
			mousemovecamera()
			hajimenoscr += -0.005
			if (hajimenoscr<1) hajimenoscr = 1;

			cc_motion = cc_motiontgt
			let _mag = 1;
			if (is_mobile) _mag = .75
			this.dragmx = (_x - this.dragStartX)*_mag;
			if (is_mobile) _mag = .6
			this.dragmytgt = (_y - this.dragStartY)*_mag;
		}
	}

	f_mousedown(_x, _y) {
		if (!tten.is_startlock || is_skiplast) {
			cc_motiontgt = qb.rndmint(6,12)
			this.cc_presskara = 0
			cc_motion = cc_motiontgt
			this.is_press = true;
			this.pressspd = qb.rndm(0.9, 1.2);
			this.dragStartX = _x;
			this.dragStartY = _y
			this.dragmy = this.dragmytgt = 0
			tten.f_check_kutidetaka_fromnyu_mousedown()
			ssnoto.motion_play_justnow()

			this.justpressNega= Math.random()
			this.justpressNeganuru = qb.rndm(1,12)

			// this.dragmx = -200
			if (is_skiplast && hl.random()<.5) {
				
				this.dragmx = hl.random(-222,222)
				this.dragmytgt=this.dragmy = hl.random(-11,11)
			}
		}
	}

	f_mouseup() {
		cc_motion = cc_motiontgt
		// f_fakemouseup() 
		this.cc_fakemouseup = 2
	}
	f_fakemouseup() {
		is_hajimete_open = true
		if (this.cc_hajimedake==0) ssnoto.f_startonly()
		// cc_motion = cc_motiontgt
		this.is_press = false;
		this.pressspd = -qb.rndm(0.15, 0.9);
		this.dragmx = 0
		this.dragmy = this.dragmytgt = 0
		
		bbut.f_reset_fromnyu()
		tten.f_check_hajimetekuti_fromnyuup()
		tten.f_checkall_fromnyu()
		tten.f_check_migimedeta_ikkaimepress()
		
		this.cc_hajimedake += 1
	}


	f_ef() {
		this.justpressNega += (1 - this.justpressNega) / this.justpressNeganuru
		

		this.cc_fakemouseup+=-1
		if (this.cc_fakemouseup==0) this.f_fakemouseup()
		this.cc_presskara += 1
		this.dragmy += (this.dragmytgt-this.dragmy)/2

		this.pressv += this.pressspd;
		if (this.pressv>1)this.pressv=1;
		else if (this.pressv< 0) this.pressv= 0;


		if (tten.face.kuti) this.kutihajimenuru += (200-this.kutihajimenuru) / 10

		let _dragy;
		if (tten.face.kuti) _dragy = qb.mppng(this.dragmy, 0, this.kutihajimenuru, 0, 1-0.33, true, -0.9)
		else _dragy = qb.mppng(this.dragmy, 0, this.kutihajimenuru, 0, 1-0.33, true, 0) 

		this.ocv = this.pressv*0.33 + _dragy;
		// this.ocv = 1
		if (is_skiplast_kutiake && is_skiplast && cc>2) this.ocv = .98
		globalOpenclosev = this.ocv;
		if (this.ocv>=0.33) {
			let _dragy_mobile = -334
			if (is_mobile) _dragy_mobile = -135
			let _dragy2_for_tuno = qb.mppng(this.dragmy, 0, _dragy_mobile, 0, 1, true, -0.1)
			this.tunov = _dragy2_for_tuno*1
			let _dragx_mobile = 260
			if (is_mobile) _dragx_mobile = 177
			this.migimev += (((qb.mppng(this.dragmx, 0, _dragx_mobile, 0, 1, true))*1)*(1-this.tunov*.66)-this.migimev)/3
			// this.migimev += (((qb.mppng(this.dragmx, 0, _dragx_mobile, 0, 1, true))*(1-this.omag_33_66_norm*.4))*(1-this.tunov*.4)-this.migimev)/3
			// this.migimev += (((qb.mppng(this.dragmx, 0, _dragx_mobile, 0, 1, true))*(1-this.omag_33_66_norm))*(1-this.tunov)-this.migimev)/2

			


		if (tten.is_all_pre) this.asiv = qb.mppng(this.dragmy, 0, -_dragy_mobile, 0, 1, true, 0)
		} else {
			if (!is_skiplast) this.tunov = 0
			if (!is_skiplast) this.migimev = 0
		}
		this.asiv_re = qb.updateLockedValue(this.asiv, this.asiv_re, 0.5)
		this.ocv_re = qb.updateLockedValue(this.ocv, this.ocv_re, 0.66)


		this.migimev_re = qb.updateLockedValue(this.migimev, this.migimev_re, 0.66)
		if (this.migimev_re>=1.0) tten.f_check_megadetaka_fromnyu()
		if (this.asiv_re>=1.0) tten.f_check_alldone()

		let _uragaeri = qb.mppng(this.ocv, 0.43, 0.56, 1, -1, true)
		this.dragmx_re = qb.mppng(this.dragmx, -150, 150, -333, 333, true)
		this.dragmx_re_uragaeri = this.dragmx_re*_uragaeri;
		this.dragmy_re = qb.mppng(this.dragmy, -150, 150, -333, 333, true)



		_dragy = qb.mppng(this.dragmy, 0, 71, 0, 0.5, true, 0.5)
		if (tten.face.kuti==true) _dragy= 0
		this.omag_foreye = this.pressv*0.5 + _dragy; 
		if (tten.is_startlock) this.omag_foreye = .5
		
		this.omag_forkutimaeA_norm = qb.mppng(this.ocv, 0.50, 0.66, 0, 1., true, 0.0) //eye kuti kutimae
		this.omag_forkutimaeB_norm = qb.mppng(this.ocv, 0.50, 0.53, 0, 1., true, -0.5) //eye kuti kutimae
		this.omag_forkutimaeC_norm = qb.mppng(this.ocv, 0.47, 0.53, 0, 1., true, -0.5) //eye kuti kutimae

		if (is_skiplast) this.omag_foreye = 0

		this.omag_33_66_norm = qb.mppng(this.ocv, 0.33, .66, 0, 1, true,0) // butai
		this.omag_33_100_norm = qb.mppng(this.ocv, 0.33, 1, 0, 1, true,0) // butai
		this.omag_66_100_norm = qb.mppng(this.ocv, 0.66, 1, 0, 1, true, 0.0) // kuti
		
		// this.omag_33_100 = qb.mppng(this.ocv, 0.33, 1, 0.33, 1, true,0.5)
		// this.omag_0_33 = qb.clamp(this.ocv,0.00, 0.33)

		this.f_check_me_close(this.ocv, 0.33);    
		this.f_check_me_open(this.ocv, 0.31);     
		this.f_check_kuti_open(this.ocv, 0.65);   
		this.f_check_kuti_close(this.ocv, 0.66);  

		// 		updateDebugClear()
		// updateDebug("1 "+is_AudioContextSetupComplete)
		// updateDebug("2 "+is_mobile)
		// updateDebug("3 "+is_hajimete_open)


		// updateDebugClear()
		// updateDebug("ocv "+zeye_migi.ynynspd)
		// updateDebug("ocv "+zkuti.ynynspd)
		// updateDebug("omag_foreye "+this.omag_foreye)
		// updateDebug("tunov "+this.tunov)
		// updateDebug("migimev "+this.migimev)
		// updateDebug("migimev_re "+this.migimev_re)
		// updateDebug("omag_foreye "+this.omag_foreye)
		// updateDebug("tunov "+this.tunov)
		// updateDebug("face_kuti "+tten.face.kuti)
		// updateDebug("migimev_re "+nnyu.migimev_re)
		// updateDebug("face_kuti "+nnyu.omag_forkutimaeB_norm)
		// updateDebug("face_tuno "+tten.face.tuno)
		// updateDebug("face_migime "+tten.face.migime)
		// updateDebug("face_body "+tten.face.body)
		// updateDebug("dragmx "+this.dragmx)
		// updateDebug("dragmy "+this.dragmy)
		// updateDebug("hajimete_kuti_and_dontmouseup "+tten.hajimete_kuti_and_dontmouseup)

	}


	f_tojitaaitacheck(v, t, isOver, cb) {
		const s = this.tojitaaitastats[t] ??= { p: 0, f: 0 };

		if (isOver) {
			// 閾値を上回る方向のチェック
			if (s.p <= t && v >= t && !s.f) {
				s.f = 1;
				cb();
				s.p = v;
				return true;
			}
			s.f = v >= t;
		} else {
			// 閾値を下回る方向のチェック
			if (s.p >= t && v <= t && !s.f) {
				s.f = 1;
				cb();
				s.p = v;
				return true;
			}
			s.f = v <= t;
		}
		s.p = v;
		return false;
	}

	f_check_me_close(v, t) {
		return this.f_tojitaaitacheck(v, t, true, () => this.f_me_close_justnow());
	}

	f_check_kuti_open(v, t) {
		return this.f_tojitaaitacheck(v, t, true, () => this.f_kuti_open_justnow());
	}

	f_check_kuti_close(v, t) {
		return this.f_tojitaaitacheck(v, t, false, () => this.f_kuti_close_justnow());
	}

	f_check_me_open(v, t) {
		return this.f_tojitaaitacheck(v, t, false, () => this.f_me_open_justnow());
	}

	f_me_open_justnow() {
		ssnoto.me_open_justnow()
	}
	f_me_close_justnow() {
		ssnoto.me_close_justnow()
	}
	f_kuti_open_justnow() {
		ssnoto.kuti_open_justnow()
	}
	f_kuti_close_justnow() {
		ssnoto.kuti_close_justnow()
	}
		
		

}

