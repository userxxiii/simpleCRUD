<--- Task Objective ---> 
To create a web application that allows bank employee to create and manage a simple "bank account". 
Assume that the applicant is only Malaysian.1. front-end development: react2. backend development: 
java spring boot3. database: any

requirement:bank account model (fields are not limited to below)    
- id: text        
- mandatory  = yes    
- customerName        
- mandatory  = yes        
- max length = 20    
- idno: text        
- format     = 021225-12-1234        
- mandatory  = yes    
- gender: text, [male, female]        
- mandatory  = yes        
- disabled     = yes    
- birthday: date        
- mandatory  = yes        
- disabled     = yes    
- age: number
- mandatory  = yes        
- disabled     = yes    
- createdAt: date   (NOT DONE)     
- mandatory  = yes    
- updatedAt: date      (NOT DONE)  
- mandatory  = no    
- balance: number, must be positive        
- mandatory  = yes    
- openDate: number, must be positive        
- mandatory  = yes
- status: text, [active, deactived, terminated]        
- mandatory     = yes    
- accountType: text, [saving, current, investment]        
- mandatory  = yes    
- withdrawalLimit: number, must be positive       
 - mandatory  = yes    
 - createdBy: text (t_user)  (NOT DONE)     
 - mandatory  = yes    
 - createdAt: date (NOT DONE)       
 - mandatory  = yes    
 - updatedAt: date   (NOT DONE)     
 - mandatory  = no

special functional requirement:
1. gender populated based on the last digit of idno. if last digit of idno is even number, 
populate "female" for gender and vice versa. (NOT DONE)
2. birthday populated based on first six digits of idno. (NOT DONE)
3. age will be populated based on birthday (NOT DONE)

1. front end:    
1.1 use react to create UI (CRUD) for loan application   
 1.2 perform client-side validation on each fields    
 1.3 send request to REST API for CRUD    
 1.4 passing a http header with name "x-key" for server-side validation (NOT DONE)
 1.5 display response message.

 2. backend:    
 2.1 use java spring boot to create CRUD RESTful API    
 2.2 perform server-side validation on each fields (NOT DONE)
 2.3 perform http header validation on "x-key". if "x-key" is not equal to "123", then return error "Invalid key". (NOT DONE)   
 2.4 save bank account to database

 3. database:    
 3.1 tables:         
 3.1.1 t_account. refer bank account model  (NOT DONE)    
 3.1.2 t_user (id, username, email) just only three fields (NOT DONE)


 <--- INSTRUCTION TO RUN ---> 
 1. Open 'react-frontend' on VS code, and 'npm start' 
 2. Open 'BackendSpringbootApplication', and run. 
 