// Initialize the Async Function
async function fetchUserData() {
    // Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Select the Data Container Element
    const dataContainer = document.getElementById("api-data");

    try {
        // Fetch Data Using try-catch
        const response = await fetch(apiUrl);
        const users = await response.json();

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Clear the Loading Message
        dataContainer.innerHTML = ''; // Clear existing content

        // Create and Append User List
        const userList = document.createElement('ul');

        // Loop through users and create <li> for each user
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name; // Set the text content to the user’s name
            userList.appendChild(listItem); // Append the <li> to the <ul>
        });

        // Append userList to dataContainer
        dataContainer.appendChild(userList);

    } catch (error) {
        // Error Handling
        dataContainer.innerHTML = ''; // Clear existing content
        dataContainer.textContent = 'Failed to load user data.'; // Set error message
        console.error('Error fetching data:', error);
    }
}

// Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);


// async function fetchUserData() {
//     const apiUrl = 'https://jsonplaceholder.typicode.com/users';
//     const dataContainer = document.getElementById("api-data");
   
//         try {
//             // const apiUrl = 'https://jsonplaceholder.typicode.com/todos';
//             const response = await fetch(apiUrl);
//             const users = await response.json();
//             dataContainer.innerHTML = '';
//             const userList = document.createElement('ul');
//             users.forEach(user => {
//                 const listItem = document.createElement('li');
//                 listItem.innerHTML = user.name;
//                 userList.appendChild(listItem);
//             });

//         }catch (error) {
//                 dataContainer.innerHTML = '';
//                 dataContainer.innerHTML = 'Failed to load user data';
//                 console.log("Error fetching data");
      
//         }
//     }

//     document.addEventListener('DOMContentLoaded', fetchUserData);


