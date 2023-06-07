import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '0d083c976b95401098338921d7406c48',
        });
    }
}

export default AppLoader;
