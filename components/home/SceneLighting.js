"use client";

export default function SceneLighting() {
  return (
    <>
      <ambientLight intensity={1.35} />
      <hemisphereLight args={["#fff7e8", "#463d32", 1.7]} />
      <directionalLight position={[-5, 7, 8]} color="#fff4d6" intensity={3.1} />
      <directionalLight position={[6, 1, 5]} color="#d97706" intensity={1.8} />
      <pointLight position={[0, -2, 5]} color="#faf8f4" intensity={18} distance={18} />
    </>
  );
}
