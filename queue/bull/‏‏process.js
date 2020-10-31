var Queue = require('bull');

var testQueue = new Queue('test Queue', { redis: { port: 19577, host: `redis-19577.c11.us-east-1-3.ec2.cloud.redislabs.com`, password: '1234' } });
let index = 0
const now = new Date()


// testQueue.process('test Queue', 1000, function (job, done) {
//     setInterval(() => {
//         // console.log(`current job ${job.data.file}`)
//         index++
//         console.log(job.data)

//         if (index == 800) {
//             const now2 = new Date()
//             console.log(now2 - now)

//             process.exit(0)
//         }
//         done();
//     }, 2000)


// });



// testQueue.process('test Queue', 5000, function (job, done) {




//     console.log(job.data)
//     done();



// });


// for (let i = 0; i < 10; i++) {

//     testQueue.add('test Queue', {
//         foo: i
//     });

// }





const start = async () => {
    // await testQueue.empty()
    // await testQueue.clean(5555555)


    console.log("start")
    const jobs = await testQueue.getJob()
    console.log("start2" + jobs)

    const jobs2 = await testQueue.getJobCounts()
    console.log("start3" + JSON.stringify(jobs2))

    const jobs3 = await testQueue.getJobs('wait')
    const jobs3 = await testQueue.getJobs('wait')

    console.log("start4" + jobs3)
    console.log(jobs3)

    process.exit(0)

}


start()