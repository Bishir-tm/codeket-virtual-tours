// src/components/PanoramaViewer.jsx
import React, { useEffect, useRef } from "react";
import * as Marzipano from "marzipano";

const PanoramaViewer = () => {
  const viewerRef = useRef(null);

  useEffect(() => {
    if (!viewerRef.current) return;

    const viewer = new Marzipano.Viewer(viewerRef.current);

    const source = Marzipano.ImageUrlSource.fromString("/panorama.jpeg");

    // Geometry based on your image width
    const geometry = new Marzipano.EquirectGeometry([{ width: 4000 }]);

    // View setup
    const limiter = Marzipano.RectilinearView.limit.traditional(
      Math.PI / 4, // min FOV ~45°
      Math.PI / 1.8 // max FOV ~100°
    );
    const view = new Marzipano.RectilinearView(
      { yaw: 0, pitch: 0, fov: Math.PI / 2 },
      limiter
    ); // FOV ~90 degrees

    // Create scene
    const scene = viewer.createScene({
      source,
      geometry,
      view,
    });

    scene.switchTo();

    // Auto-rotate
    let yaw = 0;
    const speed = 0.0005;
    const rotate = () => {
      yaw += speed;
      view.setYaw(yaw);
      requestAnimationFrame(rotate);
    };
    rotate();

    return () => {
      viewer.destroy();
    };
  }, []);

  return (
    <div
      ref={viewerRef}
      style={{
        width: "100%",
        height: "500px", // <--- important! must have height
        background: "black", // fallback background
      }}
    />
  );
};

export default PanoramaViewer;
