class VoicePreset {
    constructor() {
        this.presets = {
            low: {
                gen: {
                    vowelVolumeBoost: -0.2,
                    baseMidiNote: 45,
                    vowelF1max: 400,
                },
            },
            normal: {
                gen: {
                    baseMidiNote: 57,
                    vowelF1min: 400,
                },
            },
            high: {
                gen: {
                    baseMidiNote: 69,
                    vowelF1min: 1000,
                    
                },
            },
            ultra: {
                gen: {
                    baseMidiNote: 81,
                },
            },
            tamaki: {
                gen: {
                    baseMidiNote: 57,
                    ikigireFactorMax: 2.8,
                    ikigireFactorMin: 2,
                    vowelVolumeBoost: 0.5,
                },
            },
            beast: {
                gen: {
                    vowelVolumeBoost: -0.2,
                    baseMidiNote: 30,
                    vowelF1max: 1400,
                },
            },
        };
    }

    applyPreset(nftrndm_oto) {
        let selectedPreset;
        if (nftrndm_oto <= 40) { 
            selectedPreset = this.presets.high;
            // console.log('high');    
        } else if (nftrndm_oto <= 65) { 
            selectedPreset = this.presets.normal;
            // console.log('normal');
        } else if (nftrndm_oto <= 85) { 
            selectedPreset = this.presets.low;
            // console.log('low');
        } else if (nftrndm_oto <= 95) {
            selectedPreset = this.presets.tamaki;
            // console.log('tamaki');
        } else {
            selectedPreset = this.presets.beast;
            // console.log('beast');
        }

        this.applyGenSettings(selectedPreset.gen);
    }

    applyGenSettings(settings) {
        if (!ssnoto || !ssnoto.sgen) return;
        
        for (const key in settings) {
            // Check if property exists in sgen
            if (key in ssnoto.sgen) {
                // console.log(`Applying gen setting: ${key} = ${settings[key]}`); // Debug log
                ssnoto.sgen[key] = settings[key];
            } else {
                // console.warn(`Unknown gen setting: ${key}`); // Warning for unknown properties
            }
        }
    }

}

class SingPreset {
    constructor() {
        this.presets = {
            futuu: {
                gen: {
                    formantRandomRange: 300,
                    openCloseSnoto: 0.33,
                }
            },
            umai: {
                gen: {
                    spontaneous: true,
                    vibratoDepth: 20,
                    vibratoRate: 10,
                    volumeVibratoDepth: 0.3,
                    volumeSmoothingFactor: 0.01,
                    pitchSmoothingFactor: 0.36,
                    pitchSmoothingFactorVibrato: 0.85,
                    formantSmoothingFactor: 0.07,
                    pitchNoiseMultiplier: 10,
                    minVowelDuration: 6500,
                    maxVowelDuration: 9500,
                    ikigireProbability: 0,
                    cutVowelProbability: 0,
                    patternProbability: 0,

                    // vowelF1max: 800,
                    vowelVolumeBoost: -0.2,
                    vowelF1resonance: 10,
                    vowelF2resonance: 10,
                    vowelF3resonance: 10,
                }
            },
            heta: {
                gen: {
                    pitchFluctuationDepth: 25,
                    ikigireProbability: 0.9,
                }
            },
            awaya: {
                gen: {
                    melodyMax: 12,
                    minVowelDuration: 6000,
                    maxVowelDuration: 8000,
                    pitchSmoothingFactor: 0.07,
                    pitchSmoothingFactorVibrato: 0.9,
                    vibratoDepth: 40,
                    vibratoRate: 11,
                    volumeVibratoDepth: 0.2,
                    volumeSmoothingFactor: 0.01,
                    ikigireProbability: 0.6,
                    cutVowelProbability: 0.1,

                    vowelF1resonance: 10,
                    vowelF2resonance: 10,
                    vowelF3resonance: 10,

                    pitchEnvInfluenceMax: -5,
                }
            },
            oshaberi: {
                gen: {
                    vowelMaxVolume: 0.8,

                    pitchFluctuationDepth: 25,
                    pitchNoiseMultiplier: 10,
                    pitchSmoothingFactor: 0.5,
                    pitchSmoothingFactorVibrato: 0.1,

                    // pitchEnvInfluenceMax: -36,

                    oshaberi: true,
                    cutVowelProbability: 0.8,
                    cutVowelMinDelay: 100,
                    cutVowelMaxDelay: 400,
                    minVowelDuration: 500,
                    maxVowelDuration: 700,
                    volumeSmoothingFactor: 0.05,
                    ikigireProbability: 0,
                    
                    
                    vowelAttackTime: 0.05,
                    vowelReleaseTime: 0.3,
                    vowelF1resonance: 16,
                    vowelF2resonance: 16,
                    vowelF3resonance: 16,
                    formantUpdateInterval: 1,
                    formantSmoothingFactor: 0.05,//default 0.2 
                    formantRandomRange: 4000,
                }
            },
            // jidou: {
            //     gen: {
            //         melodyMax: 8,
            //         minVowelDuration: 3000,
            //         maxVowelDuration: 5000,
            //         ikigireProbability: 0.5,
            //         cutVowelProbability: 0.2,
            //     }
            // }
        };
    }

    applyPreset(nftrndm_oto) {
        let selectedPreset;
        if  (nftrndm_oto <= 65) { 
            selectedPreset = this.presets.futuu;
            // console.log('futuu');    
        } else if (nftrndm_oto <= 73) { 
            selectedPreset = this.presets.umai;
            // console.log('umai');
        } else if (nftrndm_oto <= 81) {
            selectedPreset = this.presets.heta;
            // console.log('heta');
        } else if (nftrndm_oto <= 89) {
            selectedPreset = this.presets.awaya;
            // console.log('awaya');
        } else {
            selectedPreset = this.presets.oshaberi;
            // console.log('oshaberi');
        }
        // } else {
        //     selectedPreset = this.presets.jidou;
        //     console.log('jidou');
        // }

        if (selectedPreset && selectedPreset.gen) {
            this.applyGenSettings(selectedPreset.gen);
        }
    }

    applyGenSettings(settings) {
        if (!ssnoto || !ssnoto.sgen) return;
        
        for (const key in settings) {
            if (key in ssnoto.sgen) {
                // console.log(`Applying gen setting: ${key} = ${settings[key]}`);
                ssnoto.sgen[key] = settings[key];
            } else {
                console.warn(`Unknown gen setting: ${key}`);
            }
        }
    }
}

// // グローバルインスタンスを作成
// let snotoPreset = new SnotoPreset(); 