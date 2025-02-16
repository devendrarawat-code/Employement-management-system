const employees = [
  {
        "id": 1,
        "first_name": "Rajesh",
        "email": "employee1@example.com",
        "password": "123",
        "tasks_count": {
          "total": 4,
          "active": 2,
          "new_task": 1,
          "completed": 1,
          "failed": 0
        },
        "tasks": [
          {
            "task_id": 101,
            "task_title": "Complete Monthly Report",
            "task_description": "Prepare and submit the monthly performance report.",
            "task_date": "2025-02-10",
            "category": "Reporting",
            "active": true,
            "new_task": true,
            "completed": false,
            "failed": false
          },
          {
            "task_id": 102,
            "task_title": "Update Client Database",
            "task_description": "Ensure all client information is updated and accurate.",
            "task_date": "2025-02-15",
            "category": "Database Management",
            "active": false,
            "new_task": false,
            "completed": true,
            "failed": false
          },
          {
            "task_id": 103,
            "task_title": "Attend Team Meeting",
            "task_description": "Join the team meeting to discuss project updates and goals.",
            "task_date": "2025-02-05",
            "category": "Meetings",
            "active": false,
            "new_task": false,
            "completed": true,
            "failed": false
          },
          {
            "task_id": 104,
            "task_title": "Client Follow-Up",
            "task_description": "Follow up with the client regarding the previous meeting outcomes.",
            "task_date": "2025-02-12",
            "category": "Communication",
            "active": true,
            "new_task": true,
            "completed": false,
            "failed": false
          }
        ]
      },
      {
        "id": 2,
        "first_name": "Priya",
        "email": "employee2@example.com",
        "password": "123",
        "tasks_count": {
          "total": 4,
          "active": 3,
          "new_task": 1,
          "completed": 1,
          "failed": 0
        },
        "tasks": [
          {
            "task_id": 201,
            "task_title": "Design Website Mockups",
            "task_description": "Create the initial design mockups for the new client website.",
            "task_date": "2025-02-08",
            "category": "Design",
            "active": true,
            "new_task": true,
            "completed": false,
            "failed": false
          },
          {
            "task_id": 202,
            "task_title": "Client Call",
            "task_description": "Call the client to discuss project feedback.",
            "task_date": "2025-02-06",
            "category": "Communication",
            "active": false,
            "new_task": false,
            "completed": true,
            "failed": false
          },
          {
            "task_id": 203,
            "task_title": "Conduct User Testing",
            "task_description": "Oversee user testing sessions for the product.",
            "task_date": "2025-02-12",
            "category": "Testing",
            "active": true,
            "new_task": true,
            "completed": false,
            "failed": false
          },
          {
            "task_id": 204,
            "task_title": "Update Client Website",
            "task_description": "Implement feedback and update the client website accordingly.",
            "task_date": "2025-02-18",
            "category": "Development",
            "active": true,
            "new_task": false,
            "completed": false,
            "failed": true
          }
        ]
      },
      {
        "id": 3,
        "first_name": "Amit",
        "email": "employee3@example.com",
        "password": "123",
        "tasks_count": {
          "total": 4,
          "active": 3,
          "new_task": 2,
          "completed": 1,
          "failed": 0
        },
        "tasks": [
          {
            "task_id": 301,
            "task_title": "Fix Bug in Code",
            "task_description": "Fix the critical bug causing application crashes.",
            "task_date": "2025-02-04",
            "category": "Development",
            "active": true,
            "new_task": true,
            "completed": false,
            "failed": false
          },
          {
            "task_id": 302,
            "task_title": "Code Review",
            "task_description": "Review code for the new feature implementation.",
            "task_date": "2025-02-07",
            "category": "Development",
            "active": false,
            "new_task": false,
            "completed": true,
            "failed": false
          },
          {
            "task_id": 303,
            "task_title": "Update Software Documentation",
            "task_description": "Update the user documentation with the new feature details.",
            "task_date": "2025-02-14",
            "category": "Documentation",
            "active": true,
            "new_task": true,
            "completed": false,
            "failed": false
          },
          {
            "task_id": 304,
            "task_title": "Test New Feature",
            "task_description": "Test the newly implemented feature to ensure it's working properly.",
            "task_date": "2025-02-18",
            "category": "Testing",
            "active": false,
            "new_task": true,
            "completed": false,
            "failed": false
          }
        ]
      },
      {
        "id": 4,
        "first_name": "Sita",
        "email": "employee4@example.com",
        "password": "123",
        "tasks_count": {
          "total": 4,
          "active": 4,
          "new_task": 4,
          "completed": 0,
          "failed": 0
        },
        "tasks": [
          {
            "task_id": 401,
            "task_title": "Prepare Training Materials",
            "task_description": "Create materials for the upcoming employee training session.",
            "task_date": "2025-02-20",
            "category": "Training",
            "active": true,
            "new_task": true,
            "completed": false,
            "failed": false
          },
          {
            "task_id": 402,
            "task_title": "Host Q&A Session",
            "task_description": "Organize and host a Q&A session for employees.",
            "task_date": "2025-02-25",
            "category": "Meetings",
            "active": true,
            "new_task": true,
            "completed": false,
            "failed": false
          },
          {
            "task_id": 403,
            "task_title": "Compile Employee Feedback",
            "task_description": "Collect and analyze feedback from employees regarding the training.",
            "task_date": "2025-02-28",
            "category": "Feedback",
            "active": true,
            "new_task": true,
            "completed": false,
            "failed": false
          },
          {
            "task_id": 404,
            "task_title": "Schedule Follow-Up Meeting",
            "task_description": "Set up a follow-up meeting to discuss improvements after the training.",
            "task_date": "2025-03-05",
            "category": "Meetings",
            "active": true,
            "new_task": true,
            "completed": false,
            "failed": false
          }
        ]
      },
      {
        "id": 5,
        "first_name": "Neha",
        "email": "employee5@example.com",
        "password": "123",
        "tasks_count": {
          "total": 4,
          "active": 3,
          "new_task": 2,
          "completed": 1,
          "failed": 0
        },
        "tasks": [
          {
            "task_id": 501,
            "task_title": "Research New Technologies",
            "task_description": "Research new emerging technologies for the next project.",
            "task_date": "2025-02-10",
            "category": "Research",
            "active": true,
            "new_task": true,
            "completed": false,
            "failed": false
          },
          {
            "task_id": 502,
            "task_title": "Document API Endpoints",
            "task_description": "Document the new API endpoints for internal use.",
            "task_date": "2025-02-18",
            "category": "Documentation",
            "active": false,
            "new_task": false,
            "completed": true,
            "failed": false
          },
          {
            "task_id": 503,
            "task_title": "Implement New Feature",
            "task_description": "Develop and implement the new feature requested by the client.",
            "task_date": "2025-02-15",
            "category": "Development",
            "active": true,
            "new_task": true,
            "completed": false,
            "failed": false
          },
          {
            "task_id": 504,
            "task_title": "Code Optimization",
            "task_description": "Optimize existing code for better performance.",
            "task_date": "2025-02-22",
            "category": "Development",
            "active": true,
            "new_task": true,
            "completed": false,
            "failed": false
          }
        ]
      }
    ]

  

const admin = [
  {
    "id": 1,
    "first_name": "Anil",
    "email": "admin@me.com",
    "password": "123"
  }
];

export const setLocalStorage=()=>  {
    localStorage.setItem('employee',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage=()=>  {
const employees=JSON.parse(localStorage.getItem('employee'))
const admin=JSON.parse(localStorage.getItem('admin'))
return{employees,admin}
}