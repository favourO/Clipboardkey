# Clipboardkey

### Project Goal = Generate a Candidate Key

### Caveats

- if there is a partition Key

- if candidate is availabe and not a string 

- If Key Greater than Max trivial key which is of length 256

### Helper Class

- A helper class was created to encourage reusability and abstraction of internal methods.

- The private functions were exported to enable unit testing

- To also encourage addition of features and readability of code

#### Help Class Functions

- create-Candidate-From-Event-Partition-Key
Candidate is created from event partition key if it is available

- create-Candidate-From-Trivial-Partition-Key
Candidate is created from a trivial key if it is available

- create-Candidate-Greater-Than-Max-Partiton-Key
Candidate is created when Partition key is greater than 256

### Testing was done JEST

- Tst was written using Jest