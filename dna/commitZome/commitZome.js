function alwaysValidate () { return true; }
function neverValidate () { return false; }

genesis = alwaysValidate;

validatePutPkg = neverValidate;
validateModPkg = neverValidate;
validateDelPkg = neverValidate;

validateCommit = alwaysValidate;
validatePut = alwaysValidate;
validateMod = alwaysValidate;
validateDel = alwaysValidate;

var entryName = "commitZomeEntry";

function newEntry(v) {
  return {
    content: v,
    timestamp: Date.now()
  }
}

function commitSomething (params) {
  return commit(entryName, newEntry(params.v));
}
function getCommits() {
  return query({Constrain: {EntryTypes: [entryName]}})
}
