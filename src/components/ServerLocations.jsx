import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';


import grFlag from '../assets/images/flags/gr.png';
import deFlag from '../assets/images/flags/de.png';
import trFlag from '../assets/images/flags/tr.png';
import egFlag from '../assets/images/flags/eg.png';
import ruFlag from '../assets/images/flags/ru.png';
import nlFlag from '../assets/images/flags/nl.png';


const InteractiveGlobe = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const width = currentMount.clientWidth || 550;
    const height = currentMount.clientHeight || 550;

    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 210;

    
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    
    const particleCount = 1800;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const radius = 68;

    for (let i = 0; i < particleCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / particleCount);
      const theta = Math.sqrt(particleCount * Math.PI) * phi;

      positions[i * 3] = radius * Math.cos(theta) * Math.sin(phi);
      positions[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 1.5,
      transparent: true,
      opacity: 0.85,
    });

    const particles = new THREE.Points(geometry, particleMaterial);
    globeGroup.add(particles);

    
    let animationFrameId;
    const animate = () => {
      globeGroup.rotation.y += 0.002;
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!currentMount) return;
      const newWidth = currentMount.clientWidth;
      const newHeight = currentMount.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      geometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
};

const ServerLocations = () => {
  const locations = [
    { id: 1, name: 'سرور یونان', flag: grFlag },
    { id: 2, name: 'سرور آلمان', flag: deFlag },
    { id: 3, name: 'سرور ترکیه', flag: trFlag },
    { id: 4, name: 'سرور مصر', flag: egFlag },
    { id: 5, name: 'سرور روسیه', flag: ruFlag },
    { id: 6, name: 'سرور هلند', flag: nlFlag },
  ];

  return (
    <section className="relative w-full pt-16 pb-48 flex flex-col items-center overflow-hidden">
      
      <div className="w-full max-w-6xl px-4 z-20 flex flex-col">
        
        <div className="w-full flex items-center justify-between select-none">
          <h2 className="text-base sm:text-lg md:text-xl font-bold text-white tracking-normal">
            سرور مجازی در لوکیشن های مختلف
          </h2>

          <button
            type="button"
            className="flex items-center gap-1.5 text-xs sm:text-sm text-[#c084fc] hover:text-purple-300 transition-colors cursor-pointer group"
          >
            <span>مشاهده همه</span>
            <span className="text-sm font-bold transition-transform group-hover:-translate-x-1">←</span>
          </button>
        </div>

        
        <div className="w-full mt-[50px] flex items-center justify-between gap-2 sm:gap-4 relative">
          {locations.map((loc) => (
            <div
              key={loc.id}
              className="flex flex-col items-center gap-3 cursor-pointer group transition-transform duration-300 hover:scale-105 z-20"
            >
              <div className="w-[52px] h-[34px] sm:w-[74px] sm:h-[48px] md:w-[92px] md:h-[58px] rounded-[12px] sm:rounded-[16px] overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.7)] bg-[#111216] border border-white/5 group-hover:border-white/20 transition-all">
                <img
                  src={loc.flag}
                  alt={loc.name}
                  className="w-full h-full object-cover select-none pointer-events-none"
                />
              </div>

              <span className="text-xs sm:text-sm font-normal text-white/90 group-hover:text-white transition-colors whitespace-nowrap">
                {loc.name}
              </span>
            </div>
          ))}

          
          
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mt-[25px] w-[380px] sm:w-[460px] md:w-[520px] h-[380px] sm:h-[460px] md:h-[520px] pointer-events-none select-none z-10 flex items-center justify-center">
            <InteractiveGlobe />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServerLocations;