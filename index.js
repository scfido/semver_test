const semver = require('semver')


// var ret = semver.gt('1.2.3-beta1.2.0', '1.2.3-beta1.10.0')
print('1.2.3', '1.2.3-hotfix1')
print('1.2.3-beta1', '1.2.3-beta1.0')
print('1.2.3-beta1.10', '1.2.3-beta1.9')
print('1.2.3-beta-1.9', '1.2.3-beta-1.10')
print('1.2.3-beta-1.10.1', '1.2.3-beta-1.9.1')

function print(ver1, ver2){
    console.log(`${ver1} > ${ver2} = ${semver.gt(ver1, ver2)}`);
}