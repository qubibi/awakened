class Butai {

	constructor() {
		this.kou;
		this.kouzu_ini= [
			{ x: -500,	y: -500 },	{ x:	nftkouzux, 	y:	-500 },	{ x:	500,	y:	-500 },
			{ x: -500,	y: -400 },	{ x:	nftkouzux,		y:	-400 },	{ x:	500,	y:	-400 },
			{ x: -500,	y: 0	},  	{ x:	nftkouzux,		y:	0 },		{ x:	500,	y:	0 },
			{ x: -500,	y: 400 },	{ x:	nftkouzux,		y:	400 },	{ x:	500,	y:	400 },
			{ x: -500,	y: 500 },	{ x:	nftkouzux, 	y:	500 },	{ x:	500,	y:	500 }
		];

		this.kkou = new Kouzu(this.kouzu_ini);		
		this.koup = this.kkou.getPoints()
		this.zure_kouzux = 200
		this.buwansc = 1000;
		this.buwansctgt = 1000;
		this.buwanscynyn = 0;
		this.one = 0;
		this.onetgt = 0;
		this.oneynyn = 0;
		this.migimevnuru = 0;

	}
	inipara() {
		this.f_kouzuef()
	}

f_GETKP(parentIndex, relativeX, relativeY, isRelative = false) {
    const basePoint = this.kou[parentIndex];
    // 境界チェック用の位置情報
    const col = parentIndex % 3;  // 0:左端, 1:中央, 2:右端
    const row = Math.floor(parentIndex / 3);  // 0:上端, 1-3:中央, 4:下端

    // 右の親点との距離を計算
    let rightPoint;
    if (col === 2 && relativeX > 0) {
        // 右端で右方向の場合、左側の親との距離を使用
        rightPoint = this.kou[parentIndex - 1];
    } else if (col === 0 && relativeX < 0) {
        // 左端で左方向の場合、右側の親との距離を使用
        rightPoint = this.kou[parentIndex + 1];
    } else {
        // 通常のケース
        rightPoint = (col === 2) 
            ? this.kou[parentIndex - 1] 
            : this.kou[parentIndex + 1];
    }
    const unitX = Math.abs(rightPoint.x - basePoint.x) / 3;

    // 下の親点との距離を計算
    let bottomPoint;
    if (row === 4 && relativeY > 0) {
        // 下端で下方向の場合、上の親との距離を使用
        bottomPoint = this.kou[parentIndex - 3];
    } else if (row === 0 && relativeY < 0) {
        // 上端で上方向の場合、下の親との距離を使用
        bottomPoint = this.kou[parentIndex + 3];
    } else {
        // 通常のケース
        bottomPoint = (row === 4 || relativeY < 0)
            ? this.kou[parentIndex - 3]  // 最下段 または マイナス方向の場合は上の親点
            : this.kou[parentIndex + 3]; // それ以外は下の親点
    }
    const unitY = Math.abs(bottomPoint.y - basePoint.y) / 3;

    const x = basePoint.x + (unitX * relativeX);
    const y = basePoint.y + (unitY * relativeY);
    
    return isRelative
        ? { x: x - basePoint.x, y: y - basePoint.y }
        : { x, y };
}


	f_reset_fromnyu() {
		this.kkou.f_newPositions(this.kkouu_ini)
	}

	f_kouzuef() {

		this.kkou.kouzuef()
		this.kou = this.kkou.getPoints()


		let _scmagx = 0.6 + nnyu.migimev_re*0.4
		let _x = 170 +nnyu.migimev_re*-160 + nnyu.migimev*(-100*(1-nnyu.asiv_re))
		// let _x = 200 +nnyu.migimev_re*-200
		this.zure_kouzux = _x
		const _kouzuscmag1040 = 1080+nftsaigozoomout
		let _kouzuscmag = _kouzuscmag1040 + qb.clamp(tten.cc_all*2,0,300)
		

		this.kou = qvert.shiftScaleXY(this.kou, gowh.w/(_kouzuscmag*_scmagx), gowh.h/_kouzuscmag1040, 5, _x,   22)

// this.kou = qvert.shiftScaleXY(this.kou, gowh.w/(1999), gowh.h/1999, 0, 0,0)


		let _mag = nnyu.omag_33_100_norm

		if (nnyu.tunov>0) {
			this.kkou.f_setpoint(1, 0, -150*nnyu.tunov)
			this.kkou.f_setpoint(0, 0, -70*nnyu.tunov)
			this.kkou.f_setpoint(2, 0, -70*nnyu.tunov)
			this.kkou.f_setpoint(6, -nnyu.dragmx_re_uragaeri*.3, (250+-nnyu.dragmx_re_uragaeri*.22)*nnyu.tunov)
			this.kkou.f_setpoint(7, nnyu.dragmx_re_uragaeri, 300*nnyu.tunov)
			this.kkou.f_setpoint(8, -nnyu.dragmx_re_uragaeri*.3, (250+nnyu.dragmx_re_uragaeri*.22)*nnyu.tunov)
			this.kkou.f_setpoint(10, nnyu.dragmx_re_uragaeri*.5, 100*nnyu.tunov)
			this.kkou.f_setpoint(3, 0, 450*nnyu.tunov)
			this.kkou.f_setpoint(4, nnyu.dragmx_re_uragaeri*.5, 550*nnyu.tunov)
			this.kkou.f_setpoint(5, 0, 450*nnyu.tunov)
		} else {

			this.one += this.oneynyn = ( this.oneynyn + ( this.onetgt - this.one ) * 0.69 ) * 0.5; 
			let _kutizoom = -171*nnyu.omag_33_66_norm
			// if (tten.hajimete_kuti_and_dontmouseup_hajimete) _kutizoom = 0;
			

			// console.log();
			this.kkou.f_setpoint(1, 0, 30*_mag  +_kutizoom )
			this.kkou.f_setpoint(0, 0, 30*_mag  +_kutizoom)
			this.kkou.f_setpoint(2, 0, 30*_mag  +_kutizoom)
			this.kkou.f_setpoint(3, 0, -30*_mag )
			this.kkou.f_setpoint(4, 0, -20*_mag )
			this.kkou.f_setpoint(5, 0, -50*_mag )
			this.kkou.f_setpoint(6, 32*(nnyu.ocv*(1-nnyu.migimev_re))+  -nnyu.dragmx_re_uragaeri* .3, -(300+-nnyu.dragmx_re*0.22)*_mag + _kutizoom)
			this.kkou.f_setpoint(7, 32*(nnyu.ocv*(1-nnyu.migimev_re))+  nnyu.dragmx_re_uragaeri*  1.3,     -500*_mag  -50*nnyu.omag_33_66_norm+_kutizoom)
			this.kkou.f_setpoint(8, 32*(nnyu.ocv*(1-nnyu.migimev_re))+  -nnyu.dragmx_re_uragaeri* .3, -(300+nnyu.dragmx_re*0.22)*_mag+ _kutizoom)


			this.kkou.f_setpoint(10, 64*(nnyu.ocv*(1-nnyu.migimev_re))+ nnyu.dragmx_re*0.77, 150*_mag + -_kutizoom)
			// this.kkou.f_setpoint(10, nnyu.dragmx_re*0.5, 150*_mag + -_kutizoom)
		}
	}

	f_ef() {
		// g_room.background("#fff")

		this.f_kouzuef()

		zbody.f_ef()
		zeye_hida.f_ef()
		zeye_migi.f_ef()
		zkuti.f_ef()
		zkurome.f_ef()

		// g_room.background("#eee")
		zeye_migi.f_efdraw(g_room)
		zeye_hida.f_efdraw(g_room)
		zkuti.f_efdraw(g_room)


		zbody.f_efdraw(g_room)
		



		// g_room.stroke(255, 0, 0);
		// g_room.strokeWeight(10);
		// g_room.noFill()
		// g_room.push();
		// for (let row = 0; row < 5; row++) {
		// 	g_room.beginShape();
		// 	for (let col = 0; col < 3; col++) {
		// 	let index = row * 3 + col;
		// 	g_room.vertex(this.kou[index].x, this.kou[index].y);
		// 	}
		// 	g_room.endShape();
		// }
		// for (let col = 0; col < 3; col++) {
		// 	g_room.beginShape();
		// 	for (let row = 0; row < 5; row++) {
		// 	let index = row * 3 + col;
		// 	g_room.vertex(this.kou[index].x, this.kou[index].y);
		// 	}
		// 	g_room.endShape();
		// }
	}

}




