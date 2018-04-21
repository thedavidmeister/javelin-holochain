'use strict';

function genesis() {
  return true;
}

function validateCommit (entryName, entry, header, pkg, sources) {
  switch (entryName) {
    case "sampleEntry":
      return true;
    default:
      // invalid entry name
      return false;
  }
}

function validatePut (entryName, entry, header, pkg, sources) {
  switch (entryName) {
    case "sampleEntry":
      return true;
    default:
      // invalid entry name
      return false;
  }
}

function validateMod (entryName, entry, header, replaces, pkg, sources) {
  switch (entryName) {
    case "sampleEntry":
      return true;
    default:
      // invalid entry name
      return false;
  }
}

function validateDel (entryName, hash, pkg, sources) {
  switch (entryName) {
    case "sampleEntry":
      return true;
    default:
      // invalid entry name
      return false;
  }
}

function validatePutPkg (entryName) {
  return null;
}

function validateModPkg (entryName) {
  return null;
}

function validateDelPkg (entryName) {
  return null;
}

function a () { return 'a called from zome!'; }
function b () { return 'b called from zome!'; }

function mergeParams (params) {
  return {'foo': 'ab',
          'mergedParams': params,
          'random': Math.random(),
  };
}
