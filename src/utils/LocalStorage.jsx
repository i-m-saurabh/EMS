const employees = [
    {
        "Id": 1,
        "firstName": "Rahul",
        "email": "e@e.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Prepare quarterly report",
                "taskDescription": "Compile financial data for the quarterly review.",
                "taskDate": "2024-10-21",
                "category": "Finance"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Update client database",
                "taskDescription": "Ensure all client details are up-to-date.",
                "taskDate": "2024-10-10",
                "category": "Database"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Team meeting",
                "taskDescription": "Weekly status meeting with the project team.",
                "taskDate": "2024-10-22",
                "category": "Meetings"
            }
        ],
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "Id": 2,
        "firstName": "Priya",
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Design homepage layout",
                "taskDescription": "Create a draft for the new homepage design.",
                "taskDate": "2024-10-23",
                "category": "Design"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Finalize logo design",
                "taskDescription": "Submit final version of the new logo.",
                "taskDate": "2024-09-30",
                "category": "Design"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Client proposal submission",
                "taskDescription": "Submit the new project proposal to the client.",
                "taskDate": "2024-10-15",
                "category": "Sales"
            }
        ],
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 1
        }
    },
    {
        "Id": 3,
        "firstName": "Amit",
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Research market trends",
                "taskDescription": "Gather information on the latest industry trends.",
                "taskDate": "2024-10-24",
                "category": "Research"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Review competitor analysis",
                "taskDescription": "Go over the recent competitor analysis report.",
                "taskDate": "2024-10-18",
                "category": "Research"
            }
        ],
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 0,
            "failed": 0
        }
    },
    {
        "Id": 4,
        "firstName": "Anjali",
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Fix server issues",
                "taskDescription": "Investigate and fix any ongoing server problems.",
                "taskDate": "2024-10-21",
                "category": "IT Support"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Update security patches",
                "taskDescription": "Install the latest security patches on all servers.",
                "taskDate": "2024-10-19",
                "category": "IT Support"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Database backup",
                "taskDescription": "Backup the company database to external storage.",
                "taskDate": "2024-10-15",
                "category": "Database"
            }
        ],
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "Id": 5,
        "firstName": "Neha",
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Coordinate with marketing team",
                "taskDescription": "Plan new campaign strategies with the marketing team.",
                "taskDate": "2024-10-21",
                "category": "Marketing"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Review social media analytics",
                "taskDescription": "Analyze the latest data from the social media campaigns.",
                "taskDate": "2024-10-20",
                "category": "Marketing"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Launch email campaign",
                "taskDescription": "Send out the scheduled email campaign to clients.",
                "taskDate": "2024-10-10",
                "category": "Marketing"
            }
        ],
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    }
];

  

const admin = [
    {
        "Id": 1,
        "email": "admin@me.com",
        "password": "123",
        "firstName": "Saurabh"
    }
]

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
    
    return {employees, admin};
    
}
  
  