[Reference 1](https://maharatech.gov.eg/mod/hvp/view.php?id=7149&forceview=1)

[Reference 2](https://www.opentextbooks.org.hk/ditatopic/25280)



One-to-Many Relationships: The primary key from the "one" side is added as a foreign key to the "many" side (e.g., department ID added to the employee table).



Recursive Relationships: Self-referencing relationships (e.g., an employee supervising another) are handled by adding a foreign key referencing the same table.



Employee-Dependent Relationship: The employee’s primary key is used as a foreign key in the dependents' table to show the association.



Many-to-Many Relationships: A new intersection table is created that includes the primary keys of both related entities as foreign keys.



One-to-One Relationships: Handled based on participation constraints—foreign key is placed in the entity with total participation or where it minimizes nulls.



/////////////////////////////////////////////////////////////////////////////////////////////////////



**Task 1**



musician(musician\_id PK, name, phone\_number, street, city)  

album(album\_id PK, title, copyright\_date, musician\_id FK)  

instrument(instrument\_name PK, musical\_key)  

song(title PK, author, album\_id FK)  

perform(musician\_id PK/FK, song\_title PK/FK)  

play(musician\_id PK/FK, instrument\_name PK/FK)







**Task 2**



sales\_office(office\_number PK, location)  

employee(employee\_id PK, employee\_name, office\_number FK)  

property(property\_id PK, address, city, state, zip\_code, office\_number FK)  

owner(owner\_id PK, owner\_name)  

manage(employee\_id PK/FK, office number PK/FK)  

own(owner\_id PK/FK, property\_id PK/FK, percent\_owned)







**Task 3**

ward(ward\_id PK, name)

patient(patient\_id PK, name, date\_of\_birth, ward\_id FK)  

consultant(consultant\_id PK, name)  

nurse(nurse\_id PK, name, number, address, ward\_id FK)  

drug(code\_number PK, recommended\_dosage)  

drug\_brand(code\_number PK/FK, brand\_name)  

assign(consultant\_id PK/FK, patient\_id PK/FK)  

examine(consultant\_id PK/FK, patient\_id PK/FK)  

supervise(nurse\_id PK/FK, ward\_id PK/FK)  

give(nurse\_id PK/FK, patient\_id PK/FK, code\_number PK/FK, certain\_date, dosage, time)





**Task 4**

airline(airlineId PK, name, address, contact\_person\_name)

telephone\_numbers(airlineId PK/FK, telephone\_number PK)

employee(employeeId PK, name, address, birthday\_day, birthday\_month, birthday\_year, gender, position, qualifications, airline\_id FK)  

aircraft(aircraftId PK, capacity, model, airline\_id FK)  

route(routeId PK, origin, destination, distance, classification)  

assign(aircraft\_id PK/FK, route\_id PK/FK, no\_passengers, price\_per\_passenger, departure\_datetime, arrival\_datetime, spent\_time)  

crew(crew\_id PK, major\_pilot, assistant\_pilot, hostess1, hostess2, aircraft\_id FK)  

transaction(transaction\_id PK, date, description, amount, airline\_id FK)





