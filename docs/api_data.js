define({ "api": [
  {
    "type": "get",
    "url": "/api/users/:id",
    "title": "",
    "name": "GetUserById",
    "group": "Users",
    "success": {
      "examples": [
        {
          "title": "Success-Response-Example:",
          "content": " HTTP/1.1 200 Success\n{\n\"id\": 1,\n\"username\": \"admin1\",\n\"password\": \"$2a$08$PtMQQMQe7uhe/OVkydT39.9dZK3uLBsNXwuIIcfD5a/jjKXCklPO6\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/users/route.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/api/login",
    "title": "",
    "name": "Login",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "...128",
            "optional": false,
            "field": "username",
            "description": "<p>Username must exist in the database</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "...128",
            "optional": false,
            "field": "password",
            "description": "<p>Password must match in the database</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Example:",
          "content": "HTTP/1.1 200 Success\n{\n\"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluMSIsImlhdCI6MTU3ODQwOTg1OCwiZXhwIjoxNTc4NDk2MjU4fQ.NIWZvQiWC1ux1991ZC58SgRxum9GAWuFByORv-2FKoE\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/users/route.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/api/register",
    "title": "",
    "name": "RegisterUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "...128",
            "optional": false,
            "field": "username",
            "description": "<p>Username must be unique</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "...128",
            "optional": false,
            "field": "password",
            "description": "<p>Cannont be Null</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Example:",
          "content": "HTTP/1.1 201 Created\n {\n \"id\": 2,\n\"username\": \"admin1\",\n\"password\": \"$2a$08$bZjiTjG1taKufx5s6JuJ8.jm63qoM2dXlk22a9dOPW/Bt8xtWLm9m\"\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/users/route.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/api/workouts",
    "title": "",
    "name": "CreateWorkout",
    "group": "Workouts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>cannot be null and must match the current users id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "...128",
            "optional": false,
            "field": "name",
            "description": "<p>Cannot be null</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "...128",
            "optional": false,
            "field": "region",
            "description": "<p>Cannot be null</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "...9",
            "optional": false,
            "field": "date",
            "description": "<p>should be in this format 1/8/2020</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "weight",
            "description": "<p>this Can be null</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "reps",
            "description": "<p>this Cannot be null</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Example:",
          "content": "HTTP/1.1 201 Created\n {\n\"id\": 1,\n\"user_id\": 1,\n\"reps\": 20,\n\"weight\": 50,\n\"date\": \"1/6/2020\",\n\"region\": \"biceps\",\n\"name\": \"curls\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/workout/route.js",
    "groupTitle": "Workouts"
  },
  {
    "type": "get",
    "url": "/users/:id/workouts",
    "title": "",
    "name": "GetWorkoutsByUserId",
    "group": "Workouts",
    "success": {
      "examples": [
        {
          "title": "Success-Response-Example:",
          "content": "HTTP/1.1 200 OK\n[\n{\n \"username\": \"admin1\",\n\"id\": 1,\n\"name\": \"curls\",\n\"region\": \"biceps\",\n\"date\": \"1/6/2020\",\n\"weight\": 50,\n\"reps\": 20\n}\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/workout/route.js",
    "groupTitle": "Workouts"
  }
] });
