class Snoto {

	// global hensu info
	// inAudioContext
	// otomag_mp3 >> mp3kei zentai no onryo teshigawara kanri
	// otomag_gen >> genkei zentai no onryo teshigawara kanri
	// otofiles.hogehoge >>> otofiles ni load sareta mono wo syutoku dekiru
	// openclosev >>> 0 open  > 0.33 close > 0.66 openstart > 1 open
	// speed_ocv >>> openclosev ga hayai to agaru 0-1
	// is_utatteta_sakkimade >>> mega aita ato ni false ni naru
	// kuti_shape >>> ????
	// nftrndm_foroto >>> mint sitara kotei 0>90%, 1-10 1% zutu 
	constructor() {
		this.is_setupdone = false
		this.is_start = false
		this.isPlaying = false;

		this.sgen = new Sgen();		
		//example
		this.maxSaaonVol = otomag_mp3 * 0.8;//0.8;
		this.saaonCurrentVolume = 0;	
		this.saaonTargetVolume = 0;
		this.saaonVolumeLerpFactor = 0.036;

		// Background
        this.background = null;
		this.maxBackgroundVolume = otomag_mp3 *1 ;//0.8;// // Maximum volume for background
        this.backgroundCurrentVolume = 0; //init
        this.backgroundTargetVolume = 0; // init
        this.backgroundVolumeLerpFactor = 0.01; 
		this.backgroundVolumeFluctuationAmount = 0.7;

		this.backgroundCurrentPitch = 1;
		this.backgroundTargetPitch = 1;
		this.backgroundPitchLerpFactor = 0.08;
		this.tapeIsPlaying = true;
		

		this.meCloseCount = 0;  

		this.isTapePlaying = false;
		this.nextTapeStartTime = 0;
		this.currentPlayEndTime = 0;
		
		this.tapeStartInterval = {
			min: 20000,   
			max: 40000  
		};
		this.playDuration = {
			min: 5000,   
			max: 10000    
		};

		//SE
		this.maxSEVolume = otomag_mp3 * 1;


		this.noiseValue = 0;
		this.noiseOffset = 0;
		this.noiseIncrement = 0.005;

		// Add new property to track last played move sound
		this.lastPlayedMoveSound = null;
		this.maxMoveVolume = otomag_mp3 * .97;
		if (!is_mobile) this.maxMoveVolume = otomag_mp3 * 1;
		// Add new properties for motion sound control
		this.lastMotionSoundTime = 0;
		this.motionSoundBaseInterval = 20;    // Base interval
		this.motionSoundMinInterval = 30;      // Minimum interval
		this.motionSoundMaxInterval = 50;     // Maximum interval
		this.isPlayingMotionSounds = false;

		// Add mouse movement tracking
		this.lastMouseX = 0;
		this.lastMouseY = 0;
		this.mouseSpeed = 0;

		// Add Ssyn instance
		this.ssyn = new Ssyn();

		this.cc_hindo = 0;
		this.is_hindodown = false;
		this.cc_hindo_tgt = 222;

		// music2 control
		this.music2IntervalRange = {
			min: 10000,    // Minimum interval (10 seconds)
			max: 20000     // Maximum interval (16 seconds)
		};
		this.music2NextPlayTime = 0;  // Next scheduled play time for music2
		this.maxMusic2Volume = otomag_mp3 * 0.7;//1.2;//0.8;// // Maximum volume for music
		this.music2CurrentVolume = 0; //init
        this.music2TargetVolume = 0; // init
        this.music2VolumeLerpFactor = 0.05; 
		this.music2_rate = 1;

		this.tapeStartTimeout = null;
		this.tapeStopTimeout = null;

		this.kuti_aiteru = false;
		this.awakeSnoto = false;
	}

	setup2() { // audiocontext ga bujini ugoitara yobareru

		if (!this.is_setupdone) {

		
			this.is_setupdone = true
			mp3s.saaon.loop();
			this.saaonTargetVolume = this.maxSaaonVol;
			// console.log(inAudioContext, "snoto_setup");


			this.sgen.setup();

			this.ssyn.setup();
			
			// Apply preset after initialization
			if (voicePreset) {
				voicePreset.applyPreset(nftrndm_otoA); 
			}
			if (singPreset) {
				singPreset.applyPreset(nftrndm_otoB); 
			}
		}

	}



	f_ef() {
	
		this.sgen.f_ef()

		this.noiseValue = noise(this.noiseOffset);
		this.noiseOffset += this.noiseIncrement;
		// this.noiseValue2 = noise(this.noiseOffset2);
		// this.noiseOffset2 += this.noiseIncrement2;
		// let mappedNoise = map(this.noiseValue, 0, 1, -1, 1);
		
		this.saaonCurrentVolume = lerp(this.saaonCurrentVolume, this.saaonTargetVolume, this.saaonVolumeLerpFactor);
		mp3s.saaonGain.amp(this.saaonCurrentVolume)
		// console.log("this.saaonCurrentVolume", this.saaonCurrentVolume.toFixed(1));

		
		this.fluctuatedBackgroundVolume = this.backgroundVolumeFluctuationAmount * this.noiseValue;
		this.backgroundCurrentVolume = Math.max(0, lerp(this.backgroundCurrentVolume, this.backgroundTargetVolume - this.fluctuatedBackgroundVolume, this.backgroundVolumeLerpFactor));
		mp3s.backgroundGain.amp(this.backgroundCurrentVolume);
		// console.log("this.backgroundTargetVolume", this.backgroundTargetVolume);

		this.backgroundCurrentPitch = lerp(this.backgroundCurrentPitch, this.backgroundTargetPitch, this.backgroundPitchLerpFactor);
		mp3s.background.rate(this.backgroundCurrentPitch);

		this.music2CurrentVolume = lerp(this.music2CurrentVolume, this.music2TargetVolume, this.music2VolumeLerpFactor);
		mp3s.music2Gain.amp(this.music2CurrentVolume);

		// Tape control logic
		const currentTimeSnoto = millis();
		
		if(this.awakeSnoto) {
			if(!this.is_hindodown) {
				if(!this.kuti_aiteru) {
					if (!this.isTapePlaying && currentTimeSnoto > this.nextTapeStartTime) {
						if (this.tapeStartTimeout === null) {
							this.tapeStartTimeout = setTimeout(() => {
							this.tapeStart();
								this.tapeStartTimeout = null;
							}, 0);
						}
					}
				}
			}
		}


		if (this.isTapePlaying && currentTimeSnoto > this.currentPlayEndTime) {
			if (this.tapeStopTimeout === null) {
				this.tapeStopTimeout = setTimeout(() => {
					this.tapeStop();
					this.tapeStopTimeout = null;
				}, 0);
			}
		}


		this.updateMoveSounds();

		this.check_hindo(); 

		if(this.awakeSnoto) {
			this.updateMusic2();

		}

		this.ssyn.f_ef();

		if(this.is_hindodown) {
			this.saaonVolumeLerpFactor = 0.005;
			this.saaonTargetVolume = 0;

			this.music2TargetVolume = 0.0;

		}else{
			this.saaonVolumeLerpFactor = 0.026;
			this.saaonTargetVolume = this.maxSaaonVol;

			this.music2TargetVolume = this.maxMusic2Volume;
		}

			
	}

	check_hindo() {
		this.cc_hindo += 1;
		if(this.cc_hindo >= this.cc_hindo_tgt) {
			this.is_hindodown = true;
			// console.log("is_hindodown", this.is_hindodown);
		}
	}


	kuti_close_justnow() {
		this.sgen.stopVowel();
		this.kuti_aiteru = false;
	}

	kuti_open_justnow() {
		this.sgen.openMouse();
		this.kuti_aiteru = true;
	}

	me_open_justnow() {
		// console.log("me_open_justnow");
		let _rnd = random(0 , 1)*random(0 , 1)
		if ( Math.random()< 0.33 ) _rnd = 0;
		mp3s.seGain.amp(this.maxSEVolume* random(0 , 1)   );
		mp3s.se1.rate(random(0.8,1.3));
		mp3s.se1.amp(_rnd)
		mp3s.se1.play();


		this.backgroundTargetVolume = this.maxBackgroundVolume;
		
		
		if (this.meCloseCount === 1) {
			return;
		}
		this.cc_hindo = 0;
		this.is_hindodown = false;
		// console.log("is_hindodown", this.is_hindodown);
	}

	me_close_justnow() {
		let _rnd = random(0 , 1)*random(0 , 1)
		if ( Math.random()< 0.77 ) _rnd = 0;

		this.meCloseCount++;
		mp3s.seGain.amp(this.maxSEVolume*random(0,1));
		mp3s.se2.rate(random(1,1.8));
		mp3s.se2.amp(_rnd)
		mp3s.se2.play();
		
		if (this.meCloseCount === 1) {
			return;
		}

		this.backgroundVolumeLerpFactor = 0.1;
		this.backgroundTargetVolume = 0;

		this.cc_hindo = 0;
		this.is_hindodown = false;
		// console.log("is_hindodown", this.is_hindodown);
	}


	tapeStop() {
		// console.log("tapeStop");
		if (!this.isTapePlaying) return;
		
		this.isTapePlaying = false;
		const stopDuration = 3000;
		
		// Add safety check for background sound
		if (mp3s.background && mp3s.background.isPlaying()) {
			// Schedule the pause
			setTimeout(() => {
				mp3s.background.pause();
			}, stopDuration);
		}
		
		this.backgroundPitchLerpFactor = random(0.04, 0.7);
		this.backgroundTargetPitch = 0;
		this.backgroundVolumeLerpFactor = 0.04;
		this.backgroundTargetVolume = 0;

		if (this.tapeStartTimeout) {
			clearTimeout(this.tapeStartTimeout);
			this.tapeStartTimeout = null;
		}
	}

	tapeStart() {
		
		if (this.isTapePlaying) return;  
		
		this.isTapePlaying = true;

		if (mp3s.background && !mp3s.background.isPlaying()) {
			mp3s.background.loop();
		}
		
		this.backgroundPitchLerpFactor = random(0.04, 0.7);
		this.backgroundTargetPitch = random([0.75, 1, 1.25]);
		this.backgroundVolumeLerpFactor = 0.01;
		this.backgroundTargetVolume = this.maxBackgroundVolume;
		
		// Set playback duration
		const playDuration = random(this.playDuration.min, this.playDuration.max);
		this.currentPlayEndTime = millis() + playDuration;
		
		// Schedule next start time
		const nextInterval = random(this.tapeStartInterval.min, this.tapeStartInterval.max);
		this.nextTapeStartTime = millis() + nextInterval;
		// console.log("tapeStart nextInterval", nextInterval);

		if (this.tapeStopTimeout) {
			clearTimeout(this.tapeStopTimeout);
			this.tapeStopTimeout = null;
		}
	}

	motion_stop_justnow() {
		// console.log("motion_stop_justnow");
		this.cc_hindo = 0;
		this.is_hindodown = false;
		// console.log("is_hindodown", this.is_hindodown);

	}

	motion_play_justnow() {
		this.cc_hindo = 0;
		this.is_hindodown = false;
		// console.log("is_hindodown", this.is_hindodown);

	}
	

	// Add new function
	playRandomMoveSound() {
		// Create array of available sounds
		const moveSounds = ['move1', 'move2', 'move3', 'move4', 'move5'];
		
		// Filter out last played sound
		const availableSounds = moveSounds.filter(sound => sound !== this.lastPlayedMoveSound);
		
		// Select random sound from filtered list
		const selectedSound = availableSounds[Math.floor(Math.random() * availableSounds.length)];



		// Play the sound
		mp3s.moveGain.amp( this.maxMoveVolume * random(0.5, 1.5)*nnyu.justpressNega );
		mp3s[selectedSound].rate(random(0.5,1.5));
		mp3s[selectedSound].play();
		
		// Update last played sound
		this.lastPlayedMoveSound = selectedSound;
	}

	updateMoveSounds() {
		// Calculate mouse movement speed
		const dx = nnyu.dragmx - this.lastMouseX;
		const dy = nnyu.dragmy - this.lastMouseY;

		const currentSpeed = Math.sqrt(dx * dx + dy * dy);
		this.mouseSpeed = lerp(this.mouseSpeed, currentSpeed, 0.4);
		// console.log(this.mouseSpeed);
		
		// Update last mouse position
		this.lastMouseX = nnyu.dragmx;
		this.lastMouseY = nnyu.dragmy;

		// Calculate dynamic interval using both noise and mouse speed
		// const mouseSpeedFactor = map(
		// 	this.mouseSpeed,
		// 	0, 50,  // Adjust these values based on typical mouse speed range
		// 	3.5, 0.05   // Speed multiplier range (slower = 1x, faster = 0.3x)
		// );
		
		const noiseInterval = map(
			this.noiseValue,
			0.5, 1,
			this.motionSoundMinInterval,
			this.motionSoundMaxInterval
		);
		let _msd = qb.mppng(this.mouseSpeed, 0,30,  5,  1.6)
		if (!is_mobile) _msd = qb.mppng(this.mouseSpeed, 0,60,  5,  1.6)
		const dynamicInterval = (noiseInterval) * _msd;
		// console.log(dynamicInterval);
		// Check if it's time to play next motion sound
		if (this.isPlayingMotionSounds && 
			millis() - this.lastMotionSoundTime > dynamicInterval) {
			this.playRandomMoveSound();
			this.lastMotionSoundTime = millis();
		}

		// Motion sound state control
		if (cc_motion > 0 && !this.isPlayingMotionSounds) {
			this.isPlayingMotionSounds = true;
			this.lastMotionSoundTime = millis();
		} else if (cc_motion <= 0 && this.isPlayingMotionSounds) {
			this.isPlayingMotionSounds = false;
		}
	}
	
	f_startonly() {
		if (!this.is_start) {
			this.is_start = true;
			if(!this.ssyn.isAutoPlaying){
				// Add 1 second delay before starting auto play
				setTimeout(() => {
					this.ssyn.startAutoPlay();
					// console.log("ssyn startAutoPlay");
				}, 500);
			}
			setTimeout(() => {
				// this.backgroundTargetVolume = this.maxBackgroundVolume;
			}, 5000);

			setTimeout(() => {
				this.awakeSnoto = true;
			}, 10000);

			this.saaonTargetVolume = 0;
			this.backgroundTargetVolume = 0;
		}
	}


	// New method for music2 control
	updateMusic2() {
		const currentSystemTime = millis();
		
		if (currentSystemTime >= this.music2NextPlayTime) {			
			mp3s.music2Gain.amp(this.music2CurrentVolume);
			const snoto_rnd = random([0.25, 0.375,0.5,, 1])
			mp3s.music2.rate(snoto_rnd);  // Use random to select one rate
			// console.log("snoto_rnd", snoto_rnd);
			setTimeout(() => {
				mp3s.music2.play();
			}, 1000);
			// Schedule next play time
			const nextInterval = random(this.music2IntervalRange.min, this.music2IntervalRange.max);
			// console.log("music2 nextInterval", nextInterval);
			this.music2NextPlayTime = currentSystemTime + nextInterval;
		}
	}

}



