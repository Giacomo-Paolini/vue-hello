const { createApp } = Vue

createApp ({
    data() {
        return {
            message: "Hello Vue!",
            urlIMG: "https://picsum.photos/400/400",
        }
    }
}).mount('#app')