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
 * Validate: The entry name is valid.
 *
 * @param {any} entryName The data to validate as an expected entryName.
 * @return {boolean} true if the passed argument is a valid entryName.
 */
function validateEntryName (entryName) {
  // Add additonal entry names here as they are added to dna.json.
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

/**
 * Validation: An entry is about to be committed to the DHT on any node.
 *
 * It is very likely that this validation routine should check the same data
 * integrity as validateCommit, but, as it happens during a different part of
 * the data life-cycle, it may require additional validation steps.
 *
 * This function will only get called on entry types with "public" sharing, as
 * they are the only types that get put to the DHT by the system.
 *
 * @param  {string} entryName Name of the entry as per DNA config for this zome.
 * @param  {string|object} entry Data with type as per DNA config for this zome.
 * @param  {Header-object} header Header object for this entry.
 * @param  {Package-object|null} pkg Package object for this entry, if exists.
 * @param  {string[]} sources Array of agent hashes involved in this commit.
 * @return {boolean} true if this entry may be committed to the DHT.
 *
 * @see https://developer.holochain.org/API#validatePut_entryType_entry_header_package_sources
 * @see https://developer.holochain.org/Validation_Functions
 */
function validatePut (entryName, entry, header, pkg, sources) {
  return validateCommit(entryName, entry, header, pkg, sources);
}

/*******************************************************************************
 * End required callbacks
 ******************************************************************************/

validatePutPkg = neverValidate;
validateModPkg = neverValidate;
validateDelPkg = neverValidate;

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
