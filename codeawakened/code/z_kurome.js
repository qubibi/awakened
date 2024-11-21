
class Z_kurome {
	constructor() {
		this.vt_kurome_hd;
		this.ap_kurome_mg;
		this.kagayaki_hd = {}
		this.kagayaki_mg = {}
		this.kagayaki_hd2 = {}
		this.kagayaki_mg2 = {}
	}
	f_shape() {
		const cen_hi = bbut.f_GETKP(7, -1.5+nftyorimex, -1.6+nftyorimey);
		const cen_mi = bbut.f_GETKP(7, 1.5+nftyorimex, -1.2+nftyorimey);
		this.kagayaki_hd.x = cen_hi.x+  (((remone*1.7)*mekagayaki_dir)*mekagayaki_mag)*(1-nnyu.migimev_re*.5)
		this.kagayaki_hd.y = cen_hi.y-remone
		this.kagayaki_mg.x = cen_mi.x+  (((remone*1.7)*mekagayaki_dir)*mekagayaki_mag)*(1-nnyu.migimev_re*.5)
		this.kagayaki_mg.y = cen_mi.y-remone
		this.kagayaki_hd2.x = cen_hi.x+ (mekagayaki_x+((remone*0.6)*mekagayaki_dir)*mekagayaki_mag)*(1-nnyu.migimev_re*.6)
		this.kagayaki_hd2.y = cen_hi.y-remone*0.6
		this.kagayaki_mg2.x = cen_mi.x+ (mekagayaki_x+((remone*0.6)*mekagayaki_dir)*mekagayaki_mag)*(1-nnyu.migimev_re*.6)
		this.kagayaki_mg2.y = cen_mi.y-remone*0.6
		const ookisa = (remone*3.3)*nftcrome - nnyu.migimev_re*(nftcrome*22)
		const ookisax = ookisa*1
		const ookisas = ookisax/1.4
		const _r = ookisa/2
		if (nftme_sikaku) {
			this.ap_kurome_hd = [
				{ x: cen_hi.x-ookisas,	y: cen_hi.y-ookisas,    		ctr1x: 0, ctr1y: 0, ctr2x: 0, ctr2y: 0  },
				{ x: cen_hi.x+ookisas, 		y: cen_hi.y-ookisas, 			ctr1x: 0, ctr1y: 0, ctr2x: 0, ctr2y: 0  },
				{ x: cen_hi.x+ookisas, 		y: cen_hi.y+ookisas, 			ctr1x: 0, ctr1y: 0, ctr2x: 0, ctr2y: 0  },
				{ x: cen_hi.x-ookisas, 		y: cen_hi.y+ookisas,      	ctr1x: 0, ctr1y: 0, ctr2x: 0, ctr2y: 0  },
				{ x: cen_hi.x-ookisas,   		y: cen_hi.y-ookisas,    		ctr1x: 0, ctr1y: 0, ctr2x: 0, ctr2y: 0  }
			]
			this.ap_kurome_mg = [
				{ x: cen_mi.x-ookisas,	y: cen_mi.y-ookisas,    		ctr1x: 0, ctr1y: 0, ctr2x: 0, ctr2y: 0  },
				{ x: cen_mi.x+ookisas, 		y: cen_mi.y-ookisas, 			ctr1x: 0, ctr1y: 0, ctr2x: 0, ctr2y: 0  },
				{ x: cen_mi.x+ookisas, 		y: cen_mi.y+ookisas, 			ctr1x: 0, ctr1y: 0, ctr2x: 0, ctr2y: 0  },
				{ x: cen_mi.x-ookisas, 		y: cen_mi.y+ookisas,      	ctr1x: 0, ctr1y: 0, ctr2x: 0, ctr2y: 0  },
				{ x: cen_mi.x-ookisas,   		y: cen_mi.y-ookisas,    		ctr1x: 0, ctr1y: 0, ctr2x: 0, ctr2y: 0  }
			]
		}else {
			this.ap_kurome_hd = [
				{ x: cen_hi.x,   		y: cen_hi.y-ookisa,    		ctr1x: 0, ctr1y: 0, ctr2x: _r, ctr2y: 0  },
				{ x: cen_hi.x+ookisax, 		y: cen_hi.y, 			ctr1x: 0, ctr1y: -_r, ctr2x: 0, ctr2y: _r  },
				{ x: cen_hi.x, 		y: cen_hi.y+ookisa, 			ctr1x: _r, ctr1y: 0, ctr2x: -_r, ctr2y: 0  },
				{ x: cen_hi.x-ookisax, 		y: cen_hi.y,      	ctr1x: 0, ctr1y: _r, ctr2x: 0, ctr2y: -_r  },
				{ x: cen_hi.x,   		y: cen_hi.y-ookisa,    		ctr1x: -_r, ctr1y: 0, ctr2x: _r, ctr2y: 0  }
			]
			this.ap_kurome_mg = [
				{ x: cen_mi.x,   		y: cen_mi.y-ookisa,    		ctr1x: 0, ctr1y: 0, ctr2x: _r, ctr2y: 0  },
				{ x: cen_mi.x+ookisax, 		y: cen_mi.y, 			ctr1x: 0, ctr1y: -_r, ctr2x: 0, ctr2y: _r  },
				{ x: cen_mi.x, 		y: cen_mi.y+ookisa, 			ctr1x: _r, ctr1y: 0, ctr2x: -_r, ctr2y: 0  },
				{ x: cen_mi.x-ookisax, 		y: cen_mi.y,      	ctr1x: 0, ctr1y: _r, ctr2x: 0, ctr2y: -_r  },
				{ x: cen_mi.x,   		y: cen_mi.y-ookisa,    		ctr1x: -_r, ctr1y: 0, ctr2x: _r, ctr2y: 0  }
			]
		}
	}

	f_ef() {
		this.f_shape()
		this.vt_kurome_hd = qvert.beje_vert2(  this.ap_kurome_hd, [6,6,6,6])
		this.vt_kurome_mg = qvert.beje_vert2(  this.ap_kurome_mg, [6,6,6,6])
	}
	f_efdraw(_g) {
		// qfill.drawfillv2(_g, this.vt_kurome,  "#000", 10, 0, 0)

	}

	f_efkuromemask() {	
		shd_mask.setUniform('uMainTex', g_menonaka)
		shd_mask.setUniform('uMaskTex', g_mask)
		g_forme.rect(0,0,gowh.w,gowh.h)
		g_room.image(g_forme, gowh.w/-2,gowh.h/-2)
	}

		
}