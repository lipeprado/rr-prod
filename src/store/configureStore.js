// Dynamic imports aren't supported on ES6 thus using require
import devStore from './configureStore.dev';
import prodStore from './configureStore.prod';

export default (process.env.NODE_ENV === 'production' ? devStore : prodStore);
