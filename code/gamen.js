class Gamen {
	constructor() {
		this.for_time = 0;
		this.FRAME_START = 21
		this.FRAME_END = 31
if (is_skiplast) {
		this.frames = new Array(this.FRAME_END - this.FRAME_START + 1).fill(null);
		this.mergedImage = createGraphics(gowh.w, gowh.h, WEBGL);
		this.mergedImage.pixelDensity(1.4)
      
}

	}
	f_ef() {
		this.for_time += Math.random()*0.5
		this.for_time %= 360;

		// g_output.shader(shd_su);
		// shd_su.setUniform('tex0', g_room);
		// g_output.rect(0, 0, gowh.w, gowh.h);

			g_output.shader(shd_threshold);
			shd_threshold.setUniform('uTexture', g_room);
			shd_threshold.setUniform('_sepia', nftcsepia);
			shd_threshold.setUniform('_fade', .65);
			shd_threshold.setUniform('_randomRange', .3+qb.rndm(-0.05,0.05));
			shd_threshold.setUniform('_blur1x', 50+qb.rndm(-5,5));
			shd_threshold.setUniform('_blur1y', -50+qb.rndm(-5,5));
			// shd_threshold.setUniform('_radius', 4);
			// shd_threshold.setUniform('_radius', 3.9+qb.rndm(-0.1,0.1));
			shd_threshold.setUniform('_radius', 3.87+qb.rndm(-0.05,0.05));
			// shd_threshold.setUniform('_radius', 3.8+qb.rndm(-0.1,0.1));

			shd_threshold.setUniform('_threshold', qb.rndm(0.47,0.48));
			shd_threshold.setUniform('_time', this.for_time/10);
			if (is_forandroidtaisaku) {
				if (_bg2cmode==2) shd_threshold.setUniform('_noiserange', 0.05+qb.rndm(0.14,0.17));
				else shd_threshold.setUniform('_noiserange', 0.15+qb.rndm(0.14,0.17));
			}
			else shd_threshold.setUniform('_noiserange', qb.rndm(0.09,0.11));
			shd_threshold.setUniform('_mixfade', .65);
			g_output.rect(0, 0, gowh.w, gowh.h);



			g_output.shader(shd_blur);
			shd_blur.setUniform('tex0', g_output);
			shd_blur.setUniform('texelSize', [1.0 / gowh.w, 1.0 / gowh.h]);
			if (is_sakasa) shd_blur.setUniform('sakasa', 1.0);
			else shd_blur.setUniform('sakasa', 0.0);
			if (is_forandroidtaisaku) shd_blur.setUniform('blurAmount', qb.rndm(2.0, 3.0));
			else shd_blur.setUniform('blurAmount', qb.rndm(1.0, 2.0));
			g_output.rect(0, 0, gowh.w, gowh.h);


			if (!is_skiplast) {
				image(g_output, 0,0, gowh.w * scaleFactor, gowh.h * scaleFactor);
			} else {
				if (cc < this.FRAME_END) image(g_output, 0,0, gowh.w * scaleFactor, gowh.h * scaleFactor);
			}


if (is_skiplast) {
    if (cc >= this.FRAME_START && cc <= this.FRAME_END) {
        let frameIndex = cc - this.FRAME_START;
        this.frames[frameIndex] = g_output.get(0, 0, gowh.w, gowh.h);
    }

    // フレームの合成処理
    if (this.frames.some(frame => frame !== null)) {
        this.mergedImage.clear();
        this.mergedImage.noTint();  // tintをリセット

        let validFrames = this.frames.filter(frame => frame !== null).length;

        // 最初の有効なフレームを完全不透明で描画
        let firstValidFrame = this.frames.find(frame => frame !== null);
        if (firstValidFrame) {
            this.mergedImage.tint(255, 255);  // 完全不透明
            this.mergedImage.image(firstValidFrame, gowh.w / -2, gowh.h / -2, gowh.w, gowh.h);
        }

        // 残りのフレームをブレンド
        let remainingFrames = this.frames.filter(frame =>
            frame !== null && frame !== firstValidFrame
        );

        remainingFrames.forEach(frame => {
            let alpha = 1.0 / validFrames;
            this.mergedImage.tint(255, alpha * 255);
            this.mergedImage.image(frame, gowh.w / -2, gowh.h / -2, gowh.w, gowh.h);
        });
        this.mergedImage.blendMode(BLEND);





        // 最後のフレームでシャープ処理を適用
        if (cc === this.FRAME_END) {
            this.mergedImage.shader(shd_lastsharp);
            shd_lastsharp.setUniform('tex0', this.mergedImage);
            shd_lastsharp.setUniform('resolution', [gowh.w, gowh.h]);
            this.mergedImage.rect(0, 0, gowh.w, gowh.h);
            // this.mergedImage.resetShader();
				image(this.mergedImage, 0, 0, gowh.w * scaleFactor, gowh.h * scaleFactor);
        }
    }

    
}


	}
}
