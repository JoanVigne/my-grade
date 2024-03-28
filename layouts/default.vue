<template>
    <header>
        <nav>

<NuxtLink to="/">Home</NuxtLink>
</nav>
    </header>
  
    <main>
        <slot/>

    </main>
    <footer>
        footer content
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Unde repudiandae distinctio est, harum molestiae dolor vitae quis
             fugit aperiam doloremque quas suscipit 
            veniam nisi. Impedit laborum odio sapiente nesciunt pariatur.</p>
    </footer>
</template>

<style>
header {
    display: flex;
    justify-content: space-around;
}
header nav {
    display: flex;
    justify-content: space-around;
}
</style>