/* eslint-disable */

/*
ATTENTION: This is an obfuscated file. You do not need to understand it.
Do NOT edit this file directly. Use it as a black box.

If you notice any issues with using this file, please contact the TAs.
*/
const _0x22d7fb = _0x3e2c;
(function (_0x56db12, _0x54495f) {
    const _0x2b8f4d = _0x3e2c, _0x3c6a5d = _0x56db12();
    while (!![]) {
        try {
            const _0x13d1c7 = -parseInt(_0x2b8f4d(0x19b)) / 0x1 + -parseInt(_0x2b8f4d(0x1bb)) / 0x2 + parseInt(_0x2b8f4d(0x1ba)) / 0x3 * (-parseInt(_0x2b8f4d(0x1bc)) / 0x4) + -parseInt(_0x2b8f4d(0x19d)) / 0x5 * (-parseInt(_0x2b8f4d(0x1ac)) / 0x6) + parseInt(_0x2b8f4d(0x1a7)) / 0x7 * (-parseInt(_0x2b8f4d(0x1a3)) / 0x8) + parseInt(_0x2b8f4d(0x1b7)) / 0x9 + parseInt(_0x2b8f4d(0x1a5)) / 0xa;
            if (_0x13d1c7 === _0x54495f)
                break;
            else
                _0x3c6a5d['push'](_0x3c6a5d['shift']());
        } catch (_0x1126e5) {
            _0x3c6a5d['push'](_0x3c6a5d['shift']());
        }
    }
}(_0x327d, 0x72abe));
const id = require('../util/id'), kvStore = {
        'store': new Map(),
        'get'(_0x321589) {
            const _0x59da0b = _0x3e2c;
            if (!this[_0x59da0b(0x1a2)][_0x321589[_0x59da0b(0x1ae)]])
                return undefined;
            return this[_0x59da0b(0x1a2)][_0x321589[_0x59da0b(0x1ae)]][_0x321589['key']];
        },
        'put'(_0x58048d, _0x1c8fd7) {
            const _0x5b6c83 = _0x3e2c;
            !this['store'][_0x58048d[_0x5b6c83(0x1ae)]] && (this[_0x5b6c83(0x1a2)][_0x58048d[_0x5b6c83(0x1ae)]] = new Map()), this[_0x5b6c83(0x1a2)][_0x58048d[_0x5b6c83(0x1ae)]][_0x58048d[_0x5b6c83(0x1a0)]] = _0x1c8fd7;
        },
        'del'(_0x13facb) {
            const _0x4a90e7 = _0x3e2c;
            if (!this[_0x4a90e7(0x1a2)][_0x13facb[_0x4a90e7(0x1ae)]])
                return undefined;
            let _0x48c72f = this[_0x4a90e7(0x1a2)][_0x13facb['gid']][_0x13facb['key']];
            return delete this[_0x4a90e7(0x1a2)][_0x13facb[_0x4a90e7(0x1ae)]][_0x13facb[_0x4a90e7(0x1a0)]], _0x48c72f;
        }
    };
function normalize(_0x58c46c) {
    const _0x31c595 = _0x3e2c, _0x4d114b = {
            'EHpbd': function (_0x4d2ab3, _0x1ae6fd) {
                return _0x4d2ab3 === _0x1ae6fd;
            },
            'bGkjC': _0x31c595(0x1a9),
            'HuHFr': function (_0x31f2bf, _0x3938e1) {
                return _0x31f2bf === _0x3938e1;
            },
            'zQdHM': _0x31c595(0x19c)
        };
    let _0x1d9752 = {};
    _0x4d114b[_0x31c595(0x19e)](_0x58c46c, null) && (_0x58c46c = {});
    if (typeof _0x58c46c === _0x31c595(0x1bd))
        _0x1d9752[_0x31c595(0x1a0)] = _0x58c46c, _0x1d9752['gid'] = _0x4d114b[_0x31c595(0x1b6)];
    else
        _0x4d114b[_0x31c595(0x1ab)](typeof _0x58c46c, _0x4d114b['zQdHM']) && (_0x1d9752[_0x31c595(0x1a0)] = _0x58c46c[_0x31c595(0x1a0)], _0x1d9752[_0x31c595(0x1ae)] = _0x58c46c['gid']);
    return _0x1d9752;
}
;
function _0x3e2c(_0x5af79c, _0x3b6341) {
    const _0x327d79 = _0x327d();
    return _0x3e2c = function (_0x3e2c09, _0xe7e5c0) {
        _0x3e2c09 = _0x3e2c09 - 0x196;
        let _0x5b1f3e = _0x327d79[_0x3e2c09];
        return _0x5b1f3e;
    }, _0x3e2c(_0x5af79c, _0x3b6341);
}
const mem = {};
mem[_0x22d7fb(0x1b0)] = function (_0x12468a, _0x82a0dd, _0x417e4d) {
    const _0x105bbe = _0x22d7fb, _0x10a38b = { 'leqFI': _0x105bbe(0x1c0) }, _0x1186f3 = _0x10a38b['leqFI'][_0x105bbe(0x1b4)]('|');
    let _0x311be8 = 0x0;
    while (!![]) {
        switch (_0x1186f3[_0x311be8++]) {
        case '0':
            _0x417e4d && _0x417e4d(null, _0x12468a);
            continue;
        case '1':
            _0x82a0dd = normalize(_0x82a0dd);
            continue;
        case '2':
            console[_0x105bbe(0x1be)](_0x105bbe(0x199) + JSON[_0x105bbe(0x1b5)](global[_0x105bbe(0x19f)]) + _0x105bbe(0x1b8) + JSON['stringify'](_0x82a0dd) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20Store:\x20' + JSON[_0x105bbe(0x1b5)](kvStore[_0x105bbe(0x1a2)]) + _0x105bbe(0x1b9) + JSON[_0x105bbe(0x1b5)](_0x12468a) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20Store:\x20' + JSON[_0x105bbe(0x1b5)](kvStore[_0x105bbe(0x1a2)]) + _0x105bbe(0x1a1));
            continue;
        case '3':
            _0x82a0dd[_0x105bbe(0x1ae)] = _0x82a0dd[_0x105bbe(0x1ae)] || 'local';
            continue;
        case '4':
            _0x82a0dd['key'] = _0x82a0dd[_0x105bbe(0x1a0)] || id['getID'](_0x12468a);
            continue;
        case '5':
            kvStore[_0x105bbe(0x1b0)](_0x82a0dd, _0x12468a);
            continue;
        case '6':
            _0x417e4d = _0x417e4d || function () {
            };
            continue;
        }
        break;
    }
}, mem['get'] = function (_0x58efa9, _0x446fe6) {
    const _0x585b8 = _0x22d7fb, _0x219fec = {
            'YVPvj': function (_0x301770, _0x4c7285, _0x37a2d3) {
                return _0x301770(_0x4c7285, _0x37a2d3);
            },
            'prCSe': function (_0x1d7a12, _0x44f1cd) {
                return _0x1d7a12(_0x44f1cd);
            }
        };
    _0x446fe6 = _0x446fe6 || function () {
    }, _0x58efa9 = normalize(_0x58efa9), _0x58efa9[_0x585b8(0x1ae)] = _0x58efa9[_0x585b8(0x1ae)] || _0x585b8(0x1a9);
    if (!_0x58efa9[_0x585b8(0x1a0)]) {
        let _0xbb5923 = kvStore['store'][_0x58efa9[_0x585b8(0x1ae)]] || {};
        _0xbb5923 = Object['keys'](_0xbb5923), _0x219fec[_0x585b8(0x1b1)](_0x446fe6, null, _0xbb5923);
        return;
    }
    let _0x30053b = kvStore[_0x585b8(0x1a6)](_0x58efa9);
    console[_0x585b8(0x1be)](_0x585b8(0x197) + JSON[_0x585b8(0x1b5)](global['nodeConfig']) + _0x585b8(0x1af) + JSON['stringify'](_0x58efa9) + _0x585b8(0x1ad) + JSON['stringify'](kvStore[_0x585b8(0x1a2)]) + _0x585b8(0x198) + JSON[_0x585b8(0x1b5)](_0x30053b) + _0x585b8(0x1b3)), _0x30053b ? _0x219fec[_0x585b8(0x1b1)](_0x446fe6, null, _0x30053b) : _0x219fec[_0x585b8(0x1b2)](_0x446fe6, new Error('Memory\x20key\x20\x22' + _0x58efa9[_0x585b8(0x1a0)] + _0x585b8(0x1a8) + _0x58efa9['gid'] + _0x585b8(0x1bf)));
}, mem['del'] = function (_0x4b6621, _0x4a9dcd) {
    const _0x2eb3fc = _0x22d7fb, _0x351b92 = {
            'XHDYL': function (_0x10323f, _0x383170) {
                return _0x10323f(_0x383170);
            },
            'dwobZ': function (_0x59434b, _0xb96468, _0x24d2e1) {
                return _0x59434b(_0xb96468, _0x24d2e1);
            }
        };
    _0x4a9dcd = _0x4a9dcd || function () {
    }, _0x4b6621 = _0x351b92[_0x2eb3fc(0x1aa)](normalize, _0x4b6621);
    let _0xfc39cf = kvStore[_0x2eb3fc(0x196)](_0x4b6621);
    _0xfc39cf ? _0x351b92['dwobZ'](_0x4a9dcd, null, _0xfc39cf) : _0x351b92[_0x2eb3fc(0x1aa)](_0x4a9dcd, new Error(_0x2eb3fc(0x19a) + _0x4b6621[_0x2eb3fc(0x1a0)] + _0x2eb3fc(0x1a4) + _0x4b6621[_0x2eb3fc(0x1ae)] + _0x2eb3fc(0x1bf)));
}, module['exports'] = mem;
function _0x327d() {
    const _0x4e3a6b = [
        'string',
        'log',
        '\x27s\x20store',
        '6|1|4|3|5|2|0',
        'del',
        '[LOCAL\x20MEM]\x20GET\x0a\x20\x20\x20\x20\x20\x20Node:\x20',
        '\x0a\x20\x20\x20\x20\x20\x20Value:\x20',
        '[LOCAL\x20MEM]\x20PUT\x0a\x20\x20\x20\x20\x20\x20\x20\x20Node:\x20',
        'Memory\x20key\x20\x22',
        '732911lyQSgo',
        'object',
        '1265HPFjtf',
        'EHpbd',
        'nodeConfig',
        'key',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        'store',
        '8FLkmEI',
        '\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20not\x20found\x20for\x20',
        '23564520hYLBXl',
        'get',
        '5294723nwWnfW',
        '\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20not\x20found\x20for\x20',
        'local',
        'XHDYL',
        'HuHFr',
        '15702npdiOx',
        '\x0a\x20\x20\x20\x20\x20\x20Store:\x20',
        'gid',
        '\x0a\x20\x20\x20\x20\x20\x20Configuration:\x20',
        'put',
        'YVPvj',
        'prCSe',
        '\x0a\x20\x20\x20\x20\x20\x20',
        'split',
        'stringify',
        'bGkjC',
        '795492GhSCxP',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20Configuration:\x20',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20State:\x20',
        '858504hVzLkN',
        '1723558oqjqHu',
        '4dVzbnf'
    ];
    _0x327d = function () {
        return _0x4e3a6b;
    };
    return _0x327d();
}/* eslint-enable */
