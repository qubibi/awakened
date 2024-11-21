
class Z_kuti {
	constructor() {
		this.vt_kuti;
		this.vt_kuti_re;
		this.vt_kuti_reynyn;
		this.ynynspd = .2
		this.aptw_kuti=[
			{ x: 0, 		y: 0,      	ctr1x: 0, ctr1y: 0, ctr2x: 0, ctr2y: 0  },
			{ x: 0,   	y: 0,    		ctr1x: 0, ctr1y: 0, ctr2x: 0, ctr2y: 0  },
			{ x: 0, 		y: 0, 			ctr1x: 0, ctr1y: 0, ctr2x: 0, ctr2y: 0  },
			{ x: 0, 		y: 0, 			ctr1x: 0, ctr1y: 0, ctr2x: 0, ctr2y: 0  },
			{ x: 0, 		y: 0, 			ctr1x: 0, ctr1y: 0, ctr2x: 0, ctr2y: 0  }
		];
		this.namicc = 0;
		
	}
	inipara () {
		this.f_shape();
		this.vt_kuti = qvert.beje_vert2(  this.ap_gitai_kutimae, [15,15,15,15])
		this.vt_kuti_re = structuredClone(this.vt_kuti);
		this.vt_kuti_reynyn = structuredClone(this.vt_kuti);
	}


	f_shape() {
		let testtest = 0;
		if (nftmonster) testtest = (remone*4)*nnyu.asiv_re

		let adjx = -bbut.kou[6].x/3
		let closey = bbut.kou[10].y/2
		let r1 = remone*1;
		let r2 = remone*6;

		// 3 zenkai
		let _p4 = bbut.f_GETKP(6, 0, -0.1);
		let _p8 = bbut.f_GETKP(7, 0, -0.1);
		let _p6 = bbut.f_GETKP(8, 0, -0.8);
		let _p2 = bbut.f_GETKP(7, 0, -0.1);
		r1 = r2 = 0
		r2 = remone*2
		this.ap_gitai_kutimae = [
			{ x: _p4.x, 		y: _p4.y,      	ctr1x: 0, ctr1y: 0, ctr2x: 0, ctr2y: -r1  },
			{ x: _p8.x,   		y: _p8.y,    		ctr1x: -r2, ctr1y: 0, ctr2x: r2, ctr2y: 0  },
			{ x: _p6.x, 		y: _p6.y, 			ctr1x: 0, ctr1y: -r1, ctr2x: 0, ctr2y: r1  },
			{ x: _p2.x, 		y: _p2.y, 			ctr1x: r2, ctr1y: 0, ctr2x: -r2, ctr2y: 0  },
			{ x: _p4.x, 		y: _p4.y, 			ctr1x: 0, ctr1y: r1, ctr2x: 0, ctr2y: 0  }
		];
		_p4 = bbut.f_GETKP(9,    1+nftskuti1x,-1.5+nftskuti1y2);
		_p8 = bbut.f_GETKP(7,0,  1.4+nftskuti1y);
		_p6 = bbut.f_GETKP(11, -1-+nftskuti1x, -1.5+nftskuti1y2);
		_p2 = bbut.f_GETKP(10,0,-1.4+nftskuti1y);
		r1 = remone*1;
		r2 = bbut.f_GETKP(6, 1.5, 0, true).x*1.33;
		this.ap_kuti_close = [
			{ x: _p4.x, 		y: _p4.y-testtest,      	ctr1x: 0, ctr1y: 0, ctr2x: 0, ctr2y: -r1  },
			{ x: _p8.x,   		y: _p8.y-testtest,    		ctr1x: -r2, ctr1y: 0, ctr2x: r2, ctr2y: 0  },
			{ x: _p6.x, 		y: _p6.y-testtest, 			ctr1x: 0, ctr1y: -r1, ctr2x: 0, ctr2y: r1  },
			{ x: _p2.x, 		y: _p2.y-testtest, 			ctr1x: r2, ctr1y: 0, ctr2x: -r2, ctr2y: 0  },
			{ x: _p4.x, 		y: _p4.y-testtest, 			ctr1x: 0, ctr1y: r1, ctr2x: 0, ctr2y: 0  }
		];
		//3 zenkai
		_p8 = bbut.f_GETKP(7, 0, 0.40);
		_p2 = bbut.f_GETKP(10, 0, -0.3);


		this.ap_kuti_open = [
			{ x: _p4.x+remone, 	y: _p4.y,      	ctr1x: 0, ctr1y: 0, ctr2x: 0, ctr2y: -r1  },
			{ x: _p8.x,   		y: _p8.y, 		ctr1x: -r2, ctr1y: 0, ctr2x: r2, ctr2y: 0  },
			{ x: _p6.x-+remone, 	y: _p6.y, 			ctr1x: 0, ctr1y: -r1, ctr2x: 0, ctr2y: r1  },
			{ x: _p2.x, 		y: _p2.y, 			ctr1x: r2, ctr1y: 0, ctr2x: -r2, ctr2y: 0  },
			{ x: _p4.x+remone, 	y: _p4.y, 			ctr1x: 0, ctr1y: r1, ctr2x: 0, ctr2y: 0  }
		];


	}
	f_ef() {
		this.f_shape()
		
		let _mag;
		if (tten.face.kuti == true) { //基本はこれ
		this.ynynspd += (0.7-this.ynynspd)/7
			_mag = nnyu.omag_66_100_norm
			this.aptw_kuti = qb.tweenArrays([this.ap_kuti_close, this.ap_kuti_open], _mag)
		} else { // false はじめてのモーフィング的なところの為の処理、目を閉じてる風＞口を閉じてる風＞途中でkuti true
			_mag = nnyu.omag_forkutimaeA_norm
			this.aptw_kuti = qb.tweenArrays([this.ap_gitai_kutimae,this.ap_kuti_close], _mag)
			if (nnyu.ocv>0.66) {
				tten.f_check_hajimetekuti()
				
			}
		}
		
		this.vt_kuti = qvert.beje_vert2(  this.aptw_kuti, [15,15,15,15])
		

	}
	f_efdraw(_g) {
		let _sc_kutimae = .5 + nnyu.migimev_re*0.5
		let _x_kutimae = (bbut.f_GETKP(10, -1.5, 0).x + -bbut.zure_kouzux/2)*(1-nnyu.migimev_re);


		const _vt_kutire = qvert.shiftScaleXY(this.vt_kuti, _sc_kutimae, 1, 0, _x_kutimae, 0)

			const yama = nftkutimotionyama;
			const leng = 44;
			const ookisa = .3
			
		this.vt_kuti_re.forEach((_me, i) => {
			

			let _sin = (Math.sin(yama * Math.PI * (i / leng)) + 1) * ookisa;
			let _sin2 = (Math.sin((yama*2) * Math.PI * (i / leng)) + 1) * nftkutimotionguchagucha;
			let _sin2x = _sin2*nftkutimotionsin2
			if (is_skiplast) _sin2 = (Math.sin((yama*2) * Math.PI * (i / leng)) + 1) * is_skiplast_kutiguchagucha;
			

			_me.x += this.vt_kuti_reynyn[i].x = ( this.vt_kuti_reynyn[i].x + ( _vt_kutire[i].x - _me.x ) * (this.ynynspd+_sin) )* (0.5+_sin2x); 
			if (nftkutihenoji) {
				let _nami = Math.sin(2 * Math.PI * ((i / 53) * -5 ));
				_me.y += this.vt_kuti_reynyn[i].y = ( this.vt_kuti_reynyn[i].y + ( _vt_kutire[i].y+_nami*20 - _me.y ) * (this.ynynspd+_sin) )* (0.5+_sin2); 
			} else {
				// _me.y += this.vt_kuti_reynyn[i].y = ( this.vt_kuti_reynyn[i].y + ( _vt_kutire[i].y - _me.y ) * (.5) )* (0.5); 
				_me.y += this.vt_kuti_reynyn[i].y = ( this.vt_kuti_reynyn[i].y + ( _vt_kutire[i].y - _me.y ) * (this.ynynspd+_sin) )* (0.5+_sin2); 

			}
			
		});

// this.namicc += 0.1	

		// let _alpha = 1
		// if (tten.face.kuti == false) _alpha = nnyu.omag_forkutimaeB_norm
		// qline.drawline(_g, this.vt_kuti_re, 1, true, remone*(.1*_alpha), "#00f", true, "#fff")

	}
}

