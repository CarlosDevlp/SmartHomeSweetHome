module.exports = {
    apps : [
        {
            name: "backend",
            script: "./backend/main-server/dist/main.js", 
            env: {
                PRODUCTION: true,
                SERVER_PORT: 5000,
                MONGO_DB_URI:"",
                NODE_ENV:"",
                PUBLIC_IMAGE_URI:"",
            } 
        },
        {
            name: "frontend",
            script: "./frontend/server.js",
            env:{
                SERVER_PORT: 4000,
                APP_ID:'',
            }
        }
    ]
}
