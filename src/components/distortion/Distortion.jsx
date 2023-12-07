import * as THREE from "three";
import { WaterEffect } from "./WaterEffect";
import { useEffect, useRef } from "react";

function MyThree({img_loader}) {
  const refContainer = useRef(null);

  useEffect(() => {
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(img_loader.getWidth(), img_loader.getHeight());
    refContainer.current &&
      refContainer.current.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera();
    camera.position.z = 5;

    const scene = new THREE.Scene();

    const loader = new THREE.TextureLoader();

    const material = new THREE.MeshLambertMaterial({
      map: loader.load(
        img_loader.getAsset()
      ),
    });

    const geometry = new THREE.PlaneGeometry(
      img_loader.getWidth(),
      img_loader.getHeight()
    );

    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(0, 0, 0);
    scene.add(mesh);

    const light = new THREE.PointLight(0xffffff, 1, 0);
    light.position.set(1, 1, img_loader.getWidth());
    scene.add(light);

    const effect = new WaterEffect(renderer);

    const handleResize = () => {
      effect.setSize(img_loader.getWidth(), img_loader.getHeight());

      camera.aspect = img_loader.getWidth() / img_loader.getHeight();
      camera.updateProjectionMatrix();
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    renderer.setAnimationLoop(() => {
      effect.render(scene, camera);
    });

    window.addEventListener("resize", handleResize);

    renderer.setAnimationLoop(() => {
      effect.render(scene, camera);
    });

    return () => {
      refContainer.current.removeChild(renderer.domElement);
      window.removeEventListener("resize", handleResize);
    };
  }, [img_loader]);
  return <div ref={refContainer}></div>;
}

export default MyThree;
