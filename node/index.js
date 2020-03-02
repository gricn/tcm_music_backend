const { Client } = require('pg');
const client = new Client({
    user: "postgres",
    password: "postgres",
    host: "db",
    port: 5432,
    database: "postgres",
})

execute()

async function execute() {
    try {
        await client.connect()
        console.log("connect successfully")
        await client.query("create table ")
        const results = await client.query("select * from test")
        console.table(results.rows)
        await client.end()
        console.log("Client disconnected successfully.")
    } catch (e){
        console.log(`Wrong things happened:\n\t${e}`)
    }
    
}