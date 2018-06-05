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

function zomeBFn () { return 'called zomeBFn'; }
