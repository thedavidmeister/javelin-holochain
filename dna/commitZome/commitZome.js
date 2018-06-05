function alwaysValidate () { return true; }
function neverValidate () { return false; }
function defaultPkg () { return null; }

genesis = alwaysValidate;

validatePutPkg = defaultPkg;
validateModPkg = defaultPkg;
validateDelPkg = defaultPkg;

validateCommit = alwaysValidate;
validatePut = alwaysValidate;
validateMod = alwaysValidate;
validateDel = alwaysValidate;
validateLink = alwaysValidate;

// https://github.com/holochain/mixins/tree/master/anchors
function anchor(anchorType, anchorText) {
  return call('anchors', 'anchor', {
    anchorType: anchorType,
    anchorText: anchorText
  }).replace(/"/g, '');
}

var anchorName = "commitZomeAnchor";
var entryName = "commitZomeEntry";
var entryTagName = "commitZomeEntryTag"
var entryLinksName = "commitZomeEntryLinks";

function newEntry(v) {
  return {
    content: v,
    timestamp: Date.now()
  }
}

function commitEntry (params) {
  return commit(entryLinksName, {
    Links: [{
      Base: anchor(anchorName),
      Link: commit(entryName, newEntry(params.v)),
      Tag: entryTagName,
    }]
  });
}

function getEntries() {
  return getLinks(anchor(anchorName), entryTagName);
}
