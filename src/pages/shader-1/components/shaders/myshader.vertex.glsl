uniform float uTime;

attribute float aSpeed;

void main() {
  vec3 pos = position;

  if (pos.x < 0.0) {
    pos.y += sin(uTime * aSpeed) * 0.2;
  } else {
    pos.y += cos(uTime * aSpeed) * 0.2;
  }

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
