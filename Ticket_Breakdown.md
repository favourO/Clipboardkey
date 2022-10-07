# Ticket Breakdown

---------------------------

### Purpose: Book Agent At Shifts Posted on Our Platforms

### Current Working Process:

- Data is Saved in the Database in Facilities, Agents, and Shifts Tables
- Function getShiftByFacility is retrieved using the facility's ID. This function returns all Shifts worked in a given quarter.
-- it also give information about an agent assigned to each shift worked.
- Function generateReport is called to retrieve the list of Shifts

### Asumptions:
function generateRport () 
   important - returns all Shifts worked or not 
   trivial - Maybe within a (given year) or quarter (working assumption)

### Ticket
Currently, the id of each agent on the reports we generate is their internal database id. We'd like to add the ability for facilities to save their own custom ids
for each Agent they work with and use that id when generating reports for them

### Ticket Breakdown - Solution
Assumptions: 
1. There should already exists an insertShiftsByFacility function or a function capable of inserting shifts to the database by facility, if not. 
2. Maybe the database are manually updated.
3. Agents created or existing in database before this new feature should retain their ID
4. Assume the custom IDs have 5 serial digits and 3 preceding alphabets representing acronyms of the Facilities

If 1 is the case. Then the insertShiftsByFacility function should be refactored to accommodate

- A new function generateCustomId or assignCustomId: this function will assign custom IDs gotten from the Facilities to their agents.
- Another function, assignCustomIdBy: The work of this fuction is to assign custom IDs to an agent that can be identified to a unique Facility.
- Facilities and Agent Tables in the database should be updated to have a customID column relationship
- The refactored insertShiftsByFacility should be able collect each custom ID 
- refactor getSHiftsByFacility function to accommodate the new feature
- refactor generateReport function to accommodate the new feature


#### Ticket 1 
Create a function to generate custom IDs for agents in a Facility
Details: 
1. Custom IDs should be unique within a facility
2. This function will assign custom IDs gotten from the Facilities to their agents.
3. Facilities and Agent Tables in the database should be updated to have a customID column relationship
time: 4 - 5 hours
User Story: Facilities should be able to create a custom IDs while registering Agents on our platform
Acceptance Criteria: 
1. Agents created prior to the addition of new feature should retain their IDs when printed using generateReport function 
2. All IDs must be unique

#### Ticket 2
Create a function to assignCustomIdBy
Details:
1. Assign Custom ID to Facility 
2. update insertShiftsByFacility function to allow custom IDs to be allocated to agent
time: 2 - 4 hours
User Story: System should assign custom IDs at the server

#### Ticket 3
Refactor getShiftsByFacility to accomodate the new feature
Details:
1. shifts will contain metadata of agents identified by Customs IDs that link them to their respective facilities

time: 2 - 4 hours
User Story: Shifts retrieved with respect to facilities should contain custom IDs of Agents

### Ticket 4
Refactor the generateReport to accomodate the new feature
Details:
1. Report should contain custom IDs of agent
time: 2 - 4 hours
User Story: Shifts retrieved with respect to facilities should contain custom IDs of Agents in PDF format