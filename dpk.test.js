const Helper = require("./helper");
const { run } = require('./index')
const helperFunctions = new Helper

describe('Partition Key', () => {
    it ('create Candidate From Event Partition Key', () => {
        expect(helperFunctions.createCandidateFromEventPartitionKey('eerr', 'tttt')).toBeTruthy()
        
    }) 
})

describe('From Trivial Partition key', () => {
    it ('should create a partition key', () => {
        expect(helperFunctions.createCandidateFromTrivialPartitionKey('candidate')).toBeTruthy()
        
    }) 
})

describe('From Trivial Partition key', () => {
    it ('should create a partition key', () => {
        expect(helperFunctions.createCandidateGreaterThanMaxPartitonKey('candidate')).toBeTruthy()
        
    }) 
})

describe('index', () => {
    it('should run the integration of the partition key', () => {
        expect(run).toBeTruthy()
    })
})