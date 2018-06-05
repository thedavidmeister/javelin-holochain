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
var entryLinks = "commitZomeEntryLinks";

function newEntry(v) {
  return {
    content: v,
    timestamp: Date.now()
  }
}

// https://github.com/holochain/mixins/tree/master/anchors
function anchor(anchorType, anchorText) {
  return call('anchors', 'anchor', {
    anchorType: anchorType,
    anchorText: anchorText
  }).replace(/"/g, '');
}

function anchorExists(anchorType, anchorText) {
  return call('anchors', 'exists', {
    anchorType: anchorType,
    anchorText: anchorText
  });
}

function commitSomething (params) {
  var commitHash = commit(entryName, newEntry(params.v));
  var linksHash = commit(entryLinks, {Links: [{Base: App.DNA.Hash, Link: commitHash, Tag: entryName}]});
  debug("start");
  debug(commitHash);
  debug(linksHash);
  debug(get(linksHash));
  debug(get(commitHash));
  debug("fin");
  return linksHash;
}

function getCommits() {
  var commitLinks = getLinks(App.DNA.Hash, "");
  debug(commitLinks);
  return commitLinks;
}
