const url = "https://api.github.com/graphql";
const token = import.meta.env.VITE_GITHUB_ACCESS_TOKEN;
const queryGraphQL = `{
    viewer {
        login
    }
}`

const fetchData = async () => {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Authorization": `bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                query: queryGraphQL
            })
        });

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
    } catch (e) {
        console.log(e.message);
    }
}

// Fetch data from Github GraphQL API
fetchData();