import {
  shaderMaterial,
} from "@react-three/drei";
import { extend } from "@react-three/fiber";
import * as THREE from "three";
import vertex_shader from "./shaders/vertex.glsl";
import fragment_shader from "./shaders/fragment.glsl";

const EmergeMaterial = shaderMaterial(
  {
    uTime: 0,
    uFillColor: new THREE.Color("#f60"),
    uProgress: 0,
    uPixels: null,
    uType: 0,
    uTexture: null,
    uTextureSize: null,
    uElementSize: null,
  },
  vertex_shader,
  fragment_shader
);

// declaratively
extend({ EmergeMaterial });

export default EmergeMaterial;
