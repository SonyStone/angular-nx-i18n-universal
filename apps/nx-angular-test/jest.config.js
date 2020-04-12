module.exports = {
  name: 'nx-angular-test',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/nx-angular-test',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
