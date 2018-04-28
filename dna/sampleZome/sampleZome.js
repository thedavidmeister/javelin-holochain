/*******************************************************************************
 * Start required callbacks
 ******************************************************************************/

 /**
  * System genesis.
  *
  * Executes just after the initial genesis entries are committed to your chain
  * (1st - DNA entry, 2nd Identity entry). Enables you specify any additional
  * operations you want performed when a node joins your holochain.
  *
  * @return {boolean} true if genesis is successful and so the app may start.
  *
  * @see https://developer.holochain.org/API#genesis
  */
function genesis () {
  return true;
}

/**
 * Validate: The entry name is expected.
 *
 * @param {any} entryName The data to validate as an expected entryName.
 * @return {boolean} true if the passed argument is a valid entryName.
 */
function validateEntryName (entryName) {
  var validEntryNames = ["sampleEntry"];
  return validEntryNames.includes(entryName);
}

/**
 * Validation: An entry is about to be committed to a source chain.
 *
 * @param  {string} entryName Name of the entry as per DNA config for this zome.
 * @param  {string|object} entry Data with type as per DNA config for this zome.
 * @param  {Header-object} header Header object for this entry.
 * @param  {Package-object|null} pkg Package object for this entry, if exists.
 * @param  {string[]} sources Array of agent hashes involved in this commit.
 * @return {boolean} true if this entry may be committed to a source chain.
 *
 * @see https://developer.holochain.org/API#validateCommit_entryType_entry_header_package_sources
 * @see https://developer.holochain.org/Validation_Functions
 */
function validateCommit (entryName, entry, header, pkg, sources) {
  return validateEntryName(entryName);
}

/*******************************************************************************
 * End required callbacks
 ******************************************************************************/

validatePutPkg = neverValidate;
validateModPkg = neverValidate;
validateDelPkg = neverValidate;



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
