import { 
  PerspectiveCamera, 
  WebGLRenderer,
  ObjectLoader
} from 'three'

import scene from './scene'
import camera from './camera'
import renderer from './renderer'
import loader from './loader'

loader((assets) => {
  var animate = () => {
    requestAnimationFrame(animate)
    renderer.render(scene, camera);
  }
  
  scene.add(assets.car)
  animate()
})



