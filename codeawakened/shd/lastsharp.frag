#version 300 es
precision mediump float;

uniform sampler2D tex0;
uniform vec2 resolution;

in vec2 vTexCoord;
out vec4 fragColor;

void main() {
    vec2 texelSize = 1.0 / resolution.xy;
    // p5js用に上下反転
    vec2 uv = vec2(vTexCoord.x, 1.0 - vTexCoord.y);
    
    // シャープ効果のカーネル（値を少し控えめに）
// 中心値を9.0から5.0に下げる場合
// 中心値を3.0にする場合
// 中心値2.5の場合
// 2.5 + (8 * -0.1875) = 1.0
vec3 sum = texture(tex0, uv + texelSize * vec2(-1.0, -1.0)).rgb * -0.1875 +
           texture(tex0, uv + texelSize * vec2( 0.0, -1.0)).rgb * -0.1875 +
           texture(tex0, uv + texelSize * vec2( 1.0, -1.0)).rgb * -0.1875 +
           texture(tex0, uv + texelSize * vec2(-1.0,  0.0)).rgb * -0.1875 +
           texture(tex0, uv + texelSize * vec2( 0.0,  0.0)).rgb * 2.5 +    // 中心2.5
           texture(tex0, uv + texelSize * vec2( 1.0,  0.0)).rgb * -0.1875 +
           texture(tex0, uv + texelSize * vec2(-1.0,  1.0)).rgb * -0.1875 +
           texture(tex0, uv + texelSize * vec2( 0.0,  1.0)).rgb * -0.1875 +
           texture(tex0, uv + texelSize * vec2( 1.0,  1.0)).rgb * -0.1875;			  
			      // エッジの強調も少し控えめに
    sum = sum * 1.09;  // 1.5 → 1.2
    
// 中間域を下げる調整
    vec3 color = sum;
    color = pow(color, vec3(1.28));  // 指数を大きくすると中間域が下がる
	 
	     
    fragColor = vec4(clamp(color, 0.0, 1.0), 1.0);
}