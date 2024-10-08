const API_URL = 'http://localhost:8000/api'; // Adjust if necessary

// Function to create a category
async function createCategory(name, description) {
    const response = await fetch(`${API_URL}/category/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI4Mzg4ODQ0LCJpYXQiOjE3MjgzMDI0NDQsImp0aSI6ImU4NDI1Mzc0ODc2ZTQ5Y2U5MWY2ODIxM2ZiNDgxNjU1IiwidXNlcl9pZCI6Nn0.lYUia3JKdO--kzlGVYBJPsIgK3-PnKzyvwAhQDsOZ1s' // Replace with your token
        },
        body: JSON.stringify({ name, description })
    });

    if (!response.ok) {
        throw new Error('Failed to create category');
    }

    return await response.json();
}

// Function to fetch and display categories
async function fetchCategories() {
    const response = await fetch(`${API_URL}/category/`);
    const categories = await response.json();
    const categoryList = document.getElementById('category-list');
    categoryList.innerHTML = '';

    categories.forEach(category => {
        const li = document.createElement('li');
        li.textContent = `${category.name}: ${category.description}`;

        // Update Button
        const updateButton = document.createElement('button');
        updateButton.textContent = 'Update';
        updateButton.onclick = () => showUpdateCategoryForm(category);
        li.appendChild(updateButton);

        // Delete Button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteCategory(category.id);
        li.appendChild(deleteButton);

        categoryList.appendChild(li);
    });
}

// Function to show the update category form
function showUpdateCategoryForm(category) {
    document.getElementById('category-name').value = category.name;
    document.getElementById('category-description').value = category.description;
    document.getElementById('category-form').onsubmit = (e) => {
        e.preventDefault();
        updateCategory(category.id, category.name, category.description);
    };
}

// Function to update a category
async function updateCategory(id, name, description) {
    const response = await fetch(`${API_URL}/category/${id}/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI4Mzg4ODQ0LCJpYXQiOjE3MjgzMDI0NDQsImp0aSI6ImU4NDI1Mzc0ODc2ZTQ5Y2U5MWY2ODIxM2ZiNDgxNjU1IiwidXNlcl9pZCI6Nn0.lYUia3JKdO--kzlGVYBJPsIgK3-PnKzyvwAhQDsOZ1s'
        },
        body: JSON.stringify({ name, description })
    });

    if (!response.ok) {
        throw new Error('Failed to update category');
    }

    fetchCategories(); // Refresh the list
}

// Function to delete a category
async function deleteCategory(id) {
    const response = await fetch(`${API_URL}/category/${id}/`, {
        method: 'DELETE',
        headers: {
            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI4Mzg4ODQ0LCJpYXQiOjE3MjgzMDI0NDQsImp0aSI6ImU4NDI1Mzc0ODc2ZTQ5Y2U5MWY2ODIxM2ZiNDgxNjU1IiwidXNlcl9pZCI6Nn0.lYUia3JKdO--kzlGVYBJPsIgK3-PnKzyvwAhQDsOZ1s'
        }
    });

    if (!response.ok) {
        throw new Error('Failed to delete category');
    }

    fetchCategories(); // Refresh the list
}

// Function to create an employee
async function createEmployee(employeeData) {
    const response = await fetch(`${API_URL}/employee/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI4Mzg4ODQ0LCJpYXQiOjE3MjgzMDI0NDQsImp0aSI6ImU4NDI1Mzc0ODc2ZTQ5Y2U5MWY2ODIxM2ZiNDgxNjU1IiwidXNlcl9pZCI6Nn0.lYUia3JKdO--kzlGVYBJPsIgK3-PnKzyvwAhQDsOZ1s' // Replace with your token
        },
        body: JSON.stringify(employeeData)
    });

    if (!response.ok) {
        throw new Error('Failed to create employee');
    }

    return await response.json();
}

// Function to fetch and display employees
async function fetchEmployees() {
    const response = await fetch(`${API_URL}/employee/`);
    const employees = await response.json();
    const employeeList = document.getElementById('employee-list');
    employeeList.innerHTML = '';

    employees.forEach(employee => {
        const li = document.createElement('li');
        li.textContent = `${employee.fname} ${employee.lname} - ${employee.email}`;

        // Update Button
        const updateButton = document.createElement('button');
        updateButton.textContent = 'Update';
        updateButton.onclick = () => showUpdateEmployeeForm(employee);
        li.appendChild(updateButton);

        // Delete Button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteEmployee(employee.id);
        li.appendChild(deleteButton);

        employeeList.appendChild(li);
    });
}

// Function to show the update employee form
function showUpdateEmployeeForm(employee) {
    document.getElementById('employee-fname').value = employee.fname;
    document.getElementById('employee-lname').value = employee.lname;
    document.getElementById('employee-email').value = employee.email;
    document.getElementById('employee-phone').value = employee.phone;
    document.getElementById('employee-address').value = employee.adress;
    document.getElementById('employee-cin').value = employee.cin;
    document.getElementById('employee-gender').value = employee.gender;
    document.getElementById('employee-salary').value = employee.salary;

    document.getElementById('employee-form').onsubmit = (e) => {
        e.preventDefault();
        updateEmployee(employee.id, {
            fname: employee.fname,
            lname: employee.lname,
            email: employee.email,
            phone: employee.phone,
            adress: employee.adress,
            cin: employee.cin,
            gender: employee.gender,
            salary: employee.salary,
        });
    };
}

// Function to update an employee
async function updateEmployee(id, employeeData) {
    const response = await fetch(`${API_URL}/employee/${id}/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
        },
        body: JSON.stringify(employeeData)
    });

    if (!response.ok) {
        throw new Error('Failed to update employee');
    }

    fetchEmployees(); // Refresh the list
}

// Function to delete an employee
async function deleteEmployee(id) {
    const response = await fetch(`${API_URL}/employee/${id}/`, {
        method: 'DELETE',
        headers: {
            'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
        }
    });

    if (!response.ok) {
        throw new Error('Failed to delete employee');
    }

    fetchEmployees(); // Refresh the list
}

// Event listeners for forms
document.getElementById('category-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('category-name').value;
    const description = document.getElementById('category-description').value;

    try {
        await createCategory(name, description);
        fetchCategories(); // Refresh the list
    } catch (error) {
        console.error(error);
    }
});

document.getElementById('employee-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const employeeData = {
        fname: document.getElementById('employee-fname').value,
        lname: document.getElementById('employee-lname').value,
        email: document.getElementById('employee-email').value,
        phone: document.getElementById('employee-phone').value,
        adress: document.getElementById('employee-address').value,
        cin: document.getElementById('employee-cin').value,
        gender: document.getElementById('employee-gender').value,
        salary: document.getElementById('employee-salary').value,
    };

    try {
        await createEmployee(employeeData);
        fetchEmployees(); // Refresh the list
    } catch (error) {
        console.error(error);
    }
});

// Initial fetch for categories and employees
fetchCategories();
fetchEmployees();