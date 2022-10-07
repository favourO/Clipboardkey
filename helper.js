const crypto = require("crypto");

module.exports = class Helper { 

    constructor (event, candidate) {
        this.event = event
        this.candidate = candidate
    }

    createCandidateFromEventPartitionKey = (event, candidate) => {
        // Check if there is a partition Key
        // else create a Candidate partittion key
        if (event) {
            if (event.partitionKey) {
              candidate = event.partitionKey;
            } else {
              const data = JSON.stringify(event);
              candidate = crypto.createHash("sha3-512").update(data).digest("hex");
            }
        }
    
        return candidate
    }

    createCandidateFromTrivialPartitionKey = (candidate) => {
        // if candidate is true and not a string 
        // Make candidate a string
        // Else assign trivial to candidate
        if (candidate) {
            if (typeof candidate !== "string") {
            candidate = JSON.stringify(candidate);
            }
        } else {
            candidate = TRIVIAL_PARTITION_KEY;
        }
    
        return candidate
    }

    createCandidateGreaterThanMaxPartitonKey =  (candidate) => {
        candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
        return candidate;
    }
}