function alwaysValidate () { return true; }
function neverValidate () { return false; }

function validateEntryName (entryName) {
  return ["sampleEntry"].includes(entryName);
}

genesis = alwaysValidate;

validatePutPkg = neverValidate;
validateModPkg = neverValidate;
validateDelPkg = neverValidate;

function validateCommit (entryName, entry, header, pkg, sources) {
  return validateEntryName(entryName);
}

function validatePut (entryName, entry, header, pkg, sources) {
  return validateEntryName(entryName);
}

function validateMod (entryName, entry, header, replaces, pkg, sources) {
  return validateEntryName(entryName);
}

function validateDel (entryName, hash, pkg, sources) {
  return valdiateEntryName(entryName);
}

function a (params) { return "a called from zome!"; }
function b (params) { return "b called from zome!"; }

function mergeParams (params) {
  return {
    'foo': 'ab',
    'mergedParams': params,
    'random': Math.random()
  };
}
