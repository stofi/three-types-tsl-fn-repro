import './style.css'
import * as THREE from 'three/webgpu'
import { Fn } from 'three/tsl'


const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const renderer = new THREE.WebGPURenderer()

const computeFn = Fn(()=>{})
//  Argument of type '() => void' is not assignable to parameter of type '() => Node'.

const computeNode = computeFn().compute()
// Property 'compute' does not exist on type 'Node'.

renderer.compute(computeNode)
// computeNode is any
renderer.render(scene, camera)