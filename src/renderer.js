import { WebGLRenderer } from 'three'

var renderer = new WebGLRenderer()

renderer.setSize(window.innerWidth, window.innerHeight)

renderer.setClearColor(0xffffff); 

document.body.appendChild(renderer.domElement)

export default renderer