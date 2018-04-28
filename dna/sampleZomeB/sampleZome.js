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

function zomeBFn () { return 'called zomeBFn'; }
