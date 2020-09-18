const express = require('express');
const JWT = require('jsonwebtoken');
const app = express();


// app.get('/api/confd/1.1/infos', (req, res) => {
//     res.send({
//         firstName: 'Eker',
//         lastName: 'Eker',
//         email: 'eker@eker.com',
//         lines: [],
//         username: 'eker',
//         forwards: {
//             unconditional: {
//                 destination: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
//                 enabled: true,
//             },
//             noanswer: {
//                 destination: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
//                 enabled: true,
//             },
//             busy: {
//                 destination: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
//                 enabled: true,
//             },
//         },
//         voicemail: 'eker@eker.com',
//         agent: 'Mozilla',
//     });
// });

const RSA = `-----BEGIN RSA PRIVATE KEY-----
MIICXwIBAAKBgQCtI/viGQXX2G2e1FirTb9RBqiToJYTQ8Mc/hvCYBfe8NNR59AT
Cp/hoBC//NeoXfbfGkmDk7uoK2N7QS6jdI9Rq6jyCYVHU1EMDebmxDRL6meakX0F
wyXFrBaReByEq7hmjif3V2D0hsr7HLf8SJrasS4HbzkE+k5V/+xMJBGNGwIDAQAB
AoGBAJ9hCHTQ4/gVWpNilVzbbMmBf5ylroB9WBZQM+1x14d52I0E/x0IIrTnS4Pv
k/WAycgFwrZEP/JGPoUvM2dz3JikroTCh1D8nowswnrntT3eLazWOBYEtGQ3i+wW
znr+jhMW6JEJfYWEun1jw619XV5vJXHbeTpMbDRH7eBhHNEBAkEA5HF8Lx/cps3V
0uyzOY1ZvsClEJ1u7fUBYw3KSXihJLHXHTB7c2dLbK+RNdqrEaq2yEjU37OatkJP
12K/3fZ5kQJBAMIGtIzXmh2681+LdxaeO1A7mnkUFqAwFXi69FI03zqJbAM7aeO1
s4xgDAsvIEHszBoJAhRPyX/NJltzJCBeJesCQQC97Rg5Ob1CtUk79u0/QSTHMfVK
bgmnLxa7GuD+2prnHjBhpUhN9yg/MWyCIM4vfwY+WEcbwYA0XcdxpDkuulfxAkEA
rtU38Al+9/czwg57usfODpgGs7+kO6fYUTe1XDYESEz4JVluKx/ZsE4DzDgkywLD
T1p6oy7aFO0Y+SKhlQEBDQJBAMM2w/SW5Q1X87vFDi616g5k6UgdiI9yv0rHz0ag
Kq+YEydG5eMoEQKUy8w/EAFIxPGw+PHTOcCwInMOzUNVMHI=
-----END RSA PRIVATE KEY-----`;

app.use('/', (req, res) => {
    const date = new Date();
    date.setYear('2021');

    const jwt = JWT.sign({
        'user_id': 1,
        exp: +date / 1000
    },
    RSA,
    {
        algorithm: 'RS256'
    });

    res.send({
        data: {
            metadata: {
                jwt: jwt,
                uuid: jwt,
            },
            token: jwt,
            refresh_token: jwt,
            session_uuid: '',
            // utc_expires_at: date.toISOString().replace('Z', ''),
        },
        firstName: 'Eker',
        lastName: 'Eker',
        email: 'eker@eker.com',
        lines: [],
        username: 'eker',
        forwards: {
            unconditional: {
                destination: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
                enabled: true,
            },
            noanswer: {
                destination: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
                enabled: true,
            },
            busy: {
                destination: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
                enabled: true,
            },
        },
        voicemail: 'eker@eker.com',
        agent: 'Mozilla',
        services: {
            dnd: {
                enabled: false,
            },
        },
        subscription_type: 2,
        authorizations: [{
            name: 'application-client-access',
        }]
    });
});

app.listen(1243, () => console.log('başladı'));