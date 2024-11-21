class Tenkai {
	constructor() {
		this.face = { hidarime:true, migime:false, kuti:false, tuno:false}
		this.is_all_pre = false
		this.is_startlock = true;
		this.cc_all = 0
		this.is_all = false
		// this.migimev_scroll = 0;
		// this.migimev_scrollynyn = 0;
		this.hajimete_kutideta = false;
		this.hajimete_kuti_and_dontmouseup_hajimete = false;
		this.hajimete_kuti_and_dontmouseup = false
		this.saigomouseup = false;
		this.is_migimedeta_ikkaimepress = false
	}
	f_skip() {
		this.face = { hidarime:true, migime:true, kuti:true, tuno:true}
		this.is_all_pre = true
		this.is_all = true

	}
	f_check_alldone() {
			this.is_all = true;
	}

	f_check_megadetaka_fromnyu() {
		if (!this.face.migime ) {
			this.face.migime = true
			zeye_migi.ynynspd = .3
		}
	}
	f_check_migimedeta_ikkaimepress() {
		if (this.face.migime) this.is_migimedeta_ikkaimepress = true
	}
	f_check_kutidetaka_fromnyu_mousedown() {
		if (this.face.kuti) {
			zeye_hida.ynynspd = 0.66
			zeye_migi.ynynspd = 0.66
		}
	}

	f_check_hajimetekuti() {
		if (!this.face.kuti) {
			
			zeye_hida.vt_eye_re = qb.updateObjArray(zeye_hida.vt_eye_re, "y", -400)
			zeye_migi.vt_eye_re = qb.updateObjArray(zeye_migi.vt_eye_re, "y", -300)
			if (!this.face.migime) zeye_migi.vt_eye_re = qb.updateObjArray(zeye_migi.vt_eye_re, "x", 150)
			zeye_hida.ynynspd = 0.001
			zeye_migi.ynynspd = 0.001
			this.hajimete_kutideta = true;
			this.face.kuti = true
			this.hajimete_kuti_and_dontmouseup = true;
			
		}
	}
	f_check_hajimetekuti_fromnyuup() {
		if (this.hajimete_kutideta) {
			this.hajimete_kuti_and_dontmouseup_hajimete = true
			if (this.hajimete_kuti_and_dontmouseup) {
				this.hajimete_kuti_and_dontmouseup = false;
			}
		}
	}


	f_checkall_fromnyu() {
		if (Object.values(this.face).every(v => v)) {
			this.is_all_pre = true
		}
	}

	f_saigomouseup() {
		// if (this.is_all_pre && !this.is_all && this.cc_all>=88 ) {
		// 	this.is_all = true
		// 	bbut.asibuyon1ynyn = -1000
		// 	bbut.oneynyn = -10
		// }

	}

	f_ef() {
		if (this.face.kuti) {
			if (zeye_hida.ynynspd<.6) zeye_hida.ynynspd +=0.01
			if (zeye_migi.ynynspd<.6) zeye_migi.ynynspd +=0.01
		}
		if (this.is_all)  this.cc_all+=1
		

		// if (tten.face.migime) {
		// 	this.migimev_scroll += this.migimev_scrollynyn = ( this.migimev_scrollynyn + ( 1 - this.migimev_scroll ) * 0.6 ) * 0.7; 
		// }
	}
}
