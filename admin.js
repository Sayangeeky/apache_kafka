const {kafka} = require('./client')

async function init(){
    const admin = kafka.admin()
    console.log("Admin Connecting");
    admin.connect()
    console.log("Admin Connected");

    console.log("Creating topic [rider-updates]");
    await admin.createTopics({
        topics: [{
            topic: "rider-updates",
            numPartitions: 2,

        },
    ]
    })
    console.log("Topic Created Success");

    await admin.disconnect()
}

init()