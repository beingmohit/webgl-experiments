import { ObjectLoader } from 'three'
import scene from '../scene'

var loader = new ObjectLoader()

export function load(scene) {
    loader.load("models/car/audioptimised02.json", function(object) {
        scene.add(object)
    }, function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded' );
    }, function (err) {
        console.error(err);
    })    
}
