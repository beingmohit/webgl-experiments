
import { ObjectLoader, DefaultLoadingManager } from 'three'
import parallel from 'async/parallel'

var objectLoader = new ObjectLoader()

DefaultLoadingManager.onStart = function (url, itemsLoaded, itemsTotal) {
	console.log('Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.')
}

DefaultLoadingManager.onLoad = function ( ) {
	console.log('Loading Complete!')
}

DefaultLoadingManager.onProgress = function (url, itemsLoaded, itemsTotal) {
	console.log('Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.')
}

DefaultLoadingManager.onError = function (url) {
	console.log('There was an error loading ' + url)
}

export default (loaded) => {
    parallel({
        car: (callback) => {
            objectLoader.load('models/car/audioptimised02.json', (object) => {
                callback(null, object)
            })  
        }
    }, (err, assets) => {
        if (err)
            throw err

        loaded(assets)
    })
}

