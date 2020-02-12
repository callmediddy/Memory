import Realm from 'realm';
import {memory_schema} from './schema';

export const memory_storage = new Realm({
	schema: memory_schema,
	schemaVersion: 8,
	migration: function(oldRealm, newRealm) {
		newRealm.deleteAll();
	},
});
