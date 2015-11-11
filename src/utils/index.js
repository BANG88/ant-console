import keyMirror from 'fbjs/lib/key-mirror';
import Dispatcher from 'flux';
import Cookie from 'js-cookie';
import {EventEmitter} from 'fbemitter';
export default {
	keyMirror,
	Dispatcher: new Dispatcher(),
	Cookie,
	EventEmitter
}
