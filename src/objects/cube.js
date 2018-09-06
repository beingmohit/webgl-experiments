import { 
    BoxGeometry, 
    MeshBasicMaterial,
    Mesh 
} from 'three'

var geometry = new BoxGeometry(1, 1, 1)

var material = new MeshBasicMaterial({ color: 0x00ff00 })

var cube = new Mesh(geometry, material) 

export default cube