class Kouzu {
    constructor(initialPositions = null) {

		// 点の状態を管理する配列
		this.points = [];
		this.target = [];

		// グリッドの設定
		this.COLS_POINTS = 3;
		this.ROWS_POINTS = 5;
		this.TOTAL_POINTS = this.COLS_POINTS * this.ROWS_POINTS;

		// 物理パラメータ
		this.SPRING_K = nftkaoburuburu1;
		// this.NEIGHBOR_K = 0.3;
		// this.DAMPING = 0.61;
		this.DAMPING = Array(15).fill(0).map(() => nftkaoburuburu2 + Math.random() * 0.1);
		this.NEIGHBOR_K = Array(15).fill(0).map(() => 0.3 + Math.random() * 0.1);
		// グリッドの寸法
		this.CANVAS_WIDTH = 1000;
		this.CANVAS_HEIGHT = 1000;
		this.REST_LENGTH_X = this.CANVAS_WIDTH / (this.COLS_POINTS - 1);
		this.REST_LENGTH_Y = this.CANVAS_HEIGHT / (this.ROWS_POINTS - 1);
		this.MIN_DISTANCE = 70;


		// 隣接点の関係を事前計算
		this.neighborCache = new Array(this.TOTAL_POINTS).fill(null).map((_, i) => {
			const x = i % this.COLS_POINTS;
			const y = Math.floor(i / this.COLS_POINTS);
			const neighbors = [];

			if (y > 0) neighbors.push([i - this.COLS_POINTS, true]);
			if (y < this.ROWS_POINTS - 1) neighbors.push([i + this.COLS_POINTS, true]);
			if (x > 0) neighbors.push([i - 1, false]);
			if (x < this.COLS_POINTS - 1) neighbors.push([i + 1, false]);

			return neighbors;
		});
		this.initialPositions = [];
		this.kouzusetup(initialPositions);
	}

	kouzusetup(initialPositions = null) {
		if (initialPositions && initialPositions.length === this.TOTAL_POINTS) {
			// カスタム位置が提供された場合
			for (let i = 0; i < this.TOTAL_POINTS; i++) {
				this.points[i] = {
					x: initialPositions[i].x,
					y: initialPositions[i].y,
					vx: 0,
					vy: 0
				};
				this.target[i] = {
					x: initialPositions[i].x,
					y: initialPositions[i].y
				};
				// 初期位置を保存
				this.initialPositions[i] = {
					x: initialPositions[i].x,
					y: initialPositions[i].y
				};
			}
		} else {
			for (let i = 0; i < this.TOTAL_POINTS; i++) {
				const x = i % this.COLS_POINTS;
				const y = Math.floor(i / this.COLS_POINTS);
				const px = (x / (this.COLS_POINTS - 1) * this.CANVAS_WIDTH) - this.CANVAS_WIDTH / 2;
				const py = (y / (this.ROWS_POINTS - 1) * this.CANVAS_HEIGHT) - this.CANVAS_HEIGHT / 2;

				this.points[i] = { x: px, y: py, vx: 0, vy: 0 };
				this.target[i] = { x: px, y: py };
				// 初期位置を保存
				this.initialPositions[i] = { x: px, y: py };
			}
		}
	}

	kouzuef() {
		this.kouzuupdate() 
	}

	kouzuupdate() {
		for (let i = 0; i < this.TOTAL_POINTS; i++) {
			const point = this.points[i];
			if (point.x === 0) point.x = Math.random()-0.5; 
			if (point.y === 0) point.y = Math.random()-0.5; 


		// 	// ターゲットに向かうスプリング力
			point.vx += (this.target[i].x - point.x) * this.SPRING_K;
			point.vy += (this.target[i].y - point.y) * this.SPRING_K;

		// 	// 隣接点との相互作用
			for (const [j, isVertical] of this.neighborCache[i]) {
				const dx = this.points[j].x - point.x;
				const dy = this.points[j].y - point.y;
				const dist = Math.sqrt(dx * dx + dy * dy);
				const targetLength = isVertical ? this.REST_LENGTH_Y : this.REST_LENGTH_X;
				const force = (dist - targetLength) * this.NEIGHBOR_K[i];

				point.vx += (dx / dist) * force;
				point.vy += (dy / dist) * force;
			}

		// 	// 減衰と位置の更新
			point.vx *= this.DAMPING[i];
			point.vy *= this.DAMPING[i];
			point.x += point.vx;
			point.y += point.vy;
		}
		// // // マウス位置の更新
		// this.points[7].x = 0
		// this.points[7].y = -200

		// // 垂直方向の制約チェック
		for (let i = 0; i < 3; i++) {
			const upperIdx = i + 3;
			const middleIdx = i + 6;
			const lowerIdx = i + 9;

			if (this.points[upperIdx].y >= this.points[middleIdx].y - this.MIN_DISTANCE) {
				this.points[upperIdx].y = this.points[middleIdx].y - this.MIN_DISTANCE;
			}
			if (this.points[lowerIdx].y <= this.points[middleIdx].y + this.MIN_DISTANCE) {
				this.points[lowerIdx].y = this.points[middleIdx].y + this.MIN_DISTANCE;
			}
		}
	}
	
	// 相対位置指定の新しいメソッド
	f_setpoint_relative(_pindex, relativeX, relativeY) {
		if (_pindex >= 0 && _pindex < this.TOTAL_POINTS) {
			const initialPos = this.initialPositions[_pindex];
			this.target[_pindex] = {
				x: initialPos.x + relativeX,
				y: initialPos.y + relativeY
			};
		}
	}

	// 既存の絶対位置指定メソッドは残しておく（名前を変更）
	f_setpoint_absolute(_pindex, newX, newY) {
		if (_pindex >= 0 && _pindex < this.TOTAL_POINTS) {
			this.target[_pindex] = { x: newX, y: newY };
		}
	}

	// 既存のf_setpointメソッドを相対位置指定に変更
	f_setpoint(_pindex, moveX, moveY) {
		this.f_setpoint_relative(_pindex, moveX, moveY);
	}

	gethirituy(_v) {
		let _ret;
		if (_v==1) _ret = this.points[3].y-this.points[0].y
		else if (_v==2) _ret = this.points[6].y-this.points[3].y
		else if (_v==3) _ret = this.points[9].y-this.points[6].y
		else if (_v==4) _ret = this.points[12].y-this.points[9].y
		return _ret
	}

	getPoints() {
		return this.points;
	}


	resetPositions(newPositions) {
    if (newPositions && newPositions.length === this.TOTAL_POINTS) {
        this.kouzusetup(newPositions);
    }
	}
	f_newPositions(newPositions) {
		if (newPositions && newPositions.length === this.TOTAL_POINTS) {
			// 現在の速度を維持したまま、新しい目標位置をセット
			for (let i = 0; i < this.TOTAL_POINTS; i++) {
				this.target[i] = {
					x: newPositions[i].x,
					y: newPositions[i].y
				};
				// 初期位置も更新
				this.initialPositions[i] = {
					x: newPositions[i].x,
					y: newPositions[i].y
				};
			}
		}
	}

}