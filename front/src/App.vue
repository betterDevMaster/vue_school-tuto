<template>
    <div id="app">
        <nav class="navbar navbar-expand navbar-dark bg-dark">
            <router-link to="/" class="navbar-brand">Add Student</router-link>
            <div class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link to="/students" class="nav-link">Students</router-link>
                </li>
                <!-- <li class="nav-item">
                    <router-link to="/student" class="nav-link">Student</router-link>
                </li> -->
                <li class="nav-item">
                    <router-link to="/addCourse" class="nav-link">Add Course</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/courses" class="nav-link">Courses</router-link>
                </li>
            </div>
        </nav>

        <div class="container mt-3">
            <router-view />
        </div>
    </div>
</template>

<script>
export default {
    name: "app",
};
</script>

<style lang="scss">
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
}

::-webkit-scrollbar {
    width: 10px;
    background-color: #f5f5f5;
}

::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-image: -webkit-gradient(
        linear,
        left bottom,
        left top,
        color-stop(0.44, rgb(122, 153, 217)),
        color-stop(0.72, rgb(73, 125, 189)),
        color-stop(0.86, rgb(28, 58, 148))
    );
}
</style>
