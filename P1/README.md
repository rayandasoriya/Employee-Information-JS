## API Program for Employee Information

## Prerequisites
1. NodeJS

## Setup Instructions
In this program, I have used JSON to store the data and node js to retrieve the data via API endpoints.
To setup this program, perform the following operations:
1. Clone the repository
2. Run `npm install`
3. Run `npm start`. The system weill run on `localhost:3000`
4. To get all the employees information, try:
 ```bash
 curl -i -X GET http://localhost:3000/api/employees/
```

5. To get an the employees information, try:
 ```bash
 curl -i -X GET http://localhost:3000/api/employees/752386127
```

6. To create a new entry, try: 
```bash
curl -i -X POST \                                      
    -H "Content-Type: application/json" \
    -d '{ "fname": "The first", "lname": "Lrem Ipsum 2", "hireDate": "2018-10-11", "role": "CEO" }' \
    http://localhost:3000/api/employees 
```
This will craete a new employee with a random id and will also append two quotes. This is the response:
```    
HTTP/1.1 201 Created
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 380
ETag: W/"17c-En3SDyWfE0M8dQiBAyMg4Ok3PVU"
Date: Thu, 18 Jul 2019 03:13:04 GMT
Connection: keep-alive

{"message":"The post #752386127 has been created","content":{"id":752386127,"fname":"The first","lname":"Lrem Ipsum 2","hireDate":"2018-10-11","role":"CEO","quote1":"I've cried twice in my life. Once when I was seven and hit by a school bus. And then again when I heard that Li'l Sebastian has passed.","quote2":"Why do crabs never give to charity? Because they’re shellfish."}}
```

7. To update an entry, try:
```bash
curl -i -X PUT \
    -H "Content-Type: application/json" \
    -d '{ "fname": "The first", "lname": "Lrem Ipsum 2", "hireDate": "2018-10-11", "role": "CEO" }' \
    http://localhost:3000/api/employees/752386127
```
    
8. To delete an entry, try:
```
curl -i -X DELETE http://localhost:3000/api/employees/752386127
```
