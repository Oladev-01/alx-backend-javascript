import handleProfileSignup from './6-final-user';

handleProfileSignup('Bob', 'Dylan', '7-photo.png')
    .then((results) => {
        console.log(results);
    });
