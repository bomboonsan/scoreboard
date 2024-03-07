// // import { MongoClient } from 'mongodb';
// export default function handler(req, res) {

//     res.status(200).json({ name: 'John Doe' })

//     // if (req.method === 'POST') {
//     //     const { data } = req.body;
//     //     const { name, score } = data;

//     //     if (!name || !score) {
//     //     return res.status(400).json({ message: 'Name and score are required!' });
//     //     }

//     //     const client = new MongoClient(process.env.MONGODB_URI, {
//     //     useNewUrlParser: true,
//     //     useUnifiedTopology: true,
//     //     });

//     //     try {
//     //     await client.connect();
//     //     const database = client.db('score-game-4'); // Choose a name for your database

//     //     const collection = database.collection('score-game-4'); // Choose a name for your collection

//     //     await collection.insertOne({ name, score });

//     //     res.status(201).json({ message: 'Data saved successfully!' });
//     //     } catch (error) {
//     //     res.status(500).json({ message: 'Something went wrong!' });
//     //     } finally {
//     //     await client.close();
//     //     }
//     // } else {
//     //     res.status(405).json({ message: 'Method not allowed!' });
//     // }
// }

import { NextResponse } from 'next/server'

import { MongoClient } from 'mongodb';
export async function POST(request) {
    
    try {

        const { name , score } = await request.json();

        if (!name || !score) {
        return res.status(400).json({ message: 'Name and score are required!' });
        }

        const client = new MongoClient(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        });
        
        await client.connect();
        console.log('connect successfully!');
        const database = client.db('score-game-5'); // Choose a name for your database

        const collection = database.collection('score-game-5'); // Choose a name for your collection

        await collection.insertOne({ name, score });
        console.log('insertOne successfully!');
        // res.status(201).json({ message: 'Data saved successfully!' });

        return new Response(`Data saved successfully!`);

    } catch (error) {
        console.error(error);   
    }

}


export async function GET(request) {

    try {
        const client = new MongoClient(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        });

        await client.connect();
        console.log('connect successfully!');
        const database = client.db('score-game-5'); // Choose a name for your database

        const collection = database.collection('score-game-5'); // Choose a name for your collection

        const result = await collection.find({}).toArray();
        console.log('find successfully!');
        // res.status(201).json({ message: 'Data saved successfully!' });
        return new Response(JSON.stringify(result));

    } catch (error) {
        console.error(error);   
    }
}