const fetch = require('node-fetch');

const url = process.argv[2];

(async () => {
    while (true) {
        try {
            const response = await fetch(url);
            const success = response.status >= 200 && response.status < 400;
            process.stdout.write(success ? 'o' : '.');
        } catch (e) {
            process.stdout.write('_');
        }
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
})();