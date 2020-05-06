module.exports = {
  name: 'modules',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/modules',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
