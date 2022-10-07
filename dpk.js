const Helper = require("./helper");

const helperFunctions = new Helper

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate;

  if (event) {
    candidate = helperFunctions.createCandidateFromEventPartitionKey(event, candidate)
  }
  
  else if (candidate) {
    candidate = helperFunctions.createCandidateFromTrivialPartitionKey(candidate)
  }

  else if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = helperFunctions.createCandidateGreaterThanMaxPartitonKey(candidate)
  }
  
  return candidate;
};

