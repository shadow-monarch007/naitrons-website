"use client";
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Line } from '@react-three/drei';
import { Suspense, useMemo, useRef } from 'react';
import * as THREE from 'three';

function Globe() {
  return (
    <group>
      <mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial color="#1d4ed8" roughness={0.85} metalness={0.15} />
      </mesh>
      {/* Subtle atmosphere */}
      <mesh scale={1.08}>
        <sphereGeometry args={[1, 48, 48]} />
        <meshBasicMaterial color="#2563eb" transparent opacity={0.15} blending={THREE.AdditiveBlending} />
      </mesh>
    </group>
  );
}

interface Connection {
  from: [number, number]; // lat, lon
  to: [number, number];
  color?: string;
}

// Simple sample connections (lat, lon pairs)
const connections: Connection[] = [
  { from: [37.7749, -122.4194], to: [51.5072, -0.1276], color: '#60a5fa' }, // SF -> London
  { from: [40.7128, -74.0060], to: [52.5200, 13.4050], color: '#93c5fd' },   // NY -> Berlin
  { from: [28.6139, 77.2090], to: [1.3521, 103.8198], color: '#3b82f6' },    // Delhi -> Singapore
  { from: [35.6762, 139.6503], to: [34.0522, -118.2437], color: '#60a5fa' }, // Tokyo -> LA
];

function latLonToVec3(lat: number, lon: number, radius: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  const x = -radius * Math.sin(phi) * Math.sin(theta);
  const z = radius * Math.sin(phi) * Math.cos(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

function Arc({ points, color = '#60a5fa' }: { points: THREE.Vector3[]; color?: string }) {
  // drei's Line handles the geometry & material wiring for us
  return <Line points={points} color={color} lineWidth={1} transparent opacity={0.85} />;
}

function TravelingDot({ curvePoints, color = '#93c5fd', speed = 0.6 }: { curvePoints: THREE.Vector3[]; color?: string; speed?: number }) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    const t = (clock.getElapsedTime() * speed) % 1;
    const idx = Math.floor(t * (curvePoints.length - 1));
    const p = curvePoints[idx];
    ref.current.position.set(p.x, p.y, p.z);
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.01, 8, 8]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
}

function Endpoint({ position, color = '#22d3ee' }: { position: THREE.Vector3; color?: string }) {
  const glow = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    const t = (Math.sin(clock.getElapsedTime() * 2) + 1) / 2; // 0..1
    const s = 0.04 + t * 0.04;
    glow.current.scale.setScalar(s);
  });
  return (
    <group position={position.toArray() as unknown as [number, number, number]}>
      <mesh>
        <sphereGeometry args={[0.015, 12, 12]} />
        <meshBasicMaterial color={color} />
      </mesh>
      <mesh ref={glow}>
        <sphereGeometry args={[0.05, 12, 12]} />
        <meshBasicMaterial color={color} transparent opacity={0.25} blending={THREE.AdditiveBlending} />
      </mesh>
    </group>
  );
}

function ConnectionsLayer() {
  const data = useMemo(() => {
    return connections.map(c => {
      const start = latLonToVec3(c.from[0], c.from[1], 1.01);
      const end = latLonToVec3(c.to[0], c.to[1], 1.01);
      const mid = start.clone().add(end).multiplyScalar(0.5).normalize().multiplyScalar(1.35);
      const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
      const points = curve.getPoints(120);
      return { ...c, points, start, end };
    });
  }, []);
  return (
    <group>
      {data.map((c, i) => (
        <group key={i}>
          <Arc points={c.points} color={c.color} />
          <TravelingDot curvePoints={c.points} color={c.color} speed={0.4 + (i * 0.12)} />
          <Endpoint position={c.start} />
          <Endpoint position={c.end} />
        </group>
      ))}
    </group>
  );
}

export function GlobeScene() {
  const ambientIntensity = useMemo(() => 0.6, []);
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isCoarse = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;
  const autoRotate = !prefersReducedMotion && !isCoarse; // disable auto-rotate on touch to save battery
  return (
  <div className="h-60 sm:h-72 w-full rounded-xl border border-black/25 dark:border-white/15 overflow-hidden" aria-label="Animated globe with global connection lines" role="img">
      <Canvas camera={{ position: [2.4, 1.2, 2.4], fov: 55 }}>
        <ambientLight intensity={ambientIntensity} />
        <directionalLight position={[5, 5, 5]} intensity={0.9} />
        <Suspense fallback={null}>
          <Globe />
          {!prefersReducedMotion && <ConnectionsLayer />}
          {!prefersReducedMotion && (
            <Stars radius={5} depth={25} count={1200} factor={0.3} saturation={0} fade speed={1} />
          )}
        </Suspense>
        {autoRotate && (
          <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.45} />
        )}
      </Canvas>
    </div>
  );
}
