import client from "@/utils/database";
// import { NextResponse } from "next/server";

console.log("hereeeeeeee");
// client.connect()
// .then(() => console.log('Connected to PostgreSQL'))
// .catch(err => console.error('Connection error', err));

export async function POST(req) {
  try {
        const data = await req.json();
  // await connectToDB()
  const name = data.name;
  const email = data.email;
  console.log("back data is ",data);

  const query = `insert into users(name,email) values($1,$2)`;
  const values = [name, email];
  await client.query(query, values);

  return new Response(JSON.stringify("ok"), { status: 200 });
} catch (error) {
  console.log("errrrrrrrr",error)
  return new Response(JSON.stringify("f"), { status: 200 });
  }
}

// export async function POST(req){

//     try {
//         // console.log("req is ",req.body)
//         // console.log("res is ",res)
//         const data = await req.json();
//         console.log("data is ",data)

//         // console.log("here", name)
//         // const email = req.body.email;
//         // const password = req.body.password;

//         // const isthere = await client.query(
//           //   `select count(*) from users where email='${email}'`
//           // );

//           // if (parseInt(isthere.rows[0].count) > 0) {
//             //   res.send("Email already registered")
//             // }
//             // else {

//               // const query = `
//               // insert into users(name,email) values($1,$2)`;
//               // const values = [name, email];
//               // await client.query(query, values);

//               console.log("wow wow ")
//               return new Response(JSON.stringify("done"), { status: 200 })
//         //   res.render("home",{name});
//         // }
//       } catch (err) {
//         // res.send(err)
//         console.log("FFFFFFFFFFFFFFFFFF",err)
//       }
// }
