<script>
    async function login(event) {
        const form = event.target;
        const data = new FormData(form);
        const value = Object.fromEntries(data.entries());

        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(value)
        });

        if (response.ok) {
            const { token } = await response.json();
            localStorage.setItem('token', token);
            window.location.href = '/';
        } else {
            alert('Invalid credentials');
        }
    }
</script>

<svelte:head>
    <title>Login</title>
    <meta name="description" content="Login page">
</svelte:head>

<div class="container">
    <h1>Login</h1>

    <form on:submit|preventDefault={login}>

    </form>
</div>