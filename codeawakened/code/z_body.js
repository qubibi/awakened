
class Z_body {
	constructor() {
		this.vt_atama_ue;
		this.vt_atama_sita;
		this.vt_foot_ue;
		this.vt_foot_sita;
		this.tunov_re = 0;
		this.vt_tuno_re;
		this.vt_tuno_reynyn;
		this.vt_footue_re;
		this.vt_footue_reynyn;
		this.ynynspd = .7
		this.ap_atama_ue;
		this.ap_atama_sita_pre
		this.ap_atama_sita
		this.ap_foot_ue1
		this.ap_foot_ue2
		this.ap_foot_sita
		this.para = new Xpara_kao(this);
	}
	inipara () {
		this.f_shape();
		this.vt_tuno_re = qvert.beje_vert2(  this.ap_atama_sita, [3,6,  4,4,18,4,4,  6,3])
		this.vt_tuno_reynyn = structuredClone(this.vt_tuno_re);
		this.vt_footue_re = qvert.beje_vert2(  this.ap_foot_ue1, [3,5, 9,6,6,9, 5,3])
		this.vt_footue_reynyn = structuredClone(this.vt_footue_re);
		this.vt_foot_sita = qvert.straight_vert2(this.ap_foot_sita,[44])
	}

	f_shape() {
		this.para.f_shape()

	}

	
	f_ef() {

		this.tunov_re = qb.updateLockedValue(nnyu.tunov, this.tunov_re)
		
		if (this.tunov_re>0.6) tten.face.tuno = true
		this.f_shape();
		this.vt_atama_ue = qvert.straight_vert2(this.ap_atama_ue,[52])
		const _tuno = qb.tweenArrays([this.ap_atama_sita_pre, this.ap_atama_sita], this.tunov_re )
		this.vt_atama_sita = qvert.beje_vert2(_tuno, [3,6,  4,4,18,4,4,  6,3])


		const _footshape = qb.tweenArrays([this.ap_foot_ue1, this.ap_foot_ue2], nnyu.asiv_re )
		
		this.vt_foot_ue = qvert.beje_vert2(_footshape,[3,5, 9,6,6,9, 5,3])
		this.vt_foot_sita = qvert.straight_vert2(this.ap_foot_sita,[46])

		
	}

	f_efdraw(_g) {
		let _atama_sita_sc;
		let _atama_sita_x;
		_atama_sita_x= (bbut.f_GETKP(3,1.5,0).x + -bbut.zure_kouzux/2)*(1-nnyu.migimev_re)  ;
		_atama_sita_sc= .5 + nnyu.migimev_re*0.5
		const _vt_atama_sita = qvert.shiftScaleXY(this.vt_atama_sita, _atama_sita_sc, 1, 0, _atama_sita_x, 0);


		let yama = 3;
		let leng = 44;
		const ookisa = .9
		this.vt_tuno_re.forEach((_me, i) => {
			let _sin = (Math.sin(yama * Math.PI * (i / leng)) + 1) * ookisa -0.1;
				// let _sin = (-Math.sin(yama * Math.PI * (i / leng)) + 1) * ookisa;
			_me.x += this.vt_tuno_reynyn[i].x = ( this.vt_tuno_reynyn[i].x + ( _vt_atama_sita[i].x - _me.x ) * (this.ynynspd+_sin) )* (0.5); 
			_me.y += this.vt_tuno_reynyn[i].y = ( this.vt_tuno_reynyn[i].y + ( _vt_atama_sita[i].y - _me.y ) * (this.ynynspd+_sin) )* (0.5); 
		});
		leng = 46;
		yama = 3;
		this.vt_footue_re.forEach((_me, i) => {
			let _sin = (Math.sin(yama * Math.PI * (i / leng)) + 1) * ookisa-0.1;
			_me.x += this.vt_footue_reynyn[i].x = ( this.vt_footue_reynyn[i].x + ( this.vt_foot_ue[i].x - _me.x ) * (this.ynynspd+_sin) )* (0.55); 
			_me.y += this.vt_footue_reynyn[i].y = ( this.vt_footue_reynyn[i].y + ( this.vt_foot_ue[i].y - _me.y ) * (this.ynynspd+_sin) )* (0.55); 
		});



		// qline.drawdot(_g, this.vt_atama_ue)
		// qline.drawline(_g, this.vt_atama_ue,0,true,remone*5,"#00f")
		// qline.drawdot(_g, this.vt_tuno_re)
		// qline.drawline(_g,this.vt_tuno_re, 0,true,remone*5,"#00f")
		// qline.drawdot(_g, this.vt_footue_re)
		// qline.drawline(_g, this.vt_footue_re, 0,true,remone*5,"#00f")
		// qline.drawdot(_g, this.vt_foot_sita)
		// qline.drawline(_g, this.vt_foot_sita,0,true,remone*5,"#00f")
	}
}

