class Z_nuri {
	constructor() {
		this.ap_bgue = [
			{x:-190-100, y:-290},
			{x:190-0, y:-290}
		];
		this.ap_bgsita = [
			{x:-190, y:290},
			{x:190+100, y:290}
		];
		this.vt_bgue = qvert.straight_vert2(this.ap_bgue, [29])
		this.vt_bgsita = qvert.straight_vert2(this.ap_bgsita, [29])

	}

	f_efbg(_g) {



		const _futosa0 = 20
		const _futosa = 27
		let _futosa_rndm = qb.rndmint(30,90)
		_g.noStroke()
		_g.fill("#00005515")
		// _g.fill("#00005545")
		_g.rect(gowh.w/-2,gowh.h/-2,gowh.w,gowh.h)
		this.ap_bgue = [
			{x:-190-100, y:-290},
			{x:190-0, y:-290}
		];
		qfill.drawfill(_g, this.vt_bgue, this.vt_bgsita,    .2, 21, .3, nftcbg1, _futosa0, 0)
		qfill.drawfill(_g, this.vt_bgue, this.vt_bgsita,    .95, 30, .92, qb.colrndm(.7), _futosa_rndm, 0)
		_futosa_rndm = qb.rndmint(30,90)
		qfill.drawfill(_g, this.vt_bgue, this.vt_bgsita,    .95, 30, .92, qb.colrndm(.7), _futosa_rndm, 0)
		// qfill.drawfill(_g, this.vt_bgue, this.vt_bgsita,    .0, 11, .07, "#4399af65", _futosa, 0)

		qfill.drawfill(_g, this.vt_bgue, this.vt_bgsita,    .0, 11, .07, nftcbg2, _futosa, 0)
	// }


	}

	f_efkuti() {
		let _alpha = 1
		if (tten.face.kuti == false) _alpha = nnyu.omag_forkutimaeB_norm
		qfill.drawfillv2(g_room, zkuti.vt_kuti_re,  nftckuti, 25*_alpha, 0, 5, [0.05, 0.95])
	}

	f_efkurome_sirome() {
		let _SLmag = 1;
		if (is_skiplast) _SLmag = 0.78

		// if (tten.face.kuti == false) _alpha_hida = 1-nnyu.omsag_forkutimaeB_norm
		// if (!tten.face.migime) {
		// 	_alpha_migi = (1-nnyu.omag_forkutimaeB_norm)*nnyu.migimev_re
		// }
		// qfill.drawfillv2(g_menonaka, zeye_hida.vt_eye_re,  "#ffffff57", 22*_alpha_hida, 0, 5, [.1, .9])
		// qfill.drawfillv2(g_menonaka, zeye_migi.vt_eye_re,  "#ffffff57", 22*(_alpha_migi*_alpha_hida), 0, 5, [.1, .9])


		let _sirome_a = 90
		if (tten.face.kuti) _sirome_a = 90
		else _sirome_a = 90*(1-nnyu.omag_33_66_norm)
		if (is_sirome) _sirome_a = 188
		g_menonaka.background(255,255,255,_sirome_a)

		g_mask.background("#000000")
		qline.drawline(g_mask, zeye_hida.vt_eye_re, 6, true, 1, "#000", true, "#fff")
		qline.drawline(g_mask, zeye_migi.vt_eye_re, 6, true, 1, "#000", true, "#fff")

		qfill.drawfillv2(g_menonaka, zkurome.vt_kurome_hd,  nftckurome, 25-nnyu.migimev_re*5, qb.rndmint(2,4), 7)
		if (!is_sirome) qline.drawline(g_menonaka, zkurome.vt_kurome_hd, nftgizagiza+2, true, (1+kefutosa*0.15)*_SLmag, keiro, false)
		qfill.drawfillv2(g_menonaka, zkurome.vt_kurome_mg,  nftckurome, 25-nnyu.migimev_re*5, 4, 7)
		if (!is_sirome) qline.drawline(g_menonaka, zkurome.vt_kurome_mg, nftgizagiza+2, true, (1+kefutosa*0.15)*_SLmag, keiro, false)

		g_menonaka.noStroke()
		g_menonaka.fill("#ffffff8a")
		g_menonaka.circle(zkurome.kagayaki_hd.x+qb.rndm(-1.1,1.1), zkurome.kagayaki_hd.y+qb.rndm(-1.1,1.1), (mekagayaki_ookisa*nftcrome)*(1-nnyu.migimev_re*0.25));
		g_menonaka.circle(zkurome.kagayaki_mg.x+qb.rndm(-1.1,1.1), zkurome.kagayaki_mg.y+qb.rndm(-1.1,1.1), (mekagayaki_ookisa*nftcrome)*(1-nnyu.migimev_re*0.25));
		g_menonaka.circle(zkurome.kagayaki_hd2.x+qb.rndm(-1.1,1.1), zkurome.kagayaki_hd2.y+qb.rndm(-1.1,1.1), (mekagayaki_ookisa2*nftcrome)*(1-nnyu.migimev_re*0.25));
		g_menonaka.circle(zkurome.kagayaki_mg2.x+qb.rndm(-1.1,1.1), zkurome.kagayaki_mg2.y+qb.rndm(-1.1,1.1), (mekagayaki_ookisa2*nftcrome)*(1-nnyu.migimev_re*0.25));

	}






	f_efatama(_g) {
		const _futosa = 24
		let _futosa_rndm = qb.rndmint(2,64)


			// qfill.drawfill(_g, zbody.vt_atama_ue, zbody.vt_tuno_re,    .2, 5, .5, "#5f3fff81", _futosa, 0)
			// qfill.drawfill(_g, zbody.vt_footue_re, zbody.vt_foot_sita, .2, 5, .5, "#5f3fff81", _futosa, 0)


		qfill.drawfill(_g, zbody.vt_atama_ue, zbody.vt_tuno_re,    .95, 20, .9, qb.colrndm(1), _futosa_rndm, 0)
		qfill.drawfill(_g, zbody.vt_atama_ue, zbody.vt_tuno_re,    0, 5, 0, nftcatama1, _futosa, 0)
		qfill.drawfill(_g, zbody.vt_footue_re, zbody.vt_foot_sita, 0, 5, 0, nftcatama2, _futosa, 0)


		// qfill.drawfill(_g, zbody.vt_atama_ue, zbody.vt_tuno_re,    0, 5, 0, "#5542a391", _futosa, 0)
		// qfill.drawfill(_g, zbody.vt_footue_re, zbody.vt_foot_sita, 0, 5, 0, "#5542a391", _futosa, 0)


qfill.drawfill(_g, this.vt_bgue, this.vt_bgsita,    .98, 121, .98, qb.colrndm(1), 1.2, .5,0, 1)		
	}



}